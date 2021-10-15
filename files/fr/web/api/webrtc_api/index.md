---
title: L'API WebRTC
slug: Web/API/WebRTC_API
tags:
  - API
  - API WebRTC
  - Atterrissage
  - Audio
  - Conference
  - Media
  - Réseau
  - Video
  - WebRTC
  - diffusion
translation_of: Web/API/WebRTC_API
---
{{APIRef("WebRTC")}}

**WebRTC** (Web Real-Time Communications) est une technologie qui permet aux applications et sites web de capturer et éventuellement de diffuser des médias audio et/ou vidéo, ainsi que d'échanger des données arbitraires entre les navigateurs sans passer par un intermédiaire.

L'ensemble de normes qui comprend WebRTC permet de partager des données et d'effectuer des téléconférences peer-to-peer, sans exiger que l'utilisateur installe des plug-ins ou tout autre logiciel tiers.

WebRTC se compose de plusieurs API et protocoles interdépendants qui fonctionnent ensemble pour y parvenir. La documentation que vous trouverez ici vous aidera à comprendre les principes de base de WebRTC, comment configurer et utiliser les connexions de données et multimédias, et plus encore.

## Concepts et utilisation du WebRTC

WebRTC a plusieurs objectifs et chevauche considérablement l'API Media Capture and Streams. Ensemble, ils offrent de puissantes capacités multimédias au web, notamment la prise en charge des conférences audio et vidéo, l'échange de fichiers, la gestion des idendités et l'interfaçage avec les systèmes téléphoniques hérités en envoyant des signaux {{Glossary("DTMF")}}. Les connexions entre pairs peuvent être établies sans nécessiter de pilotes ou de plug-ins spéciaux, et peuvent souvent être établies sans aucun serveur intermédiaire.

Les connexions entre deux pairs sont créées à l'aide de - et représentées par - l'interface {{domxref("RTCPeerConnection")}}. Une fois la connexion établie et ouverte, des flux multimédias ({{domxref("MediaStream")}}s) et/ou des canaux de données ({{domxref("RTCDataChannel")}}s) peuvent être ajoutés à la connexion.

Les flux multimédias peuvent être constitués de n'importe quel nombre de pistes d'informations multimédias; les pistes, qui sont représentées par des objets basés sur l'interface {{domxref("MediaStreamTrack")}}, peuvent contenir l'un des nombreux types de données multimédias, y compris audio, vidéo et texte (comme des sous-titres ou même des noms de chapitre). La plupart des flux se composent d'au moins une piste audio et probablement également d'une piste vidéo, et peuvent être utilisés pour envoyer et recevoir à la fois des médias en direct ou des informations multimédias stockées (comme un film diffusé en continu).

Vous pouvez également utiliser la connexion entre deux pairs pour échanger des données binaires arbitraires à l'aide de l'interface {{domxref("RTCDataChannel")}}. Cela peut être utilisé pour les informations de canal arrière, l'échange de métadonnées, les paquets d'état du jeu, les transferts de fichiers ou même comme canal principal pour le transfert de données.

**_plus de détails et de liens vers des guides et didacticiels pertinents nécessaires_**

## Interfaces WebRTC

Étant donné que WebRTC fournit des interfaces qui fonctionnent ensemble pour accomplir une variété de tâches, nous avons divisé les interfaces dans la liste ci-dessous par catégorie. Veuillez consulter la barre latérale pour une liste alphabétique.

### Configuration et gestion de la connexion

Ces interfaces sont utilisées pour configurer, ouvrir et gérer les connexions WebRTC.

- {{domxref("RTCPeerConnection")}}
  - : Représente une connexion WebRTC entre l'ordinateur local et un homologue distant. Il est utilisé pour gérer un flux de données efficace entre les deux pairs.
- {{domxref("RTCDataChannel")}}
  - : Représente un canal de données bidirectionnel entre deux homologues d'une connexion.
