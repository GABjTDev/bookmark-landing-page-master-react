import './button.css'

export default function Button({ text, styleName }) {

    return (
        <button className={styleName}>{text}</button>
    )

}