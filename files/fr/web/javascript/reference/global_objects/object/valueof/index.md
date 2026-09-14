---
title: "Object : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

La méthode **`valueOf()`** des instances de {{JSxRef("Object")}} convertit la valeur de `this` [en objet](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#conversion_en_objet). Cette méthode est destinée à être surchargée par les objets dérivés pour une logique personnalisée de [conversion de type](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_de_type).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.prototype.valueOf()")}}

```js interactive-example
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object = new MyNumberType(4);

console.log(object + 3);
// Résultat attendu : 7
```

## Syntaxe

```js-nolint
valueOf()
```

### Paramètres

Aucun.

### Valeur de retour

La valeur de `this`, convertie en objet.

> [!NOTE]
> Pour que `valueOf` soit utile lors de la conversion de type, elle doit retourner une valeur primitive. Comme tous les types primitifs ont leurs propres méthodes `valueOf()`, l'appel de `primitiveValue.valueOf()` n'invoque généralement pas `Object.prototype.valueOf()`.

## Description

JavaScript appelle la méthode `valueOf` pour [convertir un objet en valeur primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_de_type). Vous avez rarement besoin d'invoquer la méthode `valueOf` vous-même&nbsp;; JavaScript l'invoque automatiquement lorsqu'il rencontre un objet là où une valeur primitive est attendue.

Cette méthode est appelée en priorité lors de la [conversion numérique](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_numérique) et de la [conversion en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_de_primitive), mais la [conversion en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_de_chaîne_de_caractères) appelle `toString()` en priorité, et `toString()` est très susceptible de retourner une valeur de type chaîne de caractères (même pour l'implémentation de base {{JSxRef("Object.prototype.toString()")}}), donc `valueOf()` n'est généralement pas appelé dans ce cas.

Tous les objets qui héritent de `Object.prototype` (c'est-à-dire tous sauf les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null)) héritent de la méthode `toString()`. L'implémentation de base `Object.prototype.valueOf()` est délibérément inutile&nbsp;: en retournant un objet, sa valeur de retour n'est jamais utilisée par un [algorithme de conversion en primitive](/fr/docs/Web/JavaScript/Guide/Data_structures#conversion_de_type). De nombreux objets intégrés redéfinissent cette méthode pour retourner une valeur primitive appropriée. Lorsque vous créez un objet personnalisé, vous pouvez surcharger `valueOf()` pour appeler une méthode personnalisée, afin que votre objet personnalisé puisse être converti en valeur primitive. En général, `valueOf()` est utilisé pour retourner une valeur qui a le plus de sens pour l'objet — contrairement à `toString()`, elle n'a pas besoin d'être une chaîne de caractères. Alternativement, vous pouvez ajouter une méthode [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), qui permet un contrôle encore plus précis du processus de conversion, et est toujours préférée à `valueOf` ou `toString` pour toute conversion de type.

## Exemples

### Utiliser la méthode `valueOf()`

La méthode de base `valueOf()` retourne la valeur `this` elle-même, convertie en objet si ce n'est pas déjà le cas. Par conséquent, sa valeur de retour n'est jamais utilisée par un algorithme de conversion en primitive.

```js
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (une enveloppe d'objet)
```

### Surcharger `valueOf` pour les objets personnalisés

Vous pouvez créer une fonction qui est appelée à la place de la méthode `valueOf` par défaut. Votre fonction ne doit prendre aucun argument, car aucun ne lui est passé lorsqu'elle est appelée lors de la conversion de type.

Par exemple, vous pouvez ajouter une méthode `valueOf` à votre classe personnalisée `Boite`.

```js
class Boite {
  #valeur;
  constructor(valeur) {
    this.#valeur = valeur;
  }
  valueOf() {
    return this.#valeur;
  }
}
```

Avec le code précédent en place, chaque fois qu'un objet de type `Boite` est utilisé dans un contexte où il doit être représenté comme une valeur primitive (mais pas spécifiquement une chaîne de caractères), JavaScript appelle automatiquement la fonction définie dans le code précédent.

```js
const boite = new Boite(123);
console.log(boite + 456); // 579
console.log(boite == 123); // true
```

La méthode `valueOf` d'un objet est généralement invoquée par JavaScript, mais vous pouvez l'invoquer vous-même comme suit&nbsp;:

```js
boite.valueOf();
```

### Utiliser l'opérateur unaire plus sur les objets

[Un unaire plus](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus) effectue une [conversion en nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_numérique) sur son opérande, ce qui, pour la plupart des objets sans [`[Symbol.toPrimitive]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive), signifie appeler sa méthode `valueOf()`. Cependant, si l'objet n'a pas de méthode `valueOf()` personnalisée, l'implémentation de base fait en sorte que `valueOf()` soit ignorée et que la valeur de retour de `toString()` soit utilisée à la place.

```js
+new Date(); // le timestamp actuel ; identique à new Date().getTime()
+{}; // NaN (toString() retourne "[object Object]")
+[]; // 0 (toString() retourne une liste de chaînes de caractères vide)
+[1]; // 1 (toString() retourne "1")
+[1, 2]; // NaN (toString() retourne "1,2")
+new Set([1]); // NaN (toString() retourne "[object Set]")
+{ valueOf: () => 42 }; // 42
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.toString()")}}
- La fonction native {{JSxRef("parseInt()")}}
- La propriété statique {{JSxRef("Symbol.toPrimitive")}}