- {{domxref("RTCDataChannelEvent")}}
  - : Représente les événements qui se produisent lors de l'attachement d'un {{domxref("RTCDataChannel")}} à un {{domxref("RTCPeerConnection")}}. Le seul événement envoyé avec cette interface est {{event("datachannel")}}.
- {{domxref("RTCSessionDescription")}}
  - : Représente les paramètres d'une session. Chaque `RTCSessionDescription` se compose d'une description {{domxref("RTCSessionDescription.type", "type")}} indiquant quelle partie du processus de négociation offre / réponse elle décrit et du descripteur {{Glossary("SDP")}} du session.
- {{domxref("RTCSessionDescriptionCallback")}}
  - : Le RTCSessionDescriptionCallback est passé dans l'objet {{domxref("RTCPeerConnection")}} lors de la demande de création d'offres ou de réponses.
- {{domxref("RTCStatsReport")}}
  - : Fournit des informations détaillant les statistiques pour une connexion ou pour une piste individuelle sur la connexion; le rapport peut être obtenu en appelant {{domxref("RTCPeerConnection.getStats()")}}.
- {{domxref("RTCIceCandidate")}}
  - : Représente un serveur d'établissement de connectivité Internet (ICE) candidat pour l'établissement d'un {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCIceTransport")}}
  - : Représente des informations sur un transport d'établissement de connectivité Internet (ICE).
