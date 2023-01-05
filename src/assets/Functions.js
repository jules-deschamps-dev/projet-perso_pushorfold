import { matrice0 } from "../data/Range0";
import { matrice10 } from "../data/Range10";
import { matrice12 } from "../data/Range12";
import { matrice20 } from "../data/Range20";

const cardOrder = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
];
const allpositions = ["sb", "bn", "co", "hj", "bt", "bq", "bc", "bs"];
const allpositionsTxt = [
  "sb",
  "btn",
  "co",
  "hj",
  "mp2",
  "mp1",
  "utg2",
  "utg1",
  " ",
];
const grey = "#303030";

function extractMatrixById(element) {
  let ante = element.classList[2].substr(1, 2);
  let position = element.id[0] + element.id[1];
  let depth = element.classList[1].substr(6, 8);
  let numericPosition = allpositions.indexOf(position);

  switch (ante) {
    case "0":
      return matrice0()[numericPosition][depth];
    case "10":
      return matrice10()[numericPosition][depth];
    case "12":
      return matrice12()[numericPosition][depth];
    case "20":
      return matrice20()[numericPosition][depth];
    default:
      break;
  }
}

export function bright(matrice) {
  if (matrice.constructor !== Array) {
    const selectedDepth = document.querySelectorAll("." + matrice.classList[1]);
    const selectedDepthArray = Array.prototype.slice.call(selectedDepth);
    selectedDepthArray.map(
      (element) =>
        (document.getElementById(element.id).style.filter = "blur(40px")
    );
    const depth = parseInt(matrice.classList[1].substr(6, 8)) + 1;
    document.getElementById("array-line-" + depth).style.borderRight =
      "white 3px solid";
    document.getElementById("array-line-" + depth).style.fontWeight = "bold";

    let position = matrice.id.substr(0, 2);
    document.getElementById("array-" + position).style.filter = "blur(40px)";
    document.getElementById(position).style.borderBottom = "solid white 3px";

    for (let i = 0; i < allpositions.length; i++) {
      if (allpositions[i] === position) {
        position = allpositionsTxt[i];
      }
    }
    document.getElementById("matrice-position-information").innerHTML =
      "(" + position.toUpperCase() + " " + depth + "bb )";

    matrice = extractMatrixById(matrice);
  }

  let _bright = "green";
  var brightcardsnumber = 0;

  // hightcard
  for (let z = 0; z < matrice.length; z++) {
    var cards = matrice[z];

    if (cards[1] === "p") {
      hightcard = cards[2];
    } //créer fonction
    else if (cards[1] === "T") {
      hightcard = 10;
    } else if (cards[1] === "J") {
      hightcard = 11;
    } else if (cards[1] === "Q") {
      hightcard = 12;
    } else if (cards[1] === "K") {
      hightcard = 13;
    } else if (cards[1] === "A") {
      hightcard = 14;
    } else {
      var hightcard = cards[1];
    }
    // lowcard
    if (cards[2] === "T") {
      lowcard = 10;
    } else if (cards[2] === "J") {
      lowcard = 11;
    } else if (cards[2] === "Q") {
      lowcard = 12;
    } else if (cards[2] === "K") {
      lowcard = 13;
    } else if (cards[2] === "A") {
      lowcard = 14;
    } else {
      var lowcard = cards[2];
    }

    //paire
    if (cards[1] === "p") {
      for (let i = 0; i < 13; i++) {
        if (cards[2] === cardOrder[i]) {
          var m = i;
          while (m < cardOrder.length) {
            var id = "_" + cardOrder[m] + cardOrder[m];
            document.getElementById(id).style.backgroundColor = _bright;
            document.getElementById(id).style.color = "white";
            brightcardsnumber += 6;
            m++;
          }
        }
      }
    }

    //hauteur
    if (cards[2] === "x") {
      for (let i = 0; i < hightcard - 2; i++) {
        var ids = "_" + cards[1] + cardOrder[i] + "s";
        var ido = "_" + cards[1] + cardOrder[i] + "o";
        document.getElementById(ids).style.backgroundColor = _bright;
        document.getElementById(ido).style.backgroundColor = _bright;
        document.getElementById(ids).style.color = "white";
        document.getElementById(ido).style.color = "white";
        brightcardsnumber += 16;
      }
    }

    //solitaire
    if (cards[4] === ".") {
      id = "_" + cards[1] + cards[2] + cards[3];
      document.getElementById(id).style.backgroundColor = _bright;
      document.getElementById(id).style.color = "white";
      if (cards[3] === "s") {
        brightcardsnumber += 4;
      } else if (cards[3] === "o") {
        brightcardsnumber += 12;
      }
    }
    //couleur
    else {
      if (cards[3] === "s") {
        //diviser code par deux en modifiant 's' et 'o' en cards[3]
        for (let i = lowcard; i < hightcard; i++) {
          id = "_" + cards[1] + cardOrder[i - 2] + "s";
          document.getElementById(id).style.backgroundColor = _bright;
          document.getElementById(id).style.color = "white";
          brightcardsnumber += 4;
        }
      }
      if (cards[3] === "o") {
        for (let i = lowcard; i < hightcard; i++) {
          id = "_" + cards[1] + cardOrder[i - 2] + "o";
          document.getElementById(id).style.backgroundColor = _bright;
          document.getElementById(id).style.color = "white";
          brightcardsnumber += 12;
        }
      }
      var brightcardspourcent = (brightcardsnumber / 1326) * 100;
      document.getElementById("matrice-information").innerHTML =
        Math.round(brightcardspourcent) + "%";
    }
  }
  return brightcardsnumber;
}

// CLEARMATRICE
export const clearmatrix = (e) => {
  const _shadow = "rgb(35,35,35)";
  for (let n = cardOrder.length - 1; n >= 0; n--) {
    for (let i = 0; i < cardOrder.length; i++) {
      if (n > i) {
        var ids = "_" + cardOrder[n] + cardOrder[i] + "s";
        var ido = "_" + cardOrder[n] + cardOrder[i] + "o";
        document.getElementById(ids).style.backgroundColor = _shadow;
        document.getElementById(ido).style.backgroundColor = _shadow;
        document.getElementById(ids).style.color = grey;
        document.getElementById(ido).style.color = grey;
      } else if (n === i) {
        var id = "_" + cardOrder[n] + cardOrder[i];
        document.getElementById(id).style.backgroundColor = _shadow;
        document.getElementById(id).style.color = grey;
      }
    }
  }

  const allDepth = document.querySelectorAll(".depth");
  const allDepthArray = Array.prototype.slice.call(allDepth);
  allDepthArray.map((element) => {
    document.getElementById(element.id).style.filter = "none";
  });

  const depth = parseInt(e.target.classList[1].substr(6, 8)) + 1;
  document.getElementById("array-line-" + depth).style.borderColor =
    "transparent";
  document.getElementById("array-line-" + depth).style.fontWeight = "normal";

  const position = e.target.id.substr(0, 2);
  document.getElementById("array-" + position).style.filter = "none";
  document.getElementById(position).style.borderColor = "transparent";

  document.getElementById("matrice-information").innerHTML = "-";
  document.getElementById("matrice-position-information").innerHTML = "--";
};
