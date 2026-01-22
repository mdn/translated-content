---
title: 颜色格式转换器
slug: Web/CSS/Guides/Colors/Color_format_converter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

此工具可输入或选择颜色，并复制其对应的任何 CSS [颜色格式](/zh-CN/docs/Web/CSS/Reference/Values/color_value)的值。生成的颜色值可在 CSS 中支持 {{cssxref("color_value", "&lt;color&gt;")}} 数据类型的任何位置使用。本工具还能帮助你理解不同颜色表示法的语法规则。

## 如何使用工具

输入任意格式的颜色值，或从 sRGB {{glossary("color space", "色彩空间")}}中选择颜色，还可以调整不透明度（alpha 通道）。

点击对应颜色格式旁的**复制**按钮可快速复制其值。点击颜色格式名称可查看详细说明。

```html hidden live-sample___color-picker
<div class="container">
  <dialog open>
    <p>
      <label for="color-text">
        以任意格式输入一个颜色值，或选择一个颜色：
      </label>
      <span class="color-inputs">
        <input type="text" id="color-text" />
        <input type="color" id="color-input" />
      </span>
    </p>
    <p>
      <label for="opacity-input">调整透明度：</label>
      <input
        type="range"
        id="opacity-input"
        value="1"
        min="0"
        max="1"
        step="0.01" />
    </p>
    <hr />
    <table id="output-colors">
      <caption>
        颜色的不同格式：
      </caption>
      <tbody>
        <tr id="rgb-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/color_value/rgb"
              target="_blank">
              RGB
            </a>
          </th>
          <td><button id="copy-rgb-button">复制</button><span></span></td>
        </tr>
        <tr id="hex">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/hex-color"
              target="_blank">
              HEX
            </a>
          </th>
          <td><button id="copy-hex-button">复制</button><span></span></td>
        </tr>
        <tr id="hsl-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/color_value/hsl"
              target="_blank">
              HSL
            </a>
          </th>
          <td><button id="copy-hsl-button">复制</button><span></span></td>
        </tr>
        <tr id="hwb-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/color_value/hwb"
              target="_blank">
              HWB
            </a>
          </th>
          <td><button id="copy-hwb-button">复制</button><span></span></td>
        </tr>
        <tr id="color-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/color_value/color"
              target="_blank">
              color()
            </a>
          </th>
          <td><button id="copy-color-button">复制</button><span></span></td>
        </tr>
        <tr id="lab-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/color_value/lab"
              target="_blank">
              Lab
            </a>
          </th>
          <td><button id="copy-lab-button">复制</button><span></span></td>
        </tr>
        <tr id="lch-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/color_value/lch"
              target="_blank">
              LCH
            </a>
          </th>
          <td><button id="copy-lch-button">复制</button><span></span></td>
        </tr>
        <tr id="oklab-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/color_value/oklab"
              target="_blank">
              Oklab
            </a>
          </th>
          <td><button id="copy-oklab-button">复制</button><span></span></td>
        </tr>
        <tr id="oklch-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Values/color_value/oklch"
              target="_blank">
              OkLCh
            </a>
          </th>
          <td><button id="copy-oklch-button">复制</button><span></span></td>
        </tr>
        <tr id="xyz-d50-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Glossary/Color_space#xyz-d50"
              target="_blank">
              XYZ D50
            </a>
          </th>
          <td><button id="copy-xyz-d50-button">复制</button><span></span></td>
        </tr>
        <tr id="xyz-d65-function">
          <th>
            <a
              href="https://developer.mozilla.org/zh-CN/docs/Glossary/Color_space#xyz"
              target="_blank">
              XYZ D65
            </a>
          </th>
          <td><button id="copy-xyz-d65-button">复制</button><span></span></td>
        </tr>
      </tbody>
    </table>
  </dialog>
</div>
```

