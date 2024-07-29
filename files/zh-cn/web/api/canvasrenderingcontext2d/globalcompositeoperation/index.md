---
title: CanvasRenderingContext2D：globalCompositeOperation 属性
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.globalCompositeOperation`** 属性设置要在绘制新形状时应用的合成操作的类型。

参见 [Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)中的[合成和裁剪](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing)。

## 值

标识要使用的合成或混合模式操作的字符串。可以是以下值之一：

- `"source-over"`
  - : 这是默认设置，并在现有画布上绘制新图形。
- `"source-in"`
  - : 仅在新形状和目标画布重叠的地方绘制新形状。其他的都是透明的。
- `"source-out"`
  - : 在不与现有画布内容重叠的地方绘制新图形。
- `"source-atop"`
  - : 只在与现有画布内容重叠的地方绘制新图形。
- `"destination-over"`
  - : 在现有画布内容的后面绘制新的图形。
- `"destination-in"`
  - : 仅保留现有画布内容和新形状重叠的部分。其他的都是透明的。
- `"destination-out"`
  - : 仅保留现有画布内容和新形状不重叠的部分。
- `"destination-atop"`
  - : 仅保留现有画布内容和新形状重叠的部分。新形状是在现有画布内容的后面绘制的。
- `"lighter"`
  - : 两个重叠图形的颜色是通过颜色值相加来确定的。
- `"copy"`
  - : 只显示新图形。
- `"xor"`
  - : 形状在重叠处变为透明，并在其他地方正常绘制。
- `"multiply"`
  - : 将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。
- `"screen"`
  - : 像素被倒转、相乘、再倒转，结果是一幅更明亮的图片（与 `multiply` 相反）。
- `"overlay"`
  - : `multiply` 和 `screen` 的结合。原本暗的地方更暗，原本亮的地方更亮。
- `"darken"`
  - : 保留两个图层中最暗的像素。
- `"lighten"`
  - : 保留两个图层中最亮的像素。
- `"color-dodge"`
  - : 将底层除以顶层的反置。
- `"color-burn"`
  - : 将反置的底层除以顶层，然后将结果反过来。
- `"hard-light"`
  - : 类似于 `overlay`，`multiply` 和 `screen` 的结合——但上下图层互换了。
- `"soft-light"`
  - : 柔和版本的 `hard-light`。纯黑或纯白不会导致纯黑或纯白。
- `"difference"`
  - : 从顶层减去底层（或反之亦然），始终得到正值。
- `"exclusion"`
  - : 与 `difference` 类似，但对比度较低。
- `"hue"`
  - : 保留底层的亮度（luma）和色度（chroma），同时采用顶层的色调（hue）。
- `"saturation"`
  - : 保留底层的亮度和色调，同时采用顶层的色度。
- `"color"`
  - : 保留了底层的亮度，同时采用了顶层的色调和色度。
- `"luminosity"`
  - : 保持底层的色调和色度，同时采用顶层的亮度。

## 示例

### 改变合成操作

这是一段使用 `globalCompositeOperation` 属性的简单的代码片段，绘制了 2 个矩形在重叠时相互排斥的情况。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalCompositeOperation = "xor";

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### 结果

{{ EmbedLiveSample('改变合成操作', 700, 180) }}

### 展示所有值

#### 全局值

这段代码设置了程序的其他部分使用的全局值。

```js
const canvas1 = document.createElement("canvas");
const canvas2 = document.createElement("canvas");
const gco = [
  "source-over",
  "source-in",
  "source-out",
  "source-atop",
  "destination-over",
  "destination-in",
  "destination-out",
  "destination-atop",
  "lighter",
  "copy",
  "xor",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
].reverse();
const gcoText = [
  "这是默认设置，并在现有画布上下文之上绘制新图形。",
  "新图形只在新图形和目标画布重叠的地方绘制。其他的都是透明的。",
  "在不与现有画布内容重叠的地方绘制新图形。",
  "新图形只在与现有画布内容重叠的地方绘制。",
  "在现有的画布内容后面绘制新的图形。",
  "现有的画布内容保持在新图形和现有画布内容重叠的位置。其他的都是透明的。",
  "现有内容保持在新图形不重叠的地方。",
  "现有的画布只保留与新图形重叠的部分，新的图形是在画布内容后面绘制的。",
  "两个重叠图形的颜色是通过颜色值相加来确定的。",
  "只显示新图形。",
  "图像中，那些重叠和正常绘制之外的其他地方是透明的。",
  "将顶层像素与底层相应像素相乘，结果是一幅更黑暗的图片。",
  "像素被倒转，相乘，再倒转，结果是一幅更明亮的图片。",
  "multiply 和 screen 的结合，原本暗的地方更暗，原本亮的地方更亮。",
  "保留两个图层中最暗的像素。",
  "保留两个图层中最亮的像素。",
  "将底层除以顶层的反置。",
  "将反置的底层除以顶层，然后将结果反过来。",
  "multiply 和 screen 的结合，类似于叠加，但上下图层互换了。",
  "用顶层减去底层或者相反来得到一个正值。",
  "一个柔和版本的 hard-light。纯黑或纯白不会导致纯黑或纯白。",
  "和 difference 相似，但对比度较低。",
  "保留了底层的亮度和色度，同时采用了顶层的色调。",
  "保留底层的亮度和色调，同时采用顶层的色度。",
  "保留了底层的亮度，同时采用了顶层的色调和色度。",
  "保持底层的色调和色度，同时采用顶层的亮度。",
].reverse();
const width = 320;
const height = 340;
```

#### 主程序

在页面加载时，该代码设置并运行示例：

```js
window.onload = () => {
  // sRGB 中的 lum
  const lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  };
  // 调整画布大小
  canvas1.width = width;
  canvas1.height = height;
  canvas2.width = width;
  canvas2.height = height;
  lightMix();
  colorSphere();
  runComposite();
  return;
};
```

而这段 `runComposite()` 代码处理了大部分的工作，但需要依赖于许多工具函数来完成复杂的处理工作。

```js
function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.style.background = `url(${op_8x8.data})`;
  canvas.style.border = "1px solid #000";
  canvas.style.margin = "5px";
  canvas.width = width / 2;
  canvas.height = height / 2;
  return canvas;
}

