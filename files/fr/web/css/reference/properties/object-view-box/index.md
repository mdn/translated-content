---
title: object-view-box
slug: Web/CSS/Reference/Properties/object-view-box
l10n:
  sourceCommit: 4b6027efb86db472ca6c37390fe9402b16b2716c
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`object-view-box`** définit un rectangle comme zone visible (<i lang="en">viewbox</i>) à l'intérieur d'un {{Glossary("replaced elements", "élément remplacé")}}, permettant de zoomer ou de déplacer le contenu de l'élément remplacé. Elle fonctionne de manière similaire à l'attribut SVG {{SVGAttr("viewBox")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: object-view-box")}}

```css interactive-example-choice
object-view-box: inset(0 0);
```

```css interactive-example-choice
object-view-box: inset(20%);
```

```css interactive-example-choice
object-view-box: xywh(95px 20px 60px 60px);
```

```css interactive-example-choice
object-view-box: rect(110px 120px 200px 45px);
```

```css interactive-example-choice
object-view-box: none;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/plumeria-146x200.jpg"
    alt="Gros plan de fleurs rouges et de bourgeons sur une branche." />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: 100%;
  border: 2px dotted #888888;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'object-view-box'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
object-view-box: none;

/* Fonctions <basic-shape-rect> */
object-view-box: inset(20%);
object-view-box: inset(20% 30%);
object-view-box: inset(10px 0 25px 33px);
object-view-box: xywh(95px 20px 60px 60px);
object-view-box: rect(10px 30px 30px 10px);

/* Valeurs globales */
object-view-box: inherit;
object-view-box: initial;
object-view-box: revert;
object-view-box: revert-layer;
object-view-box: unset;
```

### Valeurs

- `none` {{Experimental_Inline}}
  - : L'élément n'a pas de vue de boîte. C'est la valeur par défaut.

- [`<basic-shape-rect>`](/fr/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect) {{Experimental_Inline}}
  - : Une fonction {{CSSxRef("basic-shape/inset","inset()")}}, {{CSSxRef("basic-shape/xywh","xywh()")}}, ou {{CSSxRef("basic-shape/rect","rect()")}} définit une vue de boîte pour un élément avec des dimensions naturelles (éléments remplacés). Résout à `none` sinon.

## Description

La propriété `object-view-box` peut être utilisée pour recadrer ou redimensionner des {{Glossary("replaced elements", "éléments remplacés")}}, y compris des images et des vidéos. Elle fonctionne en affichant une section du contenu de l'élément remplacé dans l'espace disponible réservé à cet élément. La section de l'élément remplacé qui est affichée est définie par la valeur de la propriété. L'espace réservé disponible est déterminé par la {{Glossary("extrinsic size", "taille extrinsèque")}} par défaut de l'élément. La sous-section du contenu affichée peut être présentée en zoom avant, en zoom arrière ou à sa taille originale, tout en maintenant le {{Glossary("aspect ratio", "rapport d'aspect")}} intrinsèque du contenu.

La valeur de la propriété est un `<basic-shape-rect>`, l'une des fonctions {{CSSxRef("basic-shape")}} limitées à la définition d'une forme rectangulaire. Par exemple, la valeur peut être une fonction {{CSSxRef("basic-shape/xywh","xywh()")}} :

```css
img {
  object-view-box: xywh(410px 0 400px 150px);
}
```

Dans ce cas, le coin supérieur gauche de la section de l'image qui sera affichée est à `410px` du bord gauche et à `0` du bord supérieur, comme défini par les paramètres de coordonnées x et y. La taille de la section de l'image originale qui sera affichée est de `400px` de large par `150px` de haut&nbsp;; les composants `w` et `h` de la fonction. Cette section de 400x150 de l'image sera affichée dans l'espace qui était réservé à l'image elle-même lors de la mise en page de la page. Que la section du contenu affichée soit à sa taille intrinsèque originale, zoomée ou dézoomée dépend de si la vue de boîte est de 400px x 150px, plus petite ou plus grande que la taille de l'élément image, respectivement.

![L'image du léopard recadrée à l'aide de la propriété object-view-box, avec une vue de boîte de 400px par 150px affichant une section non mise à l'échelle de l'image](https://mdn.github.io/shared-assets/images/diagrams/css/object-view-box/object-view-box_xywh.jpg)

Dans ce cas, comme la vue de boîte rectangulaire définie par la propriété `object-view-box` et la zone rectangulaire de l'élément `<img>` ont la même taille, c'est-à-dire 400 x 150 pixels, l'élément remplacé n'est pas mis à l'échelle.

Diminuez les valeurs `w` et `h` pour créer un effet de zoom avant&nbsp;; à mesure que la section plus petite de l'image est étirée, elle donne un effet de zoom avant.

Augmentez les valeurs `w` et `h` pour créer un effet de zoom arrière&nbsp;; à mesure que la section plus grande de l'image est réduite, elle donne un effet de zoom arrière.

L'animation des coordonnées `x` et `y` crée un effet de panoramique en déplaçant la vue de boîte de l'élément tandis que l'élément lui-même reste à sa position d'origine.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple démontre l'utilisation de base et les effets de la propriété `object-view-box`, avec des exemples utilisant les trois différentes fonctions `<basic-shape-rect>`.

#### HTML

Nous avons trois éléments HTML {{HTMLElement("img")}} presque identiques enveloppés dans des éléments HTML {{HTMLElement("figure")}}&nbsp;; la seule différence est leurs noms de classe.

```html
<figure>
  <img
    class="intrinsic"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Section de l'image à l'échelle originale d'une main peinte" />
  <figcaption>intrinsic</figcaption>
</figure>
<figure>
  <img
    class="zoom-in"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Section agrandie d'une main peinte" />
  <figcaption>zoomed in</figcaption>
</figure>
<figure>
  <img
    class="zoom-out"
    src="https://mdn.github.io/shared-assets/images/examples/painted-hand.jpg"
    alt="Section réduite d'une main peinte" />
  <figcaption>zoomed out</figcaption>
</figure>
```

#### CSS

Nous mettons en forme toutes les images pour qu'elles aient la même largeur et la même hauteur, puis nous définissons chaque classe, et donc chaque image, pour qu'elle ait une valeur `object-view-box` différente. La taille intrinsèque de l'image de la main peinte est de `298px` par `332px`. Nous définissons la hauteur ({{CSSxRef("height")}}) et la largeur ({{CSSxRef("width")}}), en définissant la taille extrinsèque à `200px` par `200px`.

```css
img {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
```

Nous définissons trois valeurs différentes pour la propriété `object-view-box` en utilisant trois fonctions de forme différentes. La valeur de la fonction {{CSSxRef("basic-shape/xywh", "xywh()")}} de l'élément `intrinsic` affiche une section carrée de `200px` de l'image, à partir de `70px` depuis la gauche et `90px` depuis le haut. La fonction {{CSSxRef("basic-shape/rect", "rect()")}} de l'élément `zoom-in` affiche une section carrée de `160px` de l'élément original, allant de `110px` à `270px` depuis le bord supérieur et de `90px` à `250px` depuis le bord gauche. La fonction {{CSSxRef("basic-shape/inset", "inset()")}} de l'élément `zoom-out` affiche une section carrée de `298px` de l'élément original&nbsp;; elle montre toute la largeur de l'image tout en coupant `17px` du haut et du bas.

```css
.intrinsic {
  object-view-box: xywh(70px 90px 200px 200px);
}

.zoom-in {
  object-view-box: rect(110px 250px 270px 90px);
}

.zoom-out {
  object-view-box: inset(17px 0 17px 0);
}
```

```css hidden
@supports not (object-view-box: none) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'object-view-box'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}

figure {
  display: inline-block;
  margin: 0;
}

figcaption {
  text-align: center;
}
```

#### Résultats

{{EmbedLiveSample("Utilisation simple", "", 300)}}

La version `intrinsic` affiche une section non mise à l'échelle de l'image. La version `zoom-in` affiche une section plus petite (`160px` carrés) de l'image, mise à l'échelle pour s'adapter à une vue de `200px` carrés. Comme la section est étirée, elle semble zoomée. La version `zoom-out` affiche une section plus grande (`298px` carrés) de l'image, réduite pour s'adapter à une vue de `200px` carrés. Comme la section est réduite, elle semble dézoomée.

### Zoom avant en direct utilisant la propriété `object-view-box`

Cet exemple montre comment utiliser la propriété `object-view-box` pour zoomer sur une section d'un élément remplacé, à l'intérieur d'un élément HTML de taille statique. Dans ce cas, l'œil du léopard, dans une image très grande, sert de point focal pour l'effet de zoom.

#### HTML

Nous incluons un élément HTML {{HTMLElement("img")}} et un élément HTML {{HTMLElement("input")}} de type [`range`](/fr/docs/Web/HTML/Reference/Elements/input/range), avec un {{HTMLElement("label")}} associé. Les dimensions naturelles, ou taille intrinsèque, de l'image originale du léopard sont de `1244px` de large par `416px` de haut, avec un {{Glossary("aspect ratio", "rapport d'aspect")}} de `3:1`.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="leopard" />
<p>
  <label for="box-size">Zoom avant&nbsp;: </label>
  <input type="range" id="box-size" min="115" max="380" value="150" />
</p>
<output></output>
```

#### CSS

Nous définissons une propriété personnalisée `--box-size`, qui est utilisée comme hauteur et largeur dans la fonction {{CSSxRef("basic-shape/xywh", "xywh()")}}, créant une vue carrée avec un rapport d'aspect de `1:1`. Le point de décalage de la vue, le point focal de notre effet de zoom, est défini à `500px` pour la coordonnée `x` et à `30px` pour la coordonnée `y`, ce qui correspond au coin supérieur gauche de l'œil droit du léopard.

```css hidden
input {
  width: 350px;
}

output {
  text-align: center;
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
  display: block;
}

@supports not (object-view-box: none) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'object-view-box'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

```css
img {
  width: 350px;
  height: 350px;
  border: 2px solid red;

  --box-size: 150px;
  object-view-box: xywh(500px 30px var(--box-size) var(--box-size));
}
```

#### JavaScript

Nous ajoutons un écouteur d'évènements au curseur qui met à jour la valeur de la propriété personnalisée `--box-size` lorsque l'utilisateur·ice interagit avec lui. Pour augmenter l'effet de zoom lorsque le curseur est déplacé vers la droite, la valeur du curseur est inversée en la soustrayant de `500px`, car réduire la taille de la boîte de vue augmente l'effet de zoom.

```js
const img = document.querySelector("img");
const zoom = document.getElementById("box-size");
const output = document.querySelector("output");

function update() {
  const size = 500 - zoom.value;
  img.style.setProperty("--box-size", `${size}px`);
  output.innerText = `object-view-box: xywh(500px 30px ${size}px ${size}px);`;
}

zoom.addEventListener("input", update);
update();
```

#### Résultat

{{ EmbedLiveSample("Zoom avant en direct utilisant la propriété `object-view-box`", "", 480) }}

Déplacez le curseur vers la droite pour augmenter l'effet de zoom et vers la gauche pour le réduire. Le curseur n'affecte que les dimensions de la boîte de vue, tandis que les valeurs `x` et `y`, le point d'origine de la boîte de vue, restent constantes. La taille de l'élément `<img>` ne change pas non plus.

### Déplacement en utilisant la propriété `object-view-box`

Cet exemple démontre le déplacement d'une image en animant la valeur de la propriété `object-view-box`.

#### HTML

Le HTML inclut une seule image.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
  alt="léopard" />
```

#### CSS

Nous définissons une taille d'image et conservons les dimensions de la boîte de vue, les composants `w` et `h` de la fonction `xywh()`, constants, tandis que nous animons les positions supérieure et gauche, en modifiant la position des paramètres `x` et `y` sur cinq secondes.

```css
img {
  width: 350px;
  height: 350px;

  object-view-box: xywh(0 30px 400px 400px);

  animation: panning 5s linear infinite alternate;
}

@keyframes panning {
  from {
    object-view-box: xywh(0 -50px 400px 400px);
  }
  to {
    object-view-box: xywh(800px 68px 400px 400px);
  }
}
```

```css hidden
@supports not (object-view-box: none) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'object-view-box'.";
    color: black;
    background-color: #ffcd33;
    display: block;
    width: 100%;
    text-align: center;
  }
}
```

#### Résultat

{{ EmbedLiveSample("Déplacement en utilisant la propriété `object-view-box`", "", 400) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser la propriété CSS `object-view-box`](/fr/docs/Web/CSS/Guides/Images/Using_object-view-box)
- La propriété {{CSSxRef("object-fit")}}
- La propriété {{CSSxRef("object-position")}}
- La propriété {{CSSxRef("background-size")}}
- [Comprendre le rapport d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- Le module [d'images CSS](/fr/docs/Web/CSS/Guides/Images)
