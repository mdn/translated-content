---
title: repeating-conic-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-conic-gradient
original_slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`repeating-conic-gradient()`** crée une image composée d'un dégradé conique répété (plutôt qu'un [dégradé unique](/fr/docs/Web/CSS/Reference/Values/gradient/conic-gradient)), avec des transitions de couleurs qui tournent autour d'un point central (plutôt que de [rayonner depuis le centre](/fr/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient)).

{{InteractiveExample("Démonstration CSS&nbsp;: repeating-conic-gradient()")}}

```css interactive-example-choice
background: repeating-conic-gradient(red 0%, yellow 15%, red 33%);
```

```css interactive-example-choice
background: repeating-conic-gradient(
  from 45deg at 10% 50%,
  brown 0deg 10deg,
  darkgoldenrod 10deg 20deg,
  chocolate 20deg 30deg
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

## Syntaxe

```css
/* Une étoile avec deux niveaux de bleu. Le dégradé
   est centré dans le quart supérieur gauche et tourné
   de 3 degrés, il n'y a donc pas de ligne horizontale */
repeating-conic-gradient(
  from 3deg at 25% 25%,
  hsl(200 100% 50%) 0deg 15deg,
  hsl(200 100% 60%) 10deg 30deg
)

/* Interpolation dans l'espace colorimétrique polaire
   avec la méthode d'interpolation de teinte la plus longue */
repeating-conic-gradient(in hsl shorter hue, red, blue 90deg, green 180deg)
```

### Valeurs

- {{CSSxRef("&lt;angle&gt;")}}
  - : Lorsque cet angle est précédé du mot-clé `from`, cela définit la rotation du dégradé dans le sens horaire.
- `<position>`
  - : Une position définie avec la même syntaxe que la propriété {{CSSxRef("background-position")}}. Cette position définit le centre du dégradé. Lorsque cette valeur est absente, la valeur utilisée par défaut est `center`, ce qui indique que le dégradé est centré.
- `<angular-color-stop>`
  - : Une valeur {{CSSxRef("&lt;color&gt;")}} pour un arrêt de couleur, suivie par une ou plusieurs positions d'arrêt (données par un {{CSSxRef("&lt;angle&gt;")}} le long de l'arc). La taille de l'arc répété pour le dégradé est donné par l'angle du dernier arrêt de couleur auquel on a soustrait l'angle du premier arrêt de couleur.
- `<color-hint>`
  - : Une indication d'{{Glossary("interpolation")}} qui définit la façon dont le dégradé progresse entre deux arrêts de couleurs adjacents. Cette indication indique l'emplacement où la couleur doit être la couleur intermédiaire entre les deux arrêts environnant. Si cette valeur est absente, la moitié de la transition entre les couleurs sera atteinte à la moitié de l'arc entre les deux arrêts.

> [!NOTE]
> Le rendu des arrêts de couleur pour les dégradés CSS suit les mêmes règles que celui des arrêts de couleur pour [les dégradés SVG](/fr/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Description

Parmi les exemples de dégradés coniques répétés, on trouve les motifs en étoile. Le résultat de la fonction `repeating-conic-gradient()` est un objet du type de données {{CSSxRef("&lt;gradient&gt;")}}, qui est un type particulier de {{CSSxRef("&lt;image&gt;")}}.

Si ni le premier ni le dernier arrêt de couleur ne comporte un angle supérieur à 0deg ou inférieur à 360 degrés respectivement, le dégradé conique ne sera pas répété.

Comme tout autre dégradé, un dégradé conique répété [ne possède pas de dimensions intrinsèques](/fr/docs/Web/CSS/Reference/Values/image#description)&nbsp;: il n'a donc pas de taille naturelle ou préférée, ni de ratio d'affichage préféré. Sa taille réelle correspondra à celle de l'élément auquel il s'applique, ou à la taille définie pour `<image>` si elle diffère de celle de l'élément.

Comme les `<gradient>` appartiennent au type de données `<image>`, ils ne peuvent être utilisés que là où des `<image>` sont acceptées. Pour cette raison, `repeating-conic-gradient()` ne fonctionnera pas avec {{CSSxRef("background-color")}} ni avec d'autres propriétés qui utilisent le type de données {{CSSxRef("&lt;color&gt;")}}.

> [!NOTE]
> Pour créer un dégradé conique qui ne se répète pas, effectuez une rotation complète de 360 degrés pour le dégradé, ou utilisez la fonction {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}.

### Comprendre les dégradés coniques répétés

La syntaxe de `repeating-conic-gradient` est similaire à celle de {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}} et de {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Comme pour le dégradé conique non répété, les arrêts de couleur sont placés autour d'un arc de dégradé. Comme pour le dégradé radial répété, la taille de la section répétée correspond à l'angle du dernier arrêt de couleur auquel on soustrait l'angle du premier arrêt de couleur.

![Comparaison des arrêts de couleur pour les dégradés coniques et radiaux, répétés et non répétés](repeatingconicgradient.png)

Les dégradés ci-dessus sont définis comme étant un tiers bleu, un tiers rouge et un tiers jaune.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Pour qu'un dégradé conique répété se répète vraiment, il faut indiquer clairement où il commence et où il finit, c'est-à-dire le premier et le dernier arrêt de couleur. Si vous ne précisez rien, le dégradé commence à 0 et finit à 100% ou 360 degrés. Dans ce cas, le motif ne se répète pas, car il fait un tour complet.

Dans un dégradé conique, les arrêts de couleur sont placés tout autour d'un cercle, comme les heures sur une horloge. Les couleurs changent en tournant autour du centre, en partant du haut (sauf si vous utilisez `from <angle>` pour changer le point de départ), et avancent dans le sens des aiguilles d'une montre sur l'angle défini, puis recommencent.

Pour créer un dégradé conique répété, il faut choisir un angle de rotation, un centre pour le dégradé, puis donner la liste des couleurs et leurs positions. Les positions des couleurs s'expriment avec un angle (par exemple `deg` pour degrés, `grad` pour grades, `rad` pour radians, ou `turn` pour tours). Un cercle complet fait 360 degrés, 400 grades, 2π radians ou 1 tour. Certains navigateurs acceptent aussi les pourcentages (100% = 360 degrés), mais ça ne fait pas partie de la spécification.

Vous pouvez placer le centre du dégradé où vous voulez dans l'image, ou même en dehors. Pour cela, on utilise la même façon d'écrire la position que pour {{CSSxRef('background-position')}} avec deux valeurs.

L'arc du dégradé correspond à une partie du cercle. 0 degré est en haut (comme midi sur une horloge). Les couleurs du dégradé dépendent des arrêts de couleur, de leurs points de départ et d'arrivée, et éventuellement d'autres arrêts entre les deux. Vous pouvez aussi ajouter des indices pour contrôler comment les couleurs se mélangent entre deux arrêts.

#### Personnaliser les dégradés

En ajoutant plus d'arrêts de couleur avec des angles différents sur l'arc du dégradé, vous pouvez créer des transitions très personnalisées entre plusieurs couleurs. La position d'un arrêt de couleur peut être définie précisément avec un {{CSSxRef("&lt;angle&gt;")}}. Si vous ne précisez pas la position d'un arrêt, il sera placé à mi-chemin entre celui qui le précède et celui qui le suit. Comme pour les dégradés non répétés, si vous ne donnez pas d'angle au premier ou au dernier arrêt, ils seront placés à 0deg et 360deg. Si vous ne donnez pas d'angle à l'un ou l'autre, vous obtiendrez un dégradé conique non répété. Si vous donnez une valeur différente de 0 ou 360 degrés au premier ou au dernier arrêt, le dégradé se répétera selon cette valeur. Par exemple, si vous ne donnez pas d'angle au premier arrêt et que vous mettez 10% au dernier, l'arc se répétera 10 fois. Le point de départ est le premier arrêt déclaré, et le point d'arrivée est l'angle du dernier arrêt déclaré. Les deux dégradés suivants sont équivalents&nbsp;:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Par défaut, les couleurs passent en douceur d'un arrêt à l'autre, et le milieu de la transition se trouve à mi-chemin entre les deux arrêts. Vous pouvez déplacer ce point de transition en ajoutant un indice de couleur, qui indique où le centre de la transition doit se situer.

Si deux arrêts de couleur ou plus sont placés au même endroit, la transition sera une ligne franche entre la première et la dernière couleur déclarées à cet endroit.

Il est possible de mélanger différentes unités d'angle, mais il vaut mieux éviter&nbsp;: cela rend le code CSS difficile à lire.

### Syntaxe formelle

{{CSSSyntax}}

## Accessibilité

Les navigateurs ne fournissent pas d'informations spécifiques aux outils d'assistance quant aux images d'arrière-plan. Les lecteurs d'écran ne pourront donc pas annoncer le sens de l'image aux utilisatrices et utilisateurs. Bien qu'il soit possible de créer des camemberts, damiers, etc. avec CSS, si l'image contient des informations critiques pour la compréhension générale de la page, mieux vaudra décrire ces informations de façon sémantique dans le document, car CSS ne fournit pas de méthode native pour indiquer un texte alternatif.

- [Explications MDN pour le WCAG et la règle 1.1](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.1_—_des_équivalents_textuels_doivent_être_fournis_pour_tout_contenu_non_textuel)
- [Comprendre les critères de réussite 1.1.1 - Guide de compréhension WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Exemples

### Étoile en noir et blanc

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image: repeating-conic-gradient(#fff 0 9deg, #000 9deg 18deg);
}
```

