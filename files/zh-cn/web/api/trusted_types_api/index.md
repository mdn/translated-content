---
title: 可信类型 API
slug: Web/API/Trusted_Types_API
l10n:
  sourceCommit: feab83995051329081769a3a15a7a8d8e28cdd42
---

{{DefaultAPISidebar("Trusted Types API")}}{{AvailableInWorkers}}

**可信类型 API**（Trusted Types API）为 Web 开发者提供了一种在输入被传递给可能执行它们的 API 之前，先通过用户特定的转换函数处理这些输入的方法。这可以帮助防御客户端侧[跨站点脚本（XSS）](/zh-CN/docs/Web/Security/Attacks/XSS)攻击。一般而言，转换函数会[净化](/zh-CN/docs/Web/Security/Attacks/XSS#净化)这些输入。

## 概念和用法

客户端侧的、基于 DOM 的 XSS 攻击是攻击者构造的数据被传递给可以将数据作为代码执行的浏览器 API 所引起的。这些 API 被称为[_注入汇聚点（injection sink）_](#注入汇聚点接口)。

可信类型 API 区分了三类注入汇聚点：

- **HTML 汇聚点**：将输入解释为 HTML 的 API，例如 {{domxref("Element.innerHTML")}} 和 {{domxref("Document.write()", "document.write()")}}。这些 API 可以执行嵌入在 HTML 中的 JavaScript，例如在 {{htmlelement("script")}} 标签或者事件处理器属性中。
- **JavaScript 汇聚点**：将输入解释为 JavaScript 的 API，例如 {{jsxref("Global_Objects/eval", "eval()")}} 和 {{domxref("HTMLScriptElement.text")}}。
- **JavaScript URL 汇聚点**：将输入解释为指向脚本的 URL 的 API，例如 {{domxref("HTMLScriptElement.src")}}。

对基于 DOM 的 XSS 攻击的防御手段之一就是在输入被传递给一个注入汇聚点之前，确保输入是安全的。

在可信类型 API 中，开发者定义一个*策略对象*，包含根据注入汇聚点转换输入以让其变得安全的方法。该策略可以为不同类型的汇聚点定义不同的转换方法。

- 对于 HTML 汇聚点，转换函数一般会[净化](/zh-CN/docs/Web/Security/Attacks/XSS#净化)输入，例如使用像 [DOMPurify](https://github.com/cure53/DOMPurify) 这样的库。
- 对于 JavaScript 和 JavaScript URL 汇聚点，策略可能完全禁止它们或者只允许预先定义的输入（例如特定的数个 URL）。

可信类型 API 随后会确保输入在被传递给汇聚点之前通过相应的转换函数。

也就是说，该 API 允许你在一处定义你的策略，并确保任何传递给注入汇聚点的数据都先通过该策略。

> [!NOTE]
> 可信类型 API 本身并*不*提供策略或任何转换函数：开发者需要自行定义包含所需转换方法的策略。

可信类型 API 拥有两个主要部分：

- 一个允许开发者在将数据传递给注入汇聚点前净化数据的 JavaScript API。
- 两个用于强制执行和控制 JavaScript API 使用方式的 [CSP](/zh-CN/docs/Web/HTTP/Guides/CSP) 指令。

### 可信类型 JavaScript API

在可信类型 API 中：

- `trustedTypes` 全局属性，在 {{domxref("Window.trustedTypes", "Window")}} 和 {{domxref("WorkerGlobalScope.trustedTypes", "Worker")}} 上下文中都可用，被用于创建 {{domxref("TrustedTypePolicy")}} 对象。
- 一个 {{domxref("TrustedTypePolicy")}} 对象被用于创建可信类型对象，工作方式为将数据传递给其转换函数。
- 可信类型对象表示已经经过策略处理的数据，已经可以被安全地传递给注入汇聚点。根据不同种类的注入汇聚点，有三种不同的可信类型：
  - {{domxref("TrustedHTML")}} 用于将数据渲染为 HTML 的汇聚点。
  - {{domxref("TrustedScript")}} 用于将数据作为 JavaScript 执行的汇聚点。
  - {{domxref("TrustedScriptURL")}} 用于将数据解析为脚本的 URL 的汇聚点。

通过这个 API，你不需要再将字符串传递给像 `innerHTML` 这样的注入汇聚点。你可以使用 `TrustedTypePolicy` 从字符串创建一个 `TrustedHTML` 对象，将其传入到汇聚点，并确保这个字符串会先经过一个转换函数。

例如，这段代码创建一个 `TrustedTypePolicy`，通过使用 [DOMPurify](https://github.com/cure53/DOMPurify) 库净化输入的字符串来创建 `TrustedHTML` 对象：

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

然后，你可以使用这个 `policy` 对象来创建一个 `TrustedHTML` 对象，再将这个对象传给注入汇聚点：

```js
const userInput = "<p>我可能被 XSS 注入</p>";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
element.innerHTML = trustedHTML;
```

### 使用 CSP 强制执行可信类型

上面描述的 API 允许你净化数据，但是并不能确保你的代码永远不会直接将输入传给注入汇聚点：也就是说，它并不阻止你直接给 `innerHTML` 传递字符串。

为了确保所有被传递的输入都是可信类型，你需要在你的 [CSP](/zh-CN/docs/Web/HTTP/Guides/CSP) 中包含 {{CSP("require-trusted-types-for")}} 指令。当这个指令被设置时，向注入汇聚点传递字符串会导致 `TypeError` 异常：

```js example-bad
const userInput = "<p>我可能被 XSS 注入</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput; // 抛出 TypeError
```

另外，{{CSP("trusted-types")}} CSP 指令可以用于控制你的代码被允许创建哪种策略。当你使用 {{domxref("TrustedTypePolicyFactory/createPolicy", "trustedTypes.createPolicy()")}} 创建一个策略时，你需要为策略传递一个名称。`trusted-types` CSP 指令列出了可被接受的策略名称，这样如果一个策略的名称不在 `trusted-types` 中，`createPolicy()` 会抛出异常。这会阻止你的 Web 应用程序代码创建你所不期望的策略。

### 默认策略

在可信类型 API 中，你可以定义一个*默认策略*。这帮助你找到你的代码中所有仍然向注入汇聚点传递字符串的地方，然后你可以重构代码来创建和传递可信类型。

如果你创建了一个名为 `"default"` 的策略，并且你的 CSP 强制执行使用可信类型，则任何被传入注入汇聚点的字符串参数都会自动被此策略处理。例如，假如我们像这样创建一个策略：

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("请重构此代码");
    return sanitize(value);
  },
});
```

借助这个策略，如果你的代码对 `innerHTML` 设置了一个字符串，浏览器会使用这个策略的 `createHTML()` 方法并将其结果应用到汇聚点中。

```js
const userInput = "<p>我可能被 XSS 注入</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// 在控制台记录“请重构此代码”
// 应用 sanitize(userInput) 的返回值
```

如果默认策略返回 `null` 或者 `undefined`，浏览器会在将结果赋给汇聚点时抛出 `TypeError`。

```js
trustedTypes.createPolicy("default", {
  createHTML(value) {
    console.log("请重构此代码");
    return null;
  },
});

const userInput = "<p>我可能被 XSS 注入</p>";
const element = document.querySelector("#container");

element.innerHTML = userInput;
// 在控制台记录“请重构此代码”
// 抛出 TypeError
```

> [!NOTE]
> 推荐做法是，只有正在从直接向注入汇聚点传递输入的旧代码迁移到显式使用可信类型的新代码时，才使用默认策略作为过渡。

### 注入汇聚点接口

本节提供了“直接”的注入汇聚点接口列表。

这些是在求值时执行可信类型检查的 API 属性和方法。它们可以被传递可信类型（`TrustedHTML`、`TrustedScript` 或 `TrustedScriptURL`）或字符串，以及在强制执行可信类型且没有默认策略被定义时必须被传递可信类型。

#### TrustedHTML

- {{domxref("Document.execCommand()")}}，其 `commandName` 为 [`"insertHTML"`](/zh-CN/docs/Web/API/Document/execCommand#inserthtml)
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

- [`AsyncFunction()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction)
- [`AsyncGeneratorFunction()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)
- {{jsxref("Global_Objects/eval", "eval()")}}
- [`Element.setAttribute()`](/zh-CN/docs/Web/API/Element/setAttribute#value)（`value` 参数）
- [`Element.setAttributeNS()`](/zh-CN/docs/Web/API/Element/setAttributeNS#value)（`value` 参数）
- [`Function()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- [`GeneratorFunction()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction)
- {{domxref("HTMLScriptElement.innerText")}}
- {{domxref("HTMLScriptElement.textContent")}}
- {{domxref("HTMLScriptElement.text")}}
- [`window.setTimeout()`](/zh-CN/docs/Web/API/Window/setTimeout#code) 和 [`WorkerGlobalScope.setTimeout()`](/zh-CN/docs/Web/API/WorkerGlobalScope/setTimeout#code)（`code` 参数）
- [`window.setInterval()`](/zh-CN/docs/Web/API/Window/setInterval#code) 和 [`WorkerGlobalScope.setInterval()`](/zh-CN/docs/Web/API/WorkerGlobalScope/setInterval#code)（`code` 参数）

#### TrustedScriptURL

- {{domxref("HTMLScriptElement.src")}}
- {{domxref("ServiceWorkerContainer.register()")}}
- {{domxref("SvgAnimatedString.baseVal")}}
- {{domxref("WorkerGlobalScope.importScripts()")}}
- [`Worker()` 构造函数](/zh-CN/docs/Web/API/Worker/Worker#aurl)的 `url` 参数
- [`SharedWorker()` 构造函数](/zh-CN/docs/Web/API/SharedWorker/SharedWorker#url)的 `url` 参数

### 间接注入汇聚点

*间接注入汇聚点*是一种通过中间机制向 DOM 注入未受信任的字符串的汇聚点，它们并不接受或强制执行可信类型。这与前文段落中列出的“直接”的[注入汇聚点接口](#注入汇聚点接口)不同，后者在调用时会对注入的字符串运行可信类型检查。

例如，下面的代码就间接地设置了 script 元素的内容。首先，根据用户提供的一段字符串创建一个文本节点，然后构造一个 {{htmlelement("script")}} 元素并将文本节点添加为其子元素。接下来，将 script 元素作为 {{htmlelement("body")}} 元素的子节点添加到文档中——此时，原字符串中定义的脚本可能会被执行。

```js
// 创建文本节点
const untrustedString = "console.log('来自不可信来源的潜在恶意脚本！');";
const textNode = document.createTextNode(untrustedString);

// 创建 script 元素并添加文本节点
const script = document.createElement("script");
script.appendChild(textNode);

// 将 script 元素添加到文档中，从而可以执行
document.body.appendChild(script);
```

文本节点被创建时，浏览器没有理由认为它会被用作可信类型的来源。因此可信类型会被序列化为字符串，且不被强制执行。

相反，浏览器会在 script 元素变得可执行时进行检查——例如在这个例子中，是在调用 `document.body.appendChild(script)` 来将 script 元素添加到文档中时。

浏览器会首先检查作为脚本内容的字符串是否可被信任。任何没有将 {{htmlelement("script")}} 的文本内容显式设置为 {{domxref("TrustedScript")}} 的操作都会让其变得不可信。上面用到的 {{domxref("Node.appendChild()")}} 就是一个例子（一些其他的例子在 WPT 在线测试 <https://wpt.live/trusted-types/script-enforcement-001.html> 中被列出）。

如果字符串并不受信任，并且可信类型被强制执行，浏览器会尝试使用[默认策略](#默认策略)获取一个 `TrustedScript` 来使用，而不是原字符串。如果没有定义默认策略，或者默认策略没有返回 `TrustedScript`，该操作会引发异常。

### 可信类型微型兼容实现

_可信类型微型兼容实现_（tinyfill）帮助你在还不支持可信类型 API 的浏览器上工作。

这个微型兼容实现就是这样：

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

这段代码提供了 `trustedTypes.createPolicy()` 的一个实现：直接返回接收到的 [`policyOptions`](/zh-CN/docs/Web/API/TrustedTypePolicyFactory/createPolicy#policyoptions) 对象自身。`policyOptions` 对象定义了对数据的净化函数，这些函数的期望返回类型是字符串。

在已有微型兼容实现之后，假如我们创建一个策略：

```js
const policy = trustedTypes.createPolicy("my-policy", {
  createHTML: (input) => DOMPurify.sanitize(input),
});
```

在支持可信类型的浏览器中，这会返回一个 `TrustedTypePolicy`，然后在我们调用 `policy.createHTML()` 时创建一个 `TrustedHTML` 对象。`TrustedHTML` 对象可以被传递给注入汇聚点，我们可以选择强制汇聚点接收可信类型而不是字符串。

在不支持可信类型的浏览器中，这段代码会返回一个拥有 `createHTML()` 函数的对象，净化其输入并返回字符串。净化后的字符串可以被传递给注入汇聚点。

```js
const userInput = "我可能被 XSS 注入";
const element = document.querySelector("#container");

const trustedHTML = policy.createHTML(userInput);
// 在支持的浏览器中，trustedHTML 是一个 TrustedHTML 对象。
// 在不支持的浏览器中，trustedHTML 是一个字符串。

element.innerHTML = trustedHTML;
// 在支持的浏览器中，如果 trustedHTML 不是 TrustedHTML 对象，这会抛出错误。
```

无论哪种情况，注入汇聚点都会获得净化过的数据，并且因为我们可以在支持的浏览器中强制使用策略，所以我们知道在不支持的浏览器中，这段代码路径同样会经过净化函数。

这意味着，只要你在启用了 `require-trusted-types-for` CSP 指令且支持可信类型的浏览器中测试过你的代码，那么这个微型兼容实现足够在不支持可信类型 API 的浏览器上提供相同的保护。

因为这个强制执行机制会迫使你重构代码，以确保所有数据在被传入注入汇聚点前都通过了可信类型 API（从而通过了净化函数）。如果随后你在另一个没有启用强制执行的浏览器中运行重构过的代码，它仍然会经过相同的代码路径，并为你提供相同的保护。

## 接口

- {{domxref("TrustedHTML")}}
  - : 表示一个用于插入到注入汇聚点、渲染为 HTML 的字符串。
- {{domxref("TrustedScript")}}
  - : 表示一个用于插入到注入汇聚点、可能会导致脚本被执行的字符串。
- {{domxref("TrustedScriptURL")}}
  - : 表示一个用于插入到注入汇聚点、被解析为外部脚本资源 URL 的字符串。
- {{domxref("TrustedTypePolicy")}}
  - : 定义用于创建以上可信类型对象的函数。
- {{domxref("TrustedTypePolicyFactory")}}
  - : 创建策略，并验证可信类型对象实例是否通过其中的某个策略创建。

### 对其他接口的扩展

- {{domxref("Window.trustedTypes")}}
  - : 返回与主线程中的全局对象相关联的 {{domxref("TrustedTypePolicyFactory")}} 对象。这是在 Window 线程中使用此 API 的入口点。
- {{domxref("WorkerGlobalScope.trustedTypes")}}
  - : 返回与 worker 中的全局对象相关联的 {{domxref("TrustedTypePolicyFactory")}} 对象。

### 对 HTTP 的扩展

#### `Content-Security-Policy` 指令

- {{CSP("require-trusted-types-for")}}
  - : 强制只有可信类型被传入至 DOM XSS [注入汇聚点](#概念和用法)。
- {{CSP("trusted-types")}}
  - : 用于指定允许的可信类型策略名称列表。

#### `Content-Security-Policy` 关键字

- [`trusted-types-eval`](/zh-CN/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval)
  - : 仅在可信类型受支持且被强制执行时，允许使用 [`eval()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 和类似函数。

## 示例

在下面的例子中，我们使用 {{domxref("TrustedTypePolicyFactory.createPolicy()")}} 创建了一个会创建 {{domxref("TrustedHTML")}} 对象的策略。然后我们可以使用 {{domxref("TrustedTypePolicy.createHTML()")}} 来创建一个净化过的、可被插入到文档中的 HTML 字符串。

净化过的值可以与 {{domxref("Element.innerHTML")}} 配合使用，确保没有新的 HTML 元素被注入。

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

在文章[使用可信类型防范基于 DOM 的跨站脚本攻击漏洞](https://web.developers.google.cn/articles/trusted-types)中阅读关于此示例的更多信息，以及探索其他净化输入的方式。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用可信类型防范基于 DOM 的跨站脚本攻击漏洞](https://web.developers.google.cn/articles/trusted-types)
