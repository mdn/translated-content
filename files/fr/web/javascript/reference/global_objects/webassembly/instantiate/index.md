---
title: WebAssembly.instantiate()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/instantiate
---
{{JSRef}}

La fonction **`WebAssembly.instantiate()`** permet de compiler et d'instancier du code WebAssembly. Cette fonction possède deux formes :

- La première forme prend un code binaire WebAssembly sous forme d'un [tableau typé](/fr/docs/Web/JavaScript/Tableaux_typés) ou d'un {{jsxref("ArrayBuffer")}} et effectue les étapes de compilation et d'instanciation en une fois. La valeur de résolution de la promesse renvoyée se compose d'un module {{jsxref("WebAssembly.Module")}} compilé et de sa première instance {{jsxref("WebAssembly.Instance")}}.
- La seconde forme prend un module ({{jsxref("WebAssembly.Module")}}) déjà compilé et renvoie une promesse dont la valeur de résolution est une instance de ce module. Cette forme s'avère utile lorsque le module a déjà été compilé.

> **Attention :** Tant que faire se peut, utiliser la méthode {{jsxref("WebAssembly.instantiateStreaming()")}} car elle est plus efficace et récupère, compile et instancie un module en une seule étape à partir du _bytecode_ et il n'est pas nécessaire de passer par une conversion en {{jsxref("ArrayBuffer")}}.

## Syntaxe

### Première forme : utiliser le _bytecode_ WebAssembly

    Promise<ResultObject> WebAssembly.instantiate(bufferSource, importObject);

#### Paramètres

- `bufferSource`
  - : Un [tableau typé](/fr/docs/Web/JavaScript/Tableaux_typés) ou un {{jsxref("ArrayBuffer")}} qui contient le _bytecode_ du module WebAssembly qu'on souhaite compiler.
- `importObject` {{optional_inline}}
  - : Un objet qui contient les valeurs à importer dans l'instance qui sera créée. Ces valeurs peuvent être des fonctions ou des objets {{jsxref("WebAssembly.Memory")}}. Il doit y avoir une propriété correspondante au sein du module compilé pour chacun des imports, si ce n'est pas le cas, une exception {{jsxref("WebAssembly.LinkError")}} sera levée.

#### Valeur de retour

Une promesse qui est résoluee en un objet qui contient deux champs :

- `module` : un objet {{jsxref("WebAssembly.Module")}} qui représente le module WebAssembly compilé. Ce module peut être instancié à nouveau grâce à  {{domxref("Worker.postMessage", "postMessage()")}} ou via [un cache IndexedDB](/fr/docs/WebAssembly/Caching_modules).
- `instance` : un objet {{jsxref("WebAssembly.Instance")}} qui contient l'ensemble [des fonctions WebAssembly exportées](/fr/docs/WebAssembly/Exported_functions).

#### Exceptions

- Si l'un des paramètres n'a pas le bon type ou la bonne structure, une exception {{jsxref("TypeError")}} sera levée.
- Si l'opération échoue, la promesse est rompue avec une exception {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}} ou {{jsxref("WebAssembly.RuntimeError")}} selon l'origine de l'échec.

### Seconde forme : utiliser une instance d'un module

    Promise<WebAssembly.Instance> WebAssembly.instantiate(module, importObject);

#### Paramètres

- `module`
  - : L'objet {{jsxref("WebAssembly.Module")}} qui doit être instancié.
- `importObject` {{optional_inline}}
  - : Un objet qui contient les valeurs à importer dans l'instance qui sera créée. Ces valeurs peuvent être des fonctions ou des objets {{jsxref("WebAssembly.Memory")}}. Il doit y avoir une propriété correspondante au sein du module compilé pour chacun des imports, si ce n'est pas le cas, une exception {{jsxref("WebAssembly.LinkError")}} sera levée.

#### Valeur de retour

Une promesse qui est résolue en un objet {{jsxref("WebAssembly.Instance")}}.

#### Exceptions

- Si l'un des paramètres n'est pas du bon type ou n'a pas la bonne structure, une exception {{jsxref("TypeError")}} est levée.
- Si l'opération échoue, la promesse sera rompue avec une exception {{jsxref("WebAssembly.CompileError")}}, {{jsxref("WebAssembly.LinkError")}} ou {{jsxref("WebAssembly.RuntimeError")}} selon l'origine de l'échec.

## Exemples

> **Note :** Dans la plupart des cas, on utilisera plus vraisemblablement {{jsxref("WebAssembly.instantiateStreaming()")}} qui est plus efficace que `instantiate()`.

### Première forme

Après avoir récupéré le _bytecode_ WebAssembly grâce à `fetch()`, on compile et on instancie le module grâce à la fonction  {{jsxref("WebAssembly.instantiate()")}} et on importe une fonction JavaScript dans le module lors de cette étape. Ensuite, on invoque [une fonction WebAssembly exportée](/fr/docs/WebAssembly/Exported_functions) via l'instance.

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(result =>
  result.instance.exports.exported_func()
);
```

> **Note :** Voir le fichier [index.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index.html) sur GitHub ([ainsi que la démonstration associée](https://mdn.github.io/webassembly-examples/js-api-examples/)) qui contient un exemple analogue et qui utilise la fonction utilitaire [`fetchAndInstantiate()`](https://github.com/mdn/webassembly-examples/blob/master/wasm-utils.js#L1).

### Seconde forme

Dans l'exemple qui suit (tiré du fichier [`index-compile.html`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) sur GitHub et qui dispose d'[une démonstration](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)), on compile le _bytecode_ du module chargé `simple.wasm` grâce à la fonction {{jsxref("WebAssembly.compileStreaming()")}} puis on envoie le résultat à un _[worker](/fr/docs/Web/API/Web_Workers_API)_ grâce à la méthode {{domxref("Worker.postMessage", "postMessage()")}}.

```js
var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(mod =>
  worker.postMessage(mod)
);
```

Dans le _worker_ (cf. [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js)), on définit un objet d'import qui sera utilisé par le module puis on paramètre un gestionnaire d'évènement afin de recevoir le module depuis le _thread_ principal. Lorsqu'on reçoit le module, on en crée une instance grâce à la méthode {{jsxref("WebAssembly.instantiate()")}} puis on appelle une fonction exportée depuis le module.

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

onmessage = function(e) {
  console.log('module reçu depuis le thread principal');
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function(instance) {
    instance.exports.exported_func();
  });
};
```

## Spécifications

| Spécification                                                                                        | État                                 | Commentaires                      |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblyinstantiate', 'instantiate()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.instantiate")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
