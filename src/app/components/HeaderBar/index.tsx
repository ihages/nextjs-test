import "./style.css"

export default function HeaderBar() {
    return(
        <span className="header-bar">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/admin">Admin</a>
        </span>
    )
}