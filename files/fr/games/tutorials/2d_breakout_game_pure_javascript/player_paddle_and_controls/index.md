---
title: Raquette du joueur et contrôles
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over")}}

C'est la **4<sup>e</sup> étape** sur 11 du [tutoriel de création d'un jeu de casse-briques en utilisant uniquement JavaScript](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Nous avons la balle qui se déplace et rebondit sur les murs, mais cela devient rapidement ennuyeux&nbsp;: il n'y a pas d'interactivité&nbsp;! Nous avons besoin d'un moyen d'introduire la jouabilité, donc dans cet article, nous allons créer une raquette pour se déplacer et frapper la balle.

## Afficher la raquette

La balle et la raquette ont toutes deux besoin d'une image, d'une position, d'une taille, d'une boîte de collision et d'une logique de dessin. Nous pouvons partager ces éléments avec une classe de base `ObjetJeu`. Remplacez la classe `Balle` existante par les deux classes suivantes&nbsp;:

```js
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
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
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
```

La propriété `origine` définit quel point de l'image est placé à `pos`, en tant que fraction de sa largeur et de sa hauteur. La valeur par défaut `(0.5, 0.5)` place le centre à cet endroit. La classe de base définit également une méthode `enCollision()` vide pour s'assurer que tous les objets en ont une. Si un objet ne réagit pas aux collisions — comme la raquette — il peut hériter de cette méthode par défaut.

`Balle` hérite du constructeur, de `precharger()`, de `boiteDeCollision` et de `dessiner()` de `ObjetJeu`. Elle ajoute sa position initiale, sa vélocité, `deplacer()` et la réponse `enCollision()` de la leçon précédente.

Ajoutez maintenant une classe `Raquette` sous `Balle`&nbsp;:

```js
class Raquette extends ObjetJeu {
  origine = { x: 0.5, y: 1 };
  constructor(url, ctx) {
    super(url, ctx);
    this.pos = { x: ctx.canvas.width / 2, y: ctx.canvas.height - 5 };
  }
}
```

L'appel de `super(url, ctx)` exécute le constructeur partagé pour configurer l'image de la raquette et le contexte de dessin. La raquette définit ensuite sa position initiale. Nous pouvons utiliser les valeurs `canvas.width` et `canvas.height` pour positionner la raquette exactement là où nous le voulons&nbsp;: `canvas.width / 2` est exactement au milieu de l'écran. Dans notre cas, le monde est le même que le canevas, mais pour d'autres types de jeux, comme les jeux à défilement latéral, le monde est plus grand, et vous pouvez y bricoler pour créer des effets intéressants.

> [!NOTE]
> Avec `origine.y` défini sur `1`, nous soustrayons `this.taille.h` au lieu de `this.taille.h / 2` lors du dessin de la raquette et du calcul de son bord supérieur. Cela signifie que `raquette.pos.y` représente la position y du _bord inférieur_ de la raquette au lieu de son centre. Cela nous permet de contrôler plus facilement la position de la raquette par rapport au bord inférieur du canevas.

Récupérez le [graphique de la raquette](https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png) et enregistrez-le dans votre dossier `/img`. Créez la raquette juste après la balle&nbsp;:

```js
const raquette = new Raquette("img/paddle.png", ctx);
```

Ajoutez également `raquette` au tableau à l'intérieur de `Promise.all()`&nbsp;:

```js
Promise.all([balle, raquette].map((obj) => obj.precharger())).then(() =>
  requestAnimationFrame(actualiser),
);
```

Ajoutez ce qui suit après l'appel existant à `balle.dessiner()`&nbsp;:

```js
raquette.dessiner();
```

La raquette est maintenant positionnée exactement là où nous le voulons. Maintenant, pour que la balle rebondisse sur la raquette, nous devons implémenter la physique des collisions entre elles.

## Ajouter la physique

> [!NOTE]
> Nous allons plus vite ici que dans le reste du tutoriel, car cette partie est exactement ce qu'un cadriciel comme [Phaser](/fr/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls) fait pour nous. En général, vous n'implémentez pas la physique et vous avez juste besoin d'enregistrer la raquette comme un élément de collision.

Contrairement aux murs, la raquette est un rectangle fini, donc elle peut être touchée par les quatre bords (ou même sur le coin) et — dans très rare cas, si la balle est assez rapide — peut même être traversée. Au lieu de vérifier le chevauchement après avoir déplacé la balle, nous allons implémenter la _détection continue des collisions_, qui calcule le premier instant où elle entre en contact avec la surface entre les images, afin de ne jamais perdre d'information sur quelle surface est touchée en premier.

Nous allons mettre le calcul des collisions dans une fonction réutilisable afin de pouvoir l'utiliser pour la raquette et, plus tard, les briques. Elle prend une boîte de collision `deplacement` et une boîte de collision `obstacle` et nous dit si l'objet `deplacement` est censé entrer en collision avec `obstacle` dans `dt`, et si c'est le cas, quand et où.

Au lieu de calculer la position des quatre côtés de l'objet `deplacement` un par un, comme nous l'avons fait avec `gererCollisionsMur`, nous pouvons réduire l'objet `deplacement` à un seul point — son coin supérieur gauche — en étendant la région de l'obstacle d'une largeur et d'une hauteur de l'objet `deplacement`.

![Un rectangle se déplace en diagonale jusqu'à ce que son bord inférieur touche un obstacle. Son coin supérieur gauche atteint l'obstacle élargi au même instant.](continuous-collision-detection.svg)

```js
function obtenirCollision(deplacement, velocite, obstacle, dt) {
  const largeur = deplacement.right - deplacement.left;
  const hauteur = deplacement.bottom - deplacement.top;
  const deplacementPos = { x: deplacement.left, y: deplacement.top };
  const gauche = obstacle.left - largeur;
  const droite = obstacle.right;
  const haut = obstacle.top - hauteur;
  const bas = obstacle.bottom;
  const touche = { temps: dt, x: null, y: null };

  function verifierFace(axe, direction, coordonne, min, max) {
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

  verifierFace("x", 1, gauche, haut, bas);
  verifierFace("x", -1, droite, haut, bas);
  verifierFace("y", 1, haut, gauche, droite);
  verifierFace("y", -1, bas, gauche, droite);

  return touche.x === null && touche.y === null ? null : touche;
}
```

Le gros de la logique se trouve à l'intérieur de la fonction imbriquée `verifierFace()`. Elle prend les paramètres `axe`, `direction` et `coordonne`, qui représentent l'une des quatre faces de l'obstacle, comme un vecteur normal entrant. Par exemple, `"x", 1, gauche` représente le bord gauche, car un vecteur dans la direction positive de x est perpendiculaire à la surface et pointant vers l'intérieur de l'objet.

Pour une surface verticale, le temps de contact est la distance horizontale divisée par la vitesse horizontale. Nous calculons ensuite la position verticale de la balle à ce moment pour vérifier si elle touche la surface ou passe au-dessus ou en dessous (et donc qu'il n'y a pas de collision réelle). Les surfaces horizontales fonctionnent de la même manière, avec les axes échangés. La fonction `verifierFace()` conserve le premier contact dans `dt`.

Le résultat de `obtenirCollision()` est `null` s'il n'y a pas de contact&nbsp;; sinon, il contient le temps de contact et la coordonnée en haut à gauche à utiliser sur chaque axe en collision. Par exemple, toucher une face verticale donne une coordonnée `x`, tandis que `y` reste `null`. Lors d'un impact exact sur un coin, les deux coordonnées sont définies.

Il ne nous reste plus qu'à appeler `obtenirCollision()` entre la balle et tout ce avec quoi elle peut entrer en collision. Nous pouvons même implémenter les murs comme des obstacles normaux afin de ne pas avoir besoin d'un ensemble de logique séparé. La liste `elementsCollision` contient une liste d'objets avec une propriété `boiteDeCollision`, de sorte qu'à chaque fois que nous appelons `obtenirCollision()`, nous pouvons récupérer la dernière valeur de `boiteDeCollision` en déclenchant l'accesseur sur `ObjetJeu`, au lieu de stocker un instantané de lorsque l'objet a été ajouté pour la première fois à la liste.

```js
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
  { boiteDeCollision: { ...collisionMurBase, top: canvas.height } },
];
```

Immédiatement après avoir créé la raquette, enregistrez également la `raquette`&nbsp;:

```js
elementsCollision.push(raquette);
```

Ensuite, remplacez l'ancienne fonction `gererCollisionsMur()` par la fonction `deplacerBalle()`. Elle coordonne la gestion des collisions, appelant à plusieurs reprises `obtenirCollision()` et avançant la balle jusqu'à ce que le `dt` défini soit écoulé. À chaque fois, elle trouve le(s) prochain(s) obstacle(s) avec lequel la balle entre en collision (`touche.temps` est le plus petit), déplace la balle jusqu'au point de contact, appelle les réponses aux collisions et poursuit avec le temps restant.

```js
function deplacerBalle(dt) {
  while (dt > 0) {
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

    if (contacts.length === 0) {
      break;
    }
    // Attache la position au point de contact pour éviter les erreurs d'arrondi
    if (toucheX !== null) {
      balle.pos.x = toucheX + balle.size.w / 2;
    }
    if (toucheY !== null) {
      balle.pos.y = toucheY + balle.size.h / 2;
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

> [!NOTE]
> Cette boucle peut potentiellement traiter de nombreuses collisions en une seule image, ce qui peut provoquer un ralentissement. Les gens limitent parfois le nombre de collisions autorisées par image et ignorent le `dt` restant une fois cette limite atteinte, ce qui permet de repeindre le jeu plus rapidement mais fait que l'objet se déplace plus lentement.

À l'intérieur de `actualiser()`, remplacez les appels à `balle.deplacer()` et `gererCollisionsMur()` par un appel à `deplacerBalle()`&nbsp;:

```js
const dt =
  derniereChronologie === null ? 0 : (chronologie - derniereChronologie) / 1000;
derniereChronologie = chronologie;
deplacerBalle(dt);
```

Ce calcul suppose que la balle commence à l'intérieur du canevas sans chevaucher aucun élément de collision, et que les colliders restent immobiles pendant chaque appel à `deplacerBalle()`.

## Contrôler la raquette

Le problème suivant est que nous ne pouvons pas déplacer la raquette. Pour résoudre ce problème, nous pouvons utiliser l'entrée du pointeur du système (souris ou tactile, selon la plateforme) et définir la position de la raquette à l'endroit où se trouve le pointeur.

```js
canvas.addEventListener("pointermove", (event) => {
  if (raquette.size.w === undefined) {
    return;
  }
  const limites = canvas.getBoundingClientRect();
  const x = ((event.clientX - limites.left) * canvas.width) / limites.width;
  raquette.pos.x = Math.max(
    raquette.size.w / 2,
    Math.min(canvas.width - raquette.size.w / 2, x),
  );
});
```

Le `clientX` du pointeur est mesuré par rapport à la fenêtre d'affichage. Nous soustrayons le bord gauche du canevas et mettons à l'échelle le résultat dans les coordonnées de dessin du canevas, car le CSS peut afficher le canevas à une taille différente. Nous mettons ensuite à jour `raquette.pos.x`, en gardant toute la raquette à l'intérieur du canevas. Jusqu'à ce que le pointeur se déplace, la raquette reste à la position centrale définie par son constructeur. La vérification de la taille ignore les entrées avant que l'image de la raquette ne soit chargée.

Pour permettre le glissement tactile sans faire défiler la page, ajoutez cette déclaration à la règle CSS du canevas&nbsp;:

```css
canvas {
  /* … */
  touch-action: none;
}
```

Si vous ne l'avez pas déjà fait, rechargez votre `index.html` et essayez-le&nbsp;!

## Positionner la balle

La raquette fonctionne comme prévu, alors positionnons la balle dessus. Après le chargement des deux ressources, nous pouvons utiliser leurs boîtes de collision et dimensions pour placer le bord inférieur de la balle au niveau du bord supérieur de la raquette. Actualisez la classe `Balle`&nbsp;:

```js
class Balle extends ObjetJeu {
  pos = { x: undefined, y: undefined };
  vel = { x: 150, y: -150 };
  // …
}
```

La vitesse horizontale reste la même. Nous changeons la vitesse verticale de `150` à `-150` afin que la balle commence par monter au lieu de descendre. Nous ne pouvons pas connaître la position à l'avance, car nous devons la placer sur la raquette, ce qui nécessite de charger d'abord la raquette. Remplacez le bloc `Promise.all()` existant par le suivant&nbsp;:

```js
Promise.all([balle, raquette].map((obj) => obj.precharger())).then(() => {
  balle.pos.x = raquette.pos.x;
  balle.pos.y = raquette.boiteDeCollision.top - balle.taille.h / 2;
  requestAnimationFrame(actualiser);
});
```

Désormais, la balle commence juste au milieu de la raquette.

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
  { boiteDeCollision: { ...collisionMurBase, top: canvas.height } },
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

const balle = new Balle(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/ball.png",
  ctx,
);
const raquette = new Raquette(
  "https://mdn.github.io/shared-assets/images/examples/2D_breakout_game_Phaser/paddle.png",
  ctx,
);
elementsCollision.push(raquette);

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
    // Éviter de déclencher à plusieurs reprises l'accesseur
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

Nous pouvons déplacer la raquette et faire rebondir la balle dessus, mais à quoi cela sert-il si la balle rebondit de toute façon sur le bord inférieur de l'écran&nbsp;? Introduisons la possibilité de perdre—également connue sous le nom de logique de [fin de partie](/fr/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over")}}
