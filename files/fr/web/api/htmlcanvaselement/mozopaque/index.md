---
title: "HTMLCanvasElement : propriété mozOpaque"
short-title: mozOpaque
slug: Web/API/HTMLCanvasElement/mozOpaque
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}{{Deprecated_Header}}{{Non-standard_Header}}

La propriété non standard **`mozOpaque`** de l'interface {{DOMxRef("HTMLCanvasElement")}} est une valeur booléenne correspondant à l'attribut HTML [`moz-opaque`](/fr/docs/Web/HTML/Reference/Elements/canvas#moz-opaque) de l'élément {{HTMLElement("canvas")}}. Elle indique si la translucidité est à prendre en compte. Si le canevas sait qu'il n'y a pas de translucidité, les performances de peinture peuvent être optimisées.

> [!NOTE]
> Cela a été normalisé en définissant l'option `alpha` à `false` lors de la création d'un contexte de dessin avec {{DOMxRef("HTMLCanvasElement.getContext()")}}. L'utilisation de `mozOpaque` est déconseillée. Firefox ne le prendra plus en charge à l'avenir.

## Valeur

Une valeur booléenne.

## Exemples

Étant donné cet élément HTML {{HTMLElement("canvas")}}&nbsp;:

```html
<canvas id="canvas" width="300" height="300" moz-opaque></canvas>
```

Vous pouvez obtenir ou définir la propriété `mozOpaque`. Par exemple, vous pouvez la définir conditionnellement à `true` si `mimeType === 'image/jpeg'`, ou de façon similaire, pour améliorer les performances de votre application lorsque la translucidité n'est pas nécessaire.

```js
const canvas = document.getElementById("canvas");
console.log(canvas.mozOpaque); // true
// le désactiver
canvas.mozOpaque = false;
```

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("HTMLCanvasElement")}}&nbsp;: Interface définissant la propriété `HTMLCanvasElement.mozOpaque`
- [`moz-opaque`](/fr/docs/Web/HTML/Reference/Elements/canvas#moz-opaque)&nbsp;: attribut HTML de l'élément {{HTMLElement("canvas")}}
- [Optimisation de votre jeu JavaScript pour Firefox OS <sup>(angl.)</sup>](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)
