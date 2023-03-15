---
title: CSS Font Loading API
slug: Web/API/CSS_Font_Loading_API
translation_of: Web/API/CSS_Font_Loading_API
---

{{DefaultAPISidebar("CSS Font Loading API")}}

CSS 字体加载 API 为您提供了动态加载字体资源时的 events 和 interfaces。

> **备注：** 此特性在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中可用。（可通过`self.fonts`访问 {{domxref('FontFaceSet')}}）。

## 概念和用法

CSS 允许开发者使用自定义字体，开发者可以通过 {{cssxref('@font-face')}} 规则下载字体，并将其应用于具有 {{cssxref('font-family')}} 属性的元素。下载字体的点由客户端控制。大多数代理仅在首次需要字体时获取和加载字体，这可能会导致明显的延迟。

CSS 字体加载 API 通过让作者控制和跟踪何时获取和加载字体，以及何时将其添加到文档或工作人员拥有的字体集中，克服了此问题。将字体添加到文档或工作线程字体集允许用户代理在需要时自动获取和加载关联的字体资源。字体可以在添加到字体集之前或之后加载，但必须先将其添加到字体集中，然后才能将其用于绘图。

字体在 {{domxref('FontFace')}} 对象中定义，这些对象指定二进制或 URL 字体源以及字体的其他属性，其方式与 CSS {{cssxref('@font-face')}} 规则大致相同。 FontFace 对象分别使用 Document.fonts 和 WorkerGlobalScope.fonts 添加到文档或工作线程 {{domxref('FontFaceSet')}} 中。作者可以使用 `FontFace` 或 `FontFaceSet` 触发字体下载，并监控加载完成情况。 `FontFaceSet` 还可用于确定何时加载页面所需的所有字体以及文档布局何时完成。

{{domxref('FontFace.status')}} 属性指示字体人脸加载状态： `unloaded` 、 `loading` 、 `loaded` 或 `failed` 。此状态最初为 `unloaded` 。下载文件或处理字体数据时设置为 `loading` ，如果字体定义无效或无法加载字体数据，则设置为 `failed` 。成功获取（如果需要）并加载字体数据后，状态设置为 `loaded` 。

### 定义字体

你可以使用 {{domxref('FontFace')}} 的构造函数创建字体，该函数有3个参数：字体系列、字体源和可选描述符。这些参数与 {{cssxref('@font-face')}} 的参数一致。

其中，字体源可以是 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) ，也可以是 URL 指向的字体资源。请注意，URL 字体源需要使用 `url()` 函数包裹 URL。

```js
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});
```

> **备注：** 与 @font-face 一样，一些描述符表示字体数据中的预期数据并用于字体匹配，而其他描述符实际上设置/定义生成的字体的属性。例如，将 style 设置为“斜体”表示文件包含斜体字体;由作者指定一个符合此条件的文件。

如果字体定义有效并且可以加载字体数据，则会自动加载具有二进制源的字体 — {{domxref('FontFace.status')}} 在成功时设置为 `loaded` ，否则设置为 `failed` 。具有 URL 源的字体经过验证，但不会自动加载 — 如果字体定义有效，则设置 {{domxref('FontFace.status')}} ，否则设置为 `failed` 。

### 向 Document 或 Web Workers 添加字体

字体通常添加到文档或工作线程 {{domxref('FontFace')}} 中，以允许用户代理在需要时自动加载字体，并且必须添加字体才能使字体用于呈现文本。
下面的代码显示了要添加到文档中的字体。

```js
// 定义 FontFace
const font = new FontFace("myfont", "url(myfont.woff)", {
  style: "italic",
  weight: "400",
  stretch: "condensed",
});

// 把 FontFace 添加到 document.fonts (FontFaceSet)
document.fonts.add(font);
```

### 加载字体

你可以通过调用 {{domxref('FontFace.load()')}} 加载字体，或者通过调用 {{domxref('FontFaceSet.load()')}} 加载已添加到 `FontFaceSet` 中的字体 。注意，重复加载的请求不会重复生效。

以下代码演示如何定义 `FontFace` 并将其添加到 `FontFaceSet`，然后加载字体。

```js
// 定义 FontFace
const font = new FontFace("myfont", "url(myfont.woff)");

// 把 FontFace 添加到 document.fonts (FontFaceSet)
document.fonts.add(font);

// 加载字体
font.load();

// 等待到所有的字体都加载完毕
document.fonts.ready.then(() => {
  // 使用该字体渲染文字 (如：在 canvas 中绘制)
});
```

