---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`HTMLElement.offsetTop`** renvoie la distance entre la bordure extérieure de l'élément courant et la bordure intérieure haute de l'élément [`offsetParent`](/fr/docs/Web/API/HTMLElement/offsetParent) (le plus proche ancêtre positionné).

## Valeur

Un nombre.

## Exemples

```js
let d = document.getElementById("div1");
let topPos = d.offsetTop;

if (topPos > 10) {
  // si le décalage est supérieur
  // à 10 pixels par rapport au parent
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

Pour respecter la spécification, cette propriété renverra `null` sur WebKit si l'élément est masqué (autrement dit si `style.display` vaut `none` pour cet élément ou l'un de ses ancêtres) ou si `style.position` vaut `"fixed"` pour l'élément courant.

Cette propriété renverra `null` sur Internet Explorer (9) si `style.position` vaut `"fixed"` pour l'élément courant (`display:none` n'a pas d'impact pour ce navigateur).
