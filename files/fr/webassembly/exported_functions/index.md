---
title: Exported WebAssembly functions
slug: WebAssembly/Exported_functions
---

{{WebAssemblySidebar}}

Les fonctions WebAssembly exportées sont la représentation des fonctions WebAssembly dans JavaScript. Cet article décrit un plus en détail à quoi elle correspondent...

## Exportée... quoi?

Les fonctions WebAssembly exportées sont simplement des emballages (wrappers) Javascript autour de fonction WebAssembly afin de les représenter dans un contexte Javascript. Lorsqu'elles sont appelées, une procédure en arrière plan est engagée afin d'obtenir une conversion des types compatible avec WebAssembly (Par exemple convertir `numbers` en `Int32`), les arguments sont transmis à la fonction au sein du module wasm, la fonction est invoquée, et enfin le résultat est à nouveau convertit et retourner à Javascript.

Vous pouvez exporter les fonctions WebAssembly de deux manières:

- Par un appel à [`Table.prototype.get()`](/fr/docs/WebAssembly/API/Table/get) sur une table existante.
- Par un appel à une fonction exportée à partir de l'instance d'un module wasm via [`Instance.exports`](/fr/docs/WebAssembly/API/Instance/exports).

Dans les deux cas, vous obtenez le même genre de wrapper pour la fonction sous jacente. Du point de vue de JavaScript, une fonction wasm est une fonction JavaScript— A la différence prés qu'elles sont encapsulées par l'instance d'une fonction exportée wasm et qu'il y a un nombre limité de façon d'y accéder.

## Un exemple

Regardons un exemple pour mettre les choses au clair (tu peux le trouver sur GitHub sur [table-set.html](https://github.com/mdn/webassembly-examples/blob/master/other-examples/table-set.html); à voir également en [live](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), et check la [representation](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat) textuelle wasm):

```js
var otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  var tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
  otherTable.set(0, tbl.get(0));
  otherTable.set(1, tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

Dans cet exemple, nous créons une table (`otherTable`) à partir de JavaScript en utilisant le constructeur {{jsxref("WebAssembly.Table")}}, puis nous chargeons table.wasm dans notre page en utilisant la méthode {{jsxref("WebAssembly.instantiateStreaming()")}}.

Nous pouvons ensuite accéder aux fonctions exportées à partir du module, récupérer les références de chaque fonction via [`tbl.get()`](/fr/docs/WebAssembly/API/Table/get) et logguer le résultat de chacune d'elles dans la console. Enfin, nous utilisons `set()` avec la table `otherTable` afin de lui fournir les references aux mêmes functions que la table `tbl`.

Pour vérifier que cela à fonctionné correctement, nous récupérons les références de la table `otherTable` et imprimons également les résultats dans la console, et les résultats sont identiques aux précédents.

## Des fonctions à part entière

Dans l'exemple précédent, la valeur de retour de chaque appel à [`Table.prototype.get()`](/fr/docs/WebAssembly/API/Table/get) est une fonction WebAssembly exportée — exactement ce dont nous avons parlé jusqu'à maintenant.

Il vaut la peine d'être noté que ceux sont des fonctions JavaScript à part entière, en plus d'être un emballage à des fonctions WebAssembly. Si vous chargez l'exemple ci-dessus dans un navigateur compatible avec WebAssembly, et excécutez les lignes suivantes dans votre console:

```js
var testFunc = otherTable.get(0);
typeof testFunc;
```

Vous obtiendrez le résultat `function` en valeur de retour. Cette fonction peut effectuer tout ce qu'une fonction Javascript classique peut effectuer — [`call()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), etc. `testFunc.toString()` retourne un résultat intéressant:

```js
function 0() {
    [native code]
}
```

Cela vous donne une idée plus précise de la nature de l'emballage (wrapper-type).

Some other particulars to be aware of with exported WebAssembly functions:

- Their [length](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) property is the number of declared arguments in the wasm function signature.
- Their [name](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/name) property is the `toString()` result of the function's index in the wasm module.
- If you try to call a exported wasm function that takes or returns an i64 type value, it currently throws an error because JavaScript currently has no precise way to represent an i64. This may well change in the future though — a new int64 type is being considered for future standards, which could then be used by wasm.
