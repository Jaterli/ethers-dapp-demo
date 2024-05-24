import logo from './logo.svg';
import './App.css';
import { ethers } from "ethers";

function App() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  console.log("🚀 ~ App ~ provider:", provider);

  const onHandleConnect = async () => {
    await provider.send("eth_requestAccounts", []);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ethers dApp Meamask demo
        </p>
        <button onClick={onHandleConnect}>Connect with Metamask</button>
      </header>
    </div>
  );
}

export default App;
