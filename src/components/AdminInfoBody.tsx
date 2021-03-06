import '../styles/AdminInfoBody.scss';

import discordLogo from '../assets/images/discord_logo.svg';
import twitterLogo from '../assets/images/twitter.svg';
import instagramLogo from '../assets/images/instagram.svg';
import pixivLogo from '../assets/images/pixiv.svg';
import youtubeLogo from '../assets/images/youtube.svg';
import githubLogo from '../assets/images/github.svg';
import redirectIcon from '../assets/images/redirect_icon.svg';

interface AdminInfoBodyProperties {
    handle: string;
    bio: string;
    pronouns: string;
    socials: {
        discord?: string;
        twitter?: string;
        instagram?: string;
        pixiv?: string;
        youtube?: string;
        github?: string;
    };
}

const AdminInfoBody = ({ handle, bio, pronouns, socials }: AdminInfoBodyProperties) => {
    return (
        <div className="admin-info-body">
            <div className="bio section">
                <pre>
                    {handle} <span>/</span> Bio
                </pre>
                <p>{bio}</p>
            </div>

            <div className="pronouns section">
                <pre>
                    {handle} <span>/</span> Pronouns
                </pre>
                <div className="pronouns-content">
                    {[...pronouns.split('/')].map((pronoun, i) => {
                        return <p key={i}>{pronoun}</p>;
                    })}
                </div>
            </div>

            <div className="wrapper-socials">
                <pre>Socials</pre>

                <div className="socials no-select">
                    {socials.discord && (
                        <a href={socials.discord} target="_blank" rel="noreferrer">
                            <div className="social">
                                <img className="discord-logo" src={discordLogo} alt="discord logo" />
                                <h4>Discord</h4>
                                <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                            </div>
                        </a>
                    )}
                    {socials.twitter && (
                        <a href={socials.twitter} target="_blank" rel="noreferrer">
                            <div className="social">
                                <img className="twitter-logo" src={twitterLogo} alt="twitter logo" />
                                <h4>Twitter</h4>
                                <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                            </div>
                        </a>
                    )}
                    {socials.instagram && (
                        <a href={socials.instagram} target="_blank" rel="noreferrer">
                            <div className="social">
                                <img className="instagram-logo" src={instagramLogo} alt="instagram logo" />
                                <h4>Instagram</h4>
                                <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                            </div>
                        </a>
                    )}
                    {socials.pixiv && (
                        <a href={socials.pixiv} target="_blank" rel="noreferrer">
                            <div className="social">
                                <img className="pixiv-logo" src={pixivLogo} alt="pixiv logo" />
                                <h4>Pixiv</h4>
                                <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                            </div>
                        </a>
                    )}
                    {socials.youtube && (
                        <a href={socials.youtube} target="_blank" rel="noreferrer">
                            <div className="social">
                                <img className="youtube-logo" src={youtubeLogo} alt="youtube logo" />
                                <h4>Youtube</h4>
                                <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                            </div>
                        </a>
                    )}
                    {socials.github && (
                        <a href={socials.github} target="_blank" rel="noreferrer">
                            <div className="social">
                                <img className="github-logo" src={githubLogo} alt="github logo" />
                                <h4>Github</h4>
                                <img className="redirect-icon" src={redirectIcon} alt="redirect icon" />
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminInfoBody;
