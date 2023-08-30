---
title: Expressions et opérateurs
slug: Web/JavaScript/Guide/Expressions_and_operators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Functions", "Web/JavaScript/Guide/Numbers_and_dates")}}

Dans ce chapitre, nous décrirons les expressions et opérateurs en JavaScript, qui permettent notamment l'affectation, la comparaison, les opérations arithmétiques, binaires, logiques, la manipulation de chaîne de caractères, etc.

Une _expression_ peut être vue comme une unité de code valide qui est résolue en une valeur. Il existe deux types d'expressions, celles qui ont des effets de bord (par exemple l'affectation d'une valeur) et celles qui sont purement évaluées.

L'expression `x = 7` fait partie de la première catégorie. Elle utilise _l'opérateur_ `=` afin d'affecter la valeur sept à la variable `x`. L'expression elle-même est évaluée avec la valeur `7`.

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

`x++` et `++x` sont deux exemples d'expression avec un opérateur unaire. La forme `opérateur opérande` fonctionne pour les opérateurs unaires _postfixes_, tandis que la forme `opérande opérateur` fonctionne pour les opérateurs unaires _préfixes_. `++` et `--` sont les deux seuls opérateurs postfixes de JavaScript. Tous les autres opérateurs unaires, comme `!` ou `typeof`, sont préfixes.

## Opérateurs d'affectation

Un opérateur d'affectation affecte une valeur à son opérande gauche selon la valeur de son opérande droit. L'opérateur d'affectation simple est le signe égal (`=`), qui affecte la valeur de son opérande droit à son opérande gauche. Autrement dit, `x = f()` est une expression d'affectation qui affecte la valeur de `f()` à `x`.

Il existe également des opérateurs d'affectation composites qui sont des raccourcis pour les opérations listées dans le tableau qui suit&nbsp;:

| Nom                                                                                                                          | Opérateur     | Signification      |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------ |
| [Affectation](/fr/docs/Web/JavaScript/Reference/Operators/Assignment)                                                        | `x = f()`     | `x = f()`          |
| [Affectation après addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition_assignment)                                | `x += f()`    | `x = x + f()`      |
| [Affectation après soustraction](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)                         | `x -= f()`    | `x = x - f()`      |
| [Affectation après multiplication](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)                    | `x *= f()`    | `x = x * f()`      |
| [Affectation après division](/fr/docs/Web/JavaScript/Reference/Operators/Division_assignment)                                | `x /= f()`    | `x = x / f()`      |
| [Affectation du reste](/fr/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)                                     | `x %= f()`    | `x = x % f()`      |
| [Affectation après exponentiation](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)                    | `x **= f()`   | `x = x ** f()`     |
| [Affectation après décalage à gauche](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)                     | `x <<= f()`   | `x = x << f()`     |
| [Affectation après décalage à droite](/fr/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)                    | `x >>= f()`   | `x = x >> f()`     |
| [Affectation après décalage à droite non signé](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment) | `x >>>= f()`  | `x = x >>> f()`    |
| [Affectation après ET binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)                           | `x &= f()`    | `x = x & f()`      |
| [Affectation après OU exclusif binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)                  | `x ^= f()`    | `x = x ^ f()`      |
| [Affectation après OU binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)                            | `x \|= f()`   | `x = x \| f()`     |
| [Affectation après ET logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)                           | `x &&= f()`   | `x && (x = f())`   |
| [Affectation après OU logique](/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)                            | `x \|\|= f()` | `x \|\| (x = f())` |
| [Affectation après coalescence des nuls](/fr/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)             | `x ??= f()`   | `x ?? (x = f())`   |

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
const toto = ["un", "deux", "trois"];

// sans décomposition
const un = toto[0];
const deux = toto[1];
const trois = toto[2];

// avec décomposition
const [un, deux, trois] = toto;
```

### Évaluation et imbrication

En général, les affectations sont utilisées pour une déclaration de variable (c'est-à-dire avec les instructions [`const`][], [`let`][], ou [`var`][]) ou comme instructions indépendantes.

```js
// Déclare une variable x et l'initialise avec le résultat de f().
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

console.log((x = f())); // Affiche la valeur de retour directement.

