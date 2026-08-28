---
title: Propriété CSS `column-rule`
short-title: column-rule
slug: Web/CSS/Reference/Properties/column-rule
l10n:
  sourceCommit: 5cf8432d980cbe9b7e5611d647d8566b5c4ff3ed
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) `column-rule` définit la largeur, le style et la couleur des lignes tracées entre les colonnes des dispositions en grille, flexible et multi-colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: column-rule")}}

```css interactive-example-choice
column-rule: solid;
```

```css interactive-example-choice
column-rule: groove 0.8em teal;
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(3, dashed pink 1px, outset olive 5px);
```

```css interactive-example-choice
column-rule:
  dotted thick teal,
  repeat(auto, dashed pink 1px, dashed pink 5px),
  dotted thick teal;
```

```css interactive-example-choice
column-rule:
  dashed medium olive,
  repeat(auto, dotted pink 1px),
  inset orange 5px;
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
}
```

## Propriétés constituantes

Cette propriété est une propriété raccourcie regroupant les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("column-rule-color")}}
- {{CSSxRef("column-rule-style")}}
- {{CSSxRef("column-rule-width")}}

## Syntaxe

```css
/* Une seule valeur */
column-rule: dashed;
column-rule: inset 8px;
column-rule: solid teal;
column-rule: thick outset rgb(18 122 67);

/* Plusieurs valeurs */
column-rule: groove, dashed, solid;
column-rule:
  dotted medium teal,
  dashed pink 0.5em,
  outset olive 1px;
column-rule:
  solid #0ff,
  repeat(3, dashed pink 1px, outset olive 5px);
column-rule:
  inset 3px yellow,
  repeat(auto, dashed pink 1px, groove olive 5px);

/* Valeurs globales */
column-rule: inherit;
column-rule: initial;
column-rule: revert;
column-rule: revert-layer;
column-rule: unset;
```

### Valeurs

La propriété `column-rule` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<gap-rule>`
  - : Défini comme une, deux ou trois des valeurs listées ci-dessous, dans n'importe quel ordre.
    - `<'line-width'>`
      - : Une largeur de ligne ({{CSSxRef("&lt;line-width&gt;")}})&nbsp;: Cela peut être l'un des mots-clés `thin`, `medium` ou `thick`, ou une valeur de type {{CSSxRef("&lt;length&gt;")}} positive, représentant la largeur de la ligne. La valeur par défaut est `medium`.
    - `<'line-style'>`
      - : Un style de ligne ({{CSSxRef("&lt;line-style&gt;")}})&nbsp;: l'un des mots-clés `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` ou `outset`. La valeur par défaut est `none`. Voir {{CSSxRef("column-rule-style")}}.
    - `<'color'>`
      - : Une couleur ({{CSSxRef("&lt;color&gt;")}}) représentant la couleur de la ligne. La valeur par défaut est `currentcolor`. Voir {{CSSxRef("column-rule-color")}}.

- `<gap-repeat-rule>`
  - : La fonction {{CSSxRef("repeat()")}}, avec un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus comme premier argument et une ou plusieurs valeurs `<gap-rule>` comme arguments suivants. L'entier (`<integer>`) définit combien de fois la liste des valeurs `<gap-rule>` doit être répétée.

- `<gap-auto-repeat-rule>`
  - : La fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<gap-rule>` comme arguments suivants. La liste fournie de valeurs `<gap-rule>` est répétée autant de fois que nécessaire pour remplir les valeurs de toutes les règles de colonne qui ne sont pas spécifiquement définies par d'autres composants de la valeur de la propriété.

## Description

