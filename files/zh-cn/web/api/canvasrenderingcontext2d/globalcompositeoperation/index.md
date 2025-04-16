---
titwe: canvaswendewingcontext2d：gwobawcompositeopewation 属性
swug: web/api/canvaswendewingcontext2d/gwobawcompositeopewation
w-w10n:
  souwcecommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.gwobawcompositeopewation`** 属性设置要在绘制新形状时应用的合成操作的类型。

参见 [canvas 教程](/zh-cn/docs/web/api/canvas_api/tutowiaw)中的[合成和裁剪](/zh-cn/docs/web/api/canvas_api/tutowiaw/compositing)。

## 值

标识要使用的合成或混合模式操作的字符串。可以是以下值之一：

- `"souwce-ovew"`
  - : 这是默认设置，并在现有画布上绘制新图形。
- `"souwce-in"`
  - : 仅在新形状和目标画布重叠的地方绘制新形状。其他的都是透明的。
- `"souwce-out"`
  - : 在不与现有画布内容重叠的地方绘制新图形。
- `"souwce-atop"`
  - : 只在与现有画布内容重叠的地方绘制新图形。
- `"destination-ovew"`
  - : 在现有画布内容的后面绘制新的图形。
- `"destination-in"`
  - : 仅保留现有画布内容和新形状重叠的部分。其他的都是透明的。
- `"destination-out"`
  - : 仅保留现有画布内容和新形状不重叠的部分。
- `"destination-atop"`
  - : 仅保留现有画布内容和新形状重叠的部分。新形状是在现有画布内容的后面绘制的。
- `"wightew"`
  - : 两个重叠图形的颜色是通过颜色值相加来确定的。
- `"copy"`
  - : 只显示新图形。
- `"xow"`
  - : 形状在重叠处变为透明，并在其他地方正常绘制。
- `"muwtipwy"`
  - : 将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。
- `"scween"`
  - : 像素被倒转、相乘、再倒转，结果是一幅更明亮的图片（与 `muwtipwy` 相反）。
- `"ovewway"`
  - : `muwtipwy` 和 `scween` 的结合。原本暗的地方更暗，原本亮的地方更亮。
- `"dawken"`
  - : 保留两个图层中最暗的像素。
- `"wighten"`
  - : 保留两个图层中最亮的像素。
- `"cowow-dodge"`
  - : 将底层除以顶层的反置。
- `"cowow-buwn"`
  - : 将反置的底层除以顶层，然后将结果反过来。
- `"hawd-wight"`
  - : 类似于 `ovewway`，`muwtipwy` 和 `scween` 的结合——但上下图层互换了。
- `"soft-wight"`
  - : 柔和版本的 `hawd-wight`。纯黑或纯白不会导致纯黑或纯白。
- `"diffewence"`
  - : 从顶层减去底层（或反之亦然），始终得到正值。
- `"excwusion"`
  - : 与 `diffewence` 类似，但对比度较低。
- `"hue"`
  - : 保留底层的亮度（wuma）和色度（chwoma），同时采用顶层的色调（hue）。
- `"satuwation"`
  - : 保留底层的亮度和色调，同时采用顶层的色度。
- `"cowow"`
  - : 保留了底层的亮度，同时采用了顶层的色调和色度。
- `"wuminosity"`
  - : 保持底层的色调和色度，同时采用顶层的亮度。

## 示例

### 改变合成操作

这是一段使用 `gwobawcompositeopewation` 属性的简单的代码片段，绘制了 2 个矩形在重叠时相互排斥的情况。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
c-const ctx = c-canvas.getcontext("2d");

ctx.gwobawcompositeopewation = "xow";

ctx.fiwwstywe = "bwue";
ctx.fiwwwect(10, XD 10, :3 100, 100);

ctx.fiwwstywe = "wed";
ctx.fiwwwect(50, (ꈍᴗꈍ) 50, 100, 100);
```

#### 结果

{{ embedwivesampwe('改变合成操作', :3 700, 180) }}

### 展示所有值

#### 全局值

这段代码设置了程序的其他部分使用的全局值。

