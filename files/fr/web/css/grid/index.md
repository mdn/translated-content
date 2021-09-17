---
title: grid
slug: Web/CSS/grid
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/grid
---
{{CSSRef}}

La propriété **`grid`** est une propriété raccourcie qui permet de définir toutes les propriétés liées aux grilles CSS, qu'elles soient explicites ({{cssxref("grid-template-rows")}}, {{cssxref("grid-template-columns")}} et {{cssxref("grid-template-areas")}}), implicites ({{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}} et {{cssxref("grid-auto-flow")}}).

{{EmbedInteractiveExample("pages/css/grid.html")}}

> **Note :** Une seule déclaration `grid` permettra uniquement de définir les propriétés explicites ou implicites. Les propriétés qui ne sont pas définies via la propriété raccourcie prendront leurs valeurs initiales. Les propriétés d'espacement ne sont pas surchargées par cette propriété raccourcie.

## Syntaxe

```css
/* Valeurs <'grid-template'> */
grid: none;
grid: "a" 100px "b" 1fr;
grid: [linename1] "a" 100px [linename2];
grid: "a" 200px "b" min-content;
grid: "a" minmax(100px, max-content) "b" 20%;
grid: 100px / 200px;
grid: minmax(400px, min-content) / repeat(auto-fill, 50px);

/* <'grid-template-rows'> /
   [ auto-flow && dense? ] <'grid-auto-columns'>? values */
grid: 200px / auto-flow;
grid: 30% / auto-flow dense;
grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px;
grid: [line1] minmax(20em, max-content) / auto-flow dense 40%;

/* [ auto-flow && dense? ] <'grid-auto-rows'>? /
   <'grid-template-columns'> values */
grid: auto-flow / 200px;
grid: auto-flow dense / 30%;
grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px);
grid: auto-flow dense 40% / [line1] minmax(20em, max-content);

/* Valeurs globales */
grid: inherit;
grid: initial;
grid: unset;
```

### Valeurs

Pour plus de détails, voir les pages de chacune des propriétés : {{cssxref("grid-template")}}, {{cssxref("grid-auto-flow")}}, {{cssxref("grid-auto-rows")}}, {{cssxref("grid-auto-columns")}}.

- `<'grid-template'>`
  - : Définit {{cssxref("grid-template")}}, ce qui inclut {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} et {{cssxref("grid-template-areas")}}.
- `<'grid-auto-flow'>`
  - : Définit {{cssxref("grid-auto-flow")}} qui indique le fonctionnement de l'algorithme de placement automatique et qui détaille exactement comment les éléments placés automatiquement « coulent » dans la grille.
- `<'grid-auto-rows'>`
  - : Définit {{cssxref("grid-auto-rows")}} qui indique la taille des pistes créées pour les lignes de façon implicite.
- `<'grid-auto-columns'>`
  - : Définit {{cssxref("grid-auto-columns")}} qui indique la taille des pistes créées pour les colonnes de façon implicite.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#container {
  display: grid;
  grid: repeat(2, 60px) / auto-flow 80px;
}

#container > div {
  background-color: #8ca0ff;
  width: 50px;
  height: 50px;
}
```

### HTML

```html
<div id="container">
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

### Résultat

{{EmbedLiveSample("Exemples", "100%", 150)}}

## Spécifications

| Spécification                                                        | État                         | Commentaires         |
| -------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS3 Grid", "#propdef-grid", "grid")}} | {{Spec2("CSS3 Grid")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.grid")}}

## Voir aussi

- {{cssxref("grid-template")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-flow")}}
- [Guide : Placer les éléments d'une grille sur les lignes](/fr/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Guide : Les zones de grilles et les propriétés raccourcies](/fr/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas#les_propri%c3%a9t%c3%a9s_raccourcies_pour_les_grilles_css)
