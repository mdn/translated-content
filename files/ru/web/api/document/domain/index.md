---
title: Document.domain
slug: Web/API/Document/domain
---

{{ApiRef}}

Свойство `domain` у {{domxref("Document")}} интерфейса получает/устанавливает доменную часть источника происхождения (origin) текущего документа, используется в [политике ограничения домена (same origin policy)](/ru/docs/Same_origin_policy_for_JavaScript).

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

## Замечания

Свойство возвращает `null` если домен документа не может быть идентифицирован, хотя теперь это изменилось с Firefox 62 - смотри обсуждение в {{bug(819475)}}.

Mozilla позволит вам установить его в супердомен текущего значения, ограниченный его [базовым доменом](/ru/docs/XPCOM_Interface_Reference/nsIEffectiveTLDService#getBaseDomain.28.29). Например, на developer.mozilla.org возможно установить его как "mozilla.org" но не как "mozilla.com" или "org".

Если это свойство успешно установлено, портовая часть источника так же устанавливается на нуль.

Mozilla отличает свойство `document.domain`, которое никогда не было установлено от явно установленного такого же домена как в URL документа, хотя свойство возвращает одинаковое значение в обоих случаях. Один документ разрешает доступ к другому, если они оба установили `document.domain` в одинаковое значение, указывая тем самым на их намерение сотрудничать или ни один из них не установил `document.domain`, а домены в URL-адресах одинаковые ([реализация](https://mxr.mozilla.org/mozilla-central/source/caps/nsPrincipal.cpp?rev=ecb7068b07a1&mark=199-215#199)). Если бы не эта специальная политика, то каждый сайт будет подвержен XSS от своих поддоменов (для примера <https://bugzilla.mozilla.org> может быть атакован с помощью заведения багов (bug attachments) на <https://bug*.bugzilla.mozilla.org>).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Политика ограничения домена для JavaScriptHTML](/ru/docs/Same_origin_policy_for_JavaScript)
