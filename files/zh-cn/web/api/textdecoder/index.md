---
title: TextDecoder
slug: Web/API/TextDecoder
l10n:
  sourceCommit: ccd1540ad8c51242b318bf437dfabe2e5315b3fa
---

{{APIRef("Encoding API")}}{{AvailableInWorkers}}

**`TextDecoder`** 接口表示一个文本解码器，它只支持一种特定文本编码，例如 `UTF-8`、`ISO-8859-2`、`GBK`，等等。解码器接受字节数组输入，输出 JavaScript 字符串。

## 构造函数

- {{DOMxRef("TextDecoder.TextDecoder", "TextDecoder()")}}
  - : 创建并返回一个新的 `TextDecoder`。

## 实例属性

_`TextDecoder` 接口不继承任何属性。_

- {{DOMxRef("TextDecoder.encoding")}} {{ReadOnlyInline}}
  - : 一个包含的解码器名称的字符串，即描述 `TextDecoder` 将使用的方法的字符串。
- {{DOMxRef("TextDecoder.fatal")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示错误模式是否为严重错误。
- {{DOMxRef("TextDecoder.ignoreBOM")}} {{ReadOnlyInline}}
  - : 一个布尔值，表示是否忽略[字节顺序标记（BOM）](https://www.w3.org/International/questions/qa-byte-order-mark)标记。

## 实例方法

_`TextDecoder` 接口不继承任何方法_。

- {{DOMxRef("TextDecoder.decode()")}}
  - : 将给定字节解码为 JavaScript 字符串，并返回它。

## 示例

### 解码 UTF-8 文本

此示例展示如何解码字符“𠮷”的 UTF-8 编码形式。

```html
<button id="decode">解码</button>
<button id="reset">重置</button>
<div id="output"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

```js
const utf8decoder = new TextDecoder(); // default 'utf-8'
const encodedText = new Uint8Array([240, 160, 174, 183]);

const output = document.querySelector("#output");
const decodeButton = document.querySelector("#decode");
decodeButton.addEventListener("click", () => {
  output.textContent = utf8decoder.decode(encodedText);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});
```

{{embedlivesample("解码 UTF-8 文本")}}

### 解码非 UTF-8 文本

在此示例中，我们对俄语文本“Привет，мир!”（它的意思是“大家好”）进行解码。在我们的 {{domxref("TextDecoder/TextDecoder", "TextDecoder()")}} 构造函数中，我们指定 Windows-1251 字符编码。

```html
<button id="decode">解码</button>
<button id="reset">重置</button>
<div id="decoded"></div>
```

```css hidden
div {
  margin: 1rem 0;
}
```

```js
const win1251decoder = new TextDecoder("windows-1251");
const encodedText = new Uint8Array([
  207, 240, 232, 226, 229, 242, 44, 32, 236, 232, 240, 33,
]);

const decoded = document.querySelector("#decoded");
const decodeButton = document.querySelector("#decode");
decodeButton.addEventListener("click", () => {
  decoded.textContent = win1251decoder.decode(encodedText);
});

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
  window.location.reload();
});
```

{{embedlivesample("解码非 UTF-8 文本")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{DOMxRef("TextEncoder")}} 接口描述了逆操作。
