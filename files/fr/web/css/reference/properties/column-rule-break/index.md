---
title: Propriété CSS `column-rule-break`
short-title: column-rule-break
slug: Web/CSS/Reference/Properties/column-rule-break
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`column-rule-break`** définit le comportement de rupture des règles de colonne en segments chaque fois que les règles de colonne intersectent les espaces entre les lignes.

{{InteractiveExample("Démonstration CSS&nbsp;: rule")}}

```css interactive-example-choice
column-rule-break: none;
```

```css interactive-example-choice
column-rule-break: normal;
```

```css interactive-example-choice
column-rule-break: intersection;
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
  column-rule: solid thick orange;
  row-rule: solid thick lavender;
  gap: 15px;
  rule-overlap: column-over-row;
}
#example-element i {
  padding: 5px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
column-rule-break: none;
column-rule-break: normal;
column-rule-break: intersection;

/* Valeurs globales */
column-rule-break: inherit;
column-rule-break: initial;
column-rule-break: revert;
column-rule-break: revert-layer;
column-rule-break: unset;
```

### Valeurs

Cette propriété est définie comme un mot-clé parmi la liste suivante&nbsp;:

- `none`
  - : Il n'y a pas de rupture dans les règles de colonne lorsqu'elles intersectent les espaces entre les lignes&nbsp;; à la place, une règle de colonne continue est peinte sur toute la hauteur du conteneur, d'un bord à l'autre.
- `normal`
  - : Dans les conteneurs grille et flexibles, se comporte comme `none`. Dans les multi-col, se comporte comme `intersection`. C'est la valeur par défaut.
- `intersection`
  - : Les règles de colonne se rompent toujours lorsqu'elles intersectent les espaces entre les lignes, les segments de règle de colonne commençant et se terminant aux bords du conteneur et des espaces.

## Description

La propriété `column-rule-break` définit si les règles de colonne doivent ou non se rompre en segments lorsqu'elles intersectent les espaces entre les lignes.

Les règles de colonne sont peintes dans un espace entre les colonnes sous forme d'un ou plusieurs segments, les segments se produisant entre les éléments de grille adjacents dans des colonnes séparées, entre les éléments flex ou les lignes flex dans les mises en page flexibles en fonction de la `flex-direction`, ou entre les colonnes dans les mises en page en multi-colonnes.

La propriété `column-rule-break` ne détermine que si la rupture se produit. Par défaut, la rupture entre les segments de règle de colonne correspond à la hauteur de l'espace entre les lignes, chaque segment commençant et se terminant au bord de l'espace (ou au bord du conteneur). Si l'espace entre les lignes est `0`, cette rupture peut ne pas être visible. Les positions de fin peuvent être contrôlées avec les propriétés {{CSSxRef("column-rule-inset")}}.

Si `column-rule-break` est défini sur `none`, il n'y a pas de ruptures. Dans ce cas, la ligne de règle de colonne est continue, et toutes les valeurs de `column-rule-inset` n'affectent que les bords gauche et droit de la règle de colonne au bord du conteneur. Lorsqu'il y a des ruptures, les propriétés `column-rule-inset` affectent le début et la fin de chaque segment de règle de colonne.

La propriété `column-rule-break`, ainsi que la propriété {{CSSxRef("row-rule-break")}}, peut être définie en utilisant le raccourci {{CSSxRef("rule-break")}}.

Le fait qu'une règle de colonne soit par défaut composée d'un seul segment continu ou de segments qui se rompent lorsqu'ils intersectent les espaces entre les lignes dépend du type de conteneur.

### Conteneurs de grille

Dans les conteneurs de grille, par défaut, les segments de règle de colonne continuent à travers les intersections des espaces entre les lignes, ce qui équivaut à `column-rule-break: none`. Définir `column-rule-break: intersection` force les segments à se rompre à chaque espace entre les lignes qu'ils croisent autrement.

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
    <code>column-rule-break: intersection</code></label
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
  column-rule-break: intersection;
}
.grille {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid blue;
  row-rule-color: lightblue;
  rule-overlap: column-over-row;
  width: 100%;
}

.grille > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("Conteneurs de grille", "", 240)}}

Par défaut, il n'y a pas de rupture de règle de colonne. Cochez la case pour définir `column-rule-break` sur `intersection`, ce qui fait que les règles autrement continues se rompent à chaque intersection en «&nbsp;croix&nbsp;». Par défaut, la rupture entre les segments correspond à la hauteur de l'espace entre les lignes {{CSSxRef("row-gap")}}, qui a été définie sur `20px` dans ce cas.

### Conteneurs flexibles

Dans les boîtes flexibles, que les règles de colonne se rompent à chaque espace entre les lignes par défaut dépend de la `flex-direction`. Dans les modes d'écriture horizontale, lorsqu'elle est définie sur `row` ou `row-reverse`, la règle de colonne se rompt à chaque espace entre les lignes, équivalent à `column-rule-break: intersection`. Lorsque la `flex-direction` est `column` ou `column-reverse`, la règle de colonne est continue par défaut, équivalent à `column-rule-break: none`.

