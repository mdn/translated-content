---
title: Propriété CSS `rule-width`
short-title: rule-width
slug: Web/CSS/Reference/Properties/rule-width
l10n:
  sourceCommit: 343ab51426f9279175b8f71fff911621d0a7da20
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`rule-width`** définit les largeurs de toutes les lignes tracées dans les gouttières des grilles multi-lignes, des conteneurs flexibles et des mises en page multi-colonnes, en définissant les largeurs des règles de colonne et de ligne à la même valeur.

{{InteractiveExample("Démonstration CSS&nbsp;: rule-width")}}

```css interactive-example-choice
rule-width: thin;
```

```css interactive-example-choice
rule-width: thin, thick;
```

```css interactive-example-choice
rule-width: 1px, 10px;
```

```css interactive-example-choice
rule-width: repeat(2, thin, thick), 10px;
```

```css interactive-example-choice
rule-width: thick, repeat(auto, 1px, 2px), thick;
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
  rule: solid magenta;
}
#example-element i {
  padding: 5px;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("column-rule-width")}}
- {{CSSxRef("row-rule-width")}}

## Syntaxe

```css
/* Keyword values */
rule-width: thin;
rule-width: medium;
rule-width: thick;
rule-width: thin, medium, thick;
rule-width: thick, repeat(5, thin), thick;
rule-width: thick, repeat(auto, thin, medium), thick;

/* Length values */
rule-width: 1px;
rule-width: 5px;
rule-width: 1px, 3px, 5px;
rule-width: 5px, repeat(auto, 1px), 10px, 15px;
rule-width: 5px, repeat(5, 1px, 3px), 5px;

/* Global values */
rule-width: inherit;
rule-width: initial;
rule-width: revert;
rule-width: revert-layer;
rule-width: unset;
```

### Valeurs

La propriété `rule-width` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-width>`
  - : Une largeur de ligne ({{CSSxRef("line-width")}})&nbsp;: Cela peut être l'un des mots-clés `thin`, `medium` ou `thick`, ou une valeur positive de type {{CSSxRef("&lt;length&gt;")}}, représentant la largeur de la ligne. La valeur par défaut est `medium`.

- `<repeat-line-width>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec le premier argument étant un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus, et une ou plusieurs valeurs {{CSSxRef("&lt;line-width&gt;")}} comme arguments suivants. L'entier définit le nombre de fois que les valeurs `<line-width>` doivent être répétées.

- `<auto-repeat-line-width>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<line-width>` comme arguments suivants. Les valeurs `<line-width>` fournies sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles qui ne sont pas explicitement définies par d'autres composants de la valeur de la propriété.

## Description

La propriété raccourcie `rule-width` définit les largeurs des segments de règle tracés dans les gouttières entre les colonnes et les lignes des conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) comportant plus d'une ligne ou d'une colonne.

La valeur est une liste de composants séparés par des virgules, qui peut inclure des types `<line-width>`, `<repeat-line-width>` et `<auto-repeat-line-width>`.

La propriété `rule-width`, ainsi que les propriétés {{CSSxRef("rule-color")}} et {{CSSxRef("rule-style")}}, peut être définie à l'aide de la propriété raccourcie {{CSSxRef("rule")}}.

Si la valeur de la propriété ne consiste qu'en un seul `<line-width>`, toutes les règles de lignes et de colonnes ont cette largeur. Si nous déclarons ce qui suit, toutes les règles sont de `3px`&nbsp;:

```css
rule-width: 3px;
```

Lorsque plusieurs valeurs `<line-width>` sont déclarées, elles sont appliquées aux règles dans l'ordre défini. S'il y a plus de règles que de valeurs `<line-width>`, la liste des largeurs de ligne est répétée jusqu'à ce que chaque règle ait une largeur. Si nous déclarons ce qui suit, par exemple, chaque règle horizontale et verticale impaire est `thin`, et chaque règle paire est `1em`.

```css
rule-width: thin, 1em;
```

### Largeurs de ligne répétées

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;line-width&gt;")}} passées comme arguments suivants le nombre de fois défini. Cela permet de répéter les mêmes largeurs un nombre défini de fois sans répéter les valeurs. Les déclarations suivantes sont équivalentes&nbsp;:

```css
rule-width: 1rem, thick, thin, thick, thin, thick, thin;
rule-width: 1rem, repeat(3, thick, thin);
```

Vous pouvez utiliser n'importe quelle valeur `<line-width>`, y compris les propriétés personnalisées qui se résolvent en une valeur `<line-width>`. L'utilisation de `repeat()` peut rendre les valeurs plus faciles à écrire, en particulier lors de l'utilisation de calculs de longueurs complexes. Elle permet d'écrire un motif récurrent à l'aide d'une seule fonction, quel que soit le nombre de colonnes ou de lignes.

### Répétition automatique des largeurs de ligne

La fonction `repeat()`, avec `auto` comme premier argument au lieu d'un entier positif, peut également être utilisée. Avec `auto` comme premier argument, la liste des valeurs `<line-width>` passées comme arguments suivants est répétée autant de fois que nécessaire pour remplir les valeurs de toutes les règles qui ne sont pas explicitement définies par d'autres composants de la valeur de la propriété.

```css
rule-width: thin, repeat(auto, medium), thin;
```

Dans ce cas, les règles de la première et de la dernière colonne et ligne sont toujours `thin`, et toutes les autres règles sont `medium`. S'il n'y a que 2 ou 3 colonnes et lignes, il n'y a pas de règles de taille moyenne.

Le mot-clé `auto` dans la fonction `repeat()` crée un répéteur automatique qui remplit les valeurs des règles de colonnes et de lignes qui ne reçoivent pas autrement de valeurs provenant d'autres parties de la liste, empêchant la liste d'être répétée. Au maximum, une seule occurrence de `repeat(auto, <width>)` peut être présente dans une valeur `rule-width`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous définissons une seule largeur pour les lignes tracées entre les colonnes et les lignes des éléments dans un conteneur de grille.

#### HTML

Nous créons une liste de 75 éléments. La plupart du HTML est masqué pour plus de concision.

```html
<ul>
  <li>1</li>
  <li>2</li>
  ...
  <li>74</li>
  <li>75</li>
