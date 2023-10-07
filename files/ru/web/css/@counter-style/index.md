---
title: "@counter-style"
slug: Web/CSS/@counter-style
---

{{CSSRef}}

## Описание

The **`@counter-style`** [CSS](/en/CSS) [at-rule](/en/CSS/At-rule) lets authors define specific counter styles that are not part of the predefined set of styles. A `@counter-style` rule defines how to convert a counter value into a string representation.

Initial version of CSS defined a set of useful counter styles. Although more styles where added to this set of predefined styles over the years, this restrictive way proved unable to fulfill the needs of worldwide typography. The `@counter-style` at-rule addresses this shortcoming in an open-ended manner, by allowing authors to define their own counter styles when the pre-defined styles aren't fitting their needs.

## Синтаксис

### Дескрипторы

Each `@counter-style` is identified by a name and has a set of descriptors.

- {{cssxref("@counter-style/system", "system")}}
  - : Specifies the algorithm to be used for converting the integer value of a counter to a string representation.

<!---->

- {{cssxref("@counter-style/negative", "negative")}}
  - : Lets the author specify symbols to be appended or prepended to the counter representation if the value is negative.

<!---->

- {{cssxref("@counter-style/prefix", "prefix")}}
  - : Specifies a symbol that should be prepended to the marker representation. Prefixes are added to the representation in the final stage, so in the final representation of the counter, it comes before the negative sign.

<!---->

- {{cssxref("@counter-style/suffix", "suffix")}}
  - : Specifies, similar to the prefix descriptor, a symbol that is appended to the marker representation. Prefixes come after the marker representation.

<!---->

- {{cssxref("@counter-style/range", "range")}}
  - : Defines the range of values over which the conter style is applicable. If a counter style is used to represent a counter value outside of its ranges, the counter style will drop back to its fallback style.

<!---->

- {{cssxref("@counter-style/pad", "pad")}}
  - : Is used when you need the marker representations to be of a minimum length. For example if you want the counters to start start at 01 and go through 02, 03, 04 etc, then the pad descriptor is to be used. For representations larger than the specified pad value, the marker is constructed as normal.

<!---->

- {{cssxref("@counter-style/fallback", "fallback")}}
  - : Specifies a system to fall back into if either the specified system is unable to construct the representation of or a counter value or if the counter value outside the specified range. If the specified fallback also fails to represent the value, then the fallback style's fallback is used, if one is specified. If there are either no fallback systems described or if the chain of fallback systems are unable to represent a counter value, then it will ultimately fall back to the decimal style.

<!---->

- {{cssxref("@counter-style/symbols", "symbols")}}

  - : Specifies the symbols that are to be used for the marker representations. Symbols can contain string, images or custom identifiers. How the symbols are used to construct the marker representation is up to the algorithm specified in the system descriptor. For example, if the system specified is fixed, then each of the N symbols specified in the descriptor will be used to represent the first N counter symbols. Once the specified set of symbols have exhausted, the fallback style will be used for the rest of the list.

    The below @counter-style rule uses images instead of character symbols.

    ```css
    @counter-style winners-list {
      system: fixed;
      symbols: url(gold-medal.svg) url(silver-medal.svg) url(bronze-medal.svg);
      suffix: " ";
    }
    ```

<!---->

- {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - : While the symbols specified in the symbols descriptor is used for constructing marker representation by most algorithms, some systems such as 'additive' rely on _additive tuples_ described in this descriptor. Each additive tuple consists of a counter symbol and a non negative integer weight. The additive tuples must be specified in the descending order of their weights.

<!---->

- {{cssxref("@counter-style/speak-as", "speak-as")}}
  - : Describes how to read out the counter style in speech synthesizers, such as screen readers. For example, the value of the marker symbol can be read out as numbers or alphabets for ordered lists or as audio cues for unordered lists, based on the value of this descriptor.

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
@counter-style circled-alpha {
  system: fixed;
  symbols: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}
```

The above counter style rule can be applied to lists like this:

```css
.items {
  list-style: circled-alpha;
}
```

Which will produce lists like this:

Ⓐ One
Ⓑ Two
Ⓒ Three
Ⓓ Four
Ⓔ FIve
....
...
Ⓨ Twenty Five
Ⓩ Twenty Six

27 Twenty Seven
28 Twenty Eight
29 Twenty Nine
30 Thirty

Checkout more examples on the [demo page](https://mdn.github.io/css-counter-style-demo/).

## Спецификации

| Спецификация                                                                    | Статус                           | Комментарий                |
| ------------------------------------------------------------------------------- | -------------------------------- | -------------------------- |
| {{SpecName('CSS3 Counter Styles', '#the-counter-style-rule', 'counter-style')}} | {{Spec2('CSS3 Counter Styles')}} | Первоначальное определение |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
