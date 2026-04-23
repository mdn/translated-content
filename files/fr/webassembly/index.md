---
title: WebAssembly
slug: WebAssembly
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

WebAssembly est un type de code pouvant être exécuté dans les navigateurs web modernes.
C'est un langage bas niveau, proche de l'assembleur, avec un format binaire compact qui s'exécute à des performances proches du natif et fournit aux langages comme C/C++, C# et Rust une cible de compilation pour qu'ils puissent fonctionner sur le web.
Il est également conçu pour fonctionner aux côtés de JavaScript, permettant aux deux de collaborer.

WebAssembly est conçu pour compléter et fonctionner avec JavaScript — en utilisant les API JavaScript de WebAssembly, vous pouvez charger des modules WebAssembly dans une application JavaScript et partager des fonctionnalités entre les deux. Cela vous permet de profiter des performances et de la puissance de WebAssembly ainsi que de l'expressivité et de la flexibilité de JavaScript dans la même application, même si vous ne savez pas écrire de code WebAssembly.

WebAssembly a de grandes implications pour la plateforme web, non seulement parce qu'il permet à du code écrit dans plusieurs langages de s'exécuter sur le web à une vitesse proche du natif, mais aussi parce qu'il rend possible l'exécution sur le web d'applications clientes qui ne pouvaient pas l'être auparavant.

