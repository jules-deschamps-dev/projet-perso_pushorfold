import React from "react";
import { sleep } from "../assets/Utils";
import Nav from "../components/Nav";

const Tips = () => {
  async function copy(crypto) {
    const info = document.getElementById("qrc-info");
    let publicKey;
    switch (crypto) {
      case "btc":
        publicKey = "bc1q60nyrjhptgpnawegyx5x5cqx380pd63k7k96qk";
        break;
      case "eth":
        publicKey = "0xFA20370c3B1e49E0687c16EA20767BE7a13070aE";
        break;
    }
    console.log(publicKey);
    navigator.clipboard.writeText(publicKey);
    info.innerHTML = "<p>Copied !</p>";
    await sleep(250);
  }

  function handle_qrc_display(crypto) {
    const qrc = document.getElementById("crypto-qrc");
    const allCrypto = document.getElementsByClassName("crypto-name");
    const selected_crypto = document.getElementById("crypto-list-" + crypto);
    const info = document.getElementById("qrc-info");
    const txt = document.getElementById("tips-text");

    qrc.style.backgroundColor = "white";
    qrc.innerHTML =
      "<img src='../../../img/crypto-address/" + crypto + ".png' />";

    for (let i = 0; i < allCrypto.length; i++)
      allCrypto[i].style.backgroundColor = "rgba(245, 245, 245, .1)";

    selected_crypto.style.backgroundColor = "rgba(245, 245, 245, .7)";
    info.innerHTML = "<p> Cliquez sur le QR Code pour copier l'adresse </p>";
    txt.innerHTML = null;

    qrc.addEventListener("click", () => copy(crypto));
  }

  return (
    <>
      <Nav />
      <div id="tips-page" className="page">
        <div className="container">
          <div className="crypto-list">
            <div
              id="crypto-list-btc"
              className="crypto-name rotate-12"
              onClick={() => handle_qrc_display("btc")}
            >
              <img src="../../../img/icons/bitcoin.png" />
            </div>
            <div
              id="crypto-list-eth"
              className="crypto-name"
              onClick={() => handle_qrc_display("eth")}
            >
              <img src="../../../img/icons/ethereum.png" />
            </div>
          </div>
          <div id="crypto-qrc">
            <img src="../../../img/icons/qrcode.svg" />
          </div>
          <div id="qrc-info"></div>
        </div>
        <p
          id="tips-text"
          className="mx-auto mt-12 w-10/12 text-center text-lg self-baseline"
        >
          Vous avez deeprun un tournoi grace à Push or Fold ? <br />
          Vous pouvez nous envoyer quelques jetons ici afin de soutenir le
          projet !
        </p>
      </div>
    </>
  );
};

export default Tips;
