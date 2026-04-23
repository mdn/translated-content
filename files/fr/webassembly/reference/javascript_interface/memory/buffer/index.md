---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/Reference/JavaScript_interface/Memory/buffer
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

La propriété en lecture seule **`buffer`** de l'objet [`WebAssembly.Memory`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory) retourne le tampon contenu dans la mémoire. Selon que la mémoire a été construite avec `shared: true` ou non, le tampon est soit un {{JSxRef("ArrayBuffer")}}, soit un {{JSxRef("SharedArrayBuffer")}}.

## Exemples

### Utiliser la propriété `buffer`

L'exemple suivant (voir [memory.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) sur GitHub, et [la voir en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) récupère et instancie le code binaire chargé «&nbsp;memory.wasm&nbsp;» en utilisant la fonction [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), tout en important la mémoire créée à la ligne ci-dessus. Il stocke ensuite des valeurs dans cette mémoire, exporte une fonction, et utilise la fonction exportée pour additionner ces valeurs.

```js
const memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
});

WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  const summands = new DataView(memory.buffer);
  for (let i = 0; i < 10; i++) {
    summands.setUint32(i * 4, i, true); // WebAssembly est petit boutiste
  }
  const sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
