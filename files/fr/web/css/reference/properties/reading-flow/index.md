---
title: reading-flow
slug: Web/CSS/Reference/Properties/reading-flow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`reading-flow`** permet de modifier {{Glossary("reading order", "l'ordre de lecture")}} des éléments enfants d'un {{Glossary("Block/CSS", "bloc")}}, d'un conteneur [flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) ou d'un conteneur [de grille](/fr/docs/Web/CSS/Guides/Grid_layout). Cela affecte l'ordre dans lequel ils sont rendus à la parole et navigués lors de l'utilisation de la navigation séquentielle, comme le tabulation vers des liens ou des boutons.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
reading-flow: normal;
reading-flow: flex-visual;
reading-flow: flex-flow;
reading-flow: grid-columns;
reading-flow: grid-rows;
reading-flow: grid-order;
reading-flow: source-order;

/* Valeurs globales */
reading-flow: inherit;
reading-flow: initial;
reading-flow: revert;
reading-flow: revert-layer;
reading-flow: unset;
```

### Valeurs

La propriété `reading-flow` prend l'un des mots-clés suivants comme valeur&nbsp;:

- `normal`
  - : La valeur par défaut. L'ordre de lecture suit l'ordre des éléments dans le DOM.

- `flex-visual`
  - : N'affecte que les {{Glossary("Flex Container", "conteneurs flexibles")}}. L'ordre de lecture suit l'ordre visuel des éléments `flex`, en tenant compte du {{CSSxRef("writing-mode")}}. Par conséquent, un document en français avec `flex-direction: row-reverse` et `reading-flow: flex-visual` défini aurait un ordre de lecture de gauche à droite.

- `flex-flow`
  - : N'affecte que les conteneurs flexibles. L'ordre de lecture suit la direction définie par {{CSSxRef("flex-flow")}}.

- `grid-columns`
  - : N'affecte que les {{Glossary("Grid Container", "conteneurs de grille")}}. L'ordre de lecture suit l'ordre visuel des éléments de la grille, colonne par colonne, en tenant compte du {{CSSxRef("writing-mode")}}.

- `grid-rows`
  - : N'affecte que les conteneurs de grille. L'ordre de lecture suit l'ordre visuel des éléments de la grille, ligne par ligne, en tenant compte du {{CSSxRef("writing-mode")}}.

- `grid-order`
  - : N'affecte que les conteneurs de grille. Si la propriété {{CSSxRef("order")}} est appliquée à l'un des enfants du conteneur, l'ordre de lecture suit l'ordre modifié des éléments. Si la propriété `order` n'est pas appliquée aux éléments de la grille, `grid-order` se comporte comme `normal`.

- `source-order`
  - : N'affecte que les conteneurs de grille, flexibles et de bloc. N'a aucun effet par lui-même — l'ordre de lecture du conteneur continue de suivre l'ordre des éléments dans le DOM — mais permet de modifier l'ordre de lecture en définissant la propriété {{CSSxRef("reading-order")}} sur les enfants du conteneur.

## Description

La propriété `reading-flow` modifie {{Glossary("reading order", "l'ordre de lecture")}} des élément dans un conteneur de {{Glossary("Block/CSS", "bloc")}}, conteneur [flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) ou conteneur [de grille](/fr/docs/Web/CSS/Guides/Grid_layout) lorsque sa valeur est différente de `normal`. Un tel conteneur est appelé [conteneur de flux de lecture](/fr/docs/Glossary/Reading_order#modifier_lordre_de_lecture_en_css).

Par défaut, le contenu web est lu dans l'ordre source du DOM. En général, l'ordre source doit exprimer un ordre de lecture logique pour le contenu, et cela doit également se refléter dans l'ordre visuel de la mise en page du contenu. Cependant, parfois, l'ordre visuel ou l'ordre de tabulation diffère de l'ordre source. Par exemple, lors de l'application de plusieurs mises en page flexbox ou grille à un document avec des [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using) pour répondre à différents besoins de l'appareil ou de l'utilisateur, l'ordre du contenu peut différer en fonction de la largeur de la fenêtre d'affichage. Dans ce cas, la propriété `reading-flow` peut être utilisée pour garantir que l'ordre de lecture et de tabulation reflète l'ordre visuel.

Dans certains cas, vous pouvez souhaiter affiner davantage l'ordre de lecture au sein d'un conteneur de flux de lecture. Vous pouvez utiliser les valeurs de la propriété {{CSSxRef("reading-order")}} sur les enfants du conteneur, en les regroupant en groupes ordinaux qui sont ensuite lus dans l'ordre numérique.

### Interaction avec `tabindex`

Si un ensemble d'éléments enfants d'un conteneur de flux de lecture qui ne sont normalement pas focalisables est rendu focalisable avec des attributs [`tabindex="0"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex), leur ordre de lecture sera modifié comme prévu par les propriétés `reading-flow` et `reading-order`, de la même manière que pour les éléments interactifs tels que {{HTMLElement("a")}} ou {{HTMLElement("button")}}.

