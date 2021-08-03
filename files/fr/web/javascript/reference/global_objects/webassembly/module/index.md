---
title: WebAssembly.Module()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
tags:
  - Constructeur
  - JavaScript
  - Module
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module
---
{{JSRef}}

Un objet **`WebAssembly.Module`** contient du code WebAssembly, sans état et qui a déjà été compilé par le navigateur. Ce code peut être [partagé avec des _web worker_](/fr/docs/Web/API/Worker/postMessage) et être instancié à plusieurs reprises. Pour instancier le module, on pourra appeler la forme secondaire de {{jsxref("WebAssembly.instantiate()")}}.

Le constructeur `WebAssembly.Module()` peut être appelé de façon synchrone pour compiler du code WebAssembly. Toutefois, on utilisera généralement la fonction asynchrone {{jsxref("WebAssembly.compile()")}} qui permet de compiler du _bytecode_.

## Syntaxe

> **Attention :** La compilation de modules volumineux peut être consommatrice de ressources et de temps. Le constructeur `Module()` doit uniqument être utilisé lorsqu'il faut absolument avoir une compilation  synchrone. Pour tous les autres cas de figures, on privilégiera la méthode asynchrone {{jsxref("WebAssembly.compileStreaming()")}}.

    var monModule = new WebAssembly.Module(bufferSource);

### Paramètres

- `bufferSource`
  - : Un [tableau typé](/fr/docs/Web/JavaScript/Tableaux_typés) ou un {{jsxref("ArrayBuffer")}} qui contient le _bytecode_ du module WebAssembly qu'on souhaite compiler.

## Méthodes du constructeur `Module`

- {{jsxref("Objets_globaux/WebAssembly/Module/customSections", "WebAssembly.Module.customSections()")}}
  - : Pour un module donné et une chaîne de caractères donnée, cette méthode renvoie une copie des sections personnalisées (_custom sections_) du module qui ont le nom correspondant à la chaîne.
- {{jsxref("Objets_globaux/WebAssembly/Module/exports", "WebAssembly.Module.exports()")}}
  - : Pour un module donné, cette méthode renvoie un tableau dont les éléments sont des descriptions des exports déclarés.
- {{jsxref("Objets_globaux/WebAssembly/Module/imports", "WebAssembly.Module.imports()")}}
  - : Pour un module donné, cette méthode renvoie un tableau dont les éléments sont des descriptions des imports déclarés.

## Instances de `Module`

Toutes les instances de `Module` héritent du prototype du constructeur `Module()`, celui-ci peut être modifié afin de moifier le comportement de l'ensemble des instances de `Module`.

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module/prototype', 'Propriétés')}}

### Méthodes

Les instances de `Module` ne disposent pas de méthodes en propre.

## Spécifications

| Spécification                                                                                                    | État                                 | Commentaires                      |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblymodule-objects', 'WebAssembly.Module()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Module")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
