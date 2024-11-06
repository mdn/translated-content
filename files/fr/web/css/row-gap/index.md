---
title: row-gap (grid-row-gap)
slug: Web/CSS/row-gap
---

{{CSSRef}}

La propriété **`row-gap`** définit la taille des espaces ({{glossary("gutters", "gouttières")}}) entre les lignes d'un élément.

{{EmbedInteractiveExample("pages/css/row-gap.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <largeur>      */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;

/* Valeurs proportionnelles */
/* Type <pourcentage>       */
row-gap: 10%;

/* Valeurs globales */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: unset;
```

### Valeurs

- [`<length-percentage>`](/fr/docs/Web/CSS/length-percentage)
  - : La largeur de la « gouttière » placée entre les lignes de la grille. Les valeurs exprimées en pourcentages ([`<percentage>`](/fr/docs/Web/CSS/percentage)) sont relatives aux dimensions de l'élément.

## Formal definition

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Disposition flexible

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

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  row-gap: 20px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Résultat

{{EmbedLiveSample('', "auto", "240px")}}

### Disposition en grille

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample('', 'auto', '240px')}}

## Spécifications

{{Specifications("css.properties.row-gap.grid_context")}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés relatives aux gouttières&nbsp;: [`column-gap`](/fr/docs/Web/CSS/column-gap), [`gap`](/fr/docs/Web/CSS/gap)
- Guide sur les grilles&nbsp;: _[Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#les_gouttières)_
