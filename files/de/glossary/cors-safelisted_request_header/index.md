---
title: CORS-zugelassene Anfrage-Header
slug: Glossary/CORS-safelisted_request_header
tags:
  - CORS
translation_of: Glossary/CORS-safelisted_request_header
original_slug: Glossary/CORS-zugelassener-anfrage-header
---
Ein [CORS-zugelassener Anfrage-Header](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) ist einer der folgenden [HTTP Header](/de/docs/Web/HTTP/Headers):

- {{HTTPHeader("Accept")}},
- {{HTTPHeader("Accept-Language")}},
- {{HTTPHeader("Content-Language")}},
- {{HTTPHeader("Content-Type")}}.

Wenn eine Anfrage nur diese Header verwendet (und die Werte der Header unten beschriebene Anforderungen erfüllen), braucht die Anfrage kein {{glossary("preflight request")}} im [CORS](/de/docs/Glossary/CORS)-Kontext übermitteln.

Man kann weitere Header über den {{HTTPHeader("Access-Control-Allow-Headers")}}-Header zulassen und listet man obige Header dort auf, lassen sich folgende Sicherheitsrestriktionen umgehen:

#### Zusätzliche Restriktionen

CORS-zugelassene Header müssen außerdem folgende Anforderungen erfüllen, um ein CORS-zugelassender Anfrage-Header zu sein:

- Für {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}}: Kann lediglich Werte aus den Zeichen `0-9`, `A-Z`, `a-z`, Space oder `*,-.;=`.
- Für {{HTTPHeader("Accept")}} und {{HTTPHeader("Content-Type")}}: Darf keinen _CORS-unsicheren Anfrage-Header-Byte_: `"():<>?@[\]{}`, Delete, Tab and Kontrollzeichen: 0x00 to 0x19 enthalten.
- Für {{HTTPHeader("Content-Type")}}: Muss einen der MIME-Typen `application/x-www-form-urlencoded`, `multipart/form-data`, oder `text/plain` (Parameter wie ein [Qualitätswert (Quality value)](/de/docs/Glossary/Quality_values) werden ignoriert)
- Für andere Header: Die Länge des Wertes darf 128 Bytes nicht überschreiten.

## Mehr erfahren

- {{Glossary("CORS-safelisted response header")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Request header")}}
