---
title: oklab()
slug: Web/CSS/Reference/Values/color_value/oklab
original_slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`oklab()`** exprime une couleur donnée dans l'{{glossary("color space", "espace de couleur")}} OKLab, qui essaie de se rapprocher de la perception de la couleur par l'œil humain.

Oklab est un espace de couleur perceptuel et est utile pour&nbsp;:

- Transformer une image en niveaux de gris, sans changer sa luminosité.
- Modifier la saturation des couleurs, tout en conservant la perception de l'utilisateur·ice de la teinte et de la luminosité
- Créer des dégradés de couleurs lisses et uniformes (lorsqu'ils sont interpolés manuellement, par exemple, dans un élément HTML {{HTMLElement("canvas")}}).

`oklab()` fonctionne avec un système de coordonnées cartésiennes sur l'espace de couleur Oklab — les axes a et b. Il peut représenter une gamme plus large de couleurs que RGB, y compris les couleurs à large gamme et P3. Si vous souhaitez un système de couleur polaire, chroma et teinte, utilisez {{cssxref("color_value/oklch", "oklch()")}}.

## Syntaxe

```css
/* Valeurs absolues */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);
oklab(59.69% 0.1007 0.1191 / 0.5);

/* Valeurs relatives */
oklab(from green l a b / 0.5)
oklab(from #123456 calc(l + 0.1) a b / calc(alpha * 0.9))
oklab(from hsl(180 100% 50%) calc(l - 0.1) a b)
```

### Valeurs

Voici les descriptions des valeurs autorisées pour les [couleurs absolues et relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntaxe des valeurs absolues

```plain
oklab(L a b[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `L`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `1`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur définit la luminosité perçue de la couleur. Le nombre `0` correspond à `0%` (noir) et le nombre `1` correspond à `100%` (blanc).
- `a`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `-0.4` et `0.4`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur définit la distance de la couleur le long de l'axe `a` dans l'espace de couleur Oklab, qui détermine à quel point la couleur est verte (en se déplaçant vers `-0.4`) ou rouge (en se déplaçant vers `+0.4`). Notez que ces valeurs sont signées (permettant des valeurs positives et négatives) et théoriquement illimitées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites `±0.4` (`±100%`). En pratique, les valeurs ne peuvent pas dépasser `±0.5`.
- `b`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `-0.4` et `0.4`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur définit la distance de la couleur le long de l'axe `b` dans l'espace de couleur Oklab, qui détermine à quel point la couleur est bleue (en se déplaçant vers `-0.4`) ou jaune (en se déplaçant vers `+0.4`). Notez que ces valeurs sont signées (permettant des valeurs positives et négatives) et théoriquement illimitées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites `±0.4` (`±100%`). En pratique, les valeurs ne peuvent pas dépasser `±0.5`.
- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où le nombre `0` correspond à `0%` (entièrement transparent) et `1` correspond à `100%` (entièrement opaque). De plus, le mot-clé `none` peut être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas explicitement définie, elle prend par défaut la valeur 100%. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Consultez [Composants de couleur manquants](/fr/docs/Web/CSS/Reference/Values/color_value#composants_de_couleur_manquants) pour plus d'informations sur l'effet de `none`.

#### Syntaxe des valeurs relatives

```plain
oklab(from <color> L a b[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `from <color>`
  - : Le mot-clé `from` est toujours inclus lors de la définition d'une couleur relative, suivi d'une valeur {{cssxref("&lt;color&gt;")}} représentant la **couleur d'origine**. C'est la couleur originale sur laquelle la couleur relative est basée. La couleur d'origine peut être _n'importe quelle_ syntaxe {{cssxref("&lt;color&gt;")}} valide, y compris une autre couleur relative.
- `L`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `1`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la luminosité de la couleur de sortie. Le nombre `0` correspond à `0%` (noir) et le nombre `1` correspond à `100%` (blanc).
- `a`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `-0.4` et `0.4`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la distance de la couleur de sortie le long de l'axe `a` dans l'espace de couleur Oklab, qui détermine à quel point la couleur est verte (en se déplaçant vers `-0.4`) ou rouge (en se déplaçant vers `+0.4`). Notez que ces valeurs sont signées (permettant des valeurs positives et négatives) et théoriquement illimitées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites `±0.4` (`±100%`). En pratique, les valeurs ne peuvent pas dépasser `±0.5`.
- `b`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `-0.4` et `0.4`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `-100%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la distance de la couleur de sortie le long de l'axe `b` dans l'espace de couleur Oklab, qui détermine à quel point la couleur est bleue (en se déplaçant vers `-0.4`) ou jaune (en se déplaçant vers `+0.4`). Notez que ces valeurs sont signées (permettant des valeurs positives et négatives) et théoriquement illimitées, ce qui signifie que vous pouvez définir des valeurs en dehors des limites `±0.4` (`±100%`). En pratique, les valeurs ne peuvent pas dépasser `±0.5`.
- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur de sortie, où le nombre `0` correspond à `0%` (entièrement transparent) et `1` correspond à `100%` (entièrement opaque). De plus, le mot-clé `none` peut être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas explicitement définie, elle prend par défaut la valeur du canal alpha de la couleur d'origine. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

#### Définition des composants des canaux de couleur de sortie relative

Lors de l'utilisation de la syntaxe des couleurs relatives dans une fonction `oklab()`, le navigateur convertit la couleur d'origine en une couleur Oklab équivalente (si elle n'est pas déjà définie comme telle). La couleur est définie comme trois valeurs de canaux de couleur distinctes — `l` (luminosité), `a` (axe vert/rouge), et `b` (axe bleu/jaune) — plus une valeur de canal alpha (`alpha`). Ces valeurs de canaux sont rendues disponibles dans la fonction pour être utilisées lors de la définition des valeurs des canaux de couleur de sortie&nbsp;:

- La valeur du canal `l` est résolue en un `<number>` entre `0` et `1`, inclus.
- Les canaux `a` et `b` sont chacun résolus en un `<number>` entre `-0.4` et `0.4`, inclus.
- Le canal `alpha` est résolu en un `<number>` entre `0` et `1`, inclus.

Lors de la définition d'une couleur relative, les différents canaux de la couleur de sortie peuvent être exprimés de plusieurs manières différentes. Ci-dessous, nous étudierons quelques exemples pour illustrer ceux-ci.

Dans les deux premiers exemples ci-dessous, nous utilisons la syntaxe des couleurs relatives. Cependant, le premier produit la même couleur que la couleur d'origine et le second produit une couleur qui n'est pas du tout basée sur la couleur d'origine. Ils ne créent pas vraiment de couleurs relatives&nbsp;! Vous seriez peu susceptible d'utiliser cela dans une base de code réelle, et utiliseriez probablement simplement une valeur de couleur absolue à la place. Nous avons inclus ces exemples comme point de départ pour apprendre la syntaxe `oklab()` relative.

Commençons par une couleur d'origine de `hsl(0 100% 50%)` (équivalent à `red`). La fonction suivante produit la même couleur que la couleur d'origine — elle utilise les valeurs des canaux `l`, `a`, et `b` de la couleur d'origine (`0.627966`, `0.22488`, et `0.125859`) comme valeurs des canaux de sortie&nbsp;:

```css
oklab(from hsl(0 100% 50%) l a b)
```

La couleur de sortie de cette fonction est `oklab(0.627966 0.22488 0.125859)`.

La fonction suivante utilise des valeurs absolues pour les valeurs des canaux de la couleur de sortie, produisant une couleur complètement différente non basée sur la couleur d'origine&nbsp;:

```css
oklab(from hsl(0 100% 50%) 42.1% 0.165 -0.101)
```

Dans le cas ci-dessus, la couleur de sortie est `oklab(0.421 0.165 -0.101)`.

La fonction suivante crée une couleur relative basée sur la couleur d'origine&nbsp;:

```css
oklab(from hsl(0 100% 50%) l -0.3 b)
```

Cet exemple&nbsp;:

- Convertit la couleur d'origine `hsl()` en une couleur `oklab()` équivalente — `oklab(0.627966 0.22488 0.125859)`.
- Définit les valeurs des canaux `L` et `b` pour la couleur de sortie à celles de l'équivalent `oklab()` d'origine des canaux `L` et `b` — ces valeurs sont `0.627966` et `0.125859`, respectivement.
- Définit la valeur du canal `a` de la couleur de sortie à une nouvelle valeur non basée sur la couleur d'origine&nbsp;: `-0.3`.

La couleur de sortie finale est `oklab(0.627966 -0.3 0.125859)`.

> [!NOTE]
> Comme mentionné ci-dessus, si la couleur de sortie utilise un modèle de couleur différent de la couleur d'origine, la couleur d'origine est convertie vers le même modèle que la couleur de sortie en arrière-plan afin qu'elle puisse être représentée de manière compatible (c'est-à-dire, en utilisant les mêmes canaux).

Dans les exemples que nous avons vus jusqu'à présent dans cette section, les canaux alpha n'ont pas été explicitement définis pour les couleurs d'origine ou de sortie. Lorsque le canal alpha de la couleur de sortie n'est pas défini, il prend par défaut la même valeur que le canal alpha de la couleur d'origine. Lorsque le canal alpha de la couleur d'origine n'est pas défini (et qu'il ne s'agit pas d'une couleur relative), il prend par défaut la valeur `1`. Par conséquent, les valeurs des canaux alpha d'origine et de sortie sont `1` pour les exemples ci-dessus.

Examinons quelques exemples qui définissent les valeurs des canaux alpha d'origine et de sortie. Le premier définit la valeur du canal alpha de sortie comme étant la même que la valeur du canal alpha d'origine, tandis que le second définit une valeur différente du canal alpha de sortie, non liée à la valeur du canal alpha d'origine.

```css
oklab(from hsl(0 100% 50% / 0.8) l a b / alpha)
/* Couleur de sortie calculée : oklab(0.627966 0.22488 0.125859 / 0.8) */

oklab(from hsl(0 100% 50% / 0.8) l a b / 0.5)
/* Couleur de sortie calculée : oklab(0.627966 0.22488 0.125859 / 0.5) */
```

Dans l'exemple suivant, la couleur d'origine `hsl()` est à nouveau convertie vers l'équivalent `oklab()` — `oklab(0.627966 0.22488 0.125859)`. Les calculs {{cssxref("calc")}} sont appliqués aux valeurs `L`, `a`, `b`, et `A`, résultant en une couleur de sortie de `oklab(0.827966 0.14488 -0.0741406 / 0.9)`&nbsp;:

```css
oklab(from hsl(0 100% 50%) calc(l + 0.2) calc(a - 0.08) calc(b - 0.2) / calc(alpha - 0.1))
```

> [!NOTE]
> Comme les valeurs des canaux de couleur d'origine sont résolues en valeurs `<number>`, vous devez leur ajouter des nombres lors de leur utilisation dans des calculs, même dans les cas où un canal accepterait normalement `<percentage>`, `<angle>`, ou d'autres types de valeurs. L'ajout d'un `<percentage>` à un `<number>`, par exemple, ne fonctionne pas.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ajustement de la luminosité

L'exemple suivant montre l'effet de la variation des valeurs de luminosité, de l'axe a et de l'axe b de la fonction `oklab()`.

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
  background-color: oklab(0.05 0.4 0.4);
}
[data-color="red"] {
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="red-light"] {
  background-color: oklab(0.95 0.4 0.4);
}

[data-color="green-dark"] {
  background-color: oklab(5% -100% 0.4);
}
[data-color="green"] {
  background-color: oklab(50% -100% 0.4);
}
[data-color="green-light"] {
  background-color: oklab(95% -100% 0.4);
}

[data-color="blue-dark"] {
  background-color: oklab(0.05 -0.3 -0.4);
}
[data-color="blue"] {
  background-color: oklab(0.5 -0.3 -0.4);
}
[data-color="blue-light"] {
  background-color: oklab(0.95 -0.3 -0.4);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de la luminosité", "", "200")}}

### Ajustement de l'opacité

L'exemple suivant montre l'effet de la variation de la valeur `A` (alpha) de la fonction `oklab()`.
Les éléments `red` et `red-alpha` se superposent à l'élément `#background-div` pour démontrer l'effet de l'opacité.
Donner à l'élément `red-alpha` une opacité de `0.4` le rend plus transparent que l'élément `red`.

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
  background-color: oklab(0.628 0.225 0.126);
}
[data-color="red-alpha"] {
  background-color: oklab(0.628 0.225 0.126 / 0.4);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de l'opacité", "100%", 155)}}

### Ajustement des axes de couleur

Cet exemple démontre les effets de la définition des valeurs `a` et `b` de la fonction `oklab()` aux extrémités et aux points médians de l'axe a et de l'axe b, respectivement. L'axe a va du vert (`-0.4`) au rouge (`0.4`) et l'axe b va du jaune (`-0.4`) au bleu (`0.4`).

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

En utilisant la propriété CSS {{cssxref("background-color")}}, nous faisons varier les valeurs `a` et `b` de la fonction de couleur `oklab()` le long de l'axe a et de l'axe b, montrant les effets des valeurs maximales, médianes et minimales dans chaque cas.

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
/* Maximum de l'axe a, axe b variable */
[data-color="red-yellow"] {
  background-color: oklab(0.5 0.4 0.4);
}
[data-color="red-zero"] {
  background-color: oklab(0.5 0.4 0);
}
[data-color="red-blue"] {
  background-color: oklab(0.5 0.4 -0.4);
}

/* Centre de l'axe a, axe b variable */
[data-color="zero-yellow"] {
  background-color: oklab(0.5 0 0.4);
}
[data-color="zero-zero"] {
  background-color: oklab(0.5 0 0);
}
[data-color="zero-blue"] {
  background-color: oklab(0.5 0 -0.4);
}

/* Minimum de l'axe a, axe b variable */
[data-color="green-yellow"] {
  background-color: oklab(0.5 -0.4 0.4);
}
[data-color="green-zero"] {
  background-color: oklab(0.5 -0.4 0);
}
[data-color="green-blue"] {
  background-color: oklab(0.5 -0.4 -0.4);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement des axes de couleur", "", "200")}}

La colonne de gauche est à l'extrémité jaune (`-0.4`) de l'axe b et la colonne de droite est à l'extrémité bleue (`0.4`). La rangée du haut affiche les couleurs à l'extrémité rouge de l'axe a (`-0.4`) et la rangée du bas est à l'extrémité verte (`0.4`). La colonne et la rangée du milieu sont aux points médians de chaque axe, la cellule du milieu étant grise&nbsp;; elle ne contient ni rouge, ni vert, ni jaune, ni bleu, avec une valeur `0` pour les deux axes.

### Dégradés linéaires le long de l'axe a et de l'axe b

Cet exemple inclut des dégradés linéaires pour démontrer la progression des valeurs de la fonction `oklab()` le long de l'axe a (du rouge au vert) et le long de l'axe b (du jaune au bleu). Dans chaque image de dégradé, un axe reste statique tandis que l'autre axe progresse de valeurs faibles à élevées.

```html hidden
<div data-color="red-to-green-yellow">
  <span>rouge</span><span>`b`= -0.4 (jaune)</span><span>vert</span>
</div>
<div data-color="red-to-green-zero">
  <span>rouge</span><span>ni jaune ni bleu</span><span>vert</span>
</div>
<div data-color="red-to-green-blue">
  <span>rouge</span><span>`b`= 0.4 (bleu)</span><span>vert</span>
</div>

<div data-color="yellow-to-blue-red">
  <span>jaune</span><span>`a` = -0.4 (rouge)</span><span>bleu</span>
</div>
<div data-color="yellow-to-blue-zero">
  <span>jaune</span><span>ni rouge ni vert</span><span>bleu</span>
</div>
<div data-color="yellow-to-blue-green">
  <span>jaune</span><span>`a` = 0.4 (vert)</span><span>bleu</span>
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
/* Dégradés de l'axe a */
[data-color="red-to-green-yellow"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% -0.4 0.4));
}
[data-color="red-to-green-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0), oklab(50% -0.4 0));
}
[data-color="red-to-green-blue"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 -0.4), oklab(50% -0.4 -0.4));
}

/* Dégradés de l'axe b */
[data-color="yellow-to-blue-red"] {
  background-image: linear-gradient(to right, oklab(50% 0.4 0.4), oklab(50% 0.4 -0.4));
}
[data-color="yellow-to-blue-zero"] {
  background-image: linear-gradient(to right, oklab(50% 0 0.4), oklab(50% 0 -0.4));
}
[data-color="yellow-to-blue-green"] {
  background-image: linear-gradient(to right, oklab(50% -0.4 0.4),oklab(50% -0.4 -0.4));
}
```

#### Résultat

{{EmbedLiveSample("Dégradés linéaires le long de l'axe a et de l'axe b", '', '420')}}

### Utilisation des couleurs relatives avec `oklab()`

Cet exemple stylise trois éléments {{htmlelement("div")}} avec différentes couleurs de fond. Le `<div>` du milieu conserve la `--base-color` non modifiée, tandis que ceux de gauche et de droite reçoivent des variantes éclaircies et assombries de cette `--base-color`.

Ces variantes sont définies en utilisant des couleurs relatives — la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--base-color` est passée dans une fonction `oklab()`, et les couleurs de sortie ont leur canal de luminosité modifié pour obtenir l'effet désiré via une fonction `calc()`. La couleur éclaircie a `0.15` (15%) ajouté au canal de luminosité, et la couleur assombrie a `0.15` (15%) soustrait du canal de luminosité.

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
}

#one {
  background-color: oklab(from var(--base-color) calc(l + 0.15) a b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklab(from var(--base-color) calc(l - 0.15) a b);
}
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{ EmbedLiveSample("Utilisation des couleurs relatives avec `oklab()`", "100%", "200") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le [type de donnée `<color>`](/fr/docs/Web/CSS/Reference/Values/color_value) pour une liste de toutes les notations de couleur
- Les fonctions de couleur {{cssxref("color_value/lab","lab()")}} et {{cssxref("color_value/oklch","oklch()")}}
- [Utilisation des couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [Un espace de couleur perceptuel pour le traitement des images <sup>(angl.)</sup>](https://bottosson.github.io/posts/oklab/) sur bottosson.github.io (2023)
- [Roue de couleurs OKLAB <sup>(angl.)</sup>](https://observablehq.com/@shan/oklab-color-wheel) sur observablehq.com
