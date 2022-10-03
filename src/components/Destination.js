import React from "react";
import styles from "./styles/destination.module.scss";
import data from "../data.json";

let destinationArray = data.destinations;

function Destination() {
	const selectElements = destinationArray.map((element) => {
		return <li>{element.name}</li>;
	});

	return (
		<>
			<section className={styles.destination}>
				<div className={styles.chosenDest}>
					<h3>
						<span>01</span> pick your destination
					</h3>
					<div>
						<img src={destinationArray[0].images.png} alt="" />
					</div>
				</div>
				<div className={styles.pickDest}>
					<ul>{selectElements}</ul>
					<h2>{destinationArray[0].name}</h2>
					<p>{destinationArray[0].description}</p>
					<hr />
					<div className={styles.travelDistance}>
						<div>
							<h3>avg. distance</h3>
							<h4>{destinationArray[0].distance}</h4>
						</div>
						<div>
							<h3>Est. travel time</h3>
							<h4>{destinationArray[0].travel}</h4>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Destination;
