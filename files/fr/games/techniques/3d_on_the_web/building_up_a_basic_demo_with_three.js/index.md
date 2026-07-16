---
title: Réaliser une démo basique avec Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

Une scène 3D dans un jeu — même la plus simple qui soit — contient des éléments standard comme des formes situées dans un système de coordonnées, une caméra pour les voir, des lumières et des matériaux pour améliorer son esthétique, des animations pour la rendre vivante, etc. **Three.js**, comme n'importe quelle autre bibliothèque 3D, fournit des fonctions utilitaires intégrées pour vous aider à mettre en œuvre plus rapidement les fonctionnalités 3D courantes. Dans cet article, nous allons vous présenter les bases réelles de l'utilisation de Three.js, y compris la configuration d'un environnement de développement, la structuration du HTML nécessaire, les objets fondamentaux de Three et comment construire une démo basique.

_Three_ est l'une des bibliothèques [WebGL](/fr/docs/Web/API/WebGL_API) les plus populaires, bien que nous ne disions pas qu'elle soit meilleure qu'une autre bibliothèque WebGL, et vous devriez vous sentir libre d'essayer d'autres bibliothèques.

> [!NOTE]
> Ce guide a été mis à jour pour la dernière fois en Novembre 2024, et est compatible avec la version `r79` de Three.js.

## Configuration de l'environnement de développement

Pour commencer à développer avec Three.js, vous devez vous assurer d'utiliser un navigateur moderne avec une bonne prise en charge de [WebGL](/fr/docs/Web/API/WebGL_API).

