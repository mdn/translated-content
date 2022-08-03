---
title: RTCIceServer
slug: Web/API/RTCIceServer
translation_of: Web/API/RTCIceServer
---
{{APIRef("WebRTC")}}

RTCIceServer définit comment se connecter à un serveur ICE unique (comme un serveur {{Glossary("STUN")}} ou {{Glossary("TURN")}}). Il comprend à la fois l'URL et les éventuelle informations d'identification nécessaires pour se connecter au serveur.

## Propriétés

- {{domxref("RTCIceServer.credential", "credential")}} {{optional_inline}}
  - : Les informations d'identification à utiliser lors de la connexion au serveur. Celles‑ci sont utilisées uniquement si `RTCIceServer` est un serveur TURN.
- {{domxref("RTCIceServer.credentialType", "credentialType")}} {{optional_inline}}
  - : Si `RTCIceServer` est un serveur TURN, cet attribut spécifie quel type d'information d'identification doit être utilisé lors de la connexion. Ce doit être l'une des valeurs définies par l'énumération {{domxref("RTCIceCredentialType")}}. La valeur par défaut est `password`.
- {{domxref("RTCIceServer.url", "url")}} {{deprecated_inline}}
  - : Cette propriété obsolète est une chaîne spécifiant l'URL d'un serveur ICE unique. **Ne pas utiliser cette propriété; utiliser plutôt {{domxref("RTCIceServer.urls")}}**. Étant donné que de nombreux livres et exemples anciens l'utilisent encore, nous l'incluons pour aider les développeurs à mettre à jour leur code ou donner un sens a des exemples plus anciens.
- {{domxref("RTCIceServer.urls", "urls")}}
  - : Cette propriété est **obligatoire**, elle peut être soit une seule {{domxref("DOMString")}} ou un tableau de {{domxref("DOMString")}} , spécifiant chacun une URL qui peut être utilisée pour se connecter au serveur.
- {{domxref("RTCIceServer.username", "username")}} {{optional_inline}}
  - : Si `RTCIceServer` est un serveur TURN, alors ceci est le nom d'utilisateur à utiliser pendant le processus d'authentification.

Évitez de spécifier un nombre inutilement élevé d'URL dans la propriété `urls`; le temps de démarrage de votre connexion va augmenter sensiblement. Chaque serveur dans la liste sera contacté et testé avant d'en choisir un pour être utilisé pour la négociation.

> **Note :** Les anciennes versions de la spécification WebRTC incluent une propriété `url` au lieu de `urls`; cela a été changé afin de vous permettre de spécifier plusieurs adresses pour chaque serveur dans la liste, comme le montre l'exemple ci-dessous.

## Constantes

### Enumeration RTCIceCredentialType

L'enumeration `RTCIceCredentialType` spécifie les valeurs qui peuvent être renvoyés par la propriété credentialType pour définir quel type d'authentification est fournie dans la propriété {{domxref("RTCIceServer.credential")}}. Cela peut être l'une des valeurs ci‑dessous.

| Constante    | Description                                                                                     |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `"password"` | un mot de passe d'aithentification. Voir {{RFC (5389, "", 10.2)}} pour plus de détails. |
| `"token"`    | La créance est un jeton d'accès à utiliser avec un système d'authentification tiers.            |

## Exemple

La configuration ci-dessous établit deux serveurs ICE. Le premier, `stun:stun.services.mozilla.com`, nécessite une authentification, le nom d'utilisateur et le mot de passe sont donc fournis. Le second serveur a deux URLs : `stun:stun.example.com` et `stun:stun-1.example.com`.

```js
var configuration = {
  iceServers: [{
    urls: "stun:stun.services.mozilla.com",
    username: "louis@mozilla.com",
    credential: "webrtcdemo"
  }, {
    urls: [
      "stun:stun.example.com",
      "stun:stun-1.example.com"
    ]
   }]
};

var pc = new RTCPeerConnection(configuration);
```

Une fois l'objet de configuration créé, il est passé dans le constructeur {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}} pour l'utiliser comme configuration de la nouvelle connexion entre pairs.

## Compatibilité des navigateurs

{{Compat("api.RTCIceServer")}}

## Voir aussi

- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCConfiguration")}}
- [Durée de vie d'une session WebRTC](/fr/docs/Web/API/WebRTC_API/Session_lifetime)
- [Connectivité WebRTC](/fr/docs/Web/API/WebRTC_API/Connectivity)
