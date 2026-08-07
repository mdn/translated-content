---
title: "Propriété CSS `row-rule-style`"
short-title: row-rule-style
slug: Web/CSS/Reference/Properties/row-rule-style
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`row-rule-style`** définit le style des lignes tracées entre les lignes dans les mises en page en grille multi-lignes, flexibles et multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: row-rule-style")}}

```css interactive-example-choice
row-rule-style: solid;
```

```css interactive-example-choice
row-rule-style: inset, outset;
```

```css interactive-example-choice
row-rule-style: repeat(2, dashed, dotted), solid;
```

```css interactive-example-choice
row-rule-style: solid, repeat(auto, dashed, dotted), solid;
```

```css interactive-example-choice
row-rule-style: hidden;
```

```html interactive-example
<section id="default-example">
  <ul id="example-element">
    <li>Un poisson</li>
    <li>Deux poissons</li>
    <li>Trois poissons</li>
    <li>Quatre poissons</li>
  </ul>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-flow: column;
  row-rule-width: thick;
  row-rule-color: magenta;
  gap: 7px;
  text-align: left;
}
```

## Syntaxe

```css
/* Une seule valeur */
row-rule-style: none;
row-rule-style: hidden;
row-rule-style: dotted;

/* Plusieurs valeurs */
row-rule-style: groove, dashed, solid;
row-rule-style: double, repeat(5, ridge), double;
row-rule-style: solid, repeat(auto, inset, outset), solid;

/* Valeurs globales */
row-rule-style: inherit;
row-rule-style: initial;
row-rule-style: revert;
row-rule-style: revert-layer;
row-rule-style: unset;
```

### Valeurs

La propriété `row-rule-style` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-style>`
  - : Un style de ligne ({{CSSxRef("&lt;line-style&gt;")}})&nbsp;: l'une des valeurs `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` ou `outset`. La valeur par défaut est `none`.

- `<repeat-line-style>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec le premier argument étant un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus, et les arguments suivants étant des valeurs {{CSSxRef("&lt;line-style&gt;")}}. L'entier définit combien de fois les valeurs `<line-style>` doivent être répétées.

- `<auto-repeat-line-style>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<line-style>` comme arguments suivants. Les valeurs `<line-style>` fournies sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles de lignes qui ne sont pas définies explicitement par d'autres composants de la valeur de la propriété.

## Description

La propriété `row-rule-style` définit le style des lignes tracées entre les lignes dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plus d'une ligne.

La valeur est une liste de composants séparés par des virgules, qui peut inclure des types `<line-style>`, `<repeat-line-style>` et `<auto-repeat-line-style>`.

La propriété `row-rule-style`, ainsi que les propriétés {{CSSxRef("row-rule-color")}} et {{CSSxRef("row-rule-width")}}, peut être définie à l'aide du raccourci {{CSSxRef("row-rule")}}. La propriété `row-rule-style`, ainsi que la propriété {{CSSxRef("column-rule-style")}}, peut également être définie à l'aide du raccourci {{CSSxRef("rule-style")}}.

Si la valeur de la propriété ne contient qu'un seul `<line-style>`, toutes les règles de lignes ont ce style. Si nous déclarons ce qui suit, toutes les règles de lignes sont `dashed`&nbsp;:

```css
row-rule-style: dashed;
```

Lorsque plus d'un `<line-style>` est déclaré, ils sont appliqués aux règle de lignes dans l'ordre défini. Si le nombre de règle de lignes est supérieur au nombre de valeurs `<line-style>`, la liste des styles de ligne est répétée jusqu'à ce que chaque règle de ligne ait un style. Si nous déclarons ce qui suit, par exemple, toutes les règles de lignes impaires sont `dashed` et toutes les règles de lignes paires sont `dotted`.

```css
row-rule-style: dashed, dotted;
```

### Styles de ligne répétés

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;line-style&gt;")}} passées comme arguments suivants le nombre de fois défini. Cela permet de répéter le même style un nombre défini de fois sans répéter la même valeur. Vous pouvez inclure des valeurs de mot-clé `<line-style>` ou des propriétés personnalisées qui se résolvent en un `<line-style>` valide. L'utilisation de `repeat()` peut rendre les valeurs plus faciles à écrire, permettant d'écrire des motifs récurrents en utilisant une seule fonction, quel que soit le nombre de lignes. Les déclarations suivantes sont équivalentes&nbsp;:

