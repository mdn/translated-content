---
title: "Propriété CSS `row-rule-color`"
short-title: row-rule-color
slug: Web/CSS/Reference/Properties/row-rule-color
l10n:
  sourceCommit: 9cf3002bd29376c15d49df6fab2e6a264285abf6
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`row-rule-color`** définit les couleurs des lignes tracées entre les lignes dans les grilles multi-lignes, les conteneurs flexibles et les mises en page multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: row-rule-color")}}

```css interactive-example-choice
row-rule-color: magenta;
```

```css interactive-example-choice
row-rule-color: magenta, goldenrod;
```

```css interactive-example-choice
row-rule-color: repeat(2, magenta), goldenrod;
```

```css interactive-example-choice
row-rule-color: goldenrod, repeat(auto, magenta), goldenrod;
```

```css interactive-example-choice
row-rule-color: currentColor;
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
  row-rule-width: 5px;
  gap: 5px;
  text-align: left;
}
```

## Syntaxe

```css
/* Une seule valeur */
row-rule-color: red;
row-rule-color: rgb(192 56 78);
row-rule-color: transparent;
row-rule-color: hsl(0 100% 50% / 60%);
row-rule-color: var(--primaryColor);

/* Plusieurs valeurs */
row-rule-color: red, transparent;
row-rule-color: repeat(3, red), repeat(3, transparent);
row-rule-color: repeat(3, red), repeat(3, yellow, blue);
row-rule-color: red, repeat(auto, transparent), red;
row-rule-color: red, repeat(auto, blue, yellow), red;
row-rule-color: repeat(3, red), repeat(auto, transparent), repeat(3, red);

/* Valeurs globales */
row-rule-color: inherit;
row-rule-color: initial;
row-rule-color: revert;
row-rule-color: revert-layer;
row-rule-color: unset;
```

### Valeurs

La propriété `row-rule-color` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-color>`
  - : Une couleur ({{CSSxRef("&lt;color&gt;")}}) représentant la couleur de la ligne.

- `<repeat-line-color>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus comme premier argument et une ou plusieurs valeurs `<color>` comme arguments suivants. L'entier (`<integer>`) définit combien de fois les valeurs `<color>` doivent être répétées.

- `<auto-repeat-line-color>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<color>` comme arguments suivants. La liste fournie de valeurs `<color>` est répétée autant de fois que nécessaire pour remplir les valeurs de toutes les règle de lignes qui ne sont pas définies explicitement par d'autres composants de la valeur de la propriété.

## Description

La propriété `row-rule-color` définit les couleurs des lignes tracées dans les espaces entre les lignes dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plus d'une ligne.

La valeur est une liste de composants séparés par des virgules, qui peut inclure des types `<line-color>`, `<repeated-line-color>` et `<auto-repeat-line-color>`.

La propriété `row-rule-color`, ainsi que les propriétés {{CSSxRef("row-rule-width")}} et {{CSSxRef("row-rule-style")}}, peut être définie à l'aide de la propriété raccourcie {{CSSxRef("row-rule")}}. La propriété `row-rule-color`, ainsi que la propriété {{CSSxRef("column-rule-color")}}, peut également être définie à l'aide de la propriété raccourcie {{CSSxRef("rule-color")}}.

Une couleur de ligne (`<line-color>`) peut être déclarée comme n'importe quelle valeur CSS valide de type {{CSSxRef("&lt;color&gt;")}}. Si la valeur de la propriété consiste en seulement une couleur (`<color>`), toutes les règles de ligne ont cette couleur. Si nous déclarons ce qui suit, toutes les règle de lignes sont bleues&nbsp;:

```css
row-rule-color: blue;
```

Lorsque plus d'une `<line-color>` est déclarée, elles sont appliquées aux règle de lignes dans l'ordre défini. S'il y a plus de règle de lignes que de valeurs `<line-color>`, la liste des couleurs de ligne est répétée jusqu'à ce que chaque règle de ligne ait une couleur. Si nous déclarons ce qui suit, par exemple, toutes les règle de lignes impaires sont bleues et toutes les règle de lignes paires sont jaunes.

```css
row-rule-color: blue, yellow;
```

### Couleurs de ligne répétées

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;color&gt;")}} passées comme arguments suivants le nombre de fois défini. Cela permet de répéter la même couleur un nombre défini de fois sans répéter la même `<line-color>` plusieurs fois. Les déclarations suivantes sont équivalentes&nbsp;:

```css
row-rule-color: blue, yellow, red, yellow, red;
row-rule-color: blue, repeat(2, yellow, red);
```

Vous pouvez utiliser n'importe quelle valeur de couleur valide provenant de n'importe quel espace colorimétrique, y compris les fonctions de couleur CSS, les propriétés personnalisées, etc. L'utilisation de `repeat()` peut rendre les valeurs plus faciles à écrire, surtout lorsque vos valeurs de couleur deviennent plus complexes. Elle permet d'écrire un motif récurrent en utilisant une seule fonction, quel que soit le nombre de lignes.

Si nous définissons `--base: yellow` et `--mixin: blue`, ce qui suit donne des résultats similaires à la déclaration précédente&nbsp;:

```css
row-rule-color:
  color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
  repeat(
    2,
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin)),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin))
  );
```

Cela crée une liste de cinq couleurs. Si le nombre de couleurs dans la liste de couleurs de la valeur `row-rule-color` dépasse le nombre d'interstices entre les lignes, les valeurs de couleur excédentaires sont ignorées. Si le conteneur a trois lignes, la règle de ligne dans le premier interstice est bleue et la deuxième jaune.

Si le nombre d'interstices entre les lignes est supérieur au nombre de couleurs, la liste des couleurs est répétée jusqu'à ce que toutes les règle de lignes reçoivent une couleur. Si le conteneur a 6, 11, 16 ou 21 lignes, cette séquence de couleurs est répétée une, deux, trois ou quatre fois, respectivement, la dernière étant rouge.

### Répétition automatique des couleurs de ligne

La fonction `repeat()` accepte également `auto` comme premier argument au lieu d'un entier positif. Avec `auto` comme premier argument, les valeurs `<color>` passées comme arguments suivants sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règle de lignes qui ne sont pas définies explicitement par d'autres composants de la valeur de la propriété, le cas échéant.

```css
row-rule-color: blue, repeat(auto, yellow), red;
```

Dans ce cas, la première règle de ligne est bleue, la dernière est rouge et toutes les autres sont jaunes. Peu importe si le conteneur a 3, 6, 11, 16 ou 21 lignes&nbsp;; la première est toujours bleue et, tant qu'il y a au moins deux règle de lignes, la dernière est toujours rouge. Toutes les autres lignes sont jaunes, ce qui signifie que s'il n'y a que 2 ou 3 lignes, il n'y a pas de lignes jaunes.

Le mot-clé `auto` dans la fonction `repeat()` crée un répétiteur automatique qui remplit les valeurs pour les couleurs des règle de lignes qui ne reçoivent pas autrement de valeurs provenant d'autres parties de la liste, empêchant la liste d'être répétée. Une valeur `row-rule-color` peut inclure, au maximum, un `repeat(auto, <color>)`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons une seule couleur pour les lignes tracées entre les éléments flexibles.

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

Nous définissons la liste comme un conteneur flexible, créant des lignes en définissant {{CSSxRef("flex-direction")}} sur `column` avec le raccourci {{CSSxRef("flex-flow")}}. Nous incluons un {{CSSxRef("gap")}} de `5px` pour fournir suffisamment d'espace entre les lignes afin d'accueillir notre règle en pointillés de `3px`&nbsp;:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-style: dashed;
  row-rule-width: 3px;
  row-rule-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 180)}}

### Valeurs répétées

Cet exemple montre comment, lorsque la liste des couleurs contient moins de valeurs que le nombre d'interstices entre les lignes, les valeurs sont répétées.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons trois couleurs séparées par des virgules comme valeur de `row-rule-color`&nbsp;:

```css live-sample___repeat
ul {
  row-rule-color: blue, yellow, red;
}
```

{{EmbedLiveSample("repeat", "", 180)}}

### Utiliser la fonction `repeat()`

Cet exemple montre comment utiliser la fonction `repeat()` dans la valeur de la propriété `row-rule-color` et comment cette fonction peut aider à éviter que des valeurs complexes ne deviennent ingérables.

Nous utilisons le même HTML et CSS que dans les exemples précédents. Pour montrer comment les valeurs peuvent devenir compliquées et l'utilité de la fonction `repeat()`, nous déclarons deux propriétés personnalisées, que nous utilisons dans trois déclarations de fonction de couleur {{CSSxRef("color-mix()")}} pour créer les mêmes couleurs bleu, rouge et jaune que dans l'exemple précédent. La deuxième déclaration est dans une fonction `repeat()`, définie pour se répéter 3 fois.

```css live-sample___func live-sample___auto
ul {
  --base: yellow;
  --mixin: blue;
  row-rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(3, color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin))),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin));
}
```

{{EmbedLiveSample("func", "", 180)}}

Le conteneur flexible a six lignes, donc cinq interstices. La fonction `repeat()` répète notre deuxième couleur trois fois, créant une liste de couleurs avec cinq couleurs. Comme il y a autant d'interstices de ligne que de couleurs au total, les couleurs ne sont pas répétées.

### Utiliser `auto` dans `repeat()`

Cet exemple montre comment utiliser `auto`, au lieu d'un entier, dans la fonction `repeat()`.

En utilisant `repeat(auto, <color>)`, nous définissons toutes les lignes comme étant presque transparentes en noir (`#0003`), sauf la première et la dernière, que nous définissons en `black` solide.

```css live-sample___auto
ul {
  row-rule-color: black, repeat(auto, #0003), black;
}
```

{{EmbedLiveSample("auto", "", 180)}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-color: red, blue) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété row-rule-color";
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

- La propriété {{CSSxRef("row-rule-width")}}
- La propriété {{CSSxRef("row-rule-style")}}
- La propriété {{CSSxRef("column-rule-color")}}
- La propriété raccourcie {{CSSxRef("row-rule")}}
- La propriété raccourcie {{CSSxRef("rule-color")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
