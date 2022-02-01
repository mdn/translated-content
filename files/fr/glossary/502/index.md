---
title: '502'
slug: Glossary/502
tags:
  - '502'
  - Erreurs
  - Glossaire
  - HTTP
  - Infrastructure
  - Navigation
translation_of: Glossary/502
original_slug: Glossaire/502
---
Le code erreur {{Glossary("HTTP")}} correspond à « Bad Gateway ».

Un {{Glossary("Server", "serveur")}} peut agir en tant que passerelle ou proxy (intermédiaire) entre un client (comme votre navigateur internet) et un serveur distant. Quand vous faites une requête pour accéder à une {{Glossary("URL")}}, le serveur passerelle va relayer votre demande au serveur distant. Le code erreur "502" signifie que le serveur distant a retourné une réponse invalide.

En temps normal, le serveur distant peut répondre (c'est-à-dire qu'il a la possibilité de fournir une réponse à la passerelle/proxy), mais ne supporte pas le même protocole d'échange de données que la passerelle/proxy. Le {{Glossary("Protocol", "protocole")}} internet est sans équivoque et le code erreur 502 est généralement utilisé quand l'une des deux machines est incorrectement ou incomplètement configurée.
