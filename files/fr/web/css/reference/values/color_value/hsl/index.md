---
title: hsl()
slug: Web/CSS/Reference/Values/color_value/hsl
original_slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

> [!NOTE]
> La notation fonctionnelle `hsla()` est un alias de `hsl()`. Elles sont exactement équivalentes. Il est recommandé d'utiliser `hsl()`.

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`hsl()`** exprime un {{glossary("color space", "espace de couleur")}} {{glossary("RGB", "sRGB")}} selon ses composantes de _teinte_ (<i lang="en">hue</i> en anglais), _saturation_, et _luminosité_. Une composante _alpha_ optionnelle représente l'opacité de la couleur.

{{InteractiveExample("Démonstration CSS&nbsp;: hsl()")}}

```css interactive-example-choice
background: hsl(50 80% 40%);
```

```css interactive-example-choice
background: hsl(150deg 30% 60%);
```

```css interactive-example-choice
background: hsl(0.3turn 60% 45% / 0.7);
```

```css interactive-example-choice
background: hsl(0 80% 50% / 25%);
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
}
```

Il est facile d'utiliser des _couleurs complémentaires_ avec `hsl()`, car celles-ci sont positionnées à l'opposé du cercle de couleur utilisé par la teinte. Ainsi, si `theta` est l'angle de la teinte d'une couleur, on pourra obtenir la couleur complémentaire avec l'angle `180deg-theta`.

## Syntaxe

```css
/* Valeurs absolues */
hsl(120deg 75% 25%)
hsl(120 75 25) /* les unités deg et % sont optionnelles */
hsl(120deg 75% 25% / 60%)
hsl(none 75% 25%)

/* Valeurs relatives */
hsl(from green h s l / 0.5)
hsl(from #123456 h s calc(l + 20))
hsl(from rgb(200 0 0) calc(h + 30) s calc(l + 30))

/* Alias historique 'hsla()' */
hsla(120deg 75% 25% / 60%)

/* Format historique */
hsl(120, 75%, 25%)
hsl(120deg, 75%, 25%, 0.8)
```

> [!NOTE]
> `hsl()`/`hsla()` peuvent aussi s'écrire dans une forme historique où toutes les valeurs sont séparées par des virgules, par exemple `hsl(120, 75%, 25%)` ou `hsla(120deg, 75%, 25%, 0.8)`. La valeur `none` n'est pas autorisée dans la syntaxe historique séparée par des virgules&nbsp;; le `deg` sur la valeur de teinte est optionnel, et les unités `%` sont obligatoires pour la saturation et la luminosité.

### Valeurs

