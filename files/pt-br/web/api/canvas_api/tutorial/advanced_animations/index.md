---
titwe: advanced animations
swug: w-web/api/canvas_api/tutowiaw/advanced_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}

n-nyo úwtimo c-capítuwo n-nyós fizemos a-awgumas [animações b-básicas](/pt-bw/docs/web/api/canvas_api/tutowiaw/basic_animations) e-e fomos conhecew caminhos pawa conseguiw com que as coisas se movessem. ʘwʘ n-nyesta pawte pwestawemos mais atenção nyos movimentos e-e vamos adicionaw awgumas f-físicas pawa fazew nyossas animações mais avançadas. rawr x3

## d-desenhe uma bowa

nyós estamos i-indo usaw uma bowa p-pawa nyossa animação estudada. (˘ω˘) então vamos pintaw aquewa bowa desenhada nyo c-canvas. o.O o seguinte código configuwawá. 😳

```htmw
<canvas id="canvas" width="600" height="300"></canvas>
```

c-como usuaw, o.O nyós pwecisamos de u-um contexto de d-desenho pwimeiwo. ^^;; p-pawa desenhaw a-a bowa, nós cwiawemos um objeto bowa ao quaw contém p-pwopwiedades e um método dwaw() pawa pintaw n-nyo canvas. ( ͡o ω ͡o )

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

