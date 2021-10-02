---
title: WorkerGlobalScope.ononline
slug: Web/API/WorkerGlobalScope/ononline
translation_of: Web/API/WorkerGlobalScope/ononline
---
{{APIRef("Web Workers API")}}

La propriété **`ononline`** de l'interface {{domxref("WorkerGlobalScope")}} représente un {{event("Event_handlers", "event handler")}} à appeler lorsque l'événement {{event("online")}} survient et se propage à travers le {{domxref("Worker")}}.

## Syntaxe

    self.ononline = function() { ... };

## Exemple

L'extrait de code suivant montre un gestionnaire `ononline` placé dans un worker :

```js
self.ononline = function() {
  console.log('Your worker is now online');
}
```

## Spécifications

| Spécification                                                                                                                    | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#handler-workerglobalscope-ononline", "WorkerGlobalScope.ononline")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.WorkerGlobalScope.ononline")}}

## Voir aussi

L'interface {{domxref("WorkerGlobalScope")}} à laquelle il appartient.
