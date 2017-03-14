class AppointmentsController < ApplicationController
  def index
    respond_to do |format|
       format.json { render json: Appointment.order(time: :asc) }

       format.html do
         @appointments = Appointment.order(time: :asc)
         @appointment = Appointment.new
       end
    end

  end

  def create
    Appointment.create(appointment_params)
    render json: Appointment.order(time: :asc)
  end

  def destroy
    Appointment.find(params[:id]).try(:destroy)
    render json: Appointment.order(time: :asc)
  end

  private
    def appointment_params
      params.require(:appointment).permit(:title, :time)
    end
end
