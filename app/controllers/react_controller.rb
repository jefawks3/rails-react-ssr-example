class ReactController < ApplicationController
  def index
    json_output = if params[:cache]
                    cache_key = File.join(request.path_info, RailsReactSSR::WebpackerUtils.hashed_bundle_name!('server.js')).to_sym
                    Rails.logger.info "Cache key: #{cache_key}"
                    Rails.cache.fetch cache_key, expires_in: 30.seconds do
                      Rails.logger.info "Updating cache"
                      RailsReactSSR::ServerRunner.exec! 'server.js', props: {location: request.fullpath}
                    end
                  else
                    RailsReactSSR::ServerRunner.exec! 'server.js', props: {location: request.fullpath}
                  end

    @react = ActiveSupport::JSON.decode json_output

    if @react['redirect']
      redirect_to @react['redirect'], status: @react['status']
    end
  end
end
