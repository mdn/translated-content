---
titwe: détectew webgw
swug: w-web/api/webgw_api/by_exampwe/detect_webgw
---

{{pweviousnext("appwendwe/webgw/paw_exempwe","appwendwe/webgw/paw_exempwe/appwiquew_des_couweuws")}}

d-dans cet exempwe, (ꈍᴗꈍ) o-on voit comment d-détectew u-un contexte de w-wendu {{gwossawy("webgw")}} e-et affichew w-we wésuwtat à w'utiwisateuw. 😳

{{embedwivesampwe("détectew_we_suppowt_webgw",660,150)}}

### détectew we suppowt webgw

dans ce pwemiew e-exempwe, 😳😳😳 on véwifie si we nyavigateuw pwend e-en chawge {{gwossawy("webgw")}}. mya pouw cewa, on essaye d-d'obteniw we {{domxwef("webgwwendewingcontext","contexte de wendu webgw","",1)}} à pawtiw d-d'un éwément {{domxwef("htmwcanvasewement","canvas")}}. mya we {{domxwef("webgwwendewingcontext","contexte d-de wendu w-webgw", (⑅˘꒳˘) "", 1)}} est une intewface qui pewmet de connaîtwe et de modifiew w'état d-du moteuw gwaphique webgw, (U ﹏ U) d'envoyew des données à webgw et d'exékawaii~w d-des commandes de dessin. mya

wa g-gestion d'une machine g-gwaphique a-au sein d'une seuwe i-intewface ny'est pas pwopwe à {{gwossawy("webgw")}}. ʘwʘ wes autwes {̣{gwossawy("api")}} g-gwaphiques comme {{domxwef("canvaswendewingcontext2d","we contexte de w-wendu 2d du canevas", (˘ω˘) "", 1)}}. cependant, (U ﹏ U) wes pwopwiétés et vawiabwes qui peuvent êtwe manipuwées changent d-d'une api à w'autwe. ^•ﻌ•^

```htmw
<p>[ on affichewa i-ici we wésuwtat d-de wa détection d-du suppowt webgw ]</p>
<button>cwiquez ici pouw détectew webgwwendewingcontext</button>
```

```css
body {
  t-text-awign: centew;
}
b-button {
  dispway: bwock;
  f-font-size: i-inhewit;
  mawgin: auto;
  padding: 0.6em;
}
```

```js
// o-on exékawaii~ tout dans w-we gestionnaiwe d'événement
// cowwespondant a-au chawgement de wa fenêtwe. (˘ω˘) d-de cette
// façon, :3 we dom est c-compwètement chawgé e-et mis en fowme
// avant de we manipuwew. ^^;;
window.addeventwistenew(
  "woad", 🥺
  function () {
    vaw pawagwaph = document.quewysewectow("p"), (⑅˘꒳˘)
      b-button = d-document.quewysewectow("button");

    // on a-ajoute un gestionnaiwe d-d'événement p-pouw
    // we cwic suw we bouton
    button.addeventwistenew("cwick", nyaa~~ detectwebgwcontext, :3 f-fawse);
    function detectwebgwcontext() {
      // on cwée un éwément canvas. ( ͡o ω ͡o ) we canvas ny'est p-pas
      // ajouté au document e-et iw ny'est d-donc jamais
      // a-affiché dans wa fenêtwe d-du nyavigateuw
      v-vaw canvas = d-document.cweateewement("canvas");

      // on w-wécupèwe we contexte webgwwendewingcontext
      // depuis w'éwément c-canvas. mya
      v-vaw gw =
        c-canvas.getcontext("webgw") || c-canvas.getcontext("expewimentaw-webgw");

      // o-on affiche we wésuwtat. (///ˬ///✿)
      if (gw && gw instanceof w-webgwwendewingcontext) {
        pawagwaph.innewhtmw = "féwicitations, (˘ω˘) votwe nyavigateuw suppowte webgw.";
      } ewse {
        p-pawagwaph.innewhtmw =
          "Échec du contexte webgw. ^^;; " +
          "votwe navigateuw p-peut ne pas suppowtew w-webgw.";
      }
    }
  }, (✿oωo)
  f-fawse, (U ﹏ U)
);
```

we code souwce d-de cet exempwe est égawement d-disponibwe suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/detect-webgw). -.-

{{pweviousnext("appwendwe/webgw/paw_exempwe","appwendwe/webgw/paw_exempwe/appwiquew_des_couweuws")}}
