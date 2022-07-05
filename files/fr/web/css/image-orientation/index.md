---
title: image-orientation
slug: Web/CSS/image-orientation
translation_of: Web/CSS/image-orientation
browser-compat: css.properties.image-orientation
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`image-orientation`** décrit la façon d'obtenir l'orientation correcte d'une image quelle que soit la disposition du document.


```css
/* Valeurs avec un mot-clé */
image-orientation: none;
image-orientation: from-image; /* Les données EXIF de l'image sont utilisées. */

/* Valeurs globales */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: unset;
```

## Syntaxe

### Valeurs

- `none`
  - : Aucune rotation supplémentaire n'est appliquée. L'image est orientée telle quelle ou comme indiquée par les autres propriétés CSS.
- `from-image`
  - : La valeur initiale par défaut. Ce sont [les informations EXIF](https://fr.wikipedia.org/wiki/Exchangeable_image_file_format) contenues dans l'image qui sont utilisées afin de tourner l'image correctement.

## Description

Cette propriété n'est pas conçue pour appliquer une rotation arbitraire sur une image. Elle permet uniquement de corriger une orientation erronée.

Pour tout autre usage, on utilisera la propriété [`transform`](/fr/docs/Web/CSS/transform) avec le mot-clé `rotate` afin d'indiquer une rotation. Ces autres usages incluent les modifications volontaires de l'orientation de l'image ou les changements nécessaires à l'impression portrait/paysage.

Lorsqu'elle est utilisée avec d'autres propriétés CSS (comme [`transform-function`](/fr/docs/Web/CSS/transform-function)), la rotation fournie par `image-orientation` est appliquée avant toute autre transformation.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Orienter une image à partir des données qu'elle contient

L'image suivante a suivi une rotation de 180° et la propriété `image-orientation` est utilisée pour corriger son orientation à partir des données EXIF de l'image. En passant la valeur de la propriété `image-orientation` à `none`, vous pourrez voir l'effet de la propriété.

#### CSS

```css
#image {
  image-orientation: from-image; /* Peut être édité dans l'exemple */
}
```

```css hidden
img {
  margin: .5rem 0;
}

label {
  font-family: monospace;
}
```

```html hidden
<img id="image" src="oriole.jpg"
    alt="Orientation obtenue à partir de l'image">

<div>
  <input type="radio" id="from-image" name="orientation" value="from-image"
         checked>
  <label for="from-image">from-image</label>
</div>

<div>
  <input type="radio" id="none" name="orientation" value="none">
  <label for="none">none</label>
</div>
```

```js hidden
document.addEventListener('change', evt => {
  document.getElementById("image").style.imageOrientation = evt.target.value;
});
```

#### Résultat

{{EmbedLiveSample("", "100%", 900)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés CSS associées aux images&nbsp;:
  - [`object-fit`](/fr/docs/Web/CSS/object-fit)
  - [`object-position`](/fr/docs/Web/CSS/object-position)
  - [`image-rendering`](/fr/docs/Web/CSS/Image-rendering)
  - [`image-resolution`](/fr/docs/Web/CSS/image-resolution)
- [`transform`](/fr/docs/Web/CSS/transform)
- [`rotate`](/fr/docs/Web/CSS/rotate)
