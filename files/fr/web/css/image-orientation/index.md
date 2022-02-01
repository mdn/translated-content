---
title: image-orientation
slug: Web/CSS/image-orientation
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/image-orientation
---
{{CSSRef}}

La propriété **`image-orientation`** décrit la façon d'obtenir l'orientation correcte d'une image quelle que soit la disposition du document. Cette propriété ne doit pas être utilisée afin de tourner l'image pour d'autres cas, si besoin, on pourra utiliser la propriété {{cssxref("transform")}} avec la fonction `rotate`.

> **Attention :** Cette propriété sera vraisemblablement dépréciée prochainement. Les fonctionnalités associées deviendront des propriétés de l'élément {{HTMLElement("img")}} et/ou de l'élément {{HTMLElement("picture")}} (excepté peut-être `from-image`).

```css
/* Valeurs d'angle */
/* Type <angle>    */
image-orientation: 0deg;
image-orientation: 6.4deg;     /* Arrondie à 0deg */
image-orientation: -90deg;     /* Équivalent à 270deg, la
                                  valeur calculée normalisée */

/* Valeurs avec un mot-clé */
image-orientation: from-image; /* Utilise les données EXIF
                                  de l'image */
image-orientation: flip;       /* Pas de rotation mais un
                                  retournement horizontal */

/* Valeurs avec deux arguments */
image-orientation: 90deg flip; /* Rotation de 90deg, puis
                                  retournement horizontal */

/* Valeurs globales */
image-orientation: inherit;
image-orientation: initial;
image-orientation: unset;
```

## Syntaxe

### Valeurs

- `from-image`
  - : Les informations EXIF contenues dans l'image seront utilisées pour tourner l'image de façon appropriée.
- `<angle>`
  - : Une valeur de type {{cssxref("&lt;angle&gt;")}} qui indique la rotation à appliquer à l'image. Cette valeur est arrondie au quart de tour le plus proche.
- `flip`
  - : L'image est retournée horizontalement (comme une réflexion) après que la rotation d'angle indiqué par le premier paramètre ait été appliquée. Si aucun argument d'angle n'a été fourni, la valeur `0deg` sera utilisée.

### Syntaxe formelle

{{csssyntax}}

## Notes d'utilisation

Cette propriété n'est pas conçue pour appliquer une rotation arbitraire sur une image. Elle permet uniquement de corriger un orientation erronée. C'est pour cette raison que la valeur est arrondie au quart de tour le plus proche.

De la même façon, cette propriété n'est pas conçue pour gérer le passage de paysage en portrait. `image-orientation` ne modifie que les images, il faudrait apporter les modifications au niveau de la disposition.

## Exemples

### CSS

```css
#image {
  /* Peut-être modifiée dans l'exemple */
  image-orientation: flip;
}
```

```html hidden
<img id="image" src="https://mdn.mozillademos.org/files/12668/MDN.svg"
    alt="Orientation déterminée à partir de l'image"/>
<select id="imageOrientation">
  <option value="from-image">from-image</option>
  <option value="90deg">90deg</option>
  <option value="flip" selected>flip</option>
</select>
```

```js hidden
var imageOrientation = document.getElementById("imageOrientation");
imageOrientation.addEventListener("change", function (evt) {
  document.getElementById("image").style.imageOrientation = evt.target.value;
});
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 240)}}

## Spécifications

| Spécification                                                                                | État                             | Commentaires                                |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------- |
| {{SpecName('CSS4 Images', '#image-orientation', 'image-orientation')}} | {{Spec2('CSS4 Images')}} | Ajout des mots-clés `from-image` et `flip`. |
| {{SpecName('CSS3 Images', '#image-orientation', 'image-orientation')}} | {{Spec2('CSS3 Images')}} | Définition initiale.                        |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.image-orientation")}}

## Voir aussi

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("image-orientation")}}
- {{cssxref("image-rendering")}}
- {{cssxref("image-resolution")}}
- {{cssxref("transform")}}
- {{cssxref("rotate")}}
