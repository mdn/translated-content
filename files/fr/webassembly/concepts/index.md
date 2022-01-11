---
title: Concepts de WebAssembly
slug: WebAssembly/Concepts
translation_of: WebAssembly/Concepts
---
{{WebAssemblySidebar}}

Cet article explique les concepts de fonctionnement de WebAssembly, y compris ses objectifs, les problèmes qu'il résout et la manière dont il s'exécute dans le moteur de rendu du navigateur.

## Qu'est-ce que WebAssembly ?

WebAssembly est un nouveau type de code pouvant être exécuté dans les navigateurs modernes et fournissant de nouvelles fonctionnalités ainsi que des gains majeurs en performance. Il n'est pas particulièrement destiné à être écrit à la main, mais il est plutôt conçu pour être une cible de compilation efficace pour les langages source de bas niveau tels C, C ++, Rust, etc.

Cela a d'énormes implications pour la plate-forme web — il fournit un moyen d'exécuter un code écrit dans divers langages sur le web à une vitesse proche du natif, avec des applications clientes exécutées sur le web qui auparavant n'auraient pas pu être réalisées.

De plus, vous ne devez même pas savoir comment créer du code WebAssembly pour en profiter. Les modules WebAssembly peuvent être importés dans une application web (ou Node.js) en exposant les fonctions WebAssembly à utiliser via JavaScript. Les frameworks JavaScript pourraient utiliser WebAssembly pour conférer des avantages massifs de performance et de nouvelles fonctionnalités tout en rendant la fonctionnalité facilement accessible aux développeurs web.

## Objectifs de WebAssembly

WebAssembly est en cours de création en tant que standard ouvert au sein du [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/) avec les objectif suivants :

