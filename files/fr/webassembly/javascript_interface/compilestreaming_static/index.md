---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{WebAssemblySidebar}}

La méthode statique **`WebAssembly.compileStreaming()`** permet de compiler un module WebAssembly (c'est-à-dire un objet [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module)) depuis un flux source. Cette fonction est utile si on doit compiler un module avant de l'instancier séparement, sinon on utilisera plutôt [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static).

> [!NOTE]
> Les pages web qui utilisent une [CSP](/fr/docs/Web/HTTP/CSP) stricte peuvent bloquer la compilation WebAssembly et l'exécution des modules. Pour plus d'informations pour l'autorisation de la compilation et de l'exécution, voir [la directive CSP `script-src`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntaxe

```js-nolint
WebAssembly.compileStreaming(source)
```

### Paramètres

- `source`
  - : Un objet [`Response`](/fr/docs/Web/API/Response) ou une promesse qui sera résolue en un tel objet et qui représentee la source du module WASM qu'on souhaite manipuler comme un flux et compiler.

### Valeur de retour

Un objet `Promise` dont la valeur de résolution est un objet [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module) qui représente le module compilé.

### Exceptions

- Si `source` n'est pas un objet [`Response`](/fr/docs/Web/API/Response) ou une promesse qui se résout en `Response`, la promesse est rejetée avec une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).
- Si la compilation échoue, la promesse est rejetée avec une exception [`WebAssembly.CompileError`](/fr/docs/WebAssembly/JavaScript_interface/CompileError).
- Si `source` est une promesse qui échoue, la promesse renvoyée par cette méthode échoue avec cette même erreur.
- Si l'objet `Result` de la source a une erreur (par exemple un mauvais type MIME), la promesse est rejetée avec une erreur.

## Exemples

Dans l'exemple suivant (également disponible sur GitHub&nbsp;: [`compile-streaming.html`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) et avec [le résultat _live_](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)), on récupère un flux dedpuis un module .wasm puis on le compile en un objet [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module). La fonction `compileStreaming()` acceptant une promesse pour un objet [`Response`](/fr/docs/Web/API/Response), on peut directement passer l'appel à [`fetch()`](/fr/docs/Web/API/Window/fetch) qui transfèrera la réponse dès que la promesse sera tenue.

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Le module est ensuite instancié grâce à la fonction [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/JavaScript_interface/instantiate_static). Enfin, on appelle la fonction exportée.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La page d'aperçu de WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript de WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
