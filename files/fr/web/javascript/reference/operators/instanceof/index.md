---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
tags:
  - JavaScript
  - Operator
  - Prototype
  - Reference
  - instanceof
translation_of: Web/JavaScript/Reference/Operators/instanceof
original_slug: Web/JavaScript/Reference/Opérateurs/instanceof
---
{{jsSidebar("Operators")}}

L'**opérateur `instanceof`** permet de tester si un objet possède, dans sa chaîne de prototype, la propriété `prototype` d'un certain constructeur.

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## Syntaxe

```js
objet instanceof constructeur
```

### Paramètres

- `objet`
  - : L'objet qu'on souhaite analyser.
- `constructeur`
  - : La fonction dont on souhaite vérifier la présence dans la chaîne de prototypes.

## Description

L'opérateur `instanceof` teste la présence de `constructeur.prototype` dans la chaîne de prototypes d'`objet`.

```js
function C(){} // Définition du constructeur
function D(){} // Définition d'un autre constructeur

var o = new C();

// true, car : Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, car D.prototype n'existe pas dans la chaîne de prototype de o
o instanceof D;

o instanceof Object; // true, car:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, car C.prototype n'existe plus dans la chaîne de prototype de o
o instanceof C;

D.prototype = new C(); // Utilisation de l'héritage
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true car C.prototype fait partie de la chaîne de o3
```

À noter que la valeur retournée par `instanceof` peut être différente suite à un changement de la propriété `prototype` du constructeur, notamment via la méthode `Object.setPrototypeOf()`. On peut aussi utiliser la pseudo-propriété `__proto__` qui n'était pas standard avant ECMAScript 2015.

### `instanceof` dans d'autres contextes (frames ou fenêtres)

Différents niveaux d'intégrations ont différents environnements. Cela signifie que les valeurs retournées sont différentes (objet globaux différents, constructeurs différents, etc.). Cela peut engendrer des résultats inattendus. Par exemple, `[] instanceof window.frames[0].Array` renverra `false`, car `Array !== window.frames[0].Array` et que les tableaux héritent de leur constructeur.

Cela peut être contre-intuitif au début, mais lorsqu'il est nécessaire de travailler avec plusieurs frames ou fenêtres, et que des objets sont transférés via des fonctions, cela sera un obstacle valide et important. Par contre, il est tout à fait possible d'utiliser `Array.isArray(myObj)` pour vérifier de manière sécurisée qu'un tableau est effectivement un tableau.

Ainsi, pour vérifier qu'un [nœud](/fr/docs/Web/API/Node) est bien un objet de type [SVGElement](/fr/docs/Web/API/SVGElement) dans un autre contexte, on pourra utiliser `monNœud instanceof monNœud.documentMaitre.vue.SVGElement`.

## Exemples

### Démonstration que `String` et `Date` sont de type `Object` et cas aux limites des littéraux

Le code suivant utilise `instanceof` pour démontrer que les objets `String` et `Date` sont aussi de type `Object` (ils dérivent d'`Object`).

Cependant, les objets créés à partir de littéraux objets sont une exception : en effet, bien que leur prototype ne soit pas défini, `instanceof Object` renvoie `true`.

```js
var chaîneSimple = "Une chaîne simple";
var maChaîne  = new String();
var newChaîne = new String("Chaîne créée avec un constructeur");
var maDate    = new Date();
var monObjet  = {};
var monNonObjet = Object.create(null);

chaîneSimple instanceof String; //false car le prototype vaut undefined
maChaîne instanceof String; // true
newChaîne instanceof String; // true
maChaîne instanceof Object; // true

monObjet instanceof Object;  // true, bien que le protoype soit undefined
({}) instanceof Object;      // true, comme pour le cas précédent
monNonObjet instance Object; // false

maChaîne instanceof Date;    // false

maDate instanceof Date;      // true
maDate instanceof Object;    // true
maDate instanceof String;    // false
```

### Démonstration que `mavoiture` est de type `Voiture` et de type `Object`

Le code suivant créé un objet de type `Voiture` et une instance de cet objet, `mavoiture`. L'opérateur `instanceof` montre que l'objet `mavoiture` est de type `Voiture` et de type `Object`.

```js
function Voiture(fabricant, modele, annee) {
  this.fabricant = fabricant;
  this.modele = modele;
  this.annee = annee;
}
var mavoiture = new Voiture("Citroën", "C3", 2006);
var a = mavoiture instanceof Voiture; // retourne true
var b = mavoiture instanceof Object;  // retourne true
```

### Attention à la précédence des opérateurs

Pour tester qu'un objet n'est pas une instance d'un constructeur donné, on pourra faire le test `!(monObj instanceof Constructor)`. Toutefois, attention à ne pas écrire `!monObj instanceof Constructor` car `!monObj` serait traité en priorité et on testerait donc `false instanceof Constructor` qui sera toujours faux.

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES6', '#sec-relational-operators', 'Opérateurs relationnels')}} | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ES5.1', '#sec-11.8.6', 'Opérateur instanceof')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES3', '#sec-11.8.6', 'Opérateur instanceof')}}                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.4. |

## Compatibilité des navigateurs

{{Compat("javascript.operators.instanceof")}}

## Voir aussi

- {{jsxref("Opérateurs/L_opérateur_typeof","typeof")}}
- {{jsxref("Symbol.hasInstance")}}
