---
title: Propriété CSS `column-rule-color`
short-title: column-rule-color
slug: Web/CSS/Reference/Properties/column-rule-color
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-rule-color`** définit la couleur des lignes tracées entre les colonnes des dispositions en grille, flexible et multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule-color")}}

```css interactive-example-choice
column-rule-color: purple;
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222), rgb(222 48 125);
```

```css interactive-example-choice
column-rule-color: rgb(48 125 222), repeat(3, rgb(222 48 125));
```

```css interactive-example-choice
column-rule-color: purple, repeat(auto, orange, yellow);
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
  columns: 7;
  column-rule: solid thick;
  gap: 7px;
}
```

## Syntaxe

```css
/* Une seule valeur de type <color> */
column-rule-color: purple;
column-rule-color: rgb(192 56 78);
column-rule-color: transparent;
column-rule-color: hsl(0 100% 50% / 60%);

/* Plusieurs valeurs */
column-rule-color: purple, magenta;
column-rule-color: repeat(3, purple), repeat(3, transparent);
column-rule-color: repeat(3, purple), repeat(3, yellow, blue);
column-rule-color: purple, repeat(auto, transparent), purple;
column-rule-color: purple, repeat(auto, blue, yellow), purple;
column-rule-color:
  repeat(3, purple), repeat(auto, transparent), repeat(3, purple);

/* Valeurs globales */
column-rule-color: inherit;
column-rule-color: initial;
column-rule-color: revert;
column-rule-color: revert-layer;
column-rule-color: unset;
```

### Valeurs

La propriété `column-rule-color` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-color>`
  - : Une couleur ({{CSSxRef("&lt;color&gt;")}}) représentant la couleur de la ligne.

- `<repeat-line-color>`
  - : La fonction {{CSSxRef("repeat()")}}, avec un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus comme premier argument et une ou plusieurs valeurs `<color>` comme arguments suivants. L'entier ({{CSSxRef("&lt;integer&gt;")}}) définit combien de fois les valeurs `<color>` doivent être répétées.

- `<auto-repeat-line-color>`
  - : La fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<color>` comme arguments suivants. Les valeurs `<color>` fournies sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles de colonne qui ne sont pas spécifiées explicitement par d'autres composants de la valeur de la propriété.

## Description

La propriété `column-rule-color` définit les couleurs des lignes tracées dans les gouttières entre les colonnes des conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plusieurs colonnes.

La valeur est une liste de composants séparés par des virgules, qui peut inclure des types `<line-color>`, `<repeat-line-color>` et `<auto-repeat-line-color>`.

La propriété `column-rule-color`, ainsi que les propriétés {{CSSxRef("column-rule-width")}} et {{CSSxRef("column-rule-style")}}, peut être définie à l'aide de la propriété raccourcie {{CSSxRef("column-rule")}}. La propriété `column-rule-color`, ainsi que la propriété {{CSSxRef("row-rule-color")}}, peut également être définie à l'aide de la propriété raccourcie {{CSSxRef("rule-color")}}.

Une couleur de ligne (`<line-color>`) peut être déclarée comme toute valeur CSS {{CSSxRef("&lt;color&gt;")}} valide. Si la valeur de la propriété ne contient qu'une seule `<color>`, toutes les lignes de règle ont cette couleur. Par exemple, si nous déclarons ce qui suit, les lignes dans les gouttières entre les colonnes sont toutes bleues&nbsp;:

```css
column-rule-color: blue;
```

Lorsque plusieurs `<line-color>` sont déclarées, elles sont appliquées aux lignes tracées dans les gouttières entre les colonnes dans l'ordre défini. S'il y a plus de lignes que de valeurs `<line-color>`, la liste des couleurs est répétée jusqu'à ce que chaque ligne de règle de colonne ait une couleur. Par exemple, si nous déclarons ce qui suit, toutes les lignes impaires sont rouges et toutes les lignes paires sont jaunes.

```css
column-rule-color: red, yellow;
```

### Répéter les couleurs de ligne

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;color&gt;")}} passées en tant qu'arguments suivants le nombre de fois défini. Cela permet de répéter les valeurs de couleur autant de fois que nécessaire sans avoir à les énumérer individuellement. Les déclarations suivantes sont équivalentes&nbsp;:

```css
column-rule-color: blue, yellow, red, yellow, red;
column-rule-color: blue, repeat(2, yellow, red);
```

Cela crée une liste de cinq couleurs. Si le nombre de couleurs dans la liste de couleurs de la valeur `column-rule-color` dépasse le nombre d'interstices entre les colonnes, les couleurs excédentaires sont ignorées. Si le conteneur a trois colonnes, la ligne dans la première gouttière est bleue et la deuxième jaune.

### Répéter automatiquement les couleurs de ligne

La fonction `repeat()`, avec `auto` comme premier argument au lieu d'un entier positif, peut également être utilisée. Avec `auto` comme premier argument, les valeurs `<color>` passées en tant qu'arguments suivants sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles de colonne qui ne sont pas spécifiquement définies par d'autres composants de la valeur de la propriété.

```css
column-rule-color: blue, repeat(auto, yellow), red;
```

Dans ce cas, la première règle de colonne est bleue, la dernière est rouge et toutes les autres sont jaunes. Tant qu'il y a au moins deux règles de colonne, la première est toujours bleue et la dernière est toujours rouge. Toutes les autres règles sont jaunes, ce qui signifie que s'il n'y a que 2 ou 3 colonnes, il n'y a pas de lignes jaunes.

Le mot-clé `auto` dans la fonction `repeat()` crée un répéteur automatique qui remplit les valeurs des couleurs des lignes de règle de colonne qui ne reçoivent pas autrement de valeurs provenant d'autres parties de la liste, empêchant ainsi la liste d'être répétée. Une valeur `column-rule-color` peut inclure, au maximum, un `repeat(auto, <color>)`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons une seule couleur pour les lignes tracées entre les colonnes dans une mise en page multi-colonnes.

#### HTML

Nous incluons un paragraphe de texte.

```html
<p>
  Ce texte est réparti en trois colonnes. La propriété `column-rule-color` est
  utilisée pour changer la couleur de la ligne tracée entre les colonnes. Ne
  trouvez-vous pas cela merveilleux&nbsp;?
