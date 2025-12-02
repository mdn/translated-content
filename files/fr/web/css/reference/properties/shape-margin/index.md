---
title: shape-margin
slug: Web/CSS/Reference/Properties/shape-margin
original_slug: Web/CSS/shape-margin
---

{{CSSRef}}

La propriété CSS **`shape-margin`** définit la marge autour d'une forme CSS créée avec {{cssxref("shape-outside")}}.

{{InteractiveExample("CSS Demo: shape-margin")}}

```css interactive-example-choice
shape-margin: 0;
```

```css interactive-example-choice
shape-margin: 20px;
```

```css interactive-example-choice
shape-margin: 1em;
```

```css interactive-example-choice
shape-margin: 5%;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
    We had agreed, my companion and I, that I should call for him at his house,
    after dinner, not later than eleven o’clock. This athletic young Frenchman
    belongs to a small set of Parisian sportsmen, who have taken up “ballooning”
    as a pastime. After having exhausted all the sensations that are to be found
    in ordinary sports, even those of “automobiling” at a breakneck speed, the
    members of the “Aéro Club” now seek in the air, where they indulge in all
    kinds of daring feats, the nerve-racking excitement that they have ceased to
    find on earth.
  </div>
</section>
```

```css interactive-example
.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  margin: 20px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: rebeccapurple;
  shape-outside: circle(50%);
}
```

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

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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
  We are not quite sure of any one thing in biology; our knowledge of geology is
  relatively very slight, and the economic laws of society are uncertain to
  every one except some individual who attempts to set them forth; but before
  the world was fashioned the square on the hypotenuse was equal to the sum of
  the squares on the other two sides of a right triangle, and it will be so
  after this world is dead; and the inhabitant of Mars, if he exists, probably
  knows its truth as we know it.
</section>
```

### Résultat

{{EmbedLiveSample("Exemples", 500, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Un aperçu des formes CSS](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("shape-outside")}}
- {{cssxref("shape-image-threshold")}}
- {{cssxref("&lt;basic-shape&gt;")}}
