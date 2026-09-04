---
title: Blocage de tête de file
short-title: Blocage HOL
slug: Glossary/Head_of_line_blocking
l10n:
  sourceCommit: 30d3d33b476209c803c07316eaa580474addfff2
---

En réseau informatique, le **head-of-line blocking** (_blocage de tête de file_, ou _HOL blocking_) désigne un goulot d'étranglement de performance qui se produit lorsqu'une file d'attente de {{Glossary("packet", "paquets")}} est bloquée par le premier paquet, même si d'autres paquets pourraient être traités.

En HTTP/1.1, les requêtes sur une même connexion {{Glossary("TCP")}} sont généralement envoyées de façon séquentielle — une nouvelle requête ne peut pas être envoyée tant qu'une réponse à la précédente n'a pas été reçue. Cela peut entraîner des problèmes de blocage de tête de file même s'il existe plusieurs connexions TCP entre le client et le serveur.

HTTP/1.1 définit une fonctionnalité optionnelle appelée _HTTP pipelining_ qui a tenté, sans succès, de contourner ce blocage en permettant d'envoyer des requêtes sans attendre les réponses précédentes. Malheureusement, la conception d'HTTP/1.1 impose que les réponses soient renvoyées dans le même ordre que les requêtes, donc le blocage de tête de file peut toujours se produire si une requête prend beaucoup de temps. Des conditions réseau comme la congestion, la perte de paquets (et les retransmissions TCP qui en résultent), ou le {{Glossary("TCP slow start", "démarrage lent de TCP")}} peuvent aussi retarder la transmission et bloquer les réponses suivantes.

{{Glossary("HTTP 2", "HTTP/2")}} réduit le blocage de tête de file au niveau applicatif grâce à l'introduction du _multiplexage_ des requêtes et réponses. Plusieurs requêtes et réponses peuvent ainsi être entrelacées sur une seule connexion TCP à l'aide de flux numérotés indépendamment, et la priorisation des flux aide le serveur à décider lesquels envoyer en premier. Cependant, une perte de paquet au niveau transport peut toujours provoquer un blocage de tête de file sur tous les flux, car HTTP/2 fonctionne sur TCP&nbsp;: un segment TCP perdu peut bloquer tous les flux de la connexion jusqu'à la retransmission des données perdues.

{{Glossary("HTTP 3", "HTTP/3")}} élimine le blocage de tête de file au niveau transport en utilisant {{Glossary("QUIC")}} sur {{Glossary("UDP")}}&nbsp;: le problème de blocage de tête de file n'existe donc plus en HTTP. QUIC fournit plusieurs flux indépendants avec une reprise sur perte par flux, de sorte qu'une perte de paquet n'affecte que le flux concerné et non toute la connexion. Cela supprime le problème de blocage de tête de file au niveau TCP.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("HTTP")}}, {{Glossary("HTTP 2", "HTTP/2")}}, {{Glossary("HTTP 3", "HTTP/3")}}
  - {{Glossary("TCP")}}, {{Glossary("QUIC")}}, {{Glossary("UDP")}}
- [Remplir la page&nbsp;: comment fonctionnent les navigateurs](/fr/docs/Web/Performance/Guides/How_browsers_work)
- [Blocage de tête de file sur Wikipédia <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Head-of-line_blocking)