</ul>
```

```html hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
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

Nous définissons la liste non ordonnée comme un conteneur de grille à 10 colonnes. Nous incluons une gouttière ({{CSSxRef("gap")}}) de `5px` pour fournir suffisamment d'espace entre les éléments afin d'accueillir notre règle rouge en pointillés de `3px`&nbsp;:

```css live-sample___basic live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-style: dashed;
  rule-color: red;
  rule-width: 3px;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-width: medium) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété rule-width";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 600)}}

### Valeurs répétées

Cet exemple démontre comment, lorsque la liste des largeurs contient moins de valeurs que le nombre de règles de colonnes ou de lignes, les valeurs sont répétées.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons trois largeurs séparées par des virgules comme `rule-width`.

```css live-sample___repeat
ul {
  rule-width: thin, 6px, 12px;
}
```

{{EmbedLiveSample("repeat", "", 600)}}

Comme le conteneur de grille a 8 lignes et 10 colonnes, il y a sept et neuf gouttières dans chaque direction, respectivement, donc la séquence de trois valeurs `<line-width>` est répétée dans les deux directions.

### Utiliser la fonction `repeat()`

Cet exemple démontre l'utilisation de la fonction `repeat()` dans la valeur de la propriété `rule-width` et comment cette fonction peut aider à réduire la verbosité des déclarations de valeurs.

Nous utilisons le même HTML et CSS que dans les exemples précédents. De plus, nous déclarons deux propriétés personnalisées, que nous utilisons dans une fonction `repeat()` à l'intérieur de notre valeur `rule-width`. La fonction `repeat()` définit une liste de deux valeurs `<line-width>` à répéter 3 fois.

```css live-sample___func live-sample___auto
ul {
  --base: 0.5vw;
  --secondary: 1vw;
  rule-width:
    15px,
    repeat(
      4,
      min(calc(var(--base) + 3px), 10px),
      abs(calc(var(--secondary) - 2px))
    ),
    15px;
}
```

{{EmbedLiveSample("func", "", 600)}}

La fonction `repeat()` répète deux valeurs de largeur quatre fois, créant une liste de dix valeurs de largeur. Comme il y a moins de gouttières de colonnes et de lignes que de largeurs totales, les dernières valeurs de la liste sont ignorées.

### Utiliser `auto` dans `repeat()`

Cet exemple démontre l'utilisation de `auto` au lieu d'un entier dans la fonction `repeat()`.

En utilisant `repeat(auto, <line-width>)`, nous définissons toutes les règles de colonnes et de lignes à `1px`, sauf la première et la dernière, que nous définissons à `5px`.

```css live-sample___auto
ul {
  rule-width: 5px, repeat(auto, 1px), 5px;
}
```

{{EmbedLiveSample("auto", "", 600)}}

```css hidden live-sample___basic live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule-width: thin, thick) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété rule-width";
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
- La propriété {{CSSxRef("rule-style")}}
- La propriété {{CSSxRef("column-rule-width")}}
- La propriété {{CSSxRef("row-rule-width")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
