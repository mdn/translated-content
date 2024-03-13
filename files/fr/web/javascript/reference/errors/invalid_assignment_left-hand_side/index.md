---
title: "ReferenceError: invalid assignment left-hand side"
slug: Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side
---

{{jsSidebar("Errors")}}

## Message

```
ReferenceError: invalid assignment left-hand side
```

## Type d'erreur

{{jsxref("ReferenceError")}}.

## Quel est le problème ?

Un affectation inattendue a eu lieu. Cela peut être dû à un mélange entre [un opérateur d'affectation](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation) et [un opérateur de comparaison](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison). Un seul signe égal affectera une valeur à une variable alors que les opérateurs `==` ou `===` comparent des valeurs entre elles.

## Exemples

```js example-bad
if (Math.PI = 3 || Math.PI = 4) {
  console.log('Nope !');
}
// ReferenceError: invalid assignment left-hand side

var str = 'Hello, '
+= 'is it me '
+= 'you\'re looking for?';
// ReferenceError: invalid assignment left-hand side
```

Dans l'instruction `if`, plutôt qu'une affectation, on voudra plutôt utiliser un opérateur `==` ou `===` et l'opérateur de concaténation (+) à la place pour la chaîne.

```js example-good
if (Math.PI == 3 || Math.PI == 4) {
  console.log("no way!");
}

var str = "Hello, " + "from the " + "other side!";
```

## Voir aussi

- [Opérateurs d'affectation](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation)
- [Opérateurs de comparaison](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison)
