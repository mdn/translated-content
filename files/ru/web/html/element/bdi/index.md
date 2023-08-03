---
title: <bdi>
slug: Web/HTML/Element/bdi
---

## Описание

**HTML-элемент `<bdi>`** (_bidirectional isolation_, или изоляция двунаправленности \[текста]) изолирует от окружающего текста текстовый фрагмент, направление в котором может отличаться от направления окружающего текста (но не обязательно отличается).

Этот элемент полезен при встраивании текста с неизвестным направлением (например, из базы данных) внутрь текста с заданным направлением.

> **Примечание:** Хотя тот же эффект может быть достигнут применением CSS правила {{cssxref("unicode-bidi")}}`: isolate` к элементу {{HTMLElement("span")}} или другому элементу форматирования текста, семантическое значение передаётся только с помощью элемента `<bdi>`. Тем более, что браузеры могут игнорировать стили. В этом случае, текст будет отображён корректно при использовании HTML-элемента, и некорректно при использовании только CSS стилей.

| [Content categories](/ru/docs/HTML/Content_categories) | [Flow content](/ru/docs/HTML/Content_categories#Flow_content), [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content), palpable content. |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                      | [Phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).                                                                                  |
| Tag omission                                           | {{no_tag_omission}}                                                                                                                                     |
| Permitted parent elements                              | Any element that accepts [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content).                                                         |
| DOM interface                                          | {{domxref("HTMLElement")}}                                                                                                                              |

## Attributes

Like all other HTML elements, this element has the [global attributes](/ru/docs/HTML/Global_attributes), with a slight semantic difference: the **dir** attribute is not inherited. If not set, its default value is the `auto` which let the browser decide the direction based on the element's content.

## Example

```html
<p dir="ltr">
  This arabic word <bdi>ARABIC_PLACEHOLDER</bdi> is automatically displayed
  right-to-left.
</p>
```

### Result

This arabic word REDLOHECALP_CIBARA is automatically displayed right-to-left.

## Specifications

| Specification                                                                           | Status                   | Comment |
| --------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-bdi-element', '&lt;bdi&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'the-bdi-element.html#the-bdi-element', '&lt;bdi&gt;')}}        | {{Spec2('HTML5 W3C')}}   |         |

## Browser compatibility

{{Compat}}

## See also

- Related HTML element: {{HTMLElement("bdo")}}
- Related HTML properties: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}

{{HTMLSidebar}}
