---
title: Propriété CSS `row-rule-break`
short-title: row-rule-break
slug: Web/CSS/Reference/Properties/row-rule-break
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`row-rule-break`** définit le comportement de rupture des règles de ligne en segments lorsque les règles de ligne intersectent les espaces entre les colonnes.

{{InteractiveExample("Démonstration CSS&nbsp;: rule")}}

```css interactive-example-choice
row-rule-break: none;
```

```css interactive-example-choice
row-rule-break: normal;
```

```css interactive-example-choice
row-rule-break: intersection;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </div>
</section>
```

```css interactive-example
#example-element {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-rule: solid thick orange;
  column-rule: solid thick lavender;
  gap: 15px;
}
#example-element i {
  padding: 5px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
row-rule-break: none;
row-rule-break: normal;
row-rule-break: intersection;

/* Valeurs globales */
row-rule-break: inherit;
row-rule-break: initial;
row-rule-break: revert;
row-rule-break: revert-layer;
row-rule-break: unset;
```

### Valeurs

Cette propriété est définie comme un mot-clé unique parmi la liste suivante&nbsp;:

- `none`
  - : Il n'y a pas de rupture dans les règles de ligne lorsqu'elles intersectent les espaces entre les colonnes&nbsp;; au contraire, une règle de ligne continue est peinte sur toute la largeur du conteneur, d'un bord à l'autre.
- `normal`
  - : Dans les conteneurs de type grille et flexibles, se comporte comme `none`. Dans les mises en page multi-colonnes, se comporte comme `none`. Il s'agit de la valeur par défaut.
- `intersection`
  - : Les règles de ligne se rompent toujours lorsqu'elles intersectent les espaces entre les colonnes, les segments de règle de ligne commençant et se terminant aux bords du conteneur et des espaces.

## Description

La propriété `row-rule-break` définit si les règles de ligne doivent ou non être rompues en segments lorsqu'elles intersectent les espaces entre les colonnes.

Les règles de ligne sont peintes dans un espace de ligne sous forme d'un ou plusieurs segments, les segments se produisant entre les éléments de grille adjacents dans des lignes séparées, entre les éléments flexibles ou les lignes flexibles, en fonction de la {{CSSxRef("flex-direction")}} dans les mises en page flexibles, ou dans les espaces entre les lignes adjacentes de colonnes dans les mises en page multi-colonnes lorsque {{CSSxRef("column-height")}} crée plusieurs lignes de colonnes.

La propriété `row-rule-break` ne détermine que si la rupture se produit. Par défaut, la rupture, ou l'espace, entre les segments de règle de ligne est la largeur de l'espace entre les colonnes, chaque segment commençant et se terminant au bord de l'espace (ou au bord du conteneur). Si l'espace est `0`, cette rupture peut ne pas être visible. Les positions finales peuvent être contrôlées avec les propriétés {{CSSxRef("row-rule-inset")}}.

Si `row-rule-break` est défini sur `none`, il n'y a pas de rupture, la ligne de règle de ligne est continue, et toutes les valeurs de `row-rule-inset` n'affectent que la règle de ligne sur le bord gauche et droit du conteneur. Lorsqu'il y a des ruptures, les propriétés `row-rule-inset` affectent le début et la fin de chaque segment de règle de ligne.

La propriété `row-rule-break`, ainsi que la propriété {{CSSxRef("column-rule-break")}}, peut être définie en utilisant la propriété raccourcie {{CSSxRef("rule-break")}}.

Le fait qu'une règle de ligne soit par défaut composée d'un seul segment continu ou de segments qui se rompent lorsqu'ils intersectent les espaces entre les colonnes dépend du type de conteneur.

### Conteneurs de grille

Dans les conteneurs de grille, par défaut, les segments de règle de ligne continuent à travers les intersections «&nbsp;croisées&nbsp;» visibles. La définition de `row-rule-break: intersection` force les segments à se rompre à chaque espace entre les colonnes, là où ils se croisent autrement.

