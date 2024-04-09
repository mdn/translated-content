---
title: Element：toggleAttribute() 方法
slug: Web/API/Element/toggleAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`toggleAttribute()`** 方法翻转给定元素的某个布尔属性的状态（如果属性存在则移除，属性不存在则添加）。

## 语法

```js-nolint
toggleAttribute(name)
toggleAttribute(name, force)
```

### 参数

- `name`
  - : 一个指定要翻转的属性的名称的字符串。当在 HTML 文档中的 HTML 元素上调用 `toggleAttribute()` 时，属性名会自动转换为全小写形式。
- `force` {{optional_inline}}
  - : 一个具有以下效果的布尔值：
    - 如果根本没有指定，`toggleAttribute` 方法会“翻转”名为 `name` 的属性——如果属性存在则移除，或者如果属性不存在则添加。
    - 如果为 true，`toggleAttribute` 方法则会添加一个名为 `name` 的属性。
    - 如果为 false，`toggleAttribute` 方法则会移除名为 `name` 的属性。

### 返回值

如果属性的名称（**`name`**）最终存在，则返回 `true`，否则返回 `false`。

### 异常

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 指定属性名称（`name`）包含一个或多个在属性名称中无效的字符。

## 示例

在下面的例子中，`toggleAttribute()` 被用于切换 {{HTMLElement("input")}} 的 `disabled` 属性。

### HTML

```html
<input value="文本" /> <button>toggleAttribute("disabled")</button>
```

### JavaScript

```js
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  input.toggleAttribute("disabled");
});
```

### 结果

{{ EmbedLiveSample('示例', '300', '50') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.setAttribute()")}}
