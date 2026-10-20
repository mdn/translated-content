---
title: "Window : propriété screenLeft"
short-title: screenLeft
slug: Web/API/Window/screenLeft
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

La propriété en lecture seule **`screenLeft`** de l'interface {{DOMxRef("Window")}} retourne la distance horizontale, en pixels CSS, entre le bord gauche de la fenêtre du navigateur de l'utilisateur·ice et le côté gauche de l'écran.

> [!NOTE]
> `screenLeft` est un alias de l'ancienne propriété {{DOMxRef("Window.screenX")}}. `screenLeft` était à l'origine pris en charge uniquement dans IE, mais a été introduit partout en raison de sa popularité.

## Valeur

Un nombre égal au nombre de pixels CSS entre le bord gauche de la fenêtre du navigateur et le bord gauche de l'écran.

## Exemples

Dans notre exemple [`screenLeft`/`screenTop` <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/screenleft-screentop/), vous voyez un canevas sur lequel un cercle a été dessiné. Dans cet exemple, nous utilisons `screenLeft`/`screenTop` plus {{DOMxRef("Window.requestAnimationFrame()")}} pour redessiner constamment le cercle à la même position physique sur l'écran, même si la position de la fenêtre est déplacée.

Cet exemple compense les changements de position de la fenêtre du navigateur, mais pas les changements de position de la zone d'affichage à l'intérieur de la fenêtre. Afficher ou masquer une barre d'outils ou une barre latérale peut donc déplacer le cercle à l'écran.

```js
let gaucheInitial = window.screenLeft + canvasElem.offsetLeft;
let hautInitial = window.screenTop + canvasElem.offsetTop;

function positionElement() {
  let nouvelleGauche = window.screenLeft + canvasElem.offsetLeft;
  let nouveauHaut = window.screenTop + canvasElem.offsetTop;

  let gaucheActualisee = gaucheInitial - nouvelleGauche;
  let hautActualise = hautInitial - nouveauHaut;

  ctx.fillStyle = "rgb(0 0 0)";
  ctx.fillRect(0, 0, largeur, hauteur);
  ctx.fillStyle = "rgb(0 0 255)";
  ctx.beginPath();
  ctx.arc(
    gaucheActualisee + largeur / 2,
    hautActualise + hauteur / 2 + 35,
    50,
    degToRad(0),
    degToRad(360),
    false,
  );
  ctx.fill();

  pElem.textContent = `Window.screenLeft : ${window.screenLeft}, Window.screenTop : ${window.screenTop}`;

  window.requestAnimationFrame(positionElement);
}

window.requestAnimationFrame(positionElement);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.screenTop")}}
- La propriété {{DOMxRef("window.screenX")}}
