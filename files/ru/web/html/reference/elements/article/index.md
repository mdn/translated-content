---
title: <article>
slug: Web/HTML/Reference/Elements/article
---

{{HTMLSidebar}}

**HTML-элемент `<article>`** представляет самостоятельную часть документа, страницы, приложения или сайта, предназначенную для независимого распространения или повторного использования. Этот элемент может представлять статью на форуме, статью в журнале или газете, запись в блоге или какой-либо другой самостоятельный фрагмент содержимого.

{{InteractiveExample("HTML Demo: &lt;article&gt;", "tabbed-standard")}}

```html interactive-example
<article class="forecast">
  <h1>Weather forecast for Seattle</h1>
  <article class="day-forecast">
    <h2>03 March 2018</h2>
    <p>Rain.</p>
  </article>
  <article class="day-forecast">
    <h2>04 March 2018</h2>
    <p>Periods of rain.</p>
  </article>
  <article class="day-forecast">
    <h2>05 March 2018</h2>
    <p>Heavy rain.</p>
  </article>
</article>
```

```css interactive-example
.forecast {
  margin: 0;
  padding: 0.3rem;
  background-color: #eee;
}

.forecast > h1,
.day-forecast {
  margin: 0.5rem;
  padding: 0.3rem;
  font-size: 1.2rem;
}

.day-forecast {
  background: right/contain content-box border-box no-repeat
    url("/shared-assets/images/examples/rain.svg") white;
}

.day-forecast > h2,
.day-forecast > p {
  margin: 0.2rem;
  font-size: 1rem;
}
```

Данный документ может иметь множество статей; например, когда читатель просматривает блог, в котором текст каждой статьи отображается один за другим, каждая публикация будет находиться в элементе `<article>`, возможно, с одним или более элементами `<section>` внутри.

| [Категории контента](/ru/docs/Web/HTML/Guides/Content_categories) | [Основной поток](/ru/docs/Web/HTML/Guides/Content_categories#основной_поток), [секционный контент](/ru/docs/Web/HTML/Guides/Content_categories#секционный_контент), [явный контент](/ru/docs/Web/HTML/Guides/Content_categories#явный_контент).                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                             | [Основной поток](/ru/docs/Web/HTML/Guides/Content_categories#основной_поток).                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Пропуск тегов                                                     | Нет, открывающий и закрывающий теги обязательны.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Допустимые родители                                               | Любой элемент, который разрешает [контент основного потока](/ru/docs/Web/HTML/Guides/Content_categories#основной_поток) в качестве содержимого. Обратите внимание, что элемент `<article>` не должен быть потомком элемента {{HTMLElement("address")}}.                                                                                                                                                                                                                                                                                        |
| Допустимые ARIA-роли                                              | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/application_role">application</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/document_role">document</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/feed_role">feed</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/main_role">main</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code> |
| DOM-интерфейс                                                     | {{domxref("HTMLElement")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Атрибуты

К этому элементу применимы только [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

## Примечание

- Каждый элемент `<article>` должен быть идентифицирован, обычно путём добавления заголовка (элементы [`<h1>`-`<h6>`](/ru/docs/Web/HTML/Reference/Elements/Heading_Elements)) в качестве дочернего элемента.
- Когда элемент `<article>` является вложенным, внутренний элемент представляет собой контент связанный с внешним элементом. Например, комментарии к публикации в блоге могут быть элементами `<article>`, вложенными в другой `<article>`, являющийся публикацией в блоге.
- Информация об авторе в элементе `<article>` может быть представлена через элемент {{HTMLElement("address")}}, но это не применимо к вложенным элементам `<article>`.
- Дата и время публикации в элементе `<article>` могут быть описаны с помощью атрибута [`datetime`](/ru/docs/Web/HTML/Reference/Elements/time#datetime) элемента {{HTMLElement("time")}}. _Обратите внимание, что атрибут [`pubdate`](/ru/docs/Web/HTML/Reference/Elements/time#pubdate) элемента {{HTMLElement("time")}} больше не является частью стандарта {{glossary("W3C")}} {{glossary("HTML5")}}._

## Примеры

```html
<article class="film_review">
  <header>
    <h2>Парк Юрского периода</h2>
  </header>
  <section class="main_review">
    <p>Динозавры были величественны!</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Слишком страшно для меня.</p>
      <footer>
        <p>
          Опубликовано
          <time datetime="2015-05-16 19:00">16 мая</time>
          Лизой.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>Я согласен, динозавры мои любимцы.</p>
      <footer>
        <p>
          Опубликовано
          <time datetime="2015-05-17 19:00">17 мая</time>
          Томом.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Опубликовано
      <time datetime="2015-05-15 19:00">15 мая</time>
      Стаффом.
    </p>
  </footer>
</article>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Связанные с этим разделом элементы: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Разделы и структура документа HTML5](/ru/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document).
