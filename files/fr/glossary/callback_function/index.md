---
title: Fonction de rappel (callback)
slug: Glossary/Callback_function
l10n:
  sourceCommit: bc0796927a1f937dc8ba92afde355fb2d7c05306
---

Une **fonction de rappel** (aussi appelée <i lang="en">callback</i> en anglais) est une fonction passée dans une autre fonction en tant qu'argument, qui est ensuite invoquée à l'intérieur de la fonction externe pour accomplir une sorte de routine ou d'action.

L'utilisateur·ice d'une API basée sur les fonctions de rappel écrit une fonction qui est transmise à l'API. Le fournisseur de l'API (appelé _l'appelant_) prend cette fonction et la rappelle (ou l'exécute) à un moment donné dans le corps de l'appelant. L'appelant est responsable de transmettre les bons paramètres à la fonction de rappel. Il peut aussi attendre une valeur de retour particulière de la fonction de rappel, qui servira à orienter le comportement ultérieur de l'appelant.

Il existe deux façons d'appeler une fonction de rappel&nbsp;: _synchrone_ et _asynchrone_. Les rappels synchrones sont appelés immédiatement après l'invocation de la fonction externe, sans tâche asynchrone intermédiaire, tandis que les rappels asynchrones sont appelés plus tard, après qu'une opération {{Glossary("asynchronous", "asynchrone")}} soit terminée.

Comprendre si le rappel est appelé de façon synchrone ou asynchrone est particulièrement important pour analyser les effets de bord. Considérez l'exemple suivant&nbsp;:

```js
let valeur = 1;

faireUnTruc(() => {
  valeur = 2;
});

console.log(valeur); // 1 ou 2 ?
```

Si `faireUnTruc` appelle le rappel de façon synchrone, alors la dernière instruction affichera `2` car `value = 2` est exécuté immédiatement&nbsp;; sinon, si le rappel est asynchrone, la dernière instruction affichera `1` car `value = 2` n'est exécuté qu'après l'instruction `console.log`.

Des exemples de rappels synchrones incluent les fonctions de rappel passées à {{JSxRef("Array.prototype.map()")}}, {{JSxRef("Array.prototype.forEach()")}}, etc. Des exemples de rappels asynchrones incluent ceux passés à {{DOMxRef("Window.setTimeout", "setTimeout()")}} et {{JSxRef("Promise.prototype.then()")}}. Voici des exemples d'implémentation de `faireUnTruc` qui appellent le rappel de façon synchrone et asynchrone&nbsp;:

```js
// Synchrone
function faireUnTruc(callback) {
  callback();
}

// Asynchrone
function faireUnTruc(callback) {
  setTimeout(callback, 0);
}
```

Le guide [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises#gestion_du_temps) fournit plus d'informations sur le moment d'exécution des rappels asynchrones.

## Voir aussi

- [Fonction de rappel](https://fr.wikipedia.org/wiki/Fonction_de_rappel) sur Wikipédia