function runComposite() {
  const dl = document.createElement("dl");
  document.body.appendChild(dl);
  while (gco.length) {
    const pop = gco.pop();
    const dt = document.createElement("dt");
    dt.textContent = pop;
    dl.appendChild(dt);
    const dd = document.createElement("dd");
    const p = document.createElement("p");
    p.textContent = gcoText.pop();
    dd.appendChild(p);

    const canvasToDrawOn = createCanvas();
    const canvasToDrawFrom = createCanvas();
    const canvasToDrawResult = createCanvas();

    let ctx = canvasToDrawResult.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = pop;
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText(pop, 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawOn.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("现有内容", 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawFrom.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("新内容", 5, height / 2 - 5);
    ctx.restore();

    dd.appendChild(canvasToDrawOn);
    dd.appendChild(canvasToDrawFrom);
    dd.appendChild(canvasToDrawResult);

    dl.appendChild(dd);
  }
}
```

#### 工具函数

该程序依赖许多工具函数。

```js
const lightMix = () => {
  const ctx = canvas2.getContext("2d");
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,1)";
  ctx.arc(100, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgba(0,0,255,1)";
  ctx.arc(220, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgba(0,255,0,1)";
  ctx.arc(160, 100, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = "#f00";
  ctx.fillRect(0, 0, 30, 30);
  ctx.fill();
};
```

```js
const colorSphere = (element) => {
  const ctx = canvas1.getContext("2d");
  const width = 360;
  const halfWidth = width / 2;
  const rotate = (1 / 360) * Math.PI * 2; // 每度的弧度
  const offset = 0; // 滚动条偏移
  const oleft = -20;
  const otop = -20;
  for (let n = 0; n <= 359; n++) {
    const gradient = ctx.createLinearGradient(
      oleft + halfWidth,
      otop,
      oleft + halfWidth,
      otop + halfWidth,
    );
    const color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 });
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(0.7, `rgba(${color.R}, ${color.G}, ${color.B}, 1)`);
    gradient.addColorStop(1, "rgba(255,255,255,1)");
    ctx.beginPath();
    ctx.moveTo(oleft + halfWidth, otop);
    ctx.lineTo(oleft + halfWidth, otop + halfWidth);
    ctx.lineTo(oleft + halfWidth + 6, otop);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.translate(oleft + halfWidth, otop + halfWidth);
    ctx.rotate(rotate);
    ctx.translate(-(oleft + halfWidth), -(otop + halfWidth));
  }
  ctx.beginPath();
  ctx.fillStyle = "#00f";
  ctx.fillRect(15, 15, 30, 30);
  ctx.fill();
  return ctx.canvas;
};
```

```js
// HSV (1978) = H：色调 / S：饱和度 / V：明度
Color = {};
Color.HSV_RGB = (o) => {
  const S = o.S / 100;
  let H = o.H / 360,
    V = o.V / 100;
  let R, G;
  let A, B, C, D;
  if (S === 0) {
    R = G = B = Math.round(V * 255);
  } else {
    if (H >= 1) H = 0;
    H *= 6;
    D = H - Math.floor(H);
    A = Math.round(255 * V * (1 - S));
    B = Math.round(255 * V * (1 - S * D));
    C = Math.round(255 * V * (1 - S * (1 - D)));
    V = Math.round(255 * V);
    switch (Math.floor(H)) {
      case 0:
        R = V;
        G = C;
        B = A;
        break;
      case 1:
        R = B;
        G = V;
        B = A;
        break;
      case 2:
        R = A;
        G = V;
        B = C;
        break;
      case 3:
        R = A;
        G = B;
        B = V;
        break;
      case 4:
        R = C;
        G = A;
        B = V;
        break;
      case 5:
        R = V;
        G = A;
        B = B;
        break;
    }
  }
  return { R, G, B };
};

const createInterlace = (size, color1, color2) => {
  const proto = document.createElement("canvas").getContext("2d");
  proto.canvas.width = size * 2;
  proto.canvas.height = size * 2;
  proto.fillStyle = color1; // 左上角
  proto.fillRect(0, 0, size, size);
  proto.fillStyle = color2; // 右上角
  proto.fillRect(size, 0, size, size);
  proto.fillStyle = color2; // 左下角
  proto.fillRect(0, size, size, size);
  proto.fillStyle = color1; // 右下角
  proto.fillRect(size, size, size, size);
  const pattern = proto.createPattern(proto.canvas, "repeat");
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

const op_8x8 = createInterlace(8, "#FFF", "#eee");
```

#### 结果

{{EmbedLiveSample("展示所有值", "100%", 7250)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此属性的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
