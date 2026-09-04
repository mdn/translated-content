---
title: "`@font-feature-values` CSS at 规则"
short-title: "@font-feature-values"
slug: Web/CSS/Reference/At-rules/@font-feature-values
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

**`@font-feature-values`** [CSS](/zh-CN/docs/Web/CSS) [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)允许你在 {{cssxref("font-variant-alternates")}} 属性中，为在 OpenType 中以不同方式激活的特性使用通用名称。在使用多种字体时，这有助于简化你的 CSS。

`@font-feature-values` at 规则既可以用于 CSS 的顶层，也可以位于任何 CSS 条件规则组内部。

## 语法

```css
@font-feature-values Font Name {
  font-display: swap;
  @styleset {
    nice-style: 12;
  }
  @swash {
    fancy: 2;
  }
}
```

每个 `@font-feature-values` 块可以包含一系列特性值块（如下所列），以及 {{cssxref("@font-feature-values/font-display", "font-display")}} 描述符。

### 特性值块

- `@swash`
  - : 指定一个可与 {{cssxref("font-variant-alternates")}} 的 {{cssxref("font-variant-alternates", "swash()", "#swash")}} 函数记法一起使用的特性名称。swash 特性值定义只允许一个值：`ident1: 2` 有效，但 `ident2: 2 4` 无效。
- `@annotation`
  - : 指定一个可与 {{cssxref("font-variant-alternates")}} 的 {{cssxref("font-variant-alternates", "annotation()", "#annotation")}} 函数记法一起使用的特性名称。annotation 特性值定义只允许一个值：`ident1: 2` 有效，但 `ident2: 2 4` 无效。
- `@ornaments`
  - : 指定一个可与 {{cssxref("font-variant-alternates")}} 的 {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}} 函数记法一起使用的特性名称。ornaments 特性值定义只允许一个值：`ident1: 2` 有效，但 `ident2: 2 4` 无效。
- `@stylistic`
  - : 指定一个可与 {{cssxref("font-variant-alternates")}} 的 {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}} 函数记法一起使用的特性名称。stylistic 特性值定义只允许一个值：`ident1: 2` 有效，但 `ident2: 2 4` 无效。
- `@styleset`
  - : 指定一个可与 {{cssxref("font-variant-alternates")}} 的 {{cssxref("font-variant-alternates", "styleset()", "#styleset")}} 函数记法一起使用的特性名称。styleset 特性值定义允许无限个值：`ident1: 2 4 12 1` 映射到 OpenType 值 `ss02`、`ss04`、`ss12` 和 `ss01`。请注意，大于 `99` 的值是有效的，但不会映射到任何 OpenType 值，会被忽略。
- `@character-variant`
  - : 指定一个可与 {{cssxref("font-variant-alternates")}} 的 {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}} 函数记法一起使用的特性名称。character-variant 特性值定义允许一个或两个值：`ident1: 3` 映射到 `cv03=1`，`ident2: 2 4` 映射到 `cv02=4`，但 `ident2: 2 4 5` 无效。

## 形式语法

{{csssyntax}}

## 示例

### 在 @font-feature-values 规则中使用 @styleset

```css
/* Font One 中“nice-style”的 at 规则 */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* Font Two 中“nice-style”的 at 规则 */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

/* 用一条声明应用这些 at 规则 */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用本 at 规则所定义值的 {{cssxref("font-variant-alternates")}} 属性。
