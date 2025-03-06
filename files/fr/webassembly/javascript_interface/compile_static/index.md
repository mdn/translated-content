---
title: WebAssembly.compile()
slug: WebAssembly/JavaScript_interface/compile_static
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{WebAssemblySidebar}}

La méthode statique **`WebAssembly.compile()`**, permet de compiler un module ([`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module)) à partir d'un code binaire WebAssembly. Cette fonction est utile lorsqu'il est nécessaire de compiler un module avant de l'instancier (dans les autres cas, la méthode [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/JavaScript_interface/instantiate_static) sera plus pertinente).

> [!NOTE]
> Les pages web qui utilisent une [CSP](/fr/docs/Web/HTTP/CSP) stricte peuvent bloquer la compilation WebAssembly et l'exécution des modules. Pour plus d'informations pour l'autorisation de la compilation et de l'exécution, voir [la directive CSP `script-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntaxe

```js-nolint
WebAssembly.compile(bufferSource);
```

### Paramètres

- `bufferSource`
  - : Un [tableau typé](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ou un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) contenant le <i lang="en">bytecode</i> du module WebAssembly qu'on souhaite compiler.

### Valeur de retour

Une promesse ([`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)) dont la valeur de résolution est une instance de [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module) qui représente le module compilé.

### Exceptions

- Si `bufferSource` n'est pas un tableau typé, une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.
- Si la compilation échoue, la promesse sera rompue avec une exception [`WebAssembly.CompileError`](/fr/docs/WebAssembly/JavaScript_interface/CompileError).

## Exemples

### Utiliser `compile()`

Dans l'exemple qui suit, on compile le <i lang="en">bytecode</i> `simple.wasm` grâce à la méthode `compile()` puis on envoie le contenu à [un <i lang="en">worker</i>](/fr/docs/Web/API/Web_Workers_API) grâce à la méthode [`postMessage()`](/fr/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> [!NOTE]
> Dans la plupart des cas, mieux vaudra utiliser [`WebAssembly.compileStreaming()`](/fr/docs/WebAssembly/JavaScript_interface/compileStreaming_static) qui est plus efficace que `compile()`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
