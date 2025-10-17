---
title: KeyboardEvent：charCode 属性
slug: Web/API/KeyboardEvent/charCode
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

{{domxref("KeyboardEvent")}} 接口的 **`charCode`** 只读属性返回在 {{domxref("Element/keypress_event", "keypress")}} 事件中按下的字符键的 Unicode 值。

> [!WARNING]
> 该属性已被弃用，请勿再使用该属性。要获取字符的 Unicode 值，请改用 {{domxref("KeyboardEvent.key", "key")}} 属性。

## 值

一个表示按下的字符键的 Unicode 值的数字。

## 示例

### HTML

```html
<p>在下面的输入框中输入任何内容即可记录 <code>charCode</code>。</p>
<input type="text" />
<p id="log"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.querySelector("#log");

input.addEventListener("keypress", (e) => {
  log.innerText = `按下的键：${String.fromCharCode(e.charCode)}\ncharCode：${
    e.charCode
  }`;
});
```

### 结果

{{EmbedLiveSample("示例")}}

## 备注

- 在 {{domxref("Element/keypress_event", "keypress")}} 事件中，按键的 Unicode 值保存在 {{domxref("KeyboardEvent.keyCode", "keyCode")}} 或 `charCode` 属性其中之一，不会二者同时都有。如果按下的是字符键（例如“a”），`charCode` 被设置为字符的代码值；`charCode` 会区分大小写（即 `charCode` 会考虑 <kbd>shift</kbd> 键是否被按下）。否则，被按下的键的代码被存储在 `keyCode` 中。
- `charCode` 永远不会在 {{domxref("Element/keydown_event", "keydown")}} 或 {{domxref("Element/keyup_event", "keyup")}} 事件中被设置。在这些情况下，`keyCode` 会被设置。
- 要获取按键代码而不考虑是存储在 `keyCode` 还是 `charCode` 中，请查询 {{domxref("UIEvent/which", "which")}} 属性。
- 通过{{glossary("Input method editor", "输入法编辑器")}}输入的字符，不会被注册到 `keyCode` 和 `charCode` 上。
- 要查看与特定按键关联的 `charCode` 值的列表，请运行[显示事件对象的属性](/zh-CN/docs/Web/API/Document_Object_Model#显示事件对象的属性)并查看生成的 HTML 表格。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
