---
title: image-rendering
slug: Web/CSS/Image-rendering
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/image-rendering
---
{{CSSRef}}

La propriété **`image-rendering`** fournit une indication au navigateur à propos de l'algorithme qui devrait être utilisé pour redimensionner les images. Elle s'applique à l'élément visé, aux images fournies via les autres propriétés CSS et aux éléments fils.

L'agent utilisateur redimensionnera une image si l'auteur de la page indique des dimensions différentes que la taille naturelle de l'image ou si l'utilisateur interagit en zoomant par exemple. Cette propriété n'a aucun effet sur les images qui ne sont pas redimensionnées. Si, par exemple, la taille naturelle de l'image est `100px` par `100px` et que l'auteur indique les dimensions `200px` par `200px` (ou `50px` par `50px`), l'image sera agrandie (ou réduite) aux nouvelles dimensions via l'algorithme indiqué. Le redimensionnement peut aussi avoir lieu suite aux interactions utilisateurs (avec un zoom par exemple).

## Syntaxe

```css
/*Valeurs avec un mot-clé*/
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Valeurs globales */
image-rendering: inherit;
image-rendering: initial;
image-rendering: unset;
```

### Valeurs

- **`auto`**
  - : L'image devrait être redimensionnée grâce à un algorithme qui optimise l'apparence de l'image. Les algorithmes de redimensionnement « doux » comme l'interpolation bilinéaire, sont acceptables. Ces algorithmes sont destinés à être utilisés sur des images comme des photos. Depuis la version 1.9 (Firefox 3.0), Gecko utilise un algorithme de rééchantillonnage bilinéaire.
- **`crisp-edges`**
  - : L'algorithme utilisé doit avant tout préserver le contraste et les bords de l'image, il ne doit pas ajouter de couleur intermédiaire ou de flou. Cette valeur est conçue pour être utilisée sur du _pixel art_. Les algorithmes éligibles sont par exemple l'interpolation au plus proche voisin, les familles d'algorithmes 2×SaI et [hqx](https://en.wikipedia.org/wiki/Hqx).
- `high-quality`{{Experimental_inline}}
  - : Cette valeur est proche de `smooth` mais favorise un redimensionnement avec une qualité élevée. Si les ressources du système sont limitées, ce sont les images ciblées avec `high-quality` qui devraient être priorisées par rapport aux autres s'il est nécessaire de dégrader la qualité.
- **`pixelated`**
  - : Lorsque l'image est agrandie c'est l'algorithme « du plus proche voisin » qui doit être utilisé afin que l'image apparaisse comme composée de grands pixels. Lorsque l'image est réduite, le comportement est le même que `auto`.
- `smooth`{{Experimental_inline}}
  - : L'algorithme utilisé pour le redimensionnement doit maximiser l'apparence de l'image. Les algorithmes qui adoucissent les couleurs (ex. l'interpolation bilinéaire) sont acceptables. Cette valeur est destinée aux images telles que les photos.

> **Note :** Les valeurs `optimizeQuality` et `optimizeSpeed` qui étaient présentes dans un brouillon de la spécification (et qui provenaient de la spécification équivalente pour SVG) sont synonymes respectifs de `smooth` et `pixelated`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.pixels_petits {
  height: 50px;
  width: 50px;
}

.pixels_grands {
  height: 69px;
  width: 69px;
}

.chapeau_petit {
  height: 89px;
  width: 89px;
}
.defaut {
  image-rendering: auto;
}

.contraste {
  image-rendering: crisp-edges;
}
```

### HTML

```html
<p>Avec <code>auto</code> :</p>
<img class="pixels_petits defaut" alt="damier" src="https://mdn.mozillademos.org/files/2766/squares.gif"/>
<img class="pixels_grands defaut" alt="damier" src="https://mdn.mozillademos.org/files/2766/squares.gif"/>
<img class="chapeau_petit defaut" alt="chapeau" src="https://mdn.mozillademos.org/files/2767/hut.jpg"/>

<p>Avec <code>crisp-edges</code> :</p>
<img class="pixels_petits contraste" alt="damier" src="https://mdn.mozillademos.org/files/2766/squares.gif"/>
<img class="pixels_grands contraste" alt="damier" src="https://mdn.mozillademos.org/files/2766/squares.gif"/>
<img class="chapeau_petit contraste" alt="chapeau" src="https://mdn.mozillademos.org/files/2767/hut.jpg"/>
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

> **Note :** En pratique, les règles `pixelated` et `crisp-edges` peuvent être combinées en cas de besoin (l'une pouvant combler les éventuelles manques de l'autre et _vice versa_). Si besoin, un {{HTMLElement("canvas")}} peut fournir [une alternative pour les valeurs `crisp-edge` et `optimize-contrast`](http://phrogz.net/tmp/canvas_image_zoom.html) via la manipulation manuelle des données de l'image ou avec [`imageSmoothingEnabled`](/fr/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled).

## Spécifications

| Spécification                                                                                | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS3 Images', '#the-image-rendering', 'image-rendering')}} | {{Spec2('CSS3 Images')}} | Définition initiale. |

> **Note :** Cette valeur était, initialement, proche de la propriété SVG `image-rendering`. Cependant, ces valeurs ont « divergé » et sont assez différentes désormais.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.image-rendering")}}
