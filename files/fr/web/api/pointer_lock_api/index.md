---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
tags:
  - API
  - Avancé
  - Jeux
  - Reference
  - mouse lock
  - pointer lock
translation_of: Web/API/Pointer_Lock_API
original_slug: WebAPI/Pointer_Lock
---
{{DefaultAPISidebar("Pointer Lock API")}}

**Pointer lock** (en français _Verrouillage du pointeur_, précedement appelé mouse lock) permet d'obtenir des informations sur le déplacement de la souris à travers le temps, et ne se cantonne pas à fournir la position absolue du curseur sur l'écran. Cette interface donne accès aux données brutes de la souris, permet de verrouiller la cible des évènements à un élément unique, limiter jusqu'où le mouvement de la souris peut aller dans une direction donnée et cacher le curseur de la vue.

Cette API est utile pour les applications qui ont besoin d'écouter la souris pour contrôler des mouvements ou faire pivoter des objets sur leurs axes. Les jeux 3D de type FPS (First Person Shooter), les outils de modelisation, les vidéos immersives ou encore les cartes satellites sont autant de candidats idéals. L'utilisateur peut en effet changer l'angle de vue en bougeant simplement sa souris et sans cliquer sur aucun bouton ce qui les laisse donc disponibles pour effectuer d'autres actions.

Comme Pointer lock continue de déclencher des évènements même quand le curseur est en dehors des limites du navigateur ou de l'écran, les joueurs peuvent cliquer sur les boutons et déplacer le curseur de la souris sans se soucier de quitter la zone de jeu et de cliquer accidentellement sur une autre application qui changerait le focus de la souris en dehors du jeu.

## Concepts de base

Pointer Lock partage des similtudes avec la [capture de souris](/fr/docs/Web/API/Element/setCapture). La capture de souris offre un flot ininterrompu d'évènements sur un élément cible quand la souris glisse mais s'arrête quand le bouton est relaché. Pour cette raison, Pointer lock diffère de la capture de souris sur les points suivants :

- Persistance. Pointer lock ne libère pas la souris tant qu'un appel explicite à l'API n'a pas été effectué ou que l'utilisateur n'a pas fait un mouvement spécifique.
- Ne se limite pas aux bordures du navigateur ou de l'écran.
- Continue de déclencher des évènements peu importe l'état des boutons de la souris.
- Cache le curseur.

## Vue d'ensemble des méthodes/propriétées

Cette section fournit une brève description de chaque propriété et méthode associée à la spécification de Pointer Lock.

### requestPointerLock()

L'API Pointer lock, de manière similaire à l'[API Fullscreen](/fr/docs/Web/Guide/DOM/Using_full_screen_mode), étend les les éléments DOM en ajoutant une nouvelle méthode, {{domxref("Element.requestPointerLock","requestPointerLock()")}}. Comme le préfixe fournisseur a récemment été retiré, vous devriez utiliser la syntaxe ci-dessous, par exemple pour demander un verrouillage deu pointeur sur un élément `canvas`:

```js
canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock ||
                            canvas.webkitPointerLockElement;

canvas.requestPointerLock()
```

### pointerLockElement et exitPointerLock()

L'API Pointer Lock étend également l'interface {{domxref("Document")}}, ajoutant à la fois une nouvelle propriété et une nouvelle méthode. La propriété {{domxref("Document.pointerLockElement","pointerLockElement")}}  est utilisée pour accéder à l'élément actuellement verrouillé (s'il y en a). La méthode {{domxref("Document.exitPointerLock","exitPointerLock()")}}  est utilisée pour libérer le verrou du pointeur.

La propriété {{domxref("Document.pointerLockElement","pointerLockElement")}}  est utile pour déterminer si un élément est actuellement verrouillé (pour une vérification booléenne par exemple) et également pour obtenir une référence vers l'élément s'il existe.

Voici un exemple d'utilisation de `pointerLockElement`:

```js
document.pointerLockElement = document.pointerLockElement    ||
                              document.mozPointerLockElement ||
                              document.webkitPointerLockElement;

// 1) Utiliser une vérification booléenne--le pointeur est-il verrouillé?
if (!!document.pointerLockElement) {
  // pointeur verrouillé
} else {
  // pointeur non verrouillé
}

// 2) Accéder à l'élément verrouillé
if (document.pointerLockElement === someElement) {
  // someElement est l'élément sur lequel le pointeur est verrouillé
}
```

