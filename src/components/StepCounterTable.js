import PropTypes from "prop-types";

function StepCounterTable({ walks, onDelete }) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Дата</th>
					<th>Пройдено км</th>
					<th>Действия</th>
				</tr>
			</thead>
			<tbody>
				{walks.map(o => 
					<tr key={o.id}>
						<td>{new Date(o.date).toLocaleDateString()}</td>
						<td>{o.distance}</td>
						<td><button className="btn delete-btn" onClick={() => onDelete(o.id)}>x</button></td>
					</tr>)}
			</tbody>
		</table>
	)
}

StepCounterTable.propTypes = {
	walks: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		date: PropTypes.string,
		distance: PropTypes.number
	})).isRequired,
	onDelete: PropTypes.func.isRequired
}

export default StepCounterTable;
