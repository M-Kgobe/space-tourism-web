import React from "react";
import styles from "./styles/crew.module.scss";
import data from "../data.json";

let crewArray = data.crew;

function Crew() {
	return (
		<>
			<section className={styles.crew}>
				<div className={styles.crewDetails}>
					
				</div>
			</section>
		</>
	);
}

export default Crew;
