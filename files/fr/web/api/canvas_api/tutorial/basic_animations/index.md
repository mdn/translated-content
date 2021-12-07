---
title: Animations basiques
slug: Web/API/Canvas_API/Tutorial/Basic_animations
tags:
  - Canvas
  - Graphiques
  - HTML
  - HTML5
  - Intermédiaire
  - Tutoriel
translation_of: Web/API/Canvas_API/Tutorial/Basic_animations
original_slug: Web/API/Canvas_API/Tutoriel_canvas/Animations_basiques
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Tutoriel_canvas/Advanced_animations")}}

Avec l'utilisation en Javascript du composant {{HTMLElement("canvas")}}, il est très simple de créer des animations (interactives). Ce chapitre décrit comment créer quelques animations basiques.

La plus grosse limitation est sans doute qu'une fois qu'une forme est dessinée, elle reste telle quelle. Si on a besoin de la déplacer, il faut la redessiner avec ce qui était dessiné avant. Cela peut prendre beaucoup de temps de redessiner des images complexes et les performances dépendront beaucoup de la vitesse de l'ordinateur qui exécute cet affichage.

## Les étapes d'une animation basique

Voici les étapes à suivre à chaque image dessinée (frame) :

1.  **Effacer le canevas**
    À moins que les formes que vous voulez dessiner remplissent complètement le canevas (par exemple une image en arrière-plan), vous devrez effacer toutes les formes qui ont été dessinées précédemment. La manière la plus simple de le faire est d'utiliser la méthode {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}.
2.  **Enregistrer l'état du canevas**
    Si vous changez des configurations qui affectent l'état du canevas (comme le style, les transformations, etc.), et vous voulez vous assurer que c'est l'état original qui est utilisé chaque fois que le canevas est redessiné, alors vous devez enregistrer l'état original.
3.  **Dessiner les formes animées**
    Vous effectuez toutes les opérations pour afficher l'image.
4.  **Restaurer l'état du canevas**
    Si l'état du canevas a été sauvegardé, vous  restaurez cet état avant le prochain rendu.

## Contrôle d'une animation

Les formes sont dessinées en utilisant soit les méthodes du canevas directement soit en appelant des fonctions personnalisées. Dans des conditions normales, on ne voit le résultat des opérations sur le canevas que quand le script a terminé son exécution. Cela signifie qu'il n'est pas possible de créer une animation avec une boucle `for`.

Il nous faut donc un moyen d'exécuter nos fonctions de dessin sur une période de temps. Il existe à ce jour trois manières de le faire.

### Mises à jour planifiées

Les fonctions {{domxref("window.setInterval()")}}, {{domxref("window.setTimeout()")}}, et {{domxref("window.requestAnimationFrame()")}} peuvent être utilisées :

- {{domxref("WindowTimers.setInterval", "setInterval(function, delay)")}}
  - : Lance la fonction définie par `function` chaque `delay` _(délai)_ millisecondes.
- {{domxref("WindowTimers.setTimeout", "setTimeout(function, delay)")}}
  - : Exécute la fonction définie par `function` dans `delay` millisecondes.
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame(callback)")}}
  - : Dit au navigateur qu'on veut afficher une animation et lui demande d'appeler la fonction `callback` pour mettre à jour cette animation avant de dessiner la prochaine image.

Si vous n'avez pas besoin d'interaction utilisateur, vous pouvez utiliser la fonction `setInterval()`, elle va exécuter périodiquement votre code.

Si vous voulez faire un jeu, et utiliser les événements du clavier et de la souris pour contrôler l'animation, vous pouvez utiliser `setTimeout()`. En utilisant des {{domxref("EventListener")}}, on peut récupèrer chaque interaction et d'exécuter nos fonctions d'animation.

Dans les exemples suivants, nous utiliserons {{domxref("window.requestAnimationFrame()")}} pour contrôler les animations. Cette technique est plus fluide et plus efficace, elle appelle les opérations de rendu quand le système est prêt à dessiner l'image. Dans des conditions idéales, la fonction est alors lancée 60 fois par seconde, mais la fréquence sera réduite si l'animation se passe dans un onglet non visible.

> **Note :** Pour plus d'informations sur la boucle d'animation, plus spécialement pour les jeux, rendez-vous sur l'article [L'anatomie d'un jeu vidéo](/fr/docs/Jeux/Anatomie) dans notre section [Développement de jeux vidéo](/fr/docs/Jeux).