注意， `font.load()` 返回一个 `promise`，你可以通过调用 `.then()` 来处理字体加载的回调函数。在一些情况下，使用 `document.fonts.ready` 会更好，因为它会在文档布局完成且所有的字体都加载完成时调用。

## Interfaces

- {{domxref('FontFace')}}
  - : 表示单个可用的字体。
- {{domxref('FontFaceSet')}}
  - : 字体 API 的一个接口，支持检测它们（字体文件）的下载状态。
- {{domxref('FontFaceSetLoadEvent')}}
  - : {{domxref("FontFaceSet")}} 加载时触发的事件。

## 示例

### 简单字体加载

这是一个非常简单的示例，展示了从 Google Fonts 加载字体，并使用该字体在画布上绘制文本。并且该示例还会在字体创建和加载后，在文本框中显示字体的状态。

#### HTML

此代码定义用于绘制的画布和用于日志记录的文本区域。

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="3" cols="100"></textarea>
```

### JavaScript

首先，我们获取显示字体状态的文本框，以及用于使用字体绘制文本的画布。

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
```

接下来，我们定义一个 URL 源为 Google Fonts 的 FontFace ，并将其添加到 document.fonts。然后我们记录字体状态，为 `unloaded`。

```js
const bitterFontFace = new FontFace(
  "FontFamily Bitter",
  "url(https://fonts.gstatic.com/s/bitter/v7/HEpP8tJXlWaYHimsnXgfCOvvDin1pK8aKteLpeZ5c0A.woff2)"
);
document.fonts.add(bitterFontFace);
log.textContent += `Bitter font: ${bitterFontFace.status}\n`; // > Bitter font: unloaded
```

然后我们调用 {{domxref('FontFace.load()')}} 方法来加载字体，并等待返回的 {{domxref('Promise')}} 对象。一旦 `Promise` 兑现，我们将记录字体状态（为 `loaded` ），并使用已加载的字体绘制文本。

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
  }
);
```

注意，我们也可以等待 {{domxref('FontFace.loaded')}} 返回的 `Promise` 对象，也可以等待 {{domxref('FontFaceSet.ready')}} 返回的 `Promise` 对象。

#### 结果

结果如下所示。它应该以下载的字体显示画布上绘制的字体的名称，以及显示加载前后加载状态的日志。
{{ EmbedLiveSample('Basic font loading', 700, 180) }}

### 使用事件加载字体

此示例与上一个示例类似，不同之处在于它使用 `FontFaceSet.load()` 加载字体（而不是使用 `font.load()`）。它还演示了如何侦听字体加载事件。

### HTML

```html
<canvas id="js-canvas"></canvas>
<textarea id="log" rows="25" cols="100"></textarea>
```

### JavaScript

下面的代码定义了用于绘制文本的画布上下文，及将用于绘制文本的字体，并将其添加到文档字体集中。

```js
const log = document.getElementById("log");

const canvas = document.getElementById("js-canvas");
canvas.width = 650;
canvas.height = 75;
const ctx = canvas.getContext("2d");

const oxygenFontFace = new FontFace(
  "FontFamily Oxygen",
  "url(https://fonts.gstatic.com/s/oxygen/v5/qBSyz106i5ud7wkBU-FrPevvDin1pK8aKteLpeZ5c0A.woff2)"
);
document.fonts.add(oxygenFontFace);
log.textContent += `Oxygen status: ${oxygenFontFace.status}\n`;
```

接下来，我们在字体集上使用 `load()` 来加载字体，指定要加载的字体。该方法返回 `Promise` 对象 。如果 `Promise` 兑现，我们将使用字体绘制文本。如果被拒绝，则会记录错误。

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
  }
);
```

与其等待承诺，不如使用事件来跟踪字体加载操作。下面的代码侦听 `loading` 和 `loadingerror` 事件，并记录每种情况下的字体数量。在 `loadingdone` 事件侦听器中，我们还遍历字体并记录系列名称。

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

最后一段代码演示了如何使用 `FontFaceSet.ready` 返回的承诺监视字体加载的完成。与其他机制不同，当下载文档中定义的所有字体并且布局完成时，这将返回。

当承诺解析时，我们迭代文档字体中的值。

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

下面的输出显示了以 Oxygen 字体绘制的文本。这还显示了事件的日志记录以及 `document.fonts.ready` 返回的承诺何时解析。

{{ EmbedLiveSample('Font loading with events', 700, 520) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
