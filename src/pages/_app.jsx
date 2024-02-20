import React from 'react';
import "../styles/globals.css";
import { AppProps } from "next/app";

const MyaApp = ({ Component, pageProps }) => {
    return (
        <div>
            <Component {...pageProps} />
        </div>
    );
};

export default MyaApp;