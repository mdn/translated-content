---
title: text-transform
slug: Web/CSS/text-transform
---

{{CSSRef}}

**text-transform** CSS 属性指定如何将元素的文本大写。它可以用于使文本显示为全大写或全小写，也可单独对每一个单词进行操作。

text-transform 属性考虑特定于语言的案例映射规则，如：

- in Turkic languages, like Turkish (`tr`), Azerbaijani (`az`), Crimean Tatar (`crh`), Volga Tatar (`tt`), and Bashkir (`ba`), there are two kinds of i, with and without the dot, and two case pairings: `i`/`İ` and `ı`/`I`.
- In German (`de`), the `ß` becomes `SS` in uppercase.
- In Dutch (`nl`), the `ij` digraph becomes `IJ`, even with `text-transform: capitalize`, which only put the first letter of a word in uppercase.
- In Greek (`el`), vowels lose their accent when the whole word is in uppercase (`ά`/`Α`), except for the disjunctive eta (`ή`/`Ή`). Also, diphthongs with an accent on the first vowel lose the accent and gain a diaeresis on the second vowel (`άι`/`ΑΪ`).
- In Greek (`el`), the lowercase sigma character has two forms: `σ` and `ς`. `ς` is used only when sigma terminates a word. When applying `text-transform: lowercase` to an uppercase sigma (`Σ`), the browser needs to choose the right lowercase form based on context.

在其他一些其他特定的情况下，映射规则不被任何浏览器考虑在内：

- in Gaelic (`ga`), a prefix letter remains in lowercase when the base initial is capitalised, so in this example the `h-` should not be capitalized: `text-transform: uppercase` will change `Meud na h-aplacaid` to `MEUD NA H-APLACAID` which violates the locale orthographic rules, as it ought to be `MEUD NA h-APLACAID.`

语言由 lang HTML 属性或 `xml:lang` XML 属性定义。

