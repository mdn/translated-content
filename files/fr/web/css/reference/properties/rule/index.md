---
title: Propriété CSS `rule`
short-title: rule
slug: Web/CSS/Reference/Properties/rule
l10n:
  sourceCommit: f4d39e4f5a6f426bff5f91cccb5b6fadff094e27
---

{{SeeCompatTable}}

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`rule`** définit la largeur, le style et la couleur de la ligne tracée entre les lignes et les colonnes dans les grilles multi-lignes, les boîtes flexibles et les mises en page multi-colonnes, en appliquant les mêmes valeurs aux règles de colonnes et de lignes.

{{InteractiveExample("Démonstration CSS&nbsp;: rule")}}

```css interactive-example-choice
rule: solid;
```

```css interactive-example-choice
rule: dotted medium blue;
```

```css interactive-example-choice
rule:
  dotted medium blue,
  repeat(3, dotted red 2px, double orange 5px);
```

```css interactive-example-choice
rule:
  dashed medium magenta,
  repeat(auto, dotted blue 2px, dotted blue 5px),
  dashed medium magenta;
```

```css interactive-example-choice
rule:
  dashed medium magenta,
  repeat(auto, dotted blue 2px),
  outset goldenrod 5px;
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
  rule: solid thick;
}
#example-element i {
  padding: 5px;
}
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("rule-color")}}
- {{CSSxRef("rule-style")}}
- {{CSSxRef("rule-width")}}

## Syntaxe

```css
/* Une seule valeur */
rule: dotted;
rule: solid 8px;
rule: solid blue;
rule: thick inset blue;

/* Plusieurs valeurs */
rule: groove, dashed, solid;
rule:
  dotted medium blue,
  dashed magenta 1px,
  outset green 5px;
rule:
  solid #0ff,
  repeat(3, dashed magenta 1px, outset green 5px);
rule:
  inset 3px yellow,
  repeat(auto, dashed magenta 1px, groove green 5px),
  inset 3px yellow;

/* Valeurs globales */
rule: inherit;
rule: initial;
rule: revert;
rule: revert-layer;
rule: unset;
```

### Valeurs

La propriété `rule` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<gap-rule>`
  - : Défini comme une, deux ou trois des valeurs listées ci-dessous, dans n'importe quel ordre.
    - `<'line-width'>`
      - : Une largeur de ligne ({{CSSxRef("&lt;line-width&gt;")}})&nbsp;: une longueur ({{CSSxRef("&lt;length&gt;")}}) positive ou l'un des trois mots-clés, `thin`, `medium` ou `thick`. La valeur par défaut est `medium`. Voir {{CSSxRef("rule-width")}}.
    - `<'line-style'>`
      - : Un style de ligne ({{CSSxRef("&lt;line-style&gt;")}})&nbsp;: l'une des valeurs `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` ou `outset`. La valeur par défaut est `none`. Voir {{CSSxRef("rule-style")}}.
    - `<'color'>`
      - : Une valeur de type {{CSSxRef("&lt;color&gt;")}} représentant la couleur de la ligne. La valeur par défaut est `currentcolor`. Voir {{CSSxRef("rule-color")}}.

- `<gap-repeat-rule>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus comme premier argument et une ou plusieurs valeurs `<gap-rule>` comme arguments suivants. L'entier définit combien de fois la liste des valeurs `<gap-rule>` doit être répétée.

- `<gap-auto-repeat-rule>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<gap-rule>` comme arguments suivants. La liste des valeurs `<gap-rule>` fournies est répétée autant de fois que nécessaire pour remplir les valeurs de toutes les règles qui ne sont pas définies explicitement par d'autres composants de la valeur de la propriété.

## Description

La propriété `rule` définit le style de ligne de toutes les lignes de règle tracées dans les espaces entre les lignes et les colonnes des conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plus d'une ligne ou colonne.

La propriété `rule` est un raccourci pour {{CSSxRef("rule-color")}}, {{CSSxRef("rule-style")}} et {{CSSxRef("rule-width")}}. Elle définit les propriétés raccourcies {{CSSxRef("row-rule")}} et {{CSSxRef("column-rule")}} avec la même valeur.

La valeur de la propriété est une liste de composants séparés par des virgules, qui peut inclure des types `<gap-rule>`, `<gap-repeat-rule>` et `<gap-auto-repeat-rule>`. Chaque `<gap-rule>` définit la largeur, la couleur et le style d'une ou plusieurs lignes de règle.

Si la valeur de la propriété ne consiste qu'en un seul `<gap-rule>`, toutes les règles de ligne et de colonne ont ce style, cette couleur et cette taille. Si nous déclarons ce qui suit, toutes les règles de ligne et de colonne sont `dashed red 3px`&nbsp;:

```css
rule: dashed red 3px;
```

Lorsque plus d'un `<gap-rule>` est déclaré, ils sont appliqués aux règles dans l'ordre défini. S'il y a plus de gouttière entre les lignes et les colonnes que de valeurs `<gap-rule>`, la liste des valeurs est répétée jusqu'à ce que chaque règle de ligne et de colonne a une ligne d'interstice. Si nous déclarons ce qui suit, par exemple, chaque règle impaire est `dashed red 3px`, et chaque règle paire est `dotted blue 5px`, dans les deux directions.

```css
rule:
  dashed red 3px,
  dotted blue 5px;
