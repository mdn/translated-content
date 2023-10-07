---
title: Window.scrollY
slug: Web/API/Window/scrollY
---

{{APIRef}}

La propriété **`scrollY`** de l'objet {{domxref("Window")}} est une propriété en lecture seule. Elle retourne le nombre de pixels la page actuellement défilés verticalement. Dans les navigateurs modernes, cette valeur est précise au sous-pixel près. Ainsi, la valeur retournée n'est pas forcement un entier.

## Syntaxe

```js
var y = window.scrollY;
```

- `y` est le nombre de pixels verticaux défilés.

## Exemple

```js
// make sure and go down to the second page
if (window.scrollY) {
  window.scroll(0, 0); // reset the scroll position to the top left of the document.
}

window.scrollByPages(1);
```

## Notes

Utilisez cette propriété pour être sûre que le document n'as pas été défilé verticalement si vous utilisez les fonctions de défilement tels que {{domxref("window.scrollBy")}}, {{domxref("window.scrollByLines")}}, ou {{domxref("window.scrollByPages")}}.

La propriété `pageYOffset` est un alias de la propriété `scrollY`:

```js
window.pageYOffset == window.scrollY; // toujours vrai
```

Pour une compatibilité multi-navigateur, utilisez `window.pageYOffset` à la place de `window.scrollY`. **En outre**, les anciennes versions d'Internet Explorer (< 9) ne supportent pas non plus la propriété et doit-être utilisé à l'aide d'autres propriétés qui ne sont pas standards. Un exemple entièrement compatible :

```js
var supportPageOffset = window.pageXOffset !== undefined;
var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

var x = supportPageOffset
  ? window.pageXOffset
  : isCSS1Compat
  ? document.documentElement.scrollLeft
  : document.body.scrollLeft;
var y = supportPageOffset
  ? window.pageYOffset
  : isCSS1Compat
  ? document.documentElement.scrollTop
  : document.body.scrollTop;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("window.scrollX")}}
