---
title: TrustedHTML
slug: Web/API/TrustedHTML
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

{{domxref("Trusted Types API", "可信类型 API", "", "nocode")}} 的 **`TrustedHTML`** 接口表示一个可以被开发者插入到[注入汇聚点](/zh-CN/docs/Web/API/Trusted_Types_API#概念和用法)中、渲染为 HTML 的字符串。这些对象通过 {{domxref("TrustedTypePolicy.createHTML()")}} 创建，因此没有构造函数。

`TrustedHTML` 对象的值在其创建时设置且不允许被 JavaScript 修改，因为其没有暴露 setter 方法。

## 实例方法

- {{domxref("TrustedHTML.toJSON()")}}
  - : 返回一个表示 `TrustedHTML` 对象的字符串，实际上与 {{domxref("TrustedHTML.toString()")}} 的返回内容相同。此方法会由 {{jsxref("JSON.stringify()")}} 自动调用。
- {{domxref("TrustedHTML.toString()")}}
  - : 包含净化过的 HTML 的字符串。

## 示例

在下面的例子中，我们使用 {{domxref("TrustedTypePolicyFactory.createPolicy()")}} 创建了一个策略，用于创建 `TrustedHTML` 对象。然后，我们可以使用 {{domxref("TrustedTypePolicy.createHTML()")}} 来创建将要被插入文档的经过净化的 HTML 字符串。

净化过的值可以与 {{domxref("Element.innerHTML")}} 配合使用来确保没有新的 HTML 元素可以被注入。

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用可信类型防范基于 DOM 的跨站脚本攻击漏洞](https://web.developers.google.cn/articles/trusted-types)
