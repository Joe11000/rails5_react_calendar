Rails.application.routes.draw do
  get 'appointments/index'

  resources :appointments, only: [:index, :create]
  root 'appointments#index'
end
