---
title: Propriété CSS `row-rule`
short-title: row-rule
slug: Web/CSS/Reference/Properties/row-rule
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{SeeCompatTable}}

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`row-rule`** définit la largeur, le style et la couleur de la ligne tracée entre les lignes dans les mises en page multi-lignes de type grille, flexible et multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: row-rule")}}

```css interactive-example-choice
row-rule: solid;
```

```css interactive-example-choice
row-rule: dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(3, dashed magenta 1px, outset green 5px);
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px, dashed magenta 5px),
  dotted medium blue;
```

```css interactive-example-choice
row-rule:
  dotted medium blue,
  repeat(auto, dashed magenta 1px),
  outset green 5px;
```

```html interactive-example
<section id="default-example">
  <ul id="example-element">
    <li>Un poisson</li>
    <li>Deux poissons</li>
    <li>Poisson rouge</li>
    <li>Poisson bleu</li>
  </ul>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-flow: column;
  gap: 7px;
  text-align: left;
}
```

## Propriétés constitutives

Cette propriété est une version raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("row-rule-color")}}
- {{CSSxRef("row-rule-style")}}
- {{CSSxRef("row-rule-width")}}

## Syntaxe

```css
/* Une seule valeur */
row-rule: dotted;
row-rule: solid 8px;
row-rule: solid blue;
row-rule: thick inset blue;

/* Plusieurs valeurs */
row-rule: groove, dashed, solid;
row-rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
row-rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
row-rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px);

/* Valeurs globales */
row-rule: inherit;
row-rule: initial;
row-rule: revert;
row-rule: revert-layer;
row-rule: unset;
```

### Valeurs

La propriété `row-rule` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<gap-rule>`
  - : Défini comme une, deux ou trois des valeurs listées ci-dessous, dans n'importe quel ordre.
    - `<'line-width'>`
      - : Une largeur de ligne ({{CSSxRef("&lt;line-width&gt;")}})&nbsp;: une longueur ({{CSSxRef("&lt;length&gt;")}}) positive ou l'un des trois mots-clés, `thin`, `medium` ou `thick`. La valeur par défaut est `medium`. Voir {{CSSxRef("row-rule-width")}}.
    - `<'line-style'>`
      - : Un style de ligne ({{CSSxRef("&lt;line-style&gt;")}})&nbsp;: l'un des valeurs `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` ou `outset`. La valeur par défaut est `none`. Voir {{CSSxRef("row-rule-style")}}.
    - `<'color'>`
      - : Une valeur {{CSSxRef("&lt;color&gt;")}} représentant la couleur de la ligne. La valeur par défaut est `currentcolor`. Voir {{CSSxRef("row-rule-color")}}.

- `<gap-repeat-rule>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus comme premier argument et une ou plusieurs valeurs `<gap-rule>` comme arguments suivants. L'entier (`<integer>`) définit combien de fois la liste des valeurs `<gap-rule>` doit être répétée.

- `<gap-auto-repeat-rule>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<gap-rule>` comme arguments suivants. La liste fournie de valeurs `<gap-rule>` est répétée autant de fois que nécessaire pour remplir les valeurs de toutes les règles de lignes qui ne sont pas définies explicitement par d'autres composants de la valeur de la propriété.

## Description

La propriété `row-rule` définit le style de ligne de toutes les règles de lignes tracées dans les espaces entre les lignes dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) contenant plus d'une ligne.

Le raccourci `row-rule` pour {{CSSxRef("row-rule-color")}}, {{CSSxRef("row-rule-style")}} et {{CSSxRef("row-rule-width")}}. Le raccourci `row-rule`, ainsi que le raccourci {{CSSxRef("column-rule")}}, peut également être défini en utilisant le raccourci {{CSSxRef("rule")}}.

La valeur de la propriété est une liste de composants séparés par des virgules, qui peuvent inclure des types `<gap-rule>`, `<gap-repeat-rule>` et `<gap-auto-repeat-rule>`. Chaque `<gap-rule>` définit la largeur, la couleur et le style d'une ou plusieurs règle de lignes.

Si la valeur de la propriété ne consiste qu'en une seule `<gap-rule>`, toutes les lignes de la règle ont ce style. Si nous déclarons ce qui suit, toutes les règles de lignes sont `dashed red 3px`&nbsp;:

```css
row-rule: dashed red 3px;
```

Lorsque plus d'une `<gap-rule>` est déclarée, elles sont appliquées aux règle de lignes dans l'ordre défini. S'il y a plus d'interstices entre les lignes que de valeurs `<gap-rule>`, la liste des valeurs est répétée jusqu'à ce que chaque règle de ligne ait une ligne d'interstice. Si nous déclarons ce qui suit, par exemple, toutes les règles de lignes impaires sont `dashed red 3px`, et toutes les règles de lignes paires sont `dotted blue 5px`.

```css
row-rule:
  dashed red 3px,
  dotted blue 5px;
```

