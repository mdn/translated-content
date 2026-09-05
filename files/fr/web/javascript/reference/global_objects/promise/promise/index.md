---
title: Constructeur Promise()
short-title: Promise()
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
l10n:
  sourceCommit: 3b7310aac5ffd95db697bf136b7323cffc7e5bd2
---

Le constructeur **`Promise()`** crée des objets {{JSxRef("Promise")}}. Il est principalement utilisé pour envelopper des API basées sur les fonctions de rappel qui ne prennent pas déjà en charge les promesses.

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur Promise()", "taller")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("toto");
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // Résultat attendu : "toto"
});

console.log(promise1);
// Résultat attendu : [object Promise]
```

## Syntaxe

```js-nolint
new Promise(executor)
```

> [!NOTE]
> `Promise()` ne peut être construit qu'avec {{JSxRef("new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `executor`
  - : Une fonction ({{JSxRef("Function")}}) à exécuter par le constructeur. Elle reçoit deux fonctions en paramètres&nbsp;: `resolveFunc` et `rejectFunc`. Toute erreur levée dans un `executor` provoque le rejet de la promesse, et la valeur de retour est ignorée. La sémantique d'un `executor` est détaillée ci-dessous.

### Valeur de retour

Lorsqu'il est appelé avec `new`, le constructeur `Promise` retourne un objet de promesse. L'objet promesse est _résolu_ lorsque l'une des fonctions `resolveFunc` ou `rejectFunc` est appelée. Notez que si vous appelez `resolveFunc` et passez un autre objet promesse en argument, la promesse initiale peut être considérée comme «&nbsp;résolue&nbsp;», mais pas encore «&nbsp;acquittée&nbsp;» (<i lang="en">settle</i> en anglais). Voir la [description de `Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) pour plus d'explications.

## Description

Traditionnellement (avant les promesses), les tâches asynchrones étaient conçues comme des fonctions de rappel.

```js
readFile("./data.txt", (error, result) => {
  // Cette fonction de rappel est appelée lorsque la tâche est terminée,
  // avec une `error` ou un `result` final. Toute opération dépendant du
  // résultat doit être définie dans cette fonction de rappel.
});
// Le code ici est exécuté immédiatement après que la requête `readFile`
// est déclenchée. Il n'attend pas que la fonction de rappel soit
// appelée, rendant ainsi `readFile` « asynchrone ».
```

Pour tirer parti de l'amélioration de la lisibilité et des fonctionnalités offertes par les promesses, le constructeur `Promise()` permet de transformer une API basée sur les rappels en une API basée sur les promesses.

> [!NOTE]
> Si votre tâche est déjà basée sur les promesses, vous n'avez probablement pas besoin du constructeur `Promise()`.

Un `executor` est un code personnalisé qui relie un résultat dans un rappel à une promesse. Vous, le programmeur, écrivez le `executor`. Sa signature est censée être&nbsp;:

```js
function executor(resolveFunc, rejectFunc) {
  // Typiquement, une opération asynchrone qui accepte une fonction de
  // rappel, comme la fonction `readFile` ci-dessus
}
```

`resolveFunc` et `rejectFunc` sont également des fonctions, et vous pouvez leur donner les noms réels que vous souhaitez. Leurs signatures sont simples&nbsp;: elles acceptent un seul paramètre de n'importe quel type.

```js
resolveFunc(value); // l'appel est résolu
rejectFunc(reason); // l'appel est rompu
```

Le paramètre `value` passé à `resolveFunc` peut être un autre objet promise, auquel cas l'état de la promesse nouvellement construite est «&nbsp;verrouillé&nbsp;» sur la promesse passée (dans le cadre de la promesse de [résolution](#la_fonction_resolve)). `rejectFunc` a une sémantique proche de l'instruction [`throw`](/fr/docs/Web/JavaScript/Reference/Statements/throw), donc `reason` est typiquement une instance de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error). Si `value` ou `reason` est omis, la promesse est complétée (<i lang="en">fulfilled</i> en anglais)/rompue (<i lang="en">rejected</i> en anglais) avec `undefined`.

L'état de complétion d'un `executor` a un effet limité sur l'état de la promesse&nbsp;:

- La valeur de retour d'un `executor` est ignorée. Les instructions `return` à l'intérieur d'un `executor` n'affectent que le flux de contrôle et modifient si une partie de la fonction est exécutée, mais n'ont aucun impact sur la valeur de complétion de la promesse. Si un `executor` se termine et qu'il est impossible que `resolveFunc` ou `rejectFunc` soit appelé à l'avenir (par exemple, s'il n'y a pas de tâches asynchrones planifiées), alors la promesse reste en attente indéfiniment.
- Si une erreur est levée dans un `executor`, la promesse est rompue, sauf si `resolveFunc` ou `rejectFunc` a déjà été appelé.