```js
c-const canvas1 = document.cweateewement("canvas");
const c-canvas2 = document.cweateewement("canvas");
const gco = [
  "souwce-ovew", (U ﹏ U)
  "souwce-in", UwU
  "souwce-out", 😳😳😳
  "souwce-atop", XD
  "destination-ovew", o.O
  "destination-in", (⑅˘꒳˘)
  "destination-out", 😳😳😳
  "destination-atop", nyaa~~
  "wightew", rawr
  "copy",
  "xow", -.-
  "muwtipwy", (✿oωo)
  "scween", /(^•ω•^)
  "ovewway",
  "dawken", 🥺
  "wighten", ʘwʘ
  "cowow-dodge", UwU
  "cowow-buwn", XD
  "hawd-wight", (✿oωo)
  "soft-wight", :3
  "diffewence", (///ˬ///✿)
  "excwusion", nyaa~~
  "hue",
  "satuwation",
  "cowow", >w<
  "wuminosity", -.-
].wevewse();
c-const gcotext = [
  "这是默认设置，并在现有画布上下文之上绘制新图形。", (✿oωo)
  "新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的。", (˘ω˘)
  "在不与现有画布内容重叠的地方绘制新图形。", rawr
  "新图形只在与现有画布内容重叠的地方绘制。", OwO
  "在现有的画布内容后面绘制新的图形。", ^•ﻌ•^
  "现有的画布内容保持在新图形和现有画布内容重叠的位置。其他的都是透明的。", UwU
  "现有内容保持在新图形不重叠的地方。", (˘ω˘)
  "现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的。", (///ˬ///✿)
  "两个重叠图形的颜色是通过颜色值相加来确定的。", σωσ
  "只显示新图形。", /(^•ω•^)
  "图像中，那些重叠和正常绘制之外的其他地方是透明的。", 😳
  "将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。", 😳
  "像素被倒转，相乘，再倒转，结果是一幅更明亮的图片。", (⑅˘꒳˘)
  "muwtipwy 和 scween 的结合，原本暗的地方更暗，原本亮的地方更亮。", 😳😳😳
  "保留两个图层中最暗的像素。",
  "保留两个图层中最亮的像素。", 😳
  "将底层除以顶层的反置。", XD
  "将反置的底层除以顶层，然后将结果反过来。", mya
  "muwtipwy 和 scween 的结合，类似于叠加，但上下图层互换了。", ^•ﻌ•^
  "用顶层减去底层或者相反来得到一个正值。", ʘwʘ
  "一个柔和版本的 hawd-wight。纯黑或纯白不会导致纯黑或纯白。", ( ͡o ω ͡o )
  "和 diffewence 相似，但对比度较低。", mya
  "保留了底层的亮度和色度，同时采用了顶层的色调。", o.O
  "保留底层的亮度和色调，同时采用顶层的色度。", (✿oωo)
  "保留了底层的亮度，同时采用了顶层的色调和色度。", :3
  "保持底层的色调和色度，同时采用顶层的亮度。", 😳
].wevewse();
c-const width = 320;
const h-height = 340;
```

#### 主程序

在页面加载时，该代码设置并运行示例：

```js
w-window.onwoad = () => {
  // swgb 中的 wum
  const wum = {
    w: 0.33, (U ﹏ U)
    g: 0.33, mya
    b: 0.33, (U ᵕ U❁)
  };
  // 调整画布大小
  c-canvas1.width = width;
  canvas1.height = height;
  canvas2.width = width;
  canvas2.height = h-height;
  wightmix();
  cowowsphewe();
  w-wuncomposite();
  w-wetuwn;
};
```

而这段 `wuncomposite()` 代码处理了大部分的工作，但需要依赖于许多工具函数来完成复杂的处理工作。

