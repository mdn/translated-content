---
title: radial-gradient()
slug: Web/CSS/Reference/Values/gradient/radial-gradient
original_slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`radial-gradient()`** permet de créer une image CSS représentant un dégradé de couleur. Ce dégradé diffuse depuis une origine, le _centre_ du gradient. La forme du dégradé peut être un cercle ou une ellipse. La valeur renvoyée par cette fonction est un objet CSS de type {{CSSxRef("&lt;gradient&gt;")}}, qui est un type particulier d'{{CSSxRef("&lt;image&gt;")}}.

{{InteractiveExample("Démonstrations CSS&nbsp;: radial-gradient()")}}

```css interactive-example-choice
background: radial-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: radial-gradient(
  circle at 100%,
  #333333,
  #333333 50%,
  #eeeeee 75%,
  #333333 75%
);
```

```css interactive-example-choice
background:
  radial-gradient(ellipse at top, #e66465, transparent),
  radial-gradient(ellipse at bottom, #4d9f0c, transparent);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

## Syntaxe

```css
/* Un dégradé avec une seule couleur rouge */
radial-gradient(red)

/* Un dégradé centré dans son conteneur,
   commençant en rouge, passant au bleu, et finissant en vert */
radial-gradient(circle at center, red 0, blue, green 100%)

/* Espace colorimétrique hsl avec interpolation de teinte la plus longue */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Un dégradé radial est défini en indiquant le centre du dégradé (là où sera situé le point à 0%) ainsi que la taille et la forme de la forme finale (là où le dégradé atteint 100%).

### Valeurs

- {{CSSxRef("&lt;position&gt;")}}
  - : La position du dégradé, interprétée de la même façon que pour les propriétés {{CSSxRef("background-position")}} ou {{CSSxRef("transform-origin")}}. La valeur par défaut est `center`.
- `<ending-shape>`
  - : La forme du contour du dégradé. Elle vaut soit `circle` (la forme du dégradé sera un cercle de rayon constant) ou `ellipse` (la forme est une ellipse alignée sur les axes). La valeur par défaut est `ellipse`.
- `<size>`
  - : La taille du contour du dégradé. La valeur par défaut est `farthest-corner`. Cette taille peut être définie explicitement ou décrite par un mot-clé. Pour les définitions des mots-clés qui suivent, on considèrera que les bords de la boîte du dégradé s'étendent indéfiniment dans les deux directions (plutôt que d'être finies).

    Les dégradés circulaires et elliptiques prennent en charge les mots-clés suivants pour `<size>`&nbsp;:

    | Mot-clé           | Description                                                                                                                                                                                        |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | La forme du contour du dégradé touche le côté de la boîte le plus proche du centre (pour les cercles) ou touche les côtés horizontaux et verticaux les plus proches du centre (pour les ellipses). |
    | `closest-corner`  | La forme du contour du dégradé est dimensionnée afin de toucher exactement le coin de la boîte le plus proche du centre.                                                                           |
    | `farthest-side`   | Cette valeur fonctionne de façon semblable à `closest-side`, sauf que ce seront les côtés les plus éloignés qui seront utilisés.                                                                   |
    | `farthest-corner` | Valeur par défaut. Cette valeur fonctionne de façon semblable à `closest-corner`, sauf que ce sera le coin le plus éloigné du centre qui sera utilisé.                                             |

    Si `<ending-shape>` est définie avec `circle`, la taille pourra être fournie explicitement avec une valeur [`<length>`](/fr/docs/Web/CSS/Reference/Values/length), qui indique le rayon du cercle (les valeurs négatives sont invalides).

    Si `<ending-shape>` est définie avec `ellipse` (ou que cette valeur est omise), la taille pourra être indiquée explicitement avec une valeur [`<length-percentage>`](/fr/docs/Web/CSS/Reference/Values/length-percentage) dont les deux composantes fournissent une taille d'ellipse explicite (la première représentant le rayon horizontal et la seconde le rayon vertical). Les valeurs exprimées en pourcentages sont alors relatives à la dimension correspondante de la boîte du dégradé. Les valeurs négatives sont invalides.

    Lorsque le mot-clé `<ending-shape>` est omis, la forme du dégradé est déterminée par la taille indiquée. Une seule valeur `<length>` donne un cercle, tandis que deux valeurs en unités `<length-percentage>` donnent une ellipse. Une seule valeur `<percentage>` n'est pas valide.

