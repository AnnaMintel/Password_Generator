import React from 'react';
import s from './Password.module.css';


export const Password = ({ randomPassword }) => {

    const copyFuncion = (value) => {
        navigator.clipboard.writeText(value).catch((err) => {
            console.log('Something went wrong', err);
        });
    };

    return (
        <div className={s.password}>
            <div className={s.frame}></div>
            <div className={s.inputSettings}>
                <input
                    type='value'
                    name=""
                    required=""
                    value={randomPassword}
                />
                <button onClick={ () => copyFuncion(randomPassword)}>COPY</button>
            </div>
        </div>
    );
}

