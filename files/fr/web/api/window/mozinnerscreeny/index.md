---
title: "Window : propriété mozInnerScreenY"
short-title: mozInnerScreenY
slug: Web/API/Window/mozInnerScreenY
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

La propriété **`mozInnerScreenY`** de l'interface {{DOMxRef("Window")}} retourne la coordonnée Y du coin supérieur gauche de la fenêtre de la fenêtre, en coordonnées d'écran.

> [!NOTE]
> Cette coordonnée est indiquée en pixels CSS, et non en pixels matériels. Cela signifie qu'elle peut être affectée par le niveau de zoom&nbsp;; pour calculer le nombre réel de pixels physiques de l'écran, vous devez utiliser la propriété `nsIDOMWindowUtils.screenPixelsPerCSSPixel`.

## Valeur

La propriété `window.mozInnerScreenY` est une valeur en lecture seule à virgule flottante&nbsp;; elle n'a pas de valeur par défaut.

## Spécifications

Ne fait partie d'aucune spécification ou recommandation technique du W3C.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("window.mozInnerScreenX")}}
- La propriété `nsIDOMWindowUtils.screenPixelsPerCSSPixel`
