---
title: column-width
slug: Web/CSS/Reference/Properties/column-width
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-width`** définit la largeur optimale d'une colonne dans une mise en page multi-colonnes. Le conteneur comporte autant de colonnes que l'espace le permet, sans qu'aucune d'elles n'ait une largeur inférieure à la valeur `column-width`. Si la largeur du conteneur est inférieure à la valeur définie, la largeur de la colonne unique sera plus petite que la largeur déclarée.

Cette propriété vous aide à créer des mises en page réactives adaptées à différentes tailles d'écran. En particulier, en présence de la propriété {{CSSxRef("column-count")}} (qui a la priorité), vous devez définir toutes les longueurs associées pour obtenir une largeur de colonne exacte. Dans le texte horizontal, il s'agit de {{CSSxRef('width')}}, `column-width`, {{CSSxRef('column-gap')}} et {{CSSxRef('column-rule-width')}}.

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

La propriété `column-width` est définie par l'une des valeurs listées ci‑dessous.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Indique la largeur optimale d'une colonne. La largeur réelle de la colonne peut différer de la valeur définie&nbsp;: elle peut être plus large si nécessaire pour remplir l'espace disponible, et plus étroite lorsque l'espace disponible est trop petit. La valeur doit être strictement positive sinon la déclaration est invalide. Les valeurs exprimées en pourcentage sont également invalides.
- `auto`
  - : Un mot-clé indiquant que la largeur de la colonne doit être déterminée grâce aux autres propriétés CSS, comme {{CSSxRef("column-count")}}.

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

- [Apprendre&nbsp;: La disposition multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Les concepts de base pour la disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
