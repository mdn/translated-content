---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
---

{{HTTPSidebar}}

Le code de réponse HTTP **`506 Variant Also Negotiates`** peut être donné dans le contexte du protocole de **négociation de contenu transparente** (voir [RFC 2295](https://tools.ietf.org/html/rfc2295)). Ce protocole permet à un client de recevoir la meilleure variante d'une ressource donnée, quand le serveur prend en charge plusieurs variantes.

Le statut **`Variant Also Negotiates`** indique une erreur de configuration interne du serveur dans laquelle la variante choisie est elle-même configurée pour s'engager dans la négociation de contenu, et n'est donc pas un point final de négociation approprié.

## Statut

```
506 Variant Also Negotiates
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
