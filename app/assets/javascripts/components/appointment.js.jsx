var Appointment = React.createClass({
  handleAppointmentDelete: function(e){
    e.preventDefault();
    var appointment_id = e.target.getAttribute('data-appointment-id')
    this.props.onAppointmentDelete(appointment_id)
  },

  shouldDisplayAppointment: function(){
    return (
             (
               this.props.min_time === undefined ||
               this.props.min_time === '' ||
               this.props.min_time.isSameOrBefore(this.props.appointment.time)
             )
             &&
             (
               this.props.max_time === undefined ||
               this.props.max_time === '' ||
               moment(this.props.appointment.time).isSameOrBefore(this.props.max_time)
             )
           )
  },

  render: function() {
    var that = this;
    var addStarIfAppointmentIsToday = function(){
      return ( moment(that.props.appointment.time).isSame(moment(), 'day') ? '⭐' : '' )
    }

    return (
      <div className={ "appointment " + (this.shouldDisplayAppointment() ? '' : 'hidden') }>
        { addStarIfAppointmentIsToday() }
        <p className='appointment-title'>{this.props.appointment.title}</p>
        <p className='appointment-time'>{ formatDate(this.props.appointment.time) }</p>
        <button type="button" className="close" data-appointment-id={this.props.appointment.id}
                onClick={this.handleAppointmentDelete}>X</button>
      </div>
    )
  }
});
