---
title: "Window : méthode queueMicrotask()"
short-title: queueMicrotask()
slug: Web/API/Window/queueMicrotask
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

La méthode **`queueMicrotask()`** de l'interface {{DOMxRef("Window")}} met en file d'attente une micro-tâche qui doit être exécutée à un moment sûr avant que le contrôle soit retourné à la boucle d'évènements du navigateur.

La micro-tâche est une fonction courte qui doit être exécutée après que la tâche actuelle ait terminé son exécution et lorsqu'il n'y a pas d'autre code en attente d'exécution avant que le contrôle du contexte d'exécution soit retourné à la boucle d'évènements du navigateur.

Cela permet à votre code de fonctionner sans interférer avec un autre code, dont la priorité est potentiellement plus haute, en attente, et avant que le navigateur ne regagne le contrôle du contexte d'exécution, qui dépend potentiellement de la tâche que vous devez effectuer. Vous pouvez en apprendre plus sur l'utilisation des micro-tâches et les raisons de leur utilisation dans [le guide sur les micro-tâches](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide).

L'importance des micro-tâches vient de leur possibilité d'effectuer des tâches de manière asynchrone mais dans un ordre spécifique. Voir [Utiliser les micro-tâches en JavaScript avec `queueMicrotask()`](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide) pour plus de détails.

Les micro-tâches sont particulièrement utiles pour les bibliothèques et les <i lang="en">frameworks</i> qui doivent effectuer un nettoyage final ou d'autres tâches à exécuter avant le rendu.

## Syntaxe

```js-nolint
queueMicrotask(callback)
```

### Paramètres

- `callback`
  - : Une {{JSxRef("function")}} qui doit être exécutée lorsque le moteur du navigateur détermine qu'il est sûr d'appeler votre code. Les micro-tâches mises en files d'attente sont exécutées après la fin de toutes les tâches en attente et avant de céder le contrôle à la boucle d'évènements du navigateur.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
self.queueMicrotask(() => {
  // Le contenu de la fonction à appeler comme micro-tâche
});
```

Tiré de la [spécification de `queueMicrotask()` <sup>(ang.)</sup>](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#microtask-queuing)&nbsp;:

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("WorkerGlobalScope.queueMicrotask()")}}
- [Prothèse d'émulation de `queueMicrotask()` dans la bibliothèque `core-js`](https://github.com/zloirock/core-js#queuemicrotask)
- [Utiliser les micro-tâches en JavaScript avec `queueMicrotask()`](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS)
- [Explications sur `queueMicrotask()` <sup>(angl.)</sup>](https://github.com/fergald/docs/blob/master/explainers/queueMicrotask.md)
- [Tâches, micro-tâches, queues et ordonnancement, une présentation <sup>(angl.)</sup>](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/) de Jake Archibald
