---
title: Clipboard：read() 方法
slug: Web/API/Clipboard/read
l10n:
  sourceCommit: 15a768b7d90550b0d90811a52d031674a3b84011
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

{{domxref("Clipboard")}} 接口的 **`read()`** 方法可用于请求获取剪贴板的内容，返回将兑现为剪贴板数据的 {{jsxref("Promise")}}。

该方法理论上可以返回任意数据（与只能返回文本的 {{domxref("Clipboard.readText", "readText()")}} 不同）。浏览器通常支持读取文本、HTML 和 PNG 图像数据。

## 语法

```js-nolint
read()
read(formats)
```

### 参数

- `formats` {{optional_inline}}
  - : 包含以下属性的可选对象：
    - `unsanitized` {{optional_inline}}
      - : 包含字符串的数组（{{jsxref("Array")}}），这些字符串为在从剪贴板读取时不应被净化的数据格式的 MIME 类型。

        某些浏览器在读取剪贴板数据时可能会对其进行净化，以防止恶意内容被粘贴到文档中。例如，Chrome（及其他基于 Chromium 的浏览器）会通过去除 `<script>` 标签和其他潜在危险内容来净化 HTML 数据。使用 `unsanitized` 数组可以指定不应被净化的 MIME 类型列表。

### 返回值

一个将兑现为包含剪贴板内容的 {{domxref("ClipboardItem")}} 对象数组的 {{jsxref("Promise")}}。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果不允许从剪贴板读取数据，则抛出此异常。

## 安全考虑

只能在[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)中读取剪贴板。

其他安全要求在 API 概述主题的[安全考虑](/zh-CN/docs/Web/API/Clipboard_API#安全考虑)一节中进行了介绍。

## 示例

### 从剪贴板中读取图片

此示例使用 `read()` 方法从剪贴板读取图像数据并将其粘贴到 {{HTMLElement("img")}} 元素中。

#### HTML

```html
<img id="source" src="butterfly.jpg" alt="A butterfly" />
<img id="destination" />
<button id="reload" type="button">重新加载</button>
<p id="log"></p>
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}
#reload {
  display: block;
  margin: 0 1rem;
}
```

#### JavaScript

此代码将任何错误记录到 id 为 `log` 的元素中。

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `Error: ${text}`;
}
```

我们还添加了代码，当按下“重新加载”按钮时重新加载并清除示例。

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

剩余代码在单击目标元素时读取剪贴板，并将图像数据复制到 `destinationImage` 元素中。如果无法使用 `read()` 方法，或者剪贴板不包含 PNG 格式的数据，则记录错误。

```js
const destinationImage = document.querySelector("#destination");
destinationImage.addEventListener("click", pasteImage);

async function pasteImage() {
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      if (!item.types.includes("image/png")) {
        throw new Error("剪贴板不包含 PNG 图像数据。");
      }
      const blob = await item.getType("image/png");
      destinationImage.src = URL.createObjectURL(blob);
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### 结果

通过右键单击左侧的显示蝴蝶的图像并从上下文菜单中选择“复制图像”来复制该图像。然后单击右侧的空框。示例将从剪贴板获取图像数据并在空框中显示图像。

{{EmbedLiveSample("从剪贴板中读取图片", "100%", "250", "", "", "", "clipboard-read")}}

> [!NOTE]
> 如果出现提示，请授予权限以粘贴图像。

### 从剪贴板读取数据

此示例使用 `read()` 方法从剪贴板读取数据并记录剪贴板中存储的任何数据。

这与前一个版本不同，它将显示文本、HTML 和图像 {{domxref("ClipboardItem")}} 对象（而不仅仅是图像）。

#### HTML

```html
<img id="source_jpg" src="butterfly.jpg" alt="JPG butterfly image" />
<div id="destination">点击此处拷贝剪贴板数据</div>
<button id="reload" type="button">重新加载</button>
<p id="log"></p>
```

#### CSS

```css
img {
  height: 100px;
  width: 100px;
  margin: 0 1rem;
  border: 1px solid black;
}

#destination {
  min-height: 300px;
  min-width: 90%;
  margin: 0 1rem;
  border: 1px solid black;
}

#reload {
  display: block;
  margin: 0 1rem;
}
```

#### JavaScript

此代码将任何错误记录到 id 为 `log` 的元素中。

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `错误：${text}`;
}
```

我们还添加了代码，当按下“重新加载”按钮时重新加载并清除示例。

```js
const reload = document.querySelector("#reload");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

剩余代码在单击目标元素时读取剪贴板，并显示每个 {{domxref("ClipboardItem")}} 元素及其 MIME 类型。如果无法使用 `read()` 方法，或者剪贴板包含任何其他 MIME 类型，则记录错误。

