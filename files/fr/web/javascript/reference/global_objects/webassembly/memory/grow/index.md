---
title: WebAssembly.Memory.prototype.grow()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
  - memory
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/grow
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory/grow
---
{{JSRef}}

La méthode **`grow()`**, rattachée au prototype de l'objet [`Memory`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory), permet d'augmenter la taille de l'espace mémoire correspondant d'un nombre de pages WebAssembly.

## Syntaxe

```js
memory.grow(nombre);
```

### Paramètres

- `nombre`
  - : Le nombre de pages WebAssembly duquel on veut augmenter l'espace mémoire correspondant à l'objet courant (une page mémoire WebAssembly correspond à 64 Ko).

### Valeur de retour

La taille de l'espace mémoire avant l'extension, exprimée en nombre de pages WebAssembly.

## Exemples

Dans le code qui suit, on crée une instance de `Memory` qui mesure initialement 1 page (soit 64 Ko) et dont la taille maximale est de 10 pages (soit 6,4 Mo).

```js
var memory = new WebAssembly.Memory({initial:10, maximum:100});
```

Ensuite, on augmente la taille de l'espace mémoire d'une page grâce à la méthode :

```js
const bytesPerPage = 64 * 1024;
console.log(memory.buffer.byteLength / bytesPerPage);  // "1"
console.log(memory.grow(1));                           // "1"
console.log(memory.buffer.byteLength / bytesPerPage);  // "2"
```

On voit ici que la valeur de `grow()` indique l'espace utilisé avant l'agrandissement de la mémoire.

## Spécifications

| Spécification                                                                                        | État                                 | Commentaires                                       |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblymemoryprototypegrow', 'grow()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale pour WebAssembly. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Memory.grow")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
