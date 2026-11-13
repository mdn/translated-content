---
title: Utiliser les effets de filtre
slug: Web/CSS/Guides/Filter_effects/Using
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Vous est-il déjà arrivé de passer la souris sur une image en noir et blanc ou en sépia pour voir apparaître instantanément la version en couleur&nbsp;? Avez-vous déjà remarqué une image d'arrière-plan comportant une petite zone floue qui rend le texte superposé plus lisible&nbsp;? Auparavant, ces manipulations nécessitaient un logiciel de retouche d'images, du temps et des requêtes HTTP supplémentaires.

## Avantages de l'utilisation des effets de filtre CSS

Le module [Effets de filtre](/fr/docs/Web/CSS/Guides/Filter_effects) en CSS fournit des propriétés et des fonctions qui vous permettent d'appliquer les effets visuels décrits ci-dessus sans utiliser Photoshop ni envoyer de requêtes HTTP supplémentaires. Le seul logiciel requis est le navigateur de l'utilisateur·ice. De plus, contrairement aux effets d'image prédéfinis, les effets de filtre CSS sont réactifs et peuvent être animés.

Le module des effets de filtre CSS fournit les propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}} que vous pouvez utiliser pour influencer le rendu du texte, des images, des arrière-plans et des bordures, ou de tout élément sur lequel vous appliquez ces propriétés. Ce module définit également le type de données {{CSSxRef("&lt;filter-function&gt;")}} qui vous permet d'ajouter des effets graphiques tels que le flou ou le décalage de couleur. En utilisant les fonctions de filtre, vous pouvez non seulement modifier l'apparence d'un élément, mais aussi référencer un filtre SVG à l'aide d'un filtre que vous créez.

## Propriétés des effets de filtre

Les deux propriétés de filtre suivantes du module des effets de filtre CSS vous permettent d'appliquer zéro, un ou plusieurs effets graphiques à un élément&nbsp;:

- En utilisant la propriété {{CSSxRef("filter")}}, vous pouvez appliquer des effets de filtre tels que le flou, l'ombre portée et le sépia à un élément avant que celui-ci ne soit rendu. Les effets de filtre sont appliqués directement sur l'élément, y compris le contenu, les bordures et le remplissage de l'élément.

