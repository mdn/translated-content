---
title: Element：ariaDetailsElements 属性
short-title: ariaDetailsElements
slug: Web/API/Element/ariaDetailsElements
l10n:
  sourceCommit: 3b4a7a32fc2fe8cb6bd9a1e62f4ca52e002599ef
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaDetailsElements`** 属性是一个数组，包含为应用了该属性的元素提供无障碍详情的元素（一个或多个）。
无障碍详情类似于无障碍描述（参见 {{domxref("Element/ariaDescribedByElements","ariaDescribedByElements")}}），但提供更详细的信息。

[`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 主题包含关于应当如何使用该特性和属性的更多信息。

## 值

一个由 {{domxref("HTMLElement")}} 的子类组成的数组。
这些元素的内部文本可以用空格连接起来，构成无障碍详情。

读取时，返回的数组是静态的且只读。
写入时，所赋值的数组会被复制：之后对该数组的更改不会影响属性的值。

## 描述

该属性是使用 [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 特性设置无障碍详情信息的一种灵活替代方案。
与 `aria-details` 不同的是，分配给此属性的元素不必具有 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性。

当定义了元素的 [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 特性时，该属性会反映这个特性，但仅限与有效作用域内元素匹配的已列出的引用 `id` 值。
如果设置了该属性，则相应的特性会被清除。
有关反射元素引用和作用域的更多信息，请参见*反射特性*指南中的[反射的元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)。

## 示例

### 获取无障碍详情

此示例演示如何使用 `ariaDetailsElements` 获取在 HTML 中使用 `aria-details` 特性定义的信息。

#### HTML

HTML 定义了两个 {{htmlelement("span")}} 元素，并在一个 {{htmlelement("button")}} 的 `aria-details` 特性中引用它们的 id。

```html
<button aria-details="details1 details2">Button text</button>
…
<span id="details1">Details 1 information about the element.</span>
<span id="details2">Details 2 information about the element.</span>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow-x: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

下面的代码首先使用 {{domxref("Element.getAttribute()")}} 记录 `aria-details` 特性的值（一个列出所引用元素 `id` 值的字符串）。
然后检查是否支持 `ariaDetailsElements` 属性，如果支持，则记录其值。
最后返回无障碍字符串，该字符串通过遍历返回的元素并拼接它们的内部文本计算得出。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const buttonElement = document.querySelector("button");
log(`aria-details: ${buttonElement.getAttribute("aria-details")}`);
// Feature test for ariaDetailsElements
if ("ariaDetailsElements" in Element.prototype) {
  // Get ariaDetailsElements
  const buttonElements = buttonElement.ariaDetailsElements;
  log(`ariaDetailsElements: ${buttonElements}`);

  // Accessible details from ariaDetailsElements
  const text = buttonElements.map((e) => e.textContent.trim()).join(" ");
  log(`Accessible details: ${text.trim()}`);
} else {
  log("element.ariaDetailsElements: not supported by browser");
}
```

#### 结果

下方的日志显示了原始的元素引用、关联/返回的元素，以及无障碍详情。

{{EmbedLiveSample("Get the accessible details","100%","150px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`aria-details`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 特性
- {{domxref("ElementInternals.ariaDetailsElements")}}
- *反射特性*指南中的[反射的元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)
