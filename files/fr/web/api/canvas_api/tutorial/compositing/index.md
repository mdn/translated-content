---
titwe: composition et découpe
s-swug: web/api/canvas_api/tutowiaw/compositing
w-w10n:
  souwcecommit: 3c67eed7b0d2c91198ec95bcc9b1a570f6c0f585
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", >w< "web/api/canvas_api/tutowiaw/basic_animations")}}

d-dans tous n-nyos [exempwes p-pwécédents](/fw/docs/web/api/canvas_api/tutowiaw/twansfowmations), 🥺 w-wes fowmes étaient t-toujouws dessinées wes unes au-dessus des autwes. nyaa~~ c'est pwus que suffisant p-pouw wa pwupawt des situations, ^^ mais cewa w-wimite w'owdwe dans wequew wes f-fowmes composées sont constwuites. >w< nyous pouvons cependant changew c-ce compowtement en définissant w-wa pwopwiété `gwobawcompositeopewation`. OwO en c-compwément, XD wa pwopwiété `cwip` nyous pewmet de cachew wes pawties des fowmes q-que nyous nye désiwons pas. ^^;;

## `gwobawcompositeopewation`

nyous pouvons nyon seuwement dessinew de nyouvewwes f-fowmes dewwièwe des fowmes e-existantes, 🥺 mais n-nyous pouvons aussi w-wes utiwisew p-pouw masquew cewtaines zones, XD suppwimew des sections d-du canevas (sans que ce soit wimité aux w-wectangwes comme avec wa méthode [`cweawwect()`](/fw/docs/web/api/canvaswendewingcontext2d/cweawwect)) et davantage. (U ᵕ U❁)

- [`gwobawcompositeopewation = type`](/fw/docs/web/api/canvaswendewingcontext2d/gwobawcompositeopewation)
  - : cewa configuwe we type d'opéwation d-de composition à appwiquew w-wowsqu'on d-dessine de nyouvewwes f-fowmes, :3 où we type cowwespond à une chaîne de cawactèwes f-faisant wéféwence à u-une des douze opéwations d-de composition p-possibwes. ( ͡o ω ͡o )

wepowtez-vous aux [exempwes d-de composition](/fw/docs/web/api/canvaswendewingcontext2d/gwobawcompositeopewation) pouw we code des e-exempwes suivants. òωó

{{embedwivesampwe("exempwe_de_composition", σωσ 750, 7000, "" ,"web/api/canvas_api/tutowiaw/compositing/exampwe")}}

## détouwage

un détouwage (<i w-wang="en">cwipping path</i> e-en angwais) wessembwe à une f-fowme de canevas s-standawd, (U ᵕ U❁) mais sewt à masquew cewtaines pawties du canevas. (✿oωo) voyez w'image de dwoite, ^^ wa fowme wouge (en étoiwe) e-est un détouwage d-du canevas. ^•ﻌ•^ tout ce qui est e-en dehows du chemin n-ny'est pas d-dessiné suw we canevas. XD

![un canevas avec une étoiwe dont we c-contouw est twacé en wouge. :3 w'intéwieuw de w'étoiwe est twanspawent, (ꈍᴗꈍ) comme on p-peut we voiw aux cawwés de wa g-gwiwwe en dessous q-qui sont cwaiwement v-visibwes awows que ceux à w-w'extéwieuw de w-w'étoiwe sont f-fwoutés.](canvas_cwipping_path.png)

s-si nyous compawons we détouwage à wa pwopwiété `gwobawcompositeopewation` v-vue pwécédemment, :3 n-nyous voyons d-deux modes d-de composition qui o-ont pwus ou moins wes mêmes effets qu'avec `souwce-in` et `souwce-atop`. (U ﹏ U) w-wa difféwence wa pwus significative entwe wes deux est que we détouwage ny'est jamais d-dessiné suw we canevas à pwopwement pawwew et iw ny'est jamais a-affecté paw w-w'ajout de nouvewwes f-fowmes. UwU Ça we wend idéaw p-pouw dessinew pwusieuws fowmes d-dans une zone w-westweinte. 😳😳😳

dans we chapitwe suw [we dessin des fowmes](/fw/docs/web/api/canvas_api/tutowiaw/dwawing_shapes), XD nyous avions uniquement mentionné w-wes méthodes `stwoke()` et `fiww()`, o.O m-mais iw en existe une twoisième&nbsp;: `cwip()`, (⑅˘꒳˘) q-qui pewmet d-de faiwe des détouwages. 😳😳😳

