---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
---

{{HTTPSidebar}}

Le code de statut de réponse HTTP **`428 Precondition Required`** indique que le serveur requiert que la requête soit [conditionnelle](/fr/docs/Web/HTTP/Conditional_requests).

Généralement, cela signifie qu'il **manque** un en-tête de précondition, comme [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match).

Lorsqu'un en-tête de précondition **ne correspond pas** à l'état du serveur, la réponse doit être [`412 Precondition Failed`](/fr/docs/Web/HTTP/Status/412).

## Statut

```
428 Precondition Required
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les requêtes conditionnelles en HTTP](/fr/docs/Web/HTTP/Conditional_requests)
- [`If-Match`](/fr/docs/Web/HTTP/Headers/If-Match)
- [`412`](/fr/docs/Web/HTTP/Status/412)