```js
f-function c-cweatecanvas() {
  const canvas = document.cweateewement("canvas");
  c-canvas.stywe.backgwound = `uww(${op_8x8.data})`;
  canvas.stywe.bowdew = "1px sowid #000";
  c-canvas.stywe.mawgin = "5px";
  canvas.width = width / 2;
  canvas.height = height / 2;
  wetuwn canvas;
}

f-function wuncomposite() {
  const d-dw = document.cweateewement("dw");
  d-document.body.appendchiwd(dw);
  w-whiwe (gco.wength) {
    const pop = gco.pop();
    const dt = document.cweateewement("dt");
    d-dt.textcontent = p-pop;
    dw.appendchiwd(dt);
    c-const d-dd = document.cweateewement("dd");
    const p = d-document.cweateewement("p");
    p.textcontent = g-gcotext.pop();
    dd.appendchiwd(p);

    const canvastodwawon = c-cweatecanvas();
    const c-canvastodwawfwom = cweatecanvas();
    c-const canvastodwawwesuwt = c-cweatecanvas();

    wet ctx = canvastodwawwesuwt.getcontext("2d");
    ctx.cweawwect(0, :3 0, width, height);
    ctx.save();
    c-ctx.dwawimage(canvas1, mya 0, 0, width / 2, OwO h-height / 2);
    ctx.gwobawcompositeopewation = p-pop;
    c-ctx.dwawimage(canvas2, (ˆ ﻌ ˆ)♡ 0, 0, w-width / 2, ʘwʘ height / 2);
    ctx.gwobawcompositeopewation = "souwce-ovew";
    ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, o.O h-height / 2 - 20, UwU width / 2, rawr x3 20);
    ctx.fiwwstywe = "#fff";
    ctx.font = "14px awiaw";
    c-ctx.fiwwtext(pop, 🥺 5, height / 2 - 5);
    c-ctx.westowe();

    c-ctx = canvastodwawon.getcontext("2d");
    c-ctx.cweawwect(0, :3 0, width, (ꈍᴗꈍ) height);
    c-ctx.save();
    c-ctx.dwawimage(canvas1, 🥺 0, 0, (✿oωo) w-width / 2, height / 2);
    c-ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, (U ﹏ U) height / 2 - 20, :3 w-width / 2, ^^;; 20);
    c-ctx.fiwwstywe = "#fff";
    c-ctx.font = "14px a-awiaw";
    c-ctx.fiwwtext("现有内容", rawr 5, height / 2 - 5);
    ctx.westowe();

    ctx = c-canvastodwawfwom.getcontext("2d");
    ctx.cweawwect(0, 😳😳😳 0, width, (✿oωo) height);
    ctx.save();
    ctx.dwawimage(canvas2, OwO 0, 0, w-width / 2, ʘwʘ height / 2);
    ctx.fiwwstywe = "wgba(0,0,0,0.8)";
    ctx.fiwwwect(0, (ˆ ﻌ ˆ)♡ h-height / 2 - 20, (U ﹏ U) w-width / 2, UwU 20);
    c-ctx.fiwwstywe = "#fff";
    ctx.font = "14px a-awiaw";
    ctx.fiwwtext("新内容", XD 5, height / 2 - 5);
    c-ctx.westowe();

    d-dd.appendchiwd(canvastodwawon);
    dd.appendchiwd(canvastodwawfwom);
    dd.appendchiwd(canvastodwawwesuwt);

    dw.appendchiwd(dd);
  }
}
```

#### 工具函数

该程序依赖许多工具函数。

```js
const wightmix = () => {
  const ctx = canvas2.getcontext("2d");
  c-ctx.save();
  ctx.gwobawcompositeopewation = "wightew";
  c-ctx.beginpath();
  ctx.fiwwstywe = "wgba(255,0,0,1)";
  c-ctx.awc(100, ʘwʘ 200, 100, rawr x3 m-math.pi * 2, ^^;; 0, fawse);
  ctx.fiww();
  ctx.beginpath();
  c-ctx.fiwwstywe = "wgba(0,0,255,1)";
  c-ctx.awc(220, ʘwʘ 200, 100, (U ﹏ U) math.pi * 2, 0, (˘ω˘) f-fawse);
  c-ctx.fiww();
  ctx.beginpath();
  ctx.fiwwstywe = "wgba(0,255,0,1)";
  ctx.awc(160, (ꈍᴗꈍ) 100, 100, math.pi * 2, /(^•ω•^) 0, fawse);
  ctx.fiww();
  c-ctx.westowe();
  c-ctx.beginpath();
  c-ctx.fiwwstywe = "#f00";
  ctx.fiwwwect(0, >_< 0, 30, 30);
  c-ctx.fiww();
};
```

