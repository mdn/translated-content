---
title: Propriété CSS `shape-margin`
short-title: shape-margin
slug: Web/CSS/Reference/Properties/shape-margin
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`shape-margin`** définit la marge autour d'une forme CSS créée avec {{CSSxRef("shape-outside")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: shape-margin")}}

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
    Nous avions convenu, mon compagnon et moi, que je devrais passer le voir
    chez lui, après le dîner, pas plus tard que onze heures. Ce jeune Français
    athlétique appartient à un petit groupe de sportifs parisiens, qui se sont
    adonnés au «&nbsp;ballon&nbsp;» comme passe-temps. Après avoir épuisé toutes
    les sensations que l'on peut trouver dans les sports ordinaires, même celles
    de «&nbsp;l'automobile&nbsp;» à toute vitesse, les membres de «&nbsp;l'Aéro
    Club&nbsp;» recherchent maintenant dans les airs, où ils se livrent à toutes
    sortes d'exploits audacieux, l'excitation nerveuse qu'ils ont cessé de
    trouver sur terre.
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

La marge permet d'ajuster la distance entre le contour de la forme (**l'élément flottant**) et le contenu autour.

## Syntaxe

```css
/* Valeur de type <length> */
shape-margin: 10px;
shape-margin: 20mm;

/* Valeur de type <percentage> */
shape-margin: 60%;

/* Valeurs globales */
shape-margin: inherit;
shape-margin: initial;
shape-margin: revert;
shape-margin: revert-layer;
shape-margin: unset;
```

### Valeurs

- `<length-percentage>`
  - : Définit la marge de la forme à une valeur de type {{CSSxRef("&lt;length&gt;")}} ou à un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) de la largeur du bloc englobant de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ajouter une marge à un polygone

#### HTML

```html
<section>
  <div class="shape"></div>
  Nous ne sommes pas tout à fait sûrs de quoi que ce soit en biologie&nbsp;; nos
  connaissances en géologie sont relativement très limitées, et les lois
  économiques de la société sont incertaines pour tout le monde, sauf pour
  certains individus qui tentent de les exposer&nbsp;; mais avant que le monde
  ne soit façonné, le carré sur l'hypoténuse était égal à la somme des carrés
  sur les deux autres côtés d'un triangle rectangle, et il en sera de même après
  la mort de ce monde&nbsp;; et l'habitant de Mars, s'il en existe un, connaît
  probablement sa vérité comme nous la connaissons.
</section>
```

#### CSS

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

#### Result

{{EmbedLiveSample("Ajouter une marge à un polygone", 500, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Un aperçu des formes CSS](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
- La propriété {{CSSxRef("shape-outside")}}
- La propriété {{CSSxRef("shape-image-threshold")}}
