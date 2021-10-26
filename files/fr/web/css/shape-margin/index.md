---
title: shape-margin
slug: Web/CSS/shape-margin
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/shape-margin
---
{{CSSRef}}

La propriété CSS **`shape-margin`** définit la marge autour d'une forme CSS créée avec {{cssxref("shape-outside")}}.

{{EmbedInteractiveExample("pages/css/shape-margin.html")}}

La marge permet d'ajuster la distance entre le contour de la forme (l'élément flottant) et le contenu autour.

```css
/* Valeur de longueur */
/* Type <length> */
shape-margin: 10px;
shape-margin: 20mm;

/* Valeur proportionnelle */
/* Type <percentage> */
shape-margin: 60%;

/* Valeurs globales */
shape-margin: inherit;
shape-margin: initial;
shape-margin: unset;
```

## Syntaxe

### Valeurs

- `<length-percentage>`
  - : Cette valeur définit la marge entre la forme et le texte alentour grâce à une longueur (cf. {{cssxref("&lt;length&gt;")}}) ou à un pourcentage ({{cssxref("&lt;percentage&gt;")}}) proportionnel à la largeur du bloc englobant de l'élément.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
section {
  max-width: 400px;
}

.shape {
  float: left;
  width: 150px;
  height: 150px;
  background-color: maroon;
  clip-path: polygon(0 0, 150px 150px, 0 150px);
  shape-outside: polygon(0 0, 150px 150px, 0 150px);
  shape-margin: 20px;
}
```

### HTML

```html
<section>
  <div class="shape"></div>
  We are not quite sure of any one thing in biology; our knowledge of geology
  is relatively very slight, and the economic laws of society are
  uncertain to every one except some individual who attempts to set them
  forth; but before the world was fashioned the square on the hypotenuse
  was equal to the sum of the squares on the other two sides of a right
  triangle, and it will be so after this world is dead; and the inhabitant
  of Mars, if he exists, probably knows its truth as we know it.
</section>
```

### Résultat

{{EmbedLiveSample("Exemples", 500, 250)}}

## Spécifications

| Spécification                                                                                | État                             | Commentaires         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS Shapes', '#shape-margin-property', 'shape-margin')}} | {{Spec2('CSS Shapes')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.shape-margin")}}

## Voir aussi

- [Les formes CSS](/fr/docs/Web/CSS/CSS_Shapes)
- [Un aperçu des formes CSS](/fr/docs/Web/CSS/CSS_Shapes/Aperçu_formes_CSS)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("&lt;basic-shape&gt;")}}
