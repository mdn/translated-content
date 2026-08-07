---
title: "Propriété CSS `column-rule-visibility-items`"
short-title: column-rule-visibility-items
slug: Web/CSS/Reference/Properties/column-rule-visibility-items
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`column-rule-visibility-items`** définit si un segment de règle de colonne est peint dans les espaces adjacents aux zones vides.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule-visibility-items")}}

```css interactive-example-choice
column-rule-visibility-items: all;
```

```css interactive-example-choice
column-rule-visibility-items: around;
```

```css interactive-example-choice
column-rule-visibility-items: between;
```

```css interactive-example-choice
column-rule-visibility-items: normal;
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
  column-rule: solid 5px red;
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
column-rule-visibility-items: all;
column-rule-visibility-items: around;
column-rule-visibility-items: between;
column-rule-visibility-items: normal;

/* Valeurs globales */
column-rule-visibility-items: inherit;
column-rule-visibility-items: initial;
column-rule-visibility-items: revert;
column-rule-visibility-items: revert-layer;
column-rule-visibility-items: unset;
```

### Valeurs

Cette propriété est définie comme l'un des mots-clés suivants&nbsp;:

- `all`
  - : La règle de colonne doit être peinte dans tous les segments d'espace, que les zones adjacentes contiennent ou non un élément.

- `around`
  - : La règle de colonne doit être peinte dans un segment d'espace si au moins l'une des deux zones adjacentes est occupée par un élément.

- `between`
  - : La règle de colonne doit être peinte dans un segment d'espace si les deux zones adjacentes sont occupées par des éléments.

- `normal`
  - : Avec les conteneurs de type grille, se comporte de la même manière que `all`. Dans une mise en page multi-colonne, se comporte de la même manière que `between`. C'est la valeur par défaut.

## Description

La propriété `column-rule-visibility-items` définit si un segment de règle de colonne est peint dans les espaces de colonne adjacents aux zones vides dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout) contenant plus d'une colonne.

Les propriétés `column-rule-visibility-items` et {{CSSxRef("row-rule-visibility-items")}} peuvent toutes deux être définies à l'aide du raccourci {{CSSxRef("rule-visibility-items")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons qu'une règle de colonne doit être tracée entre deux zones de la grille si au moins une zone de la grille adjacente contient un élément de la grille.

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

Nous définissons la liste ordonnée ({{HTMLElement("ol")}}) comme un conteneur de grille, créant 4 colonnes et 4 lignes en définissant à la fois les propriétés {{CSSxRef("grid-template-columns")}} et {{CSSxRef("grid-template-rows")}} sur `repeat(4, 1fr)`, et déplaçons le dernier élément vers la zone de grille en bas à droite en utilisant les propriétés {{CSSxRef("grid-column")}} et {{CSSxRef("grid-row")}}. Nous incluons un {{CSSxRef("gap")}} de `20px` pour fournir suffisamment d'espace entre les colonnes pour accueillir notre règle en pointillés de `5px`.

Enfin, nous définissons `column-rule-visibility-items` sur `between`, de sorte qu'une règle de colonne soit tracée dans un espace de colonne uniquement si les deux zones de grille adjacentes contiennent un élément de la grille.

```css
ol {
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  column-rule: dashed 5px blue;
  column-rule-visibility-items: between;
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
  @supports not (column-rule-visibility-items: around) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété column-rule-visibility-items";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple", "", 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("rule-visibility-items")}}
- La propriété {{CSSxRef("row-rule-visibility-items")}}
- La propriété raccourcie {{CSSxRef("column-rule")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
