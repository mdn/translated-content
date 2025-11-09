---
title: color-mix()
slug: Web/CSS/Reference/Values/color_value/color-mix
original_slug: Web/CSS/color_value/color-mix
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`color-mix()`** prend deux couleurs ({{cssxref("&lt;color&gt;")}}) et retourne le résultat de leur mélange selon des proportions données, dans un espace de couleur donné.

Le choix de l'espace colorimétrique est important pour obtenir le résultat souhaité. Pour les mêmes couleurs, différents espaces peuvent être plus adaptés selon le type d'interpolation recherché&nbsp;:

- Si l'on souhaite reproduire le mélange physique de deux sources lumineuses colorées, utilisez CIE XYZ ou `srgb-linear`, car ces espaces sont linéaires par rapport à l'intensité lumineuse.
- Si l'on veut des couleurs perçues comme uniformément espacées (par exemple pour un dégradé), `Oklab` (et l'ancien `Lab`) conviennent, car ils ont été conçus pour être perceptuellement uniformes.
- Si l'on cherche à éviter que la couleur ne s'affadisse lors du mélange — c'est‑à‑dire maximiser la chroma pendant la transition — `OkLCh` (et l'ancien `LCH`) donnent de bons résultats.
- N'utilisez `sRGB` que si vous devez reproduire le comportement d'un périphérique ou d'un logiciel spécifique qui utilise `sRGB`. Cet espace n'est ni linéaire par rapport à la lumière ni perceptuellement uniforme, et peut produire des mélanges trop sombres ou ternes.

## Syntaxe

```css
/* Espace colorimétrique polaire */
color-mix(in hsl, hsl(200 50 80), coral 80%)

/* Espace colorimétrique rectangulaire */
color-mix(in srgb, plum, #123456)
color-mix(in lab, plum 60%, #123456 50%)

/* Espace colorimétrique personnalisé */
color-mix(in --swop5c, red, blue)

/* Méthode d'interpolation de teinte */
color-mix(in lch longer hue, hsl(200deg 50% 80%), coral)
```

### Valeurs

Notation fonctionnelle&nbsp;: `color-mix(<color-interpolation-method>, <color>[<percentage>], <color>[<percentage>])`

