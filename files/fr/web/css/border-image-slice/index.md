---
title: border-image-slice
slug: Web/CSS/border-image-slice
---

{{CSSRef}}

La propriété **`border-image-slice`** permet de découper l'image fournie via la propriété [`border-image-source`](/fr/docs/Web/CSS/border-image-source) en régions. Ces régions sont alors utilisées pour composer [l'image de bordure](/fr/docs/Web/CSS/border-image) d'un élément.

{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}

Ce découpage crée neuf régions&nbsp;: quatre pour les coins, quatre pour les côtés et une pour le milieu. Ces régions sont définies à l'aide de quatre valeurs mesurées depuis les bords vers l'intérieur de l'image.

![Les 9 zones définies par border-image-slice](border-image-slice.png)

Le diagramme ci-avant illustre l'emplacement de chaque région.

- Les zones 1 à 4 sont les coins. Chacun est utilisé une fois pour former les coins de l'image de bordure finale.
- Les zones 5 à 8 sont les bords. Ils sont [répétés, redimensionnés ou modifiés autrement](/fr/docs/Web/CSS/border-image-repeat) dans la bordure finale afin que celle-ci corresponde aux dimensions de l'élément.
- La zone 9 est la zone centrale et n'est pas utilisée par défaut. Elle est utilisée comme image d'arrière-plan si le mot-clé `fill` est utilisé.

Les propriétés [`border-image-repeat`](/fr/docs/Web/CSS/border-image-repeat), [`border-image-width`](/fr/docs/Web/CSS/border-image-width), [`border-image-outset`](/fr/docs/Web/CSS/border-image-outset) définissent la façon dont ces images seront utilisées.

## Syntaxe

```css
/* Une valeur qui s'applique aux quatre côtés */
border-image-slice: 30%;

/* côtés verticaux | horizontaux */
border-image-slice: 10% 30%;

/* haut | côtés horizontaux | bas */
border-image-slice: 30 30% 45;

/* haut | droit | bas | gauche */
border-image-slice: 7 12 14 5;

/* Le mot-clé `fill` */
border-image-slice: 10% fill 7 12;

/* Valeurs globales */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: revert;
border-image-slice: unset;
```

La propriété `border-image-slice` peut être définie avec une à quatre valeurs `<number-percentage>` qui représentent les emplacements de chaque découpe sur l'image. Les valeurs négatives sont valides et les valeurs supérieures aux dimensions de l'image sont ramenées à `100%`.

- Lorsqu'**une** position est indiquée, les quatre découpages sont effectués à la même distance de chaque bord.
- Lorsque **deux** positions sont indiquées, la première valeur indique la distance de découpage pour les côtés **haut et bas**, la seconde valeur indique la distance de découpage pour les côtés **gauche et droit**.
- Lorsque **trois** positions sont indiquées, la première valeur indique la distance pour le découpage par rapport au bord **haut**, la seconde indique la distance pour le découpage depuis les bords **gauche et droit**, la troisième valeur correspond à la distance de découpage pour le côté **bas**.
- Lorsque **quatre** positions sont indiquées, elles indiquent respectivement la distance de découpage pour les bords **haut**, **droit**, **bas**, et **gauche** (soit le sens des aiguilles d'une montre).

La valeur optionnelle `fill` peut être utilisée et placée à n'importe quel endroit de la déclaration.

### Valeurs

- [`<number>`](/fr/docs/Web/CSS/number)
  - : Représente un décalage par rapport au bord, exprimé en _pixels_ pour les images matricielles et en _coordonnées_ pour les images vectorielles. Pour les images vectorielles, le nombre est relatif à la taille de l'élément plutôt qu'à la taille de l'image source. Aussi, dans ce cas de figure, on utilisera plutôt les pourcentages.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : Représente un décalage par rapport au bord comme pourcentage par rapport à la taille de l'image source&nbsp;: c'est la largeur de l'image qui sert de référence pour les décalages horizontaux et la hauteur de l'image qui sert de référence pour les décalages verticaux.
- `fill`
  - : La région au centre de l'image est conservée et celle-ci est affichée comme image d'arrière-plan mais empilée _sous_ l'arrière-plan fourni par [`background`](/fr/docs/Web/CSS/background). La largeur et la hauteur sont dimensionnées afin de correspondre aux tailles des régions haute et gauche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Bordure avec largeur et portions ajustables

Dans l'exemple suivant, on utilise un simple élément `<div>` avec une image de bordure sur lui. L'image source utilisée pour les bordures est la suivante&nbsp;:

![Des losanges de plusieurs couleurs](border-diamonds.png)

Les losanges mesurent 30px de large. Aussi, en utilisant 30 pixels comme valeur pour [`border-width`](/fr/docs/Web/CSS/border-width) et `border-image-slice`, on aura des losanges complets et nets&nbsp;:

```css
border-width: 30px;
border-image-slice: 30;
```

Ce sont les valeurs par défaut que nous avons utilisées dans cet exemple. Nous avons également fourni des curseurs qui vous permettent d'ajuster les valeurs des deux propriétés dynamiquement et d'observer l'effet&nbsp;:

`border-image-slice` change la taille de la portion d'image échantillonnée pour chaque bordure et coin de bordure (et la zone du contenu si le mot-clé `fill` est utilisé). En utilisant des valeurs autour de 30, on voit que la bordure devient plutôt irrégulière.

`border-width` change la largeur de la bordure. La taille de l'image échantillonnée est mise à l'échelle pour s'inscrire dans la bordure. Ainsi, si la largeur est supérieure à la taille de la portion utilisée, l'image pourra avoir l'air pixelisée (à moins d'avoir utilisé une image SVG).

#### HTML

```html
<div class="wrapper">
  <div></div>
</div>

<ul>
  <li>
    <label for="width">Déplacez pour ajuster <code>border-width</code></label>
    <input type="range" min="10" max="45" id="width" />
    <output id="width-output">30px</output>
  </li>
  <li>
    <label for="slice"
      >Déplacez pour ajuster <code>border-image-slice</code></label
    >
    <input type="range" min="10" max="45" id="slice" />
    <output id="slice-output">30</output>
  </li>
</ul>
```

#### CSS

```css
.wrapper {
  width: 400px;
  height: 300px;
}

div > div {
  width: 300px;
  height: 200px;
  border-width: 30px;
  border-style: solid;
  border-image: url(https://interactive-examples.mdn.mozilla.net/media/examples/border-diamonds.png);
  border-image-slice: 30;
  border-image-repeat: round;
}

li {
  display: flex;
  place-content: center;
}
```

#### JavaScript

```js
const widthSlider = document.getElementById("width");
const sliceSlider = document.getElementById("slice");
const widthOutput = document.getElementById("width-output");
const sliceOutput = document.getElementById("slice-output");
const divElem = document.querySelector("div > div");

widthSlider.addEventListener("input", () => {
  const newValue = widthSlider.value + "px";
  divElem.style.borderWidth = newValue;
  widthOutput.textContent = newValue;
});

sliceSlider.addEventListener("input", () => {
  const newValue = sliceSlider.value;
  divElem.style.borderImageSlice = newValue;
  sliceOutput.textContent = newValue;
});
```

#### Résultat

{{EmbedLiveSample('', '100%', 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Description illustrée de la syntaxe multi-valuée](/fr/docs/Web/CSS/Shorthand_properties#quelques_cas_aux_limites_épineux)
