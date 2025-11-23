---
title: repeating-linear-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-linear-gradient
original_slug: Web/CSS/gradient/repeating-linear-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`repeating-linear-gradient()`** créé une image composée de dégradés qui se répètent. Cela fonctionne de manière similaire aux dégradés linéaires simples représentés par {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, mais les arrêts de couleurs sont automatiquement répétés, indéfiniment, dans toutes les directions pour couvrir l'ensemble du conteneur. Le résultat de cette fonction est un objet de type {{CSSxRef("gradient")}}, un type spécifique d'[image](/fr/docs/Web/CSS/Reference/Values/image).

{{InteractiveExample("Démonstration CSS&nbsp;: repeating-linear-gradient()")}}

```css interactive-example-choice
background: repeating-linear-gradient(
  #e66465,
  #e66465 20px,
  #9198e5 20px,
  #9198e5 25px
);
```

```css interactive-example-choice
background: repeating-linear-gradient(45deg, #3f87a6, #ebf8e1 15%, #f69d3c 20%);
```

```css interactive-example-choice
background:
  repeating-linear-gradient(transparent, #4d9f0c 40px),
  repeating-linear-gradient(0.25turn, transparent, #3f87a6 20px);
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

La longueur du dégradé répété est la distance entre le premier et le dernier arrêt de couleur. Si la première couleur n'a pas de longueur explicite pour placer l'arrêt, celle-ci vaut 0 par défaut. Pour chaque répétition, les positions des arrêts de couleur sont décalées d'un multiple de la longueur du dégradé unitaire. Par conséquent, la ligne de la couleur de fin coïncide toujours avec la ligne de la couleur de début. Si les deux ne sont pas identiques, on obtiendra alors une transition abrupte. On peut résoudre ce point en réutilisant la première couleur comme dernière couleur.

Comme les autres dégradés, un dégradé linéaire répété [n'a pas de dimensions intrinsèques](/fr/docs/Web/CSS/Reference/Values/image#description), c'est-à-dire qu'il n'a pas de taille ou de proportions préférées. Sa taille réelle correspondra à la taille de l'élément auquel il est appliqué.

Comme les `<gradient>` appartiennent au type de données `<image>`, ils ne peuvent être utilisés que là où les `<image>` peuvent l'être. Pour cette raison, `repeating-linear-gradient()` ne fonctionne pas avec {{CSSxRef("background-color")}} et les autres propriétés qui utilisent le type de données {{CSSxRef("&lt;color&gt;")}}.

## Syntaxe

```css
/* Un dégradé répété incliné à 45 degrés,
   commençant par du bleu et finissant par du rouge, répété 3 fois */
repeating-linear-gradient(45deg, blue, red 33.3%)

/* Un dégradé répété allant du bas à droite vers le haut à gauche,
   commençant par du bleu et finissant par du rouge, répété tous les 20px */
repeating-linear-gradient(to left top, blue, red 20px)

/* Un dégradé allant du bas vers le haut,
   commençant par du bleu, devenant vert après 40%,
   et finissant par du rouge. Ce dégradé ne se répète pas car
   le dernier arrêt de couleur vaut par défaut 100% */
repeating-linear-gradient(0deg, blue, green 40%, red)

/* Un dégradé répété cinq fois, allant de la gauche vers la droite,
   commençant par du rouge, devenant vert, puis revenant au rouge */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%)

/* Interpolation dans l'espace colorimétrique rectangulaire */
repeating-linear-gradient(in oklab, blue, red 50px)

/* Interpolation dans l'espace colorimétrique polaire */
repeating-linear-gradient(in hsl, blue, red 50px)

/* Interpolation dans l'espace colorimétrique polaire
  avec la méthode d'interpolation de teinte la plus longue */
