---
title: "Window : propriété scrollY"
short-title: scrollY
slug: Web/API/Window/scrollY
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

La propriété en lecture seule **`scrollY`** de l'interface {{DOMxRef("Window")}} retourne le nombre de pixels par lequel le document est actuellement défilé verticalement. Cette valeur est précise au sous-pixel dans les navigateurs modernes, ce qui signifie qu'il ne s'agit pas nécessairement d'un nombre entier. Vous pouvez obtenir le nombre de pixels par lequel le document est défilé horizontalement à partir de la propriété {{DOMxRef("Window.scrollX", "scrollX")}}.

## Valeur

Une valeur en virgule flottante double précision indiquant le nombre de pixels par lequel le document est actuellement défilé verticalement à partir de l'origine, où une valeur positive signifie que le contenu est défilé vers le bas (pour révéler plus de contenu en bas). En termes plus techniques, `scrollY` retourne la coordonnée Y du bord supérieur de {{Glossary("viewport", "la zone d'affichage")}} actuelle. Si le document n'est pas du tout défilé vers le haut ou le bas, alors `scrollY` est 0. S'il n'y a pas de viewport, la valeur retournée est 0. Si le document est rendu sur un appareil précis au sous-pixel, alors la valeur retournée est également précise au sous-pixel et peut contenir une composante décimale.

> [!NOTE]
> Si vous avez besoin d'une valeur entière, vous pouvez utiliser {{JSxRef("Math.round()")}} pour l'arrondir.

Safari réagit au dépassement du défilement en mettant à jour `scrollY` au-delà de la position de défilement maximale (sauf si l'effet de «&nbsp;rebond&nbsp;» par défaut est désactivé, par exemple en définissant {{CSSxRef("overscroll-behavior")}} sur `none`), tandis que Chrome et Firefox ne le font pas. Par exemple, `scrollY` peut être négatif sur Safari simplement en continuant à faire défiler vers le haut lorsque le document est déjà en haut.

Cette propriété est en lecture seule. Pour faire défiler la fenêtre vers un endroit particulier, utilisez {{DOMxRef("Window.scroll()")}}.

## Exemples

```js
// assurez-vous de descendre à la deuxième page
if (window.scrollY) {
  window.scroll(0, 0); // réinitialise la position de défilement en haut à gauche du document.
}

window.scrollByPages(1);
```

## Notes

Utilisez cette propriété pour vérifier que le document n'a pas déjà été défilé lorsque vous utilisez des fonctions de défilement relatives telles que {{DOMxRef("window.scrollBy", "scrollBy()")}}, {{DOMxRef("window.scrollByLines", "scrollByLines()")}}, ou {{DOMxRef("window.scrollByPages", "scrollByPages()")}}.

La propriété `pageYOffset` est un alias de la propriété `scrollY`. Cela signifie que si vous n'avez réassigné aucune des deux propriétés, `window.pageYOffset === window.scrollY` est toujours vrai.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.scrollX")}}
