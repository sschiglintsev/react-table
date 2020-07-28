import React from 'react';
import style from './Preloader.module.css'

let Preloader = () => {
    return (
        <div className={style.preloader}>
            <div className={style.spinner}></div>
        </div>
    )
}
export default Preloader;