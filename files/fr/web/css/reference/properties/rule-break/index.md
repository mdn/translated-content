---
title: Propriété CSS `rule-break`
short-title: rule-break
slug: Web/CSS/Reference/Properties/rule-break
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{SeeCompatTable}}

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`rule-break`** définit le comportement de rupture des règles de colonne et de ligne en segments là où les lignes et les espaces de colonne se croisent, en définissant {{CSSxRef("column-rule-break")}} et {{CSSxRef("row-rule-break")}} sur la même valeur.

{{InteractiveExample("Démonstration CSS&nbsp;: rule")}}

```css interactive-example-choice
rule-break: none;
```

```css interactive-example-choice
rule-break: normal;
```

```css interactive-example-choice
rule-break: intersection;
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
  column-rule: solid thick purple;
  gap: 10px;
}
#example-element i {
  padding: 5px;
}
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("column-rule-break")}}
- {{CSSxRef("row-rule-break")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
rule-break: none;
rule-break: normal;
rule-break: intersection;

/* Valeurs globales */
rule-break: inherit;
rule-break: initial;
rule-break: revert;
rule-break: revert-layer;
rule-break: unset;
```

### Valeurs

Cette propriété est définie comme un seul mot-clé parmi la liste suivante&nbsp;:

- `none`
  - : Il n'y a pas de coupures là où les règles de ligne et de colonne se croisent&nbsp;; à la place, une seule décoration continue est peinte d'une extrémité à l'autre de chaque espace.
- `normal`
  - : Dans les conteneurs flexibles et en grille, se comporte comme `none`. Dans les conteneurs multi-colonnes, `column-rule-break` se comporte comme `intersection` et `row-rule-break` se comporte comme `none`. C'est la valeur par défaut.
- `intersection`
  - : Les règles se cassent toujours lorsqu'elles intersectent un espace, les segments de règle commençant et se terminant aux bords du conteneur et de l'espace.

## Description

La propriété `rule-break` est utilisée pour définir le comportement de rupture des règles en segments lorsqu'elles traversent des espaces.

Les décorations d'espacement sont peintes à l'intérieur d'un espace sous forme d'un ou plusieurs segments de décoration d'espacement, les segments se produisant entre deux éléments adjacents. Selon le type de conteneur, par défaut, ces segments peuvent soit se terminer au bord d'un espace, soit la règle de colonne et de ligne peut s'étendre sur toute la hauteur et la largeur du conteneur.

Lorsqu'il y a une rupture dans une règle, par défaut, les segments commencent et se terminent au bord des espaces. Si la taille de l'espace est `0`, la rupture peut ne pas être visible. La propriété `rule-break` détermine si la rupture se produit. Vous pouvez contrôler la taille de la rupture à la fin de chaque segment avec les propriétés `rule-inset`. Lorsqu'il n'y a pas de ruptures et que la ligne est continue, les propriétés `rule-inset` n'affectent que la règle aux bords de début et de fin du conteneur. Lorsqu'il y a des ruptures, les propriétés `rule-inset` affectent le début et la fin de chaque segment de règle.

Le fait qu'une règle soit par défaut composée d'un seul segment continu ou de segments qui se cassent lorsqu'ils intersectent des espaces dépend du type de conteneur.

### Conteneurs en grille

Dans les conteneurs en grille, par défaut, les segments de règle continuent à travers les intersections «&nbsp;croisées&nbsp;» visibles. La définition de `rule-break: intersection` force les segments à se casser là où ils se croisent autrement.

```html hidden
<h1>Règles de rupture par défaut dans les conteneurs en grille</h1>
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
  <label>
    <input type="checkbox" /> Définir
    <code>rule-break: intersection</code>
  </label>
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
  rule-break: intersection;
}
.grille {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  rule: 5px solid red;
  width: 100%;
}

.grille > div {
  border: 1px solid green;
  background-color: lime;
  height: 30px;
}
```

{{EmbedLiveSample("Conteneurs en grille", "", 240)}}