### Styles de ligne répétés

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS [`<gap-rule>`](#gap-rule) passées comme arguments suivants le nombre de fois défini. Cela permet de répéter le même `<gap-rule>` un nombre défini de fois sans répéter le même CSS plusieurs fois. Les déclarations suivantes sont équivalentes&nbsp;:

```css
row-rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
row-rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

Cela crée une liste de sept règle de lignes. Si le nombre de styles dans la liste de styles de la valeur `row-rule` dépasse le nombre d'interstices entre les lignes, les styles excédentaires sont ignorés. Si le conteneur sur lequel c'est appliqué a trois lignes, la règle de ligne dans le premier interstice est `solid red 5px` et la deuxième `outset blue 10px`.

Si le nombre d'interstices entre les lignes est supérieur au nombre de styles, la liste des styles est répétée. Si le conteneur a 8, 15, 22 ou 29 lignes, cette séquence de styles est répétée une, deux, trois ou quatre fois, respectivement, la dernière règle de ligne étant `inset green 1px`.

### Styles de ligne à répétition automatique

La fonction `repeat()`, avec `auto` comme premier argument au lieu d'un entier positif, peut également être utilisée. Avec `auto` comme premier argument, les valeurs [`<gap-rule>`](#gap-rule) passées comme arguments suivants sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles qui ne sont pas définies explicitement par d'autres composants de la valeur de la propriété.

```css
row-rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

Dans ce cas, les premières et dernières règle de lignes sont `solid red 5px`, et toutes les autres alternent entre `dotted green 1px` et `dashed blue 1px`. Peu importe si le conteneur a 3, 6, 11, 16 ou 21 lignes&nbsp;: les premiers et derniers interstices ont toujours une ligne solide rouge épaisse peinte entre eux (sauf si {{CSSxRef("row-rule-visibility-items")}} entraîne qu'aucune ligne ne soit tracée), et toutes les autres règle de lignes sont fines, vertes pointillées ou bleues en tirets. S'il n'y a que 2 ou 3 lignes, il n'y a pas de lignes pointillées ou en tirets.

Le mot-clé `auto` dans la fonction `repeat()` crée un répétiteur automatique qui remplit les valeurs pour les règles de lignes qui ne reçoivent pas autrement de valeurs provenant d'autres parties de la liste, empêchant la liste d'être répétée. Au maximum, une seule occurrence de `repeat(auto, <gap-rule>)` peut être présente dans une valeur `row-rule`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons une seule règle pour les lignes tracées entre les éléments flex.

#### HTML

Nous incluons une liste de duos sportifs dynamiques&nbsp;:

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
  <li>Kerri Walsh + Misty May Treanor</li>
</ul>
```

#### CSS

Nous définissons la liste comme un conteneur flexible, créant des lignes en définissant la {{CSSxRef("flex-direction")}} sur `column` à l'aide du raccourci {{CSSxRef("flex-flow")}}. Nous incluons un {{CSSxRef("gap")}} de `5px` pour fournir suffisamment d'espace entre les lignes afin d'adapter notre règle `3px dashed red`&nbsp;:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;

  row-rule: 3px red dashed;
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 180)}}

### Répétition des valeurs

Cet exemple montre comment les valeurs sont répétées lorsqu'il y a moins de valeurs dans la liste des styles que de règle de lignes. Il montre également les valeurs par défaut pour la largeur, la couleur et le style de `medium`, `currentcolor` et `none`, respectivement.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons quatre valeurs `<gap-rule>` séparées par des virgules comme valeur de `row-rule`, en omettant la largeur dans le premier `<gap-rule>`, la couleur dans le deuxième et le style dans le troisième, le quatrième incluant les trois composants&nbsp;:

```css live-sample___repeat
ul {
  row-rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("repeat", "", 180)}}

La ligne rouge a une largeur de `3px`, la ligne pointillée est de la même couleur que le texte, et il n'y a pas de ligne bleue de `5px`, car le style du troisième `<gap-rule>` est par défaut `none`, donc aucune ligne n'est tracée.

### Utiliser la fonction `repeat()`

Cet exemple montre comment utiliser la fonction `repeat()` dans la valeur de la propriété `row-rule`. Nous utilisons le même HTML et CSS que dans les exemples précédents. Nous incluons une fonction `repeat()`, définissant la liste de deux valeurs `<gap-rule>` à répéter 3 fois.

```css live-sample___func live-sample___auto
ul {
  row-rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", 180)}}

Le conteneur flexible a six lignes, donc cinq interstices. La fonction `repeat()` répète deux valeurs de style trois fois, créant une liste de huit valeurs de style. Comme il y a moins d'interstices entre les lignes que de `<gap-rule>` au total, les trois dernières valeurs de la liste sont ignorées.

### Utiliser `auto` dans `repeat()`

Cet exemple montre comment utiliser l'argument `auto` au lieu d'un entier dans la fonction `repeat()`.

En utilisant `repeat(auto, <gap-rule>)`, nous définissons toutes les règles de lignes sur `1px dotted` et par défaut à la couleur actuelle, sauf la première et la dernière, que nous définissons sur `3px solid red`.

```css live-sample___auto
ul {
  row-rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", 180)}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule: thin, thick) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété row-rule";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("row-rule-color")}}
- La propriété {{CSSxRef("row-rule-width")}}
- La propriété {{CSSxRef("row-rule-style")}}
- La propriété raccourcie {{CSSxRef("column-rule")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