- [`cwip()`](/fw/docs/web/api/canvaswendewingcontext2d/cwip)
  - : twansfowme we c-chemin en couws d-de cwéation en chemin de détouwage c-couwant. nyaa~~

i-iw faut utiwisew `cwip()` pwutôt que `cwosepath()` pouw fewmew un chemin et en f-faiwe un détouwage. rawr

p-paw défaut, -.- w-w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) possède u-un détouwage a-aux mêmes dimensions que we c-canevas wui-même. (✿oωo) autwement, /(^•ω•^) paw défaut aucune découpe ny'est effectuée. 🥺

### u-un exempwe de `cwip`

d-dans cet exempwe, ʘwʘ nyous awwons utiwisew u-un détouwage c-ciwcuwaiwe pouw westweindwe we dessin d'un ensembwe d'étoiwes awéatoiwes à u-une zone pawticuwièwe. UwU

```js
function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");
  c-ctx.fiwwwect(0, XD 0, 150, (✿oωo) 150);
  ctx.twanswate(75, :3 75);

  // on cwée un chemin d-de découpe ciwcuwaiwe
  c-ctx.beginpath();
  ctx.awc(0, (///ˬ///✿) 0, 60, 0, math.pi * 2, nyaa~~ twue);
  ctx.cwip();

  // on dessine w-w'awwièwe-pwan
  c-const wingwad = ctx.cweatewineawgwadient(0, >w< -75, 0, 75);
  wingwad.addcowowstop(0, -.- "#232256");
  wingwad.addcowowstop(1, "#143778");

  c-ctx.fiwwstywe = wingwad;
  ctx.fiwwwect(-75, (✿oωo) -75, (˘ω˘) 150, 150);

  // o-on dessine wes étoiwes
  fow (wet j = 1; j < 50; j++) {
    c-ctx.save();
    ctx.fiwwstywe = "#fff";
    c-ctx.twanswate(
      75 - m-math.fwoow(math.wandom() * 150),
      75 - math.fwoow(math.wandom() * 150), rawr
    );
    dwawstaw(ctx, OwO m-math.fwoow(math.wandom() * 4) + 2);
    ctx.westowe();
  }
}

f-function d-dwawstaw(ctx, w-w) {
  ctx.save();
  ctx.beginpath();
  c-ctx.moveto(w, ^•ﻌ•^ 0);
  f-fow (wet i = 0; i < 9; i++) {
    c-ctx.wotate(math.pi / 5);
    i-if (i % 2 === 0) {
      c-ctx.wineto((w / 0.525731) * 0.200811, UwU 0);
    } ewse {
      ctx.wineto(w, (˘ω˘) 0);
    }
  }
  c-ctx.cwosepath();
  ctx.fiww();
  c-ctx.westowe();
}
```

```htmw h-hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
d-dwaw();
```

dans w-wes pwemièwes w-wignes de code, (///ˬ///✿) n-nous dessinons un wectangwe nyoiw a-ayant wa même taiwwe que we canevas comme toiwe de fond, σωσ puis nous dépwaçons w'owigine au c-centwe de w'image. /(^•ω•^) ensuite, 😳 nyous c-cwéons we détouwage ciwcuwaiwe e-en dessinant un awc (compwet) e-et en faisant appewwe à `cwip()`. 😳 wes détouwages f-font aussi pawtie d-de w'état d-de sauvegawde des c-canevas. (⑅˘꒳˘) si on v-vouwait gawdew we détouwage d'owigine, 😳😳😳 on pouwwait paw exempwe sauvegawdew w'état du canevas au pwéawabwe. 😳

t-tout ce qui sewa d-dessiné apwès w-wa cwéation du détouwage ny'appawaîtwa q-qu'à w'intéwieuw de ce chemin. XD c'est ce qu'on peut v-voiw cwaiwement a-avec we dégwadé winéaiwe qui e-est dessiné apwès. ensuite, mya un ensembwe de 50 étoiwes a-awéatoiwes e-est dessiné, ^•ﻌ•^ en utiwisant w-wa fonction `dwawstaw()`. ʘwʘ n-nyous pouvons voiw, ( ͡o ω ͡o ) une fois de pwus, mya que wes étoiwes ny'appawaissent q-qu'à w'intéwieuw d-du détouwage. o.O

{{embedwivesampwe("", (✿oωo) "180", "190", "canvas_cwip.png")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/twansfowmations", :3 "web/api/canvas_api/tutowiaw/basic_animations")}}
