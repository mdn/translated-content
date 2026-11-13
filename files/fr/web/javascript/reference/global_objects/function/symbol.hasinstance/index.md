---
title: "Function : méthode [Symbol.hasInstance]()"
short-title: "[Symbol.hasInstance]()"
slug: Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`[Symbol.hasInstance]()`** des instances de {{JSxRef("Function")}} définit la procédure par défaut pour déterminer si une fonction constructeur reconnaît un objet comme une instance du constructeur. Elle est appelée par l'opérateur [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof).

## Syntaxe

```js-nolint
func[Symbol.hasInstance](value)
```

### Paramètres

- `value`
  - : L'objet à tester. Les valeurs primitives retournent toujours `false`.

### Valeur de retour

`true` si `func.prototype` se trouve dans la chaîne de prototypes de `value`&nbsp;; sinon `false`. Retourne toujours `false` si `value` n'est pas un objet ou si `this` n'est pas une fonction. Si `this` est une [fonction liée](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), retourne le résultat d'un test `instanceof` entre `value` et la fonction cible sous-jacente.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `this` n'est pas une fonction liée et que `this.prototype` n'est pas un objet.

## Description

L'opétateur [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof) appel la méthode [`[Symbol.hasInstance]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) du côté droit chaque fois qu'une telle méthode existe. Comme toutes les fonctions héritent par défaut de `Function.prototype`, elles possèdent toutes la méthode `[Symbol.hasInstance]()`, donc la plupart du temps la méthode `Function.prototype[Symbol.hasInstance]()` définit le comportement de `instanceof` lorsque le côté droit est une fonction. Cette méthode implémente le comportement par défaut de l'opérateur `instanceof` (le même algorithme que lorsque `constructor` n'a pas de méthode `[Symbol.hasInstance]()`).

Contrairement à la plupart des méthodes, la propriété `Function.prototype[Symbol.hasInstance]()` est non configurable et non modifiable. Il s'agit d'une mesure de sécurité pour empêcher d'obtenir la fonction cible sous-jacente d'une fonction liée. Voir [cette réponse Stack Overflow <sup>(angl.)</sup>](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392) pour un exemple.

## Exemples

### Revenir au comportement `instanceof` par défaut

Vous aurez rarement besoin d'appeler cette méthode directement. En pratique, cette méthode est appelée par l'opérateur `instanceof`. Les deux résultats sont en général équivalents.

```js
class Toto {}
const toto = new Toto();
console.log(toto instanceof Toto === Toto[Symbol.hasInstance](toto)); // true
```

Vous pouvez vouloir utiliser cette méthode si vous souhaitez invoquer le comportement `instanceof` par défaut, mais que vous ne savez pas si un constructeur a une méthode `[Symbol.hasInstance]()` surchargée.

```js
class Toto {
  static [Symbol.hasInstance](value) {
    // Une implémentation personnalisée
    return false;
  }
}

const toto = new Toto();
console.log(toto instanceof Toto); // false
console.log(Function.prototype[Symbol.hasInstance].call(Toto, toto)); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'opérateur [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof)
- Le symbole {{JSxRef("Symbol.hasInstance")}}