// Une expression d'affectation peut être imbriquée à n'importe quel
// endroit où les expressions sont autorisées, que ce soit comme
// élément d'un littéral de tableau ou comme argument dans un appel
// de fonction
console.log([0, (x = f()), 0]);
console.log(f(0, (x = f()), 0));
```

Le résultat de l'évaluation correspond à l'expression à droite du signe `=` dans la colonne «&nbsp;Signification&nbsp;» du tableau ci-avant. Cela signifie que l'évaluation de `x = f()` aura comme résultat celui de `f()`, que l'évaluation de `x += f()` aura comme résultat la somme `x + f()`, que celle de
`x **= f()` aura comme résultat `x ** f()`, etc.

Pour les affectations logiques, `x &&= f()`, `x ||= f()`, et `x ??= f()`, la valeur de retour est celle de l'opération logique sans affectation, soit `x && f()`, `x || f()`, et `x ?? f()`, respectivement.

Lorsqu'on enchaîne ces expressions sans parenthèses ou opérateur de groupement comme les littéraux de tableau, les expressions d'affectation sont **groupées de droite à gauche** (elles sont [associatives à droite][]), mais sont **évaluées de gauche à droite**.

[associatives à droite]: https://en.wikipedia.org/wiki/Operator_associativity

On notera que pour les opérateurs d'affectation, à l'exception de `=`, les valeurs résultantes sont toujours basées sur les valeurs des opérandes _avant_ l'opération.

Par exemple, si on a les fonctions `f` et `g` et les variables `x` et `y` comme suit&nbsp;:

```js
function f() {
  console.log("F!");
  return 2;
}
function g() {
  console.log("G!");
  return 3;
}
let x, y;
```

Prenons ces trois exemples&nbsp;:

```js
y = x = f();
y = [f(), (x = g())];
x[f()] = g();
```

#### Exemple d'évaluation n°1

`y = x = f()` est équivalente à `y = (x = f())`, car l'opérateur d'affectation est associatif à droite. Toutefois l'évaluation se fait de gauche à droite&nbsp;:

1. L'évaluation de l'expression d'affectation `y = x = f()` commence.
   1. L'opérande `y` à gauche de l'affectation est évalué comme une référence à la variable nommée `y`.
   2. L'évaluation de l'expression d'affectation `x = f()` commence.
      1. L'opérande `x` à gauche de l'affectation est évalué comme une référence à la variable nommée `x`.
      2. L'appel de fonction `f()` affiche "F!" dans la console et renvoie la valeur `2`.
      3. Ce résultat de `f()`, `2`, est affecté à `x`.
   3. L'évaluation de l'expression d'affectation `x = f()` est maintenant terminée. Son résultat est la nouvelle valeur de `x`, qui est `2`.
   4. Ce résultat, `2`, est à son tour affecté à `y`.
2. L'évaluation de l'expression d'affectation `y = x = f()` est maintenant terminée. Son résultat est la nouvelle valeur de `y`, qui est ici `2`. La valeur `2` a été affectée à `x` et `y`, et la console a affiché "F!".

#### Exemple d'évaluation n°2

`y = [ f(), x = g() ]` est également évaluée de gauche à droite&nbsp;:

1. L'évaluation de l'expression d'affectation `y = [ f(), x = g() ]` commence.
   1. L'opérande `y` à gauche de l'affectation est évalué comme une référence à la variable nommée `y`.
   2. L'évaluation du littéral de tableau `[ f(), x = g() ]` commence.
      1. L'appel de fonction `f()` affiche "F!" dans la console et renvoie la valeur `2`.
      2. L'évaluation de l'expression d'affectation `x = g()` commence.
         1. L'opérande `x` à gauche de l'affectation est évalué comme une référence à la variable nommée `x`.
         2. L'appel de fonction `g()` affiche "G!" dans la console et renvoie la valeur `3`.
         3. Ce résultat de `g()`, `3`, est affecté à `x`.
      3. L'évaluation de l'expression d'affectation `x = g()` est maintenant terminée. Son résultat est la nouvelle valeur de `x`&nbsp; `3`. Ce résultat devient l'élément qui suit dans le littéral de tableau (après le `2` provenant de `f()`).
   3. L'évaluation du littéral de tableau `[ f(), x = g() ]` est maintenant terminée. Son résultat est un tableau avec deux valeurs&nbsp;: `[ 2, 3 ]`.
   4. Ce tableau, `[ 2, 3 ]`, est affecté à `y`.
2. L'évaluation de l'expression d'affectation `y = [ f(), x = g() ]` est maintenant terminée. Son résultat est la nouvelle valeur de `y`, qui est `[ 2, 3 ]`. `3` est affecté à `x`, `[ 2, 3 ]` est affecté à `y` et la console a affiché "F!" puis "G!".

#### Exemple d'évaluation n°3

`x[f()] = g()` est également évaluée de gauche à droite. Dans cet exemple, on part du principe que la valeur de `x` est déjà un objet (pour plus d'informations sur les objets, voir [Utiliser les objets](/fr/docs/Web/JavaScript/Guide/Working_with_Objects)).

1. L'évaluation de l'expression d'affectation `x[f()] = g()` commence.
   1. L'évaluation de l'accès à la propriété `x[f()]` situé à gauche de l'opérateur d'affectation commence.
      1. Le `x` est évalué comme une référence à la variable nommée `x`.
      2. Ensuite, l'appel `f()` affiche "F!" dans la console et renvoie la valeur `2`.
   2. L'évaluation de `x[f()]` est maintenant terminée et son résultat est une variable qui référence la propriété `x[2]`.
   3. Ensuite, l'appel à la fonction `g()` affiche "G!" dans la console et renvoie la valeur `3`.
   4. Ce résultat, `3`, est affecté à `x[2]` (cette étape réussira uniquement si la valeur de `x` est un [objet](/fr/docs/Web/JavaScript/Guide/Working_with_Objects))?
2. L'évaluation de l'expression d'affectation `x[f()] = g()` est maintenant terminée. Son résultat est la nouvelle valeur de `x[2]`, qui est `3`. `3` a été affecté à `x[2]` et la console a affiché "F!" puis "G!".

### Éviter les enchaînements d'affectation

L'enchaînement ou l'imbrication d'affectations dans d'autres expressions peut produire d'étranges résultats et c'est pour cette raison [que les enchaînements et imbrications d'affectation sont déconseillés][discourage assign chain]).

On évitera en particulier les enchaînements d'affectation dans une instruction [`const`][], [`let`][], ou [`var`][] qui _ne fonctionnent pas_ dans la plupart des cas. Seule la variable la plus à gauche sera alors déclarée et les variables intermédiaires dans la chaîne ne seront _pas_ déclarées par l'instruction `const`/`let`/`var`. Ainsi, si on a&nbsp;:

```js-nolint
const z = y = x = f();
```

On pourrait penser que cela permet de déclarer les variables `x`, `y`, et `z`. Cependant, seule la variable `z` est déclarée. `y` et `x` sont des références invalides à des variables inexistantes (en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)) ou, pire, créent des [variables globales](/fr/docs/Glossary/Global_variable) pour `x` et `y` en [mode non-strict](/fr/docs/Glossary/Sloppy_mode).

## Opérateurs de comparaison

Un opérateur de comparaison compare ses opérandes et renvoie une valeur logique selon que la comparaison est vraie ou non. Les opérandes peuvent être des nombres, des chaînes de caractères, des booléens ou des [objets](/fr/docs/Web/JavaScript/Guide/Working_with_Objects). Les chaînes de caractères sont comparées selon l'ordre lexicographique standard en utilisant les valeurs Unicode.

Dans la plupart des cas, si les deux opérandes ne sont pas du même type, le moteur JavaScript tentera de les convertir dans un type approprié pour la comparaison. Cela entraîne généralement une comparaison numérique des opérandes.

Les opérateurs `===` et `!==` sont des exceptions à cette règle de conversion&nbsp;: ils réalisent des comparaisons d'égalité et d'inégalité strictes. Ces opérateurs n'effectuent pas de conversion des opérandes avant la vérification de l'égalité.
Le tableau qui suit décrit les opérateurs de comparaison en utilisant ce fragment de code comme exemple&nbsp;:

```js
const var1 = 3;
const var2 = 4;
```

<table class="standard-table">
  <caption>
    Opérateurs de comparaison
  </caption>
  <thead>
    <tr>
      <th scope="col">Opérateur</th>
      <th scope="col">Description</th>
      <th scope="col">Exemples qui renvoient <code>true</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Equality">Égalité</a> (<code>==</code>)
      </td>
      <td>Renvoie <code>true</code> si les opérandes sont égaux (après conversion implicite).</td>
      <td>
        <code>3 == var1</code><br/>
        <code>"3" == var1</code><br/>
        <code>3 == '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Inequality">Inégalité</a> (<code>!=</code>)
      </td>
      <td>Renvoie <code>true</code> si les opérandes sont différents (après conversion implicite).</td>
      <td>
        <code>var1 != 4</code><br/>
        <code>var2 != "3"</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality">Égalité stricte</a> (<code>===</code>)
      </td>
      <td>
        Renvoie <code>true</code> si les opérandes sont égaux et du même type. Voir également <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/is"><code>Object.is()</code></a> et <a href="/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness">l'égalité en JavaScript</a>.
      </td>
      <td><code>3 === var1</code></td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality">Inégalité stricte</a> (<code>!==</code>)
      </td>
      <td>
        Renvoie <code>true</code> si les opérandes sont du même type et différents ou s'ils ne sont pas du même type.
      </td>
      <td>
        <code>var1 !== "3"</code><br/>
        <code>3 !== '3'</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Greater_than">Supériorité stricte</a> (<code>&gt;</code>)
      </td>
      <td>
        Renvoie <code>true</code> si l'opérande gauche est strictement supérieur à l'opérande droit.
      </td>
      <td>
        <code>var2 &gt; var1</code><br/>
        <code>"12" &gt; 2</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">Supériorité</a> (<code>&gt;=</code>)
      </td>
      <td>
        Renvoie <code>true</code> si l'opérande gauche est supérieur ou égal à l'opérande droit.
      </td>
      <td>
        <code>var2 &gt;= var1</code><br/>
        <code>var1 &gt;= 3</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Less_than">Infériorité stricte</a> (<code>&lt;</code>)
      </td>
      <td>
        Renvoie <code>true</code> si l'opérande gauche est strictement inférieur à l'opérande droit.
      </td>
      <td>
        <code>var1 &lt; var2</code><br/>
        <code>"2" &lt; 12</code>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Infériorité</a> (<code>&lt;=</code>)
      </td>
      <td>
        Renvoie <code>true</code> si l'opérande gauche est inférieur ou égal à l'opérande droit.
      </td>
      <td>
        <code>var1 &lt;= var2</code><br/>
        <code>var2 &lt;= 5</code>
      </td>
    </tr>
  </tbody>
</table>

> **Note :** `=>` n'est pas un opérateur de comparaison, il s'agit de la notation pour [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

## Opérateurs arithmétiques

Un opérateur arithmétique combine des opérandes numériques et renvoie une valeur numérique. Les opérateurs arithmétiques standard sont l'addition (`+`), la soustraction (`-`), la multiplication (`*`), et la division (`/`). Ces opérateurs fonctionnent comme dans la plupart des langages de programmation qui utilisent les nombres flottants (la division par zéro donne notamment [`Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Infinity)). On pourra par exemple avoir&nbsp;:

