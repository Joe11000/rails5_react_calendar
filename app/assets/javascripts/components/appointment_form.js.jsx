var AppointmentForm = React.createClass({

  handleChange: function(e){
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj)
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.props.onFormSubmit();
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="title" placeholder={"Title"}
                 value={this.props.title}
                 onChange={this.handleChange} />

          <input name="time" placeholder='Date and Time'
                 value={this.props.time}
                 onChange={this.handleChange}/>

          <input type="submit" value="Make Appointment" />
        </form>
      </div>
    )
  }
});
