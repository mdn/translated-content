---
title: WebAssembly.Module.exports()
slug: WebAssembly/JavaScript_interface/Module/exports
tags:
  - API
  - Constructeur
  - JavaScript
  - Module
  - Méthode
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/exports
---
{{JSRef}}

La fonction **`WebAssembly.Module.exports()`** renvoie un tableau qui contient les descriptions des exports déclarés pour un module donné.

## Syntaxe

```js
var exports = WebAssembly.Module.exports(module);
```

### Paramètres

- `module`
  - : Un objet {{jsxref("WebAssembly.Module")}}.

### Valeur de retour

Un tableau qui contient des objets représentants les fonctions exportés du module passé en argument.

### Exceptions

Si l'argument n'est pas une instance de {{jsxref("WebAssembly.Module")}}, une exception {{jsxref("TypeError")}} sera levée.

## Exemples

Dans l'exemple suivant (basé sur le fichier [`index-compile.html`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/index-compile.html) disponible sur GitHub avec [la démonstration correspondante](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html)), on compile le _bytecode_ `simple.wasm` grâce à la fonction {{jsxref("WebAssembly.compileStreaming()")}} puis on envoie le résultat à un _[worker](/fr/docs/Web/API/Web_Workers_API)_ grâce à la méthode [`postMessage()`](/fr/docs/Web/API/Worker/postMessage).

```js
var worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm"))
.then(mod =>
  worker.postMessage(mod)
);
```

Dans le _worker_ (cf. [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/wasm_worker.js)), on définit un objet d'import pour le module puis on paramètre un gestionnaire d'évènement afin de recevoir le module depuis le _thread_ principal. Lorsqu'on reçoit le module, on en crée une instance via la méthode {{jsxref("WebAssembly.Instantiate()")}} puis on appelle une fonction exportée et enfin, on affiche les informations relatives aux exports disponibles grâce à `WebAssembly.Module.exports`.

```js
var importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

onmessage = function(e) {
  console.log('module reçu du thread principal');
  var mod = e.data;

  WebAssembly.instantiate(mod, importObject).then(function(instance) {
    instance.exports.exported_func();
  });

  var exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};
```

La valeur `exports[0]` ressemblera alors à :

```js
{ name: "exported_func", kind: "function" }
```

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires                                       |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblymoduleexports', 'exports()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale pour WebAssembly. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Module.exports")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