```js
1 / 2; // 0.5
1 / 2 === 1.0 / 2.0; // true
```

En plus des opérations arithmétiques standard (`+`, `-`, `*`, `/`), JavaScript fournit les opérateurs arithmétiques suivants&nbsp;:

<table class="fullwidth-table">
  <caption>
    Opérateurs arithmétiques
  </caption>
  <thead>
    <tr>
      <th scope="col">Opérateur</th>
      <th scope="col">Description</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Remainder">Reste</a> (<code>%</code>)
      </td>
      <td>
        Un opérateur binaire qui renvoie le reste entier de la division des deux opérandes.
      </td>
      <td>`12 % 5` renvoie `2`.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Increment">Incrément</a> (<code>++</code>)
      </td>
      <td>
        Un opérateur unaire qui ajoute un à son opérande. S'il est utilisé en opérateur préfixe (<code>++x</code>), il renvoie la valeur de son opérande après y avoir ajouté un. S'il est utilisé en opérateur postfixe (<code>x++</code>), il renvoie la valeur de l'opérande avant l'ajout de un.
      </td>
      <td>
        Si <code>x</code> vaut 3, alors <code>++x</code> définit <code>x</code> avec 4 et renvoie 4, tandis que <code>x++</code> renvoie 3 puis, uniquement après, définit <code>x</code> avec 4.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Decrement">Décrément</a> (<code>--</code>)
      </td>
      <td>
        Un opérateur unaire qui soustrait un à son opérande. La valeur de retour est analogue à celle de l'opérateur d'incrément.
      </td>
      <td>
        Si <code>x</code> vaut 3, alors <code>--x</code> définit <code>x</code> avec 2 et renvoie 2, tandis que <code>x--</code> renvoie 3 puis, uniquement après, définit <code>x</code> avec 2.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation">Négation unaire</a> (<code>-</code>)
      </td>
      <td>Un opérateur unaire qui renvoie l'opposé de l'opérande.</td>
      <td>Si <code>x</code> vaut 3, <code>-x</code> renvoie -3.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus">Plus unaire</a> (<code>+</code>)
      </td>
      <td>
        Un opérateur unaire qui tente la conversion de l'opérande en nombre si ce n'est pas déjà une valeur numérique.
      </td>
      <td>
        <p><code>+"3"</code> renvoie <code>3</code>.</p>
        <p><code>+true</code> renvoie <code>1</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation">Opérateur d'exponentiation</a> (<code>**</code>)
      </td>
      <td>
        Élève une base donnée par l'opérande gauche à la puissance donnée par l'opérande droit.
      </td>
      <td>
        <code>2 ** 3</code> renvoie <code>8</code>. <code>10 ** -1</code> renvoie <code>0.1</code>.
      </td>
    </tr>
  </tbody>
