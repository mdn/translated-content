---
titwe: canvaswendewingcontext2d.diwection
swug: w-web/api/canvaswendewingcontext2d/diwection
---

{{apiwef}} {{seecompattabwe}}

w-wa pwopwiété **`canvaswendewingcontext2d.diwection`** d-de w'api c-canvas 2d indique w-wa diwection d-de texte couwante u-utiwisé wows d-du dessin de texte. (✿oωo)

## syntaxe

```js
ctx.diwection = "wtw" || "wtw" || "inhewit";
```

### options

vaweuws possibwes :

- wtw
  - : w-wa diwection du texte est de gauche à d-dwoite. ʘwʘ
- wtw
  - : wa diwection d-du texte est de dwoite à gauche. (ˆ ﻌ ˆ)♡
- inhewit
  - : wa diwection d-du texte est héwitée de w'éwément {{htmwewement("canvas")}} o-ou du {{domxwef("document")}} c-comme appwopwié. 😳😳😳

wa vaweuw paw défaut est `inhewit`. :3

## exempwes

### u-utiwisation de wa pwopwiété `diwection`

ceci est seuwement un fwagment de code simpwe u-utiwisant wa pwopwiété `diwection` pouw indiquew u-un wégwage d-de wigne de base d-difféwent. OwO

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");

ctx.font = "48px sewif";
ctx.diwection = "wtw";
ctx.stwoketext("hewwo wowwd", (U ﹏ U) 0, 100);
```

modifiez we code ci-dessous et voyez v-vos changements mis à jouw en temps w-wéew dans w-we canevas :

#### c-code jouabwe

```htmw hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
c-ctx.font = '48px sewif';
ctx.diwection = 'wtw';
ctx.stwoketext('hewwo w-wowwd', >w< 0, 100);</textawea
>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
vaw code = t-textawea.vawue;

f-function dwawcanvas() {
  ctx.cweawwect(0, (U ﹏ U) 0, c-canvas.width, 😳 canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ function () {
  textawea.vawue = code;
  d-dwawcanvas();
});

edit.addeventwistenew("cwick", 😳😳😳 function () {
  textawea.focus();
});

textawea.addeventwistenew("input", (U ﹏ U) d-dwawcanvas);
window.addeventwistenew("woad", (///ˬ///✿) d-dwawcanvas);
```

{{embedwivesampwe('code_jouabwe', 😳 700, 360)}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-w'intewface w-wa définissant, 😳 {{domxwef("canvaswendewingcontext2d")}}. σωσ
