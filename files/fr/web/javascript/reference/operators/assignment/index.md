---
title: Affectation (=)
slug: Web/JavaScript/Reference/Operators/Assignment
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

L'opérateur **d'affectation (`=`)** est utilisé pour assigner une valeur à une variable ou à une propriété. L'expression d'affectation elle-même a une valeur, qui est la valeur assignée. Cela permet de chaîner plusieurs affectations afin d'assigner une seule valeur à plusieurs variables.

{{InteractiveExample("Démonstration JavaScript&nbsp;: l'opérateur Affectation (=)")}}

```js interactive-example
let x = 2;
const y = 3;

console.log(x);
// Résultat attendu : 2

console.log((x = y + 1)); // 3 + 1
// Résultat attendu : 4

console.log((x = x * y)); // 4 * 3
// Résultat attendu : 12
```

## Syntaxe

```js-nolint
x = y
```

### Paramètres

- `x`
  - : Une cible d'affectation valide, y compris un [identifiant](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#identifiants) ou un [accès à une propriété](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors). Cela peut également être un [modèle de déstructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `y`
  - : Une expression définissant la valeur à assigner à `x`.

### Valeur de retour

La valeur de `y`.

### Exceptions

- {{JSxRef("ReferenceError")}}
  - : Levée en mode strict si l'on assigne à un identifiant qui n'est pas déclaré dans la portée.
- {{JSxRef("TypeError")}}
  - : Levée en mode strict si l'on assigne à une [propriété qui n'est pas modifiable](/fr/docs/Web/JavaScript/Reference/Strict_mode#échec_de_laffectation_aux_propriétés_de_lobjet).

## Description

L'opérateur d'affectation est complètement différent du signe égal (`=`) utilisé comme séparateur syntaxique dans d'autres contextes, qui incluent&nbsp;:

- Les opérateurs d'initialisation et de déclarations [`var`](/fr/docs/Web/JavaScript/Reference/Statements/var), [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) et [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const)
- Valeurs par défaut de la [destructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring#valeur_par_défaut)
- [Paramètres par défaut](/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- Les opérateurs d'initialisation des [champs de classe](/fr/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

Tous ces endroits acceptent une expression d'affectation sur le côté droit du `=`, donc si vous avez plusieurs signes égaux enchaînés&nbsp;:

```js-nolint
const x = y = 5;
```

C'est l'équivalent de&nbsp;:

```js
const x = (y = 5);
```

Ce qui signifie que `y` doit être une variable préexistante, et que `x` est une nouvelle variable `const`. `y` se voit assigner la valeur `5`, et `x` est initialisée avec la valeur de l'expression `y = 5`, qui est également `5`. Si `y` n'est pas une variable préexistante, une variable globale `y` est implicitement créée en [mode non strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), ou une {{JSxRef("ReferenceError")}} est levée en mode strict. Pour déclarer deux variables dans la même déclaration, utilisez&nbsp;:

```js
const x = 5,
  y = 5;
```

## Exemples

### Affectation simple et variables chaînées

```js
let x = 5;
let y = 10;
let z = 25;

x = y; // x vaut 10
x = y = z; // x, y et z valent toutes 25
```

### Valeur des expressions d'affectation

L'expression d'affectation elle-même est évaluée à la valeur du côté droit, vous pouvez donc enregistrer la valeur et l'affecter à une variable en même temps.

```js-nolint
let x;
console.log(x); // undefined
console.log(x = 2); // 2
console.log(x); // 2
```

### Affectation à un identifiant non qualifié

L'objet global se trouve en haut de la chaîne de portée. Lorsqu'on tente de résoudre un nom en une valeur, la chaîne de portée est parcourue. Cela signifie que les propriétés de l'objet global sont facilement visibles depuis chaque portée, sans avoir à qualifier les noms avec `globalThis.` ou `window.` ou `global.`.

Comme l'objet global possède une propriété `String` (`Object.hasOwn(globalThis, "String")`), vous pouvez utiliser le code suivant&nbsp;:

```js
function toto() {
  String("s"); // La fonction `String` est globalement disponible
}
```

Ainsi, l'objet global est finalement recherché pour les identifiants non qualifiés. Vous n'avez pas à taper `globalThis.String`&nbsp;; vous pouvez simplement taper `String` non qualifié. Pour rendre cette fonctionnalité plus cohérente sur le plan conceptuel, l'affectation à des identifiants non qualifiés suppose que vous souhaitez créer une propriété portant ce nom sur l'objet global (avec `globalThis.` omis), s'il n'existe pas de variable du même nom déclarée dans la chaîne de portée.

```js
toto = "t"; // En mode non strict, suppose que vous voulez créer une propriété nommée `toto` sur l'objet global
Object.hasOwn(globalThis, "toto"); // true
```

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode#affecter_à_une_variable_non_déclarée), l'affectation à un identifiant non qualifié en mode strict entraîne une `ReferenceError`, afin d'éviter la création accidentelle de propriétés sur l'objet global.

Notez que l'implication de ce qui précède est que, contrairement à une idée reçue, JavaScript n'a pas de variables implicites ou non déclarées. Il confond simplement l'objet global avec la portée globale et permet d'omettre le qualificateur de l'objet global lors de la création de propriétés.

### Affectation avec déstructuration

Le côté gauche peut également être un modèle d'affectation. Cela permet d'affecter plusieurs variables en même temps.

```js
const resultat = /(a+)(b+)(c+)/.exec("aaabcc");
let a = "",
  b = "",
  c = "";
[, a, b, c] = resultat;
console.log(a, b, c); // "aaa" "b" "cc"
```

Pour plus d'informations, voir [Déstructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les opérateurs d'affectation dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#les_opérateurs_daffectation)
- [Déstructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring)
