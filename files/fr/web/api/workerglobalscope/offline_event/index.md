---
title: WorkerGlobalScope.onoffline
slug: Web/API/WorkerGlobalScope/offline_event
translation_of: Web/API/WorkerGlobalScope/onoffline
original_slug: Web/API/WorkerGlobalScope/onoffline
---

{{APIRef("Web Workers API")}}

La propriété **`onoffline`** de l'interface {{domxref("WorkerGlobalScope")}} représente un {{event("Event_handlers", "event handler")}} à appeler lorsque l'événement {{event("offline")}} survient et se propage à travers le {{domxref("Worker")}}.

## Syntaxe

```js
self.onoffline = function() { ... };
```

## Exemple

L'extrait de code suivant montre un gestionnaire `onoffline` placé dans un worker :

```js
self.onoffline = function() {
  console.log('Your worker is now offline');
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

L'interface {{domxref("WorkerGlobalScope")}} à laquelle il appartient.
