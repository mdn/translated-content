---
title: Element：setHTML() 方法
short-title: setHTML()
slug: Web/API/Element/setHTML
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML Sanitizer API")}}

{{domxref("Element")}} 接口的 **`setHTML()`** 方法提供了一种 XSS 安全的方法，用于解析并净化 HTML 字符串，并将其作为元素的子树插入 DOM。

该方法会移除任何被视为 XSS 不安全的元素和属性，即使传入的净化器允许它们也是如此。值得注意的是，以下元素总是会被移除：{{HTMLElement("script")}}、{{HTMLElement("frame")}}、{{HTMLElement("iframe")}}、{{HTMLElement("embed")}}、{{HTMLElement("object")}}、{{SVGElement("use")}}，以及事件处理器属性。

在设置用户提供的 HTML 字符串时，推荐（如果浏览器支持）将其作为 {{domxref("Element.innerHTML")}} 的直接替代方案。

## 语法

```js-nolint
setHTML(input)
setHTML(input, options)
```

### 参数

- `input`
  - : 定义要净化并注入元素的 HTML 的字符串。
- `options` {{optional_inline}}
  - : 包含以下可选参数的选项对象：
    - `sanitizer`
      - : 一个 {{domxref("Sanitizer")}} 或 {{domxref("SanitizerConfig")}} 对象，用于定义允许或移除输入中的哪些元素；也可以是字符串 `"default"`，表示使用默认配置。该方法会移除任何 XSS 不安全的元素和属性，即使净化器允许它们也是如此。如果未指定，则使用[默认净化器配置](/zh-CN/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)。

        请注意，如果你要多次使用相同的配置，预期使用 `Sanitizer` 并在需要时修改它会更高效。

### 返回值

无（`undefined`）。

### 异常

- {{jsxref("TypeError")}}
  - : 如果传给 `options.sanitizer` 的是以下值，则会抛出此异常：
    - 不是[有效配置](/zh-CN/docs/Web/API/SanitizerConfig#valid_configuration)的 {{domxref("SanitizerConfig")}}。例如，同时包含“允许”和“移除”配置设置的配置。
    - 值不为 `"default"` 的字符串。
    - 不是 {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}} 或字符串的值。

## 描述

**`setHTML()`** 方法提供了一种 XSS 安全的方法，用于将 HTML 字符串解析并净化为 {{domxref("DocumentFragment")}}，然后将其作为元素的子树插入 DOM。

`setHTML()` 会丢弃 HTML 输入字符串中在当前元素上下文中无效的元素，例如位于 {{htmlelement("table")}} 之外的 {{htmlelement("col")}} 元素。随后，它会移除净化器配置不允许的任何 HTML 实体，并进一步移除任何 XSS 不安全的元素或属性——无论净化器是否允许它们。

如果 `options.sanitizer` 参数中未指定净化器，则 `setHTML()` 会使用[默认净化器配置](/zh-CN/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)。该配置适用于大多数用例，因为它可以防止 XSS 攻击，以及点击劫持或欺骗等其他攻击。

可以指定自定义的 `Sanitizer` 或 `SanitizerConfig`，以选择允许或移除哪些元素、属性和注释。请注意，即使净化器允许不安全选项，在使用此方法时它们仍然会被移除（它移除的元素与调用过 {{domxref('Sanitizer.removeUnsafe()')}} 的净化器相同）。

在将不受信任的 HTML 字符串插入元素时，应使用 `setHTML()` 而不是 {{domxref("Element.innerHTML")}}。除非确实需要允许不安全的元素和属性，否则也应使用它而不是 {{domxref("Element.setHTMLUnsafe()")}}。

请注意，由于此方法始终会净化输入字符串中的 XSS 不安全实体，因此它不会使用 [Trusted Types API](/zh-CN/docs/Web/API/Trusted_Types_API) 进行安全保护或验证。

### 重新解析与突变型 XSS（mXSS）

即使使用 `setHTML()` 净化了 HTML 输入，将 HTML 序列化后再用 `innerHTML` 重新解析仍然是不安全的。例如，以下代码是不安全的。

```js example-bad
div.setHTML(unsafeString); // 安全
const serializedHTML = div.innerHTML; // 不再经过净化！
otherElement.innerHTML = serializedHTML;
```

原因在于净化过程是与上下文相关的。当你对特定元素调用 `setHTML()` 时，会移除该上下文中不安全的元素和属性。如果你将 HTML 序列化并直接在另一个元素中使用，它可能仍包含在该元素中不安全的元素。

这样做则是安全的（尽管没有意义）：

```js example-good
div.setHTML(unsafeString); // 安全
const serializedHTML = div.innerHTML; // 序列化为普通字符串
otherDiv.setHTML(serializedHTML); // 安全——由 setHTML() 重新净化
```

