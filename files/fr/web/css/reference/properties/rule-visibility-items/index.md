---
title: Propriété CSS `rule-visibility-items`
short-title: rule-visibility-items
slug: Web/CSS/Reference/Properties/rule-visibility-items
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

La propriété raccourcie [CSS](/fr/docs/Web/CSS) **`rule-visibility-items`** définit si les segments de règle sont peints dans les gouttières des lignes et des colonnes adjacentes aux zones vides.

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("column-rule-visibility-items")}}
- {{CSSxRef("row-rule-visibility-items")}}

{{InteractiveExample("Démonstration CSS&nbsp;: rule-visibility-items")}}

```css interactive-example-choice
rule-visibility-items: all;
```

```css interactive-example-choice
rule-visibility-items: around;
```

```css interactive-example-choice
rule-visibility-items: between;
```

```css interactive-example-choice
rule-visibility-items: normal;
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
  rule: solid 5px red;
  gap: 10px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
cite {
  grid-row: 3;
  grid-column: 3;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
rule-visibility-items: all;
rule-visibility-items: around;
rule-visibility-items: between;
rule-visibility-items: normal;

/* Valeurs globales */
rule-visibility-items: inherit;
rule-visibility-items: initial;
rule-visibility-items: revert;
rule-visibility-items: revert-layer;
rule-visibility-items: unset;
```

### Valeurs

Cette propriété est définie comme l'un des mots-clés suivants&nbsp;:

- `all`
  - : Les règles doivent être peintes dans tous les segments de gouttière, que les zones adjacentes contiennent ou non un élément.

- `around`
  - : Une règle doit être peinte dans un segment de gouttière si au moins l'une des deux zones adjacentes est occupée par un élément.

- `between`
  - : Une règle doit être peinte dans un segment de gouttière uniquement si les deux zones adjacentes sont occupées par des éléments.

- `normal`
  - : Avec les conteneurs de type grille, se comporte de la même manière que `all`. Dans une mise en page multi-colonnes, se comporte de la même manière que `between`. C'est la valeur par défaut.

## Description

La propriété `rule-visibility-items` définit si les segments de règle sont peints dans les gouttières adjacentes aux zones vides dans les gouttières entre les lignes et les colonnes des conteneurs [multi-lignes](/fr/docs/Web/CSS/Guides/Multicol_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plus d'une ligne ou d'une colonne.

La valeur est un mot-clé unique qui définit la même valeur pour les propriétés {{CSSxRef("column-rule-visibility-items")}} et {{CSSxRef("row-rule-visibility-items")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons qu'une règle doit être dessinée entre deux zones de la grille si au moins une zone adjacente contient un élément de la grille.

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

Nous définissons la liste ordonnée ({{HTMLElement("ol")}}) comme un conteneur de grille, créant 4 colonnes et 4 lignes en définissant à la fois les propriétés {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}} sur `repeat(4, 1fr)`, et déplaçons le dernier élément vers la zone de grille en bas à droite à l'aide des propriétés {{CSSxRef("grid-column")}} et {{CSSxRef("grid-row")}}. Nous incluons un {{CSSxRef("gap")}} de `20px` pour fournir suffisamment d'espace entre les colonnes pour accueillir nos règles de `5px`. Nous définissons les règles de colonne sur `dashed` et les règles de ligne sur `solid`.

Enfin, nous définissons `rule-visibility-items` sur `between`, de sorte que les règles de ligne et de colonne ne sont peintes que si les deux zones de la grille adjacentes les contiennent un élément de la grille.

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  column-rule: dashed 5px blue;
  row-rule: solid 5px red;

  rule-visibility-items: around;
}
li:last-child {
  grid-row: 4;
  grid-column: 4;
}
```

```css hidden
li {
  margin-left: 1em;
}
@layer no-support {
  @supports not (rule-visibility-items: around) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété raccourcie rule-visibility-items";
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

- La propriété raccourcie {{CSSxRef("column-rule-visibility-items")}}
- La propriété {{CSSxRef("row-rule-visibility-items")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
