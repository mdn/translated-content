---
title: Propriété CSS `column-rule-width`
short-title: column-rule-width
slug: Web/CSS/Reference/Properties/column-rule-width
l10n:
  sourceCommit: e9c03ba87f9ff4123150d8f7dc457bd546bdab83
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-rule-width`** définit la largeur des lignes tracées entre les colonnes des dispositions en grille, flexible et multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule-width")}}

```css interactive-example-choice
column-rule-width: thin;
```

```css interactive-example-choice
column-rule-width: 4px;
```

```css interactive-example-choice
column-rule-width: thin, medium, thick;
```

```css interactive-example-choice
column-rule-width: repeat(2, 1px, thick), 10px;
```

```css interactive-example-choice
column-rule-width: 10px, repeat(auto, 1px, 2px), 10px;
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
  column-rule-style: solid;
  column-rule-color: teal;
  gap: 7px;
}
```

## Syntaxe

```css
/* Valeurs avec des mots-clés */
column-rule-width: thin;
column-rule-width: medium;
column-rule-width: thick;
column-rule-width: thin, medium, thick;
column-rule-width: thick, repeat(5, thin), thick;
column-rule-width: thick, repeat(auto, thin, medium), thick;

/* Valeurs de type <length> */
column-rule-width: 0.1em;
column-rule-width: 5px;
column-rule-width: 1px, 3px, 5px;
column-rule-width: 0.1rem, repeat(auto, 1px), 10px, 0.5rem;
column-rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Valeurs globales */
column-rule-width: inherit;
column-rule-width: initial;
column-rule-width: revert;
column-rule-width: revert-layer;
column-rule-width: unset;
```

### Valeurs

La propriété `column-rule-width` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-width>`
  - : Une largeur de ligne ({{CSSxRef("&lt;line-width&gt;")}})&nbsp;: Cela peut être l'un des mots-clés `thin`, `medium` ou `thick`, ou une valeur positive de type {{CSSxRef("&lt;length&gt;")}}, représentant la largeur de la ligne. La valeur par défaut est `medium`.

- `<repeat-line-width>`
  - : La fonction {{CSSxRef("repeat()")}}, avec le premier argument étant un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus, et une ou plusieurs valeurs {{CSSxRef("&lt;line-width&gt;")}} comme arguments suivants. L'entier définit combien de fois les valeurs `<line-width>` doivent être répétées.

