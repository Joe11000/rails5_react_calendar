Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  get 'appointments/index'

  resources :appointments, only: [:index, :create, :destroy]
  root 'appointments#index'
end
