import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routers";
import './style/herb_shire.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
