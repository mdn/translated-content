---
title: border-image
slug: Web/CSS/border-image
translation_of: Web/CSS/border-image
---
{{CSSRef}}

La propriété **`border-image`** dessine une image sur la bordure d'un élément.

{{EmbedInteractiveExample("pages/css/border-image.html")}}

> **Note :** Il est préférable d'indiquer un style de bordure distinct avec [`border-style`](/fr/docs/Web/CSS/border-style) dans le cas où l'image ne chargerait pas. Bien que la spécification ne le nécessite pas, certains navigateurs n'affichent pas l'image de bordure si [`border-style`](/fr/docs/Web/CSS/border-style) vaut `none` ou si [`border-width`](/fr/docs/Web/CSS/border-width) vaut `0`.

## Propriétés détaillées correspondantes

C'est [une propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) qui permet de définir&nbsp;:

- [`border-image-outset`](/fr/docs/Web/CSS/border-image-outset)
- [`border-image-repeat`](/fr/docs/Web/CSS/border-image-repeat)
- [`border-image-source`](/fr/docs/Web/CSS/border-image-source)
- [`border-image-slice`](/fr/docs/Web/CSS/border-image-slice)
- [`border-image-width`](/fr/docs/Web/CSS/border-image-width)

## Syntaxe

```css
/* source | slice */
border-image: linear-gradient(red, blue) 27;

/* source | slice | repeat */
border-image: url("/images/border.png") 27 space;

/* source | slice | width */
border-image: linear-gradient(red, blue) 27 / 35px;

/* source | slice | width | outset | repeat */
border-image: url("/images/border.png") 27 23 / 50px 30px / 1rem round space;

/* Valeurs globales */
border-image: inherit;
border-image: initial;
border-image: revert;
border-image: unset;
```

La propriété `border-image` peut être définie avec une à cinq valeurs parmi celles définies ci-après.

> **Note :** Si la [valeur calculée](/fr/docs/Web/CSS/computed_value) de [`border-image-source`](/fr/docs/Web/CSS/border-image-source) vaut `none` ou si l'image ne peut pas être affichée, c'est le [`border-style`](/fr/docs/Web/CSS/border-style) correspondant qui sera affiché.

### Valeurs

- `border-image-source`
  - : L'image source. Voir [`border-image-source`](/fr/docs/Web/CSS/border-image-source).
- `border-image-slice`
  - : La façon dont l'image est découpée en zones (jusqu'à 4). Voir [`border-image-slice`](/fr/docs/Web/CSS/border-image-slice).
- `border-image-width`
  - : La largeur de la bordure avec l'image. Voir [`border-image-width`](/fr/docs/Web/CSS/border-image-width).
- `border-image-outset`
  - : La distance entre la bordure et le bord de l'élément. Voir [`border-image-outset`](/fr/docs/Web/CSS/border-image-outset).
- `border-image-repeat`
  - : La façon dont l'image source est adaptée afin de correspondre aux dimensions de la bordure. Voir [`border-image-repeat`](/fr/docs/Web/CSS/border-image-repeat).

## Accessibilité

Les technologies d'assistance ne peuvent pas analyser les images de bordure. Si l'image contient des informations essentielles au sens de la page, mieux vaut décrire ces informations dans le contenu sémantique du document.

- [Comprendre les règles WCAG 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_%E2%80%94_Providing_text_alternatives_for_non-text_content)
- [Comprendre les critères pour 1.1.1 | Comprendre WCAG 2.0 (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Utiliser une image matricielle étirée

On découpe l'image et on la répète pour remplir la zone entre les bordures.

#### HTML

```html
<div id="bitmap">L'image est étirée pour remplir l'espace.</div>
```

#### CSS

```css
#bitmap {
  border: 30px solid transparent;
  padding: 20px;
  border-image: url("border.png") 30;
}
```

#### Résultat

{{EmbedLiveSample('')}}

### Utiliser un dégradé

#### HTML

```html
<div id="gradient">L'image formée par le dégradé est étirée pour remplir la zone.</div>
```

#### CSS

```css
#gradient {
  border: 30px solid;
  border-image: linear-gradient(red, yellow) 10;
  padding: 20px;
}
```

#### Résultat

{{EmbedLiveSample('')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`border`](/fr/docs/Web/CSS/border)
- [`outline`](/fr/docs/Web/CSS/outline)
- [`box-shadow`](/fr/docs/Web/CSS/box-shadow)
- [`background-image`](/fr/docs/Web/CSS/background-image)
- La fonction [`url()`](/fr/docs/Web/CSS/url())
- Fonctions pour les dégradés&nbsp;:

  - [`conic-gradient()`](/fr/docs/Web/CSS/gradient/conic-gradient())
  - [`linear-gradient()`](/fr/docs/Web/CSS/gradient/linear-gradient())
  - [`repeating-linear-gradient()`](/fr/docs/Web/CSS/gradient/repeating-linear-gradient())
  - [`radial-gradient()`](/fr/docs/Web/CSS/gradient/radial-gradient())
  - [`repeating-radial-gradient()`](/fr/docs/Web/CSS/gradient/repeating-radial-gradient())
