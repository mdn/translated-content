---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
translation_of: Web/HTTP/Status/406
browser-compat: http.status.406
---
{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`406 Not Acceptable`** indique qu'il est impossible de servir une réponse qui satisfait aux critères définis dans les en-têtes de négociation de contenu et que le serveur ne souhaite pas fournir de représentation par défaut.

Les en-têtes de négociation de contenu incluent&nbsp;:

- [`Accept`](/fr/docs/Web/HTTP/Headers/Accept)
- [`Accept-Encoding`](/fr/docs/Web/HTTP/Headers/Accept-Encoding)
- [`Accept-Language`](/fr/docs/Web/HTTP/Headers/Accept-Language)

En réalité, cette erreur est très rarement utilisée. Plutôt que de répondre avec ce code, incompréhensible de l'utilisateur (et difficile à résoudre), les serveurs ignorent les en-têtes en question et renvoient une page à l'utilisateur. On part du principe que, même si l'utilisateur ne sera pas complètement satisfait, ce scénario est préférable à un code d'erreur.

Si un serveur renvoie ce code d'erreur, le corps du message doit contenir la liste des représentations disponibles pour cette ressource afin de pouvoir choisir manuellement parmi celles-ci.

## Statut

```
406 Not Acceptable
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Accept`](/fr/docs/Web/HTTP/Headers/Accept)
- [`Accept-Encoding`](/fr/docs/Web/HTTP/Headers/Accept-Encoding)
- [`Accept-Language`](/fr/docs/Web/HTTP/Headers/Accept-Language)
- [Négociation du contenu en HTTP](/fr/docs/Web/HTTP/Content_negotiation)
