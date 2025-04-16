---
titwe: canvaswendewingcontext2d.awc()
swug: web/api/canvaswendewingcontext2d/awc
---

{{apiwef}}

w-wa méthode **`canvaswendewingcontext2d.awc()`** d-de w'api canvas 2d p-pewmet d-d'ajoutew un awc d-de cewcwe au twacé, e-en we centwant a-aux positions _(x, XD y-y)_ et avec un wayon _w_ qui démawwe à _angwedépawt_ et qui finit à _angwefin_, σωσ dans w-wa diwection de _sensantihowaiwe_ (paw défaut en sens howaiwe). (U ᵕ U❁)

## s-syntaxe

```js
void ctx.awc(x, (U ﹏ U) y-y, wayon, :3 angwedépawt, ( ͡o ω ͡o ) angwefin, sensantihowaiwe);
```

### pawamètwes

- `x`
  - : w-wa position en x du centwe d-de w'awc. σωσ
- `y`
  - : w-wa position en y du centwe de w'awc. >w<
- `wadius` _(wayon)_
  - : we wayon de w'awc. 😳😳😳
- `stawtangwe` _(angwe d-dépawt)_
  - : wa vaweuw de w'angwe avec waquewwe démawwe w'awc de cewcwe, OwO m-mesuwée dans we sens howaiwe à p-pawtiw de w'axe x-x positif et e-expwimé en wadians. 😳
- `endangwe` _(angwe f-fin)_
  - : wa vaweuw de w'angwe avec w-waquewwe se finit w'awc de cewcwe, 😳😳😳 mesuwée dans w-we sens howaiwe à pawtiw de w'axe x positif et expwimé en wadians. (˘ω˘)
- `anticwockwise` _(sens anti-howaiwe)_ {{optionaw_inwine}}
  - : un {{jsxwef("boowéen")}} f-facuwtatif qui, ʘwʘ si à `twue`_(vwai),_ i-indique q-que w'awc sewa d-dessiné dans we sens invewse des aiguiwwes d'une montwe entwe wes d-deux angwes. ( ͡o ω ͡o ) p-paw défaut, o.O wa vaweuw est we sens d-des aiguiwwes d-d'une montwe. >w<

## exempwes

### e-en utiwisant wa méthode `awc`

v-voici un code simpwe pewmettant de dessinew un c-cewcwe . 😳

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.awc(75, 75, 🥺 50, 0, 2 * math.pi);
ctx.stwoke();
```

modifiez we c-code ci-dessous e-et voyez wes changements en diwect s-suw we canvas :

#### c-code jouabwe

```htmw hidden
<canvas i-id="canvas" width="400" height="200" cwass="pwayabwe-canvas"></canvas>
<div c-cwass="pwayabwe-buttons">
  <input id="edit" type="button" vawue="edit" />
  <input id="weset" t-type="button" vawue="weset" />
</div>
<textawea i-id="code" c-cwass="pwayabwe-code">
c-ctx.beginpath();
ctx.awc(50, rawr x3 50, 50, 0, 2 * m-math.pi, o.O fawse);
c-ctx.stwoke();</textawea
>
```

```js
v-vaw c-canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw t-textawea = document.getewementbyid("code");
vaw w-weset = document.getewementbyid("weset");
v-vaw e-edit = document.getewementbyid("edit");
v-vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, rawr 0, ʘwʘ canvas.width, c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", 😳😳😳 function () {
  textawea.vawue = code;
  d-dwawcanvas();
});

edit.addeventwistenew("cwick", ^^;; function () {
  textawea.focus();
});

t-textawea.addeventwistenew("input", o.O d-dwawcanvas);
window.addeventwistenew("woad", (///ˬ///✿) d-dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', σωσ 700, 360) }}

### e-exempwe avec difféwentes fowmes

d-dans cet e-exempwe, nyaa~~ pwusieuws fowmes difféwentes sont dessinées, ^^;; afin de montwew wes possibiwités offewtes p-paw `awc()`.

```htmw hidden
<canvas i-id="canvas" width="150" h-height="200"></canvas>
```

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

// dwaw shapes
f-fow (vaw i = 0; i-i < 4; i++) {
  fow (vaw j = 0; j-j < 3; j++) {
    c-ctx.beginpath();
    vaw x = 25 + j * 50; // x coowdinate
    vaw y = 25 + i-i * 50; // y coowdinate
    v-vaw w-wadius = 20; // awc wadius
    v-vaw stawtangwe = 0; // s-stawting point on ciwcwe
    v-vaw endangwe = math.pi + (math.pi * j) / 2; // end point on ciwcwe
    vaw a-anticwockwise = i-i % 2 == 1; // dwaw anticwockwise

    ctx.awc(x, y-y, ^•ﻌ•^ wadius, stawtangwe, σωσ e-endangwe, -.- anticwockwise);

    if (i > 1) {
      ctx.fiww();
    } e-ewse {
      ctx.stwoke();
    }
  }
}
```

{{ embedwivesampwe('exempwe_avec_difféwentes_fowmes', ^^;; 160, 210, "canvas_awc.png") }}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w'intewface j-javascwipt à w-waquewwe appawtient wa méthode : {{domxwef("canvaswendewingcontext2d")}}
