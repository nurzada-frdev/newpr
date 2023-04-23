import React from 'react';
import {IUserInterface} from "../Interface/UserInterface";

interface IUser{
    user:IUserInterface
}

const User = ({user}:IUser) => {
    return (
        <div style={{
            color:'white'
        }}>
            <h1>{user.name}</h1>
            {/*<h1>{user.phone}</h1>*/}
            {/*<p>{user.email}</p>*/}
            {/*<p>{user.username}</p>*/}
        </div>
    );
};

export default User;