---
title: Initialiser le canevas
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball")}}

C'est la **1<sup>ère</sup> étape** sur 11 du [tutoriel sur la création d'un jeu de casse-briques en utilisant uniquement JavaScript](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Avant de commencer à écrire la fonctionnalité du jeu, nous devons créer une structure de base pour rendre le jeu. Cela se fait en utilisant l'élément HTML {{HTMLElement("canvas")}}.

## Le HTML du jeu

Le jeu est entièrement rendu sur l'élément {{HTMLElement("canvas")}} généré par le cadriciel. En utilisant votre éditeur de texte préféré, créez un nouveau document HTML, enregistrez-le sous le nom `index.html` dans un emplacement approprié, et ajoutez le code suivant&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Jeu du casse-briques</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/script.js" defer></script>
  </head>
  <body>
    <canvas id="canvas-jeu" width="480" height="320"></canvas>
  </body>
</html>
```

Ensuite, créez un nouveau répertoire `js` au même emplacement que votre fichier `index.html`, et créez un nouveau fichier appelé `script.js` à l'intérieur. C'est là que nous écrivons le code JavaScript qui contrôle le jeu. Initialement, il doit contenir ce qui suit&nbsp;:

```js
const canvas = document.getElementById("canvas-jeu");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

## Comprendre ce que nous avons jusqu'à présent

Dans l'en-tête de notre document, nous avons un `charset`, un titre ({{HTMLElement("title")}}), un peu de CSS de base pour réinitialiser le `margin` et le `padding` par défaut, et un élément HTML {{HTMLElement("script")}} qui référence le code JavaScript que nous écrivons pour rendre le jeu et le contrôler.

L'élément HTML {{HTMLElement("canvas")}} est l'endroit où le jeu est réellement rendu. Initialement, il est vide et occupe 480x320 pixels. Nous utilisons la méthode JavaScript {{DOMxRef("HTMLCanvasElement.getContext()")}} pour obtenir le contexte de rendu en 2D ({{DOMxRef("CanvasRenderingContext2D")}}) qui nous permet de dessiner des formes 2D sur le canevas, et nous le faisons remplir tout l'espace du canevas avec une couleur gris très clair.

## Échelle

Actuellement, le canevas occupe une quantité fixe d'espace à l'écran. Sur un grand écran (comme un ordinateur portable), il se trouve dans un petit coin&nbsp;; sur un petit écran (comme un téléphone — bien qu'il doive s'agir d'un très petit téléphone&nbsp;!) il déborde. Nous pouvons faire en sorte que le jeu s'adapte à n'importe quelle taille d'écran en rendant le canevas réactif, afin de ne pas avoir à nous en soucier plus tard. Nous allons agrandir ou réduire le canevas de telle sorte&nbsp;:

1. Son rapport d'aspect est préservé
2. Soit sa largeur est égale à la largeur de la fenêtre, soit sa hauteur est égale à la hauteur de la fenêtre
3. L'autre dimension ne déborde pas

Nous faisons cela en ajoutant le CSS suivant à l'élément `<style>` dans `index.html`&nbsp;:

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

Le canevas a un rapport d'aspect de 480 / 320, soit 3:2. Pour s'adapter à la fenêtre, sa largeur ne doit pas être supérieure à la largeur de la fenêtre (`100vw`) ou à 1,5 fois la hauteur de la fenêtre (`150vh`). La fonction CSS {{CSSxRef("min()")}} sélectionne la plus petite de ces deux valeurs. Avec `height: auto`, la hauteur suit le rapport d'aspect du canevas, de sorte que les deux dimensions s'adaptent à la fenêtre. Le corps remplit au moins la hauteur de la fenêtre et utilise `place-items: center` pour centrer le canevas à la fois horizontalement et verticalement.

Ce CSS modifie la taille affichée du canevas, tandis que ses attributs HTML `width` et `height` maintiennent la zone de dessin à 480×320 pixels. Nous pouvons donc continuer à utiliser les mêmes coordonnées dans notre JavaScript, quelle que soit la taille de la fenêtre. Le navigateur met à l'échelle l'image résultante pour l'adapter à la taille affichée.

## Exécuter l'application

Pour exécuter l'application, vous pouvez ouvrir directement le fichier `index.html`, mais nous recommandons un serveur web local au cas où nous voudrions charger des ressources externes, ce qui est bloqué par la [politique de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy) du navigateur.

Consultez les [tutoriels pour configurer un serveur local](/fr/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server), et utilisez l'option que vous préférez. Par exemple, si vous choisissez d'utiliser le serveur HTTP de Python, ouvrez un terminal, naviguez jusqu'au répertoire où se trouve votre fichier `index.html`, et exécutez la commande suivante&nbsp;:

```bash
python3 -m http.server
```

Cela démarre un serveur HTTP simple sur le port 8000. Ensuite, ouvrez votre navigateur web et accédez à `http://localhost:8000/index.html`.

## Comparer votre code

Voici ce que vous devez avoir jusqu'à présent, en direct. Pour voir son code source, cliquez sur le bouton «&nbsp;Exécuter&nbsp;».

Il n'y a encore rien à voir ici, à part le fond gris clair du canevas.

```html hidden
<canvas id="canvas-jeu" width="480" height="320"></canvas>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

```js hidden
const canvas = document.getElementById("canvas-jeu");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

{{EmbedLiveSample("Comparer votre code", "", 480,,,,, "allow-modals")}}

## Prochaines étapes

Maintenant, nous avons mis en place le code HTML de base et avons appris un peu sur Canvas, passons au deuxième chapitre et étudions comment [Déplacer une balle sur notre jeu](/fr/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball")}}
