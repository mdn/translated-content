---
title: Image()
slug: Web/API/HTMLImageElement/Image
tags:
  - API
  - Constructeur
  - DOM
translation_of: Web/API/HTMLImageElement/Image
---
{{ APIRef("HTML DOM") }}

Le constructeur **`Image()`** crée une nouvelle instance {{domxref("HTMLImageElement")}} .

C'est fonctionnellement équivalent à {{domxref("Document.createElement()", "document.createElement('img')")}}.

## Syntaxe

    Image(width, height)

### Paramètres

- width
  - : La largeur de l'image (c'est-à-dire, la valeur pour l'attribut {{htmlattrxref("width", "img")}})
- height
  - : La hauteur de l'image (c'est-à-dire, la valeur pour l'attribut {{htmlattrxref("height", "img")}}).

## Exemples

```js
var myImage = new Image(100, 200);
myImage.src = 'picture.jpg';
console.log(myImage);
```

Cela équivaudrait à définir la balise HTML suivante dans le {{htmlelement("body")}} (_corps_) :

```html
<img width="100" height="200" src="picture.jpg">
```

> **Note :** Le "bitmap" entier est chargé quelle que soit la taille spécifiée dans le constructeur. Si une taille est spécifiée dans le constructeur, elle sera reflétée dans les propriétés {{domxref("HTMLImageElement.width")}} et {{domxref("HTMLImageElement.height")}} de l'instance résultante. La largeur intrinsèque et la hauteur de l'image en pixels CSS sont reflétées à travers les propriétés {{domxref("HTMLImageElement.naturalWidth")}} et {{domxref("HTMLImageElement.naturalHeight")}}. Si aucune taille n'est spécifiée dans le constructeur, les deux paires de ces propriétés auront les mêmes valeurs.

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName("HTML WHATWG", "embedded-content.html#dom-image", "Image()")}} | {{spec2("HTML WHATWG")}} |             |

## Compatibilité des navigateurs

{{Compat("api.HTMLImageElement.Image")}}
