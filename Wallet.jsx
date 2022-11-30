import server from "./server";
import { useEffect } from "react";
import * as secp from "ethereum-cryptography/secp256k1";
import { toHex }from 'ethereum-cryptography/utils';
import { keccak256 }from 'ethereum-cryptography/keccak';

function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey, setApproved }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const address = toHex(keccak256(secp.getPublicKey(privateKey).slice(1,)).slice(-20,));
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
           
    } else {
      setBalance(0);
    }
    
  }

  function getBalanceApproval(){
    useEffect(() => { balance });
      if(balance > 0){
      setApproved(true);
      return true;
      }
      else{
        setApproved(false);
        return false;
      }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private Key
        <input placeholder="Type in your key" value={privateKey} onChange={onChange} id="prvKey"></input>
      </label>
      <div className="smLable"> 
        Address: {address} <span> &nbsp; {getBalanceApproval() ? <b style={{color:'green'}}>Approved</b> : <b style={{color:'red'}}>Not Valid</b> }</span>
      </div>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