La méthode {{domxref("Document.exitPointerLock()")}} est utilisée pour libérer le verrouillage du pinteur, et, comme {{domxref("Element.requestPointerLock","requestPointerLock")}}, marche de manière asynchrone, on utilise les événements {{event("pointerlockchange")}} et {{event("pointerlockerror")}}, que vous verrez plus en détails ci-dessous.

```js
document.exitPointerLock = document.exitPointerLock    ||
                           document.mozExitPointerLock ||
                           document.webkitExitPointerLock;

// Essaie de déverrouiller
document.exitPointerLock();
```

## Événement pointerlockchange

Quand l'état de verrouillage du pointeur change — par exemple quand on appelle {{domxref("Element.requestPointerLock","requestPointerLock()")}}, {{domxref("Document.exitPointerLock","exitPointerLock()")}}, que l'utilisateur presse la touche ECHAP, etc.—l'événement {{event("pointerlockchange")}} est envoyé au `document`. C'est un simple événement qui ne contient pas de données supplémentaires.

```js
document.pointerLockElement = document.pointerLockElement    ||
                              document.mozPointerLockElement ||
                              document.webkitPointerLockElement;

function pointerLockChange() {
  if (!!document.pointerLockElement) {
    console.log("Verrouillé.");
  } else {
    console.log("Non verrouillé.");
  }
}

document.addEventListener('pointerlockchange', pointerLockChange, false);
document.addEventListener('mozpointerlockchange', pointerLockChange, false);
document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
```

## Événement pointerlockerror

Quand une erreur est causée par l'appel de {{domxref("Element.requestPointerLock","requestPointerLock()")}} ou {{domxref("Document.exitPointerLock","exitPointerLock()")}}, l'événement {{event("pointerlockerror")}} est envoyé au `document`. C'est un simple événement qui ne contient pas de données supplémentaires.

```js
document.addEventListener('pointerlockerror', lockError, false);
document.addEventListener('mozpointerlockerror', lockError, false);
document.addEventListener('webkitpointerlockerror', pointerLockChange, false);

function lockError(e) {
  alert("Pointer lock failed");
}
```

> **Note :** Jusqu'à Firefox 50, les événements ci-dessus étaient préfixés avec `moz`.

## Extensions aux événements de souris

L'API Pointer lock étend l'interface {{domxref("MouseEvent")}} normale avec les attributs de mouvement. Deux nouveaux attributs sont ajoutés aux événements de souris —{{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}}— fournissant le changement de position de la souris. Ces paramètres ont pour valeur les différences entre les valeurs des propriétés de {{domxref("MouseEvent.screenX","screenX")}} / {{domxref("MouseEvent.screenY","screenY")}} stockées dans les événements {{event("mousemove")}}, `eNow` et `ePrevious`. En d'autres termes, `movementX = eNow.screenX - ePrevious.screenX`.

### État verrouillé

Quand le verrouillage du pointeur est activé, les propriétés standard {{domxref("MouseEvent.clientX","clientX")}}, {{domxref("MouseEvent.clientY","clientY")}}, {{domxref("MouseEvent.screenX","screenX")}}, et {{domxref("MouseEvent.screenY","screenY")}} sont gardées constantes, comme si la souris ne bougeait pas. Les propriétés {{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}} continuent de fournir le changement de position de la souris. Il n'y a pas de limite aux valeurs {{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}}, si la souris continue de bouger toujours dans la même direction. Le curseur de la souris n'existe pas et il ne peut pas sortir de la fenêtre ou être bloqué par un bord de l'écran.

### État déverrouillé

Les paramètres {{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}} sont disponibles quel que soit l'état de la souris, verrou ou non.

Quand la souris est déverrouillée, il est possible que le curseur soit en dehors de la fenêtre et il est alors remis automatiquement à l'intérieur. Si cela arrive, {{domxref("MouseEvent.movementX","movementX")}} et {{domxref("MouseEvent.movementY","movementY")}} sont définis à zéro.

## Simple exemple pas à pas

