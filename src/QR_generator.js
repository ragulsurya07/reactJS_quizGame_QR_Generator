import QRCode from "qrcode";
import { useState } from "react";
import './quiz_game.css';

function QRgenerator() {
  const [url, setUrl]= useState('')
  const [qrcode, setQrcode]= useState('')

  const GenerateQRcode = () => {
    QRCode.toDataURL(url, {width: 300,margin: 1}, (err,url) => {setQrcode(url)})
  }
  return (

    <div className="QR">
      <div className="container">
      <div className="w-50 m-auto mt-5 pt5">
      <div className="card">
        <h2>QR Code Generator</h2>
        <div className="card-body">
        <div className="qrin">
          <input 
            type="text"
            placeholder="Paste the link here!" 
            value={url}
            onChange={(e) => setUrl(e.target.value) }/><br></br>
          <button className="btn" onClick={GenerateQRcode}>Generate</button>
          <a href="/router"><button className="btn btn2">Exit</button></a><br></br>
          <img src={qrcode} alt="***QR Code will be shown here***" />
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>


  );
}

export default QRgenerator;
