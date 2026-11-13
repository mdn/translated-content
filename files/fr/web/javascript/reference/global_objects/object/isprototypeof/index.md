---
title: "Object : méthode isPrototypeOf()"
short-title: isPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

La méthode **`isPrototypeOf()`** des instances de {{JSxRef("Object")}} permet de vérifier si cet objet existe dans la chaîne de prototypes d'un autre objet.

> [!NOTE]
> `isPrototypeOf()` est différent de l'opérateur [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof). Dans l'expression `object instanceof AFunction`, la chaîne de prototypes de `object` est comparée à `AFunction.prototype`, et non à `AFunction` lui-même.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.prototype.isPrototypeOf()")}}

```js interactive-example
function Toto() {}
function Truc() {}

Truc.prototype = Object.create(Toto.prototype);

const truc = new Truc();

console.log(Toto.prototype.isPrototypeOf(truc));
// Résultat attendu : true
console.log(Truc.prototype.isPrototypeOf(truc));
// Résultat attendu : true
```

## Syntaxe

```js-nolint
isPrototypeOf(object)
```

### Paramètres

- `objet`
  - : L'objet dont la chaîne de prototypes doit être parcourue.

### Valeur de retour

Un booléen indiquant si l'objet appelant (`this`) se trouve dans la chaîne de prototypes de `object`. Retourne directement `false` lorsque `object` n'est pas un objet (c'est-à-dire un primitif).

### Erreurs déclenchées

- {{JSxRef("TypeError")}}
  - : Levé si `this` est `null` ou `undefined` (car il ne peut pas être [converti en objet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#conversion_en_objet)).

## Description

Tous les objets qui héritent de `Object.prototype` (c'est-à-dire tous sauf les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null)) héritent de la méthode `isPrototypeOf()`. Cette méthode permet de vérifier si un objet existe ou non dans la chaîne de prototypes d'un autre objet. Si l'argument `object` n'est pas un objet (c'est-à-dire un primitif), la méthode retourne directement `false`. Sinon, la valeur de `this` est [convertie en objet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#conversion_en_objet), et la chaîne de prototypes de `object` est parcourue à la recherche de la valeur de `this`, jusqu'à ce que la fin de la chaîne soit atteinte ou que la valeur de `this` soit trouvée.

## Exemples

### Utiliser la méthode `isPrototypeOf()`

Cet exemple démontre que `Machin.prototype`, `Truc.prototype`, `Toto.prototype` et `Object.prototype` existent dans la chaîne de prototypes pour l'objet `machin`&nbsp;:

```js
class Toto {}
class Truc extends Toto {}
class Machin extends Truc {}

const toto = new Toto();
const truc = new Truc();
const machin = new Machin();

// chaîne de prototypes :
// toto : Toto --> Object
// truc : Truc --> Toto --> Object
// machin : Machin --> Truc --> Toto --> Object
console.log(Machin.prototype.isPrototypeOf(machin)); // true
console.log(Machin.prototype.isPrototypeOf(truc)); // false
console.log(Machin.prototype.isPrototypeOf(toto)); // false
console.log(Truc.prototype.isPrototypeOf(machin)); // true
console.log(Truc.prototype.isPrototypeOf(toto)); // false
console.log(Toto.prototype.isPrototypeOf(machin)); // true
console.log(Toto.prototype.isPrototypeOf(truc)); // true
console.log(Object.prototype.isPrototypeOf(machin)); // true
```

La méthode `isPrototypeOf()` — ainsi que l'opérateur {{JSxRef("instanceof")}} — est particulièrement utile si vous avez du code qui ne peut fonctionner qu'avec des objets descendants d'une chaîne de prototypes spécifique&nbsp;; par exemple, pour garantir que certaines méthodes ou propriétés sont présentes sur cet objet.

Par exemple, pour exécuter un code qui n'est sûr à exécuter que si un objet `machin` a `Toto.prototype` dans sa chaîne de prototypes, vous pouvez faire ceci&nbsp;:

```js
if (Toto.prototype.isPrototypeOf(machin)) {
  // faire quelque chose de sûr
}
```

Cependant, le fait que `Toto.prototype` existe dans la chaîne de prototypes de `machin` n'implique pas que `machin` a été créé en utilisant `Toto` comme constructeur. Par exemple, `machin` peut être directement assigné avec `Toto.prototype` comme prototype. Dans ce cas, si votre code lit les [champs privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements) de `Toto` à partir de `machin`, cela échoue toujours&nbsp;:

```js
class Toto {
  #value = "toto";
  static getValue(x) {
    return x.#value;
  }
}

const machin = { __proto__: Toto.prototype };

if (Toto.prototype.isPrototypeOf(machin)) {
  console.log(Toto.getValue(machin)); // TypeError: Ne peut pas lire le membre privé #value d'un objet dont la classe ne l'a pas déclaré
}
```

Il en va de même pour [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof). Si vous avez besoin de lire des champs privés de manière sécurisée, proposez plutôt une méthode de vérification marquée en utilisant [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in).

```js
class Toto {
  #value = "toto";
  static getValue(x) {
    return x.#value;
  }
  static estToto(x) {
    return #value in x;
  }
}

const machin = { __proto__: Toto.prototype };

if (Toto.estToto(machin)) {
  // Ne s'exécute pas, car machin n'est pas un Toto
  console.log(Toto.getValue(machin));
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'opérateur {{JSxRef("instanceof")}}
- La méthode statique {{JSxRef("Object.getPrototypeOf()")}}
- La méthode statique {{JSxRef("Object.setPrototypeOf()")}}
- [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