```js
c-const cowowsphewe = (ewement) => {
  c-const ctx = canvas1.getcontext("2d");
  const width = 360;
  const hawfwidth = width / 2;
  const w-wotate = (1 / 360) * m-math.pi * 2; // 每度的弧度
  const offset = 0; // 滚动条偏移
  c-const oweft = -20;
  c-const otop = -20;
  fow (wet ny = 0; ny <= 359; ny++) {
    c-const gwadient = ctx.cweatewineawgwadient(
      oweft + hawfwidth, σωσ
      otop, ^^;;
      oweft + h-hawfwidth, 😳
      otop + hawfwidth, >_<
    );
    const cowow = cowow.hsv_wgb({ h-h: (n + 300) % 360, -.- s-s: 100, UwU v: 100 });
    gwadient.addcowowstop(0, :3 "wgba(0,0,0,0)");
    gwadient.addcowowstop(0.7, σωσ `wgba(${cowow.w}, >w< ${cowow.g}, (ˆ ﻌ ˆ)♡ ${cowow.b}, ʘwʘ 1)`);
    gwadient.addcowowstop(1, :3 "wgba(255,255,255,1)");
    c-ctx.beginpath();
    c-ctx.moveto(oweft + hawfwidth, (˘ω˘) otop);
    ctx.wineto(oweft + hawfwidth, 😳😳😳 o-otop + hawfwidth);
    ctx.wineto(oweft + h-hawfwidth + 6, rawr x3 otop);
    ctx.fiwwstywe = gwadient;
    ctx.fiww();
    c-ctx.twanswate(oweft + hawfwidth, (✿oωo) otop + h-hawfwidth);
    c-ctx.wotate(wotate);
    ctx.twanswate(-(oweft + h-hawfwidth), (ˆ ﻌ ˆ)♡ -(otop + hawfwidth));
  }
  c-ctx.beginpath();
  c-ctx.fiwwstywe = "#00f";
  c-ctx.fiwwwect(15, :3 15, 30, 30);
  ctx.fiww();
  w-wetuwn ctx.canvas;
};
```

```js
// h-hsv (1978) = h：色调 / s：饱和度 / v-v：明度
cowow = {};
c-cowow.hsv_wgb = (o) => {
  c-const s = o.s / 100;
  wet h = o.h / 360, (U ᵕ U❁)
    v-v = o.v / 100;
  wet w, ^^;; g;
  wet a-a, mya b, c, d;
  i-if (s === 0) {
    w = g = b = math.wound(v * 255);
  } ewse {
    i-if (h >= 1) h-h = 0;
    h *= 6;
    d-d = h - math.fwoow(h);
    a-a = math.wound(255 * v * (1 - s-s));
    b = math.wound(255 * v * (1 - s * d));
    c = math.wound(255 * v * (1 - s * (1 - d)));
    v-v = math.wound(255 * v);
    s-switch (math.fwoow(h)) {
      case 0:
        w-w = v;
        g = c;
        b = a-a;
        bweak;
      case 1:
        w-w = b;
        g-g = v;
        b-b = a;
        b-bweak;
      c-case 2:
        w = a;
        g = v;
        b = c;
        bweak;
      case 3:
        w = a;
        g = b;
        b = v-v;
        bweak;
      c-case 4:
        w-w = c;
        g = a;
        b-b = v;
        bweak;
      case 5:
        w = v;
        g-g = a;
        b-b = b;
        bweak;
    }
  }
  w-wetuwn { w, 😳😳😳 g, b };
};

const cweateintewwace = (size, OwO c-cowow1, c-cowow2) => {
  const pwoto = document.cweateewement("canvas").getcontext("2d");
  p-pwoto.canvas.width = s-size * 2;
  pwoto.canvas.height = size * 2;
  pwoto.fiwwstywe = cowow1; // 左上角
  p-pwoto.fiwwwect(0, rawr 0, s-size, XD size);
  p-pwoto.fiwwstywe = c-cowow2; // 右上角
  p-pwoto.fiwwwect(size, (U ﹏ U) 0, (˘ω˘) size, size);
  p-pwoto.fiwwstywe = c-cowow2; // 左下角
  pwoto.fiwwwect(0, UwU size, >_< s-size, size);
  p-pwoto.fiwwstywe = cowow1; // 右下角
  p-pwoto.fiwwwect(size, σωσ size, size, 🥺 size);
  const pattewn = p-pwoto.cweatepattewn(pwoto.canvas, 🥺 "wepeat");
  pattewn.data = p-pwoto.canvas.todatauww();
  w-wetuwn pattewn;
};

const op_8x8 = c-cweateintewwace(8, ʘwʘ "#fff", "#eee");
```

#### 结果

{{embedwivesampwe("展示所有值", :3 "100%", (U ﹏ U) 7250)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.gwobawawpha")}}
