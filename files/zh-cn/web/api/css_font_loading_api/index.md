---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
---

{{DefaultAPISidebar("CSS Font Loading API")}}

CSS 字体加载 API 为你提供了动态加载字体资源的事件和接口。

> **备注：** 此特性在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中可用。（你可通过 `self.fonts` 访问 {{domxref('FontFaceSet')}}）。

## 概念和用法

在 CSS 中你可以使用 [`@font-face`](/zh-CN/docs/Web/CSS/@font-face) 规则下载字体，并使用 [`font-family`](/zh-CN/docs/Web/CSS/font-family) 属性将字体应用于元素。但是，下载字体流程由客户端控制，大多数客户端仅会在首次需要该字体时才获取、加载该字体，这可能会导致明显的延迟。

CSS 字体加载 API 提供了控制和跟踪字体加载过程的能力，并允许你将其添加到 Document 或 Worker 的字体集中。将字体添加到 Document 或 Worker 的字体集中会让客户端在需要时自动获取、加载字体。字体可以在其被加入字体集之前或之后被加载，但是你*必须*先将字体添加到字体集，再将其用于绘图。

你可以通过为 {{domxref('FontFace')}} 对象指定字体文件或 URL 字体源及其他属性来定义字体，其使用方式与 CSS [`@font-face`](/zh-CN/docs/Web/CSS/@font-face) 规则大致相同。`FontFace` 对象可以通过 {{domxref('Document.fonts')}} 或 {{domxref('WorkerGlobalScope.fonts')}} 被添加到 `Document` 或 `Web Worker` 的 {{domxref('FontFaceSet')}} 中。你可以使用 `FontFace` 或 `FontFaceSet` 对象下载字体，并监听加载完成事件。 `FontFaceSet` 还可用于确定加载页面所需的所有字体以及文档布局何时完成。

{{domxref('FontFace.status')}} 属性标识了字体加载状态：`unloaded`、`loading`、`loaded` 或 `failed`。此状态最初为 `unloaded`，下载文件或处理字体数据时为 `loading`，如果字体定义无效或无法加载字体数据则设置为 `failed`，成功获取（如果需要）并加载字体数据后，状态设置为 `loaded`。

### 定义字体

你可以使用 [`FontFace` 构造函数](/zh-CN/docs/Web/API/FontFace/FontFace)创建字体，该函数有 3 个参数：字体家族、字体源和可选的描述符。这些参数与 [`@font-face`](/zh-CN/docs/Web/CSS/@font-face) 的参数一致。

其中，字体源可以是字体文件的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)，也可以是 URL 指向的字体文件。请注意，URL 字体源需要使用 `url()` 函数包裹 URL。

```js
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> **备注：** 与 `@font-face` 一样，一些描述符表示期望的字体属性并用于字体匹配，而其他描述符为设置、定义生成的字体的属性。例如，将 `style` 设置为“斜体”表示文件包含斜体字体，将由开发者指定一个符合此条件的文件。

对于*二进制*字体，如果字体定义有效并且成功加载会把 {{domxref('FontFace.status')}} 设置为 `loaded`，否则会设置为 `failed`。对于 URL 字体，字体有效，且未被加载时 `FontFace.status` 会被设置为 `unloaded`，若字体无效则设置为 `failed`。

### 向 Document 或 Worker 添加字体

你可以将字体添加到 Document 或 Worker 的 {{domxref('FontFaceSet')}} 中，以允许客户端在需要时自动加载字体。你*只能*使用添加到 `FontFaceSet` 中的字体来渲染文本。

下面的代码显示如何添加字体到文档中。

```js
// 定义字体
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});

// 把字体添加到 document.fonts（FontFaceSet）中
document.fonts.add(font);
```

### 加载字体

你可以通过调用 {{domxref('FontFace.load()')}} 加载字体，或者通过调用 {{domxref('FontFaceSet.load()')}} 加载已添加到 `FontFaceSet` 中的字体。注意，尝试加载已加载的字体不会生效。

以下代码演示如何定义字体并将其添加到 document 的字体中，然后加载字体。

```js
// 定义字体
const font = new FontFace("myfont", "url(myfont.woff)");

// 把字体添加到 document.font（FontFaceSet）中
document.fonts.add(font);

// 加载字体
font.load();