```

### Styles de ligne répétés

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS [`<gap-rule>`](#gap-rule) passées comme arguments suivants le nombre de fois défini. Cela permet de répéter le même `<gap-rule>` un nombre défini de fois sans répéter le même CSS plusieurs fois. Les déclarations suivantes sont équivalentes&nbsp;:

```css
rule:
  solid red 5px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px,
  outset blue 10px,
  inset green 1px;
rule:
  solid red 5px,
  repeat(3, outset blue 10px, inset green 1px);
```

Ceci crée une liste de sept règles. Si le nombre de styles dans la liste de styles de la valeur `rule` dépasse le nombre de gouttière entre les lignes et les colonnes, les styles excédentaires sont ignorés. Si le conteneur auquel cela s'applique comporte trois lignes et trois colonnes, la règle du premier interstice est `solid red 5px` et la seconde `outset blue 10px`, dans les deux directions.

S'il y a plus de gouttière que de styles, la liste de styles se répète. Si le conteneur comporte 8, 15, 22 ou 29 lignes ou colonnes, cette séquence de styles se répète dans cette direction une, deux, trois ou quatre fois, respectivement, la dernière règle étant `inset green 1px`.

### Répétition automatique des styles de ligne

La fonction `repeat()` accepte également `auto` comme premier argument au lieu d'un entier positif. Avec `auto` comme premier argument, les valeurs [`<gap-rule>`](#gap-rule) fournies comme arguments suivants sont répétées autant de fois que nécessaire pour remplir les valeurs des règles de ligne et de colonne qui ne sont pas explicitement définies par d'autres composants de la valeur de la propriété.

```css
rule:
  solid red 5px,
  repeat(auto, dotted green 1px, dashed blue 1px),
  solid red 5px;
```

Dans ce cas, les premières et dernières règles de ligne et de colonne sont `solid red 5px`, et toutes les autres alternent entre `dotted green 1px` et `dashed blue 1px`. Peu importe si le conteneur a 3, 6, 11, 16 ou 21 lignes et colonnes&nbsp;; les premières et dernières gouttières ont toujours une ligne rouge solide épaisse peinte entre elles (sauf si {{CSSxRef("rule-visibility-items")}} entraîne qu'aucune ligne ne soit tracée), et toutes les autres règles de ligne et de colonne sont fines, pointillées vertes ou bleues en tirets. S'il n'y a que 2 ou 3 lignes et colonnes, il n'y a pas de lignes pointillées ou en tirets.

Le mot-clé `auto` dans la fonction `repeat()` crée un auto-répéteur qui complète les valeurs des règles de ligne et de colonne qui ne reçoivent pas de valeur par d'autres parties de la liste, évitant ainsi la mise en cycle de la liste. Au maximum, une seule occurrence de `repeat(auto, <gap-rule>)` peut apparaître dans une valeur `rule`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, vous définissez une seule règle pour les lignes tracées dans les gouttières entre les éléments de la grille.

#### HTML

Vous créez une liste de 75 éléments. La plupart du HTML est masqué pour des raisons de concision.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
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
  <li>51</li>
  <li>52</li>
  <li>53</li>
  <li>54</li>
  <li>55</li>
  <li>56</li>
  <li>57</li>
  <li>58</li>
  <li>59</li>
  <li>60</li>
  <li>61</li>
  <li>62</li>
  <li>63</li>
  <li>64</li>
  <li>65</li>
  <li>66</li>
  <li>67</li>
  <li>68</li>
  <li>69</li>
  <li>70</li>
  <li>71</li>
  <li>72</li>
  <li>73</li>
  <li>74</li>
  <li>75</li>
</ul>
```

