---
title: WebAssembly.instantiate()
slug: WebAssembly/JavaScript_interface/instantiate_static
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{WebAssemblySidebar}}

La méthode statique **`WebAssembly.instantiate()`** permet de compiler et d'instancier du code WebAssembly. Cette fonction possède deux formes&nbsp;:

- La première forme prend un code binaire WebAssembly sous forme d'un [tableau typé](/fr/docs/Web/JavaScript/Guide/Typed_arrays) ou d'un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) et effectue les étapes de compilation et d'instanciation en une fois. La valeur de résolution de la promesse renvoyée se compose d'un module [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module) compilé et de sa première instance [`WebAssembly.Instance`](/fr/docs/WebAssembly/JavaScript_interface/Instance).
- La seconde forme prend un module ([`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module)) déjà compilé et renvoie une promesse dont la valeur de résolution est une instance de ce module. Cette forme s'avère utile lorsque le module a déjà été compilé.

> [!WARNING]
> Tant que faire se peut, utiliser la méthode [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), car elle est plus efficace et récupère, compile et instancie un module en une seule étape à partir du <i lang="en">bytecode</i> et il n'est pas nécessaire de passer par une conversion en [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

## Syntaxe

### Première forme&nbsp;: utiliser le code binaire WebAssembly

```js
WebAssembly.instantiate(bufferSource, importObject);
```

#### Paramètres

- `bufferSource`
  - : Un [tableau typé](/fr/docs/Web/JavaScript/Guide/Typed_arrays) ou un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) qui contient le _bytecode_ du module WebAssembly qu'on souhaite compiler ou un objet [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module).
- `importObject` {{optional_inline}}
  - : Un objet qui contient les valeurs à importer dans l'instance qui sera créée. Ces valeurs peuvent être des fonctions ou des objets [`WebAssembly.Memory`](/fr/docs/WebAssembly/JavaScript_interface/Memory). Il doit y avoir une propriété correspondante au sein du module compilé pour chacun des imports, si ce n'est pas le cas, une exception [`WebAssembly.LinkError`](/fr/docs/WebAssembly/JavaScript_interface/LinkError) sera levée.

#### Valeur de retour

Une promesse qui est résolue en un objet qui contient deux champs&nbsp;:

- `module`
  - : Un objet [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module) qui représente le module WebAssembly compilé. Ce module peut être instancié à nouveau grâce à [`postMessage()`](/fr/docs/Web/API/Worker/postMessage) ou via [un cache](/fr/docs/WebAssembly/Caching_modules).
- `instance`
  - : Un objet [`WebAssembly.Instance`](/fr/docs/WebAssembly/JavaScript_interface/Instance) qui contient l'ensemble [des fonctions WebAssembly exportées](/fr/docs/WebAssembly/Exported_functions).

#### Exceptions

- Si l'un des paramètres n'a pas le bon type ou la bonne structure, une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.
- Si l'opération échoue, la promesse est rompue avec une exception [`WebAssembly.CompileError`](/fr/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/fr/docs/WebAssembly/JavaScript_interface/LinkError), ou [`WebAssembly.RuntimeError`](/fr/docs/WebAssembly/JavaScript_interface/RuntimeError) selon l'origine de l'échec.

### Seconde forme&nbsp;: utiliser une instance d'un module

```js
WebAssembly.instantiate(module, importObject);
```

#### Paramètres

- `module`
  - : L'objet [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module) qui doit être instancié.
- `importObject` {{optional_inline}}
  - : Un objet qui contient les valeurs à importer dans l'instance qui sera créée. Ces valeurs peuvent être des fonctions ou des objets [`WebAssembly.Memory`](/fr/docs/WebAssembly/JavaScript_interface/Memory). Il doit y avoir une propriété correspondante au sein du module compilé pour chacun des imports, si ce n'est pas le cas, une exception [`WebAssembly.LinkError`](/fr/docs/WebAssembly/JavaScript_interface/LinkError) sera levée.

#### Valeur de retour

Une promesse qui est résolue en un objet [`WebAssembly.Instance`](/fr/docs/WebAssembly/JavaScript_interface/Instance).

#### Exceptions

- Si l'un des paramètres n'est pas du bon type ou n'a pas la bonne structure, une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) est levée.
- Si l'opération échoue, la promesse sera rompue avec une exception [`WebAssembly.CompileError`](/fr/docs/WebAssembly/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/fr/docs/WebAssembly/JavaScript_interface/LinkError), ou [`WebAssembly.RuntimeError`](/fr/docs/WebAssembly/JavaScript_interface/RuntimeError) selon l'origine de l'échec.

## Exemples

> [!NOTE]
> Dans la plupart des cas, on utilisera plus vraisemblablement [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) qui est plus efficace que `instantiate()`.

### Première forme

Après avoir récupéré le code binaire WebAssembly grâce à `fetch()`, on compile et on instancie le module grâce à la fonction `WebAssembly.instantiate()` et on importe une fonction JavaScript dans le module lors de cette étape. Ensuite, on invoque [une fonction WebAssembly exportée](/fr/docs/WebAssembly/Exported_functions) via l'instance.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((result) => result.instance.exports.exported_func());
```

> [!NOTE]
> Voir le fichier [`index.html`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index.html) sur GitHub ([ainsi que la démonstration associée](https://mdn.github.io/webassembly-examples/js-api-examples/)).

### Seconde forme

Dans l'exemple qui suit (tiré du fichier [`index-compile.html`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) sur GitHub et qui dispose d'[une démonstration](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)), on compile le <i lang="en">bytecode</i> du module chargé `simple.wasm` grâce à la fonction [`WebAssembly.compileStreaming()`](/fr/docs/WebAssembly/JavaScript_interface/compileStreaming_static) puis on envoie le résultat à un [<i lang="en">worker</i>](/fr/docs/Web/API/Web_Workers_API) grâce à la méthode [`postMessage()`](/fr/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Dans le <i lang="en">worker</i> (cf. [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)), on définit un objet d'import qui sera utilisé par le module puis on paramètre un gestionnaire d'évènement afin de recevoir le module depuis le <i lang="en">thread</i> principal. Lorsqu'on reçoit le module, on en crée une instance grâce à la méthode `WebAssembly.instantiate()` puis on appelle une fonction exportée depuis le module.

```js
const importObject = {
  imports: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("module received from main thread");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
