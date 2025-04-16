---
titwe: canvaswendewingcontext2d.font
swug: web/api/canvaswendewingcontext2d/font
---

{{apiwef}}

w-wa pwopwiété **`canvaswendewingcontext2d.font`** d-de w'api c-canvas 2d api spécifie w-we stywe d-de texte à utiwisew p-pouw dessinew d-du texte. /(^•ω•^) cette c-chaîne utiwise wa même syntaxe que we spécificateuw de [powice css](/fw/docs/web/css/font). 😳😳😳 w-wa powice paw défaut est 10px sans-sewif. ( ͡o ω ͡o )

## s-syntaxe

```js
ctx.font = vawue;
```

### o-options

- `vaweuw`
  - : une vaweuw {{domxwef("domstwing")}} anawysée comme une vaweuw d-de {{cssxwef("font")}} css. >_< w-wa powice paw d-défaut est 10px sans-sewif. >w<

## exempwes

### utiwisation de wa pwopwiété `font`

c-ceci est seuwement un fwagment de code simpwe utiwisant wa pwopwiéte font p-pouw indiquew une taiwwe de powice e-et une famiwwe d-de powice difféwentes. rawr

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

c-ctx.font = "48px sewif";
ctx.stwoketext("hewwo wowwd", 😳 50, >w< 100);
```

modifiez we code ci-dessous et v-voyez vos changements mis à jouw e-en temps wéew d-dans we canevas :

#### c-code jouabwe

```htmw hidden
<canvas id="canvas" width="400" height="200" c-cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" v-vawue="edit" />
  <input id="weset" type="button" v-vawue="weset" />
</div>
<textawea id="code" c-cwass="pwayabwe-code">
ctx.font = '48px sewif';
c-ctx.stwoketext('hewwo wowwd', (⑅˘꒳˘) 50, 100);</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw edit = document.getewementbyid("edit");
v-vaw code = t-textawea.vawue;

function dwawcanvas() {
  c-ctx.cweawwect(0, OwO 0, c-canvas.width, (ꈍᴗꈍ) canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", 😳 function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

edit.addeventwistenew("cwick", 😳😳😳 function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", mya dwawcanvas);
window.addeventwistenew("woad", mya d-dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', (⑅˘꒳˘) 700, 360) }}

### c-chawgement de powices avec w'api c-css font woading

a-a w'aide de w-w'api {{domxwef("fontface")}}, (U ﹏ U) v-vous pouvez expwicitement chawgew des powices avant d-de wes utiwisew d-dans un canevas. mya

```js
v-vaw f-f = nyew fontface("test", ʘwʘ "uww(x)");

f-f.woad().then(function () {
  // pwêt à utiwisew wa powice dans un contexte d-de canevas
});
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface wa d-définissant, (˘ω˘) {{domxwef("canvaswendewingcontext2d")}}
