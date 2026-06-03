---
title: Concepts de WebAssembly
slug: WebAssembly/Guides/Concepts
l10n:
  sourceCommit: dc9d517589ac7b74bc205f49492b0450dfdb78de
---

Cet article explique les concepts de fonctionnement de WebAssembly, y compris ses objectifs, les problèmes qu'il résout et la manière dont il s'exécute dans le moteur de rendu du navigateur.

## Qu'est-ce que WebAssembly ?

WebAssembly est un nouveau type de code pouvant être exécuté dans les navigateurs modernes et fournissant de nouvelles fonctionnalités ainsi que des gains majeurs en performance. Il n'est pas particulièrement destiné à être écrit à la main, mais il est plutôt conçu pour être une cible de compilation efficace pour les langages source de bas niveau tels C, C ++, Rust, etc.

Cela a d'énormes implications pour la plate-forme web — il fournit un moyen d'exécuter un code écrit dans divers langages sur le web à une vitesse proche du natif, avec des applications clientes exécutées sur le web qui auparavant n'auraient pas pu être réalisées.

De plus, vous ne devez même pas savoir comment créer du code WebAssembly pour en profiter. Les modules WebAssembly peuvent être importés dans une application web (ou Node.js) en exposant les fonctions WebAssembly à utiliser via JavaScript. Les frameworks JavaScript pourraient utiliser WebAssembly pour conférer des avantages massifs de performance et de nouvelles fonctionnalités tout en rendant la fonctionnalité facilement accessible aux développeur·euse·s web.

## Objectifs de WebAssembly

