---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
tags:
  - '508'
  - Code de statut
  - Erreur serveur
  - HTTP
translation_of: Web/HTTP/Status/508
---
{{HTTPSidebar}}

Le code de réponse HTTP **`508 Loop Detected`** peut être donné dans le contexte du protocol **`Web Distributed Authoring and Versioning`** (WebDAV).

Il indique que le serveur termine une opération car il rencontre une boucle infinie pendant le traitement de la requête avec "Depth: infinity". Ce statut indique que l'entièreté de l'opération a échouée.

## Statut

    508 Loop Detected

## Spécifications

| Spécification                                                | Titre                                    |
| ------------------------------------------------------------ | ---------------------------------------- |
| {{RFC("5842", "508 Loop Detected" , "7.2")}} | Web Distributed Authoring and Versioning |
