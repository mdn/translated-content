---
title: WebGL par l'exemple
slug: Web/API/WebGL_API/By_example
---

{{Next("Apprendre/WebGL/Par_exemple/Détecter_WebGL")}}

_WebGL par l'exemple_ est une série d'articles illustrant les concepts et les possibilités offertes par WebGL. Chaque exemple est accompagné d'explications. Ces démonstrations sont triés par sujet et par niveau de difficulté. Les concepts abordés sont, entre autres, le contexte de rendu, la programmation avec les _shaders_, les textures, la géométrie et l'interaction avec les utilisateurs.

## Les exemples, par catégorie

Les exemples de cette section sont triés par ordre de difficulté croissante. Plutôt que de les présenter sous la forme d'une longue liste, ils sont également répartis selon différentes catégories. Un sujet peut être abordé dans plusieurs exemples afin de couvrir des notions simples, intermédiaires ou avancées.

Plutôt que de manipuler des _shaders_, optimiser des géométrie et gérer la mémoire {{Glossary("GPU")}} dans le premier exemple, la progression se fera étape par étape afin que les exemples et les concepts puissent mieux être compris.

Les exemples sont expliqués, avec des commentaires dans le code et des paragraphes dédiés. Nous vous invitons à lire l'ensemble des commentaires au fur et à mesure, notamment pour les exemples plus avancés où ce qui a été vu auparavant ne sera pas expliqué à nouveau.

### Apprendre à connaître le contexte de rendu

- [Détecter WebGL](/fr/docs/Web/API/WebGL_API/By_example/Detect_WebGL)
  - : Dans cet exemple, on montre comment détecter un contexte de rendu {{Glossary("WebGL")}} et l'afficher pour l'utilisateur.
- [Appliquer des couleurs](/fr/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)
  - : Dans cet exemple, on illustre comment appliquer une couleur unie dans un contexte de rendu.
- [Appliquer une couleur à la souris](/fr/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking)
  - : Ici, on montre comment combiner des interactions utilisateurs avec des opérations graphiques (là, on appliquera une couleur aléatoire dans le contexte à chaque clic de l'utilisateur).
- [Créer une animation colorée](/fr/docs/Web/API/WebGL_API/By_example/Simple_color_animation)
  - : Dans cet exemple, on crée une animation simple avec des couleurs en appliquant chaque seconde une couleur aléatoire dans le contexte de rendu WebGL.
- [Avoir un masque de couleur](/fr/docs/Web/API/WebGL_API/By_example/Color_masking)
  - : Modifier des couleurs aléatoires avec des masques de couleur pour limiter l'intervalle de couleurs qu'on souhaite utiliser.
- [Appliquer des découpes simples](/fr/docs/Web/API/WebGL_API/By_example/Basic_scissoring)
  - : Dans cet exemple, on dessine des rectangles et des carrés simples grâce à des opérations de découpage (_scissoring_).
- [La taille du canevas et WebGL](/fr/docs/Web/API/WebGL_API/By_example/Canvas_size_and_WebGL)
  - : Dans cet exemple, on observe ce qui se produit quand on définit (ou pas) la taille de l'élément `canvas` associé.
- [Modèle 1](/fr/docs/Web/API/WebGL_API/By_example/Boilerplate_1)
  - : Dans cet exemple, on évoque les fragments de code qui seront utilisés pour les exemples qui suivent (et dans lesquels ils seront cachés car identiques). On définiera également une fonction JavaScript utilitaire pour initialiser WebGL plus facilement.
- [Créer une animation avec du découpage et de l'applique](/fr/docs/Web/API/WebGL_API/By_example/Scissor_animation)
  - : Avec cet article, on illustre comment créer des animations grâce aux opérations de découpe et d'applique.
- [Une pluie de rectangle](/fr/docs/Web/API/WebGL_API/By_example/Raining_rectangles)
  - : On voit ici un jeu, simple, qui mélange les découpes, les animations et les interactions utilisateurs.

### Les bases de la programmation avec les _shaders_

- [Hello GLSL](/fr/docs/Web/API/WebGL_API/By_example/Hello_GLSL)
  - : Un programme de manipulation des shaders simple qui dessine un carré.
- [Introduction aux attributs de vertex](/fr/docs/Web/API/WebGL_API/By_example/Hello_vertex_attributes)
  - : Ici, on combine la programmation des shaders et les interactions utilisateurs grâce aux attributs de vertex.
- [Générer des textures avec du code](/fr/docs/Web/API/WebGL_API/By_example/Textures_from_code)
  - : Une démonstration simple sur l'utilisation des _shaders_ et des textures procédurales.

### Divers exemples avancés

- [Les textures vidéos](/fr/docs/Web/API/WebGL_API/By_example/Video_textures)
  - : Dans cet exemple, on voit comment utiliser des fichiers vidéos comme des textures.

{{Next("Apprendre/WebGL/Par_exemple/Détecter_WebGL")}}
