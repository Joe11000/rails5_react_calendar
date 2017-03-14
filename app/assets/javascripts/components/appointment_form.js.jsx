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

  setTime: function(e){
    this.props.onUserInput({ time: e.toISOString() });
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Make Appointment</legend>

            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input id='title' name="title" placeholder={"Title"}
                   value={this.props.title}
                   onChange={this.handleChange} />
            </div>

            <div className='form-group'>
              <label htmlFor="time">Time</label>
              <Datetime defaultValue={moment()} onChange={this.setTime} open={true} input={false} />
            </div>

            <input type="submit" value="create" />
          </fieldset>

        </form>
      </div>
    )
  }
});
