---
title: Introduction à WebRTC
slug: Web/API/WebRTC_API/Session_lifetime
---

{{DefaultAPISidebar("WebRTC")}}

> [!NOTE]
> WebRTC vous permet de faire de la communication pair-à-pair dans une application du navigateur.

## Etablir la connexion

La connexion initiale entre les pairs doit être accomplie par un service d'application qui se charge de la découverte des utilisateurs, communication, translation d'adresse réseau (NAT) avec les flux de données.

### Signalisation

La signalisation est le mécanisme par lequel les pairs envoient des messages de contrôle à chacun dans le but d'établir le protocole de communication, le canal et la méthode. Ceux-ci ne sont pas spécifiés dans le standard WebRTC. En fait, le dévelopeur peut choisir n'importe quel protocole de message (comme SIP ou XMPP), et n'importe quel canal de communication duplex (comme WebSocket ou XMLHttpRequest) en tandem avec une API de connexion persistante à un serveur (comme l'[API Google Channel](https://developers.google.com/appengine/docs/python/channel/overview)) pour AppEngine.

## Transmission

## Reception
