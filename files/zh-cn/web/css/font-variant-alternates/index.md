---
title: font-variant-alternates
slug: Web/CSS/font-variant-alternates
---

{{CSSRef}}

**`font-variant-alternates`** CSS 属性控制备用字体的使用。这些替代字体可以通过{{cssxref("@font-feature-values")}}中定义的替代名称来引用。

```css
/* Keyword values */
font-variant-alternates: normal;
font-variant-alternates: historical-forms;

/* Functional notation values */
font-variant-alternates: stylistic(user-defined-ident);
font-variant-alternates: styleset(user-defined-ident);
font-variant-alternates: character-variant(user-defined-ident);
font-variant-alternates: swash(user-defined-ident);
font-variant-alternates: ornaments(user-defined-ident);
font-variant-alternates: annotation(user-defined-ident);
font-variant-alternates: swash(ident1) annotation(ident2);

/* Global values */
font-variant-alternates: initial;
font-variant-alternates: inherit;
font-variant-alternates: unset;
```

在 {{cssxref("@font-feature-values")}} 规则中可以定义替代字体的函数 (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` 或 `annotation`), 将名称与 OpenType 参数相关联。此属性允许样式表中使用那些易于理解的名称 (定义于 {{cssxref("@font-feature-values")}})。

## 语法

**`font-variant-alternates`**属性可以采用以下两种形式之一：

- 默认值 `normal`
- 一个或多个关键词及函数，使用任意顺序用空格分隔。

### 取值

- `normal`
  - : 此关键字禁用备用字体。
- `historical-forms`
  - : 此关键字启用历史类型 - 过去常见但今天不常见的字体。它对应于 OpenType 值 `hist`.
- `stylistic()`
  - : 此函数可以为个别字体启用字体样式替换。该参数是特定于字体映射到数字的名称。它对应于 OpenType 值 `salt`，例如`salt 2`。
- `styleset()`
  - : 此函数可以对字符集启用字体样式替换。该参数是特定于字体映射到数字的名称。它对应于 OpenType 的值 `ssXY`，例如 `ss02`。
- `character-variant()`
  - : 此函数启用字符的特定样式替代。它与 styleset（）类似，但是不会为一组字符创建连贯的字形；单个字符将具有独立且不一定一致的样式。该参数是映射到数字的特定于字体的名称。它对应于 OpenType 值 `cvXY`，例如`cv02`。
- `swash()`
  - : 此函数启用斜字体。该参数是特定于字体映射到数字的名称。它对应于 OpenType 值 `swsh` 和 `cswh`，例如`swsh 2` 和`cswh 2`。
- `ornaments()`

  - : 此函数可启用装饰物，例如 [fleurons](http://en.wikipedia.org/wiki/Fleuron_%28typography%29) 与其他 dingbat 字形。该参数是特定于字体映射到数字的名称。它对应于 OpenType 值 `ornm`，例如 `ornm 2`。

    > **备注：** 为了保留文本语义，字体设计师应该包括与 Unicode dingbat 字符不匹配的装饰，作为项目符号字符（U + 2022）的装饰变体。请注意，某些现有字体不遵循此建议。

- `annotation()`
  - : 此函数支持注释，如带圆圈的数字或倒置的字符。该参数是特定于字体映射到数字的名称。它对应于 OpenType 值`nalt`，例如 `nalt 2`。

## 正式定义

{{CSSInfo}}

## 正式语法

{{csssyntax}}

## 示例

### HTML

```html
<p>Firefox rocks!</p>
<p class="variant">Firefox rocks!</p>
```

### CSS

```css
@font-feature-values "Leitura Display Swashes" {
  @swash {
    fancy: 1;
  }
}

p {
  font-size: 1.5rem;
}

.variant {
  font-family: Leitura Display Swashes;
  font-variant-alternates: swash(fancy);
}
```

### 结果

> **备注：** 你需要安装 OpenType 字体 _Leitura Display Swashes_ 才能使这个例子正常运行。您可以找到一些免费版本进行测试，例如从 [fontsgeek.com](http://fontsgeek.com/fonts/Leitura-Display-Swashes).

{{ EmbedLiveSample('示例') }}

## 规范

不属于任何标准。

## 浏览器兼容性

{{Compat}}
