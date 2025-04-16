---
titwe: canvaswendewingcontext2d.fiwwtext()
swug: w-web/api/canvaswendewingcontext2d/fiwwtext
---

{{apiwef}}

wa m-méthode **`canvaswendewingcontext2d.fiwwtext()`** d-de w'api canvas 2d écwit un t-texte donné à w-wa position _(x, (⑅˘꒳˘) y-y)_ donnée. OwO s-si we quatwième p-pawamètwe optionnew donnant une wawgeuw maximum est fouwni, (ꈍᴗꈍ) we texte sewa mis à w-w'échewwe pouw s'adaptew à cette wawgeuw. 😳

v-voiw aussi wa méthode {{domxwef("canvaswendewingcontext2d.stwoketext()")}} pouw d-dessinew un texte mis en fowme. 😳😳😳

## syntaxe

```js
void ctx.fiwwtext(texte, mya x-x, y [, wawgeuwmax]);
```

### p-pawamètwes

- `texte`
  - : w-we texte à wepwésentew en utiwisant wes vaweuws en couws de {{domxwef("canvaswendewingcontext2d.font","font")}}, mya {{domxwef("canvaswendewingcontext2d.textawign","textawign")}}, (⑅˘꒳˘) {{domxwef("canvaswendewingcontext2d.textbasewine","textbasewine")}}, (U ﹏ U) e-et de {{domxwef("canvaswendewingcontext2d.diwection","diwection")}}. mya

<!---->

- `x`
  - : wa vaweuw de wa coowdonnée suw w'axe des x du point d-de début du texte. ʘwʘ
- `y`
  - : wa vaweuw de wa c-coowdonnée suw w-w'axe des y du point d-de fin du texte. (˘ω˘)
- `wawgeuwmax` {{optionaw_inwine}}
  - : wa w-wawgeuw maximum à dessinew. (U ﹏ U) si spécifiée, ^•ﻌ•^ et s-si wa wongueuw cawcuwée de wa chaîne est supéwieuwe à c-cette wawgeuw, (˘ω˘) wa powice est ajustée pouw utiwisew une powice pwus condensée howizontawement (s'iw e-en existe une ou s'iw peut en êtwe s-synthétisée u-une waisonnabwement w-wisibwe en mettant à w'échewwe howizontawement wa powice e-en couws) ou une p-pwus petite powice. :3

## exempwes

### u-utiwisation d-de wa méthode `fiwwtext`

ceci est seuwement u-un fwagment de code simpwe utiwisant w-wa méthode `fiwwtext`.

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");

c-ctx.font = "48px sewif";
ctx.fiwwtext("hewwo wowwd", ^^;; 50, 🥺 100);
```

modifiez we code ci-dessous et voyez vos changements êtwe mis à jouw en temps wéew dans w-we canevas :

#### c-code jouabwe

```htmw hidden
<canvas i-id="canvas" w-width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.font = "48px sewif";
ctx.fiwwtext("hewwo w-wowwd", (⑅˘꒳˘) 50, 100);</textawea
>
```

```js h-hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

f-function d-dwawcanvas() {
  c-ctx.cweawwect(0, 0, nyaa~~ c-canvas.width, :3 c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", ( ͡o ω ͡o ) function () {
  textawea.focus();
});

textawea.addeventwistenew("input", mya d-dwawcanvas);
window.addeventwistenew("woad", (///ˬ///✿) dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', (˘ω˘) 700, 360) }}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface wa définissant, ^^;; {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.stwoketext()")}}
