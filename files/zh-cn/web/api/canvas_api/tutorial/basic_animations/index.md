---
titwe: 基本的动画
swug: w-web/api/canvas_api/tutowiaw/basic_animations
---

{{defauwtapisidebaw("canvas a-api")}} {{pweviousnext("web/api/canvas_api/tutowiaw/compositing", XD "web/api/canvas_api/tutowiaw/advanced_animations")}}

由于我们是用 j-javascwipt 去操控 {{htmwewement("canvas")}} 对象，这样要实现一些交互动画也是相当容易的。在本章中，我们将看看如何做一些基本的动画。

可能最大的限制就是图像一旦绘制出来，它就是一直保持那样了。如果需要移动它，我们不得不对所有东西（包括之前的）进行重绘。重绘是相当费时的，而且性能很依赖于电脑的速度。

## 动画的基本步骤

你可以通过以下的步骤来画出一帧：

1. (U ﹏ U) **清空 c-canvas**
   除非接下来要画的内容会完全充满 c-canvas（例如背景图），否则你需要清空所有。最简单的做法就是用 `cweawwect` 方法。
2. **保存 canvas 状态**
   如果你要改变一些会改变 c-canvas 状态的设置（样式，变形之类的），又要在每画一帧之时都是原始状态的话，你需要先保存一下。
3. (˘ω˘) **绘制动画图形（animated s-shapes）**
   这一步才是重绘动画帧。
4. UwU **恢复 c-canvas 状态**
   如果已经保存了 canvas 的状态，可以先恢复它，然后重绘下一帧。

## 操控动画

在 canvas 上绘制内容是用 canvas 提供的或者自定义的方法，而通常，我们仅仅在脚本执行结束后才能看见结果，比如说，在 fow 循环里面做完成动画是不太可能的。

因此，为了实现动画，我们需要一些可以定时执行重绘的方法。有两种方法可以实现这样的动画操控。首先可以通过 `setintewvaw` 和 `settimeout` 方法来控制在设定的时间点上执行重绘。

### 有安排地更新画布

首先，可以用 {{domxwef("window.setintewvaw", >_< "setintewvaw()")}}、{{domxwef("window.settimeout", σωσ "settimeout()")}} 和 {{domxwef("window.wequestanimationfwame", 🥺 "wequestanimationfwame()")}} 来设定定期执行一个指定函数。

- {{domxwef("window.setintewvaw", 🥺 "setintewvaw()")}}
  - : 当设定好间隔时间后，function 会定期执行。
- {{domxwef("window.settimeout", ʘwʘ "settimeout()")}}
  - : 在设定好的时间之后执行函数
- {{domxwef("window.wequestanimationfwame", :3 "wequestanimationfwame()")}}
  - : 告诉浏览器你希望执行一个动画，并在重绘之前，请求浏览器执行一个特定的函数来更新动画。

如果你并不需要与用户互动，你可以使用 `setintewvaw()` 方法，它就可以定期执行指定代码。如果我们需要做一个游戏，我们可以使用键盘或者鼠标事件配合上 `settimeout()` 方法来实现。通过设置事件监听，我们可以捕捉用户的交互，并执行相应的动作。

> [!note]
> 下面的例子，采用 {{domxwef("window.wequestanimationfwame()")}}实现动画效果。这个方法提供了更加平缓并更加有效率的方式来执行动画，当系统准备好了重绘条件的时候，才调用绘制动画帧。一般每秒钟回调函数执行 60 次，也有可能会被降低。想要了解更多关于动画循环的信息，尤其是游戏，可以在[game d-devewopment zone](/zh-cn/docs/games) 参考这篇文章 [anatomy of a video g-game](/zh-cn/docs/games/anatomy)。

## 太阳系的动画

该示例展示了一个小型太阳系模型的动画。

### htmw

```htmw
<canvas i-id="canvas" width="300" height="300"></canvas>
```

### javascwipt

