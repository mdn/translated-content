---
title: "Object : méthode hasOwnProperty()"
short-title: hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`hasOwnProperty()`** des instances de {{JSxRef("Object")}} retourne un booléen indiquant si cet objet possède la propriété définie en tant que propriété directe (et non héritée).

> [!NOTE]
> {{JSxRef("Object.hasOwn()")}} est recommandé par rapport à `hasOwnProperty()`, dans les navigateurs où il est pris en charge.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.prototype.hasOwnProperty()")}}

```js interactive-example
const object = {};
object.toto = 42;

console.log(object.hasOwnProperty("toto"));
// Résultat attendu : true

console.log(object.hasOwnProperty("toString"));
// Résultat attendu : false

console.log(object.hasOwnProperty("hasOwnProperty"));
// Résultat attendu : false
```

## Syntaxe

```js-nolint
hasOwnProperty(prop)
```

### Paramètres

- `prop`
  - : La chaîne de caractères ({{JSxRef("String")}}) du nom ou le [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) de la propriété à tester.

### Valeur de retour

Retourne `true` si l'objet possède la propriété définie en tant que propriété directe&nbsp;; `false` sinon.

## Description

La méthode **`hasOwnProperty()`** retourne `true` si la propriété définie est une propriété directe de l'objet — même si la valeur est `null` ou `undefined`. La méthode retourne `false` si la propriété est héritée ou si elle n'a pas été déclarée. Contrairement à l'opérateur {{JSxRef("Operators/in", "in")}}, cette méthode ne vérifie pas la propriété définie dans la chaîne de prototypes de l'objet.

La méthode peut être appelée sur _la plupart_ des objets JavaScript, car la plupart des objets descendent de {{JSxRef("Object")}}, et héritent donc de ses méthodes. Par exemple, {{JSxRef("Array")}} est un {{JSxRef("Object")}}, donc vous pouvez utiliser la méthode `hasOwnProperty()` pour vérifier si un indice existe&nbsp;:

```js
const fruits = ["Pomme", "Banane", "Melon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - n'est pas défini
```

La méthode n'est pas disponible dans les objets où elle est réimplémentée, ou sur les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) (car ceux-ci n'héritent pas de `Object.prototype`). Des exemples pour ces cas sont donnés ci-dessous.

## Exemples

### Utiliser `hasOwnProperty()` pour tester l'existence d'une propriété

Le code suivant montre comment déterminer si l'objet `exemple` contient une propriété intitulée `prop`.

```js
const exemple = {};
exemple.hasOwnProperty("prop"); // false

exemple.prop = "existe";
exemple.hasOwnProperty("prop"); // true - 'prop' est définie

exemple.prop = null;
exemple.hasOwnProperty("prop"); // true - la propriété directe existe avec la valeur null

exemple.prop = undefined;
exemple.hasOwnProperty("prop"); // true - la propriété directe existe avec la valeur undefined
```

### Propriétés directes et propriétés héritées

L'exemple suivant illustre la différence entre les propriétés directes et les propriétés héritées à partir de la chaîne de prototypes&nbsp;:

```js
const exemple = {};
exemple.prop = "existe";

// `hasOwnProperty` retourne uniquement true pour les propriétés directes :
exemple.hasOwnProperty("prop"); // true
exemple.hasOwnProperty("toString"); // false
exemple.hasOwnProperty("hasOwnProperty"); // false

// L'opérateur `in` retourne true pour les propriétés directes et héritées :
"prop" in exemple; // true
"toString" in exemple; // true
"hasOwnProperty" in exemple; // true
```

### Parcourir les propriétés d'un objet

L'exemple suivant montre comment parcourir les propriétés énumérables d'un objet sans traiter les propriétés héritées.

```js
const bidule = {
  truc: "stack",
};

for (const nom in bidule) {
  if (bidule.hasOwnProperty(nom)) {
    console.log(`C'est bien la propriété (${nom}). Valeur : ${bidule[nom]}`);
  } else {
    console.log(nom); // toString ou autre chose
  }
}
```

Notez que la boucle {{JSxRef("Statements/for...in", "for...in")}} ne parcourt que les éléments énumérables&nbsp;: l'absence de propriétés non énumérables dans la boucle ne signifie pas que `hasOwnProperty` est elle-même strictement limitée aux éléments énumérables. Vous pouvez parcourir les propriétés non énumérables avec {{JSxRef("Object.getOwnPropertyNames()")}}.

### Utiliser `hasOwnProperty()` en tant que propriété

JavaScript ne protège pas le nom de propriété `hasOwnProperty`&nbsp;; un objet qui
a une propriété avec ce nom peut retourner des résultats incorrects&nbsp;:

```js
const toto = {
  hasOwnProperty: function () {
    return false;
  },
  truc: "Voici les dragons",
};

toto.hasOwnProperty("truc"); // la ré-implementation retourne toujours false
```

La manière recommandée pour contourner ce problème est d'utiliser plutôt {{JSxRef("Object.hasOwn()")}} (dans les navigateurs qui le prennent en charge). D'autres alternatives incluent l'utilisation d'un `hasOwnProperty` _externe_&nbsp;:

```js
const toto = { truc: "Voici les dragons" };

// Utilise la méthode Object.hasOwn() - recommandé
Object.hasOwn(toto, "truc"); // true

// Utilise la propriété hasOwnProperty du prototype Object
Object.prototype.hasOwnProperty.call(toto, "truc"); // true

// Utilise le hasOwnProperty d'un autre objet
// et l'appelle avec 'this' défini sur toto
({}).hasOwnProperty.call(toto, "truc"); // true
```

Notez que dans les deux premiers cas, aucun nouvel objet n'est créé.

### Objets créés avec `Object.create(null)`

Les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) n'héritent pas de `Object.prototype`, rendant `hasOwnProperty()` inaccessible.

```js
const toto = Object.create(null);
toto.prop = "existe";
toto.hasOwnProperty("prop"); // Uncaught TypeError: toto.hasOwnProperty is not a function
```

Les solutions dans ce cas sont les mêmes que pour la section précédente&nbsp;: utilisez de préférence {{JSxRef("Object.hasOwn()")}}, sinon utilisez le `hasOwnProperty()` d'un objet externe.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Object.hasOwn()")}}
- [Énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- La méthode statique {{JSxRef("Object.getOwnPropertyNames()")}}
- L'instruction {{JSxRef("Statements/for...in", "for...in")}}
- L'opérateur {{JSxRef("Operators/in", "in")}}
- [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
