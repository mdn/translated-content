---
title: ":scope"
slug: Web/CSS/:scope
---

{{CSSRef}}

**`:scope`** 属于 [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)，它表示作为选择器要匹配的参考点的元素。

```css
/* Selects a scoped element */
:scope {
  background-color: lime;
}
```

当前，在样式表中使用时，`:scope` 等效于 {{cssxref(":root")}}，因为目前尚无一种方法来显式建立作用域元素。当从 DOM API 使用，如（{{domxref("Element.querySelector", "querySelector()")}}, {{domxref("Element.querySelectorAll", "querySelectorAll()")}}, {{domxref("Element.matches", "matches()")}}, 或 {{domxref("Element.closest()")}}）, `:scope` 匹配你调用 API 的元素。

## 用法

{{csssyntax}}

## 示例

### Identity match

在这个简单的示例中，我们演示了调用 {{domxref("Element.matches()")}} 方法中使用 `:scope` 伪类来匹配调用它的元素。

#### JavaScript

```js
let paragraph = document.getElementById("para");
let output = document.getElementById("output");

if (paragraph.matches(":scope")) {
  output.innerText = "Yep, the element is its own scope as expected!";
}
```

#### HTML

```html
<p id="para">
  This is a paragraph. It is not an interesting paragraph. Sorry about that.
</p>
<p id="output"></p>
```

#### 结果

{{ EmbedLiveSample('Identity_match') }}

### Direct children

当需要获取已检索到的的直接后代元素时，`:scope` 伪类很有用。

#### JavaScript

```js
var context = document.getElementById("context");
var selected = context.querySelectorAll(":scope > div");

document.getElementById("results").innerHTML = Array.prototype.map
  .call(selected, function (element) {
    return "#" + element.getAttribute("id");
  })
  .join(", ");
```

#### HTML

```html
<div id="context">
  <div id="element-1">
    <div id="element-1.1"></div>
    <div id="element-1.2"></div>
  </div>
  <div id="element-2">
    <div id="element-2.1"></div>
  </div>
</div>
<p>
  Selected elements ids :
  <span id="results"></span>
</p>
```

#### 结果

{{ EmbedLiveSample('Direct_children') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":root")}} 与 {{cssxref("Pseudo-classes")}}
- [使用选择器定位 DOM 元素](/zh-CN/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}} 与 {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} 与 {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} 与 {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} 与 {{domxref("ParentNode.querySelectorAll()")}}
