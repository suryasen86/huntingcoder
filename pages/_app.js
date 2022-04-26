import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Navbar';
import React ,{Fragment}from 'react';

function MyApp({ Component, pageProps }) {
  
  return <Fragment>
    <Navbar/>
    <Component {...pageProps} />
  </Fragment> 
}

export default MyApp
