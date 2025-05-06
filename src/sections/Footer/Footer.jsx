import styles from "./FooterStyles.module.css";

function Footer() {
	return (
		<section id="footer" className={styles.container}>
			<p>
				&copy; 2025 Estefania Yepiz. <br /> All rights reserved. <br /> Icons by{" "}
				<a href="https://icons8.com/" target="_blank">
					Icons 8
				</a>
			</p>
		</section>
	);
}

export default Footer;
