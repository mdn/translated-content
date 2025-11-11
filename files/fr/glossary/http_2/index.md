---
title: HTTP/2
slug: Glossary/HTTP_2
l10n:
  sourceCommit: 30d3d33b476209c803c07316eaa580474addfff2
---

**HTTP/2** est une révision majeure du [Protocole de réseau HTTP](/fr/docs/Web/HTTP).

Les objectifs principaux de HTTP/2 sont de réduire la {{Glossary("latency", "latence")}} et le {{Glossary("head of line blocking", "blocage de tête de file")}}, en permettant le multiplexage complet des requêtes et des réponses, la prise en charge de la priorisation des requêtes, et de minimiser la surcharge du protocole grâce à la compression efficace des champs d'en-tête HTTP (HPACK).

HTTP/2 a également introduit un mécanisme appelé Server Push, qui permettait à un serveur d'envoyer des ressources à un client en prévision de ses besoins imminents. Server Push s'est avéré difficile à mettre en œuvre en pratique et a été supprimé de la plupart des moteurs de navigateur majeurs. Il a été remplacé par des méthodes alternatives telles que [`rel="preload"`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) et {{HTTPStatus("103", "103 Early hints")}}.

HTTP/2 ne modifie pas la sémantique de HTTP, ce qui signifie que les concepts fondamentaux présents dans HTTP/1.1, tels que les méthodes, les codes d'état, les URI et les champs d'en-tête, restent identiques. HTTP/2 modifie la façon dont les données sont formatées (encadrées) et transportées entre le client et le serveur, qui gèrent tous deux l'ensemble du processus, et masque la complexité du protocole dans une couche d'encadrement. En conséquence, toutes les applications existantes peuvent être diffusées via le protocole sans modification.

## Voir aussi

- [HTTP](/fr/docs/Web/HTTP) sur MDN
- Termes associés du glossaire&nbsp;:
  - {{Glossary("HTTP")}}
  - {{Glossary("latency", "Latence")}}, {{Glossary("head of line blocking", "Blocage de tête de file")}}
- {{RFC("7540", "Server Push", "8.2")}}
- [HTTP/2](https://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol/2) sur Wikipédia
