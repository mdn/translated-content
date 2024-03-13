---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
---

{{JSRef}}{{SeeCompatTable}}

La méthode statique **`Object.hasOwn()`** renvoie `true` si l'objet indiqué possède la propriété indiquée comme propriété _propre_. Si la propriété est héritée ou qu'elle n'existe pas, la méthode renverra `false`.

> **Note :** `Object.hasOwn()` est conçu comme une méthode de remplacement pour [`Object.hasOwnProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty).

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

## Syntaxe

```js
Object.hasOwn(instance, prop);
```

### Paramètres

- _instance_
  - : L'objet JavaScript pour lequel on souhaite tester la présence d'une propriété.
- _prop_
  - : Une chaîne de caractères ([`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)) indiquant le nom de la propriété recherchée ou un symbole ([`Symbol`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) désignant la propriété.

### Valeur de retour

`true` si l'objet indiqué possède, directement, la propriété indiquée, `false` sinon.

## Description

La méthode **`Object.hasOwn()`** renvoie `true` si la propriété indiquée est une propriété directe de l'objet (et même si celle-ci vaut `null` ou `undefined`). La méthode renvoie `false` si la propriété est héritée ou si elle n'a pas été déclarée. À la différence de l'opérateur [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in), cette méthode ne consulte pas la chaîne de prototypes de l'objet pour détecter la propriété.

`Object.hasOwn()` pourra être recommandée en lieu et place de [`Object.hasOwnProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) car elle fonctionne sur les objets créés avec `Object.create(null)` et pour les objets qui ont surchargé la méthode héritée `hasOwnProperty()`. Bien qu'il soit possible de contourner ces deux problèmes en invoquant `Object.prototype.hasOwnProperty()` sur un objet externe, `Object.hasOwn()` semble plus intuitif.

## Exemples

### Utiliser Object.hasOwn() pour tester l'existence d'une propriété

Le code suivant illustre comment déterminer si l'objet `exemple` contient une propriété intitulée `prop`.

```js
let exemple = {};
Object.hasOwn(exemple, "prop"); // false : 'prop' n'a pas été définie

exemple.prop = "existe";
Object.hasOwn(exemple, "prop"); // true : 'prop' a été définie

exemple.prop = null;
Object.hasOwn(exemple, "prop"); // true : la propriété existe malgré sa valeur null

exemple.prop = undefined;
Object.hasOwn(exemple, "prop"); // true : la propriété existe malgré sa valeur undefined
```

### Propriétés propres et propriétés héritées

Dans l'exemple suivant, on distingue les propriétés propres/directes et celles qui sont héritées via la chaîne de prototypes&nbsp;:

```js
let exemple = {};
exemple.prop = "existe";

// `Objet.hasOwn()` renverra true seulement pour les propriétés propres
Object.hasOwn(exemple, "prop"); // renvoie true
Object.hasOwn(exemple, "toString"); // renvoie false
Object.hasOwn(exemple, "hasOwnProperty"); // renvoie false

// L'opérateur `in` renverra true pour les propriétés propres et héritées
"prop" in exemple; // renvoie true
"toString" in exemple; // renvoie true
"hasOwnProperty" in exemple; // renvoie true
```

### Parcourir les propriétés d'un objet=

Pour parcourir les propriétés énumérables d'un objet, on privilégiera cette forme&nbsp;:

```js
let exemple = { toto: true, truc: true };
for (let nom of Object.keys(exemple)) {
  // …
}
```

S'il est nécessaire d'utiliser `for..in`, on pourra utiliser `Object.hasOwn()` afin de filtrer les propriétés héritées&nbsp;:

```js
let exemple = { toto: true, truc: true };
for (let nom in exemple) {
  if (Object.hasOwn(exemple, nom)) {
    // …
  }
}
```

### Vérifier l'existence d'un indice dans un tableau

Les éléments d'un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) sont définis comme propriétés propres. Ainsi, `Object.hasOwn()` pourra être utilisé pour vérifier si un indice donné existe&nbsp;:

```js
let fruits = ["Pomme", "Banane", "Melon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false, non défini
```

### Cas problématiques pour hasOwnProperty()

Cette section illustre l'immunité de `Object.hasOwn()` concernant des problèmes qui se posent pour `Object.prototype.hasOwnProperty()`. Tout d'abord, on peut utiliser cette première avec des objets qui ont réimplémenté `hasOwnProperty()`&nbsp;:

```js
let toto = {
  hasOwnProperty: function () {
    return false;
  },
  truc: "Ga bu zo meu",
};

if (Object.hasOwn(toto, "truc")) {
  console.log(toto.truc); //true - la surcharge de hasOwnProperty() n'a pas d'impact
}
```

On peut également l'utiliser pour tester des objets créés avec [`Object.create(null)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create) qui n'héritent pas de `Object.prototype` et pour qui `hasOwnProperty()` est donc inaccessible.

```js
let toto = Object.create(null);
toto.prop = "existe";
if (Object.hasOwn(toto, "prop")) {
  console.log(toto.prop); // true.
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Caractère énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- [Héritage et chaîne de prototypes dans le guide JavaScript](/fr/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [`Object.hasOwnProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [`Object.getOwnPropertyNames()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
- [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in)
- [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in)
- Une prothèse d'émulation pour `Object.hasOwn()` disponible avec [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
