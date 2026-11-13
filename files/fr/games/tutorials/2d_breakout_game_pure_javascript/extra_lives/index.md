---
title: Vie supplémentaire
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Extra_lives
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens")}}

C'est la **8<sup>e</sup> étape** sur 11 du [tutoriel sur la création d'un jeu de casse-briques en utilisant uniquement JavaScript](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Dans cet article, nous allons mettre en œuvre un système de vies, afin que le·la joueur·euse puisse continuer à jouer jusqu'à ce qu'il perde trois vies, et pas seulement une, ce qui rend le jeu plus agréable pendant plus longtemps.

## Nouvelles variables

Ajoutons deux nouvelles variables sous `let score = 0;` pour stocker le nombre de vies et si le message de vie perdue doit être affiché&nbsp;:

```js
let vies = 3;
let afficherTexteViesPerdues = false;
```

## Dessiner les étiquettes de texte

Le dessin des textes ressemble à ce que nous avons déjà fait dans la leçon [Suivre le score et gagner](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win). Remplacez `dessinerScore()` par une fonction `dessinerStatut()` qui dessine le score, les vies restantes et un message lorsque le·la joueur·euse perd une vie&nbsp;:

```js
function dessinerStatut() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`Points : ${score}`, 5, 5);

  ctx.textAlign = "right";
  ctx.fillText(`Vies : ${vies}`, canvas.width - 5, 5);

  if (afficherTexteViesPerdues) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Vie perdue, cliquez pour continuer",
      canvas.width / 2,
      canvas.height / 2,
    );
  }
}
```

Les trois étiquettes partagent la même police et la même couleur. Nous utilisons `textAlign` et `textBaseline` pour positionner le score en haut à gauche, les vies en haut à droite et le message de vie perdue au centre (si `afficherTexteViesPerdues` est `true`).

Dans `actualiser()`, remplacez l'appel à `dessinerScore()` par `dessinerStatut()`.

## Le code de gestion des vies

Pour implémenter les vies dans notre jeu, commençons par changer le comportement lorsque la balle sort des limites. Au lieu de redémarrer immédiatement&nbsp;:

```js
if (balleEstHorsLimites) {
  // Logique de fin de partie
  location.reload();
  return;
}
```

Nous appelons une nouvelle fonction nommée `balleSortirEcran()`&nbsp;; supprimez les lignes précédentes (montrées ci-dessus) et remplacez-les par la ligne suivante&nbsp;:

```js
if (balleEstHorsLimites) {
  balleSortirEcran();
  return;
}
```

Le `return` arrête le traitement du mouvement et des collisions restants pour cette image après que la balle quitte l'écran.

Nous voulons diminuer le nombre de vies chaque fois que la balle quitte le canevas. Ajoutez la fonction `balleSortirEcran()` à votre code&nbsp;:

```js
function balleSortirEcran() {
  vies--;
  if (vies === 0) {
    // Logique de fin de partie
    location.reload();
    return;
  }

  raquette.pos.x = canvas.width / 2;
  balle.pos.x = raquette.pos.x;
  balle.pos.y = raquette.hitbox.top - balle.taille.h / 2;
  balle.vel = { x: 0, y: 0 };
  afficherTexteViesPerdues = true;
  canvas.addEventListener(
    "pointerdown",
    () => {
      afficherTexteViesPerdues = false;
      balle.vel = { x: 150, y: -150 };
      derniereChronologie = null;
    },
    { once: true },
  );
}
```

Au lieu d'afficher instantanément l'alerte lorsque vous perdez une vie, nous soustrayons d'abord une vie du nombre actuel et vérifions si c'est une valeur non nulle. Si oui, alors le·la joueur·euse a encore des vies et peut continuer à jouer — il voit le message de vie perdue, les positions de la balle et de la raquette sont réinitialisées à l'écran, et lors de la prochaine entrée (clic ou toucher) le message est masqué et la balle recommence à bouger.

Lorsque le nombre de vies disponibles atteint zéro, la partie est terminée et le message d'alerte de fin de partie est affiché.

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
let vies = 3;
let afficherTexteViesPerdues = false;

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

class ObjectJeu {
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
    if (!ObjectJeu.assets.has(this.url)) {
      const asset = new Image();
      asset.src = this.url;
      ObjectJeu.assets.set(
        this.url,
        asset.decode().then(() => asset),
      );
    }
    this.asset = await ObjectJeu.assets.get(this.url);
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

class Balle extends ObjectJeu {
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

class Raquette extends ObjectJeu {
  origin = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}

class Brique extends ObjectJeu {
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
  dessinerStatut();

  if (briques.length === 0) {
    alert("Vous avez gagné le jeu, félicitations !");
    location.reload();
    return;
  }

  requestAnimationFrame(actualiser);
}

function dessinerStatut() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0095dd";
  ctx.textBaseline = "top";
  ctx.textAlign = "left";
  ctx.fillText(`Points: ${score}`, 5, 5);

  ctx.textAlign = "right";
  ctx.fillText(`Vies : ${vies}`, canvas.width - 5, 5);

  if (afficherTexteViesPerdues) {
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Vie perdue, cliquez pour continuer",
      canvas.width / 2,
      canvas.height / 2,
    );
  }
}

function balleSortieEcran() {
  vies--;
  if (vies === 0) {
    // Logique de fin de partie
    location.reload();
    return;
  }

  raquette.pos.x = canvas.width / 2;
  balle.pos.x = raquette.pos.x;
  balle.pos.y = raquette.boiteDeCollision.top - balle.taille.h / 2;
  balle.vel = { x: 0, y: 0 };
  afficherTexteViesPerdues = true;
  canvas.addEventListener(
    "pointerdown",
    () => {
      afficherTexteViesPerdues = false;
      balle.vel = { x: 150, y: -150 };
      derniereChronologie = null;
    },
    { once: true },
  );
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

  function verifierFace(axe, coordonnee, min, max, direction) {
    if (velocite[axe] * direction <= 0) {
      return;
    }
    const temps = (coordonnee - deplacementPos[axe]) / velocite[axe];
    if (temps < 0 || temps > touche.temps) {
      return;
    }
    const autresAxes = axe === "x" ? "y" : "x";
    const autrePosition =
      deplacementPos[autresAxes] + velocite[autresAxes] * temps;
    if (autrePosition < min || autrePosition > max) {
      return;
    }
    if (temps < touche.temps) {
      touche.x = null;
      touche.y = null;
    }
    touche.temps = temps;
    touche[axe] = coordonnee;
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
    const boiteCollisionBalle = balle.boiteDeCollision;
    let tempsTouche = dt;
    let toucheX = null;
    let toucheY = null;
    let contacts = [];

    for (const elementCollision of elementsCollision) {
      const touche = obtenirCollision(
        boiteCollisionBalle,
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

    const balleEstHorsEcran = balle.boiteDeCollision.bottom > canvas.height;
    if (balleEstHorsEcran) {
      balleQuitteEcran();
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

Les vies rendent le jeu plus indulgent — si vous perdez une vie, il vous en reste encore deux et vous pouvez continuer à jouer. Maintenant, développons l'apparence et la sensation du jeu en ajoutant [des animations et des interpolations](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Animations_and_tweens")}}
