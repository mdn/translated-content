---
title: Document.write()
slug: Web/API/Document/write
---

{{ ApiRef("DOM") }}

Пишет строку в поток документа, открытый с помощью [document.open()](/ru/docs/Web/API/document.open).

> **Примечание:** Замечание: поскольку `document.write` пишет строку в **поток** документа, вызов `document.write` для закрытого (но загруженного) документа автоматически вызовет `document.open`, [который очистит документ](/ru/docs/Web/API/document.open#Notes).

## Синтаксис

```js
document.write(разметка);
```

### Параметры

- _разметка_
  - : Строка, содержащая текст для записи в документ.

### Пример

```html
<html>
  <head>
    <title>write example</title>

    <script>
      function newContent() {
        alert("загрузка нового контента");
        document.open();
        document.write("<h1>Долой старое, да здравствует новое!</h1>");
        document.close();
      }
    </script>
  </head>

  <body onload="newContent();">
    <p>Какой-то оригинальный контент.</p>
  </body>
</html>
```

## Замечания

Запись в документ, загруженный без вызова `document.open(),` автоматически вызовет `document.open`. По окончании записи рекомендуется вызвать `document.close(),` чтобы браузер завершил загрузку страницы. Записываемый текст разбирается в структурную модель документа. В примере выше элемент `h1` становится узлом документа.

Если вызов `document.write()` производится во встроенном HTML теге `<script>` , вызов `document.open() не будет выполнен`. Например:

```html
<script>
  document.write("<h1>Основной заголовок</h1>");
</script>
```

> **Примечание:** `document.write` и `document.writeln` [не работают в XHTML документах](/ru/docs/Archive/Web/Writing_JavaScript_for_HTML) (выводится сообщение "Операция не поддерживается" \[`NS_ERROR_DOM_NOT_SUPPORTED_ERR`] в консоли ошибок). Это случается при открытии локального файла с расширением .xhtml или для любых документов, обрабатываемых с [типом MIME](/ru/docs/Glossary/MIME_type) - `application/xhtml+xml` . Больше информации доступно по адресу [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

> **Примечание:** `document.write` в [отложенных](/ru/docs/Web/HTML/Element/script#attr-defer) или [асинхронных](/ru/docs/Web/HTML/Element/script#attr-async) сценариях игнорируется и выводится сообщение типа "Проигнорирован вызов `document.write()` из асинхронно загруженного внешнего сценария" в консоли ошибок.

> **Примечание:** В Edge вызов `document.write` в `iframe` более одного раза приводит к ошибке SCRIPT70: Доступ запрещён.

> **Примечание:** Начиная с версии 55, Chrome не исполняет элементы `<script>` вставленные посредством `document.write()` в случае отсутствия кеша HTTP для пользователей 2G подключения.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{ domxref("element.innerHTML") }}
- {{ domxref("document.createElement()") }}
