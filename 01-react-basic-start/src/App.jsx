import {Header} from './Components/Header/Header'
import { ways } from './data';
import WayToTeach from './Components/WayToTeach/WayToTeach'
import Button from './Components/Button/Button'
import './Components/Button/Button.css'
import { useState } from 'react'


function App() {
  let [content, setContent] = useState('Первый контент');
  function handleClick(type) {
    setContent(type)
  }

  return (
    <div>
      <Header>I'm a header(1)</Header>
      <h1>Hello React</h1>
      <main>
            <ul>
              <WayToTeach {... ways[0]}/>
              <WayToTeach { ...ways[1]}/>
              <WayToTeach { ...ways[2]}/>
            </ul>
            
            <Button onClick={() => handleClick('Первый контент')}>Первая кнопка</Button>
            <Button onClick={() => handleClick('Второй контент')}>Вторая кнопка</Button>
            <Button onClick={() => handleClick('Третий контент')}>Третья кнопка</Button>
            <p>{ content }</p>
        </main>
    </div>
  );
}

export default App;
