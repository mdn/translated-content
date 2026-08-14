---
title: Propriété CSS `rule-color`
short-title: rule-color
slug: Web/CSS/Reference/Properties/rule-color
l10n:
  sourceCommit: 343ab51426f9279175b8f71fff911621d0a7da20
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`rule-color`** définit les couleurs des lignes tracées entre les colonnes et les lignes dans les mises en page multi-colonnes, flexibles et en multi-colonnes, en réglant les couleurs des règles de colonne et de ligne sur la même valeur.

{{InteractiveExample("Démonstration CSS&nbsp;: rule-color")}}

```css interactive-example-choice
rule-color: purple;
```

```css interactive-example-choice
rule-color: rgb(48 125 222), rgb(222 48 125);
```

```css interactive-example-choice
rule-color: rgb(48 125 222), repeat(3, rgb(222 48 125));
```

```css interactive-example-choice
rule-color: purple, repeat(auto, red, yellow);
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

- {{CSSxRef("column-rule-color")}}
- {{CSSxRef("row-rule-color")}}

## Syntaxe

```css
/* Une seule valeur de type <color> */
rule-color: purple;
rule-color: rgb(192 56 78);
rule-color: transparent;
rule-color: hsl(0 100% 50% / 60%);

/* Plusieurs valeurs */
rule-color: purple, magenta;
rule-color: repeat(3, purple), repeat(3, transparent);
rule-color: repeat(3, purple), repeat(3, yellow, blue);
rule-color: purple, repeat(auto, transparent), purple;
rule-color: purple, repeat(auto, blue, yellow), purple;
rule-color: repeat(3, purple), repeat(auto, transparent), repeat(3, purple);

/* Valeurs globales */
rule-color: inherit;
rule-color: initial;
rule-color: revert;
rule-color: revert-layer;
rule-color: unset;
```

### Valeurs

La propriété `rule-color` accepte une liste de valeurs séparées par des virgules, y compris&nbsp;:

- `<line-color>`
  - : Une valeur {{CSSxRef("&lt;color&gt;")}} représentant la couleur de la ligne.

- `<repeat-line-color>`
  - : Une fonction {{CSSxRef("repeat()")}} avec un entier ({{CSSxRef("&lt;integer&gt;")}}) de `1` ou plus comme premier argument et une ou plusieurs valeurs `<color>` comme arguments suivants. L'entier indique combien de fois les valeurs `<color>` doivent être répétées.

- `<auto-repeat-line-color>`
  - : Une fonction {{CSSxRef("repeat()")}}, avec `auto` comme premier argument et une ou plusieurs valeurs `<color>` comme arguments suivants. Les valeurs `<color>` fournies sont répétées autant de fois que nécessaire pour remplir les valeurs des règles qui ne sont pas explicitement définies par d'autres composants de la valeur de la propriété.

## Description

La propriété `rule-color` définit les couleurs des lignes tracées dans les gouttières entre les colonnes et les lignes des conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout) qui comportent plus d'une colonne ou d'une ligne. Il s'agit d'un raccourci qui règle à la même valeur les propriétés {{CSSxRef("row-rule-color")}} et {{CSSxRef("column-rule-color")}}.

La valeur est une liste d'éléments séparés par des virgules, qui peut inclure les types `<line-color>`, `<repeat-line-color>` et `<auto-repeat-line-color>`.
La propriété `rule-color`, avec les propriétés {{CSSxRef("rule-width")}} et {{CSSxRef("rule-style")}}, se définit avec le raccourci {{CSSxRef("rule")}}.

### Couleurs des lignes

Un `<line-color>` se déclare avec n'importe quelle valeur CSS valide de type {{CSSxRef("&lt;color&gt;")}}. Si la valeur de la propriété contient une seule `<color>`, toutes les lignes de règle prennent cette couleur. Par exemple, les lignes dans les gouttières entre colonnes et lignes sont bleues&nbsp;:

```css
rule-color: blue;
```

Lorsque plusieurs valeurs `<line-color>` sont déclarées, elles s'appliquent aux lignes peintes dans les gouttières de colonnes et de lignes dans l'ordre défini. Si le nombre de règles dépasse le nombre de valeurs `<line-color>`, la liste des couleurs se répète jusqu'à ce que chaque règle de colonne possède une couleur. Par exemple, chaque règle impaire est rouge et chaque règle paire est jaune.

```css
rule-color: red, yellow;
```

### Répétition des couleurs de ligne

La fonction `repeat()`, avec un entier de `1` ou plus comme premier argument, sert à répéter une liste valide de valeurs CSS {{CSSxRef("&lt;color&gt;")}} passées comme arguments suivants le nombre de fois défini. Elle permet de répéter les valeurs de couleur autant de fois que nécessaire sans les énumérer individuellement. Les déclarations suivantes sont équivalentes&nbsp;:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red;
rule-color: blue, repeat(3, yellow, red);
```

