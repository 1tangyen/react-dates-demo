import React, { useState } from 'react';
import moment from 'moment';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

function Datepicker() {
	const [ startDate, setStartDate ] = useState(null);
	const [ endDate, setEndDate ] = useState(null);
	const [ focusedInput, setFocusedInput ] = useState(null);

	const startDateInput = moment(startDate).format('MMM DD YYYY');
	const endDateInput = moment(endDate).format('MMM DD YYYY');

	return (
		<div>
			<h4>Selected start date: {startDate ? startDateInput : 'Not Selcted'}</h4>
			<h4>Selected end date: {endDate ? endDateInput : 'Not Selcted'}</h4>

			<div>
				<DateRangePicker
					startDate={startDate}
					startDateId="your_unique_start_date_id"
					endDate={endDate}
					endDateId="your_unique_end_date_id"
					onDatesChange={({ startDate, endDate }) => {
						setStartDate(startDate);
						setEndDate(endDate);
					}}
					focusedInput={focusedInput}
					onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
					isOutsideRange={() => false}
					displayFormat="MM/DD/yyyy"
				/>
			</div>
		</div>
	);
}

export default Datepicker;
