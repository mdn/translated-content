---
title: <color>
slug: Web/CSS/Reference/Values/color_value
original_slug: Web/CSS/color_value
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<color>`** représente une couleur.
Une valeur `<color>` peut aussi inclure une [_valeur de transparence_ (canal alpha)](https://fr.wikipedia.org/wiki/Alpha_blending), indiquant comment la couleur doit être [composée <sup>(angl.)</sup>](https://drafts.fxtf.org/compositing-1/#simplealphacompositing) avec son arrière-plan.

> [!NOTE]
> Bien que les valeurs `<color>` soient précisément définies, leur apparence réelle peut varier (parfois de façon significative) d'un appareil à l'autre. Cela s'explique par le fait que la plupart des appareils ne sont pas calibrés et que certains navigateurs ne prennent pas en charge les [profils colorimétriques](https://fr.wikipedia.org/wiki/Profil_ICC) des périphériques de sortie.

## Syntaxe

```css
/* Couleurs nommées */
rebeccapurple
aliceblue

/* RGB Hexadécimal */
#f09
#ff0099

/* RGB (Rouge, Vert, Bleu) */
rgb(255 0 153)
rgb(255 0 153 / 80%)

/* HSL (Teinte, Saturation, Luminosité) */
hsl(150 30% 60%)
hsl(150 30% 60% / 80%)

/* HWB (Teinte, Blancheur, Noirceur) */
hwb(12 50% 0%)
hwb(194 0% 0% / 0.5)

/* Lab (Luminosité, axe A, axe B) */
lab(50% 40 59.5)
lab(50% 40 59.5 / 0.5)

/* LCH (Luminosité, Chroma, Teinte) */
lch(52.2% 72.2 50)
lch(52.2% 72.2 50 / 0.5)

/* Oklab (Luminosité, axe A, axe B) */
oklab(59% 0.1 0.1)
oklab(59% 0.1 0.1 / 0.5)

/* OkLCh (Luminosité, Chroma, Teinte) */
oklch(60% 0.15 50)
oklch(60% 0.15 50 / 0.5)

/* Couleurs CSS relatives */
/* Changement de teinte HSL */
hsl(from red 240deg s l)
/* Changement du canal alpha HWB */
hwb(from green h w b / 0.5)
/* Changement de luminosité LCH */
lch(from blue calc(l + 20) c h)

