---
title: Building up a basic demo with Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
translation_of: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
---
{{GamesSidebar}}

Une scène 3D dans un jeu - même la plus simple - contient des éléments standard comme des formes situées dans un système de coordonnées, une caméra pour les voir réellement, des lumières et des matériaux pour amelioré son esthétique, des animations pour la rendre vivante, etc. **Three.js**, comme avec toute autre bibliothèque 3D, fournit des fonctions d'assistance intégrées pour vous aider à implémenter plus rapidement les fonctionnalités 3D courantes. Dans cet article, nous vous expliquerons les bases de l'utilisation de Three, notamment la configuration d'un environnement de développement, la structuration du code HTML nécessaire, les objets fondamentaux de Three et la manière de créer une démonstration de base.

> **Note :** Nous avons choisi Three car il s'agit de l'une des bibliothèques WebGL les plus populaires, et il est facile de commencer. Nous n'essayons pas de dire que c'est mieux que toute autre bibliothèque WebGL disponible, et vous devriez vous sentir libre d'essayer une autre bibliothèque, comme CopperLicht, GLGE ou PlayCanvas

## Configuration de l environnement de Developpement

Pour commencer a developper avec **Three.js :**

- Assurez-vous d utiliser un navigateur moderne avec une bonne prise en charge de **WebGL,** comme le dernier Firefox ou Chrome.
- Creer un repertoire ou stocker vos experience
- Enregistrez une copie à jour de la bibliotheque Three.js réduite dans votre repertoire
- Ouvrir la documentation de **Three.js** dans un nouvel onglet, il est utile de s'y référer.

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
	/* all our JavaScript code goes here */