- {{domxref("RTCIceServer")}}
  - : Définit comment se connecter à un seul serveur ICE (tel qu'un serveur STUN ou TURN).
- {{domxref("RTCPeerConnectionIceEvent")}}
  - : Représente les événements qui se produisent en relation avec les candidats ICE avec la cible, généralement un {{domxref("RTCPeerConnection")}}. Un seul événement est de ce type: {{event("icecandidate")}}.
- {{domxref("RTCRtpSender")}}
  - : Gère l'encodage et la transmission des données pour un {{domxref("MediaStreamTrack")}} sur un {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCRtpReceiver")}}
  - : Gère la réception et le décodage des données pour un {{domxref("MediaStreamTrack")}} sur un {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCRtpContributingSource")}}
  - : Contient des informations sur une source contributive donnée (CSRC), y compris l'heure la plus récente où un paquet que la source a contribué a été lu.
- {{domxref("RTCTrackEvent")}}
  - : Indique qu'un nouvel {{domxref("MediaStreamTrack")}} entrant a été créé et qu'un objet {{domxref("RTCRtpReceiver")}} associé a été ajouté à l'objet {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCConfiguration")}}
  - : Utilisé pour fournir des options de configuration pour un [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection).

<!---->

- {{domxref("RTCSctpTransport")}}
  - : Fournit des informations qui décrivent un transport Stream Control Transmission Protocol (**{{Glossary("SCTP")}}**) et fournit aussi un moeyn d'accéder au transport Datagram Transport Layer Security (**{{Glossary("DTLS")}}**) sur lequel les paquets SCTP pour tous les canaux de données d'un [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection) sont envoyés et reçus.

### Identité et sécurité

L'API WebRTC comprend un certain nombre d'interfaces pour gérer la sécurité et l'identité.

- {{domxref("RTCIdentityProvider")}}
  - : Permet à un agent utilisateur de demander qu'une assertion d'identité soit générée ou validée.
- {{domxref("RTCIdentityAssertion")}}
  - : Représente l'identité de l'homologue distant de la connexion actuelle. Si aucun pair n'a encore été défini et vérifié, cette interface renvoie `null`. Une fois défini, il ne peut pas être modifié.
- {{domxref("RTCIdentityProviderRegistrar")}}
  - : Enregistre un fournisseur d'identité (idP).
- {{domxref("RTCIdentityEvent")}}
  - : Représente une assertion d'identité générée par un fournisseur d'identité (idP). C'est généralement pour un {{domxref("RTCPeerConnection")}}. Le seul événement envoyé avec ce type est {{event("identityresult")}}.
- {{domxref("RTCIdentityErrorEvent")}}
  - : Représente une erreur associée au fournisseur d'identité (idP). C'est généralement pour un {{domxref("RTCPeerConnection")}}. Deux événements sont envoyés avec ce type: {{event("idpassertionerror")}} et {{event("idpvalidationerror")}}.
- {{domxref("RTCCertificate")}}
  - : Représente un certificat qu'un {{domxref("RTCPeerConnection")}} utilise pour s'authentifier.

### Téléphonie

Ces interfaces sont liées à l'interactivité avec les réseaux téléphoniques publics commutés (RTPC).

- {{domxref("RTCDTMFSender")}}
  - : Gère le codage et la transmission de la signalisation DTMF (Dual-tone multi-frequency) pour une {{domxref("RTCPeerConnection")}}.
- {{domxref("RTCDTMFToneChangeEvent")}}
  - : Indique l'occurence d'une multi-fréquence bicolore (DTMF). Cet événement ne bouillonne pas (sauf indication contraire) et n'est pas annulable (sauf indication contraire).

## Guides

- [Introduction aux protocoles WebRTC](/fr/docs/Web/API/WebRTC_API/Protocols)
  - : Cet article présente les protocoles sur lesquels l'API WebRTC est construite.
- [Connectivité WebRTC](/fr/docs/Web/API/WebRTC_API/Connectivity)
  - : Un guide sur le fonctionnement des connexions WebRTC et sur la manière dont les différents protocoles et interfaces peuvent être utilisés ensemble pour créer de puissantes applications de communication.
- [Durée de vie d'une session WebRTC](/fr/docs/Web/API/WebRTC_API/Session_lifetime)
  - : WebRTC vous permet de créer une communication d'égal à égal de données arbitraires, audio ou vidéo - ou toute combinaison de celles-ci - dans une application de navigateur. Dans cet article, nous examinerons la durée de vie d'une session WebRTC, de l'établissement de la connexion à la fermeture de la connexion lorsqu'elle n'est plus nécessaire.
- [Signalisation et appel vidéo bidirectionnel](/fr/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
  - : Un tutoriel et un exemple qui transforme un système de chat basé sur WebSocket créé pour un exemple précédent et ajoute la prise en charge de l'ouverture d'appels vidéo entre les participants. La connexion WebSocket du serveur de discussion est utilisée pour la signalisation WebRTC.
- [Utilisation des canaux de données WebRTC](/fr/docs/Web/API/WebRTC_API/Using_data_channels)
  - : Ce guide explique comment utiliser une connexion homologue et un {{domxref("RTCDataChannel")}} associé pour échanger des données arbitraires entre deux homologues.
- [Utilisation de DTMF avec WebRTC](/fr/docs/Web/API/WebRTC_API/Using_DTMF)
  - : La prise en charge de WebRTC pour l'interaction avec les passerelles reliées aux systèmes téléphoniques de la vieille école inclut la prise en charge de l'envoi de tonalités DTMF à l'aide de l'interface {{domxref("RTCDTMFSender")}}. Ce guide montre comment procéder.

## Tutoriels

- [Amélioration de la compatibilité à l'aide de WebRTC adapter.js](/fr/docs/Web/API/WebRTC_API/adapter.js)
  - : L'organisation WebRTC [fournit sur GitHub l'adaptateur WebRTC](https://github.com/webrtc/adapter/) pour contourner les problèmes de compatibilité dans les implémentations WebRTC de différents navigateurs. L'adaptateur est un shim JavaScript qui permet à votre code d'être écrit selon la spécification afin qu'il "fonctionne simplement" dans tous les navigateurs prenant en charge WebRTC.
- [Prendre des photos fixes avec WebRTC](/fr/docs/Web/API/WebRTC_API/Taking_still_photos)
  - : Cet article explique comment utiliser WebRTC pour accéder à l'appareil photo sur un ordinateur ou un téléphone mobile avec prise en charge WebRTC et prendre une photo avec.
- [Un exemple RTCDataChannel simple](/fr/docs/Web/API/WebRTC_API/Simple_RTCDataChannel_sample)
  - : L'interface {{domxref("RTCDataChannel")}} est une fonctionnalité qui vous permet d'ouvrir un canal entre deux pairs sur lequel vous pouvez envoyer et recevoir des données arbitraires. L'API est intentionnellement similaire à l'[API WebSocket](/fr/docs/Web/API/WebSockets_API), de sorte que le même modèle de programmation peut être utilisé pour chacun.

## Ressources

### Protocoles

#### Protocoles propres au WebRTC

- [Négociation de protocole de couche application pour les communications Web en temps réel](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-alpn/)
- [Codec audio WebRTC et exigences de traitement](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-audio/)
- [Canaux de données RTCWeb](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-channel/)
- [Protocole de canal de données RTCWeb](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-data-protocol/)
- [Communication Web en temps réel (WebRTC): transport multimédia et utilisation de RTP](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-rtp-usage/)
- [Architecture de sécurité WebRTC](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-security-arch/)
- [Transports pour RTCWEB](https://datatracker.ietf.org/doc/draft-ietf-rtcweb-transports/)

#### Protocoles de support associés

- [Établissement de connectivité interactif (ICE): un protocole pour la traversée du traducteur d'adresses réseau (NAT) pour le protocole offre / réponse](https://tools.ietf.org/html/rfc5245)
- [Utilitaires de traversée de session pour NAT (STUN)](https://tools.ietf.org/html/rfc5389)
- [Schéma d'URI pour les utilitaires de traversée de session pour le protocole NAT (STUN)](https://tools.ietf.org/html/rfc7064)
- [Traversée à l'aide de relais autour des identificateurs de ressources uniformes NAT (TURN)](https://tools.ietf.org/html/rfc7065)
- [Un modèle d'offre / réponse avec protocole de description de session (SDP)](https://tools.ietf.org/html/rfc3264)
- [Extension des utilitaires de traversée de session pour NAT (STUN) pour l'autorisation de tiers](https://datatracker.ietf.org/doc/draft-ietf-tram-turn-third-party-authz/)

## Spécifications

| Spécification                                            | Statut                                               | Commentaire                                                                              |
| -------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {{SpecName('WebRTC 1.0')}}                     | {{Spec2('WebRTC 1.0')}}                     | La définition initiale de l'API de WebRTC.                                               |
| {{SpecName('Media Capture')}}                 | {{Spec2('Media Capture')}}                 | La définition initiale de l'objet véhiculant le flux de contenu multimédia.              |
| {{SpecName('Media Capture DOM Elements')}} | {{Spec2('Media Capture DOM Elements')}} | La définition initiale sur la façon d'obtenir un flux de contenu à partir d'éléments DOM |

En plus de ces spécifications définissant l'API nécessaire pour utiliser WebRTC, il existe plusieurs protocoles, répertoriés sous [ressources](#Protocols).

## Voir aussi

- {{domxref("MediaDevices")}}
- {{domxref("MediaStreamEvent")}}
- {{domxref("MediaStreamConstraints")}}
- {{domxref("MediaStreamTrack")}}
- {{domxref("MessageEvent")}}
- {{domxref("MediaStream")}}
- [Firefox multi-flux et renégociation pour Jitsi Videobridge](https://hacks.mozilla.org/2015/06/firefox-multistream-and-renegotiation-for-jitsi-videobridge/)
- [Peering via le brouillard WebRTC avec SocketPeer](https://hacks.mozilla.org/2015/04/peering-through-the-webrtc-fog-with-socketpeer/)
- [À l'intérieur du bus de fête: création d'une application Web avec plusieurs flux vidéo en direct + graphiques interactifs](https://hacks.mozilla.org/2014/04/inside-the-party-bus-building-a-web-app-with-multiple-live-video-streams-interactive-graphics/)
