import React from 'react';
import s from './Password.module.css';


export const Password = () => {

    return (
        <div className={s.password}>
            <div className={s.frame}></div>
            <div className={s.inputSettings}><input type='value' name="" required="" /></div>
        </div>
    );
}