// 等待到所有的字体都加载完毕
document.fonts.ready.then(() => {
  // 使用该字体渲染文字（如：在 canvas 中绘制）
});
```

注意，`font.load()` 返回一个 `Promise`，你可以通过调用 `.then()` 来处理字体加载的回调函数。在一些情况下，使用 [`document.fonts.ready`](/zh-CN/docs/Web/API/FontFaceSet/ready) 会更好，因为它会在文档布局完成且所有的字体都加载完成时触发。

## 接口

- {{domxref('FontFace')}}
  - : 表示单个可用的字体。
- {{domxref('FontFaceSet')}}
  - : 字体 API 的一个接口，支持检测它们（字体文件）的下载状态。
- {{domxref('FontFaceSetLoadEvent')}}
  - : {{domxref("FontFaceSet")}} 加载时触发的事件。

## 示例

### 简单字体加载

这是一个非常简单的示例，展示了从 Google Fonts 加载字体，并使用该字体在画布上绘制文本。并且该示例还会在字体创建和加载后，在文本框中打印字体状态的日志。

#### HTML

此代码定义用于绘制的画布和用于打印字体状态日志的文本区域。

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

#### JavaScript

首先，我们获取打印字体状态日志的文本框，以及用于使用字体绘制文本的画布。

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

接下来，我们定义一个 URL 源为 Google Fonts 的 `FontFace`，并将其添加到 `document.fonts`。此时我们打印字体状态（为 `unloaded`）的日志。

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

然后我们调用 {{domxref('FontFace.load()')}} 方法来加载字体，并等待返回的 {{domxref('Promise')}} 对象。当 `Promise` 兑现时，我们打印字体状态（为 `loaded`）的日志，并使用已加载的字体在 canvas 中绘制文本。

```js
bitterFontFace.load().then(
  () => {
    log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: loaded

    const ctx = canvas.getContext("2d");
    ctx.font = '36px "FontFamily Bitter"';
    ctx.fillText("Bitter font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

注意，我们可以等待 {{domxref('FontFace.loaded')}} 返回的 `Promise` 对象，也可以等待 {{domxref('FontFaceSet.ready')}} 返回的 `Promise` 对象。

#### 结果

结果如下所示。它会使用下载了的字体在 `Canvas` 上绘制字体的名字，并显示字体加载状态的日志。

{{ EmbedLiveSample('简单字体加载', 700, 180) }}

### 使用事件加载字体

此示例与上一个示例类似，不同之处在于它使用 {{domxref('FontFaceSet.load()')}} 加载字体（而不是使用 `font.load()`）。它还展示了如何监听字体完成加载事件。

#### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

#### JavaScript

下面的代码定义了用于绘制文本的 canvas 上下文和字体，并将其添加到 document 字体集中。

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
const ctx = canvas.getContext("2d");

const oxygenFontFace = new FontFace(
  "FontFamily Oxygen",
  "url(https://fonts.gstatic.com/s/oxygen/v5/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2)",
);
document.fonts.add(oxygenFontFace);
log.textContent += `Oxygen status: ${oxygenFontFace.status}\n`;
```

接下来，我们在字体集上使用 `load()` 来加载指定的字体。该方法返回一个 {{jsxref("Promise")}}。如果 promise 兑现，我们将使用该字体绘制文本。如果被拒绝，则会记录错误。

```js
document.fonts.load("36px FontFamily Oxygen").then(
  (fonts) => {
    log.textContent += `Bitter font: ${fonts}\n`; // > Oxygen font: loaded
    log.textContent += `Bitter font: ${oxygenFontFace.status}\n`; // > Oxygen font: loaded
    ctx.font = '36px "FontFamily Oxygen"';
    ctx.fillText("Oxygen font loaded", 20, 50);
  },
  (err) => {
    console.error(err);
  },
);
```

除了可以等待 promise，我们也可以使用事件来跟踪字体加载过程。下面的代码监听 `loading` 和 `loadingerror` 事件，并记录每种事件下的字体数量。在 `loadingdone` 事件的回调函数中，我们还遍历字体并记录字体家族的名称。

```js
document.fonts.addEventListener("loading", (event) => {
  log.textContent += `loading_event: ${event.fontfaces.length}\n`;
});
document.fonts.addEventListener("loadingerror", (event) => {
  log.textContent += `loadingerror_event: ${event.fontfaces.length}\n`;
});
document.fonts.addEventListener("loadingdone", (event) => {
  log.textContent += `loadingdone_event: ${event.fontfaces.length}\n`;
  event.fontfaces.forEach((value) => {
    log.textContent += `  fontface: ${value.family}\n`;
  });
});
```

最后一段代码演示了如何使用 {{domxref('FontFaceSet.ready')}} 返回的 promise 监听字体加载的完成。与其他机制不同，当文档中定义的所有字体都已下载且布局已完成时，promise 才会兑现。

当 promise 兑现时，我们遍历 document 字体集中的值。

```js
document.fonts.ready.then(function () {
  log.textContent += `\nFontFaces in document: ${document.fonts.size}.\n`;

  for (const fontFace of document.fonts.values()) {
    log.textContent += "FontFace:\n";
    for (const property in fontFace) {
      log.textContent += `  ${property}: ${fontFace[property]}\n`;
    }
  }
});
```

#### 结果

下面的页面显示了用“Oxygen”字体绘制的文本。还显示了事件的日志以及 `document.fonts.ready` 返回的 promise 兑现时的输出。

{{ EmbedLiveSample('使用事件加载字体', 700, 520) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
