---
title: Window.mozInnerScreenY
slug: Web/API/Window/mozInnerScreenY
---

{{APIRef}}

## Résumé

Obtient la coordonnée Y du coin supérieur gauche de la fenêtre de la fenêtre, en coordonnées d'écran.

> [!NOTE]
> Cette coordonnée est indiquée en pixels CSS et non en pixels matériels. Cela signifie qu'il peut être affecté par le niveau de zoom&nbsp;; pour calculer le nombre réel de pixels d'écran physiques, vous devez utiliser la propriété [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/fr/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils).

## Syntaxe

```js
screenY = window.mozInnerScreenY;
```

### Valeur

- _screenY_ stocke la valeur de la propriété `window.mozInnerScreenY`.
- La propriété `window.mozInnerScreenY` est une valeur en lecture seule à virgule flottante; il n'a pas de valeur par défaut.

## Spécification

Ne fait partie d'aucune spécification ou recommandation technique du W3C.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("window.mozInnerScreenX")}}
- [`nsIDOMWindowUtils.screenPixelsPerCSSPixel`](/fr/docs/XPCOM_Interface_Reference/nsIDOMWindowUtils)