有一类攻击会利用这一缺陷，被称为[突变型 XSS](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#sanitizer-security-mxss)。避免此问题的简单规则是：只通过 `setHTML()` 等安全方法注入 HTML 字符串。

## 示例

### 基本用法

此示例展示了使用 `setHTML()` 净化和注入 HTML 字符串的一些方式。

```js
// 定义未净化的 HTML 字符串
const unsanitizedString = "abc <script>alert(1)<" + "/script> def";
// 获取 id 为 "target" 的目标元素
const target = document.getElementById("target");

// 使用默认净化器调用 setHTML()
target.setHTML(unsanitizedString);

// 定义自定义 Sanitizer 并在 setHTML() 中使用
// 这里只允许 div、p、button 元素（script 不安全，会被移除）
const sanitizer1 = new Sanitizer({
  elements: ["div", "p", "button", "script"],
});
target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

// 在 setHTML() 中定义自定义 SanitizerConfig
// 这会移除 div、p、button、script 元素，以及任何其他不安全的元素或属性
target.setHTML(unsanitizedString, {
  sanitizer: { removeElements: ["div", "p", "button", "script"] },
});
```

### `setHTML()` 实时示例

此示例提供了在传入不同净化器时调用该方法的“实时”演示。代码定义了一些按钮，你可以分别使用默认净化器和自定义净化器，点击按钮来净化和注入 HTML 字符串。原始字符串和净化后的 HTML 都会被记录下来，以便你查看每种情况下的结果。

#### HTML

HTML 定义了两个用于应用不同净化器的 {{htmlelement("button")}} 元素、另一个用于重置示例的按钮，以及一个用于注入字符串的 {{htmlelement("div")}} 元素。

```html
<button id="buttonDefault" type="button">默认</button>
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

首先，我们定义要净化的字符串，它在所有情况下都相同。该字符串包含 {{htmlelement("script")}} 元素和 `onclick` 处理器，这两者都被视为 XSS 不安全。我们还定义了重新加载按钮的处理器。

```js
// 定义不安全的 HTML 字符串
const unsanitizedString = `
  <div>
    <p>要注入影子 DOM 的段落。
      <button onclick="alert('你点击了按钮！')">点击我</button>
    </p>
    <script src="path/to/a/module.js" type="module"><\/script>
    <p data-id="123">带有 <code>data-</code> 属性的段落</p>
  </div>
`;

const reload = document.querySelector("#reload");
reload.addEventListener("click", () => document.location.reload());
```

接下来，我们为使用默认净化器设置 HTML 的按钮定义点击处理器。该操作应在插入 HTML 字符串之前剔除所有不安全的实体。请注意，你可以在 [`Sanitizer()` 构造函数示例](/zh-CN/docs/Web/API/Sanitizer/Sanitizer#creating_the_default_sanitizer)中看到具体移除了哪些元素。

```js
const defaultSanitizerButton = document.querySelector("#buttonDefault");
defaultSanitizerButton.addEventListener("click", () => {
  // 使用默认净化器设置元素的内容
  target.setHTML(unsanitizedString);

  // 记录净化前和注入后的 HTML
  logElement.textContent =
    "默认净化器：移除 script 元素、onclick 属性、data- 属性\n\n";
  log(`\n未净化：${unsanitizedString}`);
  log(`\n\n已净化：${target.innerHTML}`);
});
```

下一个点击处理器使用只允许 {{htmlelement("div")}}、{{htmlelement("p")}} 和 {{htmlelement("script")}} 元素的自定义净化器来设置目标 HTML。请注意，由于我们使用的是 `setHTML` 方法，`<script>` 也会被移除！

```js
const allowScriptButton = document.querySelector("#buttonAllowScript");
allowScriptButton.addEventListener("click", () => {
  // 使用自定义净化器设置元素的内容
  const sanitizer1 = new Sanitizer({
    elements: ["div", "p", "script"],
  });
  target.setHTML(unsanitizedString, { sanitizer: sanitizer1 });

  // 记录净化前和注入后的 HTML
  logElement.textContent =
    "净化器：{elements: ['div', 'p', 'script']}\n 即使已被允许，script 仍被移除\n";
  log(`\n未净化：${unsanitizedString}`);
  log(`\n\n已净化：${target.innerHTML}`);
});
```

```js hidden
} else {
  log("此浏览器不支持 HTML Sanitizer API。");
  // 提供回退或替代行为
}
```

#### 结果

点击“默认”和“允许脚本”按钮，分别查看默认净化器和自定义净化器的效果。

请注意，由于我们使用的是安全的净化方法，两种情况下 `<script>` 元素和 `onclick` 处理器都会被移除，即使净化器明确允许它们也是如此。不过，`data-` 属性在使用默认净化器时会被移除，而在传入自定义净化器时则会被允许。

{{EmbedLiveSample("setHTML() 实时示例","100","450px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTML()")}} 和 {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}} 和 {{domxref("Document.parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
- [HTML Sanitizer API](/zh-CN/docs/Web/API/HTML_Sanitizer_API)
