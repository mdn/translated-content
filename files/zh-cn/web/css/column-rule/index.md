---
title: column-rule
slug: Web/CSS/column-rule
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) `column-rule` [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)可以在多列布局中设定分割线的宽度、样式和颜色。

{{EmbedInteractiveExample("pages/css/column-rule.html")}}

该[简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)使用简单方便的声明形式将各个 `column-rule-*` 属性放在了一起：{{Cssxref("column-rule-width")}}、{{Cssxref("column-rule-style")}} 和 {{Cssxref("column-rule-color")}}。

> [!NOTE]
> 和所有简写属性一样，任何没有指定的单独值会设置为相应初始值（可能会覆盖非简写属性设置的值）。

## 语法

```css
column-rule: dotted;
column-rule: solid 8px;
column-rule: solid blue;
column-rule: thick inset blue;

/* 全局值 */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### 取值

`column-rule` 属性可以按任何顺序指定为下面列出的一个、两个或三个值。

- `<'column-rule-width'>`
  - : 定义为 {{cssxref("&lt;length&gt;")}} 或是 `thin`、`medium`、`thick` 关键字的其中一个。请参阅 {{cssxref("border-width")}}。
- `<'column-rule-style'>`
  - : 请参阅 {{cssxref("border-style")}} 以获取可能的值和详细信息。
- `<'column-rule-color'>`
  - : 一个 {{cssxref("&lt;color&gt;")}} 值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

### 示例

### 示例一

```css
/* 与 "medium dotted currentcolor" 相同 */
p.foo {
  column-rule: dotted;
}
/* 与 "medium solid blue" 相同 */
p.bar {
  column-rule: solid blue;
}
/* 与 "8px solid currentcolor" 相同 */
p.baz {
  column-rule: solid 8px;
}
p.abc {
  column-rule: thick inset blue;
}
```

### 示例二

#### HTML

```html
<p class="content-box">
  This is a bunch of text split into three columns. Take note of how the
  `column-rule` property is used to adjust the style, width, and color of the
  rule that appears between the columns.
</p>
```

#### CSS

```css
.content-box {
  padding: 0.3em;
  background: #ff7;
  column-count: 3;
  column-rule: inset 2px #33f;
}
```

#### 结果

{{EmbedLiveSample('示例二')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [多列布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- {{CSSXref("column-rule-style")}}
- {{CSSXref("column-rule-width")}}
- {{CSSXref("column-rule-color")}}
