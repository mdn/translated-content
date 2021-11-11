---
title: Introduction au développement de jeux vidéo
slug: Games/Introduction
tags:
  - Firefox OS
  - Guide
  - Jeux
  - Mobile
translation_of: Games/Introduction
original_slug: Jeux/Introduction
---
{{GamesSidebar}}

{{IncludeSubnav("/fr/docs/Jeux")}}

Le Web d'aujourd'hui est désormais une plate-forme viable pour créer des jeux époustouflants et de bonne qualité, mais aussi et surtout pour distribuer ces jeux. Imaginez tous les jeux qui peuvent être créés...

Grâce aux technologies web actuelles et aux navigateurs récents, il est tout à fait possible de créer un jeu excellent pour le Web. Et nous ne parlons pas ici de jeux de cartes ou de jeux sociaux multi-joueurs déjà créés il y a longtemps, avec Flash®, mais bien de jeux de tirs en 3D, de RPG etc. Grâce aux améliorations des performances des compilateurs juste-à-temps [JavaScript](/fr/docs/JavaScript "/fr/docs/JavaScript") et aux nouvelles APIs, vous pouvez construire des jeux vidéo qui fonctionnent dans un navigateur (ou sur des plateformes HTML5 comme [Firefox OS](/fr/docs/Mozilla/Firefox_OS "/fr/docs/Mozilla/Firefox_OS")) sans compromettre les performances.

## La plateforme HTML5 pour les jeux

Le Web peut vraiment se concevoir comme une plateforme pour les jeux : "le Web est la plateforme". La liste qui suit présente les technologies au cœur de celle-ci.

