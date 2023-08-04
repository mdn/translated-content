---
title: WebAssembly.Table()
slug: WebAssembly/JavaScript_interface/Table
---

{{WebAssemblySidebar}}

Le constructeur **`WebAssembly.Table()`** permet de créer un nouvel objet `Table`.

Cet objet est une enveloppe JavaScript qui représente un tableau WebAssembly et qui contient des références à des fonctions. Un tableau créé en JavaScript ou dans du code WebAssembly sera accessible et modifiable depuis du code JavaScript et depuis du code WebAssembly.

> **Note :** Actuellement, les tableaux WebAssembly peuvent uniquement stocker des références à des fonctions. Cette fonctionnalité sera vraisemblablement étendue par la suite.

## Syntaxe

```js
var monTableau = new WebAssembly.Table(descripteurTableau);
```

### Paramètres

- `descripteurTableau`

  - : Un objet composé des propriétés qui suivent :

    - `element`
      - : Une chaîne de caractères qui représente le type de référence enregistrée dans le tableau. Actuellement, la seule valeur possible est `"anyfunc"` (pour indiquer des fonctions).
    - `initial`
      - : La longueur initiale du tableau WebAssembly. Cela correspond au nombre d'éléments contenus dans le tableau.
    - `maximum {{optional_inline}}`
      - : La taille maximale que pourra avoir tableau WebAssembly s'il est étendu.

### Exceptions

- Si `tableDescriptor` n'est pas un objet, une exception {{jsxref("TypeError")}} sera levée.
- Si `maximum` est défini et est inférieur à `initial`, une exception {{jsxref("RangeError")}} sera levée.

## Instances de `Table`

Toutes les instances `Table` héritent des propriétés [du prototype du constructeur](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Table/prototype) `Table()`. Ce dernier peut être utilisé afin de modifier l'ensemble des instances `Table`.

### Propriétés

- `Table.prototype.constructor`
  - : Renvoie la fonction qui a créé l'instance. Par défaut, c'est le constructeur {{jsxref("WebAssembly.Table()")}}.
- {{jsxref("WebAssembly/Table/length","Table.prototype.length")}}
  - : Renvoie la longueur du tableau, c'est-à-dire le nombre de références qui sont enregistrées dans le tableau.

### Méthodes

- {{jsxref("WebAssembly/Table/get","Table.prototype.get()")}}
  - : Une fonction d'accès qui permet d'obtenir l'élément du tableau situé à une position donnée.
- {{jsxref("WebAssembly/Table/grow","Table.prototype.grow()")}}
  - : Cette méthode permet d'augmenter la taille du tableau `Table` d'un incrément donné.
- {{jsxref("WebAssembly/Table/set","Table.prototype.set()")}}
  - : Cette méthode permet de modifier un élément du tableau situé à une position donnée.

## Exemples

Dans l'exemple qui suit (tiré du fichier [table2.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table2.html) et qui dispose [d'une démonstration](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)), on crée une nouvelle instance d'un tableau WebAssembly avec une taille initiale permettant de stocker 2 références. Ensuite, on imprime la longueur du tableau et le contenu des deux éléments (obtenus grâce à la méthode {{jsxref("WebAssembly/Table/get", "Table.prototype.get()")}} afin de montrer que la longueur vaut 2 et que le tableau ne contient encore aucune référence de fonction (pour les deux positions, on a la valeur {{jsxref("null")}}).

```js
var tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));
```

Ensuite, on crée un objet d'import qui contient une référence au tableau :

```js
var importObj = {
  js: {
    tbl: tbl,
  },
};
```

Enfin, on charge et on instancie un module WebAssembly (table2.wasm) grâce à la fonction {{jsxref("WebAssembly.instantiateStreaming()")}}. Le module `table2.wasm` a ajouté deux références de fonctions (cf. [sa représentation textuelle](https://github.com/mdn/webassembly-examples/blob/0991effbbf2e2cce38a7dbadebd2f3495e3f4e07/js-api-examples/table2.wat)). Chacune de ces fonctions fournit une valeur simple :

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  function (obj) {
    console.log(tbl.length); // "2"
    console.log(tbl.get(0)()); // "42"
    console.log(tbl.get(1)()); // "83"
  },
);
```

On voit ici qu'il faut d'abord récupérer la fonction puis effectuer une invocation pour obtenir la valeur correspondante à partir de l'accesseur (autrement dit, on écrit `get(0)()` plutôt que `get(0)` pour obtenir le résultat de la fonction) .

Dans cet exemple, on voit comment créer et manipuler le tableau depuis du code JavaScript mais ce même tableau est également accessible depuis l'instance WebAssembly.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
