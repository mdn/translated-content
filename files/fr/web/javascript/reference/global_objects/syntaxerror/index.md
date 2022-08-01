---
title: SyntaxError
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError
translation_of: Web/JavaScript/Reference/Global_Objects/SyntaxError
original_slug: Web/JavaScript/Reference/Objets_globaux/SyntaxError
browser-compat: javascript.builtins.SyntaxError
---
{{JSRef}}

L'objet **`SyntaxError`** représente une erreur qui se produit lors de l'interprétation d'un code dont la syntaxe est invalide. Une telle exception est déclenchée lorsque le moteur JavaScript rencontre des entités lexicales invalides ou dans un ordre invalide par rapport à la grammaire du langage.

## Constructeur

- [`SyntaxError()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError)
  - : Crée un nouvel objet `SyntaxError`.

## Propriétés des instances

- [`SyntaxError.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
  - : Le message d'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`SyntaxError.prototype.fileName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)
  - : Le chemin du fichier qui a déclenché l'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`SyntaxError.prototype.lineNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)
  - : Le numéro de ligne dans le fichier qui a déclenché l'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`SyntaxError.prototype.columnNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber)
  - : Le numéro de colonne de la ligne du fichier qui a déclenché l'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`SyntaxError.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack)
  - : La pile d'appels. Héritée depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).

## Exemples

### Intercepter une exception `SyntaxError`

```js
try {
  eval('toto truc');
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "missing ; before statement"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "Scratchpad/1"
  console.log(e.lineNumber);             // 1
  console.log(e.columnNumber);           // 4
  console.log(e.stack);                  // "@Scratchpad/1:2:3\n"
}
```

### Créer une exception `SyntaxError`

```js
try {
  throw new SyntaxError('Coucou', 'unFichier.js', 10);
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);                // "Coucou"
  console.log(e.name);                   // "SyntaxError"
  console.log(e.fileName);               // "unFichier.js"
  console.log(e.lineNumber);             // 10
  console.log(e.columnNumber);           // 0
  console.log(e.stack);                  // "@Scratchpad/2:11:9\n"
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
