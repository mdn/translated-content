---
title: Propriété CSS `column-rule-style`
short-title: column-rule-style
slug: Web/CSS/Reference/Properties/column-rule-style
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-rule-style`** définit le style de ligne des lignes tracées entre les colonnes des dispositions en grille, flexible et multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule-style")}}

```css interactive-example-choice
column-rule-style: dotted;
```

```css interactive-example-choice
column-rule-style: dashed, dotted;
```

```css interactive-example-choice
column-rule-style: repeat(2, inset, outset), double;
```

```css interactive-example-choice
column-rule-style: double, repeat(auto, dashed, solid), double;
```

```css interactive-example-choice
column-rule-style: hidden;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Londres. Le trimestre de Noël vient de s'achever, et Lord George siège à
    Lincoln's Inn Hall. Le temps est magnifique en ce mois de mai. Il y a autant
    de boue dans les rues que si les eaux venaient tout juste de se retirer de
    la surface de la terre, et il ne serait pas étonnant de croiser un
    ornithorynque, d'environ deux pieds de long, se dandinant comme un lézard
    sur Morgan Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  columns: 6;
  column-rule-width: thick;
  column-rule-color: teal;
  gap: 7px;
}
```

## Syntaxe

```css
/* Une seule valeur */
column-rule-style: none;
column-rule-style: hidden;
column-rule-style: dotted;
column-rule-style: dashed;
column-rule-style: solid;
column-rule-style: double;
column-rule-style: groove;
column-rule-style: ridge;
column-rule-style: inset;
column-rule-style: outset;

/* Plusieurs valeurs */
column-rule-style: groove, double, dashed;
column-rule-style: solid, repeat(5, ridge), solid;
column-rule-style: dotted, repeat(auto, inset, outset), dotted;

/* Valeurs globales */
column-rule-style: inherit;
column-rule-style: initial;
column-rule-style: revert;
column-rule-style: revert-layer;
column-rule-style: unset;
```

### Valeurs

La propriété `column-rule-style` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-style>`
  - : Un style de ligne ({{CSSxRef("&lt;line-style&gt;")}})&nbsp;: l'une des valeurs `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` ou `outset`. La valeur par défaut est `none`.

- `<repeat-line-style>`
  - : La fonction {{CSSxRef("repeat()")}}, avec le premier argument étant un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus, et les arguments suivants étant des valeurs {{CSSxRef("&lt;line-style&gt;")}}. L'entier définit combien de fois les valeurs `<line-style>` doivent être répétées.

- `<auto-repeat-line-style>`
  - : La fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<line-style>` comme arguments suivants. Les valeurs `<line-style>` fournies sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles de colonne qui ne sont pas spécifiées explicitement par d'autres composants de la valeur de la propriété.

## Description

La propriété `column-rule-style` définit le style des lignes de séparation tracées dans les espaces entre les colonnes dans les mises en page [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plusieurs colonnes.

La valeur est une liste de composants séparés par des virgules, pouvant inclure les types `<line-style>`, `<repeat-line-style>` et `<auto-repeat-line-style>`.

La propriété `column-rule-style`, ainsi que les propriétés {{CSSxRef("column-rule-color")}} et {{CSSxRef("column-rule-width")}}, peut être définie à l'aide du raccourci {{CSSxRef("column-rule")}}. La propriété `column-rule-style`, ainsi que la propriété {{CSSxRef("row-rule-style")}}, peut également être définie à l'aide du raccourci {{CSSxRef("rule-style")}}.

Si la valeur de la propriété ne comporte qu'un seul style de ligne (`<line-style>`), toutes les règles de colonnes ont ce style. Si nous déclarons ce qui suit, toutes les règles de colonnes sont `double`&nbsp;:

```css
column-rule-style: double;
```

Lorsque plus d'un style de ligne (`<line-style>`) est déclaré, ils sont appliqués aux règles de colonnes dans l'ordre défini. S'il y a plus de règles de colonnes que de valeurs `<line-style>`, la liste des styles de ligne est répétée jusqu'à ce que chaque règle de colonne ait un style. Si nous déclarons ce qui suit, par exemple, toutes les règles impaires sont `double` et toutes les règles paires sont `groove`.

```css
column-rule-style: double, groove;
```

### Répéter les styles de ligne

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;line-style&gt;")}} passées comme arguments suivants le nombre de fois défini. Cela permet de répéter le même style un certain nombre de fois sans répéter la même valeur. Vous pouvez inclure des valeurs de mot-clé `<line-style>` ou des propriétés personnalisées qui se résolvent en un style de ligne (`<line-style>`) valide. L'utilisation de `repeat()` peut rendre les valeurs plus faciles à écrire, permettant aux motifs récurrents d'être écrits à l'aide d'une seule fonction, quel que soit le nombre de colonnes. Les déclarations suivantes sont équivalentes&nbsp;:

```css
column-rule-style: solid, outset, inset, outset, inset;
column-rule-style: solid, repeat(2, outset, inset);
```

Cela crée une liste de cinq styles. Si le nombre de styles dans la liste de styles de la valeur `column-rule-style` dépasse le nombre d'espaces entre les colonnes, les styles excédentaires sont ignorés. Si le conteneur a trois colonnes, la règle dans la première gouttière est `solid` et la deuxième `outset`.

S'il y a plus de gouttières que de styles, la liste des styles est répétée. Si le conteneur a 6, 11, 16 ou 21 colonnes, cette séquence de styles est répétée une, deux, trois ou quatre fois, respectivement, la dernière règle étant `inset`.

### Répéter automatiquement les styles de ligne

La fonction `repeat()` accepte également `auto` comme premier argument au lieu d'un entier positif. Avec `auto` comme premier argument, les valeurs `<line-style>` passées comme paramètres suivants sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles de colonne qui ne sont pas spécifiquement définies par d'autres composants de la valeur de la propriété.

```css
column-rule-style: solid, repeat(auto, dotted), solid;
```

Dans ce cas, peu importe si le conteneur a 3, 6, 11, 16 ou 21 colonnes&nbsp;; la première et la dernière règle de colonne sont toujours `solid`, et toutes les autres règles de colonne sont `dotted`. S'il n'y a que 2 ou 3 colonnes, il n'y a pas de règles de colonne en pointillés.

Le mot-clé `auto` dans la fonction `repeat()` crée un répéteur automatique qui remplit les valeurs des règles de colonne qui ne reçoivent pas d'autres parties de la liste, empêchant la liste d'être répétée. Une seule occurrence de `repeat(auto, <line-style>)` est autorisée dans une valeur `column-rule-style`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

#### HTML

```html
<p>
  Ce texte est réparti en trois colonnes. La propriété `column-rule-style` est
  utilisée pour changer le style de la ligne tracée entre les colonnes. Ne
  trouvez-vous pas cela merveilleux&nbsp;?
