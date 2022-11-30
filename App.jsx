import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";


function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [approved, setApproved] = useState(false);

  return (
    <div className="app">
      <Wallet
        balance={balance}
        privateKey={privateKey}
        setBalance={setBalance}
        setPrivateKey={setPrivateKey}
        address={address}
        setAddress={setAddress}
        approved={approved}
        setApproved={setApproved}
      />
      
      <Transfer setBalance={setBalance} address={address} approved={approved}/>
      <div className="readme">
        <h2>A Note to Users:</h2>
        <span ><p>Input a private key to unlock your wallet.  Only keys with a positive balance on the server will be allowed to make transactions.</p>
      <p>Input a valid private key, or a foreign key from the lists below to see the results!</p>
        <p>Foreign keys will not have transfer approval, because they do not have any funds. </p>
        <ul>Valid Keys:
          <li><code>229289ed21fde916261683d477e17afb5d91d00b5ae37c25e46aa386a788cbc7</code></li>
          <li><code>6845a47503db9d917befdb58f2a5a1916d7f3668c086a550dc31385835f23c9f</code></li>
          <li><code>c289e831f099c83e1ae8ac01f9b567bf42f30542d131dc3781df9997dd53450c</code></li>
          </ul>
          <ul>Foreign Keys:
          <li><code>de7c2e35af009b73d0715755de8e075c469c9632578dd1a085e449e91b0b318d</code></li>
          <li><code>9f625c54ba96bf9602f2e99fca32cd4c2ebd26e13cbbc2217f3716aaa7b3d9d2</code></li>
          <li><code>41bab0f95cfbdd7bc80959c7a02ff0c7654b1d02ae1fe101f30d450ee60eb2eb</code></li>
          </ul>

          </span>
    </div>
    </div>

   
  );
}

export default App;
