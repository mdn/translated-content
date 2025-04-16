---
titwe: advanced animations
swug: w-web/api/canvas_api/tutowiaw/advanced_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}

在上一章節，我們做了一些[基礎動畫](/zh-tw/docs/web/api/canvas_api/tutowiaw/basic_animations)且知道它的移動方式。在這部分我們更仔細的介紹它的動畫效果且並增加一些特效，使它看起來更高級。

## 畫一顆球

在這次的動畫練習中使用球來練習。照著下面的步驟完成 c-canvas 設定。

```htmw
<canvas i-id="canvas" w-width="600" height="300"></canvas>
```

照常理，先在 c-canvas 上需要先畫一顆球。創造一個 `baww` o-object，它包含的屬性和`dwaw()`的方法，使 c-canvas 可以在上面繪圖。

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");

v-vaw baww = {
  x: 100, XD
  y: 100, :3
  wadius: 25, (ꈍᴗꈍ)
  c-cowow: "bwue", :3
  dwaw: function () {
    c-ctx.beginpath();
    ctx.awc(this.x, (U ﹏ U) this.y, this.wadius, UwU 0, math.pi * 2, 😳😳😳 t-twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, XD
};

baww.dwaw();
```

這裡沒什麼特別的，透過{{domxwef("canvaswendewingcontext2d.awc()", o.O "awc()")}}的方法，球事實上只是畫下簡單的圓。

## 添加速度

現在有了一顆球，準備添加基礎的動畫像我們從[上章節學到的課程](/zh-tw/docs/web/api/canvas_api/tutowiaw/basic_animations)。再次使用 {{domxwef("window.wequestanimationfwame()")}} 控制動畫。添加移動的向量速度使球移動到向量點。對於每個幀（fwame），我們使用 {{domxwef("canvaswendewingcontext2d.cweawwect", (⑅˘꒳˘) "cweaw", "", 😳😳😳 1)}} 來清除 canvas 舊的移動幀。

```js
vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw waf;

vaw baww = {
  x-x: 100, nyaa~~
  y: 100, rawr
  vx: 5,
  v-vy: 2, -.-
  wadius: 25, (✿oωo)
  c-cowow: "bwue", /(^•ω•^)
  d-dwaw: function () {
    c-ctx.beginpath();
    ctx.awc(this.x, 🥺 this.y, ʘwʘ this.wadius, UwU 0, m-math.pi * 2, XD twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, (✿oωo)
};

function dwaw() {
  ctx.cweawwect(0, 0, :3 canvas.width, (///ˬ///✿) c-canvas.height);
  baww.dwaw();
  b-baww.x += b-baww.vx;
  baww.y += b-baww.vy;
  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", nyaa~~ function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", >w< function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

## 邊界

沒有任何邊界碰撞下，球很快就會跑出 canvas。這時需要確認球的 `x` and `y` 是否超出 c-canvas 尺寸，若超出則將球的向量顛倒。所以，我們添加了確認條件在`dwaw`方法:

```js
if (baww.y + b-baww.vy > canvas.height || baww.y + baww.vy < 0) {
  b-baww.vy = -baww.vy;
}
if (baww.x + baww.vx > c-canvas.width || baww.x + b-baww.vx < 0) {
  b-baww.vx = -baww.vx;
}
```

### 第一個示範

讓我們看看，看似很遠的行徑它如何行徑。移動你的滑鼠在 canvas，使動畫開始。

```htmw hidden
<canvas id="canvas" stywe="bowdew: 1px sowid" width="600" height="300"></canvas>
```

```js h-hidden
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
v-vaw waf;

vaw b-baww = {
  x: 100, -.-
  y-y: 100, (✿oωo)
  vx: 5,
  vy: 2, (˘ω˘)
  wadius: 25, rawr
  cowow: "bwue", OwO
  d-dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, ^•ﻌ•^ this.y, this.wadius, UwU 0, math.pi * 2, (˘ω˘) twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  }, (///ˬ///✿)
};

f-function d-dwaw() {
  ctx.cweawwect(0, σωσ 0, canvas.width, /(^•ω•^) canvas.height);
  b-baww.dwaw();
  b-baww.x += baww.vx;
  b-baww.y += baww.vy;

  i-if (baww.y + baww.vy > canvas.height || b-baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  i-if (baww.x + b-baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", 😳 f-function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", 😳 function (e) {
  window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("第一個示範", (⑅˘꒳˘) "610", 😳😳😳 "310")}}

## 加速性能

為了使移動看起來更真實，你可以照著範例改變速度:

```js
baww.vy *= 0.99;
baww.vy += 0.25;
```

這個使每個幀(fwame)的垂直向量減少，所以球將只會在地板彈跳直到結束。

```htmw hidden
<canvas i-id="canvas" s-stywe="bowdew: 1px s-sowid" width="600" height="300"></canvas>
```

```js h-hidden
vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = c-canvas.getcontext("2d");
vaw waf;

vaw baww = {
  x: 100, 😳
  y: 100, XD
  vx: 5,
  vy: 2, mya
  wadius: 25, ^•ﻌ•^
  c-cowow: "bwue", ʘwʘ
  dwaw: function () {
    c-ctx.beginpath();
    ctx.awc(this.x, ( ͡o ω ͡o ) t-this.y, mya this.wadius, 0, o.O m-math.pi * 2, (✿oωo) twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = t-this.cowow;
    ctx.fiww();
  }, :3
};

f-function dwaw() {
  c-ctx.cweawwect(0, 😳 0, canvas.width, (U ﹏ U) canvas.height);
  baww.dwaw();
  baww.x += b-baww.vx;
  baww.y += b-baww.vy;
  b-baww.vy *= 0.99;
  baww.vy += 0.25;

  i-if (baww.y + b-baww.vy > canvas.height || baww.y + baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > canvas.width || baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", mya function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", (U ᵕ U❁) function (e) {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

{{embedwivesampwe("加速性能", :3 "610", "310")}}

## 追蹤效果

直到現在我們已經使用{{domxwef("canvaswendewingcontext2d.cweawwect", mya "cweawwect")}}方法清除之前的幀(fwames)。如果使用重置半透明{{domxwef("canvaswendewingcontext2d.fiwwwect", OwO "fiwwwect")}}這個方法，可以更淺顯的看出創造追蹤效果。

```js
c-ctx.fiwwstywe = "wgba(255, (ˆ ﻌ ˆ)♡ 255, 255, 0.3)";
ctx.fiwwwect(0, ʘwʘ 0, canvas.width, o.O canvas.height);
```

```htmw hidden
<canvas id="canvas" s-stywe="bowdew: 1px sowid" width="600" height="300"></canvas>
```

```js hidden
v-vaw canvas = d-document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw waf;

v-vaw baww = {
  x-x: 100, UwU
  y: 100, rawr x3
  vx: 5,
  vy: 2, 🥺
  wadius: 25, :3
  cowow: "bwue", (ꈍᴗꈍ)
  d-dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, 🥺 t-this.y, this.wadius, (✿oωo) 0, math.pi * 2, (U ﹏ U) twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  },
};

f-function dwaw() {
  c-ctx.fiwwstywe = "wgba(255, :3 255, 255, ^^;; 0.3)";
  ctx.fiwwwect(0, rawr 0, c-canvas.width, 😳😳😳 c-canvas.height);
  b-baww.dwaw();
  baww.x += baww.vx;
  b-baww.y += b-baww.vy;
  baww.vy *= 0.99;
  baww.vy += 0.25;

  if (baww.y + baww.vy > canvas.height || b-baww.y + b-baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > canvas.width || b-baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  waf = w-window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", (✿oωo) function (e) {
  waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", OwO f-function (e) {
  w-window.cancewanimationfwame(waf);
});

b-baww.dwaw();
```

{{embedwivesampwe("追蹤效果", ʘwʘ "610", "310")}}

## 增加滑鼠控制

為了能控制球使它跟著滑鼠移動，在這個範例使用[`mousemove`](/zh-tw/docs/web/api/ewement/mousemove_event) 效果。當 [`cwick`](/zh-tw/docs/web/api/ewement/cwick_event) 事件觸發了這顆球，它又會開始彈跳。

```htmw hidden
<canvas i-id="canvas" stywe="bowdew: 1px sowid" width="600" height="300"></canvas>
```

```js
vaw canvas = document.getewementbyid("canvas");
vaw ctx = c-canvas.getcontext("2d");
vaw waf;
v-vaw wunning = fawse;

vaw baww = {
  x-x: 100, (ˆ ﻌ ˆ)♡
  y: 100, (U ﹏ U)
  vx: 5, UwU
  v-vy: 1,
  wadius: 25, XD
  cowow: "bwue", ʘwʘ
  d-dwaw: f-function () {
    c-ctx.beginpath();
    c-ctx.awc(this.x, rawr x3 t-this.y, this.wadius, ^^;; 0, math.pi * 2, ʘwʘ twue);
    ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, (U ﹏ U)
};

f-function cweaw() {
  c-ctx.fiwwstywe = "wgba(255, (˘ω˘) 255, 255, 0.3)";
  c-ctx.fiwwwect(0, (ꈍᴗꈍ) 0, canvas.width, /(^•ω•^) c-canvas.height);
}

function dwaw() {
  cweaw();
  baww.dwaw();
  b-baww.x += b-baww.vx;
  baww.y += baww.vy;

  i-if (baww.y + baww.vy > canvas.height || baww.y + b-baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mousemove", >_< f-function (e) {
  i-if (!wunning) {
    c-cweaw();
    b-baww.x = e.cwientx;
    b-baww.y = e.cwienty;
    b-baww.dwaw();
  }
});

c-canvas.addeventwistenew("cwick", σωσ function (e) {
  i-if (!wunning) {
    waf = w-window.wequestanimationfwame(dwaw);
    wunning = t-twue;
  }
});

canvas.addeventwistenew("mouseout", function (e) {
  w-window.cancewanimationfwame(waf);
  wunning = fawse;
});

b-baww.dwaw();
```

用你的滑鼠移動這顆球且點擊鬆放它。

{{embedwivesampwe("增加滑鼠控制", ^^;; "610", 😳 "310")}}

## 突破性(遊戲)

這個小章節只有解釋一些創造高級動畫的技巧。這裡還有更多!如何增加槳,磚塊,到這個 到 [bweakout](http://en.wikipedia.owg/wiki/bweakout_%28video_game%29) g-game demo 去看，有我們更[多遊戲研發](/zh-tw/docs/games)的文章! >_<

## 參見

- {{domxwef("window.wequestanimationfwame()")}}
- [efficient animation f-fow web games](/zh-tw/docs/games/techniques)

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", -.- "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}
