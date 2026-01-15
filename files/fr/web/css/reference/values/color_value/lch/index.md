---
title: lch()
slug: Web/CSS/Reference/Values/color_value/lch
original_slug: Web/CSS/color_value/lch
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`lch()`** exprime une couleur donnée dans l'{{glossary("color space", "espace de couleur")}} LCH, qui utilise le même axe L (luminosité) que la fonction de couleur {{cssxref("color_value/lab","lab()")}} de l'[espace de couleur CIELab](/fr/docs/Glossary/Color_space#espaces_de_couleur_cielab), mais utilise des coordonnées polaires C (chroma) et H (pour la teinte, <i lang="en">hue</i> en anglais).

## Syntaxe

```css
/* Valeurs absolues */
lch(29.2345% 44.2 27);
lch(52.2345% 72.2 56.2);
lch(52.2345% 72.2 56.2 / .5);

/* Valeurs relatives */
lch(from green l c h / 0.5)
lch(from #123456 calc(l + 10) c h)
lch(from hsl(180 100% 50%) calc(l - 10) c h)
lch(from var(--color-value) l c h / calc(alpha - 0.1))
```

### Valeurs

Voici les descriptions des valeurs autorisées pour les [couleurs absolues et relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> En général, lorsque les valeurs de pourcentage ont un équivalent numérique en CSS, `100%` est égal au nombre `1`.
> Ce n'est pas le cas pour `lch()`. Ici, `100%` est égal au nombre `100` pour la valeur `L` et `150` pour la valeur `C`.

#### Syntaxe des valeurs absolues

```plain
lch(L C H[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `L`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `100`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%`). Le nombre `0` correspond à `0%` (noir), et le nombre `100` correspond à `100%` (blanc). Cette valeur définit la luminosité de la couleur dans l'[espace de couleur CIELab](/fr/docs/Glossary/Color_space#espaces_de_couleur_cielab).

    > [!NOTE]
    > Le `L` dans `lch()` représente la luminosité perçue, qui fait référence à la «&nbsp;luminosité&nbsp;» que nous percevons visuellement avec nos yeux. Cela diffère du `L` dans `hsl()`, où il représente la luminosité par rapport à d'autres couleurs.

- `C`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un pourcentage ({{CSSXref("&lt;percentage&gt;")}},) ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur est une mesure de la chroma de la couleur (représentant approximativement la « quantité de couleur »). Sa valeur minimale utile est `0%`, ou `0`, tandis que son maximum est théoriquement illimité (mais ne dépasse pas `230` en pratique), avec `100%` étant équivalent à `150`.

- `H`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un {{CSSXref("&lt;angle&gt;")}}, ou le mot-clé `none` (équivalent à `0deg`) représentant l'angle de {{CSSXref("&lt;hue&gt;", "teinte")}} de la couleur.

    > [!NOTE]
    > Les angles correspondant à des teintes particulières diffèrent entre les espaces de couleur sRGB (utilisé par {{CSSXref("color_value/hsl", "hsl()")}} et {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (utilisé par `lch()`), et Oklab (utilisé par {{CSSXref("color_value/oklch", "oklch()")}}). Consultez l'exemple [teintes dans LCH](#teintes_dans_lch) ci-dessous et la page de référence {{CSSXref("&lt;hue&gt;")}} pour plus de détails et d'exemples.

- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où le nombre `0` correspond à `0%` (entièrement transparent) et `1` correspond à `100%` (entièrement opaque). De plus, le mot-clé `none` peut être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas explicitement définie, elle prend par défaut la valeur 100%. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Consultez [Composants de couleur manquants](/fr/docs/Web/CSS/Reference/Values/color_value#composants_de_couleur_manquants) pour plus d'informations sur l'effet de `none`.

#### Syntaxe des valeurs relatives

```plain
lch(from <color> L C H[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `from <color>`
  - : Le mot-clé `from` est toujours inclus lors de la définition d'une couleur relative, suivi d'une valeur {{cssxref("&lt;color&gt;")}} représentant la **couleur d'origine**. C'est la couleur originale sur laquelle la couleur relative est basée. La couleur d'origine peut être _n'importe quelle_ syntaxe {{cssxref("&lt;color&gt;")}} valide, y compris une autre couleur relative.

- `L`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `100`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%`). Le nombre `0` correspond à `0%` (noir), et le nombre `100` correspond à `100%` (blanc). Cette valeur définit la luminosité de la couleur dans l'espace de couleur CIELab.

- `C`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un pourcentage ({{CSSXref("&lt;percentage&gt;")}},) ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la valeur de chroma de la couleur de sortie (représentant approximativement la « quantité de couleur »). Sa valeur minimale utile est `0%`, ou `0`, tandis que son maximum est théoriquement illimité (mais ne dépasse pas `230` en pratique), avec `100%` étant équivalent à `150`.

- `H`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un {{CSSXref("&lt;angle&gt;")}}, ou le mot-clé `none` (équivalent à `0deg`) représentant l'angle de {{CSSXref("&lt;hue&gt;", "teinte")}} de la couleur de sortie. Consultez l'[exemple de teinte](#result_3) ci-dessous.

- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur de sortie, où le nombre `0` correspond à `0%` (entièrement transparent) et `1` correspond à `100%` (entièrement opaque). De plus, le mot-clé `none` peut être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas explicitement définie, elle prend par défaut la valeur du canal alpha de la couleur d'origine. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

#### Définition des composants des canaux de couleur de sortie relative

Lors de l'utilisation de la syntaxe des couleurs relatives dans une fonction `lch()`, le navigateur convertit la couleur d'origine en une couleur Lch équivalente (si elle n'est pas déjà définie comme telle). La couleur est définie comme trois valeurs de canaux de couleur distinctes — `l` (luminosité), `c` (chroma), et `h` (teinte) — plus une valeur de canal alpha (`alpha`). Ces valeurs de canaux sont rendues disponibles dans la fonction pour être utilisées lors de la définition des valeurs des canaux de couleur de sortie&nbsp;:

- La valeur du canal `l` est résolue en un `<number>` entre `0` et `100`, inclus.
- La valeur du canal `c` est résolue en un `<number>` entre `0` et `150`, inclus.
- La valeur du canal `h` est résolue en un `<number>` entre `0` et `360`, inclus.
- Le canal `alpha` est résolu en un `<number>` entre `0` et `1`, inclus.

Lors de la définition d'une couleur relative, les différents canaux de la couleur de sortie peuvent être exprimés de plusieurs manières différentes. Ci-dessous, nous étudierons quelques exemples pour illustrer ceux-ci.

Dans les deux premiers exemples ci-dessous, nous utilisons la syntaxe des couleurs relatives. Cependant, le premier produit la même couleur que la couleur d'origine et le second produit une couleur qui n'est pas du tout basée sur la couleur d'origine. Ils ne créent pas vraiment de couleurs relatives&nbsp;! Vous seriez peu susceptible d'utiliser cela dans une base de code réelle, et utiliseriez probablement simplement une valeur de couleur absolue à la place. Nous avons inclus ces exemples comme point de départ pour apprendre la syntaxe `lch()` relative.

Commençons par une couleur d'origine de `hsl(0 100% 50%)` (équivalent à `red`). La fonction suivante produit la même couleur que la couleur d'origine — elle utilise les valeurs des canaux `l`, `c`, et `h` de la couleur d'origine (`54.29`, `106.854`, et `40.856`) comme valeurs des canaux de sortie&nbsp;:

```css
lch(from hsl(0 100% 50%) l c h)
```

La couleur de sortie de cette fonction est `lch(54.29 106.854 40.856)`.

La fonction suivante utilise des valeurs absolues pour les valeurs des canaux de la couleur de sortie, produisant une couleur complètement différente non basée sur la couleur d'origine&nbsp;:

```css
lch(from hsl(0 100% 50%) 29.6871% 66.83 327.109)
```

Dans le cas ci-dessus, la couleur de sortie est `lch(29.6871 66.83 327.109)`.

La fonction suivante crée une couleur relative basée sur la couleur d'origine&nbsp;:

```css
lch(from hsl(0 100% 50%) 70 150 h)
```

Cet exemple&nbsp;:

- Convertit la couleur d'origine `hsl()` en une couleur `lch()` équivalente — `lch(54.29 106.854 40.856)`.
- Définit la valeur du canal `H` pour la couleur de sortie à celle de la valeur du canal `H` de l'équivalent `lch()` d'origine — `40.856`.
- Définit les valeurs des canaux `L` et `C` de la couleur de sortie à de nouvelles valeurs non basées sur la couleur d'origine&nbsp;: `70` et `150` respectivement.

La couleur de sortie finale est `lch(70 150 40.856)`.

> [!NOTE]
> Comme mentionné ci-dessus, si la couleur de sortie utilise un modèle de couleur différent de la couleur d'origine, la couleur d'origine est convertie vers le même modèle que la couleur de sortie en arrière-plan afin qu'elle puisse être représentée de manière compatible (c'est-à-dire, en utilisant les mêmes canaux).

Dans les exemples que nous avons vus jusqu'à présent dans cette section, les canaux alpha n'ont pas été explicitement définis pour les couleurs d'origine ou de sortie. Lorsque le canal alpha de la couleur de sortie n'est pas défini, il prend par défaut la même valeur que le canal alpha de la couleur d'origine. Lorsque le canal alpha de la couleur d'origine n'est pas défini (et qu'il ne s'agit pas d'une couleur relative), il prend par défaut la valeur `1`. Par conséquent, les valeurs des canaux alpha d'origine et de sortie sont `1` pour les exemples ci-dessus.

Examinons quelques exemples qui définissent les valeurs des canaux alpha d'origine et de sortie. Le premier définit la valeur du canal alpha de sortie comme étant la même que la valeur du canal alpha d'origine, tandis que le second définit une valeur différente du canal alpha de sortie, non liée à la valeur du canal alpha d'origine.

```css
lch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Couleur de sortie calculée : lch(54.29 106.854 40.856 / 0.8) */

lch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Couleur de sortie calculée : lch(54.29 106.854 40.856 / 0.5) */
```

Dans l'exemple suivant, la couleur d'origine `hsl()` est à nouveau convertie vers l'équivalent `lch()` — `lch(54.29 106.854 40.856)`. Les calculs {{cssxref("calc")}} sont appliqués aux valeurs `L`, `C`, `H`, et `A`, résultant en une couleur de sortie de `lch(74.29 86.8541 0.856018 / 0.9)`&nbsp;:

```css
lch(from hsl(0 100% 50%) calc(l + 20) calc(c - 20) calc(h - 40) / calc(alpha - 0.1))
```

> [!NOTE]
> Comme les valeurs des canaux de couleur d'origine sont résolues en valeurs `<number>`, vous devez leur ajouter des nombres lors de leur utilisation dans des calculs, même dans les cas où un canal accepterait normalement `<percentage>`, `<angle>`, ou d'autres types de valeurs. L'ajout d'un `<percentage>` à un `<number>`, par exemple, ne fonctionne pas.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Ajustement de la luminosité d'une couleur

Cet exemple montre l'effet de la variation de la valeur `L` (luminosité) de la notation fonctionnelle `lch()`.

#### HTML

```html
<div data-color="blue-dark"></div>
<div data-color="blue"></div>
<div data-color="blue-light"></div>

<div data-color="red-dark"></div>
<div data-color="red"></div>
<div data-color="red-light"></div>

<div data-color="green-dark"></div>
<div data-color="green"></div>
<div data-color="green-light"></div>
```

#### CSS

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
div {
  height: 50px;
  border: 1px solid black;
}
```

```css
[data-color="blue-dark"] {
  background-color: lch(10% 100 240);
}
[data-color="blue"] {
  background-color: lch(50% 100 240);
}
[data-color="blue-light"] {
  background-color: lch(90% 100 240);
}

[data-color="red-dark"] {
  background-color: lch(10% 130 20);
}
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-light"] {
  background-color: lch(90% 130 20);
}

[data-color="green-dark"] {
  background-color: lch(10% 132 130);
}
[data-color="green"] {
  background-color: lch(50% 132 130);
}
[data-color="green-light"] {
  background-color: lch(90% 132 130);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de la luminosité d'une couleur", "", "200")}}

### Ajustement de l'intensité des couleurs via la chroma

Cet exemple montre l'effet de la variation de la valeur `C` (chroma) de la notation fonctionnelle `lch()`, avec des couleurs diminuant en intensité à mesure que la valeur `C` diminue, passant d'une saturation complète à presque du gris.

#### HTML

```html
<div data-color="blue"></div>
<div data-color="blue-chroma1"></div>
<div data-color="blue-chroma2"></div>
<div data-color="blue-chroma3"></div>

<div data-color="red"></div>
<div data-color="red-chroma1"></div>
<div data-color="red-chroma2"></div>
<div data-color="red-chroma3"></div>

<div data-color="green"></div>
<div data-color="green-chroma1"></div>
<div data-color="green-chroma2"></div>
<div data-color="green-chroma3"></div>
```

#### CSS

Avec les couleurs de départ initiales bleu, rouge et vert, nous déclarons des valeurs de chroma progressivement plus petites : commençant par une saturation complète des couleurs à la valeur la plus élevée de `150` (équivalente à `100%`) jusqu'à `3` (équivalente à `2%`), ce qui est presque gris pour toutes les couleurs.

```css hidden
body {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
div {
  height: 50px;
  border: 1px solid black;
}
```

```css
[data-color="blue"] {
  background-color: lch(50% 150 240);
}
[data-color="blue-chroma1"] {
  background-color: lch(50% 105 240);
}
[data-color="blue-chroma2"] {
  background-color: lch(50% 54 240);
}
[data-color="blue-chroma3"] {
  background-color: lch(50% 3 240);
}

[data-color="red"] {
  background-color: lch(50% 100% 20deg);
}
[data-color="red-chroma1"] {
  background-color: lch(50% 70% 20deg);
}
[data-color="red-chroma2"] {
  background-color: lch(50% 36% 20deg);
}
[data-color="red-chroma3"] {
  background-color: lch(50% 2% 20deg);
}

[data-color="green"] {
  background-color: lch(50% 150 130);
}
[data-color="green-chroma1"] {
  background-color: lch(50% 105 130);
}
[data-color="green-chroma2"] {
  background-color: lch(50% 54 130);
}
[data-color="green-chroma3"] {
  background-color: lch(50% 3 130);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de l'intensité des couleurs via la chroma", '', '200')}}

Si nous avions utilisé `0` au lieu de `3` et `2%`, avec les mêmes valeurs de luminosité, les couleurs auraient toutes été de la même nuance de gris. Dans cet exemple, elles sont presque grises.

### Teintes dans LCH

L'exemple suivant montre des échantillons avec différentes valeurs `H` (teinte) de la notation fonctionnelle `lch()`.

#### HTML

```html
<div data-color="0">0deg</div>
<div data-color="20">20deg</div>
<div data-color="40">40deg</div>
<div data-color="60">60deg</div>
```

and so on.

```html hidden
<div data-color="80">80deg</div>
<div data-color="100">100deg</div>
<div data-color="120">120deg</div>
<div data-color="140">140deg</div>
<div data-color="160">160deg</div>
<div data-color="180">180deg</div>
<div data-color="200">200deg</div>
<div data-color="220">220deg</div>
<div data-color="240">240deg</div>
<div data-color="260">260deg</div>
<div data-color="280">280deg</div>
<div data-color="300">300deg</div>
<div data-color="320">320deg</div>
<div data-color="340">340deg</div>
<div data-color="360">360deg</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}
div {
  flex: 0 0 4em;
  text-align: center;
  line-height: 4em;
  display: inline-block;
  border: 1px solid black;
  color: white;
  font-family: monospace;
}
```

```css
[data-color="0"] {
  background-color: lch(50% 150 0deg);
}
[data-color="20"] {
  background-color: lch(50% 150 20deg);
}
[data-color="40"] {
  background-color: lch(50% 150 40deg);
}
[data-color="60"] {
  background-color: lch(50% 150 60deg);
}
```

et ainsi de suite.

```css hidden
[data-color="80"] {
  background-color: lch(50% 150 80deg);
}
[data-color="100"] {
  background-color: lch(50% 150 100deg);
}
[data-color="120"] {
  background-color: lch(50% 150 120deg);
}
[data-color="140"] {
  background-color: lch(50% 150 140deg);
}
[data-color="160"] {
  background-color: lch(50% 150 160deg);
}
[data-color="180"] {
  background-color: lch(50% 150 180deg);
}
[data-color="200"] {
  background-color: lch(50% 150 200deg);
}
[data-color="220"] {
  background-color: lch(50% 150 220deg);
}
[data-color="240"] {
  background-color: lch(50% 150 240deg);
}
[data-color="260"] {
  background-color: lch(50% 150 260deg);
}
[data-color="280"] {
  background-color: lch(50% 150 280deg);
}
[data-color="300"] {
  background-color: lch(50% 150 300deg);
}
[data-color="320"] {
  background-color: lch(50% 150 320deg);
}
[data-color="340"] {
  background-color: lch(50% 150 340deg);
}
[data-color="360"] {
  background-color: lch(50% 150 360deg);
}
```

#### Résultat

{{EmbedLiveSample("Teintes dans lch")}}

Les angles de teinte dans `lch()` sont différents de ceux dans {{CSSXref("color_value/hsl", "hsl()")}}. Voir {{cssxref("hue")}} pour plus d'informations. Dans `hsl()`, la couleur sRGB `0deg` représente le rouge. Cependant, dans l'espace colorimétrique CIELab, `0deg` correspond au magenta, tandis que le rouge est approximativement `41deg`.

### Ajustement de l'opacité avec `lch()`

L'exemple suivant montre l'effet de la variation de la valeur `A` (alpha) de la notation fonctionnelle `lch()`.
Les éléments `red` et `red-alpha` se superposent à l'élément `#background-div` pour démontrer l'effet de l'opacité.
Donner à `A` une valeur de `0.4` rend la couleur 40% opaque.

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
  background-color: lch(100% 100 240);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: lch(50% 130 20);
}
[data-color="red-alpha"] {
  background-color: lch(50% 130 20 / 0.4);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de l'opacité avec `lch()`")}}

### Utilisation des couleurs relatives avec `lch()`

Cet exemple stylise trois éléments {{htmlelement("div")}} avec différentes couleurs de fond, démontrant l'utilisation des couleurs relatives pour changer la luminosité d'une couleur en utilisant la fonction de couleur `lch()`. Le `<div>` du milieu conserve la `--base-color` d'origine, tandis que les `<div>` de gauche et de droite reçoivent des variantes éclaircies et assombries de la `--base-color`.

Ces variantes sont définies en utilisant des couleurs relatives — la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--base-color` est passée dans une fonction `lch()`, et les couleurs de sortie ont leur canal de luminosité modifié pour obtenir l'effet désiré via une fonction `calc()`. La couleur éclaircie a 15 % ajoutés au canal de luminosité, et la couleur assombrie a 15 % soustraits du canal de luminosité.

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
  background-color: lch(from var(--base-color) calc(l + 15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: lch(from var(--base-color) calc(l - 15) c h);
}
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{ EmbedLiveSample("Utilisation des couleurs relatives avec `lch()`", "100%", "200") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Liste de toutes les notations de couleur](/fr/docs/Web/CSS/Reference/Values/color_value)
- [Utilisation des couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- Le type de donnée {{CSSXref("&lt;hue&gt;")}}
- [Les couleurs LCH en CSS&nbsp;: qu'est-ce que c'est, pourquoi et comment&nbsp;? <sup>(angl.)</sup>](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/) par Lea Verou (2020)
