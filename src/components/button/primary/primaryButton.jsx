import React from 'react';
import styles from './primary.module.css'

const PrimaryButton = ({name}) => {
    return (
            <button className={styles.btnContainer}>{name}</button>
    );
};

export default PrimaryButton;