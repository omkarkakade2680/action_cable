Rails.application.routes.draw do
  post 'messages', to: 'messages#create'
  # devise_for :users

  devise_for :users do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root 'pages#home'
  # root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
