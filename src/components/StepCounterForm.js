import { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

function StepCounterForm({ onAdd }) {
	const [form, setForm] = useState({date: '', distance: ''});

	const handleChange = ({target}) => {
		const name = target.name;
		const value = target.value;
		setForm(prevForm => ({...prevForm, [name]: value}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const walk = {
			id: shortid.generate(),
			date: form.date,
			distance: Number(form.distance)
		}

		onAdd(walk);
		setForm({date: '', distance: ''});
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form-elem">
				<label className="input-description" htmlFor="date">Дата</label>
				<input className="form-input date-input" type="date" id="date" name="date" value={form.date} onChange={handleChange} required />
			</div>
			<div className="form-elem">
				<label className="input-description" htmlFor="distance">Пройдено км</label>
				<input className="form-input" type="number" id="distance" name="distance" step="0.1" value={form.distance} onChange={handleChange} required />
			</div>
			<button className="btn add-btn" type="submit">OK</button>
		</form>
	)
}


StepCounterForm.propTypes = {
	onAdd: PropTypes.func.isRequired
}

export default StepCounterForm;