## Un système terrestre animé

Cette exemple anime un petit modèle de notre système terrestre.

```js
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'canvas_sun.png';
  moon.src = 'canvas_moon.png';
  earth.src = 'canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // effacer le canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  // Terre
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Ombre
  ctx.drawImage(earth,-12,-12);

  // Lune
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Orbite terrestre
  ctx.stroke();

  ctx.drawImage(sun,0,0,300,300);

  window.requestAnimationFrame(draw);
}

init();
```

```html hidden
<canvas id="canvas" width="300" height="300"></canvas>
```

{{EmbedLiveSample("Un_système_terrestre_animé", "310", "310")}}

## Une horloge animée

Cette exemple dessine une horloge animée qui affiche l'heure actuelle.

```js
function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(75,75);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Marquage des heures
  ctx.save();
  for (var i=0;i<12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();

  // Marquage des minutes
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // Aiguille des heures
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // Aiguille des minutes
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();

  // Aiguille des secondes
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

{{EmbedLiveSample("Une_horloge_animée", "180", "180")}}

## Un panorama défilant en boucle

Dans cet exemple, un panorama défile de la gauche vers la droite et recommence. Nous utilisons une [image du parc Yosemite National](http://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg) récupérée sur Wikimedia, vous pouvez utiliser une autre image de votre choix qui est plus grande que le canevas.

```js
var img = new Image();

// Variables utilisateur - les personnaliser pour changer l'image qui défile, ses
// directions, et la vitesse.

img.src = 'capitan_meadows_yosemite_national_park.jpg';
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; // plus elle est basse, plus c'est rapide
var scale = 1.05;
var y = -4.5; // décalage vertical

// Programme principal

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function() {
    imgW = img.width * scale;
    imgH = img.height * scale;

    if (imgW > CanvasXSize) {
        // image plus grande que le canvas
        x = CanvasXSize - imgW;
    }
    if (imgW > CanvasXSize) {
        // largeur de l'image plus grande que le canvas
        clearX = imgW;
    } else {
        clearX = CanvasXSize;
    }
    if (imgH > CanvasYSize) {
        // hauteur de l'image plus grande que le canvas
        clearY = imgH;
    } else {
        clearY = CanvasYSize;
    }

    // récupérer le contexte du canvas
    ctx = document.getElementById('canvas').getContext('2d');

    // définir le taux de rafraichissement
    return setInterval(draw, speed);
}

function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

    // si image est <= taille du canvas
    if (imgW <= CanvasXSize) {
        // réinitialise, repart du début
        if (x > CanvasXSize) {
            x = -imgW + x;
        }
        // dessine image1 supplémentaire
        if (x > 0) {
            ctx.drawImage(img, -imgW + x, y, imgW, imgH);
        }
        // dessine image2 supplémentaire
        if (x - imgW > 0) {
            ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        }
    }

    // image est > taille du canvas
    else {
        // réinitialise, repeart du début
        if (x > (CanvasXSize)) {
            x = CanvasXSize - imgW;
        }
        // dessine image supplémentaire
        if (x > (CanvasXSize-imgW)) {
            ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        }
    }
    // dessine image
    ctx.drawImage(img, x, y,imgW, imgH);
    // quantité à déplacer
    x += dx;
}
```

En dessous, vous trouvez l'élément {{HTMLElement("canvas")}} avec l'image qui défile. Notez que les dimensions de largeur et de hauteur spécifiées doivent correspondre aux valeurs des variables `CanvasXZSize` et `CanvasYSize` dans le code JavaScript.

```html
<canvas id="canvas" width="800" height="200"></canvas>
```

{{EmbedLiveSample("Un_panorama_défilant_en_boucle", "830", "230")}}

## Autres exemples

- [Un raycaster basique avec canvas](/fr/docs/Un_raycaster_basique_avec_canvas)
  - : Un bon exemple d'animation contrôlée par le clavier.
- [Animations avancées](/fr/docs/Tutoriel_canvas/Advanced_animations)
  - : Nous nous attarderons sur quelques techniques d'animation et de gestion de physique avancées dans le prochain châpitre.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Tutoriel_canvas/Advanced_animations")}}
