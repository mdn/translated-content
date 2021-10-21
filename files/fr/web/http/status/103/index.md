---
title: 103 Early Hints
slug: Web/HTTP/Status/103
tags:
  - HTTP
  - Reference
  - Statut
translation_of: Web/HTTP/Status/103
---
{{HTTPSidebar}}{{Draft}}

Le code de statut de réponse  **`103 Early Hints`** est principalement utilisé avec l'en-tête HTTP {{HTTPHeader("Link")}} afin de permettre à l'application cliente de commencer le chargement des ressources tandis que le serveur prépare une réponse.

## Syntaxe

    103 Early Hints

## Spécifications

| Spécification                                | État     | Commentaire      |
| -------------------------------------------- | -------- | ---------------- |
| {{RFC(8297, "103 Early Hints")}} | IETF RFC | Première version |

## Compatibilité des navigateurs

{{Compat("http.status.103")}}

## Voir aussi

- {{HTTPHeader("Link")}}
