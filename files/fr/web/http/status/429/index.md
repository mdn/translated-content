---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
---

{{HTTPSidebar}}

Le code de statut de réponse HTTP **`429 Too Many Requests`** indique que l'utilisateur a envoyé trop de requêtes en un temps donné.

Un en-tête [`Retry-After`](/fr/docs/Web/HTTP/Headers/Retry-After) peut être inclus dans cette réponse afin d'indiquer le temps à attendre pour effectuer une nouvelle requête.

## Statut

```
429 Too Many Requests
```

## Exemple

```
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Retry-After`](/fr/docs/Web/HTTP/Headers/Retry-After)
- [HTTP/1.1&nbsp;: Définitions des codes de statut (en anglais)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [Solution en Python&nbsp;: comment éviter l'erreur HTTP 429 en Python (en anglais)](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