Cela crée une liste de sept couleurs. Si le nombre de couleurs de la liste de la valeur `rule-color` dépasse le nombre de gouttières entre colonnes et lignes, les couleurs excédentaires sont ignorées. S'il y a moins de couleurs que de gouttières, la liste de valeurs se répète jusqu'à ce que chaque règle ait une couleur associée. Par exemple, si le conteneur comporte trois colonnes et 18 lignes, la règle de la première gouttière de colonne est bleue et la deuxième est jaune. Pour les règles de ligne, la séquence se répète, les première, huitième et quinzième règles de ligne étant bleues.

### Répétition automatique des couleurs

La fonction `repeat()` accepte également `auto` comme premier argument au lieu d'un entier. Avec `auto`, les valeurs `<color>` fournies comme arguments suivants sont répétées autant de fois que nécessaire pour remplir les valeurs des règles de colonne et de ligne qui ne sont pas explicitement définies par d'autres composants de la valeur.

```css
rule-color: blue, repeat(auto, yellow), red;
```

Dans ce cas, les premières règles de colonne et de ligne sont bleues, les dernières sont rouges et toutes les autres sont jaunes. Tant qu'il y a au moins deux règles dans une direction, la première règle reste bleue et la dernière reste rouge. Toutes les autres règles sont jaunes, ce qui signifie que 2 ou 3 colonnes et lignes ne produisent aucune ligne jaune.

Le mot-clé `auto` dans `repeat()` crée un auto-répéteur qui complète les valeurs des couleurs des règles qui n'en reçoivent pas autrement, évitant la mise en cycle de la liste. Une valeur `rule-color` peut contenir au maximum un `repeat(auto, <color>)`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, vous définissez une seule `<color>` pour les lignes tracées entre les colonnes et les lignes d'éléments dans un conteneur grille.

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

Nous définissons la liste non ordonnée comme un conteneur à 10 colonnes, en créant les colonnes et les lignes avec la propriété {{CSSxRef("grid-template-columns")}}. Nous incluons un {{CSSxRef("gap")}} de `5px` pour fournir assez d'espace entre les colonnes et les lignes pour notre règle en pointillés de `3px`, et définissons {{CSSxRef("list-style-type")}} sur `none` pour supprimer les puces.

Nous incluons un {{CSSxRef("gap")}} de `5px` pour fournir assez d'espace entre les éléments pour notre règle en pointillés moyens. Nous définissons `rule-color` sur `#22BB22`, une valeur verte {{CSSxRef("hex-color")}}&nbsp;:

```css live-sample___basic live-sample___multiple live-sample___repeat live-sample___func live-sample___auto
ul {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  gap: 5px;
  rule-style: dashed;
  rule-width: medium;

  rule-color: #22bb22;
}
li {
  text-align: center;
  aspect-ratio: 1;
}
```