```html hidden
<h1>Ruptures de règle par défaut dans les boîtes flexibles</h1>
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
    <code>column-rule-break: intersection</code></label
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
  column-rule-break: intersection;
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
  row-rule-color: lightblue;
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

En modes d'écriture horizontaux, le fait de définir `column-rule-break` sur `intersection` n'affecte que les règles de colonne dans les scénarios `column` et `column-reverse`.

### Conteneurs multi-colonnes

Dans les conteneurs multi-colonnes, la valeur par défaut `normal` se comporte de la même manière que `intersection`. Alors que les décorations de ligne sont continues par défaut, les règles de colonne se rompent à chaque intersection. Les règles de colonne se divisent en segments à chaque espace de ligne, chaque segment commençant et se terminant au bord de l'espace. Ces positions de début et de fin peuvent être modifiées avec les propriétés `column-rule-inset`.

```html hidden
<h1>Règles par défaut dans les conteneurs multi-colonnes</h1>
<ol>
  <li>Un poisson</li>
  <li>Deux poissons</li>
  <li>Poisson rouge</li>
  <li>Poisson bleu</li>
  <li>Poisson noir</li>
  <li>Poisson bleu</li>
  <li>Vieux poisson</li>
  <li>Nouveau poisson.</li>
  <li>Celui-ci a une petite étoile.</li>
  <li>Celui-ci a une petite voiture.</li>
  <li>Dis donc ! Combien de</li>
  <li>poissons il y a.</li>
  <li>Oui. Certains sont bleus.</li>
  <li>Et certains sont bleus.</li>
  <li>Certains sont vieux.</li>
  <li>Et certains sont nouveaux.</li>
  <li>Certains sont tristes.</li>
  <li>Et certains sont contents.</li>
  <li>Et certains sont très, très mauvais.</li>
  <li>Pourquoi sont-ils</li>
  <li>Tristes, contents et mauvais ?</li>
  <li>Je ne sais pas.</li>
  <li>Va demander à ton père.</li>
</ol>
<fieldset>
  <legend>Définir <code>column-rule-break:</code></legend>
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
  row-rule-color: lightblue;
  rule-overlap: column-over-row;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  column-rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  column-rule-break: intersection;
}
:has([value="none"]:checked) ol {
  column-rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("Conteneurs multi-colonnes", "", 540)}}

Si vous sélectionnez `none`, la règle de colonne ne se divise plus en segments&nbsp;; elle continue plutôt depuis le haut du conteneur, jusqu'à atteindre le bord inférieur. Les propriétés `column-rule-inset` peuvent être utilisées pour décaler les extrémités des décorations de l'écart entre les colonnes.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Dans cet exemple, nous utilisons la propriété `column-rule-break` pour rompre chaque segment de règle dans un conteneur en grille afin que des segments de règle de colonne soient créés entre les espaces entre les lignes. La modification de la propriété `row-gap` change la taille des segments.

#### HTML

Nous créons une liste de 50 éléments et un curseur pour sélectionner la largeur de l'espace entre les lignes. La plupart du HTML est masqué pour plus de concision.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>49</li>
  <li>50</li>
</ul>
```

```html hidden live-sample___basic
<p>
  <label
    >Modifier la largeur de l'espace entre les lignes.
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

Nous définissons la liste non ordonnée comme un conteneur à 8 colonnes, créant des lignes et des colonnes avec la propriété {{CSSxRef("grid-template-columns")}} et en définissant {{CSSxRef("list-style-type")}} sur `none` pour supprimer les puces. Nous incluons un {{CSSxRef("gap")}} de `20px` pour fournir suffisamment d'espace entre les lignes et les colonnes pour accueillir nos règles de ligne et de colonne solides de `20px`. Nous incluons la propriété {{CSSxRef("rule-overlap")}} pour peindre la décoration de la colonne par-dessus toutes les décorations de ligne. Enfin, nous définissons les règles de colonne pour qu'elles se rompent à chaque intersection.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  column-rule: 10px solid olive;
  row-rule: 10px solid palegoldenrod;
  rule-overlap: column-over-row;

  column-rule-break: intersection;
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
  output.innerText = ul.style.rowGap = `${gap.value}px`;
});
```

#### Résultat

{{EmbedLiveSample("Basic", "", 600)}}

Agrandissez les espaces entre les lignes et notez comment les ruptures entre les segments de colonnes s'agrandissent. Réduisez la largeur de l'espace entre les lignes à `0px` et remarquez comment la décoration des colonnes semble continue. Ce n'est pas le cas&nbsp;! L'espace de `0px` entre les segments peut ne pas être visible, mais les segments commencent et se terminent toujours à l'espace, donc tous les décalages définis avec les propriétés `column-rule-inset` sont toujours appliqués.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("row-rule-break")}}
- La propriété raccourcie {{CSSxRef("rule-break")}}
- La propriété raccourcie {{CSSxRef("rule-inset")}}
- La propriété {{CSSxRef("rule-overlap")}}
- La propriété {{CSSxRef("rule-visibility-items")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espacements CSS](/fr/docs/Web/CSS/Guides/Gaps)
