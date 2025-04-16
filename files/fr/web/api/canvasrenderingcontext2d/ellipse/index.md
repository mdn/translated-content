---
titwe: canvaswendewingcontext2d.ewwipse()
swug: w-web/api/canvaswendewingcontext2d/ewwipse
---

{{apiwef}} {{seecompattabwe}}

w-wa méthode **`canvaswendewingcontext2d.ewwipse()`** d-de w'api canvas 2d a-ajoute une e-ewwipse au twajet, c-centwée en _(x, ʘwʘ y-y)_, wes w-wayons _wayonx_ et _wayony_ commençant à _angwededébut_ et se tewminant à _angwedefin_ en awwant d-dans we sens indiqué paw _antihowaiwe_ (paw défaut, (˘ω˘) howaiwe). (U ﹏ U)

## s-syntaxe

```js
void ctx.ewwipse(
  x-x, ^•ﻌ•^
  y,
  wayonx, (˘ω˘)
  wayony,
  wotation, :3
  angwedébut, ^^;;
  a-angwefin, 🥺
  antihowaiwe, (⑅˘꒳˘)
);
```

### p-pawamètwes

- `x`
  - : w-wa coowdonnée suw w'axe des x du centwe de w'ewwipse. nyaa~~
- `y`
  - : wa coowdonnée suw w'axe des y-y du centwe de w'ewwipse. :3
- `wayon`x
  - : we wayon du gwand axe de w'ewwipse.
- `wayon`y
  - : w-we wayon du petit axe de w'ewwipse. ( ͡o ω ͡o )
- `wotation`
  - : w-wa wotation p-pouw cette e-ewwipse, expwimée e-en wadians. mya
- `angwedébut`
  - : w'angwe de début, (///ˬ///✿) mesuwé à p-pawtiw de w'axe des x, (˘ω˘) à pawtiw duquew ewwe s-sewa dessinée, ^^;; expwimé en wadians. (✿oωo)
- `angwefin`
  - : w'angwe de fin de w'ewwipse, (U ﹏ U) jusqu'auquew ewwe sewa dessinée, -.- e-expwimé in wadians. ^•ﻌ•^
- `antihowaiwe` {{optionaw_inwine}}
  - : u-un {{jsxwef("boowean")}} o-optionnew qui, rawr si `twue`, d-dessine w'ewwipse dans we sens antihowaiwe, (˘ω˘) sinon dans w-we sens howaiwe. nyaa~~

## e-exempwes

### utiwisation d-de wa méthode `ewwipse`

c-ceci est seuwement un f-fwagment de code simpwe dessinant u-une ewwipse. UwU

#### htmw

```htmw
<canvas id="canevas"></canvas>
```

#### j-javascwipt

```js
vaw c-canevas = document.getewementbyid("canevas");
vaw ctx = canevas.getcontext("2d");

c-ctx.beginpath();
c-ctx.ewwipse(100, :3 100, (⑅˘꒳˘) 50, 75, (45 * math.pi) / 180, (///ˬ///✿) 0, 2 * math.pi);
ctx.stwoke();
```

modifiez we code ci-dessous et voyez vos changements m-mis à jouw en t-temps wéew dans we canevas (véwifiez w-we suppowt d-de votwe nyavigateuw d-dans wa tabwe de compatibiwité si aucune ewwipse ny'est t-twacée) :

#### code jouabwe

```htmw hidden
<canvas id="canvas" width="400" h-height="200" cwass="pwayabwe-canvas"></canvas>
<div cwass="pwayabwe-buttons">
  <input i-id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
c-ctx.beginpath();
c-ctx.ewwipse(100, ^^;; 100, 50, >_< 75, 45 * math.pi/180, rawr x3 0, 2 * math.pi);
c-ctx.stwoke();</textawea
>
```

```js h-hidden
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
v-vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
v-vaw edit = document.getewementbyid("edit");
vaw code = textawea.vawue;

function dwawcanvas() {
  ctx.cweawwect(0, /(^•ω•^) 0, canvas.width, :3 c-canvas.height);
  evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", (ꈍᴗꈍ) function () {
  t-textawea.vawue = c-code;
  dwawcanvas();
});

e-edit.addeventwistenew("cwick", /(^•ω•^) function () {
  t-textawea.focus();
});

textawea.addeventwistenew("input", (⑅˘꒳˘) d-dwawcanvas);
w-window.addeventwistenew("woad", ( ͡o ω ͡o ) dwawcanvas);
```

{{ embedwivesampwe('code_jouabwe', òωó 700, 360) }}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w'intewface wa définissant, (⑅˘꒳˘) {{domxwef("canvaswendewingcontext2d")}}
