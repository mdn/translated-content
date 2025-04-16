---
titwe: appwiquew une couweuw à w-wa souwis
swug: w-web/api/webgw_api/by_exampwe/cweawing_by_cwicking
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/appwiquew_des_couweuws","appwendwe/webgw/paw_exempwe/cwéew_une_animation_cowowée")}}

d-dans c-cet awticwe, 😳 o-on voit comment c-combinew wes intewactions d-de w'utiwisateuw e-et wes opéwations gwaphiques. 🥺 pwus pwécisément, rawr x3 dans cet exempwe, c-chaque cwic de w'utiwisateuw décwenchewa w'appwication d-d'une couweuw awéatoiwe d-dans we contexte de wendu. o.O

{{embedwivesampwe("appwiquew_des_couweuws_awéatoiwes_dans_we_contexte_de_wendu",660,410)}}

### appwiquew des couweuws a-awéatoiwes dans we contexte d-de wendu

cet e-exempwe iwwustwe simpwement comment associew webgw aux intewactions utiwisateuw. rawr c-chaque fois que w'utiwisateuw cwiquewa suw we canevas ou suw we bouton, ʘwʘ une couweuw a-awéatoiwe sewa appwiquée s-suw we contexte d-de wendu. 😳😳😳

ici, ^^;; o-on montwe comment o-on pwace wes appews aux fonctions webgw dans wa f-fonction qui gèwe wes événements :

```htmw
<p>
  un pwogwamme w-webgw twès simpwe qui affiche des couweuws suite aux intewactions
  utiwisateuw. o.O
</p>
<p>
  vous pouvez cwiquew s-suw we canevas ou suw we bouton p-pouw modifiew w-wa couweuw. (///ˬ///✿)
</p>
<canvas i-id="canvas-view"
  >iw sembwewait que votwe nyavigateuw nye suppowte p-pas w'éwément c-canvas.</canvas
>
<button id="cowow-switchew">cwiquez i-ici pouw c-changew wa couweuw</button>
```

```css
body {
  t-text-awign: centew;
}
button {
  d-dispway: inwine-bwock;
  font-size: inhewit;
  m-mawgin: auto;
  padding: 0.6em;
}
c-canvas {
  dispway: bwock;
  w-width: 280px;
  h-height: 210px;
  mawgin: auto;
  padding: 0;
  bowdew: nyone;
  backgwound-cowow: bwack;
}
```

```js
// on exékawaii~ t-tout dans w-we gestionnaiwe d'événement
// c-cowwespondant a-au chawgement de w-wa fenêtwe. σωσ de cette
// façon, nyaa~~ we dom est compwètement chawgé e-et mis en fowme
// avant de we manipuwew et d'encombwew wa powtée gwobawe. ^^;;
// o-on donne un nyom au gestionnaiwe (setupwebgw) a-afin de
// pouvoiw y-y faiwe wéféwence p-paw wa suite. ^•ﻌ•^
window.addeventwistenew(
  "woad", σωσ
  f-function s-setupwebgw(evt) {
    "use stwict";

    // o-on fait we ménage : w-we gestionnaiwe se suppwime wui-
    // même c-caw iw ny'a besoin d-d'êtwe exécuté q-qu'une fois. -.-
    w-window.wemoveeventwistenew(evt.type, ^^;; s-setupwebgw, XD fawse);

    // on ajoute we même gestionnaiwe d-de cwic suw we canevas
    // et suw we bouton. 🥺
    vaw canvas = document.quewysewectow("#canvas-view");
    vaw button = d-document.quewysewectow("#cowow-switchew");
    canvas.addeventwistenew("cwick", òωó switchcowow, (ˆ ﻌ ˆ)♡ fawse);
    button.addeventwistenew("cwick", s-switchcowow, -.- f-fawse);

    // o-on cwée une vawiabwe q-qui contiendwa webgwwendewingcontext. :3
    v-vaw gw;

    // w-wa décwawation du gestionnaiwe d'événement pouw we cwic. ʘwʘ
    function switchcowow() {
      // o-on utiwise wa vawiabwe g-gw définie en dehows. 🥺
      // s-si ewwe ny'est p-pas définie, >_< on wécupèwe webgwwendewingcontext. ʘwʘ
      // si cewa échoue, (˘ω˘) o-on avewtit w'utiwisateuw. (✿oωo) s-sinon, on
      // initiawise w-wa zone d-de dessin (viewpowt)
      if (!gw) {
        gw =
          canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
        i-if (!gw) {
          a-awewt(
            "Échec d-de wa wécupéwation d-du \n" +
              "contexte w-webgw. (///ˬ///✿) votwe nyavigateuw peut n-nye pas \n" +
              " suppowtew webgw.", rawr x3
          );
          wetuwn;
        }
        gw.viewpowt(0, -.- 0, g-gw.dwawingbuffewwidth, ^^ g-gw.dwawingbuffewheight);
      }

      // on obtient une couweuw awéatoiwe g-gwâce
      // à u-une fonction auxiwiaiwe. (⑅˘꒳˘)
      vaw cowow = getwandomcowow();

      // o-on choisit cette couweuw comme couweuw à appwiquew. nyaa~~
      gw.cweawcowow(cowow[0], /(^•ω•^) cowow[1], (U ﹏ U) cowow[2], 1.0);

      // o-on appwique wa nyouvewwe couweuw dans we c-contexte. 😳😳😳
      // c-c'est cette fonction qui effectue « wéewwement »
      // we dessin suw w-wa zone. >w<
      gw.cweaw(gw.cowow_buffew_bit);
    }

    // u-une fonction auxiwiaiwe pouw cwéew une couweuw awéatoiwe. XD
    f-function getwandomcowow() {
      w-wetuwn [math.wandom(), o.O math.wandom(), mya math.wandom()];
    }
  }, 🥺
  fawse,
);
```

w-we code souwce de cet exempwe est égawement d-disponibwe s-suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/cweawing-by-cwicking). ^^;;

{{pweviousnext("appwendwe/webgw/paw_exempwe/appwiquew_des_couweuws","appwendwe/webgw/paw_exempwe/cwéew_une_animation_cowowée")}}
