---
title: 可信类型 API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: feab83995051329081769a3a15a7a8d8e28cdd42
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

**可信类型 API** 为 Web 开发者提供了一种在输入被传递给可能执行它们的 API
之前，先通过用户特定的转换函数处理这些输入的方法。这可以帮助防御客户端侧[跨站点脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击。一般而言，转换函数会[清洗](/zh-CN/docs/Web/Security/Attacks/XSS#sanitization)这些输入。

## 理念与使用

客户端侧的、基于 DOM 的 XSS 攻击是攻击者构造的数据被传递给可以将数据作为代码执行的浏览器 API
所引起的。这些 API 被称为 [_注入汇点（injection sinks）_](#注入汇点接口)。

可信类型 API 区分了三类注入汇点：

- **HTML 汇点**：将输入解释为 HTML 的 API，例如 {{domxref("Element.innerHTML")}} 和 {{domxref("Document.write()", "document.write()")}}。这些 API 可以执行嵌入在 HTML 中的 JavaScript，例如在 {{htmlelement("script")}} 标签或者事件处理器的属性。
- **JavaScript 汇点**：将输入解释为 JavaScript 的 API，例如 {{jsxref("Global_Objects/eval", "eval()")}} 和 {{domxref("HTMLScriptElement.text")}}。
- **JavaScript URL 汇点**：将输入解释为指向脚本的 URL 的 API，例如 {{domxref("HTMLScriptElement.src")}}。

对基于 DOM 的 XXS 攻击的防御手段之一就是在输入被传递给一个注入汇点之前，确保输入是安全的。

在可信类型 API 中，开发者定义一个 _策略对象_，包含根据注入汇点转换输入以让其变得安全的方法。该策略可以为不同类型的汇点定义不同的转换方法。

- 对于 HTML 汇点，转换函数一般会[清洗](/zh-CN/docs/Web/Security/Attacks/XSS#sanitization)输入，例如使用像 [DOMPurify](https://github.com/cure53/DOMPurify) 这样的库。
- 对于 JavaScript 和 JavaScript URL 汇点，策略可能完全禁止它们或者只允许预先定义的输入（例如特定的数个 URL）。

可信类型 API 然后会确保输入在被传递给汇点之前通过其偏好的转换函数。

也就是说，这些 API 允许你在一处定义你的策略，然后被传递给任何注入汇点的任何数据都会先通过该策略。

> [!NOTE]
>
> 可信类型 API 并 _不_ 会自行应用一个策略或任何转换方法：开发者需要主动定义包含他们想要的转换方法的策略。

可信类型 API 拥有两个主要部分：

- 一个允许开发者在将数据传递给注入汇点前清洗数据的 JavaScript API。
- 两种强制执行和控制 JavaScript API 的 [CSP](/zh-CN/docs/Web/HTTP/Guides/CSP) 指令。

### 可信类型 JavaScript API

在可信类型 API 中：

- `trustedTypes` 全局属性，在 {{domxref("Window.trustedTypes", "Window")}} 和 {{domxref("WorkerGlobalScope.trustedTypes", "Worker")}} 上下文中都可用，被用于创建 {{domxref("TrustedTypePolicy")}} 对象。 
- 一个 {{domxref("TrustedTypePolicy")}} 对象被用于创建可信类型对象，工作方式为将数据传递给其转换函数。
- 可信类型对象表示已经经过策略处理的数据，已经可以被安全地传递给注入汇点。根据不同种类的注入汇点，有三种不同的可信类型：
  - {{domxref("TrustedHTML")}} 用于将数据渲染为 HTML 的汇点。
  - {{domxref("TrustedScript")}} 用于将数据作为 JavaScript 执行的汇点。
  - {{domxref("TrustedScriptURL")}} 用于将数据解析为脚本的 URL 的汇点。

通过这个 API，你不需要再将字符串传递给像 `innerHTML` 这样的注入汇点。你可以使用 `TrustedTypePolicy`
从字符串创建一个 `TrustedHTML` 对象，将其传入到汇点，并确保这个字符串会先经过一个转换函数。

例如，这段代码创建一个 `TrustedTypePolicy`，通过使用 [DOMPurify](https://github.com/cure53/DOMPurify)
库清洗输入的字符串来创建 `TrustedHTML` 对象：

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

然后，你可以使用这个 `policy` 对象来创建一个 `TrustedHTML` 对象，再将这个对象传给注入汇点：

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### 使用 CSP 强制执行可信类型

上面描述的 API 允许你清洗数据，但是并不能确保你的代码永远不会直接将输入传给注入汇点：也就是说，它并不阻止你直接给
`innerHTML` 传递字符串。

为了确保所有被传递的输入都是可信类型，你需要再你的 [CSP](/zh-CN/docs/Web/HTTP/Guides/CSP) 中包含
{{CSP("require-trusted-types-for")}} 指令。当这个指令被设置时，向注入汇点传递字符串会导致 `TypeError` 异常。

```js example-bad
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // 抛出 TypeError
```

另外，{{CSP("trusted-types")}} CSP 指令可以用于控制你的代码被允许创建哪种策略。当你使用
{{domxref("TrustedTypePolicyFactory/createPolicy", "trustedTypes.createPolicy()")}}
创建一个策略时，你给策略传递了一个名称。`trusted-types` CSP 指令列出了可被接受的策略名称，这样如果一个策略的名称不在
`trusted-types` 中，`createPolicy()` 会抛出异常。这会阻止你的 Web 应用程序代码创建你所不期望的策略。

### 默认策略

在可信类型 API 这种，你可以定义一个 _默认策略_。这帮助你找到你的代码中所有仍然向注入汇点传递字符串的地方，然后你可以重构代码来创建和传递可信类型。

如果你创建了一个名为 `"default"` 的策略，并且你的 CSP 强制执行使用可信类型，则任何被传入注入汇点的字符串参数都会自动被此策略处理。例如，假如我们像这样创建一个策略：

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return sanitize(value);
  },
});
```

借助这个策略，如果你的代码对 `innerHTML` 设置了一个字符串，浏览器会使用这个策略的 `createHTML()` 方法并将其结果应用到汇点中。

```js
const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// 在控制台记录 "Please refactor this code"
// 应用 sanitize(userInput) 的返回值
```

如果默认策略返回 `null` 或者 `undefined`，浏览器会在将结果赋给汇点时抛出 `TypeError`。

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("Please refactor this code");
    return null;
  },
});

const userInput = "<p>I might be XSS</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// 在控制台记录 "Please refactor this code"
// 抛出 TypeError
```

> [!NOTE]
> 推荐做法是，只有正在从直接向注入汇点传递输入的旧代码迁移到显式使用可信类型的新代码时，才使用默认策略作为过渡。

### 注入汇点接口

此段落提供了“直接”的注入汇点接口列表。

这些是在执行时更偏好可信类型检查的 API 属性和方法。它们可以被传递可信类型（`TrustedHTML`、`TrustedScript` 或
`TrustedScriptURL`）或字符串，以及在强制执行可信类型被启用且没有默认策略被定义时必须被传递可信类型。

#### TrustedHTML

- {{domxref("Document.execCommand()")}}，接收 `commandName` 且类型为 [`"insertHTML"`](/en-US/docs/Web/API/Document/execCommand#inserthtml)
- {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- {{domxref("Document.write()")}}
- {{domxref("Document.writeln()")}}
- {{domxref("DOMParser.parseFromString()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Element.insertAdjacentHTML")}}
- {{domxref("Element.outerHTML")}}
- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("HTMLIFrameElement.srcdoc")}}
- {{domxref("Range.createContextualFragment()")}}
- {{domxref("ShadowRoot.innerHTML")}}
- {{domxref("ShadowRoot.setHTMLUnsafe()")}}

#### TrustedScript

- [`AsyncFunction()` 构造方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction)
- [`AsyncGeneratorFunction()` 构造方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)
- {{jsxref("Global_Objects/eval", "eval()")}}
- [`Element.setAttribute()`](/zh-CN/docs/Web/API/Element/setAttribute#value)（`value` 参数）
- [`Element.setAttributeNS()`](/zh-CN/docs/Web/API/Element/setAttributeNS#value)（`value` 参数）
- [`Function()` 构造方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [`GeneratorFunction()` 构造方法](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction)
- {{domxref("HTMLScriptElement.innerText")}}
- {{domxref("HTMLScriptElement.textContent")}}
- {{domxref("HTMLScriptElement.text")}}
- [`window.setTimeout()`](/zh-CN/docs/Web/API/Window/setTimeout#code) 和 [`WorkerGlobalScope.setTimeout()`](/zh-CN/docs/Web/API/WorkerGlobalScope/setTimeout#code) （`code` 参数）
- [`window.setInterval()`](/zh-CN/docs/Web/API/Window/setInterval#code) 和 [`WorkerGlobalScope.setInterval()`](/zh-CN/docs/Web/API/WorkerGlobalScope/setInterval#code) （`code` 参数）

#### TrustedScriptURL

- {{domxref("HTMLScriptElement.src")}}
- {{domxref("ServiceWorkerContainer.register()")}}
- {{domxref("SvgAnimatedString.baseVal")}}
- {{domxref("WorkerGlobalScope.importScripts()")}}
- [`Worker()` 构造函数](/zh-CN/docs/Web/API/Worker/Worker#url) 的 `url` 参数
- [`SharedWorker()` 构造函数](/zh-CN/docs/Web/API/SharedWorker/SharedWorker#url) 的 `url` 参数

### 间接注入汇点

_Indirect injection sinks_ are sinks where untrusted strings are injected into the DOM via an intermediate mechanism that doesn't accept or enforce trusted types.
These differ from the "direct" [Injection sink interfaces](#injection_sink_interfaces) listed in the previous section, which run trusted type checks on injected strings when they are called.

For example, the following code sets script element source indirectly.
First a text node is created using a string provided by a user, and then a {{htmlelement("script")}} element is constructed and the text node is appended as a child element.
Next the script element is added to the document as a child of the {{htmlelement("body")}} element — at this point scripts defined in the original string may be executed.

```js
// Create a text node
const untrustedString =
  "console.log('A potentially malicious script from an untrusted source!');";
const textNode = document.createTextNode(untrustedString);

// Create a script element and append the text node
const script = document.createElement("script");
script.appendChild(textNode);

// Add the script into the document, where it can run
document.body.appendChild(script);
```

When the text node is created there is no reason for the browser to assume it is intended to be used as a trusted type source, so trusted types are serialized to string, and are not enforced.

Instead, browsers run the checks when the script element becomes executable — i.e., in this example, when `document.body.appendChild(script)` is called to add the script element to the document.

The browser will first check if the string used as the script content is trusted.
Any operation that allows the text source of a {{htmlelement("script")}} to be modified without explicitly setting a {{domxref("TrustedScript")}} makes it untrusted.
The {{domxref("Node.appendChild()")}} method used above is just one example (a number of others are listed in the WPT Live tests at <https://wpt.live/trusted-types/script-enforcement-001.html>).

If the string is not trusted and trusted types are enforced, the browser will attempt to obtain a `TrustedScript` from a [default policy](#the_default_policy) to use for source instead.
If a default policy is not defined, or does not return a `TrustedScript`, the operation will throw an exception.

### 可信类型 tinyfill

The _Trusted Types tinyfill_ helps you work with browsers that don't support the Trusted Types API itself.

The tinyfill is just this:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

That is, it provides an implementation of `trustedTypes.createPolicy()` which just returns the [`policyOptions`](/en-US/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions) object it was passed. The `policyOptions` object defines sanitization functions for data, and these functions are expected to return strings.

With this tinyfill in place, suppose we create a policy:

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

In browsers that support trusted types, this will return a `TrustedTypePolicy`, which will create a `TrustedHTML` object when we call `policy.createHTML()`. The `TrustedHTML` object can then be passed to an injection sink, and we can enforce that the sink received a trusted type, rather than a string.

In browsers that don't support trusted types, this code will return an object with a `createHTML()` function that sanitizes its input and returns it as a string. The sanitized string can then be passed to an injection sink.

```js
const userInput = "I might be XSS";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
// In supporting browsers, trustedHTML is a TrustedHTML object.
// In non-supporting browsers, trustedHTML is a string.

element.innerHTML = trustedHTML;
// In supporting browsers, this will throw if trustedHTML
// is not a TrustedHTML object.
```

Either way, the injection sink gets sanitized data, and because we could enforce the use of the policy in the supporting browser, we know that this code path goes through the sanitization function in the non-supporting browser, too.

This means that, as long as you have tested your code on a supporting browser with the `require-trusted-types-for` CSP directive, then the tinyfill is enough to give the same protection even in browsers which don't support the Trusted Types API.

This is because the enforcement forces you to refactor your code to ensure that all data is passed through the Trusted Types API (and therefore has been through a sanitization function) before being passed to an injection sink.
If you then run the refactored code in a different browser without enforcement, it will still go through the same code paths, and give you the same protection.

## 接口

- {{domxref("TrustedHTML")}}
  - : Represents a string to insert into an injection sink that will render it as HTML.
- {{domxref("TrustedScript")}}
  - : Represents a string to insert into an injection sink that could lead to the script being executed.
- {{domxref("TrustedScriptURL")}}
  - : Represents a string to insert into an injection sink that will parse it as a URL of an external script resource.
- {{domxref("TrustedTypePolicy")}}
  - : Defines the functions used to create the above Trusted Type objects.
- {{domxref("TrustedTypePolicyFactory")}}
  - : Creates policies and verifies that Trusted Type object instances were created via one of the policies.

### 对其他接口的扩展

- {{domxref("Window.trustedTypes")}}
  - : Returns the {{domxref("TrustedTypePolicyFactory")}} object associated with the global object in the main thread.
    This is the entry point for using the API in the Window thread.
- {{domxref("WorkerGlobalScope.trustedTypes")}}.
  - : Returns the {{domxref("TrustedTypePolicyFactory")}} object associated with the global object in a worker.

### 对 HTTP 的扩展

#### `Content-Security-Policy` 指令

- {{CSP("require-trusted-types-for")}}
  - : Enforces that Trusted Types are passed to DOM XSS [injection sinks](#理念与使用).
- {{CSP("trusted-types")}}
  - : Used to specify an allowlist of Trusted Types policy names.

#### `Content-Security-Policy` 关键字

- [`trusted-types-eval`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : Allows [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) and similar functions to be used but only when Trusted Types are supported and enforced.

## 示例

In the below example we create a policy that will create {{domxref("TrustedHTML")}} objects using {{domxref("TrustedTypePolicyFactory.createPolicy()")}}. We can then use {{domxref("TrustedTypePolicy.createHTML()")}} to create a sanitized HTML string to be inserted into the document.

The sanitized value can then be used with {{domxref("Element.innerHTML")}} to ensure that no new HTML elements can be injected.

```html
<div id="myDiv"></div>
```

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) =>
    string
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;"),
});

let el = document.getElementById("myDiv");
const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
console.log(escaped instanceof TrustedHTML); // true
el.innerHTML = escaped;
```

Read more about this example, and discover other ways to sanitize input in the article [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types).

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
