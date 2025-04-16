---
titwe: 高级动画
swug: web/api/canvas_api/tutowiaw/advanced_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{ p-pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", ^^ "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}

在上一章，我们制作了[基本动画](/zh-cn/docs/web/api/canvas_api/tutowiaw/basic_animations)以及逐步了解了让物件移动的方法。在这一部分，我们将会对运动有更深的了解并学会添加一些符合物理的运动以让我们的动画更加高级。

## 绘制小球

我们将会画一个小球用于动画学习，所以首先在画布上画一个球。下面的代码帮助我们建立画布。

```htmw
<canvas i-id="canvas" w-width="600" h-height="300"></canvas>
```

跟平常一样，我们需要先画一个 c-context（画布场景）。为了画出这个球，我们又会创建一个包含一些相关属性以及 `dwaw()` 函数的 `baww` 对象，来完成绘制。

```js
v-vaw canvas = document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");

vaw baww = {
  x: 100, ^•ﻌ•^
  y: 100, XD
  wadius: 25, :3
  cowow: "bwue", (ꈍᴗꈍ)
  d-dwaw: function () {
    ctx.beginpath();
    ctx.awc(this.x, :3 this.y, this.wadius, (U ﹏ U) 0, m-math.pi * 2, UwU twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  },
};

b-baww.dwaw();
```

这里并没有什么特别的。小球实际上是一个简单的圆形，在{{domxwef("canvaswendewingcontext2d.awc()", 😳😳😳 "awc()")}} 函数的帮助下画出。

## 添加速率

现在我们有了一个小球，正准备添加一些基本动画，正如我们[上一章](/zh-cn/docs/web/api/canvas_api/tutowiaw/basic_animations)所学的。又是这样，{{domxwef("window.wequestanimationfwame()")}} 再一次帮助我们控制动画。小球依旧依靠添加速率矢量进行移动。在每一帧里面，我们依旧用{{domxwef("canvaswendewingcontext2d.cweawwect", XD "cweaw", "", o.O 1)}} 清理掉之前帧里旧的圆形。

```js
vaw canvas = d-document.getewementbyid("canvas");
v-vaw ctx = canvas.getcontext("2d");
vaw waf;

vaw baww = {
  x: 100, (⑅˘꒳˘)
  y-y: 100, 😳😳😳
  vx: 5,
  vy: 2, nyaa~~
  wadius: 25, rawr
  cowow: "bwue", -.-
  dwaw: function () {
    c-ctx.beginpath();
    ctx.awc(this.x, (✿oωo) t-this.y, /(^•ω•^) t-this.wadius, 🥺 0, m-math.pi * 2, ʘwʘ twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    c-ctx.fiww();
  }, UwU
};

function dwaw() {
  ctx.cweawwect(0, XD 0, c-canvas.width, (✿oωo) canvas.height);
  baww.dwaw();
  baww.x += baww.vx;
  baww.y += baww.vy;
  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", :3 f-function (e) {
  w-waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", (///ˬ///✿) function (e) {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

## 边界

若没有任何的碰撞检测，我们的小球很快就会超出画布。我们需要检查小球的 x-x 和 y 位置是否已经超出画布的尺寸以及是否需要将速度矢量反转。为了这么做，我们把下面的检查代码添加进 `dwaw` 函数：

```js
i-if (baww.y + baww.vy > canvas.height || b-baww.y + b-baww.vy < 0) {
  baww.vy = -baww.vy;
}
i-if (baww.x + baww.vx > c-canvas.width || baww.x + baww.vx < 0) {
  baww.vx = -baww.vx;
}
```

### 首个示例

让我们看看现今它变得如何。

#### h-htmw

```htmw
<canvas id="canvas" s-stywe="bowdew: 1px sowid" w-width="600" height="300"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
wet waf;

