---
title: Constructeur WebAssembly.Table()
slug: WebAssembly/JavaScript_interface/Table/Table
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/Table
browser-compat: javascript.builtins.WebAssembly.Table.Table
---
{{JSRef}}

Le constructeur **`WebAssembly.Table()`** crée un nouvel objet `Table` de la taille et du type d'élément donné.

## Syntaxe

```js
new WebAssembly.Table(descripteurTable)
```

### Paramètres

- _descripteurTable_

  - : Un objet qui peut contenir les propriétés suivantes&nbsp;:

    - `element`
      - : Une chaîne de caractères représentant le type de valeur à stocker dans la table. Pour le moment, sa valeur ne peut être que `"anyfunc"` (indiquant les fonctions).
    - `initial`
      - : Le nombre initial d'éléments dans la table WebAssembly.
    - _maximum {{optional_inline}}_
      - : Le nombre maximal d'éléments jusqu'auquel la table WebAssembly peut grandir.

### Exceptions

- Si `descripteurTable` n'est pas un objet, une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.
- Si `maximum` est fourni et est inférieur à `initial`, une exception [`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError) sera levée.

## Exemples

### Créer une nouvelle instance d'une Table WebAssembly

Dans l'exemple suivant (voir [le code source](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) et [la démo live](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html) correspondants), on crée une nouvelle instance d'une table WebAssembly avec une taille initiale de 2 éléments. On affiche alors la longueur de la table et son contenu (grâce à [`Table.prototype.get()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) pour montrer que la longueur vaut 2 et que les deux éléments sont [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null).

```js
var tbl = new WebAssembly.Table({initial:2, element:"anyfunc"});
console.log(tbl.length);  // "2"
console.log(tbl.get(0));  // "null"
console.log(tbl.get(1));  // "null"
```

On peut ensuite créer un objet d'import qui contient la table&nbsp;:

```js
var importObj = {
  js: {
    tbl:tbl
  }
};
```

Enfin, on charge et on instancie un module WASM (table2.wasm) en utilisant la méthode [`WebAssembly.instantiateStreaming()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming). Le module table2.wasm contient deux fonctions (une qui renvoie 42 et l'autre qui renvoie 83) et on stocke ces deux fonctions dans les éléments 0 et 1 de la table importée (voir [la représentation textuelle](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.wat)).  Ainsi, après l'instanciation, la table a toujours une longueur qui vaut 2 et les éléments contiennent désormais [des fonctions WebAssembly exportées](/fr/docs/WebAssembly/Exported_functions) qu'on peut appeler depuis le code JavaScript.

```js
WebAssembly.instantiateStreaming(fetch('table2.wasm'), importObject)
.then(function(obj) {
  console.log(tbl.length);
  console.log(tbl.get(0)());
  console.log(tbl.get(1)());
});
```

On notera qu'il faut inclure une deuxième paire de parenthèses afin d'invoquer la fonction référencée et d'afficher la valeur qui y est stockée (on écrit donc `get(0)()` plutôt que `get(0)`) .

Dans cet exemple, on illustre la création et l'accès à la table depuis du code JavaScript, mais cette même table est visible depuis l'instance WASM également.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La page  [WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
