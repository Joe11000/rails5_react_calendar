var AppointmentsList = React.createClass({
  render: function() {
    var that = this
    return (
      <div data-id="AppointmentsList">
        {this.props.appointments.map(function(appointment) {
          return (
            <Appointment appointment={appointment} onAppointmentDelete={that.props.onAppointmentDelete} key={appointment.id}  />
          )
        })}
      </div>
    )
  }
});
