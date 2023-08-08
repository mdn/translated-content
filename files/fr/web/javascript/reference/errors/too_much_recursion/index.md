---
title: "InternalError: too much recursion"
slug: Web/JavaScript/Reference/Errors/Too_much_recursion
---

{{jsSidebar("Errors")}}

## Message

```
Error: Out of stack space (Edge)
InternalError: too much recursion (Firefox)
RangeError: Maximum call stack size exceeded (Chrome)
```

## Type d'erreur

{{jsxref("InternalError")}}.

## Quel est le problème ?

Une fonction qui s'appelle elle-même est une fonction _recursive_. Lorsqu'une certaine condition est respectée, la fonction arrête de s'appeler elle-même, c'est ce qu'on appelle le cas initial.

D'une certaine façon, une récursion est semblable à une boucle. Les deux exécutent le même code plusieurs fois, et les deux ont besoin d'une condition d'arrêt afin d'éviter une boucle infinie ou une récursion infinie. Lorsqu'il y a trop de niveaux de récursion ou une récursion infinie, JavaScript lèvera cette erreur.

## Exemples

Cette fonction récursive est exécutée 10 fois comme l'indique la condition de sortie :

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" is the exit condition
    return;
  }
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Si la condition d'arrêt est beaucoup trop grande, cela ne fonctionnera pas :

```js example-bad
function loop(x) {
  if (x >= 1000000000000) {
    return;
  }
  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

Si la fonction récursive ne possède pas de cas initial, il n'y aura pas de condition de sortie et la fonction continuera de s'appeler indéfiniment.

```js example-bad
function boucle(x) {
  boucle(x + 1);
  // il n'y a pas de cas initial
}

boucle(0);
```

## Voir aussi

- {{Glossary("Récursion")}}
- [Les fonctions récursives](/fr/docs/Web/JavaScript/Guide/Fonctions#La_récursivité)
