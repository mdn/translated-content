---
title: SharedWorker.port
slug: Web/API/SharedWorker/port
translation_of: Web/API/SharedWorker/port
---
{{APIRef("Web Workers API")}}

La propriété **`port`** de l'interface {{domxref("SharedWorker")}} retourne un objet {{domxref("MessagePort")}} utilisé pour contrôler et communiquer avec le _worker_ partagé.

## Syntaxe

    myWorker.port;

### Valeur

Un objet {{domxref("MessagePort")}}.

## Exemple

L'exemple de code suivant montre la création de l'objet `SharedWorker` en utilisant le constructeur {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}. Plusieurs scriptes peuvent accéder au _worker_ avec l'objet {{domxref("MessagePort")}} accessible grâce à la propriété `SharedWorker.port` — le port est ouvert avec la méthode `start()`.

```js
var myWorker = new SharedWorker('worker.js');
myWorker.port.start();
```

Pour un exemple complet, voir [(en) Exemple basique de _worker_ partagé](https://github.com/mdn/simple-shared-worker) ([(en) démonstration d'un _worker_ partagé](https://mdn.github.io/simple-shared-worker/).)

## Spécifications

| Spécifications                                                                                           | Status                           | Commentaire |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#dom-sharedworker-port", "AbstractWorker.onerror")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.SharedWorker.port")}}

## Voir aussi

- L'interface {{domxref("SharedWorker")}} auquel il appartient.
- [(en) Une autre démonstration de multiplication.](https://anlexn.github.io/shared-worker-mdn/)
