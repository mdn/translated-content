---
title: WebAssembly.Module.exports()
slug: WebAssembly/JavaScript_interface/Module/exports_static
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{WebAssemblySidebar}}

La méthode statique **`WebAssembly.Module.exports()`** renvoie un tableau qui contient les descriptions des exports déclarés pour un module donné.

## Syntaxe

```js-nolint
WebAssembly.Module.exports(module)
```

### Paramètres

- `module`
  - : Un objet [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module).

### Valeur de retour

Un tableau qui contient des objets représentants les fonctions exportés du module passé en argument.

### Exceptions

Si l'argument n'est pas une instance de [`WebAssembly.Module`](/fr/docs/WebAssembly/JavaScript_interface/Module), une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.

## Exemples

Dans l'exemple suivant (basé sur le fichier [`index-compile.html`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) disponible sur GitHub avec [la démonstration correspondante](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)), on compile le <i lang="en">bytecode</i> `simple.wasm` grâce à la fonction [`WebAssembly.compileStreaming()`](/fr/docs/WebAssembly/JavaScript_interface/compileStreaming_static) puis on envoie le résultat à un [<i lang="en">worker</i>](/fr/docs/Web/API/Web_Workers_API) grâce à la méthode [`postMessage()`](/fr/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Dans le <i lang="en">worker</i> (cf. [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)), on définit un objet d'import pour le module puis on paramètre un gestionnaire d'évènement afin de recevoir le module depuis le <i lang="en">thread</i> principal. Lorsqu'on reçoit le module, on en crée une instance via la méthode [`WebAssembly.Instantiate()`](/fr/docs/WebAssembly/JavaScript_interface/instantiate_static) puis on appelle une fonction exportée et enfin, on affiche les informations relatives aux exports disponibles grâce à `WebAssembly.Module.exports`.

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

  const exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};
```

La valeur `exports[0]` ressemblera alors à :

```js
{ name: "exported_func", kind: "function" }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
