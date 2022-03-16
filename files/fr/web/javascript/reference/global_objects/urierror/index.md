---
title: URIError
slug: Web/JavaScript/Reference/Global_Objects/URIError
translation_of: Web/JavaScript/Reference/Global_Objects/URIError
original_slug: Web/JavaScript/Reference/Objets_globaux/URIError
browser-compat: javascript.builtins.URIError
---
{{JSRef}}

L'objet **`URIError`** représente une erreur renvoyée lorsqu'une fonction de manipulation d'URI a été utilisée de façon inappropriée.

## Constructeur

- [`URIError()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/URIError/URIError)
  - : Crée un nouvel objet `URIError`.

## Propriétés des instances

- [`URIError.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
  - : Le message d'erreur.
- [`URIError.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/name)
  - : Le nom de l'erreur. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`URIError.prototype.fileName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)
  - : Le chemin du fichier qui a déclenché l'erreur. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`URIError.prototype.lineNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)
  - : Le numéro de la ligne dans le fichier qui a déclenché l'erreur. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`URIError.prototype.columnNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber)
  - : Le numéro de la colonne dans la ligne du fichier qui a déclenché l'erreur. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`URIError.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack)
  - : La pile d'appel. Héritée de [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).

## Exemples

### Intercepter une exception `URIError`

```js
try {
  decodeURIComponent('%')
} catch (e) {
  console.log(e instanceof URIError)  // true
  console.log(e.message)              // "malformed URI sequence"
  console.log(e.name)                 // "URIError"
  console.log(e.fileName)             // "Scratchpad/1"
  console.log(e.lineNumber)           // 2
  console.log(e.columnNumber)         // 2
  console.log(e.stack)                // "@Scratchpad/2:2:3\n"
}
```

### Créer une instance de `URIError`

```js
try {
  throw new URIError('Coucou', 'unFichier.js', 10)
} catch (e) {
  console.log(e instanceof URIError)  // true
  console.log(e.message)              // "Coucou"
  console.log(e.name)                 // "URIError"
  console.log(e.fileName)             // "unFichier.js"
  console.log(e.lineNumber)           // 10
  console.log(e.columnNumber)         // 0
  console.log(e.stack)                // "@Scratchpad/2:2:9\n"
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`decodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)
- [`decodeURIComponent()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
- [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
- [`encodeURIComponent()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
