import React, { useState } from "react";
import ArrayNumber from "./subComponents/ArrayNumber";
import { bright, clearmatrix } from "../assets/Functions";
import Positions from "./subComponents/Positions";
import { matrice0 } from "../data/Range0";
import { matrice10 } from "../data/Range10";
import { matrice12 } from "../data/Range12";
import { matrice20 } from "../data/Range20";
import { nodeListToArray, getIdsOfNodeList } from "../assets/Utils";

const Array = () => {
  const [presentation, setPresentation] = useState(true);

  let matrice;
  const allpositions = ["sb", "bn", "co", "hj", "bt", "bq", "bc", "bs"];

  async function arrayCreation(ante) {
    setPresentation(false);
    await clearArray();

    let otherAntes = nodeListToArray("antes");
    otherAntes.map(
      (ante) =>
        (document.getElementById(ante.id).style.borderColor = "transparent")
    );

    switch (ante) {
      case "0":
        matrice = matrice0();
        document.getElementById("ante0").style.borderColor = "white";
        break;
      case "10":
        matrice = matrice10();
        document.getElementById("ante10").style.borderColor = "white";
        break;
      case "12":
        matrice = matrice12();
        document.getElementById("ante12").style.borderColor = "white";
        break;
      case "20":
        matrice = matrice20();
        document.getElementById("ante20").style.borderColor = "white";
        break;
    }
    for (let i = 0; i < allpositions.length; i++) {
      let z = "array-" + allpositions[i];
      for (let u = 19; u >= 0; u--) {
        let newCase = document.createElement("div");
        let depth = "depth depth-" + u.toString() + " _" + ante;
        let id = allpositions[i] + u.toString() + "_" + ante;
        newCase.setAttribute("id", id);
        newCase.setAttribute("class", depth);
        newCase.addEventListener("mouseover", (e) => bright(e.target));
        newCase.addEventListener("mouseout", clearmatrix);
        newCase.addEventListener("click", scrollToMatrix);
        document.getElementById(z).appendChild(newCase);
        document.getElementById(id).style.backgroundColor = setColor(
          bright(matrice[i][u])
        );
        bright(matrice[i][u]);
      }
    }
    clearmatrix();
  }

  async function clearArray() {
    const all_array_cell = document.querySelectorAll(".depth");
    await all_array_cell.forEach((cell) => cell.remove());
  }

  function setColor(number) {
    let r = ((number / 1326) * 102 + 52).toString();
    let g = ((number / 1326) * 198).toString();
    let b = ((number / 1326) * 152).toString();
    let color = "rgb(" + r + "," + g + "," + b + ")";
    return color;
  }

  function scrollToMatrix() {
    window.scroll({
      top: window.innerHeight * 2,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="flex flex-col">
      <div
        id="array-ante-line"
        className="flex flex-row justify-evenly pb-2 mb-2 border-b border-solid border-white"
      >
        <div id="ante0" className="antes" onMouseUp={() => arrayCreation("0")}>
          no ante
        </div>
        <div id="ante10" className="antes" onClick={() => arrayCreation("10")}>
          10%
        </div>
        <div id="ante12" className="antes" onClick={() => arrayCreation("12")}>
          12.5%
        </div>
        <div id="ante20" className="antes" onClick={() => arrayCreation("20")}>
          20%
        </div>
      </div>

      {presentation ? (
        <div>
          <p className="mx-4 text-sm lg:text-base lg:m-auto lg:w-11/12 xl:w-3/4 text-center">
            <br />
            <h2>
              {" "}
              Bienvenue sur le site de <strong> PUSH or FOLD ! </strong>
            </h2>
            <br />
            Cette application web <strong>poker</strong> est très facile
            d'utilisation et vous permettra d'obtenir des ranges de{" "}
            <strong className="text-green-500">push</strong> or{" "}
            <strong className="text-neutral-400">fold </strong>
            sous forme de matrice de cartes facile, dynamique et rapide à lire.
            Vos MTT en seront grandement plus facilité quand votre stack de
            jetons atteindra le seuil symbolique de 20 blindes. Attention les
            ranges données ici doivent être adaptées selon la{" "}
            <span className="italic">dynamique de jeu</span>, votre
            <span className="italic"> image à la table</span> et le
            <span className="italic"> profil de vos adversaires</span> ! <br />
            <br />
            <h2 className="underline">En voici le fonctionnement :</h2>
            <br />
            Selectionnez ci-dessus les antes en vigueur sur votre{" "}
            <strong>tournoi</strong>, un tableau s'affichera alors, l'axe
            horizontal indiquant votre <span className="italic">position</span>{" "}
            et l'axe vertical la profondeur de{" "}
            <span className="italic">votre tapis</span> en BB. <br />
            Naviguez simplement sur le tableau en survolant avec la souris, les
            cases de la <strong>matrice</strong> si contre qui s'allumeront en{" "}
            <span className="text-green-500">vert </span>
            seront à ouvrir à tapis, celles qui resteront{" "}
            <span className="text-neutral-400">éteintes </span>
            sont à coucher.
            <br />
            <br />
            Good Luck !
          </p>
        </div>
      ) : (
        <>
          <div id="array">
            <div className="array-column" id="array-sb"></div>
            <div className="array-column" id="array-bn"></div>
            <div className="array-column" id="array-co"></div>
            <div className="array-column" id="array-hj"></div>
            <div className="array-column" id="array-bt"></div>
            <div className="array-column" id="array-bq"></div>
            <div className="array-column" id="array-bc"></div>
            <div className="array-column" id="array-bs"></div>
            <ArrayNumber />
          </div>
          <Positions />
        </>
      )}
    </div>
  );
};

export default Array;
