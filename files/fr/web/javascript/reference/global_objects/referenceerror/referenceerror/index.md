---
title: Constructeur ReferenceError()
slug: Web/JavaScript/Reference/Global_Objects/ReferenceError/ReferenceError
---

{{JSRef}}

Le constructeur **`ReferenceError()`** permet de créer des objets représentant une erreur qui se produit lorsque le code fait référence à une variable qui n'existe pas.

## Syntaxe

```js
new ReferenceError();
new ReferenceError(message);
new ReferenceError(message, nomFichier);
new ReferenceError(message, nomFichier, numeroLigne);
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description de l'erreur, compréhensible par un humain.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier contenant le code qui a déclenché l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne du code qui a déclenché l'exception.

## Exemples

### Intercepter une exception `ReferenceError`

```js
try {
  let a = variableIndefinie;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "variableIndefinie is not defined"
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
  throw new ReferenceError("Coucou", "unFichier.js", 10);
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Coucou"
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
