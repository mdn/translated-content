---
title: if…else
slug: Web/JavaScript/Reference/Statements/if...else
l10n:
  sourceCommit: 62b2885cf645395c39081f8ffa8f6023d7d1bc0b
---

{{jsSidebar("Statements")}}

L'instruction **`if…else`** exécute une instruction si une condition donnée est [équivalente à vrai](/fr/docs/Glossary/Truthy). Si la condition est [équivalente à faux](/fr/docs/Glossary/Falsy), ce sera l'instruction de la clause optionnelle `else` qui sera exécutée.

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## Syntaxe

```js-nolint
if (condition)
  instruction1

// Avec une clause else
if (condition)
  instruction1
else
  instruction2
```

- `condition`
  - : Une [expression](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators) qui sera évaluée pour déterminer si elle est [équivalente à vrai (<i lang="en">truthy</i> en anglais)](/fr/docs/Glossary/Truthy) ou [équivalente à faux (<i lang="en">falsy</i> en anglais)](/fr/docs/Glossary/Falsy).
- `instruction1`
  - : L'instruction qui est exécutée si la condition est équivalente à vrai. Cette instruction peut être n'importe quelle instruction valide, y compris une imbrication d'autres instructions `if`. Pour exécuter plusieurs instructions, on pourra utiliser un [bloc d'instructions (`{ /* … */ }`)](/fr/docs/Web/JavaScript/Reference/Statements/block) qui permet de les regrouper. Pour n'exécuter aucune instruction, on pourra utiliser [l'instruction vide](/fr/docs/Web/JavaScript/Reference/Statements/Empty).
- `instruction2`
  - : Si la clause `else` existe, ce sera l'instruction qui est exécutée si la condition est équivalente à faux. Comme pour la première, cette instruction peut être n'importe quelle instruction valide&nbsp;: une autre instruction `if` imbriquée, un bloc d'instruction, une instruction vide, etc.

## Description

Plusieurs instructions `if…else` peuvent être imbriquées afin de créer une structure `else if` (on notera qu'il n'y a pas de mot-clé `elseif` en JavaScript).

```js-nolint
if (condition1)
  instruction1
else if (condition2)
  instruction2
else if (condition3)
  instruction3
// …
else
  instructionN
```

Si on indente correctement le code, on retrouve la structure exactement équivalente&nbsp;:

```js-nolint
if (condition1)
  instruction1
else
  if (condition2)
    instruction2
  else
    if (condition3)
      instruction3
// …
```

Afin d'exécuter plusieurs instructions, on utilisera un [bloc d'instructions (`{ /* … */ }`)](/fr/docs/Web/JavaScript/Reference/Statements/block) pour regrouper les instructions souhaitées.

```js-nolint
if (condition) {
  instructions1;
} else {
  instructions2;
}
```

Ne pas utiliser de blocs d'instructions pourra causer des comportements déroutants, notamment si le code est formaté à la main. Prenons le fragment de code qui suit par exemple&nbsp;:

```js-nolint example-bad
function verifierValeur(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a vaut 1 et b vaut 2");
  else
    console.log("a ne vaut pas 1");
}
```

Ce code semble relativement innocent. Toutefois, si on exécute `verifierValeur(1, 3)`, la console affichera "a ne vaut pas 1". En effet, la clause `else` sera connectée à la clause `if` la plus proche. Autrement dit, si le code ci-avant avait été correctement indenté, on aurait eu&nbsp;:

```js-nolint
function verifierValeur(a, b) {
  if (a === 1)
    if (b === 2)
      console.log("a vaut 1 et b vaut 2");
    else
      console.log("a ne vaut pas 1");
}
```

> **Note :** On appelle ceci [le problème du <i lang="en">dangling else</i>](https://fr.wikipedia.org/wiki/Dangling_else).

De manière générale, c'est une bonne pratique que de toujours utiliser des blocs d'instructions, notamment si le code implique plusieurs `if` imbriqués.

```js example-good
function verifierValeur(a, b) {
  if (a === 1) {
    if (b === 2) {
      console.log("a vaut 1 et b vaut 2");
    }
  } else {
    console.log("a ne vaut pas 1");
  }
}
```

Attention à ne pas confondre les valeurs booléennes primitives `true` et `false` avec les valeurs construites avec un objet [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean) (par exemple `Boolean(false)` et `Boolean(true)`). Toute valeur qui n'est pas `false`, [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined), [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null), `0`, `-0`, [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) ou la chaîne vide (`""`), et tout objet, y compris un objet `Boolean` dont la valeur est `false`, seront considérés comme équivalent à `true` dans une instruction conditionnelle `if`. Ainsi&nbsp;:

```js
const b = new Boolean(false);
if (b) {
  console.log("b est équivalent à vrai"); // "b est équivalent à vrai"
}
```

## Exemples

### Utiliser `if…else`

```js
if (toto === titi) {
  resultat += increment;
  compteur++;
} else {
  resultat += increment;
}
```

### Utiliser `else if`

Bien qu'il n'y ait pas de mot-clé `elseif` en JavaScript, il est possible d'imbriquer des instructions `if…else` à la suite les unes des autres en plaçant un espace entre `else` et le début de l'instruction `if` imbriquée&nbsp;:

```js
if (x > 50) {
  // faire quelque chose
} else if (x > 5) {
  // faire autre chose
} else {
  // faire encore autre chose
}
```

### Affectation de variable dans l'expression conditionnelle

Il est conseillé de ne pas utiliser d'affectation au sein des expressions conditionnelles. En effet, l'affectation peut être confondue avec un test d'égalité lorsqu'on analyse le code. Il ne faut donc pas utiliser le code suivant (bien qu'il fonctionne)&nbsp;:

```js-nolint example-bad
if (x = y) {
  // faire quelque chose
}
```

Si vous devez affecter une variable de cette façon, [la documentation sur l'instruction `while`](/fr/docs/Web/JavaScript/Reference/Statements/while) contient une section sur [l'affectation dans une condition](/fr/docs/Web/JavaScript/Reference/Statements/while#attention_aux_affectations_dans_les_conditions) et un exemple de la syntaxe à privilégier dans ces cas.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Bloc d'instructions (`{ /* … */ }`)](/fr/docs/Web/JavaScript/Reference/Statements/block)
- [`switch`](/fr/docs/JavaScript/Reference/Statements/switch)
- [L'opérateur conditionnel](/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator)
