---
title: Constructeur WebAssembly.LinkError()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError/LinkError
browser-compat: javascript.builtins.WebAssembly.LinkError.LinkError
---
{{JSRef}}

Le constructeur **`WebAssembly.LinkError()`** crée un nouvel objet `LinkError` WebAssembly qui indique une erreur lors de l'instanciation du module (en dehors des [trapoess](https://webassembly.org/docs/semantics/#traps) de la fonction de départ).

## Syntaxe

```js
new WebAssembly.LinkError()
new WebAssembly.LinkError(message)
new WebAssembly.LinkError(message, nomFichier)
new WebAssembly.LinkError(message, nomFichier, numeroLigne)
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description, compréhensible par un humain, de l'erreur.
- `nomFichier` {{optional_inline}}
  - : Le nom du fichier contenant le code qui a entraîné l'exception.
- `numeroLigne` {{optional_inline}}
  - : Le numéro de la ligne dans le fichier contenant le code qui a entraîné l'exception.

## Exemples

### Créer une nouvelle instance de LinkError

Le fragment de code qui suit crée une nouvelle instance de `LinkError` et affiche les détails correspondant dans la console&nbsp;:

```js
try {
  throw new WebAssembly.LinkError('Coucou', 'unFichier', 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message);                 // "Coucou"
  console.log(e.name);                    // "LinkError"
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
