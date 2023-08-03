---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
---

{{CSSRef}}

[CSS](/ru/docs/Web/CSS) [правило](/ru/docs/Web/CSS/At-rule) **`@font-feature-values`** позволяет использовать общее имя в свойстве {{cssxref("font-variant-alternates")}} для функций, которые по разному активируются в OpenType. Это может помочь упростить ваш CSS при использовании нескольких шрифтов.

```css
/* Правило для "хорошего стиля" в Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* Правило для "хорошего стиля" в Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

…

/* Применение правила с единственным объявлением */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

Правило `@font-feature-values` может использоваться как на вернём уровне вашего CSS так и внутри любого [условного CSS-правила](/ru/docs/Web/CSS/At-rule#Conditional_Group_Rules).

## Синтаксис

### Блоки значений функций

- `@swash`
  - : Устанавливает имя функции, которая будет работать с функциональной записью {{cssxref("font-variant-alternates", "swash()", "#swash()")}} для {{cssxref("font-variant-alternates")}}. Определение значения функции swash допускает только одно значение: `ident1: 2` является действительным, но `ident2: 2 4` нет.
- `@annotation`
  - : Устанавливает имя функции, которая будет работать с функциональной записью {{cssxref("font-variant-alternates", "annotation()", "#annotation()")}} для {{cssxref("font-variant-alternates")}}. Определение значения функции допускает только одно значение: `ident1: 2` действительным , но `ident2: 2 4` нет.
- `@ornaments`
  - : Устанавливает имя функции, которая будет работать с функциональной записью {{cssxref("font-variant-alternates", "ornaments()", "#ornaments()")}} для {{cssxref("font-variant-alternates")}}. Определение значения функции ornaments допускает только одно значение: `ident1: 2` является действительным, но `ident2: 2 4` нет.
- `@stylistic`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "stylistic()", "#stylistic()")}} functional notation of {{cssxref("font-variant-alternates")}}. A stylistic feature value definition allows only one value: `ident1: 2` is valid, but `ident2: 2 4` isn't.
- `@styleset`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "styleset()", "#styleset()")}} functional notation of {{cssxref("font-variant-alternates")}}. A stylset feature value definition allows an unlimited number of values: `ident1: 2 4 12 1` maps to the OpenType values `ss02`, `ss04`, `ss12`, and `ss01`. Note that values higher than `99` are valid, but don't map to any OpenType values and are ignored.
- `@character-variant`
  - : Specifies a feature name that will work with the {{cssxref("font-variant-alternates", "character-variant()", "#character-variant()")}} functional notation of {{cssxref("font-variant-alternates")}}. A character-variant feature value definition allows either one or two values: `ident1: 3` maps to `cv03=1`, and `ident2: 2 4` maps to `cv02=4`, but `ident2: 2 4 5` is invalid.

### Формальный синтаксис

{{csssyntax}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Свойство {{cssxref("font-variant-alternates")}} которое использует значения, определённые этим правилом.
