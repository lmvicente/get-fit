import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import About from './Pages/About'
import Create from './Pages/Create'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

export default function App() {
    return (
      <Router>
    <div className="App">
                <Header />
                <Switch>
                    <Route path="/" exact element={<Home />} />
                    <Route path="about" exact element={<About />} />
                    <Route path="create" exact element={<Create />} />
                    <Route path="contact" exact element={<Contact />} />
                    </Switch>
            </div>
            </Router>
  );
}
