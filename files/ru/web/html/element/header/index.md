---
title: <header>
slug: Web/HTML/Element/header
---

{{HTMLSidebar}}

**HTML-элемент `<header>`** представляет собой вводный контент, обычно группу вводных или навигационных средств. Он может содержать другие элементы-заголовки, а также логотип, форму поиска, имя автора и другие элементы.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток), [явный контент](/ru/docs/Web/Guide/HTML/Content_categories#Явный_контент).                                                                                                                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                            | [Основной поток](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток), кроме `<header>` и {{HTMLElement("footer")}}                                                                                                                                                                                        |
| Пропуск тегов                                                    | {{no_tag_omission}}                                                                                                                                                                                                                                                                                              |
| Допустимые родители                                              | Любой элемент, который разрешает [контент основного потока](/ru/docs/Web/Guide/HTML/Content_categories#Основной_поток) в качестве содержимого. Обратите внимание, что элемент `<header>` не должен быть потомком элемента {{HTMLElement("address")}}, {{HTMLElement("footer")}} или другого элемента `<header>`. |
| Допустимые ARIA-роли                                             | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>                                                                                                                               |
| DOM-интерфейс                                                    | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                       |

## Примечание

Элемент `<header>` не относится к секционному контенту , а значит не создаёт новый раздел в [структуре HTML-документа](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document). При этом элемент `<header>` обычно должен содержать заголовок ближайшего раздела (элементы `h1`-`h6`), но это **не** обязательно.

### Историческое употребление

Несмотря на то, что элемент `<header>` не попал в спецификации до {{glossary("HTML5")}}, на самом деле, он существовал с самого начала HTML. Первоначально, на самом первом веб-сайте он использовался как элемент `<head>`. В какой-то момент было принято решение использовать другое имя. Позже, это позволило `<header>` занять другую роль.

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

## Примеры

### Заголовок страницы

```html
<header>
  <h1>Заголовок главной страницы</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo" />
</header>
```

### Заголовок статьи

```html
<article>
  <header>
    <h2>Планета Земля</h2>
    <p>Опубликовано в среду, 4 октября 2017, Джейн Смит</p>
  </header>
  <p>
    Мы живём на сине-зелёной планете, на которой до сих пор так много
    неизведанного.
  </p>
  <p>
    <a href="https://janesmith.com/the-planet-earth/">Продолжить чтение...</a>
  </p>
</article>
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Связанные с этим разделом элементы: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
- [Разделы и структура документа HTML5](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
