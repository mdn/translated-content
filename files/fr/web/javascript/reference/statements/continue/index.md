---
title: continue
slug: Web/JavaScript/Reference/Statements/continue
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/continue
original_slug: Web/JavaScript/Reference/Instructions/continue
---
{{jsSidebar("Statements")}}

L'instruction **`continue`** arrête l'exécution des instructions pour l'itération de la boucle courante ou de la boucle étiquetée. L'exécution est reprise à l'itération suivante.

{{EmbedInteractiveExample("pages/js/statement-continue.html")}}

## Syntaxe

    continue [ label ];

- `label`
  - : Paramètre optionnel. Un identifiant associé à l'étiquette (_label_) de l'instruction pour laquelle on souhaite finir l'itération en cours.

## Description

Contrairement à {{jsxref("Instructions/break", "break")}}, `continue` ne termine pas la boucle complètement :

- au sein d'une boucle {{jsxref("Instructions/while", "while")}}, elle repart à la phase de la condition.

<!---->

- au sein d'une boucle {{jsxref("Instructions/for", "for")}}, elle repart à l'expression de mise à jour de la boucle.

L'instruction `continue` peut éventuellement contenir une étiquette (_label_) qui permet de tirer parti des instructions de boucles étiquetées (plutôt que de ne traiter que la boucle courante). Dans le cas où l'étiquette est utilisée, il faut que l'instruction `continue` soit imbriquée dans l'instruction étiquetée.

## Exemples

### Utiliser `continue` avec `while`

L'instruction suivante illustre comment on peut utiliser continue au sein d'une boucle {{jsxref("Instructions/while", "while")}}, ici `continue` est utilisé lorsque `i` vaut 3. On a donc `n` qui prend les valeurs 1, 3, 7, et 12.

```js
var i = 0;
var n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
}
```

### Utiliser `continue` avec une étiquette

Dans l'exemple suivant, on a une instruction étiquetée `vérifIetJ` qui contient une autre instruction étiquetée `vérifJ`. Si l'instruction `continue` est utilisée, le programme reprend l'exécution au début de l'instruction `vérifJ`. Chaque fois que `continue` utilisé, `vérifJ` réitère jusqu'à ce que sa condition renvoie `false`. Lorsque c'est le cas, le reste de l'instruction `vérifIetJ` est exécuté.

Si `continue` utilisait l'étiquette `vérifIetJ`, le programme continuerait au début de l'instruction `vérifIetJ`.

Voir aussi {{jsxref("Instructions/label", "label")}}.

```js
var i = 0;
var j = 8;

vérifIetJ: while (i < 4) {
  console.log("i : " + i);
  i += 1;

  vérifJ: while (j > 4) {
    console.log("j : "+ j);
    j -= 1;
    if ((j % 2) == 0){
      continue vérifJ;
    }
    console.log(j + " est impaire.");
   }
   console.log("i = " + i);
   console.log("j = " + j);
}
```

En utilisant le fragment ci-avant, on aura le résultat suivant :

```js
"i : 0"

// début de vérifJ
"j : 8"
"7 est impair"
"j : 7"
"j : 6"
"5 est impair."
"j : 5"
// fin de vérifJ

"i = 1"
"j = 4"

"i : 1"
"i = 2"
"j = 4"

"i : 2"
"i = 3"
"j = 4"

"i : 3"
"i = 4"
"j = 4"
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                   |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------- |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}         | Définition initiale. Pas de version étiquetée. |
| {{SpecName('ES3')}}                                                                             | {{Spec2('ES3')}}         | Ajout de la version étiquetée.                 |
| {{SpecName('ES5.1', '#sec-12.7', 'instruction continue')}}                         | {{Spec2('ES5.1')}}     |                                                |
| {{SpecName('ES6', '#sec-continue-statement', 'instruction continue')}}         | {{Spec2('ES6')}}         |                                                |
| {{SpecName('ESDraft', '#sec-continue-statement', 'instruction continue')}} | {{Spec2('ESDraft')}} |                                                |

## Compatibilité des navigateurs

{{Compat("javascript.statements.continue")}}

## Voir aussi

- {{jsxref("Instructions/break", "break")}}
- {{jsxref("Instructions/label", "label")}}
