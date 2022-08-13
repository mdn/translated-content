---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
translation_of: Web/HTTP/Headers/X-Content-Type-Options
---
{{HTTPSidebar}}

Der Header **`X-Content-Type-Option`** in HTTP-Antworten wird vom Server dazu benutzt, um anzuzeigen, dass [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), so wie sie in den {{HTTPHeader("Content-Type")}}-Headern angegeben sind, nicht geändert und somit befolgt werden sollen. Damit lässt sich [MIME type sniffing](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing) ausschließen. Oder anders gesagt: es zeigt, dass die Web-Admins wissen, was sie tun.

Der Header wurde von Microsoft mit dem IE 8 eingeführt, damit Web-Admins die automatische Inhaltserkennung ausschalten können. Die automatische Erkennung konnte dazu führen, dass Inhalt fälschlich als ausführbarer MIME-Typ erkannt wird. Inzwischen haben andere Browser diese Option übernommen, auch wenn deren Erkennungsalgorithmen von vorneherein vorsichtiger waren.

Bei Sicherheits-Audits wird im Allgemeinen erwartet, dass dieser Header gesetzt ist.

> **Note:** Anmerkung: `nosniff` gilt nur für "`script`"- und "`style`"-Typen. Gleichzeitig wird auch Cross-Origin Read Blocking (CORB) für HTML-, TXT-, JSON- und XML- Dateien (ausgenommen SVG bzw. `image/svg+xml`) aktiviert. Das Anwenden von `nosniff` bei Bildern erwies sich als [inkompatibel zu bestehenden Webseiten](https://github.com/whatwg/fetch/issues/395).

| Art des Headers                                          | {{Glossary("Antwort-Header")}} |
| -------------------------------------------------------- | ---------------------------------------- |
| {{Glossary("Unzulässiger Header-Name")}} | Nein                                     |

## Syntax

    X-Content-Type-Options: nosniff

## Direktiven

- `nosniff`
  - : Verhindert eine Anfrage, wenn der angeforderte Typ\* "`style`" und der MIME-Typ nicht "`text/css`" ist, oder
    - "`script`" und der MIME-Typ kein [JavaScript-MIME-Typ](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type) ist.Aktiviert außerdem Cross-Origin Read Blocking für folgende MIME-Typen:\* `text/html`
    - `text/plain`
    - `text/json`, `application/json` und alle anderen MIME-Typen mit JSON-Erweiterung: `*/*+json`
    - `text/xml`, `application/xml` und alle anderen MIME-Typen mit XML-Erweiterung: `*/*+xml` (ausgenommen `image/svg+xml`)

## Spezifikationen

| Spezifikation                                                                                                                | Status                   | Anmerkung        |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ---------------- |
| {{SpecName("Fetch", "#x-content-type-options-header", "X-Content-Type-Options definition")}} | {{Spec2("Fetch")}} | Erste Definition |

## Browser-Kompatibilität

{{Compat("http.headers.X-Content-Type-Options")}}

### Browser spezifische Anmerkung

- Firefox 72 schaltet `X-Content-Type-Options: nosniff` für Dokumente der obersten Ebene frei

## Siehe auch

- {{HTTPHeader("Content-Type")}}
- Die [Original-Definition](https://blogs.msdn.microsoft.com/ie/2008/09/02/ie8-security-part-vi-beta-2-update/) von X-Content-Type-Options von Microsoft
- Das Werkzeug [Mozilla Observatory](https://observatory.mozilla.org/), um die Sicherheit von Webseiten (darunter auch diesen Header) zu prüfen
- [Mitigating MIME Confusion Attacks in Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Cross-Origin Read Blocking (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB explainer](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
