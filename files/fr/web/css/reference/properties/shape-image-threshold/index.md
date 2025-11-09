---
title: shape-image-threshold
slug: Web/CSS/Reference/Properties/shape-image-threshold
original_slug: Web/CSS/shape-image-threshold
---

{{CSSRef}}

La propriété **`shape-image-threshold`** définit le seuil, en terme de canal alpha, à utiliser pour extraire la forme d'une image. Cette forme pourra être utilisée pour {{cssxref("shape-outside")}}.

{{InteractiveExample("CSS Demo: shape-image-threshold")}}

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77, 26, 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.2;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77, 26, 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.4;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77, 26, 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.6;
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
  width: 150px;
  height: 150px;
  margin: 20px;
  background-image: linear-gradient(
    50deg,
    rgb(77, 26, 103),
    transparent 80%,
    transparent
  );
}
```

Touts les pixels dont la composante alpha est supérieure à ce seuil seront retenus pour délimiter les contours de la formes. Une valeur de 0.5 indiquera par exemple qu'on prend la forme qui englobe tous les pixels dont l'opacité est supérieure à 50%.

## Syntaxe

```css
/* Quantité seuil  */
/* Valeur <number> */
shape-image-threshold: 0.7;

/* Valeurs globales */
shape-image-threshold: inherit;
shape-image-threshold: initial;
shape-image-threshold: unset;
```

### Valeurs

- `<number>`
  - : Un nombre ({{cssxref("&lt;number&gt;")}}) représentant le seuil utilisé pour extraire une forme d'une image. La forme est définie par les pixels dont la valeur du canal alpha est supérieur au seuil indiqué. Un seuil qui est inférieur à 0.0 (transparence totale) ou supérieur à 1.0 (opacité totale) sera ramené dans cet intervalle.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans cet exemple, on utilise un bloc {{HTMLElement("div")}} pour y afficher une image d'arrière-plan avec un dégradé. On retrouve ce dégradé dans une forme CSS avec la propriété `shape-outside` et on utilise `shape-image-threshold` afin de ne retenir que les pixels dont l'opacité est supérieure ou égale à 20% pour délimiter la forme.

### CSS

```css
#gradient-shape {
  width: 150px;
  height: 150px;
  float: left;
  background-image: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-outside: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-image-threshold: 0.2;
}
```

### HTML

```html
<div id="gradient-shape"></div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at commodi
  voluptates enim, distinctio officia. Saepe optio accusamus doloribus sint
  facilis itaque ab nulla, dolor molestiae assumenda cum sit placeat adipisci,
  libero quae nihil porro debitis laboriosam inventore animi impedit nostrum
  nesciunt quisquam expedita! Dolores consectetur iure atque a mollitia dicta
  repudiandae illum exercitationem aliquam repellendus ipsum porro modi, id nemo
  eligendi, architecto ratione quibusdam iusto nisi soluta? Totam inventore ea
  eum sed velit et eligendi suscipit accusamus iusto dolore, at provident eius
  alias maxime pariatur non deleniti ipsum sequi rem eveniet laboriosam magni
  expedita?
</p>
```

### Résultat

{{EmbedLiveSample('Exemples', "600px", "230px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Un aperçu des formes CSS](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("shape-outside")}}
- {{cssxref("shape-margin")}}
