import React from 'react';
import style from './Add.module.css';

let Add = (props) => {
    let id = React.createRef();
    let firstName = React.createRef();
    let lastName = React.createRef();
    let email = React.createRef();
    let phone = React.createRef();
        let onAdd = () => {
            if (id.current.value != ''&firstName.current.value != ''&lastName.current.value != ''&email.current.value != ''&phone.current.value != '' ) {
                props.addUser(id.current.value, firstName.current.value,lastName.current.value,email.current.value,phone.current.value);
            }
        }
    return (
        <div className={style.bdiv}>
            <div>
                <div>
                    id: <textarea ref={id}></textarea>
                </div>
                <div>
                    firstName : <textarea ref={firstName}></textarea>
                </div>
                <div>
                    lastName : <textarea ref={lastName}></textarea>
                </div>
                <div>
                    email: <textarea ref={email}></textarea>
                </div>
                <div>
                    phone: <textarea ref={phone}></textarea>
                </div>
            </div>
            <button onClick={onAdd}>Добавить в таблицу</button>
        </div>
    )
}
export default Add;