```css hidden live-sample___color-picker
dialog {
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 0.2);
  background-color: white;
  font-family: "Segue", "Helvetica", "Arial", sans-serif;
  margin-top: 5vh;
  width: 550px;
}

table {
  width: 100%;
}

td,
th {
  padding: 3px 0;
}

th {
  background-color: #ededed;
}

td {
  background-color: #dedede;
  font-family: monospace;
}

body {
  background:
    linear-gradient(
      -90deg,
      transparent 0 38%,
      47%,
      rgb(0 0 0 / 0.7) 50%,
      white 50% 100%
    ),
    conic-gradient(
      black 0 90deg,
      transparent 90deg 180deg,
      black 180deg 270deg,
      transparent 270deg 360deg
    );
  background-size:
    100% 100%,
    20px 20px;
  padding: 0;
  margin: 0;
}

.container {
  width: 100vw;
  height: 100vh;
}

.color-inputs {
  display: inline-flex;
  margin-top: 0.6rem;
  margin-bottom: 1.5rem;
}

button {
  margin-right: 0.5rem;
}

input[type="text"] {
  width: 300px;
  margin-right: 0.5rem;
}

input[type="range"] {
  width: 350px;
}

label {
  user-select: none;
}

p {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0;
}
```

```js hidden live-sample___color-picker
const background = document.querySelector("body div");
const colorText = document.getElementById("color-text");
const colorPicker = document.getElementById("color-input");
const opacityPicker = document.getElementById("opacity-input");
const hexOutput = document.querySelector("#hex td > span");
const rgbFunctionOutput = document.querySelector("#rgb-function td > span");
const colorFunctionOutput = document.querySelector("#color-function td > span");
const hslFunctionOutput = document.querySelector("#hsl-function td > span");
const hwbFunctionOutput = document.querySelector("#hwb-function td > span");
const labFunctionOutput = document.querySelector("#lab-function td > span");
const okLabFunctionOutput = document.querySelector("#oklab-function td > span");
const lchFunctionOutput = document.querySelector("#lch-function td > span");
const okLchFunctionOutput = document.querySelector("#oklch-function td > span");
const xyzD50FunctionOutput = document.querySelector(
  "#xyz-d50-function td > span",
);
const xyzD65FunctionOutput = document.querySelector(
  "#xyz-d65-function td > span",
);

const LRGB_LMS_MATRIX = [
  [0.4122214708, 0.5363325363, 0.0514459929],
  [0.2119034982, 0.6806995451, 0.1073969566],
  [0.0883024619, 0.2817188376, 0.6299787005],
];

const LMS_LAB_MATRIX = [
  [+0.2104542553, +0.793617785, -0.0040720468],
  [+1.9779984951, -2.428592205, +0.4505937099],
  [+0.0259040371, +0.7827717662, -0.808675766],
];

// srgb-linear 转换至 xyz-d50
// 矩阵源自 http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html
const LRGB_XYZ_D50_MATRIX = [
  [0.4360747, 0.3850649, 0.1430804],
  [0.2225045, 0.7168786, 0.0606169],
  [0.0139322, 0.0971045, 0.7141733],
];

// srgb-linear 转换至 xyz-d65
// 矩阵源自 http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html
const LRGB_XYZ_D65_MATRIX = [
  [0.4124564, 0.3575761, 0.1804375],
  [0.2126729, 0.7151522, 0.072175],
  [0.0193339, 0.119192, 0.9503041],
];

const currentColor = { r: 186, g: 218, b: 85, alpha: 1.0 }; // #bada55

function multiplyByMatrix(matrix, tuple) {
  let i = [0, 0, 0];
  let j = matrix.length;
  let k = matrix[0].length;
  for (let l = 0; l < j; l++)
    for (let m = 0; m < k; m++) i[l] += matrix[l][m] * tuple[m];
  return i;
}

function rgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function intToHex(i) {
  return Math.floor(i).toString(16).padStart(2, "0").toLowerCase();
}

function rgbToHEXText(c) {
  return `#${intToHex(c.r)}${intToHex(c.g)}${intToHex(c.b)}`;
}

function rgbaToHEXAText(color) {
  const hexText = rgbToHEXText(color);
  if (color.alpha === 1.0) {
    return hexText;
  }
  const alpha = intToHex(color.alpha * 255);
  return `${hexText}${alpha}`;
}

function rgbaToHSLA(color) {
  let { r, g, b, alpha } = color;
  // 令 r、g、b 在范围 [0, 1] 内
  r /= 255;
  g /= 255;
  b /= 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h, s, l;

  if (delta === 0) {
    h = 0;
  } else if (max === r) {
    h = ((g - b) / delta) % 6;
  } else if (max === g) {
    h = (b - r) / delta + 2;
  } else h = (r - g) / delta + 4;
  h = Math.round(h * 60);

  // 需要角度在 0 到 360° 之间
  if (h < 0) {
    h += 360;
  }

  l = (max + min) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = Number((s * 100).toFixed(1));
  l = Number((l * 100).toFixed(1));

  return { h, s, l, alpha };
}

