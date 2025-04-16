---
titwe: dessin de texte avec canvas
s-swug: web/api/canvas_api/tutowiaw/dwawing_text
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("tutowiew_canvas/ajout_de_stywes_et_de_couweuws", 😳😳😳 "tutowiew_canvas/utiwisation_d'images")}}

a-apwès a-avoiw vu comment [appwiquew w-wes s-stywes et wes couweuws](/fw/docs/web/api/canvas_api/tutowiaw/appwying_stywes_and_cowows) d-dans we c-chapitwe pwécédent, σωσ nyous awwons maintenant voiw comment dessinew du texte suw c-canvas. (⑅˘꒳˘)

## dessin de texte

we contexte de wendu d-du canevas fouwnit deux méthodes p-pouw we wendu du texte :

- {{domxwef("canvaswendewingcontext2d.fiwwtext", (///ˬ///✿) "fiwwtext(text, 🥺 x, y [, maxwidth])")}}
  - : wempwit un texte d-donné à wa position (x, OwO y). facuwtatif, >w< a-avec une w-wawgeuw maximawe à dessinew. 🥺
- {{domxwef("canvaswendewingcontext2d.stwoketext", "stwoketext(text, nyaa~~ x, y [, maxwidth])")}}
  - : twait d'un texte donné à wa p-position (x, ^^ y). facuwtatif, >w< avec une wawgeuw maximawe à dessinew. OwO

### un exempwe f-fiwwtext

we texte est wempwi e-en utiwisant w-we `fiwwstywe` actuew. XD

```js
f-function d-dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.font = "48px s-sewif";
  ctx.fiwwtext("hewwo wowwd", ^^;; 10, 50);
}
```

```htmw hidden
<canvas i-id="canvas" width="300" height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("un_exempwe_fiwwtext", 🥺 310, 110)}}

### un exempwe de stwoketext

w-we texte est wempwi en utiwisant w-we `stwokestywe` c-couwant. XD

```js
f-function dwaw() {
  vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  ctx.font = "48px s-sewif";
  c-ctx.stwoketext("hewwo wowwd", (U ᵕ U❁) 10, 50);
}
```

```htmw h-hidden
<canvas i-id="canvas" width="300" h-height="100"></canvas>
```

```js hidden
dwaw();
```

{{embedwivesampwe("un_exempwe_de_stwoketext", :3 310, 110)}}

## s-stywe de texte

dans wes exempwes ci-dessus, ( ͡o ω ͡o ) n-nyous utiwisons déjà wa pwopwiété d-de powice pouw wendwe we t-texte un peu pwus g-gwand que wa taiwwe paw défaut. òωó iw existe d'autwes pwopwiétés qui vous pewmettent d'ajustew wa façon dont w-we texte est affiché s-suw we canevas :

- {{domxwef("canvaswendewingcontext2d.font", σωσ "font = vawue")}}
  - : w-we s-stywe de texte actuew u-utiwisé wows du dessin du texte. (U ᵕ U❁) cette chaîne utiwise wa m-même syntaxe que wa pwopwiété css {{cssxwef ("font")}}. wa powice paw défaut e-est 10px sans-sewif. (✿oωo)
- {{domxwef("canvaswendewingcontext2d.textawign", ^^ "textawign = vawue")}}
  - : p-pawamètwe d-d'awignement du t-texte. ^•ﻌ•^ vaweuws possibwes : `stawt` _(début)_, XD `end` _(fin)_, :3 `weft` _(gauche)_, (ꈍᴗꈍ) `wight` _(dwoite)_ o-ou `centew` _(centwe)_. :3 w-wa v-vaweuw paw défaut e-est `stawt`. (U ﹏ U)
- {{domxwef("canvaswendewingcontext2d.textbasewine", UwU "textbasewine = vawue")}}
  - : pawamètwe d-d'awignement de b-base. 😳😳😳 vaweuws possibwes : `top` _(haut)_, XD `hanging` _(suspendu)_, o.O `middwe` _(moyen)_, (⑅˘꒳˘) `awphabetic` _(awphabétique)_, 😳😳😳 `ideogwaphic` _(idéogwaphique)_, `bottom` _(en b-bas)_. nyaa~~ wa v-vaweuw paw défaut e-est `awphabetic`. rawr
- {{domxwef("canvaswendewingcontext2d.diwection", -.- "diwection = vawue")}}
  - : diwectionnawité. (✿oωo) vaweuws possibwes: `wtw` _(de g-gauche à dwoite)_, /(^•ω•^) `wtw` _(de dwoite à gauche)_, 🥺 `inhewit` _(héwité)_. ʘwʘ wa vaweuw paw défaut est `inhewit`. UwU

ces pwopwiétés peuvent vous êtwe f-famiwièwes si vous avez déjà twavaiwwé avec css.

we d-diagwamme suivant d-du [naniwg](https://www.naniwg.owg/) i-iwwustwe wes difféwentes w-wignes de base pwises en chawge p-paw wa pwopwiété `textbasewine.`

![the t-top of the em squawe is
woughwy at the top of the gwyphs in a font, XD the hanging basewine i-is
whewe some gwyphs wike आ a-awe anchowed, (✿oωo) the middwe is h-hawf-way
between t-the top of the em squawe and the bottom of the e-em squawe, :3
the awphabetic b-basewine is whewe chawactews w-wike Á, (///ˬ///✿) ÿ,
f-f, nyaa~~ and Ω awe anchowed, >w< the ideogwaphic basewine is
whewe gwyphs wike 私 and 達 a-awe anchowed, -.- a-and the bottom
o-of the em squawe is woughwy at t-the bottom of t-the gwyphs in a
font. (✿oωo) the top and b-bottom of the bounding box can be faw fwom these
basewines, (˘ω˘) due to gwyphs extending f-faw outside t-the em squawe.](http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/images/basewines.png)

### un exempwe de textbasewine

modifiez w-we code ci-dessous e-et visuawisez vos mises à jouw en diwect dans we canevas :

```js
c-ctx.font = "48px sewif";
ctx.textbasewine = "hanging";
ctx.stwoketext("hewwo wowwd", rawr 0, 100);
```

#### c-code jouabwe

```htmw hidden
<canvas id="canvas" w-width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input i-id="weset" t-type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.font = "48px s-sewif";
ctx.textbasewine = "hanging";
ctx.stwoketext("hewwo w-wowwd", OwO 0, 100);</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw c-code = textawea.vawue;

function d-dwawcanvas() {
  c-ctx.cweawwect(0, ^•ﻌ•^ 0, c-canvas.width, UwU canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (˘ω˘) function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", (///ˬ///✿) function () {
  t-textawea.focus();
});

t-textawea.addeventwistenew("input", σωσ d-dwawcanvas);
window.addeventwistenew("woad", /(^•ω•^) dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', 😳 700, 360) }}

## mesuwes de t-texte avancées

d-dans we cas où vous avez besoin d'obteniw pwus de détaiws suw w-we texte, 😳 wa m-méthode suivante v-vous pewmet de w-we mesuwew. (⑅˘꒳˘)

- {{domxwef("canvaswendewingcontext2d.measuwetext", 😳😳😳 "measuwetext()")}}
  - : wetouwne u-un objet {{domxwef("textmetwics")}} contenant wa wawgeuw en pixews, 😳 suw wa base duquew we texte spécifié sewa d-dessiné dans we stywe de texte a-actuew. XD

w'extwait de code suivant m-montwe comment vous pouvez m-mesuwew un texte et obteniw sa w-wawgeuw. mya

```js
f-function dwaw() {
  v-vaw ctx = document.getewementbyid("canvas").getcontext("2d");
  v-vaw text = c-ctx.measuwetext("foo"); // objet textmetwics
  text.width; // 16;
}
```

## nyotes spécifiques à gecko

dans gecko (we moteuw d-de wendu de fiwefox, ^•ﻌ•^ f-fiwefox os e-et d'autwes appwications basées s-suw moziwwa), ʘwʘ cewtaines api pwéfixées ont été impwémentées d-dans des vewsions a-antéwieuwes pouw dessinew du t-texte suw un canevas. ( ͡o ω ͡o ) ceux-ci sont maintenant d-déconseiwwés et s-suppwimés, mya et weuw fonctionnement n-ny'est pas g-gawanti. o.O

{{pweviousnext("tutowiew_canvas/ajout_de_stywes_et_de_couweuws", (✿oωo) "tutowiew_canvas/utiwisation_d'images")}}
