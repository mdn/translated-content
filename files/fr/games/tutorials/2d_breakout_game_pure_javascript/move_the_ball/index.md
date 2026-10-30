---
title: Déplacer la balle
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

C'est la **2<sup>e</sup> étape sur** 11 de ce [tutoriel Gamedev Canvas](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Dans cet article, nous allons voir comment ajouter des sprites dans notre monde de jeu. Notre jeu comporte une balle qui roule à l'écran, rebondit sur une raquette et détruit des briques pour marquer des points.

Gérer la balle implique deux étapes&nbsp;: charger l'élément de la balle et le rendre à la position correcte lorsqu'il se déplace. Techniquement, nous allons peindre la balle à l'écran, l'effacer, puis la peindre à nouveau à une position légèrement différente à chaque image pour donner l'impression de mouvement — exactement comme le mouvement fonctionne dans les films.

## Définir une boucle de dessin

Pour mettre à jour constamment le dessin du canvas à chaque image, nous devons définir une fonction de dessin qui s'exécute encore et encore, avec un ensemble différent de valeurs de variables à chaque fois pour changer les positions des sprites, etc.

Vous pouvez être tenté d'utiliser {{DOMxRef("Window.setInterval", "setInterval()")}} pour planifier l'exécution de la fonction toutes les quelques millisecondes (disons 10, ce qui correspond à 100 images par seconde). Cela fonctionne, mais cela pose des problèmes&nbsp;:

1. Les minuteries ne sont pas exactes, donc vous ne pouvez pas supposer que la fonction est appelée à des intervalles de 10 millisecondes exactement.
2. Si votre fonction de rendu est lente et prend plus de 10 millisecondes pour peindre l'image, elle manque le battement d'horloge suivant, et ces retards s'accumulent, ce qui fait que le temps du jeu n'est pas synchronisé avec le temps réel.

Vous pouvez toujours utiliser `setInterval` — ou `setTimeout` — ce qui a l'avantage de pouvoir configurer le taux de rafraîchissement, mais vous devez implémenter une logique pour rythmer les délais afin d'éviter les problèmes ci-dessus. Pour simplifier, nous allons utiliser {{DOMxRef("Window.requestAnimationFrame", "requestAnimationFrame()")}}, qui permet au navigateur d'appeler automatiquement la fonction de rendu la prochaine fois qu'elle est disponible pour le re-dessin. La fonction reçoit un horodatage, nous indiquant combien de temps s'est écoulé depuis la dernière image, afin que nous puissions décider de la distance que la balle a dû parcourir entre-temps.

Remplacez le contenu de votre fichier `script.js` par ce qui suit&nbsp;:

```js
const canvas = document.getElementById("canvas-jeu");
const ctx = canvas.getContext("2d");

requestAnimationFrame(actualiser);

function actualiser(chronologie) {
  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // continuez d'ajouter des choses ici...

  requestAnimationFrame(actualiser);
}
```

Maintenant, le jeu fonctionne déjà en boucle lorsque vous rechargez le HTML. Cependant, nous n'avons défini aucune partie mobile, donc il n'a pas encore d'effets visibles.

## Charger le sprite de la balle

Tous nos objets de jeu — balle, raquette, briques — sont implémentés en tant que classes, afin qu'ils puissent encapsuler leur état et exposer leur comportement.

Notre balle est représentée par une image PNG. Nous utilisons {{DOMxRef("CanvasRenderingContext2D/drawImage", "ctx.drawImage()")}} pour dessiner le PNG sur le canevas. Parmi les nombreux types de données d'entrée qu'il accepte, nous utilisons un {{DOMxRef("HTMLImageElement")}}, car il gère automatiquement la récupération et le décodage pour nous.

> [!NOTE]
> Vous pouvez bien sûr dessiner un cercle rempli directement sur le canevas, en utilisant {{DOMxRef("CanvasRenderingContext2D/arcTo", "ctx.arcTo()")}} et {{DOMxRef("CanvasRenderingContext2D/fill", "ctx.fill()")}}, mais dans un vrai jeu, votre balle est probablement plus complexe qu'un simple cercle, donc vous voulez finalement utiliser une ressource (<i lang="en">asset</i> en anglais) d'image séparée de toute façon.

