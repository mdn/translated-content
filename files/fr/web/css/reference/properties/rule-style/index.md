---
title: Propriété CSS `rule-style`
short-title: rule-style
slug: Web/CSS/Reference/Properties/rule-style
l10n:
  sourceCommit: 343ab51426f9279175b8f71fff911621d0a7da20
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`rule-style`** définit le style des lignes tracées entre les colonnes et les lignes dans les mises en page multi-colonnes, grille, flexibles et multi-colonnes, en définissant le style des règles de colonnes et de lignes à la même valeur.

{{InteractiveExample("Démonstration CSS&nbsp;: rule-style")}}

```css interactive-example-choice
rule-style: solid;
```

```css interactive-example-choice
rule-style: dashed, dotted;
```

```css interactive-example-choice
rule-style: repeat(2, inset, dashed, double);
```

```css interactive-example-choice
rule-style: solid, repeat(auto, double), solid;
```

```css interactive-example-choice
rule-style: hidden;
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
  rule: solid rebeccapurple 7px;
  gap: 7px;
}
#example-element i {
  padding: 5px;
}
```

## Propriétés constitutives

Cette propriété est un raccourci pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("column-rule-style")}}
- {{CSSxRef("row-rule-style")}}

## Syntaxe

```css
/* Une seule valeur */
rule-style: none;
rule-style: hidden;
rule-style: dotted;
rule-style: dashed;
rule-style: solid;
rule-style: double;
rule-style: groove;
rule-style: ridge;
rule-style: inset;
rule-style: outset;

/* Plusieurs valeurs */
rule-style: groove, double, dashed;
rule-style: solid, repeat(5, ridge), solid;
rule-style: dotted, repeat(auto, inset, outset), dotted;

/* Valeurs globales */
rule-style: inherit;
rule-style: initial;
rule-style: revert;
rule-style: revert-layer;
rule-style: unset;
```

### Valeurs

La propriété `rule-style` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-style>`
  - : Un style de ligne ({{CSSxRef("&lt;line-style&gt;")}})&nbsp;: l'une des valeurs `none`, `hidden`, `dotted`, `dashed`, `solid`, `double`, `groove`, `ridge`, `inset` ou `outset`. La valeur par défaut est `none`.

- `<repeat-line-style>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec le premier argument étant un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus, et les arguments suivants étant des valeurs {{CSSxRef("&lt;line-style&gt;")}}. L'entier définit combien de fois les valeurs `<line-style>` doivent être répétées.

- `<auto-repeat-line-style>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<line-style>` comme arguments suivants. Les valeurs `<line-style>` fournies sont répétées autant de fois que nécessaire pour remplir les valeurs de toutes les règles qui ne sont pas spécifiquement définies par d'autres composants de la valeur de la propriété.

## Description

La propriété `rule-style` définit le style des lignes de règles de colonnes et de lignes tracées dans les espaces entre les colonnes et les lignes dans les conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) avec plus d'une colonne ou d'une ligne.

La propriété `rule-style` définit à la même valeur les propriétés {{CSSxRef("column-rule-style")}} et {{CSSxRef("row-rule-style")}}.
La propriété `rule-style`, ainsi que les propriétés {{CSSxRef("rule-color")}} et {{CSSxRef("rule-width")}}, peut également être définie à l'aide du raccourci {{CSSxRef("rule")}}.

La valeur est une liste de composants séparés par des virgules, qui peut inclure des types `<line-style>`, `<repeat-line-style>` et `<auto-repeat-line-style>`.

Si la valeur de la propriété n'est seulement un style de ligne (`<line-style>`), toutes les règles de colonnes ont ce style. Si nous déclarons ce qui suit, toutes les règles de colonnes et de lignes sont `double`&nbsp;:

```css
rule-style: double;
```

Lorsque plusieurs valeurs `<line-style>` sont déclarées, elles sont appliquées aux règles dans l'ordre défini. S'il y a plus de règles que de valeurs `<line-style>`, la liste des styles de ligne est répétée jusqu'à ce que chaque règle de colonne et de ligne a un style. Par exemple, si nous déclarons ce qui suit, toutes les règles impaires ont immédiatement le style `double` et toutes les règles paires ont immédiatement le style `inset`.

```css
rule-style: double, inset;
```

### Styles de ligne répétés

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;line-style&gt;")}} passées comme arguments suivants le nombre de fois défini. Cela permet de répéter le même style un nombre défini de fois sans répéter la même valeur. Vous pouvez inclure des valeurs de mot-clé `<line-style>` ou des propriétés personnalisées qui se résolvent en un `<line-style>` valide. L'utilisation de `repeat()` peut rendre les valeurs plus faciles à écrire, permettant d'écrire des motifs récurrents en utilisant une seule fonction, quel que soit le nombre de colonnes ou de lignes. Les déclarations suivantes sont équivalentes&nbsp;:

```css
rule-style: solid, outset, inset, outset, inset, outset, inset;
rule-style: solid, repeat(3, outset, inset);
```

Cela crée une liste de sept styles. Si le nombre de styles dans la liste de styles de la valeur `rule-style` dépasse le nombre d'espaces entre les colonnes ou les lignes, les valeurs de style excédentaires sont ignorées. Si le conteneur a trois colonnes ou lignes, la règle dans le premier espace est `solid` et la deuxième `outset`.

