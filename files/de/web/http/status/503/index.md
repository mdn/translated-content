---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
tags:
  - Fehlermeldung
  - HTTP
  - HTTP-Statuscode
  - Serverfehler
  - Statuscode
translation_of: Web/HTTP/Status/503
---
{{HTTPSidebar}}

Der HTTP-Statuscode **`503 Service Unavailable`** zeigt an, dass der Server nicht in der Lage ist, die Anfrage zu bearbeiten.

Übliche Gründe dafür sind, dass ein Server wegen Wartungsarbeiten abgeschaltet oder dass er überlastet ist. Dieser Code sollte für vorübergehende Zustände benutzt werden, und der HTTP-Header {{HTTPHeader("Retry-After")}} sollte möglichst angeben, ab wann damit zu rechnen ist, dass der Dienst wieder funktioniert.

> **Note:** **Anmerkung:** Zusammen mit einer solchen Antwort sollte eine benutzerfreundliche Seite ausgeliefert werden, die das Problem erklärt.

Werden mit einer solchen Antwort Header verschickt, die das Caching betreffen, sollten diese beachtet werden, da der Status 503 oft einen vorübergehenden Zustand betrifft und die Antwort daher normalerweise nicht in einem Cache gespeichert werden sollte.

## Status

    503 Service Unavailable

## Spezifikationen

| Specification                                                        | Title                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "503 Service Unavailable" , "6.6.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser-Kompatibilität

Die unten genannen Informationen wurden von MDNs GitHub (<https://github.com/mdn/browser-compat-data>) abgerufen.

{{Compat("http.status.503")}}

## Siehe auch

- {{HTTPHeader("Retry-After")}}
