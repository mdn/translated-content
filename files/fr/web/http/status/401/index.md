---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
translation_of: Web/HTTP/Status/401
browser-compat: http.status.401
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`401 Unauthorized`** indique que la requête n'a pas été effectuée, car il manque des informations d'authentification valides pour la ressource visée.

Ce statut est envoyé avec un en-tête de réponse [`WWW-Authenticate`](/fr/docs/Web/HTTP/Headers/WWW-Authenticate) qui décrit la méthode pour s'authentifier correctement.

Ce statut est similaire à [`403`](/fr/docs/Web/HTTP/Status/403) mais, dans ce cas, une authentification est possible pour accéder à la ressource.

## Statut

```
401 Unauthorized
```

## Exemple de réponse

```
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La gestion de l'authentification en HTTP](/fr/docs/Web/HTTP/Authentication)
- [`WWW-Authenticate`](/fr/docs/Web/HTTP/Headers/WWW-Authenticate)
- [`Authorization`](/fr/docs/Web/HTTP/Headers/Authorization)
- [`Proxy-Authorization`](/fr/docs/Web/HTTP/Headers/Proxy-Authorization)
- [`Proxy-Authenticate`](/fr/docs/Web/HTTP/Headers/Proxy-Authenticate)
- [`403`](/fr/docs/Web/HTTP/Status/403), [`407`](/fr/docs/Web/HTTP/Status/407)
