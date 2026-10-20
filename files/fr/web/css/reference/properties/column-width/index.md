---
title: Propriété CSS `column-width`
short-title: column-width
slug: Web/CSS/Reference/Properties/column-width
l10n:
  sourceCommit: d1cf7346516383565b51a125c064ae3d5d893526
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-width`** définit la largeur optimale d'une colonne dans une disposition à plusieurs colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-width")}}

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
    Londres. Le trimestre de Michaelmas venait de se terminer, et le lord
    chancelier siégeait dans la salle de Lincoln's Inn. Un novembre implacable.
    Tant de boue dans les rues comme si les eaux venaient tout juste de se
    retirer de la surface de la terre, et il ne serait pas étonnant de
    rencontrer un Megalosaurus, quarante pieds de long environ, se dandinant
    comme un lézard éléphantesque en montant Holborn Hill.
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

## Syntaxe

```css
/* Valeur avec un mot-clé */
column-width: auto;

/* Valeurs de type <length> */
column-width: 60px;
column-width: 15.5em;
column-width: 3.3vw;

/* Valeurs globales */
column-width: inherit;
column-width: initial;
column-width: revert;
column-width: revert-layer;
column-width: unset;
```

### Valeurs

Cette propriété est définie par l'une des valeurs suivantes&nbsp;:

- {{CSSxRef("&lt;length&gt;")}}
  - : Indique la largeur optimale d'une colonne. La largeur réelle de la colonne peut différer de la valeur définie&nbsp;: elle peut être plus large si nécessaire pour remplir l'espace disponible, et plus étroite lorsque l'espace disponible est trop petit. La valeur doit être strictement positive sinon la déclaration est invalide. Les valeurs exprimées en pourcentage sont également invalides.
- `auto`
  - : Un mot-clé indiquant que la largeur de la colonne doit être déterminée grâce aux autres propriétés CSS, comme {{CSSxRef("column-count")}}.

## Description

La propriété `column-width` définit la largeur de colonne préférée dans une disposition à plusieurs colonnes. Le conteneur a autant de colonnes que possible sans qu'aucune d'entre elles n'ait une largeur inférieure à la valeur de `column-width`. Si la largeur du conteneur est inférieure à la valeur définie, la largeur de la colonne unique est inférieure à la largeur de colonne déclarée.

Cette propriété peut vous aider à créer des conceptions réactives qui s'adaptent à différentes tailles d'écran. Surtout en présence de la propriété {{CSSxRef("column-count")}} (qui a la priorité), vous devez définir toutes les valeurs de longueur associées pour obtenir une largeur de colonne exacte. Dans le texte horizontal, il s'agit de {{CSSxRef("width")}}, `column-width`, {{CSSxRef("column-gap")}}, et {{CSSxRef("column-rule-width")}}.

La propriété `column-width`, ainsi que les propriétés {{CSSxRef("column-height")}} et {{CSSxRef("column-count")}}, peut également être définie à l'aide du raccourci {{CSSxRef("columns")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la largeur de colonne en pixels

#### HTML

```html
<div class="content-box">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
  enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
  nisl ut aliquip ex ea commodo consequat.
</div>
```

#### CSS

```css
.content-box {
  column-width: 100px;
}
```

#### Résultat

{{EmbedLiveSample("Définir la largeur de colonne en pixels", "auto", 160)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("column-count")}}
- La propriété {{CSSxRef("column-height")}}
- La propriété raccourcie {{CSSxRef("columns")}}
- [Apprendre&nbsp;: La disposition à plusieurs colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Les concepts de base pour la disposition à plusieurs colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
