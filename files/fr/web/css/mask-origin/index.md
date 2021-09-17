---
title: mask-origin
slug: Web/CSS/mask-origin
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-origin
---
{{CSSRef}}

La propriété **`mask-origin`** permet de définir l'origine à partir de laquelle placer le masque.

```css
/* Valeurs avec un mot-clé */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: margin-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Valeurs multiples */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Valeurs non-standards */
 -webkit-mask-origin: content;
 -webkit-mask-origin: padding;
 -webkit-mask-origin: border;

/* Valeurs globales */
mask-origin: inherit;
mask-origin: initial;
mask-origin: unset;
```

Pour les éléments qui sont affichés avec une unique boîte, cette propriété définit la zone de positionnement du masque. Autrement dit, cette propriété indique l'origine de la position pour l'image définie via {{cssxref("mask-image")}}. Pour les éléments qui sont affichés comme plusieurs boîtes (les boîtes _inline_ ou plusieurs lignes ou plusieurs boîtes sur plusieurs pages), elle définit les boîtes sur lesquelles {{cssxref("box-decoration-break")}} agira pour déterminer la zone de positionnement du masque.

## Syntaxe

Un ou plusieurs mots-clés parmi ceux listés ci-après, chacun séparé par une virgule.

### Valeurs

- `content-box`
  - : La position de la zone est relative à la boîte de contenu.
- `padding-box`
  - : La position de la zone est relative à la boîte de remplissage (_padding_). Pour les boîtes simples, `0 0` désigne le coin en haut à gauche de la bordure de cette boîte et `100% 100%` le coin en bas à droite.
- `border-box`
  - : La position de la zone est relative à la boîte de bordure.
- `margin-box`
  - : La position de la zone est relative à la boîte de marge.
- `fill-box`
  - : La position de la zone est relative à la boîte liée à l'objet (_[bounding box](https://www.w3.org/TR/2011/REC-SVG11-20110816/types.html#__svg__SVGLocatable__getBBox)_).
- `stroke-box`
  - : La position de la zone est relative à la boîte de contour de l'objet (_[stroke bounding box](https://www.w3.org/TR/css-masking/#stroke-bounding-box)_).
- `view-box`
  - : La zone d'affichage (_viewport_) SVG la plus proche est utilisée comme boîte de référence. Si l'attribut {{svgattr("viewBox")}} est défini pour l'élément qui crée la zone d'affichage, la boîte de référence est positionnée à l'origine du système de coordonnées établi par `viewBox`. Les dimensions de la boîte de référence sont les valeurs de largeur et de hauteur de `viewBox`.
- `content`{{non-standard_inline}}
  - : Synonyme de `content-box`.
- `padding`{{non-standard_inline}}
  - : Synonyme de `padding-box`.
- `border`{{non-standard_inline}}
  - : Synonyme de `border-box`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#masked {
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 10px solid blue;
  background-color: #8cffa0;
  padding: 10px;
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12676/star.svg);
  -webkit-mask-origin: border-box; /* À modifier dans le résultat. */
  mask-origin: border-box; /* À modifier dans le résultat. */
}
```

### HTML

```html
<div id="masked">
</div>
<select id="origin">
  <option value="content-box">content-box</option>
  <option value="padding-box">padding-box</option>
  <option value="border-box" selected>border-box</option>
  <option value="margin-box">margin-box</option>
  <option value="fill-box">fill-box</option>
  <option value="stroke-box">stroke-box</option>
  <option value="view-box">view-box</option>
</select>
```

### JavaScript

```js
var origin = document.getElementById("origin");
origin.addEventListener("change", function (evt) {
  document.getElementById("masked").style.maskOrigin = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", 160, 200)}}

## Spécifications

| Spécification                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#the-mask-origin", "mask-origin")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.mask-origin")}}
