import Web3 from 'web3';
import React, { useEffect,useState } from 'react';
function Web3Provider({ Component, pageProps }) {
    const [web3, setWeb3] = useState(null);
  
    useEffect(() => {
      const getWeb3 = async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum);
          setWeb3(web3);
        } else if (window.web3) {
          const web3 = new Web3(window.web3.currentProvider);
          setWeb3(web3);
        } else {
          setWeb3(null);
        }
      };
  
      getWeb3();
    }, []);
    return (
      <Component {...pageProps} web3={web3} />
    );
  }

  export default Web3Provider;