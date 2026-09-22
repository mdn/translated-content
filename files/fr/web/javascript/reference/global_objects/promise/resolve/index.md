---
title: "Promise : méthode statique resolve()"
short-title: resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Promise.resolve()`** «&nbsp;résout&nbsp;» une valeur donnée en une {{JSxRef("Promise")}}. Si la valeur est une promesse, cette promesse est retournée&nbsp;; si la valeur est une [semi-promesse (<i lang="en">thenable</i> en anglais)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse), `Promise.resolve()` appelle la méthode `then()` avec deux fonctions de rappel qu'elle a préparées&nbsp;; sinon, la promesse retournée est complétée (<i lang="en">fulfilled</i> en anglais) avec la valeur.

Cette fonction aplatit les couches imbriquées d'objets de type promesse (par exemple, une promesse qui se résout en une promesse qui se résout en quelque chose) en une seule couche — une promesse qui se résout en une valeur qui n'est pas une semi-promesse.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.resolve()")}}

```js interactive-example
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // Résultat attendu : 123
});
```

## Syntaxe

```js-nolint
Promise.resolve(value)
```

### Paramètres

- `value`
  - : L'argument à résoudre par cette promesse (`Promise`). Peut être une promesse (`Promise`) ou une semi-promesse à résoudre.

### Valeur de retour

Une promesse ({{JSxRef("Promise")}}) qui est résolue avec la valeur indiquée en argument ou la promesse passée en argument si celui-ci est une promesse. Une promesse résolue peut être dans n'importe lequel des états — complétée, rompue ou en attente. Par exemple, résoudre une promesse rompue donne toujours une promesse rompue.

## Description

`Promise.resolve()` _résout_ une promesse, ce qui n'est pas la même chose que de la compléter ou de la rompre. Voir [la description de `Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) pour les définitions de la terminologie. En bref, `Promise.resolve()` retourne une promesse dont l'état final dépend d'une autre promesse, d'un objet semi-promesse ou d'une autre valeur.

> [!NOTE]
> Si l'évaluation de l'expression `value` peut lever une erreur de manière synchrone, cette erreur n'est pas interceptée et encapsulée dans une promesse rompue par `Promise.resolve()`. Dans ce cas, envisagez d'utiliser {{JSxRef("Promise/try", "Promise.try(() => value)")}}.

`Promise.resolve()` est générique et prend en charge l'héritage, ce qui signifie qu'il peut être appelé sur des sous-classes de `Promise`, et le résultat est une promesse du type de la sous-classe. Pour ce faire, le constructeur de la sous-classe doit implémenter la même signature que le constructeur [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) — acceptant une seule fonction `executor` qui peut être appelée avec les rappels `resolve` et `reject` comme paramètres.

`Promise.resolve()` traite de manière spéciale les instances natives de `Promise`. Si `value` appartient à `Promise` ou à une sous-classe, et que `value.constructor === Promise`, alors `value` est directement retourné par `Promise.resolve()`, sans créer une nouvelle instance de `Promise`. Sinon, `Promise.resolve()` est essentiellement un raccourci pour `new Promise((resolve) => resolve(value))`.

