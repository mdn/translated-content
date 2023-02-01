---
title: Réaliser une démo basique avec Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
translation_of: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
---

{{GamesSidebar}}

Une scène 3D dans un jeu - même la plus simple qui soit - contient des éléments standard comme des formes situées dans un système de coordonnées, une caméra pour les voir, des lumières et des matériaux pour ameliorer son esthétique, des animations pour la rendre vivante, etc. **Three.js**, comme avec toute autre bibliothèque 3D, fournit des fonctions d'assistance intégrées pour vous aider à implémenter plus rapidement les fonctionnalités 3D courantes. Dans cet article, nous vous expliquerons les bases de l'utilisation de Three, notamment la configuration d'un environnement de développement, la structure du code HTML nécessaire, les objets fondamentaux de ThreeJS et la manière de créer une démonstration de base.

> **Note :** Nous avons choisi ThreeJS car il s'agit de l'une des bibliothèques WebGL les plus populaires, et il est facile de commencer. Nous n'essayons pas de dire que c'est mieux que toute autre bibliothèque WebGL disponible, et vous devriez vous sentir libre d'essayer une autre bibliothèque, comme CopperLicht, GLGE ou PlayCanvas

## Configuration de l environnement de Developpement

Pour commencer a developper avec **Three.js :**

- Assurez-vous d'utiliser un navigateur moderne avec une bonne prise en charge de **WebGL,** comme la dernière version de Firefox ou Chrome.
- Creer un répertoire où stocker vos expériences.
- Enregistrez une copie à jour d'une version minimale de la bibliotheque Three.js dans votre répertoire.
- Ouvrez la documentation de **Three.js** dans un nouvel onglet, car il est utile de s'y référer.

## Structure HTML

Voici la structure que nous allons utiliser

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>MDN Games: Three.js demo</title>
  <style>
    body { margin: 0; padding: 0; }
    canvas { width: 100%; height: 100%; }
  </style>
</head>
<body>
<script src="three.min.js"></script>
<script>
  var WIDTH = window.innerWidth;
  var HEIGHT = window.innerHeight;
  /* Tout votre javascript se place ici */
</script>
</body>
</html>
```

Cette structure contient des informations de base, un peu de CSS pour définir la largeur et la hauteur de l'élément canvas, ici 100% pour remplir tout l'espace disponnible.

La première balise de script inclut la bibliothèque **Three.js** dans la page. nous écrirons notre code dans la deuxième balise script.

Nous avons déjà inclut deux variables d'assitance pour stocker la largeur et la hauteur de la fenêtre.

Avant de poursuivre, copier ce code dans un fichier nommé "index.html".

## Renderer ou Moteur de rendu

Un moteur de rendu est un outil qui affiche les scènes directement dans votre navigateur. Il existe plusieurs moteurs different: WebGL est la valeur par défaut, vous pouvez utiliser canvas, SVG, CSS et DOM . Ils diffèrent dans la façon dont ils gèrent le rendu. Malgré leurs différences , l'expérience utilisateur sera la même.

Grâce à cette approche, une solution de secours peut être utilisée, si une technologie n'est pas prise en charge par le navigatueur.

```js
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);
```

Nous créons un nouveau rendu WebGL, définissons sa taille pour qu'elle corresponde à tout l'espace disponible à l'écran et ajoutons la structure DOM à la page. Vous avez peut-être remarqué le paramètre d'antialias dans la première ligne - cela rend les bords des formes plus fluides. La méthode setClearColor () définit notre arrière-plan sur une couleur gris clair, au lieu de la couleur noire par défaut.

Ajoutez ce code dans notre deuxième balise script du fichier "index.html", juste en dessous du commentaire JavaScript.

## Scene

Une scène est l'endroit où tout se passe. Lors de la création de nouveaux objets dans la démo, nous les ajoutons tous à l'intérieur de la scène pour devenir visibles à l'écran. Dans **three.js**, la scène est représentée par un objet Scene. Créons-le, en ajoutant la ligne suivante sous nos lignes précédentes:

```js
var scene = new THREE.Scene();
```

Plus tard, nous utiliserons la methode add(), pour ajouter des objets a cette scène.

## Camera

Nous avons la scène, mais nous devons encore ajouter une caméra pour voir notre travail (imaginez un film sans caméra). Les lignes suivantes mettent la caméra en place dans le système de coordonnées 3D et la pointe dans la direction de notre scène, afin que nous puissions enfin voir quelque chose :

```js
var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Insérez les lignes ci-dessus à votre code, en dessous de celles précédemment ajoutées.