```html hidden
<h1>Règles de rupture par défaut dans la grille</h1>
<div class="grille">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
<p>
  <label
    ><input type="checkbox" /> Définir
    <code>row-rule-break: intersection</code></label
  >
</p>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}

:has(:checked) .grille {
  row-rule-break: intersection;
}
.grille {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
  width: 100%;
}

.grille > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("Conteneurs de grille", "", 240)}}

Par défaut, il n'y a pas de rupture de règle de ligne. Cochez la case pour définir `row-rule-break` sur `intersection`, ce qui fait que les règles continues se rompent à chaque intersection «&nbsp;croisée&nbsp;». Par défaut, la rupture entre les segments correspond à la largeur de l'espacement de colonne {{CSSxRef("column-gap")}}.

### Conteneurs flexibles

Dans les boîtes flexibles, lorsque la `flex-direction` est `row` ou `row-reverse` dans les modes d'écriture horizontaux, la règle de ligne est continue, les segments de colonne commençant et se terminant au bord des espaces de ligne. Lorsque la `flex-direction` est `column` ou `column-reverse`, la règle de colonne est continue, les segments de ligne commençant et se terminant au bord des espaces de colonne.

```html hidden
<h1>Règle de rupture dans les boîtes flexibles</h1>
<article>
  <section>
    <h2>flex-direction: row</h2>
    <div class="boite-flexible">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
  <section>
    <h2>flex-direction: column</h2>
    <div class="boite-flexible colonne">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </section>
</article>
<p>
  <label
    ><input type="checkbox" /> Définir
    <code>row-rule-break: intersection</code></label
  >
</p>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}

:has(:checked) .boite-flexible {
  row-rule-break: intersection;
}
article {
  display: flex;
  gap: 5vw;
  rule: 1px solid black;
  width: 100vw;
}
section {
  flex-basis: 45vw;
}
.boite-flexible {
  display: flex;
  flex-flow: balance;
  flex-line-count: 3;
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
  width: 100%;
}
.colonne {
  flex-flow: column balance;
  gap: 20px;
}

.boite-flexible > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  height: 30px;
}
```

{{EmbedLiveSample("Conteneurs flexibles", "", 300)}}

Dans les modes d'écriture horizontaux, lorsque la valeur est `row` ou `row-reverse`, la règle de ligne est continue par défaut, tandis qu'avec `column` ou `column-reverse`, la règle de ligne se casse à chaque espace de colonne. La définition de `row-rule-break` sur `intersection` n'affecte que les règles de ligne dans les scénarios `row` et `row-reverse`.

### Conteneurs multi-colonnes

Dans les conteneurs multi-colonnes, le comportement par défaut `normal` se comporte de la même manière que `none`.

```html hidden
<h1>Règles de rupture par défaut dans les multi-colonnes</h1>
<ol>
  <li>Un poisson</li>
  <li>Deux poissons</li>
  <li>Poisson rouge</li>
  <li>Poisson bleu</li>
  <li>Poisson noir</li>
  <li>Poisson bleu</li>
  <li>Poisson vieux</li>
  <li>Poisson nouveau.</li>
  <li>Celui-ci a une petite étoile.</li>
  <li>Celui-ci a une petite voiture.</li>
  <li>Dis donc ! Quelle quantité</li>
  <li>De poissons il y a.</li>
  <li>Oui. Certains sont bleus.</li>
  <li>Et certains sont bleus.</li>
  <li>Certains sont vieux.</li>
  <li>Et certains sont nouveaux.</li>
  <li>Certains sont tristes.</li>
  <li>Et certains sont contents.</li>
  <li>Et certains sont très, très mauvais.</li>
  <li>Pourquoi sont-ils</li>
  <li>Tristes et contents et mauvais ?</li>
  <li>Je ne sais pas.</li>
  <li>Va demander à ton père.</li>
</ol>
<fieldset>
  <legend>Définir <code>row-rule-break:</code></legend>
  <label
    ><input type="radio" name="break" value="none" /> <code>none</code></label
  >
  <label
    ><input type="radio" name="break" value="normal" checked />
    <code>normal</code></label
  >
  <label
    ><input type="radio" name="break" value="intersection" />
    <code>intersection</code></label
  >
