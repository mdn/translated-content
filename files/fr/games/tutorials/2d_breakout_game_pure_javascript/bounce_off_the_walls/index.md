---
title: Faire rebondir la balle sur les murs
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}

C'est la **3<sup>e</sup> étape sur** 11 de [créer un jeu casse-briques en utilisant uniquement JavaScript](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Maintenant que la physique du mouvement a été introduite, nous pouvons commencer à implémenter la détection des collisions dans le jeu — nous allons d'abord examiner les murs.

## Faire rebondir la balle sur les limites du monde

La [loi de la réflexion <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Reflection_(physics)>) nous indique que, dans un monde idéal, lorsqu'une balle frappe une surface plane comme un mur, elle se reflète en arrière — la composante de la vitesse perpendiculaire au mur est inversée, tandis que la composante parallèle au mur est conservée. Par exemple, si la balle frappe la limite inférieure en se déplaçant vers le bas à droite, elle doit se refléter et se déplacer vers le haut à droite.

Nous pouvons implémenter cette logique comme une autre méthode de `Balle`. Cette méthode reçoit deux indicateurs booléens indiquant si la balle a frappé un mur vertical, un mur horizontal ou les deux (dans ce cas, elle se reflète en arrière le long du même chemin).

```js
class Balle {
  // …
  enCollision({ x, y }) {
    if (x) {
      this.vel.x = -this.vel.x;
    }
    if (y) {
      this.vel.y = -this.vel.y;
    }
  }
}
```

Nous effectuons la détection des collisions juste après la mise à jour de la position. Le mouvement de la balle est mis à jour comme suit, en supposant qu'elle se déplace directement vers la gauche avec `vx = -1`&nbsp;:

1. Image 1&nbsp;: à `x = 1`, `vx = -1`
2. Image 2&nbsp;: à `x = 0`&nbsp;; collision détectée, donc la vitesse devient `vx = 1`
3. Image 3&nbsp;: à `x = 1`, `vx = 1`

> [!NOTE]
> À l'image 2, il est possible que `x` soit inférieur à 0, par exemple si `vx = -2`, donc la balle chevauche le mur. Comme cela ne dure pas plus de quelques images, la plupart des moteurs de jeu le tolèrent, car cela simplifie considérablement les calculs. Vous pouvez également ajuster la position de la balle pour éviter le chevauchement, par exemple en définissant `x = 0` chaque fois que `x <= 0`.

La logique essentielle est la suivante&nbsp;:

```js
const x = toucheLimiteGauche || toucheLimiteDroite;
const y = toucheLimiteHaut || toucheLimiteBBas;
if (x || y) {
  balle.enCollision({ x, y });
}
```

Nous devons simplement remplacer chacune des variables dans les conditions par les bonnes expressions. Prenons l'exemple de la limite gauche. Sa coordonnée `x` est 0, ce qui signifie que chaque fois que le bord gauche de la balle a une coordonnée `x` inférieure ou égale à 0 et qu'elle se déplace vers la gauche, nous savons qu'elle a touché la limite.

> [!NOTE]
> Imaginez ce qui suit&nbsp;: la balle se déplace vers la gauche, chevauche le mur (la coordonnée `x` est négative) et inverse la direction. Cependant, la trame suivante se produit si rapidement que la balle n'a pas encore complètement quitté le mur (la coordonnée `x` est toujours négative). Sans cette condition, cela déclenche une autre collision et inverse à nouveau la direction. C'est ce qu'on appelle le [battement de collision <sup>(angl.)</sup>](https://docs.flatredball.com/flatredball/tutorials/code-tutorials/collision-jitter), un bogue courant dans les jeux, en particulier les anciens qui n'utilisent pas de moteurs de jeu établis. Nous le résolvons en ajoutant la condition «&nbsp;la balle se déplace vers la gauche&nbsp;»&nbsp;; cela peut également être résolu en mettant en œuvre «&nbsp;l'ajustement pour éviter le chevauchement&nbsp;» ci-dessus.

Pour obtenir le bord gauche de la balle, nous devons soustraire sa moitié de largeur à la position du centre, de manière similaire à la façon dont nous obtenons les coordonnées pour `drawImage()`.

```js
const toucheLimiteGauche =
  balle.pos.x - balle.size.w / 2 <= 0 && balle.vel.x < 0;
```

Les implémentations pour les trois autres limites sont laissées en exercice&nbsp;; rappelez-vous que la limite droite a une coordonnée `x` de `canvas.width`, tandis que les limites supérieure et inférieure ont des coordonnées `y` de 0 et `canvas.height`, respectivement.

