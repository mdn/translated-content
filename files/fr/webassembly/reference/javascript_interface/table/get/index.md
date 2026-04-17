---
title: WebAssembly.Table.prototype.get()
slug: WebAssembly/Reference/JavaScript_interface/Table/get
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

La méthode **`get()`** du prototype de [`WebAssembly.Table()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table) permet de récupérer l'élément stocké à un index donné.

## Syntaxe

```js-nolint
get(index)
```

### Paramètres

- `index`
  - : L'index de la référence de fonction qu'on souhaite récupérer.

### Valeur de retour

Selon le type d'élément du tableau, cela peut être une référence de fonction — il s'agit d'une [fonction WebAssembly exportée](/fr/docs/WebAssembly/Guides/Exported_functions), d'une enveloppe JavaScript pour une fonction Wasm sous-jacente, ou d'une référence d'hôte.

### Exceptions

Si `index` est supérieur ou égal à [`Table.prototype.length`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/length), la méthode lèvera une exception {{JSxRef("RangeError")}}.

## Exemples

### Utiliser la méthode `get()`

L'exemple suivant (voir [table.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) sur GitHub, et [le voir en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/table.html) également) compile et instancie le code binaire «&nbsp;table.wasm&nbsp;» chargé à l'aide de la méthode [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Il récupère ensuite les références stockées dans le tableau exporté.

```js
WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
});
```

Remarquez qu'il faut inclure un second opérateur d'appel de fonction à la fin de l'accesseur pour réellement obtenir la valeur stockée dans la référence (par exemple, `get(0)()` plutôt que `get(0)`) — il s'agit d'une fonction et non d'une simple valeur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
