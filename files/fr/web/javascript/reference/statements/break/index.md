---
title: break
slug: Web/JavaScript/Reference/Statements/break
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/break
original_slug: Web/JavaScript/Reference/Instructions/break
---
{{jsSidebar("Statements")}}

L'instruction **`break`** permet de terminer la boucle en cours ou l'instruction {{jsxref("Instructions/switch", "switch")}} ou {{jsxref("Instructions/label", "label")}} en cours et de passer le contrôle du programme à l'instruction suivant l'instruction terminée.

{{EmbedInteractiveExample("pages/js/statement-break.html")}}

## Syntaxe

```js
break [label];
```

- `label` {{optional_inline}}
  - : Un identifiant optionnel associé avec l'étiquette (_label_) de l'instruction. Si l'instruction à terminer n'est pas une boucle ou une instruction {{jsxref("Instructions/switch", "switch")}}, ce paramètre est nécessaire.

## Description

L'instruction `break` peut être utilisée avec une étiquette (_label_) optionnelle qui permet d'interrompre une instruction étiquetée. L'instruction `break` doit être imbriquée au sein de l'instruction référencée. L'instruction étiquetée peut correspondre à n'importe quel instruction de {{jsxref("Instructions/bloc", "bloc","",1)}} ; il n'est pas nécessaire qu'elle soit précédée par une instruction de boucle.

Une instruction `break`, suivie ou non d'une étiquette, ne peut pas être utilisée dans le corps d'une fonction appartenant elle-même à une boucle, à une instruction {{jsxref("Instructions/switch")}} ou à une instruction `label`.

## Exemples

### Exemple simple utilisant `break`

La fonction qui suit utilise une instruction `break` qui interrompt la boucle {{jsxref("Instructions/while", "while")}} lorsque `i` vaut 3, grâce à l'instruction qui suit, la fonction renvoie 3 \* `x`.

```js
function testBreak(x) {
   var i = 0;

   while (i < 6) {
      if (i == 3) {
         break;
      }
      i += 1;
   }
   return i * x;
}
```

### Utiliser `break` avec les labels

Dans le code suivant, on utilise les instructions `break` avec des blocs étiquetés. Une instruction `break` doit être présente à l'intérieur du bloc auquel elle fait référence. Ici, on voit que `bloc_interne` est compris dans `bloc_externe`.

```js
bloc_externe: {

  bloc_interne: {
    console.log ('1');
    break bloc_externe;  // interrompt bloc_externe ET bloc_interne
    console.log (':-('); // ignoré
  }

  console.log ('2');     // ignoré
}
```

Dans le code qui suit, on utilise également des instructions `break` avec des blocs étiquetés mais on obtient une exception `SyntaxError` car l'instruction `break` au sein de `bloc_1` référence `bloc_2`, or `bloc_1` n'est pas compris dans `bloc_2` :

```js
bloc_1: {
  console.log ('1');
  break bloc_2;  // SyntaxError: label not found
}

bloc_2: {
  console.log ('2');
}
```

### Utiliser `break` dans des fonctions imbriquées dans des boucles

Dans le cas d'une fonction imbriquée dans une boucle `while` :

```js
function testBreak(x){
  var i = 0;
  while (i < 6) {
    if (i === 3) {
      (function() {
        break;
      })();
    }
    i += 1;
  }
  return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement
```

Dans le cas d'une fonction imbriquée dans une instruction `label` :

```js
bloc_1: {
  console.log('1');
  (function() {
    break bloc_1; // SyntaxError: Undefined label 'bloc_1'
  })();
}
```

## Spécifications

| Spécification                                                                            | Statut                       | Commentaires                                |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------- |
| {{SpecName('ES1')}}                                                                 | {{Spec2('ES1')}}         | Définition initiale. Version non étiquetée. |
| {{SpecName('ES3')}}                                                                 | {{Spec2('ES3')}}         | Version étiquetée ajoutée.                  |
| {{SpecName('ES5.1', '#sec-12.8', 'instruction break')}}                 | {{Spec2('ES5.1')}}     |                                             |
| {{SpecName('ES6', '#sec-break-statement', 'instruction break')}}     | {{Spec2('ES6')}}         |                                             |
| {{SpecName('ESDraft', '#sec-break-statement', 'Break statement')}} | {{Spec2('ESDraft')}} |                                             |

## Compatibilité des navigateurs

{{Compat("javascript.statements.break")}}

## Voir aussi

- {{jsxref("Instructions/continue", "continue")}}
- {{jsxref("Instructions/label", "label")}}
- {{jsxref("Instructions/switch", "switch")}}
