import "./style.css";
import vk from "./../../img/icons/vk.svg";
import twt from "./../../img/icons/twitter.svg";
import lin from "./../../img/icons/linkedIn.svg";
import ig from "./../../img/icons/instagram.svg";
import github from "./../../img/icons/gitHub.svg";

const Footer = () => {
    return ( 
            <footer className="footer">
                <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                    <li className="social__item">
                        <a href="#!">
                        <img src={vk} alt="Link" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#!">
                        <img src={ig} alt="Link" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#!">
                        <img src={twt} alt="Link" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#!">
                        <img src={github} alt="Link" />
                        </a>
                    </li>
                    <li className="social__item">
                        <a href="#!">
                        <img src={lin} alt="Link" />
                        </a>
                    </li>
                    </ul>
                    <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
                </div>
            </footer>
     );
}
 
export default Footer;