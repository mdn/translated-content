---
title: <noscript>
slug: Web/HTML/Element/noscript
translation_of: Web/HTML/Element/noscript
---
{{HTMLRef}}

## Резюме

Элемент HTML** `<noscript>` **определяет секцию html кода, которая будет вставлена, если в браузере пользователя нет либо отключена поддержка JavaScript.

- _[Content categories](/ru/docs/HTML/Content_categories "HTML/Content_categories")_ [Metadata content](/ru/docs/HTML/Content_categories#Metadata_content "HTML/Content_categories#Metadata_content"), [flow content](/ru/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content").
- _Permitted content_ When scripting is disabled and when it is a descendant of the {{HTMLElement("head")}} element: in any order, zero or more {{HTMLElement("link")}} elements, zero or more {{HTMLElement("style")}} elements, and zero or more {{HTMLElement("meta")}} elements.
  When scripting is disabled and when it isn't a descendant of the {{HTMLElement("head")}} element: any transparent content, but no `<noscript>` element must be among its descendants.
  Otherwise: flow content or phrasing content.
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content"), if there are no ancestor `<noscript>` element, or in a {{HTMLElement("head")}} element (but only for an HTML document), here again if there are no ancestor `<noscript>` element.
- _DOM interface_ {{domxref("HTMLElement")}}

## Атрибуты

Этот элемент включает в себя только [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

## Пример

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="http://www.mozilla.com/">External Link</a>
</noscript>
<p>Rocks!</p>
```

### Пример с включённым JavaScript

Rocks!

### Результат с выключенным JavaScript

[External Link](http://www.mozilla.com/)

Rocks!

## Specifications

| Specification                                                                                                        | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'scripting-1.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'scripting-1.html#the-noscript-element', '&lt;noscript&gt;')}} | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', 'interact/scripts.html#h-18.3.1', '&lt;noscript&gt;')}}             | {{Spec2('HTML4.01')}}     |         |

## Browser compatibility

{{Compat}}
