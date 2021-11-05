import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';
import './extension.css';


// Components
import Browser from "./Browser";

export default function Extension(){

    return(
        <section className="extension">
            <div className="box-text">
                <h2>Download the extension</h2>
                <p>
                    We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
                </p>
            </div>
            
            <div className="grid-container">
                <Browser img={chrome} name="Chrome" version="62" />
                <Browser img={firefox} name="Firefox" version="55"/>
                <Browser img={opera} name="Opera" version="46"/>
            </div>
        </section>
    )

}