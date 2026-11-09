---
title: HTMLScriptElement：src 属性
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> 该属性表示被加载到 script 元素中的外部脚本的 URI，由脚本的 {{domxref("HTMLScriptElement/type","type")}}决定，它可能是可以执行的。
> 这类 API 被称为[注入汇聚点](/zh-CN/docs/Web/API/Trusted_Types_API#概念和用法)，可能成为[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击的载体。
>
> 你可以通过设置[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)来限制脚本的加载位置，并始终赋值 {{domxref("TrustedScriptURL")}} 对象而不是字符串，以及[强制执行可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用-csp-强制执行可信类型)，以此缓解该风险。
> 更多信息请参阅[安全考量](#安全考量)。

{{domxref("HTMLScriptElement")}} 接口的 **`src`** 属性是一个表示外部脚本 URL 的字符串；它可以用作在文档中直接嵌入脚本的替代方案。

它反映 {{HTMLElement("script")}} 元素的 [`src`](/zh-CN/docs/Web/HTML/Reference/Elements/script#src) 属性。

## 值

读取该属性会返回一个包含元素脚本 URI 的字符串。

设置该属性时，可以接受 {{domxref("TrustedScriptURL")}} 对象或字符串。

### 异常

- {{jsxref("TypeError")}}
  - : 当[由 CSP 强制执行可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用-csp-强制执行可信类型)且未定义默认策略时，若以字符串形式设置该属性，则抛出此异常。
    如果获取的 URL 无法按其指定的类型（例如模块或 importmap）成功解析，也会抛出此异常。

## 描述

**`src`** 属性表示外部脚本的 URL。如果设置了该属性，则通过文本类属性 {{domxref("HTMLScriptElement.text","text")}}、{{domxref("HTMLScriptElement.textContent","textContent")}} 或 {{domxref("HTMLScriptElement.textContent","innerText")}} 提供的脚本会被忽略。

### 安全考量

`src` 属性用于加载并运行外部脚本。获取到的脚本会在当前页面的上下文中运行，因此它可以做你的网站代码能做的任何事情（即使该 URL 与你的站点并非同源）。如果输入由用户提供，这可能是[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击的载体。

接受并执行来自不受信任来源的任意 URL 是极其危险的。网站应使用带有 [`script-src`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) 指令的[内容安全策略（CSP）](/zh-CN/docs/Web/HTTP/Guides/CSP)（或 [`default-src`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) 中定义的兜底策略）来控制允许运行哪些脚本。这可以将脚本限制为来自当前源、特定的一组源，甚至特定的文件。

如果你在使用该属性并[强制执行可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用-csp-强制执行可信类型)（使用 [`require-trusted-types-for`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP 指令），就需要始终赋值 {{domxref("TrustedScriptURL")}} 对象而不是字符串。这可确保输入会经过一个转换函数，从而有机会在注入之前拒绝或修改该 URL。

即使资源在你的网站看来是可信的，它仍可能在[供应链攻击](/zh-CN/docs/Web/Security/Attacks/Supply_chain_attacks)中被破坏。为了缓解此类攻击，应使用[子资源完整性](/zh-CN/docs/Web/Security/Attacks/Supply_chain_attacks#using_subresource_integrity)特性。

## 示例

### 使用 TrustedScriptURL

为了缓解 XSS 风险，我们应该始终为 `src` 属性赋值 `TrustedScriptURL` 实例。如果我们出于其他原因强制执行可信类型，并且希望允许某些已被（`CSP: script-src`）许可的脚本源，也需要这样做。

并非所有浏览器都支持可信类型，因此我们先定义[可信类型微型兼容实现](/zh-CN/docs/Web/API/Trusted_Types_API#可信类型微型兼容实现)。它充当可信类型 JavaScript API 的透明替代品：

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

接下来，我们创建一个 {{domxref("TrustedTypePolicy")}}，它定义了一个 {{domxref("TrustedTypePolicy/createScriptURL", "createScriptURL()")}} 方法，用于将输入字符串转换为 {{domxref("TrustedScriptURL")}} 实例。

就本例而言，我们假设希望在 `scriptAllowList` 数组中允许一组预定义的 URL，并记录其他任何脚本。

```js
const scriptAllowList = [
  // 一些允许的 URL 列表
];
const policy = trustedTypes.createPolicy("script-url-policy", {
  createScriptURL(input) {
    if (scriptAllowList.includes(input)) {
      return input; // 允许该脚本
    }
    console.log(`Script not in scriptAllowList: ${input}`);
    return ""; // 阻止该脚本
  },
});
```

接下来，我们创建要赋值的 script 元素，并获取该元素的引用。

```html
<script id="el"></script>
```

```js
// 获取我们要注入代码的 script 元素
const el = document.getElementById("el");
```

然后，我们使用 `policy` 对象从可能不安全的输入字符串创建 `trustedScriptURL` 实例，并将结果赋值给该元素：

```js
// 可能具有恶意的字符串
// 我们不会将 untrustedScriptURL 加入 scriptAllowList 数组
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// 使用策略创建 TrustedScriptURL 实例
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// 注入 TrustedScriptURL（其中包含可信的 URL）
el.src = trustedScriptURL;
```

### 读取 `src` 属性

下面的示例展示了如何读取两个 script 元素的 `src` 属性，假设页面 URL 为 `https://example.com`。

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

这段代码会读取每个 script 元素，并输出 `src` 属性的结果。

```js
const scriptWithSrc = document.getElementById("script-with-src");
console.log(scriptWithSrc.src); // 输出："https://example.com/main.js"
const scriptWithoutSrc = document.getElementById("script-without-src");
console.log(scriptWithoutSrc.src); // 输出：""
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