</table>

## Opérateurs binaires

Un opérateur binaire traite les opérandes comme des suites de 32 bits (des zéros ou des uns) plutôt que comme des nombres décimaux, hexadécimaux et octaux. Ainsi, le nombre décimal 9 se représente en binaire comme 1001. Les opérateurs binaires effectuent leur opération sur des représentations binaires et renvoient des valeurs numériques.

Le tableau qui suit détaille les opérateurs binaires JavaScript.

| Opérateur                                                                                                     | Utilisation | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [ET binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)                                         | `a & b`     | Renvoie un à chaque position pour laquelle les bits des deux opérandes valent un.                                                    |
| [OU binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)                                          | `a \| b`    | Renvoie un zéro à chaque position pour laquelle les bits des deux opérandes valent zéro.                                             |
| [OU exclusif binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)                                | `a ^ b`     | Renvoie un zéro à chaque position pour laquelle les bits sont les mêmes. [Renvoie un à chaque position où les bits sont différents.] |
| [NON binaire](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)                                        | `~ a`       | Inverse les bits de l'opérande.                                                                                                      |
| [Décalage à gauche](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift)                                   | `a << b`    | Décale la représentation binaire de `a` de `b` bits vers la gauche, en ajoutant des zéros à droite.                                  |
| [Décalage à droite avec propagation du signe](/fr/docs/Web/JavaScript/Reference/Operators/Right_shift)        | `a >> b`    | Décale la représentation binaire de `a` de `b` bits vers la droite, enlevant les bits en trop.                                       |
| [Décalage à droite avec remplissage à zéro](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift) | `a >>> b`   | Décale la représentation binaire de `a` de `b` bits vers la droite, enlevant les bits en trop et en ajoutant des zéros à gauche.     |

