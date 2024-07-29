---
title: En-tête de réponse sûr pour le CORS
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 4e8db9b4072e90e349f3c18b2c6edfe898cfe6a2
---

{{GlossarySidebar}}

Un _en-tête de réponse sûr pour le CORS_ est un [en-tête HTTP](/fr/docs/Web/HTTP/Headers) d'une réponse [CORS](/fr/docs/Web/HTTP/CORS) dont on considère qu'il est sûr et peut être exposé aux scripts côté client. Seuls les en-têtes de réponse sûrs sont disponibles pour les pages web.

Par défaut, la liste des en-têtes de réponse sûrs contient&nbsp;:

- [`Cache-Control`](/fr/docs/Web/HTTP/Headers/Cache-Control)
- [`Content-Language`](/fr/docs/Web/HTTP/Headers/Content-Language)
- [`Content-Length`](/fr/docs/Web/HTTP/Headers/Content-Length)
- [`Content-Type`](/fr/docs/Web/HTTP/Headers/Content-Type)
- [`Expires`](/fr/docs/Web/HTTP/Headers/Expires)
- [`Last-Modified`](/fr/docs/Web/HTTP/Headers/Last-Modified)
- [`Pragma`](/fr/docs/Web/HTTP/Headers/Pragma)

Des en-têtes supplémentaires peuvent être indiqués comme sûr à l'aide de l'en-tête [`Access-Control-Expose-Headers`](/fr/docs/Web/HTTP/Headers/Access-Control-Expose-Headers).

> [!NOTE]
> Initialement, [`Content-Length`](/fr/docs/Web/HTTP/Headers/Content-Length) ne faisait pas partie de la liste par défaut des en-têtes de réponse sûrs (voir [la <i lang="en">pull request</i> 626 du dépôt Fetch](https://github.com/whatwg/fetch/pull/626)).

## Exemples

### Étendre la liste sûre

La liste des en-têtes de réponse sûrs pour le CORS peut être étendue à l'aide de l'en-tête [`Access-Control-Expose-Headers`](/fr/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)&nbsp;:

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## Voir aussi

- [HTTP](/fr/docs/Web/HTTP)
- [En-têtes HTTP](/fr/docs/Web/HTTP/Headers)
- [`Access-Control-Expose-Headers`](/fr/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
- Entrées du [glossaire](/fr/docs/Glossary)
  - [CORS](/fr/docs/Glossary/CORS)
  - [En-tête de requête sûr pour le CORS](/fr/docs/Glossary/CORS-safelisted_request_header)
  - [Nom d'en-tête interdit](/fr/docs/Glossary/Forbidden_header_name)
  - [En-tête de requête](/fr/docs/Glossary/Request_header)
