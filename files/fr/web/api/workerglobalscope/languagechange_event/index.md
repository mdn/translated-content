---
title: WorkerGlobalScope.onlanguagechange
slug: Web/API/WorkerGlobalScope/languagechange_event
---

{{APIRef("Web Workers API")}}

La propriété **`onlanguagechange`** de l'interface {{domxref("WorkerGlobalScope")}} représente un gestionnaire d'évènement à appeler lorsque l'événement `languagechange` survient et se propage à travers le {{domxref("Worker")}}.

## Syntaxe

```js
self.onlanguagechange = function() { ... };
```

## Exemple

L'extrait de code suivant montre un gestionnaire `onlanguagechange` placé au sein d'un worker :

```js
self.onlanguagechange = function () {
  console.log("Your preferred language settings have been changed");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

L'interface {{domxref("WorkerGlobalScope")}} à laquelle elle appartient.
