
import logo from '/logo-name.svg'
export function Header({ children }) {
    const date = new Date()
    return (
       <div>
         <header>{children}
            <a href="">
                <img src={logo} alt="Result" />
            </a>
            <span>Время сейчас: {date.toString()}</span>
        </header>

       </div>
        
    )
}