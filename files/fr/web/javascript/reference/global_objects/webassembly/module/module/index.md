---
title: Constructeur WebAssembly.Module()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module
browser-compat: javascript.builtins.WebAssembly.Module.Module
---
{{JSRef}}

Le constructeur **`WebAssembly.Module()`** crée un nouvel objet `Module` contenant du code WebAssembly sans état qui a déjà été compilé par le navigateur et qui peut efficacement [être partagé avec des workers](/fr/docs/Web/API/Worker/postMessage) et être instancié plusieurs fois.

Le constructeur `WebAssembly.Module()` peut être appelé de façon synchrone afin de compiler le code binaire WebAssembly correspondant. Toutefois, la méthode principale pour obtenir un `Module` consiste à utiliser une fonction de compilation asynchrone comme [`WebAssembly.compile()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile).

## Syntaxe

> **Attention :** Étant donné que la compilation de grands modules peut être coûteuse, il est préférable d'utiliser `Module()` uniquement lorsqu'une compilation synchrone est nécessaire. Dans tous les autres cas, on privilégiera la méthode [`WebAssembly.compileStreaming()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming).

```js
new WebAssembly.Module(bufferSource)
```

### Parameters

- _bufferSource_
  - : Un [tableau typé](/fr/docs/Web/JavaScript/Typed_arrays) ou un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) contenant le code binaire du module .wasm qu'on souhaite compiler.

## Exemples

### Compiler un module WebAssembly de façon synchrone

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

function createWasmModule(bytes) {
  return new WebAssembly.Module(bytes);
}

fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => {
  let mod = createWasmModule(bytes);
  WebAssembly.instantiate(mod, importObject)
  .then(result =>
     result.exports.exported_func()
  );
})
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La page  [WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
