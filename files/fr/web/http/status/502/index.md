---
title: 502 Bad Gateway
slug: Web/HTTP/Status/502
tags:
  - Code de statut
  - HTTP
  - Server error
translation_of: Web/HTTP/Status/502
---
{{HTTPSidebar}}

Le code de réponse HTTP d'erreur serveur **`502`\*\***` Bad Gateway`\*\* indique que le serveur, agissant comme une passerelle ou un proxy, a reçu une réponse invalide depuis le serveur en amont.

Une {{interwiki("wikipedia", "Passerelle_(informatique)", "passerelle")}} peut faire référence à différents éléments en réseaux et une erreur 502 est habituellement quelque chose que vous ne pouvez pas corriger, mais qui nécessite une correction sur le serveur web ou le proxy par lequel vous passez pour y accéder.

## Statut

    502 Bad Gateway

## Spécifications

| Spécification                                                | Titre                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "502 Bad Gateway" , "6.6.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "502")}}

## Voir aussi

- {{HTTPStatus(504)}}
