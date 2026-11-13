---
title: WebAssembly.Table.prototype.set()
slug: WebAssembly/Reference/JavaScript_interface/Table/set
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

La méthode **`set()`** de l'objet [`WebAssembly.Table`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table) permet de modifier une référence stockée à un index donné par une valeur différente.

## Syntaxe

```js-nolint
set(index, value)
```

### Paramètres

- `index`
  - : L'index de la référence de la fonction qu'on souhaite modifier.
- `value`
  - : La valeur par laquelle on souhaite remplacer la référence. Cette valeur doit être une valeur du type d'élément du tableau. Selon le type, il peut s'agir d'une [fonction WebAssembly exportée](/fr/docs/WebAssembly/Guides/Exported_functions), d'une enveloppe JavaScript pour une fonction Wasm sous-jacente, ou d'une référence hôte.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- Si `index` est supérieur ou égal à [`Table.prototype.length`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/length), une exception {{JSxRef("RangeError")}} est levée.
- Si `value` n'est pas du type d'élément du tableau, une exception {{JSxRef("TypeError")}} est levée.

## Exemples

### Utiliser la méthode `set()`

L'exemple suivant (voir «&nbsp;table2.html&nbsp;» [code source <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) et [version en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) crée une nouvelle instance de tableau WebAssembly avec une taille initiale de deux références. Nous affichons ensuite la longueur du tableau et le contenu des deux index (ces valeurs sont obtenues à l'aide de [`Table.prototype.get()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/get)) pour montrer que la longueur est de deux, et que les index ne contiennent actuellement aucune référence de fonction (ils retournent actuellement [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null)).

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));
```

Nous créons ensuite un objet d'importation qui contient une référence au tableau&nbsp;:

```js
const importObj = {
  js: { tbl },
};
```

Enfin, nous chargeons et instancions un module Wasm (table2.wasm) en utilisant [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), affichons la longueur du tableau, et invoquons les deux fonctions référencées qui sont maintenant stockées dans le tableau. Le module «&nbsp;table2.wasm&nbsp;» ajoute deux références de fonction au tableau, qui affichent chacune une valeur simple (voir [représentation textuelle <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat))&nbsp;:

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Notez qu'il faut inclure un second opérateur d'appel de fonction à la fin de l'accesseur pour réellement invoquer la fonction référencée et afficher la valeur stockée à l'intérieur (par exemple, `get(0)()` plutôt que `get(0)`).

Cet exemple montre que nous créons et accédons au tableau depuis JavaScript, mais que le même tableau est visible et appelable à l'intérieur de l'instance Wasm aussi.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Un aperçu de [WebAssembly](/fr/docs/WebAssembly)
- [Les concepts associés à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
