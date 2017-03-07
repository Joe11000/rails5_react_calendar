class AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.order(time: :desc)
    @appointment = Appointment.new
  end

  def create
    Appointment.create(appointment_params)
    @appointments = Appointment.order(time: :desc)
  end

  private
    def appointment_params
      params.require(:appointment).permit(:title, :time)
    end
end
