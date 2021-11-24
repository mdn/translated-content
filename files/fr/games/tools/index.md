---
title: Tools for game development
slug: Games/Tools
tags:
  - Games
  - Gecko
  - Guide
  - JavaScript
  - TopicStub
translation_of: Games/Tools
---
{{GamesSidebar}}{{IncludeSubnav("/fr/docs/Games")}}

Sur cette page, vous trouverez des liens vers nos articles sur les outils de développement de jeux, qui visent à terme à couvrir les frameworks, les compilateurs et les outils de  débogage.

- [asm.js](/fr/docs/Games/Tools/asm.js)
  - : asm.js est un sous-ensemble très limité du langage JavaScript, qui peut être grandement optimisé et exécuté dans un moteur de compilation à l'avance (AOT) pour des performances beaucoup plus rapides que vos performances JavaScript typiques. C'est, bien sûr, idéal pour les jeux.
- [Emscripten](https://github.com/kripken/emscripten/wiki "https://github.com/kripken/emscripten/wiki")
  - : Un compilateur LLVM vers JavaScript; avec Emscripten, vous pouvez compiler C ++ et d'autres langages qui peuvent compiler en bytecode LLVM en JavaScript haute performance. C'est un excellent outil pour porter des applications sur le Web! Il existe un [tutoriel uitle Emscripten](https://github.com/kripken/emscripten/wiki/Tutorial) disponible sur le wiki. Notez que nous [visons à couvrir Emscripten dans sa propre section de MDN](/fr/docs/Emscripten).
- [Gecko profiler](https://addons.mozilla.org/en-us/firefox/addon/gecko-profiler/ "https://addons.mozilla.org/en-us/firefox/addon/gecko-profiler/")
  - : L'extension de profileur Gecko vous permet de profiler votre code pour vous aider à déterminer où se trouvent vos problèmes de performances afin que vous puissiez faire fonctionner votre jeu à une vitesse maximale.
- [Moteurs de jeu et outils](/fr/docs/Games/Tools/Engines_and_tools)
  - : Une liste de moteurs, modèles et technologies utiles aux développeurs de jeux.
- [Shumway](/fr/docs/Mozilla/Projects/Shumway)
  - : Shumway est un moteur de rendu pour Adobe Flash entièrement construit en JavaScript, WebGL, etc., comblant le fossé entre Flash et les standards Web. Cet article explique comment utiliser Shumway et comment apporter des correctifs et des bogues au projet.
- Chaîne d'outils pour développer et déboguer des jeux

  - : En quoi cela diffère-t-il du débogage normal des applications Web? Quels outils spécialisés sont disponibles? Une grande partie de cela va être couverte par Will dans les [outils](/fr/docs/Tools), mais ici, nous devrions fournir une sorte de tutoriel pratique sur la chaîne d'outils pour le débogage de jeux, avec des liens vers les éléments de Will :

    - Présentation des outils de base
    - [Éditeur de Shader](/fr/docs/Tools/Shader_Editor)
    - Outils de performance (toujours en production, estimé début 2014)
