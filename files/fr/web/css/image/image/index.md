---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 06bb246b52a759cc0b70c0bc2f72531afa7f8c6a
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`image()`** définit une image (type [`<image>`](/fr/docs/Web/CSS/image)) à la façon de la fonction [`url()`](/fr/docs/Web/CSS/url) mais avec des fonctionnalités supplémentaires comme la définition de la directionnalité, la possibilité d'indiquer une image par défaut si l'image initiale n'est pas prise en charge, l'affichage d'une partie de l'image ou le choix de la couleur à utiliser par défaut si aucune des images indiquées ne peut être affichée.

> **Note :** Attention à ne pas confondre cette notation fonctionnelle CSS avec le constructeur du DOM [`Image()` pour `HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement/Image).

## Syntaxe

{{CSSSyntax}}

où&nbsp;:

- `image-tags` {{optional_inline}}
  - : La directionnalité de l'image, la valeur `ltr` pourra être utilisée afin d'indiquer que l'image est orientée de gauche à droite ou la valeur `rtl` pour indiquer une orientation de droite à gauche.
- `image-src` {{optional_inline}}
  - : Zéro, une ou plusieurs [URL](/fr/docs/Web/CSS/url) ou chaînes de caractères ([`<string>`](/fr/docs/Web/CSS/string)) indiquant des sources d'image et qui contiennent éventuellement des identifiants de fragment
- `color` {{optional_inline}}
  - : Une couleur par défaut. Cette couleur sera utilisée par défaut si aucune image n'est trouvée ou prise en charge parmi les images fournies via `image-src`.

### Gestion de la directionnalité

Le premier paramètre de la fonction `image()` est optionnel et indique la directionnalité de l'image. Lorsque ce paramètre est utilisé et que l'image est utilisée au sein d'un élément ayant la directionnalité opposée, l'image sera renversée horizontalement pour les modes d'écriture horizontaux. Si ce paramètre n'est pas utilisé, l'image ne sera pas renversée lorsque du changement de direction de la langue.

### Fragments d'image

Une différence fondamentale entre `url()` et `image()` est la possibilité d'ajouter un identifiant de fragment d'image. Un identifiant de fragment est donné par&nbsp;: un point de départ défini par ses coordonnées x et y et par une largeur et une hauteur. Cela permet de ne sélectionner qu'une section de l'image source. La section ainsi définie devient une image à part entière aux yeux du moteur de rendu.

```css
background-image: image("monimage.webp#xywh=0,20,40,60");
```

Avec l'exemple précédent, l'image d'arrière-plan utilisée sera une section de l'image `monimage.webp` commençant aux coordonnées (0px,20px), ayant une largeur de 40px et une hauteur de 60px.

La syntaxe pour l'identifiant de fragment `#xywh=#,#,#,#` prend quatre arguments numériques séparés par des virgules. Les deux premiers arguments représentent les coordonnées X et Y du point de départ pour la section, la troisième valeur correspond à la largeur de la portion et la quatrième correspond à la hauteur. Par défaut, ces coordonnées et ces mesures sont exprimées en pixels. La [définition de la dimension spatiale de la spécification des médias](https://www.w3.org/TR/media-frags/#naming-space) indique que les pourcentages peuvent également être pris en charge.

```css
xywh=160,120,320,240        /* créera une image sur 320x240 à x=160 et y=120 */
xywh=pixel:160,120,320,240 /* créera une image sur 320x240 à x=160 et y=120 */
xywh=percent:25,25,50,50    /* créera une image sur 50%x50% à x=25% et y=25% */
```

Les fragments d'image peuvent également être utilisés avec la notation `url()`. La syntaxe `#xywh=#,#,#,#` est rétrocompatible, car elle sera ignorée si elle n'est pas comprise et elle ne rendra pas la source invalide si elle est utilisée avec la notation `url()`. Si le navigateur ne prend pas en charge les notations pour les fragments de média, il ignorera la définition du fragment et affichera l'image intégralement.

Les navigateurs qui prennent en charge `image()` prennent également en charge la notation pour les fragments. Ainsi si le fragment fourni est invalide dans la source pour `image()`, l'image résultante sera considérée invalide.

### Couleur par défaut

Si les deux derniers arguments sont utilisés et dans le cas où les images fournies sont invalides, la fonction `image()` génèrera une image à partir de la couleur indiquée. Cette couleur apparaîtra uniquement dans le cas où l'image source n'est pas utilisable. Ainsi, si on a choisi une image sombre sur laquelle afficher du texte clair, autant prévoir une couleur sombre au cas où afin de garantir un contraste acceptable.

Il est possible de ne pas définir d'image source et de ne passer qu'une couleur comme argument.

À la différence de [`background-color`](/fr/docs/Web/CSS/background-color) dont la couleur sera placée derrière l'ensemble des images d'arrière-plan, on peut utiliser `image()` afin de placer des couleurs sur d'autres images (il s'agira le plus souvent de couleurs semi-transparentes dans ce cas).