Commencez par définir la classe&nbsp;:

```js
class Balle {
  asset;
  ctx;
  taille = { w: undefined, h: undefined };
  constructor(url, ctx) {
    this.asset = new Image();
    this.asset.src = url;
    this.ctx = ctx;
  }
  async precharger() {
    await this.asset.decode();
    if (this.taille.w === undefined) {
      this.taille.w = this.asset.width;
      this.taille.h = this.asset.height;
    }
  }
}
```

Le constructeur {{DOMxRef("HTMLImageElement/Image", "Image()")}} crée un `HTMLImageElement` sans l'attacher au DOM (nous ne rendrons pas l'élément `<img>` lui-même, nous l'utilisons uniquement pour peindre le canevas). L'affectation à {{DOMxRef("HTMLImageElement/src", "src")}} initie la requête pour l'image `ball.png`. La fonction `precharger()` appelle {{DOMxRef("HTMLImageElement/decode", "decode()")}}, qui retourne une promesse qui se complète lorsque l'image correspondante est récupérée et décodée avec succès. Après cela, nous pouvons enregistrer les dimensions de l'image pour les calculs ultérieurs.

Remplacez l'appel à `requestAnimationFrame(actualiser);` au-dessus de la définition de la fonction `actualiser` par ce qui suit&nbsp;:

```js
const balle = new Balle("img/ball.png", ctx);

Promise.all([balle].map((obj) => obj.precharger())).then(() =>
  requestAnimationFrame(actualiser),
);
```

Nous appelons `Promise.all([balle].map((obj) => obj.precharger()))`, ce qui obtient une seule promesse qui se complète lorsque tous les ressources sont préchargées avec succès. Si cela se produit, nous commençons à dessiner en utilisant `requestAnimationFrame(actualiser)`.

Bien sûr, pour charger l'image, elle doit être disponible dans notre répertoire de code. [Récupérez l'image de la balle depuis notre site d'assets](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png), et enregistrez-la dans un répertoire `/img` au même endroit que votre fichier `index.html`.

Maintenant, pour l'afficher à l'écran, nous appelons `drawImage()`, en passant à la fois l'image `balle` et les coordonnées x et y du canevas où nous voulons l'ajouter. Ajoutez ce qui suit à votre classe `Balle`&nbsp;:

```js
class Balle {
  // …
  dessiner() {
    this.ctx.drawImage(
      this.asset,
      50 - this.taille.w / 2,
      50 - this.taille.h / 2,
    );
  }
}
```

> [!NOTE]
> Les coordonnées que vous passez à `drawImage()` sont les coordonnées du _coin supérieur gauche_ de l'image. En pratique, il est souvent plus pratique de suivre le _centre_ des objets, afin que toutes les directions puissent être traitées de la même manière (en particulier pour la [détection des collisions](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls)). Par conséquent, nous définissons les coordonnées prévues pour le _centre_ de la balle comme `(50, 50)`, et soustrayons `width / 2` et `height / 2` pour obtenir les emplacements correspondants du coin supérieur gauche.

C'est tout — si vous chargez votre fichier `index.html`, vous voyez l'image déjà chargée et rendue sur le canevas&nbsp;!

## Mettre à jour la position de la balle à chaque image

Actuellement, chaque invocation de `balle.dessiner()` peint la balle exactement au même endroit, donc la balle semble immobile. Nous pouvons maintenir des champs d'état séparés suivant la position et la vitesse du centre de la balle. Juste en dessous des déclarations de champs existantes dans `class Balle`, ajoutez des définitions pour `pos` et `vel`, et remplacez la méthode `dessiner()` afin qu'elle utilise ces coordonnées&nbsp;:

