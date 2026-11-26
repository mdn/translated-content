---
title: Propriété CSS `row-rule-width`
short-title: row-rule-width
slug: Web/CSS/Reference/Properties/row-rule-width
l10n:
  sourceCommit: 5fd3b03e9ad1ee4e8bc64d4f6888570690a7fbc8
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`row-rule-width`** définit la largeur des lignes tracées entre les rangées dans les grilles multi-rangées, les conteneurs flexibles et les mises en page multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: row-rule-width")}}

```css interactive-example-choice
row-rule-width: thin;
```

```css interactive-example-choice
row-rule-width: thin, thick;
```

```css interactive-example-choice
row-rule-width: repeat(2, thin, thick), 10px;
```

```css interactive-example-choice
row-rule-width: thick, repeat(auto, 1px, 2px), thick;
```

```css interactive-example-choice
row-rule-width: medium;
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
  row-rule-style: solid;
  row-rule-color: magenta;
  gap: 5px;
  text-align: left;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
row-rule-width: thin;
row-rule-width: medium;
row-rule-width: thick;
row-rule-width: thin, medium, thick;
row-rule-width: thick, repeat(5, thin), thick;
row-rule-width: thick, repeat(auto, thin, medium), thick;

/* Valeurs de type <length> */
row-rule-width: 1px;
row-rule-width: 5px;
row-rule-width: 1px, 3px, 5px;
row-rule-width: 5px, repeat(auto, 1px), 10px, 15px;
row-rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Valeurs globales */
row-rule-width: inherit;
row-rule-width: initial;
row-rule-width: revert;
row-rule-width: revert-layer;
row-rule-width: unset;
```

### Valeurs

La propriété `row-rule-width` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-width>`
  - : Une largeur de ligne ({{CSSxRef("&lt;line-width&gt;")}})&nbsp;: Il peut s'agir de l'un des mots-clés `thin`, `medium` ou `thick`, ou d'une valeur de type {{CSSxRef("&lt;length&gt;")}} positive, représentant la largeur de la ligne. La valeur par défaut est `medium`.

- `<repeat-line-width>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec le premier argument étant un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus, et une ou plusieurs valeurs {{CSSxRef("&lt;line-width&gt;")}} comme arguments suivants. L'entier définit le nombre de fois que les valeurs `<line-width>` doivent être répétées.

- `<auto-repeat-line-width>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<line-width>` comme arguments suivants. Les valeurs `<line-width>` fournies sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles de rangée qui ne sont pas explicitement définies par d'autres composants de la valeur de la propriété.

## Description

La propriété `row-rule-width` définit les largeurs de toutes les lignes de règle de rangée tracées dans les gouttières entre les rangées dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plus d'une rangée.

La valeur est une liste de composants séparés par des virgules, qui peut inclure des types `<line-width>`, `<repeat-line-width>` et `<auto-repeat-line-width>`.

La propriété `row-rule-width`, ainsi que les propriétés {{CSSxRef("row-rule-color")}} et {{CSSxRef("row-rule-style")}}, peut être définie à l'aide de la propriété raccourcie {{CSSxRef("row-rule")}}. La propriété `row-rule-width`, ainsi que la propriété {{CSSxRef("column-rule-width")}}, peut également être définie à l'aide de la propriété raccourcie {{CSSxRef("rule-width")}}.

Si la valeur de la propriété ne consiste qu'en un seul `<line-width>`, toutes les règles de rangée ont cette largeur. Si nous déclarons ce qui suit, toutes les règles de rangée sont de `3px`&nbsp;:

```css
row-rule-width: 3px;
```

Lorsque plusieurs `<line-width>` sont déclarés, ils sont appliqués aux règles de rangée dans l'ordre défini. S'il y a plus de règles de rangée que de valeurs `<line-width>`, la liste des largeurs de ligne est répétée jusqu'à ce que chaque règle ait une largeur. Si nous déclarons ce qui suit, par exemple, toutes les règles impaires sont `thin`, et toutes les règles paires sont `1em`.

```css
row-rule-width: thin, 1em;
```

### Largeurs de ligne répétées

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;line-width&gt;")}} passées comme arguments suivants le nombre de fois défini. Cela permet de répéter les mêmes largeurs un nombre défini de fois sans répéter plusieurs fois les mêmes valeurs. Les déclarations suivantes sont équivalentes&nbsp;:

```css
row-rule-width: 1rem, thick, thin, thick, thin;
row-rule-width: 1rem, repeat(2, thick, thin);
```

Vous pouvez utiliser n'importe quelle valeur `<line-width>`, y compris les propriétés personnalisées qui se résolvent en une valeur `<line-width>`. L'utilisation de `repeat()` peut faciliter l'écriture des valeurs, en particulier lors de l'utilisation de calculs de longueurs complexes. Elle permet d'écrire un motif récurrent à l'aide d'une seule fonction, quel que soit le nombre de rangées.

Si nous définissons `--base: 1vh` et `--secondaire: 1vw`, ce qui suit donne des résultats similaires à la déclaration précédente&nbsp;:

