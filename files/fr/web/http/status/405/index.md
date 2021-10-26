---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/405
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`405`\*\***` Method Not Allowed`\*\* indique que la méthode utilisée pour la requête est connue du serveur mais qu'elle n'est pas supportée par la ressource ciblée.

Le serveur doit générer un champ **`Allow`** dans le header en cas de réponse 405, contenant la liste des méthodes supportées par la ressource ciblée.

## Statut

    405 Method Not Allowed

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "405 Method Not Allowed" , "6.5.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- {{HTTPHeader("Allow")}}