### Opérateurs binaires logiques

Les opérateurs logiques binaires fonctionnent de la façon suivante&nbsp;:

- Les opérandes sont convertis en entiers sur 32 bits. Pour les nombres dont la valeur binaire dépasse 32 bits, les bits les plus hauts sont abandonnés. Ainsi, l'entier suivant sur plus de 32 bits sera converti en entier sur 32 bits&nbsp;:

  ```
  Avant : 1110 0110 1111 1010 0000 0000 0000 0110 0000 0000 0001
  Après :                1010 0000 0000 0000 0110 0000 0000 0001
  ```

- Chaque bit du premier opérande est associé au bit correspondant du second opérande&nbsp;: le premier bit avec le premier bit, le second avec le second et ainsi de suite.
- L'opérateur est appliqué sur chaque paire ainsi constituée et le résultat est construit en binaire.

Par exemple, la représentation binaire du nombre décimal `9` est `1001`, et celle du nombre décimal `15` est `1111`. Aussi, quand on utilise les opérateurs binaires sur ces valeurs, on a les résultats suivants&nbsp;:

| Expression | Résultat | Description binaire                               |
| ---------- | -------- | ------------------------------------------------- |
| `15 & 9`   | `9`      | `1111 & 1001 = 1001`                              |
| `15 \| 9`  | `15`     | `1111 \| 1001 = 1111`                             |
| `15 ^ 9`   | `6`      | `1111 ^ 1001 = 0110`                              |
| `~15`      | `-16`    | `~ 0000 0000 … 0000 1111 = 1111 1111 … 1111 0000` |
| `~9`       | `-10`    | `~ 0000 0000 … 0000 1001 = 1111 1111 … 1111 0110` |

