---
title: font-variant-caps
slug: Web/CSS/font-variant-caps
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS)属性 **`font-variant-caps`** 使你可以控制大写字母特殊字符的使用。

{{EmbedInteractiveExample("pages/css/font-variant-caps.html")}}

如果项目的字体库中包含不同大小的大写字母特殊字符，该属性将选择其中最接近指定大小的字符。例如，如果字体中没有“特小”(petite) 型大写字母，该字符将会被以“小”(small) 型大写字母进行渲染。如果这些字符均不存在，浏览器将用默认大写字符集进行尺寸加工。

字体库中有时会包含无大小写的特殊字符（例如标点符号）的不同写法来适应在文本中临近的大写字母。但是，小型大写字母永远不会被用来加工无大小写的字符。

### 多语言规则

这一属性被用来指定各种语言特定的映射规则。例如：

- 在突厥语系中 - 比如土耳其语（[ISO 639-1](https://zh.wikipedia.org/wiki/ISO_639-1)代码‘tr’）、阿塞拜疆语（[ISO 639-1](https://zh.wikipedia.org/wiki/ISO_639-1)代码‘az’）、克里米亚鞑靼语（[ISO 639-3](https://zh.wikipedia.org/wiki/ISO_639-3)代码‘crh’）、鞑靼语（[ISO 639-1](https://zh.wikipedia.org/wiki/ISO_639-1)代码‘tt’）和巴什基尔语（[ISO 639-1](https://zh.wikipedia.org/wiki/ISO_639-1)代码‘ba’），有两种发音近似的“i”字母（区别在于一种有顶部的“.”，另一种没有），而它们的大小写写法也有区别：一种是`i`/`İ`，另一种是 `ı`/`I`。
- 在德语（[ISO 639-1](https://zh.wikipedia.org/wiki/ISO_639-1)代码‘de’）中，`ß` 的大写可能会被写作`ẞ`（收录于通用字符集 U+1E9E）。
- 在希腊语（[ISO 639-1](https://zh.wikipedia.org/wiki/ISO_639-1)代码‘el’）中，如果整个单词是大写的（`ά`/`Α`），元音将失去重音。（分离字母 eta（`ή`/`Ή`）除外。）除此之外，重音在第一个元音的双元音将失去重音，并被在第二个元音上加上一个变音符（`άι`/`ΑΪ`）.

## 语法

```css
/* Keyword values */
font-variant-caps: normal;
font-variant-caps: small-caps;
font-variant-caps: all-small-caps;
font-variant-caps: petite-caps;
font-variant-caps: all-petite-caps;
font-variant-caps: unicase;
font-variant-caps: titling-caps;

/* Global values */
font-variant-caps: inherit;
font-variant-caps: initial;
font-variant-caps: unset;
```

`font-variant-caps` 属性使用以下列表中的单一关键词确定。在任一使用场景中，如果字体库不支持 OpenType 值，则会被尺寸加工。

### 可选值

- `normal`
  - : 关闭一切特殊字符变体的使用。
- `small-caps`
  - : 允许小型大写字母的使用（OpenType 特性：`smcp`）。小型大写字母指使用大写形式，但尺寸与对应小写字母相同的字母。
- `all-small-caps`
  - : 将大小写字母全部转化为小型大写字母。（OpenType 特性：`c2sc`, `smcp`）。
- `petite-caps`
  - : 允许特小型大写字母的使用（OpenType 特性：`pcap`）。
- `all-petite-caps`
  - : 将大小写字母全部转化为小型大写字母。（OpenType 特性：`c2pc`, `pcap`）。
- `unicase`
  - : 允许将大写字母转化为小型大写字母与普通小写字母的混用（OpenType 特性：`unic`）。
- `titling-caps`
  - : 允许首字母大写（OpenType 特性：`titl`）。大写字母变体字符通常被设计成与用于小写字母。在标题序列中，如果均使用大写字母，可能会带来过于强烈的视觉效果。首字母大写即用来应对这种情况。

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<p class="small-caps">Firefox rocks, small caps!</p>
<p class="normal">Firefox rocks, normal caps!</p>
```

### CSS

```css
.small-caps {
  font-variant-caps: small-caps;
  font-style: italic;
}
.normal {
  font-variant-caps: normal;
  font-style: italic;
}
```

### 结果

{{ EmbedLiveSample('示例') }}

## 无障碍访问风险

当大量文本信息的`font-variant`属性被设置为`all-small-caps`或`all-petite-caps`，将会为认知障碍者（如读写障碍）的阅读带来困难。

- [MDN Understanding WCAG, Guideline 1.4 explanations](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C Understanding WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## 规范

{{cssinfo}}

{{Specifications}}

## 浏览器兼容性

{{Compat}}
