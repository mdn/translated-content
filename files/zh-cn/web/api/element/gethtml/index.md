---
title: Element：getHTML() 方法
short-title: getHTML()
slug: Web/API/Element/getHTML
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`getHTML()`** 方法将元素的 DOM 序列化为 HTML 字符串。

该方法提供选项参数，可序列化作为影子根的子节点。选项可包含已设为 {{domxref("ShadowRoot/serializable","serializable")}} 的嵌套 shadow root，和/或指定的 {{domxref("ShadowRoot")}} 对象数组（可以是开放或关闭的）。

不带参数时，不会序列化作为影子根的子节点，行为与读取 {{domxref("Element.innerHTML")}} 的值相同。

请注意，某些浏览器会将属性值中的 `<` 和 `>` 序列化为 `&lt;` 和 `&gt;`（参见[浏览器兼容性](#浏览器兼容性)）。这用于防止潜在的安全漏洞（[突变型 XSS](https://www.securitum.com/mutation-xss-via-mathml-mutation-dompurify-2-0-17-bypass.html)）：攻击者可能构造绕过[净化函数](/zh-CN/docs/Web/Security/Attacks/XSS#净化)的输入，从而实施跨站脚本（XSS）攻击。

## 语法

```js-nolint
getHTML(options)
```

### 参数

- `options` {{optional_inline}}
  - : 含以下可选参数的选项对象：
    - `serializableShadowRoots`
      - : 指定是否包含 {{domxref("ShadowRoot/serializable","serializable")}}影子根的布尔值，默认值为 `false`。
    - `shadowRoots`
      - : 要序列化的 {{domxref("ShadowRoot")}} 对象数组。无论是否标记为 `serializable`，以及是开放还是关闭，都会包含它们。默认值为空数组。

### 返回值

表示元素 HTML 序列化结果的字符串。

### 异常

无。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ShadowRoot.getHTML()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
