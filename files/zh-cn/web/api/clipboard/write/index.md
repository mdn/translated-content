---
title: Clipboard：write() 方法
slug: Web/API/Clipboard/write
l10n:
  sourceCommit: 0195a47bc7dc44f9652678214b53f91ed2725b17
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

{{domxref("Clipboard")}} 接口的 **`write()`** 方法用于将任意 {{domxref("ClipboardItem")}} 数据（如图像和文本）写入剪贴板，返回一个在操作完成时兑现的 {{jsxref("Promise")}}。该方法可用于实现剪切和复制功能。

该方法理论上可以写入任意数据（与只能写入文本的 {{domxref("Clipboard.writeText", "writeText()")}} 不同）。浏览器通常支持写入文本、HTML 和 PNG 图像数据。

## 语法

```js-nolint
write(data)
```

### 参数

- `data`
  - : 包含要写入剪贴板的数据的 {{domxref("ClipboardItem")}} 对象数组。

### 返回值

一个在数据写入剪贴板后兑现的 {{jsxref("Promise")}}。注意：如果底层操作系统不支持系统剪贴板上的多个原生剪贴板项，则只会写入数组中的第一个 {{domxref("ClipboardItem")}}。

如果无法写入剪贴板，则 promise 将会被拒绝。

### 异常

- `NotAllowedError` {{domxref("DOMException")}}
  - : 如果不允许写入剪贴板，则抛出此异常。

## 安全考虑

只能在[安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)中读取剪贴板。

其他安全要求在 API 概述主题的[安全考虑](/zh-CN/docs/Web/API/Clipboard_API#安全考虑)一节中进行了介绍。

## 示例

### 写入文本到剪贴板

本示例函数在按钮被点击时，将指定字符串写入剪贴板，替换当前内容。对于这一情况，你也可以直接使用 `Clipboard.writeText()` 方法。

```js
button.addEventListener("click", () => writeClipboardText("示例文本"));

async function setClipboard(text) {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: text,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}
```

`setClipboard()` 函数在 `type` 常量中指定了 MIME 类型为 `"text/plain"`，然后指定包含单一属性的 `clipboardItemData` 对象——键为 MIME 类型，而值为我们想要写入剪贴板的文本内容。我们随后构造了一个新的 {{domxref("ClipboardItem")}} 对象并传入 `clipboardItemData` 对象。

最后，我们使用 `await` 调用 `write()` 方法以写将数据写入剪贴板。

### 将 canvas 内容写入剪贴板

本示例在 canvas 上绘制一个蓝色矩形。点击该矩形即可将 canvas 的内容作为图片复制到剪贴板，然后可以在其他元素中粘贴该图片。

#### HTML

HTML 定义了 `<canvas>` 元素和用于粘贴图片的 id 为 `target` 的 `<div>` 元素。

```html
<canvas id="canvas" width="100" height="100"></canvas>

<div id="target">在此粘贴。</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 60px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

首先定义一个 `async` 函数将 canvas 转为 blob。该函数将旧的回调式 {{domxref("HTMLCanvasElement.toBlob()")}} 方法封装为更直观的基于 Promise 的函数。

```js
// 用 async/await 替代 toBlob() 回调
async function getBlobFromCanvas(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error("Canvas toBlob 操作执行失败"));
      }
    });
  });
}
```

接下来设置 canvas 并添加 `click` 事件监听器。

点击蓝色矩形时，canvas 的内容会被复制为 blob，然后通过 `ClipboardItem` 写入剪贴板。

```js
const canvas = document.getElementById("canvas");

// 设置 canvas
const ctx = canvas.getContext("2d");
ctx.fillStyle = "cornflowerblue";
ctx.fillRect(0, 0, 100, 100);

canvas.addEventListener("click", copyCanvasContentsToClipboard);
const target = document.getElementById("target");

async function copyCanvasContentsToClipboard() {
  // 复制 canvas 到 blob
  try {
    const blob = await getBlobFromCanvas(canvas);
    // 用 blob 及其类型创建 ClipboardItem 并写入数组
    const data = [new ClipboardItem({ [blob.type]: blob })];
    // 写入剪贴板
    await navigator.clipboard.write(data);
    log("已复制");
  } catch (error) {
    log(error);
  }
}
```

注意：如果你要写入不常见的文件类型，或无法提前确定类型，建议使用 {{domxref("ClipboardItem.supports_static", "ClipboardItem.supports()")}} 检查类型是否受支持，并提供用户友好的错误提示。

然后为目标元素添加 [`paste` 事件](/zh-CN/docs/Web/API/Element/paste_event)监听器，将剪贴板内容以图片形式显示。通过 [FileReader API](/zh-CN/docs/Web/API/FileReader) 的 [`readAsDataUrl`](/zh-CN/docs/Web/API/FileReader/readAsDataURL) 方法读取 blob 并创建 `<img>` 元素：

```js
target.addEventListener("paste", (event) => {
  const items = (event.clipboardData || window.clipboardData).items;
  const blob = items[0].getAsFile();
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    const img = new Image();
    img.src = event.target.result;
    target.appendChild(img);
  });

  reader.readAsDataURL(blob);
});
```

```css hidden
body {
  font-family: sans-serif;
}
#target {
  border: 2px solid;
  padding: 1rem;
  height: 150px;
}
img {
  margin: 0.5rem;
}
```

#### 结果

效果如下。首先点击蓝色方块，然后选中“在此粘贴”文本，并使用操作系统的粘贴快捷键（如 Windows 下的 `Ctrl+V`）。

{{embedlivesample("write_canvas_contents_to_the_clipboard", "", "420", "", "", "", "clipboard-write")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Clipboard API](/zh-CN/docs/Web/API/Clipboard_API)
- web.dev 上的[解锁剪贴板权限](https://web.developers.google.cn/articles/async-clipboard)
- {{domxref("Clipboard.writeText()")}}
- {{domxref("Clipboard.read()")}}
- {{domxref("Clipboard.readText()")}}
