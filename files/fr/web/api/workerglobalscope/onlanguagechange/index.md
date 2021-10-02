---
title: WorkerGlobalScope.onlanguagechange
slug: Web/API/WorkerGlobalScope/onlanguagechange
translation_of: Web/API/WorkerGlobalScope/onlanguagechange
---
{{APIRef("Web Workers API")}}

La propriété **`onlanguagechange`** de l'interface {{domxref("WorkerGlobalScope")}} représente un {{event("Event_handlers", "event handler")}} à appeler lorsque l'événement {{event("languagechange")}} survient et se propage à travers le {{domxref("Worker")}}.

## Syntaxe

    self.onlanguagechange = function() { ... };

## Exemple

L'extrait de code suivant montre un gestionnaire `onlanguagechange` placé au sein d'un worker :

```js
self.onlanguagechange = function() {
  console.log('Your preferred language settings have been changed');
}
```

## Spécifications

| Spécification                                                                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#handler-workerglobalscope-onlanguagechange", "WorkerGlobalScope.onlanguagechange")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.WorkerGlobalScope.onlanguagechange")}}

## Voir aussi

L'interface {{domxref("WorkerGlobalScope")}} à laquelle elle appartient.
