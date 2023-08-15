---
title: Document.characterSet
slug: Web/API/Document/characterSet
---

{{ ApiRef("DOM") }}

**`Document.characterSet`** доступное только для чтения свойство, возвращает кодировку текущей страницы. Кодировка это набор символов, используемый для отрисовки документа, которая может отличаться от кодировки, заданной на странице (пользователь может переназначить кодировку)

> **Примечание:** Свойства `document.charset` и `document.inputEncoding` это устаревшие алиасы `document.characterSet`. Не используйте их больше.

## Синтаксис

```
var string = document.characterSet
```

## Примеры

```
<button onclick="alert(document.characterSet);">Показать кодировку</button>
// вернёт кодировку документа вида "ISO-8859-1" или "UTF-8"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
