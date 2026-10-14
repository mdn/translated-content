---
title: "Window : propriété screenY"
short-title: screenY
slug: Web/API/Window/screenY
l10n:
  sourceCommit: 6b9bb948a570848254e2023fda959cf86721f8e4
---

{{APIRef("CSSOM view API")}}

La propriété en lecture seule **`screenY`** de l'interface {{DOMxRef("Window")}} retourne la distance verticale, en pixels CSS, entre le bord supérieur de la fenêtre du navigateur de l'utilisateur·ice et le côté supérieur de l'écran.

> [!NOTE]
> {{DOMxRef("Window.screenTop")}} est un alias de l'ancienne propriété `screenY`. `screenTop` était à l'origine pris en charge uniquement dans IE, mais a été introduit partout en raison de sa popularité.

## Valeur

Un nombre égal au nombre de pixels CSS entre le bord supérieur de la fenêtre du navigateur et le bord supérieur de l'écran.

## Exemples

Dans notre exemple [`screenLeft`/`screenTop` <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/screenleft-screentop/), vous voyez un canevas sur lequel un cercle a été dessiné. Dans cet exemple, nous utilisons {{DOMxRef("Window.screenLeft")}}/{{DOMxRef("Window.screenTop")}} ainsi que {{DOMxRef("Window.requestAnimationFrame()")}} pour redessiner constamment le cercle à la même position physique sur l'écran, même si la position de la fenêtre est déplacée.

Voir {{DOMxRef("Window.screenLeft")}} pour plus d'informations.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.screenTop")}}
- La propriété {{DOMxRef("window.screenX")}}
