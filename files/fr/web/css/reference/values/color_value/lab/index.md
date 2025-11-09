---
title: lab()
slug: Web/CSS/Reference/Values/color_value/lab
original_slug: Web/CSS/color_value/lab
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`lab()`** exprime une couleur donnée dans l'{{glossary("color space", "espace de couleur")}} CIE L\*a\*b\*.

Lab représente toute la gamme de couleurs que les humains peuvent voir en définissant la luminosité de la couleur, une valeur d'axe rouge/vert, une valeur d'axe bleu/jaune, et une valeur alpha de transparence optionnelle.

## Syntaxe

```css
/* Valeurs absolues */
lab(29.2345% 39.3825 20.0664);
lab(52.2345% 40.1645 59.9971);
lab(52.2345% 40.1645 59.9971 / .5);

/* Valeurs relatives */
lab(from green l a b / 0.5)
lab(from #123456 calc(l + 10) a b)
lab(from hsl(180 100% 50%) calc(l - 10) a b)
```

### Valeurs

Ci-dessous sont décrites les valeurs autorisées pour les [couleurs absolues et relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntaxe de valeur absolue

```plain
lab(L a b[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `L`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `100`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur définit la luminosité de la couleur. Ici, le nombre `0` correspond à `0%` (noir) et le nombre `100` correspond à `100%` (blanc).
- `a`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `-125` et `125`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur définit la distance de la couleur le long de l'axe `a`, qui détermine si la couleur tire vers le vert (en se rapprochant de `-125`) ou vers le rouge (en se rapprochant de `+125`). Notez que ces valeurs sont signées (permettant des valeurs positives et négatives) et théoriquement non bornées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites `±125` (`±100%`). En pratique, les valeurs ne peuvent pas dépasser `±160`.
- `b`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `-125` et `125`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur définit la distance de la couleur le long de l'axe `b`, qui détermine si la couleur tire vers le bleu (en se rapprochant de `-125`) ou vers le jaune (en se rapprochant de `+125`). Notez que ces valeurs sont signées (permettant des valeurs positives et négatives) et théoriquement non bornées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites `±125` (`±100%`). En pratique, les valeurs ne peuvent pas dépasser `±160`.
- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où le nombre `0` correspond à `0%` (complètement transparent) et `1` correspond à `100%` (complètement opaque). De plus, le mot-clé `none` peut être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas explicitement définie, elle vaut par défaut 100%. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Voir [Composants de couleur manquants](/fr/docs/Web/CSS/Reference/Values/color_value#composants_de_couleur_manquants) pour plus d'informations sur l'effet de `none`.

#### Syntaxe de valeur relative

```plain
lab(from <color> L a b[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `from <color>`
  - : Le mot-clé `from` est toujours inclus lors de la définition d'une couleur relative, suivi d'une valeur {{cssxref("&lt;color&gt;")}} représentant la **couleur d'origine**. Il s'agit de la couleur originale sur laquelle la couleur relative est basée. La couleur d'origine peut être _n'importe quelle_ syntaxe {{cssxref("&lt;color&gt;")}} valide, y compris une autre couleur relative.
- `L`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `100`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la luminosité de la couleur de sortie. Ici, le nombre `0` correspond à `0%` (noir) et le nombre `100` correspond à `100%` (blanc).
- `a`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `-125` et `125`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la distance de la couleur de sortie le long de l'axe `a`, qui détermine si la couleur tire vers le vert (en se rapprochant de `-125`) ou vers le rouge (en se rapprochant de `+125`). Notez que ces valeurs sont signées (permettant des valeurs positives et négatives) et théoriquement non bornées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites `±125` (`±100%`). En pratique, les valeurs ne peuvent pas dépasser `±160`.
- `b`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `-125` et `125`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la distance de la couleur de sortie le long de l'axe `b`, qui détermine si la couleur tire vers le bleu (en se rapprochant de `-125`) ou vers le jaune (en se rapprochant de `+125`). Notez que ces valeurs sont signées (permettant des valeurs positives et négatives) et théoriquement non bornées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites `±125` (`±100%`). En pratique, les valeurs ne peuvent pas dépasser `±160`.
- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur de sortie, où le nombre `0` correspond à `0%` (complètement transparent) et `1` correspond à `100%` (complètement opaque). De plus, le mot-clé `none` peut être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas explicitement définie, elle prend par défaut la valeur du canal alpha de la couleur d'origine. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Habituellement, lorsque les valeurs de pourcentage ont un équivalent numérique en CSS, `100%` est égal au nombre `1`. Ce n'est pas toujours le cas pour la luminosité et les axes `a` et `b` de Lab, comme mentionné ci-dessus. Avec `L`, la plage va de 0 à 100, avec `100%` égal à `100`. Les valeurs `a` et `b` prennent en charge les valeurs négatives et positives, avec `100%` égal à `125` et `-100%` égal à `-125`.

#### Définition des composants de canal de couleur de sortie relative

Lors de l'utilisation de la syntaxe de couleur relative à l'intérieur d'une fonction `lab()`, le navigateur convertit la couleur d'origine en une couleur Lab équivalente (si elle n'est pas déjà définie comme telle). La couleur est définie comme trois valeurs de canal de couleur distinctes — `l` (luminosité), `a` (axe vert/rouge), et `b` (axe bleu/jaune) — plus une valeur de canal alpha (`alpha`). Ces valeurs de canal sont rendues disponibles à l'intérieur de la fonction pour être utilisées lors de la définition des valeurs de canal de couleur de sortie&nbsp;:

- La valeur du canal `l` est résolue en une valeur `<number>` entre `0` et `100`, inclus.
- Les canaux `a` et `b` sont chacun résolus en une valeur `<number>` entre `-125` et `125`, inclus.
- Le canal `alpha` est résolu en une valeur `<number>` entre `0` et `1`, inclus.

Lors de la définition d'une couleur relative, les différents canaux de la couleur de sortie peuvent être exprimés de plusieurs façons différentes. Ci-dessous, nous étudierons quelques exemples pour illustrer cela.

Dans les deux premiers exemples suivants, nous utilisons la syntaxe de couleur relative. Cependant, le premier produit la même couleur que la couleur d'origine et le second produit une couleur qui n'est pas du tout basée sur la couleur d'origine. Ils ne créent pas vraiment de couleurs relatives&nbsp;! Vous seriez peu susceptible d'utiliser ces exemples dans une base de code réelle, et vous utiliseriez probablement simplement une valeur de couleur absolue à la place. Nous avons inclus ces exemples comme point de départ pour apprendre la syntaxe `lab()` relative.

Commençons par une couleur d'origine de `hsl(0 100% 50%)` (équivalent à `red`). La fonction suivante produit la même couleur que la couleur d'origine — elle utilise les valeurs de canal `l`, `a`, et `b` de la couleur d'origine (`54.29`, `80.8198`, et `69.8997`) comme valeurs de canal de sortie&nbsp;:

```css
lab(from hsl(0 100% 50%) l a b)
```

La couleur de sortie de cette fonction est `lab(54.29 80.8198 69.8997)`.

La fonction suivante utilise des valeurs absolues pour les valeurs de canal de la couleur de sortie, produisant une couleur complètement différente qui n'est pas basée sur la couleur d'origine&nbsp;:

```css
lab(from hsl(0 100% 50%) 29.692% 44.89% -29.034%)
```

Dans le cas ci-dessus, la couleur de sortie est `lab(29.692 56.1125 -36.2925)`.

La fonction suivante crée une couleur relative basée sur la couleur d'origine&nbsp;:

```css
lab(from hsl(0 100% 50%) l -100 b)
```

Cet exemple&nbsp;:

- Convertit la couleur d'origine `hsl()` en une couleur `lab()` équivalente — `lab(54.29 80.8198 69.8997)`.
- Définit les valeurs de canal `l` et `b` pour la couleur de sortie à celles des valeurs de canal `L` et `b` de l'équivalent `lab()` d'origine — ces valeurs sont `54.29` et `69.8997`, respectivement.
- Définit la valeur du canal `a` de la couleur de sortie à une nouvelle valeur qui n'est pas basée sur la couleur d'origine&nbsp;: `-100`.

La couleur de sortie finale est `lab(54.29 -100 69.8997)`.

> [!NOTE]
> Comme mentionné ci-dessus, si la couleur de sortie utilise un modèle de couleur différent de la couleur d'origine, la couleur d'origine est convertie vers le même modèle que la couleur de sortie en arrière-plan afin qu'elle puisse être représentée de manière compatible (c'est-à-dire en utilisant les mêmes canaux).

Dans les exemples que nous avons vus jusqu'à présent dans cette section, les canaux alpha n'ont pas été explicitement définis pour les couleurs d'origine ou de sortie. Lorsque le canal alpha de la couleur de sortie n'est pas défini, il prend par défaut la même valeur que le canal alpha de la couleur d'origine. Lorsque le canal alpha de la couleur d'origine n'est pas défini (et qu'il ne s'agit pas d'une couleur relative), il prend par défaut la valeur `1`. Par conséquent, les valeurs des canaux alpha d'origine et de sortie sont `1` pour les exemples ci-dessus.

Examinons quelques exemples qui définissent les valeurs des canaux alpha d'origine et de sortie. Le premier définit la valeur du canal alpha de sortie comme étant la même que la valeur du canal alpha d'origine, tandis que le second définit une valeur de canal alpha de sortie différente, non liée à la valeur du canal alpha d'origine.

```css
lab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Couleur de sortie calculée : lab(54.29 80.8198 69.8997 / 0.8) */

lab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Couleur de sortie calculée : lab(54.29 80.8198 69.8997 / 0.5) */
```

Dans l'exemple suivant, la couleur d'origine `hsl()` est à nouveau convertie vers l'équivalent `lab()` — `lab(54.29 80.8198 69.8997)`. Des calculs {{cssxref("calc")}} sont appliqués aux valeurs `L`, `a`, `b`, et `A`, ce qui donne une couleur de sortie de `lab(74.29 60.8198 29.8997 / 0.9)`&nbsp;:

```css
lab(from hsl(0 100% 50%) calc(l + 20) calc(a - 20) calc(b - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Étant donné que les valeurs des canaux de couleur d'origine sont résolues en valeurs `<number>`, vous devez leur ajouter des nombres lorsque vous les utilisez dans des calculs, même dans les cas où un canal accepterait normalement des valeurs `<percentage>`, `<angle>`, ou d'autres types de valeur. Ajouter un `<percentage>` à un `<number>`, par exemple, ne fonctionne pas.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ajustement de la luminosité

L'exemple suivant montre l'effet de la variation de la valeur de luminosité de la fonction `lab()`.

#### HTML

```html
<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>

<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
[data-color="red-dark"] {
  background-color: lab(5 125 71);
}
[data-color="red"] {
  background-color: lab(40 125 71);
}
[data-color="red-light"] {
  background-color: lab(95 125 71);
}

[data-color="green-dark"] {
  background-color: lab(10% -120 125);
}
[data-color="green"] {
  background-color: lab(50% -120 125);
}
[data-color="green-light"] {
  background-color: lab(90% -120 125);
}

[data-color="blue-dark"] {
  background-color: lab(10 -120 -120);
}
[data-color="blue"] {
  background-color: lab(50 -120 -120);
}
[data-color="blue-light"] {
  background-color: lab(90 -120 -120);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de la luminosité", "", "200")}}

### Ajustement des axes de couleur

Cet exemple démontre les effets de la définition des valeurs `a` et `b` de la fonction `lab()` aux extrémités et aux points médians de l'axe `a`, qui va du vert (-125) au rouge (125) et de l'axe `b`, qui va du jaune (-125) au bleu (125).

#### HTML

```html
<div data-color="red-yellow"></div>
<div data-color="red-zero"></div>
<div data-color="red-blue"></div>

<div data-color="zero-yellow"></div>
<div data-color="zero-zero"></div>
<div data-color="zero-blue"></div>

<div data-color="green-yellow"></div>
<div data-color="green-zero"></div>
<div data-color="green-blue"></div>
```

#### CSS

L'utilisation de la propriété CSS {{cssxref("background-color")}} permet de faire varier les valeurs `a` et `b` de la fonction de couleur `lab()` le long des axes `a` et `b`, montrant les effets des valeurs maximales, des points médians et des valeurs minimales dans chaque cas.

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
div {
  height: 50px;
  flex: 0 0 28%;
  border: 1px solid black;
}
```

```css
/* a-axis max, variable b-axis */
[data-color="red-yellow"] {
  background-color: lab(50 125 125);
}
[data-color="red-zero"] {
  background-color: lab(50 125 0);
}
[data-color="red-blue"] {
  background-color: lab(50 125 -125);
}

/* a-axis center, variable b-axis */
[data-color="zero-yellow"] {
  background-color: lab(50 0 125);
}
[data-color="zero-zero"] {
  background-color: lab(50 0 0);
}
[data-color="zero-blue"] {
  background-color: lab(50 0 -125);
}

/* a-axis min, variable b-axis */
[data-color="green-yellow"] {
  background-color: lab(50 -125 125);
}
[data-color="green-zero"] {
  background-color: lab(50 -125 0);
}
[data-color="green-blue"] {
  background-color: lab(50 -125 -125);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement des axes de couleur", "", "200")}}

La colonne de gauche se trouve à l'extrémité jaune (-125) de l'axe `b` et la colonne de droite se trouve à l'extrémité bleue (125). La rangée du haut affiche les couleurs à l'extrémité rouge de l'axe `a` (-125) et la rangée du bas se trouve à l'extrémité verte (125). La colonne et la rangée du milieu sont aux points médians (0) de chaque axe, avec la cellule du milieu qui est grise&nbsp;; elle ne contient ni rouge, ni vert, ni jaune, ni bleu, avec une valeur `0` pour les deux axes.

### Dégradés linéaires le long des axes a et b

Cet exemple inclut des dégradés linéaires pour démontrer la progression des valeurs de la fonction `lab()` le long de l'axe `a` (du rouge au vert) et le long de l'axe `b` (du jaune au bleu). Dans chaque image de dégradé, un axe reste statique tandis que l'autre axe progresse de l'extrémité basse à l'extrémité haute des valeurs de l'axe.

```html hidden
<div data-color="red-to-green-yellow">
  <span>rouge</span><span>`b`= -125 (jaune)</span><span>vert</span>
</div>
<div data-color="red-to-green-zero">
  <span>rouge</span><span>pas de jaune ou de bleu</span><span>vert</span>
</div>
<div data-color="red-to-green-blue">
  <span>rouge</span><span>`b`= 125 (bleu)</span><span>vert</span>
</div>

<div data-color="yellow-to-blue-red">
  <span>jaune</span><span>`a` = -125 (rouge)</span><span>bleu</span>
</div>
<div data-color="yellow-to-blue-zero">
  <span>jaune</span><span>pas de rouge ou de vert</span><span>bleu</span>
</div>
<div data-color="yellow-to-blue-green">
  <span>jaune</span><span>`a` = 125 (vert)</span><span>bleu</span>
</div>
```

#### CSS

```css hidden
div {
  height: 50px;
  padding: 5px;
  margin: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
span {
  background-color: #ffffffcc;
  padding: 3px;
}
```

```css-nolint
/* a-axis gradients */
[data-color="red-to-green-yellow"] {
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 -125 125));
}
[data-color="red-to-green-zero"] {
  background-image: linear-gradient(to right, lab(50 125 0), lab(50 -125 0));
}
[data-color="red-to-green-blue"] {
  background-image: linear-gradient(to right, lab(50 125 -125), lab(50 -125 -125));
}

/* b-axis gradients */
[data-color="yellow-to-blue-red"] {
  background-image: linear-gradient(to right, lab(50 125 125), lab(50 125 -125));
}
[data-color="yellow-to-blue-zero"] {
  background-image: linear-gradient(to right, lab(50 0 125), lab(50 0 -125));
}
[data-color="yellow-to-blue-green"] {
  background-image: linear-gradient(to right, lab(50 -125 125),lab(50 -125 -125));
}
```

#### Résultat

{{EmbedLiveSample("Dégradés linéaires le long des axes a et b
", '', '420')}}

### Ajustement de l'opacité

L'exemple suivant montre l'effet de la variation de la valeur `A` (alpha) de la notation fonctionnelle `lab()`.
Les éléments `red` et `red-alpha` se chevauchent avec l'élément `#background-div` pour démontrer l'effet de l'opacité.
Donner à `A` une valeur de `0.4` rend la couleur opaque à 40 %.

#### HTML

```html
<div id="background-div">
  <div data-color="red"></div>
  <div data-color="red-alpha"></div>
</div>
```

#### CSS

```css hidden
div {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: inline-block;
  border: 1px solid black;
}
#background-div {
  background-color: lightblue;
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lab(80 125 125);
}
[data-color="red-alpha"] {
  background-color: lab(80 125 125 / 0.4);
}
```

#### Résultat

{{EmbedLiveSample('Ajustement de l'opacité')}}

### Utilisation des couleurs relatives avec `lab()`

Cet exemple met en forme trois éléments HTML {{HTMLElement("div")}} avec différentes couleurs d'arrière-plan. Celui du milieu reçoit la `--base-color` non modifiée, tandis que ceux de gauche et de droite reçoivent des variantes éclaircie et assombrie de cette `--base-color`.

Ces variantes sont définies en utilisant des couleurs relatives — la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--base-color` est passée dans une fonction `lab()`, et les couleurs de sortie ont leur canal de luminosité modifié pour obtenir l'effet désiré via une fonction `calc()`. La couleur éclaircie a 15 % ajoutés au canal de luminosité, et la couleur assombrie a 15 % soustraits du canal de luminosité.

```html hidden
<div id="container">
  <div class="item" id="one"></div>
  <div class="item" id="two"></div>
  <div class="item" id="three"></div>
</div>
```

#### CSS

```css hidden
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.item {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --base-color: orange;
  /* équivalent de lab(75 24 79) */
}

#one {
  background-color: lab(from var(--base-color) calc(l + 15) a b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lab(from var(--base-color) calc(l - 15) a b);
}
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{ EmbedLiveSample("Utilisation des couleurs relatives avec `lab()`", "100%", "200") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{cssxref("&lt;color&gt;")}}
- Le type de donnée [`<color-function>`](/fr/docs/Web/CSS/Guides/Colors#fonctions)
- [Utilisation des couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [Les couleurs LCH en CSS&nbsp;: qu'est-ce que c'est, pourquoi et comment&nbsp;? <sup>(angl.)</sup>](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) par Lea Verou (2020)
- [Notes de version pour Safari Technology Preview 122 <sup>(angl.)</sup>](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/)&nbsp;: contient `lab()` et les couleurs {{cssxref("color_value/lch",'lch()')}}
