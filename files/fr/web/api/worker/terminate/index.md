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

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#dom-worker-terminate", "Worker.terminate()")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Worker.terminate")}}

## Voir aussi

L'interface {{domxref("Worker")}} à laquelle elle appartient.