/* light-dark */
light-dark(white, black)
light-dark(rgb(255 255 255), rgb(0 0 0))
```

Une valeur `<color>` peut être définie en utilisant l'une des méthodes suivantes&nbsp;:

- Par des mots-clés&nbsp;: {{CSSXref("&lt;named-color&gt;")}} (comme `blue` ou `pink`), {{CSSXref("&lt;system-color&gt;")}}, et [`currentColor`](#currentcolor_keyword).
- Par notations hexadécimales&nbsp;: {{CSSXref("&lt;hex-color&gt;")}} (comme `#ff0000`).
- Par `<color-function>`, avec des paramètres dans un {{glossary("color space", "espace colorimétrique")}} utilisant des notations fonctionnelles&nbsp;:
  - Espace colorimétrique [sRGB](https://fr.wikipedia.org/wiki/SRGB)&nbsp;: {{CSSXref("color_value/hsl", "hsl()")}}, {{CSSXref("color_value/hwb", "hwb()")}}, et {{CSSXref("color_value/rgb", "rgb()")}}.
  - Espace colorimétrique [CIELAB](https://fr.wikipedia.org/wiki/L*a*b*_CIE_1976)&nbsp;: {{CSSXref("color_value/lab", "lab()")}} et {{CSSXref("color_value/lch", "lch()")}}.
  - Espace colorimétrique [Oklab <sup>(angl.)</sup>](https://bottosson.github.io/posts/oklab/)&nbsp;: {{CSSXref("color_value/oklab", "oklab()")}} et {{CSSXref("color_value/oklch", "oklch()")}}.
  - Autres espaces colorimétriques&nbsp;: {{CSSXref("color_value/color", "color()")}}, {{CSSXref("color_value/device-cmyk", "device-cmyk()")}}.
- En utilisant la syntaxe [relative color](/fr/docs/Web/CSS/CSS_colors/Relative_colors) pour produire une nouvelle couleur à partir d'une couleur existante. Toute fonction couleur ci-dessus peut prendre une **couleur d'origine** précédée du mot-clé `from` et suivie des définitions des canaux pour la nouvelle **couleur de sortie**.
- En mélangeant deux couleurs&nbsp;: {{CSSXref("color_value/color-mix", "color-mix()")}}.
- En spécifiant une couleur pour obtenir une couleur contrastée&nbsp;: {{CSSXref("color_value/contrast-color", "contrast-color()")}}.
- En spécifiant deux couleurs, la première pour les thèmes clairs et la seconde pour les thèmes sombres&nbsp;: {{CSSXref("color_value/light-dark", "light-dark()")}}.

### Mot-clé `currentColor`

Le mot-clé `currentColor` représente la valeur de la propriété {{Cssxref("color")}} d'un élément. Cela permet d'utiliser la valeur de `color` sur des propriétés qui ne l'acceptent pas par défaut.

Si `currentColor` est utilisé comme valeur de la propriété `color`, il prend alors la valeur héritée de la propriété `color`.

```html
<div class="container">
  La couleur de ce texte est bleue.
  <div class="child"></div>
  Ce bloc est entouré d'une bordure bleue.
</div>
```

```css
.container {
  color: blue;
  border: 1px dashed currentColor;
}
.child {
  background: currentColor;
  height: 9px;
}
```

{{EmbedLiveSample("mot-clé_currentcolor", "100%", 80)}}

### Composants de couleur manquants

Chaque composant de toute fonction couleur CSS — sauf pour celles utilisant l'ancienne syntaxe avec des virgules — peut être indiqué par le mot-clé `none` pour être un composant manquant.

Indiquer explicitement les [composants manquants lors de l'interpolation de couleurs](#interpolation_avec_composants_manquants) est utile pour les cas où vous souhaitez {{glossary("interpolation", "interpoler")}} certains composants de couleur mais pas d'autres. Pour tous les autres usages, un composant manquant aura effectivement une valeur nulle dans l'unité appropriée&nbsp;: `0`, `0%` ou `0deg`. Par exemple, les couleurs suivantes sont équivalentes lorsqu'elles sont utilisées en dehors de l'interpolation&nbsp;:

```css
/* Ces valeurs sont équivalentes */
color: oklab(50% none -0.25);
color: oklab(50% 0 -0.25);

/* Ces valeurs sont équivalentes */
background-color: hsl(none 100% 50%);
background-color: hsl(0deg 100% 50%);
```

## Interpolation

L'interpolation des couleurs a lieu avec les [dégradés](/fr/docs/Web/CSS/Reference/Values/gradient), les [transitions](/fr/docs/Web/CSS/Guides/Transitions/Using), et les [animations](/fr/docs/Web/CSS/Guides/Animations/Using).

Lors de l'interpolation de valeurs `<color>`, elles sont d'abord converties dans un espace colorimétrique donné, puis chaque composant des [valeurs calculées](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) est interpolé linéairement, la vitesse de l'interpolation étant déterminée par la [fonction d'accélération](/fr/docs/Web/CSS/Reference/Values/easing-function) dans les transitions et animations. L'espace colorimétrique d'interpolation par défaut est Oklab, mais il peut être remplacé via {{CSSXref("&lt;color-interpolation-method&gt;")}} dans certaines notations fonctionnelles liées à la couleur.

### Interpolation avec composants manquants

#### Interpolation de couleurs dans le même espace

Lorsque l'on interpole des couleurs qui sont exactement dans l'espace colorimétrique d'interpolation, les composants manquants d'une couleur sont remplacés par les valeurs existantes des mêmes composants de l'autre couleur.
Par exemple, les deux expressions suivantes sont équivalentes&nbsp;:

```css
color-mix(in oklch, oklch(none 0.2 10), oklch(60% none 30))
color-mix(in oklch, oklch(60% 0.2 10), oklch(60% 0.2 30))
```

> [!NOTE]
> Si un composant est manquant dans les deux couleurs, ce composant sera manquant après l'interpolation.

#### Interpolation de couleurs d'espaces différents&nbsp;: composants analogues

Si une couleur à interpoler n'est pas dans l'espace colorimétrique d'interpolation, ses composants manquants sont transférés dans la couleur convertie en fonction des **composants analogues** de la même catégorie, comme décrit dans le tableau suivant&nbsp;:

| Catégorie    | Composants analogues |
| ------------ | -------------------- |
| Rouges       | `R`, `X`             |
| Verts        | `G`, `Y`             |
| Bleus        | `B`, `Z`             |
| Luminosité   | `L`                  |
| Colorimétrie | `C`, `S`             |
| Teinte       | `H`                  |
| a            | `a`                  |
| b            | `b`                  |

Par exemple&nbsp;:

- `X` (`0.2`) dans `color(xyz 0.2 0.1 0.6)` est analogue à `R` (`50%`) dans `rgb(50% 70% 30%)`.
- `H` (`0deg`) dans `hsl(0deg 100% 80%)` est analogue à `H` (`140`) dans `oklch(80% 0.1 140)`.

En utilisant OkLCh comme espace colorimétrique d'interpolation et les deux couleurs ci-dessous comme exemple&nbsp;:

```css
lch(80% 30 none)
color(display-p3 0.7 0.5 none)
```

La procédure de prétraitement est la suivante&nbsp;:

1. Remplacez les composants manquants dans les deux couleurs par une valeur nulle&nbsp;:

   ```css
   lch(80% 30 0)
   color(display-p3 0.7 0.5 0)
   ```

2. Convertissez les deux couleurs dans l'espace colorimétrique d'interpolation&nbsp;:

   ```css
   oklch(83.915% 0.0902 0.28)
   oklch(63.612% 0.1522 78.748)
   ```

3. Si un composant des couleurs converties est analogue à un composant manquant dans la couleur d'origine correspondante, remettez-le comme composant manquant&nbsp;:

   ```css
   oklch(83.915% 0.0902 none)
   oklch(63.612% 0.1522 78.748)
   ```

4. Remplacez tout composant manquant par le même composant de l'autre couleur convertie&nbsp;:

   ```css
   oklch(83.915% 0.0902 78.748)
   oklch(63.612% 0.1522 78.748)
   ```

## Accessibilité

Certaines personnes ont des difficultés à distinguer les couleurs. La recommandation [WCAG 2.2](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Use_of_color) déconseille fortement d'utiliser la couleur comme seul moyen de transmettre un message, une action ou un résultat. Voir [couleur et contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) pour plus d'informations.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Exploration des valeurs de couleur

Dans cet exemple, nous fournissons un `<div>` et un champ de saisie texte. Saisir une couleur valide dans le champ applique cette couleur au `<div>`, ce qui vous permet de tester nos valeurs de couleur.

#### HTML

```html
<div></div>
<hr />
<label for="color">Saisissez une valeur de couleur valide&nbsp;:</label>
<input type="text" id="color" />
```

```css hidden
div {
  height: 200px;
  width: 200px;
}
```

```js hidden
const inputElem = document.querySelector("input");
const divElem = document.querySelector("div");

function validTextColor(stringToTest) {
  if (stringToTest === "inherit" || stringToTest === "transparent") {
    return false;
  }

  const div = document.createElement("div");
  div.style.color = stringToTest;
  return !!div.style.color;
}

inputElem.addEventListener("input", () => {
  if (validTextColor(inputElem.value)) {
    divElem.style.backgroundColor = inputElem.value;
    divElem.textContent = "";
  } else {
    divElem.removeAttribute("style");
    divElem.textContent = "Valeur de couleur invalide";
  }
});
```

#### Résultat

{{EmbedLiveSample("exploration_des_valeurs_de_couleur", "100%", 300)}}

### Génération de couleurs sRGB entièrement saturées

Cet exemple présente des couleurs sRGB entièrement saturées dans l'espace colorimétrique sRGB.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 50%);
}
div:nth-child(2) {
  background-color: hsl(30 100% 50%);
}
div:nth-child(3) {
  background-color: hsl(60 100% 50%);
}
div:nth-child(4) {
  background-color: hsl(90 100% 50%);
}
div:nth-child(5) {
  background-color: hsl(120 100% 50%);
}
div:nth-child(6) {
  background-color: hsl(150 100% 50%);
}
div:nth-child(7) {
  background-color: hsl(180 100% 50%);
}
div:nth-child(8) {
  background-color: hsl(210 100% 50%);
}
div:nth-child(9) {
  background-color: hsl(240 100% 50%);
}
div:nth-child(10) {
  background-color: hsl(270 100% 50%);
}
div:nth-child(11) {
  background-color: hsl(300 100% 50%);
}
div:nth-child(12) {
  background-color: hsl(330 100% 50%);
}
```

#### Résultat

{{EmbedLiveSample("génération_de_couleurs_srgb_entièrement_saturées", "100%", 200)}}

### Création de différentes nuances de rouge

Cet exemple montre des rouges de différentes nuances dans l'espace colorimétrique sRGB.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  box-sizing: border-box;
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 100% 0%);
}
div:nth-child(2) {
  background-color: hsl(0 100% 20%);
}
div:nth-child(3) {
  background-color: hsl(0 100% 40%);
}
div:nth-child(4) {
  background-color: hsl(0 100% 60%);
}
div:nth-child(5) {
  background-color: hsl(0 100% 80%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 100%);
  border: solid;
}
```

#### Résultat

{{EmbedLiveSample("création_de_différentes_nuances_de_rouge", "100%", 150)}}

### Création de rouges de différentes saturations

Cet exemple montre des rouges de différentes saturations dans l'espace colorimétrique sRGB.

#### HTML

```html
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
}
div {
  height: 80px;
  margin: 10px;
  width: 80px;
}
```

```css
div:nth-child(1) {
  background-color: hsl(0 0% 50%);
}
div:nth-child(2) {
  background-color: hsl(0 20% 50%);
}
div:nth-child(3) {
  background-color: hsl(0 40% 50%);
}
div:nth-child(4) {
  background-color: hsl(0 60% 50%);
}
div:nth-child(5) {
  background-color: hsl(0 80% 50%);
}
div:nth-child(6) {
  background-color: hsl(0 100% 50%);
}
```

#### Résultat

{{EmbedLiveSample("création_de_rouges_de_différentes_saturations", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSXref("opacity")}} qui définit la transparence au niveau de l'élément
- Le type de donnée {{CSSXref("&lt;hue&gt;")}} représentant l'angle de teinte d'une couleur
- Les propriétés courantes {{CSSXref("color")}}, {{CSSXref("background-color")}}, {{CSSXref("border-color")}}, {{CSSXref("box-shadow")}}, {{CSSXref("outline-color")}}, {{CSSXref("text-shadow")}} utilisant `<color>`
- La fonction {{CSSXref("color_value/color")}}
- [Appliquer une couleur aux éléments HTML avec CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
- [Utiliser les couleurs relatives](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
- [Nouvelles fonctions, dégradés et teintes dans CSS Colors (Niveau 4)](/fr/blog/css-color-module-level-4/) sur le blog MDN (2023)
