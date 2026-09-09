---
title: "Object : méthode propertyIsEnumerable()"
short-title: propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`propertyIsEnumerable()`** des instances de {{JSxRef("Object")}} retourne un booléen indiquant si la propriété définie est une propriété [énumérable propre](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) de cet objet.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.prototype.propertyIsEnumerable()", "taller")}}

```js interactive-example
const object = {};
const array = [];
object.toto = 42;
array[0] = 42;

console.log(object.propertyIsEnumerable("toto"));
// Résultat attendu : true

console.log(array.propertyIsEnumerable(0));
// Résultat attendu : true

console.log(array.propertyIsEnumerable("length"));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
propertyIsEnumerable(prop)
```

### Paramètres

- `prop`
  - : Le nom de la propriété à tester. Peut être une chaîne de caractères ou un symbole ({{JSxRef("Symbol")}}).

### Valeur de retour

Un booléen indiquant si la propriété définie est énumérable et appartient à l'objet lui-même.

## Description

Tous les objets qui héritent de `Object.prototype` (c'est-à-dire tous sauf les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)) héritent de la méthode `propertyIsEnumerable()`. Cette méthode détermine si la propriété définie, chaîne de caractères ou symbole, est une propriété propre énumérable de l'objet. Si l'objet ne possède pas la propriété définie, cette méthode retourne `false`.

Cette méthode est équivalente à [`Object.getOwnPropertyDescriptor(obj, prop)?.enumerable ?? false`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor).

## Exemples

### Utiliser la méthode `propertyIsEnumerable()`

Dans l'exemple qui suit, on illustre comment utiliser `propertyIsEnumerable()` sur les objets et tableaux&nbsp;:

```js
const o = {};
const a = [];
o.prop = "est énumérable";
a[0] = "est énumérable";

o.propertyIsEnumerable("prop"); // renvoie true
a.propertyIsEnumerable(0); // renvoie true
```

### Objets définis par l'utilisateur et objets natifs

La plupart des propriétés natives ne sont pas énumérables par défaut, tandis que les propriétés des objets créés par l'utilisateur·ice sont souvent énumérables, sauf indication explicite contraire.

```js
const a = ["est énumérable"];

a.propertyIsEnumerable(0); // true
a.propertyIsEnumerable("length"); // false

Math.propertyIsEnumerable("random"); // false
globalThis.propertyIsEnumerable("Math"); // false
```

### Propriétés propres et héritées

Seules les propriétés propres énumérables font que `propertyIsEnumerable()` renvoie `true`, bien que toutes les propriétés énumérables, y compris celles héritées, soient visitées par la boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in).

```js
const o1 = {
  enumerableInherited: "est énumérable",
};
Object.defineProperty(o1, "nonEnumerableInherited", {
  value: "n'est pas énumérable",
  enumerable: false,
});
const o2 = {
  // o1 est le prototype de o2
  __proto__: o1,
  enumerableOwn: "est énumérable",
};
Object.defineProperty(o2, "nonEnumerableOwn", {
  value: "n'est pas énumérable",
  enumerable: false,
});

o2.propertyIsEnumerable("enumerableInherited"); // false
o2.propertyIsEnumerable("nonEnumerableInherited"); // false
o2.propertyIsEnumerable("enumerableOwn"); // true
o2.propertyIsEnumerable("nonEnumerableOwn"); // false
```

### Tester les propriétés symboles

Les propriétés {{JSxRef("Symbol")}} sont également prises en charge par `propertyIsEnumerable()`. Notez que la plupart des méthodes d'énumération ne visitent que les propriétés de type chaîne de caractères&nbsp;; l'énumérabilité des propriétés symboles n'est utile que lors de l'utilisation de {{JSxRef("Object.assign()")}} ou de la [syntaxe de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Pour plus d'informations, voir [Caractère énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

```js
const sym = Symbol("enumerable");
const sym2 = Symbol("non-enumerable");
const o = {
  [sym]: "est énumérable",
};
Object.defineProperty(o, sym2, {
  value: "n'est pas énumérable",
  enumerable: false,
});

o.propertyIsEnumerable(sym); // true
o.propertyIsEnumerable(sym2); // false
```

### Utiliser avec des objets à prototype nul

Comme les objets à prototype `null` n'héritent pas de `Object.prototype`, ils n'héritent pas de la méthode `propertyIsEnumerable()`. Vous devez appeler `Object.prototype.propertyIsEnumerable` avec l'objet comme `this` à la place.

```js
const o = {
  __proto__: null,
  enumerableOwn: "est énumérable",
};

o.propertyIsEnumerable("enumerableOwn"); // TypeError: o.propertyIsEnumerable n'est pas une fonction
Object.prototype.propertyIsEnumerable.call(o, "enumerableOwn"); // true
```

Alternativement, vous pouvez utiliser {{JSxRef("Object.getOwnPropertyDescriptor()")}} à la place, ce qui permet également de distinguer les propriétés inexistantes des propriétés réellement non énumérables.

```js
const o = {
  __proto__: null,
  enumerableOwn: "est énumérable",
};

Object.getOwnPropertyDescriptor(o, "enumerableOwn")?.enumerable; // true
Object.getOwnPropertyDescriptor(o, "nonExistent")?.enumerable; // undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{JSxRef("Statements/for...in", "for...in")}}
- {{JSxRef("Object.keys()")}}
- {{JSxRef("Object.defineProperty()")}}