Encore mieux, il est développé comme un standard du web via le [groupe de travail W3C WebAssembly <sup>(angl.)</sup>](https://www.w3.org/groups/wg/wasm/) et le [groupe communautaire <sup>(angl.)</sup>](https://www.w3.org/community/webassembly/) avec la participation active de tous les principaux éditeurs de navigateurs.

## Guides

Les [guides WebAssembly](/fr/docs/WebAssembly/Guides) couvrent des sujets comme les concepts de haut niveau, la compilation depuis différents langages, la représentation textuelle du format binaire Wasm et la façon d'exécuter WebAssembly.

- [Concepts de WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
  - : Commencez par lire les concepts de haut niveau derrière WebAssembly — ce que c'est, pourquoi c'est utile, comment il s'intègre à la plateforme web (et au-delà), et comment l'utiliser.
- [Compiler un nouveau module C/C++ vers WebAssembly](/fr/docs/WebAssembly/Guides/C_to_Wasm)
  - : Lorsque vous avez écrit du code en C/C++, vous pouvez le compiler en Wasm à l'aide d'un outil comme [Emscripten](https://emscripten.org/). Voyons comment cela fonctionne.
- [Compiler un module C existant vers WebAssembly](/fr/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : Un cas d'usage central de WebAssembly est de prendre l'écosystème existant de bibliothèques C et de permettre aux développeur·euse·s de les utiliser sur le web.
- [Compiler depuis Rust vers WebAssembly](/fr/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : Si vous avez écrit du code Rust, vous pouvez le compiler en WebAssembly&nbsp;! Ce tutoriel vous guide à travers tout ce qu'il faut savoir pour compiler un projet Rust en Wasm et l'utiliser dans une application web existante.
- [Charger et exécuter du code WebAssembly](/fr/docs/WebAssembly/Guides/Loading_and_running)
  - : Une fois que vous avez un module Wasm, cet article explique comment le récupérer, le compiler et l'instancier, en combinant l'API [WebAssembly JavaScript](/fr/docs/WebAssembly/Reference/JavaScript_interface) avec les API [Fetch](/fr/docs/Web/API/Fetch_API) ou [XHR](/fr/docs/Web/API/XMLHttpRequest).
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : Une fois le module Wasm chargé, vous voudrez l'utiliser. Cet article montre comment utiliser WebAssembly via l'API JavaScript WebAssembly.
- [Fonctions WebAssembly exportées](/fr/docs/WebAssembly/Guides/Exported_functions)
  - : Les fonctions WebAssembly exportées sont les reflets JavaScript des fonctions WebAssembly, permettant d'appeler du code WebAssembly depuis JavaScript. Cet article explique ce que c'est.
- [Comprendre le format texte WebAssembly](/fr/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : Cet article explique le format texte Wasm. Il s'agit de la représentation textuelle bas niveau d'un module Wasm affichée dans les outils de développement du navigateur lors du débogage.
- [Convertir le format texte WebAssembly en Wasm](/fr/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : Ce guide explique comment convertir un module WebAssembly écrit en format texte en un binaire Wasm.

## Référence API

- [Référence des instructions WebAssembly](/fr/docs/WebAssembly/Reference)
  - : Documentation de référence avec exemples interactifs pour l'ensemble des opérateurs WebAssembly.
- [Interface JavaScript WebAssembly](/fr/docs/WebAssembly/Reference/JavaScript_interface)
  - : Cet objet sert d'espace de noms pour toutes les fonctionnalités liées à WebAssembly.
- [`WebAssembly.Global()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Global)
  - : Un objet `WebAssembly.Global` représente une instance de variable globale, accessible depuis JavaScript et importable/exportable entre une ou plusieurs instances de [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module). Cela permet la liaison dynamique de plusieurs modules.
- [`WebAssembly.Module()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module)
  - : Un objet `WebAssembly.Module` contient du code WebAssembly sans état déjà compilé par le navigateur et pouvant être [partagé efficacement avec des Workers](/fr/docs/Web/API/Worker/postMessage), et instancié plusieurs fois.
- [`WebAssembly.Instance()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance)
  - : Un objet `WebAssembly.Instance` est une instance exécutable et avec état d'un `Module`. Les objets `Instance` contiennent toutes les [fonctions WebAssembly exportées](/fr/docs/WebAssembly/Guides/Exported_functions) permettant d'appeler du code WebAssembly depuis JavaScript.
- [`WebAssembly.compile()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compile_static)
  - : La fonction `WebAssembly.compile()` compile du code binaire WebAssembly en un objet `WebAssembly.Module`.
- [`WebAssembly.compileStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)
  - : La fonction `WebAssembly.compileStreaming()` compile un `WebAssembly.Module` directement à partir d'une source diffusée en continu.
- [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static)
  - : La fonction `WebAssembly.instantiate()` permet de compiler et d'instancier du code WebAssembly.
- [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)
  - : La fonction `WebAssembly.instantiateStreaming()` est l'API principale pour compiler et instancier du code WebAssembly, renvoyant à la fois un `Module` et sa première `Instance`.
- [`WebAssembly.validate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/validate_static)
  - : La fonction `WebAssembly.validate()` valide un tableau typé de code binaire WebAssembly donné.
- [`WebAssembly.Memory()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory)
  - : Un objet `WebAssembly.Memory` est un {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} redimensionnable qui contient les octets bruts de la mémoire accédée par une `Instance`.
- [`WebAssembly.Table()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table)
  - : Un objet `WebAssembly.Table` est un tableau typé redimensionnable de valeurs opaques, comme des références de fonctions, auxquelles accède une `Instance`.
- [`WebAssembly.Tag()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Tag)
  - : L'objet `WebAssembly.Tag` définit un type d'exception WebAssembly pouvant être levée vers ou depuis du code WebAssembly.
- [`WebAssembly.Exception()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Exception)
  - : L'objet `WebAssembly.Exception` représente une exception d'exécution levée de WebAssembly vers JavaScript, ou de JavaScript vers un gestionnaire d'exceptions WebAssembly.
- [`WebAssembly.CompileError()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/CompileError)
  - : Crée un nouvel objet `CompileError` WebAssembly.
- [`WebAssembly.LinkError()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/LinkError)
  - : Crée un nouvel objet `LinkError` WebAssembly.
- [`WebAssembly.RuntimeError()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)
  - : Crée un nouvel objet `RuntimeError` WebAssembly.

## Projets d'exemple

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Consultez notre dépôt [webassembly-examples](https://github.com/mdn/webassembly-examples/) pour de nombreux autres exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [WebAssembly sur Mozilla Research <sup>(angl.)</sup>](https://research.mozilla.org/)
- [webassembly.org <sup>(angl.)</sup>](https://webassembly.org/)
- [Articles WebAssembly sur le blog Mozilla Hacks <sup>(angl.)</sup>](https://hacks.mozilla.org/category/webassembly/)
- [Groupe communautaire W3C WebAssembly <sup>(angl.)</sup>](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm <sup>(angl.)</sup>](https://web.dev/articles/emscripting-a-c-library)
