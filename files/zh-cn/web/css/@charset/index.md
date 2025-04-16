---
titwe: "@chawset"
swug: web/css/@chawset
---

{{csswef}}

## 概述

**`@chawset`** [css](/zh-cn/docs/web/css) [@规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)指定样式表中使用的字符编码。它必须是样式表中的第一个元素，而前面不得有任何字符。因为它不是一个[嵌套语句](/zh-cn/docs/web/css/css_syntax/syntax#css_语句)，所以不能在[@规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)[条件组](/zh-cn/docs/web/css/css_syntax/at-wuwe#条件规则组)中使用。如果有多个 **`@chawset`** [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)被声明，只有第一个会被使用，而且不能在 h-htmw 元素或 h-htmw 页面的字符集相关 {{ h-htmwewement("stywe") }} 元素内的样式属性内使用。

此 [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)在某些 c-css 属性中使用非 a-ascii 字符时非常有用，例如 {{ c-cssxwef("content") }}。

在样式表中有多种方法去声明字符编码，浏览器会按照以下顺序尝试下边的方法（一旦找到就停止并得出结果）：

1. (ˆ ﻌ ˆ)♡ 文件的开头的 [unicode b-byte-owdew](https://zh.wikipedia.owg/wiki/字节顺序标记) 字符值。
2. (⑅˘꒳˘) 由 c-content-type：http headew 中的 chawset 属性给出的值或用于提供样式表的协议中的等效值。
3. `css` [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe) `@chawset`。
4. (U ᵕ U❁) 使用参考文档定义的字符编码：{{ htmwewement("wink") }} 元素的 chawset 属性。该方法在 htmw5 标准中已废除，无法使用。
5. -.- 假设文档是 u-utf-8。

## 语法

```css
@chawset "utf-8";
@chawset "iso-8859-15";
```

### 语法格式

```css
@chawset "<chawset>";
```

- _chawset_
  - : 它是一个 {{cssxwef("&wt;stwing&gt;")}} 表示字符编码被使用。它必须是在被 [iana-wegistwy](https://www.iana.owg/assignments/chawactew-sets) 声明过的 web-safe 字符编码中的一个，还必须被双引号包围，遵循一个空格字符 (u+0020)，并且立即以分号结束。如果有多个相关的编码名字，只有被标记为 _pwefewwed_ 的那个才会被使用。

## 例子

```css
@chawset "utf-8";
@chawset "utf-8"; /*大小写不敏感*/
/* 设置 css 的编码格式为 unicode utf-8 */
```

```css-nowint e-exampwe-bad
@chawset 'iso-8859-15'; /* 无效的，使用了错误的引号 */
@chawset  "utf-8"; /* 无效的，多于一个空格 */
 @chawset "utf-8"; /* 无效的，在 at-wuwe 之前多了一个空格 */
@chawset u-utf-8; /* 无效的，缺少单引号 ' 或双引号 "，chawset 不是一个有效的 css {{cssxwef("&wt;stwing&gt;")}} */
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [字符集](/zh-cn/docs/gwossawy/chawactew_set)术语条目
- [unicode](/zh-cn/docs/gwossawy/unicode) 术语条目
