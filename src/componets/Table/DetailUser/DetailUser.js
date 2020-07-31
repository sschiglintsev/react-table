import React from 'react';
import style from './DetailUser.module.css';

let DetailUser = (props) => {
    return (
    <div className={style.bdiv}>
            <div>
                <div>
                    Выбран пользователь : {props.user.firstName} {props.user.lastName}
                </div>
                <textarea>
 {props.user.description}
</textarea>
                <div>
                    Email: {props.user.email}
                </div>
                <div>
                    Phone: {props.user.phone}
                </div>
                <div>
                    Адрес проживания:
                    <b>{props.user.address.streetAddress}</b>
                    Город: <b>{props.user.address.city}</b>
                    Провинция/штат: <b>{props.user.address.state}</b>
                    Индекс: <b>{props.user.address.zip}</b>
                </div>
            </div>
        </div>
    )
}
export default DetailUser;