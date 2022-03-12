---
title: Techniques pour le développement de jeux vidéo
slug: Games/Techniques
tags:
  - Guide
  - JavaScript
  - Jeux
translation_of: Games/Techniques
---
{{GamesSidebar}}

{{IncludeSubnav("/fr/docs/Jeux")}}

Cette page liste un ensemble de techniques utiles à toute personne qui voudrait développer un jeu vidéo à l'aide des technologies du web.

- [Utiliser des scripts asynchrones pour asm.js](/fr/docs/Games/Techniques/Async_scripts "/fr/docs/Games/Techniques/Async_scripts")
  - : Principalement pour la création de jeux de moyenne ou de grande taille, les scripts asynchrones sont une technique essentielle dont il faut tirer avantage, ainsi le JavaScript de votre jeux pourra être compilé hors du thread principal et mis en cache pour la future exécution du jeux, résultant en une amélioration significative des performances pour vos utilisateurs. Cet article vous explique comment.
- [Optimiser les performances au démarrage](/fr/Apps/Fundamentals/Performance/Optimizing_startup_performance "/fr/docs/Apps/Developing/Optimizing_startup_performance")
  - : Comment vous assurez que votre jeu se lancera rapidement, en douceur et sans avoir l’air de bloquer le navigateur ou le périphérique de l’utilisateur.
- [Utiliser les canaux de données pair-à-pair WebRTC](/fr/docs/Games/Techniques/WebRTC_data_channels "/fr/docs/Games/WebRTC_data_channels")
  - : En plus de prendre en charge les communications audio et vidéo, WebRTC permet de mettre en place des canaux de données pair-à-pair pour échanger activement des données texte ou binaires entre deux joueurs. Cet article explique ce que cela vous apporte et montre comment utiliser les bibliothèques qui rendent cela facile.
- [Animations efficaces pour les jeux web](/fr/docs/Games/Techniques/Efficient_animation_for_web_games "/fr/docs/Games/Techniques/Efficient_animation_for_web_games")
  - : Cet article couvre les techniques et les conseils pour créer des animations efficaces pour les jeux web, avec une tendance vers la prise en charge des appareils bas de gamme comme des téléphones mobiles. Nous aborderons les transitions CSS et les animations CSS, et les boucles JavaScript utilisant {{ domxref("window.requestAnimationFrame") }}.
- [Audio pour les jeux web](/fr/docs/Games/Techniques/Audio_for_Web_Games)
  - : L'audio est une partie importante de tout jeu - il ajoute des commentaires et de l'atmosphère. L'audio basé sur le Web arrive à maturité rapidement, mais il y a encore beaucoup de différences de navigateurs à négocier. Cet article fournit un guide détaillé sur la mise en œuvre de l'audio pour les jeux Web, en examinant ce qui fonctionne actuellement sur un éventail aussi large que possible de platesformes.
- [Détection de collisions en 2D](/fr/docs/Games/Techniques/2D_collision_detection "/fr/docs/Games/Techniques/2D_collision_detection")
  - : Une introduction aux techniques de détection de collisions pour les jeux en deux dimensions.
- [Carrelage](/fr/docs/Games/Techniques/Tilemaps)
  - : Les carreaux sont une technique très populaire dans les jeux 2D pour construire le monde du jeu. Ces articles fournissent une introduction du carrelage (map 2D) et expliquent comment les implémenter avec l'API Canvas.
