---
title: Fonction CSS `repeat()`
short-title: repeat()
slug: Web/CSS/Reference/Values/repeat
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`repeat()`** permet de répéter un fragment d'une [liste de pistes](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts) ou d'une [liste de lignes de règle](/fr/docs/Web/CSS/Guides/Gaps). Elle permet d'écrire de manière compacte des motifs répétés de colonnes, de lignes et de leurs décorations d'écart.

{{InteractiveExample("Démonstration CSS&nbsp;: repeat()")}}

```css interactive-example-choice
grid-template-columns: repeat(2, 60px);
rule-color: repeat(2, green, orange), yellow;
```

```css interactive-example-choice
grid-template-columns: 1fr repeat(2, 60px);
rule-color: repeat(2, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(2, 20px 1fr);
rule-color: repeat(auto, green), repeat(2, yellow);
```

```css interactive-example-choice
grid-template-columns: repeat(auto-fill, 40px);
rule-color: repeat(2, orange, yellow), repeat(auto, green);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 220px;
  rule: solid 4px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

Cette fonction peut être utilisée avec les fonctionnalités suivantes&nbsp;:

Les propriétés CSS de la grille&nbsp;:

- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}

Les propriétés CSS des écarts&nbsp;:

- {{CSSxRef("column-rule-color")}}
- {{CSSxRef("row-rule-color")}}
- {{CSSxRef("rule-color")}} (raccourcie)
- {{CSSxRef("column-rule-style")}}
- {{CSSxRef("row-rule-style")}}
- {{CSSxRef("rule-style")}} (raccourcie)
- {{CSSxRef("column-rule-width")}}
- {{CSSxRef("row-rule-width")}}
- {{CSSxRef("rule-width")}} (raccourcie)
- {{CSSxRef("column-rule")}} (raccourcie)
- {{CSSxRef("row-rule")}} (raccourcie)
- {{CSSxRef("rule")}} (raccourcie)

## Syntaxe

```css
/* Valeurs de type <track-repeat> */
repeat(4, 1fr)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] 1fr [col-end])
repeat(4, [col-start] min-content [col-end])
repeat(4, [col-start] max-content [col-end])
repeat(4, [col-start] auto [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])
repeat(4, [col-start] min-content [col-middle] max-content [col-end])

/* Valeurs de type <auto-repeat> */
repeat(auto-fill, 250px)
repeat(auto-fit, 250px)
repeat(auto-fill, [col-start] 250px [col-end])
repeat(auto-fit, [col-start] 250px [col-end])
repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])
repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])

/* Valeurs de type <fixed-repeat> */
repeat(4, 250px)
repeat(4, [col-start] 250px [col-end])
repeat(4, [col-start] 60% [col-end])
repeat(4, [col-start] minmax(100px, 1fr) [col-end])
repeat(4, [col-start] fit-content(200px) [col-end])
repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])

/* Valeurs de type <name-repeat> */
repeat(5, [footer])
repeat(auto-fill, [header])
repeat(2, [header footer])

/* <repeat-line> */
repeat(4, dashed)
repeat(2, solid, dotted, inset)
repeat(3, medium)
repeat(4, red)
repeat(3, green medium outset)

