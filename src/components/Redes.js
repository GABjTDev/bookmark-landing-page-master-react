import logo from '../images/logo-bookmark.svg';
import fb from '../images/icon-facebook.svg';
import tw from '../images/icon-twitter.svg';
import './redes.css';

export default function Redes(){
    return(
        <div className="redes">
            <div className="footer-logo">
                <img src={logo} alt="logo de bookmarks" />
                <div className="footer-nav">
                    <ul>
                        <li>Features</li>
                        <li>Princing</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="redes-icons">
                <div>
                    <img src={fb} alt="logo de facebook"/>
                </div>
                <div>
                    <img src={tw} alt="logo de twitter" />
                </div>
            </div>            
        </div>
    )
}