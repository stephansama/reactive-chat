import logo from './logo.svg';
import './App.css';
import Chatwindow from './components/chatwindow.js'
import Contact from './components/contact.js'
import Contactlist from './components/contactlist.js'
import Inputtext from './components/inputtext.js'

function App() {
  return (
    <div className="App">
      <Chatwindow />
      <Contact />
      <Contactlist />
      <Inputtext />
    </div>
  );
}

export default App;
