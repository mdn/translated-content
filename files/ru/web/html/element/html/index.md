---
title: "<html>: корневой элемент HTML-документа"
slug: Web/HTML/Element/html
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент **`<html>`** представляет корень (элемент верхнего уровня) HTML-документа, поэтому его так же называют _корневым элементом_. Все другие элементы должны быть потомками этого элемента, то есть находиться внутри него. В документе может быть только один элемент `<html>`.

## Атрибуты

Этот элемент поддерживает [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- `version` {{deprecated_inline}}
  - : Определяет версию HTML {{glossary("Doctype", "Document Type Definition")}}, используемую в текущем документе. Этот атрибут является избыточным, так как информация о версии указывается в объявлении типа документа.
- `xmlns`
  - : Определяет {{glossary("Namespace", "пространство имён")}} {{glossary("XML", "XML-документа")}}. Значение по умолчанию `"http://www.w3.org/1999/xhtml"`. Требуется для разбора документов с помощью XML-{{glossary("parser", "парсера")}} и необязателен для документов `text/html`.

## Доступность

Несмотря на то, что HTML не требует указывать начальные и конечные теги элемента `<html>`, важно это делать, так как это позволит указать [`lang`](/ru/docs/Web/HTML/Global_attributes/lang) веб-страницы. Указание атрибута `lang` с допустимым идентификатором языка в соответствии с {{RFC(5646, "Tags for Identifying Languages (также известный как BCP 47)")}} в элементе `<html>` поможет технологиям чтения с экрана определить правильный язык. Идентификатор языка должен описывать язык, используемый для большей части содержимого страницы. Без него программы чтения с экрана обычно используют язык, установленный в операционной системе, что может привести к неправильному произношению.

Добавление правильного объявления `lang` в элемент `<html>` также гарантирует, что важные метаданные, содержащиеся в {{HTMLElement("head")}} страницы, такие как {{HTMLElement("title")}}, также будут объявлены правильно.

- [MDN Understanding WCAG, Guideline 3.1 explanations](/ru/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.1_%e2%80%94_readable_make_text_content_readable_and_understandable)
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
      <th scope="row"><a href="/ru/docs/Web/Guide/HTML/Content_categories">Категории контента</a></th>
      <td>Отсутствуют.</td>
    </tr>
    <tr>
      <th scope="row">Допустимое содержимое</th>
      <td>Один элемент {{HTMLElement("head")}}, за которым следует один элемент {{HTMLElement("body")}}.</td>
    </tr>
    <tr>
      <th scope="row">Пропуск тегов</th>
      <td>
        Открывающий тег может быть пропущен, если первое, что находится внутри элемента <code>&#x3C;html></code>, не является комментарием.<br>
        Если сразу за элементом <code>&#x3C;html></code> следует комментарий, то закрывающий тег пропускать нельзя.
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые родители</th>
      <td>Отсутствуют. Это корневой элемент документа.</td>
    </tr>
    <tr>
      <th scope="row">Неявная ARIA-роль</th>
      <td><a href="/ru/docs/Web/Accessibility/ARIA/Roles/document_role">document</a></td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>Атрибут <code>role</code> не допускается</td>
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
