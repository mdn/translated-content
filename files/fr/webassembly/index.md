---
title: WebAssembly
slug: WebAssembly
---

{{WebAssemblySidebar}}{{SeeCompatTable}}

WebAssembly est un nouveau type de code qui peut être exécuté dans un navigateur web moderne. C'est un langage bas niveau, semblable à l'assembleur permettant d'atteindre des performances proches des applications natives (par exemple écrites en C/C++) tout en fonctionnant sur le Web. WebAssembly est conçu pour fonctionner en lien avec JavaScript.

## En résumé

WebAssembly représente une avancée fondamentale de la plateforme web. Il permet d'exécuter du code (éventuellement écrit depuis différents langages) sur le Web avec des performances similaires aux applications natives.

WebAssembly est conçu pour être utilisé de pair avec JavaScript. Grâce à l'API JavaScript WebAssembly, on peut charger des modules WebAssembly au sein d'une application JavaScript et partager des fonctionnalités entre les deux. Cela permet de tirer parti des performances de WebAssembly et de la flexibilité de JavaScript, même si on ne sait pas écrire du code WebAssembly.

WebAssembly est conçu comme un standard web par le [groupe communautaire du W3C pour WebAssembly](https://www.w3.org/community/webassembly/) auquel participe les différents éditeurs de navigateur.

## Guides

- [Les concepts de WebAssembly](/fr/docs/WebAssembly/Concepts)
  - : Découvrez les concepts clés de WebAssembly : ce que c'est, son utilité, l'intégration dans le Web et comment l'utiliser.
- [Compiler du code C/C++ en WebAssembly](/fr/docs/WebAssembly/C_to_wasm)
  - : Du code écrit en C/C++ peut être compilé en WebAssembly grâce à des outils tels que [Emscripten](/fr/docs/Mozilla/Projects/Emscripten). Nous voyons ici comment cela fonctionne.
- [Charger et exécuter du code WebAssembly](/fr/docs/WebAssembly/Loading_and_running)
  - : Dans cet article, on aborde comment récupérer, compiler et instancier en associant l'API [WebAssembly JavaScript](/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly) avec les API [Fetch](/fr/docs/Web/API/Fetch_API) ou [XHR](/fr/docs/Web/API/XMLHttpRequest).
- [Mettre en cache des modules WebAssembly compilés](/fr/docs/WebAssembly/Caching_modules)
  - : La mise en cache de grands modules WebAssembly côté client permet d'améliorer les performances au démarrage. Dans cet article, on voit comment utiliser [IndexedDB](/fr/docs/Web/API/IndexedDB_API) pour cela.
- [Utiliser l'API JavaScript de WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
  - : Une fois le module WebAssembly chargé, on souhaitera l'utiliser… Dans cet article, on verra comment utiliser WebAssembly grâce à l'API JavaScript associée.
- [Les fonctions WebAssembly exportées](/fr/docs/WebAssembly/Exported_functions)
  - : Les fonctions WebAssembly exportées sont les représentations JavaScript des fonctions WebAssembly qui permettent d'utiliser du code WebAssembly depuis un script JavaScript. Cet article décrit leur fonctionnement.
- [Comprendre le format texte WebAssembly](/fr/docs/WebAssembly/Understanding_the_text_format)
  - : Cet article explique la composition du format texte de WebAssembly. Il s'agit d'une représentation bas-niveau du module .wasm tel que montré dans les outils de développement du navigateur.
- [Convertir un fichier texte WebAssembly en wasm](/fr/docs/WebAssembly/Text_format_to_wasm)
  - : Cet article détaille comment convertir un module WebAssembly rédigé dans un format texte en un fichier binaire .wasm.

## Référence de l'API JavaScript

- {{jsxref("Objets_globaux/WebAssembly", "WebAssembly")}}
  - : Cet objet représente l'espace de nom encapsulant les fonctionnalités relatives à WebAssembly.
- {{jsxref("Objets_globaux/WebAssembly/Module", "WebAssembly.Module")}}
  - : Un objet `WebAssembly.Module` contient du code WebAssembly, sans état, qui a déjà été compilé par le navigateur et qui peut être [partagé dans les _web workers_](/fr/docs/Web/API/Worker/postMessage), [mis en cache dans IndexedDB](/fr/docs/WebAssembly/Caching_modules) et instancié à plusieurs reprises.
- {{jsxref("Objets_globaux/WebAssembly/Instance", "WebAssembly.Instance")}}
  - : Un objet `WebAssembly.Instance` est une instance exécutable (disposant d'un état) d'un `Module`. Les objets `Instance` contiennent toutes les [fonctions WebAssembly exportées](/fr/docs/WebAssembly/Exported_functions) qui permettent d'utiliser du code WebAssembly via du code JavaScript.
- {{jsxref("Objets_globaux/WebAssembly/instantiate", "WebAssembly.instantiate()")}}
  - : La fonction `WebAssembly.instantiate()` représente l'API principale pour compiler et instancier le code WebAssembly. Cette méthode renvoie un `Module` ainsi que sa première `Instance`.
- {{jsxref("Objets_globaux/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : Un objet `WebAssembly.Memory` est un tableau {{jsxref("Objets_globaux/ArrayBuffer", "ArrayBuffer")}} redimensionnable qui contient les octets de mémoire brute auxquels on peut accéder via une `Instance`.
- {{jsxref("Objets_globaux/WebAssembly/Table", "WebAssembly.Table()")}}
  - : Un objet `WebAssembly.Table` est un tableau typé contenant des valeurs opaques et qui peut être redimensionné. On peut accéder aux valeurs via un objet `Instance`.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Crée un nouvel objet WebAssembly `CompileError`.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Crée un nouvel objet WebAssembly `LinkError`.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Crée un nouvel objet WebAssembly `RuntimeError`.

## Exemples

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- Notre dépôt GitHub [webassembly-examples](https://github.com/mdn/webassembly-examples/) qui contient plusieurs exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [webassembly.org](http://webassembly.org/)
- [Les articles WebAssembly sur Mozilla Hacks](https://hacks.mozilla.org/category/webassembly/) ou sur [tech.mozfr.org en français](https://tech.mozfr.org/tag/WebAssembly)
- [Le groupe communautaire W3C sur WebAssembly](https://www.w3.org/community/webassembly/)
- [L'en-tête HTTP `Large-Allocation`](/fr/docs/Web/HTTP/Headers/Large-Allocation)
