import { useState } from "react";
import StepCounterForm from "./StepCounterForm";
import StepCounterTable from "./StepCounterTable";

function StepCounter() {
	const [walks, setWalks] = useState([]);

	const handleAdd = walk => {
		const newWalks = [...walks];
		const sameDate = newWalks.find(o => o.date === walk.date)

		if (sameDate) {
			sameDate.distance += walk.distance
		} else {
			newWalks.push(walk);
			newWalks.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
		}
		
		setWalks(newWalks);
	}

	const handleDelete = id => {
			setWalks(prevWalks => prevWalks.filter(o => o.id !== id));
		}

	return (
		<div className="walk-counter">
			<StepCounterForm onAdd={handleAdd} />
			<StepCounterTable walks={walks} onDelete={handleDelete} />
		</div>
	)
}

export default StepCounter;