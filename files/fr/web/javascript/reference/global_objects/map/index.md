---
title: Map
slug: Web/JavaScript/Reference/Global_Objects/Map
tags:
  - ECMAScript 2015
  - JavaScript
  - Map
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Map
original_slug: Web/JavaScript/Reference/Global_Objects/Map
---
{{JSRef}}

L'objet **`Map`** représente un dictionnaire, autrement dit une carte de clés/valeurs. N'importe quelle valeur valable en JavaScript (que ce soit les objets ou les valeurs de types primitifs) peut être utilisée comme clé ou comme valeur.

L'ordre d'insertion des clés est mémorisé dans l'objet et les boucles sur les `Map` parcourent les clés dans cet ordre.

## Syntaxe

    new Map([iterable])

### Paramètres

- `itérable`
  - : Un tableau ({{jsxref("Array")}}) ou tout autre objet [itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_») dont les éléments sont des paires clé/valeur (par exemple un tableau de la forme `[[1 , "toto"],[2, "truc"]]`). Chaque paire clé/valeur sera ajoutée au nouvel objet `Map`. {{jsxref("null")}} est traité comme {{jsxref("undefined")}}.

## Description

Un objet `Map` permet de retrouver ses éléments dans leur ordre d'insertion. Par exemple, une boucle {{jsxref("Instructions/for...of","for...of")}} renverra un tableau de `[clé, valeur]` pour chaque itération.

On notera qu'un objet `Map` contenant des objets ne sera parcouru que dans l'ordre d'insertion de ces objets. Avec ES2015, l'ordre d'itération est fixé pour les objets. Toutefois, pour les versions antérieures d'ECMAScript, cet ordre n'est pas garanti.

### Égalité des clés

L'égalité des clés est testée avec l'algorithme basé sur [l'égalité de valeurs](/fr/docs/JavaScript/Les_différents_tests_d_Égalité_comment_les_utiliser#.C3.89galit.C3.A9_de_valeurs) :

- {{jsxref("NaN")}} est considéré égal à `NaN` (bien que, pour l'égalité stricte `NaN !== NaN`)
- les autres valeurs sont considérées égales au sens de l'égalité stricte (l'opérateur  `===`).

Dans les versions précédentes des brouillons ECMAScript 2015 (ES6) `-0` et `+0` étaient considérés différents (bien que `-0 === +0`), ceci a été changé dans les versions ultérieures et a été adapté avec Gecko 29 {{geckoRelease("29")}} ({{bug("952870")}}) et une version nocturne de [Chrome](https://code.google.com/p/v8/issues/detail?id=3069).

### Comparaison entre objets et maps

Les {{jsxref("Object", "objets","",1)}} sont similaires aux `Maps`, chacun manipulant des clés associées à des valeurs, récupérant ces valeurs, supprimant des clés... Il n'y avait auparavant pas d'alternatives natives et c'est pourquoi, historiquement, les objets JavaScript ont été utilisés comme des `Maps`. Malgré tout, il y a des différences importantes entre `Objects` et `Maps` qui permettent de distinguer une utilisation des objets `Map` plus efficace :

- Un `Object` possède un prototype, certaines clés par défaut peuvent donc entrer en collision avec les clés qu'on souhaite créer. À partir d'ES5, on peut écrire `map =` {{jsxref("Object.create", "Object.create(null)")}} mais cette formulation est rarement utilisée.
- Les clés d'une `Map` sont ordonnées tandis que les clés d'un objet n'ont pas d'ordre particulier. Ainsi, quand on parcourt une `Map`, on obtient les clés selon leur ordre d'insertion. On notera qu'à partir d'ECMAScript 2015, la spécification pour les objets indique de conserver l'ordre de création pour les clés qui sont des chaînes et des symboles.
- Les clés d'un `Object` sont des {{jsxref("String", "chaînes de caractères","",1)}} ou des symboles (cf. {{jsxref("Symbol")}}), alors que pour une `Map` ça peut être n'importe quelle valeur.
- Il est possible d'obtenir facilement la taille d'une `Map` avec `size`. En revanche, pour un `Object` il faudra compter « manuellement ».
- Un objet `Map` est un [itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_») et on peut donc le parcourir directement. En revanche, itérer sur un `Object` nécessite de récupérer les clés de l'objet pour ensuite les parcourir.
- Un objet `Map` permettra d'obtenir de meilleures performances si on ajoute et supprime des éléments fréquemment.

## Propriétés

- `Map.length`
  - : La valeur de la propriété `length` est 0.
    Attention, pour compter le nombre d'élément contenu dans une `Map`, on utilisera plutôt {{jsxref("Map.prototype.size")}}.
- {{jsxref("Map.@@species", "get Map[@@species]")}}
  - : La fonction constructeur utilisée pour créer des objets dérivées.
- {{jsxref("Map.prototype")}}
  - : Représente le prototype du constructeur `Map`. Permet l'addition de propriétés à tous les objets `Map`.

## Instances de `Map`

Toutes les instances de `Map` héritent de {{jsxref("Map.prototype")}}.

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Map/prototype','Propriétés')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Map/prototype','Méthodes')}}

