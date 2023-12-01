---
title: WebAssembly.Instance()
slug: WebAssembly/JavaScript_interface/Instance
---

{{WebAssemblySidebar}}

Un objet **`WebAssembly.Instance`** représente un objet exécutable, avec un état, qui est une instance d'un [module WebAssembly](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module). Un objet `Instance` contient l'ensemble [des fonctions WebAssembly exportées](/fr/docs/WebAssembly/Exported_functions) qui permettent d'invoquer du code WebAssembly depuis du code JavaScript.

## Constructeur

- [`WebAssembly.Instance()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/Instance)
  - : Crée un nouvel objet `Instance`.

## Propriétés des instances

- [`Instance.prototype.exports`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports)
  - : Renvoie un objet dont les propriétés sont les fonctions exportées par l'instance de module WebAssembly afin qu'elles puissent être récupérées et utilisées en JavaScript. Cette propriété est uniquement accessible en lecture seule.

## Exemples

### Instancier un module WebAssembly de façon synchrone

Le constructeur `WebAssembly.Instance()` peut être appelé afin d'instancier un objet [`WebAssembly.Module`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) de façon synchrone. Par exemple&nbsp;:

```js
const importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    let mod = new WebAssembly.Module(bytes);
    let instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

La façon préconisée de récupérer un objet `Instance` est asynchrone, par exemple en utilisant la fonction [`WebAssembly.instantiateStreaming()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming) de cette façon&nbsp;:

```js
const importObject = {
  imports: {
    imported_func: function (arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Cet exemple illustre également comment la propriété `exports` est utilisée afin d'accéder aux fonctions exportées.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
