---
title: gap (grid-gap)
slug: Web/CSS/gap
tags:
  - CSS
  - Propriété
  - Propriété raccourcie
  - Reference
translation_of: Web/CSS/gap
---
{{CSSRef}}

La propriété **`gap`** est [une propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) pour {{cssxref("row-gap")}} et {{cssxref("column-gap")}} qui permet de définir les espaces entre les lignes et entre les colonnes d'une grille.

{{EmbedInteractiveExample("pages/css/gap.html")}}

> **Note :** La propriété {{cssxref("grid-gap")}} a initialement été définie dans le module de spécification [CSS Grid Layout](/fr/docs/Web/CSS/CSS_Grid_Layout). Cette version préfixée a été remplacée par `gap`. Toutefois, à des fins de compatibilité envers les navigateurs qui n'implémentent pas encore la version non-préfixée, mieux vaut utiliser les deux versions.

## Syntaxe

```css
/* Une valeur de longueur */
/* Type <length>          */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* Une valeur proportionnelle */
/* Type <percentage>          */
gap: 16%;
gap: 100%;

/* Deux valeurs de longueur */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* Une ou deux valeurs proportionnelles */
/* Type <percentage>             */
gap: 16% 100%;
gap: 21px 82%;

/* Valeurs calc() */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Valeurs globales */
gap: inherit;
gap: initial;
gap: unset;
```

Cette propriété est définie avec une valeur `<'row-gap'>`, éventuellement suivi d'une valeur `<'column-gap'>`. Si `<'column-gap'>` n'est pas utilisée, la valeur utilisée sera la même que `<'row-gap'>`.

`<'row-gap'>` et `<'column-gap'>` sont des valeurs de type `<length>` ou `<percentage>`.

### Valeurs

- `<length>`
  - : La largeur de l'espace entre les lignes et/ou entre les colonnes (cf. {{cssxref("&lt;length&gt;")}} pour les valeurs utilisables).
- `<percentage>`
  - : La largeur de l'espace entre les lignes et/ou entre les colonnes en fonction de la taille de l'élément englobant (cf. {{cssxref("&lt;percentage&gt;")}} pour les valeurs utilisables).

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Disposition flexible

{{SeeCompatTable}}

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
  gap: 20px 5px;
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

{{EmbedLiveSample("Disposition_flexible", "auto", "120px")}}

### Grilles CSS

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css hidden
#grid {
  grid-gap: 20px 5px;
}
```

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("Grilles_CSS", "auto", "120px")}}

### Multi-colonnes

#### HTML

```html
<p class="content-box">
  voici un texte en multi-colonne sur des colonnes avec
  une gouttière de 40 pixels créée grâce à la propriété
  CSS <code>gap</code>. Est-ce que c'est pas trop génial ?
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Résultat

{{EmbedLiveSample("Multi-column_layout", "auto", "120px")}}

## Spécifications

| Spécification                                                                | État                                     | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName("CSS3 Box Alignment", "#propdef-gap", "gap")}} | {{Spec2("CSS3 Box Alignment")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

### Prise en charge pour les dispositions flexibles

{{Compat("css.properties.gap.flex_context")}}

### Prise en charge pour les grilles CSS

{{Compat("css.properties.gap.grid_context")}}

### Prise en charge pour les dispositions multi-colonnes

{{Compat("css.properties.gap.multicol_context")}}

## Voir aussi

- Les versions standards, sans préfixe, des propriétés associées :

  - {{cssxref("row-gap")}},
  - {{cssxref("column-gap")}},

- [Guide : les concepts de base : les gouttières](/fr/docs/Web/CSS/CSS_Grid_Layout/Les_concepts_de_base#Les_gouttières)