Cochez la case pour définir le `rule-break` sur `intersection`, ce qui fait que les règles continues se cassent à chaque intersection «&nbsp;croisée&nbsp;».

### Conteneurs flexibles

Dans les boîtes flexibles, lorsque la `flex-direction` est `row` ou `row-reverse`, la règle de ligne est continue, avec les segments de colonne commençant et se terminant au bord des espaces de ligne. Lorsque la `flex-direction` est `column` ou `column-reverse`, la règle de colonne est continue, avec les segments de ligne commençant et se terminant au bord des espaces de colonne.

```html hidden
<h1>Règles de rupture par défaut dans les conteneurs flexibles</h1>
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
  <label>
    <input type="checkbox" /> Définir
    <code>rule-break: intersection</code>
  </label>
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
  rule-break: intersection;
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
  rule: 5px solid red;
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

Notez comment, selon la `flex-direction`, les règles de colonne ou de ligne sont continues par défaut. Si vous définissez le `rule-break` sur `intersection`, ces règles continues se rompent à chaque intersection.

### Conteneurs multi-colonnes

Dans les conteneurs multi-colonnes, le comportement par défaut `normal` diffère entre les règles de ligne et les règles de colonne. Les segments de règle de colonne commencent et se terminent lorsqu'ils intersectent un écart de ligne, se comportant comme `column-rule-break: intersection`, tandis que les règles de ligne ne se rompent pas lorsqu'elles intersectent un écart de colonne, se comportant comme `row-rule-break: none`.

```html hidden
<h1>Règles de rupture par défaut dans les multi-colonnes</h1>
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
  <li>Dis ! Quel tas</li>
  <li>De poissons il y a.</li>
  <li>Oui. Certains sont rouges.</li>
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
  <legend>Définir <code>rule-break:</code></legend>
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
  rule: 5px solid red;
}
li {
  border: 1px solid green;
  background-color: lime;
  list-style-type: none;
  margin-bottom: 5px;
}
:has([value="normal"]:checked) ol {
  rule-break: normal;
}
:has([value="intersection"]:checked) ol {
  rule-break: intersection;
}
:has([value="none"]:checked) ol {
  rule-break: none;
}
label {
  margin-right: 20px;
}
```

{{EmbedLiveSample("Conteneurs multi-colonnes", "", 540)}}

Cochez les boutons radio pour chaque valeur afin de voir l'effet de la valeur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Dans cet exemple, nous utilisons la propriété `rule-break` pour casser chaque segment de règle dans un conteneur de grille afin qu'aucune règle ne se croise.

#### HTML

Nous créons une liste de 50 éléments. La plupart du HTML est masqué pour plus de concision.

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
<ul>
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

Nous définissons la liste non ordonnée comme un conteneur à 8 colonnes, créant des colonnes et des lignes avec la propriété {{CSSxRef("grid-template-columns")}} et en définissant {{CSSxRef("list-style-type")}} sur `none` pour supprimer les puces. Nous incluons un {{CSSxRef("gap")}} de `20px` pour fournir suffisamment d'espace entre les colonnes et les lignes afin d'accueillir nos règles de colonne et de ligne solides de `20px`. Enfin, nous définissons les segments de règle pour qu'ils se cassent au lieu de s'intersecter.

```css live-sample___basic
ul {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  list-style-type: none;
  gap: 20px;

  row-rule: 20px solid palegoldenrod;
  column-rule: 20px solid olive;

  rule-break: intersection;
}
```

Le reste du CSS est masqué pour plus de concision.

```css hidden live-sample___basic
ol {
  place-items: center;
}
li {
  text-align: center;
  aspect-ratio: 1;
  font-family: sans-serif;
  line-height: 50px;
}
```

#### Résultat

{{EmbedLiveSample("Basic", "", 640)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("rule-inset")}}
- La propriété {{CSSxRef("rule-overlap")}}
- La propriété {{CSSxRef("rule-visibility-items")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espacement CSS](/fr/docs/Web/CSS/Guides/Gaps)
