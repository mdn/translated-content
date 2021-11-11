---
title: Créer l'élément Canvas et l'afficher
slug: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
tags:
  - 2D
  - Canvas
  - Débutant
  - HTML
  - JavaScript
  - Jeux
  - Tutoriel
translation_of: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
original_slug: >-
  Games/Workflows/2D_Breakout_game_pure_JavaScript/creer_element_canvas_et_afficher
---
{{GamesSidebar}}{{IncludeSubnav("/fr/docs/Jeux")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

C'est la **1<sup>re</sup> étape sur** 10 de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript). Vous pouvez retrouver le code source de cette leçon sur [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Avant d'écrire les fonctionnalités de notre jeu, nous devons créer une structure où le jeu sera rendu. C'est possible en utilisant HTML et l'élément {{htmlelement("canvas")}}.

## La page HTML du jeu

La structure de la page HTML est vraiment simple, car tout le jeu sera contenu dans l'élément {{htmlelement("canvas")}}. Avec votre éditeur de texte préféré, créez un nouveau fichier HTML, sauvegardez-le sous le nom `index.html`, et ajoutez-y le code suivant :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
    	* { padding: 0; margin: 0; }
    	canvas { background: #eee; display: block; margin: 0 auto; }
    </style>
</head>
<body>

<canvas id="myCanvas" width="480" height="320"></canvas>

<script>
	// JavaScript code goes here
</script>

</body>
</html>
```

Dans l'en-tête, nous avons défini l'encodage des caractères (`charset`), le titre  {{htmlelement("title")}} et quelques règles CSS très simples. Le corps contient les éléments {{htmlelement("canvas")}} et {{htmlelement("script")}}. L'élément {{htmlelement("canvas")}} contiendra le rendu du jeu et l'élément {{htmlelement("script")}} l'emplacement du code JavaScript pour contrôler le jeu. L'élément {{htmlelement("canvas")}} a un identifiant nommé `myCanvas` qui permettra de le retrouver facilement en JavaScript, et possède des dimensions de 480 pixels de longueur et 320 pixels de hauteur. Tout le code JavaScript que nous allons écrire dans ce tutoriel sera contenu entre la balise ouvrante `<script>` et la balise fermante `</script>`.

## Les bases de Canvas

Pour utiliser l'élément {{htmlelement("canvas")}}, pour le rendu graphique de notre jeu, nous devons d'abord en donner la référence à JavaScript. Ajoutez le code après la balise ouvrante `<script>`.

```js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

Ici nous avons enregistré la référence à l'élément {{htmlelement("canvas")}} dans une variable nommée `canvas`. Ensuite, nous créons la variable ctx pour stocker le contexte de rendu 2D — l'outil réel que nous pouvons utiliser pour peindre sur Canvas.

Voyons un exemple de code qui imprime un carré rouge sur le canevas. Ajoutez ceci en dessous de vos lignes précédentes de JavaScript, puis chargez votre `index.html` dans un navigateur pour l'essayer.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

Toutes les instructions sont entre les méthodes  {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} et {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} . Nous définissons un rectangle en utilisant {{domxref("CanvasRenderingContext2D.rect()","rect()")}} : les deux premières valeurs spécifient les coordonnées du coin supérieur gauche du rectangle tandis que les deux suivantes spécifient la largeur et la hauteur du rectangle. Dans notre cas, le rectangle est peint à 20 pixels du côté gauche de l'écran et à 40 pixels du haut, et a une largeur de 50 pixels et une hauteur de 50 pixels, ce qui en fait un carré parfait. La propriété {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} stocke une couleur qui sera utilisée par la méthode {{domxref("CanvasRenderingContext2D.fill()","fill()")}} pour peindre le carré en rouge.

Nous ne sommes pas limités aux rectangles, voici un code pour imprimer un cercle vert. Essayez d'ajouter ceci au bas de votre JavaScript, puis sauvegardez et rafraîchissez :

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Comme nous pouvons le voir, nous utilisons à nouveau les méthodes {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} et {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} . Entre elles, la partie la plus importante du code ci-dessus est la méthode {{domxref("CanvasRenderingContext2D.arc()","arc()")}} . Elle comporte six paramètres :

- les coordonnées `x` et`y` du centre de l'arc
- rayon de l'arc
- l'angle de départ et l'angle de fin (pour finir de dessiner le cercle, en radiant)
- direction du dessin (`false`_(faux)_ pour le sens des aiguilles d'une montre, la valeur par défaut, ou `true` (vrai) pour le sens inverse). Ce dernier paramètre est facultatif.

La propriété {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} semble différente par rapport à l'exemple précédent. C'est parce que, tout comme avec CSS, la couleur peut être spécifiée sous la forme d'une valeur hexadécimale, d'un mot-clé, de la fonction `rgba ()` _(RVBA)_ ou de toute autre méthode disponible pour les couleurs.

Au lieu d'utiliser {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} et de remplir les formes avec des couleurs, nous pouvons utiliser {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}} pour ne colorer que le contour exterieur. Essayez d'ajouter ce code à votre JavaScript aussi :

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
```

Le code ci-dessus affiche un rectangle vide avec des traits bleus. Grâce au canal alpha de la fonction rgba (), la couleur bleue est semi transparente.

## Comparez votre code

Voici tout le code source de cette première leçon, fonctionnant avec JSFiddle :

{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","370")}}

**Exercice** : essayez de changer la taille et la couleur des formes géométriques.

## Prochaines étapes

Maintenant, nous avons mis en place le code HTML de base et avons appris un peu sur Canvas, passons au deuxième chapitre et étudions comment [Déplacer une balle sur notre jeu](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
