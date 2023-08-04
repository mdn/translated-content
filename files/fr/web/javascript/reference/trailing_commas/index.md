---
title: Virgules finales (trailing commas)
slug: Web/JavaScript/Reference/Trailing_commas
---

{{JsSidebar("More")}}

Les **virgules finales** (_trailing commas_ en anglais) s'avèrent utiles lorsqu'on souhaite ajouter de nouveaux éléments, paramètres ou de nouvelles propriétés à du code JavaScript. Si on souhaite ajouter une propriété en fin de course, on peut simplement ajouter une ligne sans avoir à modifier la précédente si celle-ci utilise une virgule finale. Cela permet d'avoir des vues de différences (_diffs_) plus claires et de simplifier l'édition de code.

Les virgules finales peuvent être utilisées dans les littéraux de tableau depuis le début. Elles sont été ajoutées dans les littéraux objets à partir d'ECMAScript 5 et ECMAScript 2017 permet de les utiliser dans la liste des paramètres d'une fonction.

{{Glossary("JSON")}}, en revanche, ne permet pas d'utiliser des virgules finales.

## Les virgules finales dans les littéraux

### Tableaux

JavaScript ignore les virgules finales dans les tableaux :

```js
var arr = [1, 2, 3];

arr; // [1, 2, 3]
arr.length; // 3
```

Si plusieurs virgules finales sont utilisées, cela crée un vide dans le tableau. Un tableau avec des vides est parfois qualifié de _parsemé_ (ou _sparse_ en anglais). Lorsqu'on parcourt un tableau avec les méthodes {{jsxref("Array.prototype.forEach()")}} ou {{jsxref("Array.prototype.map()")}}, par exemple, ces vides sont ignorés.

```js
var arr = [1, 2, 3, , ,];
arr.length; // 5
```

### Objets

À partir d'ECMAScript 5, on peut également utiliser les virgules finales dans les littéraux objets :

```js
var objet = {
  toto: "truc",
  bidule: "azerty",
  age: 42,
};
```

## Les virgules finales dans les fonctions

ECMAScript 2017 permet d'utiliser les virgules finales dans la liste des paramètres d'une fonction.

### Définitions des paramètres

Pour chacune des deux paires de définitions qui suivent, les deux définitions sont autorisées et équivalentes entre elles. Les virgules finales n'ont pas d'impact sur la propriété `length` de la fonction ni sur l'objet [arguments](/fr/docs/Web/JavaScript/Reference/Fonctions/arguments).

```js
function f(p) {}
function f(p) {}

(p) => {};
(p) => {};
```

Les virgules finales peuvent également être utilisées lors [des définitions de méthodes](/fr/docs/Web/JavaScript/Reference/Fonctions/Définition_de_méthode) dans les objets et les classes :

```js
class C {
  un(a,) {},
  deux(a, b,) {},
}

var obj = {
  un(a,) {},
  deux(a, b,) {},
};
```

### Appels de fonctions

Pour chacune des deux paires d'appels qui suivent, les deux appels sont équivalents entre eux :

```js
f(p);
f(p);

Math.max(10, 20);
Math.max(10, 20);
```

### Virgules finales non-autorisées

Les définitions de paramètres ou les appels de fonctions qui ne contiennent qu'une seule virgule lèveront une exception {{Jsxref("SyntaxError")}}. Par ailleurs, on ne peut pas utiliser de virgule finale avec [les paramètres du reste](/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste) :

```js example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

## Les virgules finales et la décomposition

On peut aussi utiliser une virgule finale dans l'opérande gauche lorsqu'on utilise [l'affectation par décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition) :

```js
// Décomposition d'un tableau avec
// une virgule finale
[a, b] = [1, 2];

// Décomposition d'un objet avec une
// virgule finale
var o = {
  p: 42,
  q: true,
};
var { p, q } = o;
```

Là encore, si on utilise un élément du reste, une exception {{jsxref("SyntaxError")}} sera levée :

```js example-bad
var [a, ...b] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

## Les virgules finales en JSON

L'utilisation des virgules finales dans les objets a été introduite avec ECMAScript 5. Toutefois, le format JSON est basé sur la syntaxe JavaScript antérieure à ES5 **et les virgules finales sont donc interdites en JSON**.

Les deux lignes suivantes lèveront une exception {{jsxref("SyntaxError")}} :

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Pour analyser le JSON correctement, on évitera les virgules finales :

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La proposition initiale pour ECMAScript, déposée par Jeff Morrison, afin d'utiliser [les virgules finales dans les fonctions](https://github.com/tc39/proposal-trailing-function-commas).
