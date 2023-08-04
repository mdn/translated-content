---
title: Jeux 3D sur le web
slug: Games/Techniques/3D_on_the_web
---

{{GamesSidebar}}

Pour des expériences de jeu riches sur le Web, l'arme de choix est WebGL, qui est fourni sur HTML {{htmlelement ("canvas")}}. WebGL est essentiellement un OpenGL ES 2.0 pour le Web - c'est une API JavaScript fournissant des outils pour créer des animations interactives riches et bien sûr aussi des jeux. Vous pouvez générer et rendre des graphiques 3D dynamiques avec du JavaScript accéléré.

## Documentation et support du navigateur

La documentation et les spécifications du projet [WebGL](/fr/docs/Web/API/WebGL_API) sont gérées par le [Groupe Khronos](https://www.khronos.org/), pas le W3C comme pour la plupart des API Web. Le support sur les navigateurs modernes est très bon, même sur mobile, donc vous n'avez pas trop à vous en soucier. Les principaux navigateurs prennent en charge WebGL et tout ce dont vous avez besoin est de vous concentrer sur l'optimisation des performances sur les appareils que vous utilisez.

Il y a un effort continu pour rendre libre WebGL 2.0 (basé sur OpenGL ES 3.0) dans un proche avenir, ce qui apporterait de nombreuses améliorations et aiderait les développeurs à construire des jeux pour le Web moderne en utilisant le matériel puissant actuel.

## Explication des bases de la théorie 3D

Les bases de la théorie 3D s'articulent autour des formes représentées dans un espace 3D, avec un système de coordonnées utilisé pour calculer leurs positions. Consultez [notre article de base sur la théorie 3D](/fr/docs/Games/Techniques/3D_on_the_web/Basic_theory) pour toutes les informations dont vous avez besoin.

## Concepts avancés

Vous pouvez faire beaucoup plus avec WebGL. Il y a des concepts avancés dans lesquels vous devriez plonger et en apprendre davantage — les "shaders", la détection de collision ou le dernier sujet brûlant — la réalité virtuelle sur le Web.

### Shaders

Il convient de distinguer les shaders, qui sont un cas particulier. Les Shaders utilisent GLSL, un langage d'ombrage OpenGL spécial avec une syntaxe similaire à C, qui est exécuté directement par le pipeline graphique. Ils peuvent être divisés en "Vertex Shaders" et "Fragment Shaders" (ou "Pixel Shaders") — le premier transforme les positions des formes en véritables coordonnées de dessin 3D, tandis que le second calcule les couleurs de rendu et d'autres attributs. Vous devriez absolument lire l'article [GLSL Shaders](/fr/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) pour en apprendre plus à leur sujet.

### Détection de collision

Il est difficile d'imaginer un jeu sans la détection de collision — nous devons toujours mettre au point quand quelque chose frappe quelque chose d'autre. Nous avons des informations disponibles pour votre apprentissage de :

- [détection de collision 2D](/fr/docs/Games/Techniques/2D_collision_detection)
- [détection de collision 3D](/fr/docs/Games/Techniques/3D_collision_detection)

### Réalité virtuelle sur le web

Le concept de réalité virtuelle n'est pas nouveau, mais il est en train de conquérir le web grâce à des avancées matérielles telles que l' [Oculus Rift](https://www.oculus.com/en-us/rift/) et l'[API WebVR](/fr/docs/Web/API/WebVR_API) (actuellement expérimental) pour capturer les informations du matériel de réalité virtuelle et les rendre disponibles pour les applications JavaScript. Pour en savoir plus, lisez [WebVR - Réalité virtuelle pour le Web](/fr/docs/Games/Techniques/3D_on_the_web/WebVR).

Il y a aussi la [construction d'une démo de base avec l'article A-Frame](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) qui montre comment il est facile de construire des environnements 3D pour la réalité virtuelle en utilisant le framework [A-Frame](http://aframe.io/) .

## L'essor des bibliothèques et des cadres

Le codage de WebGL brut est assez complexe, mais vous aurez envie de le maîtriser à long terme, car vos projets seront plus avancés (consultez notre [documentation WebGL](/fr/docs/Web/API/WebGL_API) pour commencer). Pour les projets de monde réel, vous utiliserez probablement aussi un "framework" pour accélérer le développement et vous aider à gérer le projet. L'utilisation d'un "framework" pour les jeux 3D permet également d'optimiser les performances, car les outils que vous utilisez vous permettent de vous concentrer sur la construction du jeu.

La bibliothèque 3D JavaScript la plus populaire est [Three.js](http://threejs.org/), un outil polyvalent qui rend les techniques 3D plus simples à implémenter. Il existe d'autres bibliothèques et cadres de développement de jeux populaires qui valent la peine d'être regardés ; [A-Frame](https://aframe.io), [PlayCanvas](https://playcanvas.com/) et [Babylon.js](http://www.babylonjs.com/) sont parmi les plus reconnaissables avec une documentation riche, des éditeurs en ligne et des communautés actives.

### Construction d'une démo de base avec A-Frame

A-Frame est un "framework" web pour construire des expériences 3D et de la réalité virtuelle. Sous le capot, il s'agit d'un "framework" three.js avec un modèle déclaratif entité-composant, ce qui signifie que nous pouvons construire des scènes avec seulement du HTML. Voir la page [Construction d'une démo de base avec A-Frame](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) pour le processus étape par étape de création de la démo .

### Construction d'une démo de base avec Babylon.js

Babylon.js est l'un des moteurs de jeux 3D les plus populaires utilisés par les développeurs. Comme avec n'importe quelle autre bibliothèque 3D, il fournit des fonctions intégrées pour vous aider à implémenter les fonctionnalités 3D courantes plus rapidement. Voir la page [Construction d'une démo de base avec Babylon.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) sur les bases et l'utilisation de Babylon.js, y compris la mise en place d'un environnement de développement, la structuration du code HTML nécessaire et l'écriture du code JavaScript.

### Construction d'une démo de base avec PlayCanvas

PlayCanvas est un moteur de jeu 3D WebGL populaire ouvert sur GitHub, avec un éditeur disponible en ligne et une bonne documentation. Voir la page [Construction d'une démo de base avec PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) pour des détails de haut niveau, et d'autres articles montrant comment créer des démos à l'aide de la bibliothèque PlayCanvas et de l'éditeur en ligne.

### Construction d'une démo de base avec Three.js

Three.js, comme toute autre bibliothèque, vous donne un énorme avantage : au lieu d'écrire des centaines de lignes de code WebGL pour construire quelque chose d'intéressant, vous pouvez utiliser des fonctions intégrées pour le faire beaucoup plus facilement et plus rapidement. Voir la page [Construction d'une démo de base avec Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) pour le processus étape par étape de création de la démo .

### Autres outils

Les deux [Unity](http://unity3d.com/) et [Unreal](https://www.unrealengine.com/) peuvent exporter votre jeu vers [WebGL](/fr/docs/Web/API/WebGL_API) avec [asm.js](/fr/docs/Games/Tools/asm.js) , de sorte que vous êtes libre d'utiliser leurs outils et techniques pour construire des jeux qui seront exportés vers le web.

![](shapes.png)

## Où aller ensuite

Avec cet article, nous avons juste effleuré la surface de ce qu'il est possible de faire avec les technologies actuellement disponibles. Vous pouvez créer des jeux 3D immersifs, beaux et rapides à l'aide de WebGL, les bibliothèques et les frameworks s'appuient dessus.

### Code source

Vous pouvez trouver tous les codes source de cette série de [démos sur GitHub](http://end3r.github.io/MDN-Games-3D/).

### API

- [Canvas API](/fr/docs/Web/HTML/Canvas)
- [WebGL API](/fr/docs/Web/API/WebGL_API)
- [WebVR API](/fr/docs/Web/API/WebVR_API)

### Frameworks

- [Three.js](http://threejs.org/)
- [Whitestorm.js](http://whitestormjs.xyz/) (basé sur Three.js)
- [PlayCanvas](https://playcanvas.com/)
- [Babylon.js](http://www.babylonjs.com/)
- [A-Frame](http://aframe.io/)

### Tutorials

- [Construction d'une démo de base avec Three.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Construction d'une démo de base avec PlayCanvas](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Construction d'une démo de base avec Babylon.js](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Construction d'une démo de base avec A-Frame](/fr/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
