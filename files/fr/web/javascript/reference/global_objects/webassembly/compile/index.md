---
title: WebAssembly.compile()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/compile
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/compile
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/compile
---
{{JSRef}}

La méthode **`WebAssembly.compile()`**, permet de compiler un module ({{jsxref("WebAssembly.Module")}} à partir d'un code binaire WebAssembly. Cette fonction est utile lorsqu'il est nécessaire de compiler un module avant de l'instancier (dans les autres cas, la méthode {{jsxref("WebAssembly.instantiate()")}} sera plus pertinente).

## Syntaxe

```js
Promise<WebAssembly.Module> WebAssembly.compile(bufferSource);
```

### Paramètres

- `bufferSource`
  - : Un [tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray) ou un {{jsxref("ArrayBuffer")}} contenant le _bytecode_ du module WebAssembly qu'on souhaite compiler.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) dont la valeur de résolution est une instance de {{jsxref("WebAssembly.Module")}} qui représente le module compilé.

### Exceptions

- Si `bufferSource` n'est pas un tableau typé, une exception {{jsxref("TypeError")}} sera levée.
- Si la compilation échoue, la promesse sera rompue avec une exception {{jsxref("WebAssembly.CompileError")}}.

## Exemples

Dans l'exemple qui suit, on compile le _bytecode_ `simple.wasm` grâce à la méthode `compile()` puis on envoie le contenu à [un _worker_](https://developer.mozilla.org/fr/docs/Web/API/Web_Workers_API) grâce à la méthode [`postMessage()`](/fr/docs/Web/API/Worker/postMessage).

```js
var worker = new Worker("wasm_worker.js");

fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.compile(bytes)
).then(mod =>
  worker.postMessage(mod)
);
```

> **Note :** Dans la plupart des cas, mieux vaudra utiliser {{jsxref("WebAssembly.compileStreaming()")}} qui est plus efficace que `compile()`.

## Spécifications

| Spécification                                                                            | État                                 | Commentaires                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblycompile', 'compile()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale pour WebAssembly. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.compile")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
