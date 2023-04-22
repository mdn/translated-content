---
title: Worker.terminate()
slug: Web/API/Worker/terminate
translation_of: Web/API/Worker/terminate
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
> **Note :** Il y a une autre façon d'arrêter le <i lang="en">worker</i> depuis le <i lang="en">worker</i> lui-même&nbsp;: la méthode [`DedicatedWorkerGlobalScope.close()`](/fr/docs/Web/API/DedicatedWorkerGlobalScope/close).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`Worker`](/fr/docs/Web/API/Worker) à laquelle elle appartient.
- La méthode [`DedicatedWorkerGlobalScope.close()`](/fr/docs/Web/API/DedicatedWorkerGlobalScope/close) de l'instance du <i lang="en">worker</i>.

