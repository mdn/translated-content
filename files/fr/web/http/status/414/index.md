---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
tags:
  - Code de statut
  - Erreur client
  - HTTP
  - Reference
translation_of: Web/HTTP/Status/414
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`414 URI Too Long`** indique que l'URI demandé par le client est plus longue que ce que le serveur est disposé à interpréter.

Il existe quelques rares cas de figure pour lesquels cela peut se produire :

- un client a mal converti une requête {{HTTPMethod("POST")}} vers une requête {{HTTPMethod("GET")}} qui contient de nombreuses informations,
- un client est descendu dans une boucle de redirection (par exemple, un URI de redirection qui pointe vers un suffixe de lui-même),
- un serveur est sous le coup d'une attaque par un client qui tente d'exploiter des failles de sécurité potentielles.

## Statut

    414 URI Too Long

## Spécifications

| Spécification                                                | Titre                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "414 URI Too Long" , "6.5.12")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Voir aussi

- {{Glossary("URI")}}
