---
title: Suivre le score et gagner
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives")}}

C'est la **7<sup>e</sup> étape** sur 11 du [tutoriel de création d'un jeu de casse-briques en pur JavaScript](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Dans cet article, nous allons ajouter un système de score à notre jeu. Avoir un score peut rendre le jeu plus intéressant — vous pouvez essayer de battre votre propre meilleur score ou celui de votre ami. Nous ajoutons également une condition de victoire, qui est si vous parvenez à détruire toutes les briques.

## Ajouter le texte du score à l'affichage du jeu

Ajoutons une nouvelle variable juste après `let derniereChronologie` pour stocker le score&nbsp;:

```js
let score = 0;
```

Ajoutez une fonction `dessinerScore()` pour afficher le score actuel sur le canvas&nbsp;:

```js
function dessinerScore() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`Points : ${score}`, 5, 5);
}
```

La méthode {{DOMxRef("CanvasRenderingContext2D/fillText", "ctx.fillText()")}} prend le texte à rendre ainsi que les coordonnées x et y où le dessiner. Dans notre cas, le texte du score est bleu, de taille 18 pixels, et utilise la police Arial. Définir `textBaseline` sur `"top"` positionne le haut du texte à la coordonnée y donnée.

Appelez `dessinerScore()` à l'intérieur de `actualiser()`, après avoir dessiné les briques&nbsp;:

```js
function actualiser(chronologie) {
  // ...
  for (const brique of briques) {
    brique.draw();
  }
  dessinerScore();

  requestAnimationFrame(actualiser);
}
```

## Mettre à jour le score lorsque les briques sont détruites

Nous augmentons le nombre de points chaque fois que la balle touche une brique. Ajoutez `score += 10;` à la méthode `enCollision()` existante de la brique, après avoir supprimé la brique des deux tableaux&nbsp;:

```js
class Brique extends ObjetJeu {
  // ...
  enCollision() {
    briques.splice(briques.indexOf(this), 1);
    elementsCollision.splice(elementsCollision.indexOf(this), 1);
    score += 10;
  }
}
```

C'est tout pour l'instant — rechargez votre `index.html` et vérifiez que le score se met à jour à chaque fois qu'une brique est touchée.

## Comment gagner ?

Ajoutons le code suivant dans votre fonction `actualiser()`, après l'appel à `dessinerScore()`&nbsp;:

```js
if (briques.length === 0) {
  alert("Vous avez gagné, félicitations !");
  location.reload();
  return;
}
```

Si il n'y a plus de briques, alors nous affichons le message de victoire, en redémarrant le jeu une fois que l'alerte est fermée.

Mettez également à jour la condition `while` dans `deplacerBalle()` pour arrêter le mouvement de la balle dès que la dernière brique est détruite&nbsp;:

```js
function deplacerBalle(dt) {
  while (dt > 0 && briques.length > 0) {
    // ... mouvement et code de collision existants ...
  }
}
```

Cela empêche la balle de sortir des limites pendant le temps restant dans l'image après que le·la joueur·euse a déjà gagné·e.

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
let score = 0;

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
    score += 10;
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
  dessinerScore();

  if (briques.length === 0) {
    alert("Vous avez gagné le jeu, félicitations !");
    location.reload();
    return;
  }

  requestAnimationFrame(actualiser);
}

function dessinerScore() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.fillText(`Points : ${score}`, 5, 5);
}

function obtenirCollision(deplacement, velocite, obstacle, dt) {
  const largeur = deplacement.right - deplacement.left;
  const hauteur = deplacement.bottom - deplacement.top;
  const deplacementPos = { x: deplacement.left, y: deplacement.top };
  const gauche = obstacle.left - largeur;
  const droite = obstacle.right;
  const haut = obstacle.top - hauteur;
  const bas = obstacle.bottom;
  const touche = { temps: dt, x: null, y: null };

  function verifierFace(axe, coordonne, min, max, direction) {
    if (velocite[axe] * direction <= 0) {
      return;
    }
    const temps = (coordonne - deplacementPos[axe]) / velocite[axe];
    if (temps < 0 || temps > touche.temps) {
      return;
    }
    const autreAxe = axe === "x" ? "y" : "x";
    const autrePosition = deplacementPos[autreAxe] + velocite[autreAxe] * temps;
    if (autrePosition < min || autrePosition > max) {
      return;
    }
    if (temps < touche.temps) {
      touche.x = null;
      touche.y = null;
    }
    touche.temps = temps;
    touche[axe] = coordonne;
  }

  verifierFace("x", gauche, haut, bas, 1);
  verifierFace("x", droite, haut, bas, -1);
  verifierFace("y", haut, gauche, droite, 1);
  verifierFace("y", bas, gauche, droite, -1);

  return touche.x === null && touche.y === null ? null : touche;
}

function deplacerBalle(dt) {
  while (dt > 0 && briques.length > 0) {
    // Évite de déclencher à plusieurs reprises l'accesseur
    const boiteDeCollisionBalle = balle.boiteDeCollision;
    let tempsTouche = dt;
    let toucheX = null;
    let toucheY = null;
    let contacts = [];

    for (const elementCollision of elementsCollision) {
      const touche = obtenirCollision(
        boiteDeCollisionBalle,
        balle.vel,
        elementCollision.boiteDeCollision,
        tempsTouche,
      );
      if (touche === null) {
        continue;
      }
      if (touche.temps < tempsTouche) {
        toucheX = null;
        toucheY = null;
        contacts = [];
      }
      tempsTouche = touche.temps;
      toucheX = touche.x ?? toucheX;
      toucheY = touche.y ?? toucheY;
      contacts.push({ elementCollision, touche });
    }

    balle.deplacer(tempsTouche);
    dt -= tempsTouche;

    const balleEstHorsLimites = balle.boiteDeCollision.bottom > canvas.height;
    if (balleEstHorsLimites) {
      // Logique de fin de partie
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

    balle.enCollision?.({ x: toucheX !== null, y: toucheY !== null });
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

Les défaites et les victoires sont toutes deux implémentées, ce qui signifie que le cœur de la jouabilité de notre jeu est terminé. Maintenant, ajoutons quelque chose en plus — nous donnons au·à la joueur·euse trois [vies](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives) au lieu d'une seule.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives")}}
