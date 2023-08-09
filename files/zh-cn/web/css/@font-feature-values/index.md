---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
---

{{CSSRef}}

## 概要

**`@font-feature-values`** [CSS](/zh-CN/docs/Web/CSS) [at-rule](/zh-CN/docs/Web/CSS/At-rule) 允许作者在{{cssxref("font-variant-alternates")}} 中使用通用名称，用于在 OpenType 中以不同方式激活功能。它允许在使用几种字体时简化 CSS。

```css
@font-feature-values Font One {
  /* How to activate nice-style in Font One */
  @styleset {
    nice-style: 12;
  }
}

@font-feature-values Font Two {
  /* How to activate nice-style in Font Two */
  @styleset {
    nice-style: 4;
  }
}

/* … */

.nice-look {
  font-variant-alternates: styleset(nice-style);
} /* Independent of the font */
```

The `@font-feature-values` at-rule may be used at the top level of a CSS, but also inside any [CSS conditional-group at-rule](/zh-CN/docs/Web/CSS/At-rule#Conditional_Group_Rules).

## Syntax

### Feature value blocks

- `@swash`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "swash()", "#swash()")}} functional notation of {{cssxref("font-variant-alternates")}}. A swash feature value definition allows only one value: `ident1: 2` is valid when `ident2: 2 4` isn't.
- `@annotation`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "annotation()", "#annotation()")}} functional notation of {{cssxref("font-variant-alternates")}}. An annotation feature value definition allows only one value: `ident1: 2` is valid when `ident2: 2 4` isn't.
- `@ornaments`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "ornaments()", "#ornaments()")}} functional notation of {{cssxref("font-variant-alternates")}}. An ornaments feature value definition allows only one value: `ident1: 2` is valid when `ident2: 2 4` isn't.
- `@stylistic`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "stylistic()", "#stylistic()")}} functional notation of {{cssxref("font-variant-alternates")}}. A stylistice feature value definition allows only one value: `ident1: 2` is valid when `ident2: 2 4` isn't.
- `@styleset`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "styleset()", "#styleset()")}} functional notation of {{cssxref("font-variant-alternates")}}. A stylset feature value definition allows and illimited amount of values: `ident1: 2 4 12 1`maps to the OpenType values `ss02`, `ss04`, `ss12`, `ss01`. Note that values higher than `99` are valid, but doesn't map to any OpenType values and are ignored.
- `@character-variant`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "character-variant()", "#character-variant()")}} functional notation of {{cssxref("font-variant-alternates")}}. A character-variant feature value definition allows one or two values: `ident1: 2` maps to `cv02=1` and `ident2: 2 4` maps to `cv02)4` and `ident2: 2 4 5` isn't valid.

### Formal syntax

{{csssyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("font-variant-alternates")}} property that uses values that this at-rule defines.
