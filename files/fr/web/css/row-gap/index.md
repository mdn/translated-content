---
title: row-gap (grid-row-gap)
slug: Web/CSS/row-gap
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/row-gap
---
{{CSSRef}}

La propriété **`row-gap`** définit la taille des gouttières entre les lignes d'un élément.

{{EmbedInteractiveExample("pages/css/grid-row-gap.html")}}

> **Note :** La propriété {{cssxref("grid-row-gap")}} a d'abord été définie avec le module de spécification [CSS Grid Layout](/fr/docs/Web/CSS/CSS_Grid_Layout). Cette propriété préfixée a ensuite été remplacée par `row-gap` dans le module [CSS Alignment](/fr/docs/Web/CSS/CSS_Box_Alignment) afin d'être généralisée à d'autres modes de disposition. Toutefois, à des fins de compatibilité envers les navigateurs qui n'implémentent pas encore la version non-préfixée, mieux vaut utiliser les deux versions.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <largeur>      */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* Valeurs proportionnelles */
/* Type <pourcentage> */
row-gap: 10%;

/* Valeurs globales */
row-gap: inherit;
row-gap: initial;
row-gap: unset;
```

### Valeurs

- `<pourcentage-largeur>`
  - : La largeur de la « gouttière » placée entre les lignes de la grille. Les valeurs exprimées en pourcentages sont relatives aux dimensions de l'élément.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Disposition flexible

{{SeeCompatTable}}

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### Résultat

{{EmbedLiveSample('Disposition_flexible', "auto", "120px")}}

### Disposition sur une grille

#### CSS

```css hidden
#grid {
  grid-row-gap: 20px;
}
```

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  background-color: lime;
}
```

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### Résultat

{{EmbedLiveSample('Disposition_sur_une_grille', 'auto', 120)}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS3 Box Alignment", "#propdef-row-gap", "row-gap")}} | {{Spec2("CSS3 Box Alignment")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

### Prise en charge pour les dispositions flexibles

{{Compat("css.properties.row-gap.flex_context")}}

### Prise en charge pour les grilles

{{Compat("css.properties.row-gap.grid_context")}}

## Voir aussi

- Les versions sans préfixe des propriétés :

  - {{cssxref("column-gap")}}
  - {{cssxref("gap")}}

- [Guide : les concepts de base : les gouttières](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base#Les_gouttières)
- [Guide : les concepts de base des boîtes flexibles (flexbox)](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Concepts_de_base_flexbox)