La taille du rectangle de couleur appliqué peut être définie grâce à la propriété [`background-size`](/fr/docs/Web/CSS/background-size). Ce comportement diffère de `background-color` qui définit une couleur pour couvrir l'ensemble de l'élément. `image(color)` et `background-color` pourront tous les deux être déplacés grâce aux propriétés [`background-clip`](/fr/docs/Web/CSS/background-clip) et [`background-origin`](/fr/docs/Web/CSS/background-origin).

## Accessibilité

Les outils d'assistance ne peuvent pas analyser les images d'arrière-plan, car les navigateurs n'extraient pas d'informations du contenu visuel des images. Si l'image contient des informations essentielles à la compréhension du document, il faudra décrire ces informations de façon sémantique dans le document afin, entre autres, que les outils d'assistance puissent transmettre les informations aux utilisateurs.

- [Explications MDN pour le WCAG et la règle 1.1](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Comprendre les critères de réussite 1.1.1 - Guide de compréhension WCAG 2.0 du W3C (en anglais)](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Cette fonction peut aider à améliorer l'accessibilité en fournissant une couleur par défaut lorsque le chargement d'une image échoue. Bien qu'il faille toujours utiliser `background-color` comme défaut pour chaque image d'arrière-plan, la fonction CSS `image()` permet d'ajouter une couleur d'arrière-plan pour toute image dont le chargement échouerait (par exemple un fichier PNG/GIF/WebP avec de la transparence).

## Exemples

### Utiliser des images prenant en compte la directionnalité

```html
<ul>
  <li dir="ltr">La puce est une flèche pointant à droite et située à gauche</li>
  <li dir="rtl">
    La puce est la même flèche mais renversée pour pointer à gauche.
  </li>
</ul>
```

```css
ul {
  list-style-image: image(ltr "rightarrow.png");
}
```

Pour les éléments de la liste allant de gauche à droite (ceux avec `dir="ltr"` ou qui héritent de cette direction depuis leur ancêtre), l'image pour la puce sera utilisée telle quelle. Les éléments de la liste avec `dir="rtl"` (que ce soit explicitement défini comme ici ou que cette direction provienne de la direction par défaut du document, par exemple un document en arabe ou en hébreu), l'image sera affichée à droite et sera renversée horizontalement (de la même façon qu'avec `transform: scaleX(-1)`). Le texte sera également affiché de gauche à droite.

{{EmbedLiveSample("", "100%", 200)}}

### Afficher une section de l'image

```html
<div class="box">
  Vous pouvez survoler cet élément pour voir un autre curseur
</div>
```

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16");
}
```

Lorsqu'on survole la boîte, le curseur changera pour afficher une section d'un <i lang="en">sprite</i> mesurant 16 pixels de large et de haut et commençant à x=32 et y=64 sur l'image totale.

{{EmbedLiveSample("", "100%", 100)}}

### Placer une couleur sur une image en arrière-plan

```css hidden
.quarterlogo {
  height: 200px;
  width: 200px;
  border: 1px solid;
}
```

```css
.quarterlogo {
  background-image: image(rgba(0, 0, 0, 0.25)), url("firefox.png");
  background-size: 25%;
  background-repeat: no-repeat;
}
```

```html
<div class="quarterlogo">
  Si pris en charge, un quart de ce div aura un logo assombri
</div>
```

Dans l'exemple précédent, on placera un masque noir semi-transparent sur le logo Firefox utilisé comme image d'arrière-plan. Si on avait utilisé la propriété [`background-color`](/fr/docs/Web/CSS/background-color) à la place, la couleur aurait été placée sous le logo et non sur lui. De plus, le conteneur entier aurait eu cette couleur en arrière-plan. Avec `image()` et [`background-size`](/fr/docs/Web/CSS/background-size) (tout en empêchant l'image de se répéter grâce à [`background-repeat`](/fr/docs/Web/CSS/background-repeat)), le voile noir ne couvrira qu'un quart du conteneur.

{{EmbedLiveSample("","100%","220")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<image>`](/fr/docs/Web/CSS/image)
- [`element()`](/fr/docs/Web/CSS/element)
- [`url()`](/fr/docs/Web/CSS/url)
- [`clip-path`](/fr/docs/Web/CSS/clip-path)
- [`-moz-image-rect()`](/fr/docs/Web/CSS/-moz-image-rect)
- [`<gradient>`](/fr/docs/Web/CSS/gradient)
- [`image-set()`](/fr/docs/Web/CSS/image/image-set)
- [`cross-fade()`](/fr/docs/Web/CSS/cross-fade)
