---
title: <color>
slug: Web/CSS/color_value
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}

Le [type de données](/fr/docs/Web/CSS/CSS_Types) [CSS](/fr/docs/Web/CSS) **`<color>`** permet de représenter des couleurs. Une valeur de type `<color>` peut également contenir un [canal alpha](https://fr.wikipedia.org/wiki/Canal_alpha) indiquant l'opacité (et donc la transparence) de la couleur, qui pourra être utilisée lors de la [composition](https://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) avec son arrière-plan.

Une valeur de type `<color>` peut être définie de l'une des façons suivantes&nbsp;:

- En utilisant un mot-clé (comme `blue` ou `transparent`). Tous les mots-clés indiquent une couleur dans [l'espace de couleur sRGB](https://fr.wikipedia.org/wiki/SRGB).
- En utilisant le système de coordonnées RGB cubiques avec une notation hexadécimale précédée d'un `#` ou avec les notations fonctionnelles [`rgb()`](/fr/docs/Web/CSS/color_value/rgb) et [`rgba()`](/fr/docs/Web/CSS/color_value/rgba). Les couleurs ainsi définies appartiennent toujours à [l'espace de couleur sRGB](https://fr.wikipedia.org/wiki/SRGB).
- En utilisant [le système de coordonnées cylindriques HSL](https://fr.wikipedia.org/wiki/Teinte_saturation_luminosité#TSL) avec les notations fonctionnelles [`hsl()`](/fr/docs/Web/CSS/color_value/hsl) et [`hsla()`](/fr/docs/Web/CSS/color_value/hsla). Les couleurs ainsi définies appartiennent toujours à [l'espace de couleur sRGB](https://fr.wikipedia.org/wiki/SRGB).
- En utilisant [le système de coordonnées cylindriques HWB](https://en.wikipedia.org/wiki/HWB_color_model) avec la notation fonctionnelle [`hwb()`](/fr/docs/Web/CSS/color_value/hwb). Les couleurs ainsi définies appartiennent toujours à [l'espace de couleur sRGB](https://fr.wikipedia.org/wiki/SRGB).
- En utilisant [le système de coordonnées cylindriques LCH](https://en.wikipedia.org/wiki/CIELAB_color_space#Cylindrical_representation:_CIELCh_or_CIEHLC) avec la notation fonctionnelle [`lch()`](/fr/docs/Web/CSS/color_value/lch). Cela permet de représenter n'importe quelle couleur visible.
- En utilisant [le système de coordonnées Lab](https://fr.wikipedia.org/wiki/L*a*b*_CIE_1976), avec la notation fonctionnelle [`lab()`](/fr/docs/Web/CSS/color_value/lab). Cela permet de représenter n'importe quelle couleur visible.
- En utilisant la notation fonctionnelle [`color()`](/fr/docs/Web/CSS/color_value/color) pour indiquer une couleur dans un espace de couleur prédéfini ou personnalisé.

> **Note :** Cet article décrit le type de données `<color>`. Si vous souhaitez en savoir plus sur l'utilisation des couleurs CSS avec HTML, voyez [Appliquer des couleurs aux éléments HTML avec CSS](/fr/docs/Web/CSS/CSS_Colors/Applying_color).

## Syntaxe

On peut fournir une valeur de type `<color>` en utilisant l'une des syntaxes décrites ci-après.

> **Note :** Bien que les valeurs `<color>` soient précisément définies, l'apparence réelle peut varier (parfois significativement) d'un appareil à l'autre. Cela se produit pour la plupart des appareils qui ne sont pas calibrés ou lorsque les navigateurs ne prennent pas en charge [les profils de couleur](https://en.wikipedia.org/wiki/ICC_profile) de l'appareil de sortie.

### Couleurs nommées

Les couleurs nommées sont des identifiants, insensibles à la casse, qui représentent une couleur donnée, comme `red` pour rouge, `blue` pour bleu, `black` pour noir, ou encore `lightseagreen`. Bien que ces noms décrivent plus ou moins, en anglais, les couleurs auxquelles ils sont associés, leur sémantique est arbitraire et il n'y a pas de règle stricte pour déterminer un nom donné.

La liste complète des mots-clés correspondants est disponible [sur cette page](/fr/docs/Web/CSS/named-color).

### Mot-clé `currentcolor`

Le mot-clé `currentcolor` représente la valeur de la propriété [`color`](/fr/docs/Web/CSS/color) d'un élément. Cela permet d'utiliser la valeur `color` sur les propriétés qui ne la reçoivent pas par défaut.

Si `currentcolor` est utilisé comme valeur pour la propriété `color`, c'est la valeur héritée pour la propriété `color` qui est alors utilisée.

```html
<div style="color: blue; border: 1px dashed currentcolor;">
  La couleur de ce texte est bleue.
  <div style="background: currentcolor; height:9px;"></div>
  Ce bloc est entouré d'une bordure bleue.
</div>
```

{{EmbedLiveSample('', 600, 80)}}

### Modèle de couleurs RGB

Le modèle de couleurs RGB définit des couleurs dans [l'espace de couleur sRGB](https://fr.wikipedia.org/wiki/SRGB) selon ses composantes rouge, vert (<i lang="en">green</i> en anglais), et bleu. Une composante alpha optionnelle décrit l'opacité de la couleur (et donc sa transparence).

Les couleurs RGB peuvent être exprimées avec une notation hexadécimale (préfixée avec `#`) ou une notation fonctionnelle ([`rgb()`](/fr/docs/Web/CSS/color_value/rgb), [`rgba()`](/fr/docs/Web/CSS/color_value/rgba)).

- [Notation hexadécimale](/fr/docs/Web/CSS/hex-color)&nbsp;: `#RGB[A]` ou `#RRGGBB[AA]`
  - : `R` (rouge), `G` (vert, <i lang="en">green</i> en anglais), `B` (bleu), et `A` (alpha) sont des caractères hexadécimaux (de 0 à 9 et de A à F). `A` est optionnel. Ainsi, `#ff0000` sera équivalent à `#ff0000ff`. La notation sur trois chiffres (`#RGB`) est une version plus courte de la notation sur six chiffres (`#RRGGBB`). On a par exemple `#f09` qui représente la même couleur que `#ff0099`. De la même façon, la notation RGB sur quatre chiffres (`#RGBA`) est une version plus courte de la notation sur huit chiffres (`#RRGGBBAA`), `#0f38` représente par exemple la même couleur que `#00ff3388`.
- [`rgb()`](/fr/docs/Web/CSS/color_value/rgb) ou [`rgba()`](/fr/docs/Web/CSS/color_value/rgba)&nbsp;: `rgb[a](R, G, B[, A])` or `rgb[a](R G B[ / A])`
  - : `R` (rouge), `G` (vert, <i lang="en">green</i> en anglais), et `B` (bleu) peuvent être des nombres (type [`<number>`](/fr/docs/Web/CSS/number)) ou des pourcentages (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) où le nombre `255` correspond à `100%`. `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) où le nombre `1` correspond à `100%` (opacité complète).

### Modèle de couleurs HSL

Le modèle de couleurs HSL définit des couleurs dans [l'espace de couleur sRGB](https://fr.wikipedia.org/wiki/SRGB) selon ses composantes de teinte (<i lang="en">hue</i> en anglais), de saturation, et de luminosité. Une composante alpha optionnelle décrit l'opacité de la couleur (et donc sa transparence).

La plupart des conceptrices et concepteurs trouvent le modèle HSL plus intuitif que le modèle RGB, car il permet d'ajuster indépendamment la teinte, la saturation et la luminosité. HSL permet également de créer plus facilement une palette de nuances sur la même teinte. Toutefois, utiliser HSL afin de créer des variations de couleurs peut produire des résultats surprenants, car il n'est pas [uniforme pour la perception](https://fr.wikipedia.org/wiki/Écart_de_couleur). Ainsi, `hsl(240 100% 50%)` et `hsl(60 100% 50%)` ont la même composante de luminosité, mais la première est bien plus sombre que la seconde.

Les couleurs HSL sont exprimées à l'aide des notations fonctionnelles `hsl()` et `hsla()`.

- [`hsl()`](/fr/docs/Web/CSS/color_value/hsl) ou [`hsla()`](/fr/docs/Web/CSS/color_value/hsla)&nbsp;: `hsl[a](H, S, L[, A])` ou `hsl[a](H S L[ / A])`

  - : `H` (pour la teinte, <i lang="en">hue</i> en anglais) est un angle (type [`<angle>`](/fr/docs/Web/CSS/angle)) sur le cercle des couleurs. Lorsqu'il est écrit sans unité, il est interprété comme étant exprimé en degré. Par définition, on a `red=0deg=360deg`, et les autres couleurs distribuées sur le cercle avec `green=120deg`, `blue=240deg`, etc. Sa valeur étant un `<angle>`, elle boucle sur elle-même et on a donc `-120deg=240deg`, `480deg=120deg`, `-1turn=1turn`, etc.

    `S` (saturation) et `L` (luminosité) sont exprimées en pourcentages. Une **saturation** à `100%` indique une couleur complètement saturée, tandis qu'une saturation à `0%` fournira un niveau de gris (une couleur complètement désaturée). Une **luminosité** à `100%` fournira du blanc, tandis qu'une luminosité à `0%` fournira du noir et `50%` une luminosité «&nbsp;normale&nbsp;».

    `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète).

### Modèle de couleurs HWB

Similaire au modèle de couleurs HSL, le modèle de couleurs HWB définit une couleur donnée [dans l'espace de couleur sRGB](https://fr.wikipedia.org/wiki/SRGB) selon ses composantes de teinte, de blancheur et de noirceur.

Comme avec le modèle HSL, il peut être plus intuitif de travailler avec le modèle HWB qu'avec le modèle RGB. La teinte est indiquée de la même façon, mais est ici suivie de la quantité de blancheur et de noirceur respectives, exprimées en pourcentages. Cette fonction permet également d'indiquer une valeur pour la composante alpha.

> **Note :** Il **n'existe pas** de fonction séparée `hwba()` (à la différence donc de HSL avec `hsl()` et `hsla()`), la valeur alpha est un paramètre optionnel. Si elle n'est pas fournie, la composante alpha vaudra `1` (soit `100%`). Pour fournir cette valeur, on ajoutera une barre oblique (`/`) après la valeur de noirceur et avant la composante alpha.

Les couleurs du modèle HWB sont exprimées à l'aide de la notation fonctionnelle `hwb()`.

> **Note :** La fonction `hwb()` **ne permet pas** d'utiliser des virgules pour séparer les valeurs des arguments (contrairement aux autres fonctions de création de couleur qui l'ont précédée).

- [`hwb()`](/fr/docs/Web/CSS/color_value/hwb): `hwb(H W B[ / A])`

  - : Comme pour le modèle HSL, `H` (la teinte, <i lang="en">hue</i> en anglais) un angle (type [`<angle>`](/fr/docs/Web/CSS/angle)) sur le cercle des couleurs. Lorsqu'il est écrit sans unité, il est interprété comme étant exprimé en degré. Par définition, on a `red=0deg=360deg`, et les autres couleurs distribuées sur le cercle avec `green=120deg`, `blue=240deg`, etc. Sa valeur étant un `<angle>`, elle boucle sur elle-même et on a donc `-120deg=240deg`, `480deg=120deg`, `-1turn=1turn`, etc.

    `W` (blancheur, <i lang="en">whiteness</i> en anglais) et `B` (noirceur, <i lang="en">blackness</i>) sont des pourcentages (type [`<percentage>`](/fr/docs/Web/CSS/percentage)). Ces deux valeurs sont mélangées et il faut donc `0%` de blancheur **et** `100%` de noirceur afin de produire du noir. Réciproquement, il faudra `100%` de blancheur et `0%` de noirceur pour produire du blanc. `50%` sur l'une ou l'autre des valeurs produira une teinte de gris intermédiaire avec une teinte de la couleur fournie avec le premier paramètre.

    `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète). Lorsqu'on fournit une valeur alpha, celle-ci doit être précédée d'une barre oblique (`/`).

### Couleurs système

En _mode de couleurs forcé_ (détectable avec la caractéristique média [`forced-colors`](/fr/docs/Web/CSS/@media/forced-colors)), la plupart des couleurs sont restreintes à la palette définie par l'utilisatrice/l'utilisateur et le navigateur. Les couleurs système sont exposées avec les mots-clés suivants, qui peuvent être utilisés afin de s'assurer que le reste de la page s'intègre bien avec la palette restreinte. Ces valeurs peuvent être utilisées dans d'autres contextes, mais ne sont pas prises en charge par l'ensemble des navigateurs.

Les mots-clés de cette liste sont définis dans le module de spécification <i lang="en">CSS Color</i> de niveau 4&nbsp;: `ActiveText`, `ButtonBorder`, `ButtonFace`, `ButtonText`, `Canvas`, `CanvasText`, `Field`, `FieldText`, `GrayText`, `Highlight`, `HighlightText`, `LinkText`, `Mark`, `MarkText`, `VisitedText`.

> **Note :** Ces mots-clés sont _insensibles à la casse_, mais sont écrits ici en <i lang="en">camel case</i> à des fins de lisibilité.

### Modèle de couleurs Lab

Cette notation a été introduite par le module de spécification <i lang="en">CSS Color</i> de niveau 4. Les couleurs Lab sont définies à l'aide de la notation fonctionnelle [`lab()`](/fr/docs/Web/CSS/color_value/lab). Ces couleurs ne sont pas limitées à un espace de couleur spécifique et il est possible de représenter toutes les couleurs visibles par l'œil humain.

### Modèle de couleurs LCH

Cette notation a été introduite par le module de spécification <i lang="en">CSS Color</i> de niveau 4. Les couleurs LCH sont définies à l'aide de la notation fonctionnelle [`lch()`](/fr/docs/Web/CSS/color_value/lch). Ces couleurs ne sont pas limitées à un espace de couleur spécifique et il est possible de représenter toutes les couleurs visibles par l'œil humain.

LCH est la forme polaire de Lab et est souvent plus pratique à utiliser, car les composantes de chroma et de teinte sont indépendantes plutôt que d'être mélangées. Ce modèle est similaire à HSL dans cette représentation polaire/cylindrique, mais il est plus uniforme quant à la perception. À la différence de HSL où `hsl(60 100% 50%)` `hsl(240 100% 50%)` sont décrits avec la même luminosité, LCH (et Lab) affectent différentes luminosités à ces couleurs&nbsp;:

- La première (jaune) aura `L=97.6`
- La seconde (bleue) aura `L=29.6`.

Aussi, LCH peut être utilisé afin de créer des palettes de couleurs différentes, avec des résultats prévisibles.

> **Note :** La teinte LCH n'est pas la même que la teinte HSL et que la chroma LCH ne correspond pas à la saturation HSL, même si elles partagent certaines similarités conceptuelles.

### `color()`

Cette notation a été introduite par le module de spécification <i lang="en">CSS Color</i> de niveau 4. Les couleurs définies grâce à la fonction [`color()`](/fr/docs/Web/CSS/color_value/color) peuvent être définies par rapport à n'importe quel espace de couleur prédéfini ou personnalisé (dans ce cas l'espace de couleur sera défini avec une règle [`@color-profile`](/fr/docs/Web/CSS/@color-profile)).

## Interpolation

Pour les animations et [les dégradés](/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients), les valeurs `<color>` sont interpolées selon chacune de leurs composantes rouge, verte, bleu. Chaque composante est interpolée comme un nombre décimal. L'interpolation des couleurs s'effectue [dans l'espace de couleur sRGBA avec les alpha pré-multipliés](https://www.w3.org/TR/css-color-4/#interpolation-alpha) afin d'éviter l'apparition de couleurs grises. Pour les animations, la vitesse de l'interpolation est déterminée par [la fonction de transition](/fr/docs/Web/CSS/easing-function).

## Accessibilité

Certaines personnes distinguent difficilement les couleurs entre elles. La recommandation [WCAG 2.1](https://www.w3.org/Translations/WCAG21-fr/#use-of-color) indique que la couleur ne doit pas être utilisée comme unique façon de transmettre un message, d'indiquer une action ou de fournir un résultat. Voir l'article [Couleur et contraste](/fr/docs/Learn/Accessibility/CSS_and_JavaScript#couleur_et_contraste_de_couleur) pour plus d'informations.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Testeur de couleur

Dans cet exemple, on fournit un élément `<div>` et un champ texte. Saisir une couleur valide dans le champ texte permettra d'appliquer cette couleur sur l'élément `<div>`, vous permettant ainsi de tester vos valeurs de couleur.

#### HTML

```html
<div></div>
<hr />
<label for="color">Veuillez saisir une valeur de couleur valide&nbsp;:</label>
<input type="text" id="color" />
```

#### CSS

```css
div {
  width: 100%;
  height: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "") {
    return false;
  }
  if (stringToTest === "inherit") {
    return false;
  }
  if (stringToTest === "transparent") {
    return false;
  }

  const image = document.createElement("img");
  image.style.color = "rgb(0, 0, 0)";
  image.style.color = stringToTest;
  if (image.style.color !== "rgb(0, 0, 0)") {
    return true;
  }
  image.style.color = "rgb(255, 255, 255)";
  image.style.color = stringToTest;
  return image.style.color !== "rgb(255, 255, 255)";
}

inputElem.addEventListener("change", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.style.backgroundColor = "white";
    divElem.textContent = "Valeur de couleur invalide";
  }
});
```

#### Résultat

{{EmbedLiveSample('','100%', 300)}}

### Variations sur la syntaxe RGB

Dans cet exemple, on indique différentes façons de créer une même couleur avec les différentes syntaxes RGB.

```css-nolint
/* Ces variations de syntaxe définissent toutes la même valeur, un rose vif complètement opaque. */

/* Syntaxe hexadécimale */
#f09
#F09
#ff0099
#FF0099

/* Syntaxe fonctionnelle */
rgb(255,0,153)
rgb(255, 0, 153)
rgb(255, 0, 153.0)
rgb(100%,0%,60%)
rgb(100%, 0%, 60%)
rgb(100%, 0, 60%) /* Erreur ! On ne mélange pas nombres et pourcentages. */
rgb(255 0 153)

/* Syntaxe hexadécimale avec une valeur alpha */
#f09f
#F09F
#ff0099ff
#FF0099FF

/* Syntaxe fonctionnelle avec une valeur alpha */
rgb(255, 0, 153, 1)
rgb(255, 0, 153, .5)
rgb(255, 0, 153, 0.5)
rgb(255, 0, 153, 100%)

/* Syntaxe avec l'espace comme séparateur des paramètres */
rgb(255 0 153 / 1)
rgb(255 0 153 / 100%)

/* Syntaxe fonctionnelle avec des valeurs décimales */
rgb(255, 0, 153.6, 1)
rgb(2.55e2, 0e0, 1.53e2, 1e2%)
```

### Variations sur la transparence RGB

```css-nolint
/* Syntaxe hexadécimale */
#3a30                    /* Vert opaque à 0% */
#3a3f                    /* Vert complètement opaque */
#33aa3300                /* Vert opaque à 0% */
#33aa3380                /* Vert opaque à 50% */

/* Syntaxe fonctionnelle */
rgba(51, 170, 51, 0.1)    /* Vert opaque à 10% */
rgba(51, 170, 51, 0.4)    /* Vert opaque à 40% */
rgba(51, 170, 51, 0.7)    /* Vert opaque à 70% */
rgba(51, 170, 51,   1)    /* Vert complètement opaque */

/* Syntaxe utilisant les espaces pour séparer les paramètres */
rgba(51 170 51 / 0.4)    /* Vert opaque à 40% */
rgba(51 170 51 / 40%)    /* Vert opaque à 40% */

/* Syntaxe fonctionnelle avec des valeurs décimales */
rgba(51,    170,   51.6,  1)
rgba(5.1e1, 1.7e2, 5.1e1, 1e2%)
```

### Variations sur la syntaxe HSL

```css-nolint
/* Tous ces exemples décrivent la même couleur : lavande. */
hsl(270,60%,70%)
hsl(270, 60%, 70%)
hsl(270 60% 70%)
hsl(270deg, 60%, 70%)
hsl(4.71239rad, 60%, 70%)
hsl(0.75turn, 60%, 70%)

/* Tous ces exemples décrivent la même couleur : un ton lavande opaque à 15% */
hsl(270, 60%, 50%, 0.15)
hsl(270, 60%, 50%, 0.15)
hsl(270, 60%, 50%, 15%)
hsl(270 60% 50% / 0.15)
hsl(270 60% 50% / 15%)
```

### Variations sur la syntaxe HWB

```css-nolint
/* Tous ces exemples décrivent une nuance de vert citron. */
hwb(90 10% 10%)
hwb(90 50% 10%)
hwb(90deg 10% 10%)
hwb(1.5708rad 60% 0%)
hwb(0.25turn 0% 40%)

/* Le même vert citron avec une valeur alpha. */
hwb(90 10% 10% / 0.5)
hwb(90 10% 10% / 50%)
```

### Couleurs complètement saturées

<table>
  <thead>
    <tr>
      <th scope="col">Notation</th>
      <th scope="col">Description</th>
      <th scope="col">Résultat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(0, 100%, 50%)</code></td>
      <td>Rouge</td>
      <td style="background: hsl(0, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(30, 100%, 50%)</code></td>
      <td>Orange</td>
      <td style="background: hsl(30, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(60, 100%, 50%)</code></td>
      <td>Jaune</td>
      <td style="background: hsl(60, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td>Vert citron</td>
      <td style="background: hsl(90, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>Vert</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(150, 100%, 50%)</code></td>
      <td>Vert-bleu</td>
      <td style="background: hsl(150, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(180, 100%, 50%)</code></td>
      <td>Cyan</td>
      <td style="background: hsl(180, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(210, 100%, 50%)</code></td>
      <td>Bleu ciel</td>
      <td style="background: hsl(210, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(240, 100%, 50%)</code></td>
      <td>Bleu</td>
      <td style="background: hsl(240, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(270, 100%, 50%)</code></td>
      <td>Violet</td>
      <td style="background: hsl(270, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(300, 100%, 50%)</code></td>
      <td>Magenta</td>
      <td style="background: hsl(300, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(330, 100%, 50%)</code></td>
      <td>Rose</td>
      <td style="background: hsl(330, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(360, 100%, 50%)</code></td>
      <td>Rouge</td>
      <td style="background: hsl(360, 100%, 50%)"></td>
    </tr>
  </tbody>
</table>

### Verts clairs et sombres

<table>
  <thead>
    <tr>
      <th scope="col">Notation</th>
      <th scope="col">Description</th>
      <th scope="col">Résultat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 0%)</code></td>
      <td>Noir</td>
      <td style="background: hsl(120, 100%, 0%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 20%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 20%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 40%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 40%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 60%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 60%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 80%)</code></td>
      <td></td>
      <td style="background: hsl(120, 100%, 80%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 100%, 100%)</code></td>
      <td>Blanc</td>
      <td style="background: hsl(120, 100%, 100%)"></td>
    </tr>
  </tbody>
</table>

### Verts saturés et désaturés

<table>
  <thead>
    <tr>
      <th scope="col">Notation</th>
      <th scope="col">Description</th>
      <th scope="col">Résultat</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(120, 100%, 50%)</code></td>
      <td>Vert</td>
      <td style="background: hsl(120, 100%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 80%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 80%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 60%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 60%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 40%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 40%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 20%, 50%)</code></td>
      <td></td>
      <td style="background: hsl(120, 20%, 50%)"></td>
    </tr>
    <tr>
      <td><code>hsl(120, 0%, 50%)</code></td>
      <td>Gris</td>
      <td style="background: hsl(120, 0%, 50%)"></td>
    </tr>
  </tbody>
</table>

### Variations HSL avec de la transparence

```css-nolint
hsla(240, 100%, 50%, 0.05)    /* bleu opaque à 5% */
hsla(240, 100%, 50%, 0.4)     /* bleu opaque à 40% */
hsla(240, 100%, 50%, 0.7)     /* bleu opaque à 70% */
hsla(240, 100%, 50%, 1)       /* bleu complètement opaque */

/* Syntaxe où les paramètres sont séparés par des espaces */
hsla(240 100% 50% / 0.05)     /* bleu opaque à 5% */

/* Valeur alpha exprimée en pourcentage */
hsla(240 100% 50% / 5%)       /* bleu opaque à 5% */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété [`opacity`](/fr/docs/Web/CSS/opacity) qui permet de définir la transparence à l'échelle d'un élément.
- Certaines propriétés fréquemment employées et qui utilisent ce type de données&nbsp;:
  - [`color`](/fr/docs/Web/CSS/color),
  - [`background-color`](/fr/docs/Web/CSS/background-color),
  - [`border-color`](/fr/docs/Web/CSS/border-color),
  - [`box-shadow`](/fr/docs/Web/CSS/box-shadow),
  - [`outline-color`](/fr/docs/Web/CSS/outline-color),
  - [`text-shadow`](/fr/docs/Web/CSS/text-shadow)
- [Appliquer des couleurs aux éléments HTML en utilisant CSS](/fr/docs/Web/CSS/CSS_Colors/Applying_color)
