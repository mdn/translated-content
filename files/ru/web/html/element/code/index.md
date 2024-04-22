---
title: "<code>: элемент отображения кода"
slug: Web/HTML/Element/code
---

{{HTMLSidebar}}

**Элемент HTML `<code>`** отображает его содержимое в стиле, предназначенном для указания на то, что текст является коротким фрагментом компьютерного кода. По умолчанию текст содержимого отображается с использованием шрифта монопространства по умолчанию {{Glossary("user agent", "пользовательского агента")}}.

{{EmbedInteractiveExample("pages/tabbed/code.html", "tabbed-shorter")}}

| [Content categories](/ru/docs/Web/HTML/Content_categories) | [Flow content](/ru/docs/Web/HTML/Content_categories#Flow_content), [phrasing content](/ru/docs/Web/HTML/Content_categories#Phrasing_content), palpable content. |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                          | [Phrasing content](/ru/docs/Web/HTML/Content_categories#Phrasing_content).                                                                                      |
| Tag omission                                               | {{no_tag_omission}}                                                                                                                                             |
| Permitted parents                                          | Any element that accepts [phrasing content](/ru/docs/Web/HTML/Content_categories#Phrasing_content).                                                             |
| Implicit ARIA role                                         | [No corresponding role](https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role)                                                                             |
| Permitted ARIA roles                                       | Any                                                                                                                                                             |
| DOM interface                                              | {{domxref("HTMLElement")}} Up to Gecko 1.9.2 (Firefox 4) inclusive, Firefox implements the {{domxref("HTMLSpanElement")}} interface for this element.           |

## Атрибуты

Этот элемент включает в себя только [глобальные атрибуты](/ru/Web/HTML/Global_attributes).

## Пример

Текстовый абзац, включающий `<code>`:

```html
<p>
  The function <code>selectAll()</code> highlights all the text in the input
  field so the user can, for example, copy or delete the text.
</p>
```

Вывод, генерируемый этим HTML, выглядит так:

{{EmbedLiveSample("Example", 640, 70)}}

## Примечания

Для представления нескольких строк кода, оберните элемент `<code>` в элемент {{HTMLElement("pre")}}. Элемент `<code>` сам по себе представляет только один элемент кода или строку кода.

CSS-правило может быть определено для того, чтобы селектор `code` переопределил шрифт браузера по умолчанию. Предпочтения, установленные пользователем, могут иметь приоритет над указанными CSS.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("samp")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("command")}} (deprecated)
- {{HTMLElement("var")}}
- {{HTMLElement("pre")}}
