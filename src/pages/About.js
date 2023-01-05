import React from "react";
import Nav from "../components/Nav";

const About = () => {
  return (
    <div id="about-page">
      <Nav />
      <p className="w-2/3">
        Les tableaux de Push or Fold sont des tableaux calculés à partir de
        l'équilibre de Nash. Cet équilibre mathématique issu de la théorie des
        jeux permet d'obtenir une stratégie de jeu optimale. Dit autrement, en
        suivant cette stratégie sur un grand nombre de partie le joueur est
        statistiquement gagnant. <br /> <span className="invisible">-</span>
        <br />
        Cet équilibre a été adapté au poker pour le MTT où le nombre de jetons
        des joueurs est variable. Ainsi passé une certaine limite de jetons (20
        fois le montant grosse blinde) il devient plus profitable pour le joueur
        de jouer ses cartes en push or fold c'est à dire en les ouvrant à tapis
        où en les couchant directement. <br />
        <span className="invisible">-</span>
        <br />
        Tiré depuis les
        <a
          href="https://docs.google.com/spreadsheets/d/1hHM04qRKysOVj0IoiW6EZpWFSVB2U3Oscg4-B2_0xog/edit?hl=en_US#gid=0"
          className="contents"
        >
          {" "}
          tables de Jennifers
        </a>{" "}
        cette applications web utilisable sur mobile et ordinateur permet de
        répresenter les ranges de push or fold de manière bien plus lisible et
        dynamique sous forme de matrice de carte afin d'être utiliser
        directement et très rapidement en tournoi au cours de la main !
      </p>
    </div>
  );
};

export default About;
