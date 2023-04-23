import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {IUserInterface} from "./Interface/UserInterface";
import User from "./components/User";
import {IPhotoInterface} from "./Interface/FhotoInterface";
import Photo from "./components/Photo";
import {IAlbumInterface} from "./Interface/AlbumInterface";
import Album from "./components/Album";
function App() {
    const [user, setUser] = useState<IUserInterface[]>([])
    const [photo, setPhoto] = useState<IPhotoInterface[]>([])
    const [album, setAlbum] = useState<IAlbumInterface[]>([])
    const fetchingUsers = async () => {
        let responsive = await axios.get<IUserInterface[]>(`https://jsonplaceholder.typicode.com/users`)
        setUser(responsive.data)
    }
    useEffect(() => {
        fetchingUsers()
    }, [])
    const fetchingPhotos = async () => {
        let responsive = await axios.get<IPhotoInterface[]>(`https://jsonplaceholder.typicode.com/photos`)
        setPhoto(responsive.data)
    }
    useEffect(() => {
        fetchingPhotos()
    }, [])
    const fetchingAlbums = async () => {
        let responsive = await axios.get<IAlbumInterface[]>(`https://jsonplaceholder.typicode.com/albums`)
        setAlbum(responsive.data)
    }
    useEffect(() => {
        fetchingAlbums()
    }, [])
    return (
        <div className="App">
            <div>
                {
                    photo.slice(1,10).map(el => <Photo photo={el}/>)
                }
            </div>
            {
                // user.map(el => <User user={el}/>)
            }
         <div>
             {
                 // album.map(el => <Album album={el}/>)
             }
         </div>
        </div>
    );
}

export default App;