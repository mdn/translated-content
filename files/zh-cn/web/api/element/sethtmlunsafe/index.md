---
title: Element：setHTMLUnsafe() 方法
short-title: setHTMLUnsafe()
slug: Web/API/Element/setHTMLUnsafe
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("DOM")}}

> [!WARNING]
> 此方法将它的输入当做 HTML 解析，将结果写入 DOM。此类 API 也被称为[注入汇聚点](/zh-CN/docs/Web/API/Trusted_Types_API#概念和用法)，并且如果其输入来自一个攻击者，可能会导致[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击。
>
> 你可以通过始终传递 `TrustedHTML` 对象而不是字符串，并[强制执行可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制执行可信类型)来缓解这种风险。参见[安全考量](#安全考量)以获得更多信息。

> [!NOTE]
> 在支持 {{domxref("Element.setHTML()")}} 的浏览器上，几乎总是应该使用它而不是此方法——因为它始终会移除 XSS 不安全的 HTML 实体。

{{domxref("Element")}} 接口的 **`setHTMLUnsafe()`** 方法用于将 HTML 输入解析为一个 {{domxref("DocumentFragment")}}，可选择地过滤掉不需要的元素和属性，以及那些不属于当前上下文的元素和属性，然后用它替换 DOM 中该元素的子树。

## 语法

```js-nolint
setHTMLUnsafe(input)
setHTMLUnsafe(input, options)
```

### 参数

- `input`
  - : 一个 {{domxref("TrustedHTML")}} 实例或者一个定义了待解析 HTML 的字符串。
- `options` {{optional_inline}}
  - : 一个包含以下可选参数的对象：
    - `sanitizer` {{optional_inline}}
      - : 一个 {{domxref("Sanitizer")}} 或 {{domxref("SanitizerConfig")}} 对象，它定义了输入中哪些元素将被允许或移除。它也可以是一个值为 `"default"` 的字符串，这会对输入应用一个带有（XSS 安全的）[默认净化器配置](/zh-CN/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)的 `Sanitizer`。如果未指定，则不使用任何净化器。

        请注意，如果你要多次使用相同的配置，预期使用一个 `Sanitizer` 并在需要时修改它会更高效。

### 返回值

无（`undefined`）。

### 异常

- {{jsxref("TypeError")}}
  - : 在以下情况下抛出：
    - 当[可信类型](/zh-CN/docs/Web/API/Trusted_Types_API)被 [CSP 强制执行](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制执行可信类型)且没有定义默认策略时，为 `input` 传入了一个字符串。
    - 为 `options.sanitizer` 传入了：
      - 一个不是[有效配置](/zh-CN/docs/Web/API/SanitizerConfig#有效配置)的 {{domxref("SanitizerConfig")}}。例如，一个同时包含“允许”和“移除”配置设置的配置。
      - 一个值不是 `"default"` 的字符串。
      - 一个不是 {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}} 或字符串的值。

## 描述

**`setHTMLUnsafe()`** 方法用于将 HTML 输入解析为一个 {{domxref("DocumentFragment")}}，可选择地净化掉不需要的元素和属性，并丢弃 HTML 规范不允许出现在目标元素中的元素（例如 {{htmlelement("div")}} 中的 {{htmlelement("li")}}）。然后，这个 `DocumentFragment` 被用来替换 DOM 中该元素的子树。

与 {{domxref("Element.innerHTML")}} 不同，输入中的[声明式影子根](/zh-CN/docs/Web/HTML/Reference/Elements/template#声明式影子_dom)会被解析到 DOM 中。如果 HTML 字符串在某个影子宿主中定义了多个[声明式影子根](/zh-CN/docs/Web/HTML/Reference/Elements/template#声明式影子_dom)，则只会创建第一个 {{domxref("ShadowRoot")}}——后续的声明会被解析为该影子根内的 `<template>` 元素。

`setHTMLUnsafe()` 默认不执行任何净化。如果没有传入净化器作为参数，输入中的所有 HTML 实体都将被注入。因此，它可能比 {{domxref("Element.innerHTML")}} 更不安全，后者在解析时会禁用 {{htmlelement("script")}} 的执行。

### 安全考量

方法名中的“Unsafe”后缀表明它不会强制移除所有 XSS 不安全的 HTML 实体（与 {{domxref("Element.setHTML()")}} 不同）。虽然它在配合适当的净化器使用时可以做到这一点，但它并不一定要使用有效的净化器，甚至完全不需要使用净化器！因此，此方法可能成为[跨站脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击的途径，即将用户提供的有潜在不安全的字符串未经净化就注入到 DOM 中。

你应该通过始终传递 {{domxref("TrustedHTML")}} 对象而不是字符串，并使用 [`require-trusted-types-for`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP 指令[强制执行可信类型](/zh-CN/docs/Web/API/Trusted_Types_API#使用_csp_强制执行可信类型)来缓解这种风险。这确保了输入会经过一个转换函数，该函数有机会在被注入前[净化](/zh-CN/docs/Web/Security/Attacks/XSS#净化)输入，以移除潜在的危险标记（例如 {{htmlelement("script")}} 元素和事件处理器属性）。

使用 `TrustedHTML` 让只在少数几处审核和检查净化代码是否有效成为可能，而不是将净化函数分散在所有的注入汇聚点中。在使用 `TrustedHTML` 时，你应该不需要再向该方法传入净化器。

如果出于任何原因你无法使用 `TrustedHTML`（或者更好的 `setHTML()`），那么次安全的选项是使用带有[默认净化器配置](/zh-CN/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)的 `setHTMLUnsafe()`。

### 何时应该使用 `setHTMLUnsafe()`？

如果 {{domxref("Element.setHTML()")}} 可用，那么几乎永远不应该使用 `setHTMLUnsafe()`，因为用户提供的 HTML 输入需要包含 XSS 不安全元素的情况极少（如果有的话）。`setHTML()` 不仅安全，而且避免了考虑可信类型。

以下情况使用 `setHTMLUnsafe()` 可能比较合适：

- 你（出于任何原因）无法使用 `setHTML()` 或可信类型，并且想要获得尽可能安全的过滤。在这种情况下，你可以使用 `setHTMLUnsafe()` 配合默认的 {{domxref("Sanitizer")}} 来过滤所有 XSS 不安全的元素。
- 你无法使用 `setHTML()`，且输入可能包含声明式影子根，因此你无法使用 {{domxref("Element.innerHTML")}}。
- 你有一种边缘情况，必须允许包含一组已知不安全 HTML 实体的 HTML 输入。

  在这种情况下，你无法使用 `setHTML()`，因为它会剥离所有不安全的实体。你可以使用不带净化器的 `setHTMLUnsafe()` 或 `innerHTML`，但那将允许所有不安全实体。

  这里更好的选项是调用带净化器的 `setHTMLUnsafe()`，只允许我们实际需要的那些危险元素和属性。虽然这仍然不安全，但比全部允许要安全一些。

对于最后一点，考虑这样一种情况：你的代码依赖于使用不安全的 `onclick` 处理器。以下代码展示了在这种情况下不同方法和净化器的效果。

```js
const target = document.querySelector("#target");

const input = "<img src=x onclick=alert('onclick') onerror=alert('onerror')>";

// 安全——移除所有 XSS 不安全的实体。
target.setHTML(input);

// 不移除任何事件处理器属性
target.setHTMLUnsafe(input);
target.innerHTML = input;

// 安全——移除所有 XSS 不安全的实体。
const configSafe = new Sanitizer();
target.setHTMLUnsafe(input, { sanitizer: configSafe });

// 移除除 `onclick` 之外的所有 XSS 不安全的实体
const configLessSafe = new Sanitizer();
config.allowAttribute("onclick");
target.setHTMLUnsafe(input, { sanitizer: configLessSafe });
```

## 示例

### setHTMLUnsafe() 与可信类型

为了缓解 XSS 风险，我们首先从包含 HTML 的字符串创建一个 `TrustedHTML` 对象，然后将该对象传给 `setHTMLUnsafe()`。由于可信类型尚未在所有浏览器中得到支持，我们定义了[可信类型微型兼容实现](/zh-CN/docs/Web/API/Trusted_Types_API#可信类型微型兼容实现)。它充当可信类型 JavaScript API 的透明替代：

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

接下来我们创建一个 {{domxref("TrustedTypePolicy")}}，其中定义了用于将输入字符串转换为 {{domxref("TrustedHTML")}} 实例的 {{domxref("TrustedTypePolicy/createHTML", "createHTML()")}}。`createHTML()` 的常见实现会使用诸如 [DOMPurify](https://github.com/cure53/DOMPurify) 之类的库来净化输入，如下所示：

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

然后我们使用这个 `policy` 对象从潜在不安全的输入字符串创建一个 `TrustedHTML` 对象：

```js
// 潜在恶意字符串
const untrustedString = "abc <script>alert(1)<" + "/script> def";
// 使用策略创建 TrustedHTML 实例
const trustedHTML = policy.createHTML(untrustedString);
```

现在我们有了 `trustedHTML`，下面的代码展示了如何将它和 `setHTMLUnsafe()` 一起使用。输入已经过转换函数处理，因此我们不向该方法传入净化器。

```js
// 获取 id 为 "target" 的目标 Element
const target = document.getElementById("target");

// 不带净化器的 setHTMLUnsafe()
target.setHTMLUnsafe(trustedHTML);
```

### 在不使用可信类型的情况下使用 setHTMLUnsafe()

此示例演示了不使用可信类型的情况，因此我们将传入净化器参数。

这段代码创建了一个不受信任的字符串，并展示了向该方法传入净化器的几种方式。

```js
// 潜在恶意字符串
const untrustedString = "abc <script>alert(1)<" + "/script> def";

// 获取 id 为 "target" 的目标 Element
const target = document.getElementById("target");

// 定义自定义 Sanitizer 并在 setHTMLUnsafe() 中使用
// 这仅允许元素：div、p、button、script
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTMLUnsafe(untrustedString, { sanitizer: sanitizer1 });

// 在 setHTMLUnsafe() 中定义自定义 SanitizerConfig
// 移除 <script> 元素，但允许其他潜在不安全的实体。
target.setHTMLUnsafe(untrustedString, {
  sanitizer: { removeElements: ["script"] },
});
```

### `setHTMLUnsafe()` 实例

本示例提供了该方法在使用不同净化器调用时的“实时”演示。代码定义了你可以点击来注入一段 HTML 字符串的按钮。一个按钮完全不对 HTML 进行净化就注入，第二个按钮使用一个自定义净化器，它允许 `<script>` 元素但不允许其他不安全项。原始字符串和注入后的 HTML 都会被记录下来，以便你检查每种情况下的结果。

> [!NOTE]
> 因为我们想展示 `sanitizer` 参数是如何使用的，以下代码注入的是字符串而不是可信类型。你不应该在生产代码中这样做。

#### HTML

这段 HTML 定义了两个 {{htmlelement("button")}} 元素，用于以不同的净化器调用该方法；另一个按钮用于重置示例；还有一个 {{htmlelement("div")}} 元素用于注入字符串。

```html
<button id="buttonNoSanitizer" type="button">无</button>
<button id="buttonAllowScript" type="button">允许脚本</button>

<button id="reload" type="button">重新加载</button>
<div id="target">目标元素的原始内容</div>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 320px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
  margin: 5px;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.textContent += text;
}
```

```js hidden
if ("Sanitizer" in window) {
```

首先我们定义要净化的字符串，它在所有情况下都相同。它包含 {{htmlelement("script")}} 元素和 `onclick` 处理器，二者都被认为是 XSS 不安全的。我们还定义了重新加载按钮的处理器。

```js
// 定义不安全的 HTML 字符串
const unsanitizedString = `
  <div>
    <p>要注入到影子 DOM 的段落。
      <button onclick="alert('你点击了按钮！')">点我</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123">带有 <code>data-</code> 属性的段落</p>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

接下来我们定义在不使用净化器的情况下设置 HTML 的按钮的点击处理器。通常我们会期望该方法丢弃字符串中不允许出现在该上下文中的元素（例如 `<div>` 元素中的表格专用元素），但除此之外与输入字符串一致。在这种情况下，两个字符串应该一致。

```js
const buttonNoSanitizer = document.querySelector("#buttonNoSanitizer");
buttonNoSanitizer.addEventListener("click", () => {
  // 在不指定净化器的情况下设置不安全的 HTML
  target.setHTMLUnsafe(unsanitizedString);

  // 记录净化前和注入后的 HTML
  logElement.textContent = "无净化器：字符串应该被不经滤除地注入\n\n";
  log(`\n未净化：${unsanitizedString}`);
  log(`\n\n已净化：${target.innerHTML}`);
});
```

下一个点击处理器使用一个仅允许 {{htmlelement("div")}}、{{htmlelement("p")}} 和 {{htmlelement("script")}} 元素的自定义净化器来设置目标 HTML。注意，因为我们使用的是 `setHTMLUnsafe()` 方法，`<script>` 不会被移除！

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // 使用自定义净化器设置元素的内容
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  target.setHTMLUnsafe(unsanitizedString, { sanitizer: sanitizer1 });

  // 记录净化前和注入后的 HTML
  logElement.textContent = "净化器：{elements: ['div', 'p', 'script']}\n";
  log(`\n未净化：${unsanitizedString}`);
  log(`\n\n已净化：${target.innerHTML}`);
});
```

```js hidden
} else {
  log("此浏览器不支持 HTML 净化器 API。");
  // 提供回退方案或其他行为
}
```

#### 结果

分别点击“无”和“允许脚本”按钮，查看不使用净化器和自定义净化器的效果。

当你点击“无”按钮时，你应该会看到输入和输出一致，因为没有应用任何净化器。当你点击“允许脚本”按钮时，`<script>` 元素仍然存在，但 `<button>` 元素被移除了。使用这种方法，你可以创建安全的 HTML，但你并不被强制这样做。

{{EmbedLiveSample("setHTMLUnsafe()_实例","100","450px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} 和 {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
