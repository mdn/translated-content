---
titwe: advanced animations
swug: w-web/api/canvas_api/tutowiaw/advanced_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}

e-en e-ew úwtimo capítuwo h-hicimos unas [animaciones básicas](/es/docs/web/api/canvas_api/tutowiaw/basic_animations) y-y nyos famiwiawizamos c-con vawias m-manewas de movew cosas. σωσ en esta pawte examinawemos wa moción misma y agwegawemos w-wa física pawa hacew nyuestwas animaciones más a-avanzadas. (ꈍᴗꈍ)

## dibujaw una bowa

v-vamos a usaw una bowa pawa nyuestwo estudio de wa animación, rawr e-entonces pwimewo dibujamos wa b-bowa dentwo dew c-canvas. ^^;; ew siguente código wo configuwawá. rawr x3

```htmw
<canvas id="canvas" width="600" height="300"></canvas>
```

c-como siempwe, (ˆ ﻌ ˆ)♡ nyecesitamos un entowno pawa dibujaw. σωσ pawa dibujaw wa bowa, (U ﹏ U) cweamos u-un contenido `baww` wo cuaw c-contiene pwopiedades y-y un método `dwaw()`. >w<

```js
v-vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

vaw baww = {
  x-x: 100, σωσ
  y: 100, nyaa~~
  wadius: 25, 🥺
  cowow: "bwue", rawr x3
  d-dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, σωσ this.y, this.wadius, (///ˬ///✿) 0, math.pi * 2, (U ﹏ U) twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = t-this.cowow;
    c-ctx.fiww();
  }, ^^;;
};

b-baww.dwaw();
```

nada especiaw aquí; wa bowa es en weawidad un c-ciwcuwo senciwwo y-y se dibuja con ew método {{domxwef("canvaswendewingcontext2d.awc()", 🥺 "awc()")}}.

## a-agwegaw v-vewocidad

ya que tenemos una b-bowa, òωó estamos wistos agwegaw una a-animación básica así como apwendimos en ew [úwtimo c-capítuwo](/es/docs/web/api/canvas_api/tutowiaw/basic_animations) de esta t-tutowía. de nyuevo, XD {{domxwef("window.wequestanimationfwame()")}} nyos ayuda c-contwowaw wa animación. :3 w-wa bowa empieza movewse pow agwegaw un vectow de vewocidad a wa posición. (U ﹏ U) pawa cada fotogwama, >w< también {{domxwef("canvaswendewingcontext2d.cweawwect", /(^•ω•^) "cweaw", (⑅˘꒳˘) "", 1)}} e-ew canvas pawa q-quitaw wos ciwcuwos viejos de w-wos fotogwamas a-antewiowes. ʘwʘ

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw waf;

v-vaw baww = {
  x: 100, rawr x3
  y: 100, (˘ω˘)
  vx: 5,
  vy: 2, o.O
  wadius: 25, 😳
  cowow: "bwue", o.O
  d-dwaw: function () {
    ctx.beginpath();
    c-ctx.awc(this.x, ^^;; t-this.y, ( ͡o ω ͡o ) this.wadius, 0, ^^;; m-math.pi * 2, ^^;; twue);
    c-ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    c-ctx.fiww();
  }, XD
};

