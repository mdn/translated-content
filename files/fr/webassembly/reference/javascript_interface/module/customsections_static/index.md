---
title: WebAssembly.Module.customSections()
slug: WebAssembly/Reference/JavaScript_interface/Module/customSections_static
original_slug: WebAssembly/JavaScript_interface/Module/customSections_static
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{WebAssemblySidebar}}

La méthode statique **`WebAssembly.Module.customSections()`** renvoie un tableau qui contient les sections personnalisées (<i lang="en">custom sections</i>) disponibles dans un module WebAssembly et qui ont un nom donné.

## Syntaxe

```js-nolint
WebAssembly.Module.customSections(module, nomSection)
```

### Paramètres

- `module`
  - : L'objet [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module) pour lequel on veut obtenir les sections personnalisées.
- `nomSection`
  - : Le nom de la section personnalisée qu'on souhaite obtenir.

### Valeur de retour

Un tableau contenant des [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) dont chacun contient les données d'une section personnalisée du module qui correspond à `nomSection`.

### Exceptions

Si le module passé en argument n'est pas une instance de [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module), la méthode lèvera une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).

## Description

Un module wasm contient une série de **sections**. La plupart de ces sections sont spécifiées et validées par la spécification WebAssembly mais les modules peuvent contenir certaines sections «&nbsp;personnalisées&nbsp;» (<i lang="en">custom sections</i>) qui sont ignorées lors de la phase de validation. Pour plus d'informations, consulter [l'article sur les structures de haut niveau](https://github.com/WebAssembly/design/blob/main/BinaryEncoding.md#high-level-structure) qui détaille la structure des sections et les différences entre les sections normales («&nbsp;connues&nbsp;») et les sections personnalisées.

Cela permet aux développeuses et développeurs d'inclure des données personnalisées dans un module WebAssembly pour d'autres desseins. Par exemple, on peut avoir [une section personnalisée `name`](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section), qui permet aux développeuses et développeurs de fournir des noms pour les fonctions et les variables locales du module (à la façon des «&nbsp;symboles&nbsp;» utilisé pour les programmes compilés).

Le format WebAssembly ne possède actuellement aucune syntaxe pour ajouter une section personnalisée. Il est toutefois possible d'ajouter une section nommée au module wasm pendant la conversion du texte vers .wasm. La commande `wast2wasm`, disponible avec l'outil [`wabt`](https://github.com/webassembly/wabt), possède une option `--debug-names` qui permet de créer un module `.wasm` avec une section personnalisée `name`&nbsp;:

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Exemples

Dans l'exemple qui suit (tiré de [ce fichier source](https://github.com/mdn/webassembly-examples/blob/main/other-examples/custom-section.html) et de [cette démonstration](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html)), on compile et on instancie le bytecode `simple-name-section.wasm` et on importe une fonction JavaScript dans le module lors de cette étape. Ensuite, on exporte une fonction depuis le module grâce à `Instance.exports`.

On faut aussi une vérification sur `WebAssembly.Module.customSections` pour vérifier si celle-ci contient une section personnalisée `"name"` dont on vérifie si la longueur est supérieure à 0. Ce module contenant une section `name`, les appels à `console.log()` sont exécutés et montrent que le tableau renvoyé par la méthode contient des objets [`ArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
WebAssembly.compileStreaming(fetch("simple-name-section.wasm")).then((mod) => {
  const nameSections = WebAssembly.Module.customSections(mod, "name");
  if (nameSections.length !== 0) {
    console.log("Module contains a name section");
    console.log(nameSections[0]);
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
