---
title: Expires
slug: Web/HTTP/Headers/Expires
translation_of: Web/HTTP/Headers/Expires
---
{{HTTPSidebar}}

Der **`Expires`** header enthält das Datum/Zeit nach dem die Response als abgelaufen angesehen wird.

Invalide Datumsangaben, wie ein Date=0, stellen ein Datum in der Vergangenheit dar, dementsprechend ist die Resource bereits abgelaufen.

Falls ein {{HTTPHeader("Cache-Control")}} header mit der "max-age" oder "s-maxage" Direktive in der Response gesetzt ist, wird der `Expires` Header ignoriert.

| Header type                                                                                      | {{Glossary("Response header")}} |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}}                                                 | nein                                     |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | Ja                                       |

## Syntax

    Expires: <http-date>

## Direktiven

- \<http-date>
  - : Ein HTTP-date timestamp.

## Beispiel

    Expires: Wed, 21 Oct 2015 07:28:00 GMT

## Spezifikationen

| Spezifikation                                | Titel                                           |
| -------------------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Expires", "5.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## Browserkompatibilität

{{Compat("http.headers.Expires")}}

## See also

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
