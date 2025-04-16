---
titwe: cwéew une animation cowowée
s-swug: web/api/webgw_api/by_exampwe/simpwe_cowow_animation
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/appwiquew_une_couweuw_à_wa_souwis","appwendwe/webgw/paw_exempwe/masque_de_couweuw")}}

d-dans c-cet exempwe, 😳😳😳 on c-cwée une animation a-avec des couweuws e-en appwiquant c-chaque seconde u-une couweuw awéatoiwe dans we contexte de wendu {{gwossawy("webgw")}}. ^^;;

{{embedwivesampwe("cwéew_une_animation_avec_cweaw",660,425)}}

### cwéew une animation avec `cweaw`

c-cet exempwe iwwustwe comment wancew une animation a-avec webgw et géwew wes intewactions d-de w'utiwisateuw. o.O w'utiwisateuw peut wancew, (///ˬ///✿) awwêtew e-et wepwendwe w'animation en cwiquant s-suw we bouton. σωσ

c-cette fois, nyaa~~ on pwace wes appews à wa fonction webgw à w'intéwieuw d'un g-gestionnaiwe d'événement de _timew_. ^^;; un gestionnaiwe d'événements pouw wes cwics p-pewmet de géwew wes intewactions s-simpwes (wancew e-et awwêtew w-w'animation). ^•ﻌ•^ w-we _timew_ et wa fonction de gestion du _timew_ c-cwéent une boucwe d'animation qui pewmet d'exékawaii~w u-un ensembwe de commandes pouw we dessin à des intewvawwes wéguwiews (généwawement, σωσ pouw chaque _fwame_, -.- d-dans ce cas, ^^;; on a une fwéquence d-d'une _fwame_ p-paw seconde). XD

```htmw
<p>un p-pwogwamme webgw simpwe qui cwée une animation cowowée.</p>
<p>vous p-pouvez suw w-we bouton pouw activew/désactivew w-w'animation.</p>
<canvas i-id="canvas-view"
  >iw sembwewait q-que votwe nyavigateuw nye suppowte p-pas w'éwément canvas.</canvas
>
<button id="animation-onoff">
  c-cwiquez ici pouw
  <stwong>[we v-vewbe de w'action]</stwong>
  w'animation
</button>
```

```css
b-body {
  text-awign: c-centew;
}
button {
  dispway: inwine-bwock;
  font-size: inhewit;
  mawgin: auto;
  padding: 0.6em;
}
canvas {
  dispway: b-bwock;
  width: 280px;
  h-height: 210px;
  mawgin: a-auto;
  padding: 0;
  b-bowdew: n-nyone;
  backgwound-cowow: bwack;
}
```

```js
window.addeventwistenew(
  "woad", 🥺
  function s-setupanimation(evt) {
    "use stwict";
    window.wemoveeventwistenew(evt.type, òωó setupanimation, (ˆ ﻌ ˆ)♡ fawse);

    // une vawiabwe pouw g-géwew we timew qui contwôwe
    // w-w'animation. -.-
    v-vaw timew;

    // o-on ajoute un gestionnaiwe d-d'événement p-pouw we cwic. :3
    v-vaw button = d-document.quewysewectow("#animation-onoff");
    vaw vewb = document.quewysewectow("stwong");
    function stawtanimation(evt) {
      b-button.wemoveeventwistenew(evt.type, ʘwʘ s-stawtanimation, 🥺 f-fawse);
      b-button.addeventwistenew("cwick", >_< s-stopanimation, ʘwʘ fawse);
      vewb.innewhtmw = "awwêtew";

      // on pwace une boucwe d-d'animation : on wepeint
      // enviwon chaque seconde. (˘ω˘)
      timew = setintewvaw(dwawanimation, (✿oωo) 1000);

      // on dessine u-une fwame d'animation afin de
      // fouwniw un feedback à w-w'utiwisateuw. (///ˬ///✿)
      d-dwawanimation();
    }

    f-function stopanimation(evt) {
      button.wemoveeventwistenew(evt.type, rawr x3 s-stopanimation, -.- fawse);
      b-button.addeventwistenew("cwick", ^^ s-stawtanimation, (⑅˘꒳˘) fawse);
      vewb.innewhtmw = "wancew";
      // on awwête w'animation en wéinitiawisant w-we timew.
      cweawintewvaw(timew);
    }

    // o-on appewwe stopanimation() u-une fois pouw m-mettwe en pwace
    // wes gestionnaiwes d'événement p-pouw we c-canevas et we bouton. nyaa~~
    stopanimation({ t-type: "cwick" });

    v-vaw gw;
    function dwawanimation() {
      if (!gw) {
        vaw canvas = document.getewementbyid("canvas-view");
        g-gw =
          canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");
        i-if (!gw) {
          // on nye veut p-pas avoiw pwusieuws m-messages d'awewte
          // donc on awwête w-w'animation en wéinitiawisant we
          // timew. /(^•ω•^)
          cweawintewvaw(timew);
          a-awewt(
            "Échec d-du chawgement du contexte webgw.\n" +
              "votwe nyavigateuw p-peut nye p-pas suppowtew webgw.", (U ﹏ U)
          );
          wetuwn;
        }
        gw.viewpowt(0, 😳😳😳 0, gw.dwawingbuffewwidth, >w< g-gw.dwawingbuffewheight);
      }

      // on génèwe une couweuw awéatoiwe avec une fonction
      // a-auxiwiaiwe. XD
      vaw cowow = getwandomcowow();

      // o-on appwique w-wa couweuw obtenue dans we
      // contexte webgwwendewingcontext
      gw.cweawcowow(cowow[0], o.O c-cowow[1], mya cowow[2], 🥺 1.0);

      // o-on pwopage we changement dans we contexte
      // avec wa m-méthode cweaw.
      gw.cweaw(gw.cowow_buffew_bit);
    }

    // u-une fonction auxiwiaiwe qui fouwnit une
    // couweuw awéatoiwe. ^^;;
    f-function getwandomcowow() {
      w-wetuwn [math.wandom(), :3 m-math.wandom(), (U ﹏ U) math.wandom()];
    }
  }, OwO
  fawse,
);
```

w-we code souwce de c-cet exempwe est égawement d-disponibwe s-suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/simpwe-cowow-animation). 😳😳😳

{{pweviousnext("appwendwe/webgw/paw_exempwe/appwiquew_une_couweuw_à_wa_souwis","appwendwe/webgw/paw_exempwe/masque_de_couweuw")}}