```js
class Balle {
  // …
  taille = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
  // …
  dessiner() {
    this.ctx.drawImage(
      this.asset,
      this.pos.x - this.taille.w / 2,
      this.pos.y - this.taille.h / 2,
    );
  }
}
```

La vélocité est définie à 150 pixels par seconde le long des deux axes. Nous mettons à jour la position de la balle à chaque appel de `actualiser()`. Nous devons calculer de combien la déplacer par rapport à la dernière position, en utilisant la formule `dx = vx * dt`, où `vx` est sa vitesse le long de l'axe x et `dt` est le temps écoulé depuis le dernier appel de `actualiser()`. Comme chaque fois la fonction `actualiser()` reçoit un argument `chronologie`, nous pouvons le comparer avec l'itération précédente pour obtenir `dt`. Ajoutez ce qui suit à la classe&nbsp;:

```js
class Balle {
  // …
  deplacer(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
}
```

Cela ajoute le déplacement calculé aux coordonnées de la balle sur le canevas, à chaque image. Nous ajoutons plus de logique à cette fonction, comme la détection des collisions.

Ajoutez ce qui suit, juste après `const ctx`&nbsp;:

```js
let derniereChronologie = null;
```

Dans la fonction `actualiser()`, nous pouvons maintenant appeler `balle.deplacer()` et `balle.dessiner()` pour laisser la classe se mettre à jour elle-même, tandis que la fonction `actualiser()` ne fait que suivre le temps&nbsp;:

```js
const dt =
  derniereChronologie === null ? 0 : (chronologie - derniereChronologie) / 1000;
derniereChronologie = chronologie;
balle.deplacer(dt);

ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
balle.dessiner();
```

Lors de la première image, `derniereChronologie` est `null`, donc `dt` est zéro et la balle reste à sa position initiale. Lors des images suivantes, `dt` est le temps écoulé depuis l'image précédente, en secondes. Les horodatages sont en millisecondes, donc nous divisons leur différence par 1000 pour correspondre aux unités de vitesse.

Rechargez `index.html` et vous devez voir la balle rouler à travers l'écran.

> [!NOTE]
> Le canevas n'est pas automatiquement effacé à chaque appel de `actualiser()`. La position précédente de la balle est supprimée parce que nous redessinons tout l'arrière-plan avec `ctx.fillRect(0, 0, canvas.width, canvas.height)`, ce qui recouvre tout contenu existant. Si vous supprimez cette ligne, vous voyez la balle laisser une traînée.

## Comparer votre code

Voici ce que vous devez avoir jusqu'à présent, en cours d'exécution en direct. Pour voir son code source, cliquez sur le bouton «&nbsp;Exécuter&nbsp;».

Si vous ne voyez pas la balle, essayez de rafraîchir la page — la balle a probablement quitté l'écran.

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
let derniereChronologie = null;

class Balle {
  asset;
  ctx;
  taille = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
  constructor(url, ctx) {
    this.asset = new Image();
    this.asset.src = url;
    this.ctx = ctx;
  }
  async precharger() {
    await this.asset.decode();
    if (this.taille.w === undefined) {
      this.taille.w = this.asset.width;
      this.taille.h = this.asset.height;
    }
  }
  dessiner() {
    this.ctx.drawImage(
      this.asset,
      this.pos.x - this.taille.w / 2,
      this.pos.y - this.taille.h / 2,
    );
  }
  deplacer(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
}

const balle = new Balle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);

Promise.all([balle].map((obj) => obj.precharger())).then(() =>
  requestAnimationFrame(actualiser),
);

function actualiser(chronologie) {
  const dt =
    derniereChronologie === null
      ? 0
      : (chronologie - derniereChronologie) / 1000;
  derniereChronologie = chronologie;
  balle.deplacer(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  balle.dessiner();

  requestAnimationFrame(actualiser);
}
```

{{EmbedLiveSample("Comparer votre code", "", 480,,,,, "allow-modals")}}

## Prochaines étapes

Nous pouvons maintenant passer à la leçon suivante et voir comment faire en sorte que la balle [rebondisse sur les murs](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