Ci‑dessous se trouvent les descriptions des valeurs autorisées pour les couleurs à la fois absolues et [relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntaxe des valeurs absolues

```plain
hsl(H S L[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `H`
  - : Un {{CSSXref("&lt;number&gt;")}}, un {{CSSXref("&lt;angle&gt;")}} ou le mot‑clé `none` (équivalent à `0deg` dans ce cas)&nbsp;: représentant l'angle de {{CSSXref("&lt;hue&gt;")}} de la couleur.

    > [!NOTE]
    > Les angles correspondant à des teintes particulières, varient entre les espaces colorimétriques sRGB (utilisé par `hsl()` et {{CSSXref("color_value/hwb", "hwb()")}}), CIELAB (utilisé par {{CSSXref("color_value/lch", "lch()")}}) et Oklab (utilisé par {{CSSXref("color_value/oklch", "oklch()")}})&nbsp;: consultez la page de référence {{CSSXref("&lt;hue&gt;")}} pour des détails et des exemples.

- `S`
  - : Un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) ou le mot‑clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la saturation de la couleur. `100%` est complètement saturé, tandis que `0%` est complètement désaturé (gris).
- `L`
  - : Un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) ou le mot‑clé `none` (équivalent à `0%` dans ce cas). Cette valeur représente la luminosité de la couleur. `100%` correspond au blanc, `0%` au noir, et `50%` à la valeur « normale ».
- `A` {{optional_inline}}
  - : Un {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où `0` correspond à `0%` (entièrement transparent) et `1` correspond à `100%` (entièrement opaque). Le mot‑clé `none` peut également être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas précisée, elle vaut par défaut `100%`. Si elle est incluse, elle est précédée d'un slash (`/`).

> [!NOTE]
> Voir les [Composants de couleur manquants](/fr/docs/Web/CSS/Reference/Values/color_value#missing_color_components) pour plus d'informations sur l'effet de `none`.

> [!NOTE]
> Les couleurs absolues `hsl()` sont sérialisées en valeurs {{CSSXref("color_value/rgb", "rgb()")}}. Les valeurs des composantes rouge, verte et bleue peuvent être arrondies lors de la sérialisation.

#### Syntaxe des valeurs relatives

```plain
hsl(from <color> H S L[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `from <color>`
  - : Le mot‑clé `from` est toujours présent pour définir une couleur relative, suivi d'une valeur {{cssxref("&lt;color&gt;")}} représentant la couleur d'**origine**. Il s'agit de la couleur de départ sur laquelle se base la couleur relative. La couleur d'origine peut être _n'importe quelle_ syntaxe {{cssxref("&lt;color&gt;")}} valide, y compris une autre couleur relative.
- `H`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un {{CSSXref("&lt;angle&gt;")}} ou le mot‑clé `none` (équivalent à `0deg` dans ce cas) représentant l'angle de {{CSSXref("&lt;hue&gt;")}} de la couleur de sortie.
- `S`
  - : Un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) ou le mot‑clé `none` (équivalent à `0%` dans ce cas). Ceci représente la saturation de la couleur de sortie. `100%` est complètement saturé, tandis que `0%` est complètement désaturé (gris).
- `L`
  - : Un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) ou le mot‑clé `none` (équivalent à `0%` dans ce cas). Ceci représente la luminosité de la couleur de sortie. `100%` correspond au blanc, `0%` au noir, et `50%` à la valeur «&nbsp;normale&nbsp;».
- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur de sortie, où `0` correspond à `0%` (entièrement transparent) et `1` correspond à `100%` (entièrement opaque). Le mot‑clé `none` peut également être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas précisée, elle prend par défaut la valeur du canal alpha de la couleur d'origine. Si elle est incluse, elle est précédée d'un slash (`/`).

> [!NOTE]
> Pour permettre la représentation de l'ensemble du spectre des couleurs visibles, la sortie des fonctions de couleur relative `hsl()` est sérialisée en `color(srgb)`. Ainsi, l'obtention de la valeur de couleur via la propriété {{DOMxRef("HTMLElement.style")}} ou la méthode {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} renvoie la couleur de sortie sous la forme d'une valeur [`color(srgb ...)`](/fr/docs/Web/CSS/Reference/Values/color_value/color).

#### Définition des composantes de canal de sortie pour les couleurs relatives

Lorsqu'on utilise la syntaxe de couleur relative à l'intérieur d'une fonction `hsl()`, le navigateur convertit la couleur d'origine en une couleur HSL équivalente (si elle n'est pas déjà spécifiée ainsi). La couleur est définie par trois valeurs de canal distinctes — `h` (teinte), `s` (saturation) et `l` (luminosité) — plus une valeur de canal alpha (`alpha`). Ces valeurs de canal sont mises à disposition à l'intérieur de la fonction pour être utilisées lors de la définition des valeurs des canaux de la couleur de sortie&nbsp;:

- La valeur `h` est résolue en un nombre {{cssxref("&lt;number&gt;")}} compris entre `0` et `360`, qui représente la valeur en degrés de la {{cssxref("&lt;hue&gt;")}} de la couleur d'origine.
- Les valeurs `s` et `l` sont chacune résolues en un `<number>` entre `0` et `100`, inclus, où `100` équivaut à `100%`.
- La valeur `alpha` est résolue en un `<number>` entre `0` et `1`, inclus.

Lors de la définition d'une couleur relative, les différents canaux de la couleur de sortie peuvent être exprimés de plusieurs façons. Ci‑dessous, nous étudions quelques exemples pour illustrer ces cas.

Dans les deux premiers exemples ci‑dessous, nous utilisons la syntaxe de couleur relative. Toutefois, le premier renvoie la même couleur que la couleur d'origine et le second renvoie une couleur qui n'est pas du tout basée sur la couleur d'origine. Ils ne créent pas vraiment de couleurs relatives&nbsp;! Il est peu probable que vous utilisiez ces exemples dans un vrai projet, et vous utiliseriez vraisemblablement une valeur de couleur absolue à la place. Nous avons inclus ces exemples comme point de départ pour apprendre la syntaxe relative de `hsl()`.

Prenons comme couleur d'origine `rgb(255 0 0)` (équivalent à `hsl(0 100% 50%)`). La fonction suivante renvoie la même couleur que la couleur d'origine — elle utilise les valeurs de canal `h`, `s` et `l` de la couleur d'origine (`0`, `100%` et `50%`) comme valeurs de canal de sortie&nbsp;:

```css
hsl(from rgb(255 0 0) h s l)
```

La couleur de sortie de cette fonction est l'équivalent sRGB `color()` de `hsl(0 100% 50%)`&nbsp;: `color(srgb 1 0 0)`.

La fonction suivante utilise des valeurs absolues pour les valeurs des canaux de la couleur de sortie, produisant une couleur complètement différente, non basée sur la couleur d'origine&nbsp;:

```css
hsl(from rgb(255 0 0) 240 60% 70%)
```

Dans ce cas, la couleur de sortie est l'équivalent sRGB `color()` de `hsl(240 60% 70%)`&nbsp;: `color(srgb 0.52 0.52 0.88)`.

La fonction suivante crée une couleur relative basée sur la couleur d'origine&nbsp;:

```css
hsl(from rgb(255 0 0) h 30% 60%)
```

Cet exemple&nbsp;:

- Convertit la couleur d'origine (`rgb(255 0 0)`) en un équivalent `hsl()` (`hsl(0 100% 50%)`).
- Définit la valeur du canal `H` de la couleur de sortie sur la valeur du canal `H` de l'équivalent `hsl()` de la couleur d'origine — `0`.
- Définit les valeurs des canaux `S` et `L` de la couleur de sortie sur de nouvelles valeurs non basées sur la couleur d'origine&nbsp;: `30%` et `60%`, respectivement.

La couleur de sortie finale est l'équivalent de `hsl(0 30% 60%)` dans l'espace colorimétrique sRGB&nbsp;— `color(srgb 0.72 0.48 0.48)`.

> [!NOTE]
> Comme indiqué ci‑dessous, si la couleur de sortie utilise un modèle colorimétrique différent de la couleur d'origine, la couleur d'origine est convertie en arrière‑plan vers le même modèle que la couleur de sortie afin qu'elle puisse être représentée de manière compatible (c'est‑à‑dire en utilisant les mêmes canaux).

Dans les exemples vus jusqu'à présent dans cette section, les canaux alpha n'ont pas été explicitement définis pour la couleur d'origine ni pour la couleur de sortie. Lorsque le canal alpha de la couleur de sortie n'est pas précisé, il prend par défaut la même valeur que le canal alpha de la couleur d'origine. Lorsque le canal alpha de la couleur d'origine n'est pas précisé (et qu'il ne s'agit pas d'une couleur relative), il prend la valeur `1`. Par conséquent, les valeurs de canal alpha d'origine et de sortie valent `1` pour les exemples ci‑dessus.

