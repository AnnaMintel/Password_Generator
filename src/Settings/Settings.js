import React from 'react';
import s from './Settings.module.css';


export const Settings = () => {

    return (
            <div className={s.settings}>
                <div className={s.passwordLength}>
                    Password Length <div className={s.submit}><input type="number" min="1" max="20"  />
                        <input type='submit' value='GENERATE' className={s.submitButton} /></div>
                </div>
                <div className={s.settingsDetail}>
                    <div><input type='checkbox' /> <label>Uppercase</label></div>
                    <div><input type='checkbox' /> <label>Lowercase</label></div>
                    <div><input type='checkbox' /> <label>Numbers</label></div>
                    <div><input type='checkbox' /> <label>Symbols</label></div>
                </div>
            </div>
    );
}

