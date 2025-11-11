---
title: Tutoriel WebGL
slug: Web/API/WebGL_API/Tutorial
---

{{DefaultAPISidebar("WebGL")}}

[WebGL](https://www.khronos.org/webgl/) permet au contenu web d'utiliser une API basée sur [OpenGL ES](https://www.khronos.org/opengles/) 2.0 pour effectuer des rendus 3D dans un {{HTMLElement("canvas")}} HTML dans les navigateurs qui le supportent, sans avoir recours à des modules complémentaires. Les programmes WebGL sont constitués de code de contrôle rédigé en JavaScript, et de code d'effets spéciaux (code shader) qui est exécuté sur l'Unité de Traitement Graphique (GPU) d'un ordinateur. Les éléments WebGL peuvent être mélangés avec d'autres éléments HTML et composés avec d'autres parties de la page ou du fond de la page.

Ce tutoriel décrit comment utiliser l'élément `<canvas>` pour dessiner des graphiques WebGL, en commençant par les bases. Les exemples suivants devraient vous donner des idées de ce que vous pouvez faire avec WebGL et vont vous fournir des fragments de code qui pourraient vous aider à construire votre propre contenu.

## Avant que vous ne commenciez

L'utilisation de l'élément `<canvas>` n'est pas très difficile, mais vous avez besoin d'une compréhension de base de l'[HTML](/fr/docs/Web/HTML) et du [JavaScript](/fr/docs/Web/JavaScript). L'élément `<canvas>` et WebGL ne sont pas supportés par certains anciens navigateurs, mais ils sont supportés dans les versions récentes de tous les principaux navigateurs. Pour dessiner des graphiques sur le canevas, on utilise un objet de contexte Javascript, qui crée des graphiques à la volée.

## Dans ce tutoriel

- [Commencer avec WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : Comment mettre en place un contexte WebGL.
- [Ajouter du contenu à WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : Comment faire un rendu simple de figures planes avec WebGL.
- [Ajouter des couleurs avec les nuanceurs](/fr/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : Démontre comment ajouter de la couleur aux formes avec des nuanceurs.
- [Animer des objets avec WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : Montre comment tourner et déplacer des objets pour créer des animations simples.
- [Créer des objets 3D avec WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : Montre comment créer et animer un objet 3D (dans ce cas, un cube).
- [Utilisation des textures en WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : Démontrer comment appliquer des textures sur les faces d'un objet.
- [Éclairage en WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : Comment simuler des effets d'illumination dans votre contexte WebGL.
- [Animation de textures en WebGL](/fr/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : Montre comment animer des textures ; dans ce cas, en appliquant une vidéo Ogg sur les faces d'un cube en rotation.
