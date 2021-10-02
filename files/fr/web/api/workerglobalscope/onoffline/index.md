---
title: WorkerGlobalScope.onoffline
slug: Web/API/WorkerGlobalScope/onoffline
translation_of: Web/API/WorkerGlobalScope/onoffline
---
{{APIRef("Web Workers API")}}

La propriété **`onoffline`** de l'interface {{domxref("WorkerGlobalScope")}} représente un {{event("Event_handlers", "event handler")}} à appeler lorsque l'événement {{event("offline")}} survient et se propage à travers le {{domxref("Worker")}}.

## Syntaxe

    self.onoffline = function() { ... };

## Exemple

L'extrait de code suivant montre un gestionnaire `onoffline` placé dans un worker :

```js
self.onoffline = function() {
  console.log('Your worker is now offline');
}
```

## Spécifications

| Spécification                                                                                                                        | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#handler-workerglobalscope-onoffline", "WorkerGlobalScope.onoffline")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.WorkerGlobalScope.onoffline")}}

## Voir aussi

L'interface {{domxref("WorkerGlobalScope")}} à laquelle il appartient.
