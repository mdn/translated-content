---
title: Manipulation vidéo avec la balise canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
---

{{DefaultAPISidebar("Canvas API")}}

En combinant les possibilités de l'élément [`video`](/fr/docs/Web/HTML/Element/video) avec celles de l'élément [`canvas`](/fr/docs/Web/HTML/Element/canvas), vous pouvez manipuler les données vidéos en temps réel, et y incorporer une variété d'effets visuels. Ce tutoriel explique comment réaliser un travail d'incrustation "chroma-keying" (_fond vert_) en utilisant JavaScript.

[Voir l'exemple](/samples/video/chroma-key/index.xhtml).

## Le contenu du document

Le document XHTML utilisé pour rendre ce contenu est montré ci-dessous :

```html
<!doctype html>
<html>
  <head>
    <style>
      body {
        background: black;
        color: #cccccc;
      }
      #c2 {
        background-image: url(foo.png);
        background-repeat: no-repeat;
      }
      div {
        float: left;
        border: 1px solid #444444;
        padding: 10px;
        margin: 10px;
        background: #3b3b3b;
      }
    </style>
    <script type="text/javascript" src="main.js"></script>
  </head>

  <body onload="processor.doLoad()">
    <div>
      <video id="video" src="video.ogv" controls="true" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96"></canvas>
      <canvas id="c2" width="160" height="96"></canvas>
    </div>
  </body>
</html>
```

Les éléments clés à retenir sont :

1. Ce document dispose de deux balises [`canvas`](/fr/docs/Web/HTML/Element/canvas), avec les identifiants `c1` et `c2`&nbsp; l'élément `c1` est utilisé pour afficher l'image courante de la vidéo originale, pendant que `c2` est utilisé pour afficher la vidéo après application de l'effet d'incrustation&nbsp;; `c2` est préchargé avec la même image que celle qui sera utilisée pour le remplacement du fond vert.
2. Le code JavaScript est importé dans le script nommé `main.js` ; Ce script utilise les fonctionnalités propres à la version 1.8, aussi cette version est précisée, à la ligne 22, quand le script est importé.
3. Quand le document se charge, la méthode `processor.doLoad()`, dans le script `main.js`, est exécutée.

## Le code JavaScript

Le code JavaScript `main.js` est composé de trois méthodes.

### Initialisation du lecteur avec effet d'incrustation (_chroma-key_)

La méthode `doLoad()` est appelée quand le document XHTML se charge. Cette méthode sert à initialiser chaque variable nécessaire au code traitant l'incrustation (_chroma-key_), ainsi qu'à associer un écouteur d'évènement qui détectera le moment où l'utilisateur lancera la vidéo.

```js
var processor;

  processor.doLoad = function doLoad() {
    this.video = document.getElementById('video');
    this.c1 = document.getElementById('c1');
    this.ctx1 = this.c1.getContext('2d');
    this.c2 = document.getElementById('c2');
    this.ctx2 = this.c2.getContext('2d');
    let self = this;
    this.video.addEventListener('play', function() {
        self.width = self.video.videoWidth / 2;
        self.height = self.video.videoHeight / 2;
        self.timerCallback();
      }, false);
  },
```

Le code récupère les références aux élément XHTML qui nous intéressent, à savoir l'élément `video` et les deux éléments `canvas`. Il définit également les contextes graphique de chacun des éléments `canvas`. Ce sera utile pour la suite, lorsque nous créerons l'effet d'incrustation.

Ensuite, l'écouteur d'évènement `addEventListener()` est appelé sur l'élément `video` pour détecter le moment où l'utilisateur va cliquer sur le bouton de lecture. Dès lors, le code récupère la hauteur et la largeur de la vidéo, que l'on divise par deux (nécessaire pour plus tard effectuer l'effet d'incrustation), puis on appelle la méthode `timerCallback()` pour surveiller l'avancement de la vidéo et appliquer l'effet visuel.

### Le rappel du minuteur

Le rappel du minuteur est initialisé lorsque la vidéo commence à jouer (lorsque l'événement "play" se produit), puis est chargé d'établir le rappel périodique afin de lancer l'effet d'ajustement pour chaque "frame".

```js
processor.timerCallback = function timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    let self = this;
    setTimeout(function() {
        self.timerCallback();
      }, 0);
  },
```

La première chose que le rappel fait est de vérifier si la vidéo est en train de jouer. Si ce n'est pas le cas, le rappel revient immédiatement sans rien faire.

Ensuite, il appelle la méthode `computeFrame()`, qui effectue l'effet "chroma-keying" sur l'image vidéo en cours.

La dernière chose que fait le rappel est d'appeler `setTimeout()` pour programmer un nouvel appel. En réalité, vous planifierez probablement cela en fonction de la connaissance de la fréquence d'images de la vidéo.

### Manipulation des données des images vidéo

La méthode `computeFrame()` , présentée ci-dessous, est en charge de récupérer les données de chaque image et d'y appliquer l'effet d'incrustation.

```js
processor.computeFrame = function computeFrame() {
  this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
  let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
  let l = frame.data.length / 4;

  for (let i = 0; i < l; i++) {
    let r = frame.data[i * 4 + 0];
    let g = frame.data[i * 4 + 1];
    let b = frame.data[i * 4 + 2];
    if (g > 100 && r > 100 && b < 43) frame.data[i * 4 + 3] = 0;
  }
  this.ctx2.putImageData(frame, 0, 0);
  return;
};
```

²

Quand la routine est appelée, l'élément vidéo affiche les données de la plus récente image de la vidéo, ce qui ressemble à :

![](video.png)

À la seconde ligne, cette image est copiée dans le contexte graphique `ctx1` du premier élément `canvas`, en spécifiant ses hauteur et largeur, définies plus tôt (soit, réduites de moitié). Notez que c'est très simplement que vous passez les données de l'élément vidéo à afficher dans le contexte graphique avec la méthode `drawImage()`. Voici ce que cela donne :

![](sourcectx.png)

La ligne 3 extrait une copie des données graphiques brutes pour l'image courante de la vidéo en appelant la méthode `getImageData()` sur le premier contexte. Cela fournit des données brutes d'image pixel 32 bits que nous pouvons ensuite manipuler. La ligne 4 calcule le nombre de pixels de l'image en divisant la taille totale des données d'image du cadre par quatre.

La boucle `for`, qui commence à la ligne 6, parcourt les pixels du cadre en extrayant les valeurs rouges, vertes et bleues de chaque pixel et compare les valeurs aux nombres prédéterminés utilisés pour détecter l'écran vert qui sera remplacé par l'image de fond importée de `foo.png`.

Chaque pixel dans les données d'image, qui se trouve dans les paramètres considérés comme faisant partie de l'écran vert, a sa valeur alpha remplacée par un zéro, indiquant que le pixel est entièrement transparent. En conséquence, l'image finale a toute la zone d'écran vert 100% transparente, de sorte que lorsqu'elle est dessinée dans le contexte de destination à la ligne 13, le résultat est une superposition sur la toile de fond statique.

L'image résultante ressemble à ceci :

![](output.png)

Cela se fait de façon répétée au fur et à mesure que la vidéo est lue, de sorte que, image après image, la vidéo est traitée et affichée avec l'effet de chrominance.

[Voyez cet exemple réel](/samples/video/chroma-key/index.xhtml).

## Voir aussi

- [Using audio and video](/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
