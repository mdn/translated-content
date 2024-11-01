---
title: "<head>: элемент метаданных документа"
slug: Web/HTML/Element/head
page-type: html-element
browser-compat: html.elements.head
---

{{HTMLSidebar}}

HTML-элемент **`<head>`** содержит машиночитаемую информацию ({{glossary("metadata")}}) о документе, например его [заголовок](/ru/docs/Web/HTML/Element/title), [скрипты](/ru/docs/Web/HTML/Element/script) и [страницы стилей](/ru/docs/Web/HTML/Element/style). В HTML документе может быть только один элемент `<head>`.

> **Примечание:** `<head>` в основном содержит информацию для машинной обработки, а не для восприятия человеком. Информацию, видимую человеком, такую как заголовки верхнего уровня и перечисленные авторы, смотрите в элементе {{HTMLElement("header")}}.

## Атрибуты

К этому элементу применимы [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

- `profile`
  - : {{glossary("URI")}} одного или более профилей метаданных, разделённых пробелами.

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
        Если документ является документом {{HTMLElement("iframe")}} с атрибутом <a href="/en-US/docs/Web/HTML/Element/iframe#srcdoc">srcdoc</a>, или если информация о заголовке доступна из протокола более высокого уровня (например, строки темы в электронном письме HTML), то ноль или более элементов, содержащих метаданные. Иначе, один или более элементов, содержащих метаданные, один из которых является элементом {{HTMLElement("title")}}.
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
      <td>нет</td>
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