/* <auto-repeat-line> */
repeat(auto, dotted)
repeat(auto, 10px)
repeat(auto, currentcolor)
repeat(auto, red, blue, green)
repeat(auto, var(--lineColor) var(--lineSize) solid)
```

### Valeurs

La fonction `repeat()` prend deux arguments&nbsp;: le premier argument définit le [**nombre de répétitions**](#valeurs_de_nombre_de_répétitions), et le second définit la [**liste des valeurs répétées**](#liste_des_valeurs_répétées) (la liste des valeurs à répéter).

#### Valeurs de nombre de répétitions

- {{CSSxRef("&lt;integer&gt;")}}
  - : Un entier positif supérieur ou égal à `1` définissant le nombre de fois que la liste des fonctionnalités dans le deuxième paramètre est répétée.

- `auto-fill`
  - : Définit un répéteur automatique qui se répète pour remplir un espace. Se résout au plus grand nombre de répétitions qui ne provoque pas de débordement d'une boîte de contenu contrainte (ayant une taille maximale). Sinon, si la boîte de contenu a une taille minimale, le plus petit nombre de répétitions qui satisfait la taille minimale. S'il n'y a ni taille minimale ni maximale, se résout à `1`. Lorsqu'il est utilisé avec `subgrid`, le deuxième paramètre doit être une liste de noms de lignes.

- `auto-fit`
  - : Se comporte comme `auto-fill`, sauf qu'après avoir placé les éléments de la grille, toutes les pistes répétées vides sont effondrées.

- `auto`
  - : Définit un répéteur automatique. Une fois que les valeurs des autres composants de la valeur de la propriété ont été appliquées, les valeurs du deuxième paramètre sont répétées autant de fois que nécessaire, remplissant toutes les valeurs manquantes.

#### Liste des valeurs répétées

Une liste provenant de l'un des types de liste de pistes suivants. Que les composants de la liste soient séparés par des virgules ou des espaces dépend du séparateur attendu pour ce type de liste de valeurs de propriété.

- `<line-names>`
  - : Pour ajouter des noms de lignes aux sous-grilles, chaque `<line-names>` est constitué de zéro ou plusieurs valeurs {{CSSxRef("&lt;custom-ident&gt;")}}, séparées par des espaces et entourées de crochets, par exemple `[start header-start]`.

- `<track-size>`
  - : Chaque `<track-size>` est une {{CSSxRef("&lt;length-percentage&gt;")}} positive, une fonction {{CSSxRef("minmax()")}} dont le premier paramètre est le mot-clé `min-content`, `max-content` ou `auto`, ou une {{CSSxRef("fit-content()")}} fonction.

- `<fixed-size>`
  - : Chaque `<fixed-size>` est soit une {{CSSxRef("&lt;length-percentage&gt;")}} positive, soit une fonction `minmax()` dont le premier paramètre est une {{CSSxRef("&lt;length-percentage&gt;")}} positive et dont le second paramètre est une dimension qui n'est pas négative avec l'unité `fr` définissant le facteur de flexion de la piste ou le mot-clé `min-content`, `max-content` ou `auto`, soit une fonction `minmax()` dont le premier paramètre est une {{CSSxRef("&lt;length-percentage&gt;")}} positive ou le mot-clé `min-content`, `max-content` ou `auto`, et dont le second paramètre est une {{CSSxRef("&lt;length-percentage&gt;")}} positive.

- `<value>`
  - : Pour définir des règles d'espacement, chaque `<value>` est une valeur qui est acceptée par la propriété dans laquelle le `repeat()` apparaît, comme une {{CSSxRef("line-style")}}, {{CSSxRef("line-width")}}, {{CSSxRef("&lt;color&gt;")}}, ou les trois en tant que `<gap-rule>`.

## Description

La fonction `repeat()` représente un fragment répété dans une liste de valeurs séparées par des virgules ou des espaces, ce qui permet d'écrire un motif récurrent de manière plus compacte, pouvant être répété un nombre défini de fois ou automatiquement.

La forme générique de la syntaxe `repeat()` est, approximativement,

```css
repeat( <repeat-count>, <values-list> )
```

Le premier argument, le **nombre de répétitions**, définit le nombre de répétitions. Il définit le nombre de fois que la liste de valeurs définie dans le second paramètre doit être répétée. Il est défini soit comme une valeur entière de `1` ou plus, soit comme le mot-clé `auto-fill`, `auto-fit` ou `auto`.

Le second argument est une liste de valeurs séparées par des virgules ou des espaces, valides pour la propriété dans laquelle le `repeat()` apparaît. Il définit le **type de valeur répétée**, qui est généralement les _pistes_ ou les _règles de fonctionnalité_ à répéter.

- **tracks**:
  - : Définit l'ensemble des pistes qui sont répétées. Fondamentalement, cela consiste en une ou plusieurs valeurs séparées par des espaces, chaque valeur représentant la taille de cette piste. Chaque taille est définie en utilisant soit une valeur [`<track-size>`](#track-size), soit une valeur [`<fixed-size>`](#fixed-size). Vous pouvez également définir un ou plusieurs [noms de lignes](/fr/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) avant ou après chaque piste, en fournissant des valeurs [`<line-names>`](#line-names) avant et/ou après la taille de la piste.
- **rule feature**:
  - : Définit la règle de fonctionnalité qui est répétée. Il s'agit soit d'une liste séparée par des virgules de {{CSSxRef("&lt;color&gt;")}}, {{CSSxRef("line-width")}}, ou {{CSSxRef("line-style")}} valeurs, soit d'une liste séparée par des virgules de déclarations abrégées définissant la couleur, la largeur et le style de la ligne.

### Formes syntaxiques

La syntaxe de la fonction `repeat()` prend plusieurs formes&nbsp;:

- `<track-repeat>` = `repeat( <integer>, [ <line-names>? <track-size> ]+ <line-names>? )`
  - : L'entier (`<integer>`) définit le nombre de répétitions.

    Les valeurs `<track-size>` définissent la taille de la piste. Un `<track-size>` est soit une {{CSSxRef("&lt;length-percentage&gt;")}}, soit une valeur {{CSSxRef("&lt;flex&gt;")}} (une valeur positive d'unité `fr`), soit le mot-clé `min-content`, `max-content` ou `auto`, soit une fonction {{CSSxRef("fit-content()")}} avec un paramètre de longueur/pourcentage (`<length-percentage>`), soit une fonction {{CSSxRef("minmax()")}}. Pour les valeurs de piste `minmax()`, `min` est soit une longueur/pourcentage (`<length-percentage>`), soit le mot-clé `min-content`, `max-content` ou `auto`, tandis que `max` peut être l'un de ces mots-clés ou une valeur `<flex>`.

    Chaque `<track-size>` est éventuellement précédé de `<line-names>`, qui sont zéro ou plusieurs valeurs {{CSSxRef("&lt;custom-ident&gt;")}} séparées par des espaces et entourées de crochets.

    Un `<line-names>` final est facultatif.

- `<auto-repeat>` = `repeat( auto-fill | auto-fit, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Le mot-clé `auto-fill` ou `auto-fit` définit le nombre de répétitions.

    La taille fixe (`<fixed-size>`) définit la taille de la piste. Une taille fixe (`<fixed-size>`) est soit une valeur longueur/pourcentage (`<length-percentage>`), soit une fonction `minmax()` dont `min` ou `max` est une longueur/pourcentage (`<length-percentage>`) et dont l'autre valeur est aussi une longueur/pourcentage (`<length-percentage>`), soit la valeur du mot-clé `min-content`, `max-content` ou `auto`.

    Chaque `<fixed-size>` est éventuellement précédé de `<line-names>`.

    Le `<line-names>` final est facultatif.

- `<fixed-repeat>` = `repeat( <integer>, [ <line-names>? <fixed-size> ]+ <line-names>? )`
  - : Identique à `<auto-repeat>`, sauf que l'entier (`<integer>`) définit le nombre de répétitions, donc il n'y a pas de répétition automatique.

- `<name-repeat>` = `repeat( [ <integer> | auto-fill ], <line-names>+)`
  - : L'entier ou le mot-clé `auto-fill` définit le nombre de répétitions.

    Les `<line-names>` sont une ou plusieurs valeurs {{CSSxRef("&lt;custom-ident&gt;")}} séparées par des espaces et entourées de crochets.

    Ces noms de lignes (plutôt que les tailles de piste) concernent [`subgrid`](/fr/docs/Web/CSS/Guides/Grid_layout/Subgrid).

- `<repeat-value-type>` = `repeat( <integer> , <value># )`
  - : L'entier (`<integer>`) définit le nombre de répétitions.

    La valeur (`<value>`) est une ou plusieurs valeurs valides séparées par des virgules pour la propriété sur laquelle la fonction `repeat()` est appliquée.

    Plusieurs fonctions `repeat()` du `<repeat-value-type>` peuvent être utilisées dans une seule déclaration de valeur.

- `<auto-repeat-value-type>` = `repeat( auto , <value># )`
  - : Le mot-clé `auto` définit un répéteur automatique. Un répéteur automatique est utilisé pour compléter les valeurs des espaces qui ne reçoivent pas autrement de valeurs des autres parties de la liste.

    La valeur (`<value>`) est une ou plusieurs valeurs valides séparées par des virgules pour la propriété sur laquelle la fonction `repeat()` est appliquée.

    Au plus une fonction `repeat()` dans une liste donnée de valeurs peut être un répéteur automatique.

### `auto-fit` contre `auto-fill`

Lorsque le premier paramètre de la fonction `repeat()` est un mot-clé, `auto-fill`, `auto-fit` ou `auto`, plutôt qu'un entier, elle crée un répéteur automatique. Une fonction `repeat()` à répétition automatique répète les valeurs fournies comme second paramètre autant de fois que nécessaire.

Avec `auto-fill`, si le conteneur a une taille définie ou maximale dans l'axe concerné, le nombre de répétitions est le plus grand entier positif possible qui ne provoque pas de débordement du contenu hors de son conteneur. En considérant chaque piste comme sa fonction de dimensionnement maximale de piste (chaque valeur indépendante utilisée pour définir `grid-template-rows` ou `grid-template-columns`), si cela est défini. Sinon, s'il n'existe aucune taille définie ou maximale, la fonction `repeat()` est une fonction de dimensionnement minimal de piste. Si un nombre quelconque de répétitions provoque un débordement, la répétition vaut `1`. Sinon, si le conteneur de grille a une taille minimale définie dans l'axe concerné, le nombre de répétitions est le plus petit entier positif possible qui satisfait cette exigence minimale. Sinon, la liste de pistes définie ne se répète qu'une seule fois.

La valeur `auto-fit` se comporte comme `auto-fill`, sauf qu'après le placement des éléments de grille, toutes les pistes répétées vides sont effondrées. Une piste vide est une piste qui ne contient aucun élément de grille en flux placé dedans ou la traversant. (Cela peut entraîner l'effondrement de toutes les pistes, si elles sont toutes vides.)

