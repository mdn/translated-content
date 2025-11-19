---
title: hwb()
slug: Web/CSS/Reference/Values/color_value/hwb
original_slug: Web/CSS/color_value/hwb
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`hwb()`** exprime un {{glossary("color space", "espace de couleur")}} {{glossary("RGB", "sRGB")}} donné selon sa teinte, sa blancheur et sa noirceur. Une composante alpha optionnelle représente l'opacité de la couleur.

{{InteractiveExample("Démonstration CSS&nbsp;: hwb()")}}

```css interactive-example-choice
background: hwb(12 50% 0%);
```

```css interactive-example-choice
background: hwb(50deg 30% 40%);
```

```css interactive-example-choice
background: hwb(0.5turn 10% 0% / 0.5);
```

```css interactive-example-choice
background: hwb(0 100% 0% / 50%);
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

## Description

Cette fonction de couleur dans l'[espace colorimétrique `sRGB`](/fr/docs/Glossary/Color_space#srgb) est définie par une valeur d'angle {{CSSXref("&lt;hue&gt;")}}, une valeur de blancheur, une valeur de noirceur et, optionnellement, une valeur alpha représentant la transparence de la couleur.

Les angles correspondant à des teintes particulières diffèrent selon les espaces colorimétriques sRGB (utilisé par {{CSSXref("color_value/hsl", "hsl()")}} et `hwb()`), CIELAB (utilisé par {{CSSXref("color_value/lch", "lch()")}}) et Oklab (utilisé par {{CSSXref("color_value/oklch", "oklch()")}}). `hwb()` est dans le même espace colorimétrique que `hsl()`, et a donc les mêmes angles de teinte. Consultez la page de référence {{CSSXref("&lt;hue&gt;")}} pour plus de détails et d'exemples, ou essayez de modifier les teintes sur le [sélecteur de couleur](/fr/docs/Web/CSS/Guides/Colors#colors_in_action) pour voir le résultat.

Une couleur `hwb()` est complètement saturée lorsque ses valeurs de blancheur (`W`) et de noirceur (`B`) sont toutes deux à `0`. Pour toute valeur de teinte `H`, `hwb(H 0% 0%)` correspond à la même couleur que `hsl(H 100% 50%)`. Augmenter la valeur de blancheur éclaircit la couleur. Augmenter la noirceur assombrit la couleur.

Lorsque la noirceur et la blancheur sont toutes deux supérieures à 0, la couleur devient atténuée, tendant vers le gris. Lorsque la somme de la blancheur et de la noirceur ajoutées est égale ou supérieure à 100% — autrement dit, si `W + B >= 100%`, la fonction de couleur définit une nuance de gris. Lorsque la somme des deux valeurs est supérieure à 100% (`W + B > 100%`), les valeurs de blancheur et de noirceur du gris sont effectivement normalisées comme `W / (W + B)` et `B / (W + B)` respectivement.

## Syntaxe

```css
/* Valeurs absolues */
hwb(194 0% 0%)
hwb(194 0% 0% / .5)

