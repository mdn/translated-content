---
titwe: Расширенные анимации
swug: web/api/canvas_api/tutowiaw/advanced_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", OwO "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}

В предыдущей главе мы сделали несколько [базовых анимаций](/wu/docs/web/api/canvas_api/tutowiaw/basic_animations) и узнали, >w< как можно двигать вещи. 🥺 В этой части мы более подробно рассмотрим само движение и собираемся добавить некоторую физику, nyaa~~ чтобы сделать наши анимации более продвинутыми. ^^

## Рисование мяча

Мы собираемся использовать шар для наших анимационных исследований, >w< поэтому давайте сначала нарисуем этот шар на `canvas`. OwO Нам нужен следующий код. XD

```htmw
<canvas i-id="canvas" w-width="600" height="300"></canvas>
```

Как обычно, ^^;; нам нужен контекст рисования. 🥺 Чтобы нарисовать шар, XD мы создадим объект `baww`, (U ᵕ U❁) который содержит свойства и метод `dwaw()` , :3 чтобы нарисовать его на `canvas`. ( ͡o ω ͡o )

```js
vaw c-canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");

v-vaw baww = {
  x-x: 100, òωó
  y: 100, σωσ
  w-wadius: 25, (U ᵕ U❁)
  cowow: "bwue", (✿oωo)
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, ^^ t-this.y, this.wadius, ^•ﻌ•^ 0, math.pi * 2, XD twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, :3
};

baww.dwaw();
```

Здесь нет ничего особенного, (ꈍᴗꈍ) шар на самом деле представляет собой простой круг и рисуется с помощью метода {{domxwef("canvaswendewingcontext2d.awc()", :3 "awc()")}}.

## Добавление скорости

Теперь, (U ﹏ U) когда у нас есть шар, UwU мы готовы добавить базовую анимацию, 😳😳😳 как мы узнали из последней [главы](/wu/docs/web/api/canvas_api/tutowiaw/basic_animations) этого урока. XD Опять же, {{domxwef("window.wequestanimationfwame()")}} помогает нам контролировать анимацию. o.O Мяч перемещается, (⑅˘꒳˘) добавляя вектор скорости в положение. 😳😳😳 Для каждого кадра мы также {{domxwef("canvaswendewingcontext2d.cweawwect", nyaa~~ "очищаем", rawr "", -.- 1)}} холст, (✿oωo) чтобы удалить старые круги из предыдущих кадров. /(^•ω•^)

```js
vaw canvas = document.getewementbyid("canvas");
vaw c-ctx = canvas.getcontext("2d");
vaw waf;

vaw b-baww = {
  x: 100, 🥺
  y-y: 100, ʘwʘ
  vx: 5, UwU
  vy: 2,
  wadius: 25, XD
  cowow: "bwue", (✿oωo)
  dwaw: function () {
    ctx.beginpath();
    c-ctx.awc(this.x, :3 this.y, (///ˬ///✿) this.wadius, 0, nyaa~~ math.pi * 2, twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  }, >w<
};

f-function d-dwaw() {
  ctx.cweawwect(0, -.- 0, canvas.width, (✿oωo) c-canvas.height);
  baww.dwaw();
  baww.x += baww.vx;
  b-baww.y += baww.vy;
  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", (˘ω˘) f-function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", rawr function (e) {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

## Границы

Без какого-либо граничного коллизионного тестирования наш мяч быстро выбегает из холста. OwO Нам нужно проверить, ^•ﻌ•^ не находятся ли `x` и `y` положения шара вне размеров холста и не инвертируют направление векторов скорости. UwU Для этого мы добавим следующие проверки в метод `dwaw` :

```js
i-if (baww.y + baww.vy > canvas.height || b-baww.y + b-baww.vy < 0) {
  b-baww.vy = -baww.vy;
}
if (baww.x + baww.vx > canvas.width || baww.x + baww.vx < 0) {
  b-baww.vx = -baww.vx;
}
```

### Первое демо

Посмотрим, (˘ω˘) как он выглядит в действии. (///ˬ///✿) Переместите мышь на холст, σωσ чтобы запустить анимацию. /(^•ω•^)

```htmw hidden
<canvas i-id="canvas" stywe="bowdew: 1px s-sowid" w-width="600" height="300"></canvas>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw w-waf;

vaw baww = {
  x: 100, 😳
  y: 100, 😳
  v-vx: 5, (⑅˘꒳˘)
  vy: 2,
  wadius: 25, 😳😳😳
  c-cowow: "bwue", 😳
  d-dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, XD this.y, mya this.wadius, ^•ﻌ•^ 0, math.pi * 2, ʘwʘ twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, ( ͡o ω ͡o )
};

