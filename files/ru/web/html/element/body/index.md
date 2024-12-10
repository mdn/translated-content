---
title: "<body>: элемент тела документа"
slug: Web/HTML/Element/body
l10n:
  sourceCommit: 8fbec5312b62d720f6ff6936024a09c859f2f0f1
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент **`<body>`** представляет собой контент (содержимое) документа HTML. В документе может быть только один элемент `<body>`.

## Атрибуты

Этот элемент поддерживает [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes), атрибуты событий и устаревшие атрибуты:

### Event attributes

> [!NOTE]
> Each of the below event attribute names is linked to its equivalent {{domxref("Window")}} interface event. You can listen to these events using [`addEventListener()`](/ru/docs/Web/API/EventTarget/addEventListener) instead of adding the `oneventname` attribute to the `<body>` element.

> [!NOTE]
> Каждый из приведённых ниже атрибутов событий связан с соответствующим событием интерфейса {{domxref("Window")}}. Вы можете отслеживать эти события с помощью метода [`addEventListener()`](/ru/docs/Web/API/EventTarget/addEventListener) вместо добавления атрибута `oneventname` к элементу `<body>`.

- [`onafterprint`](/ru/docs/Web/API/Window/afterprint_event)
  - : Функция, вызываемая после того, как пользователь распечатает документ.
- [`onbeforeprint`](/ru/docs/Web/API/Window/beforeprint_event)
  - : Функция, вызываемая при запросе печати документа.
- [`onbeforeunload`](/ru/docs/Web/API/Window/beforeunload_event)
  - : Функция, вызываемая при выгрузке документа.
- [`onblur`](/ru/docs/Web/API/Window/blur_event)
  - : Функция, вызываемая при потере фокуса документа.
- [`onerror`](/ru/docs/Web/API/Window/error_event)
  - : Функция, вызываемая при ошибке загрузки документа.
- [`onfocus`](/ru/docs/Web/API/Window/focus_event)
  - : Функция, вызываемая при получении фокуса документа.
- [`onhashchange`](/ru/docs/Web/API/Window/hashchange_event)
  - : Функция, вызываемая при изменении идентификатора фрагмента (начинается с символа `#`) текущего адреса документа.
- [`onlanguagechange`](/ru/docs/Web/API/Window/languagechange_event)
  - : Функция, вызываемая при изменении предпочитаемых языков.
- [`onload`](/ru/docs/Web/API/Window/load_event)
  - : Функция, вызываемая при завершении загрузки документа (страница загружена).
- [`onmessage`](/ru/docs/Web/API/Window/message_event)
  - : Функция, вызываемая при получении документом сообщения.
- [`onmessageerror`](/ru/docs/Web/API/Window/messageerror_event)
  - : Функция, вызываемая при получении документом сообщения, которое не может быть десериализовано.
- [`onoffline`](/ru/docs/Web/API/Window/offline_event)
  - : Функция, вызываемая при потере сетевого соединения.
- [`ononline`](/ru/docs/Web/API/Window/online_event)
  - : Функция, вызываемая при восстановлении сетевого соединения.
- [`onpageswap`](/ru/docs/Web/API/Window/pageswap_event)
  - : Функция, вызываемая при навигации между документами, когда предыдущий документ готовится к выгрузке.
- [`onpagehide`](/ru/docs/Web/API/Window/pagehide_event)
  - : Функция, вызываемая при скрытии текущей страницы браузером в процессе отображения другой страницы из истории сеанса.
- [`onpagereveal`](/ru/docs/Web/API/Window/pagereveal_event)
  - : Функция, вызываемая при первом рендере документа, либо при загрузке нового документа из сети, либо при его активации.
- [`onpageshow`](/ru/docs/Web/API/Window/pageshow_event)
  - : Функция, вызываемая, когда браузер отображает документ окна в результате навигации.
- [`onpopstate`](/ru/docs/Web/API/Window/popstate_event)
  - : Функция, вызываемая при навигации по истории сеанса.
- [`onresize`](/ru/docs/Web/API/Window/resize_event)
  - : Функция, вызываемая при изменении размера документа.
