---
title: <bdi>
slug: Web/HTML/Element/bdi
---

{{HTMLSidebar}}

## Описание

**HTML-элемент `<bdi>`** (_bidirectional isolation_, или изоляция двунаправленности \[текста]) изолирует от окружающего текста текстовый фрагмент, направление в котором может отличаться от направления окружающего текста (но не обязательно отличается).

Этот элемент полезен при встраивании текста с неизвестным направлением (например, из базы данных) внутрь текста с заданным направлением.

> [!NOTE]
> Хотя тот же эффект может быть достигнут применением CSS правила {{cssxref("unicode-bidi")}}`: isolate` к элементу {{HTMLElement("span")}} или другому элементу форматирования текста, семантическое значение передаётся только с помощью элемента `<bdi>`. Тем более, что браузеры могут игнорировать стили. В этом случае, текст будет отображён корректно при использовании HTML-элемента, и некорректно при использовании только CSS стилей.

| [Content categories](/ru/docs/Web/HTML/Content_categories) | [Flow content](/ru/docs/Web/HTML/Content_categories#flow_content), [phrasing content](/ru/docs/Web/HTML/Content_categories#phrasing_content), palpable content. |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                          | [Phrasing content](/ru/docs/Web/HTML/Content_categories#phrasing_content).                                                                                      |
| Tag omission                                               | Нет, открывающий и закрывающий теги обязательны.                                                                                                                |
| Permitted parent elements                                  | Any element that accepts [phrasing content](/ru/docs/Web/HTML/Content_categories#phrasing_content).                                                             |
| DOM interface                                              | {{domxref("HTMLElement")}}                                                                                                                                      |

## Attributes

Like all other HTML elements, this element has the [global attributes](/ru/docs/Web/HTML/Global_attributes), with a slight semantic difference: the **dir** attribute is not inherited. If not set, its default value is the `auto` which let the browser decide the direction based on the element's content.

## Example

```html
<p dir="ltr">
  This arabic word <bdi>ARABIC_PLACEHOLDER</bdi> is automatically displayed
  right-to-left.
</p>
```

### Result

This arabic word REDLOHECALP_CIBARA is automatically displayed right-to-left.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Related HTML element: {{HTMLElement("bdo")}}
- Related HTML properties: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
