---
title: WebAssembly.Table.prototype.get()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
  - table
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Table/get
---
{{JSRef}}

La méthode **`get()`**, rattachéee au prototype de  {{jsxref("WebAssembly.Table()")}}, permet de récupérer une référence à une fonction stockée dans le tableau WebAssembly grâce à sa position. dans le tableau.

## Syntaxe

    var funcRef = table.get(index);

### Paramètres

- `index`
  - : L'index de la référence de fonction qu'on souhaite récupérer.

### Valeur de retour

Une référence de fonction, c'est-à-dire [une fonction WebAssembly exportée](/fr/docs/WebAssembly/Exported_functions) qui est une enveloppe JavaScript pour manipuler la fonction WebAssembly sous-jacente.

### Exceptions

Si `index` est supérieur ou égal à {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}, la méthode lèvera une exception {{jsxref("RangeError")}}.

## Exemples

Dans l'exemple suivant (cf. le fichier [`table.html`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html) sur GitHub ainsi que [le résultat obtenu](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)), on compile et on instancie le _bytecode_ chargé, `table.wasm`, grâce à la méthode {{jsxref("WebAssembly.instantiateStreaming()")}}. On récupère ensuite les références stockées dans le tableau d'export.

```js
WebAssembly.instantiateStreaming(fetch('table.wasm'))
.then(function(obj) {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)());  // 13
  console.log(tbl.get(1)());  // 42
});
```

On note ici qu'il est nécessaire d'avoir un deuxième opérateur d'appel après l'accesseur pour récupérer le valeur stockée dans la référence (autrement dit, on utilise `get(0)()` plutôt que `get(0)`). La valeur exportée est une fonction plutôt qu'une valeur simple.

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblytableprototypeget', 'get()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initial pour WebAssembly. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Table.get")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