{{EmbedLiveSample("Étoile en noir et blanc", 220, 220)}}

### Dégradé désaxé

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: repeating-conic-gradient(
    from 3deg at 25% 25%,
    green,
    blue 2deg 5deg,
    green,
    yellow 15deg 18deg,
    green 20deg
  );
}
```

{{EmbedLiveSample("Dégradé désaxé", 220, 220)}}

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

Dans cet exemple d'interpolation, on utilise le système de couleurs [hsl](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) et la teinte (<i lang="en">hue</i>) est interpolée.

```css
.shorter {
  background-image: repeating-conic-gradient(
    in hsl shorter hue,
    red,
    blue 180deg
  );
}

.longer {
  background-image: repeating-conic-gradient(
    in hsl longer hue,
    red,
    blue 180deg
  );
}
```

La boîte de gauche utilise l'[interpolation la plus courte](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), c'est-à-dire que la couleur passe directement du rouge au bleu en empruntant l'arc le plus court sur la [roue chromatique](/fr/docs/Glossary/Color_wheel). La boîte de droite utilise l'[interpolation la plus longue](/fr/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), ce qui signifie que la couleur va du rouge au bleu en passant par les verts, les jaunes et les oranges, en empruntant l'arc le plus long.

{{EmbedLiveSample("Interpolation avec teinte", 240, 200)}}

### Autres exemples de `repeating-conic-gradient`

Voir [la page Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients) pour plus d'exemples.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les dégradés CSS](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
- Autres fonctions de dégradés&nbsp;: {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}, {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}, {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- Le type de donnée {{CSSxRef("&lt;hue-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- La fonction {{CSSxRef("image/image","image()")}}
- La fonction {{CSSxRef("element", "element()")}}
- La fonction {{CSSxRef("image/image-set","image-set()")}}
- La fonction {{CSSxRef("cross-fade", "cross-fade()")}}
