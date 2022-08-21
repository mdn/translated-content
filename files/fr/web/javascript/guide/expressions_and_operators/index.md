---
title: Expressions et opérateurs
slug: Web/JavaScript/Guide/Expressions_and_Operators
l10n:
  sourceCommit: 1c355a0ba137e025b8b9039cdddd5225b4c72d9b
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

Dans ce chapitre, nous décrirons les expressions et opérateurs en JavaScript, qui permettent notamment l'affectation, la comparaison, les opérations arithmétiques, binaires, logiques, la manipulation de chaîne de caractères, etc.

Une _expression_ peut être vue comme une unité de code valide qui est résolue en une valeur. Il existe deux types d'expressions, celles qui ont des effets de bord (par exemple l'affectation d'une valeur) et celles qui sont purement évaluées.

L'expression `x = 7` fait partie de la première catégorie. Elle utilise _l'opérateur_ `=` afin d'affecter la valeur setp à la variable `x`. L'expression elle-même est évaluée avec la valeur `7`.

L'expression `3 + 4` fait partie de la deuxième catégorie. Elle utilise l'opérateur `+` afin d'ajouter `3` et `4` pour produire une valeur&nbsp;: `7`. Toutefois, si cette valeur n'est pas utilisée au sein d'une structure plus importante (par exemple avec [une déclaration de variable](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#déclarations) comme `const z = 3 + 4`), elle sera immédiatement écartée (il s'agit généralement dans ce cas d'une erreur de programmation, car l'évaluation ne produira aucun effet).

Comme les exemples précédents ont permis de montrer, toutes les expressions complexes sont formées avec des _opérateurs_, tels que `=` ou `+`. Dans cette section, nous verrons les opérateurs suivants&nbsp;:

