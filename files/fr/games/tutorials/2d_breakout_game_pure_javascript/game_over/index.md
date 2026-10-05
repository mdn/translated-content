---
title: Fin de partie
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field")}}

C'est la **<sup>5<sup>e</sup> étape** sur 11 du [tutoriel sur la création d'un jeu de casse-briques en utilisant uniquement JavaScript](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Pour rendre le jeu plus intéressant, nous pouvons introduire la possibilité de perdre — si vous ne frappez pas la balle avant qu'elle n'atteigne le bord inférieur de l'écran, c'est la fin de la partie.

## Comment perdre

Pour introduire la possibilité de perdre, nous allons désactiver la collision de la balle avec le bord inférieur de l'écran. Supprimez la dernière entrée, `{ boiteDeCollision: { ...collisionMurBase, top: canvas.height } }`, de la liste `elementsCollision`.

Cela fait que les trois murs (haut, gauche et droit) renvoient la balle, mais le quatrième (bas) disparaît, laissant la balle tomber hors de l'écran si la raquette la manque. Nous avons besoin d'un moyen de détecter cela et d'agir en conséquence. Ajoutez les lignes suivantes à `deplacerBalle()`, juste après `dt -= tempsTouche`&nbsp;:

```js
const balleEstHorsLimites = balle.boiteDeCollision.bottom > canvas.height;
if (balleEstHorsLimites) {
  // Logique de fin de partie
  alert("Vous avez perdu !");
  location.reload();
  return;
}
```

L'ajout de ces lignes vérifie si la balle dépasse les limites du monde (dans notre cas, le canevas) et affiche ensuite une alerte. Lorsque vous cliquez sur l'alerte résultante, la page se recharge, vous permettant de rejouer.

> [!NOTE]
> L'expérience utilisateur·ice ici est assez médiocre, car {{DOMxRef("Window/alert", "alert()")}} affiche une boîte de dialogue système et bloque le jeu. Dans un vrai jeu, vous voulez probablement concevoir votre propre boîte de dialogue bloquante en utilisant {{HTMLElement("dialog")}}.
>
> De plus, nous ajoutons plus tard un [bouton «&nbsp;Démarrer&nbsp;»](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Buttons), mais ici notre jeu commence immédiatement lorsque la page se charge, donc vous pouvez «&nbsp;perdre&nbsp;» avant même de commencer à jouer. Pour éviter la boîte de dialogue ennuyeuse, nous supprimons l'appel à `alert()` à partir de maintenant.

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

const elementCollisions = [
  { boiteDeCollision: { ...collisionMurBase, right: 0 } },
  { boiteDeCollision: { ...collisionMurBase, left: canvas.width } },
  { boiteDeCollision: { ...collisionMurBase, bottom: 0 } },
];

class ObjetJeu {
  asset;
  ctx;
  taille = { w: undefined, h: undefined };
  pos = { x: 0, y: 0 };
  origine = { x: 0.5, y: 0.5 };
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
  move(dt) {
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

const balle = new Balle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const raquette = new Raquette(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
elementCollisions.push(raquette);

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

Promise.all([balle, raquette].map((obj) => obj.precharger())).then(() => {
  balle.pos.x = raquette.pos.x;
  balle.pos.y = raquette.boiteDeCollision.top - balle.taille.h / 2;
  requestAnimationFrame(actualiser);
});

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
  while (dt > 0) {
    // Évite de déclencher à plusieurs reprises l'accesseur
    const boiteDeCollisionBalle = balle.boiteDeCollision;
    let tempsTouche = dt;
    let toucheX = null;
    let toucheY = null;
    let contacts = [];

    for (const elementCollision of elementCollisions) {
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

    balle.move(tempsTouche);
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

    balle.enCollision({ x: toucheX !== null, y: toucheY !== null });
    for (const { elementCollision, touche } of contacts) {
      elementCollision.enCollision?.({
        x: touche.x !== null,
        y: touche.y !== null,
      });
    }
  }
}
```

{{EmbedLiveSample("Comparer votre code", "", 480,,,,, "allow-modals")}}

## Prochaines étapes

Maintenant que la jouabilité de base est en place, rendons le jeu plus intéressant en introduisant des briques à casser — il est temps de [construire le champ de briques](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field")}}
