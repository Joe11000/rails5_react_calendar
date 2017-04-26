var AppointmentsList = React.createClass({
  render: function() {
    var that = this

    return (
      <div>
        <fieldset>
          <legend>({this.props.appointments.length}) Future Appointments</legend>

          <AppointmentsFilter min_time={this.props.min_time}
                              max_time={this.props.max_time}
                              handleDatetimeFilterUpdate={this.props.handleDatetimeFilterUpdate}/>


          <div className='appointments-list' id='appointments-list'>
          {that.props.appointments.map(function(appointment) {
            return (
              <Appointment appointment={appointment}
                           onAppointmentDelete={that.props.onAppointmentDelete}
                           key={appointment.id}
                           min_time={that.props.min_time}
                           max_time={that.props.max_time} />
            )
          })}
          </div>
        </fieldset>

      </div>
    )
  }
});
