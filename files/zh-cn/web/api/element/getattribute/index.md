---
title: Element.getAttribute()
slug: Web/API/Element/getAttribute
---

{{APIRef("DOM")}}

## 概要

**`getAttribute()`** 返回元素上一个指定的属性值。如果指定的属性不存在，则返回 `null` 或 `""` （空字符串）；具体细节，请参阅 [Notes](#notes) 部分。

## 语法

```plain
let attribute = element.getAttribute(attributeName);
```

上面：

- `attribute` 是一个包含 `attributeName` 属性值的字符串。
- `attributeName` 是你想要获取的属性值的属性名称。

## 例子

```js
let div1 = document.getElementById("div1");
let align = div1.getAttribute("align");

alert(align);
// shows the value of align for the element with id="div1"
```

## 备注

当在被标记为 HTML 文档中的一个 HTML 元素上调用此方法时，`getAttribute()` 会先将其参数转换为小写形式。

当指定的属性不存在于元素上时，所有浏览器（Firefox、Internet Explorer、Opera 最新版本、Safari、Konqueror 以及 iCab 等等）都返回 `null`，这也是[当前 DOM 规范草案](https://dom.spec.whatwg.org/#dom-element-getattribute)规定的。然而，旧的 DOM 3 Core specification 认为此时正确的返回值应该是一个空字符串，一些 DOM 实现环境实现了该行为（behavior）。在 XUL (Gecko) 中，getAttribute 的实现遵从 DOM 3 Core specification，返回一个空字符串。因此，如果一个属性可能不存在于指定的元素上，在调用 `getAttribute()` 之前，你应该使用 {{domxref("element.hasAttribute()")}} 来检测该属性是否存在。

## 浏览器兼容性

{{Compat}}

## 规范

- [DOM Level 2 Core: getAttribute](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-666EE0F9) (introduced in [DOM Level 1 Core](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute))
- [HTML 5: APIs in HTML documents](https://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