```css hidden live-sample___basic
@layer no-support {
  @supports not (rule-color: red) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété rule-color";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("basic", "", 600)}}

### Plusieurs valeurs de couleur

Cet exemple montre la déclaration de plusieurs couleurs et la manière dont les valeurs se répètent lorsque la liste de couleurs contient moins de valeurs que de gouttières entre colonnes et lignes.

En utilisant le même HTML et CSS que dans l'exemple précédent, nous incluons trois couleurs séparées par des virgules comme valeur de `rule-color`&nbsp;:

```css hidden live-sample___multiple
@layer no-support {
  @supports not (rule-color: red, blue) {
    body::before {
      content: "Votre navigateur ne prend pas en charge plusieurs valeurs pour la propriété rule-color";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
}
```

```css live-sample___multiple
ul {
  rule-color: blue, yellow, red;
}
```

#### Résultat

{{EmbedLiveSample("multiple", "", 600)}}

Il y a neuf gouttières de colonnes et six gouttières de lignes, mais seulement trois couleurs dans notre liste de couleurs, qui se répète donc, les première, quatrième et septième lignes étant bleues.

### Utiliser la fonction `repeat()`

Cet exemple montre l'utilisation de la fonction `repeat()` dans la valeur de la propriété `rule-color` et la manière dont cette fonction aide à éviter que les valeurs complexes deviennent difficiles à gérer.

#### CSS

Pour montrer comment les valeurs peuvent devenir complexes et l'utilité de la fonction `repeat()`, nous déclarons deux propriétés personnalisées, que nous utilisons dans quatre déclarations de fonction de couleur {{CSSxRef("color-mix()")}} pour créer des couleurs bleue, rougeâtre, sarcelle et jaune. Les couleurs rougeâtre et sarcelle de `color-mix()` se trouvent dans une fonction `repeat()`, réglée pour se répéter 3 fois.

Nous ajoutons également une bordure autour de chaque élément de la grille afin de voir la règle au milieu de la gouttière entre les colonnes et les lignes.

```css live-sample___repeat
ul {
  --base: yellow;
  --mixin: blue;

  rule-color:
    color-mix(in lch decreasing hue, var(--base) 0%, var(--mixin)),
    repeat(
      3,
      color-mix(in lch decreasing hue, var(--base) 58%, var(--mixin)),
      color-mix(in lch increasing hue, var(--base) 58%, var(--mixin))
    ),
    color-mix(in lch decreasing hue, var(--base) 100%, var(--mixin));
}
```

#### Résultat

{{EmbedLiveSample("repeat", "", "600")}}

La grille comporte 10 colonnes et 7 lignes, créant 9 gouttières de colonnes et 6 gouttières de lignes. La fonction `repeat()` répète trois fois les deux couleurs mélangées qu'elle contient, créant une liste de huit couleurs au total. Même si beaucoup de CSS est nécessaire pour créer les quatre couleurs, nous n'avons pas à écrire les huit fonctions `color-mix()`. Comme il y a plus de gouttières de colonnes que de couleurs dans la liste, les couleurs se répètent pour les gouttières de colonnes. Comme il y a moins de gouttières de lignes que de couleurs, les deux dernières couleurs de la liste ne sont pas utilisées pour les gouttières de lignes.

### Utiliser `auto` dans `repeat()`

Cet exemple montre l'utilisation de `auto`, au lieu d'un entier, dans la fonction `repeat()`.

Nous utilisons le même HTML et CSS que dans les exemples précédents, mais remplaçons la valeur de `rule-color`. Ici, nous utilisons `repeat(auto, <color>)` pour définir toutes les lignes en noir presque transparent (`#0003`), sauf la première et la dernière, que nous définissons en `black`.

```css live-sample___auto
ul {
  rule-color: black, repeat(auto, #0003), black;
}
```

#### Résultat

{{EmbedLiveSample("auto", "", "600")}}

Même s'il y a plus de lignes de règle de colonne que de lignes de règle de ligne, la valeur `<auto-repeat-line-color>` permet de créer cet effet symétrique.

```css hidden live-sample___repeat live-sample___auto
@layer no-support {
  @supports not (rule-color: repeat(3, red)) {
    body::before {
      content: "Votre navigateur ne prend pas en charge les fonctions `repeat()` dans la valeur de la propriété rule-color";
      background-color: wheat;
      text-align: center;
      padding: 1rem 0;

      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
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
- La propriété {{CSSxRef("rule-width")}}
- La propriété {{CSSxRef("rule-style")}}
- La propriété {{CSSxRef("row-rule-color")}}
- La propriété {{CSSxRef("column-rule-color")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- Le module [des espaces CSS](/fr/docs/Web/CSS/Guides/Gaps)
