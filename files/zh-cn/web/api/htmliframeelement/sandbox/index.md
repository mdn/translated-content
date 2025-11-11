---
title: HTMLIFrameElement：sandbox 属性
slug: Web/API/HTMLIFrameElement/sandbox
l10n:
  sourceCommit: 9a9ff6734f2ea1d27b048045a62a38acd4670baf
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLIFrameElement")}} 接口的 **`sandbox`** 只读属性返回表示对嵌套内容行为的限制的 {{domxref("DOMTokenList")}}。

它表示 {{HTMLElement("iframe")}} 元素的 `sandbox` 属性。

## 值

{{domxref("DOMTokenList")}}。每项必须是 {{HTMLElement("iframe")}} 元素的 `sandbox` 属性列出的令牌之一。

## 示例

```html
<iframe
  id="el"
  title="example"
  src="https://example.com"
  sandbox="allow-same-origin allow-scripts"></iframe>
```

```js
const el = document.getElementById("el");
console.log(Array.from(el.sandbox)); // 输出：["allow-same-origin", "allow-scripts"]

el.sandbox = "";
console.log(Array.from(el.sandbox)); // 输出：[]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
