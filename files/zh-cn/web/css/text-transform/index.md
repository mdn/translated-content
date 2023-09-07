---
title: text-transform
slug: Web/CSS/text-transform
---

{{CSSRef}}

**text-transform** CSS 属性指定如何将元素的文本大写。它可以用于使文本显示为全大写或全小写，也可单独对每一个单词进行操作。

{{EmbedInteractiveExample("pages/css/text-transform.html")}}

`text-transform` 属性考虑特定于语言的案例映射规则，如：

- 在突厥语系中，如土耳其语（`tr`）、阿塞拜疆语（`az`）、克里米亚鞑靼语（`crh`）、伏尔加鞑靼语（`tt`）和巴什基尔语（`ba`），有带点和不带点的两种 `i`，以及两种情况的配对： `i`/`İ` 和 `ı`/`I`。
- 在德语中（`de`），`ß` 的大写形式为 `SS`。
- 在荷兰语中（`nl`），`ij` 双字母变为 `IJ`，即使设置了 `text-transform: capitalize`，该属性只大写单词的第一个字母。
- 在希腊语中（`el`），当整个单词是大写的时候，元音会失去重音（`ά`/`Α`），除了不连贯的 eta（`ή`/`Ή`）。另外，在第一个元音上有重音的双元音会失去重音，在第二个元音上获得重音（`άι`/`ΑΪ`）。
- 在希腊语中（`el`），小写的西格玛字符有两种形式：`σ` 和 `ς`。`ς` 只在西格玛结束一个词的时候使用。当对大写西格玛（`Σ`）应用 `text-transform: lowercase` 时，浏览器需要根据上下文选择正确的小写形式。
- 在爱尔兰语中（`ga`），某些前缀字母在基本首字母大写时仍为小写，因此，例如 `text-transform: uppercase` 会将 `ar aon tslí` 变为 `AR AON tSLÍ`，而不是像人们所期望的那样，变为 `AR AON TSLÍ`（仅在 Firefox）。在某些情况下，大写字母也会被删除：`an t-uisce` 转换为 `AN tUISCE`（并且连字符被 `text-transform: lowercase` 正确地重新插入）。

语言由 HTML [`lang`](/zh-CN/docs/Web/HTML/Global_attributes/lang) 属性或 XML [`xml:lang`](/zh-CN/docs/Web/SVG/Attribute/xml:lang) 属性定义。

