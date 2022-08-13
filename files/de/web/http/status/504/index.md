---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
tags:
  - Fehlermeldung
  - HTTP
  - HTTP-Statuscode
  - Serverfehler
  - Statuscode
translation_of: Web/HTTP/Status/504
---
{{HTTPSidebar}}

Der HTTP-Statuscode **`504 Gateway Timeout`** zeigt an, dass der Server, der als Gateway oder Proxy fungiert, keine rechtzeitige Antwort von einem vorgelagerten Serverserver bekommen hat, die nötig gewesen wäre, um die Anfrage vollständig auszuführen.

> **Hinweis:** Es gibt verschiedene Dinge, die man in der Netzwerktechnik als {{interwiki("wikipedia", "Gateway_(telecommunications)", "Gateway")}} bezeichnet. Bei einer 504-Fehlermeldung können Sie meist nichts tun, um das Problem zu beheben, sondern dies muss auf dem Zielserver oder auf den Proxies, über die Sie den Zugriff versucht haben, geschehen.

## Status

    504 Gateway Timeout

## Spezifikationen

| Spezifikation                                                    | Titel                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "504 Gateway Timeout" , "6.6.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser-Kompatibilität

Die unten genannen Informationen wurden von MDNs GitHub (<https://github.com/mdn/browser-compat-data>) abgerufen.

{{Compat("http.status.504")}}

## Siehe auch

- {{HTTPStatus(502)}}
