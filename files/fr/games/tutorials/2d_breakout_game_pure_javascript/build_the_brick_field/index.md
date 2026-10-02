---
title: Créer un champ de briques
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}

C'est la **6<sup>e</sup> étape sur** 11 de [créer un jeu casse-briques en utilisant uniquement JavaScript](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Voyons comment créer un groupe de briques, les afficher à l'écran à l'aide d'une boucle et les supprimer lorsque la balle les touche. Construire le champ de briques est un peu plus compliqué que d'ajouter un seul objet à l'écran.

## Dessiner les briques

Toutes les briques utilisent la même image, nous pouvons donc la créer et la décoder une seule fois, puis la partager entre elles. Ajoutez une carte statique `assets` et un champ `url` à `ObjetJeu`, et remplacez son constructeur et sa méthode `precharger()`&nbsp;:

```js
class ObjetJeu {
  static assets = new Map();
  url;
  // …
  constructor(url, ctx) {
    this.url = url;
    this.ctx = ctx;
  }
  async precharger() {
    if (!ObjetJeu.assets.has(this.url)) {
      const asset = new Image();
      asset.src = this.url;
      ObjetJeu.assets.set(
        this.url,
        asset.decode().then(() => asset),
      );
    }
    this.asset = await ObjetJeu.assets.get(this.url);
    if (this.taille.w === undefined) {
      this.taille.w = this.asset.width;
      this.taille.h = this.asset.height;
    }
  }
  // …
}
```

Le cache associe chaque URL à une promesse qui se résout avec l'image décodée. Le premier appel à `precharger()` pour une URL crée l'image et commence à la décoder&nbsp;; les appels suivants attendent la même promesse et reçoivent la même image. Chaque objet a toujours sa propre position et taille.

Comme la `Balle` et la `Raquette`, la `Brique` repose également sur la classe `ObjetJeu`. Une brique n'a pas de position ou de taille par défaut et doit être définie explicitement dans le constructeur. Comme les briques ont des dimensions explicites, nous pouvons utiliser les paramètres supplémentaires `dWidth` et `dHeight` de {{DOMxRef("CanvasRenderingContext2D/drawImage", "ctx.drawImage()")}}, qui redimensionnent automatiquement l'image si elle n'a pas déjà les dimensions souhaitées.

```js
class Brique extends ObjetJeu {
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.taille = { w, h };
  }
  dessiner() {
    const { left, top } = this.boiteDeCollision;
    this.ctx.drawImage(this.asset, left, top, this.taille.w, this.taille.h);
  }
}
```

