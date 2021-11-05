import hero from '../images/illustration-hero.svg'
import './home.css'

//Componentes
import Button from './Button'

export default function Home() {
    return (
        <section className="home">
            <div className="box-img">
                <img src={hero} alt="imagen bookmark manager" />
            </div>
            <div className="box-text">
                <h1>A Simple Bookmark <br />Manager</h1>
                <p>
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="box-buttons">
                    <Button text="Get it on Chrome" styleName="blue"/>
                    <Button text="Get it on Firefox" />
                </div>
            </div>
        </section>
    )
}