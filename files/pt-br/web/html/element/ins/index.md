---
title: <ins>
slug: Web/HTML/Element/ins
---

## Summary

The **HTML `<ins>` Element** (or _HTML Inserted Text_) HTML represents a range of text that has been added to a document.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_[Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content) or [flow content](/pt-BR/docs/HTML/Content_categories#Flow_content).
- _Permitted content_ [Transparent](/pt-BR/docs/HTML/Content_categories#Transparent).
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLModElement")}}

## Attributes

This element includes the [global attributes](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("cite")}}
  - : This attribute defines the URI of a resource that explains the change, like a link to some meeting minutes or a ticket in a troubleshooting sytem.
- {{htmlattrdef("datetime")}}
  - : This attribute indicates the time and date of the change and must be a [valid date with an optional time string](https://www.w3.org/TR/2011/WD-html5-20110525/common-microsyntaxes.html#valid-date-string-with-optional-time). If the value cannot be parsed as a date with an optional time string, the element does not have an associated time stamp.

## Examples

```html
<ins>This text has been inserted</ins>
```

## Specifications

| Specification                                                            | Status                   | Comment |
| ------------------------------------------------------------------------ | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'edits.html#the-ins-element', '&lt;ins&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'edits.html#the-ins-element', '&lt;ins&gt;')}}   | {{Spec2('HTML5 W3C')}}   |         |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.4', '&lt;ins&gt;')}}        | {{Spec2('HTML4.01')}}    |         |

## Compatibilidade com navegadores

{{Compat("html.elements.ins")}}

## See also

- {{HTMLElement("del")}} element for marking deletion into a document

{{HTMLSidebar}}
