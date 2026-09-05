---
title: "Object : méthode statique hasOwn()"
short-title: hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.hasOwn()`** retourne `true` si l'objet défini possède la propriété indiquée comme propriété _propre_. Si la propriété est héritée ou n'existe pas, la méthode retourne `false`.

> [!NOTE]
> `Object.hasOwn()` est conçu comme un remplacement de {{JSxRef("Object.prototype.hasOwnProperty()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.hasOwn()")}}

```js interactive-example
const object = {
  prop: "existe",
};

console.log(Object.hasOwn(object, "prop"));
// Résultat attendu : true

console.log(Object.hasOwn(object, "toString"));
// Résultat attendu : false

console.log(Object.hasOwn(object, "undeclaredPropertyValue"));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
Object.hasOwn(obj, prop)
```

### Paramètres

- `obj`
  - : L'instance de l'objet JavaScript à tester.
- `prop`
  - : La chaîne de caractères ({{JSxRef("String")}}) du nom ou le [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) de la propriété à tester.

### Valeur de retour

`true` si l'objet indiqué possède, directement, la propriété indiquée, `false` sinon.

## Description

La méthode **`Object.hasOwn()`** retourne `true` si la propriété indiquée est une propriété directe de l'objet (et même si celle-ci vaut `null` ou `undefined`). La méthode retourne `false` si la propriété est héritée ou si elle n'a pas été déclarée. À la différence de l'opérateur {{JSxRef("Operators/in", "in")}}, cette méthode ne consulte pas la chaîne de prototypes de l'objet pour détecter la propriété.

Elle est recommandée par rapport à {{JSxRef("Object.prototype.hasOwnProperty()")}} parce qu'elle fonctionne pour les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) et avec les objets qui ont redéfini la méthode héritée `hasOwnProperty()`. Bien qu'il soit possible de contourner ces problèmes en accédant à `Object.prototype.hasOwnProperty()` sur un autre objet (par exemple `Object.prototype.hasOwnProperty.call(obj, prop)`), `Object.hasOwn()` est plus intuitif et plus concis.

## Exemples

### Utiliser `Object.hasOwn()` pour tester l'existence d'une propriété

Le code suivant illustre comment déterminer si l'objet `exemple` contient une propriété intitulée `prop`.

```js
const exemple = {};
Object.hasOwn(exemple, "prop"); // false : 'prop' n'a pas été définie

exemple.prop = "existe";
Object.hasOwn(exemple, "prop"); // true : 'prop' a été définie

exemple.prop = null;
Object.hasOwn(exemple, "prop"); // true : la propriété existe malgré sa valeur null

exemple.prop = undefined;
Object.hasOwn(exemple, "prop"); // true : la propriété existe malgré sa valeur undefined
```

### Propriétés propres et propriétés héritées

Dans l'exemple suivant, on distingue les propriétés propres/directes et celles qui sont héritées avec la chaîne de prototypes&nbsp;:

```js
const exemple = {};
exemple.prop = "existe";

// `Objet.hasOwn()` retourne true seulement pour les propriétés propres
Object.hasOwn(exemple, "prop"); // retourne true
Object.hasOwn(exemple, "toString"); // retourne false
Object.hasOwn(exemple, "hasOwnProperty"); // retourne false

// L'opérateur `in` retourne true pour les propriétés propres et héritées
"prop" in exemple; // retourne true
"toString" in exemple; // retourne true
"hasOwnProperty" in exemple; // retourne true
```

### Parcourir les propriétés d'un objet=

Pour parcourir les propriétés énumérables d'un objet, on privilégie cette forme&nbsp;:

```js
const exemple = { toto: true, truc: true };
for (const nom of Object.keys(exemple)) {
  // …
}
```

S'il est nécessaire d'utiliser `for..in`, on peut utiliser `Object.hasOwn()` afin de filtrer les propriétés héritées&nbsp;:

```js
const exemple = { toto: true, truc: true };
for (const nom in exemple) {
  if (Object.hasOwn(exemple, nom)) {
    // …
  }
}
```

### Vérifier l'existence d'un indice dans un tableau

Les éléments d'un tableau ({{JSxRef("Array")}}) sont définis comme propriétés propres. Ainsi, `Object.hasOwn()` peut être utilisé pour vérifier si un indice donné existe&nbsp;:

```js
const fruits = ["Pomme", "Banane", "Melon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false, non défini
```

### Cas problématiques pour `hasOwnProperty()`

Cette section montre que `Object.hasOwn()` n'est pas affecté par les problèmes qui touchent `hasOwnProperty()`. Tout d'abord, il peut être utilisé avec des objets qui ont réimplémenté `hasOwnProperty()`. Dans l'exemple ci-dessous, la méthode `hasOwnProperty()` réimplémentée retourne faux pour _chaque_ propriété, mais le comportement de `Object.hasOwn()` n'en est pas affecté&nbsp;:

```js
const toto = {
  hasOwnProperty: function () {
    return false;
  },
  truc: "La princesse est dans un autre château",
};

console.log(toto.hasOwnProperty("truc")); // false

console.log(Object.hasOwn(toto, "truc")); // true
```

Elle peut également être utilisée avec les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null). Ceux-ci n'héritent pas de `Object.prototype`, et la méthode `hasOwnProperty()` n'est donc pas accessible

```js
const toto = Object.create(null);
toto.prop = "existe";

console.log(toto.hasOwnProperty("prop"));
// Uncaught TypeError: toto.hasOwnProperty is not a function

console.log(Object.hasOwn(toto, "prop")); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.hasOwn` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [La prothèse d'émulation es-shims de `Object.hasOwn` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.hasown)
- La méthode {{JSxRef("Object.prototype.hasOwnProperty()")}}
- [Énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- La méthode statique {{JSxRef("Object.getOwnPropertyNames()")}}
- L'instruction {{JSxRef("Statements/for...in", "for...in")}}
- L'opérateur {{JSxRef("Operators/in", "in")}}
- [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
