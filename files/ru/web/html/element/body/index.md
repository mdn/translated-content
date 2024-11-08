---
title: "<body>: Элемент тела документа"
slug: Web/HTML/Element/body
l10n:
  sourceCommit: c82e8ba239176a7510e7d334a302a3dc3f985b29
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент **`<body>`**  представляет собой контент (содержимое) документа HTML. В документе может быть только один элемент `<body>`.

## Атрибуты

К этому элементу применимы [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- `alink` {{deprecated_inline}}
  - : Цвет текста гиперссылок при выделении.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("color")}} вместе с псевдоклассом {{cssxref(":active")}}.**
- `background` {{deprecated_inline}}
  - : URI изображения для использования в качестве фона.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("background")}}.**
- `bgcolor` {{deprecated_inline}}
  - : Цвет фона документа.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("background-color")}}.**
- `bottommargin` {{deprecated_inline}}
  - : Нижний отступ элемента body.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("margin-bottom")}}.**
- `leftmargin` {{deprecated_inline}}
  - : Левый отступ элемента body.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("margin-left")}}.**
- `link` {{deprecated_inline}}
  - : Цвет текста непосещенных гипертекстовых ссылок.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("color")}} вместе с псевдоклассом {{cssxref(":link")}}.**
- `onafterprint`
  - : Функция, вызываемая после того, как пользователь распечатает документ.
- `onbeforeprint`
  - : Функция, вызываемая при запросе печати документа.
- `onbeforeunload`
  - : Функция, вызываемая при выгрузке документа.
- `onblur`
  - : Функция, вызываемая при потере фокуса документа.
- `onerror`
  - : Функция, вызываемая при ошибке загрузки документа.
- `onfocus`
  - : Функция, вызываемая при получении фокуса документа.
- `onhashchange`
  - : Функция, вызываемая при изменении идентификатора фрагмента (начинается с символа `#`) текущего адреса документа.
- `onlanguagechange`
  - : Функция, вызываемая при изменении предпочитаемых языков.
- `onload`
  - : Функция, вызываемая при завершении загрузки документа (страницы загружена).
- `onmessage`
  - : Функция, вызываемая при получении сообщения документом.
- `onoffline`
  - : Функция, вызываемая при потере сетевого соединения.
- `ononline`
  - : Функция, вызываемая при восстановлении сетевого соединения.
- `onpopstate`
  - : Функция, вызываемая при навигации по истории сеанса.
- `onresize`
  - : Функция, вызываемая при изменении размера документа.
- `onstorage`
  - : Функция, вызываемая при изменении области хранения.
- `onunload`
  - : Функция, вызываемая при закрытии документа.
- `rightmargin` {{deprecated_inline}}
  - : Правый отступ элемента body.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("margin-right")}}.**
- `text` {{deprecated_inline}}
  - : Цвет переднего плана текста.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("color")}}.**
- `topmargin` {{deprecated_inline}}
  - : Верхний отступ элемента body.
    **Не используйте этот атрибут! Используйте CSS-свойство {{cssxref("margin-top")}}.**
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
      HTML-элемент <code>&lt;body&gt;</code> представляет контент HTML-документа.
      В документе может быть только один элемент <code>&lt;body&gt;</code>.
    </p>
  </body>
</html>
```

### Результат

{{EmbedLiveSample('Example')}}

## Техническое описание

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/HTML/Content_categories"
          >Категории контента</a
        >
      </th>
      <td>
        Нет.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимый контент</th>
      <td>
        <a href="/ru/docs/Web/HTML/Content_categories#основной_поток"
          >Основной поток</a
        >.
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
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>Роли не допускаются</td>
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