对于这些特定情况的支持因浏览器而异，因此请检查[浏览器兼容性表](#浏览器兼容性)。

{{cssinfo}}

## 语法

```css
/* Keyword values */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: full-width;
text-transform: full-size-kana;

/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: revert;
text-transform: revert-layer;
text-transform: unset;
```

### 值

- `capitalize`

  - : 这个关键字强制每个单词的首字母转换为大写。其他的字符保留不变（它们写在元素里的文本保留原始大小写）。字母是 Unicode 字符集或者数字里定义的字符 {{experimental_inline}}；因此单词开头的任何标点符号或者特殊符号将会被忽略。

    Authors should not expect `capitalize` to follow language-specific titlecasing conventions (such as skipping articles in English).

- `uppercase`
  - : 这个关键字强制所有字符被转换为大写。
- `lowercase`
  - : 这个关键字强制所有字符被转换为小写。
- `none`
  - : 这个关键字阻止所有字符的大小写被转换。
- `full-width` {{experimental_inline}}
  - : 这个关键字强制字符 — 主要是表意字符和拉丁文字 — 书写进一个方形里，并允许它们按照一般的东亚文字（比如中文或日文）对齐。

### 形式语法

{{csssyntax}}

## 示例

### `none`

```html
<p>Initial String <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong> </p>
<p>text-transform: none <strong><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span></strong> </p>
```

```css
span {
  text-transform: none;
}
strong { float: right; }
```

This demonstrates no text transformation.

{{ EmbedLiveSample('none', '100%', '100px') }}

### 首字母大写 `capitalize`（普通）

```html
<p>Initial String <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong> </p> <p>text-transform: capitalize <strong><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span></strong> </p>
```

```css
span {
  text-transform: capitalize;
}
strong { float: right; }
```

This demonstrates text capitalization.

{{ EmbedLiveSample('首字母大写 capitalize（普通）', '100%', '100px') }}

### 首字母大写（标点）

```html
<p>Initial String <strong>(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize? ?¡transform!</strong> </p> <p>text-transform: capitalize <strong><span>(this) "is" [a] –short– -test- «for» *the* _css_ ¿capitalize? ?¡transform!</span></strong> </p>
```

```css
span {
  text-transform: capitalize;
}
strong { float: right; }
```

This demostrates how initial punctuations of a word are ignored. The keyword target the first letter, that is the first Unicode character part of the Letter or Number general category.

{{ EmbedLiveSample('首字母大写（标点）', '100%', '100px') }}

### 首字母大写（符号）

```html
<p>Initial String <strong>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</strong> </p> <p>text-transform: capitalize <strong><span>ⓐⓑⓒ (ⓓⓔⓕ) —ⓖⓗⓘ— ⓙkl</span></strong></p>
```

```css
span {
  text-transform: capitalize;
}
strong { float: right; }
```

This demonstrates how initial symbols are ignored. The keyword target the first letter, that is the first Unicode character part of the Letter or Number general category.

{{ EmbedLiveSample('首字母大写（符号）', '100%', '100px') }}

### 首字母大写（荷兰 ij 有向图）

```html
<p>Initial String <strong lang="nl">The Dutch word: "ijsland" starts with a digraph.</strong> </p> <p>text-transform: capitalize <strong><span lang="nl">The Dutch word: "ijsland" starts with a digraph.</span></strong> </p>
```

```css
span {
  text-transform: capitalize;
}
strong { float: right; }
```

This demonstrates how the Dutch _ij_ digraph must be handled like one single letter.

{{ EmbedLiveSample('首字母大写（荷兰 ij 有向图）', '100%', '100px') }}

### 大写字母 `uppercase`（普通）

```html
<p>Initial String <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong> </p> <p>text-transform: uppercase <strong><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span></strong> </p>
```

```css
span {
  text-transform: uppercase;
}
strong { float: right; }
```

This demonstrates transforming the text to uppercase.

{{ EmbedLiveSample('大写字母 uppercase（普通）', '100%', '100px') }}

### 大写字母（希腊元音）

```html
<p>Initial String <strong>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</strong> </p><p>text-transform: uppercase <strong><span>Θα πάμε στο "Θεϊκό φαΐ" ή στη "Νεράιδα"</span></strong> </p>
```

```css
span {
  text-transform: uppercase;
}
strong { float: right; }
```

This demonstrates how Greek vowels except disjunctive _eta_ should have no accent, and the accent on the first vowel of a vowel pair becomes a diaeresis on the second vowel.

{{ EmbedLiveSample('大写字母（希腊元音）', '100%', '100px') }}

### 小写字母 `lowercase`（普通）

```html
<p>Initial String <strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</strong> </p> <p>text-transform: lowercase <strong><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, ...</span></strong> </p>
```

```css
span {
  text-transform: lowercase;
}
strong { float: right; }
```

This demonstrates transforming the text to lowercase.

{{ EmbedLiveSample('小写字母 lowercase（普通）', '100%', '100px') }}

### 小写字母（希腊语 Σ）

```html
<p>Initial String <strong>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</strong> </p> <p>text-transform: lowercase <strong><span>Σ IS A greek LETTER that appears SEVERAL TIMES IN ΟΔΥΣΣΕΥΣ.</span></strong> </p>
```

```css
span {
  text-transform: lowercase;
}
strong { float: right; }
```

This demonstrates how the Greek character sigma (`Σ`) is transformed into the regular lowercase sigma (`σ`) or the word-final variant (`ς`), according the context.

{{ EmbedLiveSample('小写字母（希腊语 Σ）', '100%', '100px') }}

### 全宽度 `full-width`（普通）

```html
<p>Initial String <strong>0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</strong> </p> <p>text-transform: full-width <strong><span>0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&()*+,-./:;<=>?@{|}~</span></strong> </p>
```

```css
span {
  text-transform: full-width;
}
strong { width: 100%; float: right; }
```

Some characters exists in two formats, normal width and a full-width, with different Unicode code points. The full-width version is used to mix them smoothly with Asian ideographic characters.

{{ EmbedLiveSample('全宽度 full-width（普通）', '100%', '175px') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
