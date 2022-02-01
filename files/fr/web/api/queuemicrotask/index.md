---
title: WindowOrWorkerGlobalScope.queueMicrotask()
slug: Web/API/queueMicrotask
tags:
  - API
  - Asynchrone
  - HTML DOM
  - Intervales
  - JavaScript
  - Micro-tâche
  - Microtask
  - Minuteurs
  - Méthode
  - Performance
  - ServiceWorker
  - SharedWorker
  - Tâches
  - Window
  - WindowOrWorkerGlobalScope
  - Worker
  - queueMicrotask
  - setTimeout
translation_of: Web/API/WindowOrWorkerGlobalScope/queueMicrotask
original_slug: Web/API/WindowOrWorkerGlobalScope/queueMicrotask
---
{{APIRef("HTML DOM")}}

La méthode **`queueMicrotask()`**, qui est exposée par {{domxref("Window")}} ou l'interface {{domxref("Worker")}}, met en file d'attente une micro-tâche qui doit être exécutée à un moment sûr avant que le contrôle soit retourné à la boucle d'événement du navigateur.

La micro-tâche est une fonction courte qui doit être exécutée après que la tâche actuelle ait terminé son exécution et lorsqu'il n'y a pas d'autre code en attente d'exécution avant que le contrôle du contexte d'exécution soit retourné à la boucle d'événement du navigateur.

Cela permet à votre code de fonctionner sans interférer avec aucun autre code potentiellement à une plus haute priorité en attente, mais avant que le navigateur ne regagne le contrôle du contexte d'exécution, qui dépend potentiellement de la tâche que vous devez effectuer. Vous pouvez en apprendre plus sur comment utiliser les micro-tâches et pourquoi vous devriez le faire dans notre [microtask guide](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide).

L'importance des micro-tâches vient de leur possibilité d'effectuer des tâches de manière asynchrone mais dans un ordre spécifique. Voir [Using microtasks in JavaScript with queueMicrotask()](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) pour plus de détails.

Les micro-tâches sont particulièrement utiles pour les librairies et les frameworks qui doivent effectuer un nettoyage final ou d'autres tâches à exécuter avant le rendu.

`queueMicrotask()` est exposé dans la mixin {{domxref("WindowOrWorkerGlobalScope")}}.

## Syntaxe

    scope.queueMicrotask(function);

### Paramètres

- `function`
  - : Une {{jsxref("function")}} qui doit être exécutée lorsque le moteur du navigateur détermine qu'il est sûr d'appeler votre code. Les micro-tâches mises en files d'attente sont exécutées après la fin de toutes les tâches en attente mais avant de céder le contrôle à la boucle d'événement du navigateur.

### Valeur de retour

`undefined`.

## Exemples

```js
self.queueMicrotask(() => {
  // function contents here
})
```

Tiré de la [spécification de queueMicrotask](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing) :

```js
MyElement.prototype.loadData = function (url) {
  if (this._cache[url]) {
    queueMicrotask(() => {
      this._setData(this._cache[url]);
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url).then(res => res.arrayBuffer()).then(data => {
      this._cache[url] = data;
      this._setData(data);
      this.dispatchEvent(new Event("load"));
    });
  }
};
```

## Lorsque queueMicrotask() n'est pas disponible

Le code ci-dessous est une prothèse d'émulation (_polyfill_) pour `queueMicrotask()`. Il crée une micro-tâche en utilisant une promesse qui se résout immédiatement, et utilise un timeout si la promesse ne peut pas être créée.

```js
if (typeof window.queueMicrotask !== "function") {
  window.queueMicrotask = function (callback) {
    Promise.resolve()
      .then(callback)
      .catch(e => setTimeout(() => { throw e; }));
  };
}
```

## Spécifications

| Spécification                                                                                                                            | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "timers-and-user-prompts.html#microtask-queuing", "self.queueMicrotask()")}} | {{Spec2("HTML WHATWG")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.queueMicrotask")}}

## Voir aussi

- [Using microtasks in JavaScript with queueMicrotask()](/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [Asynchronous JavaScript](/en-US/docs/Learn/JavaScript/Asynchronous)
- [queueMicrotask explainer](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) by Jake Archibald
