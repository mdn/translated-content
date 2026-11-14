---
title: HTMLScriptElement：type 属性
short-title: type
slug: Web/API/HTMLScriptElement/type
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLScriptElement")}} 接口的 **`type`** 属性是一个字符串，反映了脚本的类型。

它反映 {{HTMLElement("script")}} 元素的 `type` 属性。

## 值

一个字符串。此属性的值可以是以下之一：

- **属性未设置（默认）、空字符串或 JavaScript MIME 类型**
  - : 表示脚本是包含 JavaScript 代码的“经典脚本”。
- `module`
  - : 此值会使代码被当作 JavaScript 模块处理。
- `importmap`
  - : 此值表示元素的主体包含导入映射。
- `speculationrules` {{experimental_inline}}
  - : 此值表示元素的主体包含推测规则。
- **任何其他值**
  - : 嵌入内容会被当作数据块处理，浏览器不会处理它。

更多信息请参阅 {{HTMLElement("script")}} 元素的 [`type`](/zh-CN/docs/Web/HTML/Reference/Elements/script/type) 属性。

## 示例

```html
<script id="el" type="module"></script>
```

```js
const el = document.getElementById("el");
console.log(el.type); // 输出："module"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
