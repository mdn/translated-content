---
title: line-break
slug: Web/CSS/Reference/Properties/line-break
---

设置 CSS 属性 **`line-break`** 可以用来处理如何断开（break lines）带有标点符号的中文、日文或韩文（CJK）文本的行。

```css
/* Keyword values */
line-break: auto;
line-break: loose;
line-break: normal;
line-break: strict;
line-break: anywhere;

/* Global values */
line-break: inherit;
line-break: initial;
line-break: unset;
```

{{cssinfo}}

## 语法

### 值

- `auto`
  - : 使用默认的断行规则分解文本。
- `loose`
  - : 使用尽可能松散（least restrictive）的断行规则分解文本。一般用于短行的情况，如报纸。
- `normal`
  - : 使用最一般（common）的断行规则分解文本。
- `strict`
  - : 使用最严格（stringent）的断行原则分解文本。
- `anywhere`
  - : 在每个印刷字符单元（typographic character unit）的周围，都有一个自动换行（soft wrap）的机会，包括任何标点符号（punctuation character）或是保留的空白字符（preserved white spaces），或是单词之间。但忽略任何用于阻止换行的字符，即使是来自 GL、WJ 或 ZWJ 字符集的字符，或是由 word-break 属性强制的字符。不同的换行机会拥有相同的优先级。也不应用断字符（hyphenation，可能是 "-"）。

    英文原文：There is a soft wrap opportunity around every typographic character unit, including around any punctuation character or preserved white spaces, or in the middle of words, disregarding any prohibition against line breaks, even those introduced by characters with the GL, WJ, or ZWJ character class or mandated by the word-break property. The different wrapping opportunities must not be prioritized. Hyphenation is not applied.

### 正式语法

{{csssyntax}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
