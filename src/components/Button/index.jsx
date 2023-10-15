import "./Button.scss"

export default function Button({ title, onClick, className }) {



    return (
        <button className={className}
            onClick={onClick} >
            {title}
        </button>
    )
}