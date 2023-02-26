import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";
import { AuthContextProvider } from "../Context/Authcontext";

// type ComponentWithpageLayout = AppProps & {
//   Component: AppProps['Component'] & {
//     PageLayout?: React.ComponentType
//   }
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </AuthContextProvider>
  );
}

export default MyApp;