Il existe d'autres types de caméra (Cube, Orthographique), mais la plus simple est Perspective. Pour l'initialiser, nous devons définir son champ de vision et son rapport d'aspect: le premier est utilisé pour définir la quantité de vue, et le second est important pour que les objets à l'écran aient les bonnes proportions lors du rendu, et ne semblent pas étirés. Expliquons les valeurs que nous définissons pour le code ci-dessus:

- La valeur que nous fixons pour le champ de vision, 70, est quelque chose que nous pouvons expérimenter: plus la valeur est élevée, plus la quantité de scène que la caméra affichera sera grande. Imaginez une vue de caméra normale, par opposition à un effet fish-eye, qui permet de voir beaucoup plus. La valeur par défaut est 50.
- Le rapport hauteur / largeur est définie sur la largeur et la hauteur actuelles de la fenêtre afin qu'il soit ajusté dynamiquement. Nous pourrions définir un rapport fixe - par exemple 16/9, qui est le rapport d'aspect d'un téléviseur à écran large. La valeur par défaut est 1.
- La position z, avec une valeur de 50 unités, est la distance entre la caméra et le centre de la scène sur l'axe z. Ici, nous reculons la caméra, afin que les objets de la scène puissent être visualisés. 50 est une valeur correcte. Ce n'est ni trop près, ni trop loin, et la taille des objets leur permet de rester sur la scène, dans le champ de vision donné. Les valeurs x et y, si elles ne sont pas spécifiées, seront définies par défaut à 0.

Vous devez expérimenter ces valeurs et voir comment elles changent ce que vous voyez dans la scène.

> **Note :** Les valeurs de distance (par exemple pour la position z de la caméra) sont sans unité et peuvent être tout ce que vous jugez approprié pour votre scène: millimètres, mètres, pieds ou miles.

## Rendu de la scene

Tout est prêt, mais on ne voit toujours rien. Bien que nous ayons configuré le moteur de rendu, nous devons toujours effectuer le rendu. Notre fonction render() fera ce travail, avec un peu d'aide de requestAnimationFrame(), ce qui fait que la scène sera restituée sur chaque image :

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

À chaque nouvelle image, la fonction `render` est invoquée, et le `renderer` rend `scene` et la `caméra`. Juste après la déclaration de fonction, nous l'invoquons pour la première fois pour débuter la boucle, après quoi elle sera utilisée indéfiniment.

À nouveau, ajouter ce nouveau code sous vos précédents ajouts. Sauvez votre fichier et ouvrez le dans votre navigateur. Vous devriez voir une fenêtre grise. Félicitations !

## Géométrie

Désormais que notre scène est correctement rendue, nous pouvons débuter l'ajout de nos objets 3D. Pour accélérer le développement, Three.js fournit une collection d'objets prédéfinis, que nous pourrons utiliser pour créer des formes instantanément, en une seule ligne de code. Il y a les cubes, les sphères, les cylindres, ainsi que des formes plus complexes à notre disposition. Le détail, comme le dessin des sommets et des faces, pour une forme donnée, est géré par Three.js, afin que nous puissions nous concentrer sur un plus haut niveau de développement. Commençons par définir la géométrie pour la forme d'un cube, en ajoutant la fonction `render()` ci-dessus:

```js
var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

Dans ce cas, nous définissons un cube simple de 10 x 10 x 10 unités. Cette géométrie n'est pourtant pas suffisante, car nous avons besoin d'un matériau qui sera utilisée pour notre forme.

## Matériau

Un matériau est ce qui recouvre un objet, les couleurs, ou les textures sur sa surface. Dans notre cas, nous allons choisir une simple couleur bleue pour peindre notre boîte. Il y a un nombre prédéfini de matériaux qui peuvent être utilisés: Basic, Phong, et Lambert. Nous expérimenterons les deux derniers plus tard, mais pour l'instant, le matériau Basic devrait être suffisant:

```js
var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
```

Ajoutez cette ligne sous le code précédemment ajouté.

Notre matériau est maintenant prêt. Quoi d'autre ?

## Maillage

Pour appliquer le matériau à une géométrie, un maillage est utilisé. Ça épouse la forme, et ajoute le matériau spécifié sur chaque face:

```js
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

À nouveau, joutez cette ligne sous le code précédemment ajouté.

## Ajouter le cube à la scène

Nous avons maintenant créé un cube, utilisant la géométrie et le matériau définit auparavant. La dernière chose à faire est de placer le cube dans notre scène. Ajoutez cette ligne sous le code précédent.

```js
scene.add(cube);
```

Si vous sauvegardez, et rafraîchissez votre navigateur, notre objet ressemblera maintenant à un carré, car il fait face à la caméra. Ce qu'il y a de bien dans les objets, c'est que nous pouvons les déplacer dans la scène, où nous le souhaitons. Par exemple, le faire tourner et l'élargir comme nous le souhaitons. Appliquons une petite rotation au cube, afin que nous puissions voir plus qu'une face. À nouveau, ajoutons ce code à la suite:

```js
cube.rotation.set(0.4, 0.2, 0);
```

Félicitations, vous avez créé un objet dans un environnement 3D ! Cela paraît plus facile maintenant, n'est-ce pas ? Voici ce à quoi ça devrait ressembler:

![](cube.png)

Et voici le code que nous créé jusqu'à maintenant:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bwup75fa/","","350")}}

Vous pouvez aussi [aller voir sur GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html).

## Plus de formes et de matériaux

Maintenant nous allons ajouter plusieurs formes à la scène, et explorer d'autres formes, matériaux, lumières et plus. Déplaçons le cube vers la gauche, et faisons de la place pour ses amis. Ajoutez la ligne suivante au code:

```js
cube.position.x = -25;
```

Ajoutons maintenant plus de formes et de matériaux. Que devrait-il arriver si vous ajoutez un tore, enveloppé dans un matériau Phong ? Essayez d'ajouter les lignes suivantes, juste sous les lignes qui définissent le cube.

```js
var torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
var phongMaterial = new THREE.MeshPhongMaterial({color: 0xFF9500});
var torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);
```
Ces lignes vont ajouter un tore; la méthode que les paramètres `TorusGeometry()` définissent sont `radius`, `tube diameter`, `radial segment count`, et `tubular segment count`. Le matériau Phong devrait apparaître plus brillant que le matériau Basic utilisé pour la boîte, malgré que notre tore apparaît noir.

Nous pouvons choisir plus de formes prédéfinies. Jouons avec plusieurs autres. Ajoutez les lignes suivantes sous celles définies pour le tore:

```js
var dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xEAEFF2});
var dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Cette fois, nous créons un dodécahèdre, une forme contenant douze faces plattes. Ce paramètre `DodecahedronGeometry()`, définit la taille de l'objet.
Nous utilisons un matériau Lambert, similaire au Phong, mais qui devrait être moins brillant. À nouveau, il est noir pour l'instant. Nous déplaçons l'objet vers la droite, afin qu'il ne soit pas au même emplacement que la boîte, ou le tore.

Tel que mentionné plus haut, les nouveaux objets courants apparaissent noirs. Nous avons à la fois les matériaux Phong et Lambert correctement visibles, et nous devons introduire une source de lumière.

## Lumières

Il y a une grande variété de sources de lumière disponibles dans Three.js. La plus simple est `PointLight`, qui fonctionne comme une lampe torche, diffusant un rayon de lumière dans une direction définie. Ajoutez les lignes suivantes, sous la définition de la forme:

```js
var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);
```

Nous définissons un point de lumière blanche, ajustons sa position un peu plus loin que le centre de la scène, afin que certaines parties de la forme soient éclairées, et enfin nous l'ajoutons à la scène. Désormais, tout fonctionne comme cela devrait. Les trois formes sont visibles. Vous devriez consulter la documentation pour d'autres types de lumières, telles que Ambient, Directional, Hemisphere, ou Spot. Expérimentez en les plaçant dans la scène, pour voir comment elles l'affectent.

![](shapes.png)

Malgré tout, ceci paraît un peu ennuyeux. Dans un jeu, il y a toujours de l'action. Nous devrions voir des animations, et plus. Alors donnons un peu de vie à nos formes, en les animant !

## Animation

Nous avons déjà utilisé la rotation pour ajuster la position du cube. Nous pouvons aussi élargir la forme, ou changer ses positions. Pour montrer une animation, nous devons faire quelque changements à ces valeurs à l'intérieur dans la boucle de rendu, afin que ces formes soients mises à jour sur chaque image.

### Rotation

La rotation est simple. Vous ajoutez la valeur d'une direction donnée sur chaque image. Ajoutez cette ligne de code juste après l'invocation de la méthode `requestAnimationFrame()`, à l'intérieur de la fonction  `render`:

```js
cube.rotation.y += 0.01;
```

Cela fait tourner le cube à chaque image, très légèrement à chaque fois, afin que l'animation apparaisse fluide.

### Élargir

Nous pouvons élargir (ou diminuer) un objet en appliquant une valeur, en la faisant grossir ou diminuer une fois. Rendons les choses plus intéressantes. D'abord, nous implémentons une variable d'aide, appelée `t`, pour compter le temps passé. Ajoutons cela avant la fonction `render()`:

```js
var t = 0;
```

Maintenant, augmentons cette valeur avec une valeur constante, sur chaque image de l'animation. Ajoutons ces lignes, juste sous l'invocation de `requestAnimationFrame()`:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Nous utilisons `Math.sin`, donnant un résultat très intéressant. Cela élargit le tore, répétant le processus, car `sin` est une fonction périodique. Nous enveloppons la valeur d'élargissement dans `Math.abs`, afin de passer les valeurs absolues, plus grand ou égal à 0. Quand sin est entre -1 et 1, les valeurs négatives devraient rendre le tore de manière inattendue. Dans ce cas, cela apparaît noir la moitié du temps.

Mainteant, regardons le mouvement.

### Mouvement

À part la rotation et l'élargissement, nous pouvons aussi déplacer les objets autour de la scène. Ajoutons ce qui, à nouveau juste au dessous de `requestAnimationFrame()`:

```js
dodecahedron.position.y = -7*Math.sin(t*2);
```

Cela va déplacer le dodécahèdre vers le haut et le bas, en appliquant la valeur `sin()` à l'axe Y à chaque image. Un petit ajustement lui ajoute un look plus cool. Essayez de changer ces valeurs, afin de voir comment ça affecte les animations.

## Conclusion

Voici le code final:

{{JSFiddleEmbed("https://jsfiddle.net/rybr720u/","","350")}}

Vous pouvez aussi [consulter sur GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/shapes.html) si vous désirez jouer avec locallement. Maintenant, vous comprenez les bases de Three.js. Vous pouvez revenir à la page parent, [la 3D sur le Web](https://developer.mozilla.org/fr/docs/Games/Techniques/3D_on_the_web).

Vous pouvez aussi essayer d'apprendre WebGL brut, pour avoir une meilleure compréhension de ce qui se passe. Consultez notre page [WebGL documentation](https://developer.mozilla.org/fr/docs/Web/API/WebGL_API).
