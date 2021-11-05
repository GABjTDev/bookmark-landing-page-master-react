import { useState, useRef } from "react";
import TabActive from "./TabActive";
import img1 from '../images/illustration-features-tab-1.svg'
import img2 from '../images/illustration-features-tab-2.svg'
import img3 from '../images/illustration-features-tab-3.svg'
import './features.css';


let data = [
    {
        img: img1,
        text: 'Organize toy bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites',
        title: 'Bookmark in one click',
        description: 'Bookmark click'
    },
    {
        img: img2,
        text: 'Our powerful search will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        title: 'Intelligent search',
        description: 'Intelligent search'
    },
    {
        img: img3,
        text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        title: 'Share your bookmarks',
        description: 'Share bookmarks'
    }
]

export default function Features() {

    const [active, setActive] = useState('Simple Bookmarking');
    let simple = useRef();
    let speedy = useRef();
    let easy = useRef();

    let HandleClick = (value) => {

        if(value === 'Simple Bookmarking'){
            simple.current.classList.add('active')
            speedy.current.classList.remove('active')
            easy.current.classList.remove('active')
        }else if(value === 'Speedy Searching'){
            speedy.current.classList.add('active')
            simple.current.classList.remove('active')
            easy.current.classList.remove('active')
        }else{
            easy.current.classList.add('active')
            speedy.current.classList.remove('active')
            simple.current.classList.remove('active')
        }

        setActive(value)
    }

    return (
        <section className="features">
            <h2>Features</h2>
            <div className="box-text">
                <p>
                    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                </p>

                <div className="tabs">
                    <button ref={simple} className="active" onClick={() => {
                        HandleClick('Simple Bookmarking')
                    }}>Simple Bookmarking</button>
                    <button ref={speedy} onClick={() => {
                        HandleClick('Speedy Searching')
                    }}>Speedy Searching</button>
                    <button ref={easy} onClick={() => {
                        HandleClick('Easy Sharing')
                    }}>Easy Sharing</button>
                </div>
            </div>
            {
                active === 'Simple Bookmarking' &&
                <TabActive {...data[0]} />
            }

            {
                active === 'Speedy Searching' &&
                <TabActive {...data[1]} />
            }

            {
                active === 'Easy Sharing' &&
                <TabActive {...data[2]} />
            }
        </section>
    )
}