---
title: "<html>: Элемент HTML документа / корневой элемент"
slug: Web/HTML/Element/html
page-type: html-element
browser-compat: html.elements.html
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент **`<html>`** представляет собой корень (элемент верхнего уровня) HTML-документа, поэтому его так же называют _корневым элементом_. Все другие элементы должны быть потомками этого элемента (должны находиться внутри него). В документе может быть только один элемент `<html>`.

## Атрибуты

К этому элементу применимы [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

- `manifest`
  - : Определяет {{glossary("URI")}} файла манифеста, указывающего ресурсы, которые должны быть сохранены в локальном кеше. Смотрите [Использование кеша приложений](/ru/docs/Web/HTML/Using_the_application_cache).
- `version`
  - : Определяет версию HTML DTD (Document Type Definition, больше известное как {{glossary("Doctype")}}), которая управляет текущим документом. Этот атрибут не нужен, потому что он является избыточным, так как есть информация, указываемая в объявлении типа документа.
- `xmlns`
  - : Определяет {{glossary("Namespace", "пространство имён")}} {{glossary("XHTML", "XHTML-документа")}}. Значение по умолчанию `"http://www.w3.org/1999/xhtml"`. Это требуется при {{glossary("parse", "парсинге")}} документов с помощью {{glossary("parser", "парсера")}} {{glossary("XML")}} и необязательно для документов text/html.

## Проблемы доступности

Хотя HTML не требует указывать начальные и конечные теги элемента `<html>`, важно это делать, так как это позволит указать [`lang`](/ru/docs/Web/HTML/Global_attributes#lang) для веб-страницы. Указание атрибута `lang` с допустимым идентификатором языка в соответствии с {{RFC(5646, "Tags for Identifying Languages (также известный как BCP 47)")}} в элементе `<html>` поможет технологиям чтения с экрана определить правильный язык для объявления. Идентификатор языка должен описывать язык, используемый большей частью содержимого страницы. Без него программы чтения с экрана обычно используют язык, установленный в операционной системе, что может привести к неправильному произношению.

Добавление валидного атрибута `lang` в элемент `<html>` также гарантирует, что важные метаданные, содержащиеся в элементе {{HTMLElement("head")}}, например заголовок страницы {{HTMLElement("title")}}, также будут объявлены правильно.

- [MDN Understanding WCAG, Guideline 3.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
- [Understanding Success Criterion 3.1.1 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)

## Примеры

```html
<!doctype html>
<html lang="ru">
  <head>
    <!-- … -->
  </head>
  <body>
    <!-- … -->
  </body>
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
        Один элемент {{HTMLElement("head")}}, за которым следует один элемент
        {{HTMLElement("body")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегов</th>
      <td>
        Открывающий тег может быть пропущен, если первое, что находится внутри элемента
        <code>&#x3C;html></code>, не является комментарием. В {{glossary("HTML5")}} закрывающий
        тег может быть пропущен. В старых версиях HTML, если сразу за элементом
        <code>&#x3C;html></code> следует комментарий (при наличии элемента {{HTMLElement("body")}}), то закрывающий тег пропускать нельзя.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые родители</th>
      <td>Отсутствуют. Это корневой элемент документа.</td>
    </tr>
    <tr>
      <th scope="row">Неявная ARIA-роль</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/document_role">document</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">DOM-интерфейс</th>
      <td>{{domxref("HTMLHtmlElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент верхнего уровня MathML: {{MathMLElement("math")}}
- Элемент верхнего уровня SVG: {{SVGElement("svg")}}
