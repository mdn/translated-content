---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/if...else
original_slug: Web/JavaScript/Reference/Instructions/if...else
browser-compat: javascript.statements.if_else
---
{{jsSidebar("Statements")}}

L'instruction **`if`** exécute une instruction si une condition donnée est vraie ou équivalente à vrai. Si la condition n'est pas vérifiée, il est possible d'utiliser une autre instruction.

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## Syntaxe

```js
if (condition) {
  statement1
} else {
  statement2
}
```

- `condition`
  - : Une [expression](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#expressions) qui est évaluée à `true` ou `false`.
- `statement1`
  - : L'instruction qui est exécutée si la condition est vérifiée (i.e. est évaluée à `true`). Cette instruction peut être n'importe quelle instruction valide, y compris une imbrication d'autres instructions `if`. Pour exécuter plusieurs instructions, on pourra utiliser un [bloc d'instructions](/fr/docs/Web/JavaScript/Reference/Statements/block) ({ ... }) qui permet de les regrouper. Pour n'exécuter aucune instruction, on pourra utiliser [l'instruction vide](/fr/docs/Web/JavaScript/Reference/Statements/Empty).
- `statement2`
  - : Si la clause `else` existe, l'instruction qui est exécutée si la `condition` est évaluée à `false`. Comme pour la première, cette instruction peut être n'importe quelle instruction valide : une autre instruction `if` imbriquée, un bloc d'instruction, une instruction vide, etc.

## Description

Plusieurs instructions `if...else` peuvent être imbriquées afin de créer une structure `else if` (on notera qu'il n'y a pas de mot-clé `elseif` en JavaScript).

```js
if (condition1)
  instruction1
else if (condition2)
  instruction2
else if (condition3)
  instruction3
...
else
  instructionN
```

Si on indente correctement le code, on retrouve la structure exactement équivalente :

```js
if (condition1)
  instruction1
else
  if (condition2)
    instruction2
  else
    if (condition3)
...
```

Afin d'exécuter plusieurs instructions, on utilisera un {{jsxref("Statements/block","bloc d'instructions","",1)}} (`{ ... }`) pour regrouper les instructions souhaitées. Utiliser les blocs d'instructions est une bonne façon d'organiser son code, surtout lorsque celui-ci comporte des instructions conditionnelles imbriquées.

```js
if (condition) {
  instructions1
} else {
  instructions2
}
```

Attention à ne pas confondre les valeurs booléennes « primitives » `true` et `false` avec les valeurs true et false d'un objet [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean). Toute valeur qui n'est pas `false`, [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null), `0`, `-0`, [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) ou la chaîne vide (`""`), et tout objet, y compris un objet `Boolean` dont la valeur est `false`, seront évalués à `true` lors d'une instruction conditionnelle `if`. Ainsi :

```js
var b = new Boolean(false);
if (b) // la condition sera évaluée à true
```

## Exemples

### Utiliser `if...else`

```js
if (cipher_char == from_char) {
  result = result + to_char;
  x++;
} else {
  result = result + clear_char;
}
```

### Utiliser `else if`

Bien qu'il n'y ait pas de mot-clé elseif dans le langage JavaScript, il est possible d'imbriquer des instructions if...else à la suite les une des autres en plaçant un espace entre else et le début de l'instruction if imbriquée :

```js
if (x > 50){
  // faire quelque chose
} else if (x > 5) {
  // faire autre chose
} else {
  // faire encore autre chose
}
```

### Affectation de variable dans l'expression conditionnelle

Il est conseillé de ne pas utiliser d'affectation au sein des expressions conditionnelles. En effet, l'affectation peut être confondue avec un test d'égalité lorsqu'on analyse le code. Il ne faut donc pas utiliser le code suivant (bien qu'il fonctionne) :

```js example-bad
if (x = y) {
  /* exécuter les instructions */
}
```

S'il est nécessaire d'effectuer une telle affectation, une pratique courante consiste à ajouter des parenthèses de cette manière afin d'alerter le lecteur du code (exemple à utiliser) :

```js example-good
if ((x = y)) {
  /* exécuter les instructions */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [block](/fr/docs/JavaScript/Reference/Statements/block)
- [switch](/fr/docs/JavaScript/Reference/Statements/switch)
- [L'opérateur conditionnel](/fr/docs/JavaScript/Reference/Operators/Conditional_Operator)
