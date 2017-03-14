var AppointmentsFilter = React.createClass({

  handleMinTimeFilterUpdate: function(moment){
    this.handleDatetimeFilterUpdate({ min_time: moment })
  },

  handleMaxTimeFilterUpdate: function(moment){
    this.handleDatetimeFilterUpdate({ max_time: moment })
  },

  handleDatetimeFilterUpdate: function(update_datetime_hash){
    this.props.handleDatetimeFilterUpdate(update_datetime_hash)
  },

  render: function() {
    return (
      <div>
        <fieldset>
          <legend>Filter Search</legend>

          <form id='filter-search'>
            <div className='form-group'>
              <label htmlFor='filter-from'>From</label>
              <Datetime id='filter-from' inputProps={ {name: 'filter-from'} } defaultValue={this.props.min_time} onChange={this.handleMinTimeFilterUpdate} open={false} input={true} />
            </div>

            <div className='form-group'>
              <label htmlFor='filter-to'>To</label>
              <Datetime id='filter-to' inputProps={ {name: 'filter-to'} } defaultValue={this.props.max_time} onChange={this.handleMaxTimeFilterUpdate} open={false} input={true} />
            </div>
          </form>
        </fieldset>
      </div>


    )
  }
});
