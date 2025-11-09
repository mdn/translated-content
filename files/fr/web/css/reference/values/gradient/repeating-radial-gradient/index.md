---
title: repeating-radial-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-radial-gradient
original_slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`repeating-radial-gradient()`** crée une image composée de dégradés qui se répètent à partir d'une origine. Elle est similaire à {{cssxref("gradient/radial-gradient", "radial-gradient()")}} et prend les mêmes arguments, mais elle répète les arrêts de couleur indéfiniment dans toutes les directions afin de couvrir l'ensemble du conteneur, comme {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Le résultat de cette fonction est un objet du type de données {{cssxref("&lt;gradient&gt;")}}, qui est un type particulier de {{cssxref("&lt;image&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: repeating-radial-gradient()")}}

```css interactive-example-choice
background: repeating-radial-gradient(#e66465, #9198e5 20%);
```

```css interactive-example-choice
background: repeating-radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: repeating-radial-gradient(
  circle at 100%,
  #333333,
  #333333 10px,
  #eeeeee 10px,
  #eeeeee 20px
);
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

À chaque répétition, les positions des arrêts de couleur sont décalés d'un multiple du dégradé unitaire (ce dernier couvrant la distance entre le premier et le dernier arrêt de couleur). Ainsi, la position de chaque arrêt de couleur final coïncide avec l'arrêt de couleur initial qui suit&nbsp;: si les couleurs sont différentes, on aura une transition abrupte. Pour ne pas obtenir cet effet, on pourra réutiliser la couleur du premier arrêt de couleur pour le dernier arrêt de couleur.

Comme les autres dégradés, un dégradé radial répété [n'a pas de dimensions intrinsèques](/fr/docs/Web/CSS/Reference/Values/image#description), c'est-à-dire qu'il n'a pas de taille ou de proportions préférées. Sa taille réelle correspondra à la taille de l'élément auquel il est appliqué.

Comme les `<gradient>` appartiennent au type de données `<image>`, ils ne peuvent être utilisés que là où les `<image>` peuvent l'être. Pour cette raison, `repeating-radial-gradient()` ne fonctionne pas avec {{cssxref("background-color")}} et les autres propriétés qui utilisent le type de données {{cssxref("&lt;color&gt;")}}.

## Syntaxe

```css
/* Un dégradé répété qui part du centre de son conteneur,
   en commençant par du rouge, passant par du bleu puis,
   finissant par du vert */
repeating-radial-gradient(circle at center, red 0, blue, green 30px);

/* Un dégradé elliptique qui commence dans le coin supérieur gauche
   en commençant rouge puis en passant au vert, cinq fois entre le
   centre et le coin inférieur droit et une seule fois entre le
   centre et le coin supérieur gauche */
repeating-radial-gradient(farthest-corner at 20% 20%, red 0, green, red 20%);
```

### Valeurs

- {{cssxref("&lt;position&gt;")}}
  - : La position du dégradé, interprétée de la même façon que pour les propriétés {{cssxref("background-position")}} ou {{cssxref("transform-origin")}}. La valeur par défaut est `center`.
- `<shape>`
  - : La forme du contour du dégradé. Elle vaut soit `circle` (la forme du dégradé sera un cercle de rayon constant) ou `ellipse` (la forme est une ellipse alignée sur les axes). La valeur par défaut est `ellipse`.
- `<extent-keyword>`
  - : Un mot-clé décrivant la taille de la forme de terminaison. Les valeurs possibles sont&nbsp;:

    | Mot-clé           | Description                                                                                                                                                                                        |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | La forme du contour du dégradé touche le côté de la boîte le plus proche du centre (pour les cercles) ou touche les côtés horizontaux et verticaux les plus proches du centre (pour les ellipses). |
    | `closest-corner`  | La forme du contour du dégradé est dimensionnée afin de toucher exactement le coin de la boîte le plus proche du centre.                                                                           |
    | `farthest-side`   | Cette valeur fonctionne de façon semblable à `closest-side`, sauf que ce seront les côtés les plus éloignés qui seront utilisés.                                                                   |
    | `farthest-corner` | La valeur par défaut. Cette valeur fonctionne de façon semblable à `closest-corner`, sauf que ce sera le coin le plus éloigné du centre qui sera utilisé.                                          |

    > [!NOTE]
    > Les premières implémentations de cette fonction incluaient d'autres mots-clés (`cover` et `contain`) qui sont des synonymes respectifs des mots-clés standards `farthest-corner` et `closest-side`. Seuls les mots-clés standards doivent être utilisés, certaines implémentations ayant déjà abandonné ces anciennes variantes.

- `<color-stop>`
  - : Une valeur d'arrêt de couleur, composée d'une valeur {{cssxref("&lt;color&gt;")}}, suivie d'une ou deux positions d'arrêt optionnelles (définies par une valeur {{cssxref("&lt;percentage&gt;")}} ou {{cssxref("&lt;length&gt;")}} le long de l'axe du dégradé). Un pourcentage à `0%`, ou une longueur de `0`, représentera le centre du dégradé&nbsp;; la valeur `100%` représentera l'intersection de la forme du contour avec la ligne d'évolution du dégradé. Les valeurs de pourcentages intermédiaire sont positionnées linéairement le long du dégradé.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Un dégradé noir et blanc

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{EmbedLiveSample('Un dégradé noir et blanc', 120, 120)}}

### Déplacement du centre

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
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red 0 5%,
    green 5% 10%
  );
}
```

{{EmbedLiveSample('Déplacement du centre', 120, 120)}}

Le dégradé elliptique a son centre situé à 20% du coin supérieur gauche et se répètera 10 fois entre le centre et le coin le plus éloigné (situé donc dans le coin inférieur droit). Les navigateurs qui prennent en charge les arrêts de couleur multiples afficheront des bandes elliptiques rouges et vertes. Les navigateurs qui n'implémentent pas cette fonctionnalité afficheront un dégradé qui va du rouge au noir puis du bleu au vert.

### Interpolation de la teinte

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
  background-image: repeating-radial-gradient(
    circle at center in hsl shorter hue,
    red 30px,
    blue 60px
  );
}

.longer {
  background-image: repeating-radial-gradient(
    circle at center in hsl longer hue,
    red 30px,
    blue 60px
  );
}
```

La boîte de gauche utilise l'[interpolation plus courte](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_courte), ce qui signifie que la couleur passe du rouge au bleu en utilisant l'arc le plus court sur la [roue chromatique](/fr/docs/Glossary/Color_wheel). La boîte de droite utilise l'[interpolation plus longue](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_longue), ce qui signifie que la couleur passe du rouge au bleu en utilisant l'arc le plus long, en traversant les verts, les jaunes et les oranges.

{{EmbedLiveSample("Interpolation de la teinte", 240, 200)}}

> [!NOTE]
> Voir [la page Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- Autres fonctions de dégradés&nbsp;: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Le type de donnée {{cssxref("&lt;hue-interpolation-method&gt;")}}
- Le type de donnée {{cssxref("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{cssxref("&lt;image&gt;")}}
- La fonction {{cssxref("image/image","image()")}}
- La fonction {{cssxref("element", "element()")}}
- La fonction {{cssxref("image/image-set","image-set()")}}
- La fonction {{cssxref("cross-fade", "cross-fade()")}}
