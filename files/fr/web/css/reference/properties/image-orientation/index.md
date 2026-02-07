---
title: image-orientation
slug: Web/CSS/Reference/Properties/image-orientation
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`image-orientation`** décrit la façon d'obtenir l'orientation correcte d'une image quelle que soit la disposition du document.

{{InteractiveExample("Démonstration CSS&nbsp;: image-orientation")}}

```css interactive-example-choice
image-orientation: none;
```

```css interactive-example-choice
image-orientation: from-image;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/hummingbird.jpg" />
</section>
```

```css interactive-example
#example-element {
  height: inherit;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
image-orientation: none;
image-orientation: from-image; /* Les données EXIF de l'image sont utilisées. */

/* Valeurs globales */
image-orientation: inherit;
image-orientation: initial;
image-orientation: revert;
image-orientation: revert-layer;
image-orientation: unset;
```

### Valeurs

- `none`
  - : Aucune rotation supplémentaire n'est appliquée. L'image est orientée telle quelle ou comme indiquée par les autres propriétés CSS.
- `from-image`
  - : La valeur initiale par défaut. Ce sont les informations [EXIF](https://fr.wikipedia.org/wiki/Exchangeable_image_file_format) contenues dans l'image qui sont utilisées afin de tourner l'image correctement.

> [!WARNING]
> `image-orientation: none;` **ne** surchargera **pas** l'orientation des images provenant d'une origine non sécurisée telle qu'encodée par leurs informations [EXIF](https://fr.wikipedia.org/wiki/Exchangeable_image_file_format), pour des raisons de sécurité. Pour en savoir plus, consultez [le ticket de brouillon du groupe de travail CSS <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/issues/5165).

## Description

Cette propriété n'est pas _uniquement_ conçue pour appliquer une rotation arbitraire sur une image. Elle permet uniquement de corriger une orientation erronée. Pour tout autre usage, on utilisera la propriété {{CSSxRef("transform")}} avec le mot-clé `rotate` afin d'indiquer une rotation. Ces autres usages incluent les modifications volontaires de l'orientation de l'image ou les changements nécessaires à l'impression portrait/paysage.

Lorsqu'elle est utilisée avec d'autres propriétés CSS comme {{CSSxRef("&lt;transform-function&gt;")}}, la rotation fournie par `image-orientation` est appliquée avant toute autre transformation.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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
  margin: 0.5rem 0;
}

label {
  font-family: monospace;
}
```

```html hidden
<img
  id="image"
  src="oriole.jpg"
  alt="Orientation obtenue à partir de l'image" />

<div>
  <input
    type="radio"
    id="from-image"
    name="orientation"
    value="from-image"
    checked />
  <label for="from-image">from-image</label>
</div>

<div>
  <input type="radio" id="none" name="orientation" value="none" />
  <label for="none">none</label>
</div>
```

```js hidden
document.addEventListener("change", (evt) => {
  document.getElementById("image").style.imageOrientation = evt.target.value;
});
```

#### Résultat

{{EmbedLiveSample("Orienter une image à partir des données qu'elle contient", "100%", 900)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés CSS associées aux images&nbsp;: {{CSSxRef("object-fit")}}, {{CSSxRef("object-position")}}, {{CSSxRef("image-rendering")}}, {{CSSxRef("image-resolution")}}.
- Les propriétés {{CSSxRef("transform")}} et {{CSSxRef("rotate")}}
