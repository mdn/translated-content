---
title: Virgules finales (trailing commas)
slug: Web/JavaScript/Reference/Trailing_commas
l10n:
  sourceCommit: 2cd89ba0e74308b8f9bcd5937b76fd1188006358
---

{{JsSidebar("More")}}

Les **virgules finales** (<i lang="en">trailing commas</i> en anglais) s'avèrent utiles lorsqu'on souhaite ajouter de nouveaux éléments, paramètres ou de nouvelles propriétés à du code JavaScript. Si on souhaite ajouter une propriété en fin de course, on peut simplement ajouter une ligne sans avoir à modifier la précédente si celle-ci utilise une virgule finale. Cela permet d'avoir des vues de différences (<i lang="en">diffs</i>) plus claires et de simplifier l'édition de code.

Les virgules finales peuvent être utilisées dans les littéraux de tableau depuis le début. Elles sont désormais utilisables dans la liste des paramètres d'une fonction, les imports nommés, les exports nommés, etc.

[JSON](/fr/docs/Glossary/JSON), en revanche, ne permet pas d'utiliser des virgules finales.

## Description

JavaScript permet d'utiliser des virgules finales à tout endroit où une liste de valeurs séparées par des virgules est acceptée et où plus de valeurs pourraient être attendues après le dernier élément. Cela inclut&nbsp;:

- [Les littéraux de tableau](#tableaux)
- [Les littéraux objet](#objets)
- [Les définitions de paramètres](#définition_des_paramètres)
- [Les appels de fonction](#appels_de_fonction)
- [Les imports nommés](#imports_nommés)
- [Les exports nommés](#exports_nommés)
- [Les imports dynamiques](#virgules_finales_pour_limport_dynamique)
- [Les virgules finales et la décomposition](#les_virgules_finales_et_la_décomposition)

Pour tous ces cas, la virgule finale est tout à fait optionnelle et ne modifie en rien la sémantique du programme.

La virgule finale sert notamment pour ajouter, retirer ou réordonner les éléments d'une liste écrite sur plusieurs lignes, car elle réduit le nombre de lignes à modifier, ce qui facilite l'édition et la revue de différence de code.

```diff
  [
    "toto",
+   "bidule",
    "truc",
-   "bidule",
  ]
```

## Exemples

### Les virgules finales dans les littéraux

#### Tableaux

JavaScript ignore les virgules finales dans les tableaux&nbsp;:

```js-nolint
const arr = [
  1,
  2,
  3,
];

arr; // [1, 2, 3]
arr.length; // 3
```

Si plusieurs virgules finales sont utilisées, cela crée un vide dans le tableau. Un tableau avec des vides est parfois qualifié de [_parsemé_](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_parsemés) (ou <i lang="en">sparse</i> en anglais). Lorsqu'on parcourt un tableau avec les méthodes [`Array.prototype.forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) ou [`Array.prototype.map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map), par exemple, ces vides sont ignorés. De façon générale, les tableaux parsemés possèdent d'autres inconvénients, et mieux vaudra éviter d'avoir plusieurs virgules finales à la suite.

```js
const arr = [1, 2, 3, , ,];
arr.length; // 5
```

#### Objets

On peut également utiliser les virgules finales dans les littéraux objets&nbsp;:

```js
const objet = {
  toto: "truc",
  bidule: "ergo-L",
  age: 42,
};
```

### Les virgules finales dans les fonctions

Les virgules finales peuvent être utilisées dans la liste des paramètres d'une fonction.

#### Définition des paramètres

Pour chacune des deux paires de définitions qui suivent, les deux définitions sont autorisées et équivalentes entre elles. Les virgules finales n'ont pas d'impact sur la propriété [`length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) de la fonction ni sur l'objet [arguments](/fr/docs/Web/JavaScript/Reference/Functions/arguments).

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

Les virgules finales peuvent également être utilisées lors [des définitions de méthodes](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions) dans les objets et les classes&nbsp;:

```js-nolint
class C {
  un(a,) {}
  deux(a, b,) {}
}

const obj = {
  un(a,) {},
  deux(a, b,) {},
};
```

#### Appels de fonction

Pour chacune des deux paires d'appels qui suivent, les deux appels sont équivalents&nbsp;:

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

#### Virgules finales interdites

Les définitions de paramètres ou les appels de fonctions qui ne contiennent qu'une seule virgule lèveront une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError). Par ailleurs, on ne peut pas utiliser de virgule finale avec [les paramètres du reste](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters)&nbsp;:

```js-nolint example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

### Les virgules finales et la décomposition

On peut aussi utiliser une virgule finale dans l'opérande gauche lorsqu'on utilise [l'affectation par décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring)&nbsp;:

```js-nolint
// Décomposition d'un tableau avec
// une virgule finale
[a, b,] = [1, 2];

// Décomposition d'un objet avec une
// virgule finale
const o = {
  p: 42,
  q: true,
};
const { p, q, } = o;
```

Là encore, si on utilise un élément du reste, une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) sera levée&nbsp;:

```js-nolint example-bad
const [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

## Les virgules finales en JSON

Le format JSON est basé sur un sous-ensemble restreint de la syntaxe JavaScript, **les virgules finales sont interdites en JSON**.

Les deux lignes suivantes lèveront une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)&nbsp;:

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"toto" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

Pour analyser le JSON correctement, on évitera les virgules finales&nbsp;:

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"toto" : 1 }');
```

### Virgules finales pour les imports et exports nommés

Les virgules finales sont valides dans [les imports nommés](/fr/docs/Web/JavaScript/Reference/Statements/import#import_nommé) et [les exports nommés](/fr/docs/Web/JavaScript/Reference/Statements/export).

#### Imports nommés

```js-nolint
import {
  A,
  B,
  C,
} from "D";

import { X, Y, Z, } from "W";

import { A as B, C as D, E as F, } from "Z";
```

#### Exports nommés

```js-nolint
export {
  A,
  B,
  C,
};

export { A, B, C, };

export { A as B, C as D, E as F, };
```

### Virgules finales pour l'import dynamique

Les virgules finales sont uniquement autorisées pour [les imports dynamiques](/fr/docs/Web/JavaScript/Reference/Operators/import) si le moteur d'exécution implémente le second paramètre `options`.

```js-nolint
import("D",);
import(
  "D",
  { with: { type: "json" } },
);
```

### Quantificateur pour les expressions rationnelles

> [!NOTE]
> Dans [un quantificateur](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers), une virgule finale change la sémantique et passe de «&nbsp;exactement `n`&nbsp;» à «&nbsp;au moins `n`&nbsp;».

```js
/x{2}/; // Exactement 2 occurrences de "x" ; équivalent à /xx/
/x{2,}/; // Au moins 2 occurrences de "x" ; équivalent à /xx+/
/x{2,4}/; // 2 à 4 occurrences de "x" ; équivalent à /xxx?x?/
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le guide sur la grammaire et les types JavaScript](/fr/docs/Web/JavaScript/Guide/Grammar_and_types)
