---
title: Un raycaster basique avec canvas
slug: Web/API/Canvas_API/A_basic_ray-caster
tags:
  - 3D
  - Canvas
  - Exemples
  - Graphismes
  - Web
translation_of: Web/API/Canvas_API/A_basic_ray-caster
original_slug: Un_raycaster_basique_avec_canvas
---
{{CanvasSidebar}}

Cet article fournit un exemple intéressant concret d'utilisation de l'élément {{HTMLElement("canvas")}} pour faire un logiciel rendant un environnement 3D à l'aide de la projection de rayons.

{{EmbedGHLiveSample("canvas-raycaster/index.html", 900, 300)}}

**[Ouvrir une nouvelle fenêtre](http://mdn.github.io/canvas-raycaster/)**

## Pourquoi ?

Après avoir réalisé, à mon plus grand plaisir, que le sympathique élément `<canvas>` dont j'avais [entendu parler (en)](http://www.whatwg.org/specs/web-apps/current-work/#dynamic), non seulement allait être supporté par Firefox, mais était **déjà** supporté dans la version actuelle de Safari, je me devais de tenter une petite expérience.

La [présentation](/fr/docs/Web/API/Canvas_API) et le [tutoriel](/fr/docs/Web/API/Canvas_API/Tutorial) `canvas` que j'ai trouvé ici sur MDN sont excellents, mais personne n'a encore rien écrit sur l'animation. J'ai donc pensé porter un «&nbsp;raycaster&nbsp;» basique sur lequel j'avais travaillé il y a quelque temps, et voir quelle sorte de performance nous pouvions attendre d'un tampon de pixel écrit en JavaScript.

## Comment ?

L'idée de base est d'employer {{domxref("window.setInterval","setInterval()")}} à intervalle régulier, correspondant au taux de trame désiré. Après chaque intervalle, une fonction de mise à jour redessine le canvas, affichant la vue actuelle. Je sais que j'aurais pu commencer avec un exemple plus simple, mais je suis sûr que le tutoriel canvas va [y conduire](/fr/docs/Tutoriel_canvas/Animations_basiques), et je voulais voir si je pouvais y arriver.

Donc, à chaque mise à jour, le projeteur de rayons vérifie si vous avez pressé une touche récemment, pour s'éviter des calculs si vous êtes immobile. S'il y a eu un mouvement, le canvas est effacé, le ciel et le sol sont dessinés, la position et l'orientation de la caméra corrigées et les rayons projetés. Lorsque les rayons rencontrent un mur, ils créent une bandelette verticale de canvas de la couleur du mur qu'ils ont touché, mélangée à une nuance plus sombre de cette couleur en fonction de la distance au mur. La hauteur de la bandelette est modulée par la distance entre le mur et la caméra, et la bandelette est dessinée centrée sur la ligne d'horizon.

Le code que j'ai obtenu est l'amalgame des chapitres "raycaster" d'un vieux livre d'André Lamothe _Tricks of the Game Programming Gurus_ (ISBN: 0672305070), et d'un [Projeteur de rayons Java](http://www.shinelife.co.uk/java-maze/) que j'ai trouvé en ligne, modifié par mon besoin compulsif de tout renommer pour que cela ait un sens pour moi, et pour tout le bricolage nécessaire pour que l'ensemble fonctionne bien.

## Résultats

Le canvas dans Safari 2.0.1 a étonnement bien marché. Avec le facteur de bloc-itude poussé pour rendre des bandelettes de 8 pixels de largeur, j'arrive à faire tourner une fenêtre en 320 x 240 à 24 images/seconde sur mon Apple mini. Firefox 1.5 Beta 1 est encore plus rapide, j'obtiens 24 images/seconde sur la fenêtre de 320 x 240 avec des bandelettes de 4 pixels. Pas vraiment un nouveau membre de la famille "ID software", mais plutôt décent si l'on considère qu'il s'agit d'un environnement entièrement interprété, et que je n'ai eu à m'inquiéter ni de l'allocation mémoire, ni des modes vidéos, ni de coder les routines centrales en assembleur, ni de quoi que soit d'autre. Le code cherche à être très efficace, consultant un tableau de valeurs précalculées, mais je ne suis pas un dieu de l'optimisation, donc les choses pourraient probablement être écrites plus rapidement.

De plus, il laisse beaucoup à désirer en tant que tentative d'une espèce de moteur de jeu— il n'y a pas de textures sur les murs, pas de sprites, pas de portes, même pas de téléporteurs pour passer à un autre niveau. Je suis cependant presque certain que toutes ces choses peuvent être intégrées pourvu qu'on en prenne le temps. L' API de canvas supporte la copie d'images par pixel, donc les textures semblent possibles. Je laisse ça pour un autre article, probablement d'une autre personne. =)

## Le projeteur de rayons _(ray-caster)_

De sympathiques personnes ici ont copié mes fichiers manuellement pour que vous puissiez y jeter un [coup d'oeil](https://mdn.github.io/canvas-raycaster/), et pour votre plaisir, j'ai posté le contenu de chacun des fichiers sous la forme de listings de code (voir plus bas).

Vous y voici donc, lancez Safari 1.3+, Firefox 1.5+ ou un autre navigateur supportant l'élément `<canvas>` et amusez-vous!

[input.js](fr/Un_raycaster_basique_avec_canvas/input.js) | [Level.js](fr/Un_raycaster_basique_avec_canvas/Level.js) | [Player.js](fr/Un_raycaster_basique_avec_canvas/Player.js) | [RayCaster.html](fr/Un_raycaster_basique_avec_canvas/RayCaster.html) | [RayCaster.js](fr/Un_raycaster_basique_avec_canvas/RayCaster.js) | [trace.css](fr/Un_raycaster_basique_avec_canvas/trace.css) | [trace.js](fr/Un_raycaster_basique_avec_canvas/trace.js)

### Voir aussi

- [Canvas tutorial](/fr/docs/Tutoriel_canvas)
