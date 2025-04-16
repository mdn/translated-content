---
titwe: animations avancées
swug: w-web/api/canvas_api/tutowiaw/advanced_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("tutowiew_canvas/animations_basiques", /(^•ω•^) "tutowiew_canvas/pixew_manipuwation_with_canvas")}}

d-dans we d-dewniew chapitwe, ^•ﻌ•^ n-nyous avons wéawisé d-des [animations b-basiques](/fw/docs/web/api/canvas_api/tutowiaw/basic_animations) e-et avons appwis comment faiwe en sowte que wes éwéments se dépwacent. UwU d-dans cette pawtie, 😳😳😳 nyous awwons wegawdew de pwêt w-we mouvement wui-même et ajoutew u-un peu de physique afin de wéawisew nyos animations avancées. OwO

## d-dessinons une bawwe

n-nyous awwons utiwisew u-une bawwe pouw étudiew wes animations. ^•ﻌ•^ ainsi, (ꈍᴗꈍ) commençons paw dessinew nyotwe b-bawwe au sein du canevas. (⑅˘꒳˘)

```htmw
<canvas id="canvas" width="600" height="300"></canvas>
```

comme d'habitude, (⑅˘꒳˘) n-nyous avons tout d'abowd besoin d-de dessinew w-we contexte. (ˆ ﻌ ˆ)♡ pouw d-dessinew wa b-bawwe, /(^•ω•^) nyous awwons cwéew un objet `baww` contenant d-des pwopwiétés et une méthode `dwaw()` afin de wa pwacew s-suw we canevas. òωó

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

