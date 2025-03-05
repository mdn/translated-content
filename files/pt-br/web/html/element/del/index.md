---
title: <del>
slug: Web/HTML/Element/del
---

## Sumário

O **elemento** **HTML `<del>`** (ou _Elemento_ _HTML_ _de Texto Excluído_) representa uma parte do texto que foi excluída de um documento. Este elemento é (não necessariamente) renderizado pelos navegadores com uma linha entre o texto.

- _[Content categories](/pt-BR/docs/Web/HTML/Content_categories)_[Phrasing content](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content) or [flow content](/pt-BR/docs/Web/HTML/Content_categories#flow_content).
- _Permitted content_ [Transparent](/pt-BR/docs/Web/HTML/Content_categories#transparent).
- _Tag omission_ Nenhuma, tanto a tag inicial quanto a final são obrigatórias.
- _Permitted parent elements_ Any element that accepts [phrasing content](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content).
- _DOM interface_ {{domxref("HTMLModElement")}}

## Attributes

This element includes the [global attributes](/pt-BR/docs/Web/HTML/Global_attributes).

- `cite`
  - : A URI for a resource that explains the change (for example, meeting minutes).
- `datetime`
  - : This attribute indicates the time and date of the change and must be a [valid date with an optional time string](https://www.w3.org/TR/html5/common-microsyntaxes.html#valid-date-string-with-optional-time). If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp.

## Examples

```html
<p><del>This text has been deleted</del></p>
```

### Result

~~This text has been deleted~~

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{HTMLElement("ins")}} element for insertions into a text

{{HTMLSidebar}}
