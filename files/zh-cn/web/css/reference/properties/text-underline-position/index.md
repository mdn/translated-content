---
title: text-underline-position
slug: Web/CSS/Reference/Properties/text-underline-position
---

当 {{cssxref("text-decoration")}}属性的值设置为 `underline` 之后，可以用 **`text-underline-position`** 属性为其设置下划线的位置。

```css
/* 只设置一个属性值 */
text-underline-position: auto;
text-underline-position: under;
text-underline-position: left;
text-underline-position: right;

/* 设置多个属性值 */
text-underline-position: under left;
text-underline-position: right under;

/* 全局属性值 */
text-underline-position: inherit;
text-underline-position: initial;
text-underline-position: unset;
```

{{cssinfo}}

## 语法

### 属性值

- `auto`
  - : {{glossary("user agent", "用户代理")}} 会根据自己的算法来确认下划线是放在字母基线上还是 放在字母基线下方。
- `under`
  - : 强制下划线的位置为字母基线的下方，在这个位置，下划线不会穿过任何字母，这样能确保数学方程式或者化学式的下标不会被下划线阻挡。
- `left`
  - : 在垂直排版模式下，使下划线的位置在文字的左侧，在水平排版模式下，和 `under` 相同。
- `right`
  - : 在垂直排版模式下，使下划线的位置在文字的右侧，在水平排版模式下，和 `under` 相同。
- `auto-pos` {{non-standard_inline}}
  - : `auto`的同义词，应使用 `auto`。
- `above` {{non-standard_inline}}
  - : 强制下划线放置于文本上面。当使用东亚文字时，此效果和使用 `auto` 相同。
- `below` {{non-standard_inline}}
  - : 强制下划线放置于文本下面。当使用字母文字的时候，此效果和使用 `auto` 相同。

### 正式语法

{{csssyntax}}

## 示例

由于 `text-underline-position` 属性可以继承，且无法用 {{cssxref("text-decoration")}} 简写属性重置，所以应当在全局级别设置其值。比如，`under` 值对一篇包括大量使用下标的数学或者化学公式的文档是非常有用的。

```css
:root {
  text-underline-position: under;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{cssxref("text-decoration")}} 属性是大多数作为设置 text-decoration 属性的简写形式，包括 {{cssxref("text-decoration-line")}}， {{cssxref("text-decoration-color")}}，和{{cssxref("text-decoration-style")}}。但是，text-decoration 不会设置 `text-underline-position`。
- Microsoft [non-standard values documentation](http://msdn.microsoft.com/en-us/library/ie/ms531176%28v=vs.85%29.aspx)
