import { useState } from 'react'
import logo from '/logo-name.svg'
export function Header({ children }) {
    let [content, setContent] = useState();
    const date = new Date()
    setInterval(() => {
        setContent(date)
    }, 1000)
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