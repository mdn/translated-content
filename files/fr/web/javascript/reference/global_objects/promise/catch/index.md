---
title: "Promise : méthode catch()"
short-title: catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`catch()`** des instances de {{JSxRef("Promise")}} planifie l'exécution d'une fonction lorsque la promesse est rompue. Elle retourne immédiatement un autre objet {{JSxRef("Promise")}}, ce qui permet de [chaîner](/fr/docs/Web/JavaScript/Guide/Using_promises#chaînage) des appels à d'autres méthodes de promesse. C'est un raccourci pour {{JSxRef("Promise/then", "then(undefined, onRejected)")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.prototype.catch()")}}

```js interactive-example
const promise = new Promise((resolve, reject) => {
  throw new Error("Oh oh !");
});

promise.catch((error) => {
  console.error(error);
});
// Résultat attendu : Error: Oh oh !
```

## Syntaxe

```js-nolint
promiseInstance.catch(onRejected)
```

### Paramètres

- `onRejected`
  - : Une fonction à exécuter de manière asynchrone lorsque cette promesse est rompue. Sa valeur de retour devient la valeur de complétion de la promesse retournée par `catch()`. La fonction est appelée avec les arguments suivants&nbsp;:
    - `reason`
      - : La raison pour laquelle la promesse est rompue.

### Valeur de retour

Retourne une nouvelle promesse ({{JSxRef("Promise")}}). Cette nouvelle promesse est toujours en attente lorsqu'elle est retournée, quel que soit l'état de la promesse actuelle. Si `onRejected` est appelé, la promesse retournée est résolue en fonction de la valeur de retour de cet appel, ou rompue avec l'erreur levée par cet appel. Si la promesse actuelle est complétée, `onRejected` n'est pas appelé et la promesse retournée est complétée avec la même valeur.

## Description

La méthode `catch` est utilisée pour la gestion des erreurs dans la composition des promesses. Comme elle retourne une promesse ({{JSxRef("Promise")}}), elle [peut être chaînée](/fr/docs/Web/JavaScript/Guide/Using_promises#chaînage) de la même manière que sa méthode voisine, {{JSxRef("Promise/then", "then()")}}.

Si une promesse est rompue et qu'il n'y a pas de gestionnaires de rejet à appeler (un gestionnaire peut être attaché avec n'importe quel {{JSxRef("Promise/then", "then()")}}, `catch()` ou {{JSxRef("Promise/finally", "finally()")}}), alors l'évènement de rejet est signalé par l'hôte. Dans le navigateur, cela entraîne un évènement [`unhandledrejection`](/fr/docs/Web/API/Window/unhandledrejection_event). Si un gestionnaire est attaché à une promesse rompue dont le rejet a déjà provoqué un évènement de rejet non géré, alors un autre évènement [`rejectionhandled`](/fr/docs/Web/API/Window/rejectionhandled_event) est déclenché.

`catch()` appelle en interne `then()` sur l'objet sur lequel il a été appelé, en passant `undefined` et `onRejected` comme arguments. La valeur de cet appel est directement retournée. Cela est observable si vous enveloppez les méthodes.

```js
// surcharge les Promise.prototype.then/catch d'origine juste pour ajouter des journalisations
((Promise) => {
  const thenOriginal = Promise.prototype.then;
  const catchOriginal = Promise.prototype.catch;

  Promise.prototype.then = function (...args) {
    console.log("Appel de .then sur %o avec les arguments : %o", this, args);
    return thenOriginal.apply(this, args);
  };
  Promise.prototype.catch = function (...args) {
    console.error("Appel de .catch sur %o avec les arguments : %o", this, args);
    return catchOriginal.apply(this, args);
  };
})(Promise);

// appel la méthode catch sur une promesse déjà résolue
Promise.resolve().catch(function XXX() {});

// Journaux :
// Appel de .catch sur Promise{} avec les arguments : Arguments{1} [0: function XXX()]
// Appel de .then sur Promise{} avec les arguments : Arguments{2} [0: undefined, 1: function XXX()]
```

Cela signifie que le fait de passer `undefined` entraîne toujours le rejet de la promesse retournée, et que vous devez passer une fonction pour empêcher le rejet de la promesse finale.

Comme `catch()` appelle simplement `then()`, il prend en charge les sous-classes.

> [!NOTE]
> Les exemples ci-dessous lèvent des instances de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error). Comme pour les instructions [`throw`](/fr/docs/Web/JavaScript/Reference/Statements/throw) synchrones, c'est considéré comme une bonne pratique&nbsp;; sinon, la partie responsable de la gestion des exceptions doit effectuer des vérifications pour déterminer si l'argument est une chaîne de caractères ou une erreur, et vous risquez de perdre des informations précieuses telles que les traces de pile.

## Exemples

### Utiliser le chaînage et la méthode `catch()`

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Succès !");
});

p1.then((valeur) => {
  console.log(valeur); // "Succès !"
  throw new Error("zut !");
})
  .catch((e) => {
    console.error(e.message); // "zut !"
  })
  .then(
    () => console.log("après une capture, la chaîne est rétablie"), // "après une capture, la chaîne est rétablie"
    () => console.log("N'a pas été déclenché à cause de cette erreur"),
  });

// Ce qui suit fonctionne de la même manière que ci-dessus
p1.then((valeur) => {
  console.log(valeur); // "Succès !"
  return Promise.reject(new Error("oh, non !"));
})
  .catch((e) => {
    console.error(e); // Error: oh, non !
  })
  .then(
    () => console.log("après une capture, la chaîne est rétablie"), // "après une capture, la chaîne est rétablie"
    () => console.log("N'a pas été déclenché à cause de cette erreur"),
  );
```

### Pièges à éviter lorsque les erreurs sont levées

Le fait de lever une erreur déclenche la plupart du temps l'appel de la méthode `catch()`&nbsp;:

```js
const p1 = new Promise((resolve, reject) => {
  throw new Error("Oh oh !");
});

p1.catch((e) => {
  console.error(e); // "Oh oh !"
});
```

Les erreurs levées à l'intérieur des fonctions asynchrones se comporteront comme des erreurs non interceptées&nbsp;:

```js
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Exception non interceptée !");
  }, 1000);
});

p2.catch((e) => {
  console.error(e); // Ce n'est jamais appelé
});
```

Les erreurs générées après l'appel de `resolve` sont ignorées&nbsp;:

```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Exception passée sous silence!");
});

p3.catch((e) => {
  console.error(e); // Ce n'est jamais appelé
});
```

### La méthode `catch()` n'est pas appelée si la promesse est complétée

```js
// Crée une promesse qui n'appelle pas onReject
const p1 = Promise.resolve("appel suivant");

const p2 = p1.catch((reason) => {
  // Ceci n'est jamais appelé
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("prochaine promesse en complétion");
    console.log(value); // appel suivant
  },
  (reason) => {
    console.log("prochaine promesse qui est rompue");
    console.log(reason);
  },
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Promise")}}
- La méthode {{JSxRef("Promise.prototype.then()")}}
- La méthode {{JSxRef("Promise.prototype.finally()")}}
