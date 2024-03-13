---
title: bloc
slug: Web/JavaScript/Reference/Statements/block
---

{{jsSidebar("Statements")}}

Une **instruction de bloc** est utilisée afin de grouper zéro ou plusieurs instructions. Le bloc est délimité par une paire d'accolades. On peut éventuellement « étiqueter » un bloc avec un [label](/fr/docs/Web/JavaScript/Reference/Statements/label).

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## Syntaxe

### Instruction de bloc

```js
{
  instruction_1;
  instruction_2;
  ...
  instruction_n;
}
```

### Instruction de bloc étiquetée

```js
// ou, avec une étiquette :
label: {
  instruction_1;
  instruction_2;
  ...
  instruction_n;
}
```

- `instruction_1`, `instruction_2`, `instruction_n`
  - : Les instructions qu'on souhaite regrouper au sein du bloc.
- `label` {{optional_inline}}
  - : Une [étiquette](/fr/docs/Web/JavaScript/Reference/Statements/label) qui permet une identification visuelle de la cible d'une instruction [`break`](/fr/docs/Web/JavaScript/Reference/Statements/break).

## Description

Cette instruction est le plus souvent utilisée avec les instructions de contrôle (ex. [`if…else`](/fr/docs/Web/JavaScript/Reference/Statements/if...else), [`for`](/fr/docs/Web/JavaScript/Reference/Statements/for), [`while`](/fr/docs/Web/JavaScript/Reference/Statements/while)). On verra ainsi :

```js
while (x < 10) {
  x++;
}
```

On peut voir dans cet exemple que cette instruction se termine sans point-virgule.

L'instruction de bloc est souvent appelée **instruction composée (_compound statement_)** dans d'autres langages. En effet, elle permet d'utiliser plusieurs instructions là où JavaScript n'attend qu'une instruction. C'est une pratique courante que de combiner plusieurs instructions grâce aux blocs. À l'opposé, on peut utiliser une [instruction vide](/fr/docs/Web/JavaScript/Reference/Statements/Empty) pour ne rien faire là où JavaScript attend une instruction.

## Exemples

### Règles de portée pour var ou les déclarations de fonction en mode non-strict

Les variables déclarées avec `var` ou créées avec [une déclaration de fonction](/fr/docs/Web/JavaScript/Reference/Statements/function) en mode non-strict **n'ont pas une portée limitée au bloc**. Les variables introduites dans un bloc auront la portée de la fonction ou du script englobant ce bloc. Les variables pourront alors être utilisées en dehors du bloc. Autrement dit, une instruction de bloc n'introduit pas une portée :

```js example-bad
var x = 1;
{
  var x = 2;
}
console.log(x); // affiche 2 dans la console
```

On voit 2 dans la console, car l'instruction `var x` contenue dans le bloc appartient à la même portée que l'instruction `var x` située avant le bloc.

En mode non-strict, les déclarations de fonction à l'intérieur des blocs peuvent se comporter étrangement, il est déconseillé de les utiliser.

### Règles de portée pour let, const ou les déclarations de fonction en mode strict

En revanche, les identifiants déclarés avec [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) et [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const) **possèdent une portée limitée au bloc** :

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // affiche 1 dans la console
```

L'instruction `x = 2` est limitée à la portée du bloc dans laquelle elle est présente.

Il en va de même pour `const`:

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // affiche 1, ne déclenche pas de SyntaxError
```

L'instruction `const c = 2` _ne déclenche pas_ `SyntaxError: Identifier 'c' has already been declared`, car cet identifiant est bien unique pour ce bloc.

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), à partir de ES2015, les fonctions à l'intérieur des blocs ont une portée qui correspond à ce bloc. Avant ES2015, les fonctions de bloc étaient interdites.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`while`](/fr/docs/Web/JavaScript/Reference/Statements/while)
- [`if...else`](/fr/docs/Web/JavaScript/Reference/Statements/if...else)
- [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let)