- `<linear-color-stop>`
  - : Une valeur d'arrêt de couleur, composée d'une valeur {{CSSxRef("&lt;color&gt;")}}, suivie d'une ou deux positions d'arrêt optionnelles (définies par une valeur {{CSSxRef("&lt;percentage&gt;")}} ou {{CSSxRef("&lt;length&gt;")}} le long de l'axe du dégradé). Un pourcentage à `0%`, ou une longueur de `0`, représentera le centre du dégradé&nbsp;; la valeur `100%` représentera l'intersection de la forme du contour avec la ligne d'évolution du dégradé. Les valeurs de pourcentages intermédiaire sont positionnées linéairement le long du dégradé. Inclure deux fois la même position pour deux arrêts différents revient à créer une rupture franche entre les deux couleurs.
- `<color-hint>`
  - : Une indication pour définir la progression de l'interpolation entre les deux arrêts de couleur adjacents. La longueur définit l'emplacement auquel la transition aurait été effectuée à moitié entre les deux couleurs. Si cette valeur est absente, la transition intermédiaire s'effectue au milieu des deux arrêts de couleur.

## Description

Comme les autres formes de dégradé, un dégradé radial [n'a pas de dimensions intrinsèques](/fr/docs/Web/CSS/Reference/Values/image#description). Autrement dit, il n'a pas de taille naturelle ou préférée ou de proportions particulières. Sa taille réelle correspondra à la taille de l'élément sur lequel il est appliqué.

Pour créer un dégradé radial qui se répète pour remplir son conteneur, on utilisera plutôt la fonction {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Une valeur de type `<gradient>` est une valeur de type `<image>` et ne peut donc être utilisé qu'aux endroits où une telle valeur peut être présente. C'est pour cela que `radial-gradient()` ne fonctionnera pas sur {{CSSxRef("background-color")}} et sur les autres propriétés qui utilisent une valeur de type {{CSSxRef("&lt;color&gt;")}}.

### Composition d'un dégradé radial

![Graphique expliquant les dégradés radiaux : le rayon virtuel est horizontal et part du centre. Le dégradé elliptique, et donc la forme de terminaison, a le même ratio d'aspect que la boîte sur laquelle il est déclaré.](radial_gradient.png)

Les dégradés radiaux sont définis par trois notions&nbsp;:

- Son centre
- Sa forme de terminaison&nbsp;: le contour et sa position
- Ses arrêts de couleur

Pour créer un dégradé progressif, la fonction `radial-gradient()` dessine une suite de formes concentriques qui s'étendent depuis le centre jusqu'à la forme de terminaison (et parfois au-delà). La forme du contour peut être un cercle ou une ellipse.

Les arrêts de couleurs sont positionnés selon une ligne virtuelle qui part du centre et qui va vers la droite. Les positions d'arrêt de couleur exprimées en pourcentage sont relatives à l'intersection de la forme de terminaison et cette ligne virtuelle. Chaque forme concentrique utilise une seule couleur, déterminée par la couleur de la ligne virtuelle qui la croise.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Dégradé simple

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background-image: radial-gradient(cyan 0%, transparent 20%, salmon 40%);
}
```

{{EmbedLiveSample('Dégradé simple', 120, 130)}}

### Dégradé décentré

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #f35 0%,
    #43e 100%
  );
}
```

{{EmbedLiveSample('Dégradé décentré', 240, 130)}}

### Interpolation avec teinte

```html hidden
<div class="shorter"></div>
<div class="longer"></div>
```

```css hidden
div {
  display: inline-block;
  margin-top: 1rem;
  width: 45vw;
  height: 80vh;
}

.shorter::before {
  content: "teinte plus courte";
  display: block;
  margin-top: -1rem;
}

.longer::before {
  content: "teinte plus longue";
  display: block;
  margin-top: -1rem;
}
```

Dans cet exemple d'interpolation, le système de couleurs [hsl](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) est utilisé et la [teinte](/fr/docs/Web/CSS/Reference/Values/hue) est interpolée.

```css
.shorter {
  background-image: radial-gradient(
    circle at center in hsl shorter hue,
    red,
    blue
  );
}

.longer {
  background-image: radial-gradient(
    circle at center in hsl longer hue,
    red,
    blue
  );
}
```

La boîte de gauche utilise l'[interpolation la plus courte](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_courte), ce qui signifie que la couleur passe directement du rouge au bleu en utilisant l'arc le plus court sur la [roue chromatique](/fr/docs/Glossary/Color_wheel). La boîte de droite utilise l'[interpolation la plus longue](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_longue), ce qui signifie que la couleur passe du rouge au bleu en utilisant l'arc le plus long, en traversant les verts, les jaunes et les oranges.

{{EmbedLiveSample("Interpolation avec teinte", 240, 200)}}

### More radial-gradient examples

Voir [la page Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- Les autres fonctions de dégradés&nbsp;: {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Le type de donnée {{CSSxRef("&lt;hue-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- La fonction{{CSSxRef("image/image","image()")}}
- La fonction{{CSSxRef("element", "element()")}}
- La fonction{{CSSxRef("image/image-set","image-set()")}}
- La fonction{{CSSxRef("cross-fade", "cross-fade()")}}
