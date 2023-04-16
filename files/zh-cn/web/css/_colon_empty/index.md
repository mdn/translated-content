---
title: ':empty'
slug: Web/CSS/:empty
---

{{CSSRef}}

**`:empty`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/CSS/Pseudo-classes)表示没有子元素的任何元素。子元素可以是元素节点或文本（包括空格）。注释、处理指令和 CSS 内容不影响元素是否被认为为空。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-empty.html", "tabbed-shorter")}}

> **备注：** 在[选择器 Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) 中，`:empty` 伪类被更改为像 {{CSSxRef(":-moz-only-whitespace")}} 一样运作，但目前还没有浏览器支持它。

## 语法

```css
:empty {
  /* ... */
}
```

## 示例

### HTML

```html
<div class="box"><!-- 我将呈现为青柠色。 --></div>
<div class="box">I will be pink.</div>
<div class="box">
  <!-- 由于这个注释周围存在空格，所以它将在旧版本的浏览器中呈现为粉色。 -->
</div>
<div class="box">
  <p>
    <!-- 由于这个注释周围存在无法折叠的空格和元素，所以它将在所有浏览器中呈现为粉色。 -->
  </p>
</div>
```

## 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div class="box"><!-- I will be lime --></div>
<div class="box">I will be pink</div>
<div class="box">
    <!-- I will be pink because of the whitespace around this comment -->
</div>
```

### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
```

```css
.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

### 结果

{{EmbedLiveSample("示例", 300, 80)}}

## 无障碍考虑

辅助技术（如屏幕阅读器）无法解析交互内容为空的情况。所有交互内容必须具有可访问的名称，这是通过为交互控件的父元素（如[锚点](/zh-CN/docs/Web/HTML/Element/a)、[按钮](/zh-CN/docs/Web/HTML/Element/button)等）提供文本值来创建的。可访问名称将交互控件暴露给[可访问性树](/zh-CN/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis)，这是一个通信信息有用于辅助技术的 API。

提供交互控件的可访问名称的文本可以使用[一些属性的组合](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)进行隐藏，这些属性可以将其在视觉上从屏幕上移除，但可以被辅助技术解析。这通常用于仅依靠图标来传达目的的按钮。

- [什么是可访问的名称？ | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [隐藏内容以获得更好的辅助功能 | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN 理解 WCAG，指南 2.4 解释](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [理解成功标准 2.4.4 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":-moz-only-whitespace")}} {{Non-standard_Inline}} – The {{glossary("Vendor_Prefix", "prefixed")}} 在[选择器 Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) 中更改的前缀实现。
- {{CSSxRef(":blank")}} {{Experimental_Inline}}