</fieldset>
```

```css hidden
body {
  font-family: sans-serif;
  text-align: center;
}
h1 {
  font-size: 1.25em;
}
h2 {
  font-size: 1em;
}
ol {
  columns: 3 / 4em;
  gap: 20px;
  rule: 5px solid blue;
  column-rule-color: lightblue;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  row-rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  row-rule-break: intersection;
}
:has([value="none"]:checked) ol {
  row-rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("Conteneurs multi-colonnes", "", 540)}}

Si vous sélectionnez `intersection`, la règle de ligne se divise en segments chaque fois qu'elle atteint un espace entre les colonnes, chaque segment commençant et se terminant au bord de l'espace. Les positions de début et de fin peuvent être modifiées avec les propriétés `row-rule-inset`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Dans cet exemple, nous utilisons la propriété `row-rule-break` pour diviser chaque segment de règle dans un conteneur de grille afin que des segments de règle de ligne soient créés entre les espaces des colonnes. La modification de la propriété `column-gap` change la taille des segments.

#### HTML

Nous créons une liste de 50 éléments et un curseur pour modifier la largeur de l'espace entre les colonnes. La plupart du HTML est masqué pour plus de concision.

```html
<ul>
  <li>1</li>
  <li>2</li>
  …
  <li>49</li>
  <li>50</li>
</ul>
```

```html hidden live-sample___basic
<p>
  <label
    >Modifier la largeur de l'espace entre les colonnes.
    <input type="range" min="0" max="32" value="16" id="gap"
  /></label>
  <output id="o"></output>
</p>
<ul id="ul">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
  <li>32</li>
  <li>33</li>
  <li>34</li>
  <li>35</li>
  <li>36</li>
  <li>37</li>
  <li>38</li>
  <li>39</li>
  <li>40</li>
  <li>41</li>
  <li>42</li>
  <li>43</li>
  <li>44</li>
  <li>45</li>
  <li>46</li>
  <li>47</li>
  <li>48</li>
  <li>49</li>
  <li>50</li>
</ul>
```

#### CSS

Nous définissons la liste non ordonnée comme un conteneur à 8 colonnes, créant des colonnes et des lignes avec la propriété {{CSSxRef("grid-template-columns")}} et en définissant {{CSSxRef("list-style-type")}} sur `none` pour supprimer les puces. Nous incluons un {{CSSxRef("gap")}} de `20px` pour fournir suffisamment d'espace entre les colonnes et les lignes pour accueillir nos règles de colonne et de ligne solides de `20px`. Enfin, nous définissons les règles de ligne pour qu'elles se divisent en segments à chaque intersection.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 10px solid olive;
  column-rule: 10px solid palegoldenrod;

  row-rule-break: intersection;
}
```

Le reste du CSS est masqué pour plus de concision.

```css hidden live-sample___basic
ol {
  place-items: center;
  width: 95vw;
}
li {
  text-align: center;
  font-family: sans-serif;
  line-height: 50px;
}
```

```js hidden live-sample___basic
const gap = document.getElementById("gap");
const ul = document.getElementById("ul");
const output = document.getElementById("o");

gap.addEventListener("input", () => {
  output.innerText = ul.style.columnGap = `${gap.value}px`;
});
```

#### Résultat

{{EmbedLiveSample("Basic", "", 600)}}

Agrandissez les espaces entre les colonnes et notez comment les ruptures entre les segments de ligne s'agrandissent. Réduisez la largeur de l'espace entre les colonnes à `0px` et remarquez comment la décoration des lignes semble continue. Ce n'est pas le cas&nbsp;! L'espace de `0px` entre les segments peut ne pas être visible, mais les segments commencent et se terminent toujours à l'espace, donc tous les décalages définis avec les propriétés `row-rule-inset` sont toujours appliqués.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("column-rule-break")}}
- La propriété raccourcie {{CSSxRef("rule-break")}}
- La propriété raccourcie {{CSSxRef("rule-inset")}}
- La propriété {{CSSxRef("rule-overlap")}}
- La propriété {{CSSxRef("rule-visibility-items")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espacements CSS](/fr/docs/Web/CSS/Guides/Gaps)
