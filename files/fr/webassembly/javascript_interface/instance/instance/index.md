---
title: Constructeur WebAssembly.Instance()
slug: WebAssembly/JavaScript_interface/Instance/Instance
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance
browser-compat: javascript.builtins.WebAssembly.Instance.Instance
---
{{JSRef}}

Le constructeur **`WebAssembly.Instance()`** crée un nouvel objet `Instance` qui représente une instance sans état et exécutable d'un [`WebAssembly.Module`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module).

## Syntaxe

> **Attention :** Étant donné que l'instanciation de grands modules peut être coûteuse, il est préférable d'utiliser le constructeur `Instance()` uniquement lorsqu'une instanciation synchrone est nécessaire. Par défaut et dans tous les autres cas, on privilégiera l'utilisation de la méthode asynchrone [`WebAssembly.instantiateStreaming()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming).

```js
new WebAssembly.Instance(module, importObject)
```

### Paramètres

- _module_
  - : L'objet [`WebAssembly.Module`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) qu'on souhaite instancier.
- _importObject_ {{optional_inline}}
  - : Un objet contenant les valeurs à importer dans l'instance nouvellement créée telles que des fonctions ou des objets [`WebAssembly.Memory`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory). Il doit y avoir une propriété correspondante pour chaque import déclaré de `module` ou une exception [`WebAssembly.LinkError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError) sera levée.

## Exemples

### Instancier un module WebAssembly de façon synchrone

Le constructeur `WebAssembly.Instance()` peut être appelé de façon synchrone afin d'instancier un objet [`WebAssembly.Module`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) donné, par exemple&nbsp;:

```js
const importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes => {
  let mod = new WebAssembly.Module(bytes);
  let instance = new WebAssembly.Instance(mod, importObject);
  instance.exports.exported_func();
})
```

Toutefois, la méthode à privilégier pour obtenir une `Instance` est d'utiliser la fonction asynchrone [`WebAssembly.instantiateStreaming()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) comme ceci&nbsp;:

```js
const importObject = {
  imports: {
    imported_func: function(arg) {
      console.log(arg);
    }
  }
};

WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La page  [WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
