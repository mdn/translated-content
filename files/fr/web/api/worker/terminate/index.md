---
title: Worker.terminate()
slug: Web/API/Worker/terminate
---

{{ apiref("Worker") }}

La méthode **`terminate()`** de l'interface {{domxref("Worker")}} termine immédiatement le {{domxref("Worker")}}. Cette interruption ne permet pas au worker de finaliser ses opérations, il est juste arrêté sur le champ.

## Syntaxe

```js
myWorker.terminate();
```

### Paramètres

Aucun.

### Valeur de retour

Néant.

## Exemple

L'extrait de code suivant montre la création d'un objet {{domxref("Worker")}} en utilisant le constructeur {{domxref("Worker.Worker", "Worker()")}}, qui est alors immédiatement interrompu.

```js
var myWorker = new Worker("worker.js");

myWorker.terminate();
```

> **Note :** Les <i lang="en">workers</i> dédiés ou partagés peuvent également être stoppés par l'instance même du [<i lang="en">worker</i>](/fr/docs/Web/API/Worker) en utilisant les méthodes [`DedicatedWorkerGlobalScope.close()`](/fr/docs/Web/API/DedicatedWorkerGlobalScope/close) ou [`SharedWorkerGlobalScope.close()`](/fr/docs/Web/API/SharedWorkerGlobalScope/close).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`Worker`](/fr/docs/Web/API/Worker)
- [`DedicatedWorkerGlobalScope.close()`](/fr/docs/Web/API/DedicatedWorkerGlobalScope/close)
- [`SharedWorkerGlobalScope.close()`](/fr/docs/Web/API/SharedWorkerGlobalScope/close)