```css
row-rule-style: solid, outset, inset, outset, inset;
row-rule-style: solid, repeat(2, outset, inset);
```

Cela crée une liste de cinq styles. Si le nombre de styles dans la liste de styles de la valeur `row-rule-style` dépasse le nombre de règle de lignes, les styles excédentaires sont ignorés. Si le conteneur a trois lignes, la règle de ligne dans la première gouttière est `solid` et la deuxième `outset`.

Si le nombre de règle de lignes est supérieur au nombre de styles, la liste des styles est répétée. Si le conteneur a 6, 11, 16 ou 21 lignes, cette séquence de styles est répétée une, deux, trois ou quatre fois, respectivement, la dernière règle de ligne étant `inset`.

### Répétition automatique des styles de ligne

La fonction `repeat()` accepte également `auto` comme premier argument au lieu d'un entier positif. Avec `auto` comme premier argument, les valeurs `<line-style>` passées comme paramètres suivants sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles de lignes qui ne sont pas définies explicitement par d'autres composants de la valeur de la propriété.

```css
row-rule-style: solid, repeat(auto, dotted), solid;
```

Dans ce cas, peu importe si le conteneur a 3, 6, 11, 16 ou 21 lignes&nbsp;; la première et la dernière règle de ligne sont toujours `solid`, et toutes les autres règle de lignes sont `dotted`. S'il n'y a que 2 ou 3 lignes, il n'y a pas de règle de lignes `dotted`.

Le mot-clé `auto` dans la fonction `repeat()` crée un répétiteur automatique qui remplit les valeurs pour les règles de lignes qui ne reçoivent pas autrement de valeurs provenant d'autres parties de la liste, empêchant la liste d'être répétée. Au maximum, une seule occurrence de `repeat(auto, <line-style>)` peut être présente dans une valeur `row-rule-style`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons un style unique pour les lignes tracées entre les éléments flexibles.

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

Nous définissons la liste comme un conteneur flexible, créant des lignes en définissant la {{CSSxRef("flex-direction")}} sur `column` à l'aide du raccourci {{CSSxRef("flex-flow")}}. Nous incluons un {{CSSxRef("gap")}} de `5px` pour fournir suffisamment d'espace entre les lignes pour accueillir notre règle rouge en pointillés de `3px`&nbsp;:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: column;
  gap: 5px;
  row-rule-width: 3px;
  row-rule-color: red;

  row-rule-style: dashed;
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 180)}}

### Valeurs répétées

Cet exemple montre comment, lorsque le nombre de valeurs dans la liste des styles est inférieur au nombre de règles de lignes, les valeurs sont répétées.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons trois styles séparés par des virgules comme valeur de `row-rule-style`&nbsp;:

```css live-sample___repeat
ul {
  row-rule-style: solid, dotted, dashed;
}
```

{{EmbedLiveSample("repeat", "", 180)}}

### Utiliser la fonction `repeat()`

Cet exemple montre comment utiliser la fonction `repeat()` dans la valeur de la propriété `row-rule-style`. Nous utilisons le même HTML et CSS que dans les exemples précédents. Nous incluons une fonction `repeat()`, définissant la liste de deux valeurs `<line-style>` à répéter 3 fois.

```css live-sample___func live-sample___auto
ul {
  row-rule-style: double, repeat(3, inset, dashed), double;
}
```

{{EmbedLiveSample("func", "", 180)}}

Le conteneur flexible a six lignes, donc cinq interstices. La fonction `repeat()` répète deux valeurs de style trois fois, créant une liste de huit valeurs de style, donc les trois dernières valeurs de la liste sont ignorées.

### Utiliser `auto` dans `repeat()`

Cet exemple montre comment utiliser `auto` au lieu d'un entier dans la fonction `repeat()`.

En utilisant `repeat(auto, <line-style>)`, nous définissons toutes les règles de lignes sur `dotted`, sauf la première et la dernière, que nous définissons sur `solid`.

```css live-sample___auto
ul {
  row-rule-style: solid, repeat(auto, dotted), solid;
}
```

{{EmbedLiveSample("auto", "", 180)}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (row-rule-style: solid, dotted) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété row-rule-style";
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
- La propriété {{CSSxRef("column-rule-style")}}
- La propriété raccourcie {{CSSxRef("row-rule")}}
- La propriété raccourcie {{CSSxRef("rule-style")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