- `<auto-repeat-line-width>`
  - : La fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<line-width>` comme arguments suivants. Les valeurs `<line-width>` fournies sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles de colonne qui ne sont pas spécifiées explicitement par d'autres composants de la valeur de la propriété.

## Description

La propriété `column-rule-width` définit la largeur des lignes de règle de colonne tracées dans les gouttières entre les colonnes adjacentes dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout) contenant plus d'une colonne.

> [!NOTE]
> `column-rule-width` définit uniquement la largeur des lignes tracées dans les gouttières. Ces lignes n'ont aucun effet sur le [modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction) ou la mise en page. La taille de la gouttière est définie par la propriété {{CSSxRef("gap")}}&nbsp;; la valeur par défaut étant `1em` pour les conteneurs multi-colonnes et `0` dans tous les autres contextes. Si la largeur d'une règle est supérieure à celle de la {{CSSxRef("gap")}}, la ligne est tracée derrière le contenu de la colonne.

La valeur est une liste de composants séparés par des virgules, qui peut inclure des types `<line-width>`, `<repeat-line-width>` et `<auto-repeat-line-width>`.

La règle de largeur de colonne (`column-rule-width`), ainsi que les propriétés {{CSSxRef("column-rule-color")}} et {{CSSxRef("column-rule-style")}}, peut également être définie à l'aide du raccourci {{CSSxRef("column-rule")}}, tandis que {{CSSxRef("rule-width")}} est un raccourci qui définit à la fois la `column-rule-width` et les propriétés {{CSSxRef("row-rule-width")}}.

Une largeur de ligne (`<line-width>`) peut être déclarée comme toute valeur CSS valide de type {{CSSxRef("&lt;line-width&gt;")}}&nbsp;: les mots-clés `thin`, `medium` ou `thick`, ou une valeur positive de type {{CSSxRef("&lt;length&gt;")}}. Les valeurs en pourcentage sont invalides.

Si la valeur de la propriété ne consiste qu'en une seule largeur de ligne (`<line-width>`), toutes les règles de colonne sont cette largeur. Par exemple, si nous déclarons ce qui suit, toutes les règles de colonne ont une largeur de `2px`&nbsp;:

```css
column-rule-width: 2px;
```

Lorsque plus d'une largeur de ligne (`<line-width>`) est déclarée, elles sont appliquées aux règles de colonne dans l'ordre défini. S'il y a plus de règles de colonne que de valeurs `<line-width>`, la liste des largeurs de ligne est répétée jusqu'à ce que chaque règle ait une largeur. Par exemple, si nous déclarons ce qui suit, toutes les règles impaires sont `thick`, et toutes les règles paires sont `0.25rem`.

```css
column-rule-width: thick, 0.25rem;
```

### Répéter les largeurs de ligne

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;line-width&gt;")}} passées comme arguments suivants le nombre de fois défini. Cela permet de répéter la même largeur un certain nombre de fois sans répéter plusieurs fois le même `<line-width>`. Les déclarations suivantes sont équivalentes&nbsp;:

```css
column-rule-width: 1rem, thick, thin, thick, thin, thick, thin;
column-rule-width: 1rem, repeat(3, thick, thin);
```

Vous pouvez utiliser n'importe quelle valeur `<line-width>`, y compris les propriétés personnalisées qui se résolvent en une largeur de ligne (`<line-width>`). L'utilisation de `repeat()` peut rendre les valeurs plus faciles à écrire, en particulier lors de l'utilisation de calculs de longueurs complexes. Elle permet d'écrire un motif récurrent en utilisant une seule fonction, quel que soit le nombre de colonnes. Les déclarations suivantes sont équivalentes&nbsp;:

```css
column-rule-width:
  1rem, min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)),
  min(calc(var(--base) - 3px), 10px), abs(calc(var(--secondary) - 30px)), thin;
column-rule-width:
  1rem,
  repeat(
    5,
    min(calc(var(--base) - 3px), 10px),
    abs(calc(var(--secondary) - 30px))
  ),
  thin;
```

Cela crée une liste de 12 largeurs. Si le nombre de largeurs dans la liste de largeurs de la valeur `column-rule-width` dépasse le nombre de gouttières entre les colonnes, les largeurs excédentaires sont ignorées. Si le conteneur a trois colonnes, la règle dans la première gouttière a une largeur de `1rem`, et la seconde est déterminée par la fonction {{CSSxRef("min()")}}.

Si le nombre de gouttières est supérieur au nombre de largeurs, la liste des largeurs est répétée. Si le conteneur a 13 ou 25 colonnes, cette séquence de largeurs est répétée une ou deux fois, respectivement, la dernière règle étant `thin`. Pour tout autre nombre de colonnes, jusqu'à 25, la dernière règle n'est pas `thin`.

### Répéter automatiquement les largeurs de ligne

La fonction `repeat()` accepte également `auto` comme premier argument au lieu d'un entier positif. Avec `auto` comme premier argument, la liste des valeurs `<line-width>` passées en arguments suivants est répétée autant de fois que nécessaire pour remplir les valeurs de toutes les règles de colonne qui ne sont pas spécifiées explicitement par d'autres composants de la valeur de la propriété.

```css
column-rule-width: 10px, repeat(auto, thin), 10px;
```

Dans ce cas, la première règle de colonne est `10px`, la dernière est `10px`, et toutes les autres sont `thin`. Peu importe si le conteneur a 3, 6, 11, 16 ou 21 colonnes, les première et dernière colonnes font toujours `10px`. Cela signifie que, s'il n'y a que 2 ou 3 colonnes, aucune règle de colonne n'a la largeur `thin`.

Le mot-clé `auto` dans la fonction `repeat()` crée un répéteur automatique qui fournit des valeurs aux largeurs de ligne des règles de ligne qui autrement ne reçoivent aucune valeur des autres parties de la liste, ce qui empêche la liste de recommencer. Une valeur `column-rule-width` peut inclure au maximum un `repeat(auto, <line-width>)`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons une seule règle pour les lignes tracées entre les éléments flex.

#### HTML

Nous incluons une liste d'auteur·ice·s&nbsp;:

```html live-sample___basic live-sample___repeat live-sample___func live-sample___auto
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

