Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  get 'channel', to: 'channel#show'
  post 'channel', to: 'channel#verify'
  root to: 'home#index'
end
