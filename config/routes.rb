Rails.application.routes.draw do
  get 'appointments/index'

  resources :appointments, only: [:index, :create, :destroy]
  root 'appointments#index'
end
