---
title: WorkerGlobalScope.ononline
slug: Web/API/WorkerGlobalScope/online_event
---

{{APIRef("Web Workers API")}}

La propriété **`ononline`** de l'interface {{domxref("WorkerGlobalScope")}} représente un gestionnaire d'évènement à appeler lorsque l'événement `online` survient et se propage à travers le {{domxref("Worker")}}.

## Syntaxe

```js
self.ononline = function() { ... };
```

## Exemple

L'extrait de code suivant montre un gestionnaire `ononline` placé dans un worker :

```js
self.ononline = function () {
  console.log("Your worker is now online");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

L'interface {{domxref("WorkerGlobalScope")}} à laquelle il appartient.