Nous avons écrit une [démo de verrouillage de pointer](https://mdn.github.io/dom-examples/pointer-lock/) pour vous montrer comment l'utiliser pour mettre en place un système de contrôle simple ([voir le code source](https://github.com/mdn/dom-examples/tree/master/pointer-lock)). La démo ressemble à ça:

![Un cercle rouge sur un arrière-plan noir.](pointer-lock.png)

Cette démo utilise JavaScript pour dessiner une balle dans un élément {{ htmlelement("canvas") }}. Quand vous cliquez sur le canvas, le verrouillage du pointeur est utilisé pour supprimer le curseur de la souris à l'écran et vous permettre de déplacer la balle avec la souris. Voyons comment cela fonctionne.

On définit les positions initiales x et y sur le canvas:

```js
var x = 50;
var y = 50;
```

Les méthodes de verrouillage de pointeur sont préfixées dans les anciennes versions des navigateurs, on prend donc en compte les différentes implémentations des navigateurs:

```js
canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock ||
                            canvas.webkitRequestPointerLock;

document.exitPointerLock = document.exitPointerLock ||
                           document.mozExitPointerLock ||
                           document.webkitExitPointerLock;
```

Maintenant, on définit un gestionnaire d'événement qui appelle la méthode `requestPointerLock()` quand le canvas est cliqué, ce qui déclenche le verrouillage du pointeur.

```js
canvas.onclick = function() {
  canvas.requestPointerLock();
}
```

Et maintenant le gestionnaire d'événement pour le verrouillage: `pointerlockchange`. Quand cet événement se déclenche, on appelle `lockChangeAlert()` pour gérer le changement.

```js
// Gestionnaire d'événement de changement d'état du verrouilllage pour les différents navigateurs
document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
document.addEventListener('webkitpointerlockchange', lockChangeAlert, false);
```

La fonction suivante vérifie si la propriété `pointLockElement` est sur notre canvas. Si c'est le cas, on attache un gestionnaire d'événement pour gérer les mouvements de la souris avec la fonction `updatePosition()`. Sinon, elle enlève le gestionnaire d'événement.

```js
function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log('The pointer lock status is now locked');
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log('The pointer lock status is now unlocked');
    document.removeEventListener("mousemove", updatePosition, false);
  }
}
```

La fonction `updatePosition()` met à jour la position de la balle sur le canvas (les valeurs `x` et `y`), et inclut également des instructions `if()` pour vérifier si la balle est sortie des bords du canvas. Dans ce cas, la balle se ressort au bord opposé. Elle vérifie également si un appel à [`requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame) a été effectué et si ce n'est pas le cas, l'appelle pour qu'elle déclenche la fonction `canvasDraw()` et mette à jour le canvas. Un tracker est mis en place pour afficher les valeurs X et Y à l'écran, pour référence.

```js
var tracker = document.getElementById('tracker');

var animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (x > canvas.width + RADIUS) {
    x = -RADIUS;
  }
  if (y > canvas.height + RADIUS) {
    y = -RADIUS;
  }
  if (x < -RADIUS) {
    x = canvas.width + RADIUS;
  }
  if (y < -RADIUS) {
    y = canvas.height + RADIUS;
  }
  tracker.textContent = "X position: " + x + ", Y position: " + y;

  if (!animation) {
    animation = requestAnimationFrame(function() {
      animation = null;
      canvasDraw();
    });
  }
}
```

La fonction `canvasDraw()` affiche la balle aux position `x` et `y` en cours:

```js
function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f00";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}
```

## iframe limitations

Le verrouilage du pointeur ne peut concerner qu'une seule iframe à la fois. Quand vous verrouillez une iframe, vous ne pouvez pas essayer de verrouiller une autre iframe et y transférer la cible; une erreur sera levée. Pour éviter cette limitation, déverrouillez d'abord la première iframe, puis verrouillez la seconde.

Tandis que cela fonctionne pour les iframes par défaut, les iframes en "sandbox" bloquent le verrouillage. La possibilité d'éviter cette limitation, sous la forme de la combinaison attribut/valeur `<iframe sandbox="allow-pointer-lock">`, devrait bientôt apparaître dans Chrome.

## Spécifications

| Specification                        | Etat                             | Commentaire            |
| ------------------------------------ | -------------------------------- | ---------------------- |
| {{SpecName('Pointer Lock')}} | {{Spec2('Pointer Lock')}} | Initial specification. |

## Compatibilité navigateur

### `Element.requestPointerLock`

{{Compat("api.Element.requestPointerLock")}}

## Voir aussi

- {{domxref("MouseEvent")}}
