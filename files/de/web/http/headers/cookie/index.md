---
title: Cookie
slug: Web/HTTP/Headers/Cookie
tags:
  - Cookies
  - HTTP
  - Reference
  - header
  - request
translation_of: Web/HTTP/Headers/Cookie
---
{{HTTPSidebar}}

Der **`Cookie`** HTTP Request Header enthält gespeicherte [HTTP Cookies](/de/docs/Web/HTTP/Cookies) welche zuvor vom Server mit dem {{HTTPHeader("Set-Cookie")}} Header gesendet wurden.

Der `Cookie` Header ist optional und kann weggelassen werden falls z.B. die Einstellungen für Privatsphäre im Browser keine Cookies zulassen.

| Header Typ                                                                               | {{Glossary("Request Header")}} |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- |
| {{Glossary( "Forbidden header name" , "Verbotener Header-Name")}} | Ja                                       |

## Syntax

    Cookie: <cookie-list>
    Cookie: name=value
    Cookie: name=value; name2=value2; name3=value3

- \<cookie-list>
  - : Eine Liste von Name/Wert-Paaren von folgender Form `<cookie-name>=<cookie-value>`. Mehrere Einträge in der Liste werden durch ein Semikolon gefolgt von einem Leerzeichen getrennt (`'; '`).

## Beispiele

    Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;

## Spezifikationen

| Spezifikationen                              | Titel                           |
| -------------------------------------------- | ------------------------------- |
| {{RFC("6265", "Cookie", "5.4")}} | HTTP State Management Mechanism |

## Browser Kompatibilität

{{Compat("http.headers.Cookie")}}

## Siehe auch

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
