---
title: L’essentiel du WebRTC
slug: Web/API/WebRTC_API/Signaling_and_video_calling
tags:
  - WebRTC
translation_of: Web/API/WebRTC_API/Signaling_and_video_calling
translation_of_original: Web/API/WebRTC_API/WebRTC_basics
original_slug: Web/Guide/API/WebRTC/WebRTC_basics
---
Maintenant que vous comprenez l'[architecture WebRTC](/fr/docs/Web/Guide/API/WebRTC/WebRTC_architecture), vous pouvez passer à cet article, qui vous emmène à travers la création d'une application RTC multi-navigateurs.A la fin de cet article vous devriez pouvoir créer un canal de données et de médias pair à pair qui fonctionne

## Contenu semi-ancien, à partir de RTCPeerConnection

Les informations ci-dessous proviennent de RTCPeerConnection; elles pourraient rester ici, comme aller ailleurs. Mais elles ne font pas partie de cette page. Alors pendant que je trie cette page, elles seront ici, jusqu'à ce que je sache où elles appartiennent pour de vrai.

## Usage basique

l'utilisation de RTCPeerConnection implique la négociation d'une connexion entre votre machine et une machine distante,et ce, en générant {{interwiki("wikipedia", "Session Description Protocol")}} a échanger entre les deux. L'appelant commence le processus en envoyant une offre à l'appareil distant, qui répond par l'acceptation ou le rejet de la demande de connexion.

Les deux parties (l'appelant et l'appelé) doivent mettre en place leurs propres instances de RTCPeerConnection pour représenter leurs extrémités de la connexion peer-to-peer:

```js
var pc = new RTCPeerConnection();
pc.onaddstream = function(obj) {
  var vid = document.createElement("video");
  document.appendChild(vid);
  vid.srcObject = obj.stream;
}

// Helper functions
function endCall() {
  var videos = document.getElementsByTagName("video");
  for (var i = 0; i < videos.length; i++) {
    videos[i].pause();
  }

  pc.close();
}

function error(err) {
  endCall();
}
```

**Initialiser un appel**

l'appelant doit utiliser {{domxref("navigator.getUserMedia()")}} pour obtenir un flux vidéo, puis ajouter ce flux à l'instance de RTCPeerConnection. Une fois que cela a été fait, il doit appeler {{domxref("RTCPeerConnection.createOffer()")}} pour créer une offre,puis la configurer et l'envoyer a un serveur faisant office d'intermediaire.

```js
// recuperer la liste des "amis" a partir du serveur
// l'utilisateur selectionne un amis avec qui lancer la connection
navigator.getUserMedia({video: true}, function(stream) {
  // l'ajout d'un stream locale ne declanche pas onaddstream,
  // donc il faut l'appeler manuellement.
  pc.onaddstream = e => video.src = URL.createObjectURL(e.stream);
  pc.addStream(stream);

  pc.createOffer(function(offer) {
    pc.setLocalDescription(offer, function() {
      // envoi de l'offre au serveur qui se charge de la transmettre a "l'ami" choisit precedemment.
    }, error);
  }, error);
});
```

**Répondre à un appel**

sur l'autre machine, l'ami recevra l'offre à partir du serveur en utilisant le protocole approprié (définit par le serveur). Une fois que l'offre arrive,{{domxref("navigator.getUserMedia()")}} est une fois de plus appelée pour créer le second flux, qui est ajouté à la RTCPeerConnection. Un objet {{domxref("RTCSessionDescription")}} est créé, et mis en place comme la description du distant en appelant {{domxref("RTCPeerConnection.setRemoteDescription()")}}.

Ensuite, une réponse est créée en utilisant {{domxref("RTCPeerConnection.createAnswer()")}} et renvoyé au serveur, qui la transmet à l'appelant.

```js
var offer = getOfferFromFriend();
navigator.getUserMedia({video: true}, function(stream) {
  pc.onaddstream = e => video.src = URL.createObjectURL(e.stream);
  pc.addStream(stream);

  pc.setRemoteDescription(new RTCSessionDescription(offer), function() {
    pc.createAnswer(function(answer) {
      pc.setLocalDescription(answer, function() {
        // envoi de la réponse au serveur qui la transmettra a l'appelant
      }, error);
    }, error);
  }, error);
});
```

