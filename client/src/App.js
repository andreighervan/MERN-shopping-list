import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppNavbar/>
                    <Container>
                        <ItemModal/>
                        <ShoppingList/>
                    </Container>
                </div>
            </Provider>
        );
    }
}

export default App;