Si le nombre d'espaces entre les colonnes ou les lignes est supérieur au nombre de styles, la liste des styles est répétée. Si le conteneur a 8, 15, 22 ou 29 colonnes ou lignes, cette séquence de styles est répétée une, deux, trois ou quatre fois, respectivement, la dernière règle étant `inset`.

### Répétition automatique des styles de ligne

La fonction `repeat()`, avec `auto` comme premier argument au lieu d'un entier positif, peut être utilisée pour répéter une liste valide de valeurs CSS {{CSSxRef("&lt;line-style&gt;")}} passées comme arguments suivants autant de fois que nécessaire pour remplir les valeurs de toutes les règles qui ne sont pas spécifiquement définies par d'autres composants de la valeur de la propriété.

Le mot-clé `auto` dans la fonction `repeat()` crée un répéteur automatique qui remplit les valeurs des règles de colonnes et de lignes qui ne reçoivent pas autrement de valeurs provenant d'autres parties de la liste, empêchant la liste d'être répétée. Une seule occurrence de `repeat(auto, <line-style>)` est autorisée dans une valeur `rule-style`.

```css
rule-style: solid, repeat(auto, dotted), solid;
```

Dans ce cas, peu importe si le conteneur a 8, 15, 22 ou 29 colonnes ou lignes&nbsp;; la première et la dernière règle sont toujours `solid`, et toutes les autres règles sont `dotted`. S'il n'y a que 2 ou 3 colonnes et lignes, il n'y a pas de règles `dotted`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Dans cet exemple, nous définissons un seul style de ligne (`<line-style>`) pour les lignes tracées entre les colonnes et les lignes des éléments dans un conteneur de grille.

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

```html hidden live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
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

Nous définissons la liste non ordonnée comme un conteneur à 10 colonnes, créant des colonnes et des lignes avec la propriété {{CSSxRef("grid-template-columns")}}&nbsp;; nous définissons ensuite {{CSSxRef("list-style-type")}} sur `none` pour supprimer les puces. Nous incluons un {{CSSxRef("gap")}} de `5px` pour fournir suffisamment d'espace entre les colonnes et les lignes afin d'accueillir notre règle `thick dashed orange`.

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-width: thick;
  rule-color: orange;

  rule-style: dashed;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-style: solid) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété rule-style";
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

### Plusieurs valeurs

Cet exemple montre comment utiliser plusieurs valeurs `<line-style>` comme valeur de propriété, et ce qui se passe lorsque plus de valeurs `<line-style>` sont définies qu'il n'y a de gouttières à mettre en forme.

Nous définissons la propriété `rule-style` comme une liste séparée par des virgules de toutes les valeurs `<line-style>` possibles.

```css live-sample___multiple
ul {
  rule-style:
    dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden;
}
```

#### Résultat

{{EmbedLiveSample("multiple", "", 600)}}

Il y a plus de valeurs que de gouttières pour les lignes et les colonnes&nbsp;; les dernières valeurs ne sont pas utilisées dans chaque cas.

### Répétition des valeurs

Cet exemple montre comment, lorsque la liste des styles contient moins de valeurs que de règles de colonnes et de lignes, les valeurs sont répétées.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons trois styles séparés par des virgules comme valeur de `rule-style`&nbsp;:

```css live-sample___repeat
ul {
  rule-style: solid, groove, double;
}
```

{{EmbedLiveSample("repeat", "", 600)}}

### Utiliser la fonction `repeat()`

Cet exemple montre comment utiliser la fonction `repeat()` dans la valeur de la propriété `rule-style`. Nous utilisons le même HTML et CSS que dans les exemples précédents. Nous incluons une fonction `repeat()` qui définit une liste de deux valeurs `<line-style>` à répéter 3 fois.

```css live-sample___func
ul {
  rule-style: solid, repeat(3, inset, outset), solid;
}
```

{{EmbedLiveSample("func", "", 600)}}

La fonction `repeat()` répète deux valeurs de style trois fois, créant une liste de huit valeurs de style. Les styles sont répétés pour les colonnes&nbsp;; cependant, les dernières valeurs de la liste sont ignorées pour les lignes.

### Utiliser `auto` dans `repeat()`

Cet exemple montre comment utiliser `auto` au lieu d'un entier dans la fonction `repeat()`.

En utilisant `repeat(auto, <line-style>)`, nous définissons toutes les règles de colonnes et de lignes sur `groove`, sauf la première et la dernière, que nous définissons sur `solid`.

```css live-sample___auto
ul {
  rule-style: solid, repeat(auto, groove), solid;
}
```

{{EmbedLiveSample("auto", "", 600)}}

Même s'il y a plus de règles de colonnes que de règles de lignes, le `<auto-repeat-line-color>` permet de créer cet effet symétrique.

```css hidden live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
@layer no-support {
  @supports not (rule-style: solid, groove) {
    body::before {
      content: "Votre navigateur ne prend pas en charge plusieurs valeurs pour la propriété rule-style";
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
- La propriété {{CSSxRef("row-rule-style")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- La propriété raccourcie {{CSSxRef("rule-style")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
