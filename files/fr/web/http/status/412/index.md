---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
translation_of: Web/HTTP/Status/412
browser-compat: http.status.412
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`412 Precondition Failed`** indique que l'accès à la ressource visée a été refusé. Cela arrive avec les requêtes conditionnelles lorsque les méthodes utilisées ne sont pas [`GET`](/fr/docs/Web/HTTP/Methods/GET) ou [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD) et que la condition définie par les en-têtes [`If-Unmodified-Since`](/fr/docs/Web/HTTP/Headers/If-Unmodified-Since) ou [`If-None-Match`](/fr/docs/Web/HTTP/Headers/If-None-Match) n'est pas respectée. Dans ce cas, la requête, généralement un téléversement ou une modification d'une ressource, ne peut être appliquée et ce code de réponse d'erreur est renvoyé.

## Statut

```
412 Precondition Failed
```

## Exemples

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Éviter les conflits d'édition

Grâce aux en-têtes `ETag` et [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match), il est possible de détecter des conflits d'édition sur une même ressource.

Par exemple, pour un wiki dont l'empreinte du contenu du document édité serait placée dans l'en-tête `Etag` de la réponse&nbsp;:

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Lors d'un enregistrement demandé côté client qui correspond à une requête HTTP [`POST`](/fr/docs/Web/HTTP/Methods/POST), la requête contiendra un en-tête [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match) contenant la valeur de l'`ETag` afin de vérifier la fraîcheur du contenu.

```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Si les deux empreintes ne correspondent pas, cela signifie que le document a été édité entre-temps et une erreur `412 Precondition Failed` est déclenchée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`304 Not Modified`](/fr/docs/Web/HTTP/Status/304)
- [`If-Unmodified-Since`](/fr/docs/Web/HTTP/Headers/If-Unmodified-Since)
- [`If-None-Match`](/fr/docs/Web/HTTP/Headers/If-None-Match)
- [`428`](/fr/docs/Web/HTTP/Status/428)
