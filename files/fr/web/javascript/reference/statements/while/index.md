---
title: while
slug: Web/JavaScript/Reference/Statements/while
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/while
original_slug: Web/JavaScript/Reference/Instructions/while
---
{{jsSidebar("Statements")}}

L'instruction **`while`** permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée. La condition est évaluée avant d'exécuter l'instruction contenue dans la boucle.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntaxe

    while (condition) instruction

- `condition`
  - : Une expression qui est évaluée avant chaque passage dans la boucle. Si cette expression est évaluée à vrai, `instruction` est exécutée. Lorsque la condition n'est pas vérifiée, l'exécution se poursuit avec l'instruction qui suit la boucle `while`.
- `instruction`
  - : Une instruction optionnelle qui doit être exécutée tant que la condition d'entrée est vérifiée. Afin d'exécuter plusieurs instructions au sein de la boucle, on utilisera généralement un {{jsxref("Instructions/bloc","bloc d'instructions","",1)}} (`{ ... }`) pour les regrouper.
    Note : on pourra utiliser l'instruction [`break`](/fr/docs/Web/JavaScript/Reference/Instructions/break) afin d'arrêter une boucle avant que la condition soit vérifiée.

## Exemples

La boucle `while` qui suit s'exécute tant que `n` est strictement inférieur à 3.

```js
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

À chaque itération, la boucle incrémente la valeur de `n` et l'ajoute à `x`. Ainsi, `x` et `n` prennent les valeurs suivantes :

- Après la première itération : `n` = 1 et `x` = 1
- Après la deuxième itération : `n` = 2 et `x` = 3
- Après la troisième itération : `n` = 3 et `x` = 6

Une fois que la troisième itération est exécutée, la condition `n` < 3 n'est plus vérifiée et donc la boucle se termine.

## Spécifications

| Spécification                                                                            | Statut                       | Commentaires        |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ESDraft', '#sec-while-statement', 'while statement')}} | {{Spec2('ESDraft')}} |                     |
| {{SpecName('ES6', '#sec-while-statement', 'while statement')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ES5.1', '#sec-12.6.2', 'while statement')}}                 | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES3', '#sec-12.6.2', 'while statement')}}                 | {{Spec2('ES3')}}         |                     |
| {{SpecName('ES1', '#sec-12.6.1', 'while statement')}}                 | {{Spec2('ES1')}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("javascript.statements.while")}}

## Voir aussi

- {{jsxref("Instructions/do...while","do...while")}}
- {{jsxref("Instructions/for", "for")}}