> [!NOTE]
> L'existence de promesses en attente n'empêche pas le programme de se terminer. Si la boucle d'évènements est vide, le programme se termine malgré toutes les promesses en attente (car celles-ci sont nécessairement en attente pour toujours).

Voici un résumé d'un flux représentatif&nbsp;:

1. Au moment où le constructeur génère le nouvel objet `Promise`, il génère également une paire correspondante de fonctions pour `resolveFunc` et `rejectFunc`&nbsp;; celles-ci sont «&nbsp;attachées&nbsp;» à l'objet `Promise`.
2. Un `executor` encapsule typiquement une opération asynchrone qui fournit une API basée sur des fonctions de rappel. Le rappel (celui passé à l'API basée sur des fonctions de rappel originale) est défini dans le code d'un `executor`, de sorte qu'il a accès à `resolveFunc` et `rejectFunc`.
3. Un `executor` est appelé de manière synchrone (dès que le `Promise` est construit) avec les fonctions `resolveFunc` et `rejectFunc` comme arguments.
4. Le code à l'intérieur d'un `executor` a l'opportunité d'effectuer une opération. La complétion éventuelle de la tâche asynchrone est communiquée à l'instance de promesse avec l'effet secondaire causé par `resolveFunc` ou `rejectFunc`. L'effet secondaire est que l'objet `Promise` devient «&nbsp;résolu&nbsp;».
   - Si `resolveFunc` est appelé en premier, la valeur passée est [résolue](#la_fonction_resolve). La promesse peut rester en attente (dans le cas où une autre [semi-promesse (<i lang="en">thenable</i> en anglais)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) est passé), devient complétée (dans la plupart des cas où une valeur qui n'est pas une semi-promesse est passée), ou devient rompue (dans le cas d'une valeur de résolution invalide).
   - Si `rejectFunc` est appelé en premier, la promesse devient instantanément rompue.
   - Une fois qu'une des fonctions de résolution (`resolveFunc` ou `rejectFunc`) est appelée, la promesse reste résolue. Seul le premier appel à `resolveFunc` ou `rejectFunc` affecte l'état final de la promesse, et les appels ultérieurs à l'une ou l'autre fonction ne peuvent ni changer la valeur de complétion/la raison du rejet ni basculer son état final de «&nbsp;complétée&nbsp;» à «&nbsp;rompue&nbsp;» ou inversement.
   - Si `executor` se termine en levant une erreur, alors la promesse est rompue. Cependant, l'erreur est ignorée si l'une des fonctions de résolution a déjà été appelée (de sorte que la promesse est déjà résolue).
   - La résolution de la promesse ne provoque pas nécessairement que la promesse devienne complétée ou rompue (c'est-à-dire acquittée). La promesse peut encore être en attente parce qu'elle est résolue avec une autre semi-promesse, mais son état final correspond à celui de la semi-promesse résolue.
5. Une fois que la promesse est acquittée, elle invoque (de manière asynchrone) tous les gestionnaires supplémentaires associés avec {{JSxRef("Promise/then", "then()")}}, {{JSxRef("Promise/catch", "catch()")}} ou {{JSxRef("Promise/finally", "finally()")}}. La valeur de complétion finale ou la raison du rejet est transmise à l'invocation des gestionnaires de complétion et de rejet en tant que paramètre d'entrée (voir [l'enchaînement de promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#enchaînement_de_promesses)).

Par exemple, l'API `readFile` basée sur les fonctions de rappel ci-dessous peut être transformée en une API basée sur les promesses.

```js
const readFilePromise = (chemin) =>
  new Promise((resolve, reject) => {
    readFile(chemin, (erreur, resultat) => {
      if (erreur) {
        reject(erreur);
      } else {
        resolve(resultat);
      }
    });
  });

readFilePromise("./data.txt")
  .then((resultat) => console.log(resultat))
  .catch((erreur) => console.error("Échec de la lecture des données"));
```

Les fonctions de rappel `resolve` et `reject` ne sont disponibles que dans le cadre de la fonction d'exécution, ce qui signifie que vous ne pouvez plus y accéder une fois la promesse créée. Si vous souhaitez créer la promesse avant de décider comment la résoudre, vous pouvez utiliser à la place la méthode {{JSxRef("Promise.withResolvers()")}}, qui met à disposition les fonctions `resolve` et `reject`

### La fonction `resolve`

La fonction `resolve` a les comportements suivants&nbsp;:

- Si elle est appelée avec la même valeur que la promesse nouvellement créée (la promesse à laquelle elle est «&nbsp;attachée&nbsp;»), la promesse est rompue avec un {{JSxRef("TypeError")}}.
- Si elle est appelée avec une valeur qui n'est pas une [semi-promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) (un primitif, ou un objet dont la propriété `then` n'est pas appelable, y compris lorsque la propriété n'est pas présente), la promesse est immédiatement complétée avec cette valeur.
- Si elle est appelée avec une valeur semi-promesse (y compris une autre instance de `Promise`), alors la méthode `then` de la semi-promesse est sauvegardée et appelée dans le futur (elle est toujours appelée de manière asynchrone). La méthode `then` est appelée avec deux fonctions de rappel, qui sont deux nouvelles fonctions ayant exactement les mêmes comportements que les `resolveFunc` et `rejectFunc` passés à la fonction `executor`. Si l'appel de la méthode `then` lève une exception, alors la promesse actuelle est rompue avec l'erreur levée.

Dans le dernier cas, cela signifie que du code comme&nbsp;:

```js
new Promise((resolve, reject) => {
  resolve(semiPromesse);
});
```

Ceci est à peu près équivalent à&nbsp;:

```js
new Promise((resolve, reject) => {
  try {
    semiPromesse.then(
      (valeur) => resolve(valeur),
      (raison) => reject(raison),
    );
  } catch (e) {
    reject(e);
  }
});
```

Sauf que dans le cas `resolve(semiPromesse)`&nbsp;:

1. `resolve` est appelée de manière synchrone, de sorte que l'appel de `resolve` ou `reject` à nouveau n'a aucun effet, même lorsque les gestionnaires attachés par `uneAutrePromesse.then()` ne sont pas encore appelés.
2. La méthode `then` est appelée de manière asynchrone, de sorte que la promesse n'est jamais instantanément résolue si une semi-promesse est passée.

Comme `resolve` est à nouveau appelé avec la valeur que `semiPromesse.then()` lui transmet en tant que `valeur`, la fonction de résolution est capable d'aplatir les semi-promesses imbriqués, dans lesquels une semi-promesse appelle son gestionnaire `onFulfilled` avec une autre semi-promesse. L'effet est que le gestionnaire de complétion d'une véritable promesse ne reçoit jamais de semi-promesse comme valeur de complétion.

## Exemples

### Transformer une API basée sur les fonctions de rappel en une API basée sur les promesses

Pour fournir une fonction avec la fonctionnalité de promesse, faites en sorte qu'elle retourne une promesse en appelant les fonctions `resolve` et `reject` aux moments appropriés.

```js
function maFonctionAsync(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

### Effet de l'appel de `resolveFunc`

L'appel de `resolveFunc` fait que la promesse devient résolue, de sorte que l'appel de `resolveFunc` ou `rejectFunc` à nouveau n'a aucun effet. Cependant, la promesse peut être dans n'importe lequel des états&nbsp;: en attente, complétée ou rompue.

Cette promesse `attendResolution` est résolue au moment de sa création, car elle a déjà été «&nbsp;verrouillée&nbsp;» pour correspondre à l'état final de la promesse interne, et l'appel de `resolveOuter` ou `rejectOuter` ou le fait de lever une erreur plus tard dans l'exécuteur n'a aucun effet sur son état final. Cependant, la promesse interne est toujours en attente jusqu'à 100ms plus tard, donc la promesse externe est également en attente&nbsp;:

```js
const attendResolution = new Promise((resolveOuter, rejectOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(() => {
        resolveInner("interne");
      }, 100);
    }),
  );
});
```

Cette promesse `completionResolution` devient complétée au moment où elle est résolue, car elle est résolue avec une valeur qui n'est pas une semi-promesse. Cependant, lorsqu'elle est créée, elle n'est pas résolue, car ni `resolve` ni `reject` n'ont encore été appelés. Une promesse non résolue est nécessairement en attente&nbsp;:

```js
const completionResolution = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("externe");
  }, 100);
});
```

L'appel de `rejectFunc` provoque évidemment le rejet de la promesse. Cependant, il existe également deux façons de faire en sorte que la promesse devienne instantanément rompue même lorsque le rappel `resolveFunc` est appelé.

```js
// 1. Résolution avec la promesse elle-même
const resolutionRejetee1 = new Promise((resolve) => {
  // Note : resolve doit être appelé de manière asynchrone,
  // afin que la variable resolutionRejetee1 soit initialisée
  setTimeout(() => resolve(resolutionRejetee1)); // TypeError: Chaînage de cycle détectée pour la promesse #<Promise>
});

// 2. Résolution avec un objet qui lève une erreur lors de l'accès à la propriété `then`
const resolutionRejetee2 = new Promise((resolve) => {
  resolve({
    get then() {
      throw new Error("Ne peut pas obtenir la propriété then");
    },
  });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-promise)
- Le guide [d'utilisation des promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- La méthode statique {{JSxRef("Promise.withResolvers()")}}