/* Valeurs relatives */
hwb(from green h w b / 0.5)
hwb(from #123456 h calc(w + 30) b)
hwb(from lch(40% 70 240deg) h w calc(b - 30))
```

## Valeurs

Vous trouverez ci-dessous la description des valeurs autorisées pour les couleurs absolues et les [couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors).

### Syntaxe des valeurs absolues

```plain
hwb(H W B[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `H`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un {{CSSXref("&lt;angle&gt;")}} ou le mot-clé `none` (équivalent à `0deg` dans ce cas) représentant l'angle de {{CSSXref("&lt;hue&gt;")}} de la couleur.

- `W`
  - : Un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) représentant la blancheur de la couleur ou le mot-clé `none` (équivalent à `0%` dans ce cas) à mélanger. `0%` signifie aucune blancheur. `100%` signifie blancheur totale si `B` vaut `0`, sinon les valeurs de `W` et `B` sont normalisées.

- `B`
  - : Un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) représentant la noirceur de la couleur ou le mot-clé `none` (équivalent à `0%` dans ce cas) à mélanger. `0%` signifie aucune noirceur. `100%` signifie noirceur totale si `W` vaut `0`, sinon les valeurs de `W` et `B` sont normalisées.

- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où le nombre `0` correspond à `0%` (totalement transparent) et `1` à `100%` (totalement opaque). De plus, le mot-clé `none` peut être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas explicitement spécifiée, elle vaut par défaut 100&nbsp;%. Si elle est présente, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Voir [Composants de couleur manquants](/fr/docs/Web/CSS/Reference/Values/color_value#composants_de_couleur_manquants) pour plus d'informations sur l'effet de `none`.

> [!NOTE]
> Les couleurs absolues `hwb()` sont sérialisées en valeurs {{CSSXref("color_value/rgb", "rgb()")}}. Les valeurs des composantes rouge, verte et bleue peuvent être arrondies lors de la sérialisation.

### Syntaxe des valeurs relatives

```plain
hwb(from <color> H W B[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `from <color>`
  - : Le mot-clé `from` est toujours inclus lors de la définition d'une couleur relative, suivi d'une valeur {{cssxref("&lt;color&gt;")}} représentant la **couleur d'origine**. Il s'agit de la couleur originale sur laquelle la couleur relative est basée. La couleur d'origine peut être _n'importe quelle_ syntaxe {{cssxref("&lt;color&gt;")}} valide, y compris une autre couleur relative.

- `H`
  - : Un nombre ({{CSSXref("&lt;number&gt;")}}), un pourcentage ({{CSSXref("&lt;angle&gt;")}}) ou le mot-clé `none` (équivalent à `0deg` dans ce cas) représentant l'angle de {{CSSXref("&lt;hue&gt;")}} de la couleur de sortie.

- `W`
  - : Un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) représentant la blancheur de la couleur ou le mot-clé `none` (équivalent à `0%` dans ce cas) à mélanger. `0%` signifie aucune blancheur. `100%` signifie blancheur totale si `B` vaut `0`, sinon les valeurs de `W` et `B` sont normalisées.

- `B`
  - : Un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) représentant la noirceur de la couleur ou le mot-clé `none` (équivalent à `0%` dans ce cas) à mélanger. `0%` signifie aucune noirceur. `100%` signifie noirceur totale si `W` vaut `0`, sinon les valeurs de `W` et `B` sont normalisées.

- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur de sortie, où le nombre `0` correspond à `0%` (totalement transparent) et `1` à `100%` (totalement opaque). De plus, le mot-clé `none` peut être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas explicitement spécifiée, elle prend par défaut la valeur du canal alpha de la couleur d'origine. Si elle est présente, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Pour permettre la représentation complète de tout le spectre des couleurs visibles, la sortie des fonctions de couleur relatives `hwb()` est sérialisée en `color(srgb)`. Cela signifie que la consultation de la valeur de couleur de sortie via la propriété {{DOMxRef("HTMLElement.style")}} ou la méthode {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} retourne la couleur de sortie sous forme de valeur [`color(srgb ...)`](/fr/docs/Web/CSS/Reference/Values/color_value/color).

### Définition des composants de canal de sortie des couleurs relatives

Lors de l'utilisation de la syntaxe de couleur relative dans une fonction `hwb()`, le navigateur convertit la couleur d'origine en couleur HWB équivalente (si elle n'est pas déjà spécifiée comme telle). La couleur est définie comme trois valeurs de canal de couleur distinctes — `h` (teinte), `w` (blanc) et `b` (noir) — plus une valeur de canal alpha (`alpha`). Ces valeurs de canal sont mises à disposition dans la fonction pour être utilisées lors de la définition des valeurs de canal de couleur de sortie&nbsp;:

- La valeur de canal `h` est résolue en une valeur `<number>` entre `0` et `360`, inclus.
- Les canaux `w` et `b` sont chacun résolus en une valeur `<number>` entre `0` et `100`, inclus.
- Le canal `alpha` est résolu en une valeur `<number>` entre `0` et `1`, inclus.

Lors de la définition d'une couleur relative, les différents canaux de la couleur de sortie peuvent être exprimés de plusieurs façons différentes. Ci-dessous, nous allons étudier quelques exemples pour illustrer ceci.

Dans les deux premiers exemples ci-dessous, nous utilisons la syntaxe de couleur relative. Cependant, le premier produit la même couleur que la couleur d'origine et le second produit une couleur qui n'est pas du tout basée sur la couleur d'origine. Ils ne créent pas vraiment de couleurs relatives&nbsp;! Il est peu probable que vous les utilisiez dans du vrai code, et vous utiliseriez plutôt une valeur de couleur absolue. Nous avons inclus ces exemples comme point de départ pour apprendre la syntaxe `hwb()` relative.

Commençons par une couleur d'origine `hsl(0 100% 50%)` (équivalente à `hwb(0 0% 0%)`). La fonction suivante produit la même couleur que la couleur d'origine — elle utilise les valeurs de canal `h`, `w` et `b` de la couleur d'origine (`0`, `0%` et `0%`) comme valeurs de canal de sortie&nbsp;:

```css
hwb(from hsl(0 100% 50%) h w b)
```

La couleur de sortie de cette fonction est l'équivalent sRGB `color()` de `hwb(0 0% 0%)`&nbsp;: `color(srgb 1 0 0)`.

La fonction suivante utilise des valeurs absolues pour les valeurs de canal de la couleur de sortie, produisant une couleur complètement différente, non basée sur la couleur d'origine&nbsp;:

```css
hwb(from hsl(0 100% 50%) 240 52% 12%)
```

Dans le cas ci-dessus, la couleur de sortie est l'équivalent sRGB `color()` de `hwb(240 52% 12%)`&nbsp;: `color(srgb 0.52 0.52 0.88)`.

La fonction suivante crée une couleur relative, basée sur la couleur d'origine&nbsp;:

```css
hwb(from hsl(0 100% 50%) h 30% b)
```

Cet exemple&nbsp;:

- Convertit la couleur d'origine (`hsl(0 100% 50%)`) en équivalent `hwb()` (`hwb(0 0% 0%)`).
- Définit les valeurs de canal `H` et `B` pour la couleur de sortie à celles des valeurs de canal `H` et `B` de l'équivalent `hwb()` de la couleur d'origine — ces valeurs sont `0` et `0%`, respectivement.
- Définit la valeur de canal `W` de la couleur de sortie à une nouvelle valeur non basée sur la couleur d'origine&nbsp;: `30%`.

La couleur de sortie finale est l'équivalent de `hwb(0 30% 0%)` dans l'espace de couleur sRGB — `color(srgb 1 0.3 0.3)`.

> [!NOTE]
> Comme mentionné ci-dessus, si la couleur de sortie utilise un modèle de couleur différent de la couleur d'origine, la couleur d'origine est convertie vers le même modèle ou espace que la couleur de sortie en arrière-plan afin qu'elle puisse être représentée de manière compatible (c'est-à-dire en utilisant les mêmes canaux).

Dans les exemples que nous avons vus jusqu'à présent dans cette section, les canaux alpha n'ont pas été explicitement définis pour les couleurs d'origine ou de sortie. Lorsque le canal alpha de la couleur de sortie n'est pas défini, il prend par défaut la même valeur que le canal alpha de la couleur d'origine. Lorsque le canal alpha de la couleur d'origine n'est pas défini (et qu'il ne s'agit pas d'une couleur relative), il prend par défaut la valeur `1`. Par conséquent, les valeurs de canal alpha d'origine et de sortie sont `1` pour les exemples ci-dessus.

Regardons quelques exemples qui définissent les valeurs de canal alpha d'origine et de sortie. Le premier définit que la valeur de canal alpha de sortie est la même que la valeur de canal alpha d'origine, tandis que le second définit une valeur de canal alpha de sortie différente, non liée à la valeur de canal alpha d'origine.

```css
hwb(from hsl(0 100% 50% / 0.8) h w b / alpha)
/* Couleur de sortie calculée: color(srgb 1 0 0 / 0.8) */

hwb(from hsl(0 100% 50% / 0.8) h w b / 0.5)
/* Couleur de sortie calculée: color(srgb 1 0 0 / 0.5) */
```

Dans l'exemple suivant, la couleur d'origine `hsl()` est à nouveau convertie en représentation `hwb()` — `hwb(0 0% 0%)`. Des calculs {{cssxref("calc")}} sont appliqués aux valeurs `H`, `W`, `B` et `A`, et la couleur de sortie finale est l'équivalent de `hwb(120 25% 10% / 0.9` dans l'espace de couleur sRGB&nbsp;: `color(srgb 0.25 0.9 0.25 / 0.9)`.

```css
hwb(from hsl(0 100% 50%) calc(h + 120) calc(w + 25) calc(b + 10) / calc(alpha - 0.1))
```

> [!NOTE]
> Parce que les valeurs de canal de couleur d'origine sont résolues en valeurs `<number>`, vous devez leur ajouter des nombres lors de leur utilisation dans des calculs, même dans les cas où un canal accepterait normalement des valeurs `<percentage>`, `<angle>` ou d'autres types de valeurs. Ajouter un `<percentage>` à un `<number>`, par exemple, ne fonctionne pas.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Utilisation des couleurs relatives avec `hwb()`

Cet exemple met en forme trois éléments HTML {{HTMLElement("div")}} avec des couleurs d'arrière-plan différentes. Celui du milieu reçoit la `--base-color` non modifiée, tandis que ceux de gauche et de droite reçoivent des variantes éclaircie et assombrie de cette `--base-color`.

Ces variantes sont définies en utilisant des couleurs relatives — la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--base-color` est passée dans une fonction `hwb()`, et les couleurs de sortie ont leurs canaux blanc et noir modifiés pour obtenir l'effet souhaité via une fonction `calc()`. La couleur éclaircie a 30% ajoutés au canal blanc, et la couleur assombrie a 30% ajoutés au canal noir.

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

/* Selon la spécification, les valeurs w et b devraient être résolues en un
   nombre entre 0-100.
   Cependant, Chrome 121+ les résout incorrectement en nombres entre 0- d'où
   l'utilisation actuelle de calculs comme w + 0.3 au lieu de w + 30 */

#one {
  background-color: hwb(from var(--base-color) h calc(w + 0.3) b);
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: hwb(from var(--base-color) h w calc(b + 0.3));
}

/* Utilise @supports pour ajouter la prise en charge de l'ancienne syntaxe
   qui nécessite que les unités % soient définies dans les calculs w et b.
   Ceci est requis pour Safari 16.4+. */
@supports (color: hwb(from red h w calc(b + 30%))) {
  #one {
    background-color: hwb(from var(--base-color) h calc(w + 30%) b);
  }

  #three {
    background-color: hwb(from var(--base-color) h w calc(b + 30%));
  }
}
```

#### Résultat

La sortie est la suivante&nbsp;:

{{ EmbedLiveSample("Utilisation des couleurs relatives avec `hwb()`", "100%", "200") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSXref("&lt;color&gt;")}}&nbsp;: Pour une liste de toutes les notations de couleur
- [Outil de conversion de format de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Utiliser les couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- [Module Couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- {{CSSXref("&lt;hue&gt;")}}&nbsp;: le type de donnée représentant un angle de teinte d'une couleur
