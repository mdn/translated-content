---
title: ReferenceError
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError
---

{{JSRef}}

L'objet **`ReferenceError`** représente une erreur qui se produit lorsqu'il fait référence à une variable qui n'existe pas (ou qui n'a pas encore été initialisée) dans la portée courante.

## Constructeur

- [`ReferenceError()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError/ReferenceError)
  - : Crée un nouvel objet `ReferenceError`.

## Propriétés des instances

- [`ReferenceError.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
  - : Le message d'erreur.
- [`ReferenceError.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/name)
  - : Le nom d'erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`ReferenceError.prototype.fileName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName)
  - : Le chemin du fichier qui a déclenché cette erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`ReferenceError.prototype.lineNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber)
  - : Le numéro de la ligne du fichier qui a déclenché cette erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`ReferenceError.prototype.columnNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber)
  - : Le numéro de colonne dans la ligne du fichier qui a déclenché cette erreur. Hérité depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).
- [`ReferenceError.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack)
  - : La pile d'appels. Héritée depuis [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error).

## Exemples

### Intercepter une exception `ReferenceError`

```js
try {
  let a = variableNonDefinie;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "variableNonDefinie is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 6
  console.log(e.stack); // "@Scratchpad/2:2:7\n"
}
```

### Créer une exception `ReferenceError`

```js
try {
  throw new ReferenceError("Bonjour", "unFichier.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Bonjour"
  console.log(e.name); // "ReferenceError"
  console.log(e.fileName); // "unFichier.js"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // "@Scratchpad/2:2:9\n"
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
