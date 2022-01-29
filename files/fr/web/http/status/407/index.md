---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
translation_of: Web/HTTP/Status/407
browser-compat: http.status.407
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`407 Proxy Authentication Required`** indique que la requête n'a pas été appliquée à cause d'un manque d'authentification pour un [serveur mandataire (<i lang="en">proxy</i>)](/fr/docs/Glossary/Proxy_server) situé entre le navigateur et le serveur qui peut accéder à la ressource demandée.

Ce code de statut est envoyé avec l'en-tête [`Proxy-Authenticate`](/fr/docs/Web/HTTP/Headers/Proxy-Authenticate) qui contient les informations décrivant la façon de s'authentifier correctement.

## Statut

```
407 Proxy Authentication Required
```

## Exemple de réponse

```
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
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
- [`401`](/fr/docs/Web/HTTP/Status/401), [`403`](/fr/docs/Web/HTTP/Status/403)
