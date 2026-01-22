---
title: oklch()
slug: Web/CSS/Reference/Values/color_value/oklch
original_slug: Web/CSS/color_value/oklch
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`oklch()`** exprime une couleur donnée dans l'{{glossary("color space", "espace de couleur")}} OKLCH. `oklch()` est la forme cylindrique de {{CSSXref("color_value/oklab", "oklab()")}}, utilisant le même axe `L`, mais avec des coordonnées polaires Chroma (`C`) et teinte (`h` pour <i lang="en">hue</i> en anglais).

## Syntaxe

```css
/* Valeurs absolues */
oklch(40.1% 0.123 21.57)
oklch(59.69% 0.156 49.77)
oklch(59.69% 0.156 49.77 / .5)

/* Valeurs relatives */
oklch(from green l c h / 0.5)
oklch(from #123456 calc(l + 0.1) c h)
oklch(from hsl(180 100% 50%) calc(l - 0.1) c h)
oklch(from var(--color) l c h / calc(alpha - 0.1))
```

### Valeurs

Vous trouverez ci-dessous les descriptions des valeurs autorisées pour les [couleurs absolues et relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors).

> [!NOTE]
> Habituellement, lorsque les valeurs de pourcentage ont un équivalent numérique en CSS, `100%` est égal au nombre `1`.
> Ce n'est pas le cas pour toutes les valeurs des composants de `oklch()`. Ici, `100%` est égal à `0.4` pour la valeur `C`.

#### Syntaxe des valeurs absolues

