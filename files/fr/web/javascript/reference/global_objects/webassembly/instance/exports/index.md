---
title: WebAssembly.Instance.prototype.exports
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports
tags:
  - API
  - Experimental
  - JavaScript
  - Propriété
  - Reference
  - WebAssembly
  - instance
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Instance/exports
---
{{JSRef}}

La propriété **`exports`** du prototype de {{jsxref("WebAssembly.Instance")}} est une propriété en lecture seul qui renvoie un objet dont les propriétés sont les différentes fonctions exportées depuis l'instance du module WebAssembly. Cela permet d'y accéder et de les manipuler en JavaScript.

    instance.exports

## Exemples

Après avoir récupéré le _bytecode_ WebAssembly grâce à la méthode `fetch()`, on le compile et on instancie le module grâce à la fonction {{jsxref("WebAssembly.instantiateStreaming()")}}. Lorsqu'on utilise cette fonction, on importe une fonction dans le module. Ensuite, on appelle [une fonction WebAssembly exportée](/fr/docs/WebAssembly/Exported_functions) qui est exposée via l'instance.

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

> **Note :** Voir le fichier [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html) sur GitHub (ainsi que [la démonstration](https://mdn.github.io/webassembly-examples/js-api-examples/)) pour un exemple.

## Spécifications

| Spécification                                                                                                                | État                                 | Commentaires                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblyinstance-objects', 'WebAssembly.Instance objects')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale pour WebAssembly. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Instance.exports")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
