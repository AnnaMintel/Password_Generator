import React from 'react';
import s from './Settings.module.css';


export const Settings = ({ settings, setSettings, generate }) => {

    const onChangePassLength = (e) => {
        setSettings({ ...settings, passLength: e.currentTarget.value });
    }
    const onChangeUpperCase = (e) => {
        setSettings({ ...settings, upperCase: e.currentTarget.checked });
    }
    const onChangeLowerCase = (e) => {
        setSettings({ ...settings, lowerCase: e.currentTarget.checked });
    }
    const onChangeNum = (e) => {
        setSettings({ ...settings, num: e.currentTarget.checked });
    }
    const onChangeSymb = (e) => {
        setSettings({ ...settings, symb: e.currentTarget.checked });
    }

    const disabledButton = 
    (!settings.upperCase && !settings.lowerCase && !settings.num && !settings.symb) || settings.passLength < 1
    || (settings.passLength > 1 && (!settings.upperCase && !settings.lowerCase && !settings.num && !settings.symb))


    return (
        <div className={s.settings}>
            <div className={s.passwordLength}>
                Password Length <div className={s.submit}>
                    <input type="number"
                        min="0"
                        max="20"
                        value={settings.passLength}
                        onChange={onChangePassLength}
                    />
                    <button
                        value='GENERATE'
                        className={s.submitButton}
                        onClick={generate}
                        disabled={disabledButton}
                    >GENERATE
                    </button>
                </div>
            </div>
            <div className={s.settingsDetail}>
                <div><input
                    type='checkbox'
                    checked={settings.upperCase}
                    onChange={onChangeUpperCase}
                /> <label>Uppercase</label></div>
                <div><input
                    type='checkbox'
                    checked={settings.lowerCase}
                    onChange={onChangeLowerCase}
                /> <label>Lowercase</label></div>
                <div><input
                    type='checkbox'
                    checked={settings.num}
                    onChange={onChangeNum}
                /> <label>Numbers</label></div>
                <div><input
                    type='checkbox'
                    checked={settings.symb}
                    onChange={onChangeSymb}
                /> <label>Symbols</label></div>
            </div>
        </div>
    );
}

