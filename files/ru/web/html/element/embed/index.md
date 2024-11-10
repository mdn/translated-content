---
title: "<embed>: элемент для встраивания внешнего содержимого"
slug: Web/HTML/Element/embed
---

{{HTMLSidebar}}

HTML-элемент **`<embed>`** встраивает внешнее содержимое в выбранное место документа. Это содержимое может быть предоставлено внешним приложением или плагином браузера.

{{EmbedInteractiveExample("pages/tabbed/embed.html", "tabbed-standard")}}

> [!NOTE]
> Этот раздел посвящён только элементу, который является частью стандарта [HTML Living Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element), и не относится к ранним, нестандартизированным его реализациям.

Следует иметь в виду, что большинство современных браузеров прекратили поддержку плагинов. Поэтому использование `<embed>` не рекомендуется, если необходима одинаковая работа сайта для большинства пользователей.

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Flow content](/ru/docs/HTML/Content_categories#Flow_content), [phrasing content](/ru/docs/HTML/Content_categories#Phrasing_content), embedded content, interactive content, palpable content.                                                                                                                                                                         |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                            | Отсутствует, это {{Glossary("empty element")}}.                                                                                                                                                                                                                                                                                                                        |
| Пропуск тегов                                                    | Должен иметь открывающий тег, закрывающий тег должен быть пропущен                                                                                                                                                                                                                                                                                                     |
| Допустимые родители                                              | Любой элемент, который допускает встроенный контент                                                                                                                                                                                                                                                                                                                    |
| Допустимые ARIA-роли                                             | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/application_role">application</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/document_role">document</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/img_role">img</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code> |
| DOM-интерфейс                                                    | {{domxref("HTMLEmbedElement")}}                                                                                                                                                                                                                                                                                                                                        |

## Атрибуты

Атрибуты этого элемента включают все [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

- `height`
  - : Отображает высоту ресурса в [CSS пикселях](https://drafts.csswg.org/css-values/#px). Это должно быть абсолютное значение; проценты _не_ допустимы.
- `src`
  - : Ссылка на встраиваемый ресурс.
- `type`
  - : MIME-тип, используемый для выбора подключаемого модуля для создания экземпляра.
- `width`
  - : Отображает ширину ресурса в [CSS пикселях](https://drafts.csswg.org/css-values/#px). Это должно быть абсолютное значение; проценты _не_ допустимы.

## Примечание

Вы можете использовать свойство {{cssxref("object-position")}}, чтобы настроить расположение встроенного объекта в рамке элемента, а также свойство {{cssxref("object-fit")}}, чтобы контролировать регулирование размер объекта в соответствии с рамкой.

## Примеры

```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480" />
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие элементы, используемые для встраивания различного рода контента: {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, and {{HTMLElement("video")}}.
- Свойства, для позиционирования и определения размера внедрённого контента в его фрейме: {{cssxref("object-position")}} and {{cssxref("object-fit")}}
