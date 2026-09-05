---
title: "Promise : méthode finally()"
short-title: finally()
slug: Web/JavaScript/Reference/Global_Objects/Promise/finally
l10n:
  sourceCommit: a99bc85f30c0c5a8dc5c85b7b552b442d411a082
---

La méthode **`finally()`** des instances de {{JSxRef("Promise")}} planifie l'exécution d'une fonction lorsque la promesse est terminée (soit complétée (<i lang="en">fulfilled</i> en anglais), soit rompue (<i lang="en">rejected</i> en anglais)). Elle retourne immédiatement un autre objet {{JSxRef("Promise")}}, ce qui permet de [chaîner](/fr/docs/Web/JavaScript/Guide/Using_promises#chaînage) des appels à d'autres méthodes de promesse.

Comme le bloc [`finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#le_bloc_finally), cette méthode est généralement destinée aux actions de nettoyage, quel que soit le résultat de la promesse. Elle permet d'éviter de dupliquer du code dans les gestionnaires {{JSxRef("Promise/then", "then()")}} et {{JSxRef("Promise/catch", "catch()")}} de la promesse.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.prototype.finally()", "taller")}}

```js interactive-example
function checkMail() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Un mail est arrivé");
    } else {
      reject(new Error("Échec de l'arrivée"));
    }
  });
}

checkMail()
  .then((mail) => {
    console.log(mail);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Expérience terminée");
  });
```

## Syntaxe

```js-nolint
promiseInstance.finally(onFinally)
```

### Paramètres

- `onFinally`
  - : Une fonction à exécuter de manière asynchrone lorsque cette promesse est complétée. Si la fonction retourne une promesse, la promesse résultante attend que cette promesse soit complétée avant de continuer. Si la promesse retournée est rompue, la promesse résultante est rompue avec la même raison. Toute autre valeur retournée, ou la valeur tenue de la promesse retournée, est ignorée.

### Valeur de retour

Retourne une nouvelle promesse ({{JSxRef("Promise")}}) immédiatement. Cette nouvelle promesse est toujours en attente lorsqu'elle est retournée, quel que soit l'état de la promesse actuelle. Si `onFinally` lève une erreur ou retourne une promesse rompue, la nouvelle promesse est rompue avec cette valeur. Sinon, la nouvelle promesse est acquittée (<i lang="en">settle</i> en anglais) avec le même état que la promesse actuelle.

## Description

La méthode `finally()` peut s'avérer utile si vous souhaitez effectuer un traitement ou un nettoyage une fois que la promesse est acquittée, quel que soit son résultat.

La méthode `finally()` est très similaire à l'appel de {{JSxRef("Promise/then", "then(onFinally, onFinally)")}}. Il existe toutefois quelques différences&nbsp;:

- Lorsque vous créez une fonction en incise, vous pouvez la passer une seule fois, au lieu d'être obligé soit de la déclarer deux fois, soit de créer une variable pour elle.
- La fonction de rappel `onFinally` ne reçoit aucun argument. Ce cas d'utilisation s'applique précisément lorsque vous _ne vous souciez pas_ de la raison du rejet ni de la valeur de complétion, et qu'il n'est donc pas nécessaire de les fournir.
- Un appel à `finally()` est généralement transparent et reflète l'état final de la promesse d'origine. Par exemple&nbsp;:
  - Contrairement à `Promise.resolve(2).then(() => 77, () => 77)`, qui retourne une promesse finalement complétée avec la valeur `77`, `Promise.resolve(2).finally(() => 77)` retourne une promesse finalement complétée avec la valeur `2`.
  - De même, contrairement à `Promise.reject(3).then(() => 88, () => 88)`, qui retourne une promesse finalement complétée avec la valeur `88`, `Promise.reject(3).finally(() => 88)` retourne une promesse finalement rompue avec la raison `3`.

> [!NOTE]
> Un `throw` (ou le retour d'une promesse rompue) dans la fonction de rappel `finally` entraîne toujours le rejet de la promesse retournée. Par exemple, aussi bien `Promise.reject(3).finally(() => { throw 99; })` que `Promise.reject(3).finally(() => Promise.reject(99))` rompent la promesse retournée avec le motif `99`.

Comme pour {{JSxRef("Promise/catch", "catch()")}}, `finally()` appelle en interne la méthode `then` sur l'objet sur lequel elle a été appelée. Si `onFinally` n'est pas une fonction, `then()` est appelé avec `onFinally` comme les deux arguments — ce qui, pour {{JSxRef("Promise.prototype.then()")}}, signifie qu'aucun gestionnaire utile n'est attaché. Sinon, `then()` est appelé avec deux fonctions créées en interne, qui se comportent comme suit&nbsp;:

> [!WARNING]
> Ceci est uniquement à des fins de démonstration et ne constitue pas une prothèse d'émulation (<i lang="en">polyfill</i> en anglais).

```js
promise.then(
  (value) => Promise.resolve(onFinally()).then(() => value),
  (reason) =>
    Promise.resolve(onFinally()).then(() => {
      throw reason;
    }),
);
```

Comme `finally()` appelle `then()`, il prend en charge les sous-classes. De plus, notez l'appel {{JSxRef("Promise.resolve()")}} ci-dessus — en réalité, la valeur de retour de `onFinally()` est résolue à l'aide du même algorithme que `Promise.resolve()`, mais le constructeur utilisé pour créer la promesse résolue est celui de la sous-classe. `finally()` obtient ce constructeur grâce à [`promise.constructor[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

## Exemples

### Utiliser la méthode `finally()`

```js
let enChargement = true;

fetch(maRequete)
  .then((reponse) => {
    const contentType = reponse.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return reponse.json();
    }
    throw new TypeError("Oups, ceci n'est pas du JSON !");
  })
  .then((json) => {
    /* traiter le JSON */
  })
  .catch((error) => {
    console.log(error); // La ligne peut aussi lever une erreur (si console vaut {} par exemple)
  })
  .finally(() => {
    enChargement = false;
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise.prototype.finally` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-promise)
- [La prothèse d'émulation es-shims de `Promise.prototype.finally` <sup>(angl.)</sup>](https://www.npmjs.com/package/promise.prototype.finally)
- L'objet natif {{JSxRef("Promise")}}
- La méthode {{JSxRef("Promise.prototype.then()")}}
- La méthode {{JSxRef("Promise.prototype.catch()")}}
