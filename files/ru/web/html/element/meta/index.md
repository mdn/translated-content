---
title: <meta> - элемент для описания метаданных
slug: Web/HTML/Element/meta
---

{{HTMLSidebar}}

HTML-элемент **`<meta>`** представляет такие {{Glossary("Metadata","метаданные")}}, которые не могут быть представлены другими HTML-метатегами, такими как {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} или {{HTMLElement("title")}}.

Тип метаданных, предоставляемых элементом `<meta>`, может быть одним из следующих:

- Если задан атрибут [`name`](#name), то элемент `<meta>` предоставляет _метаданные на уровне документа_, применимые ко всей странице.
- Если задан атрибут [`http-equiv`](#http-equiv), то элемент `<meta>` является _директивой pragma_, предоставляющей информацию, эквивалентную заголовку HTTP с таким же именем.
- Если задан атрибут [`charset`](#charset), то элемент `<meta>` является _объявлением кодировки_, указывающим на кодировку, в которой закодирован документ.
- Если задан атрибут [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop), то элемент `<meta>` предоставляет _определенные пользователем метаданные_.

## Атрибуты

Этот элемент включает в себя [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

> [!NOTE]
> Атрибут [`name`](/ru/docs/Web/HTML/Element/meta#name) имеет особое значение для элемента `<meta>` и атрибут [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop) не должен быть задан в `<meta>` элементе в котором уже определены какие-либо [`name`](/ru/docs/Web/HTML/Element/meta#name), [`http-equiv`](/ru/docs/Web/HTML/Element/meta#http-equiv) или [`charset`](/ru/docs/Web/HTML/Element/meta#charset) атрибуты.

- `charset`
  - Этот атрибут объявляет кодировку символов документа. Если атрибут присутствует, его значение должно совпадать с строкой `"utf-8"` без учета регистра, поскольку UTF-8 является единственной допустимой кодировкой для документов HTML5. Элементы `<meta>`, которые объявляют кодировку символов, должны находиться полностью в пределах первых 1024 байтов документа.

- `content`
  - : Этот атрибут содержит значение для [`http-equiv`](/ru/docs/Web/HTML/Element/meta#http-equiv) или [`name`](/ru/docs/Web/HTML/Element/meta#name) атрибута, в зависимости от контекста.

- `http-equiv`
  - : Определяет директиву pragma. Название атрибута сокращено от `http-equivalent`, так как все допустимые значения являются именами конкретных HTTP-заголовков:

    - `content-security-policy`
      - : Позволяет авторам страниц определять [политику содержимого](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) для текущей страницы. Политики содержимого в основном указывают разрешённые источники сервера и конечные точки скриптов, что помогает защититься от атак межсайтового скриптинга (XSS).

        См. также {{HTTPHeader("Content-Security-Policy")}}.

    - `content-type`
      - : Задаёт [MIME-тип](/ru/docs/Web/HTTP/MIME_types) и кодировку символов документа. Атрибут `content`, если он указан, должен иметь значение `"text/html; charset=utf-8"`. Это эквивалентно элементу `<meta>` с заданным атрибутом [`charset`](#charset) и подчиняется тем же ограничениям на размещение в документе. **Примечание:** Может использоваться только в документах, обслуживаемых с MIME-типом `text/html`, но не в документах, обслуживаемых с XML MIME-типом.

        См. также {{HTTPHeader("Content-Type")}}.

    - `default-style`
      - : Устанавливает имя набора [стилей CSS](/ru/docs/Web/CSS) по умолчанию.

    - `x-ua-compatible`
      - : Если указан, атрибут `content` должен иметь значение `"IE=edge"`. Юзер-агенты обязаны игнорировать эту директиву.

    - `refresh`
      - : Эта инструкция задаёт:
        - Количество секунд до перезагрузки страницы — если значение атрибута [`content`](#content) является неотрицательным целым числом.
        - Количество секунд до перенаправления на другую страницу — если значение атрибута [`content`](#content) представляет собой неотрицательное целое число, за которым следует `;url=` и корректный URL.

        Таймер запускается, когда страница _полностью загружена_, то есть после срабатывания событий {{domxref("Window/load_event", "load")}} и {{domxref("Window/pageshow_event", "pageshow")}}.

        См. также {{HTTPHeader("Refresh")}}.

        > [!WARNING]
        >
        > Страницы с установленным значением `refresh` рискуют иметь слишком короткий интервал времени. Люди, использующие вспомогательные технологии, такие как скринридеры, могут не успеть прочитать и понять содержимое страницы перед автоматическим перенаправлением. Резкое и неожиданное обновление содержимого страницы также может вызвать дезориентацию у людей с нарушениями зрения.
        >
        > - [MDN Understanding WCAG, Guideline 2.2 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_—_enough_time_provide_users_enough_time_to_read_and_use_content)
        > - [MDN Understanding WCAG, Guideline 3.2 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
        > - [Understanding Success Criterion 2.2.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-required-behaviors.html)
        > - [Understanding Success Criterion 2.2.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html)
        > - [Understanding Success Criterion 3.2.5 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html)

- `name`
  - : Атрибуты `name` и `content` могут использоваться вместе для предоставления метаданных документа в виде пар имя-значение, где атрибут `name` задаёт имя метаданных, а атрибут `content` — их значение.

    Подробнее см. [стандартные имена метаданных](/en-US/docs/Web/HTML/Element/meta/name) для информации о наборе стандартных имен метаданных, определённых в спецификации HTML.

## Примеры

```html
<!-- В HTML5 -->
<meta charset="utf-8" />

<!-- Переход на другую страницу через три секунды -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org" />
```

## Техническая сводка

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/HTML/Content_categories">Категории контента</a>
      </th>
      <td>
        Мета данные. Если задан 
        <a href="/ru/docs/Web/HTML/Global_attributes#itemprop">itemprop</a> атрибут: 
        <a href="/ru/docs/Web/HTML/Content_categories#Flow_content">flow content</a>, 
        <a href="/ru/docs/Web/HTML/Content_categories#Phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимое содержимое</th>
      <td>Отсутствует - это {{Glossary("void element","пустой элемент")}}.</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегов</th>
      <td>Открывающий тег должен присутствовать, а закрывающий - отсутствовать.</td>
    </tr>
    <tr>
      <th scope="row">Допустимые родители</th>
      <td>
        <ul>
          <li>
            <code>&#x3C;meta charset></code>, <code>&#x3C;meta http-equiv></code>: {{HTMLElement("head")}} элемент. Если <a href="/ru/docs/Web/HTML/Element/meta#http-equiv">http-equiv</a> это не заявленная декларация, то может быть внутри элемента {{HTMLElement("noscript")}} или {{HTMLElement("head")}}.
          </li>
          <li>
            <code>&#x3C;meta name></code>: любой элемент, который принимает <a href="/ru/docs/Web/HTML/Content_categories#метаданные">метаданные</a>.
          </li>
          <li>
            <code>&#x3C;meta itemprop></code>: любой элемент, который принимает
            <a href="/ru/docs/Web/HTML/Content_categories#метаданные">метаданные</a> или <a href="/ru/docs/Web/HTML/Content_categories#основной_поток">основной поток</a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Неявная ARIA-роль</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Нет соответствующей роли</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>Отсутствуют</td>
    </tr>
    <tr>
      <th scope="row">DOM-интерфейс</th>
      <td>{{domxref("HTMLMetaElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Другие элементы, содержащие метаданные: {{HTMLElement("base")}}, {{HTMLElement("head")}}, {{HTMLElement("link")}}, {{HTMLElement("style")}},{{HTMLElement("title")}}.
