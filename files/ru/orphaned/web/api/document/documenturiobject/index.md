---
title: Document.documentURIObject
slug: orphaned/Web/API/Document/documentURIObject
---

{{ ApiRef("DOM") }}

**`Document.documentURIObject`** свойство только для чтения возвращает `nsIURI` объект представляющий URI [документа](/ru/docs/).

Это работает только для привилегированных (UniversalXPConnect) скриптов, включая расширенный код. Для веб содержания это свойство не имеет какого-либо специального значения и может быть использовано так же как и любое другое обычное свойство.

Привилегированный код должен быть осторожным не пытаясь получить или установить это свойство на объект с незапакованным содержанием (e.g. on a `wrappedJSObject` of an [`XPCNativeWrapper`](/en/XPCNativeWrapper "en/XPCNativeWrapper")). Смотрите {{ Bug(324464) }}' комментарии для детализации.

## Синтаксис

```
var uri = doc.documentURIObject;
```

## Пример

```
// Проверка является ли этот URI scheme текущей вкладки Firefox - 'http',
// предполагая что этот код выполняется в контексте  browser.xul
var uriObj = content.document.documentURIObject;
var uriPort = uriObj.port;

if (uriObj.schemeIs('http')) {
  ...
}
```

## Спецификация

Не является частью спецификации.
