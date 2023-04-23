import React from 'react';
import {IPhotoInterface} from "../Interface/FhotoInterface";
interface IPhoto{
    photo:IPhotoInterface
}
const Photo = ({photo}:IPhoto) => {
    return (
        <div className="flex justify-center flex-wrap">
            <img className="flex justify-center items-center m-10" src={photo.thumbnailUrl} alt=""/>
        </div>
    );
};
export default Photo;