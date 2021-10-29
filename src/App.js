import './assets/style.scss'
import  {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import Header from "./containers/Header";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Redirect from='/home' to='/' />
                    <Route path='*' component={ErrorPage} />
                </Switch>
            </Router>
            <Header/>
        </div>
    );
}

export default App;
