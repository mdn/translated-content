---
title: SharedWorkerGlobalScope.onconnect
slug: Web/API/SharedWorkerGlobalScope/connect_event
---

{{APIRef("Web Workers API")}}

La proriété **`onconnect`** de l'interface {{domxref("SharedWorkerGlobalScope")}} est un gestionnaire d'évènement pour l'évènement `connect`, c'est à dire quand une connexion {{domxref("MessagePort")}} est ouverte entre le {{domxref("SharedWorker")}} et le _thread_ principale.

## Syntaxe

```js
onconnect = function() { ... };
```

## Exemple

Cet exemple montre le gestionnaire d'évènement `onconnect` quand une connection depuis le thread principal vers un fichier de _worker_ partagé via un {{domxref("MessagePort")}}. L'objet évènement est un {{domxref("MessageEvent")}}.

Le port de connexion peut-être récupéré avec la propriété `ports` de l'objet évènement. Le port a un gestionnaire d'évènement `onmessage` pour gérer les évènement venant de cet port et la méthode `postMessage()` peut-être utilisée pour répondre au _thread_ principale qui utilise le _worker_.

```js
onconnect = function (e) {
  var port = e.ports[0];

  port.onmessage = function (e) {
    var workerResult = "Result: " + e.data[0] * e.data[1];
    port.postMessage(workerResult);
  };

  port.start();
};
```

Pour l'exemple complet en fonctionnement, voir [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/).)

> **Note :** La propriété `data` de l'objet évènement est `null` dans Firefox. À partir de la version 65, elle est initialisée comme une chaîne vide, selon les spécifications ([bug Firefox 1508824](https://bugzil.la/1508824)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("SharedWorkerGlobalScope")}}