```css
row-rule-width:
  1rem,
  repeat(
    2,
    min(calc(var(--base) - 3px), 10px),
    abs(calc(var(--secondaire) - 30px))
  ),
  thin;
```

Cela crée une liste de six largeurs. Si le nombre de largeurs dans la liste de largeurs de la valeur `row-rule-width` dépasse le nombre d'interstices entre les rangées, les largeurs excédentaires sont ignorées. Si le conteneur a trois rangées, la règle dans la première gouttière est de `1rem` de large, et la seconde est déterminée par la fonction {{CSSxRef("min()")}}.

S'il y a plus d'interstices que de largeurs, la liste des largeurs est répétée. Si le conteneur a 7, 13, 19 ou 25 rangées, cette séquence de largeurs est répétée une, deux, trois ou quatre fois, respectivement, la dernière règle étant `thin`.

### Répétition automatique des largeurs de ligne

La fonction `repeat()` accepte également `auto` comme premier argument au lieu d'un entier positif. Avec `auto` comme premier argument, la liste des valeurs `<line-width>` passées comme arguments suivants est répétée autant de fois que nécessaire pour remplir les valeurs de toutes les règles de rangée qui ne sont pas explicitement définies par d'autres composants de la valeur de la propriété.

```css
row-rule-width: thin, repeat(auto, medium), thin;
```

Dans ce cas, peu importe si le conteneur a 3, 6, 11, 16 ou 21 rangées&nbsp;; les première et dernière rangées sont toujours `thin`, et toutes les autres règles de rangée sont `medium`. S'il n'y a que 2 ou 3 rangées, il n'y a pas de règles de rangée de taille moyenne.

Le mot-clé `auto` dans la fonction `repeat()` crée un répéteur automatique qui remplit les valeurs des règles de rangée qui ne reçoivent pas autrement de valeurs provenant d'autres parties de la liste, empêchant ainsi la liste d'être répétée. Au maximum, une seule occurrence de `repeat(auto, <width>)` peut être présente dans une valeur `row-rule-width`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons une seule largeur pour les lignes tracées entre les éléments flexibles.

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

Nous définissons la liste comme un conteneur flexible, créant des rangées en définissant la {{CSSxRef("flex-direction")}} sur `column` à l'aide du raccourci {{CSSxRef("flex-flow")}}. Nous incluons un {{CSSxRef("gap")}} de `5px` pour fournir suffisamment d'espace entre les rangées pour accueillir notre règle rouge en pointillés de `3px`&nbsp;:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-style: dashed;
  row-rule-color: red;
  row-rule-width: 3px;
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 180)}}

### Valeurs répétées

Cet exemple montre comment, lorsque la liste des largeurs contient moins de valeurs que le nombre de règles de rangée, les valeurs sont répétées.

#### CSS

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons trois largeurs séparées par des virgules comme valeur de `row-rule-width`&nbsp;:

```css live-sample___repeat
ul {
  row-rule-width: 1px, 3px, 5px;
}
```

#### Résultat

{{EmbedLiveSample("repeat", "", 180)}}

### Utiliser la fonction `repeat()`

Cet exemple montre comment utiliser la fonction `repeat()` dans la valeur de la propriété `row-rule-width` et comment cette fonction peut aider à réduire la verbosité des déclarations de valeurs.

#### CSS

Nous utilisons le même HTML et CSS que dans les exemples précédents. Pour montrer comment les valeurs peuvent devenir verbeuses et l'utilité de la fonction `repeat()`, nous déclarons deux propriétés personnalisées, que nous utilisons dans les déclarations de la fonction `repeat()`. La fonction `repeat()` définit une liste de deux valeurs `<line-width>` à répéter 3 fois.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondaire: 1vw;
  row-rule-width:
    15px,
    repeat(
      3,
      min(calc(var(--base) + 3px), 10px),
      abs(calc(var(--secondaire) - 2px))
    ),
    15px;
}
```

#### Résultat

{{EmbedLiveSample("func", "", 180)}}

Le conteneur flexible a six rangées, donc cinq gouttières. La fonction `repeat()` répète deux valeurs de largeur trois fois, créant une liste de huit valeurs de largeur. Comme il y a moins de gouttières de rangée que de largeurs totales, les trois dernières valeurs de la liste sont ignorées.

### Utiliser `auto` avec `repeat()`

Cet exemple montre comment utiliser `auto` au lieu d'un entier dans la fonction `repeat()`.

#### CSS

En utilisant `repeat(auto, <line-width>)`, nous définissons toutes les règles de rangée à `1px`, sauf la première et la dernière, que nous définissons à `5px`.

```css live-sample___auto
ul {
  row-rule-width: 5px, repeat(auto, 1px), 5px;
}
```

#### Résultat

{{EmbedLiveSample("auto", "", 180)}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-width: thin, thick) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété row-rule-width";
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
- La propriété {{CSSxRef("row-rule-style")}}
- La propriété {{CSSxRef("column-rule-width")}}
- La propriété raccourcie {{CSSxRef("row-rule")}}
- La propriété raccourcie {{CSSxRef("rule-width")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- [Définir les espaces CSS](/fr/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
