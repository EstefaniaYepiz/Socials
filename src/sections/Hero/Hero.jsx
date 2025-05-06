import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import heroDark from "../../assets/hero-dark.png";
import sun from "../../assets/sun.svg";
import rainbow from "../../assets/rainbow.png";
import moon from "../../assets/moon.svg";
import xLight from "../../assets/x-light.png";
import xDark from "../../assets/x-dark.svg";
import twitchLight from "../../assets/twitch-light.png";
import twitchDark from "../../assets/twitch-dark.svg";
import instagramLight from "../../assets/instagram-light.png";
import instagramDrak from "../../assets/instagram-dark.svg";
import tiktokLight from "../../assets/tiktok-light.png";
import tiktokDark from "../../assets/tiktok-dark.svg";
import discordLight from "../../assets/discord-light.png";
import discordDark from "../../assets/discord-dark.svg";
import facebookLight from "../../assets/facebook-light.png";
import facebookDark from "../../assets/facebook-dark.svg";

import { useTheme } from "../../common/ThemeContext";

function Hero() {
	const { theme, toggleTheme } = useTheme();
	const themeIcon = theme === "light" ? rainbow : moon;
	const twitterIcon = theme === "light" ? xLight : xDark;
	const twitchIcon = theme === "light" ? twitchLight : twitchDark;
	const instagramicon = theme === "light" ? instagramLight : instagramDrak;
	const tiktokIcon = theme === "light" ? tiktokLight : tiktokDark;
	const discordIcon = theme === "light" ? discordLight : discordDark;
	const facebookIcon = theme === "light" ? facebookLight : facebookDark;
	const hero = theme === "light" ? heroImg : heroDark;

	return (
		<section id="hero" className={styles.container}>
			<div className={styles.colorModeContainer}>
				<img
					className={styles.hero}
					src={hero}
					alt="Profile picture of Estefania Yepiz"
				/>
				<img
					className={styles.colorMode}
					src={themeIcon}
					alt="Color mode icon"
					onClick={toggleTheme}
				/>
			</div>
			<div className={styles.info}>
				<div className={styles.title}>
					<h1>Omikiwi</h1>
				</div>
				<div className={styles.subtitle}>
					<h2>Creadora de contenido</h2>
				</div>

				<div className={styles.info}>
					<p className={styles.description}>
						¿Has visto 5 gatos en un solo stream?
					</p>
				</div>
				<div className={styles.buttons}>
					<a href="https://www.twitch.tv/omikiwi" target="_blank">
						<button className="hover">
							<img className={styles.buttonIcons} src={twitchIcon} />
							Twitch
						</button>
					</a>
					<a href="https://www.instagram.com/omikiwii/" target="_blank">
						<button className="hover">
							<img className={styles.buttonIcons} src={instagramicon} />
							Instagram
						</button>
					</a>
					<a href="https://www.tiktok.com/@omikiwii" target="_blank">
						<button className="hover border-gradient border-gradient-purple">
							<img className={styles.buttonIcons} src={tiktokIcon} />
							Tik Tok
						</button>
					</a>
					<a href="https://discord.com/invite/ud67VXmjt3" target="_blank">
						<button className="hover">
							<img className={styles.buttonIcons} src={discordIcon} />
							Discord
						</button>
					</a>
					<a href="https://www.facebook.com/OmiKiwi" target="_blank">
						<button className="hover">
							<img className={styles.buttonIcons} src={facebookIcon} />
							Facebook
						</button>
					</a>
					<a href="https://x.com/omikiwi" target="_blank">
						<button className="hover">
							<img className={styles.buttonIcons} src={twitterIcon} />
							Twitter
						</button>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
