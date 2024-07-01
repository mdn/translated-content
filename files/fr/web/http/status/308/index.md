---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
---

{{HTTPSidebar}}

Le code de statut de réponse de redirection **`308 Permanent Redirect`** indique que la ressource demandée à définitivement été déplacée vers l'URL contenue dans l'en-tête [`Location`](/fr/docs/Web/HTTP/Headers/Location). Un navigateur redirigera vers cette page et les moteurs de recherche mettront à jour leurs liens vers la ressource (en termes de référencement, cela implique que le flux de référencement est envoyé vers la nouvelle URL).

La méthode de requête et son corps ne sont pas modifiés, toutefois [`301`](/fr/docs/Web/HTTP/Status/301) peut parfois changer la méthode vers [`GET`](/fr/docs/Web/HTTP/Methods/GET).

> **Note :** Certaines applications Web peuvent utiliser `308 Permanent Redirect` de façon non standard et pour d'autres usages. Par exemple, Google Drive utilise la réponse `308 Resume Incomplete` pour indiquer au client un chargement incomplet qui est bloqué ([source](https://developers.google.com/drive/v3/web/manage-uploads#resumable)).

## Statut

```
308 Permanent Redirect
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`301 Moved Permanently`](/fr/docs/Web/HTTP/Status/301)
- [`302 Found`](/fr/docs/Web/HTTP/Status/302), la redirection temporaire
