---
title: WorkerGlobalScope.onerror
slug: Web/API/WorkerGlobalScope/onerror
translation_of: Web/API/WorkerGlobalScope/onerror
---
{{APIRef("Web Workers API")}}

La propriété **`onerror`** de l'interface {{domxref("WorkerGlobalScope")}} représente un {{event("Event_handlers", "event handler")}} à appeler lorsque l'événement {{event("error")}} survient et se propage à travers le {{domxref("Worker")}}.

## Syntaxe

    self.onerror = function() { ... };

## Exemple

L'extrait de code suivant montre un gestionnaire `onerror` placé au sein d'un worker :

```js
self.onerror = function() {
  console.log('There is an error inside your worker!');
}
```

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#handler-workerglobalscope-onerror", "WorkerGlobalScope.onerror")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des naviguateurs

{{Compat("api.WorkerGlobalScope.onerror")}}

## Voir aussi

L'interface {{domxref("WorkerGlobalScope")}} à laquelle il appartient.
