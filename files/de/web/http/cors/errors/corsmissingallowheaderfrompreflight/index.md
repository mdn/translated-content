---
title: >-
  Grund: fehlendes Token ‘xyz’ in CORS-Kopfzeile 'Access-Control-Allow-Headers'
  aus dem CORS-Preflight-Kanal
slug: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
tags:
  - CORS
  - CORSMissingAllowHeaderFromPreflight
  - Cross-Origin
  - Fehler
  - HTTP
  - HTTPS
  - Meldungen
  - Sicherheit
  - Ursachen
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowHeaderFromPreflight
original_slug: Web/HTTP/CORS/Errors/CORSFehlenderAllowHeaderAusPreflight
---
{{HTTPSidebar}}

## Grund

    Grund: fehlendes Token ‘xyz’ in CORS-Kopfzeile ‘Access-Control-Allow-Headers’ aus dem CORS-Preflight-Kanal

## Was ist schiefgelaufen?

Der `Access-Control-Allow-Headers` Header wird vom Server gesendet, damit der Client weiß welche Header er für {{Glossary("CORS")}} Requests unterstützt. Der Wert für `Access-Control-Allow-Headers` ist eine durch Komma getrennte Liste von Header-Namen, wie z.B. "`X-Custom-Information`" oder jeder der Standart-Header (aber kein Basic-Header, die immer erlaubt sind).

Dieser Fehler tritt auf, wenn versucht wird einen Preflight auszuführen mit einem Header, der nicht ausdrücklich erlaubt ist, d.h. der nicht im `Access-Control-Allow-Headers` Header enthalten ist, der vom Server gesendet wird. Um dies zu beheben, muss der Server so angepasst werden, dass er den angegebenen Header zulässt, oder man vermeidet es diesen Header zu verwenden.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [HTTP Header](/de/docs/Web/HTTP/Headers)
