import { useState } from "react";
import UseApp from "../hooks/useApp";
import { NotificationI } from "../types";

interface NotificationProps {
    itemProp: NotificationI
}

const Notification = ({ itemProp }: NotificationProps) => {

    const {data} = UseApp();
    const [item, setItem] = useState(itemProp);
    const itemTemp = { ...item };

    const changeStateUser = () => {
        itemTemp.read = true;
        setItem(itemTemp)
    }

    return (
        <>
            <div onClick={changeStateUser} className={!item.read ? "notification has-background-primary-light" : 'notification has-background-white'}>
                <div className="body-top">
                    <div className="body-top__left">
                        <img src={item.image} />
                        <p><b>{item.remitente}</b></p>
                    </div>
                    <div className="body-top__right">
                        <p>{item.rol}</p>
                        <img src={item.state ? 'active.jpg' : 'inactive.jpg'} alt="" />
                    </div>
                </div>
                <div className="body-bottom mt-2">
                    <p>{item.timestamp}</p>
                </div>
            </div>
        </>
    )
}

export default Notification;