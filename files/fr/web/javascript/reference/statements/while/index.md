---
title: while
slug: Web/JavaScript/Reference/Statements/while
l10n:
  sourceCommit: 5e207965797b3672d3c06b65298de551d1eac515
---

{{jsSidebar("Statements")}}

L'instruction **`while`** permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée. La condition est évaluée avant d'exécuter l'instruction contenue dans la boucle.

{{EmbedInteractiveExample("pages/js/statement-while.html")}}

## Syntaxe

```js-nolint
while (condition)
  statement
```

- `condition`
  - : Une expression qui est évaluée avant chaque passage dans la boucle. Si cette expression est [évaluée à vrai](/fr/docs/Glossary/Truthy), `instruction` est exécutée. Lorsque la condition [n'est pas vérifiée](/fr/docs/Glossary/Falsy), l'exécution se poursuit avec l'instruction qui suit la boucle `while`.
- `instruction`
  - : Une instruction optionnelle qui doit être exécutée tant que la condition d'entrée est vérifiée. Afin d'exécuter plusieurs instructions au sein de la boucle, on utilisera généralement un [bloc d'instructions (`{ /* ... */ }`)](/fr/docs/Web/JavaScript/Reference/Statements/block#instruction_de_bloc) pour les regrouper.
    > **Note :** On pourra utiliser l'instruction [`break`](/fr/docs/Web/JavaScript/Reference/Instructions/break) afin d'arrêter une boucle avant que la condition soit vérifiée.

## Exemples

### Utiliser `while`

La boucle `while` qui suit s'exécute tant que `n` est strictement inférieur à 3.

```js
let n = 0;
let x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

À chaque itération, la boucle incrémente la valeur de `n` et l'ajoute à `x`. Ainsi, `x` et `n` prennent les valeurs suivantes&nbsp;:

- Après la première itération&nbsp;: `n` = 1 et `x` = 1
- Après la deuxième itération&nbsp;: `n` = 2 et `x` = 3
- Après la troisième itération&nbsp;: `n` = 3 et `x` = 6

Une fois que la troisième itération est exécutée, la condition `n` < 3 n'est plus vérifiée et donc la boucle se termine.

### Fonction avec itération

Dans la fonction qui suit, on incrémente un compteur grâce à une boucle `while` puis on affiche la valeur atteinte.

```js
const maFonctionAvecWhile = () => {
  let i = 0;
  while (i< 20){
    i++;
  };
  console.log(i);
};
```

Dans l'exemple ci-avant, le code de la boucle s'exécutera encore et encore tant que la variable `i` est inférieure à 20.

**Attention :** Si on oublie d'augmenter la variable utilisée dans la condition, la boucle ne se terminera jamais et cela bloquera le navigateur.

### Attention aux affectations dans les conditions

La condition passée à l'instruction correspond généralement à un test. Si on oublie un signe égal `=`, [un test d'égalité ou de comparaison](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#opérateurs_de_comparaison) peut devenir [une affectation](/fr/docs/Web/JavaScript/Guide/Expressions_and_operators#opérateurs_daffectation) et entraîner un comportement inattendu avec une boucle infinie.

Par exemple, le fragment qui suit causera une boucle infinie&nbsp;:

```js example-bad
const seuil = 14;
let compteur = 0;
while (compteur = seuil) {
  compteur++;
  /* Faire quelque chose avec compteur */
}
```

Ici, il s'agit de corriger le test en utilisant le bon opérateur de comparaison&nbsp;:

```js example-good
const seuil = 14;
let compteur = 0;
while (compteur <= seuil) {
  compteur++;
  /* Faire quelque chose avec compteur */
}
```

Si on veut explicitement utiliser une affectation comme condition pour la boucle `while`, la convention veut d'ajouter une paire de parenthèses autour de l'instruction d'affectation afin d'afficher clairement l'intention&nbsp;:

```js example-good
const iterator = document.createNodeIterator(document, NodeFilter.SHOW_COMMENT);
let currentNode;
while ((currentNode = iterator.nextNode()) !== null) {
  console.log(currentNode.textContent.trim());
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`do...while`](/fr/docs/Web/JavaScript/Reference/Statements/do...while)
- [`for`](/fr/docs/Web/JavaScript/Reference/Statements/for)
- [`break`](/fr/docs/Web/JavaScript/Reference/Statements/break)
- [`continue`](/fr/docs/Web/JavaScript/Reference/Statements/continue)
