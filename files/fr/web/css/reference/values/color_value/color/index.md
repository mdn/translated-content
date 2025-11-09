---
title: color()
slug: Web/CSS/Reference/Values/color_value/color
original_slug: Web/CSS/color_value/color
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`color()`** permet de définir une couleur dans un {{Glossary("color space", "espace colorimétrique")}} particulier, au lieu de l'espace colorimétrique sRGB implicite utilisé par la plupart des autres fonctions de couleur.

Vous pouvez détecter la prise en charge d'un espace colorimétrique particulier avec la fonctionnalité média CSS [`color-gamut`](/fr/docs/Web/CSS/Reference/At-rules/@media/color-gamut).

## Syntaxe

```css
/* Valeurs absolues */
color(display-p3 1 0.5 0);
color(display-p3 1 0.5 0 / .5);

/* Valeurs relatives */
color(from green srgb r g b / 0.5)
color(from #123456 xyz calc(x + 0.75) y calc(z - 0.35))
```

### Valeurs

Vous trouverez ci-dessous la description des valeurs autorisées pour les couleurs absolues et [relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors).

#### Syntaxe de valeur absolue

```plain
color(colorspace c1 c2 c3[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `colorspace`
  - : Un {{CSSXref("&lt;ident&gt;")}} indiquant un des espaces colorimétriques prédéfinis&nbsp;: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` ou `xyz-d65`.

- `c1`, `c2`, `c3`
  - : Chaque valeur peut être écrite comme un nombre ({{CSSXref("number")}}), un pourcentage ({{CSSXref("percentage")}}), ou le mot-clé `none` (équivalent à `0` dans ce cas). Ces valeurs représentent les composantes pour l'espace colorimétrique. Avec une valeur `<number>`, généralement, `0` à `1` représente les bornes de l'espace colorimétrique. Les valeurs hors de cette plage sont autorisées mais seront hors du {{Glossary("gamut")}} de l'espace colorimétrique donné. Avec une valeur en pourcentage, `100%` représente `1` et `0%` représente `0`.

- `A` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où le nombre `0` correspond à `0%` (totalement transparent) et `1` à `100%` (totalement opaque). Le mot-clé `none` peut aussi être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas précisée, elle vaut par défaut 100%. Si elle est présente, elle est précédée d'un slash (`/`).

