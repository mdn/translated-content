---
title: MessageEvent
slug: Web/API/MessageEvent
---

{{APIRef("HTML DOM")}}

L'interface **`MessageEvent`** représente un message reçu par un objet cible.

Il est utilisé pour représenter les messages en :

- [Événements envoyés par le serveur](/fr/docs/Web/API/Server-sent_events) (voir {{domxref("EventSource.onmessage")}}).
- [Sockets Web](/fr/docs/Web/API/WebSockets_API) (voir la propriété `onmessage` de l'interface [WebSocket](/fr/docs/Web/API/WebSocket)).
- Messagerie inter-documents (voir {{domxref("Window.postMessage()")}} et {{domxref("Window.onmessage")}}).
- [Messagerie de canal](/fr/docs/Web/API/Channel_Messaging_API) (voir {{domxref("MessagePort.postMessage()")}} et {{domxref("MessagePort.onmessage")}}).
- Messagerie inter-worker/document (voir les deux entrées ci-dessus, mais aussi {{domxref("Worker.postMessage()")}}, {{domxref("Worker.onmessage")}}, {{domxref("ServiceWorkerGlobalScope.onmessage")}}, etc.)
- [Canaux de diffusion](/fr/docs/Web/API/Broadcast_Channel_API) (voir {{domxref("Broadcastchannel.postMessage()")}}) et {{domxref("BroadcastChannel.onmessage")}}).
- Les canaux de données WebRTC (voir {{domxref("RTCDataChannel.onmessage")}}).

L'action déclenchée par cet événement est définie dans une fonction définie comme gestionnaire d'événement pour l'événement `message` correspondant (par exemple, en utilisant un gestionnaire `onmessage` comme indiqué ci-dessus).

{{AvailableInWorkers}}

{{InheritanceDiagram(600, 80)}}

## Constructeur

- {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}}
  - : Crée un nouveau `MessageEvent`.

## Propriétés

_Cette interface hérite également des propriétés de son parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{readonlyInline}}
  - : Les données envoyées par l'émetteur du message.
- {{domxref("MessageEvent.origin")}} {{readonlyInline}}
  - : Une chaîne de caractères {{domxref("USVString")}} représentant l'origine de l'émetteur du message.
- {{domxref("MessageEvent.lastEventId")}} {{readonlyInline}}
  - : Une chaîne de caractères {{domxref("DOMString")}} représentant un identifiant unique pour l'événement.
- {{domxref("MessageEvent.source")}} {{readonlyInline}}
  - : Un `MessageEventSource` (qui peut être un objet {{domxref("WindowProxy")}}, {{domxref("MessagePort")}}, ou {{domxref("ServiceWorker")}}) représentant l'émetteur du message.
- {{domxref("MessageEvent.ports")}} {{readonlyInline}}
  - : Un tableau d'objets {{domxref("MessagePort")}} représentant les ports associés au canal par lequel le message est envoyé (le cas échéant, par exemple dans la messagerie de canal ou lors de l'envoi d'un message à un travailleur partagé).

## Méthodes

_Cette interface hérite également des méthodes de son parent, {{domxref("Event")}}._

- {{domxref("MessageEvent.initMessageEvent","initMessageEvent()")}} {{deprecated_inline}}
  - : Initialise un événement de message. **Ne plus utiliser ceci - utilisez le constructeur {{domxref("MessageEvent.MessageEvent", "MessageEvent()")}} à la place.**

## Exemples

Dans notre exemple de [travailleur partagé basique](https://github.com/mdn/simple-shared-worker) ([exécuter le travailleur partagé](https://mdn.github.io/simple-shared-worker/)), nous avons deux pages HTML, dont chacune utilise un peu de JavaScript pour effectuer un calcul simple. Les différents scripts utilisent le même fichier worker pour effectuer le calcul - ils peuvent tous deux y accéder, même si leurs pages s'exécutent dans des fenêtres différentes.

L'extrait de code suivant montre la création d'un objet {{domxref("SharedWorker")}} à l'aide du constructeur {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}. Les deux scripts contiennent ceci :

```js
var myWorker = new SharedWorker("worker.js");
```

Les deux scripts accèdent ensuite au worker par le biais d'un objet {{domxref("MessagePort")}} créé à l'aide de la propriété {{domxref("SharedWorker.port")}}. Si l'événement onmessage est attaché à l'aide de addEventListener, le port est démarré manuellement à l'aide de sa méthode `start()` :

```js
myWorker.port.start();
```

Lorsque le port est démarré, les deux scripts postent des messages au worker et traitent les messages envoyés par celui-ci en utilisant respectivement `port.postMessage()` et `port.onmessage` :

```js
first.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posté au worker");
};

second.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message posté au worker");
};

myWorker.port.onmessage = function (e) {
  result1.textContent = e.data;
  console.log("Message reçu du worker");
};
```

À l'intérieur du worker, nous utilisons le gestionnaire {{domxref("SharedWorkerGlobalScope.onconnect")}} pour nous connecter au même port que celui mentionné ci-dessus. Les ports associés à ce worker sont accessibles dans la propriété `ports` de l'événement [`connect`](/fr/docs/Web/API/SharedWorkerGlobalScope/connect_event) - nous utilisons ensuite {{domxref("MessagePort")}} La méthode `start()` pour démarrer le port, et le handler `onmessage` pour gérer les messages envoyés par les processus principaux.

```js
onconnect = function (e) {
  var port = e.ports[0];

  port.addEventListener("message", function (e) {
    var workerResult = "Result: " + e.data[0] * e.data[1];
    port.postMessage(workerResult);
  });

  port.start(); // Requis si vous utilisez addEventListener. Sinon, il est appelé implicitement par le paramètre onmessage.
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("ExtendableMessageEvent")}} — similaire à cette interface mais utilisée dans les interfaces qui doivent donner plus de flexibilité aux auteurs.
