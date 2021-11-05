import Button from './Button';
import './tab-active.css';


export default function TabActive({img, title, text, description}){
    return(
        <article className="article">
            <div className="tab-img">
                <img src={img} alt={description}/>
            </div>
            <div className="box-text tab-text">
                <h3>{title}</h3>
                <p>{text}</p>
                <Button text={'More info'} styleName="blue"/>
            </div>
        </article>
    )
}