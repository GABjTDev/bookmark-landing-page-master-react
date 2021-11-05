import './browser.css';

// Components
import Button from "./Button";

export default function Browser({img, name, version}){

    return(
        <div className="grid">
            <div className="grid-img">
                <img src={img} alt={`${name} browser`} />
            </div>
            <h3>Add to {name}</h3>
            <p>Minimum version {version}</p>

            <Button text="Add & install Extension" styleName="blue"/>
        </div>
    )

}