---
title: Constructeur WebAssembly.CompileError()
slug: WebAssembly/JavaScript_interface/CompileError/CompileError
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError/CompileError
browser-compat: javascript.builtins.WebAssembly.CompileError.CompileError
---
{{JSRef}}

Le constructeur **`WebAssembly.CompileError()`** crée un nouvel objet `CompileError` WebAssembly qui représente une erreur qui se produit lors du décodage ou de la validation du code WebAssembly.

## Syntaxe

```js
new WebAssembly.CompileError()
new WebAssembly.CompileError(message)
new WebAssembly.CompileError(message, nomFichier)
new WebAssembly.CompileError(message, nomFichier, numeroLigne)
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description, compréhensible par un humain, de l'erreur.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier contenant le code qui a entraîné l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne dans le fichier contenant le code qui a entraîné l'exception.

## Exemples

### Créer une nouvelle instance CompileError

Le fragment de code qui suit crée une nouvelle instance de `CompileError` et affiche les détails correspondant dans la console&nbsp;:

```js
try {
  throw new WebAssembly.CompileError('Coucou', 'unFichier', 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message);                 // "Coucou"
  console.log(e.name);                    // "CompileError"
  console.log(e.fileName);                // "unFichier"
  console.log(e.lineNumber);              // 10
  console.log(e.columnNumber);            // 0
  console.log(e.stack);                   // renvoie l'emplacement du code exécuté
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La page  [WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