WebAssembly est en cours de création en tant que standard ouvert au sein du [W3C WebAssembly Community Group <sup>(angl.)</sup>](https://www.w3.org/community/webassembly/) avec les objectif suivants&nbsp;:

- Être rapide, efficace et portable — Le code WebAssembly peut être exécuté à une vitesse proche du natif sur plusieurs plateformes en profitant des [capacités matérielles communes <sup>(angl.)</sup>](https://webassembly.org/docs/portability/#assumptions-for-efficient-execution).
- Être lisible et débuggable — WebAssembly est un langage d'assemblage de bas niveau, mais son format de texte est lisible par l'homme (la spécification pour laquelle il est encore en cours de finalisation) et permet au code d'être écrit, lu et débuggé à la main.
- Conserver la sécurité — WebAssembly est conçu pour être exécuté dans un environnement sûr, en sandbox. Comme d'autres codes web, il imposera les règles de même origine du navigateur, ainsi que ses politiques d'autorisations.
- Ne pas casser le web — WebAssembly est conçu de manière à facilement s'associer aux autres technologies web et à maintenir une rétrocompatibilité.

> [!NOTE]
> WebAssembly aura également des usages en dehors du web et des environnements JavaScript (voir [Non-web embeddings <sup>(angl.)</sup>](https://webassembly.org/docs/non-web/)).

## Comment WebAssembly s'intègre dans la plateforme web ?

La plateforme web peut s'imaginer comme composée de deux parties&nbsp;:

- Une machine virtuelle (VM) qui exécute le code de la Web app, e.g le code JavaScript qui fait tourner vos applications.
- Une ensemble de [Web APIs](/fr/docs/Web/API) que la Web app peut appeler pour contrôler les fonctionnalités des navigateurs/appareils et réaliser des actions ([DOM](/fr/docs/Web/API/Document_Object_Model), [CSSOM](/fr/docs/Web/API/CSS_Object_Model), [WebGL](/fr/docs/Web/API/WebGL_API), [IndexedDB](/fr/docs/Web/API/IndexedDB_API), [Web Audio API](/fr/docs/Web/API/Web_Audio_API), etc.).

Historiquement, la VM était seulement capable de charger le JavaScript. Cela fonctionnait bien pour nous comme le JavaScript est assez puissant pour résoudre la majeure partie des problèmes que les gens rencontrent sur Internet. Nous nous sommes, cependant, confrontés à des problèmes de performances lors de l'utilisation de JavaScript pour des cas d'utilisations plus avancés comme les jeux 3D, la réalité virtuelle et augmentée, la vision artificielle, l'édition d'image/vidéo, et un nombre de domaines qui demandent des performances natives ( voir [Cas d'utilisations WebAssembly <sup>(angl.)</sup>](https://webassembly.org/docs/use-cases/) pour plus d'informations).

De plus, le coût du téléchargement, du parsing et de la compilation de très grosses applications JavaScript peut être prohibitif. L'utilisation de mobiles ou d'autres plateformes à puissance réduite accentue d'autant plus l'effet de goulet d'étranglement des performances.

WebAssembly est un langage différent de JavaScript, mais n'a pas pour but de le remplacer. Il faut plutôt l'envisager comme complément, travaillant «&nbsp;main dans la main&nbsp;» avec JavaScript, permettant ainsi aux développeur·euse·s web de prendre avantage des points forts de chacun des deux langages :

- JavaScript est un langage haut niveau, flexible et suffisamment expressif pour écrire des applications web. Il possède beaucoup d'avantages — il est dynamiquement typé, ne nécessite aucune étape de compilation, et a un écosystème foisonnant qui lui fourni de puissants frameworks, bibliothèques, et autres outils.
- WebAssembly est un langage bas niveau, proche de l'assembleur, avec un format binaire compact qui s'exécute à une vitesse proche du natif et fournit aux langages à modèle mémoire bas niveau comme C++ et Rust une cible de compilation pour qu'ils puissent s'exécuter sur le web. (Notez que WebAssembly a pour [objectif à long terme <sup>(angl.)</sup>](https://webassembly.org/docs/high-level-goals/) de prendre en charge les langages à gestion mémoire automatique à l'avenir.)

Avec l'apparition du WebAssembly dans les navigateurs, la machine virtuelle dont nous parlions précédemment charge et exécute deux type de code — JavaScript ET WebAssembly.

Les différents types de code peuvent s'appeler mutuellement selon les besoins — [l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Reference/JavaScript_interface) enveloppe le code WebAssembly exporté avec des fonctions JavaScript qui peuvent être appelées normalement, et le code WebAssembly peut importer et appeler de façon synchrone des fonctions JavaScript normales. En fait, l'unité de base du code WebAssembly est appelée module et les modules WebAssembly sont similaires à bien des égards aux modules EcmaScript.

### Les concepts clefs du WebAssembly

Il y a différents concepts clefs nécessaires pour comprendre comment fonctionne WebAssembly dans le navigateur. Tous ces concepts se retrouvent totalement dans l'API WebAssembly JavaScript.

- **Module** : Représente un binaire WebAssembly qui a été compilé en code exécutable par le navigateur. Un module est sans état et, comme un {{DOMxRef("Blob")}}, peut donc être explicitement partagé entre le contexte fenêtre et les workers (via [`postMessage()`](/fr/docs/Web/API/MessagePort/postMessage)). Un module déclare des imports et exports au même titre qu'un module ES.
- **Mémoire** : Représente un ArrayBuffer redimensionnable qui contient un tableau d'octets contiguë accessible en lecture/écriture par les instructions bas niveau d'accès mémoire du WebAssembly.
- **Table** : Représente un tableau typé de référence (comme par exemple des fonctions) qui ne peut pas être stocké de manière brute en mémoire (pour des raisons de sécurité et de portabilité).
- **Instance** : Représente un module associé avec tous les états qu'il utilise à l'exécution à savoir la mémoire, la table précédemment citée et un ensemble de données importées. Une instance est comme un module ES qui a été chargée dans un contexte global avec un ensemble d'imports.

L'API JavaScript fournit aux développeur·euse·s la capacité de créer des modules, de la mémoire, des tables et instances. Pour une instance WebAssembly donnée, le code JavaScript peut appeler - de manière synchrone - ses exports qui sont accessibles comme des fonctions JavaScript normales. De façon arbitraire, toute fonction JavaScript peut aussi être appelée - de manière synchrone - par du code WebAssembly en passant ces fonctions JavaScript comme des imports à une instance WebAssembly.

Vu que JavaScript a un contrôle total sur la façon de charger, compiler et exécuter du code WebAssembly, les développeur·euse·s peuvent voir le WebAssembly comme une fonctionnalité JavaScript pour générer efficacement des fonctions très rapides.

À l'avenir, les modules WebAssembly pourront être [chargés comme des modules ES <sup>(angl.)</sup>](https://github.com/WebAssembly/proposals/issues/12) (en utilisant `<script type='module'>`), ce qui signifie que JavaScript pourra récupérer, compiler et importer un module WebAssembly aussi facilement qu'un module ES.

## Comment utiliser WebAssembly dans son applicatif ?

Plus haut, nous avons parlé des primitives brutes que WebAssembly ajoute à la plateforme Web&nbsp;: un format binaire pour le code et des API pour charger et exécuter ce code binaire. Parlons maintenant de la façon dont nous pouvons utiliser ces primitives en pratique.

L'écosystème WebAssembly est encore naissant&nbsp;; d'autres outils verront sans doute le jour à l'avenir. Pour l'instant, il existe quatre points d'entrée principaux&nbsp;:

- Porter une application C/C++ avec [Emscripten <sup>(angl.)</sup>](https://emscripten.org/).
- Écrire ou générer du WebAssembly directement au niveau assembleur.
- Écrire une application Rust et cibler WebAssembly en sortie.
- Utiliser [AssemblyScript <sup>(angl.)</sup>](https://www.assemblyscript.org/) qui ressemble à TypeScript et compile en binaire WebAssembly.

Parlons de ces options&nbsp;:

### Portage depuis le C/C++

Deux des nombreuses options pour créer du code Wasm sont un assembleur Wasm en ligne ou [Emscripten <sup>(angl.)</sup>](https://emscripten.org/). Il existe plusieurs assembleurs Wasm en ligne, tels que&nbsp;:

- [WasmFiddle++ <sup>(angl.)</sup>](https://anonyco.github.io/WasmFiddlePlusPlus/)
- [WasmExplorer <sup>(angl.)</sup>](https://mbebenita.github.io/WasmExplorer/)

Ce sont d'excellentes ressources pour celles et ceux qui cherchent par où commencer, mais elles n'offrent pas certains outils et optimisations d'Emscripten.

L'outil Emscripten est capable de prendre à peu près n'importe quel code source C/C++ et de le compiler en module Wasm, plus le code JavaScript «&nbsp;passe-plat&nbsp;» nécessaire pour charger et exécuter le module, et un document HTML pour afficher les résultats du code.

![Diagramme : Emscripten compile le code source C/C++ en module Wasm, un document HTML et le code JavaScript passe-plat.](emscripten-diagram.png)

En résumé, le principe de fonctionnement est le suivant :

1. D'abord, Emscripten alimente clang+LLVM — une chaîne de compilation open source mature empruntée par exemple à XCode sur OSX — avec le code C/C++.
2. Emscripten transforme ensuite le résultat compilé par clang+LLVM en binaire .wasm.
3. Par lui-même WebAssembly ne peut pour l'instant pas accéder directement au DOM ; Il peut seulement appeler JavaScript avec des données de type primitif entier ou flottant. Ainsi, pour accéder à toute API Web, WebAssembly a besoin d'appeler du JavaScript qui ensuite effectuera l'appel à l'API Web. C'est pourquoi Emscripten crée le document HTML et le code «&nbsp;passe-plat&nbsp;» JavaScript nécessaire pour atteindre cet objectif.

> [!NOTE]
> Il existe des propositions futures pour [permettre au WebAssembly d'appeler directement l'API Web <sup>(angl.)</sup>](https://github.com/WebAssembly/gc/blob/master/README.md).

Le code «&nbsp;passe-plat&nbsp;» en JavaScript n'est pas aussi simple que vous pourriez l'imaginer. Pour le moment, Emscripten implémente des librairies C/C++ populaire comme [SDL](https://fr.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://fr.wikipedia.org/wiki/OpenGL), [OpenAL](https://fr.wikipedia.org/wiki/OpenAL), et une partie de [POSIX](https://fr.wikipedia.org/wiki/POSIX). Ces bibliothèques sont implémentées sous forme d'API Web et donc chacune d'entre elles requiert un peu de code JavaScript «&nbsp;passe-plat&nbsp;» pour relier WebAssembly à l'API Web sous-jacente.

Ainsi le code «&nbsp;passe-plat&nbsp;» implémente les fonctionnalités de chaque librairie utilisée par le C/C++. Le code «&nbsp;passe-plat&nbsp;» contient aussi la logique pour appeler l'API JavaScript WebAssembly pour chercher, charger et exécuter le fichier .wasm.

Le document HTML généré charge le fichier JavaScript contenant le code «&nbsp;passe-plat&nbsp;» et écrit stdout dans un {{HTMLElement("textarea")}}. Si l'application utilise OpenGL, le HTML contient aussi un élément {{HTMLElement("canvas")}} qui est utilisé comme cible de rendu. Il est vraiment simple de modifier la sortie Emscripten pour en faire l'application web que vous souhaitez.

Vous pouvez trouver toute la documentation sur Emscripten à l'adresse [emscripten.org <sup>(angl.)</sup>](https://emscripten.org/), et un guide pour exploiter la chaîne de compilation et ainsi compiler votre propre application C/C++ en wasm à l'adresse [Compiler du C/C++ en WebAssembly](/fr/docs/WebAssembly/Guides/C_to_Wasm).

### Écrire du WebAssembly directement

Voulez vous construire votre propre compilateur ou vos propres outils ou faire une librairie JavaScript qui génère du WebAssembly à la volée&nbsp;?

De la même manière que les langages assembleur physiques, le format binaire du WebAssembly a une représentation textuelle. Ces deux formats ont un fonctionnement équivalents. Vous pouvez écrire ou générer ce format à la main et ensuite le convertir au format binaire avec un des nombreux [outils de conversion texte vers binaire WebAssembly <sup>(angl.)</sup>](https://webassembly.org/getting-started/advanced-tools/).

Pour un guide simple sur comment réaliser ceci, regarder notre article [Convertir le WebAssembly au format text en wasm](/fr/docs/WebAssembly/Text_format_to_wasm).

### Écrire du Rust ciblant WebAssembly

Il est également possible d'écrire du code Rust et de le compiler vers WebAssembly, grâce au travail acharné du groupe de travail Rust WebAssembly. Vous pouvez commencer par installer la chaîne d'outils nécessaire, compiler un exemple de programme Rust en un paquet npm WebAssembly, puis l'utiliser dans une application web d'exemple, en consultant notre article [Compiler du Rust vers WebAssembly](/fr/docs/WebAssembly/Guides/Rust_to_Wasm).

### Utiliser AssemblyScript

Pour les développeur·euse·s web qui souhaitent essayer WebAssembly sans avoir à apprendre les détails de C ou Rust, tout en restant dans le confort d'un langage familier comme TypeScript, AssemblyScript sera la meilleure option. AssemblyScript compile une variante stricte de TypeScript vers WebAssembly, permettant aux développeur·euse·s web de continuer à utiliser les outils compatibles TypeScript qu'ils·elles connaissent — tels que Prettier, ESLint, VS Code IntelliSense, etc. Vous pouvez consulter sa documentation sur <https://www.assemblyscript.org/>.

## Résumé

Cet article vous a donné une explication sur ce qu'est WebAssembly, pourquoi il est si utile, comment il s'intègre dans le Web et comment vous pouvez l'utiliser.

## Voir aussi

- [Articles sur WebAssembly sur le blog Mozilla Hacks <sup>(angl.)</sup>](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly sur Mozilla Research <sup>(angl.)</sup>](https://research.mozilla.org/)
- [Charger et exécuter du code WebAssembly](/fr/docs/WebAssembly/Guides/Loading_and_running) — trouvez comment charger votre propre module WebAssembly dans une page web.
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API) — trouvez comment utiliser les autres fonctionnalités majeures de l'API JavaScript WebAssembly.