Nous définissons la liste comme un conteneur flex, créant des colonnes en définissant la direction du conteneur ({{CSSxRef("flex-direction")}}) sur `row` à l'aide du raccourci {{CSSxRef("flex-flow")}}. Nous incluons un espacement ({{CSSxRef("gap")}}) de `12px` pour fournir suffisamment d'espace entre les colonnes afin d'accueillir notre règle `10px groove maroon`&nbsp;:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: flex;
  flex-flow: row;
  gap: 12px;
  list-style-type: none;

  column-rule: 10px groove maroon;
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 180)}}

### Valeurs répétées

Cet exemple montre comment les valeurs se répètent lorsque la liste des styles contient moins de valeurs que de règles de colonne. Il montre également les valeurs par défaut de la largeur, de la couleur et du style, qui sont respectivement `medium`, `currentcolor` et `none`.

En utilisant le même HTML et le même CSS que dans l'exemple précédent, nous incluons quatre valeurs `<gap-rule>` séparées par des virgules comme valeur de `column-rule`, en omettant la largeur dans la première valeur `<gap-rule>`, la couleur dans la deuxième et le style dans la troisième, tandis que la quatrième inclut les trois composants&nbsp;:

```css live-sample___repeat
ul {
  column-rule:
    maroon dashed,
    1px dotted,
    5px teal,
    10px orange solid;
}
```

{{EmbedLiveSample("repeat", "", 180)}}

La ligne marron a une largeur de `3px`. La ligne en pointillés a la même couleur que le texte. Il n'y a pas de lignes sarcelle, car le style de ligne (`<line-style>`) de la troisième valeur `<gap-rule>` vaut `none` par défaut, et aucune ligne n'est donc peinte. Il y a plus de gouttières que de valeurs `<gap-rule>`, la liste des valeurs se répète donc.

### Utiliser la fonction `repeat()`

Cet exemple montre l'utilisation de la fonction `repeat()` dans la valeur de la propriété `column-rule`. Nous utilisons le même HTML et le même CSS que dans les exemples précédents. Nous incluons une fonction `repeat()` et faisons répéter quatre fois la liste de deux valeurs `<gap-rule>`.

```css live-sample___func live-sample___auto
ul {
  column-rule:
    10px maroon dashed,
    repeat(4, dotted olive 3px, dashed teal 3px),
    10px maroon dashed;
}
```

{{EmbedLiveSample("func", "", 180)}}

Le conteneur flexible comporte neuf colonnes, donc huit gouttières. La fonction `repeat()` répète quatre fois deux valeurs de style, ce qui crée une liste de dix valeurs `<gap-rule>`. Comme il y a moins de gouttières de colonne que de valeurs `<gap-rule>` au total, les deux dernières valeurs de la liste sont supprimées.

### Utiliser `auto` dans `repeat()`

Cet exemple montre l'utilisation de l'argument `auto` à la place d'un entier dans la fonction `repeat()`.

En utilisant `repeat(auto, <gap-rule>)`, nous définissons toutes les règles de colonne sur `1px dotted` et leur attribuons par défaut la couleur actuelle, à l'exception de la première et de la dernière, que nous définissons sur `10px groove maroon`.

```css live-sample___auto
ul {
  column-rule:
    10px groove maroon,
    repeat(auto, 3px dotted maroon),
    10px groove maroon;
}
```

{{EmbedLiveSample("auto", "", 180)}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule: thin, thick) {
    body::before {
      content: "Votre navigateur ne prend pas en charge plusieurs valeurs pour la propriété column-rule";
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

- La propriété {{CSSxRef("column-rule-color")}}
- La propriété {{CSSxRef("column-rule-width")}}
- La propriété {{CSSxRef("column-rule-style")}}
- La propriété raccourcie {{CSSxRef("rule-rule")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [d'espacement CSS](/fr/docs/Web/CSS/Guides/Gaps)
