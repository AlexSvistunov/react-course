import {Header} from './Components/Header/Header'
// import List from './Components/List/List'

function WayToTeach({strong, text}) {
  return (
    <li>
      <strong>{strong}</strong> {text}

    </li>
  )
}

function App() {
  return (
    <div>
      <Header>I'm a header(1)</Header>
      <Header>Бебрик)</Header>
      <h1>Hello React</h1>
      <main>
            {/* <List strong="Заголовок1" text="Описание 1" /> */}
            <ul>
              <WayToTeach strong="Заголовок1" text="Текст1"/>
              <WayToTeach strong="Заголовок2" text="Текст2"/>
              <WayToTeach strong="Заголовок3" text="Текст3"/>

              {/* поработать именно с массивом который уже есть */}
            </ul>
        </main>
    </div>
  );
}

export default App;
