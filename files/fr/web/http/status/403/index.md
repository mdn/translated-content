---
title: 403 Forbidden
slug: Web/HTTP/Status/403
translation_of: Web/HTTP/Status/403
browser-compat: http.status.403
---
{{HTTPSidebar}}

Le code de statut d'erreur de réponse HTTP **`403 Forbidden`** indique qu'un serveur comprend la requête mais refuse de l'autoriser.

Ce statut est similaire au statut [`401`](/fr/docs/Web/HTTP/Status/401), mais dans ce cas, la ré-authentification ne changera rien. L'accès est définitivement interdit et est lié à la logique de l'application, par exemple manque d'une permission d'accès à une ressource.

## Statut

```
403 Forbidden
```

## Exemple de réponse

```
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`401`](/fr/docs/Web/HTTP/Status/401)
- [HTTP/1.1&nbsp;: Définitions des codes de statut (en anglais)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
