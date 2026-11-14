---
title: HTMLScriptElement：textContent 属性
short-title: textContent
slug: Web/API/HTMLScriptElement/textContent
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> 此属性表示 `<script>` 元素的文本内容，根据脚本类型的不同，这些内容可能是可执行的。
> 这类 API 被称为[注入汇聚点](/zh-CN/docs/Web/API/Trusted_Types_API#概念和用法)，并且可能是[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击的载体。
>
> 你可以通过始终赋值 {{domxref("TrustedScript")}} 对象而不是字符串，并[强制执行可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制执行可信类型)来缓解此风险。
> 更多信息请参阅[安全考虑](#安全考虑)。

{{domxref("HTMLScriptElement")}} 接口的 **`textContent`** 属性表示 {{HTMLElement("script")}} 元素的内联文本内容。
它的行为与 {{domxref("HTMLScriptElement.text","text")}} 和 {{domxref("HTMLScriptElement.innerText","innerText")}} 属性相同。

## 值

读取该属性会返回一个包含脚本文本的字符串。

设置该属性时接受 {{domxref("TrustedScript")}} 对象或字符串。

### 异常

- {{jsxref("TypeError")}}
  - : 当[可信类型](/zh-CN/docs/Web/API/Trusted_Types_API)被 [CSP 强制执行](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制执行可信类型)且未定义默认策略时，如果将该属性设置为字符串，则抛出此异常。

## 描述

{{domxref("HTMLScriptElement")}} 接口的 **`textContent`** 属性表示 {{HTMLElement("script")}} 元素内部的文本内容。

对于可执行的脚本（即 {{domxref('HTMLScriptElement/type','type')}} 表明其属于模块或经典脚本），此文本就是内联的可执行代码。
对于其他类型，它可能表示导入映射、推测规则或其他类型的数据块。

注意，如果设置了 {{domxref('HTMLScriptElement/src','src')}} 属性，那么 `textContent` 属性的内容会被忽略。

`textContent` 属性也定义在 {{domxref("Node.textContent","Node")}} 上，因此可以用于其他节点（和元素）。
用于其他元素时，它不要求或强制进行 {{domxref("TrustedScript")}} 赋值。

### 安全考虑

`textContent` 属性——以及与之相同的 `text` 和 `innerText` 属性——可能是[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击的载体，用户提供的潜在不安全字符串会被执行。
例如，假设 `scriptElement` 是一个可执行的 `<script>` 元素，并且 `untrustedCode` 由用户提供：

```js
const untrustedCode = "alert('Potentially evil code!');";
scriptElement.textContent = untrustedCode; // 弹出警告框
```

你可以通过始终赋值 {{domxref("TrustedScript")}} 对象而不是字符串，并使用 [`require-trusted-types-for`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP 指令[强制执行可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制执行可信类型)来缓解这些问题。
这可以确保输入经过一个转换函数，从而有机会在注入之前[净化](/zh-CN/docs/Web/Security/Attacks/XSS#sanitization)或拒绝该文本。

转换函数的行为取决于需要用户提供脚本的具体用例。
如果可能，应将允许的脚本严格限制为你信任运行的代码。
如果无法做到这一点，可以允许或阻止在所提供字符串中使用某些函数。

## 示例

### 使用 TrustedScript

为了缓解 XSS 风险，我们应该始终为 `textContent` 属性赋值 `TrustedScript` 实例。

并非所有浏览器都支持可信类型，因此我们先定义[可信类型微型兼容实现](/zh-CN/docs/Web/API/Trusted_Types_API#可信类型微型兼容实现)。
它充当可信类型 JavaScript API 的透明替代品：

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

接下来，我们创建一个 {{domxref("TrustedTypePolicy")}}，其中定义了 {{domxref("TrustedTypePolicy/createScript", "createScript()")}} 方法，用于将输入字符串转换为 {{domxref("TrustedScript")}} 实例。
在本示例中，我们只允许确实需要的脚本。

```js
const policy = trustedTypes.createPolicy("inline-script-policy", {
  createScript(input) {
    // 在此指定哪些脚本可以安全允许
    if (input === "const num = 10;\nconsole.log(num)") {
      return input; // 允许这段确切的脚本
    }
    throw new TypeError(`Untrusted script blocked: ${input}`);
  },
});
```

接下来，我们创建要赋值的 `<script>` 元素，并获取该元素的句柄。

```html
<script id="el"></script>
```

```js
// 获取要注入代码的 `<script>` 元素
const el = document.getElementById("el");
```

然后，我们使用 `policy` 对象从可能不安全的输入字符串创建 `trustedScript` 对象，并将结果赋值给该元素：

```js
// 可能含有恶意代码的字符串
const untrustedScriptOne = "const num = 10;\nconsole.log(num)";

// 使用策略创建一个 TrustedScript 实例
const trustedScript = policy.createScript(untrustedScriptOne);

// 注入 TrustedScript（其中包含可信字符串）
el.textContent = trustedScript;
```

### 比较 `textContent`、`text` 和 `innerText`

本示例演示：向任一文本属性（如 `textContent`）赋值脚本后，从所有文本属性读取到的值都相同。

注意，本示例没有使用策略创建可信脚本（为简洁起见，我们假设所提供的字符串都是可信的）。

```js
// 设置 textContent 属性
el.textContent = "console.log(10);";

console.log(`textContent: ${el.textContent}`);
// "textContent: console.log(10);"

console.log(`text: ${el.text}`);
// "text: console.log(10);"

console.log(`innerText: ${el.innerText}`);
// "innerText: console.log(10);"

// 设置 text 属性
el.text = "const num = 10;\nconsole.log(num)";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10; console.log(num)"

console.log(`text: ${el.text}`);
// "text: const num = 10; console.log(num)"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10; console.log(num)"

// 设置 innerText 属性
el.innerText = "const num = 10;alert('Help')";

console.log(`textContent: ${el.textContent}`);
// textContent: const num = 10;alert('Help')"

console.log(`text: ${el.text}`);
// "text: const num = 10;alert('Help')"

console.log(`innerText: ${el.innerText}`);
// "innerText: const num = 10;alert('Help')"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLScriptElement.text","text")}}
- {{domxref("HTMLScriptElement.innerText","innerText")}}
