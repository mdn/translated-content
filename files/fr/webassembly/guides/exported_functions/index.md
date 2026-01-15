---
title: Fonctions WebAssembly exportées
slug: WebAssembly/Guides/Exported_functions
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Les fonctions WebAssembly exportées sont la façon dont les fonctions WebAssembly sont représentées dans JavaScript. Cet article décrit plus en détail ce qu'elles sont.

## Exportée... quoi ?

Les fonctions WebAssembly exportées sont simplement des emballages (<i lang="en">wrappers</i> en anglais) Javascript autour de fonction WebAssembly afin de les représenter dans un contexte Javascript. Lorsqu'elles sont appelées, une procédure en arrière plan est engagée afin d'obtenir une conversion des types compatible avec WebAssembly (Par exemple convertir `numbers` en `Int32`), les arguments sont transmis à la fonction au sein du module wasm, la fonction est invoquée, et enfin le résultat est à nouveau convertit et retourner à Javascript.

Vous pouvez exporter les fonctions WebAssembly de deux manières&nbsp;:

- Par un appel à [`Table.prototype.get()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/get) sur une table existante.
- Par un appel à une fonction exportée à partir de l'instance d'un module wasm via [`Instance.exports`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports).

Dans les deux cas, vous obtenez le même type d'emballage pour la fonction sous-jacente. Du point de vue de JavaScript, c'est comme si chaque fonction Wasm _était_ aussi une fonction JavaScript — mais elles sont encapsulées par l'instance d'objet fonction wasm exportée et il n'y a que des moyens limités d'y accéder.

## Un exemple

Regardons un exemple pour mettre les choses au clair (tu peux le trouver sur GitHub sur [table-set.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/other-examples/table-set.html); à voir également en [live <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), et check la [representation <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) textuelle wasm)&nbsp;:

```js
const otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
  otherTable.set(0, tbl.get(0));
  otherTable.set(1, tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

Dans cet exemple, nous créons une table (`otherTable`) à partir de JavaScript en utilisant le constructeur [`WebAssembly.Table`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table), puis nous chargeons table.wasm dans notre page en utilisant la méthode [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

Nous pouvons ensuite accéder aux fonctions exportées à partir du module, récupérer les références de chaque fonction via [`tbl.get()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/get) et logguer le résultat de chacune d'elles dans la console. Enfin, nous utilisons `set()` avec la table `otherTable` afin de lui fournir les references aux mêmes functions que la table `tbl`.

Pour vérifier que cela à fonctionné correctement, nous récupérons les références de la table `otherTable` et imprimons également les résultats dans la console, et les résultats sont identiques aux précédents.

## Des fonctions à part entière

Dans l'exemple précédent, la valeur de retour de chaque appel à [`Table.prototype.get()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/get) est une fonction WebAssembly exportée — exactement ce dont nous avons parlé jusqu'à maintenant.

Il vaut la peine d'être noté que ceux sont des fonctions JavaScript à part entière, en plus d'être un emballage à des fonctions WebAssembly. Si vous chargez l'exemple ci-dessus dans un navigateur compatible avec WebAssembly, et excécutez les lignes suivantes dans votre console&nbsp;:

```js
const testFunc = otherTable.get(0);
typeof testFunc;
```

Vous obtiendrez le résultat `function` en valeur de retour. Cette fonction peut effectuer tout ce qu'une fonction Javascript classique peut effectuer — [`call()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), etc. `testFunc.toString()` retourne un résultat intéressant:

```plain
function 0() {
    [native code]
}
```

Cela vous donne une idée plus précise de la nature de l'emballage (<i lang="en">wrapper-type</i> en anglais).

Quelques autres particularités à connaître concernant les fonctions WebAssembly exportées&nbsp;:

- Leur propriété [length](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) correspond au nombre d'arguments déclarés dans la signature de la fonction wasm.
- Leur propriété [name](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/name) correspond au résultat de `toString()` de l'index de la fonction dans le module wasm.
- Si vous essayez d'appeler une fonction wasm exportée qui prend ou retourne une valeur de type i64, cela génère actuellement une erreur car JavaScript n'a pas encore de moyen précis de représenter un i64. Cela pourrait cependant évoluer à l'avenir — un nouveau type int64 est envisagé pour de futurs standards, qui pourrait alors être utilisé par wasm.
