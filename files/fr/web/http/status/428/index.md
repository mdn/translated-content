---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/428
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`428 Precondition Required`** indique que le serveur requiert que la requête soit [conditionnelle](/fr/docs/Web/HTTP/Conditional_requests).

Généralement, cela signifie qu'il **manque** un en-tête de précondition, comme {{HTTPHeader("If-Match")}}.

Lorsqu'un en-tête de précondition **ne correspond pas** à l'état du serveur, la réponse doit être {{HTTPStatus(412)}} `Precondition Failed`.

## Statut

    428 Precondition Required

## Spécifications

| Spécification                                                        | Titre                        |
| -------------------------------------------------------------------- | ---------------------------- |
| {{RFC("6585", "428 Precondition Required" , "3")}} | Additional HTTP Status Codes |

## Voir aussi

- [Les requêtes conditionnelles en HTTP](/fr/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus(412)}}
