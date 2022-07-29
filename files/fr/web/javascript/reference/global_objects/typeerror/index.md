---
title: TypeError
slug: Web/JavaScript/Reference/Global_Objects/TypeError
translation_of: Web/JavaScript/Reference/Global_Objects/TypeError
original_slug: Web/JavaScript/Reference/Objets_globaux/TypeError
browser-compat: javascript.builtins.TypeError
---
{{JSRef}}

Un objet **`TypeError`** représente une erreur qui se produit généralement (mais pas toujours) lorsqu'une opération n'a pu avoir lieu parce qu'une valeur n'a pas le type attendu.

Une exception `TypeError` peut être levée lorsque&nbsp;:

- Un opérande ou un argument passé à une fonction est incompatible avec le type attendu par l'opérateur ou la fonction
- On tente de modifier une valeur qui ne peut pas être changée
- On tente d'utiliser une valeur de façon inappropriée.

## Constructeur

- [`TypeError()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError/TypeError)
  - : Crée un nouvel objet `TypeError`.

## Propriétés des instances

- [`TypeError.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
  - : Le message d'erreur.
- [`TypeError.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/name)
  - : Le nom de l'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`TypeError.prototype.fileName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)
  - : Le chemin du fichier qui a déclenché l'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`TypeError.prototype.lineNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)
  - : Le numéro de la ligne du fichier qui a déclenché l'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`TypeError.prototype.columnNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber)
  - : Le numéro de colonne de la ligne du fichier qui a déclenché l'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`TypeError.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack)
  - : La pile d'appels. Héritée depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).

## Exemples

### Intercepter une exception `TypeError`

```js
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError);  // true
  console.log(e.message);               // "null has no properties"
  console.log(e.name);                  // "TypeError"
  console.log(e.fileName);              // "Scratchpad/1"
  console.log(e.lineNumber);            // 2
  console.log(e.columnNumber);          // 2
  console.log(e.stack);                 // "@Scratchpad/2:2:3\n"
}
```

### Créer une exception `TypeError`

```js
try {
  throw new TypeError('Coucou', 'unFichier.js', 10);
} catch (e) {
  console.log(e instanceof TypeError);  // true
  console.log(e.message);               // "Coucou"
  console.log(e.name);                  // "TypeError"
  console.log(e.fileName);              // "unFichier.js"
  console.log(e.lineNumber);            // 10
  console.log(e.columnNumber);          // 0
  console.log(e.stack);                 // "@Scratchpad/2:2:9\n"
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
