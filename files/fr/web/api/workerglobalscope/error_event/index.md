---
title: WorkerGlobalScope.onerror
slug: Web/API/WorkerGlobalScope/error_event
---

{{APIRef("Web Workers API")}}

La propriété **`onerror`** de l'interface {{domxref("WorkerGlobalScope")}} représente un gestionnaire d'évènement à appeler lorsque l'événement `error` survient et se propage à travers le {{domxref("Worker")}}.

## Syntaxe

```js
self.onerror = function() { ... };
```

## Exemple

L'extrait de code suivant montre un gestionnaire `onerror` placé au sein d'un worker :

```js
self.onerror = function () {
  console.log("There is an error inside your worker!");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

L'interface {{domxref("WorkerGlobalScope")}} à laquelle il appartient.
