---
title: linear-gradient()
slug: Web/CSS/Reference/Values/gradient/linear-gradient
original_slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`linear-gradient()`** crée une image qui est un dégradé entre deux ou plusieurs couleurs le long d'une ligne droite. Elle fournit une valeur de type [`<gradient>`](/fr/docs/Web/CSS/Reference/Values/gradient) qui est un type spécial d'image ([`<image>`](/fr/docs/Web/CSS/Reference/Values/image)).

{{InteractiveExample("Démonstration CSS&nbsp;: linear-gradient()")}}

```css interactive-example-choice
background: linear-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: linear-gradient(
  to left,
  #333333,
  #333333 50%,
  #eeeeee 75%,
  #333333 75%
);
```

```css interactive-example-choice
background:
  linear-gradient(217deg, rgb(255 0 0 / 0.8), transparent 70.71%),
  linear-gradient(127deg, rgb(0 255 0 / 0.8), transparent 70.71%),
  linear-gradient(336deg, rgb(0 0 255 / 0.8), transparent 70.71%);
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
linear-gradient(red)

/* Un dégradé incliné à 45 degrés,
   commençant en bleu et finissant en rouge */
linear-gradient(45deg, blue, red)

/* Un dégradé allant du coin inférieur droit au coin supérieur gauche,
   commençant en bleu et finissant en rouge */
linear-gradient(to left top, blue, red)

/* Interpolation dans l'espace colorimétrique rectangulaire */
linear-gradient(in oklab, blue, red)

/* Interpolation dans l'espace colorimétrique polaire */
linear-gradient(in hsl, blue, red)

/* Interpolation dans l'espace colorimétrique polaire
   avec la méthode d'interpolation de teinte la plus longue */
linear-gradient(in hsl longer hue, blue, red)

/* Un arrêt de couleur : un dégradé allant de bas
   en haut, commençant en bleu, devenant vert à 40%
   de sa longueur et finissant en rouge. */
linear-gradient(0deg, blue, green 40%, red);

/* Une indication de couleur : un dégradé allant de
   gauche à droite, commençant en rouge atteignant la
   couleur intermédiaire à 10% de la longueur du
   dégradé et prenant les 90% restant pour passer
   au bleu. */
linear-gradient(.25turn, red, 10%, blue);

/* Un dégradé avec plusieurs arrêts de couleur :
   un dégradé incliné de 45 degrés commençant en bas à
   gauche avec une moitié rouge et avec une moitié bleue
   en haut à droite où une ligne dure marque le
   changement entre rouge et bleu */
linear-gradient(45deg, red 0 50%, blue 50% 100%);
```

### Values

- `<side-or-corner>`
  - : La position du point de départ de la ligne selon laquelle évolue le dégradé. Si elle est indiquée, elle se compose du mot `to` et peut contenir jusqu'à deux mots-clés&nbsp;: le premier indiquant le côté horizontal (`left` ou `right` pour indiquer respectivement gauche ou droite), et le second indiquant le côté vertical (`top` ou `bottom` pour indiquer respectivement haut ou bas). L'ordre des deux mots-clés n'a pas d'importance. Si aucun n'est utilisé, la valeur par défaut sera `to bottom`.

    Les valeurs `to top`, `to bottom`, `to left`, et `to right` sont respectivement équivalentes aux angles `0deg`, `180deg`, `270deg`, et `90deg`. Les autres valeurs sont traduites en un angle.

- {{CSSxRef("&lt;angle&gt;")}}
  - : L'angle de la ligne du dégradé. Une valeur de `0deg` sera équivalente à `to top`&nbsp;; les valeurs plus élevées évoluant dans le sens horaire.
- `<linear-color-stop>`
  - : Un arrêt de couleur indiqué par une valeur {{CSSxRef("&lt;color&gt;")}} suivie d'une ou deux positions d'arrêt (chacune étant indiquée comme un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) ou une longueur ({{CSSxRef("&lt;length&gt;")}}) le long de l'axe du dégradé).
- `<color-hint>`
  - : Une indication d'{{Glossary("interpolation")}} qui définit la progression du dégradé entre deux arrêts de couleur adjacents. La longueur définit à quel point entre les deux arrêts le dégradé doit atteindre la couleur intermédiaire. Si cette valeur est absente, la valeur intermédiaire sera atteinte à mi-parcours entre les deux arrêts.

