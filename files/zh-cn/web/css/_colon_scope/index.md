---
title: :scope
slug: Web/CSS/:scope
l10n:
  sourceCommit: 88930816e169c5b51afdfcd22c3b2c54383a22b7
---

{{CSSRef}}

**`:scope`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)表示作为选择器要匹配的作为参考点或作用域的元素。

```css
/* 选择一个限制作用域的元素 */
:scope {
  background-color: lime;
}
```

`:scope` 匹配的元素取决于它的使用上下文：

- 当在样式表的根级别使用时，`:scope` 等效于 {{cssxref(":root")}}——在常规 HTML 文档中匹配 {{htmlelement("html")}} 元素。
- 当在 {{cssxref("@scope")}} 块中使用时，`:scope` 匹配块所定义的作用域的根。它提供了一种从 `@scope` 块内部应用样式到作用域的根的方法。
- 当在 DOM API 调用（例如 {{domxref("Element.querySelector", "querySelector()")}}、{{domxref("Element.querySelectorAll", "querySelectorAll()")}}、{{domxref("Element.matches", "matches()")}} 或 {{domxref("Element.closest()")}}）中使用时，`:scope` 匹配调用此类方法的元素。

## 语法

```css
:scope {
  /* ... */
}
```

## 示例

### 使用 `:scope` 来代替 `:root`

此示例展示了当在样式表的根级别使用时，`:scope` 等效于 `:root`。在当前示例中，提供的 CSS 会将 `<html>` 元素的背景颜色设置为橙色。

#### HTML

```html
<html></html>
```

#### CSS

```css
:scope {
  background-color: orange;
}
```

#### 结果

{{EmbedLiveSample("使用 :scope 来代替 :root", "100%", 50)}}

### 使用 `:scope` 来为 `@scope` 块的作用域的根元素设置样式

在此示例中，我们使用两个单独的 `@scope` 块来匹配 `.light-scheme` 和 `.dark-scheme` 类中的链接。请注意，`:scope` 用于选择作用域的根元素并为其设置样式。在此示例中，作用域的根是应用了这些类的 {{htmlelement("div")}} 元素。

#### HTML

```html
<div class="light-scheme">
  <p>
    MDN 涵盖了很多有关
    <a href="/zh-CN/docs/Web/HTML">HTML</a>、<a href="/zh-CN/docs/Web/CSS"
      >CSS</a
    >
    和
    <a href="/zh-CN/docs/Web/JavaScript">JavaScript</a> 的信息。
  </p>
</div>

<div class="dark-scheme">
  <p>
    MDN 涵盖了很多有关
    <a href="/zh-CN/docs/Web/HTML">HTML</a>、<a href="/zh-CN/docs/Web/CSS"
      >CSS</a
    >
    和
    <a href="/zh-CN/docs/Web/JavaScript">JavaScript</a> 的信息。
  </p>
</div>
```

#### CSS

```css hidden
div {
  padding: 10px;
}
```

```css
@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}
```

#### 结果

{{EmbedLiveSample("使用 :scope 来为 @scope 块的作用域的根元素设置样式", "100%", 150)}}

### 在 JavaScript 中使用 `:scope`

此示例演示了如何在 JavaScript 中使用 `:scope` 伪类。如果你需要获取已获取的 {{domxref("Element")}} 的直接后代，这可能会很有用。

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
<p>选择的元素 id：<span id="results"></span></p>
```

#### JavaScript

```js
const context = document.getElementById("context");
const selected = context.querySelectorAll(":scope > div");

document.getElementById("results").innerHTML = Array.prototype.map
  .call(selected, (element) => `#${element.getAttribute("id")}`)
  .join("、");
```

#### 结果

`context` 的作用域是 [`id`](/zh-CN/docs/Web/HTML/Global_attributes#id) 为 `context` 的元素。所选元素是此上下文的直接子元素——`element-1` 和 `element-2`——但不包括它们的后代。

{{EmbedLiveSample('在 JavaScript 中使用 :scope')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@scope")}} [at 规则](/zh-CN/docs/Web/CSS/At-rule)
- {{cssxref(":root")}} [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)
- [使用选择器定位 DOM 元素](/zh-CN/docs/Web/API/Document_Object_Model/Locating_DOM_elements_using_selectors)
- {{domxref("Element.querySelector()")}} 和 {{domxref("Element.querySelectorAll()")}}
- {{domxref("Document.querySelector()")}} 和 {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} 和 {{domxref("DocumentFragment.querySelectorAll()")}}