On notera que tous les 32 bits sont inversés lors de l'utilisation de l'opérateur NON binaire et que les valeurs avec le bit le plus à gauche à 1 représentent des valeurs négatives (représentation en complément à deux). Aussi, l'évaluation de `~x` fournira la même valeur que `-x - 1`.

### Opérateurs de décalage binaire

Les opérateurs de décalage binaire utilisent deux opérandes&nbsp;: celui de gauche est la quantité sur laquelle effectuer le décalage et celui de droite indique le nombre de bits à décaler. La direction de l'opération de décalage dépend de l'opérateur utilisé.

Les opérateurs de décalage convertissent leurs opérandes en entiers sur 32 bits et renvoient un résultat de type [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) ou [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) selon la règle suivante&nbsp;: si l'opérande gauche est de type [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt), la valeur de retour sera de type [`BigInt`](/fr/docs/Web/JavaScript/Reference/Global_Objects/BigInt) et sinon, la valeur de retour sera de type [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number).

Les opérateurs de décalage sont listés dans le tableau suivant.

<table class="fullwidth-table">
  <caption>
    Opérateurs de décalage binaire
  </caption>
  <thead>
    <tr>
      <th scope="col">Opérateur</th>
      <th scope="col">Description</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Left_shift">Décalage à gauche</a> (<code>&lt;&lt;</code>)
      </td>
      <td>
        Cet opérateur décale la valeur du premier opérande du nombre de bits indiqué vers la gauche. Les bits en trop sont abandonnés et des bits à 0 sont ajoutés sur la droite.
      </td>
      <td>
        <code>9&lt;&lt;2</code> donne <code>36</code>, car <code>1001</code>, décalé de 2 bits à gauche vaut <code>100100</code> en binaire, ce qui correspond à <code>36</code> en décimal.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Right_shift">Décalage à droite avec propagation du signe</a> (<code>>></code>)
      </td>
      <td>
        Cet opérateur décale la valeur du premier opérande du nombre de bits indiqué vers la droite. Les bits en trop à droite sont abandonnés. Des copies du bit le plus à gauche sont ajoutés sur la gauche.
      </td>
      <td>
        <code>9>>2</code> donne <code>2</code>, car <code>1001</code> décalé de 2 bits à droite vaut <code>10</code> en binaire, ce qui correspond à <code>2</code> en décimal. De même, <code>-9>>2</code> donne <code>-3</code>, car le signe est conservé.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift">Décalage à droite avec remplissage à zéro</a> (<code>>>></code>)
      </td>
      <td>
        Cet opérateur décale la valeur du premier opérande du nombre de bits indiqué vers la droite. Les bits en trop à droite sont abandonnés. Des bits à zéro sont ajoutés sur la gauche.
      </td>
      <td>
        <code>19>>>2</code> donne <code>4</code>, car <code>10011</code> décalé de deux bits à droite devient <code>100</code> en binaire, ce qui vaut <code>4</code> en décimal. Pour les valeurs positives, le décalage à droite avec remplissage à zéro et le décalage à droite avec propagation du signe fourniront le même résultat.
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
const a1 = true && true; // t && t renvoie true
const a2 = true && false; // t && f renvoie false
const a3 = false && true; // f && t renvoie false
const a4 = false && 3 === 4; // f && f renvoie false
const a5 = "Chat" && "Chien"; // t && t renvoie Chien
const a6 = false && "Chat"; // f && t renvoie false
const a7 = "Chat" && false; // t && f renvoie false
```

Les exemples de code suivant illustrent l'utilisation de l'opérateur OU logique `||`.

```js
const o1 = true || true; // t || t renvoie true
const o2 = false || true; // f || t renvoie true
const o3 = true || false; // t || f renvoie true
const o4 = false || 3 === 4; // f || f renvoie false
const o5 = "Chat" || "Chien"; // t || t renvoie Chat
const o6 = false || "Chat"; // f || t renvoie Chat
const o7 = "Chat" || false; // t || f renvoie Chat
```

Les exemples de code suivant illustrent l'utilisation de l'opérateur NON logique `!`.

```js
const n1 = !true; // !t renvoie false
const n2 = !false; // !f renvoie true
const n3 = !"Chat"; // !t renvoie false
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
console.log("ma " + "chaîne"); // affichera "ma chaîne" dans la console.
```

L'opérateur d'affectation raccourci `+=` peut également être utilisé pour concaténer des chaînes.

Par exemple&nbsp;:

```js
let maChaine = "alpha";
maChaine += "bet"; // sera évalué en "alphabet" et affectera cette valeur à maChaine.
```

## Opérateur conditionnel (ternaire)

[L'opérateur conditionnel](/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) est le seul opérateur JavaScript à prendre trois opérandes. Il permet de se résoudre en une valeur ou en une autre selon une condition donnée. Sa syntaxe est la suivante&nbsp;:

```js
condition ? val1 : val2;
```

Si `condition` est vraie, l'expression sera résolue avec la valeur de `val1`. Sinon, elle sera résolue avec la valeur de `val2`. L'opérateur conditionnel peut être utilisé à tout endroit où un opérateur standard peut être utilisé.

Par exemple&nbsp;:

```js
const statut = age >= 18 ? "adulte" : "mineur";
```

Cette instruction affecte la valeur `"adulte"` à la variable `statut` si `age` est supérieur ou égal à 18. Sinon, c'est la valeur `"mineur"` qui est affectée à `statut`.

## Opérateur virgule

[L'opérateur virgule](/fr/docs/Web/JavaScript/Reference/Operators/Comma_Operator) (`,`) évalue les deux opérandes et renvoie la valeur du dernier opérande. Cet opérateur est généralement utilisé dans les boucles `for` afin de mettre à jour plusieurs variables à chaque itération de la boucle. L'utiliser ailleurs est considéré comme une mauvaise pratique et on privilégiera plusieurs instructions séparées.

Par exemple, si on a `a` qui est un tableau en deux dimensions avec 10 éléments pour chaque ligne. Le code qui suit utilise l'opérateur virgule afin de mettre à jour deux variables à la fois. Dans cet exemple, on affiche les valeurs des éléments situés sur la diagonale du tableau&nbsp;:

```js
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
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

