---
title: Constructeur WebAssembly.RuntimeError()
slug: WebAssembly/JavaScript_interface/RuntimeError/RuntimeError
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError/RuntimeError
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError/RuntimeError
browser-compat: javascript.builtins.WebAssembly.RuntimeError.RuntimeError
---
{{JSRef}}

Le constructeur **`WebAssembly.RuntimeError()`** crée un nouvel objet `RuntimeError` WebAssembly, une erreur levée quand WebAssembly définit une [trappe](https://webassembly.org/docs/semantics/#traps).

## Syntaxe

```js
new WebAssembly.RuntimeError()
new WebAssembly.RuntimeError(message)
new WebAssembly.RuntimeError(message, nomFichier)
new WebAssembly.RuntimeError(message, nomFichier, numeroLigne)
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description, compréhensible par un humain, de l'erreur.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier contenant le code qui a entraîné l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne dans le fichier contenant le code qui a entraîné l'exception.

## Exemples

### Créer une nouvelle instance de RuntimeError

Le fragment de code qui suit crée une nouvelle instance de `RuntimeError` puis affiche ses informations dans la console&nbsp;:

```js
try {
  throw new WebAssembly.RuntimeError('Coucou', 'unFichier', 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message);                             // "Coucou"
  console.log(e.name);                                // "RuntimeError"
  console.log(e.fileName);                            // "unFichier"
  console.log(e.lineNumber);                          // 10
  console.log(e.columnNumber);                        // 0
  console.log(e.stack);                               // renvoie l'emplacement du code exécuté
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
