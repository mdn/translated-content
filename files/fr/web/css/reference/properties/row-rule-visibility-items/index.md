---
title: "Propriété CSS `row-rule-visibility-items`"
short-title: row-rule-visibility-items
slug: Web/CSS/Reference/Properties/row-rule-visibility-items
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`row-rule-visibility-items`** définit si un segment de règle de ligne est peint dans les espaces adjacents aux zones vides.

{{InteractiveExample("Démonstration CSS&nbsp;: row-rule-visibility-items")}}

```css interactive-example-choice
row-rule-visibility-items: all;
```

```css interactive-example-choice
row-rule-visibility-items: around;
```

```css interactive-example-choice
row-rule-visibility-items: between;
```

```css interactive-example-choice
row-rule-visibility-items: normal;
```

```html interactive-example
<section id="default-example">
  <section id="example-element">
    <p>Un poisson</p>
    <p>Deux poissons</p>
    <p>Poisson rouge</p>
    <p>Poisson bleu</p>
    <cite>-- Dr. Seuss</cite>
  </section>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  row-rule: solid 5px red;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
cite {
  grid-column: 3;
  grid-row: 3;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
row-rule-visibility-items: all;
row-rule-visibility-items: around;
row-rule-visibility-items: between;
row-rule-visibility-items: normal;

/* Valeurs globales */
row-rule-visibility-items: inherit;
row-rule-visibility-items: initial;
row-rule-visibility-items: revert;
row-rule-visibility-items: revert-layer;
row-rule-visibility-items: unset;
```

### Valeurs

Cette propriété est définie comme l'un des mots-clés suivants&nbsp;:

- `all`
  - : La règle de ligne doit être peinte dans tous les segments d'espace, que les zones adjacentes contiennent ou non un élément.

- `around`
  - : La règle de ligne doit être peinte dans un segment d'espace si au moins l'une des deux zones adjacentes est occupée par un élément.

- `between`
  - : La règle de ligne doit être peinte dans un segment d'espace si les deux zones adjacentes sont occupées par des éléments.

- `normal`
  - : Se comporte de la même manière que `all`. C'est la valeur par défaut.

## Description

La propriété `row-rule-visibility-items` définit si, dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plus d'une ligne, les segments de règle de ligne sont peints dans les interstices entre deux zones adjacentes si l'une ou les deux zones sont vides.

Les propriétés `row-rule-visibility-items` et {{CSSxRef("column-rule-visibility-items")}} peuvent toutes deux être définies sur les mêmes valeurs à l'aide de la propriété raccourcie {{CSSxRef("rule-visibility-items")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons une règle de ligne à tracer entre deux zones de la grille si au moins une zone adjacente contient des éléments de la grille.

#### HTML

Nous incluons une liste de duos sportifs dynamiques&nbsp;:

```html
<ol>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ol>
```

#### CSS

Nous définissons la liste ordonnée ({{HTMLElement("ol")}}) comme un conteneur de grille, créant 4 lignes et 4 colonnes en définissant à la fois les propriétés {{CSSxRef("grid-template-rows")}} et {{CSSxRef("grid-template-columns")}} sur `repeat(4, 1fr)`, et déplaçons le dernier élément vers la zone de la grille en bas à droite à l'aide de {{CSSxRef("grid-row")}} et {{CSSxRef("grid-column")}}. Nous incluons un {{CSSxRef("gap")}} de `20px` pour fournir suffisamment d'espace entre les lignes pour accueillir notre règle en pointillés de `5px`.

Enfin, nous définissons `row-rule-visibility-items` sur `around`, de sorte qu'un segment de règle de ligne ne soit peint dans un interstice de ligne que si l'une ou les deux zones adjacentes contiennent un élément de la grille.

```css
ol {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 10px;

  row-rule: dashed 5px blue;
  row-rule-visibility-items: around;
}
li:last-child {
  grid-column: 4;
  grid-row: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (row-rule-visibility-items: around) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété row-rule-visibility-items";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("rule-visibility-items")}}
- La propriété {{CSSxRef("column-rule-visibility-items")}}
- La propriété raccourcie {{CSSxRef("row-rule")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
