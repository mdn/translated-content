---
title: 202 Accepted
slug: Web/HTTP/Status/202
tags:
  - Code de statut
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/202
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`202`\*\***` Accepted`\** indique que la requête a été reçue mais qu'aucune action n'a encore été entreprise. Cette réponse est sans suite (*non-committal\*) : HTTP ne renverra pas de réponse asynchrone ultérieure pour indiquer le résultat du traitement de la requête. Ce code est utile pour les cas où c'est un autre processus ou serveur qui gère la requête (ou lorsqu'on effectue un traitement en masse).

## Statut

    202 Accepted

## Spécifications

| Spécification                                            | Titre                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "202 Accepted" , "6.3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- {{HTTPHeader("Accept")}}