Examinons maintenant des exemples qui précisent les valeurs des canaux alpha d'origine et de sortie. Le premier précise la valeur alpha de sortie comme étant la même que la valeur alpha de la couleur d'origine, tandis que le second précise une valeur alpha de sortie différente, non liée à la valeur alpha de la couleur d'origine.

```css
hsl(from rgb(255 0 0 / 0.8) h s l / alpha)
/* Couleur de sortie calculée : color(srgb 1 0 0 / 0.8) */

hsl(from rgb(255 0 0 / 0.8) h s l / 0.5)
/* Couleur de sortie calculée : color(srgb 1 0 0 / 0.5) */
```

Dans l'exemple suivant, la couleur d'origine `rgb()` est à nouveau convertie en une représentation `hsl()` — `hsl(0 100% 50% / 0.8)`. Des calculs {{cssxref("calc")}} sont appliqués aux valeurs `H`, `S`, `L` et `A`, et la couleur de sortie finale est l'équivalent de `hsl(60 80% 30% / 0.7)` dans l'espace colorimétrique sRGB&nbsp;: `color(srgb 0.72 0.72 0.08 / 0.7)`.

```css
hsl(from rgb(255 0 0 / 0.8) calc(h + 60) calc(s - 20) calc(l - 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Parce que les valeurs des canaux de la couleur d'origine sont résolues en valeurs `<number>`, vous devez ajouter des nombres lorsque vous les utilisez dans des calculs, même dans des cas où un canal accepterait normalement `<percentage>`, `<angle>` ou d'autres types de valeurs. Par exemple, ajouter un `<percentage>` à un `<number>` ne fonctionne pas.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `hsl()` avec `conic-gradient()`

La fonction `hsl()` fonctionne bien avec la fonction [`conic-gradient()`](/fr/docs/Web/CSS/Reference/Values/gradient/conic-gradient), les deux travaillant avec des angles.

```html hidden
<div></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360 100% 50%),
    hsl(315 100% 50%),
    hsl(270 100% 50%),
    hsl(225 100% 50%),
    hsl(180 100% 50%),
    hsl(135 100% 50%),
    hsl(90 100% 50%),
    hsl(45 100% 50%),
    hsl(0 100% 50%)
  );
  clip-path: circle(closest-side);
}
```

#### Résultat

{{EmbedLiveSample('utiliser_hsl_avec_conic-gradient', '100%', '140px')}}

### Utiliser les couleurs relatives avec `hsl()`

Cet exemple met en forme trois éléments {{htmlelement("div")}} avec des couleurs d'arrière-plan différentes. Celui du milieu reçoit la variable `--base-color` non modifiée, tandis que ceux de gauche et de droite reçoivent des variantes éclaircies et assombries de cette `--base-color`.

Ces variantes sont définies à l'aide de couleurs relatives — la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--base-color` est transmise à une fonction `hsl()`, et la couleur de sortie a son canal de luminosité modifié pour obtenir l'effet souhaité via une fonction `calc()`, tandis que la teinte et la saturation restent inchangées. La couleur éclaircie ajoute 20% au canal de luminosité, et la couleur assombrie soustrait 20% à ce canal.

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
  background-color: hsl(from var(--base-color) h s calc(l + 20));
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hsl(from var(--base-color) h s calc(l - 20));
}