| Fonctionnalités                        | Technologie                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Audio**                              | [Web Audio API](/fr/docs/Web/API/Web_Audio_API "/fr/docs/Web_Audio_API")                                                                                                                                                                                                                                                                                                                                                                                 |
| **Graphisme**                          | [WebGL](/fr/docs/WebGL "/fr/docs/WebGL") ([OpenGL ES](http://www.khronos.org/opengles/ "http://www.khronos.org/opengles/") 2.0)                                                                                                                                                                                                                                                                                                                          |
| **Mécanismes d'interface utilisateur** | [Événements tactiles](/fr/docs/Web/Guide/DOM/Events/Touch_events "/fr/docs/Web/Guide/DOM/Events/Touch_events"), [Gamepad API](/fr/docs/Web/Guide/API/Gamepad "/fr/docs/Web/Guide/API/Gamepad"), capteurs, [WebRTC](/fr/docs/WebRTC "/fr/docs/WebRTC"), [Full Screen API](/fr/docs/Web/Guide/DOM/Using_full_screen_mode "/fr/docs/Web/Guide/DOM/Using_full_screen_mode"), [Pointer Lock API](/fr/docs/WebAPI/Pointer_Lock "/fr/docs/WebAPI/Pointer_Lock") |
| **Langage**                            | [JavaScript](/fr/docs/JavaScript "/fr/docs/JavaScript") (ou C/C++ utilisé avec [Emscripten](https://github.com/kripken/emscripten/wiki "https://github.com/kripken/emscripten/wiki") pour être compilé en JavaScript)                                                                                                                                                                                                                                    |
| **Réseau**                             | [WebRTC](/fr/docs/WebRTC "/fr/docs/WebRTC") et/ou les [WebSockets](/fr/docs/WebSockets "/fr/docs/WebSockets")                                                                                                                                                                                                                                                                                                                                            |
| **Stockage**                           | [IndexedDB](/fr/docs/IndexedDB "/fr/docs/IndexedDB") ou le "cloud"                                                                                                                                                                                                                                                                                                                                                                                       |
| **Web**                                | [HTML](/fr/docs/Web/HTML "/fr/docs/Web/HTML"), [CSS](/fr/docs/Web/CSS "/fr/docs/Web/CSS"), [SVG](/fr/docs/SVG "/fr/docs/SVG"), [Social API](/fr/docs/Social_API "/fr/docs/Social_API") (et plus encore...)                                                                                                                                                                                                                                               |



## L'aspect commercial

En tant que développeur de jeux vidéo, que vous soyez seul ou fassiez partie d'un studio plus grand, vous voulez savoir pourquoi le Web serait pertinent pour votre prochain jeu. Nous verrons ici en quoi le Web peut vous aider :



1.  La portée du Web est phénoménale : il est partout. Les jeux construits avec HTML5 peuvent fonctionner sur les smartphones, les tablettes, les PCs et les télévisions connectées.
2.  La visibilité de votre jeu et le marketing en sont améliorés. En effet, la promotion de votre jeu n'est pas limitée à un "app store" _(magasin d'applications)_ maîtrisé par quelqu'un d'autre. Vous pouvez tout à fait promouvoir et faire la publicité de votre jeu sur le Web lui-même comme sur d'autres médias. Les liens, les partages effectués sur le Web sont autant d'avantages pour atteindre de nouveaux utilisateurs.
3.  Vous disposez d'un contrôle à un endroit important : les paiements. Il n'est pas nécessaire pour vous de reverser 30% de vos revenus à  d'autres simplement parce que votre jeu fait partie de leur écosystème. Vous pouvez décider de votre propre politique tarifaire et utiliser le service de paiement que vous voulez.
4.  Le contrôle, encore. Vous pouvez mettre à jour votre jeu dès que vous le souhaitez. Vous n'avez pas à attendre l'approbation de quelqu'un d'une autre entreprise décidant si oui ou non tel ou tel correctif sera livré aujourd'hui ou demain.
5.  L'analytique. Plutôt que de vous reposer sur des décisions et influences externes quant aux données dont vous avez besoin, vous pouvez collecter les statistiques que vous voulez, ou bien utiliser un outil analytique tiers de votre choix afin de mesurer les ventes et la portée de votre jeu.
6.  Vous pouvez gérer la relation clientèle de façon plus directe, sans que les retours des clients soient limités aux mécanismes d'un magasin d'application. Soyez directement au contact de vos clients, sans intermédiaire.
7.  Le Web est partout et vos joueurs peuvent donc jouer où bon leur semble : leurs téléphones, tablettes, ordinateurs de bureau ou portables...



## Les technologies Web pour les développeurs de jeux vidéo

Pour celles et ceux qui souhaitent plonger dans la technique, voici la liste des APIs et des technologies Web qui vont alimenter votre jeu.

- [Full Screen API](/fr/docs/Web/Guide/DOM/Using_full_screen_mode "/fr/docs/DOM/Using_fullscreen_mode")
  - : Cette API simple permet à votre jeu de fonctionner en plein écran et d'offrir ainsi une expérience plus immersive.
- [Gamepad API](/fr/docs/Web/Guide/API/Gamepad "/fr/docs/API/Gamepad/Using_Gamepad_API")
  - : Si vous souhaitez que vos joueurs puissent utiliser des manettes ou d'autres contrôleurs pour votre jeu, vous aurez besoin de cette API.
- [HTML](/fr/docs/Web/HTML "/fr/docs/HTML") et [CSS](/fr/docs/Web/CSS "/fr/docs/CSS")
  - : Combinées ensembles, ces deux technologies vous permettent de construire et de mettre en forme l'interface utilisateur de votre jeu. L'élément HTML {{HTMLElement("canvas")}} permet de gérer des graphismes en deux dimensions.
- [HTML audio](/fr/docs/Web/HTML/Element/audio "/fr/docs/HTML/Element/audio")
  - : L'élément HTML {{HTMLElement("audio")}} vous permet de jouer de la musique et des sons. Si vous souhaitez aller plus loin, l'API [Web Audio](/fr/docs/Web/API/Web_Audio_API "/fr/docs/Web_Audio_API") vous offre plus de possibilités de traitement !
- [IndexedDB](/fr/docs/Web/API/API_IndexedDB "/fr/docs/IndexedDB")
  - : Une API puissante, permettant de maintenir les données de l'utilsateur stockées sur son ordinateur ou son appareil. Une bonne façon de sauvegarder l'état d'un jeu ou autre information localement de telle sorte qu'elle ne sera pas téléchargée à chaque fois qu'on aura besoin d'elle. Aussi utile pour rendre le jeu utilisable même quand le joueur n'est pas connecté à internet (comme durant un long vol en avion...).
- [JavaScript](/fr/docs/Web/JavaScript "/fr/docs/JavaScript")
  - : JavaScript, est un langage de programmation utilisé sur internet. Il a d'excellentes performances sur les navigateurs modernes et est sans cesse amélioré. Utilisez sa puissance pour coder vos jeux, ou regardez son utilisation dans des technologies comme [Emscripten](https://github.com/kripken/emscripten/wiki "https://github.com/kripken/emscripten/wiki") ou [Asm.js](http://asmjs.org/spec/latest/ "http://asmjs.org/spec/latest/") pour porter facilement vos jeux existants.
- [Pointer Lock API](/fr/docs/WebAPI/Pointer_Lock "/fr/docs/WebAPI/Pointer_Lock")
  - : L'API Pointer Lock vous permet de bloquer la souris ou tout autre appareil de pointage à l'intérieur de l'interface de votre jeu, de telle sorte qu'au lieu de recevoir une position absolue du pointeur vous recevrez le delta des coordonnées. Ce qui vous donne une mesure plus précise de ce que fait l'utilisateur, mais aussi l'empêche d'envoyer accidentellement ses entrées ailleurs pour ne pas manquer des actions importantes.
- [SVG](/fr/docs/Web/SVG "/fr/docs/SVG") (Scalable Vector Graphics)
  - : Vous permet de créer des graphiques vectoriels dont l'échelle est fluide, quelle que soit la taille ou la résolution de l'affichage de l'utilisateur.
- [Typed Arrays](/fr/docs/Web/JavaScript/Tableaux_typ%C3%A9s "/fr/docs/JavaScript/Typed_arrays")
  - : Les tableaux typés JavaScript vous donnent accès à des données binaires brutes depuis JavaScript ; cela vous permet de manipuler des textures GL, des données de jeu ou tout autre chose, même si ce n'est pas dans un format JavaScript natif.
- [Web Audio API](/fr/docs/Web/API/Web_Audio_API "/fr/docs/Web_Audio_API")
  - : Cette API pour contrôler la lecture, la synthèse et la manipulation de l'audio à partir du code JavaScript vous permet de créer des effets sonores impressionnants, de jouer et de manipuler de la musique en temps réel.
- [WebGL](/fr/docs/Web/API/WebGL_API "/fr/docs/WebGL")
  - : Vous permet de créer à partir de contenu internet des graphismes de hautes performances, avec l'accélération matérielle de graphisme 3D (et 2D). C'est une implémentation qui permet la prise en charge web de [OpenGL ES](http://www.khronos.org/opengles/ "http://www.khronos.org/opengles/") 2.0.
- [WebRTC](/fr/docs/Web/API/WebRTC_API "/fr/docs/WebRTC")
  - : L'API WebRTC (Real-Time Communications) vous donne le pouvoir de contrôler les données audio et vidéo, y compris la téléconférence, et de transmettre des données d'applications aux utilisateurs et entre utilisateurs. Vous voulez que vos joueurs discutent lorsqu'ils explosent des monstres ? Cette API est faite pour vous.
- [WebSockets](/fr/docs/WebSockets "/fr/docs/WebSockets")
  - : L'API WebSocket vous permet de connecter votre application ou site à un serveur pour transmettre des données en temps réel. Parfait pour les jeux d'action multi-joueurs, services de "chat" _(discussion)_ et autres.
- [Web Workers](/fr/docs/Utilisation_des_web_workers "/fr/docs/DOM/Using_web_workers")
  - : Les "Workers" vous donnent la possibilité de créer des routines qui tournent en arrière-plan avec leur propre code javascript, pour prendre avantage des processeurs multi-core modernes.
- [XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest "/fr/docs/DOM/XMLHttpRequest") and [File API](/fr/docs/Web/API/API_fichier_systeme "/fr/docs/DOM/File_API")
  - : La combinaison de XMLHttpRequest et de l'API File vous permet d'envoyer et de recevoir toutes les sortes de données que vous voulez (ne vous fiez pas au "XML" dans son nom !) depuis un serveur Web. Il s'agit d'une bonne façon de réaliser diverses choses comme télécharger de nouveaux niveaux du jeu et les éléments de graphismes ou encore transmettre (pas en temps réel) les informations de l'état du jeu vers votre serveur.