> **备注：** 特定情况的支持因浏览器而异，因此请检查[浏览器兼容性表格](#浏览器兼容性)。

## 语法

```css
/* 关键字值 */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;

/* 全局值 */
text-transform: inherit;
text-transform: initial;
text-transform: revert;
text-transform: revert-layer;
text-transform: unset;
```

- `capitalize`

  - : 这个关键字强制每个单词的*首*字母转换为大写。其他的字符保留不变（它们处于元素的文本保留原始大小写）。字母是 Unicode 字符集或者数字里定义的字符 {{experimental_inline}}；因此单词开头的任何标点符号或者特殊符号将会被忽略。

    > **备注：** 作者不应期望 `capitalize` 遵循特定语言的标题大小写惯例（如跳过英文的文章）。

    > **备注：** 在 CSS 1 和 CSS 2.1 中，`capitalize` 关键字没有得到充分说明。这导致不同的浏览器在计算第一个字母的方式上存在差异（Firefox 认为 `-` 和 `_` 是字母，但其他浏览器不这样认为。Webkit 和 Gecko 都错误地认为基于字母的符号如 `ⓐ` 是真正的字母）。通过精确定义正确的行为，CSS Text Level 3 清除了这种混乱。浏览器兼容性表中的 `capitalize` 一行包含了不同引擎开始支持这一精确定义的行为的版本。

- `uppercase`
  - : 这个关键字强制所有字符被转换为大写。
- `lowercase`
  - : 这个关键字强制所有字符被转换为小写。
- `none`
  - : 这个关键字阻止所有字符的大小写被转换。
- `full-width`
  - : 是一个关键字，它强制将字符（主要是表意文字和拉丁文字））--写在一个正方形内，使它们能够在通常的东亚文字（如中文或日文）中对齐。
- `full-size-kana`
  - : 通常用于 {{htmlelement("ruby")}} 注释文本，该关键字将所有小假名字符转换为等效的全尺寸假名，以补偿在 ruby 中通常使用的小字体的可读性问题。

## 无障碍考虑

大段将文字 `text-transform` 值设置为 `uppercase`，对于有认知障碍的人（比如阅读障碍）来说可能难以阅读。

- [MDN：理解 WCAG，条例 1.4 的解释](/zh-CN/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [W3C：理解 WCAG 2.1](https://www.w3.org/TR/WCAG21/#visual-presentation)

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用“none”

```html
<p>
  原始文字
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: none
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: none;
}
strong {
  float: right;
}
```

这个示例展示了没有文字转换的情况。

{{ EmbedLiveSample('使用“none”', '100%', '100px') }}

### 使用“capitalize”（一般情况）

```html
<p>
  原始文字
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

这个示例展示了首字母大写的情况。

{{ EmbedLiveSample('使用“capitalize”（一般情况）', '100%', '100px') }}

### 使用“capitalize”（标点）

```html
<p>
  原始文字
  <strong
    >(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize?
    ?¡transform!</strong
  >
</p>
<p>
  text-transform: capitalize
  <strong
    ><span
      >(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize?
      ?¡transform!</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

这个示例展示了一个词的初始标点是如何被忽略的。关键字的目标是第一个字母，也就是字母或数字总类中的第一个 Unicode 字符部分。

{{ EmbedLiveSample('使用“capitalize”（标点）', '100%', '100px') }}

### 使用“capitalize”（符号）

```html
<p>
  原始文字
  <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong>
</p>
<p>
  text-transform: capitalize
  <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong>
</p>
```

```css
span {
  text-transform: capitalize;
}
strong {
  float: right;
}
```

这个示例展示了初始符号是如何被忽略的。关键字的目标是第一个字母，也就是字母或数字总类中的第一个 Unicode 字符部分。

{{ EmbedLiveSample('使用“capitalize”（符号）', '100%', '100px') }}

### 使用“capitalize”（荷兰语 ij 双字母字符）

```html
<p>
  原始文字
  <strong lang="nl">The Dutch word: "ijsland" starts with a digraph.</strong>
</p>
<p>
  text-transform: capitalize
  <strong
    ><span lang="nl"
      >The Dutch word: "ijsland" starts with a digraph.</span
    ></strong
  >
</p>
```

这个示例展示了荷兰语双字母字符 _ij_ 必须像一个单一的字母一样处理。

{{ EmbedLiveSample('使用“capitalize”（荷兰语 ij 双字母字符）', '100%', '100px') }}

### 使用“uppercase”（一般情况）

```html
<p>
  原始文字
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

这个示例展示了如何将文本转换为大写字母。

{{ EmbedLiveSample('使用“uppercase”（一般情况）', '100%', '100px') }}

### 使用“uppercase”（希腊语元音）

```html
<p>
  原始文字
  <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong>
</p>
<p>
  text-transform: uppercase
  <strong
    ><span lang="el">Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong
  >
</p>
```

```css
span {
  text-transform: uppercase;
}
strong {
  float: right;
}
```

这个示例展示了希腊元音除了不连读的 _eta_ 之外，应该没有重音，而元音对中第一个元音的重音变成了第二个元音的重音。

{{ EmbedLiveSample('使用“uppercase”（希腊语元音）', '100%', '100px') }}

### 使用“lowercase”（一般情况）

```html
<p>
  原始文字
  <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit…</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit…</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

这个示例展示了如何将文本转换为小写字母。

{{ EmbedLiveSample('使用“lowercase”（一般情况）', '100%', '100px') }}

### 使用“lowercase”（希腊语 Σ）

```html
<p>
  原始文字
  <strong>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</strong>
</p>
<p>
  text-transform: lowercase
  <strong
    ><span
      >Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</span
    ></strong
  >
</p>
```

这个示例展示了希腊字母西格玛（`Σ`）是如何根据上下文转化为普通小写西格玛（`σ`）或词尾变体（`ς`）的。

{{ EmbedLiveSample('使用“lowercase”（希腊语 Σ）', '100%', '100px') }}

### 使用“lowercase”（立陶宛语）

```html
<p>
  原始文字
  <strong>Ĩ is a Lithuanian LETTER as is J́</strong>
</p>
<p>
  text-transform: lowercase
  <strong><span lang="lt">Ĩ is a Lithuanian LETTER as is J́</span></strong>
</p>
```

```css
span {
  text-transform: lowercase;
}
strong {
  float: right;
}
```

这个示例展示了立陶宛语字母 `Ĩ` 和 `J́` 在转换为小写时保持上方的小点。

{{ EmbedLiveSample('使用“lowercase”（立陶宛语）', '100%', '100px') }}

### 使用“full-width”（一般情况）

```html
<p>
  原始文字
  <strong
    >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</strong
  >
</p>
<p>
  text-transform: full-width
  <strong
    ><span
      >0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</span
    ></strong
  >
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

有些字符有两种格式：正常宽度和全宽度，它们具有不同的 Unicode 编码点。全宽版本可以用来将它们与亚洲的表意文字顺利混合。

{{ EmbedLiveSample('使用“full-width”（一般情况）', '100%', '175px') }}

### 使用“full-width”（日语半角片假名）

```html
<p>
  原始文字
  <strong>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</strong>
</p>
<p>
  text-transform: full-width
  <strong><span>ｳｪﾌﾞﾌﾟﾛｸﾞﾗﾐﾝｸﾞの勉強</span></strong>
</p>
```

```css
span {
  text-transform: full-width;
}
strong {
  width: 100%;
  float: right;
}
```

日语的半宽片假名被用来在 8 位字符编码中表示片假名。与普通的（全宽）片假名字符不同，一个带有 dakuten（声母标记）的字母被表示为两个码点，即字母的主体和 dakuten。在将这些字符转换为全宽时，`full-width` 将它们合并为一个代码点。

{{ EmbedLiveSample('使用“full-width”（日语半角片假名）', '100%', '175px') }}

### 使用“full-size-kana”

```html
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
<p>ァィゥェ ォヵㇰヶ ㇱㇲッㇳ ㇴㇵㇶㇷ ㇸㇹㇺャ ュョㇻㇼ ㇽㇾㇿヮ</p>
</p>
```

```css
p:nth-of-type(2) {
  text-transform: full-size-kana;
}
```

{{ EmbedLiveSample('使用“full-size-kana”', '100%', '175px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("font-variant")}}