- {{CSSXref("&lt;color-interpolation-method&gt;")}}
  - : Définit la méthode d'interpolation à utiliser pour mélanger les couleurs. Elle consiste en le mot-clé `in` suivi du nom d'un {{Glossary("color space", "espace colorimétrique")}}. Trois types sont disponibles&nbsp;:
    - `<rectangular-color-space>`&nbsp;: [`srgb`](/fr/docs/Glossary/Color_space#srgb), [`srgb-linear`](/fr/docs/Glossary/Color_space#srgb-linear), [`display-p3`](/fr/docs/Glossary/Color_space#display-p3), [`a98-rgb`](/fr/docs/Glossary/Color_space#a98-rgb), [`prophoto-rgb`](/fr/docs/Glossary/Color_space#prophoto-rgb), [`rec2020`](/fr/docs/Glossary/Color_space#rec2020), [`lab`](/fr/docs/Glossary/Color_space#cielab_color_spaces), [`oklab`](/fr/docs/Glossary/Color_space#oklab), [`xyz`](/fr/docs/Glossary/Color_space#xyz_color_spaces), [`xyz-d50`](/fr/docs/Glossary/Color_space#xyz), et [`xyz-d65`](/fr/docs/Glossary/Color_space#xyz-d50).
    - `<polar-color-space>`&nbsp;: [`hsl`](/fr/docs/Web/CSS/Reference/Values/color_value/hsl), [`hwb`](/fr/docs/Web/CSS/Reference/Values/color_value/hwb), [`lch`](/fr/docs/Web/CSS/Reference/Values/color_value/lch), et [`oklch`](/fr/docs/Web/CSS/Reference/Values/color_value/oklch).
    - espace colorimétrique personnalisé&nbsp;: [`<dashed-ident>`](/fr/docs/Web/CSS/Reference/Values/dashed-ident#using_with_color-profile) faisant référence à un [@color profile](/fr/docs/Web/CSS/Reference/At-rules/@color-profile) personnalisé

    > [!NOTE]
    > Lorsque les navigateurs prendront en charge {{cssxref("@color-profile")}}, des espaces colorimétriques personnalisés pourront être utilisés. Actuellement, l'espace doit être l'un de ceux listés dans la [syntaxe formelle](#syntaxe_formelle).

- `<color>`
  - : Une valeur {{CSSXref("&lt;color&gt;")}} à mélanger.

- `<percentage>` {{optional_inline}}
  - : Une valeur {{CSSXref("&lt;percentage&gt;")}} comprise entre `0%` et `100%`, indiquant la proportion de la couleur correspondante à mélanger.

    Les deux pourcentages de couleur (appelés ici `p1` et `p2`) sont normalisés comme suit&nbsp;:
    - Si `p1` et `p2` sont omis, alors `p1 = p2 = 50%`.
    - Si `p1` est omis, alors `p1 = 100% - p2`.
    - Si `p2` est omis, alors `p2 = 100% - p1`.
    - Si `p1 = p2 = 0%`, la fonction est invalide.
    - Si `p1 + p2 ≠ 100%`, alors `p1' = p1 / (p1 + p2)` et `p2' = p2 / (p1 + p2)`, où `p1'` et `p2'` sont les valeurs normalisées.
      - Si `p1 + p2 < 100%`, un multiplicateur alpha de `p1 + p2` est appliqué à la couleur résultante. Cela revient à mélanger avec [`transparent`](/fr/docs/Web/CSS/Reference/Values/named-color#transparent), avec un pourcentage `pt = 100% - p1 - p2`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Mélangeur de couleurs

La démonstration interactive suivante mélange deux couleurs, `color-one` et `color-two`, à l'aide de la fonction `color-mix()`. Les couleurs sources sont affichées sur les côtés, et la couleur mélangée au centre. Vous pouvez changer les couleurs en cliquant dessus et en choisissant une nouvelle couleur via le sélecteur. Vous pouvez aussi ajuster le pourcentage de chaque couleur dans le mélange avec les curseurs, et changer l'espace colorimétrique avec le menu déroulant.

{{EmbedGHLiveSample("css-examples/tools/color-mixer/", '100%', 400)}}

### Ajouter de la transparence

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

La fonction `color-mix()` est utilisée pour ajouter des pourcentages croissants de `red`, déclaré à l'aide d'une [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*) nommée `--base`, définie sur la racine CSS {{cssxref(":root")}}. Le 6<sup>e</sup> élément HTML {{htmlelement("li")}} n'inclut pas de pourcentage, ce qui crée une couleur de sortie deux fois moins opaque que la couleur `--base`. Un fond à rayures est appliqué au {{htmlelement("ul")}} pour rendre la transparence visible.

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

{{EmbedLiveSample("ajouter_de_la_transparence", "100%", 120)}}

De cette manière, la fonction `color-mix()` peut être utilisée pour ajouter de la transparence à n'importe quelle couleur, même si la couleur possède déjà un canal alpha inférieur à 1. Cependant, `color-mix()` ne permet pas de rendre une couleur semi-transparente totalement opaque. Pour cela, utilisez une [couleur relative](/fr/docs/Web/CSS/CSS_colors/Relative_colors) avec une [fonction de couleur CSS](/fr/docs/Web/CSS/Guides/Colors#fonctions). Les couleurs relatives peuvent modifier la valeur de n'importe quel canal, y compris augmenter le canal alpha pour rendre la couleur totalement opaque.

### Utiliser l'interpolation de teinte avec `color-mix()`

Cet exemple montre les méthodes d'interpolation de teinte disponibles pour la fonction `color-mix()`. Lors de l'utilisation de l'[interpolation](/fr/docs/Web/CSS/Reference/Values/color_value#interpolation) de teinte, la teinte résultante se situe entre les valeurs de teinte des deux couleurs mélangées. La valeur diffère selon le chemin emprunté sur le cercle chromatique.

Pour plus d'informations, voir {{cssxref("&lt;hue-interpolation-method&gt;")}}.

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

La méthode d'interpolation `shorter hue` emprunte le chemin le plus court sur le cercle chromatique, tandis que la méthode `longer hue` suit le chemin le plus long. Avec `increasing hue`, le parcours commence par des valeurs croissantes. Avec `decreasing hue`, la valeur diminue. Nous mélangeons deux valeurs {{cssxref("named-color")}} pour créer une série de couleurs intermédiaires `lch()` qui diffèrent selon le chemin emprunté sur le cercle chromatique. Les couleurs mélangées incluent `red`, `blue` et `yellow` avec des valeurs de teinte LCH d'environ 41deg, 301deg et 100deg respectivement.

Pour éviter la redondance du code, nous avons utilisé des [propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) pour les deux couleurs et pour la méthode d'interpolation, en définissant des valeurs différentes sur chaque élément HTML {{htmlelement("ul")}}.

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

{{EmbedLiveSample("utiliser_linterpolation_de_teinte_avec_color-mix", "100%", 440)}}

Avec `longer hue`, les incréments ou décréments entre les couleurs seront toujours supérieurs ou égaux à ceux obtenus avec `shorter hue`. Utilisez `increasing hue` ou `decreasing hue` lorsque la direction du changement de la valeur de teinte est plus importante que la distance entre les valeurs.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSXref("&lt;color&gt;")}}
- Le type de donnée {{CSSXref("&lt;color-interpolation-method&gt;")}}
- Le type de donnée {{cssxref("&lt;hue&gt;")}}
- [Couleurs relatives CSS](/fr/docs/Web/CSS/CSS_colors/Relative_colors)
