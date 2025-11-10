---
title: 形状生成器
slug: Web/CSS/Guides/Shapes/Shape_generator
l10n:
  sourceCommit: efebdd806165ea668d49fc67fd5b1d7f6229907b
---

此形状生成器工具可用于定义使用 {{cssxref("&lt;basic-shape&gt;")}} 特性的坐标和语法：

- {{HTMLElement("area")}} 的 [`coords`](/zh-CN/docs/Web/HTML/Reference/Elements/area#coords) 属性
- CSS 函数 {{cssxref("basic-shape/inset()")}}、{{cssxref("basic-shape/xywh()")}}、{{cssxref("basic-shape/rect()")}}、{{cssxref("basic-shape/circle()")}}、{{cssxref("basic-shape/polygon()")}}
- SVG {{SVGElement("rect")}}、{{SVGElement("circle")}}、{{SVGElement("polygon")}} 元素

形状生成器可帮助你可视化基础形状，将每个点的坐标叠加在图像上输出。通过拖拽或点击选择文件上传图像后，从下拉菜单中选择要创建的形状类型。还可通过数值输入框调整画布比例。点击图像上的任意位置即可添加形状参考点。工具将自动输出 HTML `coords` 属性值标记、带坐标的 CSS 基础形状函数以及 SVG 形状代码。

```html hidden live-sample___shape-generator
<fieldset>
  <legend>空间</legend>
  <p>
    <label for="scale">
      缩放：
      <input type="range" id="scale" min="0.1" max="3" value="1" step="any" />
    </label>
  </p>
  <p>
    <label for="shape">
      形状：
      <select id="shape">
        <option value="rect">矩形</option>
        <option value="circle">圆形</option>
        <option value="poly">多边形</option>
        <option value="points">离散点</option>
      </select>
    </label>
  </p>
  <p>
    <button id="reset">重置</button>
  </p>
</fieldset>
<canvas id="canvas">将图像拖动到此处，或单击此处以上传。</canvas>
<p>
  <output id="coords">在画布上单击以添加点。</output>
</p>
```

```css hidden live-sample___shape-generator
#canvas {
  display: block;
  border: 1px solid black;
  transform-origin: top left;
  margin: 0.5em 0;
}

#coords {
  display: block;
  position: relative;
  word-break: break-all;
}

dt {
  font-weight: bold;
  margin-top: 1em;
}
dd {
  white-space: pre-wrap;
  font-family: monospace;
}
```

```js hidden live-sample___shape-generator
const canvas = document.getElementById("canvas");
const scaleInput = document.getElementById("scale");
const shapeSelect = document.getElementById("shape");
const resetButton = document.getElementById("reset");
const coordsDisplay = document.getElementById("coords");
const ctx = canvas.getContext("2d");
let currentImage = null;
let coords = [];

function init() {
  if (currentImage) {
    URL.revokeObjectURL(currentImage.src);
    currentImage = null;
  }
  resetCoords();
  scaleInput.value = 1;
  canvas.style.transform = "scale(1)";
  canvas.width = 400;
  canvas.height = 300;
  canvas.style.width = "400px";
  canvas.style.height = "300px";
  ctx.font = "20px serif";
  ctx.fillText("将图像拖动到此处，或单击此处以上传。", 10, 20);
}

function initImage(file) {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.src = url;
  img.addEventListener("load", () => {
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.style.width = `${img.width}px`;
    canvas.style.height = `${img.height}px`;
    ctx.drawImage(img, 0, 0);
    currentImage = img;
  });
}

function displayCoords(htmlCoords, cssFunc, svgElem) {
  const dl = document.createElement("dl");
  const dt1 = document.createElement("dt");
  dt1.innerHTML = "HTML <code>coords</code> 属性";
  const dd1 = document.createElement("dd");
  dd1.innerText = htmlCoords;
  const dt2 = document.createElement("dt");
  dt2.textContent = "CSS 形状函数";
  const dd2 = document.createElement("dd");
  dd2.innerText = cssFunc;
  const dt3 = document.createElement("dt");
  dt3.textContent = "SVG 元素";
  const dd3 = document.createElement("dd");
  dd3.innerText = svgElem;
  dl.append(dt1, dd1, dt2, dd2, dt3, dd3);
  coordsDisplay.textContent = "";
  coordsDisplay.appendChild(dl);
}

function renderShape() {
  ctx.strokeStyle = "magenta";
  ctx.fillStyle = "red";
  ctx.strokeWidth = "3";
  resetDrawnShape();
  if (shapeSelect.value === "rect" && coords.length === 2) {
    const { x: x1, y: y1 } = coords[0];
    const { x: x2, y: y2 } = coords[1];
    const w = x2 - x1;
    const h = y2 - y1;
    ctx.strokeRect(x1, y1, w, h);
    displayCoords(
      `coords="${x1},${y1},${x2},${y2}"`,
      `inset(${y1}px ${x1}px ${canvas.height - y2}px ${canvas.width - x2}px)
xywh(${x1}px ${y1}px ${w}px ${h}px)
rect(${y1}px ${x2}px ${y2}px ${x1}px)`,
      `<rect x="${x1}" y="${y1}" width="${w}" height="${h}" />`,
    );
  } else if (shapeSelect.value === "circle" && coords.length === 2) {
    ctx.beginPath();
    const { x, y } = coords[0];
    const r = Math.sqrt(
      (coords[1].x - x) ** 2 + (coords[1].y - y) ** 2,
    ).toFixed(1);
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
    displayCoords(
      `coords="${x},${y},${r}"`,
      `circle(${r}px at ${x}px ${y}px)`,
      `<circle cx="${x}" cy="${y}" r="${r}" />`,
    );
  } else if (shapeSelect.value === "poly" && coords.length > 2) {
    ctx.beginPath();
    ctx.moveTo(coords[0].x, coords[0].y);
    for (let i = 1; i < coords.length; i++) {
      ctx.lineTo(coords[i].x, coords[i].y);
    }
    ctx.closePath();
    ctx.stroke();
    displayCoords(
      `coords="${coords.map((coord) => `${coord.x},${coord.y}`).join(",")}"`,
      `polygon(${coords.map((coord) => `${coord.x} ${coord.y}`).join(", ")})`,
      `<polygon points="${coords.map((coord) => `${coord.x},${coord.y}`).join(" ")}" />`,
    );
  } else if (shapeSelect.value === "points") {
    const p = document.createElement("p");
    p.innerText = `Coordinate:\n${coords
      .map((coord) => `${coord.x},${coord.y}`)
      .join("\n")}`;
    coordsDisplay.textContent = "";
    coordsDisplay.appendChild(p);
  }
  for (const coord of coords) {
    ctx.beginPath();
    ctx.arc(coord.x, coord.y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
}

function resetDrawnShape() {
  if (!currentImage) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(currentImage, 0, 0);
}

function resetCoords() {
  coords = [];
  coordsDisplay.textContent = "在画布上单击以添加点。";
}

init();
canvas.addEventListener("dragover", (event) => {
  event.preventDefault();
});
canvas.addEventListener("drop", (event) => {
  event.preventDefault();
  initImage(event.dataTransfer.files[0]);
});
canvas.addEventListener("click", (event) => {
  if (!currentImage) {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.addEventListener("change", (e) => {
      initImage(e.target.files[0]);
    });
    input.click();
    return;
  }
  if (
    (shapeSelect.value === "rect" || shapeSelect.value === "circle") &&
    coords.length === 2
  ) {
    resetCoords();
  }
  coords.push({ x: event.offsetX, y: event.offsetY });
  renderShape();
});
scaleInput.addEventListener("input", () => {
  canvas.style.transform = `scale(${scaleInput.value})`;
  coordsDisplay.style.top = `${canvas.height * (scaleInput.value - 1)}px`;
});
shapeSelect.addEventListener("change", () => {
  resetCoords();
  resetDrawnShape();
});
resetButton.addEventListener("click", init);
```

{{EmbedLiveSample("shape-generator", "", 700)}}
