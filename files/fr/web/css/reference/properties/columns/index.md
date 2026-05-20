---
title: Propriété CSS `columns`
short-title: columns
slug: Web/CSS/Reference/Properties/columns
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`columns`** permet de définir le nombre maximum de colonnes à utiliser pour afficher le contenu d'un élément, ainsi que la largeur minimale et la hauteur maximale des colonnes de l'élément.

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
- {{CSSxRef("column-height")}}
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

/* Largeur et/ou nombre de colonnes, et hauteur des colonnes */
columns: 18em / 10em;
columns: 2 / 90vh;
columns: 2 auto / 300px;

/* Valeurs globales */
columns: inherit;
columns: initial;
columns: revert;
columns: revert-layer;
columns: unset;
```

La valeur de la propriété `columns` peut être définie comme une valeur {{CSSxRef("column-count", "&lt;column-count&gt;")}} et/ou une valeur {{CSSxRef("column-width", "&lt;column-width&gt;")}}, dans n'importe quel ordre, éventuellement suivie d'une valeur {{CSSxRef("column-height", "&lt;column-height&gt;")}} précédée d'un slash (`/`).

### Valeurs

- `<'column-width'>`
  - : La largeur optimale de la colonne, définie comme un {{CSSxRef("&lt;length&gt;")}} ou le mot-clé `auto`. La largeur réelle peut être plus large ou plus étroite pour s'adapter à l'espace disponible. Voir {{CSSxRef("column-width")}}.
- `<'column-count'>`
  - : Le nombre idéal de colonnes dans lequel le contenu de l'élément doit être disposé, défini comme un {{CSSxRef("&lt;integer&gt;")}} ou le mot-clé `auto`. Si défini comme un `<integer>`, il définit le nombre maximal de colonnes autorisé. Voir {{CSSxRef("column-count")}}.
- `<'column-height'>` {{Experimental_Inline}}
  - : La hauteur des colonnes définie comme un {{CSSxRef("&lt;length&gt;")}} ou le mot-clé `auto`. Voir {{CSSxRef("column-height")}}.

> [!NOTE]
> La définition d'une valeur `<column-height>` réinitialise la propriété {{CSSxRef("column-wrap")}} à sa valeur initiale, `auto`. Lorsque `<column-height>` est défini sur une `<length>`, la valeur `auto` de {{CSSxRef("column-wrap")}} devient `wrap`. Lorsque `<column-height>` est défini sur `auto`, elle devient `nowrap`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir trois colonnes égales

Cet exemple montre comment diviser un conteneur de texte en trois colonnes égales.

#### HTML

Nous incluons un élément de base {{HTMLElement("p")}} contenant du texte.

```html live-sample___three_equal_columns
<p class="content-box">
  Il s'agit d'un bloc de texte réparti en trois colonnes à l'aide de la
  propriété CSS <code>columns</code>. Le texte est réparti équitablement entre
  les colonnes.
</p>
```

#### CSS

Nous définissons une valeur pour la propriété `columns` sur le paragraphe, incluant une valeur `<column-count>` de `3` et une valeur `<column-width>` de `auto`.

```css hidden live-sample___three_equal_columns
body {
  width: 60%;
  margin: 0 auto;
}
```

```css live-sample___three_equal_columns
.content-box {
  columns: 3 auto;
}
```

#### Résultat

{{EmbedLiveSample("three_equal_columns", "auto", 120)}}

Notez comment le texte est réparti en trois colonnes.

### Créer des colonnes à hauteur fixe et à retour à la ligne

Cet exemple montre comment inclure une valeur `<column-height>` avec la propriété raccourcie `columns` pour diviser un conteneur de texte en colonnes à hauteur fixe qui se replient sur de nouvelles lignes lorsque le bord en ligne du conteneur est atteint.

#### HTML

Nous incluons un élément de base {{HTMLElement("p")}} contenant du texte.

```html live-sample___fixed-height
<p class="content-box">
  Il s'agit d'un bloc de texte réparti en trois colonnes à l'aide de la
  propriété CSS <code>columns</code>. Cela inclut une valeur
  <code>column-count</code> de <code>3</code>, une valeur
  <code>column-width</code> de <code>auto</code>, et une valeur
  <code>column-height</code> de <code>5em</code>. La valeur
  <code>column-wrap</code> est définie sur sa valeur initiale,
  <code>auto</code>&nbsp;; lorsqu'une valeur <code>column-height</code> est
  incluse, <code>column-wrap: auto</code> devient <code>wrap</code>, ce qui
  permet aux colonnes de se replier sur plusieurs lignes. Le texte est réparti
  équitablement entre les colonnes et placé sur plusieurs lignes.
</p>
```

#### CSS

Nous définissons une valeur pour la propriété `columns` sur le paragraphe, incluant une valeur `<column-count>` de `3`, une valeur `<column-width>` de `auto`, et une valeur `<column-height>` de `5em`. Comme `<column-height>` est défini sur une `<length>`, la valeur de {{CSSxRef("column-wrap")}} du paragraphe est calculée sur `wrap`, ce qui permet aux colonnes de se replier sur plusieurs lignes.

```css live-sample___fixed-height
.content-box {
  columns: 3 auto / 5em;
}
```

```css hidden live-sample___fixed-height
body {
  width: 60%;
  margin: 0 auto;
}
```

```css hidden live-sample___fixed-height
@supports not (columns: 3 auto / 5em) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'column-height'.";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Résultat

{{EmbedLiveSample('fixed-height', 'auto', 320)}}

Notez comment le texte est réparti en trois colonnes. Chaque colonne a une hauteur de `5em`. Après chaque troisième colonne, les colonnes se replient sur une nouvelle ligne dans la direction du bloc.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

- La propriété {{CSSxRef("widows")}}
- La propriété {{CSSxRef("orphans")}}
- [Médias paginés](/fr/docs/Web/CSS/Guides/Paged_media)
- [Apprendre&nbsp;: Mise en page multi-colonnes](/fr/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)
