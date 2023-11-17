---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming
---

{{WebAssemblySidebar}}

La fonction **`WebAssembly.compileStreaming()`** permet de compiler un module WebAssembly (c'est-à-dire un objet {{jsxref("WebAssembly.Module")}}) depuis un flux source. Cette fonction est utile si on doit compiler un module avant de l'instancier séparement, sinon on utilisera plutôt {{jsxref("WebAssembly.instantiateStreaming()")}}.

## Syntaxe

```js
WebAssembly.compileStreaming(source);
```

### Paramètres

- `source`
  - : Un objet {{domxref("Response")}} ou une promesse qui sera résolue avec un objet {{domxref("Response")}} qui représentee la source du module .wasm qu'on souhaite manipuler comme un flux et compiler.

### Valeur de retour

Un objet `Promise` dont la valeur de résolution est un objet {{jsxref("WebAssembly.Module")}} qui représente le module compilé.

### Exceptions

- Si la compilation échoue, la promesse est rejetée avec une exception {{jsxref("WebAssembly.CompileError")}}.

## Exemples

Dans l'exemple suivant (également disponible sur GitHub : [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/compile-streaming.html) et avec [le résultat _live_](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)), on récupère un flux dedpuis un module .wasm puis on le compile en un objet {{jsxref("WebAssembly.Module")}}. La fonction `compileStreaming()` acceptant une promesse pour un objet {{domxref("Response")}}, on peut directement passer l'appel à [`fetch()`](/fr/docs/Web/API/fetch) qui transfèrera la réponse dès que la promesse sera tenue.

```js
var importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Le module est ensuite instancié grâce à la fonction {{jsxref("WebAssembly.instantiate()")}}. Enfin, on appelle la fonction exportée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La page d'aperçu de WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript de WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