</p>
```

#### CSS

Nous définissons l'élément HTML {{HTMLElement("p")}} comme un conteneur multi-colonnes. Nous incluons un {{CSSxRef("gap")}} de `7px` pour fournir un espacement pour la règle en pointillés de `3px` tracée entre les colonnes&nbsp;:

```css
p {
  column-count: 5;
  gap: 7px;
  column-rule-style: dashed;
  column-rule-width: 3px;

  column-rule-color: blue;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

### Plusieurs valeurs de couleur

Cet exemple montre comment déclarer plus d'une couleur, et comment les valeurs sont répétées lorsqu'il y a moins de valeurs dans la liste des couleurs que de gouttières entre les colonnes.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons trois couleurs séparées par des virgules comme valeur de `column-rule-color`&nbsp;:

```html hidden
<p>
  Ce texte est réparti en trois colonnes. La propriété `column-rule-color` est
  utilisée pour changer la couleur de la ligne tracée entre les colonnes. Ne
  trouvez-vous pas cela merveilleux&nbsp;?
</p>
```

```css hidden
p {
  column-count: 5;
  gap: 7px;
  column-rule-style: dashed;
  column-rule-width: 3px;
}

@layer no-support {
  @supports not (column-rule-color: red, blue) {
    body::before {
      content: "Votre navigateur ne prend pas en charge les valeurs multiples pour la propriété column-rule-color";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

```css
p {
  column-rule-color: blue, yellow, red;
}
```

#### Résultat

{{EmbedLiveSample("Plusieurs valeurs de couleur", "", 180)}}

Il y a quatre gouttières mais seulement trois couleurs, donc la liste est répétée, les première et quatrième lignes étant toutes deux bleues.

### Utiliser la fonction `repeat()`

Cet exemple montre comment utiliser la fonction `repeat()` dans la valeur de la propriété `column-rule-color` et comment cette fonction peut aider à éviter que des valeurs complexes ne deviennent ingérables.

#### HTML

Nous incluons une liste d'auteur·ice·s&nbsp;:

```html live-sample___repeat live-sample___auto
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

Nous commençons par définir la liste comme un conteneur de grille, en créant des colonnes avec la propriété {{CSSxRef("grid-template-columns")}}. Nous incluons un espacement ({{CSSxRef("gap")}}) de `7px` pour fournir suffisamment d'espace entre les colonnes pour notre règle en pointillés de `3px`, et supprimons les puces avec {{CSSxRef("list-style-type")}} défini sur `none`.

Ensuite, pour montrer comment les valeurs peuvent devenir compliquées et l'utilité de la fonction `repeat()`, nous déclarons deux propriétés personnalisées, que nous utilisons dans trois déclarations de fonction de couleur {{CSSxRef("color-mix()")}} pour créer des couleurs bleue, rouge et jaune. La couleur jaune `color-mix()` se trouve dans une fonction `repeat()`, définie pour se répéter 3 fois.

Nous avons également ajouté une bordure autour de chaque élément de la grille afin que vous puissiez voir comment la ligne se place au milieu de la gouttière entre les colonnes.

```css live-sample___repeat live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 7px;
  list-style-type: none;
  column-rule-style: dashed;
  column-rule-width: 3px;

  --base: yellow;
  --mixin: blue;
  column-rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(3, color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin))),
    color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin));
}
li {
  border: 1px solid #ddd;
}
```

#### Résultat

{{EmbedLiveSample("repeat", "", 180)}}

La grille comporte neuf cellules, donc huit gouttières. La fonction `repeat()` répète nos deux couleurs mélangées trois fois, créant une liste de couleurs avec sept couleurs. Comme il y a plus de gouttières de colonne que de couleurs dans la liste, la dernière couleur de la liste n'est pas utilisée.

### Utiliser `auto` dans `repeat()`

Cet exemple montre comment utiliser `auto`, au lieu d'un entier, dans la fonction `repeat()`.

Nous utilisons le même HTML et CSS que dans les exemples précédents, mais nous remplaçons la valeur de `column-rule-color`. Ici, nous utilisons `repeat(auto, <color>)` pour définir toutes les lignes en noir presque transparent (`#0003`), sauf la première et la dernière, que nous définissons en noir solide (`black`).

```css live-sample___auto
ul {
  column-rule-color: black, repeat(auto, #0003), black;
}
```

#### Résultat

{{EmbedLiveSample("auto", "", 180)}}

```css hidden live-sample___repeat live-sample___auto
@layer no-support {
  @supports not (column-rule-color: repeat(3, red)) {
    body::before {
      content: "Votre navigateur ne prend pas en charge les fonctions `repeat()` dans une valeur de propriété column-rule-color";
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

- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- La propriété {{CSSxRef("column-rule-width")}}
- La propriété {{CSSxRef("column-rule-style")}}
- La propriété {{CSSxRef("row-rule-color")}}
- La propriété raccourcie {{CSSxRef("column-rule")}}
- La propriété raccourcie {{CSSxRef("rule-color")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [d'espacement CSS](/fr/docs/Web/CSS/Guides/Gaps)
