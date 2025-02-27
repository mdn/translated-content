---
title: WebAssembly.validate()
slug: WebAssembly/JavaScript_interface/validate_static
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{WebAssemblySidebar}}

La méthode statique **`WebAssembly.validate()`** permet de valider un [tableau typé](/fr/docs/Web/JavaScript/Guide/Typed_arrays) de <i lang="en">bytecode</i> WebAssembly et renvoie un booléen qui indique si le contenu du tableau forme un module WebAssembly valide (`true`) ou non (`false`).

## Syntaxe

```js-nolint
WebAssembly.validate(bufferSource)
```

### Paramètres

- `bufferSource`
  - : Un [tableau typé](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) ou un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) qui contient le <i lang="en">bytecode</i> du module qu'on souhaite valider.

### Valeur de retour

Un booléen qui indique si la source est un code WebAssembly valide (`true`) ou non (`false`).

### Exceptions

Si la valeur passée en argument n'est pas un tableau typé ou un [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.

## Exemples

Dans l'exemple suivant, (cf. le fichier `validate.html` du [code source](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/validate.html), ainsi que [l'exemple <i lang="en">live</i>](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html)), on récupère un module .wasm et on le convertit en un tableau typé. Ensuite, on appelle la méthode `validate()` afin de vérifier si le module est valide.

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const valid = WebAssembly.validate(bytes);
    console.log(
      `The given bytes are ${valid ? "" : "not "}a valid Wasm module`,
    );
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
