---
title: WebAssembly.Table.prototype.set()
slug: WebAssembly/JavaScript_interface/Table/set
---

{{WebAssemblySidebar}}

La méthode **`set()`**, rattachée au prototype de {{jsxref("WebAssembly.Table")}}, permet de modifier une référence de fonction stockée dans un tableau WebAssembly.

## Syntaxe

```js
table.set(index, valeur);
```

### Paramètres

- `index`
  - : L'index de la référence de la fonction qu'on souhaite modifier.
- `valeur`
  - : La valeur par laquelle on souhaite remplacer la référence. Cette valeur doit être [une fonction exportée WebAssembly](/fr/docs/WebAssembly/Exported_functions) (c'est-à-dire une enveloppe JavaScript représentant une fonction WebAssembly sous-jacente).

### Valeur de retour

Aucune.

### Exceptions

- Si `index` est supérieur ou égal à {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}, une exception {{jsxref("RangeError")}} sera levée.
- Si `valeur` n'est pas une fonction WebAssembly exportée ou la valeur {{jsxref("null")}}, une exception {{jsxref("TypeError")}} sera levée.

## Exemples

Dans l'exemple qui suit (basé sur le [code source de `table2.html`](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) et qui dispose [d'une démonstration](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)), on crée ue nouvelle instance d'un tableau WebAssembly (`Table`) qui permet initialement de stocker 2 référence. On imprime alors la longueur du tableau dans la console ainsi que le contenu pour les deux premiers index (obtenus grâce à la méthode {{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}) afin de montrer qu la longueur vaut 2 et qu'initialement, les deux éléments du tableau ne contiennent aucune référence (ils ont tous les deux la valeur {{jsxref("null")}}).

```js
var tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));
```

On crée ensuite un objet d'import qui contient une référence au tableau :

```js
var importObj = {
  js: {
    tbl: tbl,
  },
};
```

Enfin, on charge et on instancie le module WebAssembly (`table2.wasm`) grâce à la méthode {{jsxref("WebAssembly.instantiateStreaming()")}}, on logge la longueur du tableau et on appelle les deux fonctions référencées qui sont désormais dans le tableau (le module `table2.wasm` (cf. [la représentation textuelle](https://github.com/mdn/webassembly-examples/blob/master/text-format-examples/table2.was)) ajoute deux références de fonctions au tableau et chacune affiche une valeur simple) :

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  function (obj) {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

On voit ici qu'il faut appeler la fonction après avoir appeler l'opérateur sur l'accesseur (autrement dit, on écrit `get(0)()` plutôt que `get(0)`) .

Dans cet exemple, on montre comment créer et manipuler un tableau en JavaScript mais ce tableau est également accessible et manipulable depuis l'instance WebAssembly.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
