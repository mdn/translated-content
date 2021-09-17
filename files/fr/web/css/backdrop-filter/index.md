---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/backdrop-filter
---
{{CSSRef}}{{SeeCompatTable}}

La propriété CSS **`backdrop-filter`** permet d'obtenir un effet de flou ou de diffusion de la couleur sur la zone derrière l'élément. L'effet étant situé _derrière_ l'élément, il pourra être observé en ajustant la transparence de l'élément.

```css
/* Valeur avec un mot-clé */
backdrop-filter: none;

/* Une valeur d'URL vers un filtre SVG */
backdrop-filter: url(commonfilters.svg#filter);

/* Les notations fonctionnelles pour les filtres */
/* Valeur de type <filter-function> */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* On enchaîne plusieurs filtres */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Valeurs globales */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: unset;
```

{{cssinfo}}

## Syntaxe

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'aucun filtre n'est appliqué sur l'ombre portée.
- `<filter-function-list>`
  - : Une liste de fonctions de filtre (cf. {{cssxref("&lt;filter-function&gt;")}}), séparées par des espaces et qui seront appliquées à l'ombre. Les différentes fonctions qui peuvent être utilisées sont les mêmes que pour la propriété {{cssxref("filter")}}. On peut également utilisere [un filtre SVG](/fr/docs/Web/SVG/Element/filter).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html, body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url('https://lorempixel.com/400/200/');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples', "600", "400")}}

## Spécifications

| Spécification                                                                                    | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('Filters 2.0', '#BackdropFilterProperty', 'backdrop-filter')}} | {{Spec2('Filters 2.0')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.properties.backdrop-filter")}}

## Voir aussi

- {{cssxref("filter")}}
- [Construire des effets de transparences comme sur iOS avec `backdrop-filter` (en anglais)](https://product.voxmedia.com/til/2015/2/17/8053347/css-ios-transparency-with-webkit-backdrop-filter)