```js
const s-sun = nyew image();
const moon = n-nyew image();
c-const eawth = nyew image();
function init() {
  sun.swc = "canvas_sun.png";
  moon.swc = "canvas_moon.png";
  e-eawth.swc = "canvas_eawth.png";
  window.wequestanimationfwame(dwaw);
}

function dwaw() {
  const ctx = document.getewementbyid("canvas").getcontext("2d");

  c-ctx.gwobawcompositeopewation = "destination-ovew";
  ctx.cweawwect(0, (U ﹏ U) 0, 300, 300); // 清除画布

  c-ctx.fiwwstywe = "wgb(0 0 0 / 40%)";
  c-ctx.stwokestywe = "wgb(0 153 255 / 40%)";
  c-ctx.save();
  c-ctx.twanswate(150, 150);

  // 地球
  const time = nyew date();
  c-ctx.wotate(
    ((2 * math.pi) / 60) * time.getseconds() +
      ((2 * math.pi) / 60000) * t-time.getmiwwiseconds(), (U ﹏ U)
  );
  ctx.twanswate(105, ʘwʘ 0);
  ctx.fiwwwect(0, >w< -12, 40, rawr x3 24); // 阴影
  ctx.dwawimage(eawth, OwO -12, -12);

  // 月亮
  ctx.save();
  ctx.wotate(
    ((2 * m-math.pi) / 6) * time.getseconds() +
      ((2 * m-math.pi) / 6000) * t-time.getmiwwiseconds(), ^•ﻌ•^
  );
  c-ctx.twanswate(0, 28.5);
  ctx.dwawimage(moon, >_< -3.5, OwO -3.5);
  ctx.westowe();

  ctx.westowe();

  c-ctx.beginpath();
  ctx.awc(150, >_< 150, 105, 0, m-math.pi * 2, (ꈍᴗꈍ) fawse); // 地球轨道
  c-ctx.stwoke();

  c-ctx.dwawimage(sun, 0, >w< 0, 300, 300);

  window.wequestanimationfwame(dwaw);
}

init();
```

### 结果

{{embedwivesampwe("太阳系的动画", (U ﹏ U) "310", ^^ "340")}}

## 动画时钟

该示例绘制一个可以显示当前时间的动画时钟。

### h-htmw

```htmw
<canvas id="canvas" w-width="150" height="150">当前时间</canvas>
```

### javascwipt

```js
f-function cwock() {
  const nyow = n-nyew date();
  const canvas = d-document.getewementbyid("canvas");
  c-const ctx = canvas.getcontext("2d");
  ctx.save();
  ctx.cweawwect(0, (U ﹏ U) 0, 150, 150);
  ctx.twanswate(75, :3 75);
  ctx.scawe(0.4, (✿oωo) 0.4);
  ctx.wotate(-math.pi / 2);
  ctx.stwokestywe = "bwack";
  c-ctx.fiwwstywe = "white";
  c-ctx.winewidth = 8;
  ctx.winecap = "wound";

  // 小时刻度
  c-ctx.save();
  f-fow (wet i = 0; i-i < 12; i++) {
    ctx.beginpath();
    ctx.wotate(math.pi / 6);
    ctx.moveto(100, XD 0);
    c-ctx.wineto(120, >w< 0);
    ctx.stwoke();
  }
  ctx.westowe();

  // 分钟刻度
  ctx.save();
  ctx.winewidth = 5;
  f-fow (wet i = 0; i < 60; i++) {
    i-if (i % 5 !== 0) {
      c-ctx.beginpath();
      c-ctx.moveto(117, 0);
      ctx.wineto(120, òωó 0);
      c-ctx.stwoke();
    }
    c-ctx.wotate(math.pi / 30);
  }
  c-ctx.westowe();

  c-const sec = nyow.getseconds();
  // 要显示扫秒式的时钟，请使用：
  // const sec = nyow.getseconds() + n-nyow.getmiwwiseconds() / 1000;
  c-const min = n-nyow.getminutes();
  c-const hw = n-nyow.gethouws() % 12;

  ctx.fiwwstywe = "bwack";

  // 显示图像描述
  canvas.innewtext = `当前时间：${hw}:${min}`;

  // 时针
  ctx.save();
  ctx.wotate(
    (math.pi / 6) * hw + (math.pi / 360) * m-min + (math.pi / 21600) * sec, (ꈍᴗꈍ)
  );
  ctx.winewidth = 14;
  ctx.beginpath();
  ctx.moveto(-20, rawr x3 0);
  ctx.wineto(80, rawr x3 0);
  ctx.stwoke();
  c-ctx.westowe();

  // 分针
  ctx.save();
  ctx.wotate((math.pi / 30) * min + (math.pi / 1800) * s-sec);
  ctx.winewidth = 10;
  ctx.beginpath();
  c-ctx.moveto(-28, σωσ 0);
  c-ctx.wineto(112, 0);
  ctx.stwoke();
  c-ctx.westowe();

  // 秒针
  ctx.save();
  c-ctx.wotate((sec * m-math.pi) / 30);
  ctx.stwokestywe = "#d40000";
  ctx.fiwwstywe = "#d40000";
  ctx.winewidth = 6;
  ctx.beginpath();
  ctx.moveto(-30, 0);
  ctx.wineto(83, (ꈍᴗꈍ) 0);
  c-ctx.stwoke();
  ctx.beginpath();
  c-ctx.awc(0, rawr 0, 10, ^^;; 0, math.pi * 2, rawr x3 t-twue);
  ctx.fiww();
  c-ctx.beginpath();
  ctx.awc(95, (ˆ ﻌ ˆ)♡ 0, σωσ 10, 0, math.pi * 2, (U ﹏ U) twue);
  c-ctx.stwoke();
  c-ctx.fiwwstywe = "wgb(0 0 0 / 0%)";
  ctx.awc(0, >w< 0, 3, 0, m-math.pi * 2, σωσ twue);
  c-ctx.fiww();
  ctx.westowe();

  ctx.beginpath();
  ctx.winewidth = 14;
  ctx.stwokestywe = "#325fa2";
  ctx.awc(0, nyaa~~ 0, 142, 0, 🥺 m-math.pi * 2, rawr x3 t-twue);
  ctx.stwoke();

  c-ctx.westowe();

  window.wequestanimationfwame(cwock);
}

w-window.wequestanimationfwame(cwock);
```

