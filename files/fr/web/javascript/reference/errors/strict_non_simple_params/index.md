---
title: 'SyntaxError: "use strict" not allowed in function with "x" parameter'
slug: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
tags:
  - Erreurs
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params
original_slug: Web/JavaScript/Reference/Erreurs/Strict_Non_Simple_Params
---
{{jsSidebar("Errors")}}

## Message

```
Edge :
Cannot apply strict mode on functions with non-simple parameter list

Firefox :
SyntaxError: "use strict" not allowed in function with default parameter
SyntaxError: "use strict" not allowed in function with rest parameter
SyntaxError: "use strict" not allowed in function with destructuring parameter

Chrome :
SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list
```

## Type d'erreur

{{jsxref("SyntaxError")}}.

## Quel est le problème ?

Une directive `"use strict"` apparaît au début d'une fonction qui possède l'un des paramètres suivants :

- {{jsxref("Fonctions/Valeurs_par_défaut_des_arguments", "Des paramètres par défaut", "", 1)}}
- {{jsxref("Fonctions/paramètres_du_reste", "Des paramètres du reste", "", 1)}}
- {{jsxref("Opérateurs/Affecter_par_décomposition", "Des paramètres décomposés", "", 1)}}

Selon la spécification ECMAScript, une directive `"use strict"` ne peut pas être utilisée pour de telles fonctions.

## Exemples

### Déclaration de fonction

Dans l'exemple qui suit, la fonction `somme` possède deux paramètres par défaut `a=1` et `b=2`.

```js example-bad
function somme(a = 1, b = 2) {
  // SyntaxError: "use strict" not allowed in function with default parameter
  "use strict";
  return a + b;
}
```

Si on veut que la fonction soit en mode strict et que le script entier ou que la fonction englobante peut être en mode strict, il suffira de déplacer l'instruction `"use strict"` en dehors du corps de la méthode.

```js example-good
"use strict";
function somme(a = 1, b = 2) {
  return a + b;
}
```

### Expression de fonction

Il est également possible d'utiliser les expressions de fonction pour résoudre ce problème :

```js example-bad
var somme = function somme([a, b]) {
  // SyntaxError: "use strict" not allowed in function with destructuring parameter
  "use strict";
  return a + b;
};
```

On peut convertir le fragment de code précédent avec l'expression suivante :

```js example-good
var somme = (function() {
  "use strict";
  return function somme([a, b]) {
    return a + b;
  };
})();
```

### Fonction fléchée

Si on a une fonction fléchée qui doit accéder à la variable `this` on peut utiliser une fonction fléchée comme fonction englobante :

```js example-bad
var callback = (...args) => {
  // SyntaxError: "use strict" not allowed in function with rest parameter
  "use strict";
  return this.run(args);
};
```

This can be converted into following expression.

```js example-good
var callback = (() => {
  "use strict";
  return (...args) => {
    return this.run(args);
  };
})();
```

## Voir aussi

- {{jsxref("Strict_mode", "Le mode strict", "", 1)}}
- {{jsxref("Instructions/function", "L'instruction function", "", 1)}}
- {{jsxref("Op%C3%A9rateurs/L_op%C3%A9rateur_function", "Les expressions de fonction", "", 1)}}
- {{jsxref("Fonctions/Valeurs_par_d%C3%A9faut_des_arguments", "Les paramètres par défaut", "", 1)}}
- {{jsxref("Fonctions/paramètres_du_reste", "Les paramètres du reste", "", 1)}}
- {{jsxref("Opérateurs/Affecter_par_décomposition", "Les paramètres décomposés", "", 1)}}
