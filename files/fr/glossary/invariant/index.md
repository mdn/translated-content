---
title: Invariant
slug: Glossary/Invariant
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En sémantique de programme, un **invariant** d'un morceau de code est une condition qui est prouvée vraie tout au long de l'exécution de ce code. Définir des invariants aide à raisonner sur la correction et le comportement du code.

Par exemple, dans le code suivant&nbsp;:

```js
let count = 0;
while (hasMessages()) {
  count++;
  processMessage();
}
```

On peut prouver que `count` est un entier non négatif du début à la fin. Cela signifie que, n'importe où dans le code, on peut passer `count` à une fonction qui attend un entier non négatif, et la fonction fonctionnera correctement.

Les invariants peuvent être établis de deux manières&nbsp;: par la nature du programme, ou par des assertions explicites (vérifications à l'exécution). Par exemple, le code ci-dessus n'effectue aucune vérification, mais du fait que `count` est un entier incrémenté à partir de `0`, on peut garantir sa plage de valeurs. Si l'on reçoit une entrée d'une source externe, on peut utiliser des vérifications pour établir des invariants à la frontière&nbsp;:

```js
function processInput(input) {
  if (input < 0 || !Number.isInteger(input)) {
    throw new Error("L'entrée doit être un entier positif");
  }
  // Traiter l'entrée…
}
```

Les invariants sont particulièrement utiles dans les systèmes complexes qui ne peuvent pas se permettre d'effectuer des vérifications exhaustives à chaque étape. On établit les invariants à la frontière du système, puis tout le code qui suit peut supposer ces propriétés sans avoir à les vérifier de nouveau.

De manière générale, tout ce qui peut être supposé vrai est un invariant. Par exemple, une spécification peut laisser une fonctionnalité comme étant définie par l'implémentation mais avec certains invariants, ce qui signifie que ces propriétés seront toujours vraies quel que soit le comportement exact.
