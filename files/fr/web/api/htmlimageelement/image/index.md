---
title: "HTMLImageElement : constructeur Image()"
short-title: Image()
slug: Web/API/HTMLImageElement/Image
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Le constructeur **`Image()`** crée une nouvelle instance {{domxref("HTMLImageElement")}}. C'est fonctionnellement équivalent à {{domxref("Document.createElement()", "document.createElement('img')")}}.

> [!NOTE]
> Cette fonction ne doit pas être confondue avec la fonction CSS [`image()`](/fr/docs/Web/CSS/Reference/Values/image/image).

## Syntaxe

```js-nolint
new Image()
new Image(width)
new Image(width, height)
```

### Paramètres

- `width` {{optional_inline}}
  - : La largeur de l'image (c'est-à-dire, la valeur pour l'attribut [`width`](/fr/docs/Web/HTML/Reference/Elements/img#width))
- `height` {{optional_inline}}
  - : La hauteur de l'image (c'est-à-dire, la valeur pour l'attribut [`height`](/fr/docs/Web/HTML/Reference/Elements/img#height)).

## Notes d'utilisation

L'intégralité du bitmap est chargée, quelle que soit la taille spécifiée dans le constructeur. La taille spécifiée dans le constructeur est reflétée par les propriétés {{DOMxRef("HTMLImageElement.width")}} et {{DOMxRef("HTMLImageElement.height")}} de l'instance résultante. La largeur et la hauteur intrinsèques de l'image en pixels CSS sont reflétées par les propriétés {{DOMxRef("HTMLImageElement.naturalWidth")}} et {{DOMxRef("HTMLImageElement.naturalHeight")}}. Si aucune taille n'est spécifiée dans le constructeur, les deux paires de propriétés auront les mêmes valeurs.

## Exemples

```js
const myImage = new Image(100, 200);
myImage.src = "picture.jpg";
document.body.appendChild(myImage);
```

Cela équivaut à définir la balise HTML suivante dans le {{HTMLElement("body")}}&nbsp;:

```html
<img width="100" height="200" src="picture.jpg" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
