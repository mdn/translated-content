---
title: CORS
slug: Glossary/CORS
translation_of: Glossary/CORS
---
**CORS** (Cross-Origin Resource Sharing) ist ein Mechanismus, der es erlaubt Ressourcen von anderen Servern zu laden, als dem, der die Webseite initial ausgeliefert hat. Das wird normalerweise von Browsern auf Grund der [same-origin security policy](/de/docs/Web/Security/Same-origin_policy) verhindert.

Mit gewissen {{Glossary("Header", "HTTP Headern")}} können Webserver jedoch die eigenen Ressourcen für den Zugriff von anderen Quellen freigeben.

## Erfahren Sie mehr

### Generelle Informationen

- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS) auf MDN
- [Cross-Origin Resource Sharing](https://de.wikipedia.org/wiki/Cross-Origin_Resource_Sharing) auf Wikipedia

### CORS Header

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Gibt an, ob die Ressource generell von anderen Quellen aufgerufen werden darf und wenn ja, von welchen.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Gibt an, ob die Ressource auch dann abgerufen werden darf, wenn im Request der [credentials mode](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) auf [include](https://fetch.spec.whatwg.org/#concept-request-credentials-mode) gesetzt ist.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Gibt an, welche HTTP Header über Quellgrenzen hinweg erlaubt sind.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Gibt an, welche HTTP Methoden über Quellgrenzen hinweg erlaubt sind.
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Gibt an, welche HTTP Header generell in einer Antwort vom Server angezeigt werden können.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Gibt an, wie lange die Informationen aus der [preflight-Anfrage](/de/docs/Glossary/Preflight_request) gültig sind.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Gibt in der [preflight-Anfrage](/de/docs/Glossary/Preflight_request) an, welche HTTP Header bei der folgenden Anfrage genutzt werden.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Gibt in der [preflight-Anfrage](/de/docs/Glossary/Preflight_request) an, welche HTTP Methode bei der folgenden Anfrage genutzt wird.
- {{HTTPHeader("Origin")}}
  - : Gibt die Quelle des ursprünglichen Requests an.

### Technische Referenz

- [Fetch Spezifikation](https://fetch.spec.whatwg.org)

{{QuickLinksWithSubpages("/en-US/docs/Glossary")}}
