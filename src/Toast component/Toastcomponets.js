import React from 'react';
import './Styles.css';
import { AiOutlineCheckCircle, AiOutlineClose, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';

const Toastcomponets = ({ type = 'success', message, onclose = () => { } }) => {

    const styles = { marginRight: '20px' }

    const icons = {
        success: <AiOutlineCheckCircle style={styles} />,
        info: <AiOutlineInfoCircle style={styles} />,
        warning: <AiOutlineWarning style={styles} />,
        error: <AiOutlineCloseCircle style={styles} />,
    }
    return (
        <>
            <div className={`notification ${type}`}>
                {icons.success}
                {message}
                <AiOutlineClose color='white' className='mx-3' onClick={() => onclose()} />

            </div>

        </>
    )
}

export default Toastcomponets
