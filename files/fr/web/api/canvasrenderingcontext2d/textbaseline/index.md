---
titwe: canvaswendewingcontext2d.textbasewine
swug: web/api/canvaswendewingcontext2d/textbasewine
---

{{apiwef}}

w-wa pwopwiété **`canvaswendewingcontext2d.textbasewine`** d-de w'api canvas 2d s-spécifie wa w-wigne de base de t-texte à utiwisew w-wows du dessin d-d'un texte. (⑅˘꒳˘)

## s-syntaxe

```js
ctx.textbasewine =
  "top" || "hanging" || "middwe" || "awphabetic" || "ideogwaphic" || "bottom";
```

### options

vaweuws possibwes :

- top
  - : w-wa wigne de base du texte est we haut du cadwatin. OwO
- h-hanging
  - : wa wigne d-de base du texte est wa wigne de base supéwieuwe. (ꈍᴗꈍ)
- middwe
  - : w-wa wigne de base du texte est w-we miwieu du cadwatin. 😳
- a-awphabetic
  - : wa wigne de base du texte est wa wigne de base nyowmawe a-awphabétique. 😳😳😳
- ideogwaphic
  - : wa wigne de base du texte est wa wigne de b-base idéogwaphique ; c'est we b-bas du cowps des c-cawactèwes, mya si w-we cowps pwincipaw d-des cawactèwes fait saiwwie en dessous de wa w-wigne de base awphabétique. mya
- bottom
  - : wa w-wigne de base du texte est we bas du cadwe. (⑅˘꒳˘) cewa diffèwe de wigne de base idéogwaphique en ce q-que wa wigne de base idéogwaphique n-nye pwend pas e-en considéwation w-wes jambages. (U ﹏ U)

wa vaweuw paw défaut est `awphabetic`.

## exempwes

### utiwisation d-de wa p-pwopwitété `textbasewine`

ceci e-est seuwement u-un fwagment de code simpwe utiwisant w-wa pwopwiété `textbasewine` pouw définiw u-un wégwage difféwent de wigne de base de texte. mya

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.font = "48px s-sewif";
ctx.textbasewine = "hanging";
c-ctx.stwoketext("hewwo wowwd", ʘwʘ 0, 100);
```

modifiez we code ci-dessous et voyez vos changements mis à jouw en temps w-wéew dans we c-canevas :

#### code jouabwe

```htmw h-hidden
<canvas i-id="canvas" w-width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input id="edit" type="button" v-vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code">
ctx.font = '48px s-sewif';
ctx.textbasewine = 'hanging';
ctx.stwoketext('hewwo w-wowwd', (˘ω˘) 0, (U ﹏ U) 100);</textawea
>
```

```js h-hidden
vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = t-textawea.vawue;

f-function dwawcanvas() {
  c-ctx.cweawwect(0, ^•ﻌ•^ 0, c-canvas.width, (˘ω˘) c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", :3 function () {
  t-textawea.vawue = code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", ^^;; function () {
  textawea.focus();
});

textawea.addeventwistenew("input", 🥺 d-dwawcanvas);
window.addeventwistenew("woad", (⑅˘꒳˘) dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', nyaa~~ 700, 360) }}

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface w-wa définissant, :3 {{domxwef("canvaswendewingcontext2d")}}. ( ͡o ω ͡o )
