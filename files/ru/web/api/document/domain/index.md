---
title: Document.domain
slug: Web/API/Document/domain
---

{{APIRef}} {{Deprecated_Header}}

Свойство `domain` у {{domxref("Document")}} интерфейса получает/устанавливает доменную часть источника происхождения (origin) текущего документа, используется в [политике ограничения домена (same origin policy)](/ru/docs/Web/Security/Same-origin_policy).

## Синтаксис

```
var domainString = document.domain;
document.domain = string;
```

### Значение

Доменная часть источника происхождения (origin) текущего документа.

### Исключения

- `SecurityError`

  - : An attempt has been made to set `domain` under one of the following conditions:

    - The document is inside a sandboxed {{htmlelement("iframe")}}
    - The document has no browsing context
    - The document's [effective domain](https://html.spec.whatwg.org/multipage/origin.html#concept-origin-effective-domain) is `null`
    - The given value is not equal to the document's effective domain (or it is not a registerable domain suffix of it)
    - The {{httpheader('Feature-Policy/document-domain','document-domain')}} {{HTTPHeader("Feature-Policy")}} is enabled

## Examples

### Getting the domain

For the URI `http://developer.mozilla.org/ru/docs/Web`, this example sets `currentDomain` to the string "`developer.mozilla.org`".

```
var currentDomain = document.domain;
```

### Closing a window

If a document, such as `www.example.xxx/good.html`, has the domain of `"www.example.xxx"`, this example attempts to close the window.

```
var badDomain = "www.example.xxx";

if (document.domain == badDomain) {
  // Just an example: window.close() sometimes has no effect
  window.close();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Политика одинакового источника](/ru/docs/Web/Security/Same-origin_policy)
- {{domxref("Location.hostname")}}
- {{domxref("Location.host")}}
- {{domxref("Window.origin")}}
