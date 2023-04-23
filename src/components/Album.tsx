import React from 'react';
import {IAlbumInterface} from "../Interface/AlbumInterface";
interface IAlbum{
    album:IAlbumInterface
}
const Album = ({album}:IAlbum) => {
    return (
        <div>
           <h2 style={{
               color:'white'
           }}>{album.title}</h2>
        </div>
    );
};

export default Album;