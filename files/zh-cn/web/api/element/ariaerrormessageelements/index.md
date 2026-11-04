---
title: Element：ariaErrorMessageElements 属性
short-title: ariaErrorMessageElements
slug: Web/API/Element/ariaErrorMessageElements
l10n:
  sourceCommit: 3b4a7a32fc2fe8cb6bd9a1e62f4ca52e002599ef
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaErrorMessageElements`** 属性是一个数组，包含为应用了该属性的元素提供错误消息的元素（一个或多个）。

[`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 主题包含关于应当如何使用该特性和属性的更多信息。

## 值

一个由 {{domxref("HTMLElement")}} 的子类组成的数组。
这些元素的内部文本可以用空格连接起来，构成错误消息。

读取时，返回的数组是静态的且只读。
写入时，所赋值的数组会被复制：之后对该数组的更改不会影响属性的值。

## 描述

该属性是使用 [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 特性为元素设置错误消息的一种灵活替代方案。
与 `aria-errormessage` 不同的是，分配给此属性的元素不必具有 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性。

当定义了元素的 [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 特性时，该属性会反映这个特性，但仅限与有效作用域内元素匹配的已列出的引用 `id` 值。
如果设置了该属性，则相应的特性会被清除。
有关反射元素引用和作用域的更多信息，请参见*反射特性*指南中的[反射的元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)。

## 示例

### 带错误消息的邮箱输入

此示例演示如何使用 `aria-errormessage` 为无效邮箱地址的报告设置错误消息，以及如何使用 `ariaErrorMessageElements` 获取和设置该消息。

#### HTML

首先定义一个 HTML 邮箱输入，将其 `aria-errormessage` 特性设置为引用一个 `id` 为 `err1` 的元素。
然后定义一个具有此 id 的 `<span>` 元素，其中包含错误消息。

```html
<p>
  <label for="email">Email address:</label>
  <input type="email" name="email" id="email" aria-errormessage="err1" />
  <span id="err1" class="errormessage">Error: Enter a valid email address</span>
</p>
```

#### CSS

创建一些样式，默认隐藏错误消息，并在元素上设置了 `aria-invalid` 时使其可见并呈现错误样式。

```css
.errormessage {
  visibility: hidden;
}

[aria-invalid="true"] {
  outline: 2px solid red;
}

[aria-invalid="true"] ~ .errormessage {
  visibility: visible;
}
```

#### JavaScript

然后检查输入，并根据 [`typeMismatch`](/zh-CN/docs/Web/API/ValidityState/typeMismatch) 约束违反情况，将 {{domxref("Element/ariaInvalid", "ariaInvalid")}} 设置为 `true` 或 `false`。
`ariaInvalid` 又会反映在 `aria-invalid` 特性中，从而按需隐藏和显示错误。

```js
const email = document.querySelector("#email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.ariaInvalid = true;
  } else {
    email.ariaInvalid = false;
  }
});
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

然后记录 `aria-errormessage` 特性的值、`ariaErrorMessageElements` 以及 `ariaErrorMessageElements` 的内部文本。

```js
log(`aria-errormessage: ${email.getAttribute("aria-errormessage")}`);
// Feature test for ariaErrorMessageElements
if ("ariaErrorMessageElements" in Element.prototype) {
  // Get ariaErrorMessageElements
  const propElements = email.ariaErrorMessageElements;
  log(`ariaErrorMessageElements: ${propElements}`);

  // Accessible text from element inner text
  const text = propElements.map((e) => e.textContent.trim()).join(" ");
  log(`Error message details: ${text}`);
} else {
  log("element.ariaErrorMessageElements: not supported by browser");
}
```

#### 结果

当你输入邮箱地址时，错误文本会一直显示，直到邮箱地址有效为止。
请注意，日志显示了从特性读取的错误消息引用、`ariaErrorMessageElements` 返回的元素，以及该元素的内部文本（即其错误消息）。

{{EmbedLiveSample("Email input with error message","100%","180px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) 特性
- {{domxref("ElementInternals.ariaErrorMessageElements")}}
- *反射特性*指南中的[反射的元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)
