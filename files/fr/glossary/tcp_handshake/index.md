---
title: Liaison à trois voies
slug: Glossary/TCP_handshake
---

{{glossary('Transmission_Control_Protocol_(TCP)','TCP (Transmission Control Protocol)')}} est un protocole hôte à hôte de la couche transport permettant la communication en mode connexion entre deux ordinateurs sur un réseau IP. TCP utilise une **liaison à trois voies** (ou TCP-Handshake, trois messages ou **SYN-SYN-ACK**) pour établir une connexion TCP / IP sur un réseau IP : **SYN** pour synchronize et **ACK** pour acuittement. Les trois messages transmis par TCP pour négocier et démarrer une session TCP sont respectivement surnommés _SYN, SYN-ACK_ et _ACK:_ **syn**chronize, **syn**chronize **ac**quittement, et **ac**quittement. Le mécanisme à trois messages est conçu pour que deux ordinateurs souhaitant échanger des informations puissent négocier les paramètres de la connexion avant de transmettre des données telles que des requêtes de navigateur HTTP.

L'hôte, généralement le navigateur, envoie un paquet TCP SYNchronize au serveur. Le serveur reçoit le SYN et renvoie un accusé de réception SYNchronize. L'hôte reçoit le SYN-ACK du serveur et envoie un acquittement. Le serveur reçoit ACK et la connexion de socket TCP est établie.

Cette étape de négociation se produit après une {{glossary('DNS', 'recherche DNS')}} et avant la négociation {{glossary('TLS')}}, lors de la création d'une connexion sécurisée. La connexion peut être terminée indépendamment de chaque côté de la connexion via une liaison à quatre voies.

## Voire aussi

- [Transport Layer Security (TLS) protocol](/fr/docs/Web/Security/Transport_Layer_Security)
- {{Glossary("HTTPS")}}
- [<i lang="en">Transport Layer Security</i>](https://fr.wikipedia.org/wiki/Transport_Layer_Security) sur Wikipédia