Cependant, toute tentative de modifier l'ordre de tabulation du contenu d'un conteneur de flux de lecture en utilisant des valeurs `tabindex` positives sera ignorée — remplacée par les effets de `reading-flow` et `reading-order`. Vous ne devriez généralement pas les utiliser de toute façon&nbsp;; voir [Ne pas utiliser Tabindex supérieur à 0 <sup>(angl.)</sup>](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Les propriétés `reading-flow` et `reading-order` offrent un bien meilleur moyen de modifier l'ordre de tabulation si nécessaire.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer les valeurs flexibles

Dans cet exemple, nous démontrons les effets des différentes valeurs de `reading-flow` sur un conteneur flexible avec des éléments flex inversés.

#### HTML

Le balisage inclut un élément HTML {{HTMLElement("select")}} pour sélectionner différentes valeurs de `reading-flow`, et un {{HTMLElement("div")}} wrapper contenant trois éléments HTML {{HTMLElement("a")}}.

```html
<form>
  <label for="reading-flow">Choisir le flux de lecture&nbsp;:</label>
  <select id="reading-flow">
    <option>normal</option>
    <option>flex-visual</option>
    <option>flex-flow</option>
  </select>
</form>
<div class="wrapper">
  <a href="#">Élément 1</a>
  <a href="#">Élément 2</a>
  <a href="#">Élément 3</a>
</div>
```

#### CSS

Nous utilisons une valeur {{CSSxRef("display")}} qui vaut `flex` pour transformer le `<div>` en conteneur flexible, et afficher les éléments flexibles dans une ligne dans l'ordre inverse du DOM avec une valeur {{CSSxRef("flex-direction")}} qui vaut `row-reverse`. Initialement, nous définissons un `reading-flow` de `normal` afin que les éléments soient lus ou parcourus à l'aide de la touche <kbd>Tab</kbd> dans l'ordre du DOM.

Nous définissons également une valeur {{CSSxRef("order")}} de `1` sur le premier élément `<a>` pour qu'il s'affiche après le deuxième et le troisième élément dans le flux flexible. L'ordre visuel résultant des éléments flexibles de gauche à droite est «&nbsp;Élément 1&nbsp;», «&nbsp;Élément 3&nbsp;», puis «&nbsp;Élément 2&nbsp;», mais l'ordre du DOM reste inchangé.

```css
.wrapper {
  display: flex;
  flex-direction: row-reverse;
  reading-flow: normal;
  gap: 1em;
}

a:first-child {
  order: 1;
}
```

#### JavaScript

Dans notre script, nous récupérons les références à l'élément `<select>` et au conteneur `<div>`, puis ajoutons un écouteur d'évènement {{DOMxRef("HTMLElement/change_event", "change")}} à l'élément `<select>`. Lorsqu'une nouvelle valeur est sélectionnée, elle est définie comme valeur de la propriété `reading-flow` sur le conteneur.

```js
const elementSelecteur = document.getElementById("reading-flow");
const elementEnglobant = document.querySelector(".wrapper");

elementSelecteur.addEventListener("change", () => {
  elementEnglobant.style.readingFlow = elementSelecteur.value;
});
```

#### Résultat

La démonstration se présente comme suit&nbsp;:

{{EmbedLiveSample("Comparer les valeurs flexibles", "", 100)}}

Tout d'abord, essayez de naviguer entre les liens avec `reading-flow: normal` défini. L'ordre de tabulation est «&nbsp;Élément 1&nbsp;», «&nbsp;Élément 2&nbsp;», puis «&nbsp;Élément 3&nbsp;», car c'est l'ordre des éléments dans le DOM.

Maintenant, essayez de changer la valeur de `reading-flow` et de naviguer à nouveau entre les liens&nbsp;:

- Une valeur de `flex-visual` fait que les éléments sont parcourus dans l'ordre «&nbsp;Élément 1&nbsp;», «&nbsp;Élément 3&nbsp;», puis «&nbsp;Élément 2&nbsp;», ce qui correspond à l'ordre d'affichage visuel résultant des propriétés flexbox appliquées.
- Une valeur de `flex-flow` fait que les éléments sont parcourus dans l'ordre «&nbsp;Élément 2&nbsp;», «&nbsp;Élément 3&nbsp;», puis «&nbsp;Élément 1&nbsp;», ce qui correspond à la direction du `flex-flow` — dans ce cas, `row-reverse`. Ici, l'ordre de tabulation est l'inverse de l'ordre d'affichage.

### Comparer les valeurs de la grille

Dans cet exemple, nous démontrons les effets des différentes valeurs de `reading-flow` sur un conteneur de grille.

#### HTML

Le balisage inclut un élément HTML {{HTMLElement("select")}} pour sélectionner différentes valeurs de `reading-flow`, et un conteneur {{HTMLElement("div")}} contenant quatre éléments HTML {{HTMLElement("a")}}.

```html
<form>
  <label for="reading-flow">Choisir le flux de lecture&nbsp;:</label>
  <select id="reading-flow">
    <option>normal</option>
    <option>grid-rows</option>
    <option>grid-columns</option>
    <option>grid-order</option>
  </select>
</form>
<div class="wrapper">
  <a class="a" href="#">Élément A</a>
  <a class="b" href="#">Élément B</a>
  <a class="c" href="#">Élément C</a>
  <a class="d" href="#">Élément D</a>
</div>
```

#### CSS

Nous utilisons une valeur {{CSSxRef("display")}} qui faut `grid` pour transformer le `<div>` en conteneur de grille, et affichons les éléments de la grille en trois colonnes à l'aide de {{CSSxRef("grid-template-columns")}}. Nous définissons également {{CSSxRef("grid-template-areas")}} pour décrire différentes zones de placement dans ces colonnes, et plaçons les éléments `<a>` dans ces zones à l'aide de {{CSSxRef("grid-area")}}. Initialement, nous définissons un `reading-flow` de `normal` afin que les éléments soient lus ou parcourus par tabulation dans l'ordre source DOM par défaut.

Enfin, nous définissons une valeur {{CSSxRef("order")}} de `1` sur le premier élément `<a>`&nbsp;; cela n'a aucun effet sur la mise en page car cela ne remplace pas le placement de la zone de la grille, mais cela a un effet lorsque certaines valeurs de `reading-flow` sont définies, comme vous le verrez plus tard.

La lecture de gauche à droite, l'ordre d'affichage résultant des éléments de la grille est «&nbsp;Élément D&nbsp;», «&nbsp;Élément B&nbsp;», «&nbsp;Élément C&nbsp;», puis «&nbsp;Élément A&nbsp;».

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-areas:
    "d b b"
    "c c a";
  reading-flow: normal;
}

