---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
---

{{jsSidebar("Statements")}}

L'instruction **`do...while`** crée une boucle qui exécute une instruction jusqu'à ce qu'une condition de test ne soit plus vérifiée. La condition est testée après que l'instruction soit exécutée, le bloc d'instructions défini dans la boucle est donc exécuté au moins une fois.

{{EmbedInteractiveExample("pages/js/statement-dowhile.html")}}

## Syntaxe

```js
do instruction;
while (condition);
```

- `instruction`
  - : Une instruction exécutée au moins une fois et ré-exécutée chaque fois que la condition de test est évaluée à `true`. On peut exécuter plusieurs instructions au sein d'une boucle grâce à l'instruction {{jsxref("Instructions/block", "block")}} (`{ ... }`) qui permet de grouper différentes instructions en une seule.
- `condition`
  - : Une expression évaluée après chaque passage dans la boucle. Si l'évaluation de la `condition` donne `true` (la condition est vérifiée), `instruction` sera exécutée à nouveau. Lorsque `condition` donne `false`, le contrôle passe à l'instruction suivant la boucle `do...while`.

## Exemples

### Utiliser `do...while`

Dans l'exemple suivant, la boucle `do...while` est parcourue au moins une fois et répétée jusqu'à ce que `i` ne soit plus strictement inférieur à 5.

```js
var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Instructions/while", "while")}}
- {{jsxref("Instructions/for", "for")}}
