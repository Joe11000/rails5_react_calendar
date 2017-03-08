var Appointment = React.createClass({

  handleAppointmentDelete: function(e){
    e.preventDefault();
    var appointment_id = e.target.getAttribute('data-appointment-id')
    this.props.onAppointmentDelete(appointment_id)
  },

  render: function() {
      return (
        <div>
            <h3>{this.props.appointment.title}</h3>
            <p>{this.props.appointment.time}</p>
            <button type="button" data-appointment-id={this.props.appointment.id} onClick={this.handleAppointmentDelete}>Cancel</button>
        </div>
    )
  }
});