> [!NOTE]
> Ici, nous approximons la balle comme un carré centré sur `balle.pos`, avec une taille de `balle.size.w` par `balle.size.h` (ce sont les dimensions de l'image PNG), car les carrés sont plus faciles à calculer pour le chevauchement que les formes géométriques arbitraires. Cela est connu sous le nom de _boîte de collision_ (<i lang="en">hitbox</i> en anglais). Un objet peut également avoir de nombreuses boîtes de collision si sa géométrie est complexe. Comme notre asset PNG n'a pas de marge, la boîte de collision basée sur l'image entoure assez précisément le cercle rendu, à l'exception de l'espace supplémentaire sur les quatre coins. Plus votre objet est complexe, plus il est difficile de créer un ensemble précis de boîtes de collision tout en maintenant de bonnes performances.

## Intégrer la gestion des collisions

Nous gardons la détection des collisions en dehors des objets, car la plupart des collisions se produisent entre deux objets, et nous pouvons également vouloir contrôler quand et comment elles se produisent. La classe `Balle` n'est responsable que de fournir la `boiteDeCollision` et la réponse `onCollide()`. Nous implémentons `boiteDeCollision` en tant qu'accesseur&nbsp;:

```js
class Ball {
  // …
  get boiteDeCollision() {
    return {
      left: this.pos.x - this.size.w / 2,
      right: this.pos.x + this.size.w / 2,
      top: this.pos.y - this.size.h / 2,
      bottom: this.pos.y + this.size.h / 2,
    };
  }
}
```

L'accesseur calcule les bords à partir de la position et de la taille actuelles de la balle chaque fois que nous lisons `balle.boiteDeCollision`. Cela évite de stocker un deuxième ensemble de coordonnées que nous devrions mettre à jour chaque fois que la balle se déplace.

Ajoutez maintenant le gestionnaire de collisions en dehors de la classe. Il prend un objet exposant `boiteDeCollision`, `vel`, et `enCollision()`, ainsi que la largeur et la hauteur du monde&nbsp;:

```js
function gererCollisionMur(objet, largeur, hauteur) {
  const boiteCollision = objet.boiteDeCollision;
  const toucheLimiteGauche = boiteCollision.left <= 0 && objet.vel.x < 0;
  const toucheLimiteDroite = boiteCollision.right >= largeur && objet.vel.x > 0;
  const toucheLimiteHaut = boiteCollision.top <= 0 && objet.vel.y < 0;
  const toucheLimiteBas = boiteCollision.bottom >= hauteur && objet.vel.y > 0;

  const x = toucheLimiteGauche || toucheLimiteDroite;
  const y = toucheLimiteHaut || toucheLimiteBas;
  if (x || y) {
    objet.enCollision({ x, y });
  }
}
```

Dans la fonction principale `actualiser()`, appelez le gestionnaire immédiatement après `balle.deplacer()`&nbsp;:

```js
balle.deplacer(dt);
gererCollisionMur(balle, canvas.width, canvas.height);
```

La boucle de jeu déplace maintenant la balle, gère les collisions avec les murs, puis la dessine. L'algorithme de collision actuel est très simple et permet la «&nbsp;pénétration temporaire&nbsp;» mentionnée ci-dessus. Plus tard, lorsque nous ajoutons plus d'objets, nous améliorons cet algorithme.

## Comparer votre code

Voici ce que vous devez avoir jusqu'à présent, en cours d'exécution en direct. Pour voir son code source, cliquez sur le bouton «&nbsp;Exécuter&nbsp;».

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
  get boiteDeCollision() {
    return {
      left: this.pos.x - this.taille.w / 2,
      right: this.pos.x + this.taille.w / 2,
      top: this.pos.y - this.taille.h / 2,
      bottom: this.pos.y + this.taille.h / 2,
    };
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
  enCollision({ x, y }) {
    if (x) {
      this.vel.x = -this.vel.x;
    }
    if (y) {
      this.vel.y = -this.vel.y;
    }
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
  gererCollisionMur(balle, canvas.width, canvas.height);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  balle.dessiner();

  requestAnimationFrame(actualiser);
}

function gererCollisionMur(objet, largeur, hauteur) {
  const boiteCollision = objet.boiteDeCollision;
  const toucheLimiteGauche = boiteCollision.left <= 0 && objet.vel.x < 0;
  const toucheLimiteDroite = boiteCollision.right >= largeur && objet.vel.x > 0;
  const toucheLimiteHaut = boiteCollision.top <= 0 && objet.vel.y < 0;
  const toucheLimiteBas = boiteCollision.bottom >= hauteur && objet.vel.y > 0;

  const x = toucheLimiteGauche || toucheLimiteDroite;
  const y = toucheLimiteHaut || toucheLimiteBas;
  if (x || y) {
    objet.enCollision({ x, y });
  }
}
```

{{EmbedLiveSample("Comparer votre code", "", 480,,,,, "allow-modals")}}

## Prochaines étapes

Cela commence à ressembler davantage à un jeu maintenant, mais nous ne pouvons pas le contrôler d'une quelconque manière — il est grand temps d'introduire la [raquette du·de la joueur·euse et les contrôles](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls")}}
