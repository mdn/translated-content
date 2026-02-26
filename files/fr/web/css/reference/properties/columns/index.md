---
title: columns
slug: Web/CSS/Reference/Properties/columns
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`columns`** permet de définir le nombre de colonnes à utiliser pour afficher le contenu d'un élément, ainsi que la largeur de ces colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: columns")}}

```css interactive-example-choice
columns: 2;
```

```css interactive-example-choice
columns: 6rem auto;
```

```css interactive-example-choice
columns: 12em;
```

```css interactive-example-choice
columns: 3;
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
  min-width: 21rem;
  text-align: left;
}
```

## Propriétés constituantes

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("column-count")}}
- {{CSSxRef("column-width")}}

## Syntaxe

```css
/* Colonnes avec largeur */
columns: 18em;

/* Colonnes avec un nombre */
columns: auto;
columns: 2;

/* Combinaison d'une largeur et d'un nombre */
columns: 1 auto;
columns: auto 12em;
columns: auto auto;

/* Valeurs globales */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

La propriété `columns` se définit avec un ou deux valeurs parmi celles décrites ci-après, dans n'importe quel ordre.

### Valeurs

- `<'column-width'>`
  - : La largeur optimale de la colonne, définie comme un {{CSSxRef("&lt;length&gt;")}} ou le mot-clé `auto`. La largeur réelle peut être plus large ou plus étroite pour s'adapter à l'espace disponible. Voir {{CSSxRef("column-width")}}.
- `<'column-count'>`
  - : Le nombre idéal de colonnes dans lequel le contenu de l'élément doit être disposé, défini comme un {{CSSxRef("&lt;integer&gt;")}} ou le mot-clé `auto`. Si ni cette valeur ni la largeur des colonnes ne sont `auto`, elle indique simplement le nombre maximal de colonnes autorisé. Voir {{CSSxRef("column-count")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir trois colonnes égales

#### HTML

```html
<p class="content-box">
  Il s'agit d'un bloc de texte réparti en trois colonnes à l'aide de la
  propriété CSS `columns`. Le texte est réparti équitablement entre les
  colonnes.
</p>
```

#### CSS

```css
.content-box {
  columns: 3 auto;
}
```

#### Résultat

{{EmbedLiveSample("Définir trois colonnes égales", "auto", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

- La propriété {{CSSxRef("widows")}}
- La propriété {{CSSxRef("orphans")}}
- [Médias paginés](/fr/docs/Web/CSS/Guides/Paged_media)
- [Apprendre&nbsp;: Mise en page multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
