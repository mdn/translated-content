---
title: RTCPeerConnection.setConfiguration()
slug: Web/API/RTCPeerConnection/setConfiguration
tags:
  - Experimental
  - Méthode
  - Reference
  - WebRTC
  - setConfiguration
translation_of: Web/API/RTCPeerConnection/setConfiguration
---
{{APIRef("WebRTC")}}{{SeeCompatTable}}

La méthode **`RTCPeerConnection.setConfiguration()`** définit la configuration courante pour la connexion {{domxref("RTCPeerConnection")}} en fonction des valeurs des propriétés de l'objet {{domxref("RTCConfiguration")}} passé en argument. Cela permet de modifier les serveurs ICE et les règles de transport utilisés par la connexion.

Le cas d'usage le plus probable (bien qu'il ne soit probablement pas répandu) est le remplacement des serveurs ICE à utiliser. Voici deux scénarios pour lesquels cela pourrait se produire :

- L'objet {{domxref("RTCPeerConnection")}} a été instancié sans qu'un serveur ICE soit spécifié. Si le constructeur {{domxref("RTCPeerConnection.RTCPeerConnection()", "RTCPeerConnection()")}} a été appelé sans paramètre, on doit alors appeler `setConfiguration()` pour ajouter des serveurs ICE avant que la négociation ICE puisse avoir lieu.
- La connexion doit être renégociée et il faut utiliser un autre ensemble de serveurs ICE pour une certaine raison (ex. l'utilisateur s'est déplacé dans une nouvelle région et il faut donc utiliser de nouveaux serveurs ICE régionaux). Dans ce cas, on pourra appeler `setConfiguration()` pour passer sur les serveurs régionaux puis initier [un redémarrage ICE](/en-US/docs/Web/API/WebRTC_API/Session_lifetime#ICE_restart).

> **Note :** On ne peut pas changer les informations d'identité d'une connexion une fois que celle-ci a été créée.

## Syntaxe

    RTCPeerConnection.setConfiguration(configuration);

### Paramètres

- `configuration`
  - : Un objet {{domxref("RTCConfiguration")}} qui fournit les options à appliquer à la connexion. Les changements ne sont pas utilisés en addition mais remplacent les valeurs existantes.

### Exceptions

- `InvalidAccessError`
  - : Une ou plusieurs URL indiquées dans `configuration.iceServers` sont des serveurs {{Glossary("TURN")}} mais les informations d'authentification ne sont pas complètes (il manque {{domxref("RTCIceServer.username")}} ou {{domxref("RTCIceServer.credentials")}}). Cela empêche une connexion/identification correcte sur le serveur.
- `InvalidModificationError`
  - : L'objet `configuration` contient des changements relatifs à l'identité alors que la connexion a déjà ces informations indiquées. Cela se produit lorsque `configuration.peerIdentity` ou `configuration.certificates` sont définies et que leurs valeurs diffèrent de la configuration courante.
- `InvalidStateError`
  - : La connexion ({{domxref("RTCPeerConnection")}}) est fermée.
- `SyntaxError`
  - : Une ou plusieurs URL fournies dans la liste `configuration.iceServers` sont invalides.

## Exemples

Dans cet exemple, on a déjà determiné qu'un redémarrage ICE est nécessaire et que la négociation ICE doit se faire sur un nouveau serveur.

```js
var restartConfig = { iceServers: [{
                          urls: "turn:asia.myturnserver.net",
                          username: "allie@oopcode.com",
                          credential: "topsecretpassword"
                      }]
};

myPeerConnection.setConfiguration(restartConfig);

myPeerConnection.createOffer({"iceRestart": true}).then(function(offer) {
  return myPeerConnection.setLocalDescription(offer);
})
.then(function() {
  // send the offer to the other peer using the signaling server
})
.catch(reportError);
```

Pour commencer, on crée une {{domxref("RTCConfiguration")}}, `restartConfig`, en indiquant le nouveau serveur ICE et les informations de connexion associées. Cet objet est alors passé à `setConfiguration()`. La négociation ICE est redémarrée via {{domxref("RTCPeerConnection.createOffer()", "createOffer()")}} pour laquelle on indique `true` pour l'option `iceRestart`. Ensuite, on gère le processus habituel en définissant la description locale de l'offre et en envoyant cette offre à l'autre pair.

## Spécifications

| Spécification                                                                                                                                                                | État                             | Commentaires        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('WebRTC 1.0', '#widl-RTCPeerConnection-setConfiguration-void-RTCConfiguration-configuration', 'setConfiguration()')}} | {{Spec2('WebRTC 1.0')}} | Initial definition. |

## Compatibilité des navigateurs

{{Compat("api.RTCPeerConnection.setConfiguration")}}

## Voir aussi

- {{domxref("RTCPeerConnection.getConfiguration()")}}
- {{domxref("RTCConfiguration")}}
- {{domxref("RTCPeerConnection")}}
