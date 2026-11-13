---
title: <aside>
slug: Web/HTML/Reference/Elements/aside
---

{{HTMLSidebar}}

**HTML-элемент `<aside>`** представляет собой часть документа, чьё содержимое только косвенно связанно с основным содержимым документа. Чаще всего представлен в виде боковой панели, сносок или меток.

{{InteractiveExample("HTML Demo: &lt;aside&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  Salamanders are a group of amphibians with a lizard-like appearance, including
  short legs and a tail in both larval and adult forms.
</p>

<aside>
  <p>The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
</aside>

<p>
  Several species of salamander inhabit the temperate rainforest of the Pacific
  Northwest, including the Ensatina, the Northwestern Salamander and the
  Rough-skinned Newt. Most salamanders are nocturnal, and hunt for insects,
  worms and other small creatures.
</p>
```

```css interactive-example
aside {
  width: 40%;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;
}

aside > p {
  margin: 0.5rem;
}
```

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Основной поток](/ru/docs/Web/HTML/Guides/Content_categories#основной_поток), [секционный контент](/ru/docs/Web/HTML/Guides/Content_categories#секционный_контент), [явный контент](/ru/docs/Web/HTML/Guides/Content_categories#явный_контент).                                                                                                                                                                                             |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                             | [Основной поток](/ru/docs/Web/HTML/Guides/Content_categories#основной_поток).                                                                                                                                                                                                                                                                                                                                                               |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                                                                                                                                                                                                                                                                            |
| Допустимые родители                                               | Любой элемент, который разрешает [контент основного потока](/ru/docs/Web/HTML/Guides/Content_categories#основной_поток) в качестве содержимого. Обратите внимание, что элемент `<aside>` не должен быть потомком элемента {{HTMLElement("address")}}.                                                                                                                                                                                       |
| Допустимые ARIA-роли                                              | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/feed_role">feed</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/note_role">note</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/search_role">search</a></code> |
| DOM-интерфейс                                                     | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Примечание

- Не используйте элемент `<aside>` для пометки текста в скобках, так как этот вид текста считается частью основного [потокового контента](/ru/docs/Web/HTML/Guides/Content_categories#потоковый_контент).

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

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Связанные с этим разделом элементы: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}.
- [Разделы и структура документа HTML5](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
- [ARIA: роль complementary](/ru/docs/Web/Accessibility/ARIA/Roles/Complementary_role)
