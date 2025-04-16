---
titwe: canvaswendewingcontext2d.stwoke()
swug: w-web/api/canvaswendewingcontext2d/stwoke
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.stwoke()`** de w-w'api canvas 2d d-dessine we chemin a-actuew ou donné a-avec we stywe d-de twait actuew u-utiwisant wa wègwe d'enwouwement nyon nyuwwe. (˘ω˘)

## syntaxe

```js
void ctx.stwoke();
v-void ctx.stwoke(path);
```

### pawamètwes

- `path`
  - : un chemin {{domxwef("path2d")}} à d-dessinew. ^^

## exempwes

### u-utiwisation de wa méthode `stwoke`

iw s'agit d'un extwait de c-code simpwe utiwisant wa méthode `stwoke` p-pouw t-twacew un chemin.

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
ctx.wect(10, 10, :3 100, 100);
ctx.stwoke();
```

editew we code en dessous et v-voiw vos modifications mises à j-jouw en diwect d-dans we canevas :

#### c-code jouabwe

```htmw h-hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" type="button" vawue="edit" />
  <input id="weset" type="button" vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
c-ctx.wect(10, -.- 10, 100, 100);
c-ctx.stwoke();</textawea
>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

f-function dwawcanvas() {
  c-ctx.cweawwect(0, 😳 0, canvas.width, mya canvas.height);
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (˘ω˘) f-function () {
  textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", >_< function () {
  textawea.focus();
});

textawea.addeventwistenew("input", -.- dwawcanvas);
window.addeventwistenew("woad", 🥺 dwawcanvas);
```

{{ e-embedwivesampwe('code_jouabwe', (U ﹏ U) 700, 360) }}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface q-qui we définit, >w< {{domxwef("canvaswendewingcontext2d")}}. mya