function toHSLAText(color) {
  const { h, s, l, alpha } = rgbaToHSLA(color);
  return `hsl(${h.toFixed(0)} ${s.toFixed(0)}% ${l.toFixed(0)}%${
    alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""
  })`;
}

function rgbaToHWBAText(color) {
  let { h, s, l, alpha } = rgbaToHSLA(color);
  const chroma = s * (1 - Math.abs(l / 50 - 1));
  let W = (l - chroma / 2).toFixed(0);
  let B = (100 - l - chroma / 2).toFixed(0);
  return `hwb(${h} ${W}% ${B}%${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

function rgbaToXYZD50(color) {
  let { r, g, b, alpha } = color;
  r = rgbToLinear(r / 255) * 255;
  g = rgbToLinear(g / 255) * 255;
  b = rgbToLinear(b / 255) * 255;

  const xyz = multiplyByMatrix(LRGB_XYZ_D50_MATRIX, [r, g, b]);
  return { x: xyz[0] / 255, y: xyz[1] / 255, z: xyz[2] / 255, alpha };
}

function rgbaToXYZD50Text(color) {
  let { alpha } = color;
  const xyz = rgbaToXYZD50(color);
  return `color(xyz-d50 ${xyz.x.toFixed(5)} ${xyz.y.toFixed(5)} ${xyz.z.toFixed(
    5,
  )}${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

function rgbaToXYZD65(color) {
  let { r, g, b, alpha } = color;
  r = rgbToLinear(r / 255) * 255;
  g = rgbToLinear(g / 255) * 255;
  b = rgbToLinear(b / 255) * 255;

  const xyz = multiplyByMatrix(LRGB_XYZ_D65_MATRIX, [r, g, b]);
  return { x: xyz[0] / 255, y: xyz[1] / 255, z: xyz[2] / 255, alpha };
}

function rgbaToXYZD65Text(color) {
  let { alpha } = color;
  const xyz = rgbaToXYZD65(color);
  return `color(xyz-d65 ${xyz.x.toFixed(5)} ${xyz.y.toFixed(5)} ${xyz.z.toFixed(
    5,
  )}${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

const D65 = [0.3457 / 0.3585, 1, 0.2958 / 0.3585];
function xyzToLab(color) {
  let { x, y, z, alpha } = color;
  [x, y, z] = [x, y, z].map((v, i) => {
    v /= D65[i];
    return v > 0.0088564516 ? Math.cbrt(v) : v * 903.2962962962963 + 16 / 116;
  });
  return { l: 116 * y - 16, a: 500 * (x - y), b: 200 * (y - z), alpha };
}

function rgbaToLabText(color) {
  let { alpha } = color;
  const xyz = rgbaToXYZD50(color);
  const lab = xyzToLab(xyz);
  return `lab(${lab.l.toFixed(3)} ${lab.a.toFixed(3)} ${lab.b.toFixed(3)}${
    alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""
  })`;
}

function rgbToOklab(color) {
  let { r, g, b, alpha } = color;
  r = rgbToLinear(r / 255);
  g = rgbToLinear(g / 255);
  b = rgbToLinear(b / 255);
  const lms = multiplyByMatrix(LRGB_LMS_MATRIX, [r, g, b]).map((v) =>
    Math.cbrt(v),
  );

  const oklab = multiplyByMatrix(LMS_LAB_MATRIX, lms);
  return { l: oklab[0], a: oklab[1], b: oklab[2], alpha };
}

function toOkLabText(color) {
  let { alpha } = color;
  const oklab = rgbToOklab(color);
  return `oklab(${oklab.l.toFixed(5)} ${oklab.a.toFixed(5)} ${oklab.b.toFixed(
    5,
  )}${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

function labToLCH(color) {
  const { l, a, b, alpha } = color;
  const c = Math.sqrt(a * a + b * b);
  let h = Math.atan2(b, a) * (180 / Math.PI);
  if (h < 0) {
    h += 360;
  }
  return { l, c, h, alpha };
}

function toLCHText(color) {
  let { alpha } = color;
  const xyz = rgbaToXYZD50(color);
  const lab = xyzToLab(xyz);
  const lch = labToLCH(lab);
  return `lch(${lch.l.toFixed(3)} ${lch.c.toFixed(3)} ${lch.h.toFixed(3)}${
    alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""
  })`;
}

function rgbaToOkLCh(color) {
  const lab = rgbToOklab(color);
  const oklch = labToLCH(lab);
  return { l: oklch.l, c: oklch.c, h: oklch.h, alpha: color.alpha };
}

function toOkLChText(color) {
  let { alpha } = color;
  const oklch = rgbaToOkLCh(color);
  return `oklch(${oklch.l.toFixed(5)} ${oklch.c.toFixed(5)} ${oklch.h.toFixed(
    5,
  )}${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

function colorToRGBA(c) {
  const ctx = new OffscreenCanvas(1, 1).getContext("2d");
  ctx.fillStyle = c;
  ctx.fillRect(0, 0, 1, 1);
  const data = ctx.getImageData(0, 0, 1, 1).data;
  return {
    r: data[0],
    g: data[1],
    b: data[2],
    alpha: data[3] / 255,
  };
}

function updateOutput(c) {
  background.style.backgroundColor = rgbaToHEXAText(c);
  hexOutput.innerText = rgbaToHEXAText(c);
  rgbFunctionOutput.innerText = `rgb(${c.r} ${c.g} ${c.b}${c.alpha < 1 ? ` / ${c.alpha.toFixed(3)}` : ""})`;
  colorFunctionOutput.innerText = `color(srgb ${(c.r / 255).toFixed(3)} ${(c.g / 255).toFixed(3)} ${(c.b / 255).toFixed(3)}${c.alpha < 1 ? ` / ${c.alpha.toFixed(3)}` : ""})`;
  hslFunctionOutput.innerText = toHSLAText(c);
  hwbFunctionOutput.innerText = rgbaToHWBAText(c);
  labFunctionOutput.innerText = rgbaToLabText(c);
  xyzD50FunctionOutput.innerText = rgbaToXYZD50Text(c);
  xyzD65FunctionOutput.innerText = rgbaToXYZD65Text(c);
  lchFunctionOutput.innerText = toLCHText(c);
  okLabFunctionOutput.innerText = toOkLabText(c);
  okLchFunctionOutput.innerText = toOkLChText(c);
}

function init() {
  colorText.addEventListener("input", (e) => {
    const color = colorToRGBA(e.target.value);
    Object.assign(currentColor, color);
    colorPicker.value = rgbToHEXText(currentColor);
    opacityPicker.value = currentColor.alpha;
    updateOutput(currentColor);
  });

  colorPicker.addEventListener("input", (e) => {
    const text = e.target.value;
    currentColor.r = parseInt(text.slice(1, 3), 16);
    currentColor.g = parseInt(text.slice(3, 5), 16);
    currentColor.b = parseInt(text.slice(5, 7), 16);
    colorText.value = rgbaToHEXAText(currentColor);
    opacityPicker.value = currentColor.alpha;
    updateOutput(currentColor);
  });

  opacityPicker.addEventListener("input", (e) => {
    const value = parseFloat(e.target.value);
    currentColor.alpha = value;
    colorText.value = rgbaToHEXAText(currentColor);
    updateOutput(currentColor);
  });
  document.querySelectorAll("#output-colors button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const text = e.target.nextElementSibling.innerText;
      navigator.clipboard.writeText(text);
      e.target.innerText = "已复制！";
      setTimeout(() => {
        e.target.innerText = "复制";
      }, 1000);
    });
  });

  colorText.value = rgbaToHEXAText(currentColor);
  colorPicker.value = rgbToHEXText(currentColor);
  opacityPicker.value = currentColor.alpha;
  updateOutput(currentColor);
}

init();
```

{{EmbedLiveSample("color-picker", "", 700, "", "", "", "clipboard-write", "allow-popups")}}

## 参见

- [通过 CSS 将颜色应用到 HTML 元素上](/zh-CN/docs/Web/CSS/Guides/Colors/Applying_color)
- [CSS 颜色值](/zh-CN/docs/Web/CSS/Guides/Colors/Color_values)
- [更聪明地使用颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- [使用相对颜色](/zh-CN/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- [理解色彩和亮度](/zh-CN/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [WCAG 1.4.1：颜色对比](/zh-CN/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [学习：使用 CSS 装饰背景和边框](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders)
- [学习无障碍：颜色与颜色对比](/zh-CN/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript#颜色和颜色对比)