## Exemples

### Utiliser un objet `Map`

```js
const myMap = new Map();

const objectKey = {},
    functionKey = function () {},
    stringKey = "une chaîne";

// définir les valeurs
myMap.set(stringKey, "valeur associée à 'une chaîne'");
myMap.set(objectKey, "valeur associée à objectKey");
myMap.set(functionKey, "valeur associée à functionKey");

myMap.size; // 3

// récupérer les valeurs
myMap.get(stringKey);     // "valeur associée à 'une chaîne'"
myMap.get(objectKey);      // "valeur associée à objetClé"
myMap.get(functionKey);   // "valeur associée à fonctionClé"

myMap.get("une chaîne");  // "valeur associée à 'une chaîne'"
                          // car chaineClé === 'une chaîne'
myMap.get({});            // indéfini car objetClé !== {}
myMap.get(function() {}); // indéfini car fonctionClé !== function () {}
```

### Utiliser `NaN` comme clé

{{jsxref("NaN")}} peut être utilisé comme une clé. Bien que `NaN` ne soit pas strictement égal à lui-même (`NaN !== NaN` est vérifié), on peut bâtir l'exemple suivant car on ne peut pas distinguer deux valeurs `NaN`&nbsp;:

```js
const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN); // "not a number"

const otherNaN = Number("toto");
myMap.get(otherNaN); // "not a number"
```

### Parcourir des objets `Maps` avec `for..of`

Il est possible de parcourir les objets `Map` grâce à des boucles `for..of` :

```js
const myMap = new Map();
myMap.set(0, "zéro");
myMap.set(1, "un");
for (const [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}
// On aura 2 lignes : la première avec "0 = zéro"
// la seconde avec "1 = un"

for (const key of myMap.keys()) {
  console.log(key);
}
// On aura 2 lignes : la première avec "0"
// et la seconde avec "1"

for (const value of myMap.values()) {
  console.log(valeur);
}
// On aura 2 lignes : la première avec "zéro"
// et la seconde avec "un"

for (const [key, value] of myMap.entries()) {
  console.log(`${key} = ${value}`);
}
// On aura 2 lignes : la première avec "0 = zéro"
// la seconde avec "1 = un"

myMap.forEach(function(value, key) {
  console.log(`${key} = ${value}`);
});
// On aura 2 lignes : la première avec "0 = zéro"
// la seconde avec "1 = un"
```

### Relation avec les objets `Array`

```js
const keyValuePair = [["clé1", "valeur1"], ["clé2", "valeur2"]];

// On utilise le constructeur Map
// pour transformer un tableau de clés/valeurs
// en un objet map
const myMap = new Map(keyValuePair);

myMap.get("clé1"); // renvoie "valeur1"

// On utilise la fonction Array.from pour transformer
// une map en un tableau de clés/valeurs
console.log(Array.from(myMap)); // affichera la même chose que tableauCléValeur

// On peut aussi l'utiliser pour n'extraire que les clés
// ou les valeurs et créer le tableau associé
console.log(Array.from(myMap.keys())); // affichera ["clé1", "clé2"]
```

### Cloner et fusionner des objets `Map`

Il est possible de cloner des `Map` comme on clone des tableaux :

```js
const original = new Map([
  [1, 'un']
]);

const clone = new Map(original);

console.log(clone.get(1)); // un
console.log(original === clone); // false. Utile pour une comparaison superficielle
```

Attention, la donnée contenue dans la `Map` n'est pas clonée.

Il est également possible de fusionner deux `Map` en conservant le critère d'unicité sur les clés :

```js
const first = new Map([
  [1, 'un'],
  [2, 'deux'],
  [3, 'trois'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// On fusionne les deux maps. C'est la "dernière" version
// de la clé qui l'emporte.
// L'opérateur de décomposition nous permet principalement ici
// de convertir une map en un tableau
const fusion = new Map([...first, ...second]);

console.log(fusion.get(1)); // uno
console.log(fusion.get(2)); // dos
console.log(fusion.get(3)); // trois
```

Il est également possible de fusionner des objets `Map` avec des objets `Array` :

```js
const first = new Map([
  [1, 'un'],
  [2, 'deux'],
  [3, 'trois'],
]);

const second = new Map([
  [1, 'uno'],
  [2, 'dos']
]);

// On peut fusionner des Maps avec un tableau
// Là encore c'est le dernier exemplaire de la clé qui l'emporte
const fusion = new Map([...first, ...second, [1, 'eins']]);

console.log(fusion.get(1)); // eins
console.log(fusion.get(2)); // dos
console.log(fusion.get(3)); // trois
```

## Spécifications

| Spécification                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-map-objects', 'Map')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-map-objects', 'Map')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Map")}}

## Voir aussi

- [Le bug sur Map et Set pour Mozilla](https://bugzilla.mozilla.org/show_bug.cgi?id=697479)
- [La proposition ECMAScript Harmony](https://web.archive.org/web/20170105121945/http://wiki.ecmascript.org:80/doku.php?id=harmony:simple_maps_and_sets)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
