---
title: Element：ariaControlsElements 属性
short-title: ariaControlsElements
slug: Web/API/Element/ariaControlsElements
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaControlsElements`** 属性是一个数组，包含由应用了该属性的元素所控制的元素。
例如，可以在 [combobox](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) 上设置此属性以指示它弹出的元素，或者在 [`scrollbar`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) 上设置以指示它所控制元素的 ID。

[`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 主题包含关于应当如何使用该特性和属性的更多信息。

## 值

一个由 {{domxref("HTMLElement")}} 的子类组成的数组，表示由此元素控制的元素。

读取时，返回的数组是静态的且只读。
写入时，所赋值的数组会被复制：之后对该数组的更改不会影响属性的值。

## 描述

该属性是使用 [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 特性设置受控元素的一种灵活替代方案。
与 `aria-controls` 不同的是，分配给此属性的元素不必具有 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性。

当定义了 [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 特性时，该属性会反映这个特性，但仅限与有效作用域内元素匹配的已列出的引用 `id` 值。
如果设置了该属性，则相应的特性会被清除。
有关反射元素引用和作用域的更多信息，请参见*反射特性*指南中的[反射的元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)。

## 示例

### 获取受控元素

此示例演示如何使用 `ariaControlsElements` 获取通过 `aria-controls` 设置的受控元素。

#### HTML

HTML 首先定义了一个 {{htmlelement("button")}} 元素和两个由它控制的 {{htmlelement("div")}} 元素：`panel1` 和 `panel2`。
对受控面板的引用列在按钮的 `aria-controls` 特性中。

```html
<button id="toggleButton" aria-controls="panel1 panel2" aria-expanded="false">
  Show Details
</button>

<div class="panel" id="panel1" aria-hidden="true">
  <p>Panel1 opened/closed by button.</p>
</div>

<div class="panel" id="panel2" aria-hidden="true">
  <p>Panel2 opened/closed by button.</p>
</div>
```

```css
.panel {
  display: none; /* Initially hidden */
  border: 1px solid #cccccc;
  padding: 5px;
  margin-top: 5px;
}
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

#### JavaScript

代码首先根据按钮的 [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 特性设置面板的显示或隐藏切换。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const toggleButton = document.querySelector("#toggleButton");
const panel1 = document.querySelector("#panel1");
const panel2 = document.querySelector("#panel2");

toggleButton.addEventListener("click", () => {
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

  toggleButton.setAttribute("aria-expanded", !isExpanded);
  panel1.style.display = isExpanded ? "none" : "block";
  panel1.setAttribute("aria-hidden", isExpanded); // true when hidden, false when shown.

  panel2.style.display = isExpanded ? "none" : "block";
  panel2.setAttribute("aria-hidden", isExpanded); // true when hidden, false when shown.
});
```

接着，示例使用 {{domxref("Element.getAttribute()")}} 获取 `aria-controls` 特性的值（一个列出所引用元素 `id` 值的字符串）。
然后检查是否支持 `ariaControlsElements` 属性，如果支持，则记录其值。
最后返回并记录每个受控元素的内部文本。

```js
log(`aria-controls: ${toggleButton.getAttribute("aria-controls")}`);
// Feature test for ariaControlsElements
if ("ariaControlsElements" in Element.prototype) {
  // Get ariaControlsElements
  const controlledElements = toggleButton.ariaControlsElements;
  log(`ariaControlsElements: ${controlledElements}`);

  // List innerText for each of the ariaControlsElements
  controlledElements.forEach((controlled) => {
    log(` Controlled element text: ${controlled.textContent.trim()}`);
  });
} else {
  log("element.ariaControlsElements: not supported by browser");
}
```

#### 结果

点击下方的按钮来显示和隐藏面板。
日志中显示了原始的元素引用、关联/返回的元素，以及每个元素的内部文本。

{{EmbedLiveSample("Get the controlled elements","100%","280px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`aria-controls`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 特性
- {{domxref("ElementInternals.ariaControlsElements")}}
- *反射特性*指南中的[反射的元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)
