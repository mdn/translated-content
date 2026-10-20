---
title: "Window : propriété screenX"
short-title: screenX
slug: Web/API/Window/screenX
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

La propriété en lecture seule **`screenX`** de l'interface {{DOMxRef("Window")}} retourne la distance horizontale, en pixels CSS, entre le bord gauche de la fenêtre du navigateur de l'utilisateur·ice et le côté gauche de l'écran.

> [!NOTE]
> {{DOMxRef("Window.screenLeft")}} est un alias de l'ancienne propriété `screenX`. `screenLeft` était à l'origine pris en charge uniquement dans IE, mais a été introduit partout en raison de sa popularité.

## Valeur

Un nombre égal au nombre de pixels CSS entre le bord gauche de la fenêtre du navigateur et le bord gauche de l'écran.

## Exemples

Dans notre exemple [`screenLeft`/`screenTop` <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/screenleft-screentop/), vous voyez un canevas sur lequel un cercle a été dessiné. Dans cet exemple, nous utilisons {{DOMxRef("Window.screenLeft")}}/{{DOMxRef("Window.screenTop")}} ainsi que {{DOMxRef("Window.requestAnimationFrame()")}} pour redessiner constamment le cercle à la même position physique sur l'écran, même si la position de la fenêtre est déplacée.

Voir {{DOMxRef("Window.screenLeft")}} pour plus d'informations.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.screenLeft")}}
- La propriété {{DOMxRef("window.screenY")}}