> [!NOTE]
> Le rendu des [arrêts de couleur pour les dégradés CSS](#dégradé_avec_plusieurs_arrêts_de_couleur) suit les mêmes règles que [celui des arrêts de couleur pour les dégradés SVG](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Description

Comme tout autre dégradé, un dégradé linéaire [ne possède pas de dimensions intrinsèques](/fr/docs/Web/CSS/Reference/Values/image#description)&nbsp;; c'est-à-dire qu'il n'a pas de taille naturelle ou préférée ni de ratio d'affichage préféré. Sa taille réelle correspondra à celle de l'élément auquel il s'applique.

Pour créer un dégradé linéaire qui se répète jusqu'à remplir son conteneur, on utilisera plutôt la fonction {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Comme les `<gradient>` appartiennent au type de données `<image>`, ils ne peuvent être utilisés que là où des {{CSSxRef("&lt;image&gt;")}} sont acceptées. Pour cette raison, `linear-gradient()` ne fonctionnera pas avec {{CSSxRef("background-color")}} ni avec d'autres propriétés qui utilisent le type de données {{CSSxRef("&lt;color&gt;")}}.

### Composition d'un dégradé linéaire

Un dégradé linéaire est défini par un axe&nbsp;: la _ligne du dégradé_ et deux ou plusieurs _arrêts de couleur_. Chaque point sur l'axe aura une couleur distincte. Pour créer un dégradé doux, la fonction `linear-gradient()` dessine une suite de lignes colorées, perpendiculaires à l'axe du dégradé, dont la couleur de chacune correspond à la couleur du point d'intersection sur la ligne du dégradé.

![linear-gradient.png](linear-gradient.png)

La ligne du dégradé est définie par le centre de la boîte contenant l'image et par un angle. Les couleurs du dégradé sont déterminées par deux ou plusieurs points&nbsp;: le point de départ, le point d'arrivée et, éventuellement entre, des points d'arrêts de couleur.

Le _point de départ_ est situé sur la ligne du dégradé où la première couleur commence. Le _point d'arrivée_ est situé là où la dernière couleur finit. Chacun de ces deux points est défini par l'intersection de la ligne du dégradé avec une ligne perpendiculaire du coin de la boîte correspondant. Le point de fin peut être considéré comme le symétrique du point de départ. Ces définitions relativement complexes peuvent mener à des effets intéressants intitulés «&nbsp;coins magiques&nbsp;»&nbsp;: les coins les plus proches des points de départ et d'arrivée ont la même couleur (respectivement) que ces deux points.

#### Personnaliser des dégradés

En ajoutant plusieurs arrêts de couleur sur la ligne du dégradé, il est possible de créer une transition personnalisée entre plusieurs couleurs. La position d'un point d'arrêt de couleur peut être explicitement définie en utilisant une longueur ([`<length>`](/fr/docs/Web/CSS/Reference/Values/length)) ou un pourcentage ([`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage)). Si on n'indique pas l'emplacement d'un arrêt de couleur, celui-ci sera placé à la position intermédiaire entre celui qui précède et le suivant. Ainsi, les deux dégradés qui suivent sont équivalents&nbsp;:

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Par défaut, les couleurs évoluent de façon progressive entre deux arrêts de couleur successifs et la couleur intermédiaire est atteinte au milieu de ces deux points. Il est possible de déplacer ce point intermédiaire entre les deux arrêts de couleurs en ajoutant une indication de couleur entre les deux arrêts afin d'indiquer l'emplacement souhaité, exprimé en pourcentage. Dans l'exemple suivant, on commence par un rouge allant du début jusqu'à 10% de la ligne et finissant par un bleu à partir de 90% jusqu'à la fin. Entre 10% et 90%, les couleurs passent du rouge au bleu. Toutefois, le point intermédiaire est atteint à 30% entre les deux plutôt qu'à 50%.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Si deux arrêts de couleur sont situés au même endroit, la transition sera une ligne dure entre la première et la dernière couleur déclarées à cet emplacement.

Les arrêts de couleur doivent être listés dans l'ordre croissant. Les arrêts de couleur qui suivent avec une valeur inférieure écraseront les valeurs des arrêts de couleur précédents et créeront une transition dure. Dans l'exemple qui suit, on passe du rouge au jaune à 40% puis la transition se fait entre le jaune et le bleu pour 25% du dégradé.

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Il est possible d'avoir des arrêts de couleur à plusieurs positions pour une même couleur. On peut déclarer une couleur comme deux arrêts de couleur adjacents en incluant les deux positions dans la déclaration CSS. Les trois dégradés qui suivent sont équivalents&nbsp;:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Par défaut, s'il n'y a pas de couleur avec un arrêt situé à 0%, ce sera la première couleur déclarée qui sera utilisée à ce point. De même la dernière couleur déclarée continuera jusqu'à 100%.

## Exemples

### Un dégradé avec un angle de 45 degrés

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(45deg, red, blue);
}
```

{{EmbedLiveSample("Un_dégradé_avec_un_angle_de_45_degrés", 120, 120)}}

### Un dégradé commençant à 60% de la ligne du dégradé

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(135deg, orange 60%, cyan);
}
```

{{EmbedLiveSample("Un_dégradé_commençant_à_60%_de_la_ligne_du_dégradé", 120, 120)}}

### Un dégradé avec des arrêts de couleur à plusieurs positions

Cet exemple illustre des arrêts de couleur avec plusieurs positions et avec des arrêts adjacents utilisant la même couleur, créant ainsi des bandes.

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(
    to right,
    red 20%,
    orange 20% 40%,
    yellow 40% 60%,
    green 60% 80%,
    blue 80%
  );
}
```

{{EmbedLiveSample("Un_dégradé_avec_des_arrêts_de_couleur_à_plusieurs_positions", 120, 120)}}

### D'autres exemples de dégradés linéaires

Voir la page [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- Les autres fonctions de dégradés&nbsp;: {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- Le type de donnée {{CSSxRef("&lt;hue-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- Le module d'[images CSS](/fr/docs/Web/CSS/Guides/Images)
