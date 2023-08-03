---
title: <footer>
slug: Web/HTML/Element/footer
---

{{HTMLSidebar}}

**HTML-элемент** **`<footer>`** представляет собой нижний колонтитул (футер, подвал) для своего ближайшего [секционного контента](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Задание_разделов_в_HTML5) или [секционного корня](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document#Корни_задания_разделов). Футер обычно содержит информацию об авторе раздела, информацию об авторском праве или ссылки на связанные документы.

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток), [явный контент](/ru/docs/Web/Guide/HTML/Content_categories#Явный_контент).                                                                                                                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                            | [Контент основного потока](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток), кроме `<footer>` и {{HTMLElement("header")}}.                                                                                                                                                                             |
| Пропуск тегов                                                    | {{no_tag_omission}}                                                                                                                                                                                                                                                                                              |
| Допустимые родители                                              | Любой элемент, который разрешает [Контент основного потока](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток) в качестве содержимого. Обратите внимание, что элемент `<footer>` не должен быть потомком элемента {{HTMLElement("address")}}, {{HTMLElement("header")}} или другого элемента `<footer>`. |
| Допустимые ARIA-роли                                             | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>                                                                                                                               |
| DOM-интерфейс                                                    | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                       |

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

## Примечание

- Заключите информацию об авторе в элемент {{HTMLElement("address")}}, который может быть добавлен в элемент `<footer>`.
- Элемент `<footer>` не относится к секционному контенту, а значит не создаёт новый раздел в [структуре HTML-документа](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).

## Примеры

```html
<footer>
  Какая-то информация об авторском праве или может информация об авторе статьи?
</footer>
```

## Проблемы доступности

У программа чтения с экрана [VoiceOver](https://help.apple.com/voiceover/info/guide/) есть проблема, при которой она не читает элемент `<footer>` (не добавляет [роль-ориентир](/ru/docs/Learn/Доступность/WAI-ARIA_basics#SignpostsLandmarks) элемента `<footer>` в список ориентиров). Чтобы решить эту проблему добавьте `role="contentinfo"` в элемент `<footer>`.

- [WebKit Bugzilla: 146930 - AX: Нативные элементы HTML (header, footer, main, aside, nav) должны работать также, как ориентиры ARIA, но иногда они этого не делают](https://bugs.webkit.org/show_bug.cgi?id=146930)

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные с этим разделом элементы: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Разделы и структура документа HTML5](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
- [ARIA: роль contentinfo](/ru/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role)
