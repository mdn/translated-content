---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_function
original_slug: Web/JavaScript/Reference/Erreurs/Not_a_function
---
{{jsSidebar("Errors")}}

## Message

```
TypeError: Object doesn't support property or method {x} (Edge)
TypeError: "x" is not a function
```

## Type d'erreur

{{jsxref("TypeError")}}.

## Quel est le problème ?

Une valeur a été utilisée pour un appel de fonction alors que cette valeur n'est pas une fonction. Autrement dit, un fragment de code attendait une fonction mais a reçu des valeurs d'un autre type.

Il est possible qu'il y ait une coquille dans le nom de la fonction. Peut être que l'objet sur lequel la méthode est invoquée ne possède pas cette fonction (par exemple, les objets `Array` possèdent une fonction `map()` mais d'autres objets ne l'ont pas).

Il existe de nombreuses fonctions natives qui fonctionnent à l'aide d'une fonction (_callback_) passée en argument :

- Pour les objets {{jsxref("Array")}} ou {{jsxref("TypedArray")}}, voici les fonctions qui utilisent une fonction en argument :

  - {{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}},  {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}

- Pour les objets {{jsxref("Map")}} et {{jsxref("Set")}}, voici les méthodes concernées :

  - {{jsxref("Map.prototype.forEach()")}} and {{jsxref("Set.prototype.forEach()")}}

## Exemples

### Une coquille dans le nom de la fonction

Dans ce cas, qui arrive bien trop souvent, il y a une faute d'orthographe dans le nom de la fonction utilisée :

```js example-bad
var x = document.getElementByID("toto");
// TypeError: document.getElementByID is not a function
```

Le nom de la fonction est (dans cet exemple) `getElementById` (attention à la casse pour les noms en JavaScript) :

```js example-good
var x = document.getElementById("toto");
```

### Appeler une fonction sur le mauvais objet

Certaines méthodes ne fonctionnent que pour certains types d'objet et utilisent une fonction en argument. Ainsi, dans cet exemple, on utilise {{jsxref("Array.prototype.map()")}} qui ne fonctionne que sur les objets {{jsxref("Array")}}.

```js example-bad
var obj = { a: 13, b: 37, c: 42 };

obj.map(function(num) {
  return num * 2;
});

// TypeError: obj.map is not a function
```

Il faudra utiliser un tableau à la place :

```js example-good
var nombres = [1, 4, 9];

nombres.map(function(num) {
  return num * 2;
});

// Array [ 2, 8, 18 ]
```

### Utiliser le même nom pour une méthode et une propriété

Lorsqu'on écrit une classe, on peut malheureusement utiliser le même nom pour une propriété et une méthode. Lorsqu'on appellera la fonction, celle-ci aura été remplacée par la propriété et cela déclenchera une erreur :

```js example-bad
var Chien = function () {
 this.age = 11;
 this.couleur = "noir";
 this.nom = "Ralph";
 return this;
}

Chien.prototype.nom = function(nom) {
 this.nom = nom;
 return this;
}


var monNouveauChien = new Chien();
monNouveauChien.nom("Cassidy"); // Uncaught TypeError: monNouveauChien.nom is not a function
```

Pour résoudre le problème, on utilisera deux noms distincts pour la propriété et la méthode :

```js example-good
var Chien = function () {
 this.age = 11;
 this.couleur = "noir";
 this.nomChien = "Ralph";
 return this;
}

Chien.prototype.nom = function(nom) {
 this.nomChien = nom;
 return this;
}


var monNouveauChien = new Chien();
monNouveauChien.nom("Cassidy"); // Chien { age: 11, couleur: "noir", nomChien: "Cassidy" }
```

### Utiliser des parenthèses pour la multiplication

En notation mathématique, on peut écrire 2(3+5) pour indiquer qu'on souhaite multiplier 2 par 3 + 5. Toutefois, une telle écriture n'est pas valide en JavaScript car il faut préciser l'opérateur de multiplication :

```js example-bad
var seize = 2(3 + 5);
console.log('2 x (3 + 5) vaut ' + String(seize));
// Uncaught TypeError: 2 is not a function
```

Pour corriger, il suffit d'ajouter l'opérateur `*` :

```js example-good
var seize = 2 * (3 + 5);
console.log('2 x (3 + 5) is ' + String(seize));
//2 x (3 + 5) is 16
```

### Importer un module exporté correctement

Assurez-vous d'importer le module correctement. Si par exemple, on dispose d'une bibliothèque `helpers.js` avec le code suivant :

```js
let helpers = function () { };
helpers.log = function(msg) {
  console.log(msg);
};

export default helpers;
```

Pour l'importer côté application, on écrira :

```js
import helpers from './helpers'
```

## Voir aussi

- [Les fonctions](/fr/docs/Web/JavaScript/Reference/Fonctions)