</p>
```

#### CSS

```css
p {
  column-count: 3;
  column-rule-style: dashed;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

### Plusieurs valeurs

#### HTML

Nous incluons une liste d'auteur·ice·s&nbsp;:

```html live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>Kimberlé Crenshaw</li>
  <li>Angela Y. Davis</li>
  <li>Bernardine Evaristo</li>
  <li>Audre Lorde</li>
  <li>Cathy Park Hong</li>
  <li>Zoya Patel</li>
  <li>Juno Mac</li>
  <li>Molly Smith</li>
  <li>Tara Westover</li>
</ul>
```

#### CSS

Nous définissons la liste comme un conteneur flexible, créant des colonnes en définissant la direction du conteneur ({{CSSxRef("flex-direction")}}) sur `row` à l'aide du raccourci {{CSSxRef("flex-flow")}}. Nous incluons un espacement ({{CSSxRef("gap")}}) de `5px` pour fournir suffisamment d'espace entre les colonnes pour accueillir notre règle double teal de `3px`&nbsp;:

```css live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 5px;
  column-rule-width: 3px;
  column-rule-color: teal;

  column-rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### Résultat

{{EmbedLiveSample("multiple", "", 180)}}

Comme il y a plus de valeurs (10) que de gouttières (8), les valeurs `none` et `hidden` ne sont pas utilisées.

### Valeurs répétées

Cet exemple montre que, lorsque la liste des styles contient moins de valeurs que de règles de colonne, les valeurs sont répétées.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons trois styles séparés par des virgules comme valeur de `column-rule-style`&nbsp;:

```css live-sample___repeat
ul {
  column-rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("repeat", "", 180)}}

### Utiliser la fonction `repeat()`

Cet exemple montre l'utilisation de la fonction `repeat()` dans la valeur de la propriété `column-rule-style`. Nous utilisons le même HTML et CSS que dans les exemples précédents. Nous incluons une fonction `repeat()`, définissant la liste de deux valeurs `<line-style>` à répéter 3 fois.

```css live-sample___func live-sample___auto
ul {
  column-rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", 180)}}

Le conteneur flexible a six colonnes, donc cinq gouttières. La fonction `repeat()` répète deux valeurs de style trois fois, créant une liste de huit valeurs de style, donc les trois dernières valeurs de la liste sont ignorées.

### Utiliser `auto` dans `repeat()`

Cet exemple montre l'utilisation de `auto` au lieu d'un entier dans la fonction `repeat()`.

En utilisant `repeat(auto, <line-style>)`, nous définissons toutes les règles de colonne sur `groove`, sauf la première et la dernière, que nous définissons sur `solid`.

```css live-sample___auto
ul {
  column-rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", 180)}}

```css hidden live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule-style: solid, groove) {
    body::before {
      content: "Votre navigateur ne prend pas en charge les valeurs multiples pour la propriété column-rule-style";
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

- La propriété {{CSSxRef("column-rule-color")}}
- La propriété {{CSSxRef("column-rule-width")}}
- La propriété {{CSSxRef("row-rule-style")}}
- La propriété raccourcie {{CSSxRef("column-rule")}}
- La propriété raccourcie {{CSSxRef("row-rule")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [d'espacement CSS](/fr/docs/Web/CSS/Guides/Gaps)
