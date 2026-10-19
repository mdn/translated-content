---
title: "Window : propriété scrollX"
short-title: scrollX
slug: Web/API/Window/scrollX
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("CSSOM View")}}

La propriété en lecture seule **`scrollX`** de l'interface {{DOMxRef("Window")}} retourne le nombre de pixels par lequel le document est actuellement défilé horizontalement. Cette valeur est précise au sous-pixel dans les navigateurs modernes, ce qui signifie qu'il ne s'agit pas nécessairement d'un nombre entier. Vous pouvez obtenir le nombre de pixels par lequel le document est défilé verticalement à partir de la propriété {{DOMxRef("Window.scrollY", "scrollY")}}.

## Valeur

Une valeur en virgule flottante double précision indiquant le nombre de pixels par lequel le document est actuellement défilé horizontalement à partir de l'origine, où une valeur positive signifie que le contenu est défilé vers la droite (pour révéler plus de contenu à droite). En termes plus techniques, `scrollX` retourne la coordonnée X du bord gauche de {{Glossary("viewport", "la zone d'affichage")}} actuelle. Si le document n'est pas du tout défilé vers la gauche ou la droite, alors `scrollX` est 0. S'il n'y a pas de viewport, la valeur retournée est 0. Si le document est rendu sur un appareil précis au sous-pixel, alors la valeur retournée est également précise au sous-pixel et peut contenir une composante décimale.

> [!NOTE]
> Si vous avez besoin d'une valeur entière, vous pouvez utiliser {{JSxRef("Math.round()")}} pour l'arrondir.

Il est possible que `scrollX` soit négatif si le document peut être défilé vers la gauche à partir du bloc contenant initial. Par exemple, si le document est de droite à gauche et que le contenu s'étend vers la gauche.

Safari réagit au dépassement du défilement en mettant à jour `scrollX` au-delà de la position de défilement maximale (sauf si l'effet de «&nbsp;rebond&nbsp;» par défaut est désactivé, par exemple en définissant {{CSSxRef("overscroll-behavior")}} sur `none`), tandis que Chrome et Firefox ne le font pas.

Cette propriété est en lecture seule. Pour faire défiler la fenêtre vers un endroit particulier, utilisez {{DOMxRef("Window.scroll()")}}.

## Exemples

Cet exemple vérifie la position de défilement horizontal actuelle du document. Si elle est supérieure à 400 pixels, la fenêtre est ramenée au début.

```js
if (window.scrollX > 400) {
  window.scroll(0, 0);
}
```

## Notes

La propriété `pageXOffset` est un alias de la propriété `scrollX`. Cela signifie que si vous n'avez réassigné aucune des deux propriétés, `window.pageXOffset === window.scrollX` est toujours vrai.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Window.scrollY")}}
