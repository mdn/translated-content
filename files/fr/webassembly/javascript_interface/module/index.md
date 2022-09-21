---
title: WebAssembly.Module()
slug: WebAssembly/JavaScript_interface/Module
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
browser-compat: javascript.builtins.WebAssembly.Module
---
{{JSRef}}

Un objet **`WebAssembly.Module`** contient du code WebAssembly, sans état et qui a déjà été compilé par le navigateur. Ce code peut être [partagé avec des <i lang="en">web workers</i>](/fr/docs/Web/API/Worker/postMessage) et être instancié à plusieurs reprises.

## Constructeur

- [`WebAssembly.Module()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/Module)
  - : Crée un nouvel objet `Module`.

## Propriétés statiques

- [`WebAssembly.Module.customSections()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections)
  - : Soit un objet `Module` et une chaîne de caractères, cette méthode renvoie le contenu de l'ensemble des sections spécifiques du module avec le nom correspondant à la chaîne de caractères.
- [`WebAssembly.Module.exports()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports)
  - : Soit un objet `Module`, cette méthode renvoie un tableau dont les éléments sont les descriptions de tous les exports déclarés.
- [`WebAssembly.Module.imports()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports)
  - : Soit un objet `Module`, cette méthode renvoie un tableau dont les éléments sont les descriptions de tous les imports déclarés.

## Exemples

### Envoyer un module compilé à un <i lang="en">worker</i>

Dans l'exemple qui suit (voir le fichier source [`index-compile.html`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) sur GitHub, et [la démonstration correspondante](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)), on compile le byte code chargé `simple.wasm` en utilisant la méthode [`WebAssembly.compileStreaming()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming) puis en envoyant l'instance de `Module` résultante à un [<i lang="en">worker</i>](/fr/docs/Web/API/Web_Workers_API) en utilisant [`postMessage()`](/fr/docs/Web/API/Worker/postMessage).

```js
let worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =>
  worker.postMessage(mod)
);
```

Au sein du <i lang="en">worker</i> (voir le fichier [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js)), on définit un objet d'import pour le module à utiliser puis on définit un gestionnaire d'évènement destiné à recevoir le module depuis le fil d'exécution principal. Lorsque le module est reçu, on en crée une instance avec la méthode [`WebAssembly.instantiate()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate) puis on appelle une fonction exportée depuis l'instance.

```js
let importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

onmessage = function(e) {
  console.log('module reçu depuis le thread principal');
  let mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function(instance) {
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
