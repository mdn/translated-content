---
title: :empty
slug: Web/CSS/:empty
---

{{CSSRef}}

**`:empty`** [CSS](/zh-CN/docs/Web/CSS) [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes)用于选择不包含任何子元素的元素。子元素可以是元素节点或文本（包括空格）。但是注释、处理指令和 CSS {{cssxref("content")}} 不会影响元素是否被认定为空。

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-empty.html", "tabbed-shorter")}}

> [!NOTE]
> 在[选择器 Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) 中，`:empty` 伪类被更改为与 {{CSSxRef(":-moz-only-whitespace")}} 类似一样的行为，但目前还没有浏览器支持它。

## 语法

```css
:empty {
  /* ... */
}
```

## 示例

### HTML

```html
<div class="box"><!-- 它将呈现为青柠色。 --></div>
<div class="box">我将会是粉色。</div>
<div class="box">
  <!-- 由于这个注释周围存在空格，所以它将在旧版本的浏览器中呈现为粉色。 -->
</div>
<div class="box">
  <p>
    <!-- 由于这个注释周围存在无法折叠的空格和元素，所以它将在所有浏览器中呈现为粉色。 -->
  </p>
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

辅助技术（如屏幕阅读器）无法解析交互内容为空的情况。所有交互内容必须具有无障碍名称，这是通过为交互控件的父元素（如[锚点](/zh-CN/docs/Web/HTML/Element/a)、[按钮](/zh-CN/docs/Web/HTML/Element/button)等）提供文本值来创建的。无障碍名称将交互控件暴露给[无障碍树](/zh-CN/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#无障碍_api)，这是一个传达对辅助技术有用的信息的 API。

提供交互控件的无障碍名称的文本可以使用[一些属性的组合](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link)进行隐藏，这些属性可以将其在视觉上从屏幕上移除，但可以被辅助技术解析。这通常用于仅依靠图标来传达目的的按钮。

- [什么是无障碍名称？ | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [隐藏内容以获得更好的辅助功能 | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN 理解 WCAG，指南 2.4 解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [理解成功标准 2.4.4 | W3C 理解 WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef(":-moz-only-whitespace")}} {{Non-standard_Inline}} 是[选择器 Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) 更改的{{glossary("Vendor_Prefix", "前缀")}}实现。
- {{CSSxRef(":blank")}} {{Experimental_Inline}}
