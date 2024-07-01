---
title: Window.mozInnerScreenX
slug: Web/API/Window/mozInnerScreenX
---

{{APIRef}}

## Résumé

Obtient la coordonnée X du coin supérieur gauche de la fenêtre de la fenêtre, en coordonnées d'écran.

> **Note :** Cette coordonnée est indiquée en pixels CSS et non en pixels matériels. Cela signifie qu'il peut être affecté par le niveau de zoom&nbsp;; pour calculer le nombre réel de pixels d'écran physiques, vous devez utiliser la propriété [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/fr/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils).

## Syntaxe

```js
screenX = window.mozInnerScreenX;
```

### Valeur

- _screenX_ stocke la valeur de la propriété `window.mozInnerScreenX`.
- La propriété `window.mozInnerScreenX` est une valeur en lecture seule à virgule flottante; il n'a pas de valeur par défaut.

## Spécification

Ne fait partie d'aucune spécification ou recommandation technique du W3C.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("window.mozInnerScreenY")}}
- [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/fr/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils)
