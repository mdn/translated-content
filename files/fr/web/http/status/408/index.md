---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Référence(2)
translation_of: Web/HTTP/Status/408
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`408`\*\***` Request Timeout`\*\* indique que le serveur souhaiterait clôturer cette connexion inutilisée. Pour certains serveurs, ce code est parfois envoyé sur une connexion inactive sans qu'il y ait nécessairement eu de requête de la part du client.

Un serveur doit envoyer l'en-tête {{HTTPHeader("Connection")}} avec la valeur `"close"` en réponse, puisque 408 implique que le serveur a décidé de fermer la connexion plutôt que de continuer à attendre.

Cette réponse est plus utilisée depuis que certains navigateurs, comme Chrome, Firefox 27+ ou IE9, utilisent le mécanisme HTTP de pré-connexion qui permet d'accélérer la navigation. On notera également que certains serveurs ferment purement et simplement la connexion, sans renvoyer ce message.

## Statut

    408 Request Timeout

## Spécifications

| Spécification                                                    | Titre                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "408 Request Timeout" , "6.5.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
