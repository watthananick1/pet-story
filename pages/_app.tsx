import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import type { AppProps } from "next/app";

import { AuthContextProvider } from "../Context/Authcontext";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
        <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
