---
title: <aside>
slug: Web/HTML/Element/aside
---

{{HTMLSidebar}}

**HTML-элемент `<aside>`** представляет собой часть документа, чьё содержимое только косвенно связанно с основным содержимым документа. Чаще всего представлен в виде боковой панели, сносок или меток.

{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток), [секционный контент](/ru/docs/Web/Guide/HTML/Content_categories#Секционный_контент), [явный контент](/ru/docs/Web/Guide/HTML/Content_categories#Явный_контент).                                                                                                                                                                                                |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                            | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток).                                                                                                                                                                                                                                                                                                                                                                |
| Пропуск тегов                                                    | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Допустимые родители                                              | Любой элемент, который разрешает [контент основного потока](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток) в качестве содержимого. Обратите внимание, что элемент `<aside>` не должен быть потомком элемента {{HTMLElement("address")}}.                                                                                                                                                                                        |
| Допустимые ARIA-роли                                             | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/feed_role">feed</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/note_role">note</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code> |
| DOM-интерфейс                                                    | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

## Примечание

- Не используйте элемент `<aside>` для пометки текста в скобках, так как этот вид текста считается частью основного [потокового контента](/ru/docs/Web/Guide/HTML/Content_categories#Потоковый_контент).

## Примеры

```html
<article>
  <p>
    Мультфильм студии Уолта Диснея <em>Русалочка</em>
    был выпущен в 1989.
  </p>
  <aside>
    <p>Мультфильм заработал $87 миллионов во время первого выпуска.</p>
  </aside>
  <p>Подробнее об этом мультфильме...</p>
</article>
```

{{EmbedLiveSample("Примеры")}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные с этим разделом элементы: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}.
- [Разделы и структура документа HTML5](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
- [ARIA: роль complementary](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques/Complementary_role)
