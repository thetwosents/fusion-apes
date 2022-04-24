import '../styles/globals.css'
import 'antd/dist/antd.css';
import Web3Provider from '../utils/web3';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Web3Provider Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  );
}




export default App
