---
title: Document.writeln()
slug: Web/API/Document/writeln
---

{{ ApiRef("DOM") }}

Выводит в документ строку со знаком перевода каретки в конце.

## Синтаксис

```
document.writeln(line);
```

### Параметры

- `line` - строка содержащая текст.

## Пример

```
document.writeln("<p>введите пароль:</p>");
```

## Примечания

**document.writeln** тоже самое, что [document.write](/en/DOM/document.write) но добавляет знак новой строки.

> **Примечание:** `document.writeln` (как и `document.write`) не работает с XHTML документами (вы получите ошибку "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) в консоли ошибок). Происходит это, если открыть локальный файл с расширением .xhtml или документ с MIME типом application/xhtml+xml. Больше информации доступно на [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

## Спецификации

[writeln](http://www.w3.org/TR/2000/WD-DOM-Level-2-HTML-20001113/html.html#ID-35318390)