- En utilisant la propriété {{CSSxRef("backdrop-filter")}}, vous pouvez appliquer des effets graphiques à la zone située derrière un élément (le «&nbsp;fond&nbsp;» de l'élément). La propriété `backdrop-filter` est souvent utilisée pour rendre le contenu au premier plan plus lisible, en particulier lorsque la zone plus large sur laquelle le contenu est placé ne fournit pas suffisamment de contraste pour le contenu. Les effets de filtre sont appliqués uniquement à l'arrière-plan de l'élément et non au contenu de l'élément.

Les propriétés `filter` et `backdrop-filter` acceptent une liste d'effets de filtre séparés par des espaces, qui sont appliqués dans l'ordre dans lequel ils sont déclarés.

## Fonctions de filtre

Le module des effets de filtre CSS fournit 10 fonctions {{CSSxRef("&lt;filter-function&gt;")}}, ainsi que la possibilité de définir une gamme presque infinie d'effets en utilisant des filtres SVG appliqués par une référence `url()`.

Le tableau suivant répertorie les 10 fonctions de filtre, ainsi que leurs types de valeur, la valeur minimale valide le cas échéant, la plus grande valeur qui crée un effet et la valeur initiale utilisée pour [l'interpolation](/fr/docs/Glossary/Interpolation).

| Fonction de filtre                                          | Type de paramètre                                                  | Valeur min | Effet max | Valeur par défaut (aucun effet) |
| ----------------------------------------------------------- | ------------------------------------------------------------------ | ---------- | --------- | ------------------------------- |
| {{CSSxRef("filter-function/blur", "blur()")}}               | {{CSSxRef("&lt;length&gt;")}}                                      | `0`        |           | `0`                             |
| {{CSSxRef("filter-function/brightness", "brightness()")}}   | {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} | `0`        |           | `1` ou `100%`                   |
| {{CSSxRef("filter-function/contrast", "contrast()")}}       | {{CSSxRef("&lt;length&gt;")}}                                      | `0`        |           | `1` ou `100%`                   |
| {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}} | `<shadow>`                                                         |            |           | `0 0 0 currentColor`            |
| {{CSSxRef("filter-function/grayscale", "grayscale()")}}     | {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} | `0`        | `100%`    | `0` ou `0%`                     |
| {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}   | {{CSSxRef("angle")}}                                               |            |           | `0deg`                          |
| {{CSSxRef("filter-function/invert", "invert()")}}           | {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} | `0`        | `100%`    | `0` ou `0%`                     |
| {{CSSxRef("filter-function/opacity", "opacity()")}}         | {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} | `0`        | `100%`    | `1` ou `100%`                   |
| {{CSSxRef("filter-function/saturate", "saturate()")}}       | {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} | `0`        | `100%`    | `100%`                          |
| {{CSSxRef("filter-function/sepia", "sepia()")}}             | {{CSSxRef("&lt;number&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}} | `0`        | `100%`    | `0%`                            |

La valeur minimale autorisée est incluse pour les fonctions de filtre qui ont une valeur minimale. Inclure une valeur inférieure à la valeur minimale pour une fonction de filtre quelconque invalide l'ensemble de la déclaration de propriété, et pas seulement la fonction de filtre fautive dans la liste séparée par des virgules.

La valeur maximale de l'effet peut être dépassée. Inclure une valeur supérieure à la valeur maximale indiquée est valide, mais cela n'augmente pas l'effet au-delà de la valeur maximale indiquée. En d'autres termes, l'effet sur l'élément est le même que lorsque la valeur maximale de l'effet est définie. Par exemple, définir `sepia(400%)` dans [l'exemple de sépia](#appliquer_leffet_de_filtre_sépia) produit le même effet que `sepia(100%)`, la valeur maximale.

La valeur par défaut est une valeur qui ne crée aucun effet. Bien que ces valeurs ne créent aucun effet, elles fournissent les valeurs d'interpolation initiales et offrent un exemple de la manière dont la valeur peut être définie. Ces valeurs par défaut fournissent une référence entre la valeur minimale autorisée et la valeur maximale de l'effet.

## Appliquer les effets de filtre

Les propriétés `filter` et `backdrop-filter` acceptent une liste de fonctions de filtre, qui peut contenir une ou plusieurs `<filter-function>`, le mot-clé par défaut `none`, ou un [filtre SVG](#utiliser_les_filtres_svg) en tant que valeur `url()`.

### Appliquer l'effet de filtre sépia

Si vous survolez l'image sépia ci-dessous, vous voyez l'image en couleur complète apparaître instantanément.

L'image est définie pour être en sépia en définissant la valeur de la propriété `filter` comme la fonction de filtre [`sepia()`](/fr/docs/Web/CSS/Reference/Values/filter-function/sepia). Le filtre est supprimé sur {{CSSxRef(":hover")}} et {{CSSxRef(":focus")}} en définissant `filter: none`.

```html
<img
  tabindex="0"
  alt="Quatre personnes transgenres, autour de 1912"
  src="activists.jpg" />
```

```css
img {
  filter: sepia(100%);
}
img:hover,
img:focus {
  filter: none;
}
```

Dans l'élément HTML {{HTMLElement("img")}}, [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) est définit à `0` afin de permettre aux utilisateur·ice·s de clavier de sélectionner cet élément sans modifier l'ordre de navigation par les tabulations, car `<img>` n'est pas un élément interactif.

```css hidden
img {
  max-width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("Appliquer l'effet de filtre sépia", 600, 550)}}

### Appliquer les effets de filtre à d'autres éléments

Bien qu'elles soient généralement appliquées aux images, les propriétés `filter` et `backdrop-filter` peuvent être appliquées à n'importe quel élément ou pseudo-élément.

Dans cet exemple, un effet lumineux est ajouté à l'aide d'un filtre [`drop-shadow()`](/fr/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) avec un flou de `3px` et un décalage de `0`.

```css
h1 {
  color: midnightblue;
  filter: drop-shadow(0 0 3px magenta);
}
```

```css hidden
h1 {
  font-family: sans-serif;
  font-size: 2rem;
}
```

```html hidden
<h1>Effet lumineux créé à l'aide d'un filtre CSS</h1>
```

{{EmbedLiveSample("Appliquer les effets de filtre à d'autres éléments", "100%", 80)}}

### Appliquer plusieurs filtres

Bien que l'exemple de `filter` sépia ne comprenne qu'une seule fonction de filtre, vous pouvez définir plusieurs filtres. Les propriétés `filter` et `backdrop-filter` acceptent une liste de filtres séparés par des espaces, qui sont appliqués dans l'ordre de leur déclaration.

Cet exemple applique deux filtres — [`hue-rotate()`](/fr/docs/Web/CSS/Reference/Values/filter-function/hue-rotate) et [`blur()`](/fr/docs/Web/CSS/Reference/Values/filter-function/blur) — au moyen de la propriété `backdrop-filter`. L'arrière-plan, la zone située derrière l'élément {{HTMLElement("p")}}, subit un décalage de couleur et un flou.

```css
.container {
  background: url("/shared-assets/images/examples/listen_to_black_women.jpg")
    no-repeat left / contain goldenrod;
}
p {
  backdrop-filter: hue-rotate(240deg) blur(5px);
  background-color: rgb(255 255 255 / 10%);
  text-shadow: 2px 2px black;
}
```

```css hidden
.container {
  padding: 3rem;
  width: 30rem;
}
p {
  padding: 0.5rem;
  color: white;
  font-size: 2rem;
  font-family: sans-serif;
}
```

```html hidden
<div class="container">
  <p>
    Le texte sur les images peut être illisible et inaccessible même avec une
    ombre portée.
  </p>
</div>
```

{{EmbedLiveSample("Appliquer plusieurs filtres", "100%", 300)}}

### Appliquer des filtres répétés

Comme les filtres sont appliqués dans l'ordre séquentiel, vous pouvez utiliser les fonctions de filtre plusieurs fois. Dans cet exemple, le filtre [`drop-shadow()`](/fr/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) est utilisé quatre fois, chaque fois avec une valeur `<shadow>` différente.

```html
<img src="mandala.svg" alt="Rosace colorée" role="img" />
<img src="mandala.svg" alt="Rosace simple" role="img" />
```

```css hidden
img {
  width: 49%;
}
```

```css
img {
  filter: drop-shadow(2px 2px 0 magenta) drop-shadow(-2px -2px 0 royalblue)
    drop-shadow(2px 2px 0 lime) drop-shadow(-2px -2px 0 darkorange);
}
img + img {
  filter: none;
}
```

Dans le premier exemple de rosace, quatre ombres portées sont appliquées à un SVG au tracé linéaire. Le même SVG, dont le filtre est supprimé avec `filter: none`, est inclus à titre de comparaison.

{{EmbedLiveSample("Appliquer des filtres répétés", 600, 400)}}

### Définir l'ordre des fonctions de filtre

Lors de la création d'effets de filtre, une liste de filtres séparés par des espaces est fournie à la propriété `filter` ou `backdrop-filter`. Ces effets de filtre sont appliqués dans l'ordre dans lequel ils apparaissent.

Dans cet exemple, une ombre portée `magenta` et une rotation de teinte de `180deg` sont appliquées au titre de niveau 1. L'exemple montre l'effet lorsque ces filtres sont appliqués dans des ordres différents.

```css
h1 {
  color: midnightblue;
}
#teinteDabord {
  filter: hue-rotate(180deg) drop-shadow(3px 3px magenta);
}
#ombreDabord {
  filter: drop-shadow(3px 3px magenta) hue-rotate(180deg);
}
```

```css hidden
h1 {
  font-family: sans-serif;
  font-size: 2rem;
}
```

```html hidden
<h1 id="teinteDabord">La teinte change avant l'ombre portée.</h1>
<h1 id="ombreDabord">
  L'ombre portée est appliquée avant le changement de teinte.
</h1>
<h1>Aucun effet de filtre n'est appliqué.</h1>
```

{{EmbedLiveSample("Définir l'ordre des fonctions de filtre", "100%", 280)}}

Les mêmes filtres sont appliqués aux deux lignes de texte, mais dans un ordre différent. Dans la première ligne, la teinte du texte est modifiée avant l'application de l'ombre, l'ombre est donc `magenta`. Dans la deuxième ligne, l'ombre portée est ajoutée au texte bleu foncé, puis la teinte du texte et de l'ombre est modifiée.

Aucun effet de filtre n'est appliqué à la troisième ligne afin de montrer l'effet original à titre de comparaison. La troisième ligne reste donc `midnightblue` ou `#191970`. Le filtre `hue-rotate(180deg)` change le texte des deux premières lignes en `#252500`.

> [!NOTE]
> La couleur RVB hexadécimale `#191970` est égale à `hsl(240deg 63.5% 26.9%)`, tandis que `#252500` est `hsl(60deg 100% 7.3%)`. La [rotation de couleur s'effectue dans l'espace colorimétrique sRGB](/fr/docs/Web/CSS/Reference/Values/color_value#interpolation), c'est pourquoi la teinte est modifiée comme prévu sans conserver les mêmes valeurs de saturation et de luminosité.

## Utiliser les filtres SVG

En plus des 10 {{CSSxRef("filter-function")}} définies, les effets de filtre CSS prennent en charge `url()`, dont le paramètre est un [filtre SVG](/fr/docs/Web/SVG/Reference/Element/filter), qui peut être intégré dans un fichier SVG interne ou externe.

Un seul SVG peut être utilisé pour définir plusieurs filtres, chacun avec un `id`&nbsp;:

```html
<svg role="none">
  <defs>
    <filter id="blur1">
      <feGaussianBlur stdDeviation="1" edgeMode="duplicate" />
    </filter>
    <filter id="blur3">
      <feGaussianBlur stdDeviation="3" edgeMode="duplicate" />
    </filter>
    <filter id="hue-rotate90">
      <feColorMatrix type="hueRotate" values="90" />
    </filter>
  </defs>
</svg>
```

Un `id` de filtre est référencé dans `url()` pour les SVG intégrés et externes&nbsp;:

```css
filter: url("#blur3");
filter: url("https://example.com/svg/filters.svg#blur3");
```

### Flouter une image

Tout comme la fonction de filtre {{CSSxRef("filter-function/blur", "blur()")}} applique un flou gaussien aux éléments auxquels elle est appliquée, l'élément de filtre SVG {{SVGElement("feGaussianBlur")}} peut également être utilisé pour appliquer un flou au contenu.

Dans les deux cas, le rayon de flou, défini comme une longueur ({{CSSxRef("&lt;length&gt;")}}) en CSS et comme un nombre ({{CSSxRef("&lt;number&gt;")}}) équivalent en pixels en SVG, indique l'écart type de la fonction gaussienne. En d'autres termes, il indique le nombre de pixels à l'écran qui se mélangent&nbsp;; un rayon plus élevé crée davantage de flou.

L'attribut {{SVGAttr("stdDeviation")}} de {{SVGElement("filter")}} accepte jusqu'à deux valeurs, ce qui permet de créer des valeurs de flou plus complexes. Pour créer un flou équivalent, nous incluons une valeur pour `stdDeviation`&nbsp;:

```html hidden
<table>
  <thead>
    <tr>
      <th>Exemple CSS</th>
      <th>Exemple SVG</th>
      <th>Image originale</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img
          class="filter"
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau arc-en-ciel" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau arc-en-ciel"
          class="svgFilter" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Drapeau arc-en-ciel" />
      </td>
    </tr>
  </tbody>
</table>
```

```html
<svg role="img" aria-label="Drapeau">
  <filter id="blur">
    <feGaussianBlur stdDeviation="3.5" edgeMode="duplicate" />
  </filter>
  <image
    xlink:href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
    filter="url(#blur)" />
</svg>
```

La valeur de filtre SVG `url()` peut être incluse comme valeur de l'attribut {{SVGAttr("filter")}} de l'élément SVG {{SVGElement("image")}}, ou comme partie de la valeur des propriétés CSS `filter` et `backdrop-filter`.

```css hidden
th,
td {
  padding: 5px;
}
```

```css
.filter {
  filter: blur(3.5px);
}
.svgFilter {
  filter: url("#blur");
}
```

{{EmbedLiveSample("Flouter une image", "100%", 550)}}

## Voir aussi

- La propriété {{CSSxRef("mask")}}
- Les propriétés {{CSSxRef("background-blend-mode")}}, {{CSSxRef("mix-blend-mode")}}
- [Les effets de filtre CSS](/fr/docs/Web/CSS/Guides/Filter_effects)
- L'élément SVG {{SVGElement("filter")}}, l'attribut SVG {{SVGAttr("filter")}} dans le [SVG](/fr/docs/Web/SVG)
- [Appliquer des effets SVG au contenu HTML](/fr/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
