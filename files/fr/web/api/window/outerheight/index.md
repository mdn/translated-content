---
title: "Window : propriété outerHeight"
short-title: outerHeight
slug: Web/API/Window/outerHeight
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

La propriété en lecture seule **`outerHeight`** de l'interface {{DOMxRef("Window")}} retourne la hauteur en pixels de la fenêtre du navigateur entière, y compris toute barre latérale, le chrome de la fenêtre et les bordures/poignées de redimensionnement de la fenêtre.

## Notes

Pour changer la taille de la fenêtre, utilisez {{DOMxRef("window.resizeBy()")}} et {{DOMxRef("window.resizeTo()")}}.

Pour obtenir la hauteur intérieure de la fenêtre (la hauteur de la page actuelle), utilisez {{DOMxRef("window.innerHeight")}}.

### Exemple illustré

La figure suivante montre la différence entre `outerHeight` et `innerHeight`.

![illustration de innerHeight et outerHeight](FirefoxInnerVsOuterHeight2.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.innerHeight")}}
- La propriété {{DOMxRef("window.innerWidth")}}
- La propriété {{DOMxRef("window.outerWidth")}}
- La méthode {{DOMxRef("window.resizeBy()")}}
- La méthode {{DOMxRef("window.resizeTo()")}}
