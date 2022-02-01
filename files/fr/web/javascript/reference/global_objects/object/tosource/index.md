---
title: Object.prototype.toSource()
slug: Web/JavaScript/Reference/Global_Objects/Object/toSource
tags:
  - JavaScript
  - Méthode
  - Non-standard
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/toSource
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/toSource
---
{{JSRef}} {{non-standard_header}}

La méthode **`toSource()`** renvoie une chaîne de caractères représentant le code source d'un objet.

## Syntaxe

    Object.toSource();
    obj.toSource();

### Valeur de retour

Une chaîne de caractères qui représente le code source de l'objet.

## Description

La méthode `toSource()` renvoie les valeurs suivantes :

- Pour l'objet natif {{jsxref("Object")}}, `toSource()` renvoie la chaîne suivante, qui indique que le code source n'est pas disponible :

  ```js
    function Object() {
        [native code]
    }
    ```

- Pour les instances de {{jsxref("Object")}}, `toSource()` renvoie une chaîne représentant le code source.

La méthode `toSource()` peut être utilisée à des fins de débogage pour analyser le contenu d'un objet.

### Surcharger la méthode `toSource()`

La méthode `toSource()` peut être surchargée pour les différents objets. Par exemple :

```js
function Personne(nom) {
  this.nom = nom;
}

Personne.prototype.toSource = function Personne_toSource() {
  return 'new Personne(' + uneval(this.nom) + ')';
};

console.log(new Personne('Jean').toSource()); // ---> new Personne("Jean")
```

### Les méthodes `toSource()` natives

Chaque constructeur natif JavaScript possède sa propre méthode `toSource()`. Ces objets sont :

- {{jsxref("Array.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Array")}}.
- {{jsxref("Boolean.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Boolean")}}.
- {{jsxref("Date.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Date")}}.
- {{jsxref("Function.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Function")}}.
- {{jsxref("Number.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Number")}}.
- {{jsxref("RegExp.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("RegExp")}}.
- {{jsxref("String.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("String")}}.
- {{jsxref("Symbol.prototype.toSource()")}} {{non-standard_inline}} — pour {{jsxref("Symbol")}}.
- `Math.toSource()` — Renvoie "Math".

### Limites : les objets cycliques

Dans le cas d'objets qui font référence à eux-mêmes (une liste cyclique ou un arbre), `toSource()` ne représentera pas la référence (Firefox 24). Par exemple :

```js
var obj1 = {};
var obj2 = { a: obj1 };
obj1.b = obj2;

console.log('Cyclique : ' + (obj1.b.a == obj1));

var objSource = obj1.toSource(); // renvoie "({b:{a:{}}})"

obj1 = eval(objSource);

console.log('Cyclique : ' + (obj1.b.a == obj1));
```

Si on utilise une structure cyclique et qu'on a besoin de `toSource()`, il faudra surcharger la méthode `toSource()` pour avoir le comportement souhaité.

## Exemples

### Utiliser `toSource()`

Dans le code qui suit, on définit un objet `Chien` et on crée `monChien` qui est une instance de type `Chien` :

```js
function Chien(nom, race, couleur, sexe) {
  this.nom = nom;
  this.race = race;
  this.couleur = couleur;
  this.sexe = sexe;
}

monChien = new Chien('Gabby', 'Labrador', 'chocolat', 'femelle');
```

Si on appelle la méthode `toSource()` sur `monChien`, on obtiendra le littéral permettant de définir l'objet :

```js
monChien.toSource();
// returns ({nom:"Gabby", race:"Labrador", couleur:"chocolat", sexe:"femelle"})
```

## Spécifications

Cette méthode ne fait partie d'aucun standard, implémentée avec JavaScript 1.3.

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.toSource")}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