La majeure partie de la logique de résolution est en fait implémentée par [la fonction `resolve`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#la_fonction_resolve) passée par le constructeur `Promise()`. En résumé&nbsp;:

- Si une valeur qui n'est pas une [semi-promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) est passée, la promesse retournée est déjà complétée avec cette valeur.
- Si une semi-promesse est passée, la promesse retournée adopte l'état de cette semi-promesse en appelant la méthode `then` et en passant une paire de fonctions de résolution comme arguments. (Mais comme les promesses natives passent directement par `Promise.resolve()` sans créer d'enveloppe, la méthode `then` n'est pas appelée sur les promesses natives.) Si la fonction `resolve` reçoit un autre objet semi-promesse, il est résolu à nouveau, de sorte que la valeur de complétion éventuelle de la promesse n'est jamais une semi-promesse.

## Exemples

### Utiliser la méthode statique `Promise.resolve()`

```js
Promise.resolve("Succès").then(
  (valeur) => {
    console.log(valeur); // "Succès"
  },
  (raison) => {
    // n'est pas appelée
  },
);
```

### Résoudre un tableau

```js
const p = Promise.resolve([1, 2, 3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### Résoudre une autre `Promise`

`Promise.resolve()` réutilise les instances de `Promise` existantes. Si elle résout une promesse native, elle retourne la même instance de promesse sans créer d'enveloppe.

```js
const original = Promise.resolve(33);
const diffusion = Promise.resolve(original);
diffusion.then(function (valeur) {
  console.log("valeur : " + valeur);
});
console.log("original === diffusion ? " + (original === diffusion));

// Journaux, dans l'ordre :
// original === diffusion ? true
// valeur : 33
```

L'ordre inversé des journaux s'explique par le fait que les gestionnaires `then` sont appelés de manière asynchrone. Voir la référence de {{JSxRef("Promise/then", "then()")}} pour plus d'informations.

### Résoudre les semi-promesses et lever les erreurs

```js
// Résout l'objet de semi-promesse
const p1 = Promise.resolve({
  then(onFulfill, onReject) {
    onFulfill("complété !");
  },
});
console.log(p1 instanceof Promise); // true, l'objet diffusé est une Promise

p1.then(
  (v) => {
    console.log(v); // "complété !"
  },
  (e) => {
    // n'est pas appelée
  },
);

// La semi-promesse lève une erreur
// La promesse est rompue
const p2 = Promise.resolve({
  then() {
    throw new TypeError("Lève une erreur");
  },
});
p2.then(
  (v) => {
    // n'est pas appelée
  },
  (e) => {
    console.error(e); // TypeError: Lève une erreur
  },
);

// La semi-promesse lève une erreur après la fonction de rappel
// La promesse est résolue
const p3 = Promise.resolve({
  then(uneFoisCompletee) {
    uneFoisCompletee("Résolution");
    throw new TypeError("Lève une erreur");
  },
});
p3.then(
  (v) => {
    console.log(v); // "Résolution"
  },
  (e) => {
    // n'est pas appelée
  },
);
```

Les semi-promesses imbriquées sont «&nbsp;aplatis profondément&nbsp;» en une seule promesse.

```js
const semiPromesse = {
  then(uneFoisCompletee, quandRejetee) {
    uneFoisCompletee({
      // La semi-promesse est complétée avec une autre semi-promesse
      then(uneFoisCompletee, quandRejetee) {
        uneFoisCompletee(42);
      },
    });
  },
};

Promise.resolve(semiPromesse).then((v) => {
  console.log(v); // 42
});
```

> [!WARNING]
> N'appelez pas `Promise.resolve()` sur une semi-promesse qui se résout elle-même. Cela conduit à une récursion infinie, car elle tente d'aplatir une promesse imbriquée à l'infini.

```js example-bad
const semiPromesse = {
  then(uneFoisCompletee, quandRejetee) {
    uneFoisCompletee(semiPromesse);
  },
};

Promise.resolve(semiPromesse); // Conduit à une récursion infinie.
```

### Appeler `resolve()` sur un constructeur qui n'est pas une promesse

`Promise.resolve()` est une méthode générique. Elle peut être appelée sur n'importe quel constructeur qui implémente la même signature que le constructeur `Promise()`. Par exemple, vous pouvez l'appeler sur un constructeur qui lui transmet `console.log` comme fonction `resolve`&nbsp;:

```js
class PasUnePromesse {
  constructor(executeur) {
    // Les fonctions "resolve" et "reject" ne se comportent pas du tout comme
    // celles d'une promesse native, mais Promise.resolve() les appelle de la même manière.
    executeur(
      (valeur) => console.log("Résolue", valeur),
      (raison) => console.log("Rompue", raison),
    );
  }
}

Promise.resolve.call(PasUnePromesse, "toto"); // Journalise "Résolue toto"
```

La capacité à aplatir les semi-promesses imbriquées est implémentée par la fonction `resolve` du constructeur `Promise()`, donc si vous l'appelez sur un autre constructeur, les semi-promesses imbriquées peuvent ne pas être aplaties, selon la manière dont ce constructeur implémente sa fonction `resolve`.

```js
const semiPromesse = {
  then(uneFoisCompletee, quandRejetee) {
    uneFoisCompletee({
      // La semi-promesse est complétée avec une autre semi-promesse
      then(uneFoisCompletee, quandRejetee) {
        uneFoisCompletee(42);
      },
    });
  },
};

Promise.resolve.call(PasUnePromesse, semiPromesse); // Journalise "Résolu { then: [Function: then] }"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Promise")}}
