import './App.css'
import CardCreator from './components/CardCreator'
import ButtonToShow from './components/ButtonToShow'
import { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';

function App() {

  const [visible, setVisible] = useState(false);

  return (
    <div>
        <HeaderComponent />
        {visible && 
        <CardCreator />
        }
      <div>
        <ButtonToShow setVisibleProp={setVisible} visibleProp={visible}/>
      </div>
    </div>
  )
}

export default App
