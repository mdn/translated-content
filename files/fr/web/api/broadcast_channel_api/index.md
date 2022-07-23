---
title: Broadcast Channel API
slug: Web/API/Broadcast_Channel_API
page-type: web-api-overview
tags:
  - API
  - Broadcast Channel API
  - HTML API
  - Overview
  - Reference
browser-compat: api.BroadcastChannel
---
{{DefaultAPISidebar("Broadcast Channel API")}}

L'**API Broadcast Channel** permet la communication entre {{glossary("browsing context", "contextes de navigation")}} (c'est à dire, _windows_, _tabs_, _frames_, ou _iframes_) et workers d'une même {{glossary("origin", "origine)}}.

{{AvailableInWorkers}}

En créant un objet {{domxref("BroadcastChannel")}}, vous pouvez y recevoir n'importe quel message qui lui a été envoyé. Vous n'avez pas à maintenir de référence aux frames ou worker avec lesquels vous souhaitez communiquer : car ils s'"abonnent" à un canal dédié en construisant leur propre {{domxref("BroadcastChannel")}} avec le même nom, et obtiennent un canal de communication bi-directionnel avec chacun d'eux.

![Les principes de l'API Broadcast Channel](broadcastchannel.png)

## L'interface Broadcast Channel

### Créer ou rejoindre un canal

Un client rejoint un canal de diffusion en créant un objet {{domxref("BroadcastChannel")}}. Son [constructeur](/fr/docs/Web/API/BroadcastChannel/BroadcastChannel) prend un unique paramètre: le _nom_ du canal. S'il est le premier à se connecter à ce nom de canal de diffusion, alors le canal sous-jacent est créé.

```js
// Connexion au canal de diffusion
const bc = new BroadcastChannel('canal_test');
```

### Envoi d'un message

Il suffit d'appeler la méthode {{domxref("BroadcastChannel.postMessage", "postMessage()")}} sur l'objet `BroadcastChannel` créé, qui prend n'importe quel objet comme argument. Un exemple de message:

```js
// Exemple d'envoi d'un message très simple
bc.postMessage('Ceci est un message test.');
```

Les données envoyées sur le canal sont serialisées via l'[algorithme de clonage de structure](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Ceci implique que vous pouvez envoyer un large spectre de type de données de manière sure sans avoir les serialisés par vous même.

Cette API n'associe aucune sémantique particulière aux messages, c'est donc au code de savoir à quel sorte de message s'attendre et quel usage il peut en tirer.

### Réception d'un message

Lorsqu'un message est posté, un événement [`message`](/fr/docs/Web/API/BroadcastChannel/message_event) est distribué sur chaque objet {{domxref("BroadcastChannel")}} connecté à ce canal. Une fonction peut être exécutée pour le traitement de cet événement en utilisant le gestionnaire d'événement {{domxref("BroadcastChannel/message_event", "onmessage")}}:

```js
// Un gestionnaire affichant simplement les messages sur la console:
bc.onmessage = event => { console.log(event); }
```

### Déconnexion d'un canal

Pour quitter un canal, appellez la méthode {{domxref("BroadcastChannel.close", "close()")}} de l'objet. Cet appel déconnectera l'objet du canal sous-jacent permettant au ramasse-miètes de s'éxecuter.

```js
// Déconnexion du canal
bc.close();
```

## Conclusion

L'interface intégrée de l'API Broadcast Channel permet une communication inter-contexte. Il peut être utilisé pour détecter des actions utilisateur dans d'autre onglets d'une même origine, tel qu'une connexion ou déconnexion d'utilisateur du site.

Le protocole ne définit pas le contenu des messages ni leur signification. Il sera à la charge du développeur d'implanter leur propre jeu de messages et traitements associés.

## Spécifications

{{Specifications}}

## Compatibilité navigateur

{{Compat}}

## Voir aussi

- {{domxref("BroadcastChannel")}}, l'interface implantant cette API.
