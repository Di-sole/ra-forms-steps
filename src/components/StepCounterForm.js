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
				<label htmlFor="date">Дата</label>
				<input type="date" id="date" name="date" value={form.date} onChange={handleChange} required />
			</div>
			<div className="form-elem">
				<label htmlFor="distance">Пройдено км</label>
				<input type="number" id="distance" name="distance" step="0.1" value={form.distance} onChange={handleChange} required />
			</div>
			<button className="btn add-btn" type="submit">Ok</button>
		</form>
	)
}


StepCounterForm.propTypes = {
	onAdd: PropTypes.func.isRequired
}

export default StepCounterForm;