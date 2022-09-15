---
title: Constructeur TypeError()
slug: Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
translation_of: Web/JavaScript/Reference/Global_Objects/TypeError/TypeError
browser-compat: javascript.builtins.TypeError.TypeError
---
{{JSRef}}

Le constructeur **`TypeError()`** permet de créer un objet représentant une erreur qui se produit lorsqu'une opération n'a pu être réalisée, généralement (mais pas toujours) parce qu'une valeur n'était pas du type attendu.

## Syntaxe

```js
new TypeError()
new TypeError(message)
new TypeError(message, nomFichier)
new TypeError(message, nomFichier, numeroLigne)
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description de l'erreur, compréhensible par un humain.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier qui contient le code qui a déclenché l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne du code qui a déclenché l'exception.

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
