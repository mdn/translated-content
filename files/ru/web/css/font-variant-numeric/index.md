---
title: font-variant-numeric
slug: Web/CSS/font-variant-numeric
---

{{CSSRef}}

## Summary

Свойство CSS **`font-variant-numeric`** управляет использованием альтернативных начертаний для цифр, дробей и порядковых числительных.

{{cssinfo}}

## Syntax

[Formal syntax](/ru/docs/CSS/Value_definition_syntax): {{csssyntax("font-variant-numeric")}}

```css
font-variant-numeric: normal
font-variant-numeric: ordinal
font-variant-numeric: slashed-zero
font-variant-numeric: lining-nums         /* <numeric-figure-values> */
font-variant-numeric: oldstyle-nums       /* <numeric-figure-values> */
font-variant-numeric: proportional-nums   /* <numeric-spacing-values> */
font-variant-numeric: tabular-nums        /* <numeric-spacing-values> */
font-variant-numeric: diagonal-fractions  /* <numeric-fraction-values> */
font-variant-numeric: stacked-fractions   /* <numeric-fraction-values> */
font-variant-numeric: oldstyle-nums stacked-fractions

font-variant-numeric: initial
font-variant-numeric: inherit
font-variant-numeric: unset
```

### Values

- `normal`
  - : Это ключевое слово отключает все альтернативные начертания.
- `ordinal`
  - : Это ключевое слово включает специальные глифы для порядковых числительных, например, 1st, 2nd, 3rd, 4th в английском или 1a в итальянском (в русском такие типографские изыски не приняты, пишут просто «1-й»). Это соответствует значению OpenType `ordn`.
- `slashed-zero`
  - : Это ключевое слово включает перечёркнутый ноль; это полезно, когда нужно чёткое различие между буквой O и цифрой 0. Это соответствует значению OpenType `zero`.
- _\<numeric-figure-values_>
  - : Эти значения управляют тем, какими знаками будут отображаться цифры. Возможны два значения:
    - `lining-nums` включает маюскульные («заглавные») цифры, стоящие на опорной линии текста. Это соответствует значению OpenType `lnum`.
    - `oldstyle-nums` включает минускульные («строчные») цифры, в которых некоторые знаки (3, 4, 7, 9) уходят нижним краем под опорную линию (в русской типографике не принято, зато широко используется в западной, в основном в шрифтах с засечками). Это соответствует значению OpenType `onum`.
- _\<numeric-spacing-values_>
  - : Эти значения управляют горизонтальным размером цифр. Возможны два значения:
    - `proportional-nums` включает цифры разной ширины. Это соответствует значению OpenType `pnum`.
    - `tabular-nums` включает цифры одинаковой ширины, которые легко выравниваются, как в таблицах. Это соответствуют значению OpenType `tnum`.
- _\<numeric-fraction-values_>
  - : Эти значения управляют отображением дробей. Возможны два значения:
    - `diagonal-fractions` включает символы дробей, в которых числитель и знаменатель уменьшены и разделены косой чертой. Это соответствует значению OpenType `frac`.
    - `stacked-fractions` включает символы дробей, где числитель и знаменатель уменьшены, поставлены друг над другом и разделены горизонтальной чертой. Это соответствует значению OpenType `afrc`.

## Examples

```css
p {
  font-variant-numeric: ordinal;
}
```

## Specifications

| Specification                                                                       | Status                  | Comment            |
| ----------------------------------------------------------------------------------- | ----------------------- | ------------------ |
| {{SpecName('CSS3 Fonts', '#propdef-font-variant-numeric', 'font-variant-numeric')}} | {{Spec2('CSS3 Fonts')}} | Initial definition |

## Browser Compatibility

{{Compat}}

## See also

- {{cssxref("font-variant")}}, {{cssxref("font-kerning")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-synthesis")}}.
