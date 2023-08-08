---
title: SharedWorker
slug: Web/API/SharedWorker
---

{{APIRef("Web Workers API")}}

L'interface **`SharedWorker`** représente un type spécifique de worker qui peut être _accédé_ à partir de plusieurs contextes de navigation, tels que plusieurs fenêtres, iframes ou même workers. Ils implémentent une autre interface que les workers dédiés et ont un contexte global différent, {{domxref("SharedWorkerGlobalScope")}}.

> **Note :** Si un SharedWorker peut être accédé à partir de plusieurs contextes de navigation, tous ces contextes de navigation doivent partager exactement la même origine (même protocole, hôte et port.)

## Constructeurs

- {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}
  - : Crée un web worker partagé qui exécute le script spécifié par l'URL.

## Propriétés

_Il hérite des propriétés de son parent, {{domxref("EventTarget")}}, et implémente les propriétés de {{domxref("AbstractWorker")}}._

- {{domxref("AbstractWorker.onerror")}}
  - : Est un {{ domxref("EventListener") }} qui est appelé à chaque fois qu'un {{domxref("ErrorEvent")}} de type `error` se propage à travers le worker.
- {{domxref("SharedWorker.port")}} {{readonlyInline}}
  - : Retourne un objet {{domxref("MessagePort")}} utilisé pour communiquer et contrôler le worker partagé.

<!---->

## Méthodes

_Hérite des méthodes de son parent, {{domxref("EventTarget")}}, et implémente les méthodes de {{domxref("AbstractWorker")}}._

## Exemple

Dans notre [Exemple basique d'un worker partagé](https://github.com/mdn/simple-shared-worker) ([lancer le worker partagé](http://mdn.github.io/simple-shared-worker/)), nous avons deux pages HTML, qui chacune utilise du code JavaScript pour réaliser un calcul simple. Les différents scripts utilisent le même worker pour effectuer ce calcul — ils peuvent tous les deux y accéder, même si leurs pages s'exécutent à l'intérieur de fenêtres différentes.

L'extrait de code suivant illustre la création d'un objet `SharedWorker` en utilisant le constructeur {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}. Les deux scripts contiennent ceci :

```js
var myWorker = new SharedWorker("worker.js");
```

Les deux scripts accèdent alors au worker à travers un objet {{domxref("MessagePort")}} créé en utilisant la propriété {{domxref("SharedWorker.port")}} — le port est démarré au moyen de sa méthode `start()` :

```js
myWorker.port.start();
```

Lorsque le port est démarré, les deux scripts envoient des messages au worker et gèrent les messages qu'il renvoie en utilisant respectivement `port.postMessage()` et `port.onmessage` :

```js
first.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message envoyé au worker");
};

second.onchange = function () {
  myWorker.port.postMessage([first.value, second.value]);
  console.log("Message envoyé au worker");
};

myWorker.port.onmessage = function (e) {
  result1.textContent = e.data;
  console.log("Message reçu du worker");
};
```

Au sein du worker, nous utilisons le gestionnaire {{domxref("SharedWorkerGlobalScope.onconnect")}} pour se connecter au même port dont il a été question plus haut. Les ports associés au worker sont accessibles dans la propriété `ports` de l'événement [`connect`](/fr/docs/Web/API/SharedWorkerGlobalScope/connect_event) — nous utilisons alors la méthode {{domxref("MessagePort")}} `start()` pour démarrer le port, et le gestionnaire `onmessage` pour s'occuper des messages en provenance des threads principaux.

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ domxref("Worker") }}
- [Utilisation des web workers](/fr/docs/Utilisation_des_web_workers)
