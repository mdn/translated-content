---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
translation_of: Web/HTTP/Methods/CONNECT
---
{{HTTPSidebar}}

Die **Methode HTTP `CONNECT`** startet die bidirektionale Kommunikation mit der angeforderten Ressource. Es kann verwendet werden, um einen Tunnel zu öffnen.

Beispielsweise kann die CONNECT-Methode verwendet werden, um auf Websites zuzugreifen, die {{Glossary("SSL")}} ({{Glossary("HTTPS")}}) verwenden. Der Client fordert einen HTTP-Proxy-Server auf, die TCP-Verbindung zum gewünschten Ziel zu tunneln. Der Server fährt dann fort, die Verbindung im Namen des Clients herzustellen. Sobald die Verbindung vom Server hergestellt wurde, fährt der Proxy-Server mit dem Proxy des TCP-Streams zum und vom Client fort.

`CONNECT`ist eine Hop-by-Hop-Methode.

| Request hat einen Inhalt                               | Nein |
| ------------------------------------------------------ | ---- |
| Erfolgreicher response hat einen Inhalt                | Ja   |
| {{Glossary("Safe")}}                           | Nein |
| {{Glossary("Idempotent")}}                   | Nein |
| {{Glossary("Cacheable")}}                       | Nein |
| Erlaubt in [HTML forms](/de/docs/Web/Guide/HTML/Forms) | Nein |

## Syntax

    CONNECT www.example.com:443 HTTP/1.1

## Beispiel

Einige Proxy-Server benötigen möglicherweise die Berechtigung, um einen Tunnel zu erstellen. Siehe auch den Header {{HTTPHeader("Proxy-Authorization")}}.

```html
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Spezifikationen

| Specification                                    | Title                                                         |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "CONNECT", "4.3.6")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser Kompatibilität

{{Compat("http.methods.CONNECT")}}

## Siehe auch

- {{Glossary("Proxy server")}}
- {{HTTPHeader("Proxy-Authorization")}}