- [`onrejectionhandled`](/ru/docs/Web/API/Window/rejectionhandled_event)
  - : Функция, вызываемая, когда JavaScript {{jsxref("Promise")}} обрабатывается с задержкой.
- [`onstorage`](/ru/docs/Web/API/Window/storage_event)
  - : Функция, вызываемая при изменении области хранения.
- [`onunhandledrejection`](/ru/docs/Web/API/Window/unhandledrejection_event)
  - : Функция, вызываемая, когда JavaScript {{jsxref("Promise")}} завершён с ошибкой, но на данную ошибку не установлен обработчик.
- [`onunload`](/ru/docs/Web/API/Window/unload_event)
  - : Функция, вызываемая, когда пользователь покидает страницу (закрытие вкладки или окна браузера).

### Устаревшие атрибуты

> [!WARNING]
> Не используйте эти устаревшие атрибуты. Вместо этого используйте указанные для каждого устаревшего атрибута альтернативы на CSS.

- `alink` {{deprecated_inline}}
  - : Цвет текста гиперссылок при выделении.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("color")}} вместе с псевдоклассами {{cssxref(":active")}} и {{cssxref(":focus")}}.**
- `background` {{deprecated_inline}}
  - : URI изображения для использования в качестве фона.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("background-image")}}.**
- `bgcolor` {{deprecated_inline}}
  - : Цвет фона документа.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("background-color")}}.**
- `bottommargin` {{deprecated_inline}}
  - : Нижний отступ элемента body.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("margin-bottom")}} или логическое свойство {{cssxref("margin-block-end")}}.**
- `leftmargin` {{deprecated_inline}}
  - : Левый отступ элемента body.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("margin-left")}} или логическое свойство {{cssxref("margin-inline-start")}}.**
- `link` {{deprecated_inline}}
  - : Цвет текста непосещенных гипертекстовых ссылок.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("color")}} вместе с псевдоклассом {{cssxref(":link")}}.**
- `rightmargin` {{deprecated_inline}}
  - : Правый отступ элемента body.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("margin-right")}} или логическое свойство {{cssxref("margin-inline-end")}}.**
- `text` {{deprecated_inline}}
  - : Цвет переднего плана текста.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("color")}}.**
- `topmargin` {{deprecated_inline}}
  - : Верхний отступ элемента body.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("margin-top")}} или логическое свойство {{cssxref("margin-block-start")}}.**
- `vlink` {{deprecated_inline}}
  - : Цвет текста для посещенных гипертекстовых ссылок.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("color")}} вместе с псевдоклассом {{cssxref(":visited")}}.**

## Примеры

```html
<html lang="ru">
  <head>
    <title>Заголовок документа</title>
  </head>
  <body>
    <p>
      HTML-элемент <code>&lt;body&gt;</code> представляет контент
      HTML-документа. В документе может быть только один элемент
      <code>&lt;body&gt;</code>.
    </p>
  </body>
</html>
```

### Результат

{{EmbedLiveSample('Example')}}

## Техническая сводка

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/HTML/Content_categories">Категории контента</a>
      </th>
      <td>
        Нет.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимый контент</th>
      <td>
        <a href="/ru/docs/Web/HTML/Content_categories#основной_поток">Основной поток</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегов</th>
      <td>
        Открывающий тег может быть пропущен, если первое, что находится внутри него, не является пробелом, комментарием, элементом {{HTMLElement("script")}} или элементом {{HTMLElement("style")}}. Закрывающий тег может быть пропущен если элемент <code>&#x3C;body></code> содержит контент или имеет открывающий тег, и за ним сразу не следует комментарий.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые родители</th>
      <td>
        Должен быть вторым элементом в элементе {{HTMLElement("html")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявная ARIA-роль</th>
      <td>
        <code>
          <a href="/ru/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a>
        </code>
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>Атрибут <code>role</code> не допускается</td>
    </tr>
    <tr>
      <th scope="row">DOM-интерфейс</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            Элемент <code>&#x3C;body></code> предоставляет интерфейс
            {{domxref("HTMLBodyElement")}}.
          </li>
          <li>
            Можно получить доступ к элементу <code>&#x3C;body></code> через
            свойство {{domxref("document.body")}}.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
- [Обработка событий (обзор)](/ru/docs/Web/Events/Event_handlers)
