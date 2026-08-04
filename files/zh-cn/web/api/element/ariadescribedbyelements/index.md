---
title: "Element：ariaDescribedByElements 属性"
slug: Web/API/Element/ariaDescribedByElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

{{domxref("Element")}} 接口的 **`ariaDescribedByElements`** 属性是一个数组，其中包含为应用该属性的元素提供无障碍描述的一个或多个元素。无障碍描述与无障碍名称类似（参见 {{domxref("Element/ariaLabelledByElements","ariaLabelledByElements")}}），但提供的信息更详尽。

[`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 页面提供了关于如何使用该属性和对应特性的更多信息。

## 值

一个 {{domxref("HTMLElement")}} 子类数组。这些元素的内部文本可用空格连接，以获得无障碍描述。

读取时，返回的数组为静态且只读。写入时，赋予的数组会被复制；随后对该数组的更改不会影响属性值。

## 描述

该属性是使用 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性设置无障碍描述的灵活替代方案。与 `aria-describedby` 不同，赋给此属性的元素不必具有 [`id`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/id) 属性。

定义了元素的 [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性时，该属性会反映它，但仅限列出的引用 `id` 值与有效作用域内元素匹配的情况。设置此属性会清除对应的属性。有关反射元素引用和作用域的更多信息，请参阅 _属性反射_ 指南中的[反射元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#反射元素引用)。

## 示例

### 获取无障碍描述

本示例展示如何使用 `ariaDescribedByElements` 获取通过 `aria-describedby` 定义的无障碍描述。

#### HTML

HTML 定义了两个 {{htmlelement("span")}} 元素，并在 {{htmlelement("button")}} 的 `aria-describedby` 属性中引用它们的 ID。

```html
<button aria-describedby="trash-desc1 trash-desc2">移至回收站</button>
…
<span id="trash-desc1">回收站内容将在 30 天后永久删除。</span>
<span id="trash-desc2">否则后果自负！</span>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

这里仅隐藏包含无障碍文本的 `<span>` 元素。

```css
span {
  display: none;
}
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

以下代码首先使用 {{domxref("Element.getAttribute()")}} 记录 `aria-describedby` 属性的值（列出引用元素 `id` 值的字符串）。然后检查是否支持 `ariaDescribedByElements`，若支持则记录其值。最后通过遍历返回元素并连接其内部文本，返回无障碍字符串。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const buttonElement = document.querySelector("button");
log(`aria-describedby: ${buttonElement.getAttribute("aria-describedby")}`);
// 检测 ariaDescribedByElements 功能
if ("ariaDescribedByElements" in Element.prototype) {
  const buttonElements = buttonElement.ariaDescribedByElements;
  log(`ariaDescribedByElements: ${buttonElements}`);
  const text = buttonElements.map((e) => e.textContent.trim()).join(" ");
  log(`无障碍描述：${text.trim()}`);
} else {
  log("浏览器不支持 element.ariaDescribedByElements");
}
```

#### 结果

下面的日志显示原始元素引用、关联或返回的元素，以及无障碍描述。

{{EmbedLiveSample("获取无障碍描述","100%","150px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性
- {{domxref("ElementInternals.ariaDescribedByElements")}}
- [反射元素引用](/zh-CN/docs/Web/API/Document_Object_Model/Reflected_attributes#反射元素引用)*属性反射*指南