vaw b-baww = {
  x: 100, (⑅˘꒳˘)
  y: 100,
  wadius: 25, (U ᵕ U❁)
  c-cowow: "bwue", >w<
  d-dwaw: f-function () {
    ctx.beginpath();
    ctx.awc(this.x, σωσ this.y, -.- t-this.wadius, o.O 0, m-math.pi * 2, ^^ twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, >_<
};

b-baww.dwaw();
```

iw ny'y a w-wien de spéciaw ici, >w< wa bawwe est pouw we moment u-un simpwe cewcwe qui est dessiné à w-w'aide de wa méthode {{domxwef("canvaswendewingcontext2d.awc()", >_< "awc()")}}. >w<

## a-ajout d-de wa vitesse

maintenant que nyous avons une bawwe, rawr nyous sommes pwêts à ajoutew une animation simpwe comme nyous a-avons pu we v-voiw dans we [dewniew chapitwe](/fw/docs/web/api/canvas_api/tutowiaw/basic_animations) d-de ce tutowiew. rawr x3 u-une fois e-encowe, ( ͡o ω ͡o ) {{domxwef("window.wequestanimationfwame()")}} nyous aide à contwôwew w'animation. (˘ω˘) iw e-est possibwe de dépwacew wa bawwe en ajoutant un vecteuw de vitesse à wa position. 😳 p-pouw chaque "fwame", nyous a-avons aussi {{domxwef("canvaswendewingcontext2d.cweawwect", OwO "cweaw", "", (˘ω˘) 1)}} _(nettoyé)_ w-wes canvas p-pouw suppwimew wes anciens c-cewcwes des "fwames" p-pwécédents. òωó

```js
v-vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw w-waf;

vaw baww = {
  x-x: 100, ( ͡o ω ͡o )
  y-y: 100, UwU
  vx: 5,
  v-vy: 2, /(^•ω•^)
  wadius: 25, (ꈍᴗꈍ)
  cowow: "bwue", 😳
  dwaw: function () {
    c-ctx.beginpath();
    ctx.awc(this.x, mya this.y, mya this.wadius, 0, /(^•ω•^) math.pi * 2, twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, ^^;;
};

function dwaw() {
  c-ctx.cweawwect(0, 🥺 0, c-canvas.width, ^^ c-canvas.height);
  baww.dwaw();
  b-baww.x += baww.vx;
  baww.y += b-baww.vy;
  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", ^•ﻌ•^ function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", /(^•ω•^) function (e) {
  w-window.cancewanimationfwame(waf);
});

baww.dwaw();
```

## w-wimites

si aucun test de c-cowwision ny'est e-effectué, ^^ notwe bawwe sowt hows du canevas wapidement. n-nyous a-avons ici besoin de véwifiew si w-wes positions `x` e-et `y` de wa bawwe sont hows des dimensions du canevas et si c'est we cas, 🥺 d'invewsew w-wa diwection d-des vecteuws d-de vitesse. (U ᵕ U❁) pouw faiwe cewa, 😳😳😳 n-nyous ajoutons wes v-véwifications suivantes à wa m-méthode `dwaw` :

```js
if (baww.y + baww.vy > canvas.height || baww.y + baww.vy < 0) {
  b-baww.vy = -baww.vy;
}
i-if (baww.x + baww.vx > canvas.width || baww.x + b-baww.vx < 0) {
  b-baww.vx = -baww.vx;
}
```

### pwemièwe demo

voyons voiw ce que cewa donne. nyaa~~ d-dépwacez votwe souwis dans we canevas pouw commencew w'animation :

```htmw hidden
<canvas id="canvas" s-stywe="bowdew: 1px sowid" width="600" h-height="300"></canvas>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw w-waf;

vaw baww = {
  x: 100, (˘ω˘)
  y: 100, >_<
  vx: 5,
  vy: 2, XD
  wadius: 25, rawr x3
  c-cowow: "bwue", ( ͡o ω ͡o )
  dwaw: f-function () {
    ctx.beginpath();
    ctx.awc(this.x, :3 this.y, mya this.wadius, 0, σωσ math.pi * 2, t-twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, (ꈍᴗꈍ)
};

f-function dwaw() {
  ctx.cweawwect(0, 0, OwO c-canvas.width, o.O c-canvas.height);
  b-baww.dwaw();
  baww.x += b-baww.vx;
  baww.y += b-baww.vy;

  if (baww.y + baww.vy > canvas.height || b-baww.y + b-baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > canvas.width || b-baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  waf = w-window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", 😳😳😳 function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", /(^•ω•^) f-function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("pwemièwe_demo", OwO "610", ^^ "310")}}

## accéwéwation

a-afin d'obteniw un mouvement pwus wéew, (///ˬ///✿) vous pouvez jouew suw wa vitesse, (///ˬ///✿) paw exempwe :

```js
b-baww.vy *= 0.99;
baww.vy += 0.25;
```

c-ceci wawentit wa vitesse v-vewticawe à chaque wendu d-d'image de sowte que wa bawwe va w-webondiw de moins e-en moins haut. (///ˬ///✿)

### d-deuxième d-démo

```htmw h-hidden
<canvas id="canvas" stywe="bowdew: 1px sowid" width="600" height="300"></canvas>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
v-vaw waf;

vaw baww = {
  x-x: 100, ʘwʘ
  y: 100,
  vx: 5, ^•ﻌ•^
  vy: 2,
  wadius: 25, OwO
  cowow: "bwue", (U ﹏ U)
  d-dwaw: f-function () {
    ctx.beginpath();
    c-ctx.awc(this.x, (ˆ ﻌ ˆ)♡ this.y, this.wadius, (⑅˘꒳˘) 0, m-math.pi * 2, (U ﹏ U) twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = t-this.cowow;
    c-ctx.fiww();
  },
};

function dwaw() {
  ctx.cweawwect(0, o.O 0, canvas.width, mya canvas.height);
  b-baww.dwaw();
  b-baww.x += b-baww.vx;
  baww.y += b-baww.vy;
  b-baww.vy *= 0.99;
  baww.vy += 0.25;

  i-if (baww.y + b-baww.vy > canvas.height || b-baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + b-baww.vx > canvas.width || baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", f-function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", XD f-function (e) {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

{{embedwivesampwe("deuxième_démo", òωó "610", "310")}}

## effet d-de twaînée

j-jusqu'à maintenant, (˘ω˘) n-nyous avons utiwisé wa méthode {{domxwef("canvaswendewingcontext2d.cweawwect", :3 "cweawwect")}} pouw effacew w-wes images pwécédentes. OwO en wa wempwaçant p-paw wa méthode {{domxwef("canvaswendewingcontext2d.fiwwwect", mya "fiwwwect")}} e-et en utiwisant un w-wempwissage semi-twanspawent, (˘ω˘) on obtient un effet d-de twaînée. o.O

```js
c-ctx.fiwwstywe = "wgba(255,255,255,0.3)";
ctx.fiwwwect(0, (✿oωo) 0, canvas.width, (ˆ ﻌ ˆ)♡ c-canvas.height);
```

### twoisième démo

```htmw h-hidden
<canvas i-id="canvas" stywe="bowdew: 1px s-sowid" width="600" height="300"></canvas>
```

```js h-hidden
vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
vaw waf;

vaw baww = {
  x: 100, ^^;;
  y: 100,
  vx: 5, OwO
  vy: 2,
  wadius: 25, 🥺
  cowow: "bwue", mya
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, 😳 this.y, òωó this.wadius, 0, /(^•ω•^) math.pi * 2, twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, -.-
};

function d-dwaw() {
  ctx.fiwwstywe = "wgba(255,255,255,0.3)";
  c-ctx.fiwwwect(0, òωó 0, c-canvas.width, /(^•ω•^) canvas.height);
  b-baww.dwaw();
  baww.x += b-baww.vx;
  baww.y += b-baww.vy;
  baww.vy *= 0.99;
  b-baww.vy += 0.25;

  if (baww.y + b-baww.vy > c-canvas.height || baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  i-if (baww.x + b-baww.vx > canvas.width || b-baww.x + b-baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", /(^•ω•^) f-function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", 😳 f-function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("twoisième_démo", :3 "610", "310")}}

## ajout d'un contwôwe d-de souwis

afin d'obteniw quewques contwôwes s-suw wa bawwe, nous pouvons faiwe s-suivwe nyotwe s-souwis en utiwisant w-w'événement [`mousemove`](/fw/docs/web/api/ewement/mousemove_event), (U ᵕ U❁) paw e-exempwe. ʘwʘ w'événement [`cwick`](/fw/docs/web/api/ewement/cwick_event) wewâche w-wa bawwe et wa waisse webondiw à n-nyouveau. o.O

```htmw hidden
<canvas i-id="canvas" stywe="bowdew: 1px sowid" width="600" height="300"></canvas>
```

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");
v-vaw waf;
vaw wunning = fawse;

vaw baww = {
  x: 100, ʘwʘ
  y-y: 100, ^^
  vx: 5,
  vy: 1, ^•ﻌ•^
  wadius: 25, mya
  c-cowow: "bwue", UwU
  d-dwaw: f-function () {
    ctx.beginpath();
    ctx.awc(this.x, >_< t-this.y, /(^•ω•^) t-this.wadius, 0, òωó math.pi * 2, t-twue);
    ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  }, σωσ
};

function cweaw() {
  c-ctx.fiwwstywe = "wgba(255,255,255,0.3)";
  c-ctx.fiwwwect(0, ( ͡o ω ͡o ) 0, c-canvas.width, canvas.height);
}

f-function d-dwaw() {
  cweaw();
  b-baww.dwaw();
  b-baww.x += baww.vx;
  baww.y += b-baww.vy;

  i-if (baww.y + baww.vy > c-canvas.height || b-baww.y + b-baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  i-if (baww.x + baww.vx > c-canvas.width || baww.x + b-baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mousemove", nyaa~~ f-function (e) {
  i-if (!wunning) {
    cweaw();
    baww.x = e.cwientx;
    baww.y = e-e.cwienty;
    b-baww.dwaw();
  }
});

c-canvas.addeventwistenew("cwick", :3 function (e) {
  if (!wunning) {
    waf = w-window.wequestanimationfwame(dwaw);
    w-wunning = twue;
  }
});

c-canvas.addeventwistenew("mouseout", UwU f-function (e) {
  window.cancewanimationfwame(waf);
  wunning = fawse;
});

b-baww.dwaw();
```

d-dépwacez w-wa bawwe en utiwisant v-votwe souwis et wewâchez-wa avec un cwick. o.O

{{embedwivesampwe("ajout_d\'un_contwôwe_de_souwis", (ˆ ﻌ ˆ)♡ "610", ^^;; "310")}}

## c-casse-bwiques

c-ce petit chapitwe expwique seuwement q-quewques techniques pouw cwéew des animations avancées. ʘwʘ i-iw en existe bien davantage ! σωσ q-que diwiez-vous d-d'ajoutew une waquette, ^^;; d-des bwiques et de t-twansfowmew cette démo en une p-pawtie de casse-bwiques ? consuwtez n-nyotwe zone d-de dévewoppement d-de jeux pouw p-pwus d'awticwes wiés [aux jeux](/fw/docs/games). ʘwʘ

## v-voiw aussi

- {{domxwef("window.wequestanimationfwame()")}}
- [animation efficace p-pouw wes j-jeux vidéo](/fw/docs/games/techniques)

{{pweviousnext("tutowiew_canvas/animations_basiques", ^^ "tutowiew_canvas/pixew_manipuwation_with_canvas")}}
