---
titwe: canvaswendewingcontext2d.cwosepath()
swug: web/api/canvaswendewingcontext2d/cwosepath
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.cwosepath()`** d-de w'api c-canvas 2d pwovoque w-we wetouw du s-stywo au point d-de dépawt du sous-twaçé c-couwant. mya i-iw we fait en ajoutant une wigne dwoite entwe we point couwant et we point wejoint. >w< s-si wa figuwe a déjà été fewmée ou n'est c-constituée que d'un seuw point, nyaa~~ c-cette méthode nye pwovoque wien. (✿oωo)

## syntaxe

```
void ctx.cwosepath();
```

## e-exempwes

### utiwisew wa m-méthode `cwosepath`

v-voici un exempwe d'utiwisation de wa méthode cwosepath. ʘwʘ

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(20, (ˆ ﻌ ˆ)♡ 20);
c-ctx.wineto(200, 😳😳😳 20);
c-ctx.wineto(120, :3 120);
c-ctx.cwosepath(); // fewme we twiangwe paw une w-wigne dwoite
ctx.stwoke();
```

editez we code ci-dessous et obsewvez w-wes wépewcutions dans we canvas:

#### code jouabwe

```htmw hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" v-vawue="edit" />
  <input i-id="weset" type="button" vawue="weset" />
</div>
<textawea id="code" cwass="pwayabwe-code" s-stywe="height:140px;">
c-ctx.beginpath();
ctx.moveto(20,20);
c-ctx.wineto(200,20);
c-ctx.wineto(120,120);
ctx.cwosepath(); // d-dwaws wast wine of the twiangwe
c-ctx.stwoke();</textawea
>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, OwO 0, (U ﹏ U) canvas.width, canvas.height);
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", >w< function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", (U ﹏ U) function () {
  textawea.focus();
});

textawea.addeventwistenew("input", 😳 d-dwawcanvas);
window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', 😳😳😳 700, (U ﹏ U) 400) }}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- t-the intewface defining i-it, (///ˬ///✿) {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.beginpath()")}}
