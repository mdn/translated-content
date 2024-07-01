---
title: object-fit
slug: Web/CSS/object-fit
---

{{CSSRef}}

La propriété CSS **`object-fit`** définit la façon dont le contenu d'un [élément remplacé](/fr/docs/Web/CSS/Replaced_element) ([`<img>`](/fr/docs/Web/HTML/Element/Img) ou [`<video>`](/fr/docs/Web/HTML/Element/video) par exemple) doit s'adapter à son conteneur en utilisant sa largeur et sa hauteur.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

Selon la valeur utilisée pour `object-fit`, l'élément peut être rogné, mis à l'échelle ou étiré, afin de remplir la boîte qui le contient.

> **Note :** Il est possible de modifier l'alignement du contenu de l'élément remplacé au sein de la boîte de l'élément grâce à la propriété [`object-position`](/fr/docs/Web/CSS/object-position).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

/* Valeurs globales */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: unset;
```

La propriété `object-fit` peut être définie grâce à l'un des mots-clés suivants.

### Valeurs

- `contain`
  - : Le contenu remplacé est dimensionné pour maintenir ses proportions tout en étant ajusté à la boîte de contenu&nbsp;: sa taille réelle est résolue en utilisant la largeur et la hauteur de l'élément comme contraintes de contenant.
- `cover`
  - : Le contenu remplacé est dimensionné pour maintenir son ratio d'affichage tout en remplissant toute la boîte de contenu. La taille réelle est calculée pour couvrir la zone décrite par la hauteur et la largeur de l'élément. Si les ratios de l'objet et de la boîte ne correspondent pas, le contenu remplacé sera rogné.
- `fill`
  - : Le contenu remplacé est dimensionné pour remplir la boîte de contenu. La taille réelle de l'objet est déterminée grâce à la hauteur et à la largeur de l'élément. Il est donc étiré afin de remplir la boîte.
- `none`
  - : Le contenu remplacé n'est pas redimensionné à l'intérieur de l'élément.
- `scale-down`
  - : Le contenu est dimensionné comme si `none` ou `contain` étaient spécifiés, on prend celui qui aboutirait à une taille réelle plus petite.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Appliquer `object-fit` à une image

#### HTML

```html
<section>
  <h2>object-fit: fill</h2>
  <img class="fill" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="fill narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="contain narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="cover narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <h2>object-fit: none</h2>
  <img class="none" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="none narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="mdn_logo_only_color.png" alt="Logo MDN" />

  <img class="scale-down narrow" src="mdn_logo_only_color.png" alt="Logo MDN" />
</section>
```

#### CSS

```css
h2 {
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
  margin: 10px 0;
}

.narrow {
  width: 100px;
  height: 150px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

#### Résultat

{{EmbedLiveSample('', 500, 1100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`background-size`](/fr/docs/Web/CSS/background-size)

- Les autres propriétés CSS liées aux images&nbsp;:
  - [`object-position`](/fr/docs/Web/CSS/object-position)
  - [`image-orientation`](/fr/docs/Web/CSS/image-orientation)
  - [`image-rendering`](/fr/docs/Web/CSS/Image-rendering)
  - [`image-resolution`](/fr/docs/Web/CSS/image-resolution)
