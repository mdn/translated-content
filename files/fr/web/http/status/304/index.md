---
title: 304 Not Modified
slug: Web/HTTP/Status/304
translation_of: Web/HTTP/Status/304
browser-compat: http.status.304
---
{{HTTPSidebar}}

Le code de réponse de redirection **`304 Not Modified`** indique qu'il n'y a pas besoin de retransmettre les ressources demandées. C'est une redirection implicite vers une ressource mise en cache. Cela survient lorsque la méthode de requête est [sûre (<i lang="en">safe</i>)](/fr/docs/Glossary/safe) (par exemple une requête [`GET`](/fr/docs/Web/HTTP/Methods/GET) ou [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD)), ou lorsque la requête est conditionnelle et utilise l'en-tête [`If-None-Match`](/fr/docs/Web/HTTP/Headers/If-None-Match) ou [`If-Modified-Since`](/fr/docs/Web/HTTP/Headers/If-Modified-Since).

La réponse [`200 OK`](/fr/docs/Web/HTTP/Status/200) équivalente aurait inclus les en-têtes [`Cache-Control`](/fr/docs/Web/HTTP/Headers/Cache-Control), [`Content-Location`](/fr/docs/Web/HTTP/Headers/Content-Location), [`Date`](/fr/docs/Web/HTTP/Headers/Date), [`ETag`](/fr/docs/Web/HTTP/Headers/ETag), [`Expires`](/fr/docs/Web/HTTP/Headers/Expires), et [`Vary`](/fr/docs/Web/HTTP/Headers/Vary).

> **Note :** Dans les navigateurs, [les outils de développement réseau](/fr/docs/Tools/Network_Monitor) créent des requêtes supplémentaires qui conduisent à des réponses `304`. Ainsi l'accès au cache local est visible par les développeurs.

## Statut

```
304 Not Modified
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

Les différents navigateurs se comportent différemment lorsque la réponse contient, incorrectement, un corps pour les connexions persistantes. Voir [`204 No Content`](/en-US/docs/Web/HTTP/Status/204) pour plus de détails.

## Voir aussi

- [`If-Modified-Since`](/fr/docs/Web/HTTP/Headers/If-Modified-Since)
- [`If-None-Match`](/fr/docs/Web/HTTP/Headers/If-None-Match)
