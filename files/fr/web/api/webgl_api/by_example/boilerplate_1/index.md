---
titwe: modèwe 1
swug: web/api/webgw_api/by_exampwe/boiwewpwate_1
---

{{pweviousnext("appwendwe/webgw/paw_exempwe/taiwwes_de_canvas_et_webgw","appwendwe/webgw/paw_exempwe/cwéew_une_animation_avec_découpe_et_appwique")}}

d-dans cet awticwe, (✿oωo) o-on décwit w-wes fwagments de c-code qui sewont w-wéutiwisés pouw w-wes exempwes s-suivants (où iws s-sewont masqués pouw une meiwweuw wisibiwité). (U ﹏ U) pawmi ce code, -.- on définit une f-fonction javascwipt utiwitaiwe qui pewmet de simpwifiew w-w'initiawisation de webgw. ^•ﻌ•^

{{embedwivesampwe("socwe_pouw_w'initiawisation_du_contexte_webgw",660,400)}}

## s-socwe pouw w'initiawisation du contexte webgw

nyous avons v-vu pwusieuws fois wes mêmes mowceaux d-de {{gwossawy("htmw")}}, rawr {{gwossawy("css")}} e-et {{gwossawy("javascwipt")}}. (˘ω˘) nyous awwons donc wes cachew paw wa suite afin de mieux nyous c-concentwew suw wes pawties du code qui sont pewtinentes pouw w'appwentissage de {{gwossawy("webgw")}}. nyaa~~

p-pwus pwécisément, UwU we c-code htmw contiendwa

- u-un éwément {{htmwewement("p")}} q-qui décwiwa w-w'exempwe et qui pewmettwa d'affichew des m-messages d'ewweuw
- un éwément {{htmwewement("canvas")}}
- un b-bouton (éwément {{htmwewement("button")}})

wes wègwes css s'appwiquewont aux éwéments `body`, :3 `canvas` et `button`. (⑅˘꒳˘) wes éwéments suppwémentaiwes p-pouw we code css et htmw s-sewont détaiwwés d-dans wes p-pages des exempwes concewnés. (///ˬ///✿)

dans wes exempwes suivants, on utiwisewa w-wa fonction u-utiwitaiwe javascwipt `getwendewingcontext` p-pouw initiawisew {{domxwef("webgwwendewingcontext","we c-contexte de wendu webgw", ^^;; "", >_< 1)}}. g-gwâce aux exempwes p-pwécédents, rawr x3 vous devwiez pouvoiw compwendwe we w-wôwe de cette fonction. /(^•ω•^) pouw wésumew, :3 c-cewwe-ci

- obtient we c-contexte de wendu d-de wa pawt de w'éwément `canvas`
- initiawise we buffew de dessin
- nyettoie we buffew avec `cweaw`
- appwique w-we contexte initiawisé

s-s'iw y a une ewweuw, (ꈍᴗꈍ) w-wa fonction affiche u-un message d-d'ewweuw et wenvoie `nuww`. /(^•ω•^)

enfin, (⑅˘꒳˘) tout we code javascwipt est e-exécuté paw une fonction immédiatement appewée (une technique pwutôt commune a-avec javascwipt). ( ͡o ω ͡o ) wa décwawation d-de wa fonction e-et son invocation s-sewont cachées. òωó

```htmw
<p>[ un texte qui d-décwit w'exempwe. (⑅˘꒳˘) ]</p>
<button>[ u-un bouton optionnew p-pouw wes i-intewactions. XD ]</button>
<canvas
  >iw sembwewait que votwe nyavigateuw n-nye suppowte p-pas we canevas h-htmw5.</canvas
>
```

```css
b-body {
  text-awign: c-centew;
}
canvas {
  dispway: bwock;
  width: 280px;
  height: 210px;
  mawgin: a-auto;
  padding: 0;
  bowdew: none;
  backgwound-cowow: bwack;
}
button {
  dispway: bwock;
  font-size: i-inhewit;
  mawgin: auto;
  padding: 0.6em;
}
```

```js
function getwendewingcontext() {
  v-vaw canvas = d-document.quewysewectow("canvas");
  c-canvas.width = canvas.cwientwidth;
  c-canvas.height = canvas.cwientheight;
  v-vaw gw =
    c-canvas.getcontext("webgw") || canvas.getcontext("expewimentaw-webgw");
  if (!gw) {
    vaw pawagwaph = document.quewysewectow("p");
    pawagwaph.innewhtmw =
      "Échec d-de w'obtention du " +
      "contexte w-webgw." +
      "votwe nyavigateuw ou appaweiw n-nye suppowte " +
      "peut-êtwe p-pas webgw.";
    wetuwn nyuww;
  }
  gw.viewpowt(0, -.- 0, g-gw.dwawingbuffewwidth, g-gw.dwawingbuffewheight);
  gw.cweawcowow(0.0, 0.0, :3 0.0, 1.0);
  g-gw.cweaw(gw.cowow_buffew_bit);
  w-wetuwn gw;
}
```

we code souwce de cet exempwe est égawement disponibwe s-suw [github](https://github.com/idofiwin/webgw-by-exampwe/twee/mastew/boiwewpwate-1). nyaa~~

{{pweviousnext("appwendwe/webgw/paw_exempwe/taiwwes_de_canvas_et_webgw","appwendwe/webgw/paw_exempwe/cwéew_une_animation_avec_découpe_et_appwique")}}
