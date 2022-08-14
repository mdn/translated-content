---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
tags:
  - Function
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/call
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/call
---
{{JSRef}}

La méthode **`call()`** réalise un appel à une fonction avec une valeur `this` donnée et des arguments fournis individuellement.

> **Note :** Bien que la syntaxe de cette fonction ressemble à celle de {{jsxref("Function.apply", "apply()")}}, la différence fondamentale réside dans le fait que `call()` accepte **une liste d'arguments**, tandis que la méthode `apply()` accepte **un unique tableau d'arguments**.

{{EmbedInteractiveExample("pages/js/function-call.html")}}

## Syntaxe

```js
fun.call(thisArg[, arg1[, arg2[, ...]]])
```

### Paramètres

- `thisArg`
  - : La valeur `this` fournie pour l'appel de la fonction _`fun`_. La valeur peut être différente de celle normalement perçue par la méthode : si la méthode est une fonction utilisée dans un code en {{jsxref("Fonctions/Strict_mode", "mode non-strict", "", 1)}}, {{jsxref("null")}} and {{jsxref("undefined")}} seront remplacés par l'objet global et les valeurs primitives seront encapsulées en objets.
- `arg1, arg2, ...`
  - : Les arguments pour la fonction.

### Valeur de retour

Le résultat de l'appel de la fonction invoquée avec la valeur `this` indiquée et les arguments fournis.

## Description

La méthode `call()` permet d'appeler une fonction rattachée à un objet donné sur un autre objet.

Il est possible d'affecter un objet `this` différent lors de l'appel à une fonction existante. En général, `this` fait référence à l'objet courant, celui sur lequel est appelée la méthode. Avec `call`, on peut écrire une méthode une seule fois et ensuite en hériter dans un autre objet, sans avoir à réécrire cette méthode pour ce nouvel objet.

## Exemples

### Utiliser `call()` pour chaîner le constructeur d'un objet.

Il est possible d'utiliser `call` pour chaîner le constructeur d'un objet, de façon similaire à Java. Dans l'exemple suivant, le constructeur de l'objet `Product` est défini avec deux paramètres, `name` et `price`. Deux autres fonctions, `Food` et `Toy` invoquent `Product` en passant `this,` `name` et `price`. `Product` initialise les propriétés `name` et `price`, tandis que les fonctions spécialisées définissent la propriété `category`.

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

### Utiliser `call()` pour invoquer une fonction anonyme

Dans cet exemple (purement inventé), on crée une fonction anonyme et on utilise `call` pour l'invoquer sur chaque objet d'un tableau. Le principal but de cette fonction anonyme est d'ajouter une fonction `print` sur chaque élément qui permet d'afficher l'index de l'objet. Le passage de l'objet en tant que valeur `this` n'était pas nécessaire, mais il permet d'expliquer le sujet.

```js
var animaux = [
  {espece: 'Lion', nom: 'Roi'},
  {espece: 'Éléphant', nom: 'Dumbo'}
];

for (var i = 0; i < animaux.length; i++) {
  (function (i) {
    this.print = function () {
      console.log('#' + i  + ' ' + this.espece + ' : ' + this.nom);
    }
    this.print();
  }).call(animaux[i], i);
}
```

### Utiliser `call()` pour appeler une fonction avec un objet pour `this`

Dans l'exemple qui suit, on utilise la méthode `call()` sur la fonction `saluer()` afin de l'appliquer à l'objet `personne1` :

```js
function saluer() {
  var reponse = [this.nom, "est un", this.role, "."].join(" ");
  console.log(reponse);
}

var personne1 = {
  nom: "Sénèque",
  role: "philosophe"
};

saluer.call(personne1); // Sénèque est un philosophe.
```

### Utiliser `call()` pour appeler une fonction sans indiquer de premier argument

Dans l'exemple qui suit, on appelle la fonction `afficher()` sans lui passer d'argument. C'est donc l'objet global qui est utilisé comme contexte :

```js
var prenom = 'Archibald';

function afficher() {
  console.log('prenom vaut ' + this.prenom);
}

afficher.call(); // prenom est Archibald
```

> **Note :** La valeur de `this` sera {{jsxref("undefined")}} en mode strict.
>
> ```js
> 'use strict';
>
> var prenom = 'Archibald';
>
> function afficher() {
>   console.log('prenom vaut ' + this.prenom);
> }
>
> afficher.call(); // Cannot read the property prenom' of undefined
> ```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.3.4.4', 'Function.prototype.call')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-function.prototype.call', 'Function.prototype.call')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-function.prototype.call', 'Function.prototype.call')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Function.call")}}

## Voir aussi

- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.apply()")}}
- [Introduction à JavaScript orienté objet](/fr/docs/Web/JavaScript/Introduction_à_JavaScript_orienté_objet)
