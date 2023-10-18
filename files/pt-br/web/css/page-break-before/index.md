---
title: page-break-before
slug: Web/CSS/page-break-before
---

{{CSSRef}}

> **Warning:** Esta propriedade foi substituída pela propriedade {{cssxref("break-before")}}.

A propriedade CSS **`page-break-before`** ajusta as "quebras de páginas" _antes_ do elemento atual.

Esta propriedade aplica-se para elementos em bloco (block) que geram uma caixa. Não será aplicada em uma {{ HTMLElement("div") }} vazia que não irá gerar uma caixa (box).

```css
/* Keyword values */
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Global values */
page-break-before: inherit;
page-break-before: initial;
page-break-before: unset;
```

{{cssinfo}}

## Page break aliases

A propriedade `page-break-before` agora é uma propriedade legada, substituída por {{cssxref("break-before")}}.

Por motivos de compatibilidade, `page-break-before` é tratada pelos navegadores como um alias de `break-before`. Isso garante que sites usando `page-break-before` continuem a funcionar. Um subconjunto de valores deve manter aliases como a seguir:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

## Syntax

### Values

- `auto`
  - : Initial value. Automatic page breaks (neither forced nor forbidden).
- `always`
  - : Always force page breaks before the element.
- `avoid`
  - : Avoid page breaks before the element.
- `left`
  - : Force page breaks before the element so that the next page is formatted as a left page.
- `right`
  - : Force page breaks before the element so that the next page is formatted as a right page.
- `recto` {{experimental_inline}}
  - : If pages progress left-to-right, then this acts like `right`. If pages progress right-to-left, then this acts like `left`.
- `verso` {{experimental_inline}}
  - : If pages progress left-to-right, then this acts like `left`. If pages progress right-to-left, then this acts like `right`.

### Formal syntax

{{csssyntax}}

## Examples

```css
/* avoid page break before the div */
div.note {
  page-break-before: avoid;
}
```

## Specification

| Specification                                                                      | Status                              | Comment                                                                            |
| ---------------------------------------------------------------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#page', 'recto and verso')}}                 | {{Spec2('CSS Logical Properties')}} | Adds the values `recto` and `verso`.                                               |
| {{SpecName('CSS3 Paged Media', '#page-break-before', 'page-break-before')}}        | {{Spec2('CSS3 Paged Media')}}       | Extends the element that this property applies to table rows and table row groups. |
| {{SpecName('CSS2.1', 'page.html#propdef-page-break-before', 'page-break-before')}} | {{Spec2('CSS2.1')}}                 | Initial definition                                                                 |

## Browser compatibility

{{Compat("css.properties.page-break-before")}}

## See also

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
