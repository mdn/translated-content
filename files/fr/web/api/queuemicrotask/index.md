---
title: queueMicrotask()
slug: Web/API/queueMicrotask
---

{{APIRef("HTML DOM")}}

La méthode **`queueMicrotask()`**, exposée par l'interface [`Window`](/fr/docs/Web/API/Window) ou l'ou [`Worker`](/fr/docs/Web/API/Worker), met en file d'attente une micro-tâche qui doit être exécutée à un moment sûr avant que le contrôle soit retourné à la boucle d'évènements du navigateur.

La micro-tâche est une fonction courte qui doit être exécutée après que la tâche actuelle ait terminé son exécution et lorsqu'il n'y a pas d'autre code en attente d'exécution avant que le contrôle du contexte d'exécution soit retourné à la boucle d'évènements du navigateur.

Cela permet à votre code de fonctionner sans interférer avec un autre code, dont la priorité est potentiellement plus haute, en attente, et avant que le navigateur ne regagne le contrôle du contexte d'exécution, qui dépend potentiellement de la tâche que vous devez effectuer. Vous pouvez en apprendre plus sur l'utilisation des micro-tâches et les raisons de leur utilisation dans [le guide sur les micro-tâches](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide).

L'importance des micro-tâches vient de leur possibilité d'effectuer des tâches de manière asynchrone mais dans un ordre spécifique. Voir [Utiliser les micro-tâches en JavaScript avec `queueMicrotask()`](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide) pour plus de détails.

Les micro-tâches sont particulièrement utiles pour les bibliothèques et les <i lang="en">frameworks</i> qui doivent effectuer un nettoyage final ou d'autres tâches à exécuter avant le rendu.

## Syntaxe

```js
queueMicrotask(function)
```

### Paramètres

- `function`
  - : Une [fonction](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function) qui doit être exécutée lorsque le moteur du navigateur détermine qu'il est sûr d'appeler votre code. Les micro-tâches mises en files d'attente sont exécutées après la fin de toutes les tâches en attente et avant de céder le contrôle à la boucle d'évènements du navigateur.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

```js
self.queueMicrotask(() => {
  // Le contenu de la fonction à appeler
  // comme micro-tâche
});
```

Tiré de la [spécification de `queueMicrotask()`](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing)&nbsp;:

```js
MyElement.prototype.loadData = function (url) {
  if (this._cache[url]) {
    queueMicrotask(() => {
      this._setData(this._cache[url]);
      this.dispatchEvent(new Event("load"));
    });
  } else {
    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        this._cache[url] = data;
        this._setData(data);
        this.dispatchEvent(new Event("load"));
      });
  }
};
```

## Lorsque `queueMicrotask()` n'est pas disponible

Le code ci-dessous est une prothèse d'émulation (<i lang="en">polyfill</i>) pour `queueMicrotask()`. Il crée une micro-tâche en utilisant une promesse qui se résout immédiatement, et, si la promesse ne peut pas être créée, utilise un minuteur.

```js
if (typeof self.queueMicrotask !== "function") {
  self.queueMicrotask = function (callback) {
    Promise.resolve()
      .then(callback)
      .catch((e) =>
        setTimeout(() => {
          throw e;
        }),
      ); // gérer les exceptions
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `queueMicrotask()` dans la bibliothèque `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Utiliser les micro-tâches en JavaScript avec `queueMicrotask()`](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous)
- [Explications sur `queueMicrotask()` (en anglais)](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tâches, micro-tâches, queues et ordonnancement, une présentation de Jake Archibald (en anglais)](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
