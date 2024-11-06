---
title: Constructeur URIError()
slug: Web/JavaScript/Reference/Global_Objects/URIError/URIError
---

{{JSRef}}

Le constructeur **`URIError()`** permet de créer une erreur lorsqu'une fonction de gestion d'un URI a été utilisée de façon incorrecte.

## Syntaxe

```js
new URIError();
new URIError(message);
new URIError(message, fileName);
new URIError(message, fileName, lineNumber);
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description de l'erreur, compréhensible par un humain.
- `fileName` {{optional_inline}}
  - : Le nom du fichier qui contient le code ayant déclenché l'exception.
- `lineNumber` {{optional_inline}}
  - : Le numéro de ligne pour le code ayant déclenché l'exception.

## Exemples

### Intercepter une exception `URIError`

```js
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.fileName); // "Scratchpad/1"
  console.log(e.lineNumber); // 2
  console.log(e.columnNumber); // 2
  console.log(e.stack); // "@Scratchpad/2:2:3\n"
}
```

### Créer une instance de `URIError`

```js
try {
  throw new URIError("Coucou", "unFichier.js", 10);
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Coucou"
  console.log(e.name); // "URIError"
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
- [`decodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)
- [`decodeURIComponent()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
- [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
- [`encodeURIComponent()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
