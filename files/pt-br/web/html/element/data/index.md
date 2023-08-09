---
title: <data>
slug: Web/HTML/Element/data
---

## Summary

The **HTML `<data>` Element** links a given content with a machine-readable translation. If the content is time- or date-related, the {{HTMLElement("time")}} must be used.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), palpable content.
- _Permitted content_[Phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _DOM interface_ {{domxref("HTMLDataElement")}}

## Attributes

This element includes the [global attributes](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("value")}}
  - : This attribute specifies the machine-readable translation of the content of the element.

## Example

The following example displays product names but also associates each name with its UPC code.

```html
<p>New Products</p>
<ul>
  <li><data value="3967381398">Mini Ketchup</data></li>
  <li><data value="3967381399">Jumbo Ketchup</data></li>
  <li><data value="3967381400">Mega Jumbo Ketchup</data></li>
</ul>
```

## Specifications

| Specification                                                                             | Status                   | Comment                               |
| ----------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-data-element', '&lt;data&gt;')}} | {{Spec2('HTML WHATWG')}} | No change from {{Spec2('HTML5 W3C')}} |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-data-element', '&lt;data&gt;')}}   | {{Spec2('HTML5 W3C')}}   | Initial definition.                   |

## Compatibilidade com navegadores

{{Compat("html.elements.data")}}

## See also

- The HTML {{HTMLElement("time")}} element.

{{HTMLSidebar}}