</script>
</body>
</html>
```

Cette structure contient des informations de base , un peu de CSS pour definir la largeur et la hauteur de l élément canvas, ici 100% pour remplir tout l'espace disponnible.

la premeire balise de script inclut la bibliotheque **Three.js** dans la page. nous ecrirons notre code dans la deuxieme balise script.

nous avons deja inclut deux variables d assitance pour stocké la alrgeur et la hauteur de la fenetre.

avant de poursuivre copier se code dans un fichier nommé index.html.

## Renderer ou Moteur de rendue

un Moteur de rendue est un outil qui affiche les scénes directement dans votre navigateur.Il existe plusieur moteur different :WebGL est la valeur par défaut, vous pouvez utilisercanvas,SVG,CSS et DOM . ils différent dans la façons dont il gere le rendu. Malgres leurs differences , l experience utilisateur sera la meme.

Grace à cette approche, une solution de secour peut etre utilisée , si une technologie n'est pas prise en charge par le navigatueur.

```js
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);
```

Nous créons un nouveau rendu WebGL, définissons sa taille pour qu'elle corresponde à tout l'espace disponible à l'écran et ajoutons la structure DOM à la page. Vous avez peut-être remarqué le paramètre d'antialias dans la première ligne - cela rend les bords des formes plus fluides. La méthode setClearColor () définit notre arrière-plan sur une couleur gris clair, au lieu de la couleur noire par défaut.

Ajoutez ce code dans notre deuxième balise script du fichier index.html, juste en dessous du commentaire JavaScript.

## Scene

Une scène est l'endroit où tout se passe. Lors de la création de nouveaux objets dans la démo, nous les ajoutons tous à l'intérieur de la scène pour devenir visibles à l'écran. Dans **three.js**, la scène est représentée par un objet Scene. Créons-le, en ajoutant la ligne suivante sous nos lignes précédentes:

```js
var scene = new THREE.Scene();
```

plutard nous utiliserons la methode add() , pour ajouter des objets a cette scene.

## Camera

Nous avons la scène , mais nous devons encore ajouter une caméra pour voir notre travail - imaginez un film sans caméra. Les lignes suivantes mettent la caméra en place dans le système de coordonnées 3D et la pointent dans la direction de notre scène, afin que nous puissions enfin voir quelque chose:

```js
var camera = new THREE.PerspectiveCamera(70, WIDTH/HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Ajoutez les lignes ci-dessus à votre code, en dessous de celles précédemment ajoutées.

Il existe d'autres types de camera (Cube, Orthographique), mais la plus simple est Perspective. Pour l'initialiser, nous devons définir son champ de vision et son rapport d'aspect: le premier est utilisé pour définir la quantité de vue, et le second est important pour que les objets à l'écran aient les bonnes proportions lors du rendu, et ne semblent pas étirés . Expliquons les valeurs que nous définissons pour le code ci-dessus:>

- La valeur que nous fixons pour le champ de vision, 70, est quelque chose que nous pouvons expérimenter: plus la valeur est élevée, plus la quantité de scène que la caméra affichera sera grande. Imaginez une vue de caméra normale, par opposition à un effet fish-eye, qui permet de voir beaucoup plus. La valeur par défaut est 50.
- Le rapport hauteur / largeur est défini sur la largeur et la hauteur actuelles de la fenêtre afin qu'il soit ajusté dynamiquement. Nous pourrions définir un rapport fixe - par exemple 16 ⁄ 9, qui est le rapport d'aspect d'un téléviseur à écran large. La valeur par défaut est 1.
- La position z, avec une valeur de 50 unités, est la distance entre la caméra et le centre de la scène sur l'axe z. Ici, nous reculons la caméra, afin que les objets de la scène puissent être visualisés. 50 se sent bien. Ce n'est ni trop près, ni trop loin, et la taille des objets leur permet de rester sur la scène, dans le champ de vision donné. Les valeurs x et y, si elles ne sont pas spécifiées, seront définies par défaut sur 0.

Vous devez expérimenter ces valeurs et voir comment elles changent ce que vous voyez dans la scène. .

> **Note :** Les valeurs de distance (par exemple pour la position z de la caméra) sont sans unité et peuvent être tout ce que vous jugez approprié pour votre scène: millimètres, mètres, pieds ou miles.

## Rendu de la scene

Tout est prêt, mais on ne voit toujours rien. Bien que nous ayons configuré le moteur de rendu, nous devons toujours effetué le rendu. Notre fonction render () fera ce travail, avec un peu d'aide de requestAnimationFrame (), ce qui fait que la scène sera restituée sur chaque image:

```js
function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
render();
```

On every new frame the `render` function is invoked, and the `renderer` renders the `scene` and the `camera`. Right after the function declaration, we're invoking it for the first time to start the loop, after which it will be used indefinitely.

Again, add this new code below your previous additions. Try saving the file and opening it in your browser. You should now see a gray window. Congratulations!

## Geometry

Now our scene is properly rendering, we can start adding 3D shapes. To speed up development, Three.js provides a bunch of predefined primitives, which you can use to create shapes instantly in a single line of code. There's cubes, spheres, cylinders, and more complicated shapes available. Detail like drawing required vertices and faces, for a given shape, is handled by the Three framework, so we can focus on higher level coding. Let's start, by defining the geometry for a cube shape, adding the following just above the `render()` function:

```js
var boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In this case, we define a simple cube that is 10 x 10 x 10 units. The geometry itself is not enough though, we also need a material that will be used for our shape.

## Material

A material is what covers an object, the colors, or textures on its surface. In our case, we will choose a simple blue color to paint our box. There are a number of predefined materials which can be used: Basic, Phong, Lambert. Let's play with the last two later, but for now, the Basic one should be enough:

```js
var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
```

Add this line below the previously added.

Our material is now ready, what next?

## Mesh

To apply the material to a geometry, a mesh is used. This takes on a shape, and adds the specified material to every face:

```js
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Again, add this line below the one you previously added.

## Adding the cube to the scene

We've now created a cube, using the geometry and material defined earlier. The last thing to do is to place the cube to our scene. Add this line below the previous one:

```js
scene.add(cube);
```

If you save, and refresh your Web browser, our object will now look like a square, because it's facing the camera. The good thing about objects, is that we can move them on the scene, however we want. For example, rotating and scaling as we like. Let's apply a little rotation to the cube, so we can see more than one face.  Again, adding our code below the previous:

```js
cube.rotation.set(0.4, 0.2, 0);
```

Congratulations, you've created an object in a 3D environment! This might have proven easier than you first thought? Here's how it should look:

![](cube.png)

And here's the code we have created so far:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bwup75fa/","","350")}}

You can also [check it out on GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html).

## More shapes and materials

Now we will add more shapes to the scene, and explore other shapes, materials, lighting, and more. Let's move the cube to the left, to make space for some friends. Adding the following line just below the previous one:

```js
cube.position.x = -25;
```

Now onto more shapes and materials. What might happen when you add a torus, wrapped in the Phong material? Try adding the following lines, just below the lines defining the cube.

```js
var torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
var phongMaterial = new THREE.MeshPhongMaterial({color: 0xFF9500});
var torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);
```

These lines will add a torus geometry; the `TorusGeometry()` method's parameters define, and the parameters are `radius`, `tube diameter`, `radial segment count`, and `tubular segment count`. The Phong material should look more glossy than the box's simple Basic material, though right now our torus will just look black.

We can choose more fun predefined shapes. Let's play some more. Add the following lines, below those defining the torus:

```js
var dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
var lambertMaterial = new THREE.MeshLambertMaterial({color: 0xEAEFF2});
var dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

This time, we are creating a dodecahedron, a shape containing twelve flat faces. The parameter, `DodecahedronGeometry(),` defines the size of the object. We're using a Lambert material, similar to Phong, but should be less glossy. Again it's black, for now. We're moving the object to the right, so it's not in the same position as the box, or torus.

As mentioned above, the new objects currently just look black. To have both, the Phong and Lambert materials properly visible, we need to introduce a source of light.

## Lights

There are various types of light sources available in Three.js. The most basic is `PointLight`, which works like a flashlight, shining a spotlight in a defined direction. Add the following lines, below your shape definitions:

```js
var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);
```

We define a white point of light, set its position a little away from the center of the scene, so it can light up some parts of the shapes, finally adding it to the scene. Now everything works as it should, all three shapes are visible. You should check the documentation for other types of lights, like Ambient, Directional, Hemisphere, or Spot. Experiment placing them on our scene, to see how they affect it.

![](shapes.png)

This looks a little boring though. In a game, something is usually happening. We might see animations and such. So let's try breathing a little life into these shapes, by animating them!

## Animation

We already used rotation, to adjust the position of the cube. We can also scale the shapes, or change their positions. To show animation, we need to make changes to these values inside the render loop, so they update on each frame.

### Rotation

Rotating is straighforward. You add a value to a given direction of rotation on each frame. Add this line of code, right after the `requestAnimationFrame()` invocation inside the `render` function:

```js
cube.rotation.y += 0.01;
```

This rotates the cube on every frame, by a tiny bit, so the animation looks smooth.

### Scaling

We can also scale an object. Applying a constant value, we would make it grow, or shrink just once. Let's make things more interesting. First, we implement a helper variable, called `t,` for counting elapsed time. Add it right before the `render()` function:

```js
var t = 0;
```

Now let's increase the value by a given constant value, on each frame of the animation. Add the following lines, just below the `requestAnimationFrame()` invocation:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

We use `Math.sin`, ending up with quite an interesting result. This scales the torus, repeating the process, as `sin` is a periodic function. We're wrapping the scale value in `Math.abs`, to pass the absolute values, greater or equal to 0. As sin is between -1 and 1,  negative values might render out torus in unexpected way. In this case it looks black half the time.

Now, onto movement.

### Moving

Aside from rotation, and scaling, we can additionally move objects around the scene. Add the following, again just below our `requestAnimationFrame()` invocation:

```js
dodecahedron.position.y = -7*Math.sin(t*2);
```

This will move the dodecahedron up and down, by applying the `sin()` value to the y axis on each frame, and a little adjustment to make it look cooler. Try changing these values, to see how it affects the animations.

## Conclusion

Here's the final code:

{{JSFiddleEmbed("https://jsfiddle.net/rybr720u/","","350")}}

You can also [see it on GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/shapes.html) and [fork the repository](https://github.com/end3r/MDN-Games-3D/), if you want to play with it locally. Now you understand the basics of Three.js, you can jump back to the parent page, [3D on the Web](/fr/docs/Games/Techniques/3D_on_the_web).

You could also try learning raw WebGL, to gain a better understanding of what's going on underneath. See our [WebGL documentation](/fr/docs/Web/API/WebGL_API).
