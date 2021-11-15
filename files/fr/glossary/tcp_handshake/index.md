---
title: Liaison à trois voies
slug: Glossary/TCP_handshake
tags:
  - TCP
translation_of: Glossary/TCP_handshake
original_slug: Glossaire/TCP_handshake
---
<p>{{glossary('Transmission_Control_Protocol_(TCP)','TCP (Transmission Control Protocol)')}} est un protocole hôte à hôte de la couche transport permettant la communication en mode connexion entre deux ordinateurs sur un réseau IP. TCP utilise une <strong>liaison à trois voies</strong> (ou TCP-Handshake, trois messages ou <strong>SYN-SYN-ACK</strong>) pour établir une connexion TCP / IP sur un réseau IP : <strong>SYN </strong>pour synchronize et <strong>ACK</strong> pour acuittement. Les trois messages transmis par TCP pour négocier et démarrer une session TCP sont respectivement surnommés <em>SYN, SYN-ACK</em> et <em>ACK: </em><strong>syn</strong>chronize, <strong>syn</strong>chronize <strong>ac</strong>quittement, et <strong>ac</strong>quittement. Le mécanisme à trois messages est conçu pour que deux ordinateurs souhaitant échanger des informations puissent négocier les paramètres de la connexion avant de transmettre des données telles que des requêtes de navigateur HTTP.</p>

<p>L'hôte, généralement le navigateur, envoie un paquet TCP SYNchronize au serveur. Le serveur reçoit le SYN et renvoie un accusé de réception SYNchronize. L'hôte reçoit le SYN-ACK du serveur et envoie un acquittement. Le serveur reçoit ACK et la connexion de socket TCP est établie.</p>

<p>Cette étape de négociation se produit après une {{glossary('DNS', 'recherche DNS')}} et avant la négociation {{glossary('TLS')}}, lors de la création d'une connexion sécurisée. La connexion peut être terminée indépendamment de chaque côté de la connexion via une liaison à quatre voies.</p>

<h2 id="Voire_aussi">Voire aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/Security/Transport_Layer_Security">Transport Layer Security (TLS) protocol</a></li>
 <li>{{Glossary("HTTPS")}}</li>
 <li>{{Interwiki("wikipedia", "Transport Layer Security")}} on Wikipedia</li>
</ul>