/* Utiliser @supports pour ajouter la prise en charge de l'ancienne syntaxe qui exige que les unités %
  soient définies dans les calculs de luminosité */
@supports (color: hsl(from red h s calc(l - 20%))) {
  #one {
    background-color: hsl(from var(--base-color) h s calc(l + 20%));
  }

  #three {
    background-color: hsl(from var(--base-color) h s calc(l - 20%));
  }
}
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{ EmbedLiveSample("utiliser_les_couleurs_relatives_avec_hsl", "100%", "200") }}

### Syntaxe historique : valeurs séparées par des virgules

Pour des raisons de compatibilité, la fonction `hsl()` accepte une forme où toutes les valeurs sont séparées par des virgules.

#### HTML

```html
<div class="space-separated"></div>
<div class="comma-separated"></div>
```

#### CSS

```css
div {
  width: 100px;
  height: 50px;
  margin: 1rem;
}

div.space-separated {
  background-color: hsl(0 100% 50% / 50%);
}

div.comma-separated {
  background-color: hsl(0, 100%, 50%, 0.5);
}
```

#### Résultat

{{EmbedLiveSample("syntaxe_historique_valeurs_séparées_par_des_virgules", "100%", 150)}}

### Syntaxe historique versus syntaxe moderne

Cet exemple montre que la syntaxe `hsla()` est un alias de `hsl()`&nbsp;: les deux sont prises en charge avec la syntaxe moderne et l'ancienne syntaxe (séparée par des virgules).

#### HTML

```html
<div class="modern">HSL</div>
<div class="legacy">HSL</div>
<div class="modernWithAlpha">HSL</div>
<div class="modernHSLA">HSLA</div>
<div class="legacyHSLA">HSLA</div>
```

#### CSS

```css
div {
  width: 100px;
  min-height: 50px;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
body {
  display: flex;
  gap: 20px;
}
```

```css
div.modern {
  background-color: hsl(90 80% 50%);
}

div.legacy {
  background-color: hsl(90, 80%, 50%);
}

div.modernWithAlpha {
  background-color: hsl(90 80% 50% / 50%);
}

div.modernHSLA {
  background-color: hsla(90 80% 50% / 50%);
}

div.legacyHSLA {
  background-color: hsla(90, 80%, 50%, 0.5);
}
```

#### Résultat

{{EmbedLiveSample("syntaxe_historique_versus_syntaxe_moderne", "100%", 70)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSXref("&lt;hue&gt;")}}
- Les fonctions de couleur [`lch()`](/fr/docs/Web/CSS/Reference/Values/color_value/lch) et [`hwb()`](/fr/docs/Web/CSS/Reference/Values/color_value/hwb)
- [Interpolation de la teinte dans `color-mix()`](/fr/docs/Web/CSS/Reference/Values/color_value/color-mix#utiliser_linterpolation_de_teinte_avec_color-mix)
- [Liste de toutes les notations de couleur](/fr/docs/Web/CSS/Reference/Values/color_value)
- [Outil de conversion de format de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Utiliser les couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [Outil de sélection de couleur <sup>(angl.)</sup>](https://apps.colorjs.io/picker/) par Lea Verou