> [!NOTE]
> Voir les [Composantes de couleur manquantes](#composantes_de_couleur_manquantes) pour plus d'informations sur l'effet de `none`.

#### Syntaxe de valeur relative

```plain
color(from <color> colorspace c1 c2 c3[ / A])
```

Les paramètres sont les suivants&nbsp;:

- `from <color>`
  - : Le mot-clé `from` est toujours présent lors de la définition d'une couleur relative, suivi d'une valeur {{cssxref("&lt;color&gt;")}} représentant la **couleur d'origine**. Il s'agit de la couleur de base sur laquelle la couleur relative est fondée. La couleur d'origine peut être n'importe quelle syntaxe {{cssxref("&lt;color&gt;")}} valide, y compris une autre couleur relative.
- `colorspace`
  - : Un {{CSSXref("&lt;ident&gt;")}} indiquant l'{{Glossary("color space", "espace colorimétrique")}} de la couleur de sortie, généralement un des espaces prédéfinis&nbsp;: `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz`, `xyz-d50` ou `xyz-d65`.
- `c1`, `c2`, `c3`
  - : Chaque valeur peut être écrite comme un nombre ({{CSSXref("number")}}), un pourcentage ({{CSSXref("percentage")}}), ou le mot-clé `none` (équivalent à `0` dans ce cas). Ces valeurs représentent les composantes de la couleur de sortie. Avec une valeur `<number>`, généralement `0` à `1` représente les bornes de l'espace colorimétrique. Les valeurs hors de cette plage sont autorisées mais seront hors du {{Glossary("gamut")}} de l'espace colorimétrique donné. Avec une valeur en pourcentage, `100%` représente `1` et `0%` représente `0`.
- `A` {{optional_inline}}
  - : Un {{CSSXref("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur de sortie, où `0` correspond à `0%` (totalement transparent) et `1` à `100%` (totalement opaque). Le mot-clé `none` peut aussi être utilisé pour indiquer explicitement l'absence de canal alpha. Si la valeur du canal `A` n'est pas précisée, elle prend la valeur du canal alpha de la couleur d'origine. Si elle est présente, elle est précédée d'un slash (`/`).

#### Définir les composantes de sortie d'une couleur relative

Quand vous utilisez la syntaxe relative dans `color()`, le navigateur convertit la couleur d'origine dans l'espace colorimétrique définit (si ce n'est pas déjà le cas). La couleur est définie par trois valeurs de canaux de couleur distincts plus une valeur de canal alpha (`alpha`). Ces valeurs sont disponibles dans la fonction pour définir les composantes de la couleur de sortie&nbsp;:

- Les trois valeurs de canaux de la couleur d'origine sont résolues en `<number>`. Selon l'espace colorimétrique, elles seront&nbsp;:
  - `r`, `g`, `b`&nbsp;: pour les espaces colorimétriques RGB (`srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`)
  - `x`, `y`, `z`&nbsp;: pour les espaces XYZ (`xyz`, `xyz-d50`, `xyz-d65`)

    > [!NOTE]
    > Ces valeurs sont généralement comprises entre `0` et `1` mais peuvent être hors de cette plage.

    > [!NOTE]
    > Référencer `r`, `g`, `b` dans un espace XYZ, ou `x`, `y`, `z` dans un espace RGB, ou tout autre caractère, est invalide. Les canaux disponibles doivent correspondre au type d'espace colorimétrique définit.

- `alpha`&nbsp;: la valeur de transparence, résolue en `<number>` entre `0` et `1` inclus.

Pour définir une couleur relative, les différents canaux de la couleur de sortie peuvent être exprimés de plusieurs façons. Voici quelques exemples&nbsp;:

Dans les deux premiers exemples ci-dessous, nous utilisons la syntaxe de couleur relative. Cependant, le premier retourne la même couleur que la couleur d'origine et le second retourne une couleur qui n'est pas basée sur la couleur d'origine. Ils ne créent pas vraiment de couleurs relatives ! Il est peu probable que vous utilisiez ces exemples dans une base de code réelle, et vous utiliseriez probablement simplement une valeur de couleur absolue à la place. Nous avons inclus ces exemples comme point de départ pour apprendre la syntaxe relative de `color()`.

Commençons avec une couleur d'origine `hsl(0 100% 50%)` (équivalent à `red`). Bien qu'il soit peu probable que vous écriviez les fonctions suivantes car elles retournent la même couleur que la couleur d'origine, cela montre comment utiliser les valeurs de canal de la couleur d'origine comme valeurs de canal de sortie&nbsp;:

```css
color(from hsl(0 100% 50%) srgb r g b)
color(from hsl(0 100% 50%) xyz x y z)
```

Les couleurs de sortie de ces fonctions sont respectivement `color(srgb 1 0 0)` et `color(xyz-d65 0.412426 0.212648 0.0193173)`.

Les fonctions suivantes utilisent des valeurs absolues pour les canaux de sortie, produisant des couleurs différentes de la couleur d'origine&nbsp;:

```css
color(from hsl(0 100% 50%) srgb 0.749938 0 0.609579)
/* Couleur calculée : color(srgb 0.749938 0 0.609579) */

color(from hsl(0 100% 50%) xyz 0.75 0.6554 0.1)
/* Couleur calculée : color(xyz-d65 0.75 0.6554 0.1) */
```

Les fonctions suivantes utilisent deux des valeurs de canal de couleur d'origine pour les valeurs de canal de couleur de sortie (`r` et `b`, et `x` et `y`, respectivement), mais utilisent une nouvelle valeur pour l'autre valeur de canal de sortie (`g` et `z`, respectivement), créant une couleur relative basée sur la couleur d'origine dans chaque cas&nbsp;:

```css
color(from hsl(0 100% 50%) srgb r 1 b)
/* Couleur calculée : color(srgb 1 1 0) */

color(from hsl(0 100% 50%) xyz x y 0.5)
/* Couleur calculée : color(xyz-d65 0.412426 0.212648 0.5) */
```

> [!NOTE]
> Si le modèle de couleur de sortie diffère de celui de la couleur d'origine, la couleur d'origine est convertie en interne pour correspondre au modèle de sortie (mêmes canaux). Par exemple, la couleur {{cssxref("color_value/hsl", "hsl()")}} `hsl(0 100% 50%)` est convertie en `color(srgb 1 0 0)` dans le premier cas et `color(xyz 0.412426 0.212648 0.5)` dans le second.

Dans les exemples que nous avons vus jusqu'à présent dans cette section, les canaux alpha n'ont pas été explicitement spécifiés pour les couleurs d'origine ou de sortie. Lorsque le canal alpha de la couleur de sortie n'est pas spécifié, il prend la même valeur que le canal alpha de la couleur d'origine. Lorsque le canal alpha de la couleur d'origine n'est pas spécifié (et qu'il ne s'agit pas d'une couleur relative), il prend la valeur `1`. Par conséquent, les valeurs du canal alpha d'origine et de sortie sont `1` pour les exemples ci-dessus.

Voyons quelques exemples qui spécifient les valeurs du canal alpha d'origine et de sortie. Le premier spécifie que la valeur du canal alpha de sortie est la même que la valeur du canal alpha d'origine, tandis que le second spécifie une valeur différente du canal alpha de sortie, sans rapport avec la valeur du canal alpha d'origine.

```css
color(from hsl(0 100% 50% / 0.8) srgb r g b / alpha)
/* Couleur calculée : color(srgb 1 0 0 / 0.8) */

color(from hsl(0 100% 50% / 0.8) xyz x y z / 0.5)
/* Couleur calculée : color(xyz-d65 0.412426 0.212648 0.0193173 / 0.5) */
```

Les exemples suivants utilisent les fonctions {{cssxref("calc")}} pour calculer de nouvelles valeurs de canal pour les couleurs de sortie qui sont relatives aux valeurs de canal de couleur d'origine.

```css
color(from hsl(0 100% 50%) srgb calc(r - 0.4) calc(g + 0.1) calc(b + 0.6) / calc(alpha - 0.1))
/* Couleur calculée : color(srgb 0.6 0.1 0.6 / 0.9)  */

color(from hsl(0 100% 50%) xyz calc(x - 0.3) calc(y + 0.3) calc(z + 0.3) / calc(alpha - 0.1))
/* Couleur calculée : color(xyz-d65 0.112426 0.512648 0.319317 / 0.9) */
```

> [!NOTE]
> Parce que les valeurs de canal de couleur d'origine sont résolues en valeurs `<number>`, vous devez leur ajouter des nombres lorsque vous les utilisez dans des calculs, même dans les cas où un canal accepterait normalement `<percentage>`, `<angle>`, ou d'autres types de valeurs. Ajouter un `<percentage>` à un `<number>`, par exemple, ne fonctionne pas.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser les espaces colorimétriques prédéfinis avec `color()`

L'exemple suivant montre l'effet de la variation des valeurs de luminosité, d'axe a et d'axe b de la fonction `color()`.

#### HTML

```html
<div data-color="red-a98-rgb"></div>
<div data-color="red-prophoto-rgb"></div>
<div data-color="green-srgb-linear"></div>
<div data-color="green-display-p3"></div>
<div data-color="blue-rec2020"></div>
<div data-color="blue-srgb"></div>
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
```

```css
[data-color="red-a98-rgb"] {
  background-color: color(a98-rgb 1 0 0);
}
[data-color="red-prophoto-rgb"] {
  background-color: color(prophoto-rgb 1 0 0);
}
[data-color="green-srgb-linear"] {
  background-color: color(srgb-linear 0 1 0);
}
[data-color="green-display-p3"] {
  background-color: color(display-p3 0 1 0);
}
[data-color="blue-rec2020"] {
  background-color: color(rec2020 0 0 1);
}
[data-color="blue-srgb"] {
  background-color: color(srgb 0 0 1);
}
```

#### Résultat

{{EmbedLiveSample("utiliser_les_espaces_colorimétriques_prédéfinis_avec_color")}}

### Utiliser l'espace colorimétrique xyz avec `color()`

L'exemple suivant montre comment utiliser l'espace colorimétrique `xyz` pour définir une couleur.

#### HTML

```html
<div data-color="red"></div>
<div data-color="green"></div>
<div data-color="blue"></div>
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
```

```css
[data-color="red"] {
  background-color: color(xyz 45 20 0);
}

[data-color="green"] {
  background-color: color(xyz-d50 0.3 80 0.3);
}

[data-color="blue"] {
  background-color: color(xyz-d65 5 0 50);
}
```

#### Résultat

{{EmbedLiveSample("utiliser_lespace_colorimétrique_xyz_avec_color")}}

### Utiliser les media queries `color-gamut` avec `color()`

Cet exemple montre comment utiliser la media query [`color-gamut`](/fr/docs/Web/CSS/Reference/At-rules/@media/color-gamut) pour détecter la prise en charge d'un espace colorimétrique et l'utiliser pour définir une couleur.

#### HTML

```html
<div></div>
<div></div>
<div></div>
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
```

```css
@media (color-gamut: p3) {
  div {
    background-color: color(display-p3 1 0 0);
  }
}

@media (color-gamut: srgb) {
  div:nth-child(2) {
    background-color: color(srgb 1 0 0);
  }
}

@media (color-gamut: rec2020) {
  div:nth-child(3) {
    background-color: color(rec2020 1 0 0);
  }
}
```

#### Résultat

{{EmbedLiveSample("utiliser_les_media_queries_color-gamut_avec_color")}}

### Utiliser les couleurs relatives avec `color()`

Cet exemple applique trois couleurs de fond différentes à des éléments {{htmlelement("div")}}. Celui du milieu utilise la couleur `--base-color` telle quelle, tandis que les deux autres utilisent des variantes éclaircies et assombries de cette couleur, définies avec des couleurs relatives.

Les variantes sont définies en passant la propriété personnalisée [--base-color](/fr/docs/Web/CSS/Reference/Properties/--*) à la fonction `color()`, puis en modifiant les canaux `g` et `b` via `calc()`. La couleur éclaircie ajoute 15% à ces canaux, la couleur assombrie en retire 15%.

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
  background-color: color(
    from var(--base-color) display-p3 r calc(g + 0.15) calc(b + 0.15)
  );
}

#two {
  background-color: var(--base-color);
}

#three {
  background-color: color(
    from var(--base-color) display-p3 r calc(g - 0.15) calc(b - 0.15)
  );
}

/* Utiliser @supports pour l'ancienne syntaxe qui exige les valeurs r g b en pourcentage (avec unités) dans les calculs.
   Requis pour Safari 16.4+ */
@supports (color: color(from red display-p3 r g calc(b + 30%))) {
  #one {
    background-color: color(
      from var(--base-color) display-p3 r calc(g + 15%) calc(b + 15%)
    );
  }

  #three {
    background-color: color(
      from var(--base-color) display-p3 r calc(g - 15%) calc(b - 15%)
    );
  }
}
```

#### Résultat

Le résultat est le suivant&nbsp;:

{{ EmbedLiveSample("utiliser_les_couleurs_relatives_avec_color", "100%", "200") }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSXref("color")}}
- [Le type de donnée `<color>`](/fr/docs/Web/CSS/Reference/Values/color_value) pour la liste de toutes les notations de couleur
- [Utiliser les couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- [Outil de conversion de format de couleur](/fr/docs/Web/CSS/Guides/Colors/Color_format_converter)
- [Module des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- Fonctionnalité média [`color-gamut`](/fr/docs/Web/CSS/Reference/At-rules/@media/color-gamut)
- [Large gamme de couleurs en CSS avec Display-p3 <sup>(angl.)</sup>](https://webkit.org/blog/10042/wide-gamut-color-in-css-with-display-p3/)
