---
title: object-fit
slug: Web/CSS/object-fit
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/object-fit
---
{{CSSRef}}

La propriété CSS **`object-fit`** définit la façon dont le contenu d'un [élément remplacé](/fr/docs/Web/CSS/Élément_remplacé) ({{HTMLElement("img")}} ou {{HTMLElement("video")}} par exemple) doit s'adapter à son conteneur en utilisant sa largeur et sa hauteur.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

Selon la valeur utilisée pour `object-fit`, l'élément peut être rogné, mis à l'échelle ou étiré, afin de remplir la boîte qui le contient.

> **Note :** Il est possible de modifier l'alignement du contenu de l'élément remplacé au sein de la boîte de l'élément grâce à la propriété {{cssxref("object-position")}}.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
object-fit: fill;
object-fit: contain;
object-fit: cover;
object-fit: none;
object-fit: scale-down;

/* Valeurs globales */
object-fit: inherit;
object-fit: initial;
object-fit: unset;
```

La propriété `object-fit` peut être définie grâce à l'un des mots-clés suivants.

### Valeurs

- `contain`
  - : Le contenu remplacé est dimensionné pour maintenir ses proportions tout en étant ajusté à la boîte de contenu : sa taille réelle est résolue en utilisant la largeur et la hauteur de l'élément comme contraintes de contenant.
- `cover`
  - : Le contenu remplacé est dimensionné pour maintenir son ratio d'affichage tout en remplissant toute la boîte de contenu. La taille réelle est calculée pour couvrir la zone décrite par la hauteur et la largeur de l'élément. Si les ratios de l'objet et de la boîte ne correspondent pas, le contenu remplacé sera rogné.
- `fill`
  - : Le contenu remplacé est dimensionné pour remplir la boîte de contenu. La taille réelle de l'objet est déterminée grâce à la hauteur et à la largeur de l'élément. Il est donc étiré afin de remplir la boîte.
- `none`
  - : Le contenu remplacé n'est pas redimensionné à l'intérieur de l'élément.
- `scale-down`
  - : Le contenu est dimensionné comme si `none` ou `contain` étaient spécifiés, on prend celui qui aboutirait à une taille réelle plus petite.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <h2>object-fit: fill</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="fill"/>

  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="fill narrow"/>

  <h2>object-fit: contain</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="contain"/>

  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="contain narrow"/>

  <h2>object-fit: cover</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="cover"/>

  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="cover narrow"/>

  <h2>object-fit: none</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="none"/>

  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="none narrow"/>

  <h2>object-fit: scale-down</h2>
  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="scale-down"/>

  <img src="https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png" alt="MDN Logo" class="scale-down narrow"/>

</div>
```

### CSS

```css
h2 {
  font-family: 'Courier New', monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 940px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.narrow {
  width: 100px;
  height: 150px;
  margin-top: 10px;
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

### Résultat

{{EmbedLiveSample('Exemples', 500, 450)}}

## Spécifications

| Spécification                                                                    | État                             | Commentaires                                          |
| -------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------- |
| {{SpecName('CSS4 Images', '#the-object-fit', 'object-fit')}} | {{Spec2('CSS4 Images')}} | Les mots-clés `from-image` et `flip` ont été ajoutés. |
| {{SpecName('CSS3 Images', '#the-object-fit', 'object-fit')}} | {{Spec2('CSS3 Images')}} | Définition initiale.                                  |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.object-fit")}}

## Voir aussi

- {{cssxref("background-size")}}
- Les autres propriétés CSS liées aux images :

  - {{cssxref("object-position")}}
  - {{cssxref("image-orientation")}}
  - {{cssxref("image-rendering")}}
  - {{cssxref("image-resolution")}}
