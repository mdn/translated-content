---
title: Worker
slug: Web/API/Worker
tags:
  - API
  - DOM
  - JavaScript
  - Reference
  - Web Workers
  - Worker
  - Workers
translation_of: Web/API/Worker
---
{{APIRef("Web Workers API")}}

L'interface **Worker** de l'[API Web Workers](/fr/docs/Web/API/Web_Workers_API) représente une tâche de fond qui peut facilement être créée et peut envoyer des messages en retour à son créateur. Créer un Worker est aussi simple que d'appeler le constructeur `Worker()`, en spécifiant un script qui définira le comportement du thread du worker.

Notez qu'un worker peut lui aussi lancer d'autre Worker tant que ces autres workers sont hébergés par une page qui a la même origine que la page parente. (Note: [Les workers imbriqués ne sont pas encore implémentés dans WebKit](https://bugs.webkit.org/show_bug.cgi?id=22723)).

De plus les workers peuvent utiliser [`XMLHttpRequest`](/en/DOM/XMLHttpRequest) pour les communiquer avec le réseau, à l'exception des attributs `responseXML` et `channel` qui vont toujours retourner `null`.

[Toutes les interfaces et toutes les fonctions](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) ne seront pas disponibles pour le script associé au `Worker`.

> **Note :** Dans Firefox, si vous souhaitez utiliser les workers dans une extension et que vous souhaitez avoir accès au [js-ctypes](/en/js-ctypes), vous devez utiliser le {{ domxref("ChromeWorker") }} à la place.

## Constructeurs

- {{domxref("Worker.Worker", "Worker()")}}
  - : Créer un web worker dédié qui execute le script qui est au bout de l'URL spécifié. Les workers peuvent aussi être créés en utilisant les [Blobs](/fr/docs/Web/API/Blob).

## Propriétés

_Il hérite de propriétés de son parent, {{domxref("EventTarget")}}, et implémente les propriétés de {{domxref("AbstractWorker")}}._

### Gestionnaires d'événements

- {{domxref("AbstractWorker.onerror")}}
  - : Un {{ domxref("EventListener") }} qui est appelé quand un {{domxref("ErrorEvent")}} de type `error` arrive dans le worker. Il est hérité de {{domxref("AbstractWorker")}}.
- {{domxref("Worker.onmessage")}}
  - : Un {{ domxref("EventListener") }} qui est appelé quand un {{domxref("MessageEvent")}} de type `message` arrive dans le worker — i.e. quand un message est envoyé au document parent depuis le worker via {{domxref("DedicatedWorkerGlobalScope.postMessage")}}. Le message est stocké dans la propriété {{domxref("MessageEvent.data", "data")}} de l'événement.
- {{domxref("Worker.onmessageerror")}}
  - : Un {{event("Event_handlers", "event handler")}} qui indique le code à appeler quand un message {{event("messageerror")}} arrive.

<!---->

## Méthodes

_Il hérite de son parent,_ _{{domxref("EventTarget")}},_ et implémente les propriétés de _{{domxref("AbstractWorker")}}._

- {{domxref("Worker.postMessage()")}}
  - : Envoie un message, qui est n'importe quel objets JavaScript vers la clôture du worker.
- {{domxref("Worker.terminate()")}}
  - : Termine immédiatement le worker. Ceci n'offre aucune chance au worker de finir son opération en cours, il est simplement arrêté une fois pour toute. Les instances de [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker) ne supportent pas cette méthode.

## Évènements

- [`message`](/fr/docs/Web/API/Worker/message_event)
  - : Lorsque le worker parent reçoit un message venant du worker. On peut aussi y accéder via la propriété {{domxref("Worker.onmessage")}}.
- [`messageerror`](/fr/docs/Web/API/Worker/messageerror_event)
  - : Lorsque le worker reçois un message qu'il ne peut [désérialiser](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). Aussi disponible à travers la propriété {{domxref("Worker.onmessageerror")}}.

<!---->

- [`rejectionhandled`](/fr/docs/Web/API/Window/rejectionhandled_event)
  - : Levé à chaque fois qu'une {{jsxref("Promise")}} est rejeté, avec ou sans gestionnaire pour intercepter l'exception. Aussi disponible à travers le gestionnaire [`onrejectionhandled`](/fr/docs/Web/API/WindowEventHandlers/onrejectionhandled).
- [`unhandledrejection`](/fr/docs/Web/API/Window/unhandledrejection_event)
  - : Levé quand une {{jsxref("Promise")}} est rejetée sans gestionnaire pour récupérer l'exception. Aussi disponible à travers la propriété [`onunhandledrejection`](/fr/docs/Web/API/WindowEventHandlers/onunhandledrejection).

## Exemple

L'extrait de code suivant montre la création d'un objet {{domxref("Worker")}} en utilisant le constructeur {{domxref("Worker.Worker", "Worker()")}} et l'utilisation de l'objet:

```js
var monWorker = new Worker("worker.js");
var premier = document.querySelector('#numero1');

premier.onchange = function() {
  monWorker.postMessage([premiere.valeur, deuxieme.valeur]);
  console.log('Message envoyé au worker');
}
```

Pour un exemple complet, voir [Exemple basique de worker dédié](https://github.com/mdn/simple-web-worker) ([exécuter le worker dédié](http://mdn.github.io/simple-web-worker/)).

## Spécifications

| Spécification                                                    | Statuts                          | Commentaire |
| ---------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#worker", "Worker")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité avec les navigateurs

Voici le support des différents type de worker. Voir les pages de chaque worker pour avoir les particularités.

{{Compat("api.Worker")}}

### Comportement des erreur Cross-origin sur les worker

Dans les premières versions des spécifications, charger un scripte worker en cross-origin lève une exception `SecurityError`. Désormais, à la place un évènement {{event("error")}} lancé.

## Voir aussi

- [Utiliser les web Worker](/fr/docs/Web/API/Web_Workers_API/Utilisation_des_web_workers)
- [Fonctions et classes disponibles dans les Web Workers](/fr/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
- D'autres type de workers: {{ domxref("SharedWorker") }}, et [ServiceWorker](/fr/docs/Web/API/ServiceWorker_API).
- Worker non-standard, spécifique à Gecko: {{ domxref("ChromeWorker") }}, utilisé par les extensions.
