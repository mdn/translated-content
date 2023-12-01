---
title: WebAssembly.Memory.prototype.buffer
slug: WebAssembly/JavaScript_interface/Memory/buffer
---

{{WebAssemblySidebar}}

La propriété **`buffer`**, rattachée au prototype de l'objet [`Memory`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory), renvoie le tampon (_buffer_) contenu dans l'espace mémoire.

## Syntaxe

```js
memory.buffer;
```

## Exemples

Dans l'exemple suivant (cf. le fichier [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) sur GitHub ainsi que [le résultat obtenu](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)), on récupère puis on instancie le _bytecode_ `memory.wasm` grâce à la méthode {{jsxref("WebAssembly.instantiateStreaming()")}} tout en important la mémoire créée à la ligne précédente. Ensuite, on enregistre certaines valeurs dans cette mémoire puis on exporte une fonction afin de l'utiliser pour additionner certaines valeurs.

```js
WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
  js: { mem: memory },
}).then((obj) => {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i < 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
