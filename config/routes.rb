Rails.application.routes.draw do
  root 'react#index'

  ## Routes here will take precedence

  match '*path', to: 'react#index', via: :get
end
