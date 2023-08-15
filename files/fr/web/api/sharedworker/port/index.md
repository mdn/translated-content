---
title: SharedWorker.port
slug: Web/API/SharedWorker/port
l10n:
  sourceCommit: 2665f98fa021d22f9b0678f836fba25590bd6aa4
---

{{APIRef("Web Workers API")}}

La propriété **`port`** de l'interface [`SharedWorker`](/fr/docs/Web/API/SharedWorker) retourne un objet [`MessagePort`](/fr/docs/Web/API/MessagePort) utilisé pour contrôler et communiquer avec le <i lang="en">worker</i> partagé.

### Valeur

Un objet [`MessagePort`](/fr/docs/Web/API/MessagePort).

## Exemple

L'exemple de code suivant montre la création d'un objet `SharedWorker` à l'aide du constructeur [`SharedWorker()`](/fr/docs/Web/API/SharedWorker/SharedWorker). Plusieurs scripts peuvent accéder au <i lang="en">worker</i> avec l'objet [`MessagePort`](/fr/docs/Web/API/MessagePort) accessible grâce à la propriété `SharedWorker.port`. Le port est ouvert avec la méthode `start()`.

```js
const myWorker = new SharedWorker("worker.js");
myWorker.port.start();
```

Pour un exemple complet, voir [un exemple simple de <i lang="en">worker</i> partagé](https://github.com/mdn/dom-examples/tree/master/web-workers/simple-shared-worker) ([exécuter le <i lang="en">worker</i> correspondant](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`SharedWorker`](/fr/docs/Web/API/SharedWorker)