Une piste effondrée est traitée comme ayant une seule fonction fixe de dimensionnement de piste de `0px`, et les gouttières de part et d'autre s'effondrent.

Pour déterminer le nombre de pistes répétées automatiquement, l'agent utilisateur arrondit la taille de la piste à une valeur définie par l'agent utilisateur (par exemple `1px`), afin d'éviter une division par zéro.

### Utiliser des exceptions et des règles

Il existe quelques règles et restrictions lors de l'utilisation de `repeat()`&nbsp;:

Une valeur de propriété peut contenir plusieurs fonctions `repeat()`.

```css example-good
.enveloppe {
  grid-template-columns:
    repeat(2, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

Une valeur de propriété peut contenir au plus une fonction `repeat()` à répétition automatique.

```css example-bad
.enveloppe {
  row-rule:
    repeat(auto, yellow 3px solid, red 1px dashed),
    repeat(auto, green 5px dotted);
}
```

Si une déclaration de propriété utilise `<auto-repeat>`, elle ne peut utiliser `<fixed-repeat>` que pour les appels supplémentaires à `repeat()`. Les répétitions automatiques (`auto-fill` ou `auto-fit`) ne peuvent pas être combinées avec des tailles totalement intrinsèques ou flexibles. Par exemple, c'est invalide, car cela combine la forme `<auto-repeat>` avec la forme `<track-repeat>`&nbsp;:

```css example-bad
.enveloppe {
  grid-template-columns:
    repeat(auto-fill, 10px)
    repeat(2, minmax(min-content, max-content));
}
```

La notation `repeat()` ne peut pas être imbriquée dans une autre fonction `repeat()`.

```css example-bad
.enveloppe {
  grid-template-columns: repeat(
    2,
    minmax(min-content, max-content),
    repeat(3, 10px)
  );
  column-rule: repeat(
    auto,
    yellow 3px solid,
    repeat(5, green 5px dotted),
    red 1px dashed
  );
}
```

## Syntaxe formelle

{{CSSSyntaxRaw(`<repeat-line> <track-repeat> <auto-repeat> <fixed-repeat> <name-repeat> <auto-repeat-line>`)}}

## Exemples

### Définir des colonnes de grille en utilisant `repeat()`

#### HTML

```html
<div id="container">
  <div>Un élément qui mesure 50 pixels de large.</div>
  <div>Un élément avec une largeur flexible.</div>
  <div>Un élément qui mesure 50 pixels de large.</div>
  <div>Un élément avec une largeur flexible.</div>
  <div>Un élément non-flexible qui mesure 100 pixels de large.</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: repeat(2, 50px 1fr) 100px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### Résultat

{{EmbedLiveSample("Définir des colonnes de grille en utilisant `repeat()`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("grid-template")}}
- La propriété {{CSSxRef("grid-template-rows")}}
- La propriété {{CSSxRef("grid-template-columns")}}
- La propriété {{CSSxRef("grid-template-areas")}}
- La propriété {{CSSxRef("grid-auto-columns")}}
- La propriété {{CSSxRef("grid-auto-rows")}}
- La propriété {{CSSxRef("grid-auto-flow")}}
- [Placement basé sur les lignes avec CSS Grid](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Zones de modèle de grille&nbsp;: raccourcis de définition de grille](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#les_propriétés_raccourcies_pour_les_grilles_css)
- Le module [de disposition de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- Le module [d'espacement CSS](/fr/docs/Web/CSS/Guides/Gaps)
