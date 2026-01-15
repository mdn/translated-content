---
title: class
slug: Web/HTML/Reference/Global_attributes/class
---

[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes) **class** 的值是一个以空格分隔的元素的类名（classes）列表，它允许 CSS 和 Javascript 通过类选择器 ([class selectors](/zh-CN/docs/Web/CSS/Reference/Selectors/Class_selectors)) 或 DOM 方法 ( {{domxref("document.getElementsByClassName")}}) 来选择和访问特定的元素。

{{InteractiveExample("HTML Demo: class", "tabbed-standard")}}

```html interactive-example
<p>Narrator: This is the beginning of the play.</p>

<p class="note editorial">Above point sounds a bit obvious. Remove/rewrite?</p>

<p>Narrator: I must warn you now folks that this beginning is very exciting.</p>

<p class="note">[Lights go up and wind blows; Caspian enters stage right]</p>
```

```css interactive-example
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  background: rgb(255, 0, 0, 0.25);
  padding: 10px;
}

.editorial:before {
  content: "Editor: ";
}
```

尽管对 class 的命名没有要求，但 web 开发者最好使用可以表达元素语义目的的名称，而不是描述元素展现的名称（即使一个元素是斜体，但是 class 的命名也不应该是 italics）。**语义化**命名即使在页面展现发生改变时仍能合乎逻辑。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所有[全局属性](/zh-CN/docs/Web/HTML/Reference/Global_attributes)。