La propriété `column-rule` définit le style de ligne de toutes les lignes de règle tracées dans les espaces entre les colonnes dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grille](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plus d'une colonne.

La propriété `column-rule` est un raccourci pour {{CSSxRef("column-rule-color")}}, {{CSSxRef("column-rule-style")}} et {{CSSxRef("column-rule-width")}}. La propriété `column-rule`, ainsi que la propriété raccourcie {{CSSxRef("row-rule")}}, peuvent également être définies à l'aide de la propriété raccourcie {{CSSxRef("rule")}}.

La valeur de la propriété est une liste de composants séparés par des virgules, qui peuvent inclure les types `<gap-rule>`, `<gap-repeat-rule>` et `<gap-auto-repeat-rule>`. Chaque `<gap-rule>` définit la largeur, la couleur et le style d'une ou plusieurs lignes de règle.

Si la valeur de la propriété consiste en une seule règle d'espacement (`<gap-rule>`), toutes les règles de colonnes ont ce style. Si nous déclarons ce qui suit, toutes les règles de colonnes sont de `dashed maroon 3px`&nbsp;:

```css
column-rule: dashed maroon 3px;
```

Lorsqu'il y a plusieurs `<gap-rule>` déclarées, elles s'appliquent aux règles de colonnes dans l'ordre défini. S'il y a plus d'espaces entre les colonnes que de valeurs `<gap-rule>`, la liste des valeurs est répétée jusqu'à ce que chaque règle de colonne possède une ligne d'espacement. Si l'on déclare ce qui suit, par exemple, chaque règle impaire vaut `dashed maroon 3px`, et chaque règle paire vaut `dotted navy 5px`.

```css
column-rule:
  dashed maroon 3px,
  dotted navy 5px;
```

### Répéter les styles de ligne

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS [`<gap-rule>`](#gap-rule) passées comme arguments suivants le nombre de fois défini. Cela permet de répéter le même `<gap-rule>` un nombre défini de fois sans répéter le même CSS plusieurs fois. Les déclarations suivantes sont équivalentes&nbsp;:

```css
column-rule:
  solid maroon 5px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px,
  outset navy 10px,
  inset olive 1px;
column-rule:
  solid maroon 5px,
  repeat(3, outset navy 10px, inset olive 1px);
```

Ça crée une liste de sept règles. Si le nombre de styles dans la liste de styles de la valeur `column-rule` dépasse le nombre d'espaces entre les colonnes, les valeurs de style excédentaires sont ignorées. Si le conteneur sur lequel cela est appliqué a trois colonnes, la règle dans le premier espace est `solid maroon 5px` et la deuxième `outset navy 10px`.

Si le nombre d'espaces entre les colonnes est supérieur au nombre de styles, la liste des styles est répétée. Si le conteneur a 8, 15, 22 ou 29 colonnes, cette séquence de styles est répétée une, deux, trois ou quatre fois, respectivement, la dernière règle étant `inset olive 1px`.

### Répéter automatiquement les styles de ligne

La fonction `repeat()` accepte également `auto` comme premier argument au lieu d'un entier positif. Avec `auto` comme premier argument, les valeurs [`<gap-rule>`](#gap-rule) passées comme arguments suivants sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles qui ne sont pas explicitement spécifiées par d'autres composants de la valeur de la propriété.

```css
column-rule:
  solid maroon 5px,
  repeat(auto, dotted olive 1px, dashed navy 1px),
  solid maroon 5px;
```

Dans ce cas, les premières et dernières règles de colonne sont `solid maroon 5px`, et toutes les autres alternent entre `dotted olive 1px` et `dashed navy 1px`. Peu importe si le conteneur a 3, 6, 11, 16 ou 21 colonnes&nbsp;; les premières et dernières gouttières ont toujours une ligne épaisse solide marron peinte entre elles (sauf si {{CSSxRef("column-rule-visibility-items")}} conduit à ce qu'aucune ligne ne soit dessinée), et toutes les autres règles de colonne sont des lignes fines, pointillées olive ou en pointillé marine. S'il n'y a que 2 ou 3 colonnes, il n'y a pas de lignes pointillées ou en pointillé.

Le mot-clé `auto` au sein de la fonction `repeat()` crée un répéteur automatique qui remplit les valeurs pour les règles de colonne qui ne reçoivent pas autrement de valeurs provenant d'autres parties de la liste, empêchant ainsi la liste d'être répétée. Au maximum, une seule occurrence de `repeat(auto, <gap-rule>)` peut être présente dans une valeur de `column-rule`.

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

Nous définissons la liste comme un conteneur flexible, créant des colonnes en définissant la direction du conteneur ({{CSSxRef("flex-direction")}}) sur `row` à l'aide du raccourci {{CSSxRef("flex-flow")}}. Nous incluons un espacement ({{CSSxRef("gap")}}) de `12px` pour fournir suffisamment d'espace entre les colonnes pour accueillir notre règle `10px groove maroon`&nbsp;:

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

Cet exemple montre comment les valeurs sont répétées lorsqu'il y a moins de valeurs dans la liste des styles que de règles de colonne. Il montre également les valeurs par défaut pour la largeur, la couleur et le style de `medium`, `currentcolor` et `none`, respectivement.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons quatre valeurs `<gap-rule>` séparées par des virgules comme valeur de `column-rule`, en omettant la largeur dans le premier `<gap-rule>`, la couleur dans le deuxième et le style dans le troisième, le quatrième incluant les trois composants&nbsp;:

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

La ligne marron fait `3px` de large. La ligne pointillée est de la même couleur que le texte. Il n'y a pas de lignes teal, car le style de ligne (`<line-style>`) du troisième `<gap-rule>` est par défaut `none`, donc aucune ligne n'est tracée. Il y a plus de gouttières que de valeurs `<gap-rule>`, donc la liste des valeurs est répétée.

### Utiliser la fonction `repeat()`

Cet exemple montre comment utiliser la fonction `repeat()` dans la valeur de la propriété `column-rule`. Nous utilisons le même HTML et CSS que dans les exemples précédents. Nous incluons une fonction `repeat()`, définissant la liste de deux valeurs `<gap-rule>` à répéter quatre fois.

```css live-sample___func live-sample___auto
ul {
  column-rule:
    10px maroon dashed,
    repeat(4, dotted olive 3px, dashed teal 3px),
    10px maroon dashed;
}
```

{{EmbedLiveSample("func", "", 180)}}

Le conteneur flexible a neuf colonnes, donc huit gouttières. La fonction `repeat()` répète deux valeurs de style quatre fois, créant une liste de dix valeurs `<gap-rule>`. Comme il y a moins de gouttières de colonne que de valeurs `<gap-rule>` au total, les deux dernières valeurs de la liste sont ignorées.

### Utiliser `auto` dans `repeat()`

Cet exemple montre comment utiliser l'argument `auto` au lieu d'un entier dans la fonction `repeat()`.

En utilisant `repeat(auto, <gap-rule>)`, nous définissons toutes les règles de colonne sur `1px pointillé` et par défaut à la couleur actuelle, sauf la première et la dernière, que nous définissons sur `10px groove maroon`.

```css live-sample___auto
ul {
  column-rule:
    10px groove maroon,
    repeat(auto, 3px dotted maroon),
    10px groove maroon;
}
```

{{EmbedLiveSample("auto", "", "180")}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (column-rule: thin, thick) {
    body::before {
      content: "Votre navigateur ne prend pas en charge les valeurs multiples pour la propriété column-rule";
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
- La propriété {{CSSxRef("column-rule-style")}}
- La propriété raccourcie {{CSSxRef("row-rule")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [d'espacement CSS](/fr/docs/Web/CSS/Guides/Gaps)
