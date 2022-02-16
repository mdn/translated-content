---
title: 'SyntaxError: missing ) after condition'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
tags:
  - Erreurs
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
original_slug: Web/JavaScript/Reference/Erreurs/Missing_parenthesis_after_condition
---
{{jsSidebar("Errors")}}

## Message

    SyntaxError: Expected ')' (Edge)
    SyntaxError: missing ) after condition (Firefox)

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Il y a une erreur pour la condition écrite dans l'instruction [`if`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else). Pour chaque langage de programmation, on utilise des instructions pour choisir quel bloc d'instructions exécuter selon les différentes entrées. L'instruction `if` permet d'exécuter une instruction si une condition donnée est vérifiée. En JavaScript, il faut que cette condition apparaisse entre parenthèses après le mot-clé  `if` :

```js
if (condition) {
  // faire quelque chose si la condition est vraie
}
```

## Exemples

Il s'agit peut-être simplement d'une coquille et il suffit alors de vérifier les parenthèses (ou plutôt leur absence) :

```js example-bad
if (3 > Math.PI {
  console.log("Pardon ?");
}

// SyntaxError: missing ) after condition
```

Pour corriger ce fragment de code, on ajoutera une parenthèse pour fermer la condition :

```js example-good
if (3 > Math.PI) {
  console.log("Pardon ?");
}
```

Si vous avez l'habitude d'utiliser un autre langage de programmation, peut-être avez-vous utilisé un mot-clé qui n'existe pas en JavaScript ?

```js example-bad
if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
```

Pour corriger cette erreur, on utilisera [un opérateur de comparaison](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison) correct :

```js example-good
if (done === true) {
 console.log("Et voilà !");
}
```

## Voir aussi

- [`if...else`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else)
- [Les opérateurs de comparaisons](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_de_comparaison)
- [Choisir quel code exécuter : les structures conditionnelles](/fr/docs/Learn/JavaScript/Building_blocks/conditionals)
