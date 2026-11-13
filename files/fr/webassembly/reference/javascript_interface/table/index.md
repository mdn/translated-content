---
title: WebAssembly.Table
slug: WebAssembly/Reference/JavaScript_interface/Table
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

L'objet **`WebAssembly.Table`** est un objet JavaScript qui agit comme une structure de type tableau représentant un tableau WebAssembly, lequel stocke des références homogènes. Un tableau créé en JavaScript ou dans du code WebAssembly sera accessible et modifiable depuis du code JavaScript et depuis du code WebAssembly.

> [!NOTE]
> Actuellement, les tableaux WebAssembly peuvent uniquement stocker des références à des fonctions ou des références hôtes, mais cette fonctionnalité sera vraisemblablement étendue par la suite.

## Constructeur

- [`WebAssembly.Table()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/Table)
  - : Crée un nouvel objet `Table`.

## Propriétés d'instance

- [`Table.prototype.length`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/length) {{ReadOnlyInline}}
  - : Retourne la longueur du tableau, c'est-à-dire le nombre d'éléments dans le tableau.

## Méthodes d'instance

- [`Table.prototype.get()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/get)
  - : Fonction accesseur — obtient l'élément stocké à un index donné.
- [`Table.prototype.grow()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)
  - : Augmente la taille de l'instance `Table` d'un nombre défini d'éléments.
- [`Table.prototype.set()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/set)
  - : Définit un élément stocké à un index donné avec une valeur donnée.

## Exemples

### Créer une nouvelle instance de `Table` WebAssembly

L'exemple suivant (voir table2.html [code source <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) et [version en ligne <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) crée une nouvelle instance de Table WebAssembly avec une taille initiale de 2 éléments. Nous affichons ensuite la longueur du tableau et le contenu des deux indices (obtenus avec [`Table.prototype.get()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/get)) pour montrer que la longueur est de deux et que les deux éléments sont [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null).

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

Nous créons ensuite un objet d'importation qui contient le tableau&nbsp;:

```js
const importObj = {
  js: { tbl },
};
```

Enfin, nous chargeons et instancions un module Wasm (table2.wasm) en utilisant la méthode [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Le module table2.wasm contient deux fonctions (une qui retourne 42 et une autre qui retourne 83) et les stocke dans les éléments 0 et 1 du tableau importé (voir [représentation textuelle <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)). Ainsi, après l'instanciation, le tableau a toujours une longueur de 2, mais les éléments contiennent maintenant des [fonctions WebAssembly exportées](/fr/docs/WebAssembly/Guides/Exported_functions) appelables depuis JS.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Notez qu'il faut inclure un second opérateur d'invocation de fonction à la fin de l'accesseur pour réellement invoquer la fonction référencée et enregistrer la valeur qu'elle contient (par exemple, `get(0)()` plutôt que `get(0)`).

Cet exemple montre que nous créons et accédons au tableau depuis JavaScript, mais le même tableau est également visible et appelable à l'intérieur de l'instance Wasm.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
