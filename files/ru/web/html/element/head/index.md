---
title: "<head>: элемент метаданных документа"
slug: Web/HTML/Element/head
l10n:
  sourceCommit: 2dc9e66061f63a06320f5c1c554a238e1b25c369
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент **`<head>`** содержит машиночитаемую информацию ({{glossary("metadata", "метаданные")}}) о документе, например его [заголовок](/ru/docs/Web/HTML/Element/title), [скрипты](/ru/docs/Web/HTML/Element/script) и [таблицы стилей](/ru/docs/Web/HTML/Element/style). В HTML-документе может быть только один элемент `<head>`.

> **Примечание:** `<head>` в основном содержит информацию для машинной обработки, а не для восприятия человеком. Про информацию в человекочитаемом виде, такую как заголовки верхнего уровня и список авторов, смотрите в элементе {{HTMLElement("header")}}.

## Атрибуты

Этот элемент поддерживает [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- `profile` {{deprecated_inline}}
  - : {{glossary("URI")}} одного или нескольких профилей метаданных, разделённые {{Glossary("whitespace", "пробелами")}}.

## Примеры

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Заголовок страницы</title>
  </head>
</html>
```

## Техническая сводка

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ru/docs/Web/Guide/HTML/Content_categories">Категории контента</a>
      </th>
      <td>Отсутствуют.</td>
    </tr>
    <tr>
      <th scope="row">Допустимое содержимое</th>
      <td>
        <p>
          Если это {{HTMLElement("iframe")}}-документ с атрибутом <a href="/ru/docs/Web/HTML/Element/iframe#srcdoc"><code>srcdoc</code></a> или если информация о заголовке доступна из протокола более высокого уровня (например, тема в электронном письме HTML), то ноль или более элементов, содержащих метаданные.
        </p>
        <p>
          Иначе, один или более элементов, содержащих метаданные, один из которых является элементом {{HTMLElement("title")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегов</th>
      <td>
        Открывающий тег может быть пропущен, если первым, что находится внутри элемента <code>&#x3C;head></code>, является другой элемент. Закрывающий тег может быть пропущен, если первое, что следует за элементом <code>&#x3C;head></code>, не является пробелом или комментарием.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые родители</th>
      <td>
        Элемент {{HTMLElement("html")}} (<code>&#x3C;head></code> является его первым дочерним элементом).
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
      <td>Атрибут <code>role</code> не допускается</td>
    </tr>
    <tr>
      <th scope="row">DOM-интерфейс</th>
      <td>{{domxref("HTMLHeadElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элементы, которые могут использоваться внутри `<head>`:

  - {{HTMLElement("title")}}
  - {{HTMLElement("base")}}
  - {{HTMLElement("link")}}
  - {{HTMLElement("style")}}
  - {{HTMLElement("meta")}}
  - {{HTMLElement("script")}}
  - {{HTMLElement("noscript")}}
  - {{HTMLElement("template")}}
