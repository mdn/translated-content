---
title: Constructeur SyntaxError()
slug: Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError
translation_of: Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError
browser-compat: javascript.builtins.SyntaxError.SyntaxError
---
{{JSRef}}

Le constructeur **`SyntaxError()`** permet de créer un objet représentant une erreur qui se produit lorsqu'on essaie d'interpréter du code dont la syntaxe est invalide.

## Syntaxe

```js
new SyntaxError()
new SyntaxError(message)
new SyntaxError(message, nomFichier)
new SyntaxError(message, nomFichier, numeroLigne)
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description de l'erreur, compréhensible par un humain.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier contenant le code qui a déclenché l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne du code qui a déclenché l'exception.

## Exemples

### Intercepter une exception `SyntaxError`

```js
try {
  eval('coucou truc');
} catch (e) {
  console.error(e instanceof SyntaxError);
  console.error(e.message);
  console.error(e.name);
  console.error(e.fileName);
  console.error(e.lineNumber);
  console.error(e.columnNumber);
  console.error(e.stack);
}
```

### Créer une exception `SyntaxError`

```js
try {
  throw new SyntaxError('Coucou', 'unFichier.js', 10);
} catch (e) {
  console.error(e instanceof SyntaxError); // true
  console.error(e.message);                // Coucou
  console.error(e.name);                   // SyntaxError
  console.error(e.fileName);               // unFichier.js
  console.error(e.lineNumber);             // 10
  console.error(e.columnNumber);           // 0
  console.error(e.stack);                  // @debugger eval code:3:9
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error)