```js
const destinationDiv = document.querySelector("#destination");
destinationDiv.addEventListener("click", pasteData);

async function pasteData() {
  destinationDiv.innerText = ""; // 清除内部文本
  try {
    const clipboardContents = await navigator.clipboard.read();
    for (const item of clipboardContents) {
      for (const mimeType of item.types) {
        const mimeTypeElement = document.createElement("p");
        mimeTypeElement.innerText = `MIME 类型：${mimeType}`;
        destinationDiv.appendChild(mimeTypeElement);
        if (mimeType === "image/png") {
          const pngImage = new Image(); // Image 构造函数
          pngImage.src = "image1.png";
          pngImage.alt = "剪贴板中得到的 PNG";
          const blob = await item.getType("image/png");
          pngImage.src = URL.createObjectURL(blob);
          destinationDiv.appendChild(pngImage);
        } else if (mimeType === "text/html") {
          const blob = await item.getType("text/html");
          const blobText = await blob.text();
          const clipHTML = document.createElement("pre");
          clipHTML.innerText = blobText;
          destinationDiv.appendChild(clipHTML);
        } else if (mimeType === "text/plain") {
          const blob = await item.getType("text/plain");
          const blobText = await blob.text();
          const clipPlain = document.createElement("pre");
          clipPlain.innerText = blobText;
          destinationDiv.appendChild(clipPlain);
        } else {
          throw new Error(`${mimeType} 不被支持。`);
        }
      }
    }
  } catch (error) {
    log(error.message);
  }
}
```

#### 结果

复制一些文本或下面的蝴蝶（JPG）图像（要复制图像，请右键单击它们，然后从上下文菜单中选择“复制图像”）。选择下面的指示框以将剪贴板中的信息粘贴到框中。

{{EmbedLiveSample("从剪贴板读取数据", "100%", "500", "", "", "", "clipboard-read")}}

注意：

- 尽管这张显示蝴蝶的图像是 JPG 文件，但从剪贴板读取时它会是 PNG 格式。
- 如果出现提示，你需要授予权限以粘贴图像。
- 这可能在 Chromium 浏览器上不起作用，因为示例框架未授予 [Permissions-Policy](/zh-CN/docs/Web/HTTP/Reference/Headers/Permissions-Policy) `clipboard-read` 和 `clipboard-write` 权限（[Chromium 浏览器要求](/zh-CN/docs/Web/API/Clipboard_API#安全考虑)）。

### 从剪贴板读取未净化的 HTML

此示例使用 `formats` 参数从剪贴板读取 HTML 数据，并不让浏览器进行净化以原始形式获取代码。

#### HTML

```html
<textarea id="source" rows="5">
  <style>h1 {color: red;} p {color: blue;}</style>
  <h1>你好，世界！</h1>
  <p>一个小测试。</p>
  <script>alert('你好，世界！');</script>
</textarea>
<button id="copy">复制 HTML</button>
<button id="paste_normal">粘贴 HTML</button>
<button id="paste_unsanitized">粘贴未净化的 HTML</button>
<textarea id="destination" rows="5"></textarea>
```

#### CSS

```css
body {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
}

textarea {
  grid-column: 1 / span 3;
}
```

#### JavaScript

```js
const copyButton = document.getElementById("copy");
const pasteButton = document.getElementById("paste_normal");
const pasteUnsanitizedButton = document.getElementById("paste_unsanitized");
const sourceTextarea = document.getElementById("source");
const destinationTextarea = document.getElementById("destination");

copyButton.addEventListener("click", async () => {
  const text = sourceTextarea.value;
  const type = "text/html";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  try {
    await navigator.clipboard.write(data);
  } catch (error) {
    destinationTextarea.value = `无法写入剪贴板：${error}`;
  }
});

async function getHTMLFromClipboardContents(clipboardContents) {
  for (const item of clipboardContents) {
    if (item.types.includes("text/html")) {
      const blob = await item.getType("text/html");
      const blobText = await blob.text();
      return blobText;
    }
  }

  return null;
}

pasteButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read();
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value = html || "剪贴板中无 HTML 数据。";
  } catch (error) {
    destinationTextarea.value = `无法读取剪贴板：${error}`;
  }
});

pasteUnsanitizedButton.addEventListener("click", async () => {
  try {
    const clipboardContents = await navigator.clipboard.read({
      unsanitized: ["text/html"],
    });
    const html = await getHTMLFromClipboardContents(clipboardContents);
    destinationTextarea.value = html || "剪贴板中无 HTML 数据。";
  } catch (error) {
    destinationTextarea.value = `无法读取剪贴板：${error}`;
  }
});
```

#### 结果

首先单击“复制 HTML”按钮，将第一个文本区域中的 HTML 代码写入剪贴板。然后单击“粘贴 HTML”按钮或“粘贴未净化的 HTML”按钮，将净化或未净化的 HTML 代码粘贴到第二个文本区域中。

{{EmbedLiveSample("从剪贴板读取未净化的 HTML", "100%", "250", "", "", "", "clipboard-read; clipboard-write")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API)
- web.dev 上的[解锁剪贴板权限](https://web.developers.google.cn/articles/async-clipboard)
- developer.google.cn 上的[异步 Clipboard API 中的未净化的 HTML](https://developer.chrome.google.cn/docs/web-platform/unsanitized-html-async-clipboard)
- {{domxref("Clipboard.readText()")}}
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.write()")}}