const monObj = { h: 4 };
delete monObj.h; // renvoie true (on peut supprimer des propriétés personnalisées)
```

#### Supprimer des éléments de tableau

Comme les tableaux sont également des objets, il est techniquement possible de supprimer des éléments avec `delete`. Il s'agit toutefois de quelque chose considéré comme une mauvaise pratique. En effet, lorsqu'on supprime une propriété d'un tableau, la longueur n'est pas modifiée et les autres éléments ne sont pas réindexés. Pour un comportement analogue, mieux vaudra réécrire la valeur de l'élément avec `undefined`. Pour manipuler un tableau, on utilisera plutôt les méthodes associées comme [`splice()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

### `typeof`

[L'opérateur `typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) s'utilise de la façon suivante&nbsp;:

```js
typeof operande;
```

L'opérateur `typeof` renvoie une chaîne de caractères qui indique le type de l'opérande non-évalué. `operande` est une chaîne de caractères, une variable, un mot-clé ou un objet dont on souhaite connaître le type. On peut utiliser des parenthèses autour de l'opérande.

Prenons la définition des variables suivantes&nbsp;:

```js
const maFonction = new Function("5 + 2");
const forme = "rond";
const taille = 1;
const toto = ["Pomme", "Mangue", "Orange"];
const jour = new Date();
```

L'opérateur `typeof` renvoie les résultats suivants pour ces différentes variables&nbsp;:

```js
typeof maFonction; // renvoie "function"
typeof forme; // renvoie "string"
typeof taille; // renvoie "number"
typeof toto; // renvoie "object"
typeof jour; // renvoie "object"
typeof inexistant; // renvoie "undefined"
```

Pour les mots-clés `true` et `null`, l'opérateur `typeof` renvoie les résultats suivants&nbsp;:

```js
typeof true; // renvoie "boolean"
typeof null; // renvoie "object"
```

Pour un nombre ou une chaîne de caractères, `typeof` renverra les résultats suivants&nbsp;:

```js
typeof 62; // renvoie "number"
typeof "Coucou monde"; // renvoie "string"
```

Pour les valeurs qui sont des propriétés, `typeof` renvoie le type de la valeur contenue dans la propriété&nbsp;:

```js
typeof document.lastModified; // renvoie "string"
typeof window.length; // renvoie "number"
typeof Math.LN2; // renvoie "number"
```

Pour les méthodes et fonctions, `typeof` renverra les résultats suivants&nbsp;:

```js
typeof blur; // renvoie "function"
typeof eval; // renvoie "function"
typeof parseInt; // renvoie "function"
typeof shape.split; // renvoie "function"
```

Pour les objets natifs, `typeof` renverra les résultats suivants&nbsp;:

```js
typeof Date; // renvoie "function"
typeof Function; // renvoie "function"
typeof Math; // renvoie "object"
typeof Option; // renvoie "function"
typeof String; // renvoie "function"
```

### `void`

[L'opérateur `void`](/fr/docs/Web/JavaScript/Reference/Operators/void) s'utilise d'une des deux façons suivantes&nbsp;:

```js-nolint
void (expression)
void expression
```

L'opérateur `void` indique une expression à évaluer sans renvoyer de valeur. `expression` est une expression JavaScript à évaluer. Les parenthèses autour de l'expression sont optionnelles, mais c'est une bonne pratique que de les utiliser.

## Opérateurs relationnels

Un opérateur relationnel compare ses opérandes et renvoie une valeur booléenne selon le résultat de la comparaison.

### `in`

[L'opérateur `in`](/fr/docs/Web/JavaScript/Reference/Operators/in) renvoie `true` si la propriété indiquée par l'opérande gauche est présente dans l'objet indiqué par l'opérande droit. La syntaxe est la suivante&nbsp;:

```js
nomPropriete in nomObjet;
```

où `nomPropriete` est une chaîne de caractères, une valeur numérique ou un symbole représentant une propriété, et `nomObjet` est le nom de l'objet.

Voici quelques exemples utilisant l'opérateur `in`.

```js
// Tableaux
const arbres = ["séquoia", "laurier", "cèdre", "chêne", "érable"];
0 in arbres; // renvoie true
3 in arbres; // renvoie true
6 in arbres; // renvoie false
"séquoia" in arbres; // renvoie false (il faut indiquer l'indice, pas la
// valeur)
"length" in arbres; // renvoie true (length est une propriété native)

// Objets natifs
"PI" in Math; // renvoie true
const maChaine = new String("corail");
"length" in maChaine; // renvoie true

// Objets personnalisés
const maVoiture = { fabricant: "Honda", modele: "Accord", annee: 1998 };
"fabricant" in maVoiture; // renvoie true
"modele" in maVoiture; // renvoie true
```

### `instanceof`

[L'opérateur `instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof) renvoie `true` si l'objet porté par l'opérande gauche est du type indiqué par l'opérande droit. La syntaxe est&nbsp;:

```js
nomObjet instanceof typeObjet;
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
this["nomPropriete"];
this.nomPropriete;
```

Prenons une fonction `valider()` qui valide la propriété `value` d'un objet en fonction d'un minimum et d'un maximum&nbsp;:

```js
function valider(obj, min, max) {
  if (obj.value < min || obj.value > max) {
    console.log("Valeur invalide !");
  }
}
```

On peut appeler `valider()` pour un élément de formulaire sur le gestionnaire d'évènement `onChange` en utilisant `this` afin de passer le contrôle du formulaire&nbsp;:

```html
<p>Saisissez un nombre entre 18 et 99 :</p>
<input type="text" name="age" size="3" onChange="valider(this, 18, 99);" />
```

### Opérateur de groupement

L'opérateur de groupement, `( )`, contrôle la précédence de l'évaluation dans une expression. On peut ainsi prioriser certaines opérations par rapport à d'autres et passer outre la précédence par défaut. Dans l'exemple qui suit, on utilise les parenthèses pour que l'addition ait lieu avant la multiplication.

```js-nolint
const a = 1;
const b = 2;
const c = 3;

// Précédence par défaut
a + b * c; // 7
// Qui est évalue par défaut comme
a + (b * c); // 7

// On passe outre cette précédence pour
// additionner avant de multiplier
(a + b) * c; // 9

// Ce qui est équivalent à
a * c + b * c; // 9
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