**Gestion de la réponse**

retour a la première machine, qui recois la reponse. une fois cette dernière arrivée,l'appelant utilise {{domxref("RTCPeerConnection.setRemoteDescription()")}} pour définir la réponse comme la description de l'autre l'extrémité de la connexion.

```js
// pc a été déclaré précédemment, lors de l'envoi de l'offre.
var offer = getResponseFromFriend();
pc.setRemoteDescription(new RTCSessionDescription(offer), function() { }, error);
```

## Ancien contenu en approche!

Tout ce qui est en dessous de ce point est potentiellement obsolète. Il est toujours là en attente d'examen et d'intégration possible dans d'autres parties de la documentation où il serait encore valides.

> **Note :** Ne pas utiliser les examples de cette page. Voir l'article [signalisation et appel vidéo](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) ,pour des example mis a jour sur l'utilisation des medias WebRTC.

## Note

Cette page contient des informations périmées selon <http://stackoverflow.com/a/25065359/3760500>

> Peu importe ce que la page de MDN indique, RTPDataChannels est très désuet (faites connaître l'URL). Firefox et Chrome supportent les spec DataChannels maintenant. Idem pour DTLSSRTPKeyAgreement je pense.

## Shims (Bibliothèque d’interception d’API)

Comme vous pouvez l'imaginer, avec une API aussi jeune, vous devez utiliser les préfixes de navigateur et les positionner dans des variables communes.

```js
var PeerConnection = window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var IceCandidate = window.mozRTCIceCandidate || window.RTCIceCandidate;
var SessionDescription = window.mozRTCSessionDescription || window.RTCSessionDescription;
navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
```

## PeerConnection

C'est le point de départ pour créer une connexion avec un pair. Il accepte des options de configuration sur les serveurs ICE à utiliser pour établir une connexion.

```js
var pc = new PeerConnection(configuration, options);
```

### **`RTCConfiguration`**

L'objet {{domxref("RTCConfiguration")}} contient l’information sur les serveurs TURN et/ou STUN à utiliser pour ICE. Ceci est requis pour s'assurer que la plupart des utilisateurs peuvent en fait créer une connexion en évitant les restrictions du NAT et du pare-feu.

```js
var configuration = {
    iceServers: [
        {url: "stun:23.21.150.121"},
        {url: "stun:stun.l.google.com:19302"},
        {url: "turn:numb.viagenie.ca", credential: "webrtcdemo", username: "louis%40mozilla.com"}
    ]
}
```

Google met à disposition un [serveur STUN public](https://code.google.com/p/natvpn/source/browse/trunk/stun_server_list) que nous pouvons utiliser. J'ai également créé un compte chez http\://numb.viagenie.ca/ pour un accès gratuit à un serveur TURN. Vous pouvez faire la même chose et les remplacer par vos propres informations d'identification.

### **`options`** (Cf. "Note" avant)

Selon le type de connexion, vous devez passer des options.

```js
var options = {
    optional: [
        {DtlsSrtpKeyAgreement: true},
        {RtpDataChannels: true}
    ]
}
```

`DtlsSrtpKeyAgreement` est exigé pour Chrome et Firefox pour interagir.

`RtpDataChannels` est nécessaire si nous voulons utiliser l'API DataChannels sur Firefox.

## ICECandidate

Après avoir créé la connexion et en passant par les serveurs STUN et TURN disponibles, un événement sera déclenché une fois que le framework ICE aura trouvé certains « candidats » qui permettront de vous connecter avec un pair. Ceci est reconnu comme étant un candidat ICE et exécute une fonction de rappel sur PeerConnection#onicecandidate.

```js
pc.onicecandidate = function (e) {
    // candidate exists in e.candidate
    if (e.candidate == null) { return }
    send("icecandidate", JSON.stringify(e.candidate));
    pc.onicecandidate = null;
};
```

Lorsque le rappel est exécuté, nous devons utiliser le canal de signal pour envoyer le Candidat au pair. Sur Chrome, on trouve habituellement plusieurs candidats ICE, nous n’en avons besoin que d'un seul donc j'en envoie généralement une puis supprimer le descripteur. Firefox inclut le Candidat dans l'Offre SDP.

## Canal de Signal

Maintenant que nous avons un candidat ICE, nous devons l’envoyer à nos pairs afin qu'ils sachent comment se connecter avec nous. Toutefois, cela nous laisse face à une problématique de l’œuf et de la poule; Nous voulons que PeerConnection envoie des données à un pair, mais avant cela, nous devons lui envoyer des métadonnées…

C'est là qu'intervient le canal de signal. C'est n'importe quel mode de transport de données qui permet aux deux pairs d’échanger des informations. Dans cet article, nous allons utiliser [FireBase](http://firebase.com) parce que c'est incroyablement facile à installer et ne nécessite aucun hébergement ou code serveur.

Pour l'instant imaginez seulement que deux méthodes existent: `send()` va prendre une clé et lui affecter des données et `recv()` appelle un descripteur lorsqu'une clé a une valeur.

La structure de la base de données ressemble à ceci :

```js
{
    "": {
        "candidate:": …
        "offer": …
        "answer": …
    }
}
```

Les connexions sont divisées par un `roomId` et stockeront 4 éléments d'information, le candidat ICE de l'auteur de l'offre, le candidat ICE du répondeur, l'offre SDP et la réponse SDP.

## Offre

Une offre SDP (Session Description Protocol) et le méta données qui décrit aux autres pairs le format attendu(video, formats, codecs, cryptage, résolution, taille, etc etc).

Un échange nécessite une offre d'un pair, alors l'autre pair doit recevoir l'offre et offrir en retour une réponse.

```js
pc.createOffer(function (offer) {
    pc.setLocalDescription(offer);

    send("offer", JSON.stringify(offer));
}, errorHandler, constraints);
```

### **`errorHandler`**

S'il y avait un problème lors de la génération d’une offre, cette méthode sera exécutée avec les détails de l'erreur comme premier argument.

```js
var errorHandler = function (err) {
    console.error(err);
};
```

### **`constraints`**

Options pour l'offre SDP.

```js
var constraints = {
    mandatory: {
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: true
    }
};
```

`OfferToReceiveAudio/Video` Dit aux autres pair que vous désirez recevoir de la vidéo ou de l'audio de leur part. Ce n'est pas nécessaire pour DataChannels.

Une fois que l'offre a été générée nous devons définir le SDP local à la nouvelle offre et l’envoyer par le canal de signal aux autres pairs et attendre leur réponse SDP.

## Réponse

Une réponse SDP est comme une offre, mais est une réponse ; un peu comme répondre au téléphone. Nous pouvons seulement émettre une réponse qu’après avoir reçu une offre.

```js
recv("offer", function (offer) {
    offer = new SessionDescription(JSON.parse(offer))
    pc.setRemoteDescription(offer);

    pc.createAnswer(function (answer) {
        pc.setLocalDescription(answer);

        send("answer", JSON.stringify(answer));
    }, errorHandler, constraints);
});
```

## DataChannel

J'expliquerai d'abord comment utiliser PeerConnection pour l'API DataChannels et le transfert de données arbitraires entre des pairs.

_Note: Au moment de l’écriture de cet article, l'interopérabilité entre Chrome et Firefox n'est pas possible avec DataChannels. Chrome prend en charge un protocole similaire mais privé et soutiendra le protocole standard bientôt._

```js
var channel = pc.createDataChannel(channelName, channelOptions);
```

L'auteur de l'offre doit être le pair qui crée le canal. Le répondeur recevra le canal dans le rappel (callback) `ondatachannel` dans le PeerConnection. Vous devez appeler `createDataChannel()` une fois avant de créer l'offre.

### **`channelName`**

Il s'agit d'une chaîne qui agit comme une étiquette pour le nom de votre canal. _AVERTISSEMENT : Assurez-vous que votre nom de canal n'a pas d'espaces ou Chrome va échouer sur `createAnswer()`._

### **`channelOptions`**

```js
var channelOptions = {};
```

Ces options ne sont pas bien supportées sur Chrome donc vous pouvez laisser ça vide pour l'instant. Vérifiez le [RFC](http://dev.w3.org/2011/webrtc/editor/webrtc.html#attributes-7) pour plus d'informations sur les options.

### Méthodes et événements de canal

#### **`onopen`**

Exécuté lorsque la connexion est établie.

#### **`onerror`**

Exécuté s'il y a une erreur de création de la connexion. Le premier argument est un objet d'erreur.

```js
channel.onerror = function (err) {
    console.error("Channel Error:", err);
};
```

#### **`onmessage`**

```js
channel.onmessage = function (e) {
    console.log("Got message:", e.data);
}
```

Le cœur de la connexion. Lorsque vous recevez un message, cette méthode s’exécute. Le premier argument est un objet d'événement qui contient les données, heure de réception et autres informations.

#### **`onclose`**

Exécuté si l'autre pair ferme la connexion.

### **Lier les événements**

Si vous êtes le créateur du canal(l'auteur de l'offre), vous pouvez lier des événements directement à la DataChannel que vous avez créé avec `createChannel`. Si vous êtes l'auteur de la réponse, vous devez utiliser le callback `ondatachannel` dans le PeerConnection afin d'accéder au même canal.

```js
pc.ondatachannel = function (e) {
    e.channel.onmessage = function () { … };
};
```

Le canal est disponible dans l’objet événement passé dans le descripteur en tant que `e.channel`.

#### **`send()`**

```js
channel.send("Hi Peer!");
```

Cette méthode vous permet d'envoyer des données directement au pair! Incroyable. Vous devez envoyer un String, Blob, ArrayBuffer ou ArrayBufferView, alors assurez-vous de "stringifier" les objets.

#### **`close()`**

Ferme le canal une fois que la connexion doit se terminer. Il est recommandé de le faire sur l’ unload de la page.

## Media

Maintenant nous allons couvrir la transmission de médias tels que l'audio ou la vidéo. Pour afficher la vidéo et l'audio, vous devez inclure un tag `<video>` dans le document avec l'attribut `autoplay`.

### Obtenir les médias de l'utilisateur

```js
<video id="preview" autoplay></video>

var video = document.getElementById("preview");
navigator.getUserMedia(mediaOptions, function (stream) {
    video.src = URL.createObjectURL(stream);
}, errorHandler);
```

**`mediaOptions`**

Les contraintes sur les types de médias que vous souhaitez renvoyer de l'utilisateur.

```js
var mediaOptions = {
    video: true,
    audio: true
};
```

Si vous voulez juste une conversation audio, supprimez la clé `video`.

#### **`errorHandler`**

Exécuté s'il y a une erreur retournée par le support demandé.

### Événements Médias et Méthodes

#### **`addStream`**

Ajoute le flux de `getUserMedia` au PeerConnection.

```js
pc.addStream(stream);
```

#### **`onaddstream`**

```js
<video id="otherPeer" autoplay></video>

var otherPeer = document.getElementById("otherPeer");
pc.onaddstream = function (e) {
    otherPeer.src = URL.createObjectURL(e.stream);
};
```

Exécuté lorsque la connexion a été mise en place et que l'autre pair a ajouté le flux de données pour la connexion avec `addStream`. Vous avez besoin d'un autre tag `<video>` pour afficher les médias de l'autre pair.

Le premier argument est un objet d'événement avec les flux de média de l'autre pair.

## Afficher la Source

Vous pouvez voir la source développée à partir de tous les extraits de code de cet article à [mon repo WebRTC](http://github.com/louisstow/WebRTC).

- **Exemple de DataChannels :** [code](https://github.com/louisstow/WebRTC/blob/master/datachannels.html), [demo](http://louisstow.github.io/WebRTC/datachannels.html)
- **Exemple de média :** [code](https://github.com/louisstow/WebRTC/blob/master/media.html), [demo](http://louisstow.github.io/WebRTC/media.html)
