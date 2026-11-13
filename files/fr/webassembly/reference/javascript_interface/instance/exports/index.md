---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/Reference/JavaScript_interface/Instance/exports
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

La propriété en lecture seule **`exports`** de l'objet [`WebAssembly.Instance`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance) retourne un objet contenant comme membres toutes les fonctions exportées depuis l'instance du module WebAssembly, permettant ainsi d'y accéder et de les utiliser en JavaScript.

## Exemples

### Utiliser la propriété `exports`

Après avoir récupéré des octets WebAssembly en utilisant `fetch`, vous compilez et instanciez le module en utilisant la fonction [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), en important au passage une fonction JavaScript dans le module WebAssembly. Vous appelez ensuite une [fonction WebAssembly exportée](/fr/docs/WebAssembly/Guides/Exported_functions) qui est exportée par une `Instance`.

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

> [!NOTE]
> Vous pouvez également trouver cet exemple dans [instantiate-streaming.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) sur GitHub ([la voir en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
