---
title: Introduction à l'architecture WebRTC
slug: Web/API/WebRTC_API/Connectivity
tags:
  - WebRTC
translation_of: Web/API/WebRTC_API/Connectivity
original_slug: Web/Guide/API/WebRTC/WebRTC_architecture
---
(AKA "WebRTC et l'océan des acronymes") WebRTC comporte de nombreuses parties distinctes et cela peut être accablant et source de confusion pour les nouveaux venus. Cet article a pour but d'expliquer quelles sont toutes ses parties, et comment elles s'imbriquent.

## Qu’est-ce que ICE?

[Interactive Connectivity Establishment (ICE)](http://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) est un cadre qui permet à votre navigateur web de se connecter avec des pairs. Il y a plusieurs raisons pour qu’une connexion directe entre un pair A et un pair B ne fonctionne pas. Il a besoin de contourner les pare-feux qui pourraient empêcher la connexion de s’ouvrir, il doit vous attribuer une adresse unique si votre appareil n'a pas une adresse IP publique comme la plupart du temps et transmettre des données via un serveur si votre routeur ne permet pas de vous connecter directement avec des pairs. ICE utilise certaines des techniques suivantes décrites ci-dessous pour y parvenir :

## Qu’est-ce que STUN?

[Session Traversal Utilities for NAT (STUN)](http://fr.wikipedia.org/wiki/Simple_Traversal_of_UDP_through_NATs) (acronyme dans un acronyme) est un protocole qui permet de découvrir votre adresse publique et de déterminer toute restriction dans votre routeur qui empêcherait une connexion directe avec un pair.

Le client enverra une demande à un serveur STUN sur internet qui répondra avec l'adresse du client public et informera si le client est accessible derrière un routeur NAT.

## Qu’est-ce que NAT?

[Network Address Translation (NAT)](http://fr.wikipedia.org/wiki/Network_address_translation) est utilisé pour donner à votre appareil une adresse IP publique. Un routeur aura une adresse IP publique et chaque périphérique connecté au routeur aura une adresse IP privée. Les demandes seront traduites de l'adresse IP privée de l'appareil vers l'IP publique du routeur avec un port unique. De cette façon, vous n'avez pas besoin d’avoir une adresse IP publique unique pour chaque périphérique, mais pouvez encore être découvert sur internet.

Certains routeurs auront des restrictions sur ceux qui peuvent se connecter aux dispositifs sur le réseau. Cela peut signifier que, même si nous avons l'adresse IP publique, trouvée par le serveur STUN, tout le monde ne peut pas créer une connexion. Dans ce cas, il faut se tourner vers le TURN.

## Qu’est-ce que TURN?

Certains routeurs utilisant NAT emploient une restriction appelée ‘Symmetric NAT’. Cela signifie que le routeur n'accepte que les connexions de pairs auxquelles vous vous êtes déjà connecté.

[Traversal Using Relays around NAT (TURN)](http://en.wikipedia.org/wiki/TURN) Doit contourner la restriction de NAT Symétrique en ouvrant une connexion avec un serveur TURN et retransmettre toutes les informations par le biais de ce serveur. Vous devrez créer une connexion avec un serveur TURN et dire à tous les pairs d'envoyer des paquets au serveur qui vous seront alors expédiés. Cela vient évidemment avec une certaine surcharge et n'est donc utilisé que s'il n'y a pas d'autres alternatives.

## Qu’est-ce que SDP?

[Session Description Protocol (SDP)](http://en.wikipedia.org/wiki/Session_Description_Protocol) est une norme décrivant le contenu multimédia de la connexion comprenant la résolution, les formats, les codecs, le cryptage, etc., afin que les deux pairs puissent se comprendre une fois le transfert des données en cours. Ce n'est pas le média lui-même, mais plus les métadonnées.

## Qu’est-ce qu'une Offre/Réponse et un Canal de Signal?

Malheureusement WebRTC ne peut pas créer de connexions sans une sorte de serveur au milieu. Nous appelons cela le Canal de Signal (Signal Channel). C'est une sorte de canal de communication pour échanger des informations avant de configurer une connexion, que ce soit par e-mail, carte postale ou pigeon voyageur... C’est comme bon vous semble.

L’information que nous avons besoin d'échanger est l'Offre et la Réponse qui contient juste le SDP mentionné ci-dessus.

Le pair A, qui sera l'initiateur de la connexion, va créer une offre. Il enverra ensuite cette offre au pair B en utilisant le Canal de Signal choisi. Le pair B recevra l’offre du Canal de Signal et créera la Réponse. Il renverra ensuite tout ceci au pair A via le Canal de Signal.

## Qu’est-ce qu’un candidat ICE?

Autant que d'échanger des informations sur les médias (cf. Offre/Réponse et SDP), les pairs doivent échanger des informations sur la connexion réseau. Ceci est connu comme étant un candidat ICE et détaille les méthodes disponibles que le pair est en mesure de communiquer (directement ou via un serveur TURN).

## L'échange entier dans un diagramme compliqué

[![Un schéma architectural complet montrant l'ensemble du processus WebRTC.](webrtc-complete-diagram.png)](https://hacks.mozilla.org/2013/07/webrtc-and-the-ocean-of-acronyms/)
