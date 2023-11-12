---
title: for
slug: Web/JavaScript/Reference/Statements/for
---

{{jsSidebar("Statements")}}

L'instruction **`for`** crée une boucle composée de trois expressions optionnelles séparées par des points-virgules et encadrées entre des parenthèses qui sont suivies par une instruction (généralement [une instruction de bloc](/fr/docs/Web/JavaScript/Reference/Instructions/bloc)) à exécuter dans la boucle.

{{EmbedInteractiveExample("pages/js/statement-for.html")}}

## Syntaxe

```js
for ([initialisation]; [condition]; [expression_finale]) instruction;
```

### Paramètres

- `initialisation`
  - : Une expression (pouvant être une expression d'affectation) ou une déclaration de variable. Cette expression est évaluée une fois avant que la boucle démarre. On utilise généralement une variable qui agit comme un compteur. Cette expression peut éventuellement déclarer de nouvelles variables avec le mot-clé `var` ou `let`. Les variables déclarées avec `var` se situent dans la même portée que la boucle `for` (elles ne sont pas locales au sein de la boucle), les variables déclarées avec `let` sont locales à la boucle. Le résultat de l'expression n'est pas utilisé.
- `condition`
  - : Une expression qui est évaluée avant chaque itération de la boucle. Si cette expression est vérifiée, l'`instruction` est exécutée. Ce test est optionnel. S'il n'est pas présent, la condition sera toujours vérifiée. Si l'expression n'est pas vérifiée (i.e. vaut `false`), l'exécution se poursuivra à la première expression qui suit la boucle `for`.
- `expression_finale`
  - : Une expression qui est évaluée à la fin de chaque itération. Cela se produit avant l'évaluation de l'expression `condition`. Cette expression est généralement utilisée pour mettre à jour ou incrémenter le compteur qu'est la variable d'initialisation.
- `instruction`
  - : Une instruction qui est exécutée tant que la condition de la boucle est vérifiée. Afin d'exécuter plusieurs instructions au sein d'une telle boucle, il faudra utiliser une instruction de [bloc](/fr/docs/JavaScript/Rérence_JavaScript/Instructions/block) (`{ ... }`) qui regroupera ces différentes instructions.

## Exemples

### Utiliser `for`

L'instruction `for` qui suit débute en déclarant la variable `i` et en l'initialisant à 0. Elle vérifie que `i` est inférieur (strictement) à 9 et exécute ensuite les deux instructions contenues dans la boucle, ensuite elle incrémente `i` de 1, ce qui sera fait à chaque passage dans la boucle.

```js
for (var i = 0; i < 9; i++) {
  n += i;
  myfunc(n);
}
```

### Expressions optionnelles pour `for`

Les trois expressions qui composent l'instruction `for` sont optionnelles :

Par exemple, le bloc pour l'initialisation peut ne pas être utilisé :

```js
var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // d'autres instructions
}
```

De même que pour le bloc d'initialisation, l'expression de condition est optionnelle. Attention, si l'expression de condition n'est pas utilisée, il faut s'assurer d'interrompre la boucle et de ne pas créer une boucle infinie.

```js
for (var i = 0; ; i++) {
  console.log(i);
  if (i > 3) break;
  // d'autres instructions
}
```

Les trois blocs d'expressions peuvent être omis. Encore une fois, il faudra utiliser une instruction {{jsxref("Instructions/break")}} pour terminer la boucle. Si le test se fait sur un seuil, on veillera à incrémenter la variable pour que la condition d'arrêt modifiée soit respectée.

```js
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

### Utiliser `for` avec une instruction vide

L'instruction `for` qui suit calcule le décalage d'un nœud et le fait dans la section qui correspond à l'expression finale. Il n'y a donc aucun intérêt à ajouter une instruction ou un bloc d'instruction dans la boucle pour faire ce calcul.

```js
function showOffsetPos(sId) {
  var nLeft = 0,
    nTop = 0;

  for (
    var oItNode = document.getElementById(sId);
    oItNode;
    nLeft += oItNode.offsetLeft,
      nTop += oItNode.offsetTop,
      oItNode = oItNode.offsetParent
  );

  console.log(
    'Décalage de position : "' +
      sId +
      '" element:\n left: ' +
      nLeft +
      "px;\n top: " +
      nTop +
      "px;",
  );
}
```

> **Note :** Dans cas, où on n'utilise pas la section d'instruction, **il faut mettre un point-virgule immédiatement après la déclaration de la boucle.**

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Instructions/break", "break")}}
- {{jsxref("Instructions/continue", "continue")}}
- {{jsxref("Instructions/vide", "Instruction vide","",1)}}
- {{jsxref("Instructions/while", "while")}}
- {{jsxref("Instructions/do...while", "do...while")}}
- {{jsxref("Instructions/for...in", "for...in")}}
- {{jsxref("Instructions/for...of", "for...of")}}