- [Opérateurs d'affectation](#opérateurs_daffectation)
- [Opérateurs de comparaison](#opérateurs_de_comparaison)
- [Opérateurs arithmétiques](#opérateurs_arithmétiques)
- [Opérateurs binaires](#opérateurs_binaires)
- [Opérateurs logiques](#opérateurs_logiques)
- [Opérateurs pour les grands entiers](#opérateurs_pour_les_grands_entiers)
- [Opérateurs pour les chaînes de caractères](#opérateurs_pour_les_chaînes_de_caractères)
- [Opérateur conditionnel (ternaire)](#opérateur_conditionnel_ternaire)
- [Opérateur virgule](#opérateur_virgule)
- [Opérateurs unaires](#opérateurs_unaires)
- [Opérateurs relationnels](#opérateurs_relationnels)

Ces opérateurs assemblent des opérandes formés par des opérateurs de précédence plus haute ou par une des [expressions de base](#expressions_de_base). Une liste complète et détaillée des opérateurs et expressions est également disponible dans [la référence](/fr/docs/Web/JavaScript/Reference/Operators).

La _précédence_ des opérateurs détermine l'ordre selon lequel ils sont appliqués pour l'évaluation d'une expression. Par exemple&nbsp;:

```js
const x = 1 + 2 * 3;
const y = 2 * 3 + 1;
```

Bien que `*` et `+` soit placés dans un ordre différent, ces deux expressions produisent la valeur `7`, car `*` a une précédence qui l'emporte sur celle de `+`. L'expression formée par les deux opérandes entourant `*` est donc toujours évaluée en premier ici. Vous pouvez passer outre la précédence des opérateurs en utilisant les parenthèses (ce qui crée [une expression groupée](#opérateur_de_groupement), qui est une expression de base). Pour un tableau complet détaillant la précédence des opérateurs et les éventuels pièges, voir [la page de référence sur la précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#tableau).

JavaScript possède des opérateurs _binaires_ et _unaires_, ainsi qu'un opérateur ternaire spécial (l'opérateur conditionnel).
Un opérateur binaire a besoin de deux opérandes, un placé avant l'opérateur (à sa gauche) et un placé après l'opérateur (à sa droite)&nbsp;:

```
opérande1 opérateur opérande2
```

`3 + 4` et `x * y` sont deux exemples d'expression qui utilisent un opérateur binaire. Sous cette forme, on parle d'opérateur binaire _infixe_, car l'opérateur est placé entre les deux opérandes. Tous les opérateurs binaires de JavaScript sont infixes.

Un opérateur unaire fonctionne avec un seul opérande, situé avant ou après l'opérateur&nbsp;:

```
opérateur opérande
opérande opérateur
```

`x++` et `++x` sont deux exemples d'expression avec un opérateur unaire. La forme `opérateur opérande` fonctionne pour les opérateurs unaires _postfixes_, tandis que la forme `opérande opérateur` fonctionne pour les opérateurs unaire _préfixes_. `++` et `--` sont les deux seuls opérateurs postfixes de JavaScript. Tous les autres opérateurs unaires, comme `!` ou `typeof`, sont préfixes.

## Opérateurs d'affectation

Un opérateur d'affectation affecte une valeur à son opérande gauche selon la valeur de son opérande droit. L'opérateur d'affectation simple est le signe égal (`=`), qui affecte la valeur de son opérande droit à son opérande gauche. Autrement dit, `x = f()` est une expression d'affecation qui affecte la valeur de `f()` à `x`.

Il existe également des opérateurs d'affectation composites qui sont des raccourcis pour les opérations listées dans le tableau qui suit&nbsp;

| Nom                                                                                                                          | Opérateur          | Signification      |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| [Affectation](/fr/docs/Web/JavaScript/Reference/Operators/Assignment)                                                        | `x = f()`          | `x = f()`          |
| [Affectation après addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`         | `x = x + f()`      |
| [Affectation après soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                         | `x -= f()`         | `x = x - f()`      |
| [Affectation après multiplication](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`         | `x = x * f()`      |
| [Affectation après division](/fr/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`         | `x = x / f()`      |
| [Affectation du reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                     | `x %= f()`         | `x = x % f()`      |
| [Affectation après exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                    | `x **= f()`        | `x = x ** f()`     |
| [Affectation après décalage à gauche](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`        | `x = x << f()`     |
| [Affectation après décalage à droite](/fr/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                    | `x >>= f()`        | `x = x >> f()`     |
| [Affectation après décalage à droite non signé](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`       | `x = x >>> f()`    |
| [Affectation après ET binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                           | `x &= f()`         | `x = x & f()`      |
| [Affectation après OU exclusif binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                  | `x ^= f()`         | `x = x ^ f()`      |
| [Affectation après OU binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                            | `x \|= f()`        | `x = x \| f()`     |
| [Affectation après ET logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                           | `x &&= f()`        | `x && (x = f())`   |
| [Affectation après OU logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                            | `x \|\|= f()`      | `x \|\| (x = f())` |
| [Affectation après coalescence des nuls](/fr/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)             | `x ??= f()`        | `x ?? (x = f())`   |

### Affectation aux propriétés

Si une expression est évaluée en [un objet](/fr/docs/Web/JavaScript/Guide/Working_with_Objects), le côté gauche d'une expression d'affectation pourra être utilisé pour des affectations sur les propriétés de cette expression. Par exemple&nbsp;:

```js
const obj = {};

obj.x = 3;
console.log(obj.x); // Affiche 3.
console.log(obj); // Affiche { x: 3 }.

const key = "y";
obj[key] = 5;
console.log(obj[key]); // Affiche 5.
console.log(obj); // Affiche { x: 3, y: 5 }.
```

Pour plus d'informations sur les objets, voir [Utiliser les objets](/fr/docs/Web/JavaScript/Guide/Working_with_Objects).

Si une expression n'est pas évaluée en un objet, les affectations aux propriétés de cette expression ne fonctionneront pas&nbsp;:

```js
const val = 0;
val.x = 3;

console.log(val.x); // Affiche undefined.
console.log(val); // Affiche 0.
```

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode#convertir_les_fautes_en_erreurs), le fragment de code qui précède déclenchera une exception, car on ne peut pas affecter de propriétés à des valeurs primitives.

C'est une erreur que d'affecter des valeurs à des propriétés non-modifiables ou à des propriétés d'une expression sans propriété (`null` ou `undefined`).

### Décomposition

Pour les affectations plus complexes, [l'affectation par décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) permet de construire une expression JavaScript pour extraire des données de tableaux ou d'objets avec une syntaxe qui reflète les littéraux utilisés pour la construction de tableaux ou d'objets.

```js
const toto = ['un', 'deux', 'trois'];

// sans décomposition
const un    = toto[0];
const deux  = toto[1];
const trois = toto[2];

// avec décomposition
const [un, deux, trois] = toto;
```

### Évaluation et imbrication

En général, les affectations sont utilisées pour une déclaration de variable (c'est-à-dire avec les instructions [`const`][], [`let`][], ou [`var`][]) ou comme instructions indépendantes.

```js
// Déclare une variable x et l'initialise avec le résutlat de f().
// Le résultat de l'expression d'affectation "x = f()" est écarté.
let x = f();

x = g(); // Réaffecte le résultat de g() à la variable x.
```

[`const`]: /fr/docs/Web/JavaScript/Reference/Statements/const
[`let`]: /fr/docs/Web/JavaScript/Reference/Statements/let
[`var`]: /fr/docs/Web/JavaScript/Reference/Statements/var

Toutefois, à l'instar des autres expressions, les expressions d'affectation comme `x = f()` ont comme résultat une valeur. Bien que cette valeur ne soit généralement pas utilisée, elle peut être utilisée dans une autre expression.

L'enchaînement d'affectations ou l'imbrication d'affectation dans d'autres expressions peut produire des résultats étranges. C'est pour cette raison que certains guides stylistiques JavaScript [déconseillent l'enchaînement ou l'imbrication d'affectations][discourage assign chain]). Toutefois, vous pourrez en voir dans certains codes et il est donc important de comprendre comment ils fonctionnent.

[discourage assign chain]: https://github.com/airbnb/javascript/blob/master/README.md#variables--no-chain-assignment

En enchaînant ou en imbriquant les expressions d'affectation, le résultat de chaque expression peut être affecté à une autre variable. On peut s'en servir pour journaliser, la placer dans un tableau, un appel de fonction, etc.

```js
let x;
const y = (x = f()); // Une notation équivalente serait : const y = x = f();
console.log(y); // Affiche la valeur de retour de l'affectation x = f().

console.log(x = f()); // Affiche la valeur de retour directement.

// Une expression d'affectation peut être imbriquée à n'importe quel
// endroit où les expressions sont autorisées, que ce soit comme
// élément d'un littéral de tableau ou comme argument dans un appel
// de fonction
console.log([ 0, x = f(), 0 ]);
console.log(f(0, x = f(), 0));
```

The evaluation result matches the expression to the right of the `=` sign in the
"Meaning" column of the table above. That means that `x = f()` evaluates into
whatever `f()`'s result is, `x += f()` evaluates into the resulting sum `x + f()`,
`x **= f()` evaluates into the resulting power `x ** y`, and so on.

In the case of logical assignments, `x &&= f()`,
`x ||= f()`, and `x ??= f()`, the return value is that of the
logical operation without the assignment, so `x && f()`,
`x || f()`, and `x ?? f()`, respectively.

When chaining these expressions without parentheses or other grouping operators
like array literals, the assignment expressions are **grouped right to left**
(they are [right-associative][]), but they are **evaluated left to right**.

[right-associative]: https://en.wikipedia.org/wiki/Operator_associativity

Note that, for all assignment operators other than `=` itself,
the resulting values are always based on the operands' values _before_
the operation.

For example, assume that the following functions `f` and `g`
and the variables `x` and `y` have been declared:

```js
function f () {
  console.log('F!');
  return 2;
}
function g () {
  console.log('G!');
  return 3;
}
let x, y;
```

Prenons ces trois exemples&nbsp;:

```js
y = x = f()
y = [ f(), x = g() ]
x[f()] = g()
```

#### Evaluation example 1

`y = x = f()` is equivalent to `y = (x = f())`,
because the assignment operator `=` is [right-associative][].
However, it evaluates from left to right:

1. The assignment expression `y = x = f()` starts to evaluate.
    1. The `y` on this assignment's left-hand side evaluates
       into a reference to the variable named `y`.
    2. The assignment expression `x = f()` starts to evaluate.
        1. The `x` on this assignment's left-hand side evaluates
           into a reference to the variable named `x`.
        2. The function call `f()` prints "F!" to the console and
           then evaluates to the number `2`.
        3. That `2` result from `f()` is assigned to `x`.
    3. The assignment expression `x = f()` has now finished evaluating;
       its result is the new value of `x`, which is `2`.
    4. That `2` result in turn is also assigned to `y`.
2. The assignment expression `y = x = f()` has now finished evaluating;
   its result is the new value of `y` – which happens to be `2`.
   `x` and `y` are assigned to `2`,
   and the console has printed "F!".

#### Evaluation example 2

`y = [ f(), x = g() ]` also evaluates from left to right:

1. The assignment expression `y = [ f(), x = g() ]` starts to evaluate.
    1. The `y` on this assignment's left-hand evaluates
       into a reference to the variable named `y`.
    2. The inner array literal `[ f(), x = g() ]` starts to evaluate.
        1. The function call `f()` prints "F!" to the console and
           then evaluates to the number `2`.
        2. The assignment expression `x = g()` starts to evaluate.
            1. The `x` on this assignment's left-hand side evaluates
               into a reference to the variable named `x`.
            2. The function call `g()` prints "G!" to the console and
               then evaluates to the number `3`.
            3. That `3` result from `g()` is assigned to `x`.
        3. The assignment expression `x = g()` has now finished evaluating;
           its result is the new value of `x`, which is `3`.
           That `3` result becomes the next element
           in the inner array literal (after the `2` from the `f()`).
    3. The inner array literal `[ f(), x = g() ]`
       has now finished evaluating;
       its result is an array with two values: `[ 2, 3 ]`.
    4. That `[ 2, 3 ]` array is now assigned to `y`.
2. The assignment expression `y = [ f(), x = g() ]` has
   now finished evaluating;
   its result is the new value of `y` – which happens to be `[ 2, 3 ]`.
   `x` is now assigned to `3`,
   `y` is now assigned to `[ 2, 3 ]`,
   and the console has printed "F!" then "G!".

#### Evaluation example 3

`x[f()] = g()` also evaluates from left to right.
(This example assumes that `x` is already assigned to some object.
For more information about objects, read [Working with Objects](/fr/docs/Web/JavaScript/Guide/Working_with_Objects).)

1. The assignment expression `x[f()] = g()` starts to evaluate.
    1. The `x[f()]` property access on this assignment's left-hand
       starts to evaluate.
        1. The `x` in this property access evaluates
           into a reference to the variable named `x`.
        2. Then the function call `f()` prints "F!" to the console and
           then evaluates to the number `2`.
    2. The `x[f()]` property access on this assignment
       has now finished evaluating;
       its result is a variable property reference: `x[2]`.
    3. Then the function call `g()` prints "G!" to the console and
       then evaluates to the number `3`.
    4. That `3` is now assigned to `x[2]`.
       (This step will succeed only if `x` is assigned to an [object](/fr/docs/Web/JavaScript/Guide/Working_with_Objects).)
2. The assignment expression `x[f()] = g()` has now finished evaluating;
   its result is the new value of `x[2]` – which happens to be `3`.
   `x[2]` is now assigned to `3`,
   and the console has printed "F!" then "G!".

### Avoid assignment chains

Chaining assignments or nesting assignments in other expressions can
result in surprising behavior. For this reason,
[chaining assignments in the same statement is discouraged][discourage assign chain]).

In particular, putting a variable chain in a [`const`][], [`let`][], or [`var`][] statement often does _not_ work. Only the outermost/leftmost variable would get declared; other variables within the assignment chain are _not_ declared by the `const`/`let`/`var` statement.
For example:

```js
const z = y = x = f();
```

This statement seemingly declares the variables `x`, `y`, and `z`.
However, it only actually declares the variable `z`.
`y` and `x` are either invalid references to nonexistent variables (in [strict mode](/fr/docs/Web/JavaScript/Reference/Strict_mode)) or, worse, would implicitly create [global variables](/fr/docs/Glossary/Global_variable) for `x` and `y` in [sloppy mode](/fr/docs/Glossary/Sloppy_mode).

## Comparison operators

A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
The operands can be numerical, string, logical, or [object](/fr/docs/Web/JavaScript/Guide/Working_with_Objects) values.
Strings are compared based on standard lexicographical ordering, using Unicode values.
In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison.
This behavior generally results in comparing the operands numerically.
The sole exceptions to type conversion within comparisons involve the `===` and `!==` operators, which perform strict equality and inequality comparisons.
These operators do not attempt to convert the operands to compatible types before checking equality.
The following table describes the comparison operators in terms of this sample code:

```js
const var1 = 3;
const var2 = 4;
```

<table class="standard-table">
  <caption>
    Comparison operators
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Description</th>
      <th scope="col">Examples returning true</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Equality">Equal</a> (<code>==</code>)
      </td>
      <td>Returns <code>true</code> if the operands are equal.</td>
      <td>
        <code>3 == var1</code>
        <p><code>"3" == var1</code></p>
        <code>3 == '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Inequality">Not equal</a> (<code>!=</code>)
      </td>
      <td>Returns <code>true</code> if the operands are not equal.</td>
      <td>
        <code>var1 != 4<br />var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality">Strict equal</a> (<code>===</code>)
      </td>
      <td>
        Returns <code>true</code> if the operands are equal and of the same
        type. See also [`Object.is`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/is) and
        <a href="/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness">sameness in JS</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Strict not equal</a> (<code>!==</code>)
      </td>
      <td>
        Returns <code>true</code> if the operands are of the same type but not equal, or are of different type.
      </td>
      <td>
        <code>var1 !== "3"<br />3 !== '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Greater_than">Greater than</a> (<code>></code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is greater than the right operand.
      </td>
      <td>
        <code>var2 > var1<br />"12" > 2</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Greater than or equal</a>
        (<code>>=</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is greater than or equal to the right operand.
      </td>
      <td>
        <code>var2 >= var1<br />var1 >= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Less_than">Less than</a>
        (<code>&#x3C;</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is less than the right operand.
      </td>
      <td>
        <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Less than or equal</a>
        (<code>&#x3C;=</code>)
      </td>
      <td>
        Returns <code>true</code> if the left operand is less than or equal to the right operand.
      </td>
      <td>
        <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** `=>` is not a comparison operator but rather is the notation
> for [Arrow functions](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Arithmetic operators

An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value.
The standard arithmetic operators are addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
These operators work as they do in most other programming languages when used with floating point numbers (in particular, note that division by zero produces [`Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity)). For example:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // this is true
```

In addition to the standard arithmetic operations (`+`, `-`, `*`, `/`), JavaScript provides the arithmetic operators listed in the following table:

<table class="fullwidth-table">
  <caption>
    Arithmetic operators
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Description</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Remainder">Remainder</a> (<code>%</code>)
      </td>
      <td>
        Binary operator. Returns the integer remainder of dividing the two operands.
      </td>
      <td>12 % 5 returns 2.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Increment">Increment</a> (<code>++</code>)
      </td>
      <td>
        Unary operator. Adds one to its operand. If used as a prefix operator
        (<code>++x</code>), returns the value of its operand after adding one;
        if used as a postfix operator (<code>x++</code>), returns the value of
        its operand before adding one.
      </td>
      <td>
        If <code>x</code> is 3, then <code>++x</code> sets <code>x</code> to 4
        and returns 4, whereas <code>x++</code> returns 3 and, only then, sets <code>x</code> to 4.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Decrement">Decrement</a> (<code>--</code>)
      </td>
      <td>
        Unary operator. Subtracts one from its operand.
        The return value is analogous to that for the increment operator.
      </td>
      <td>
        If <code>x</code> is 3, then <code>--x</code> sets <code>x</code> to 2
        and returns 2, whereas <code>x--</code> returns 3 and, only then, sets <code>x</code> to 2.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation">Unary negation</a> (<code>-</code>)
      </td>
      <td>Unary operator. Returns the negation of its operand.</td>
      <td>If <code>x</code> is 3, then <code>-x</code> returns -3.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus">Unary plus</a> (<code>+</code>)
      </td>
      <td>
        Unary operator. Attempts to convert the operand to a number, if it is not already.
      </td>
      <td>
        <p><code>+"3"</code> returns <code>3</code>.</p>
        <p><code>+true</code> returns <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation operator</a> (<code>**</code>)
      </td>
      <td>
        Calculates the <code>base</code> to the <code>exponent</code> power,
        that is, <code>base^exponent</code>
      </td>
      <td>
        <code>2 ** 3</code> returns <code>8</code>.<br /><code>10 ** -1</code>
        returns <code>0.1</code>.
      </td>
    </tr>
  </tbody>
</table>

## Bitwise operators

A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather
than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has
a binary representation of 1001. Bitwise operators perform their operations on such
binary representations, but they return standard JavaScript numerical values.

The following table summarizes JavaScript's bitwise operators.

| Operator                                                                                     | Usage     | Description                                                                                                                                                             |
| -------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Bitwise AND](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                    | `a & b`   | Returns a one in each bit position for which the corresponding bits of both operands are ones.                                                                          |
| [Bitwise OR](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                      | `a \| b`  | Returns a zero in each bit position for which the corresponding bits of both operands are zeros.                                                                        |
| [Bitwise XOR](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                    | `a ^ b`   | Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.] |
| [Bitwise NOT](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                    | `~ a`     | Inverts the bits of its operand.                                                                                                                                        |
| [Left shift](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift)                      | `a << b`  | Shifts `a` in binary representation `b` bits to the left, shifting in zeros from the right.                                                                             |
| [Sign-propagating right shift](/fr/docs/Web/JavaScript/Reference/Operators/Right_shift)   | `a >> b`  | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off.                                                                                 |
| [Zero-fill right shift](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b` | Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off, and shifting in zeros from the left.                                            |

### Bitwise logical operators

Conceptually, the bitwise logical operators work as follows:

- The operands are converted to thirty-two-bit integers and expressed by a series of bits (zeros and ones).
  Numbers with more than 32 bits get their most significant bits discarded.
  For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

  ```
  Before: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  After:                 1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Each bit in the first operand is paired with the corresponding bit in the second operand: first bit to first bit, second bit to second bit, and so on.
- The operator is applied to each pair of bits, and the result is constructed bitwise.

For example, the binary representation of nine is 1001, and the binary representation of fifteen is 1111.
So, when the bitwise operators are applied to these values, the results are as follows:

| Expression | Result | Binary Description                                    |
| ---------- | ------ | ----------------------------------------------------- |
| `15 & 9`   | `9`    | `1111 & 1001 = 1001`                                  |
| `15 \| 9`  | `15`   | `1111 \| 1001 = 1111`                                 |
| `15 ^ 9`   | `6`    | `1111 ^ 1001 = 0110`                                  |
| `~15`      | `-16`  | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`       | `-10`  | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

Note that all 32 bits are inverted using the Bitwise NOT operator, and that values with
the most significant (left-most) bit set to 1 represent negative numbers
(two's-complement representation). `~x` evaluates to the same value that
`-x - 1` evaluates to.

### Opérateurs de décalage binaire

The bitwise shift operators take two operands: the first is a quantity to be shifted, and the second specifies the number of bit positions by which the first operand is to be
shifted.
The direction of the shift operation is controlled by the operator used.

Shift operators convert their operands to thirty-two-bit integers and return a result of either type [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) or [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt): specifically, if the type
of the left operand is [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt), they return [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt);
otherwise, they return [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number).

The shift operators are listed in the following table.

<table class="fullwidth-table">
  <caption>
    Bitwise shift operators
  </caption>
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Description</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Left_shift">Left shift</a><br />(<code>&#x3C;&#x3C;</code>)
      </td>
      <td>
        This operator shifts the first operand the specified number of bits to
        the left. Excess bits shifted off to the left are discarded. Zero bits
        are shifted in from the right.
      </td>
      <td>
        <code>9&#x3C;&#x3C;2</code> yields 36, because 1001 shifted 2 bits to
        the left becomes 100100, which is 36.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Right_shift">Sign-propagating right shift</a> (<code>>></code>)
      </td>
      <td>
        This operator shifts the first operand the specified number of bits to
        the right. Excess bits shifted off to the right are discarded. Copies of
        the leftmost bit are shifted in from the left.
      </td>
      <td>
        <code>9>>2</code> yields 2, because 1001 shifted 2 bits to the right
        becomes 10, which is 2. Likewise, <code>-9>>2</code> yields -3, because the sign is preserved.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Zero-fill right shift</a> (<code>>>></code>)
      </td>
      <td>
        This operator shifts the first operand the specified number of bits to
        the right. Excess bits shifted off to the right are discarded. Zero bits
        are shifted in from the left.
      </td>
      <td>
        <code>19>>>2</code> yields 4, because 10011 shifted 2 bits to the right
        becomes 100, which is 4. For non-negative numbers, zero-fill right shift
        and sign-propagating right shift yield the same result.
      </td>
    </tr>
  </tbody>
</table>

## Opérateurs logiques

Les opérateurs logiques sont généralement utilisés avec des valeurs booléennes. Lorsque c'est le cas, la valeur de retour est également booléenne. Plus généralement, les opérateurs `&&` et `||` renvoient la valeur d'un des deux opérandes (et peuvent donc renvoyer une valeur qui n'est pas un booléen). Ces opérateurs sont décrits dans le tableau suivant.

<table class="fullwidth-table">
  <caption>
    Opérateurs logiques
  </caption>
  <thead>
    <tr>
      <th scope="col">Opérateur</th>
      <th scope="col">Utilisation</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND">ET logique</a> (<code>&amp;&amp;</code>)
      </td>
      <td><code>expr1 &amp;&amp; expr2</code></td>
      <td>
        Renvoie <code>expr1</code> si elle peut être convertie en <code>false</code> et renvoie <code>expr2</code> sinon. Lorsqu'il est utilisé avec des valeurs booléennes, <code>&amp;&amp;</code> renvoie <code>true</code> si les deux opérandes valent <code>true</code> et <code>false</code> sinon.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR">OU logique</a> (<code>||</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Renvoie <code>expr1</code> si elle peut être convertie en <code>true</code> et renvoie <code>expr2</code> sinon. Lorsqu'il est utilisé avec des valeurs booléennes, <code>||</code> renvoie <code>true</code> si l'un des deux opérandes vaut <code>true</code> et <code>false</code> si les deux valent <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT">NON logique</a> (<code>!</code>)
      </td>
      <td><code>!expr</code></td>
      <td>
        Renvoie <code>false</code> si son unique opérande peut être converti en <code>true</code>, renvoie <code>true</code> sinon.
      </td>
    </tr>
  </tbody>
</table>

Les expressions équivalentes à `false` sont celles qui sont évaluées avec la valeur `null`, `0`, `NaN`, la chaîne vide (`""`), ou `undefined`.

Les exemples de code suivant illustrent l'utilisation de l'opérateur ET logique `&&`.

```js
const a1 = true && true;       // t && t renvoie true
const a2 = true && false;      // t && f renvoie false
const a3 = false && true;      // f && t renvoie false
const a4 = false && (3 === 4); // f && f renvoie false
const a5 = 'Chat' && 'Chien';  // t && t renvoie Chien
const a6 = false && 'Chat';    // f && t renvoie false
const a7 = 'Chat' && false;    // t && f renvoie false
```

Les exemples de code suivant illustrent l'utilisation de l'opérateur OU logique `||`.

```js
const o1 = true || true;       // t || t renvoie true
const o2 = false || true;      // f || t renvoie true
const o3 = true || false;      // t || f renvoie true
const o4 = false || (3 === 4); // f || f renvoie false
const o5 = 'Chat' || 'Chien';  // t || t renvoie Chat
const o6 = false || 'Chat';    // f || t renvoie Chat
const o7 = 'Chat' || false;    // t || f renvoie Chat
```

Les exemples de code suivant illustrent l'utilisation de l'opérateur NON logique `!`.

```js
const n1 = !true;   // !t renvoie false
const n2 = !false;  // !f renvoie true
const n3 = !'Chat'; // !t renvoie false
```

### Évaluation en court-circuit

Les expressions logiques étant évaluées de gauche à droite, le moteur d'exécution utilise les courts-circuits dans les cas suivants&nbsp;:

- `false && nimportequoi` sera court-circuitée pour être évaluée en `false`.
- `true || nimportequoi` sera court-circuitée pour être évaluée en `true`.

Les règles logiques garantissent la véracité de ces évaluations. On notera que l'opérande `nimportequoi` dans les expressions précédentes n'est _pas_ évalué et que tout effet de bord lié à cette évaluation n'aura donc pas lieu.

Pour le deuxième exemple, on pourra utiliser [l'opérateur de coalescence des nuls](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) (`??`) qui fonctionne comme `||`, en renvoyant uniquement la deuxième expression lorsque la première est [équivalente à `null`](/fr/docs/Glossary/Nullish), c'est-à-dire qu'elle vaut [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined).

L'opérateur de coalescence des nuls est donc une meilleure solution lorsqu'il s'agit de fournir des valeurs par défaut, notamment lorsque `''` ou `0` sont des valeurs valides.

## Opérateurs pour les grands entiers

La plupart des opérateurs numériques peuvent être utilisés avec des valeurs de type [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) (qui représentent des grands entiers).

```js
// Addition de grands entiers
const a = 1n + 2n; // 3n

// Une division entre grands entiers est arrondie à zéro
const b = 1n / 2n; // 0n

// Il n'y a pas de troncature avec les opérations binaires
const c = 40000000000000000n >> 2n; // 10000000000000000n
```

[L'opérateur de décalage à droite non-signé (`>>>`)](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) est une exception&nbsp;: il n'est pas défini pour les valeurs, car les grands entiers n'ont pas une largeur binaire fixe et n'ont donc pas de bit le plus haut.

```js
const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead
```

Il n'est pas possible d'interchanger des nombres et des grands entiers. On ne peut pas les mélanger dans un même calcul.

```js example-bad
const a = 1n + 2; // TypeError: Cannot mix BigInt and other types
```

En effet, `BigInt` n'est pas un sous-ensemble ou un sur-ensemble du type numérique. Les grands entiers ont une plus grande précision mais ne peuvent pas représenter de nombres décimaux. Toute conversion implicite dans un sens ou l'autre entraînerait une perte de précision. Il faudra utiliser une conversion explicite pour indiquer avec quel type on souhaite effectuer l'opération.

```js example-good
const a = Number(1n) + 2; // 3
const b = 1n + BigInt(2); // 3n
```

Il est aussi possible de comparer des grands entiers avec des nombres.

```js
const a = 1n > 2; // false
const b = 3 > 2n; // true
```

## Opérateurs pour les chaînes de caractères

En complément des opérateurs de comparaison qui peuvent être utilisés avec les chaînes de caractères, on peut également utiliser l'opérateur de concaténation (`+`) afin de concaténer deux chaînes de caractères ensemble et renvoyer le résultat de cette concaténation.

Ainsi&nbsp;:

```js
console.log('ma ' + 'chaîne'); // affichera "ma chaîne" dans la console.
```

L'opérateur d'affectation raccourci `+=` peut également être utilisé pour concaténer des chaînes.

Par exemple&nbsp;:

```js
let maChaine = 'alpha';
maChaine += 'bet'; // sera évalué en "alphabet" et affectera cette valeur à maChaine.
```

## Opérateur conditionnel (ternaire)

[L'opérateur conditionnel](/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) est le seul opérateur JavaScript à prendre trois opérandes. Il permet de se résoudre en une valeur ou en une autre selon une condition donnée. Sa syntaxe est la suivante&nbsp;:

```js
condition ? val1 : val2
```

Si `condition` est vraie, l'expression sera résolue avec la valeur de `val1`. Sinon, elle sera résolue avec la valeur de `val2`. L'opérateur conditionnel peut être utilisé à tout endroit où un opérateur standard peut être utilisé.

Par exemple&nbsp;:

```js
const statut = age >= 18 ? 'adulte' : 'mineur';
```

Cette instruction affecte la valeur `"adulte"` à la variable `statut` si `age` est supérieur ou égal à 18. Sinon, c'est la valeur `"mineur"` qui est affectée à `statut`.

## L'opérateur virgule

[L'opérateur virgule](/fr/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (`,`) évalue les deux opérandes et renvoie la valeur du dernier opérande. Cet opérateur est généralement utilisé dans les boucles `for` afin de mettre à jour plusieurs variables à chaque itération de la boucle. L'utiliser ailleurs est considéré comme une mauvaise pratique et on privilégiera plusieurs instructions séparées.

Par exemple, si on a `a` qui est un tableau en deux dimensions avec 10 éléments pour chaque ligne. Le code qui suit utilise l'opérateur virgule afin de mettre à jour deux variables à la fois. Dans cet exemple, on affiche les valeurs des éléments situés sur la diagonale du tableau&nbsp;:

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
//                                ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}
```

## Opérateurs unaires

Un opérateur unaire fonctionne avec un seul opérande.

### `delete`

[L'opérateur `delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete) permet de supprimer une propriété d'un objet. La syntaxe correspondante est&nbsp;:

```js
delete objet.propriete;
delete objet[clePropriete];
delete objet[indice];
```

Où `objet` est le nom d'un objet, `propriete` est une propriété existante, `clePropriete` est une chaîne de caractères ou un symbole faisant référence à une propriété existante.

Lorsque l'opérateur `delete` réussit, la propriété est supprimée de l'objet et toute tentative d'accès ultérieur renverra `undefined`. L'opérateur `delete` renvoie `true` si l'opération est possible et `false` sinon.

```js
delete Math.PI; // renvoie false (on ne peut pas supprimer des propriétés non-configurables)

const monObj = {h: 4};
delete monObj.h; // renvoie true (on peut supprimer des propriétés personnalisées)
```

#### Supprimer des éléments de tableau

Comme les tableaux sont également des objets, il est techniquement possible de supprimer des éléments avec `delete`. Il s'agit toutefois de quelque chose considéré comme une mauvaise pratique. En effet, lorsqu'on supprime une propriété d'un tableau, la longueur n'est pas modifiée et les autres éléments ne sont pas réindexés. Pour un comportement analogue, mieux vaudra réécrire la valeur de l'élément avec `undefined`. Pour manipuler un tableau, on utilisera plutôt les méthodes associées comme [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### `typeof`

[L'opérateur `typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) s'utilise de la façon suivante&nbsp;:

```js
typeof operand
```

L'opérateur `typeof` renvoie une chaîne de caractères qui indique le type de l'opérande non-évalué. `operand` est une chaîne de caractères, une variable, un mot-clé ou un objet dont on souhaite connaître le type. On peut utiliser des parenthèses autour de l'opérande.

Prenons la définition des variables suivantes&nbsp;:

```js
const maFonction = new Function('5 + 2');
const forme = 'rond';
const taille = 1;
const toto = ['Pomme', 'Mangue', 'Orange'];
const jour = new Date();
```

L'opérateur `typeof` renvoie les résultats suivants pour ces différentes variables&nbsp;:

```js
typeof maFonction;  // renvoie "function"
typeof forme;       // renvoie "string"
typeof taille;      // renvoie "number"
typeof toto;        // renvoie "object"
typeof jour;        // renvoie "object"
typeof inexistant; // renvoie "undefined"
```

Pour les mots-clés `true` et `null`, l'opérateur `typeof` renvoie les résultats suivants&nbsp;:

```js
typeof true; // renvoie "boolean"
typeof null; // renvoie "object"
```

Pour un nombre ou une chaîne de caractères, `typeof` renverra les résultats suivants&nbsp;:

```js
typeof 62;             // renvoie "number"
typeof 'Coucou monde'; // renvoie "string"
```

Pour les valeurs qui sont des propriétés, `typeof` renvoie le type de la valeur contenue dans la propriété&nbsp;:

```js
typeof document.lastModified; // renvoie "string"
typeof window.length;         // renvoie "number"
typeof Math.LN2;              // renvoie "number"
```

Pour les méthodes et fonctions, `typeof` renverra les résultats suivants&nbsp;:

```js
typeof blur;        // renvoie "function"
typeof eval;        // renvoie "function"
typeof parseInt;    // renvoie "function"
typeof shape.split; // renvoie "function"
```

Pour les objets natifs, `typeof` renverra les résultats suivants&nbsp;:

```js
typeof Date;     // renvoie "function"
typeof Function; // renvoie "function"
typeof Math;     // renvoie "object"
typeof Option;   // renvoie "function"
typeof String;   // renvoie "function"
```

### `void` 

[L'opérateur `void`](/fr/docs/Web/JavaScript/Reference/Operators/void) s'utilise d'une des deux façons suivantes&nbsp;:

```js
void (expression)
void expression
```

L'opérateur `void` indique une expression à évaluer sans renvoyer de valeur. `expression` est une expression JavaScript à évaluer. Les parenthèses autour de l'expression sont optionnelles, mais c'est une bonne pratique que de les utiliser.

## Opérateurs relationnels

Un opérateur relationnel compare ses opérandes et renvoie une valeur booléenne selon le résultat de la comparaison.

### `in`

[L'opérateur `in`](/fr/docs/Web/JavaScript/Reference/Operators/in) renvoie `true` si la propriété indiquée par l'opérande gauche est présente dans l'objet indiqué par l'opérande droit. La syntaxe est la suivante&nbsp;:

```js
nomPropriete in nomObjet
```

où `nomPropriete` est une chaîne de caractères, une valeur numérique ou un symbole représentant une propriété, et `nomObjet` est le nom de l'objet.

Voici quelques exemples utilisant l'opérateur `in`.

```js
// Tableaux
const arbres = ['séquoia', 'laurier', 'cèdre', 'chêne', 'érable'];
0 in arbres;         // renvoie true
3 in arbres;         // renvoie true
6 in arbres;         // renvoie false
'séquoia' in arbres; // renvoie false (il faut indique l'indice, pas la
                     // valeur)
'length' in arbres;  // renvoie true (length est une propriété native)

// Objets natifs
'PI' in Math;          // renvoie true
const maChaine = new String('corail');
'length' in maChaine;  // renvoie true

// Objets personnalisés
const maVoiture = { fabricant: 'Honda', modele: 'Accord', annee: 1998 };
'fabricant' in maVoiture;  // renvoie true
'modele' in maVoiture; // renvoie true
```

### `instanceof`

[L'opérateur `instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof) renvoie `true` si l'objet porté par l'opérande gauche est du type indiqué par l'opérande droit. La syntaxe est&nbsp;:

```js
nomObjet instanceof typeObjet
```

où `nomObjet` est le nom de l'objet dont on souhaite vérifier le type et `typeObjet` est le type en question, comme [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date) ou [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).

On utilisera `instanceof` lorsqu'on souhaite confirmer le type d'un objet à l'exécution. On pourra par exemple gérer différemment une exception selon son type.

Dans l'exemple qui suit, on utilise `instanceof` pour déterminer si `jour` est un objet `Date`. Comme `jour` est bien un objet de type `Date`, les instructions conditionnelles sont exécutées.

```js
const jour = new Date(1995, 12, 17);
if (jour instanceof Date) {
  // instructions à exécuter
}
```

## Expressions de base

Tous les opérateurs manipulent en fin de compte une ou plusieurs expressions de base. Ces expressions de base utilisent [les identifiants](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#declarations) et [les littéraux](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#literals), et quelques autres éléments que nous introduisons ci-après. Ils sont décrits plus en détails dans leur page de référence.

### `this`

[Le mot-clé `this`](/fr/docs/Web/JavaScript/Reference/Operators/this) fait référence à l'objet courant. En général, `this` fait référence à l'objet appelant d'une méthode. `this` pourra être utilisé avec la notation utilisant le point ou celle utilisant les crochets&nbsp;:

```js
this['nomPropriete']
this.nomPropriete
```

Prenons une fonction `valider()` qui valide la propriété `value` d'un objet en fonction d'un minimum et d'un maximum&nbsp;:

```js
function valider(obj, min, max) {
  if ((obj.value < min) || (obj.value > max)) {
    console.log('Valeur invalide !');
  }
}
```

On peut appeler `valider()` pour un élément de formulaire sur le gestionnaire d'évènement `onChange` en utilisant `this` afin de passer le contrôle du formulaire&nbsp;:

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size=3 onChange="valider(this, 18, 99);">
```

### Opérateur de groupement

L'opérateur de groupement, `( )`, contrôle la précédence de l'évaluation dans une expression. On peut ainsi prioriser certaines opérations par rapport à d'autres et passer outre la précédence par défaut. Dans l'exemple qui suit, on utilise les parenthèses pour que l'addition ait lieu avant la multiplication.

```js
const a = 1;
const b = 2;
const c = 3;

// Précédence par défaut
a + b * c     // 7
// Qui est évalue par défaut comme
a + (b * c)   // 7

// On passe outre cette précédence pour
// additionner avant de multiplier
(a + b) * c   // 9

// Ce qui est équivalent à
a * c + b * c // 9
```

### `new`

[L'opérateur `new`](/fr/docs/Web/JavaScript/Reference/Operators/new) peut être utilisé afin de créer une instance d'un objet (que ce type d'objet soit défini dans le script ou par l'environnement d'exécution). On utilisera `new` comme suit&nbsp;:

```js
const nomObjet = new TypeObjet(param1, param2, /* …, */ paramN);
```

### `super`

[Le mot-clé `super`](/fr/docs/Web/JavaScript/Reference/Operators/super) est utilisé pour appeler des fonctions sur le parent d'un objet. Il est utile lorsqu'on manipule des [classes](/fr/docs/Web/JavaScript/Reference/Classes) afin d'appeler le constructeur parent par exemple.

```js
super([arguments]); // On appelle le constructeur parent.
super.fonctionSurLeParent([arguments]);
```

{{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}