- Être rapide, efficace et portable — Le code WebAssembly peut être exécuté à une vitesse proche du natif sur plusieurs plateformes en profitant des [capacités matérielles communes](http://webassembly.org/docs/portability/#assumptions-for-efficient-execution).
- Être lisible et débuggable — WebAssembly est un langage d'assemblage de bas niveau, mais son format de texte est lisible par l'homme (la spécification pour laquelle il est encore en cours de finalisation) et permet au code d'être écrit, lu et débuggé à la main.
- Conserver la sécurité — WebAssembly est conçu pour être exécuté dans un environnement sûr, en sandbox. Comme d'autres codes web, il imposera les règles de même origine du navigateur, ainsi que ses politiques d'autorisations.
- Ne pas casser le web — WebAssembly est conçu de manière à facilement s'associer aux autres technologies web et à maintenir une rétrocompatibilité.

> **Note :** WebAssembly aura également des usages en dehors du web et des environnements JavaScript (voir [Non-web embeddings](http://webassembly.org/docs/non-web/)).

## Comment WebAssembly s'intègre dans la plateforme web ?

La plateforme web peut s'imaginer comme composée de deux parties :

- Une machine virtuelle (VM) qui exécute le code de la Web app, e.g le code JavaScript qui fait tourner vos applications.
- Une ensemble de [Web APIs](/fr/docs/Web/API) que la Web app peut appeler pour contrôler les fonctionnalités des navigateurs/appareils et réaliser des actions ([DOM](/fr/docs/Web/API/Document_Object_Model), [CSSOM](/fr/docs/Web/API/CSS_Object_Model), [WebGL](/fr/docs/Web/API/WebGL_API), [IndexedDB](/fr/docs/Web/API/IndexedDB_API), [Web Audio API](/fr/docs/Web/API/Web_Audio_API), etc.).

Historiquement, la VM était seulement capable de charger le JavaScript. Cela fonctionnait bien pour nous comme le JavaScript est assez puissant pour résoudre la majeure partie des problèmes que les gens rencontrent sur Internet. Nous nous sommes, cependant, confrontés à des problèmes de performances lors de l'utilisation de JavaScript pour des cas d'utilisations plus avancés comme les jeux 3D, la réalité virtuelle et augmentée, la vision artificielle, l'édition d'image/vidéo, et un nombre de domaines qui demandent des performances natives ( voir [Cas d'utilisations WebAssembly](http://webassembly.org/docs/use-cases/) pour plus d'informations).

De plus, le coût du téléchargement, du parsing et de la compilation de très grosses applications JavaScript peut être prohibitif. L'utilisation de mobiles ou d'autres plateformes à puissance réduite accentue d'autant plus l'effet de goulet d'étranglement des performances.

WebAssembly est un langage différent de JavaScript, mais n'a pas pour but de le remplacer. Il faut plutôt l'envisager comme complément, travaillant "main dans la main" avec JavaScript, permettant ainsi aux développeurs WEB de prendre avantage des points forts de chacun des deux langages :

- JavaScript est un langage haut niveau, flexible et suffisamment expressif pour écrire des applications web.  Il possède beaucoup d'avantages — il est dynamiquement typé, ne nécessite aucune étape de compilation, et a un écosystème foisonnant qui lui fourni de puissants frameworks, bibliothèques, et autres outils.
- WebAssembly est un langage bas niveau, de style assembleur, avec un format binaire compact qui tourne avec des performances proches du natif et fourni au langage une gestion bas niveau de la mémoire tout comme le C++ et Rust comme cible de compilation afin de pouvoir tourner sur le web. (Notez qu'une [priorité](http://webassembly.org/docs/high-level-goals/) de WebAssembly est de supporter les langages avec modèles de mémoire à garbage-collector dans le futur.)

Avec l'apparition du WebAssembly dans les navigateurs, la machine virtuelle dont nous parlions précédemment charge et exécute deux type de code - JavaScript ET WebAssembly.

Les deux différents type de code peuvent s'appeler si nécessaire — l'API WebAssembly JavaScript enveloppe le code exporté avec des fonctions JavaScript qui peuvent être appelées normalement et le code WebAssembly peut importer et appeler normalement de manière synchrone les fonctions JavaScript. En fait, l'unité de base de code WebAssembly est appelée module et est similaire par de nombreux aspects aux modules ES2015.

### Les concepts clefs du WebAssembly 

Il y a différents concepts clefs nécessaires pour comprendre comment fonctionne WebAssembly dans le navigateur. Tous ces concepts se retrouvent totalement dans l'API WebAssembly JavaScript.

- **Module** : Représente un binaire WebAssembly qui a été compilé en code exécutable par le navigateur.  Un module est sans état et - comme un [Blob](/fr/docs/Web/API/Blob) - peut donc être explicitement[ mis en cache dans IndexedDB](/fr/WebAssembly/Caching_modules) ou partagé entre le contexte fenêtre et les workers (via [`postMessage()`](/fr/docs/Web/API/MessagePort/postMessage)).  Un module déclare des imports et exports au même titre qu'un module ES2015.
- **Mémoire** : Représente un ArrayBuffer redimensionnable qui contient un tableau d'octets contiguë accessible en lecture/écriture par les instructions bas niveau d'accès mémoire du WebAssembly.
- **Table** : Représente un tableau typé de référence (comme par exemple des fonctions) qui ne peut pas être stocké de manière brute en mémoire (pour des raisons de sécurité et de portabilité).
- **Instance** : Représente un module associé avec tous les états qu'il utilise à l'exécution à savoir la mémoire, la table précédemment citée et un ensemble de données importées. Une instance est comme un module ES2015 qui a été chargée dans un contexte global avec un ensemble d'imports.

L'API JavaScript fournit aux développeurs la capacité de créer des modules, de la mémoire, des tables et instances. Pour une instance WebAssembly donnée, le code JavaScript peut appeler - de manière synchrone - ses exports qui sont accessibles comme des fonctions JavaScript normales. De façon arbitraire, toute fonction JavaScript peut aussi être appelée - de manière synchrone - par du code WebAssembly en passant ces fonctions JavaScript comme des imports à une instance WebAssembly.

Vu que JavaScript a un contrôle total sur la façon de charger, compiler et exécuter du code WebAssembly, les développeurs peuvent voir le WebAssembly comme une fonctionnalité JavaScript pour générer efficacement des fonctions très rapides.

Dans le futur, les modules WebAssembly seront chargeables comme des module ES2015 (en utilisant `<script type='module'>`), ce qui veut dire que JavaScript sera capable de récupérer, compiler et importer un module WebAssembly aussi facilement qu'un module ES2015.

## Comment utiliser WebAssembly dans son applicatif ?

Précédemment nous parlions des primitives bas niveau que WebAssembly ajoute à la plateforme Web : un format binaire pour le code et une API pour charger et exécuter ce code binaire. Maintenant, parlons de comment utiliser ces primitives en pratique.

L'écosystème WebAssembly est à un stade embryonnaire ;

D'autres outils verront sans aucun doute le jour à l'avenir. Pour le moment, il y a trois points d'entrée principaux :

- Porter une application C/C++ avec [Emscripten](/fr/docs/Mozilla/Projects/Emscripten).
- Écrire ou générer WebAssembly directement au niveau assembleur.
- Écrire une application Rust et cibler WebAssembly en sortie.

Parlons de ces options :

### Portage depuis le C/C++

L'outil Emscripten est capable de prendre du code source C/C++ et de le compiler dans un module .wasm, de générer le code "glue" JavaScript nécessaire pour charger et exécuter le module et de créer un document HTML capable d'afficher les résultats d'exécution du code.

![](emscripten-diagram.png)

En résumé, le principe de fonctionnement est le suivant :

1.  D'abord, Emscripten alimente clang+LLVM - une chaîne de compilation open source mature empruntée par exemple à XCode sur OSX - avec le code C/C++.
2.  Emscripten transforme ensuite le résultat compilé par clang+LLVM en binaire .wasm.
3.  Par lui-même WebAssembly ne peut pour l'instant pas accéder directement au DOM ; Il peut seulement appeler JavaScript avec des données de type primitif entier ou flottant. Ainsi, pour accéder à toute API Web, WebAssembly a besoin d'appeler du JavaScript qui ensuite effectuera l'appel à l'API Web. C'est pourquoi Emscripten crée le document HTML et le code "passe-plat" JavaScript nécessaire pour atteindre cet objectif.

> **Note :** Il existe des propositions futures pour [ permettre au WebAssembly d'appeler directement l'API Web](https://github.com/WebAssembly/gc/blob/master/README.md).

Le code "passe-plat" en JavaScript n'est pas aussi simple que vous pourriez l'imaginer. Pour le moment, Emscripten implémente des librairies C/C++ populaire comme [SDL](https://en.wikipedia.org/wiki/Simple_DirectMedia_Layer), [OpenGL](https://en.wikipedia.org/wiki/OpenGL), [OpenAL](https://en.wikipedia.org/wiki/OpenAL), et une partie de [POSIX](https://en.wikipedia.org/wiki/POSIX). Ces bibliothèques sont implémentées sous forme d'API Web et donc chacune d'entre elles requiert un peu de code JavaScript "passe-plat" pour relier WebAssembly à l'API Web sous-jacente.

Ainsi le code "passe-plat" implémente les fonctionnalités de chaque librairie utilisée par le C/C++. Le code "passe-plat" contient aussi la logique pour appeler l'API JavaScript WebAssembly pour chercher, charger et exécuter le fichier .wasm.

Le document HTML généré charge le fichier JavaScript contenant le code "passe-plat" et écrit stdout dans un {{htmlelement("textarea")}}. Si l'application utilise OpenGL, le HTML contient aussi un élément {{htmlelement("canvas")}} qui est utilisé comme cible de rendu. Il est vraiment simple de modifier la sortie Emscripten pour en faire l'application web que vous souhaitez.

Vous pouvez trouver toute la documentation sur Emscripten à l'adresse [emscripten.org](http://emscripten.org), et un guide pour exploiter la chaîne de compilation et ainsi compiler votre propre application C/C++ en wasm à l'adresse [Compiler du C/C++ en WebAssembly](/fr/docs/WebAssembly/C_to_wasm).

### Écrire du WebAssembly directement

Voulez vous construire votre propre compilateur ou vos propres outils ou faire une librairie JavaScript qui génère du WebAssembly à la volée ?

De la même manière que les langages assembleur physiques, le format binaire du  WebAssembly a une représentation textuelle. Ces deux formats ont un fonctionnement équivalents. Vous pouvez écrire ou générer ce format à la main et ensuite le convertir au format binaire avec un des nombreux [outils de conversion texte vers binaire WebAssembly](http://webassembly.org/getting-started/advanced-tools/).

Pour un guide simple sur comment réaliser ceci, regarder notre article [Convertir le WebAssembly au format text en wasm](/fr/docs/WebAssembly/Text_format_to_wasm).

## En résumé

Cet article vous a donné une explication sur ce qu'est WebAssembly, pourquoi il est si utile, comment il s'intègre dans le Web et comment vous pouvez l'utiliser.

## Voir aussi

- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
- [Loading and running WebAssembly code](/fr/docs/WebAssembly/Loading_and_running)— trouvez comment charger votre propre module WebAssembly dans une page web.
- [Using the WebAssembly JavaScript API](/fr/docs/WebAssembly/Using_the_JavaScript_API) — trouvez comment utiliser les autres fonctionnalités majeures de l'API JavaScript WebAssembly.