#### CSS

Vous définissez la liste non ordonnée comme un conteneur à 10 colonnes, créez les colonnes et les lignes avec la propriété {{CSSxRef("grid-template-columns")}} et réglez {{CSSxRef("list-style-type")}} sur `none` pour supprimer les puces. Vous ajoutez un {{CSSxRef("gap")}} de `5px` pour laisser suffisamment d'espace entre les colonnes et les lignes afin d'accueillir notre règle `dashed 3px magenta`.

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;

  rule: dashed 3px magenta;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 600)}}

### Plusieurs règles d'espacement et valeurs par défaut

Cet exemple montre l'utilisation de plusieurs valeurs séparées par des virgules. Il montre également les valeurs par défaut pour la largeur, la couleur et le style de `medium`, `currentcolor` et `none` respectivement.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons quatre valeurs `<gap-rule>` séparées par des virgules comme valeur de `rule`, en omettant la `<line-width>` dans le premier `<gap-rule>`, la `<color>` dans le deuxième et le `<line-style>` dans le troisième, le quatrième incluant les trois composants&nbsp;:

```css live-sample___repeat
ul {
  rule:
    red dashed,
    1px dotted,
    5px blue,
    10px magenta solid;
}
```

{{EmbedLiveSample("repeat", "", 600)}}

La ligne rouge est `3px` de large, la ligne pointillée est de la même couleur que le texte, et il n'y a pas de ligne bleue de `5px`, car le style du troisième `<gap-rule>` est par défaut `none`, donc aucune ligne n'est peinte. Comme il y a moins de styles de règle que de gouttières, la liste des règles est répétée jusqu'à ce que toutes les lignes de règle soient mises en forme.

### Utiliser la fonction `repeat()`

Cet exemple montre l'utilisation de la fonction `repeat()` dans la valeur de la propriété `rule`. Nous utilisons le même HTML et CSS que dans les exemples précédents, en remplaçant la valeur de `rule` par une liste séparée par des virgules de trois composants&nbsp;: deux valeurs `<gap-rule>` et un `<gap-repeat-rule>` qui définit une liste de deux valeurs `<gap-rule>` à répéter 3 fois.

```css live-sample___func live-sample___auto
ul {
  rule:
    3px red dashed,
    repeat(3, dotted green 1px, dashed blue 1px),
    3px red dashed;
}
```

{{EmbedLiveSample("func", "", 600)}}

La grille comporte dix colonnes et huit lignes, soit neuf gouttières de colonnes et sept gouttières de lignes. La fonction `repeat()` répète deux valeurs de style trois fois, créant une liste de huit valeurs de style. Comme il y a moins de gouttières de lignes que de valeurs, la dernière valeur n'est pas utilisée dans la direction des lignes. Comme il y a plus de gouttières de colonnes que de valeurs, la liste se répète dans la direction des colonnes.

### Utiliser `auto` dans `repeat()`

Cet exemple montre l'utilisation de l'argument `auto` au lieu d'un entier dans la fonction `repeat()`.

Avec `repeat(auto, <gap-rule>)`, vous définissez toutes les règles de ligne et de colonne sur `1px dotted` (la couleur valant par défaut `currentcolor`), sauf la première et la dernière règle que vous réglez sur `3px solid red`.

```css live-sample___auto
ul {
  rule:
    3px red solid,
    repeat(auto, 1px dotted),
    3px red solid;
}
```

{{EmbedLiveSample("auto", "", 600)}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule: thin, thick) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété rule";
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

- La propriété {{CSSxRef("rule-color")}}
- La propriété {{CSSxRef("rule-width")}}
- La propriété {{CSSxRef("rule-style")}}
- La propriété raccourcie {{CSSxRef("column-rule")}}
- La propriété raccourcie {{CSSxRef("row-rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