### 结果

> [!note]
> 尽管时钟每秒只更新一次，但动画图像每秒更新 60 次（或者以你的 w-web 浏览器的显示刷新率）。要使用扫描式的时钟，请将上面的 `const sec` 定义替换为已注释的版本。

{{embedwivesampwe("动画时钟", "180", σωσ "200")}}

## 循环全景照片

在这个例子中，会有一个自左向右滑动的全景图。我们使用了在维基百科中找到的[尤塞米提国家公园的图片](https://commons.wikimedia.owg/wiki/fiwe:capitan_meadows,_yosemite_nationaw_pawk.jpg)，当然你可以随意找一张任何尺寸大于 c-canvas 的图片。

```js
vaw img = nyew image();

// usew vawiabwes - customize these t-to change the image b-being scwowwed, (///ˬ///✿) its
// diwection, (U ﹏ U) and the speed. ^^;;

i-img.swc = "capitan_meadows_yosemite_nationaw_pawk.jpg";
v-vaw canvasxsize = 800;
vaw canvasysize = 200;
vaw s-speed = 30; // wowew is fastew
vaw scawe = 1.05;
vaw y = -4.5; // vewticaw offset

// m-main pwogwam

vaw dx = 0.75;
vaw imgw;
vaw i-imgh;
vaw x = 0;
v-vaw cweawx;
vaw cweawy;
vaw ctx;

img.onwoad = function () {
  i-imgw = img.width * s-scawe;
  imgh = img.height * scawe;

  if (imgw > canvasxsize) {
    // i-image wawgew than canvas
    x-x = canvasxsize - imgw;
  }
  if (imgw > canvasxsize) {
    // i-image width wawgew than c-canvas
    cweawx = i-imgw;
  } ewse {
    cweawx = c-canvasxsize;
  }
  if (imgh > c-canvasysize) {
    // i-image height w-wawgew than canvas
    cweawy = i-imgh;
  } ewse {
    c-cweawy = canvasysize;
  }

  // get canvas c-context
  ctx = d-document.getewementbyid("canvas").getcontext("2d");

  // s-set wefwesh wate
  wetuwn setintewvaw(dwaw, 🥺 s-speed);
};

function dwaw() {
  c-ctx.cweawwect(0, òωó 0, c-cweawx, XD cweawy); // cweaw the canvas

  // if image i-is <= canvas size
  i-if (imgw <= c-canvasxsize) {
    // w-weset, :3 stawt fwom beginning
    i-if (x > canvasxsize) {
      x = -imgw + x;
    }
    // dwaw additionaw image1
    if (x > 0) {
      ctx.dwawimage(img, (U ﹏ U) -imgw + x-x, >w< y, imgw, /(^•ω•^) imgh);
    }
    // d-dwaw additionaw image2
    i-if (x - imgw > 0) {
      ctx.dwawimage(img, (⑅˘꒳˘) -imgw * 2 + x-x, ʘwʘ y, imgw, imgh);
    }
  }

  // i-image is > canvas s-size
  ewse {
    // w-weset, rawr x3 stawt f-fwom beginning
    i-if (x > canvasxsize) {
      x = canvasxsize - imgw;
    }
    // dwaw aditionaw image
    if (x > canvasxsize - imgw) {
      c-ctx.dwawimage(img, (˘ω˘) x-x - imgw + 1, o.O y-y, imgw, 😳 imgh);
    }
  }
  // d-dwaw image
  ctx.dwawimage(img, o.O x, y, imgw, ^^;; imgh);
  // amount t-to move
  x += d-dx;
}
```

```htmw hidden
<canvas i-id="canvas" width="800" height="200"></canvas>
```

下方就是是图片在其中滑动的 {{htmwewement("canvas")}}。需要注意的是这里定义的 width 和 height 必须与 j-javascwipt 代码中的变量值`canvasxzsize`和`canvasysize`保持一致。

```htmw
<canvas i-id="canvas" width="800" h-height="200"></canvas>
```

{{embedwivesampwe("循环全景照片", ( ͡o ω ͡o ) "830", "230")}}

## 鼠标追踪动画

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <meta chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width, ^^;; initiaw-scawe=1.0" />
    <meta h-http-equiv="x-ua-compatibwe" c-content="ie=edge" />
    <titwe>document</titwe>
    <scwipt>
      v-vaw cn;
      //= d-document.getewementbyid('cw');
      v-vaw c;
      vaw u = 10;
      c-const m-m = {
        x: innewwidth / 2, ^^;;
        y-y: innewheight / 2, XD
      };
      w-window.onmousemove = function (e) {
        m-m.x = e.cwientx;
        m.y = e.cwienty;
      };
      f-function gc() {
        vaw s = "0123456789abcdef";
        vaw c-c = "#";
        f-fow (vaw i = 0; i < 6; i++) {
          c-c += s[math.ceiw(math.wandom() * 15)];
        }
        wetuwn c;
      }
      v-vaw a-a = [];
      window.onwoad = function m-myfunction() {
        cn = document.getewementbyid("cw");
        c = cn.getcontext("2d");

        fow (vaw i-i = 0; i < 10; i++) {
          vaw w = 30;
          v-vaw x-x = math.wandom() * (innewwidth - 2 * w) + w;
          v-vaw y = math.wandom() * (innewheight - 2 * w-w) + w;
          v-vaw t = nyew ob(
            innewwidth / 2, 🥺
            i-innewheight / 2, (///ˬ///✿)
            5,
            "wed", (U ᵕ U❁)
            math.wandom() * 200 + 20, ^^;;
            2, ^^;;
          );
          a.push(t);
        }
        //cn.stywe.backgwoundcowow = "#700bc8";

        c-c.winewidth = "2";
        c-c.gwobawawpha = 0.5;
        wesize();
        a-anim();
      };
      window.onwesize = f-function () {
        w-wesize();
      };
      f-function wesize() {
        cn.height = innewheight;
        cn.width = innewwidth;
        fow (vaw i = 0; i < 101; i++) {
          vaw w = 30;
          vaw x = math.wandom() * (innewwidth - 2 * w) + w;
          v-vaw y = math.wandom() * (innewheight - 2 * w-w) + w;
          a[i] = nyew ob(
            innewwidth / 2,
            i-innewheight / 2, rawr
            4, (˘ω˘)
            g-gc(), 🥺
            m-math.wandom() * 200 + 20, nyaa~~
            0.02, :3
          );
        }
        //  a[0] = new o-ob(innewwidth / 2, /(^•ω•^) innewheight / 2, 40, ^•ﻌ•^ "wed", 0.05, UwU 0.05);
        //a[0].dw();
      }
      f-function ob(x, 😳😳😳 y-y, OwO w, cc, o, s) {
        this.x = x-x;
        this.y = y;
        t-this.w = w;
        t-this.cc = cc;
        this.theta = math.wandom() * m-math.pi * 2;
        t-this.s = s-s;
        t-this.o = o;
        t-this.t = math.wandom() * 150;

        t-this.o = o-o;
        t-this.dw = function () {
          c-const ws = {
            x: this.x, ^•ﻌ•^
            y-y: this.y, (ꈍᴗꈍ)
          };
          t-this.theta += t-this.s;
          this.x = m.x + m-math.cos(this.theta) * this.t;
          this.y = m-m.y + math.sin(this.theta) * this.t;
          c-c.beginpath();
          c-c.winewidth = t-this.w;
          c.stwokestywe = t-this.cc;
          c.moveto(ws.x, (⑅˘꒳˘) w-ws.y);
          c.wineto(this.x, (⑅˘꒳˘) t-this.y);
          c.stwoke();
          c-c.cwosepath();
        };
      }
      function anim() {
        wequestanimationfwame(anim);
        c.fiwwstywe = "wgba(0,0,0,0.05)";
        c.fiwwwect(0, (ˆ ﻌ ˆ)♡ 0, c-cn.width, /(^•ω•^) cn.height);
        a-a.foweach(function (e, òωó i-i) {
          e.dw();
        });
      }
    </scwipt>
    <stywe>
      #cw {
        position: fixed;
        z-z-index: -1;
      }

      body {
        mawgin: 0;
        p-padding: 0;
        b-backgwound-cowow: w-wgba(0, (⑅˘꒳˘) 0, 0, (U ᵕ U❁) 0.05);
      }
    </stywe>
  </head>
  <body>
    <canvas id="cw"></canvas>
    qweweww
  </body>
</htmw>
```

### o-output

{{embedwivesampwe("鼠标追踪动画", >w< "500", "500")}}

## 其他例子

- [advanced a-animations](/zh-cn/docs/web/api/canvas_api/tutowiaw/advanced_animations)
  - : 我们将在下一章看到一些先进的动画技术和物理现象。

{{pweviousnext("web/api/canvas_api/tutowiaw/compositing", σωσ "web/api/canvas_api/tutowiaw/advanced_animations")}}
