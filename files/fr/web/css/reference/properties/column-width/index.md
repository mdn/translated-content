---
title: column-width
slug: Web/CSS/Reference/Properties/column-width
original_slug: Web/CSS/column-width
---

{{CSSRef}}

La propriété **`column-width`** définit une largeur de colonne idéale lorsqu'on utilise une disposition en colonnes. Aussi, on aura le plus de colonnes possible et pour lesquelles aucune n'est moins large que `column-width`. La colonne réelle peut être plus petite que cette taille si son conteneur est moins large que cette valeur.

{{InteractiveExample("CSS Demo: column-width")}}

```css interactive-example-choice
column-width: auto;
```

```css interactive-example-choice
column-width: 6rem;
```

```css interactive-example-choice
column-width: 120px;
```

```css interactive-example-choice
column-width: 18ch;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  columns: auto;
  text-align: left;
}
```

Ainsi, si on a une colonne large de 300px avec un écart de 0px, on pourrait placer une seule colonne sur 599px mais avoir deux colonnes avec 600px. Ce réglage permet donc d'obtenir des effets qui s'adaptent aux différentes tailles d'écrans. Manipulée avec la propriété {{cssxref("column-count")}} qui a la précédence, il est nécessaire de définir toutes les valeurs de longueur pour avoir une largeur de colonne CSS exacte. Pour du texte horizontal, ces propriétés sont {{cssxref('width')}}, {{cssxref('column-width')}}, {{cssxref('column-gap')}} et {{cssxref('column-rule-width')}}.

## Syntaxe

```css
/* Valeur avec un mot-clé */
column-width: auto;

/* Valeurs de longueur */
/* Type <length>       */
column-width: 60px;
column-width: 15.5em;
column-width: 3.3vw;

/* Valeurs globales */
column-width: inherit;
column-width: initial;
column-width: unset;
```

### Valeurs

- `<length>`
  - : Une valeur de longueur (type {{cssxref("&lt;length&gt;")}}) qui fournit une indication sur la largeur optimale d'une colonne. La colonne réelle peut être plus large que cette longueur (pour remplir l'espace disponible) ou plus étroite (uniquement si l'espace disponible est inférieur à la largeur indiquée). La longueur exprimée doit être strictement positive sinon la déclaration est considérée invalide. Les valeurs exprimées en pourcentages sont invalides.
- `auto`
  - : Un mot-clé indiquant que la largeur de la colonne doit être déterminée grâce aux autres propriétés CSS comme {{cssxref("column-count")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.content-box {
  border: 10px solid #0ff;

  -webkit-column-width: 100px;
  -moz-column-width: 100px;
  column-width: 100px;
}
```

### HTML

```html
<div class="content-box">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
  enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
  nisl ut aliquip ex ea commodo consequat.
</div>
```

### Résultat

{{EmbedLiveSample('Exemples', '300px', '200px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre - La disposition multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Les concepts de base pour la disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