Dans votre code, vous pouvez importer Three.js [en utilisant un CDN ou Node.js <sup>(angl.)</sup>](https://threejs.org/docs/#manual/en/introduction/Installation).
Si vous l'incluez depuis un CDN, vous pouvez utiliser l'URL suivante dans votre HTML&nbsp;:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
```

Une configuration Node.js avec Three.js installé en tant que dépendance est pratique si vous souhaitez développer avec des versions spécifiques de Three.js et cela peut accélérer la collaboration et le déploiement&nbsp;:

```bash
npm install --save three
npm install --save-dev vite # Pour le développement
npx vite
```

Sinon, vous pouvez télécharger la [dernière version de la bibliothèque Three.js <sup>(angl.)</sup>](https://github.com/mrdoob/three.js/archive/master.zip) et copier la version minifiée de Three.js depuis l'archive décompressée à `build/three.module.min.js` dans votre projet.
Gardez à l'esprit que les archives incluent les fichiers source, ce qui rend la taille du téléchargement d'environ 350 Mo.

Quelle que soit la méthode que vous choisissez pour commencer, assurez-vous d'avoir la [documentation de Three.js <sup>(angl.)</sup>](https://threejs.org/docs/) ouverte quelque part pendant que vous travaillez pour référence.

## HTML de départ pour Three.js

Si vous construisez votre projet localement dans un IDE, voici la structure HTML pour commencer&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Jeux avec MDN : démonstration Three.js</title>
    <style>
      html,
      body,
      canvas {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: 0;
      }
    </style>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
    <script>
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      /* tout notre code JavaScript ira ici */
    </script>
  </body>
</html>
```

Cette structure contient des informations de base comme le {{HTMLElement("title")}} du document, ainsi que du CSS pour définir la `width` et la `height` de l'élément HTML {{HTMLElement("canvas")}} que Three.js ajoutera à la page en 100% pour remplir tout l'espace disponible de la zone d'affichage. Le premier élément HTML {{HTMLElement("script")}} inclut la bibliothèque Three.js dans la page, et nous écrirons notre code d'exemple dans le second. Deux variables utilitaires sont déjà incluses, elles stockent la `width` et la `height` de la fenêtre.

Avant de continuer, copiez ce code dans un nouveau fichier texte et enregistrez-le dans votre répertoire de travail sous le nom `index.html`.

## Moteur de rendu

Un moteur de rendu est un outil qui affiche les scènes directement dans votre navigateur. Il existe plusieurs moteurs différents&nbsp;: WebGL est le moteur par défaut, mais vous pouvez aussi utiliser Canvas, SVG, CSS et DOM. Ils diffèrent dans la façon dont tout est rendu, donc l'implémentation WebGL sera différente de celle en CSS. Malgré la variété des méthodes utilisées pour atteindre cet objectif, l'expérience sera identique pour l'utilisateur·ice. Grâce à cette approche, une solution de secours peut être utilisée si une technologie souhaitée n'est pas prise en charge par le navigateur.

Le code ci-dessous crée un nouveau moteur de rendu WebGL, définit sa taille pour occuper tout l'espace disponible à l'écran, et ajoute la structure DOM à la page.
Vous avez peut-être remarqué le paramètre `antialias` dans la première ligne — cela permet d'obtenir des bords de formes plus lisses. La méthode `setClearColor()` définit l'arrière-plan sur une couleur gris clair, au lieu du noir par défaut.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Ajoutez ce code dans notre second élément HTML {{HTMLElement("script")}}, juste en dessous du commentaire JavaScript.

## Scène

Une scène est l'endroit où tout se passe.
Lors de la création de nouveaux objets dans la démo, nous les ajoutons tous à l'intérieur de la scène afin qu'ils soient visibles à l'écran.
Dans Three.js, la scène est représentée par un objet `Scene`. Créons-le, en ajoutant la ligne suivante sous nos lignes précédentes&nbsp;:

```js
const scene = new THREE.Scene();
```

Plus tard, nous utiliserons la méthode `add()` pour ajouter des objets à cette scène.

## Caméra

Nous avons la scène, mais nous devons encore ajouter une caméra pour voir notre travail (imaginez un film sans caméra). Les lignes suivantes mettent la caméra en place dans le système de coordonnées 3D et la pointe dans la direction de notre scène, afin que nous puissions enfin voir quelque chose&nbsp;:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Insérez les lignes ci-dessus à votre code, en dessous de celles précédemment ajoutées.

Il existe d'autres types de caméra (cube, orthographique), mais la plus simple est la caméra de type perspective. Pour l'initialiser, nous devons définir son champ de vision et ses proportions&nbsp;: le premier est utilisé pour définir la quantité de vue, et le second est important pour que les objets à l'écran aient les bonnes proportions lors du rendu, et ne semblent pas étirés. Expliquons les valeurs que nous définissons dans le fragment de code précédent&nbsp;:

- La valeur que nous fixons pour le champ de vision, `70`, est quelque chose que nous pouvons ajuster&nbsp;: plus la valeur est élevée, plus la quantité de scène que la caméra affichera sera grande. Imaginez une vue de caméra normale, par opposition à un effet <i lang="en">fish eye</i>, qui permet de voir beaucoup plus. La valeur par défaut est 50.
- Le facteur de forme correspond au rapport largeur/hauteur et est défini avec la largeur et la hauteur actuelles de la fenêtre et est ajusté dynamiquement. Nous pourrions définir un rapport fixe, par exemple 16/9, qui est le rapport d'aspect d'un téléviseur à écran large. La valeur par défaut est 1.
- La position `z`, avec une valeur de 50 unités, est la distance entre la caméra et le centre de la scène sur l'axe `z`. Ici, nous reculons la caméra, afin que les objets de la scène puissent être visualisés. 50 est une valeur correcte. Ce n'est ni trop près, ni trop loin, et la taille des objets leur permet de rester sur la scène, dans le champ de vision donné. Les valeurs `x` et `y`, si elles ne sont pas spécifiées, seront définies par défaut à 0.

N'hésitez pas à modifier ces valeurs et observer les effets de ces changements sur la scène.
Les valeurs de distance (par exemple pour la position z de la caméra) sont sans unité et peuvent correspondre à toute unité que vous utiliserez pour l'ensemble des objets de la scène (millimètres, mètres, etc.).

## Rendu de la scène

Tout est prêt, mais on ne voit toujours rien. Bien que nous ayons configuré le moteur de rendu, nous devons toujours effectuer le rendu. Notre fonction `render()` fera ce travail, avec un peu d'aide de {{DOMxRef("Window/requestAnimationFrame", "requestAnimationFrame()")}}, ce qui signifie que le rendu de scène sera calculé à chaque image&nbsp;:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

À chaque nouvelle image, la fonction `render` est appelée, et le `renderer` effectue le rendu de la `scene` et de la `camera`. Juste après la déclaration de la fonction, nous l'appelons pour la première fois afin de démarrer la boucle, après quoi elle sera utilisée indéfiniment.

Là encore, ajoutez ce nouveau code sous vos précédents ajouts. Enregistrez votre fichier et ouvrez-le dans votre navigateur. Vous devriez voir une fenêtre grise. Félicitations&nbsp;!

## Géométrie

Maintenant que notre scène est correctement rendue, nous pouvons ajouter des objets 3D. Pour accélérer le développement, Three.js fournit une collection d'objets prédéfinis, que nous pourrons utiliser pour créer des formes instantanément, en une seule ligne de code. Parmi ces formes prédéfinis, on a des cubes, des sphères, des cylindres, ainsi que des formes plus complexes. Le détail, comme le dessin des sommets et des faces, pour une forme donnée, est géré par Three.js, afin que nous puissions nous concentrer sur un plus haut niveau de développement. Commençons par définir la géométrie pour la forme d'un cube, en ajoutant la ligne qui suit juste avant la fonction `render()`&nbsp;:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

Dans ce cas, nous définissons un cube simple de 10 x 10 x 10 unités. Cette géométrie n'est pourtant pas suffisante, car nous avons besoin d'un matériau qui sera utilisé pour le rendu de notre forme.

## Matériau

Un matériau est ce qui recouvre un objet, les couleurs, ou les textures sur sa surface. Dans notre cas, nous allons choisir une simple couleur bleue pour peindre notre boîte. Il existe un nombre prédéfini de matériaux qui peuvent être utilisés&nbsp;: `Basic`, `Phong`, et `Lambert`. Nous verrons les deux derniers plus tard, pour l'instant, commençons par utiliser le matériau `Basic`&nbsp;:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## Maillage

Pour appliquer le matériau à une géométrie, on utilise un maillage. Ce maillage épouse la forme, et ajoute le matériau spécifié sur chaque face&nbsp;:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

À nouveau, ajoutez cette ligne sous le code précédemment ajouté.

## Ajouter le cube à la scène

Nous avons maintenant créé un cube, avec la géométrie et le matériau définis auparavant. La dernière chose à faire est de placer le cube dans notre scène. Ajoutez cette ligne sous le code précédent&nbsp;:

```js
scene.add(cube);
```

Si vous sauvegardez et rafraîchissez votre navigateur, notre objet ressemblera maintenant à un carré, car il fait face à la caméra. Ce qu'il y a de bien dans les objets, c'est que nous pouvons les déplacer dans la scène, où nous le souhaitons. Par exemple, le faire tourner et l'élargir comme nous le souhaitons. Appliquons une petite rotation au cube, afin que nous puissions voir plus qu'une face. À nouveau, ajoutons ce code à la suite&nbsp;:

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Exemple de forme avec Three.js

Si vous avez suivi toutes les étapes jusqu'à présent sans aucun problème, vous avez créé votre premier objet dans un environnement 3D en utilisant Three.js&nbsp;!
Félicitations.
Votre code devrait ressembler à l'exemple interactif suivant.
Vous pouvez cliquer sur «&nbsp;Exécuter&nbsp;» pour visualiser et éditer le code dans le MDN Playground&nbsp;:

```html hidden live-sample___three-js-intro
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```js hidden live-sample___three-js-intro
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

```css hidden live-sample___three-js-intro
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{EmbedLiveSample("three-js-intro", "", 400)}}

## Plus de formes et de matériaux

Maintenant, nous allons ajouter plusieurs formes à la scène, et explorer d'autres formes, matériaux, lumières, etc. Déplaçons le cube vers la gauche, et faisons de la place pour ses voisins. Ajoutez la ligne suivante à la suite du code&nbsp;:

```js
cube.position.x = -25;
```

Ajoutons maintenant plus de formes et de matériaux. Que devrait-il arriver si vous ajoutez un tore, enveloppé dans un matériau `Phong`&nbsp;? Essayez d'ajouter les lignes suivantes, juste sous les lignes qui définissent le cube.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

Ces lignes vont ajouter une géométrie de tore&nbsp;; les paramètres de la méthode `TorusGeometry()` définissent respectivement le rayon, le diamètre du tube, le nombre de segments radiaux et le nombre de segments tubulaires. Le matériau `Phong` devrait paraître plus brillant que le matériau `Basic` simple de la boîte, même si pour l'instant notre tore apparaîtra noir.
Ajouter une rotation donne au tore une profondeur initiale pour qu'il ne paraisse pas plat.

Nous pouvons choisir d'autres formes prédéfinies amusantes. Continuons à expérimenter. Ajoutez les lignes suivantes, juste après celles qui définissent le tore&nbsp;:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Cette fois, nous créons un dodécaèdre, une forme contenant douze faces plates. Le paramètre passé à `DodecahedronGeometry()` définit la taille de l'objet. Nous utilisons un matériau `Lambert`, similaire au matériau `Phong`, mais moins brillant. À nouveau, l'objet est noir pour l'instant. Nous déplaçons l'objet vers la droite, afin qu'il ne soit pas au même emplacement que la boîte, ou le tore.

Tel que mentionné plus haut, les nouveaux objets apparaissent noirs. Pour que les matériaux `Phong` et `Lambert` soient correctement visibles, nous devons introduire une source de lumière.

## Lumières

Il existe une grande variété de sources de lumière disponibles dans Three.js. La plus simple est `PointLight`, qui fonctionne comme une lampe torche, diffusant un rayon de lumière dans une direction définie. Ajoutez les lignes suivantes, sous la définition de la forme&nbsp;:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Nous définissons un point de lumière blanche, ajustons sa position un peu plus loin que le centre de la scène, afin que certaines parties des formes soient éclairées, et enfin nous l'ajoutons à la scène. Désormais, les trois formes sont visibles. N'hésitez pas à consulter la documentation pour en savoir plus sur les autres types de lumière, telles que `Ambient`, `Directional`, `Hemisphere`, ou `Spot`. Essayez de les placer sur la scène, afin de voir l'effet qu'elles apportent.

Ce sont de bons progrès, mais nous pouvons rendre cela plus intéressant&nbsp;! Dans un jeu, il se passe généralement quelque chose. On peut voir des animations et autres. Essayons donc d'insuffler un peu de vie à ces formes, en les animant&nbsp;!

## Animation

Nous avons déjà utilisé la rotation pour ajuster la position du cube. Nous pouvons aussi élargir les formes, ou changer leurs positions. Pour obtenir une animation, nous devons modifier ces valeurs à l'intérieur de la boucle de rendu, afin que ces formes soient mises à jour à chaque image.

### Rotation

Pour faire tourner une forme, on ajoute la valeur d'une direction donnée à chaque image. Ajoutez la ligne de code qui suit après l'invocation de la méthode `requestAnimationFrame()`, à l'intérieur de la fonction `render()`&nbsp;:

```js
cube.rotation.y += 0.01;
```

Cela fait tourner le cube à chaque image, très légèrement à chaque fois, afin que l'animation semble fluide.

### Agrandissement ou rétrécissement

Il est aussi possible d'agrandir ou de faire rétrécir un objet. En appliquant une valeur constante, on change sa taille une seule fois. Pour que l'effet soit plus intéressant, on déclare une variable utilitaire `t` qui servira à mesurer le temps écoulé. Ajoutons-la avant la fonction `render()`&nbsp;:

```js
let t = 0;
```

Ensuite, augmentons cette valeur avec une constante, sur chaque image de l'animation. Ajoutons ces lignes, juste après l'appel à `requestAnimationFrame()`&nbsp;:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Nous utilisons `Math.sin()` pour obtenir un résultat plutôt intéressant. Cela modifie la taille du tore de façon périodique (le sinus étant une fonction périodique). Pour éviter un rendu incohérent avec un facteur d'échelle négatif, nous passons la valeur absolue avec `Math.abs()`. Voyons maintenant comment créer du mouvement.

### Déplacement

En complément de la rotation et de l'agrandissement, nous pouvons aussi déplacer les objets autour de la scène. Ajoutons la ligne suivante après l'appel à `requestAnimationFrame()`&nbsp;:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Cela va déplacer le dodécaèdre de haut en bas, en appliquant la valeur `sin()` à l'axe `y` à chaque image. Nous ajustons le résultat avec deux facteurs de multiplication pour obtenir un effet plus intéressant. Vous pouvez modifier ces coefficients pour observer l'effet qu'ils ont sur l'animation.

## Exemple avec une animation Three.js

Voici le code final avec des formes animées.
Vous pouvez cliquer sur «&nbsp;Exécuter&nbsp;» pour éditer l'exemple dans le MDN Playground&nbsp;:

```html hidden live-sample___three-js-animation
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```js live-sample___three-js-animation
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 10000);
camera.position.z = 50;
scene.add(camera);

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
cube.position.x = -25;
cube.rotation.set(0.4, 0.2, 0);
scene.add(cube);

const torusGeometry = new THREE.TorusGeometry(7, 1, 16, 32);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);

const strangeGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(strangeGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);

const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);

let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cube.rotation.y += 0.01;
  torus.scale.y = Math.abs(Math.sin(t));
  dodecahedron.position.y = -7 * Math.sin(t * 2);
  renderer.render(scene, camera);
}
render();
```

```css hidden live-sample___three-js-animation
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{EmbedLiveSample("three-js-animation", "", 400)}}

## Résumé

Vous connaissez maintenant les bases de Three.js&nbsp;; amusez-vous à expérimenter&nbsp;!
Vous pouvez continuer à lire la documentation sur les [jeux 3D sur le Web](/fr/docs/Games/Techniques/3D_on_the_web) si vous souhaitez en savoir plus.
Vous pouvez également essayer d'apprendre WebGL, pour mieux comprendre ce qui se passe en dessous.
Consultez notre [documentation WebGL](/fr/docs/Web/API/WebGL_API) pour plus d'informations.
