import Axios from 'axios';
import React from 'react';
import Header from '../Header/Header.jsx'
import {useState, useEffect} from 'react'
import './App.css';


function App() {
    const [itemList, setItemList] = useState([]);

    //const [itemName, setItemName] = (' ');
    //const [itemQuantity, setItemQuantity] = useState();
    //const [itemUnit, setItemUnit] = useState('');

    useEffect(() => {
        console.log('page loaded');
       fetchItems();
    }, []);

    //get
    const fetchItems = () => {
        Axios({
            method: 'GET',
            url: '/items',
        }).then(response => {
            setItemList(response.data);
        }).catch(error => {
            console.log(error);
            alert('Something went wrong')
        });
    }
    //console.log(itemList);





    return (
        <div className="App">
            <Header />
            <main>
                <p>Hello</p>
            </main>
        </div>
    );
}

export default App;
