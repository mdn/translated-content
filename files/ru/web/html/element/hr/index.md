---
title: "<hr>: The Thematic Break (Horizontal Rule) element"
slug: Web/HTML/Element/hr
---

{{HTMLSidebar}}

**HTML `<hr>` элемент** служит для тематического разделения абзацев.Рисует горизонтальную прямую

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

Historically, this has been presented as a horizontal rule or line. While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS.

| [Content categories](/ru/docs/Web/HTML/Content_categories) | [Flow content](/ru/docs/Web/HTML/Content_categories#flow_content).                                                                                                                 |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                          | None, it is an {{Glossary("empty element")}}.                                                                                                                                      |
| Tag omission                                               | It must have start tag, but must not have an end tag.                                                                                                                              |
| Permitted parents                                          | Any element that accepts [flow content](/ru/docs/Web/HTML/Content_categories#flow_content).                                                                                        |
| Implicit ARIA role                                         | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/separator_role">separator</a></code>                                                                                          |
| Permitted ARIA roles                                       | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code> or <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/none_role">none</a></code> |
| DOM interface                                              | {{domxref("HTMLHRElement")}}                                                                                                                                                       |

## Attributes

This element's attributes include the [global attributes](/ru/docs/Web/HTML/Global_attributes).

- `align` {{deprecated_inline}}
  - : Задаёт правило выравнивания.По умолчанию значение выставлено как **left**
- `color` {{Non-standard_inline}}
  - : Задаёт цвет линии
- `noshade` {{deprecated_inline}}
  - : Sets the rule to have no shading.
- `size` {{deprecated_inline}}
  - : Устанавливает высоту в px
- `width` {{deprecated_inline}}
  - : Задаёт длину линии в px либо в %

## Example

### HTML

```html
<p>
  Это первый параграф текста Это первый параграф текста Это первый параграф
  текста Это первый параграф текста
</p>

<hr />

<p>
  Это второй параграф текста Это второй параграф текста Это второй параграф
  текста Это второй параграф текста
</p>
```

### Result

{{EmbedLiveSample("Example")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement('p')}}
