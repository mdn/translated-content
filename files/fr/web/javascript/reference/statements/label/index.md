---
title: label
slug: Web/JavaScript/Reference/Statements/label
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/label
original_slug: Web/JavaScript/Reference/Instructions/label
---
{{jsSidebar("Statements")}}

Une **instruction étiquetée (_labeled_ en anglais)** peut être utilisée avec les instructions {{jsxref("Instructions/break", "break")}} ou {{jsxref("Instructions/continue", "continue")}}. Un label permet d'identifier une instruction avec un identifiant pour y faire référence plus tard.

{{EmbedInteractiveExample("pages/js/statement-label.html")}}

> **Note :** Les boucles ou les blocs étiquetés sont très rares et on peut généralement utiliser des appels de fonction plutôt que des sauts de boucle.

## Syntaxe

```js
label :
    instruction
```

- `label`
  - : N'importe quel identifiant JavaScript qui n'est pas un mot-clé réservé.
- `instruction`
  - : Une instruction. `break` peut être utilisé avec n'importe quelle instruction identifiée. `continue` ne peut être utilisé qu'avec des instructions de boucle.

## Description

Une étiquette (_label_) peut être utilisée pour identifier une boucle et pour y faire référence à l'intérieur en utilisant les instructions `break` ou `continue` afin d'interrompre cette boucle ou de reprendre son exécution.

JavaScript _ne possède pas_ d'instruction `goto`, les étiquettes ne peuvent être utilisées que par les instructions `break` ou `continue`.

En [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), on ne peut pas utiliser `let` comme étiquette, cela lèvera une exception {{jsxref("SyntaxError")}} (`let` est un identifiant réservé).

## Exemples

### Faire référence à une étiquette avec `continue` dans une boucle

```js
var i, j;

boucle1:
for (i = 0; i < 3; i++) {      //Le premier for correspond à "boucle1"
   boucle2:
   for (j = 0; j < 3; j++) {   //Le second for correspond à "boucle2"
      if (i === 1 && j === 1) {
         continue boucle1;
      } else {
         console.log("i = " + i + ", j = " + j);
      }
   }
}

// On aura les résultats suivants :
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// On voit bien l'absence de "i = 1, j = 1" et "i = 1, j = 2"
```

### Second exemple utilisant `continue`

Étant donné un tableau d'élément et un tableau de tests, cet exemple donne le nombre d'éléments qui ont réussi tous les tests.

```js
var nbItemsReussis = 0;
var i, j;

top:
for (i = 0; i < items.length; i++){
  for (j = 0; j < tests.length; j++){
    if (!tests[j].reussi(items[i])){
      continue top;
    }
  }
  nbItemsReussis++;
}
```

### Utiliser `break` avec une étiquette au sein d'une boucle `for`

```js
var i, j;

boucle1:
for (i = 0; i < 3; i++) { // première boucle étiquetée « boucle1 »
  boucle2:
  for (j =0; j < 3; j++) { // seconde boucle étiquetée « boucle2 »
    if (i == 1 && j == 1) {
      break boucle1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Ce qui produira en sortie
// (dans la console)
// "i = 0, j = 0"
// "i = 0, j = 1"
// "i = 0, j = 2"
// "i = 1, j = 0"
// Ici on voit la différence avec l'exemple précédent utilisant continue
```

### Second exemple utilisant un label et `break`

Étant donné un tableau d'éléments et un tableau de tests, cet exemple permet de déterminer si oui ou non tous les éléments ont réussis tous les tests.

```js
var toutReussi = true;
var i, j;

top:
for (i = 0; items.length; i++)
  for (j = 0; j < tests.length; i++)
    if (!tests[j].reusi(items[i])){
      toutReussi = false;
      break top;
    }
```

### Utilise un bloc étiqueté avec `break`

On peut utiliser des étiquettes dans des blocs simples mais seul `break` permettra de faire référence à des étiquettes en dehors d'une boucle.

```js
toto: {
  console.log("face");
  break toto;
  console.log("this will not be executed");
}
console.log("swap");

// On aura alors dans la console :

// "face"
// "swap 
```

### Déclarations de fonctions étiquetées

À partir d'ECMAScript 2015, les déclarations de fonctions étiquetées sont standardisées pour du code non-strict [au sein de l'annexe de la spécification relative à la compatibilité web](http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations).

```js
L: function F() {}
```

En revanche, en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), cela lèvera une exception {{jsxref("SyntaxError")}}:

```js
"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled
```

[Les fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Instructions/function*) ne peuvent pas être étiquetées, en mode strict, comme en mode non-strict :

```js
L: function* F() {}
// SyntaxError: generator functions cannot be labelled
```

## Spécifications

| Spécification                                                                                    | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                         | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-12.12', 'Labelled statement')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-labelled-statements', 'Labelled statement')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-labelled-statements', 'Labelled statement')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.statements.label")}}

## Voir aussi

- {{jsxref("Instructions/break", "break")}}
- {{jsxref("Instructions/continue", "continue")}}
