---
title: URL.protocol
slug: Web/API/URL/protocol
tags:
  - API
  - Property
  - Protocols
  - Reference
  - URL
translation_of: Web/API/URL/protocol
---
{{ApiRef("URL API")}}

Die **`protocol `**Eigenschaft der {{domxref("URL")}} Schnittstelle ist ein {{domxref("USVString")}} der das Protokollschema der URL, einschließlich des finalen `':' `darstellt.

{{AvailableInWorkers}}

## `Syntax`

    string = object.protocol;
    object.protocol = string;

### Wert

Ein {{domxref("USVString")}}.

## `Beispiele`

```js
var url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol');
var result = url.protocol; // Gibt "https:" zurück.
```

## `Spezifikationen`

| Spezifikation                                                        | Status               | Kommentar         |
| -------------------------------------------------------------------- | -------------------- | ----------------- |
| {{SpecName('URL', '#dom-url-protocol', 'protocol')}} | {{Spec2('URL')}} | Erste Definition. |

## `Browserkompatibilität`

{{Compat("api.URL.protocol")}}

## `Siehe auch`

- Die {{domxref("URL")}} Schnittstelle zu der es gehört.
