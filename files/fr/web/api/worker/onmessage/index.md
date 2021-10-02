---
title: Worker.onmessage
slug: Web/API/Worker/onmessage
tags:
  - API
  - Property
  - Reference
translation_of: Web/API/Worker/onmessage
---
{{ APIRef("Web Workers API") }}

La propriété **`onmessage`** de l'interface {{domxref("Worker")}} représente un {{event("Event_handlers", "event handler")}}, à savoir une fonction qui est appelée lorsque l'événement {{event("message")}} survient. Ces événements sont du type {{domxref("MessageEvent")}} et sont appelés quand le parent du worker reçoit un message (c’est-à-dire à partir de la méthode {{domxref("DedicatedWorkerGlobalScope.postMessage")}}).

> **Note :** Le contenu du message est fourni par la propriété `data` de l'événement {{event("message")}}.

## Syntaxe

```js
myWorker.onmessage = function(e) { ... }
```

## Exemple

L'extrait de code suivant illustre la création d'un objet {{domxref("Worker")}} utilisant le constructeur {{domxref("Worker.Worker", "Worker()")}}. Les messages sont passés au worker lorsque la valeur de l'élément de formulaire `first` change. Un gestionnaire onmessage est également présent pour s'occuper des messages retournés par le worker.

```js
var myWorker = new Worker("worker.js");

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message envoyé au worker');
}

myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message reçu du worker');
}
```

Dans le script `worker.js`, un gestionnaire `onmessage` se charge des messages en provenance du script principal :

```js
onmessage = function(e) {
  console.log('Message reçu du script principal');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Renvoi d\'un message au script principal');
  postMessage(workerResult);
}
```

Remarquez comment dans le script principal, `onmessage` doit être appelée par `myWorker`, tandis que dans le script du worker vous avez juste besoin d'appeler `onmessage` parce que le worker est en réalité le contexte global ({{domxref("DedicatedWorkerGlobalScope")}}).

Pour un exemple complet, consulter notre [Exemple basique de worker dédié](https://github.com/mdn/simple-web-worker) ([lancez le worker dédié](http://mdn.github.io/simple-web-worker/)).

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#handler-worker-onmessage", "Worker.onmessage")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Worker.onmessage")}}

## Voir aussi

L'interface {{domxref("Worker")}} à laquelle elle appartient.
