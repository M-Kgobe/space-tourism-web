import React from "react";
import styles from "./styles/home.module.scss";

function Home() {
	return (
		<>
			<main className={styles.homeMain}>
				<div className={styles.hero}>
					<h1 className={styles.header}>So, you want to travel to <span className={styles.space}>Space</span> </h1>
					<p>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</p>
				</div>
				<div className={styles.explore}><p>explore</p></div>
			</main>
		</>
	);
}

export default Home;
