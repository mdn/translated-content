---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
tags:
  - Erreur serveur
  - HTTP
  - Statut de réponse
translation_of: Web/HTTP/Status/506
---
{{HTTPSidebar}}

Le code de réponse HTTP **`506 Variant Also Negotiates`** peut être donné dans le contexte du protocol **`Transparent Content Negotiation`** (voir [RFC 2295](https://tools.ietf.org/html/rfc2295)). Ce protocol active un client pour recevoir la meilleure variante d'une ressource donnée, où le serveur supporte de multiples variantes.

Le statut **`Variant Also Negotiates`** indique une erreur de configuration interne du serveur dans laquelle la variante choisie est elle-même configurée pour s'engager dans la négociation de contenu, et n'est donc pas un point final de négociation approprié.

## Status

    506 Variant Also Negotiates

## Specifications

| Specification                                                            | Title                                   |
| ------------------------------------------------------------------------ | --------------------------------------- |
| {{RFC("2295", "506 Variant Also Negotiates" , "8.1")}} | Transparent Content Negotiation in HTTP |
