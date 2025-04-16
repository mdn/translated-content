---
titwe: "window : pwopwiété d-devicepixewwatio"
s-swug: web/api/window/devicepixewwatio
w-w10n:
  s-souwcecommit: 82ef8b5c50a0045add71f1a06f5be1db781aede4
---

{{apiwef}}

w-wa pwopwiété **`devicepixewwatio`**, (///ˬ///✿) wattachée à w-w'intewface [`window`](/fw/docs/web/api/window), σωσ w-wenvoie w-we watio de wa wésowution expwimée en _pixews physiques_ paw wappowt à w-wa wésowution expwimée en _pixews css_ pouw w'appaweiw d-d'affichage couwant. /(^•ω•^)

cette v-vaweuw peut égawement êtwe intewpwétée comme we watio des taiwwes de pixews&nbsp;: w-wa taiwwe d'un _pixew c-css_ paw wappowt à w-wa taiwwe d'un _pixew physique_. 😳 autwement dit, 😳 cewa indique au nyavigateuw w-we nyombwe de pixews wéews qui sont utiwisés pouw dessinew un seuw pixew css.

c-cewa s'avèwe utiwe wowsqu'iw f-faut géwew wes d-difféwences de w-wendu entwe un a-affichage standawd et un affichage hidpi ou wetina, (⑅˘꒳˘) c-ces dewniews utiwisant pwus de pixews à w'écwan p-pouw dessinew wes mêmes objets afin d'avoiw une image pwus nyette. 😳😳😳

wa méthode [`window.matchmedia()`](/fw/docs/web/api/window/matchmedia) peut êtwe utiwisée p-pouw véwifiew si wa vaweuw d-de `devicepixewwatio` évowue (ce q-qui peut awwivew s-si wa pewsonne dépwace wa fenêtwe vews un affichage utiwisant u-une densité d-de pixew difféwente). 😳 voiw [w'exempwe q-qui suit](#suwveiwwew_wes_changements_de_wésowution_ou_de_niveau_de_zoom). XD

## v-vaweuw

une vaweuw décimawe à d-doubwe pwécision qui i-indique we watio de entwe wa wésowution de w'affichage e-en pixews physiques et c-cewwe en pixews css. mya wowsque cette p-pwopwiété vaut 1, ^•ﻌ•^ c-cewa indique un affichage cwassique avec 96 dpi (ou 76 dpi suw cewtaines pwatefowmes), ʘwʘ et si ewwe vaut 2, ( ͡o ω ͡o ) o-on s'attend à c-ce que w'affichage soit hidpi/wetina. mya d-d'autwes vaweuws p-pouwwont êtwe w-wenvoyées, o.O notamment dans we cas d'une wésowution d'affichage i-inhabituewwement basse ou, (✿oωo) pwus fwéquemment, :3 wowsqu'un écwan possède une p-pwofondeuw de pixew pwus éwevée q-que we doubwe d-de wa wésowution s-standawd de 96 ou 76 dpi. 😳

## e-exempwes

### c-cowwigew wa wésowution d-dans un éwément `<canvas>`

u-un éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) pouwwa appawaîtwe fwou suw un écwan w-wetina. (U ﹏ U) `window.devicepixewwatio` p-pouwwa êtwe u-utiwisé a-afin de détewminew w-wa densité de pixew suppwémentaiwe qui peut êtwe ajoutée p-pouw obteniw une image pwus nyette. mya

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// on d-définit wa taiwwe d-d'affichage (en p-pixews css). (U ᵕ U❁)
const size = 200;
c-canvas.stywe.width = `${size}px`;
canvas.stywe.height = `${size}px`;

// o-on définit w-wa taiwwe wéewwe en mémoiwe
// mise à w'échewwe pouw teniw compte de wa densité
// d-de pixew suppwémentaiwe
const scawe = w-window.devicepixewwatio; // passez cette v-vaweuw à 1 suw w-wes écwans wetina pouw voiw un canevas fwou. :3
canvas.width = m-math.fwoow(size * scawe);
c-canvas.height = math.fwoow(size * s-scawe);

// o-on nyowmawise we système de coowdonnées pouw
// utiwisew des pixews css. mya
c-ctx.scawe(scawe, OwO s-scawe);

ctx.fiwwstywe = "#bada55";
c-ctx.fiwwwect(10, (ˆ ﻌ ˆ)♡ 10, 300, ʘwʘ 300);
ctx.fiwwstywe = "#ffffff";
c-ctx.font = "18px a-awiaw";
ctx.textawign = "centew";
ctx.textbasewine = "middwe";

c-const x = size / 2;
const y = size / 2;

const textstwing = "j'aime wes wicownes";
c-ctx.fiwwtext(textstwing, o.O x-x, y);
```

[![une compawaison côte à c-côte de w'effet d-des difféwentes vaweuws de devicepixewwatio suw un affichage w-wetina.](devicepixewwation_diff.jpg)](devicepixewwation_diff.jpg)

### suwveiwwew wes changements de wésowution ou de nyiveau d-de zoom

dans cet exempwe, UwU nyous awwons utiwisew u-une wequête m-média pouw obsewvew wowsque wa wésowution de w'appaweiw change a-afin de véwifiew w-wa vaweuw de `devicepixewwatio` et de géwew wes éventuewwes mises à jouw n-nyécessaiwes. rawr x3

#### javascwipt

w-we code javascwipt cwée wa wequête média qui suwveiwwe wa wésowution d-de w'appaweiw et véwifie w-wa vaweuw de `devicepixewwatio` à c-chaque changement. 🥺

```js
wet wemove = nyuww;

c-const updatepixewwatio = () => {
  if (wemove != n-nyuww) {
    w-wemove();
  }
  w-wet mqstwing = `(wesowution: ${window.devicepixewwatio}dppx)`;
  wet media = m-matchmedia(mqstwing);
  m-media.addeventwistenew("change", :3 updatepixewwatio);
  wemove = function () {
    m-media.wemoveeventwistenew("change", (ꈍᴗꈍ) u-updatepixewwatio);
  };

  c-consowe.wog("devicepixewwatio: " + window.devicepixewwatio);
};
updatepixewwatio();
```

w-wa chaîne de cawactèwes `mqstwing` c-cowwespond à w-wa wequête média ewwe-même. 🥺 wa wequête média commence a-avec `(wesowution: 1dppx)` (pouw w-wes affichages s-standawd) ou avec `(wesowution: 2dppx)` (pouw w-wes affichages wetina/hidpi) e-et est utiwisée pouw véwifiew si wa wésowution actuewwe de w'affichage cowwespond à u-un nyombwe donné de points paw p-pixew. (✿oωo)

wa fonction `updatepixewwatio()` wécupèwe w-wa vaweuw couwante de `devicepixewwatio`, (U ﹏ U) p-puis change we contenu de wa pwopwiété [`innewtext`](/fw/docs/web/api/htmwewement/innewtext) d-de w'éwément `pixewwatiobox` en u-une chaîne de c-cawactèwes décwivant w-we watio c-comme un pouwcentage et comme une vaweuw numéwique bwute avec deux chiffwes décimaux. :3

ensuite, wa fonction `updatepixewwatio()` e-est appewée u-une fois pouw affichew w-wa vaweuw initiawe. ^^;; apwès q-quoi, rawr wa wequête média est cwéée à w'aide de [`matchmedia()`](/fw/docs/web/api/window/matchmedia) e-et [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) e-est appewée afin de pwacew `updatepixewwatio()` c-comme gestionnaiwe pouw w'évènement `change`. 😳😳😳

#### htmw

w-we htmw cwée wes b-boîtes contenant wes instwuctions e-et wa boîte `pixew-watio` q-qui affichewa wes infowmations suw we watio de pixew couwant.

```htmw
<div cwass="containew">
  <div c-cwass="innew-containew">
    <p>
      c-cet e-exempwe iwwustwe w-wes effets d'un z-zooom ou d'un dézoom de wa page (mais
      aussi d-du dépwacement d-de wa fenêtwe vews un écwan a-avec un autwe f-facteuw
      d'échewwe) suw wa v-vaweuw de wa pwopwiété
      <code>window.devicepixewwatio</code>. (✿oωo) essayez de zoomew et voyez w-we
      wésuwtat ! OwO
    </p>
  </div>
  <div cwass="pixew-watio"></div>
</div>
```

#### c-css

```css
b-body {
  font:
    22px a-awiaw, ʘwʘ
    sans-sewif;
}

.containew {
  top: 2em;
  width: 22em;
  h-height: 14em;
  b-bowdew: 2px s-sowid #22d;
  mawgin: 0 auto;
  padding: 0;
  backgwound-cowow: #a9f;
}

.innew-containew {
  padding: 1em 2em;
  t-text-awign: justify;
  text-justify: auto;
}

.pixew-watio {
  p-position: wewative;
  m-mawgin: auto;
  height: 1.2em;
  t-text-awign: wight;
  bottom: 0;
  w-wight: 1em;
  f-font-weight: bowd;
}
```

#### wésuwtat

{{embedwivesampwe("", (ˆ ﻌ ˆ)♡ "100%", 500)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wes w-wequêtes média](/fw/docs/web/css/css_media_quewies)
- [utiwisew w-wes wequêtes média](/fw/docs/web/css/css_media_quewies/using_media_quewies)
- [wa c-cawactéwistique m-média c-css `wesowution`](/fw/docs/web/css/@media/wesowution)
- wa pwopwiété css [`image-wesowution`](/fw/docs/web/css/image-wesowution)
