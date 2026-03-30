---
title: mask-image
slug: Web/CSS/Reference/Properties/mask-image
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-image`** définit l'image utilisée comme calque de masque pour un élément, masquant les sections de l'élément sur lesquelles l'image de masquage est définie en fonction du canal alpha de l'image de masque et, selon la valeur de la propriété {{CSSxRef("mask-mode")}}, de la luminosité de l'image de masque.

## Syntaxe

```css
/* Valeur avec un mot-clé */
mask-image: none;

/* Valeur de type <mask-source> */
mask-image: url(masks.svg#mask1);

/* Valeurs de type <image> */
mask-image: linear-gradient(black, transparent);
mask-image: image(url("mask.png"), skyblue);

/* Gestion de plusieurs masques */
mask-image: url("mask.png"), linear-gradient(black 25%, transparent 35%);

/* Valeurs globales */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

### Valeurs

- `none`
  - : Le masque défini par ce mot-clé sera une image noire transparente.

- `<mask-source>`
  - : Une référence {{CSSxRef("url_value", "&lt;url&gt;")}} vers un masque SVG {{SVGElement("mask")}} ou une image CSS.

- {{CSSxRef("&lt;image&gt;")}}
  - : Une image utilisée pour le masque.

## Description

La propriété `mask-image` fournit un masque qui cache une partie de l'élément auquel il est appliqué. La valeur est une liste de références de masque séparées par des virgules. Chaque référence de masque est une `<image>`, une `<mask-source>`, ou le mot-clé `none`.

Une `<image>` peut être de n'importe quel type d'image, y compris des images générées telles que les [dégradés CSS](/fr/docs/Web/CSS/Reference/Values/gradient).

Si une seule valeur est définie dans la valeur de la propriété `mask-image`, et que cette valeur est `none`, aucun effet de masquage ne sera apparent. Si plusieurs valeurs sont définies, une valeur `none` incluse dans la liste peut ne pas avoir d'effet direct, cependant, d'autres valeurs `mask-*` dans la même position de la liste s'appliqueront à une couche de masque noire transparente et n'auront aucun effet visuel.

Seules les sources d'image servies par les protocoles HTTP et HTTPS sont acceptées comme valeurs `<image>` en raison de la politique {{Glossary("CORS")}}. Les images servies localement, y compris les protocoles relatifs ou absolus `file://`, ne sont pas acceptées et seront rendues en noir transparent. Pour tester les sources d'image URL localement, [configurez un serveur local](/fr/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

Un masque sera considéré comme une couche d'image noire transparente, ne révélant rien, dans les cas suivants&nbsp;:

- L'image de masque est vide (largeur ou hauteur nulle).
- L'image de masque n'a pas pu être téléchargée.
- Le navigateur ne prend pas en charge le format de l'image de masque.
- L'image de masque n'existe pas.
- La valeur du masque ne pointe pas vers une image de masque.

La valeur par défaut de la propriété {{CSSxRef("mask-mode")}} est `match-source`, ce qui signifie que le mode est défini par le mode de l'image de masque elle-même. Le mode de l'image de masque est généralement `alpha`, sauf lorsque la source du masque est un élément SVG {{SVGElement("mask")}}, auquel cas le mode est `luminance` sauf si le mode est changé en `alpha` avec la propriété CSS {{CSSxRef("mask-type")}} ou l'attribut SVG {{SVGAttr("mask-type")}}.

La valeur de `mask-mode` est importante, car elle détermine si l'effet de masquage dépend uniquement des valeurs du canal alpha de la source de l'image ou d'une combinaison de celles-ci et de la luminance du masque (la clarté/obscurité des couleurs qui composent le `mask-image`)&nbsp;:

- Dans tous les cas, la transparence alpha du masque est importante&nbsp;; les zones de l'élément masquées par des sections opaques du `mask-image` seront rendues, tandis que les zones masquées par des sections d'image transparentes sont cachées.
- Lorsque la valeur de `mask-mode` est définie ou résout à `alpha`, seul le canal alpha des couleurs compte&nbsp;; la teinte, la luminosité, etc., n'ont pas d'importance.
- Si la propriété `mask-mode` est définie ou par défaut à `luminance`, la valeur de masquage est la valeur de luminance de chaque couleur multipliée par sa valeur alpha. Le `mask-mode` résoudra à `luminance` si explicitement défini à cette valeur, ou si la propriété est définie à `match-source` et que la source du `mask-image` est un SVG {{SVGElement("mask")}} qui n'a pas sa propriété {{CSSxRef("mask-type")}} ou son attribut {{SVGAttr("mask-type")}} explicitement défini à `alpha`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Dégradé comme image de masque

Dans cet exemple, nous utilisons une valeur `<image>` comme masque, en définissant un [dégradé radial](/fr/docs/Web/CSS/Reference/Values/gradient/radial-gradient) CSS comme notre image de masque pour créer une image ronde avec un bord doux.

#### HTML

Nous incluons un élément HTML {{HTMLElement("img")}}, qui sera également utilisé dans tous les autres exemples.

```html live-sample___example-image live-sample___first-example
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
```

{{EmbedLiveSample("example-image", "100%", 250)}}

#### CSS

Nous utilisons la fonction CSS {{CSSxRef("gradient/radial-gradient")}} pour créer un masque qui a un cercle noir avec un rayon égal à la moitié de la largeur du masque, avant de passer à la transparence sur 10%.

```css live-sample___first-example
img {
  mask-image: radial-gradient(black 50%, transparent 60%);
}
```

#### Résultats

{{EmbedLiveSample("first-example", "100%", 250)}}

La partie de l'élément original qui est masquée par le cercle noir est entièrement opaque, s'estompant vers la transparence à mesure que le masque devient transparent.

### Ressource d'image comme image de masque

Dans cet exemple, la `<mask-source>` utilisée comme notre image de masque est un SVG externe.

#### HTML

Nous incluons la même image que dans l'exemple précédent. Nous avons également inclus l'image que nous allons utiliser comme masque&nbsp;; une étoile dont la {{CSSxRef("fill-opacity")}} est `0.5`, soit 50% opaque.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />

<img
  src="https://mdn.github.io/shared-assets/images/examples/mask-star.svg"
  alt="Une étoile" />
```

#### CSS

Nous utilisons `mask-star.svg` comme image de masque sur notre première image&nbsp;:

```css
img:first-of-type {
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
}
```

#### Résultats

{{EmbedLiveSample("Ressource d'image comme image de masque", "100%", 250)}}

Le masque est semi-opaque, ce qui explique pourquoi les couleurs ne sont pas aussi vives que dans l'exemple précédent. La partie de l'image qui est visible est à 50% opaque&nbsp;; l'opacité du masque appliqué.
Le masque est plus petit que l'image, il se répète donc par défaut. Nous aurions pu utiliser {{CSSxRef("mask-repeat")}} pour contrôler la répétition ou {{CSSxRef("mask-size")}} pour changer la taille du masque, ce que nous faisons dans l'exemple suivant.

### Masques multiples

Cet exemple montre l'application de plusieurs masques.

```html hidden
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
```

#### CSS

Nous appliquons deux masques — le même SVG semi-transparent que dans l'exemple précédent, et un {{CSSxRef("gradient/repeating-radial-gradient")}}. Nous contrôlons la taille des masques en utilisant la propriété {{CSSxRef("mask-size")}}. Comme notre premier masque n'est pas dimensionné à 100%, nous nous assurons que nos masques sont centrés et ne se répètent pas avec les propriétés {{CSSxRef("mask-position")}} et {{CSSxRef("mask-repeat")}}, respectivement.

```css
img {
  mask-size: 95%, 100%;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg"),
    repeating-radial-gradient(transparent 0 5px, black 5px 10px);
}
```

#### Résultats

{{EmbedLiveSample("Masques multiples", "100%", 250)}}

### Masquer avec le `<mask>` SVG

Cet exemple démontre l'utilisation des éléments SVG {{SVGElement("mask")}} comme masques. Dans ce cas, la couleur du masque est importante car la valeur {{CSSxRef("mask-type")}} pour les masques SVG est par défaut `luminance`, ce qui signifie que les zones opaques blanches (100% de luminance) seront masquées et visibles, les zones transparentes et noires (0% de luminance) seront découpées, et tout ce qui se trouve entre les deux sera partiellement masqué.

#### HTML

Nous avons inclus un `id` pour chacune de nos quatre images, ainsi qu'un SVG contenant un nombre égal d'éléments `<mask>`.

```html
<img
  id="green"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
<img
  id="stroke"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
<img
  id="both"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />
<img
  id="alphaMode"
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Drapeau de la fierté" />

<svg height="0" width="0">
  <mask id="greenMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green" />
  </mask>
  <mask id="strokeMask">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="none"
      stroke="white"
      stroke-width="20" />
  </mask>
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="black">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="black" />
  </mask>
</svg>
```

```html hidden
<p>
  <label>
    <input type="checkbox" />
    Définir le <code>mask-mode</code> sur <code>alpha</code>.
  </label>
</p>
```

#### CSS

Nous appliquons un `<mask>` différent à chaque `<img>`. Aucune partie de la dernière image, avec le remplissage `black`, ne sera visible par défaut. Dans ce cas, bien que toutes les couleurs utilisées dans cet exemple soient entièrement opaques, le `mask-mode` par défaut est `match-type`, ce qui se résout en `luminance` dans ce cas.

```css
#green {
  mask-image: url("#greenMask");
}
#stroke {
  mask-image: url("#strokeMask");
}
#both {
  mask-image: url("#bothMask");
}
#alphaMode {
  mask-image: url("#black");
}