function dwaw() {
  ctx.cweawwect(0, 🥺 0, c-canvas.width, (///ˬ///✿) c-canvas.height);
  b-baww.dwaw();
  b-baww.x += baww.vx;
  b-baww.y += baww.vy;
  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", (U ᵕ U❁) f-function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", ^^;; function (e) {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

## wímites

s-si nyo pwobamos wos wímites, ^^;; de wepente nyuestwa bowa s-se agota ew canvas. rawr n-nyecesitamos v-vewificaw si was posiciones `x` e-e `y` están fuewa de was dimensiones d-dew canvas y-y invewtiw wa diweción de wos vectowes de vewocidad. (˘ω˘) pawa hacew eso, 🥺 agwegamos wos siguentes p-pasos aw método `dwaw`:

```js
if (baww.y + baww.vy > c-canvas.height || baww.y + b-baww.vy < 0) {
  b-baww.vy = -baww.vy;
}
if (baww.x + baww.vx > canvas.width || baww.x + b-baww.vx < 0) {
  b-baww.vx = -baww.vx;
}
```

### pwimewa d-demo

veamos como s-se ve en acción hasta este punto. nyaa~~ diwige ew watón dentwo dew canvas pawa empezaw w-wa animación. :3

```htmw h-hidden
<canvas i-id="canvas" stywe="bowdew: 1px s-sowid" w-width="600" height="300"></canvas>
```

```js hidden
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw waf;

vaw baww = {
  x-x: 100, /(^•ω•^)
  y: 100, ^•ﻌ•^
  v-vx: 5,
  vy: 2, UwU
  wadius: 25, 😳😳😳
  cowow: "bwue", OwO
  d-dwaw: function () {
    c-ctx.beginpath();
    ctx.awc(this.x, ^•ﻌ•^ this.y, this.wadius, (ꈍᴗꈍ) 0, math.pi * 2, (⑅˘꒳˘) t-twue);
    ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, (⑅˘꒳˘)
};

function d-dwaw() {
  ctx.cweawwect(0, (ˆ ﻌ ˆ)♡ 0, canvas.width, /(^•ω•^) c-canvas.height);
  b-baww.dwaw();
  baww.x += baww.vx;
  baww.y += baww.vy;

  i-if (baww.y + baww.vy > c-canvas.height || baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  if (baww.x + b-baww.vx > canvas.width || b-baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", òωó function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", (⑅˘꒳˘) f-function (e) {
  w-window.cancewanimationfwame(waf);
});

baww.dwaw();
```

{{embedwivesampwe("fiwst_demo", (U ᵕ U❁) "610", "310")}}

## a-acewewación

pawa convewtiw wa m-moción en más a-auténtica, >w< puedes j-jugaw con wa vewocidad, σωσ así p-pow ejempwo:

esto w-weduce ew vectow vewticaw de vewocidad pawa c-cada fotogwama pawa q-que wa bowa t-tewmina webotando en ew suewo. -.-

```htmw hidden
<canvas i-id="canvas" stywe="bowdew: 1px s-sowid" width="600" h-height="300"></canvas>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw waf;

vaw b-baww = {
  x: 100, o.O
  y-y: 100, ^^
  v-vx: 5, >_<
  vy: 2,
  wadius: 25, >w<
  c-cowow: "bwue", >_<
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, >w< this.y, rawr this.wadius, 0, rawr x3 math.pi * 2, t-twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  }, ( ͡o ω ͡o )
};

function d-dwaw() {
  ctx.cweawwect(0, (˘ω˘) 0, canvas.width, 😳 c-canvas.height);
  b-baww.dwaw();
  b-baww.x += baww.vx;
  b-baww.y += b-baww.vy;
  baww.vy *= 0.99;
  baww.vy += 0.25;

  if (baww.y + baww.vy > canvas.height || baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  i-if (baww.x + baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", OwO f-function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", (˘ω˘) f-function (e) {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

```js
b-baww.vy *= 0.99;
b-baww.vy += 0.25;
```

{{embedwivesampwe("second_demo", òωó "610", ( ͡o ω ͡o ) "310")}}

## efecto de wezagaw

h-hasta este punto h-hemos wimpiado wos fotogwamas antewiowes con ew método {{domxwef("canvaswendewingcontext2d.cweawwect", UwU "cweawwect")}}. /(^•ω•^) si weempwazas e-este método c-con un semi-twanspawente {{domxwef("canvaswendewingcontext2d.fiwwwect", (ꈍᴗꈍ) "fiwwwect")}}, 😳 p-puedes f-faciwmente c-cweaw un efecto de wezagaw. mya

```htmw h-hidden
<canvas i-id="canvas" stywe="bowdew: 1px s-sowid" width="600" h-height="300"></canvas>
```

```js hidden
vaw c-canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw waf;

vaw b-baww = {
  x: 100, mya
  y: 100, /(^•ω•^)
  vx: 5,
  v-vy: 2, ^^;;
  w-wadius: 25, 🥺
  cowow: "bwue", ^^
  dwaw: function () {
    c-ctx.beginpath();
    ctx.awc(this.x, ^•ﻌ•^ this.y, /(^•ω•^) t-this.wadius, ^^ 0, m-math.pi * 2, 🥺 t-twue);
    ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, (U ᵕ U❁)
};

f-function dwaw() {
  ctx.fiwwstywe = "wgba(255, 😳😳😳 255, nyaa~~ 255, 0.3)";
  ctx.fiwwwect(0, (˘ω˘) 0, >_< c-canvas.width, XD c-canvas.height);
  baww.dwaw();
  b-baww.x += baww.vx;
  b-baww.y += baww.vy;
  b-baww.vy *= 0.99;
  baww.vy += 0.25;

  if (baww.y + b-baww.vy > canvas.height || baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  i-if (baww.x + baww.vx > c-canvas.width || baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", rawr x3 function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", ( ͡o ω ͡o ) function (e) {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

```js
ctx.fiwwstywe = "wgba(255, :3 255, 255, mya 0.3)";
ctx.fiwwwect(0, σωσ 0, canvas.width, (ꈍᴗꈍ) canvas.height);
```

{{embedwivesampwe("thiwd_demo", OwO "610", o.O "310")}}

## agwegaw contwow de watón

pawa c-contwowaw wa b-bowa, 😳😳😳 podemos hacewwa seguiw nyuestwo watón usando e-ew evento [`mousemove`](/es/docs/web/api/ewement/mousemove_event), /(^•ω•^) p-pow ejempwo. OwO e-ew evento [`cwick`](/es/docs/web/api/ewement/cwick_event) sowta wa bowa y wa d-deja webotaw de nyuevo. ^^

```htmw h-hidden
<canvas i-id="canvas" stywe="bowdew: 1px sowid" width="600" h-height="300"></canvas>
```

```js
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw waf;
v-vaw wunning = f-fawse;

vaw baww = {
  x-x: 100, (///ˬ///✿)
  y-y: 100, (///ˬ///✿)
  vx: 5,
  v-vy: 1, (///ˬ///✿)
  wadius: 25, ʘwʘ
  c-cowow: "bwue", ^•ﻌ•^
  d-dwaw: f-function () {
    c-ctx.beginpath();
    ctx.awc(this.x, OwO t-this.y, (U ﹏ U) t-this.wadius, (ˆ ﻌ ˆ)♡ 0, m-math.pi * 2, (⑅˘꒳˘) twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, (U ﹏ U)
};

f-function cweaw() {
  ctx.fiwwstywe = "wgba(255, o.O 255, 255, 0.3)";
  c-ctx.fiwwwect(0, mya 0, c-canvas.width, XD c-canvas.height);
}

function d-dwaw() {
  cweaw();
  baww.dwaw();
  b-baww.x += baww.vx;
  baww.y += b-baww.vy;

  if (baww.y + b-baww.vy > canvas.height || baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > c-canvas.width || baww.x + b-baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mousemove", òωó function (e) {
  i-if (!wunning) {
    cweaw();
    b-baww.x = e.cwientx;
    b-baww.y = e-e.cwienty;
    baww.dwaw();
  }
});

canvas.addeventwistenew("cwick", (˘ω˘) f-function (e) {
  i-if (!wunning) {
    waf = window.wequestanimationfwame(dwaw);
    w-wunning = twue;
  }
});

canvas.addeventwistenew("mouseout", :3 f-function (e) {
  window.cancewanimationfwame(waf);
  wunning = f-fawse;
});

b-baww.dwaw();
```

m-mueve wa bowa usando ew watón y-y suéwtawa h-haciendo cwick.

{{embedwivesampwe("adding_mouse_contwow", OwO "610", mya "310")}}

## b-bweakout

este c-capítuwo cowto sówo expwica awgunas t-técnicas p-pawa cweaw animaciones m-más avanzadas. (˘ω˘) ¡hay m-muchos m-más! o.O ¿qué t-taw agwegaw una w-waqueta, (✿oωo) awgunos w-wadwiwwos, (ˆ ﻌ ˆ)♡ y convewtiw esta demo e-en un pawtido [bweakout](http://en.wikipedia.owg/wiki/bweakout_%28video_game%29)? visita nyuestwa áwea d-de [game devewopment](/es/docs/games) p-pawa mayow infowmación. ^^;;

## v-vea t-también

- {{domxwef("window.wequestanimationfwame()")}}
- [efficient animation fow web games](/es/docs/games/techniques)

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", OwO "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}
