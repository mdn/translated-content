---
title: image-rendering
slug: Web/CSS/Image-rendering
translation_of: Web/CSS/image-rendering
browser-compat: css.properties.image-rendering
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`image-rendering`** fournit une indication au navigateur à propos de l'algorithme qui devrait être utilisé pour redimensionner les images. Elle s'applique à l'élément visé, aux images fournies via les autres propriétés CSS et aux éléments descendants de l'élément ciblé.

{{EmbedInteractiveExample("pages/css/image-rendering.html")}}

L'agent utilisateur redimensionnera une image si l'auteur de la page indique des dimensions différentes de la taille naturelle de l'image, ou si la personne visualisant l'image interagit en zoomant par exemple. Si, par exemple, la taille naturelle de l'image est `100×100px` et que l'auteur indique les dimensions `200×200px` (ou `50×50px`), l'image sera agrandie (ou réduite) aux nouvelles dimensions via l'algorithme indiqué. Le redimensionnement peut aussi avoir lieu suite aux interactions utilisateurs (avec un zoom par exemple). Cette propriété n'a aucun effet sur les images qui ne sont pas redimensionnées.

## Syntaxe

```css
/*Valeurs avec un mot-clé*/
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Valeurs globales */
image-rendering: inherit;
image-rendering: initial;
image-rendering: revert;
image-rendering: unset;
```

### Valeurs

- `auto`
  - : L'algorithme utilisé dépend de l'agent utilisateur. Depuis la version 1.9 (Firefox 3.0), Gecko utilise un algorithme de rééchantillonnage bilinéaire.
- `crisp-edges`
  - : L'algorithme utilisé est l'interpolation au plus proche voisin.
- `high-quality` {{Experimental_inline}}
  - : Cette valeur est proche de `smooth` mais favorise un redimensionnement avec une qualité élevée. Si les ressources du système sont limitées, ce sont les images ciblées avec `high-quality` qui devraient être priorisées par rapport aux autres s'il est nécessaire de dégrader la qualité.
- `pixelated`
  - : L'algorithme utilisé est l'interpolation au plus proche voisin. L'image est agrandie au multiple entier de taille qui est supérieur ou égal à sa taille originale puis réduite à la taille cible, comme pour `smooth`. Lorsque l'agrandissement demandé est un multiple entier de la taille originale, l'effet obtenu sera le même qu'avec `crisp-edges`
- `smooth` {{Experimental_inline}}
  - : L'algorithme utilisé pour le redimensionnement doit maximiser l'apparence de l'image. Les algorithmes qui adoucissent les couleurs (l'interpolation bilinéaire par exemple) sont acceptables. Cette valeur est destinée aux images telles que les photos.

> **Note :** Les valeurs `optimizeQuality` et `optimizeSpeed` qui étaient présentes dans un brouillon de la spécification (et qui provenaient de la spécification équivalente pour SVG) sont synonymes respectifs de `smooth` et `pixelated`.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Paramétrer l'algorithme de redimensionnement des images

En pratique, les valeurs `pixelated` et `crisp-edges` peuvent être combinées afin de fournir des alternatives l'une à l'autre. L'API [Canvas](/fr/docs/Web/API/Canvas_API) peut fournir [une solution alternative pour `pixelated`](http://phrogz.net/tmp/canvas_image_zoom.html) via une manipulation manuelle des données de l'image ou avec [`imageSmoothingEnabled`](/fr/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled).

```html hidden
<div>
  <img class="auto" alt="auto" src="blumen.jpg" />
  <img class="pixelated" alt="pixelated" src="blumen.jpg" />
  <img class="crisp-edges" alt="crisp-edges" src="blumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

#### CSS

```css
.auto {
  image-rendering: auto;
}

.pixelated {
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}
```

#### Résultat

{{EmbedLiveSample('',200,250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- D'autres propriétés CSS utilisées avec les images&nbsp;:
  - [`object-fit`](/fr/docs/Web/CSS/object-fit)
  - [`object-position`](/fr/docs/Web/CSS/object-position)
  - [`image-orientation`](/fr/docs/Web/CSS/image-orientation)
  - [`image-resolution`](/fr/docs/Web/CSS/image-resolution)
