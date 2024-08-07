import React, { useCallback, useState } from 'react'
import Toastcomponets from './Toastcomponets';

const Notificationhook = () => {
    const [notification, setNotification] = useState(null);

    let timer;
    const triggernotification = useCallback((nprops) => {
        clearTimeout(timer);
        setNotification(nprops);
        timer = setTimeout(() => {
            setNotification(null)
        }, nprops.duration);
    }, []);

    const Notificationcomponent = notification ? (
        <div className={`position`}>
            <Toastcomponets {...notification} />
        </div>
    ) : null;
    return { Notificationcomponent, triggernotification }
}

export default Notificationhook
