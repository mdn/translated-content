---
title: WebAssembly.Module.customSections()
slug: WebAssembly/JavaScript_interface/Module/customSections
tags:
  - API
  - Constructeur
  - JavaScript
  - Module
  - Méthode
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/customSections
---
{{JSRef}}

La méthode **`WebAssembly.customSections()`** renvoie un tableau qui contient les sections personnalisées (_custom sections_) disponibles dans un module WebAssembly et qui ont un nom donné.

## Syntaxe

```js
var custSec = WebAssembly.Module.customSections(module, nomSection);
```

### Paramètres

- `module`
  - : L'objet {{jsxref("WebAssembly.Module")}} pour lequel on veut obtenir les sections personnalisées.
- `nomSection`
  - : Le nom de la section personnalisée qu'on souhaite obtenir.

### Valeur de retour

Un tableau contenant des {{domxref("ArrayBuffer")}} dont chacun contient les données d'une section personnalisée du module qui correspond à `nomSection`.

### Exceptions

Si le module passé en argument n'est pas une instance de {{jsxref("WebAssembly.Module")}}, la méthode lèvera une exception {{jsxref("TypeError")}}.

## Les sections personnalisées

Un module wasm contient une série de **sections**. La plupart de ces sections sont spécifiées et validées par la spécification WebAssembly mais les modules peuvent contenir certaines sections « personnalisées » (_custom sections_) qui sont ignorées lors de la phase de validation. Pour plus d'informations, consulter [l'article sur les structures de haut niveau](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#high-level-structure) qui détaille la structure des sections et les différences entre les sections normales (« connues ») et les sections personnalisées.

Cela permet aux développeurs d'inclure des données personnalisées dans un module WebAssembly pour d'autres desseins. Par exemple, on peut avoir [une section personnalisée `name`](https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section), qui permet aux développeurs de fournir des noms pour les fonctions et les variables locales du module (à la façon des « symboles » utilisé pour les programmes compilés).

Le format WebAssembly ne possède actuellement aucune syntaxe pour ajouter une section personnalisée. Il est toutefois possible d'ajouter une section nommée au module wasm pendant la conversion du texte vers .wasm. La commande `wast2wasm`, disponible avec l'outil [`wabt`](https://github.com/webassembly/wabt), possède une option `--debug-names` qui permet de créer un module `.wasm` avec une section personnalisée `name` :

```bash
wast2wasm simple-name-section.was -o simple-name-section.wasm --debug-names
```

## Exemples

Dans l'exemple qui suit (tiré de [ce fichier source](https://github.com/mdn/webassembly-examples/blob/master/other-examples/custom-section.html) et de [cette démonstration](https://mdn.github.io/webassembly-examples/other-examples/custom-section.html)), on compile et on instancie le bytecode `simple-name-section.wasm` et on importe une fonction JavaScript dans le module lors de cette étape. Ensuite, on exporte une fonction depuis le module grâce à `Instance.exports`.

On faut aussi une vérification sur `WebAssembly.Module.customSections` pour vérifier si celle-ci contient une section personnalisée `"name"` dont on vérifie si la longueur est supérieure à 0. Ce module contenant une section `name`, les appels à `console.log()` sont exécutés et montrent que le tableau renvoyé par la méthode contient des objets {{domxref("ArrayBuffer")}}.

```js
WebAssembly.compileStreaming(fetch('simple-name-section.wasm'))
.then(function(mod) {
  var nameSections = WebAssembly.Module.customSections(mod, "name");
  if (nameSections.length != 0) {
    console.log("Le module contient une section nommée");
    console.log(nameSections[0]);
  };
});
```

## Spécifications

| Spécification                                                                                                        | État                                 | Commentaires                                       |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblymodulecustomsections', 'customSections()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale pour WebAssembly. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Module.customSections")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
