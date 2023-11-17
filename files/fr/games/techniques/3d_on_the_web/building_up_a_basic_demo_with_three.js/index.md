---
title: Réaliser une démo basique avec Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 16d3095f33bd0655b01098ce662e3014510fdef6
---

{{GamesSidebar}}

Une scène 3D dans un jeu, même la plus simple qui soit, contient des éléments standard comme des formes situées dans un système de coordonnées, une caméra pour les voir, des lumières et des matériaux pour améliorer son esthétique, des animations pour la rendre vivante, etc. **Three.js**, comme avec toute autre bibliothèque 3D, fournit des fonctions d'assistance intégrées pour vous aider à implémenter plus rapidement les fonctionnalités 3D courantes. Dans cet article, nous vous expliquerons les bases de l'utilisation de Three.js, notamment la configuration d'un environnement de développement, la structure du code HTML nécessaire, les objets fondamentaux de ThreeJS et la manière de créer une démonstration de base.

> **Note :** Nous avons choisi ThreeJS, car il s'agit de l'une des bibliothèques [WebGL](/fr/docs/Web/API/WebGL_API) les plus populaires, avec laquelle il est facile de commencer. Nous ne disons pas qu'il s'agit de la meilleure bibliothèque WebGL disponible, n'hésitez pas à expérimenter avec d'autres bibliothèques, comme [CopperLicht](https://www.ambiera.com/copperlicht/index.html), ou [PlayCanvas](https://playcanvas.com/).

## Configuration de l'environnement de développement

Pour commencer à développer Three.js\*\*&nbsp;:

- Assurez-vous d'utiliser un navigateur moderne avec une bonne prise en charge de [WebGL](/fr/docs/Web/API/WebGL_API) (la dernière version de Firefox, Safari, Chrome ou Edge devrait suffire)
- Créez un répertoire où enregistrer vos expérimentations
- Enregistrez un exemplaire à jour de [la version minifiée de la bibliothèque Three.js](https://threejs.org/build/three.min.js) dans le répertoire
- Ouvrez [la documentation de Three.js](https://threejs.org/docs/) dans un nouvel onglet afin de pouvoir vous y référer.

## Structure HTML

Voici la structure que nous allons utiliser

```html
<!doctype html>
<html lang="fr-FR">
  <head>
    <meta charset="utf-8" />
    <title>Jeux avec MDN : démonstration Three.js</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <script src="three.min.js"></script>
    <script>
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      /* tout notre code JavaScript ira ici */
    </script>
  </body>
</html>
```

Cette structure contient des informations de base comme le titre du document ([`<title>`](/fr/docs/Web/HTML/Element/title)), un peu de CSS pour définir la largeur ([`width`](/fr/docs/Web/CSS/width)) et la hauteur ([`height`](/fr/docs/Web/CSS/height)) du canevas ([`<canvas>`](/fr/docs/Web/HTML/Element/canvas)), ici 100% pour remplir tout l'espace disponible.

Le premier élément [`<script>`](/fr/docs/Web/HTML/Element/script) inclut la bibliothèque Three.js dans la page. Nous écrirons notre code dans le deuxième élément `<script>`. Nous avons déjà inclus deux variables utilitaires pour stocker la largeur et la hauteur de la fenêtre (respectivement `WIDTH` et `HEIGHT`).

Avant de poursuivre, copiez ce code dans un fichier nommé `index.html` dans votre répertoire de travail.

## Moteur de rendu

Un moteur de rendu (<i lang="en">renderer</i> en anglais) est un outil qui affiche les scènes directement dans votre navigateur. Il existe plusieurs moteurs différents&nbsp;: WebGL par défaut, mais aussi SVG, CSS, et le DOM. Ils diffèrent dans la façon dont ils gèrent le rendu et une implémentation WebGL implémentera une scène différemment d'une implémentation CSS. Malgré leurs différences, l'expérience utilisateur sera la même.

Grâce à cette approche, une solution de secours peut être utilisée, si une technologie n'est pas prise en charge par le navigateur.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Nous créons un nouveau rendu WebGL, définissons sa taille pour qu'elle occupe tout l'espace disponible à l'écran et ajoutons la structure DOM à la page. Vous avez peut-être remarqué le paramètre `antialias` dans la première ligne, cela évite les effets de [crénelage](https://fr.wikipedia.org/wiki/Crénelage) pour les bords des formes. La méthode `setClearColor()` définit notre arrière-plan avec une couleur gris clair au lieu du noir par défaut.

Ajoutez ce code dans notre deuxième balise [`<script>`](/fr/docs/Web/HTML/Element/script) du fichier `index.html`, juste en dessous du commentaire JavaScript.

## Scène

Une scène est l'endroit où tout se passe. Lors de la création de nouveaux objets dans la démo, nous les ajoutons tous à l'intérieur de la scène afin qu'ils soient visibles à l'écran. Dans Three.js, la scène est représentée par un objet `Scene`. Créons-le, en ajoutant la ligne suivante sous nos lignes précédentes&nbsp;:

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

> **Note :** Les valeurs de distance (par exemple pour la position z de la caméra) sont sans unité et peuvent correspondre à toute unité que vous utiliserez pour l'ensemble des objets de la scène (millimètres, mètres, etc.).

## Rendu de la scène

Tout est prêt, mais on ne voit toujours rien. Bien que nous ayons configuré le moteur de rendu, nous devons toujours effectuer le rendu. Notre fonction `render()` fera ce travail, avec un peu d'aide de [`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame), ce qui signifie que le rendu de scène sera calculé à chaque image&nbsp;:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

À chaque nouvelle image, la fonction `render()` est invoquée, et le `renderer` fera le rendu de la scène, selon l'angle de vue fourni par la caméra. Juste après la déclaration de fonction, nous l'invoquons pour la première fois afin de débuter la boucle, après quoi elle sera utilisée indéfiniment.

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

Ajoutez cette ligne sous le code précédemment ajouté.

Notre matériau est maintenant prêt. Que faut-il d'autre&nbsp;?

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

Félicitations, vous avez créé un objet dans un environnement 3D&nbsp;! Voici ce à quoi ça devrait ressembler&nbsp;:

![Un cube bleu sur un arrière-plan gris, rendu avec Three.js.](cube.png)

Pour récapituler, voici le code que nous avons créé jusqu'ici&nbsp;:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bwup75fa/","","350")}}

Vous pouvez aussi [consulter l'exemple sur GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html).

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
scene.add(torus);
```

Ces lignes vont ajouter un tore. La méthode `TorusGeometry()` utilise des paramètres pour le rayon du tore, le diamètre du tube, le nombre de segments radiaux et le nombre de segments tubulaires. Quant au matériau `Phong`, il a un aspect plus brillant que le matériau de base utilisé précédemment pour la boîte (même si pour l'instant, le tore apparaît noir).

Nous pouvons utiliser d'autres de formes prédéfinies. Ajoutez les lignes suivantes après celles qui définissent le tore&nbsp;:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Cette fois, nous créons un dodécaèdre, une forme contenant douze faces plates et le paramètre passé à `DodecahedronGeometry()` définit la taille de l'objet. Nous utilisons un matériau `Lambert`, similaire au matériau `Phong`, mais moins brillant. À nouveau, l'objet est noir pour l'instant. Nous déplaçons l'objet vers la droite, afin qu'il ne soit pas au même emplacement que la boîte, ou le tore.

Tel que mentionné plus haut, les nouveaux objets apparaissent noirs. Pour que les matériaux Phong et Lambert soient correctement visibles, nous devons introduire une source de lumière.

## Lumières

Il existe une grande variété de sources de lumière disponibles dans Three.js. La plus simple est `PointLight`, qui fonctionne comme une lampe torche, diffusant un rayon de lumière dans une direction définie. Ajoutez les lignes suivantes, sous la définition de la forme&nbsp;:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Nous définissons un point de lumière blanche, ajustons sa position un peu plus loin que le centre de la scène, afin que certaines parties des formes soient éclairées, et enfin nous l'ajoutons à la scène. Désormais, les trois formes sont visibles. N'hésitez pas à consulter la documentation pour en savoir plus sur les autres types de lumière, telles que `Ambient`, `Directional`, `Hemisphere`, ou `Spot`. Essayez de les placer sur la scène, afin de voir l'effet qu'elles apportent.

![Des formes : un cube bleu, un tore jaune foncé et un dodécahèdre gris foncé, sur un arrière-plan gris, rendus avec Three.js.](shapes.png)

Malgré tout, ceci paraît un peu ennuyeux. Dans un jeu, il y a toujours de l'action. Il nous faut des animations. Donnons un peu de vie à nos formes, en les animant.

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

Nous utilisons `Math.sin()` pour obtenir un résultat plutôt intéressant. Cela modifie la taille du tore de façon périodique (le sinus étant une fonction périodique). Pour éviter un rendu incohérent avec un facteur d'échelle négatif, nous passons la valeur absolue avec `Math.abs()`.

Voyons maintenant comment créer du mouvement.

### Déplacement

En complément de la rotation et de l'agrandissement, nous pouvons aussi déplacer les objets autour de la scène. Ajoutons la ligne suivante après l'appel à `requestAnimationFrame()`&nbsp;:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Cela va déplacer le dodécaèdre de haut en bas, en appliquant la valeur `sin()` à l'axe `y` à chaque image. Nous ajustons le résultat avec deux facteurs de multiplication pour obtenir un effet plus intéressant. Vous pouvez modifier ces coefficients pour observer l'effet qu'ils ont sur l'animation.

## Conclusion

Voici le code final&nbsp;

{{JSFiddleEmbed("https://jsfiddle.net/rybr720u/","","350")}}

Vous pouvez aussi [consulter le code sur GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/shapes.html) et [faire une copie du dépôt](https://github.com/end3r/MDN-Games-3D/) si vous souhaitez manipuler le code sur votre ordinateur. Maintenant que vous avez découvert les bases de Three.js, vous pouvez revenir à la page parente, [la 3D sur le Web](/fr/docs/Games/Techniques/3D_on_the_web).

Vous pouvez aussi apprendre à utiliser l'API WebGL de façon brute, pour mieux comprendre ce qui se passe sous le capot de Three.js. Pour cela, consultez notre page sur [la documentation WebGL](/fr/docs/Web/API/WebGL_API).
