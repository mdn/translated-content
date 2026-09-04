---
title: <custom-ident>
slug: Web/CSS/Reference/Values/custom-ident
---

**`<custom-ident>`** 指用户自定义字符串标识符。一种[CSS](/zh-CN/docs/Web/CSS) [数据类型](/zh-CN/docs/Web/CSS/Reference/Values/Data_types)；要区分大小写，值不能有任何歧义。

## 语法

`<custom-ident>` 语法同 CSS 属性名相似，但它是区分大小写的。可以由以下字符组成：

- 字母 (`A` - `Z`, `a` - `z`),
- 十进制数 (`0` - `9`),
- 连字符 (`-`),
- 下划线 (`_`),
- 转义字符 ( `\`),
- [Unicode](http://en.wikipedia.org/wiki/Unicode) 编码（格式：转义字符（`\`）后跟 1 到 6 位十六进制数）

注意：`id1`, `Id1`, `iD1`和`ID1`都是不同标识符，因为标识符是区分大小写的。另一方面，因为可以解码，所以 `toto\?` 和 `toto\3F` 是相同的。

### 禁用值

`<custom-ident>` 不能用单引号或双引号包起来。此外，第一个字符不能为数字，字符串开头不能是连字符 (`-`) 后跟数字或连字符。

为避免歧义，各个属性对应的`<custom-ident>` 禁止使用以下特殊值：

- {{cssxref("animation-name")}}
  - : 禁用 CSS 关键字 `unset`, `initial`, `inherit`, `none`
- {{cssxref("counter-reset")}}

  {{cssxref("counter-increment")}}
  - : 禁止使用`unset`, `initial`, `inherit`, `none`.

- {{cssxref("@counter-style")}}

  {{cssxref("list-style-type")}}
  - : 禁止使用`unset`, `initial`, `inherit`, `none`, `inline`, `outside`. 同时不同浏览器预定义的值如：`disc`, `circle`, `square`, `decimal`, `cjk-decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, `lower-greek`, `lower-alpha`, `lower-latin`, `upper-alpha`, `upper-latin`, `arabic-indic`, `armenian`, `bengali`, `cambodian`, `cjk-earthly-branch`, `cjk-heavenly-stem`, `cjk-ideographic`, `devanagari`, `ethiopic-numeric`, `georgian`, `gujarati`, `gurmukhi`, `hebrew`, `hiragana`, `hiragana-iroha`, `japanese-formal`, `japanese-informal`, `kannada`, `katakana`, `katakana-iroha`, `khmer`, `korean-hangul-formal`, `korean-hanja-formal`, `korean-hanja-informal`, `lao`, `lower-armenian`, `malayalam`, `mongolian`, `myanmar`, `oriya`, `persian`, `simp-chinese-formal`, `simp-chinese-informal`, `tamil`, `telugu`, `thai`, `tibetan`, `trad-chinese-formal`, `trad-chinese-informal`, `upper-armenian`, `disclosure-open`, 和 `disclosure-close`也不能使用。

- {{cssxref("grid-row-start")}}
  {{cssxref("grid-row-end")}}
  {{cssxref("grid-column-start")}}
  {{cssxref("grid-column-end")}}
  - : 禁止使用 `span` 。
- {{cssxref("will-change")}}
  - : 禁止使用`unset`, `initial`, `inherit`, 以及 `will-change`, `auto`, `scroll-position`, and `contents`.

## 示例

### 有效标识符

```plain
nono79            字母数字混合
ground-level      字母 - 字母
-test             连字符后跟字母
_internal         下划线后跟字母
\22 toto          Unicode 编码后跟字母
bili\.bob         转义的句号
```

### 无效标识符

```plain example-bad
34rem             第一个字符不能是数字
-12rad            第一个字符连字符后不能跟数字
bili.bob          只有字母数字、连字符-、下划线_不需要转义
--toto            第一个字符不能为连字符后跟连字符
'bilibob'         不能用单引号包起来，这是一个字符串类型
"bilibob"         不能用双引号包起来，这是一个字符串类型
```

## 规范

{{Specifications}}

## 浏览器兼容性

由于这种类型不是真正的类型，而是用于简化允许值描述的便利类型，因此没有浏览器兼容性信息。