```plain
oklch(L C H[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `L`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `1`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Dans ce cas, le nombre `0` correspond à `0%` (noir) et le nombre `1` correspond à `100%` (blanc). Cette valeur définit la clarté perçue de la couleur, ou sa «&nbsp;luminosité&nbsp;».

    > [!NOTE]
    > Le `L` dans `oklch()` est la clarté perçue, qui fait référence à la «&nbsp;luminosité&nbsp;» que nous percevons visuellement avec nos yeux. Ceci est différent du `L` dans `hsl()`, où il représente la clarté par rapport à d'autres couleurs.

- `C`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un pourcentage ({{CSSXref("&lt;percentage&gt;")}}), ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur est une mesure de la chroma de la couleur (représentant approximativement la «&nbsp;quantité de couleur&nbsp;»). Sa valeur minimale utile est `0`, tandis que le maximum est théoriquement illimité (mais en pratique ne dépasse pas `0.5`). Dans ce cas, `0%` vaut `0` et `100%` vaut le nombre `0.4`.

- `H`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un {{CSSXref("&lt;angle&gt;")}}, ou le mot-clé `none` (équivalent à `0deg` dans ce cas) représentant l'angle de {{CSSXref("&lt;hue&gt;")}} de la couleur.

    > [!NOTE]
    > Les angles correspondant à des teintes particulières diffèrent entre les espaces de couleur sRGB (utilisé par {{CSSXref("color_value/hsl", "hsl()")}} et {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (utilisé par {{CSSXref("color_value/lch", "lch()")}}), et Oklab (utilisé par `oklch()`). Voir l'exemple [Teintes dans OkLCh](#teintes_dans_oklch) ci-dessous et la page de référence {{CSSXref("&lt;hue&gt;")}} pour plus de détails et d'exemples.

- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où le nombre `0` correspond à `0%` (complètement transparent) et `1` correspond à `100%` (complètement opaque). De plus, le mot-clé `none` peut être utilisé pour définir explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas définie explicitement, elle vaut par défaut 100%. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Voir [Composants de couleur manquants](/fr/docs/Web/CSS/Reference/Values/color_value#composants_de_couleur_manquants) pour plus d'informations sur l'effet de `none`.

#### Syntaxe des valeurs relatives

```plain
oklch(from <color> L C H[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `from <color>`
  - : Le mot-clé `from` est toujours inclus lors de la définition d'une couleur relative, suivi d'une valeur {{cssxref("&lt;color&gt;")}} représentant la **couleur d'origine**&nbsp;: il s'agit de la couleur originale sur laquelle la couleur relative est basée. La couleur d'origine peut être _n'importe quelle_ syntaxe {{cssxref("&lt;color&gt;")}} valide, y compris une autre couleur relative.

- `L`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `1`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Ceci représente la valeur de clarté de la couleur de sortie. Ici, le nombre `0` correspond à `0%` (noir) et le nombre `1` correspond à `100%` (blanc).

- `C`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un pourcentage ({{CSSXref("&lt;percentage&gt;")}}), ou le mot-clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la valeur de chroma de la couleur de sortie (représentant approximativement la «&nbsp;quantité de couleur&nbsp;»). Sa valeur minimale utile est `0`, tandis que son maximum est théoriquement illimité (mais en pratique ne dépasse pas `0.5`). Dans ce cas, `0%` vaut `0` et `100%` vaut le nombre `0.4`.

- `H`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un {{CSSXref("&lt;angle&gt;")}}, ou le mot-clé `none` (équivalent à `0deg` dans ce cas) représentant l'angle de {{CSSXref("&lt;hue&gt;")}} de la couleur de sortie. Voir un [échantillon de différentes teintes](#teintes_dans_oklch) dans la section [Exemples](#exemples) ci-dessous.

- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur de sortie, où le nombre `0` correspond à `0%` (complètement transparent) et `1` correspond à `100%` (complètement opaque). De plus, le mot-clé `none` peut être utilisé pour définir explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas définie explicitement, elle prend par défaut la valeur du canal alpha de la couleur d'origine. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

#### Définition des composants de canal de couleur de sortie relative

Lors de l'utilisation de la syntaxe de couleur relative dans une fonction `oklch()`, le navigateur convertit la couleur d'origine en une couleur OkLCh équivalente (si elle n'est pas déjà définie comme telle). La couleur est définie comme trois valeurs distinctes de canal de couleur — `l` (clarté), `c` (chroma), et `h` (teinte) — plus une valeur de canal alpha (`alpha`). Ces valeurs de canal sont rendues disponibles dans la fonction pour être utilisées lors de la définition des valeurs de canal de couleur de sortie&nbsp;:

- La valeur du canal `l` est résolue en une valeur `<number>` entre `0` et `1`, inclus.
- La valeur du canal `c` est résolue en une valeur `<number>` entre `0` et `0.4`, inclus.
- La valeur du canal `h` est résolue en une valeur `<number>` entre `0` et `360`, inclus.
- Le canal `alpha` est résolu en une valeur `<number>` entre `0` et `1`, inclus.

Lors de la définition d'une couleur relative, les différents canaux de la couleur de sortie peuvent être exprimés de plusieurs façons différentes. Ci-dessous, nous étudierons quelques exemples pour illustrer cela.

Dans les deux premiers exemples ci-dessous, nous utilisons la syntaxe de couleur relative. Cependant, le premier produit la même couleur que la couleur d'origine et le second produit une couleur qui n'est pas du tout basée sur la couleur d'origine. Ils ne créent pas vraiment de couleurs relatives&nbsp;! Vous seriez peu susceptible d'utiliser cela dans une vraie base de code, et utiliseriez probablement simplement une valeur de couleur absolue à la place. Nous avons inclus ces exemples comme point de départ pour apprendre la syntaxe relative `oklch()`.

Commençons par une couleur d'origine de `hsl(0 100% 50%)` (équivalent à `red`). La fonction suivante produit la même couleur que la couleur d'origine — elle utilise les valeurs de canal `l`, `c`, et `h` de la couleur d'origine (`0.627966`, `0.257704`, et `29.2346`) comme valeurs de canal de sortie&nbsp;:

```css
oklch(from hsl(0 100% 50%) l c h)
```

La couleur de sortie de cette fonction est `oklch(0.627966 0.257704 29.2346)`.

La fonction suivante utilise des valeurs absolues pour les valeurs de canal de la couleur de sortie, produisant une couleur complètement différente non basée sur la couleur d'origine&nbsp;:

```css
oklch(from hsl(0 100% 50%) 42.1% 0.25 328.363)
```

Dans le cas ci-dessus, la couleur de sortie est `oklch(0.421 0.25 328.363)`.

La fonction suivante crée une couleur relative basée sur la couleur d'origine&nbsp;:

```css
oklch(from hsl(0 100% 50%) 0.8 0.4 h)
```

Cet exemple&nbsp;:

- Convertit la couleur d'origine `hsl()` en une couleur `oklch()` équivalente — `oklch(0.627966 0.257704 29.2346)`.
- Définit la valeur du canal `H` pour la couleur de sortie à celle de la valeur du canal `H` de l'équivalent `oklch()` d'origine — `29.2346`.
- Définit les valeurs des canaux `L` et `C` de la couleur de sortie à de nouvelles valeurs non basées sur la couleur d'origine&nbsp;: `0.8` et `0.4` respectivement.

La couleur de sortie finale est `oklch(0.8 0.4 29.2346)`.

> [!NOTE]
> Comme mentionné ci-dessus, si la couleur de sortie utilise un modèle de couleur différent de la couleur d'origine, la couleur d'origine est convertie au même modèle que la couleur de sortie en arrière-plan afin qu'elle puisse être représentée d'une manière compatible (c'est-à-dire, en utilisant les mêmes canaux).

Dans les exemples que nous avons vus jusqu'à présent dans cette section, les canaux alpha n'ont pas été explicitement définis pour les couleurs d'origine ou de sortie. Lorsque le canal alpha de la couleur de sortie n'est pas défini, il prend par défaut la même valeur que le canal alpha de la couleur d'origine. Lorsque le canal alpha de la couleur d'origine n'est pas défini (et qu'il ne s'agit pas d'une couleur relative), il vaut par défaut `1`. Par conséquent, les valeurs de canal alpha d'origine et de sortie sont `1` pour les exemples ci-dessus.

Examinons quelques exemples qui définissent les valeurs de canal alpha d'origine et de sortie. Le premier définit la valeur du canal alpha de sortie comme étant la même que la valeur du canal alpha d'origine, tandis que le second définit une valeur de canal alpha de sortie différente, non liée à la valeur du canal alpha d'origine.

```css
oklch(from hsl(0 100% 50% / 0.8) l c h / alpha)
/* Couleur de sortie calculée : oklch(0.627966 0.257704 29.2346 / 0.8) */

oklch(from hsl(0 100% 50% / 0.8) l c h / 0.5)
/* Couleur de sortie calculée : oklch(0.627966 0.257704 29.2346 / 0.5) */
```

Dans l'exemple suivant, la couleur d'origine `hsl()` est à nouveau convertie en équivalent `oklch()` — `oklch(0.627966 0.257704 29.2346)`. Des calculs {{cssxref("calc")}} sont appliqués aux valeurs `L`, `C`, `H`, et `A`, résultant en une couleur de sortie de `oklch(0.827966 0.357704 9.23462 / 0.9)`&nbsp;:

```css
oklch(from hsl(0 100% 50%) calc(l + 0.2) calc(c + 0.1) calc(h - 20) / calc(alpha - 0.1))
```

> [!NOTE]
> Étant donné que les valeurs de canal de couleur d'origine sont résolues en valeurs `<number>`, vous devez leur ajouter des nombres lors de leur utilisation dans des calculs, même dans les cas où un canal accepterait normalement `<percentage>`, `<angle>`, ou d'autres types de valeurs. Ajouter un `<percentage>` à un `<number>`, par exemple, ne fonctionne pas.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Ajustement de la luminosité d'une couleur

Cet exemple montre l'effet de la variation de la valeur `L` (clarté) de la notation fonctionnelle `oklch()`.

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
  background-color: oklch(10% 0.4 240);
}
[data-color="blue"] {
  background-color: oklch(50% 0.4 240);
}
[data-color="blue-light"] {
  background-color: oklch(90% 0.4 240);
}

[data-color="red-dark"] {
  background-color: oklch(10% 0.4 20);
}
[data-color="red"] {
  background-color: oklch(50% 0.4 20);
}
[data-color="red-light"] {
  background-color: oklch(90% 0.4 20);
}

[data-color="green-dark"] {
  background-color: oklch(10% 0.4 130);
}
[data-color="green"] {
  background-color: oklch(50% 0.4 130);
}
[data-color="green-light"] {
  background-color: oklch(90% 0.4 130);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de la luminosité d'une couleur", "", "200")}}

### Ajustement de l'intensité de couleur via la chroma

L'exemple suivant montre l'effet de la variation de la valeur `C` (chroma) de la notation fonctionnelle `oklch()`, avec des couleurs diminuant en intensité à mesure que la valeur `C` diminue de complètement saturée à presque grise.

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

Avec les couleurs de départ initiales bleu, rouge et vert, nous déclarons des valeurs progressivement plus petites pour la chroma sur elles&nbsp;: en commençant par la saturation complète de couleur à la valeur élevée de `0.4` (équivalent à `100%`) jusqu'à `0.01` (équivalent à `2%`), qui est presque gris pour toutes les couleurs.

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
  background-color: oklch(50% 0.4 240);
}
[data-color="blue-chroma1"] {
  background-color: oklch(50% 0.2 240);
}
[data-color="blue-chroma2"] {
  background-color: oklch(50% 0.1 240);
}
[data-color="blue-chroma3"] {
  background-color: oklch(50% 0.01 240);
}

[data-color="red"] {
  background-color: oklch(50% 100% 20deg);
}
[data-color="red-chroma1"] {
  background-color: oklch(50% 50% 20deg);
}
[data-color="red-chroma2"] {
  background-color: oklch(50% 25% 20deg);
}
[data-color="red-chroma3"] {
  background-color: oklch(50% 2% 20deg);
}

[data-color="green"] {
  background-color: oklch(50% 0.4 130);
}
[data-color="green-chroma1"] {
  background-color: oklch(50% 0.2 130);
}
[data-color="green-chroma2"] {
  background-color: oklch(50% 0.1 130);
}
[data-color="green-chroma3"] {
  background-color: oklch(50% 0.01 130);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de l'intensité de couleur via la chroma", '', '200')}}

Si nous avions utilisé `0` au lieu de `0.01` et `2%`, avec les mêmes valeurs de clarté, les couleurs auraient toutes été de la même nuance de gris. Dans cet exemple, elles sont presque grises.

### Teintes dans OkLCh

L'exemple suivant montre des échantillons avec différentes valeurs `H` (teinte) de la notation fonctionnelle `oklch()`.

#### HTML

```html
<div data-color="0">0deg</div>
<div data-color="20">20deg</div>
<div data-color="40">40deg</div>
<div data-color="60">60deg</div>
```

et ainsi de suite.

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
  background-color: oklch(50% 0.4 0deg);
}
[data-color="20"] {
  background-color: oklch(50% 0.4 20deg);
}
[data-color="40"] {
  background-color: oklch(50% 0.4 40deg);
}
[data-color="60"] {
  background-color: oklch(50% 0.4 60deg);
}
```

et ainsi de suite.

```css hidden
[data-color="80"] {
  background-color: oklch(50% 0.4 80deg);
}
[data-color="100"] {
  background-color: oklch(50% 0.4 100deg);
}
[data-color="120"] {
  background-color: oklch(50% 0.4 120deg);
}
[data-color="140"] {
  background-color: oklch(50% 0.4 140deg);
}
[data-color="160"] {
  background-color: oklch(50% 0.4 160deg);
}
[data-color="180"] {
  background-color: oklch(50% 0.4 180deg);
}
[data-color="200"] {
  background-color: oklch(50% 0.4 200deg);
}
[data-color="220"] {
  background-color: oklch(50% 0.4 220deg);
}
[data-color="240"] {
  background-color: oklch(50% 0.4 240deg);
}
[data-color="260"] {
  background-color: oklch(50% 0.4 260deg);
}
[data-color="280"] {
  background-color: oklch(50% 0.4 280deg);
}
[data-color="300"] {
  background-color: oklch(50% 0.4 300deg);
}
[data-color="320"] {
  background-color: oklch(50% 0.4 320deg);
}
[data-color="340"] {
  background-color: oklch(50% 0.4 340deg);
}
[data-color="360"] {
  background-color: oklch(50% 0.4 360deg);
}
```

#### Résultat

{{EmbedLiveSample("Teintes dans OkLCh")}}

Les angles de teinte dans `oklch()` sont différents de ceux dans {{CSSXref("color_value/hsl", "hsl()")}}. Voir {{cssxref("hue")}} pour plus d'informations. Dans `hsl()`, la couleur sRGB `0deg` représente le rouge. Cependant, dans l'espace de couleur CIELab, `0deg` correspond au magenta, tandis que le rouge est approximativement `41deg`.

### Ajustement de la valeur alpha d'une couleur

L'exemple suivant montre l'effet de la variation de la valeur `A` (alpha) de la fonction de couleur `oklch()`.
Les éléments `red` et `red-alpha` chevauchent l'élément `#background-div` pour démontrer l'effet de l'opacité.
Donner à `A` une valeur de `0.4` rend la couleur opaque à 40%.

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
  background-color: oklch(100% 0.57 217);
  width: 150px;
  height: 40px;
}
```

```css
[data-color="red"] {
  background-color: oklch(50% 0.5 20);
}
[data-color="red-alpha"] {
  background-color: oklch(50% 0.5 20 / 0.4);
}
```

#### Résultat

{{EmbedLiveSample("Ajustement de la valeur alpha d'une couleur")}}

### Utilisation des couleurs relatives avec `oklch()`

Cet exemple met en forme trois éléments {{htmlelement("div")}} avec différentes couleurs d'arrière-plan. Celui du milieu reçoit la `--base-color` non modifiée, tandis que ceux de gauche et de droite reçoivent des variantes éclaircie et assombrie de cette `--base-color`.

Ces variantes sont définies en utilisant des couleurs relatives — la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--base-color` est passée dans une fonction `oklch()`, et les couleurs de sortie ont leur canal de clarté modifié pour obtenir l'effet désiré via une fonction `calc()`. La couleur éclaircie a `0.15` (15%) ajouté au canal de clarté, et la couleur assombrie a `0.15` (15%) soustrait du canal de clarté.

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
  background-color: oklch(from var(--base-color) calc(l + 0.15) c h);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: oklch(from var(--base-color) calc(l - 0.15) c h);
}
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{ EmbedLiveSample("Utilisation des couleurs relatives avec `oklch()`", "100%", "200") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Liste de toutes les notations de couleur](/fr/docs/Web/CSS/Reference/Values/color_value)
- [Utilisation des couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- Le type de donnée {{CSSXref("&lt;hue&gt;")}}
- Les fonctions de couleur {{cssxref("color_value/lch","lch()")}} et {{cssxref("color_value/oklab","oklab()")}}
- [Article interactif sur l'espace de couleur OkLCh <sup>(angl.)</sup>](https://abhisaha.com/blog/interactive-post-oklch-color-space) (2024)
- [OKLCH en CSS&nbsp;: pourquoi nous avons abandonné RGB et HSL <sup>(angl.)</sup>](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl) (2024)
- [Un espace de couleur perceptuel pour le traitement des images <sup>(angl.)</sup>](https://bottosson.github.io/posts/oklab/) (2020)
