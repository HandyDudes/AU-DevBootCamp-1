import { useState } from "react";
import server from "./server";

function Transfer({ address, setBalance, approved }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function transfer(evt) {
    evt.preventDefault();

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Choose Recipient
        <select 
          value={recipient}
          onChange={setValue(setRecipient)}
        >
          <option value="a04659f1437f53e50c986c0e78d6ad5c396fc993">a04659f1437f53e50c986c0e78d6ad5c396fc993</option>
          <option value="2746ed0b7a03b8b86baf5d34417fa7c589ffa405">2746ed0b7a03b8b86baf5d34417fa7c589ffa405</option>
          <option value="e14f21694c139daedc1855dde6bb47d463314f28">e14f21694c139daedc1855dde6bb47d463314f28</option>
        </select>
      </label>

      <input type="submit" className="button" value="Transfer" disabled={!approved}/>
    </form>
  );
}

export default Transfer;
