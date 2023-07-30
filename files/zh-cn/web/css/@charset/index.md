---
title: "@charset"
slug: Web/CSS/@charset
---

{{CSSRef}}

## 概述

**`@charset`** [CSS](/zh-CN/docs/Web/CSS) [@规则](/zh-CN/docs/CSS/At-rule)指定样式表中使用的字符编码。它必须是样式表中的第一个元素，而前面不得有任何字符。因为它不是一个[嵌套语句](/zh-CN/docs/Web/CSS/Syntax#css_语句)，所以不能在[@规则](/zh-CN/docs/CSS/At-rule)[条件组](/zh-CN/docs/Web/CSS/At-rule#条件规则组)中使用。如果有多个 **`@charset`** [@规则](/zh-CN/docs/CSS/At-rule)被声明，只有第一个会被使用，而且不能在 HTML 元素或 HTML 页面的字符集相关 {{ HTMLElement("style") }} 元素内的样式属性内使用。

此 [@规则](/zh-CN/docs/CSS/At-rule)在某些 CSS 属性中使用非 ASCII 字符时非常有用，例如 {{ cssxref("content") }}。

在样式表中有多种方法去声明字符编码，浏览器会按照以下顺序尝试下边的方法（一旦找到就停止并得出结果）：

1. 文件的开头的 [Unicode byte-order](https://zh.wikipedia.org/wiki/字节顺序标记) 字符值。
2. 由 Content-Type：HTTP header 中的 charset 属性给出的值或用于提供样式表的协议中的等效值。
3. `CSS` [@规则](/zh-CN/docs/CSS/At-rule) `@charset`。
4. 使用参考文档定义的字符编码：{{ HTMLElement("link") }} 元素的 charset 属性。该方法在 HTML5 标准中已废除，无法使用。
5. 假设文档是 UTF-8。

## 语法

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### 语法格式

```css
@charset "<charset>";
```

- _charset_
  - : 它是一个 {{cssxref("&lt;string&gt;")}} 表示字符编码被使用。它必须是在被 [IANA-registry](http://www.iana.org/assignments/character-sets) 声明过的 web-safe 字符编码中的一个，还必须被双引号包围，遵循一个空格字符 (U+0020)，并且立即以分号结束。如果有多个相关的编码名字，只有被标记为 _preferred_ 的那个才会被使用。

## 例子

```css
@charset "UTF-8";
@charset "utf-8"; /*大小写不敏感*/
/* 设置 css 的编码格式为 Unicode UTF-8 */
```

```css-nolint example-bad
@charset 'iso-8859-15'; /* 无效的，使用了错误的引号 */
@charset  "UTF-8"; /* 无效的，多于一个空格 */
 @charset "UTF-8"; /* 无效的，在 at-rule 之前多了一个空格 */
@charset UTF-8; /* 无效的，缺少单引号 ' 或双引号 "，charset 不是一个有效的 CSS {{cssxref("&lt;string&gt;")}} */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [字符集](/zh-CN/docs/Glossary/character_set)术语条目
- [Unicode](/zh-CN/docs/Glossary/Unicode) 术语条目
