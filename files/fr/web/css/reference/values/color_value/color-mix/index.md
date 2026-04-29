---
title: Fonction CSS `color-mix()`
short-title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`color-mix()`** prend une ou plusieurs valeurs de type {{CSSxRef("&lt;color&gt;")}} et retourne le résultat de leur mélange selon des proportions données, dans un espace de couleur donné.

## Syntaxe

```css
/* Espace colorimétrique polaire */
color-mix(in hsl, hsl(200 50 80), coral)
color-mix(in hsl, hsl(200 50 80) 20%, coral 80%)

/* Espace colorimétrique rectangulaire */
color-mix(in srgb, plum, #123456)
color-mix(in lab, plum 60%, #123456 50%)

/* Méthode d'interpolation de teinte */
color-mix(in lch increasing hue, hsl(200deg 50% 80%), coral)
color-mix(in lch longer hue, hsl(200deg 50% 80%) 44%, coral 16%)

/* Avec plus de deux couleurs */
color-mix(in oklab, teal, olive, blue)
color-mix(in oklab, teal 20%, olive 30%, blue 50%)
```

### Valeurs

La notation `color-mix( <color-interpolation-method>? , [ <color> && <percentage [0,100]>? ]#)` accepte les paramètres suivants&nbsp;:

- {{CSSxRef("&lt;color-interpolation-method&gt;")}}
  - : Définit la méthode d'interpolation à utiliser pour mélanger les couleurs. Elle consiste en le mot-clé `in` suivi d'un {{Glossary("color space", "espace de couleur")}} (un des espaces colorimétriques listés dans la [syntaxe formelle](#syntaxe_formelle)), et, éventuellement, d'un {{CSSxRef("&lt;hue-interpolation-method&gt;")}}.

- {{CSSxRef("&lt;color&gt;")}}
  - : Une couleur à mélanger&nbsp;; peut être n'importe quelle valeur de type `<color>` valide.

- {{CSSxRef("&lt;percentage&gt;")}} {{Optional_Inline}}
  - : Une valeur en pourcentage définissant la quantité de la couleur correspondante à mélanger&nbsp;; peut être n'importe quelle valeur de type `<percentage>` comprise entre `0%` et `100%`, inclusivement.

### Valeur de retour

Une couleur (`<color>`)&nbsp;; le résultat du mélange des couleurs, dans le `<color-space>` donné, selon les quantités et la direction de teinte définies.

## Description

La fonction `color-mix()` permet de mélanger une ou plusieurs valeurs {{CSSxRef("&lt;color&gt;")}} de n'importe quel type, selon un ratio spécifique, dans un espace colorimétrique donné, en utilisant soit une méthode d'interpolation de teinte plus courte, soit plus longue. Les navigateurs prennent en charge une multitude d'espaces colorimétriques&nbsp;; la fonction `color-mix()` permet de mélanger une large gamme de couleurs, pas seulement limitées à l'espace colorimétrique sRGB.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", "100%", 400)}}

Cette démonstration vous permet de sélectionner deux couleurs, `color-one` et `color-two`, et de les mélanger, en définissant éventuellement le pourcentage de chaque couleur, l'espace colorimétrique dans lequel les couleurs sont mélangées, et la méthode d'interpolation. Les couleurs source sont affichées à l'extérieur, et la couleur mélangée est affichée au centre. Vous pouvez changer les couleurs en cliquant dessus et en choisissant une nouvelle couleur à l'aide du sélecteur de couleurs résultant. Modifiez les valeurs en pourcentage de chaque couleur à l'aide des curseurs. Changez l'espace colorimétrique avec le menu déroulant.

### Choisir un espace colorimétrique

Choisir le bon espace colorimétrique est important pour obtenir les résultats souhaités. Étant donné les mêmes couleurs à mélanger, différents espaces colorimétriques peuvent être plus appropriés selon le cas d'utilisation de l'interpolation.

- Si le résultat du mélange physique de lumières colorées est souhaité, l'espace colorimétrique CIE XYZ ou srgb-linear est approprié, car ils sont linéaires en intensité lumineuse.
- Si les couleurs doivent être uniformément espacées perceptuellement (comme dans un dégradé), les espaces colorimétriques Oklab (et Lab, plus anciennement) sont appropriés, car ils sont conçus pour être perceptuellement uniformes.
- Si l'on souhaite éviter le niveau de gris lors du mélange des couleurs, c'est-à-dire maximiser la chroma tout au long de la transition, les espaces colorimétriques Oklch (et LCH, plus anciennement) fonctionnent bien.
- N'utilisez sRGB que si vous devez correspondre au comportement d'un appareil ou d'un logiciel spécifique qui utilise sRGB. L'espace colorimétrique sRGB n'est ni linéaire en lumière ni perceptuellement uniforme, et produit des résultats moins bons, tels que des mélanges trop sombres ou grisâtres.

### Méthode d'interpolation des couleurs

La {{CSSxRef("&lt;color-interpolation-method&gt;")}} définit quelle méthode d'interpolation doit être utilisée pour mélanger les couleurs. Elle se compose du mot-clé `in` et de l'espace colorimétrique dans lequel les couleurs doivent être mélangées.
L'espace colorimétrique doit être l'un des espaces colorimétriques disponibles listés dans la [syntaxe formelle](#syntaxe_formelle). Selon l'espace colorimétrique utilisé, vous pouvez éventuellement diriger la teinte à être mélangée le long d'un chemin plus long ou plus court.

La catégorie [`<rectangular-color-space>`](/fr/docs/Web/CSS/Reference/Values/color-interpolation-method#rectangular-color-space) inclut [`srgb`](/fr/docs/Glossary/Color_space#srgb), [`srgb-linear`](/fr/docs/Glossary/Color_space#srgb-linear), [`display-p3`](/fr/docs/Glossary/Color_space#display-p3), [`a98-rgb`](/fr/docs/Glossary/Color_space#a98-rgb), [`prophoto-rgb`](/fr/docs/Glossary/Color_space#prophoto-rgb), [`rec2020`](/fr/docs/Glossary/Color_space#rec2020), [`lab`](/fr/docs/Glossary/Color_space#cielab_color_spaces), [`oklab`](/fr/docs/Glossary/Color_space#oklab), [`xyz`](/fr/docs/Glossary/Color_space#xyz_color_spaces), [`xyz-d50`](/fr/docs/Glossary/Color_space#xyz) et [`xyz-d65`](/fr/docs/Glossary/Color_space#xyz-d50).

La catégorie `<polar-color-space>` inclut [`hsl`](/fr/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/fr/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/fr/docs/Web/CSS/Reference/Values/color_value/lch) et [`oklch`](/fr/docs/Web/CSS/Reference/Values/color_value/oklch). Avec ces espaces, vous pouvez éventuellement suivre le nom de l'espace colorimétrique avec une {{CSSxRef("&lt;hue-interpolation-method&gt;")}}. Cette valeur par défaut est `shorter hue`, mais peut également être définie sur `longer hue`, `increasing hue` ou `decreasing hue`.

### Couleurs proportionnelles

Chaque couleur peut être déclarée avec une valeur `<percentage>` comprise entre `0%` et `100%`, ce qui définit la quantité de la couleur correspondante à mélanger. Les pourcentages sont normalisés si la valeur totale des pourcentages déclarés n'est pas égale à `100%`.

Lorsque deux couleurs sont mélangées, les deux pourcentages de couleur (que nous appellerons `p1` et `p2`) sont normalisés comme suit&nbsp;:

- Si `p1` et `p2` sont omis, alors `p1 = p2 = 50%`.
- Si `p1` est omis, alors `p1 = 100% - p2`.
- Si `p2` est omis, alors `p2 = 100% - p1`.
- Si `p1 = p2 = 0%`, la fonction est invalide.
- Si `p1 + p2 ≠ 100%`, alors `p1' = p1 / (p1 + p2)` et `p2' = p2 / (p1 + p2)`, où `p1'` et `p2'` sont les résultats de la normalisation.
  - Si `p1 + p2 < 100%`, un multiplicateur alpha de `p1 + p2` est appliqué à la couleur résultante. Cela est similaire au mélange dans [`transparent`](/fr/docs/Web/CSS/Reference/Values/named-color#transparent), avec un pourcentage `pt = 100% - p1 - p2`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Mélanger deux couleurs

Cet exemple montre le mélange de deux couleurs, le rouge `#a71e14` à différents pourcentages et le blanc sans pourcentage indiqué. Plus la proportion de `#a71e14` est élevée, plus la couleur obtenue est rouge et moins elle est blanche.

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

La fonction `color-mix()` est utilisée pour ajouter des pourcentages croissants de rouge, jusqu'à 100%. Le 6<sup>e</sup> élément HTML {{HTMLElement("li")}} n'inclut pas de pourcentage pour l'une ou l'autre couleur.

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 3px solid #a71e14;
  text-align: center;
}
```

```css
li:nth-child(1) {
  background-color: color-mix(in oklab, #a71e14 0%, white);
}

li:nth-child(2) {
  background-color: color-mix(in oklab, #a71e14 25%, white);
}

li:nth-child(3) {
  background-color: color-mix(in oklab, #a71e14 50%, white);
}

li:nth-child(4) {
  background-color: color-mix(in oklab, #a71e14 75%, white);
}

li:nth-child(5) {
  background-color: color-mix(in oklab, #a71e14 100%, white);
}

li:nth-child(6) {
  background-color: color-mix(in oklab, #a71e14, white);
}
```

#### Résultat

{{EmbedLiveSample("Mélanger deux couleurs", "100%", 120)}}

La valeur totale des deux couleurs dans une fonction `color-mix()` est de 100%, même si les valeurs définies par le·la développeur·euse ne totalisent pas 100%. Dans cet exemple, comme une seule couleur a un pourcentage attribué, l'autre couleur se voit implicitement attribuer une valeur en pourcentage afin que le total combiné soit égal à 100%. Dans le dernier {{HTMLElement("li")}}, où aucune couleur n'a de pourcentage attribué, les deux couleurs par défaut sont de 50%.

### Ajouter de la transparence

Cet exemple montre comment utiliser la fonction `color-mix()` pour ajouter de la transparence à une couleur en mélangeant n'importe quelle couleur avec [`transparent`](/fr/docs/Web/CSS/Reference/Values/named-color#transparent).

#### HTML

```html
<ul>
  <li>0%</li>
  <li>25%</li>
  <li>50%</li>
  <li>75%</li>
  <li>100%</li>
  <li></li>
</ul>
```

#### CSS

La fonction `color-mix()` est utilisée pour ajouter des pourcentages croissants de `red`, déclaré à l'aide d'une [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) nommée `--base`, définie sur la racine CSS {{CSSxRef(":root")}}. Le 6<sup>e</sup> élément HTML {{HTMLElement("li")}} n'inclut pas de pourcentage, ce qui crée une couleur de sortie deux fois moins opaque que la couleur `--base`. Un fond à rayures est appliqué au {{HTMLElement("ul")}} pour rendre la transparence visible.

```css hidden
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  border: 2px solid;
  padding: 10px;
}

li {
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
  font-family: monospace;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
:root {
  --base: red;
}

ul {
  background: repeating-linear-gradient(
    45deg,
    chocolate 0px 2px,
    white 2px 12px
  );
}

li:nth-child(1) {
  background-color: color-mix(in srgb, var(--base) 0%, transparent);
}

li:nth-child(2) {
  background-color: color-mix(in srgb, var(--base) 25%, transparent);
}

li:nth-child(3) {
  background-color: color-mix(in srgb, var(--base) 50%, transparent);
}

li:nth-child(4) {
  background-color: color-mix(in srgb, var(--base) 75%, transparent);
}

li:nth-child(5) {
  background-color: color-mix(in srgb, var(--base) 100%, transparent);
}

li:nth-child(6) {
  background-color: color-mix(in srgb, var(--base), transparent);
}
```

#### Résultat

{{EmbedLiveSample("Ajouter de la transparence", "100%", 120)}}

De cette manière, la fonction `color-mix()` peut être utilisée pour ajouter de la transparence à n'importe quelle couleur, même si la couleur possède déjà un canal alpha inférieur à 1. Cependant, `color-mix()` ne permet pas de rendre une couleur semi-transparente totalement opaque. Pour cela, utilisez une [couleur relative](/fr/docs/Web/CSS/Guides/Colors/Relative_colors) avec une [fonction de couleur CSS](/fr/docs/Web/CSS/Guides/Colors#fonctions). Les couleurs relatives peuvent modifier la valeur de n'importe quel canal, y compris augmenter le canal alpha pour rendre la couleur totalement opaque.

### Utiliser l'interpolation de teinte avec `color-mix()`

Cet exemple montre les méthodes d'interpolation de teinte disponibles pour la fonction `color-mix()`. Lors de l'utilisation de [l'interpolation](/fr/docs/Web/CSS/Reference/Values/color_value#interpolation) de teinte, la teinte résultante se situe entre les valeurs de teinte des deux couleurs mélangées. La valeur diffère selon le chemin emprunté sur le cercle chromatique.

Pour plus d'informations, voir {{CSSxRef("&lt;hue-interpolation-method&gt;")}}.

```html hidden
<p>plus long</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>plus court</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>augmente</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
<p>diminue</p>
<ul>
  <li>100%</li>
  <li>80%</li>
  <li>60%</li>
  <li>40%</li>
  <li>20%</li>
  <li>0%</li>
</ul>
```

#### CSS

La méthode d'interpolation `shorter hue` emprunte le chemin le plus court sur le cercle chromatique, tandis que la méthode `longer hue` suit le chemin le plus long. Avec `increasing hue`, le parcours commence par des valeurs croissantes. Avec `decreasing hue`, la valeur diminue. Nous mélangeons deux valeurs {{CSSxRef("named-color")}} pour créer une série de couleurs intermédiaires `lch()` qui diffèrent selon le chemin emprunté sur le cercle chromatique. Les couleurs mélangées incluent `red`, `blue` et `yellow` avec des valeurs de teinte LCH d'environ 41deg, 301deg et 100deg respectivement.

Pour éviter la redondance du code, nous avons utilisé des [propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) pour les deux couleurs et pour la méthode d'interpolation, en définissant des valeurs différentes sur chaque élément HTML {{HTMLElement("ul")}}.

```css hidden
body {
  font-family: monospace;
}
ul {
  display: flex;
  list-style-type: none;
  font-size: 150%;
  gap: 10px;
  padding: 10px;
  margin: 0;
}

li {
  padding: 10px;
  flex: 1;
  outline: 1px solid var(--base);
  text-align: center;
}
```

```css
ul:nth-of-type(1) {
  --distance: longer; /* Incréments de teinte de 52 degrés */
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(2) {
  /* Décréments de teinte de 20 degrés */
  --distance: shorter;
  --base: red;
  --mixin: blue;
}
ul:nth-of-type(3) {
  /* Incréments de teinte de 40 degrés */
  --distance: increasing;
  --base: yellow;
  --mixin: blue;
}
ul:nth-of-type(4) {
  /* Décréments de teinte de 32 degrés */
  --distance: decreasing;
  --base: yellow;
  --mixin: blue;
}

li:nth-child(1) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 100%,
    var(--mixin)
  );
}

li:nth-child(2) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 80%,
    var(--mixin)
  );
}

li:nth-child(3) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 60%,
    var(--mixin)
  );
}

li:nth-child(4) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 40%,
    var(--mixin)
  );
}

li:nth-child(5) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 20%,
    var(--mixin)
  );
}

li:nth-child(6) {
  background-color: color-mix(
    in lch var(--distance) hue,
    var(--base) 0%,
    var(--mixin)
  );
}
```

#### Résultat

{{EmbedLiveSample("Utiliser l'interpolation de teinte avec `color-mix()`", "100%", 440)}}

Avec `longer hue`, les incréments ou décréments entre les couleurs seront toujours supérieurs ou égaux à ceux obtenus avec `shorter hue`. Utilisez `increasing hue` ou `decreasing hue` lorsque la direction du changement de la valeur de teinte est plus importante que la distance entre les valeurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Le type de donnée {{CSSxRef("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{CSSxRef("&lt;hue&gt;")}}
- [Couleurs relatives CSS](/fr/docs/Web/CSS/Guides/Colors/Relative_colors)
