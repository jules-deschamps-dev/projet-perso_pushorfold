import React from "react";
import { scrollToTop } from "../assets/Utils";

const Matrice = () => {
  return (
    <>
      <aside id="matrice">
        <div className="top-arrow lg:invisible" onClick={scrollToTop}>
          <div className="side left-side"></div>
          <div className="side right-side"></div>
        </div>
        <div className="line line_A">
          <div id="_AA" className="cards pair premium">
            AA
          </div>
          <div id="_AKs" className="cards suited _Ax _Axs">
            AK
          </div>
          <div id="_AQs" className="cards brodway sGAP1 suited">
            AQ
          </div>
          <div id="_AJs" className="cards suited _Ax _Axs">
            AJ
          </div>
          <div id="_ATs" className="cards suited _Ax _Axs">
            AT
          </div>
          <div id="_A9s" className="cards suited _Ax _Axs">
            A9
          </div>
          <div id="_A8s" className="cards suited _Ax _Axs">
            A8
          </div>
          <div id="_A7s" className="cards suited _Ax _Axs">
            A7
          </div>
          <div id="_A6s" className="cards suited _Ax _Axs">
            A6
          </div>
          <div id="_A5s" className="cards suited _Ax _Axs">
            A5
          </div>
          <div id="_A4s" className="cards suited _Ax _Axs">
            A4
          </div>
          <div id="_A3s" className="cards suited _Ax _Axs">
            A3
          </div>
          <div id="_A2s" className="cards suited _Ax _Axs">
            A2
          </div>
        </div>

        <div className="line line_K">
          <div id="_AKo" className="cards offsuit">
            AK
          </div>
          <div id="_KK" className="cards pair">
            KK
          </div>
          <div id="_KQs" className="cards suited">
            KQ
          </div>
          <div id="_KJs" className="cards suited">
            KJ
          </div>
          <div id="_KTs" className="cards suited">
            KT
          </div>
          <div id="_K9s" className="cards suited">
            K9
          </div>
          <div id="_K8s" className="cards suited">
            K8
          </div>
          <div id="_K7s" className="cards suited">
            K7
          </div>
          <div id="_K6s" className="cards suited">
            K6
          </div>
          <div id="_K5s" className="cards suited">
            K5
          </div>
          <div id="_K4s" className="cards suited">
            K4
          </div>
          <div id="_K3s" className="cards suited">
            K3
          </div>
          <div id="_K2s" className="cards suited">
            K2
          </div>
        </div>

        <div className="line line_Q">
          <div id="_AQo" className="cards offsuit">
            AQ
          </div>
          <div id="_KQo" className="cards offsuit">
            KQ
          </div>
          <div id="_QQ" className="cards pair">
            QQ
          </div>
          <div id="_QJs" className="cards suited">
            QJ
          </div>
          <div id="_QTs" className="cards suited">
            QT
          </div>
          <div id="_Q9s" className="cards suited">
            Q9
          </div>
          <div id="_Q8s" className="cards suited">
            Q8
          </div>
          <div id="_Q7s" className="cards suited">
            Q7
          </div>
          <div id="_Q6s" className="cards suited">
            Q6
          </div>
          <div id="_Q5s" className="cards suited">
            Q5
          </div>
          <div id="_Q4s" className="cards suited">
            Q4
          </div>
          <div id="_Q3s" className="cards suited">
            Q3
          </div>
          <div id="_Q2s" className="cards suited">
            Q2
          </div>
        </div>

        <div className="line line_J">
          <div id="_AJo" className="cards offsuit">
            AJ
          </div>
          <div id="_KJo" className="cards offsuit">
            KJ
          </div>
          <div id="_QJo" className="cards offsuit">
            QJ
          </div>
          <div id="_JJ" className="cards pair">
            JJ
          </div>
          <div id="_JTs" className="cards suited">
            JT
          </div>
          <div id="_J9s" className="cards suited">
            J9
          </div>
          <div id="_J8s" className="cards suited">
            J8
          </div>
          <div id="_J7s" className="cards suited">
            J7
          </div>
          <div id="_J6s" className="cards suited">
            J6
          </div>
          <div id="_J5s" className="cards suited">
            J5
          </div>
          <div id="_J4s" className="cards suited">
            J4
          </div>
          <div id="_J3s" className="cards suited">
            J3
          </div>
          <div id="_J2s" className="cards suited">
            J2
          </div>
        </div>

        <div className="line line_T">
          <div id="_ATo" className="cards offsuit">
            AT
          </div>
          <div id="_KTo" className="cards offsuit">
            KT
          </div>
          <div id="_QTo" className="cards offsuit">
            QT
          </div>
          <div id="_JTo" className="cards offsuit">
            JT
          </div>
          <div id="_TT" className="cards pair">
            TT
          </div>
          <div id="_T9s" className="cards suited">
            T9
          </div>
          <div id="_T8s" className="cards suited">
            T8
          </div>
          <div id="_T7s" className="cards suited">
            T7
          </div>
          <div id="_T6s" className="cards suited">
            T6
          </div>
          <div id="_T5s" className="cards suited">
            T5
          </div>
          <div id="_T4s" className="cards suited">
            T4
          </div>
          <div id="_T3s" className="cards suited">
            T3
          </div>
          <div id="_T2s" className="cards suited">
            T2
          </div>
        </div>

        <div className="line line_9">
          <div id="_A9o" className="cards offsuit">
            A9
          </div>
          <div id="_K9o" className="cards offsuit">
            K9
          </div>
          <div id="_Q9o" className="cards offsuit">
            Q9
          </div>
          <div id="_J9o" className="cards offsuit">
            J9
          </div>
          <div id="_T9o" className="cards offsuit">
            T9
          </div>
          <div id="_99" className="cards pair">
            99
          </div>
          <div id="_98s" className="cards suited">
            98
          </div>
          <div id="_97s" className="cards suited">
            97
          </div>
          <div id="_96s" className="cards suited">
            96
          </div>
          <div id="_95s" className="cards suited">
            95
          </div>
          <div id="_94s" className="cards suited">
            94
          </div>
          <div id="_93s" className="cards suited">
            93
          </div>
          <div id="_92s" className="cards suited">
            92
          </div>
        </div>

        <div className="line line_8">
          <div id="_A8o" className="cards offsuit">
            A8
          </div>
          <div id="_K8o" className="cards offsuit">
            K8
          </div>
          <div id="_Q8o" className="cards offsuit">
            Q8
          </div>
          <div id="_J8o" className="cards offsuit">
            J8
          </div>
          <div id="_T8o" className="cards offsuit">
            T8
          </div>
          <div id="_98o" className="cards offsuit">
            98
          </div>
          <div id="_88" className="cards pair">
            88
          </div>
          <div id="_87s" className="cards suited">
            87
          </div>
          <div id="_86s" className="cards suited">
            86
          </div>
          <div id="_85s" className="cards suited">
            85
          </div>
          <div id="_84s" className="cards suited">
            84
          </div>
          <div id="_83s" className="cards suited">
            83
          </div>
          <div id="_82s" className="cards suited">
            82
          </div>
        </div>

        <div className="line line_7">
          <div id="_A7o" className="cards offsuit">
            A7
          </div>
          <div id="_K7o" className="cards offsuit">
            K7
          </div>
          <div id="_Q7o" className="cards offsuit">
            Q7
          </div>
          <div id="_J7o" className="cards offsuit">
            J7
          </div>
          <div id="_T7o" className="cards offsuit">
            T7
          </div>
          <div id="_97o" className="cards offsuit">
            97
          </div>
          <div id="_87o" className="cards offsuit">
            87
          </div>
          <div id="_77" className="cards pair">
            77
          </div>
          <div id="_76s" className="cards suited">
            76
          </div>
          <div id="_75s" className="cards suited">
            75
          </div>
          <div id="_74s" className="cards suited">
            74
          </div>
          <div id="_73s" className="cards suited">
            73
          </div>
          <div id="_72s" className="cards suited">
            72
          </div>
        </div>

        <div className="line line_6">
          <div id="_A6o" className="cards offsuit">
            A6
          </div>
          <div id="_K6o" className="cards offsuit">
            K6
          </div>
          <div id="_Q6o" className="cards offsuit">
            Q6
          </div>
          <div id="_J6o" className="cards offsuit">
            J6
          </div>
          <div id="_T6o" className="cards offsuit">
            T6
          </div>
          <div id="_96o" className="cards offsuit">
            96
          </div>
          <div id="_86o" className="cards offsuit">
            86
          </div>
          <div id="_76o" className="cards offsuit">
            76
          </div>
          <div id="_66" className="cards pair">
            66
          </div>
          <div id="_65s" className="cards suited">
            65
          </div>
          <div id="_64s" className="cards suited">
            64
          </div>
          <div id="_63s" className="cards suited">
            63
          </div>
          <div id="_62s" className="cards suited">
            62
          </div>
        </div>

        <div className="line line_5">
          <div id="_A5o" className="cards offsuit">
            A5
          </div>
          <div id="_K5o" className="cards offsuit">
            K5
          </div>
          <div id="_Q5o" className="cards offsuit">
            Q5
          </div>
          <div id="_J5o" className="cards offsuit">
            J5
          </div>
          <div id="_T5o" className="cards offsuit">
            T5
          </div>
          <div id="_95o" className="cards offsuit">
            95
          </div>
          <div id="_85o" className="cards offsuit">
            85
          </div>
          <div id="_75o" className="cards offsuit">
            75
          </div>
          <div id="_65o" className="cards offsuit">
            65
          </div>
          <div id="_55" className="cards pair">
            55
          </div>
          <div id="_54s" className="cards suited">
            54
          </div>
          <div id="_53s" className="cards suited">
            53
          </div>
          <div id="_52s" className="cards suited">
            52
          </div>
        </div>

        <div className="line line_4">
          <div id="_A4o" className="cards offsuit">
            A4
          </div>
          <div id="_K4o" className="cards offsuit">
            K4
          </div>
          <div id="_Q4o" className="cards offsuit">
            Q4
          </div>
          <div id="_J4o" className="cards offsuit">
            J4
          </div>
          <div id="_T4o" className="cards offsuit">
            T4
          </div>
          <div id="_94o" className="cards offsuit">
            94
          </div>
          <div id="_84o" className="cards offsuit">
            84
          </div>
          <div id="_74o" className="cards offsuit">
            74
          </div>
          <div id="_64o" className="cards offsuit">
            64
          </div>
          <div id="_54o" className="cards offsuit">
            54
          </div>
          <div id="_44" className="cards pair">
            44
          </div>
          <div id="_43s" className="cards suited">
            43
          </div>
          <div id="_42s" className="cards suited">
            42
          </div>
        </div>

        <div className="line line_3">
          <div id="_A3o" className="cards offsuit">
            A3
          </div>
          <div id="_K3o" className="cards offsuit">
            K3
          </div>
          <div id="_Q3o" className="cards offsuit">
            Q3
          </div>
          <div id="_J3o" className="cards offsuit">
            J3
          </div>
          <div id="_T3o" className="cards offsuit">
            T3
          </div>
          <div id="_93o" className="cards offsuit">
            93
          </div>
          <div id="_83o" className="cards offsuit">
            83
          </div>
          <div id="_73o" className="cards offsuit">
            73
          </div>
          <div id="_63o" className="cards offsuit">
            63
          </div>
          <div id="_53o" className="cards offsuit">
            53
          </div>
          <div id="_43o" className="cards offsuit">
            43
          </div>
          <div id="_33" className="cards pair">
            33
          </div>
          <div id="_32s" className="cards suited">
            32
          </div>
        </div>

        <div className="line line_2">
          <div id="_A2o" className="cards offsuit">
            A2
          </div>
          <div id="_K2o" className="cards offsuit">
            K2
          </div>
          <div id="_Q2o" className="cards offsuit">
            Q2
          </div>
          <div id="_J2o" className="cards offsuit">
            J2
          </div>
          <div id="_T2o" className="cards offsuit">
            T2
          </div>
          <div id="_92o" className="cards offsuit">
            92
          </div>
          <div id="_82o" className="cards offsuit">
            82
          </div>
          <div id="_72o" className="cards offsuit">
            72
          </div>
          <div id="_62o" className="cards offsuit">
            62
          </div>
          <div id="_52o" className="cards offsuit">
            52
          </div>
          <div id="_42o" className="cards offsuit">
            42
          </div>
          <div id="_32o" className="cards offsuit">
            32
          </div>
          <div id="_22" className="cards pair">
            22
          </div>
        </div>
        <div id="matrice-information" className="text-lg w-full text-center">
          -
        </div>
        <div
          id="matrice-position-information"
          className="text-base w-full text-center"
        >
          - -
        </div>
        <h1 className="flex flex-row items-center mt-8 w-full justify-center text-3xl">
          <span className="text-green-500">push</span>
          <span className="text-teal-700 text-xl">&nbsp;or&nbsp; </span>
          <span className="text-neutral-400">fold</span>
        </h1>
      </aside>
    </>
  );
};

export default Matrice;
