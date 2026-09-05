---
title: "Promise : propriété [Symbol.species]"
short-title: "[Symbol.species]"
slug: Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété d'accesseur statique **`Promise[Symbol.species]`** retourne le constructeur utilisé pour construire les valeurs de retour des méthodes de promesse.

> [!WARNING]
> L'existence de `[Symbol.species]` permet l'exécution de code arbitraire et peut créer des vulnérabilités de sécurité. Elle rend également certaines optimisations beaucoup plus difficiles. Les personnes en charge de l'implémentation des moteurs [enquêtent pour savoir s'il faut supprimer cette fonctionnalité <sup>(angl.)</sup>](https://github.com/tc39/proposal-rm-builtin-subclassing). Évitez de vous y fier si possible.

## Syntaxe

```js-nolint
Promise[Symbol.species]
```

### Valeur de retour

La valeur du constructeur (`this`) sur lequel `get [Symbol.species]` a été appelé. La valeur de retour est utilisée pour construire les valeurs de retour des méthodes de chaînage de promesses qui créent de nouvelles promesses.

## Description

La propriété d'accesseur `[Symbol.species]` retourne le constructeur par défaut pour les objets `Promise`. Les constructeurs de sous-classes peuvent la remplacer pour modifier l'affectation du constructeur. L'implémentation par défaut est essentiellement&nbsp;:

```js
// c'est une implémentation sous-jacente hypothétique à titre d'illustration
class Promise {
  static get [Symbol.species]() {
    return this;
  }
}
```

En raison de cette implémentation polymorphe, `[Symbol.species]` des sous-classes dérivées retourne également le constructeur lui-même par défaut.

```js
class SubPromise extends Promise {}
SubPromise[Symbol.species] === SubPromise; // true
```

Les méthodes de chaînage de promesses — [`then()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), [`catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) et [`finally()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) — retournent de nouveaux objets promesse. Elles obtiennent le constructeur pour construire la nouvelle promesse avec `this.constructor[Symbol.species]`. Si `this.constructor` est `undefined`, ou si `this.constructor[Symbol.species]` est `undefined` ou `null`, le constructeur par défaut {{JSxRef("Promise/Promise", "Promise()")}} est utilisé. Sinon, le constructeur retourné par `this.constructor[Symbol.species]` est utilisé pour construire le nouvel objet promesse.

## Examples

### Les espèces dans les objets ordinaires

La propriété `Symbol.species` retourne la fonction constructeur par défaut, qui est le constructeur `Promise` pour les objets `Promise`.

```js
Promise[Symbol.species]; // [Function: Promise]
```

### Les espèces dans les objets dérivés

Dans une instance d'une sous-classe personnalisée de `Promise`, telle que `MaPromesse`, l'espèce `MaPromesse` est le constructeur `MaPromesse`. Cependant, vous pouvez vouloir remplacer cela afin de retourner des objets `Promise` parent dans les méthodes de votre classe dérivée.

```js
class MaPromesse extends Promise {
  // Surcharge de l'espèce MaPromesse pour le constructeur Promise parent
  static get [Symbol.species]() {
    return Promise;
  }
}
```

Par défaut, les méthodes de promesse retournent des promesses du type de la sous-classe.

```js
class MaPromesse extends Promise {
  uneValeur = 1;
}

console.log(MaPromesse.resolve(1).then(() => {}).uneValeur); // 1
```

En surchargeant `[Symbol.species]`, les méthodes de promesse retournent le type `Promise` de base.

```js
class MaPromesse extends Promise {
  uneValeur = 1;
  static get [Symbol.species]() {
    return Promise;
  }
}

console.log(MaPromesse.resolve(1).then(() => {}).uneValeur); // undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Promise")}}
- La propriété statique {{JSxRef("Symbol.species")}}