Vous devez également [récupérer l'image de la brique](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png) et la sauvegarder dans votre répertoire `/img`.

Nous plaçons tout le code pour dessiner les briques à l'intérieur d'une fonction `initialiserBriques` afin de le séparer du reste du code. Ajoutez un appel à `initialiserBriques` sous `elementsCollision.push(raquette);`&nbsp;:

```js
// …
const raquette = new Raquette("img/paddle.png", ctx);
elementsCollision.push(raquette);
const briques = initialiserBriques();
// …
```

Assurez-vous également que le jeu attend que les briques soient préchargées avant de commencer le jeu, en ajoutant `, ...briques` au tableau à l'intérieur de `Promise.all()`. Ces appels partagent la promesse de décodage mise en cache, donc l'image de la brique n'est décodée qu'une seule fois.

Passons maintenant à la fonction elle-même. Ajoutez la fonction `initialiserBriques` à la fin du fichier `script.js`. Pour commencer, nous ajoutons l'objet `dispositionBriques`, car il nous est très utile très bientôt&nbsp;:

```js
function initialiserBriques() {
  const dispositionBriques = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  const briques = [];
  // continuer d'ajouter le code ici...
  return briques;
}
```

Cet objet `dispositionBriques` contient toutes les informations dont nous avons besoin&nbsp;: la largeur et la hauteur d'une seule brique, le nombre de lignes et de colonnes de briques que nous voyons à l'écran, le décalage par le haut et par la gauche (l'emplacement sur le canevas où nous commençons à dessiner les briques) et l'espacement entre chaque ligne et colonne de briques.

Maintenant, commençons à créer les briques elles-mêmes. Nous pouvons boucler à travers les lignes et les colonnes pour créer une nouvelle brique à chaque itération — ajoutez la boucle imbriquée suivante sous la ligne de code précédente&nbsp;:

```js
for (let c = 0; c < dispositionBriques.count.col; c++) {
  for (let r = 0; r < dispositionBriques.count.row; r++) {
    const briqueX =
      c * (dispositionBriques.width + dispositionBriques.padding) +
      dispositionBriques.offset.left;
    const briqueY =
      r * (dispositionBriques.height + dispositionBriques.padding) +
      dispositionBriques.offset.top;

    const nouvelleBrique = new Brique(
      "img/brick.png",
      ctx,
      briqueX,
      briqueY,
      dispositionBriques.width,
      dispositionBriques.height,
    );
    briques.push(nouvelleBrique);
  }
}
```

Chaque position `briqueX` est calculée comme `dispositionBriques.width` plus `dispositionBriques.padding`, multipliée par le numéro de colonne, `c`, plus le `dispositionBriques.offset.left`&nbsp;; la logique pour le `briqueY` est identique sauf qu'elle utilise les valeurs pour le numéro de ligne, `r`, `dispositionBriques.height` et `dispositionBriques.offset.top`. Maintenant, chaque brique peut être placée à sa place correcte, avec un espacement entre chaque brique, et dessinée avec un décalage par rapport aux bords gauche et supérieur du canevas.

Enfin, nous pouvons dessiner ces briques à l'écran à l'intérieur de la fonction `actualiser()`. Ajoutez ce qui suit sous l'appel à `raquette.dessiner()`&nbsp;:

```js
for (const brique of briques) {
  brique.dessiner();
}
```

Si vous rechargez `index.html` à ce stade, vous devez voir les briques affichées à l'écran, à une distance égale les unes des autres.

## Détecter la collision Brique/Balle

Passons au défi suivant — la détection des collisions entre la balle et les briques. Heureusement, nous avons déjà implémenté un système de collision très générique, donc nous pouvons simplement y connecter nos briques.

Tout d'abord, enregistrez chaque brique en tant qu'élément de collision, juste en dessous de l'appel à `initialiserBriques()`&nbsp;:

```js
const briques = initialiserBriques();
for (const brique of briques) {
  elementsCollision.push(brique);
}
```

Ajoutez une méthode `enCollision()` à chaque brique, qui se supprime elle-même des collections `briques` et `elementsCollision`&nbsp;:

```js
class Brique extends ObjetJeu {
  // …
  enCollision() {
    briques.splice(briques.indexOf(this), 1);
    elementsCollision.splice(elementsCollision.indexOf(this), 1);
  }
}
```

La brique doit disparaître le plus rapidement possible, afin que la balle ne rebondisse pas dessus.

Et c'est tout&nbsp;! Rechargez votre code, et vous devez voir la nouvelle détection des collisions fonctionner comme prévu.

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
  touch-action: none;
}
```

```js hidden
const canvas = document.getElementById("canvas-jeu");
const ctx = canvas.getContext("2d");
let derniereChronologie = null;

const collisionMurBase = {
  left: -Infinity,
  right: Infinity,
  top: -Infinity,
  bottom: Infinity,
};

const elementsCollision = [
  { boiteDeCollision: { ...collisionMurBase, right: 0 } },
  { boiteDeCollision: { ...collisionMurBase, left: canvas.width } },
  { boiteDeCollision: { ...collisionMurBase, bottom: 0 } },
];

class ObjetJeu {
  static assets = new Map();
  url;
  asset;
  ctx;
  taille = { w: undefined, h: undefined };
  pos = { x: 0, y: 0 };
  origine = { x: 0.5, y: 0.5 };
  constructor(url, ctx) {
    this.url = url;
    this.ctx = ctx;
  }
  async precharger() {
    if (!ObjetJeu.assets.has(this.url)) {
      const asset = new Image();
      asset.src = this.url;
      ObjetJeu.assets.set(
        this.url,
        asset.decode().then(() => asset),
      );
    }
    this.asset = await ObjetJeu.assets.get(this.url);
    if (this.taille.w === undefined) {
      this.taille.w = this.asset.width;
      this.taille.h = this.asset.height;
    }
  }
  get boiteDeCollision() {
    const left = this.pos.x - this.taille.w * this.origine.x;
    const top = this.pos.y - this.taille.h * this.origine.y;
    return {
      left,
      right: left + this.taille.w,
      top,
      bottom: top + this.taille.h,
    };
  }
  dessiner() {
    const { left, top } = this.boiteDeCollision;
    this.ctx.drawImage(this.asset, left, top);
  }
  enCollision() {}
}

class Balle extends ObjetJeu {
  pos = { x: undefined, y: undefined };
  vel = { x: 150, y: -150 };
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

class Raquette extends ObjetJeu {
  origine = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}

class Brique extends ObjetJeu {
  constructor(url, ctx, x, y, w, h) {
    super(url, ctx);
    this.pos = { x, y };
    this.taille = { w, h };
  }
  dessiner() {
    const { left, top } = this.boiteDeCollision;
    this.ctx.drawImage(this.asset, left, top, this.taille.w, this.taille.h);
  }
  enCollision() {
    briques.splice(briques.indexOf(this), 1);
    elementsCollision.splice(elementsCollision.indexOf(this), 1);
  }
}

const balle = new Balle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const raquette = new Raquette(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
elementsCollision.push(raquette);
const briques = initialiserBriques();
for (const brique of briques) {
  elementsCollision.push(brique);
}

canvas.addEventListener("pointermove", (event) => {
  if (raquette.taille.w === undefined) {
    return;
  }
  const limites = canvas.getBoundingClientRect();
  const x = ((event.clientX - limites.left) * canvas.width) / limites.width;
  raquette.pos.x = Math.max(
    raquette.taille.w / 2,
    Math.min(canvas.width - raquette.taille.w / 2, x),
  );
});

Promise.all([balle, raquette, ...briques].map((obj) => obj.precharger())).then(
  () => {
    balle.pos.x = raquette.pos.x;
    balle.pos.y = raquette.boiteDeCollision.top - balle.taille.h / 2;
    requestAnimationFrame(actualiser);
  },
);

function actualiser(chronologie) {
  const dt =
    derniereChronologie === null
      ? 0
      : (chronologie - derniereChronologie) / 1000;
  derniereChronologie = chronologie;
  deplacerBalle(dt);

  ctx.fillStyle = "#eeeeee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  balle.dessiner();
  raquette.dessiner();
  for (const brique of briques) {
    brique.dessiner();
  }

  requestAnimationFrame(actualiser);
}

function obtenirCollision(deplacement, velocite, obstacle, dt) {
  const largeur = deplacement.right - deplacement.left;
  const hauteur = deplacement.bottom - deplacement.top;
  const deplacementPos = { x: deplacement.left, y: deplacement.top };
  const gauche = obstacle.left - largeur;
  const droite = obstacle.right;
  const haut = obstacle.top - hauteur;
  const bas = obstacle.bottom;
  const touche = { time: dt, x: null, y: null };

  function verifierFace(axes, coordonnes, min, max, direction) {
    if (velocite[axes] * direction <= 0) {
      return;
    }
    const temps = (coordonnes - deplacementPos[axes]) / velocite[axes];
    if (temps < 0 || temps > touche.time) {
      return;
    }
    const autreAxe = axes === "x" ? "y" : "x";
    const autrePosition = deplacementPos[autreAxe] + velocite[autreAxe] * temps;
    if (autrePosition < min || autrePosition > max) {
      return;
    }
    if (temps < touche.time) {
      touche.x = null;
      touche.y = null;
    }
    touche.time = temps;
    touche[axes] = coordonnes;
  }

  verifierFace("x", gauche, haut, bas, 1);
  verifierFace("x", droite, haut, bas, -1);
  verifierFace("y", haut, gauche, droite, 1);
  verifierFace("y", bas, gauche, droite, -1);

  return touche.x === null && touche.y === null ? null : touche;
}

function deplacerBalle(dt) {
  while (dt > 0) {
    // Évite de déclencher à plusieurs reprises l'accesseur
    const boiteCollisionBalle = balle.boiteDeCollision;
    let momentTouche = dt;
    let toucheX = null;
    let toucheY = null;
    let contacts = [];

    for (const elementCollision of elementsCollision) {
      const touche = obtenirCollision(
        boiteCollisionBalle,
        balle.vel,
        elementCollision.boiteDeCollision,
        momentTouche,
      );
      if (touche === null) {
        continue;
      }
      if (touche.time < momentTouche) {
        toucheX = null;
        toucheY = null;
        contacts = [];
      }
      momentTouche = touche.time;
      toucheX = touche.x ?? toucheX;
      toucheY = touche.y ?? toucheY;
      contacts.push({ elementCollision, touche });
    }

    balle.deplacer(momentTouche);
    dt -= momentTouche;

    const balleEstHorsLimites = balle.boiteDeCollision.bottom > canvas.height;
    if (balleEstHorsLimites) {
      // Logique de fin de jeu
      location.reload();
      return;
    }

    if (contacts.length === 0) {
      break;
    }
    // Attache la position au point de contact pour éviter les erreurs d'arrondi
    if (toucheX !== null) {
      balle.pos.x = toucheX + balle.taille.w / 2;
    }
    if (toucheY !== null) {
      balle.pos.y = toucheY + balle.taille.h / 2;
    }

    balle.enCollision({ x: toucheX !== null, y: toucheY !== null });
    for (const { elementCollision, touche } of contacts) {
      elementCollision.enCollision?.({
        x: touche.x !== null,
        y: touche.y !== null,
      });
    }
  }
}

function initialiserBriques() {
  const dispositionBriques = {
    width: 50,
    height: 20,
    count: {
      row: 3,
      col: 7,
    },
    offset: {
      top: 50,
      left: 60,
    },
    padding: 10,
  };
  const briques = [];
  for (let c = 0; c < dispositionBriques.count.col; c++) {
    for (let r = 0; r < dispositionBriques.count.row; r++) {
      const briqueX =
        c * (dispositionBriques.width + dispositionBriques.padding) +
        dispositionBriques.offset.left;
      const briqueY =
        r * (dispositionBriques.height + dispositionBriques.padding) +
        dispositionBriques.offset.top;

      const nouvelleBrique = new Brique(
        "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/brick.png",
        ctx,
        briqueX,
        briqueY,
        dispositionBriques.width,
        dispositionBriques.height,
      );
      briques.push(nouvelleBrique);
    }
  }
  return briques;
}
```

{{EmbedLiveSample("Comparer votre code", "", 480,,,,, "allow-modals")}}

## Prochaines étapes

Nous pouvons frapper les briques et les supprimer, ce qui est déjà un bel ajout à la jouabilité. Il est encore mieux de [suivre le score et de gagner](/fr/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win) lorsque toutes les briques sont détruites.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win")}}