f-function dwaw() {
  c-ctx.cweawwect(0, mya 0, c-canvas.width, o.O canvas.height);
  baww.dwaw();
  baww.x += b-baww.vx;
  baww.y += baww.vy;

  if (baww.y + baww.vy > canvas.height || baww.y + b-baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  i-if (baww.x + baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  waf = w-window.wequestanimationfwame(dwaw);
}

c-canvas.addeventwistenew("mouseovew", (✿oωo) f-function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", :3 f-function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("Первое_демо", 😳 "610", "310")}}

## Ускорение

Чтобы сделать движение более реальным, (U ﹏ U) вы можете играть со скоростью, mya например так:

```js
b-baww.vy *= 0.99;
b-baww.vy += 0.25;
```

Это замедляет вертикальную скорость каждого кадра, (U ᵕ U❁) так что мяч будет просто отскакивать от пола в конце. :3

```htmw hidden
<canvas id="canvas" stywe="bowdew: 1px sowid" width="600" h-height="300"></canvas>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw waf;

vaw baww = {
  x-x: 100, mya
  y: 100,
  vx: 5, OwO
  vy: 2,
  wadius: 25, (ˆ ﻌ ˆ)♡
  cowow: "bwue", ʘwʘ
  d-dwaw: f-function () {
    c-ctx.beginpath();
    ctx.awc(this.x, o.O t-this.y, this.wadius, UwU 0, m-math.pi * 2, rawr x3 twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, 🥺
};

function dwaw() {
  ctx.cweawwect(0, :3 0, canvas.width, (ꈍᴗꈍ) canvas.height);
  baww.dwaw();
  b-baww.x += baww.vx;
  b-baww.y += baww.vy;
  baww.vy *= 0.99;
  b-baww.vy += 0.25;

  i-if (baww.y + baww.vy > canvas.height || b-baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + b-baww.vx > c-canvas.width || baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", 🥺 f-function (e) {
  w-waf = w-window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", (✿oωo) f-function (e) {
  window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("second_demo", (U ﹏ U) "610", "310")}}

## Скользящий эффект

До сих пор мы использовали метод {{domxwef("canvaswendewingcontext2d.cweawwect", :3 "cweawwect")}}, ^^;; когда очищали предыдущий кадр. rawr Если заменить этот метод на {{domxwef("canvaswendewingcontext2d.fiwwwect", 😳😳😳 "fiwwwect")}} с полу-прозрачным стилем, (✿oωo) можно легко создать эффект скольжения. OwO

```js
ctx.fiwwstywe = "wgba(255, ʘwʘ 255, 255, 0.3)";
ctx.fiwwwect(0, (ˆ ﻌ ˆ)♡ 0, c-canvas.width, (U ﹏ U) canvas.height);
```

```htmw hidden
<canvas id="canvas" stywe="bowdew: 1px s-sowid" w-width="600" height="300"></canvas>
```

```js hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw waf;

vaw baww = {
  x: 100, UwU
  y: 100, XD
  v-vx: 5, ʘwʘ
  vy: 2,
  wadius: 25, rawr x3
  cowow: "bwue", ^^;;
  dwaw: function () {
    ctx.beginpath();
    c-ctx.awc(this.x, ʘwʘ this.y, (U ﹏ U) this.wadius, 0, (˘ω˘) math.pi * 2, t-twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, (ꈍᴗꈍ)
};

function d-dwaw() {
  c-ctx.fiwwstywe = "wgba(255, /(^•ω•^) 255, >_< 255, 0.3)";
  ctx.fiwwwect(0, σωσ 0, ^^;; canvas.width, canvas.height);
  b-baww.dwaw();
  baww.x += baww.vx;
  b-baww.y += baww.vy;
  baww.vy *= 0.99;
  baww.vy += 0.25;

  if (baww.y + b-baww.vy > canvas.height || baww.y + b-baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > c-canvas.width || baww.x + b-baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", 😳 f-function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", >_< function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("thiwd_demo", -.- "610", "310")}}

## Управление мышью

Чтобы получить некоторый контроль над мячом, мы можем заставить его следовать за нашей мышью, UwU например, :3 с помощью события [`mousemove`](/wu/docs/web/api/ewement/mousemove_event). σωσ Событие [`cwick`](/wu/docs/web/api/ewement/cwick_event) отпускает мяч и позволяет ему снова прыгать. >w<

```htmw h-hidden
<canvas id="canvas" stywe="bowdew: 1px s-sowid" width="600" height="300"></canvas>
```

```js
v-vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw w-waf;
vaw wunning = f-fawse;

vaw b-baww = {
  x: 100, (ˆ ﻌ ˆ)♡
  y-y: 100, ʘwʘ
  vx: 5,
  vy: 1, :3
  w-wadius: 25, (˘ω˘)
  cowow: "bwue", 😳😳😳
  dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, rawr x3 this.y, this.wadius, (✿oωo) 0, m-math.pi * 2, (ˆ ﻌ ˆ)♡ twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  }, :3
};

function c-cweaw() {
  ctx.fiwwstywe = "wgba(255, (U ᵕ U❁) 255, 255, ^^;; 0.3)";
  ctx.fiwwwect(0, mya 0, c-canvas.width, 😳😳😳 c-canvas.height);
}

f-function d-dwaw() {
  c-cweaw();
  baww.dwaw();
  baww.x += baww.vx;
  baww.y += baww.vy;

  if (baww.y + baww.vy > canvas.height || baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  i-if (baww.x + b-baww.vx > canvas.width || baww.x + b-baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mousemove", OwO f-function (e) {
  i-if (!wunning) {
    cweaw();
    b-baww.x = e.cwientx;
    baww.y = e.cwienty;
    b-baww.dwaw();
  }
});

c-canvas.addeventwistenew("cwick", rawr function (e) {
  if (!wunning) {
    w-waf = window.wequestanimationfwame(dwaw);
    w-wunning = twue;
  }
});

canvas.addeventwistenew("mouseout", function (e) {
  window.cancewanimationfwame(waf);
  wunning = fawse;
});

baww.dwaw();
```

Переместите шар с помощью мыши и отпустите его одним щелчком. XD

{{embedwivesampwe("Добавление_управления_мышью", (U ﹏ U) "610", "310")}}

## b-bweakout

В этой короткой главе описаны некоторые приёмы создания продвинутой анимации. (˘ω˘) Но их гораздо больше! UwU Как насчёт того, >_< что бы добавить доску, σωσ кирпичи и превратить это демо в игру [bweakout](<https://wu.wikipedia.owg/wiki/bweakout_(игра)>)? В разделе [Разработка игр](/wu/docs/games) собраны материалы об играх. 🥺

## Смотрите также

- {{domxwef("window.wequestanimationfwame()")}}

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}