.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.d {
  grid-area: d;
}

a:first-child {
  order: 1;
}
```

#### JavaScript

Dans notre script, nous récupérons des références à l'élément `<select>` et au conteneur `<div>`, puis ajoutons un écouteur d'évènement {{DOMxRef("HTMLElement/change_event", "change")}} à l'élément `<select>`. Lorsqu'une nouvelle valeur est sélectionnée, elle est définie comme valeur de la propriété `reading-flow` sur le conteneur.

```js
const elementSelecteur = document.getElementById("reading-flow");
const elementEnglobant = document.querySelector(".wrapper");

elementSelecteur.addEventListener("change", () => {
  elementEnglobant.style.readingFlow = elementSelecteur.value;
});
```

#### Résultat

La démonstration s'affiche comme ceci&nbsp;:

{{EmbedLiveSample("Comparer les valeurs de la grille", "", 100)}}

Tout d'abord, essayez de naviguer dans les liens avec `reading-flow: normal` défini. L'ordre de tabulation est «&nbsp;Élément A&nbsp;», «&nbsp;Élément B&nbsp;», «&nbsp;Élément C&nbsp;» et «&nbsp;Élément D&nbsp;», car c'est l'ordre des éléments dans le DOM.

Modifiez maintenant la valeur de `reading-flow`, puis essayez à nouveau de parcourir les liens à l'aide de la touche <kbd>Tab</kbd>&nbsp;:

- Une valeur de `grid-rows` fait en sorte que les éléments soient parcourus par tabulation dans l'ordre d'affichage visuel par ligne. Cela donne «&nbsp;Élément D&nbsp;», «&nbsp;Élément B&nbsp;», «&nbsp;Élément C&nbsp;», puis «&nbsp;Élément A&nbsp;».
- Une valeur de `grid-columns` fait en sorte que les éléments soient parcourus par tabulation dans l'ordre d'affichage visuel par colonne. Cela donne «&nbsp;Élément D&nbsp;», «&nbsp;Élément C&nbsp;», «&nbsp;Élément B&nbsp;», puis «&nbsp;Élément A&nbsp;».
- Une valeur de `grid-order` fait en sorte que les éléments soient parcourus par tabulation dans l'ordre du DOM, mais prend en compte les modifications de la valeur `order`. Comme nous avons défini `order: 1;` sur le premier élément `<a>`, l'ordre de tabulation est «&nbsp;Élément B&nbsp;», «&nbsp;Élément C&nbsp;», «&nbsp;Élément D&nbsp;», puis «&nbsp;Élément A&nbsp;».

### Ajustement de l'ordre de lecture sur les conteneurs de blocs

Dans cet exemple, nous démontrons les effets de la valeur `reading-flow: source-order` sur un conteneur de blocs.

#### HTML

Le balisage inclut un conteneur {{HTMLElement("div")}} contenant quatre éléments HTML {{HTMLElement("a")}}.

```html
<div class="wrapper">
  <a class="a" href="#">Élément A</a>
  <a class="b" href="#">Élément B</a>
  <a class="c" href="#">Élément C</a>
  <a class="d" href="#">Élément D</a>