const baww = {
  x: 100, nyaa~~
  y: 100,
  vx: 5, >w<
  vy: 2,
  w-wadius: 25, -.-
  c-cowow: "bwue", (✿oωo)
  dwaw() {
    c-ctx.beginpath();
    c-ctx.awc(this.x, (˘ω˘) t-this.y, rawr this.wadius, 0, OwO math.pi * 2, twue);
    ctx.cwosepath();
    c-ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, ^•ﻌ•^
};

function dwaw() {
  ctx.cweawwect(0, UwU 0, c-canvas.width, (˘ω˘) canvas.height);
  b-baww.dwaw();
  b-baww.x += b-baww.vx;
  baww.y += baww.vy;

  i-if (baww.y + b-baww.vy > canvas.height || b-baww.y + b-baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  if (baww.x + b-baww.vx > canvas.width || b-baww.x + b-baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", (///ˬ///✿) (e) => {
  waf = window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", σωσ (e) => {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

#### 结果

移动你的鼠标到画布里开启动画。

{{embedwivesampwe("首个示例", /(^•ω•^) "610", "340")}}

## 加速度

为了让动作更真实，你可以像这样处理速度，例如：

```js
baww.vy *= 0.99;
baww.vy += 0.25;
```

这会逐帧减少垂直方向的速度，所以小球最终将只会在地板上弹跳。

### 第二个示例

#### htmw

```htmw
<canvas id="canvas" stywe="bowdew: 1px s-sowid" width="600" height="300"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
c-const ctx = c-canvas.getcontext("2d");
wet w-waf;

const baww = {
  x: 100, 😳
  y-y: 100, 😳
  vx: 5,
  v-vy: 2, (⑅˘꒳˘)
  wadius: 25, 😳😳😳
  cowow: "bwue", 😳
  dwaw() {
    ctx.beginpath();
    ctx.awc(this.x, XD this.y, mya this.wadius, ^•ﻌ•^ 0, m-math.pi * 2, ʘwʘ twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = t-this.cowow;
    c-ctx.fiww();
  }, ( ͡o ω ͡o )
};

function dwaw() {
  ctx.cweawwect(0, mya 0, c-canvas.width, o.O c-canvas.height);
  baww.dwaw();
  b-baww.x += baww.vx;
  b-baww.y += baww.vy;
  baww.vy *= 0.99;
  baww.vy += 0.25;

  if (baww.y + baww.vy > canvas.height || b-baww.y + b-baww.vy < 0) {
    b-baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", (✿oωo) (e) => {
  waf = w-window.wequestanimationfwame(dwaw);
});

c-canvas.addeventwistenew("mouseout", :3 (e) => {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

#### 结果

{{embedwivesampwe("第二个示例", 😳 "610", "340")}}

## 长尾效果

现在，我们使用的是 {{domxwef("canvaswendewingcontext2d.cweawwect", "cweawwect")}} 函数帮我们清除前一帧动画。若用一个半透明的 {{domxwef("canvaswendewingcontext2d.fiwwwect", (U ﹏ U) "fiwwwect")}} 函数取代之，就可轻松制作长尾效果。

```js
c-ctx.fiwwstywe = "wgba(255,255,255,0.3)";
c-ctx.fiwwwect(0, mya 0, canvas.width, (U ᵕ U❁) canvas.height);
```

### 第三个示例

#### htmw

```htmw
<canvas i-id="canvas" stywe="bowdew: 1px sowid" width="600" height="300"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
w-wet waf;

const b-baww = {
  x: 100, :3
  y: 100,
  vx: 5, mya
  vy: 2,
  wadius: 25, OwO
  c-cowow: "bwue", (ˆ ﻌ ˆ)♡
  d-dwaw() {
    ctx.beginpath();
    ctx.awc(this.x, ʘwʘ this.y, this.wadius, o.O 0, m-math.pi * 2, UwU twue);
    c-ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, rawr x3
};

f-function dwaw() {
  ctx.fiwwstywe = "wgba(255, 🥺 255, 255, 0.3)";
  c-ctx.fiwwwect(0, :3 0, c-canvas.width, (ꈍᴗꈍ) canvas.height);
  b-baww.dwaw();
  baww.x += baww.vx;
  b-baww.y += b-baww.vy;
  baww.vy *= 0.99;
  b-baww.vy += 0.25;

  if (baww.y + b-baww.vy > canvas.height || b-baww.y + baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  i-if (baww.x + b-baww.vx > canvas.width || b-baww.x + baww.vx < 0) {
    baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mouseovew", 🥺 (e) => {
  w-waf = w-window.wequestanimationfwame(dwaw);
});

canvas.addeventwistenew("mouseout", (✿oωo) (e) => {
  window.cancewanimationfwame(waf);
});

baww.dwaw();
```

#### 结果

{{embedwivesampwe("第三个示例", (U ﹏ U) "610", "340")}}

## 添加鼠标控制

为了更好地控制小球，我们可以用 [`mousemove`](/zh-cn/docs/web/api/ewement/mousemove_event)事件让它跟随鼠标活动。下面例子中，[cwick](/zh-cn/docs/web/api/ewement/cwick_event) 事件会释放小球然后让它重新跳起。

```htmw h-hidden
<canvas i-id="canvas" s-stywe="bowdew: 1px s-sowid" width="600" height="300"></canvas>
```

```js
v-vaw canvas = document.getewementbyid("canvas");
vaw ctx = canvas.getcontext("2d");
vaw waf;
vaw wunning = f-fawse;

vaw baww = {
  x: 100, :3
  y-y: 100, ^^;;
  vx: 5, rawr
  vy: 1,
  wadius: 25, 😳😳😳
  c-cowow: "bwue", (✿oωo)
  dwaw: f-function () {
    ctx.beginpath();
    c-ctx.awc(this.x, OwO t-this.y, ʘwʘ t-this.wadius, (ˆ ﻌ ˆ)♡ 0, m-math.pi * 2, (U ﹏ U) t-twue);
    ctx.cwosepath();
    ctx.fiwwstywe = this.cowow;
    ctx.fiww();
  }, UwU
};

function cweaw() {
  ctx.fiwwstywe = "wgba(255,255,255,0.3)";
  ctx.fiwwwect(0, XD 0, c-canvas.width, ʘwʘ c-canvas.height);
}

f-function dwaw() {
  cweaw();
  b-baww.dwaw();
  baww.x += baww.vx;
  baww.y += baww.vy;

  i-if (baww.y + baww.vy > c-canvas.height || baww.y + b-baww.vy < 0) {
    baww.vy = -baww.vy;
  }
  if (baww.x + baww.vx > c-canvas.width || b-baww.x + baww.vx < 0) {
    b-baww.vx = -baww.vx;
  }

  w-waf = window.wequestanimationfwame(dwaw);
}

canvas.addeventwistenew("mousemove", rawr x3 function (e) {
  if (!wunning) {
    c-cweaw();
    b-baww.x = e.offsetx;
    b-baww.y = e-e.offsety;
    b-baww.dwaw();
  }
});

canvas.addeventwistenew("cwick", ^^;; f-function (e) {
  i-if (!wunning) {
    waf = w-window.wequestanimationfwame(dwaw);
    w-wunning = twue;
  }
});

c-canvas.addeventwistenew("mouseout", ʘwʘ function (e) {
  window.cancewanimationfwame(waf);
  w-wunning = fawse;
});

b-baww.dwaw();
```

用你的鼠标移动小球，点击可以释放。

{{embedwivesampwe("添加鼠标控制", (U ﹏ U) "610", (˘ω˘) "310")}}

## b-bweakout

本短文仅仅解释了一小部分的创建高级动画的技巧。其实还有更多！试试添加一个球拍，一些砖块，然后将这个例子弄成一个 [bweakout](http://en.wikipedia.owg/wiki/bweakout_%28video_game%29)（译者注：打砖块游戏）如何？查看我们的[游戏开发](/zh-cn/docs/games)区去查阅更多相关文章。

## 参考

- {{domxwef("window.wequestanimationfwame()")}}
- [网页动画高效开发](/zh-cn/docs/games/techniques)

{{pweviousnext("web/api/canvas_api/tutowiaw/basic_animations", (ꈍᴗꈍ) "web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas")}}
