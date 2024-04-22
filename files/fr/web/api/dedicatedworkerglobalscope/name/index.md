---
title: DedicatedWorkerGlobalScope.name
slug: Web/API/DedicatedWorkerGlobalScope/name
---

{{APIRef("Web Workers API")}}

La propriété en lecture seule **`name`** de l'interface {{domxref("DedicatedWorkerGlobalScope")}} renvoie le nom qui a été (facultativement) donné au {{domxref("Worker")}} lors de sa création. C'est le nom que le constructeur {{domxref("Worker.Worker", "Worker()")}} peut transmettre pour obtenir une référence à {{domxref("DedicatedWorkerGlobalScope")}}.

## Syntaxe

```js
var nameObj = self.name;
```

### Valeur

Une {{domxref("DOMString")}} (_chaîne de caractères_).

## Exemple

Un worker est créé en utilisant un constructeur avec une option de `name` :

```js
var myWorker = new Worker("worker.js", { name: "myWorker" });
```

le {{domxref("DedicatedWorkerGlobalScope")}} aura désormais le nom de "myWorker", qui peut être renvoyé pendant l'exécution

```js
self.name;
```

à l'intérieur du worker.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("DedicatedWorkerGlobalScope")}}
