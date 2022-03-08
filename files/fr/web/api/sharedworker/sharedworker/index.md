---
title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
translation_of: Web/API/SharedWorker/SharedWorker
---
{{APIRef("Web Workers API")}}

Le constructeur **`SharedWorker()`** crée un objet {{domxref("SharedWorker")}} qui exécute le script depuis l'URL indiquée. Le script doit respecter la [politique de même origine](/fr/docs/Web/Security/Same-origin_policy).

> **Note :** Il y a désaccord entre les fabricants de navigateur pour savoir si l'URI doit avoir la même origine ou non. Bien que Gecko 10.0 {{geckoRelease("10.0")}} et les version supérieurs acceptent des origines différentes, ce n'est pas le cas des autres navigateurs.

## Syntaxe

    var monWorker = new SharedWorker(uneURL, nom);
    var monWorker = new SharedWorker(uneURL, options);

### Paramètre

- _uneURL_
  - : Une {{domxref("DOMString")}} qui représente l'URL du scripte du _worker_ qui sera exécuté. Il doit obéir à la politique de même origine.
- nom {{optional_inline}}
  - : Une {{domxref("DOMString")}} indiquant un nom pour le {{domxref("SharedWorkerGlobalScope")}} représentant la portée du _worker_. Souvent utilisé pour le débogage.
- _options_ {{optional_inline}}

  - : Une objet contenant les propriétés qui peuvent être défini à la création. Les propriété possibles sont:

    - `type`: Une {{domxref("DOMString")}} spécifiant le type de _worker_ à créer. Les valeurs possibles sont: `classic` ou `module`. Si non spécifié, la valeur par défaut est `classic`.
    - `credentials`: Une {{domxref("DOMString")}} spécifiant le type de crédit à utilisé pour le _worker_. La valeur peut être _`omit`_, `same-origin` ou _`include`. Si non spécifié ou si le type est `classic`, la valeur par défaut sera `omit` (pas de crédit nécéssaire)._
    - `name`&nbsp;: une [`DOMString`](/fr/docs/Web/API/DOMString) spécifiant un identifiant pour le [`SharedWorkerGlobalScope`](/fr/docs/Web/API/SharedWorkerGlobalScope) représentant la portée du _worker_, souvent utilisé pour déboguer.

### Valeur retournée

Le _woker_ créé.

### Exceptions

- Une `SecurityError` est levé si le document n'est pas autorisé à lancer le _worker_. Par exemple si l'URL a une syntaxe invalide ou si la politique de même origine est violée.
- Une `NetworkError` est levé si le type MIME du script _worker_ n'est pas correct. Le type MIME doit toujours être `text/javascript`.
- Une `SyntaxError` est levée si _uneURL_ ne peut pas être analysée.

## Exemple

L'extrait de code suivant montre la création d'un objet {{domxref("SharedWorker")}} en utilisant le contructeur `SharedWorker()` et l'usage qui en est fait.

```js
var myWorker = new SharedWorker('worker.js');

myWorker.port.start();

first.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

second.onchange = function() {
  myWorker.port.postMessage([first.value,second.value]);
  console.log('Message posted to worker');
}

myWorker.port.onmessage = function(e) {
  result1.textContent = e.data;
  console.log('Message received from worker');
}
```

Pour l'exemple en complet, voir [Basic shared worker example](https://github.com/mdn/simple-shared-worker) ([run shared worker](http://mdn.github.io/simple-shared-worker/).)

## Spécifications

| Spécification                                                                            | Statuts                          | Commentaire |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#dom-sharedworker", "SharedWorker()")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.SharedWorker.SharedWorker")}}

## Voir aussi

- L'interface {{domxref("SharedWorker")}} auquel il appartient.
- [Une autre démonstration de multiplication.](https://anlexn.github.io/shared-worker-mdn/)