body:has(:checked) img {
  mask-mode: alpha;
}
```

Les valeurs de luminance de `black`, `white` et `green` sont respectivement `0`, `100` et [`46.228` <sup>(angl.)</sup>](https://www.colorhexa.com/008000). Cela signifie que les zones où le masque est blanc seront visibles, tandis que les zones où le masque est noir ou entièrement transparent seront découpées (non visibles). Les zones où le masque est vert seront visibles mais plus claires, équivalentes à avoir un masque blanc à 46,228 % d'opacité.

#### Résultats

{{EmbedLiveSample("Masquer avec le `<mask>` SVG", "100%", 540)}}

Basculez la case à cocher pour changer la valeur de `mask-mode` entre `alpha` (coché) et la valeur initiale, qui se résout en `luminance` (non coché). Lorsque `alpha` est utilisé, la couleur du masque n'a pas d'importance&nbsp;; tout ce qui compte est la transparence alpha. Lorsque la valeur se résout en `luminance`, les zones blanches sont visibles, les zones noires ne le sont pas, et les zones vertes sont visibles mais avec une opacité correspondant à la luminance de la couleur verte. Lorsque `mask-mode` est défini sur `alpha`, les couleurs sont équivalentes car elles sont toutes entièrement opaques.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("mask")}}
- La propriété {{CSSxRef("mask-origin")}}
- La propriété {{CSSxRef("mask-position")}}
- La propriété {{CSSxRef("mask-repeat")}}
- La propriété {{CSSxRef("mask-size")}}
- La propriété {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("clip-path")}}
- La propriété {{CSSxRef("background-image")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Les propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
