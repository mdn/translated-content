---
title: X-Frame-Options
slug: Web/HTTP/Headers/X-Frame-Options
translation_of: Web/HTTP/Headers/X-Frame-Options
---
{{HTTPSidebar}}

Die **`X-Frame-Options`** im [HTTP](/de/docs/Web/HTTP) Antwort Header kann verwendet werden, um zu bestimmen, ob ein aufrufender Browser die Zielseite in einem {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} rendern also einbetten darf. Webseiten können diesen Header verwenden, um {{interwiki("wikipedia", "clickjacking")}} Attacken abzuwehren, indem sie unterbinden, dass ihr Content in fremden Seiten eingebettet wird.

Die somit erreichte Sicherheit wird nur dann gewährleistet, wenn der User zum Aufruf einen Browser verwendet, der die `X-Frame-Options` Funktion auch unterstützt.

| Header type                                      | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | nein                                     |

## Syntax

Es gibt drei mögliche Ausprägungen der `X-Frame-Options`:

    X-Frame-Options: deny
    X-Frame-Options: sameorigin
    X-Frame-Options: allow-from https://example.com/

### Ausprägungen

Die Nutzung von `deny` unterbindet nicht nur die Frame-Einbindung von fremden Seiten sondern auch das Einbetten auf derselben Ursprungswebseite. Alternativ kann der Wert `sameorigin` verwendet werden, wenn die Nutzung innerhalb der gleichen Ursprungswebseite erlaubt sein soll.

- `deny`
  - : Die Seite kann nicht in einem Frame eingebettet werden, egal welches die aufrufende Webseite ist.
- `sameorigin`
  - : Die Seite kann nur als Frame eingebettet werden, wenn beide von der gleichen Quellseite (same origin) stammen. Die Spezifikation lässt es Browserherstellern offen, auf welcher Ebene dieser Wert greift: auf höchster Ebene, der nächsthöheren oder der gesamten Kette. Es wird jedoch festgestellt, dass die Option wenig nützlich ist, sofern nicht alle Eltern-Webseiten von der gleichen Quelle stammen (siehe {{bug(725490)}}). Siehe weiterhin [Browser compatibility](#browser_compatibility) zur Browserunterstützung.
- `allow-from uri`
  - : Die Seite lässt sich ausschließlich dann einbetten, wenn die einbettende Seite aus der Quelle _`uri`_ stammt. Hinweis: In Firefox besteht hier das gleiche Problem wie bei `sameorigin` - die Eltern-Frames werden nicht darauf hin geprüft, ob sie aus der gleichen Quelle stammen.

## Beispiele

> **Hinweis:** Die Nutzung des `meta tag` innerhalb des Webseiten-Contents hat keinen Effekt! Beispielsweise die Deklaration `<meta http-equiv="X-Frame-Options" content="deny">` führt zu keiner Verhaltensänderung. Ausschließlich die Nutzung der HTTP Header (siehe Beispiele) führt zu einer Verhaltensänderung des Browser.

### Apache Konfiguration

Um einen Apache Webserver zum Senden des `X-Frame-Options` Headers für alle Webseiten zu bewegen, fügen Sie folgenden Eintrag in die Seiten-Konfiguration ein:

    Header always set X-Frame-Options "sameorigin"

Um Apache so zu konfigurieren, dass `X-Frame-Options` mit dem Wert `deny` gesendet wird, fügen Sie folgenden Eintrag in die Seiten-Konfiguration ein:

```html
Header set X-Frame-Options "deny"
```

Um Apache so zu konfigurieren, dass `X-Frame-Options` mit dem Wert `allow-from` einen bestimmten Host freigibt, fügen Sie folgenden Eintrag in die Seiten-Konfiguration ein:

```html
Header set X-Frame-Options "allow-from https://example.com/"
```

### nginx Konfiguration

Um einen nginx Server zum Senden des `X-Frame-Options` Header aufzufordern, fügen Sie folgenden Eintrag entweder zu Ihrer http, server oder location Konfiguration hinzu:

    add_header X-Frame-Options sameorigin;

### IIS Konfiguration

Um den IIS Server zum Senden des `X-Frame-Options` Headers aufzufordern, ergänzen Sie folgenden Eintrag entsprechend in Ihrer `Web.config` Datei:

```xml
<system.webServer>
  ...

  <httpProtocol>
    <customHeaders>
      <add name="X-Frame-Options" value="sameorigin" />
    </customHeaders>
  </httpProtocol>

  ...
</system.webServer>
```

### HAProxy Konfiguration

Um HAProxy zum Senden des `X-Frame-Options` Headers aufzufordern, fügen Sie diesen Eintrag zu Ihrer front-end, listen oder backend Konfiguration hinzu:

    rspadd X-Frame-Options:\ sameorigin

Alternatively, in newer versions:

```html
http-response set-header X-Frame-Options sameorigin
```

## Spezifikationen

| Spezifikation        | Bezeichnung                       |
| -------------------- | --------------------------------- |
| {{RFC("7034")}} | HTTP Header Field X-Frame-Options |

## Browser Kompatibilität

{{Compat("http.headers.X-Frame-Options")}}

## Siehe auch

- [`frame-ancestors` (CSP)](https://developer.mozilla.org/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
- [ClickJacking Defenses - IEBlog](https://blogs.msdn.com/b/ie/archive/2009/01/27/ie8-security-part-vii-clickjacking-defenses.aspx)
- [Combating ClickJacking with X-Frame-Options - IEInternals](https://blogs.msdn.com/b/ieinternals/archive/2010/03/30/combating-clickjacking-with-x-frame-options.aspx)
- [HTTP Header Field X-Frame-Options - RFC 7034](https://tools.ietf.org/html/rfc7034)
- [CSP Level 2 frame-ancestors directive](https://w3c.github.io/webappsec/specs/content-security-policy/#directive-frame-ancestors)