repeating-linear-gradient(in hsl longer hue, blue, red 50px)
```

### Valeurs

- `<side-or-corner>`
  - : La position du point de départ de la ligne du dégradé. Si elle est indiquée, elle se compose du mot-clé `to` suivi d'un à deux mots-clés&nbsp;: le premier indiquant le côté horizontal (`left` pour gauche ou `right` pour droite), et le second indiquant le côté vertical (`top` pour haut ou `bottom` pour bas). L'ordre des mots-clés pour le côté n'a pas d'importance. Si cette valeur n'est pas indiquée, elle vaudra `to bottom` par défaut.

    Les valeurs `to top`, `to bottom`, `to left`, and `to right` sont respectivement équivalentes aux angles `0deg`, `180deg`, `270deg`, et `90deg`. Les autres valeurs sont converties en un angle correspondant.

- {{CSSxRef("&lt;angle&gt;")}}
  - : L'angle indiquant la direction de la ligne du dégradé. Une valeur de `0deg` est équivalente à `to top`. Les valeurs d'angle vont croissant dans le sens horaire.
- `<linear-color-stop>`
  - : Un arrêt de couleur décrit par une valeur {{CSSxRef("&lt;color&gt;")}}, suivie d'une ou deux positions optionnelles (une position étant donnée par un pourcentage (type {{CSSxRef("&lt;percentage&gt;")}}) ou une longueur (type {{CSSxRef("&lt;length&gt;")}}) le long de l'axe du dégradé). Un pourcentage à `0%`, ou une longueur à `0` représente le début du dégradé. La valeur `100%` correspond à 100% de la taille de l'image, indiquant que le dégradé ne se répètera pas.
- `<color-hint>`
  - : L'indication de couleur est une indication pour l'interpolation des couleurs le long du dégradé et entre deux points d'arrêt de couleur. La longueur définit à quel point, entre deux arrêts de couleur, la couleur du dégradé doit atteindre le point médian de la transition de couleur. Si cette valeur est absente, le niveau intermédiaire de la transition se situera à équidistance des deux points d'arrêt de couleur.

> [!NOTE]
> Le rendu des arrêts de couleurs des dégradés CSS suit les mêmes règles que [les arrêts de couleur pour les dégradés SVG](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Bandes zébrées

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 20px,
    black 20px,
    black 40px
  );
  /* avec plusieurs arrêts de couleur */
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    black 20px 40px
  );
}
```

{{EmbedLiveSample('Bandes zébrées', 120, 120)}}

### Dix barres répétées horizontalement

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(26, 198, 204),
    rgb(26, 198, 204) 7%,
    rgb(100, 100, 100) 10%
  );
}
```

{{EmbedLiveSample('Dix barres répétées horizontalement', 120, 120)}}

Le dernier arrêt de couleur étant situé à 10% et le dégradé étant vertical, chaque dégradé unitaire occupe 10% de la hauteur totale, ce qui permet d'avoir 10 barres horizontales.

### Interpolation dans l'espace colorimétrique rectangulaire

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: repeating-linear-gradient(90deg in oklab, blue, red 100px);
}
```

{{EmbedLiveSample("Interpolation dans l'espace colorimétrique rectangulaire", 120, 120)}}

### Interpolation de la teinte

```html hidden
<div class="shorter">teinte plus courte</div>
<div class="longer">teinte plus longue</div>
```

```css hidden
div {
  height: 50vh;
  color: #333300;
  font-weight: bolder;
  padding-left: 1.5rem;
}
```

Dans cet exemple d'interpolation, le système de couleurs [hsl](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) est utilisé et la [teinte](/fr/docs/Web/CSS/Reference/Values/hue) est interpolée.

```css
.shorter {
  background: repeating-linear-gradient(
    90deg in hsl shorter hue,
    red,
    blue 300px
  );
}

.longer {
  background: repeating-linear-gradient(
    90deg in hsl longer hue,
    red,
    blue 300px
  );
}
```

La boîte du haut utilise l'[interpolation plus courte](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_courte), ce qui signifie que la couleur passe du rouge au bleu en utilisant l'arc le plus court sur la [roue chromatique](/fr/docs/Glossary/Color_wheel). La boîte du bas utilise l'[interpolation plus longue](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#plus_longue), ce qui signifie que la couleur passe du rouge au bleu en utilisant l'arc le plus long, en traversant les verts, les jaunes et les oranges.

{{EmbedLiveSample("Interpolation de la teinte", 120, 120)}}

> [!NOTE]
> Voir [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- Autres fonctions de dégradés&nbsp;: {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Le type de donnée {{CSSxRef("&lt;hue-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- La fonction {{CSSxRef("image/image","image()")}}
- La fonction {{CSSxRef("element", "element()")}}
- La fonction {{CSSxRef("image/image-set","image-set()")}}
- La fonction {{CSSxRef("cross-fade", "cross-fade()")}}
