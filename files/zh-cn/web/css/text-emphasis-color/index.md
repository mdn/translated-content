---
title: text-emphasis-color
slug: Web/CSS/text-emphasis-color
l10n:
  sourceCommit: 5f13cbe7517ce96deeb521d4c8e6923266a22913
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`text-emphasis-color`** 设置强调色。这个值也可以使用简写属性 {{cssxref("text-emphasis")}} 来设置。

{{EmbedInteractiveExample("pages/css/text-emphasis-color.html")}}

## 语法

```css
/* 初始值 */
text-emphasis-color: currentcolor;

/* <color> */
text-emphasis-color: #555;
text-emphasis-color: blue;
text-emphasis-color: rgb(90 200 160 / 80%);
text-emphasis-color: transparent;

/* 全局值 */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: revert;
text-emphasis-color: revert-layer;
text-emphasis-color: unset;
```

### 取值

- `<color>`
  - : 指定用作强调色的颜色。如果未定义，该值默认为 `currentcolor`。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置自定义强调色和强调标记

#### CSS

```css
em {
  text-emphasis-color: green;
  text-emphasis-style: "*";
}
```

#### HTML

```html
<p>这是一个示例：</p>

<em>这里有强调标记！</em>
```

#### 结果

{{EmbedLiveSample("设置自定义强调色和强调标记", 450, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("&lt;color&gt;")}} 数据类型
- 其他强调标记相关属性：{{cssxref('text-emphasis-style')}}、{{cssxref('text-emphasis')}} 和 {{cssxref("text-emphasis-position")}}
- 其他颜色相关属性：{{cssxref("color")}}、{{cssxref("background-color")}}、{{cssxref("border-color")}}、{{cssxref("outline-color")}}、{{cssxref("text-emphasis-color")}}、{{cssxref("text-shadow")}}、{{cssxref("caret-color")}} 和 {{cssxref("column-rule-color")}}
