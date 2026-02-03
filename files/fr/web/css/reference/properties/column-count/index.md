---
title: column-count
slug: Web/CSS/Reference/Properties/column-count
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-count`** divise le contenu d'un élément en le répartissant dans le nombre de colonnes à définir.

{{InteractiveExample("CSS Demo: column-count")}}

```css interactive-example-choice
column-count: 2;
```

```css interactive-example-choice
column-count: 3;
```

```css interactive-example-choice
column-count: 4;
```

```css interactive-example-choice
column-count: auto;
column-width: 8rem;
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
  text-align: left;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-count: auto;

/* Valeurs de type <number> */
column-count: 3;

/* Valeurs globales */
column-count: inherit;
column-count: initial;
column-count: revert;
column-count: revert-layer;
column-count: unset;
```

### Valeurs

- `auto`
  - : Le nombre de colonnes est déterminé par d'autres propriétés CSS, telles que {{CSSxRef("column-width")}}.
- {{CSSxRef("&lt;integer&gt;")}}
  - : Est un entier ({{CSSxRef("&lt;integer&gt;")}}) strictement positif décrivant le nombre idéal de colonnes dans lesquelles le contenu de l'élément est réparti. Si la largeur de colonne ({{CSSxRef("column-width")}}) est également définie sur une valeur qui n'est pas `auto`, elle indique simplement le nombre maximal de colonnes autorisé.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Diviser un paragraphe en trois colonnes

#### HTML

```html
<p class="boite-de-contenu">
  Il s'agit d'un bloc de texte réparti en trois colonnes grâce à la propriété
  CSS <code>column-count</code>. Le texte est réparti également entre les
  colonnes.
</p>
```

#### CSS

```css
.boite-de-contenu {
  column-count: 3;
}
```

#### Résultat

{{EmbedLiveSample("Exemples", "auto", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("column-width")}} et raccourcie {{CSSxRef("columns")}}
- Les propriétés {{CSSxRef("column-rule-color")}}, {{CSSxRef("column-rule-style")}}, {{CSSxRef("column-rule-width")}} et raccourcie {{CSSxRef("column-rule")}}
- [Apprendre&nbsp;: La disposition multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
- [Les concepts de bases pour la disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