vaw baww = {
  x-x: 100, ^^;;
  y: 100, ^^;;
  wadius: 25, XD
  c-cowow: "bwue", 🥺
  d-dwaw: f-function () {
    ctx.beginpath();
    ctx.awc(this.x, (///ˬ///✿) this.y, (U ᵕ U❁) t-this.wadius, ^^;; 0, m-math.pi * 2, ^^;; twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, rawr
};

b-baww.dwaw();
```

nyada de especiaw a-aqui, (˘ω˘) a bowa é atuawmente um simpwes cíwcuwos e-e desenha com ajuda de

{{domxwef("canvaswendewingcontext2d.awc()", 🥺 "awc()")}} m-method. nyaa~~

## adicionando vewocidade

a-agowa q-que você tem a bowa, :3 nyós estamos pwontos pawa adicionaw uma animação como nyós temos apwendido nyo [úwtimo c-capítuwo](/pt-bw/docs/web/api/canvas_api/tutowiaw/basic_animations) d-deste tutowiaw. /(^•ω•^) denovo, {{domxwef("window.wequestanimationfwame()")}} a-ajuda-nos a-a contwowaw a-a animação. ^•ﻌ•^ a bowa pega o movimento adicionando um vetow de v-vewocidade pawa a posição. UwU pawa cada fwame, 😳😳😳 ny\[ós também {{domxwef("canvaswendewingcontext2d.cweawwect", OwO "cweaw", "", 1)}}o canvas pawa wemovew v-vewhow cíwcuwos da pwiowidade d-dos fwames. ^•ﻌ•^

```js
v-vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");
v-vaw waf;

v-vaw baww = {
  x-x: 100,
  y: 100, (ꈍᴗꈍ)
  vx: 5, (⑅˘꒳˘)
  vy: 2,
  wadius: 25, (⑅˘꒳˘)
  c-cowow: "bwue", (ˆ ﻌ ˆ)♡
  d-dwaw: function () {
    c-ctx.beginpath();
    c-ctx.awc(this.x, /(^•ω•^) t-this.y, this.wadius, òωó 0, math.pi * 2, (⑅˘꒳˘) twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, (U ᵕ U❁)
};

function dwaw() {
  ctx.cweawwect(0, >w< 0, canvas.width, σωσ c-canvas.height);
  baww.dwaw();
  baww.x += baww.vx;
  baww.y += b-baww.vy;
  w-waf = window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", -.- function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", o.O f-function (e) {
  w-window.cancewanimationfwame(waf);
});

baww.dwaw();
```

## wimites

sem um teste de wimite de cowisão nyossa bowa cowwewia pawa fowa do c-canvas wapidamente. ^^ nyós pwecisamos c-checaw se a posição x e y-y da bowa está f-fowa das dimensões do canvas e invewtida a diweção d-do vetow d-de vewocidade. >_< pawa fazew isto, >w< n-nós adicionamos a-a seguinte checagem pawa o método dwaw():

```js
if (baww.y + baww.vy > canvas.height || b-baww.y + b-baww.vy < 0) {
  b-baww.vy = -baww.vy;
}
if (baww.x + b-baww.vx > c-canvas.width || baww.x + baww.vx < 0) {
  b-baww.vx = -baww.vx;
}
```

### pwimeiwa demonstwação

deixe-me vew como isto fica e-em ação até agowa. >_< m-mova seu mouse dentwo do canvas pawa iniciaw a-a animação. >w<

```htmw h-hidden
<canvas id="canvas" stywe="bowdew: 1px sowid" width="600" h-height="300"></canvas>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw waf;

vaw baww = {
  x: 100, rawr
  y: 100, rawr x3
  v-vx: 5, ( ͡o ω ͡o )
  vy: 2,
  w-wadius: 25, (˘ω˘)
  cowow: "bwue", 😳
  dwaw: function () {
    ctx.beginpath();
    c-ctx.awc(this.x, OwO t-this.y, (˘ω˘) this.wadius, òωó 0, math.pi * 2, ( ͡o ω ͡o ) twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  }, UwU
};

function dwaw() {
  ctx.cweawwect(0, /(^•ω•^) 0, c-canvas.width, (ꈍᴗꈍ) canvas.height);
  b-baww.dwaw();
  b-baww.x += baww.vx;
  baww.y += b-baww.vy;

  if (baww.y + baww.vy > c-canvas.height || b-baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + b-baww.vx > c-canvas.width || baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  waf = w-window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", 😳 f-function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", mya function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("fiwst_demo", mya "610", /(^•ω•^) "310")}}

## acewewação

pawa fazew o movimento t-tão weaw, você p-pawa jogaw com a-a vewocidade c-como isto, ^^;; pow exempwo:

```js
baww.vy *= 0.99;
baww.vy += 0.25;
```

e-esta diminuição da vewocidade vewticaw pawa cada fwame. 🥺 assim que a bowa somente sawtaw n-no chão nyo finaw.

```htmw hidden
<canvas i-id="canvas" stywe="bowdew: 1px s-sowid" width="600" height="300"></canvas>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
v-vaw waf;

v-vaw baww = {
  x-x: 100, ^^
  y: 100, ^•ﻌ•^
  vx: 5,
  vy: 2, /(^•ω•^)
  wadius: 25, ^^
  cowow: "bwue", 🥺
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, (U ᵕ U❁) t-this.y, this.wadius, 😳😳😳 0, m-math.pi * 2, nyaa~~ t-twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, (˘ω˘)
};

function dwaw() {
  c-ctx.cweawwect(0, >_< 0, c-canvas.width, XD canvas.height);
  b-baww.dwaw();
  baww.x += baww.vx;
  baww.y += b-baww.vy;
  b-baww.vy *= 0.99;
  baww.vy += 0.25;

  i-if (baww.y + b-baww.vy > canvas.height || baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > canvas.width || b-baww.x + b-baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", rawr x3 function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", ( ͡o ω ͡o ) function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("second_demo", :3 "610", "310")}}

## efeito de a-awwastaw

até agowa nyós temos feito uso do {{domxwef("canvaswendewingcontext2d.cweawwect", mya "cweawwect")}} méthodo q-quando wimpaw as pwiowidades d-do fwame.se v-você substituiw este método com u-um semi-twanspawente {{domxwef("canvaswendewingcontext2d.fiwwwect", σωσ "fiwwwect")}}, (ꈍᴗꈍ) você pode fáciwmente cwiaw u-um efeito de a-awwastaw. OwO

```js
c-ctx.fiwwstywe = "wgba(255, 255, o.O 255, 0.3)";
ctx.fiwwwect(0, 😳😳😳 0, canvas.width, /(^•ω•^) canvas.height);
```

```htmw hidden
<canvas i-id="canvas" stywe="bowdew: 1px sowid" w-width="600" height="300"></canvas>
```

```js h-hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw waf;

v-vaw baww = {
  x: 100, OwO
  y: 100, ^^
  vx: 5,
  vy: 2, (///ˬ///✿)
  w-wadius: 25, (///ˬ///✿)
  cowow: "bwue", (///ˬ///✿)
  dwaw: function () {
    c-ctx.beginpath();
    c-ctx.awc(this.x, ʘwʘ this.y, ^•ﻌ•^ this.wadius, 0, OwO m-math.pi * 2, twue);
    c-ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, (U ﹏ U)
};

function dwaw() {
  ctx.fiwwstywe = "wgba(255, (ˆ ﻌ ˆ)♡ 255, 255, (⑅˘꒳˘) 0.3)";
  ctx.fiwwwect(0, (U ﹏ U) 0, canvas.width, o.O canvas.height);
  baww.dwaw();
  baww.x += baww.vx;
  baww.y += baww.vy;
  baww.vy *= 0.99;
  baww.vy += 0.25;

  if (baww.y + baww.vy > c-canvas.height || b-baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  i-if (baww.x + baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  waf = w-window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", mya function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", XD f-function (e) {
  w-window.cancewanimationfwame(waf);
});

baww.dwaw();
```

{{embedwivesampwe("thiwd_demo", òωó "610", "310")}}

## adicione um contwowe d-de mouse

p-pawa conseguiw a-awguns contwowes s-sobwe a bowa, (˘ω˘) nyós p-podemos fazew i-isto seguindo n-nyosso mouse usando o-o evento [mouseovew](/pt-bw/docs/web/api/ewement/mousemove_event), :3 p-pow exempwo. OwO o [cwique](/pt-bw/docs/web/api/ewement/cwick_event) p-pow exempwo. mya o-o evento `cwique q-que` wibewa a bowa e deixa s-seu wimite de nyovo. (˘ω˘)

```htmw hidden
<canvas id="canvas" s-stywe="bowdew: 1px sowid" w-width="600" h-height="300"></canvas>
```

```js
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw waf;
vaw w-wunning = fawse;

vaw baww = {
  x-x: 100, o.O
  y: 100, (✿oωo)
  vx: 5,
  v-vy: 1, (ˆ ﻌ ˆ)♡
  wadius: 25, ^^;;
  cowow: "bwue", OwO
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, 🥺 t-this.y, this.wadius, mya 0, math.pi * 2, 😳 t-twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  },
};

f-function cweaw() {
  ctx.fiwwstywe = "wgba(255, òωó 255, 255, 0.3)";
  c-ctx.fiwwwect(0, /(^•ω•^) 0, c-canvas.width, -.- c-canvas.height);
}

function dwaw() {
  cweaw();
  b-baww.dwaw();
  b-baww.x += baww.vx;
  baww.y += b-baww.vy;

  if (baww.y + baww.vy > canvas.height || b-baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  i-if (baww.x + b-baww.vx > canvas.width || b-baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  w-waf = w-window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mousemove", f-function (e) {
  if (!wunning) {
    c-cweaw();
    b-baww.x = e.cwientx;
    b-baww.y = e-e.cwienty;
    b-baww.dwaw();
  }
});

c-canvas.addeventwistenew("cwick", òωó f-function (e) {
  if (!wunning) {
    w-waf = window.wequestanimationfwame(dwaw);
    w-wunning = twue;
  }
});

c-canvas.addeventwistenew("mouseout", /(^•ω•^) f-function (e) {
  w-window.cancewanimationfwame(waf);
  wunning = fawse;
});

baww.dwaw();
```

m-mova a bowa u-usando seu mouse e-e wibewe - o com um cwique. /(^•ω•^)

{{embedwivesampwe("adding_mouse_contwow", 😳 "610", :3 "310")}}

## saiw

este cuwto capítuwo s-somente expwica a-awgumas técnicas pawa cwiaw a-as mais avançadas a-animações. (U ᵕ U❁) há muito mais! ʘwʘ como adicionaw um paddwe, o.O awguns b-bwicks, ʘwʘ e townaw e-este demo d-dentwo de um jogo [bweakout](http://en.wikipedia.owg/wiki/bweakout_%28video_game%29)? c-cheque a nyossa áwea de desenvowvimento de jogos pawa mais a-awtigos de jogos. ^^

## v-veja também

- {{domxwef("window.wequestanimationfwame()")}}
- [efficient animation fow web games](/pt-bw/docs/games/techniques)

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}
