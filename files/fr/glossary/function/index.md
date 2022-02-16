---
title: Fonction
slug: Glossary/Function
tags:
  - Encodage
  - Fonctions
  - Glossaire
  - IIFE
  - Introduction
  - JavaScript
translation_of: Glossary/Function
original_slug: Glossaire/Fonction
---
Une **fonction** est une portion de code qui peut être appelée par d'autres codes ou par elle-même ou par une {{Glossary("Variable","variable")}} qui se réfère à la fonction. Lorsqu'une fonction est appelée, des {{Glossary("Argument","arguments")}} lui sont généralement donnés en entrée. La fonction peut également retourner une valeur de sortie. En {{glossary("JavaScript")}}, une fonction est aussi un {{glossary("Object","objet")}}.

Un nom de fonction est un {{Glossary("identifier","identifiant")}} déclaré dans le cadre d'une déclaration de fonction ou de l'expression d'une fonction. Le fait que le nom de fonction soit déclaré ou exprimé impacte la {{Glossary("Scope","portée")}} du nom de fonction.

### Différents types de fonctions

Une **fonction anonyme** est une fonction sans nom de fonction :

```js
function () {};
// ou en utilisant la notation de flèche de ECMAScript 2015
() => {};
```

Une **fonction nommée** est une fonction avec un nom de fonction :

```js
function foo() {};
// ou en utilisant la notation de flèche de ECMAScript 2015
const foo = () => {};
```

Une **fonction imbriquée (ou fonction interne)** est une fonction à l'intérieur d'une autre fonction (_`square`_ dans l'exemple suivant). Une **fonction externe** est une fonction qui contient une fonction (_`addSquares`_ dans l'exemple suivant) :

```js
function addSquares(a,b) {
   function square(x) {
      return x * x;
   }
   return square(a) + square(b);
};
//En utilisant la notation de flèche de ECMAScript 2015
const addSquares = (a,b) => {
   const square = x => x*x;
   return square(a) + square(b);
};
```

Une **fonction récursive** est une fonction qui fait appel à elle-même. Voir {{Glossary("Recursion","récursion")}}.

```js
function loop(x) {
   if (x >= 10)
      return;
   loop(x + 1);
};
//En utilisant la notation de flèche de ECMAScript 2015
const loop = x => {
   if (x >= 10)
      return;
   loop(x + 1);
};
```

Une **expression de fonction invoquée immédiatement** (IIFE) est une fonction appelée directement après le chargement de la fonction dans le compilateur du navigateur. La façon d'identifier une IIFE est de localiser les parenthèses gauche et droite supplémentaires à la fin de la déclaration de la fonction.

```js
// Erreur (https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
/*
​function foo() {
    console.log('Hello Foo');
}();
*/

(function foo() {
    console.log("Hello Foo");
}());

(function food() {
    console.log("Hello Food");
})();
```

Si vous souhaitez en savoir plus sur les IIFE, consultez la page suivante sur Wikipedia : [Expression de la fonction immédiatement invoquée](https://fr.wikipedia.org/wiki/JavaScript#Expressions_de_fonctions_imm%C3%A9diatement_invoqu%C3%A9es)

## En apprendre plus

### Informations Techniques

- [Les Fonctions](/fr/docs/Web/JavaScript/Guide/Fonctions) en JavaScript sur MDN
- [Fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)
