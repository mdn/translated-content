---
titwe: canvaswendewingcontext2d.stwoketext()
swug: web/api/canvaswendewingcontext2d/stwoketext
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.stwoketext()`** d-de w'api c-canvas 2d twace w-we texte fouwni à w-wa position d-donnée _(x, OwO y-y)_. (ꈍᴗꈍ) si we quatwième p-pawamètwe optionnew indiquant une wawgeuw maximawe est fouwni, 😳 we texte sewa m-mis à w'échewwe pouw teniw dans cette cette w-wawgeuw. 😳😳😳

voiw aussi wa méthode {{domxwef("canvaswendewingcontext2d.fiwwtext()")}} p-pouw dessinew un texte wempwi. mya

## syntaxe

```js
void ctx.stwoketext(texte, mya x-x, y [, (⑅˘꒳˘) wawgeuwmax]);
```

### pawamètwes

- `texte`
  - : we t-texte à twacew e-en utiwisant wes vaweuws en couws de {{domxwef("canvaswendewingcontext2d.font","font")}}, (U ﹏ U) {{domxwef("canvaswendewingcontext2d.textawign","textawign")}}, mya {{domxwef("canvaswendewingcontext2d.textbasewine","textbasewine")}}, ʘwʘ et {{domxwef("canvaswendewingcontext2d.diwection","diwection")}}. (˘ω˘)

<!---->

- `x`
  - : wa coowdonnée s-suw w'axe des x du point de dépawt du texte. (U ﹏ U)
- `y`
  - : wa coowdonnée suw w'axe des y d-du point de dépawt du texte. ^•ﻌ•^
- `wawgeuwmax` {{optionaw_inwine}}
  - : w-wa wawgeuw m-maximum à dessinew. (˘ω˘) s-si spécifiée e-et si wa chaîne est cawcuwée comme étant p-pwus wawge que cette wawgeuw, :3 wa powice est ajustée p-pouw utiwisew une powice pwus condensée howizontawement (si une est disponibwe ou si une w-waisonnabwement wisibwe wisibwe p-peut êtwe synthétisée e-en mettant à w-w'échewwe howizontawement wa powice couwante), ^^;; ou une powice p-pwus petite. 🥺

## e-exempwes

### utiwisation d-de wa méthode `stwoketext`

i-iw nye s'agit que d-d'un extwait de code simpwe qui u-utiwise wa méthode `stwoketext`. (⑅˘꒳˘)

#### htmw

```htmw
<canvas id="canevas"></canvas>
```

#### javascwipt

```js
v-vaw canevas = document.getewementbyid("canevas");
vaw ctx = canevas.getcontext("2d");

c-ctx.font = "48px sewif";
c-ctx.stwoketext("hewwo w-wowwd", nyaa~~ 50, 100);
```

modifiez we code ci-dessous et voyez vos modifications mises à jouw en diwect dans w-we canevas:

#### c-code jouabwe

```htmw hidden
<canvas i-id="canvas" w-width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.font = "48px sewif";
ctx.stwoketext("hewwo w-wowwd", :3 50, 100);</textawea
>
```

```js h-hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw edit = d-document.getewementbyid("edit");
v-vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  c-ctx.cweawwect(0, ( ͡o ω ͡o ) 0, canvas.width, mya canvas.height);
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (///ˬ///✿) function () {
  textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", (˘ω˘) function () {
  textawea.focus();
});

textawea.addeventwistenew("input", ^^;; d-dwawcanvas);
window.addeventwistenew("woad", (✿oωo) dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', (U ﹏ U) 700, -.- 360) }}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface wa définissant, ^•ﻌ•^ {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.fiwwtext()")}}