</div>
```

#### CSS

Nous définissons un `reading-flow` de `source-order` afin que les éléments soient lus ou parcourus par tabulation dans l'ordre du DOM, mais des modifications sont autorisées pour l'ordre de lecture via {{CSSxRef("reading-order")}}. Nous définissons une valeur `reading-order` de `1` sur le premier élément `<a>`.

```css
.wrapper {
  reading-flow: source-order;
}

a:first-child {
  reading-order: 1;
}
```

#### Résultat

La démonstration s'affiche comme ceci&nbsp;:

{{EmbedLiveSample("Ajustement du flux de lecture sur les conteneurs de blocs", "", 100)}}

Essayez de naviguer dans les liens à l'aide de la touche <kbd>Tab</kbd>&nbsp;: l'ordre de tabulation est «&nbsp;Élément B&nbsp;», «&nbsp;Élément C&nbsp;», «&nbsp;Élément D&nbsp;», puis «&nbsp;Élément A&nbsp;» — l'ordre des éléments dans le DOM est respecté, mais l'Élément A a été placé dans un groupe ordinal de lecture plus élevé que les autres (la valeur par défaut de `reading-order` est `0`), il est donc tabulé en dernier.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("reading-order")}}
- [Exemples de `reading-flow` CSS <sup>(angl.)</sup>](https://chrome.dev/reading-flow-examples/) sur chrome.dev
