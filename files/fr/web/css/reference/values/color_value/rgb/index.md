---
title: rgb()
slug: Web/CSS/Reference/Values/color_value/rgb
original_slug: Web/CSS/color_value/rgb
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

> [!NOTE]
> La notation fonctionnelle `rgba()` est un alias de `rgb()`. Elles sont strictement équivalentes. Il est recommandé d'utiliser `rgb()`.

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`rgb()`** exprime une couleur dans l'{{glossary("color space", "espace de couleur")}} {{glossary("RGB", "sRGB")}} selon ses composantes rouge, verte et bleue. Un composant alpha optionnel représente la transparence de la couleur.

{{InteractiveExample("Démonstration CSS&nbsp;: rgb()")}}

```css interactive-example-choice
background: rgb(31 120 50);
```

```css interactive-example-choice
background: rgb(30% 20% 50%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 80%);
```

```css interactive-example-choice
background: rgb(255 122 127 / 0.2);
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

## Syntaxe

```css
/* Valeurs absolues */
rgb(255 255 255)
rgb(255 255 255 / 50%)

/* Valeurs relatives */
rgb(from green r g b / 0.5)
rgb(from #123456 calc(r + 40) calc(g + 40) b)
rgb(from hwb(120deg 10% 20%) r g calc(b + 200))

/* Alias 'rgba()' hérité */
rgba(0 255 255)

/* Format hérité */
rgb(0, 255, 255)
rgb(0, 255, 255, 50%)
```

> [!NOTE]
> Pour des raisons de compatibilité, les valeurs de couleur sérialisées par l'[API Web](/fr/docs/Web/API/Window/getComputedStyle) sont exprimées sous forme de couleurs `rgb()` si la valeur du canal alpha est exactement 1, et de couleurs `rgba()` sinon. Dans les deux cas, la syntaxe héritée est utilisée, avec des virgules comme séparateurs (par exemple `rgb(255, 0, 0)`).

### Valeurs

Vous trouverez ci-dessous les descriptions des valeurs autorisées pour les [couleurs absolues et relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntaxe des valeurs absolues

```plain
rgb(R G B[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `R`, `G`, `B`
  - : Chaque valeur peut être un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `255`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Ces valeurs représentent respectivement les canaux rouge, vert et bleu.
- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où le nombre `0` correspond à `0%` (complètement transparent) et `1` correspond à `100%` (complètement opaque). De plus, le mot-clé `none` peut être utilisé pour définir explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas définie explicitement, elle vaut par défaut 100%. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Voir [Composants de couleur manquants](/fr/docs/Web/CSS/Reference/Values/color_value#composants_de_couleur_manquants) pour plus d'informations sur l'effet de `none`.

#### Syntaxe des valeurs relatives

```plain
rgb(from <color> R G B[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `from <color>`
  - : Le mot-clé `from` est toujours inclus lors de la définition d'une couleur relative, suivi d'une valeur {{cssxref("&lt;color&gt;")}} représentant la **couleur d'origine**&nbsp;: il s'agit de la couleur originale sur laquelle la couleur relative est basée. La couleur d'origine peut être _n'importe quelle_ syntaxe {{cssxref("&lt;color&gt;")}} valide, y compris une autre couleur relative.
- `R`, `G`, `B`
  - : Chaque valeur peut être un nombre ({{CSSXref("&lt;number&gt;")}}) entre `0` et `255`, un pourcentage ({{CSSXref("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` (équivalent à `0%` dans ce cas). Ces valeurs représentent respectivement les canaux rouge, vert et bleu de la couleur de sortie.
- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur de sortie, où le nombre `0` correspond à `0%` (complètement transparent) et `1` correspond à `100%` (complètement opaque). De plus, le mot-clé `none` peut être utilisé pour définir explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas définie explicitement, elle prend par défaut la valeur du canal alpha de la couleur d'origine. Si elle est incluse, la valeur est précédée d'une barre oblique (`/`).

> [!NOTE]
> Pour permettre la représentation complète du spectre visible, la sortie des fonctions de couleur relative `rgb()` est sérialisée en `color(srgb)`. Cela signifie qu'interroger la valeur de couleur de sortie via la propriété {{DOMxRef("HTMLElement.style")}} ou la méthode {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} retourne la couleur sous la forme [`color(srgb ...)`](/fr/docs/Web/CSS/Reference/Values/color_value/color).

#### Définition des composants de canal de couleur de sortie relative

Lors de l'utilisation de la syntaxe de couleur relative dans une fonction `rgb()`, le navigateur convertit la couleur d'origine en une couleur RGB équivalente (si elle n'est pas déjà définie comme telle). La couleur est définie comme trois valeurs distinctes de canal de couleur — `r` (rouge), `g` (vert), et `b` (bleu) — plus une valeur de canal alpha (`alpha`). Ces valeurs de canal sont rendues disponibles dans la fonction pour être utilisées lors de la définition des valeurs de canal de couleur de sortie&nbsp;:

- Les valeurs `r`, `g` et `b` sont chacune résolues en `<number>` entre `0` et `255`, inclus.
- Le canal `alpha` est résolu en un `<number>` entre `0` et `1`, inclus.

Lors de la définition d'une couleur relative, les différents canaux de la couleur de sortie peuvent être exprimés de plusieurs façons différentes. Ci-dessous, nous étudierons quelques exemples pour illustrer cela.

Dans les deux premiers exemples ci-dessous, nous utilisons la syntaxe de couleur relative. Cependant, le premier produit la même couleur que la couleur d'origine et le second produit une couleur qui n'est pas du tout basée sur la couleur d'origine. Ils ne créent pas vraiment de couleurs relatives&nbsp;! Vous seriez peu susceptible d'utiliser cela dans une vraie base de code, et utiliseriez probablement simplement une valeur de couleur absolue à la place. Nous avons inclus ces exemples comme point de départ pour apprendre la syntaxe relative `rgb()`.

Commençons par une couleur d'origine de `hsl(0 100% 50%)` (équivalent à `rgb(255 0 0)`). La fonction suivante produit la même couleur que la couleur d'origine — elle utilise les valeurs de canal `r`, `g` et `b` de la couleur d'origine (`255`, `0` et `0`) comme valeurs de canal de sortie&nbsp;:

```css
rgb(from hsl(0 100% 50%) r g b)
```

La couleur de sortie de cette fonction est l'équivalent sRGB `color()` de `rgb(255 0 0)`&nbsp;: `color(srgb 1 0 0)`.

La fonction suivante utilise des valeurs absolues pour les canaux de la couleur de sortie, produisant une couleur complètement différente non basée sur la couleur d'origine&nbsp;:

```css
rgb(from hsl(0 100% 50%) 132 132 224)
```

Dans le cas ci-dessus, la couleur de sortie est l'équivalent sRGB `color()` de `rgb(132 132 224)`&nbsp;: `color(srgb 0.517647 0.517647 0.878431)`.

La fonction suivante crée une couleur relative basée sur la couleur d'origine&nbsp;:

```css
rgb(from hsl(0 100% 50%) r 80 80)
```

Cet exemple&nbsp;:

- Convertit la couleur d'origine (`hsl(0 100% 50%)`) en une couleur `rgb()` équivalente (`rgb(255 0 0)`).
- Définit la valeur du canal `R` pour la couleur de sortie à celle de la valeur du canal `R` de l'équivalent `rgb()` d'origine — `255`.
- Définit les valeurs des canaux `G` et `B` de la couleur de sortie à de nouvelles valeurs non basées sur la couleur d'origine&nbsp;: `80` et `80` respectivement.

La couleur de sortie finale est l'équivalent de `rgb(255 80 80)` dans l'espace colorimétrique sRGB — `color(srgb 1 0.313726 0.313726)`.

> [!NOTE]
> Comme mentionné ci-dessus, si la couleur de sortie utilise un modèle de couleur différent de la couleur d'origine, la couleur d'origine est convertie au même modèle ou espace que la couleur de sortie en arrière-plan afin qu'elle puisse être représentée d'une manière compatible (c'est-à-dire, en utilisant les mêmes canaux).

Dans les exemples que nous avons vus jusqu'à présent dans cette section, les canaux alpha n'ont pas été explicitement définis pour les couleurs d'origine ou de sortie. Lorsque le canal alpha de la couleur de sortie n'est pas défini, il prend par défaut la même valeur que le canal alpha de la couleur d'origine. Lorsque le canal alpha de la couleur d'origine n'est pas défini (et qu'il ne s'agit pas d'une couleur relative), il vaut par défaut `1`. Par conséquent, les valeurs de canal alpha d'origine et de sortie sont `1` pour les exemples ci-dessus.

Examinons quelques exemples qui définissent les valeurs de canal alpha d'origine et de sortie. Le premier définit la valeur du canal alpha de sortie comme étant la même que la valeur du canal alpha d'origine, tandis que le second définit une valeur de canal alpha de sortie différente, non liée à la valeur du canal alpha d'origine.

```css
rgb(from hsl(0 100% 50% / 0.8) r g b / alpha)
/* Computed output color: color(srgb 1 0 0 / 0.8) */

rgb(from hsl(0 100% 50% / 0.8) r g b / 0.5)
/* Computed output color: color(srgb 1 0 0 / 0.5) */
```

Dans l'exemple suivant, la couleur d'origine `hsl()` est à nouveau convertie en représentation `rgb()` — `rgb(255 0 0)`. Des calculs {{cssxref("calc")}} sont appliqués aux valeurs `R`, `G`, `B` et `A`. Après calcul, les valeurs R, G, B et A sont respectivement `127.5`, `25`, `175` et `0.9`. La couleur de sortie finale est l'équivalent de `rgb(127.5 25 175 / 0.9)` dans l'espace colorimétrique sRGB&nbsp;: `color(srgb 0.5 0.0980392 0.686275 / 0.9)`.

```css
rgb(from hsl(0 100% 50%) calc(r/2) calc(g + 25) calc(b + 175) / calc(alpha - 0.1))
```

> [!NOTE]
> Étant donné que les valeurs de canal de couleur d'origine sont résolues en valeurs `<number>`, vous devez leur ajouter des nombres lors de leur utilisation dans des calculs, même dans les cas où un canal accepterait normalement `<percentage>`, `<angle>`, ou d'autres types de valeurs. Ajouter un `<percentage>` à un `<number>`, par exemple, ne fonctionne pas.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Syntaxe de base

Dans cet exemple, nous avons trois éléments {{htmlelement("div")}} avec différentes couleurs d'arrière-plan affichées sur un fond rayé.

#### HTML

```html
<div>
  <div id="integer"></div>
  <div id="percent"></div>
  <div id="alpha"></div>
</div>
```

#### CSS

Les couleurs d'arrière-plan sont définies à l'aide de la fonction de couleur `rgb()`. Les trois couleurs sont identiques. La troisième est semi-transparente, donc nous avons inclus un {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} sur le {{htmlelement("body")}} pour mieux démontrer la transparence des canaux alpha.

```css hidden
div {
  display: flex;
  gap: 20px;
  height: 50px;
  flex: 1;
}
body {
  height: calc(100vh - 20px);
}
```

```css
body {
  background: repeating-linear-gradient(-45deg, #eeeeee 0 2px, white 2px 6px);
  padding: 10px;
}

#integer {
  background-color: rgb(189 85 218);
}

#percent {
  background-color: rgb(74% 33% 85%);
}

#alpha {
  background-color: rgb(189 85 218 / 0.25);
}
```

#### Résultat

{{ EmbedLiveSample("Syntaxe de base", "100%", "75") }}

### Utilisation des couleurs relatives avec `rgb()`

Cet exemple met en forme trois éléments {{htmlelement("div")}} avec différentes couleurs d'arrière-plan. Celui de gauche reçoit la `--base-color` non modifiée, tandis que les deux autres reçoivent des variantes de cette `--base-color` qui retirent progressivement du rouge et ajoutent du bleu.

Ces variantes sont définies en utilisant des couleurs relatives — la [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) `--base-color` est passée dans une fonction `rgb()`, et la couleur de sortie a ses canaux rouge et bleu modifiés pour obtenir l'effet désiré via des fonctions `calc()`, tandis que le canal vert reste inchangé.

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
  /* equal to rgb(255 165 0) */
}

#one {
  background-color: var(--base-color);
}

#two {
  background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
  /* 76.5 is 30% of 255 */
}

#three {
  background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
  /* 153 is 60% of 255 */
}

/* Use @supports to add in support for old syntax that requires r g b values to
   be specified as percentages (with units) in calculations. This is required
   for Safari 16.4+. */
@supports (color: rgb(from red r g calc(b + 30%))) {
  #two {
    background-color: rgb(from var(--base-color) calc(r - 30%) g calc(b + 30%));
  }

  #three {
    background-color: rgb(from var(--base-color) calc(r - 60%) g calc(b + 60%));
  }
}
```

#### Résultat

{{ EmbedLiveSample("Utilisation des couleurs relatives avec `rgb()`", "100%", "200") }}

### Syntaxe héritée : valeurs séparées par des virgules

Pour des raisons de compatibilité, la fonction `rgb()` accepte une forme où toutes les valeurs sont séparées par des virgules.

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
  background-color: rgb(255 0 0 / 50%);
}

div.comma-separated {
  background-color: rgb(255, 0, 0, 0.5);
}
```

#### Résultat

{{EmbedLiveSample('Syntaxe héritée : valeurs séparées par des virgules', '100%', '150px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de données {{CSSXref("&lt;color&gt;")}} pour une liste de toutes les notations de couleur
- [Outil de conversion de format de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Utilisation des couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
