import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card'
import { ListItemAvatar } from '@material-ui/core';
import './style.css';


class User extends Component {

    state = {
        users: [],
    }

    //İstek atıp gelen datayı json olarak state'e set ediyoruz.

    componentDidMount = () => {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(data => this.setState({ users: data }))
        .catch((error) => {
            console.log(error)
          });

    }

    // renderItem(item) { // ana render içinde bir json veya dizi map edilerek de bu fonksiyon çağrılabilir ama ben Card.js'i çağırdım.
    //     return (
    //         // <div>
    //         //     <text>{item.name} | </text>
    //         //     <text>{item.email} | </text>
    //         //     <text>{item.adress} | </text>
    //         //     <text>{item.phone}</text>
    //         // </div>
    //         <div class="card">
    //             <div class="container">
    //                 <h6><b>John Doe</b></h6>
    //                 <p style={{fontSize: 20}}>Architect & Engineer</p>
    //             </div>
    //         </div>

    //     );
    //   }

    render(){
        return(
            <div class="main">
                {/* Normalde sadece <Card/> diyerek import ettiğimiz Card.js indeki Card componentini çağırabiliriz  */}
                {/* Fakar Card içine props dediğim isimlerle bir data gönderebiliyor, ve Card.js içinde this.props diye okuyabiliyoruz. Oradan data gönderirken de aynı şekilde.  */}
                {this.state.users.map((item) =>
                <Card
                    key = {item.phone}
                    name = {item.name}
                    email = {item.email}
                    city = {item.adress}
                    phone = {item.phone}
                />
                )}

            </div>
        )
    }
}

export default User;
