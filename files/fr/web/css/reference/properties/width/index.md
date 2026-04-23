---
title: Propriété CSS `width`
short-title: width
slug: Web/CSS/Reference/Properties/width
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`width`** définit la largeur d'un élément. Par défaut, elle définit la largeur de la [zone de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_contenu), mais si {{CSSxRef("box-sizing")}} est définie sur `border-box`, elle définit la largeur de la [zone de bordure](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_bordure).

{{InteractiveExample("Démonstration CSS&nbsp;: width")}}

```css interactive-example-choice
width: 150px;
```

```css interactive-example-choice
width: 20em;
```

```css interactive-example-choice
width: 75%;
```

```css interactive-example-choice
width: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte où vous pouvez changer la largeur.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

La valeur définie de `width` s'applique à la zone de contenu tant que sa valeur reste dans les limites définies par {{CSSxRef("min-width")}} et {{CSSxRef("max-width")}}.

- Si la valeur de `width` est inférieure à la valeur de `min-width`, alors `min-width` remplace `width`.
- Si la valeur de `width` est supérieure à la valeur de `max-width`, alors `max-width` remplace `width`.

> [!NOTE]
> En tant que propriété géométrique, `width` s'applique également aux éléments SVG {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} et {{SVGElement("foreignObject")}}, avec `auto` résolvant à `100%` pour `<svg>` et `0` pour les autres éléments, et les valeurs en pourcentage étant relatives à la largeur de la fenêtre SVG pour `<rect>`. La valeur de la propriété CSS `width` remplace toute valeur d'attribut SVG {{SVGAttr("width")}} définie sur l'élément SVG.

## Syntaxe

```css
/* Valeurs de type <length> */
width: 300px;
width: 25em;

/* Valeurs en type <percentage> */
width: 75%;

/* Avec un mot-clé */
width: max-content;
width: min-content;
width: fit-content;
width: auto;
width: stretch;

/* Valeurs fonctionnelles */
width: fit-content(20em);
width: anchor-size(width);
width: anchor-size(--mon-ancre inline, 120%);
width: calc-size(max-content, size / 2);

/* Valeurs globales */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la largeur en tant que valeur de distance.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit la largeur en pourcentage de la largeur du [bloc contenant](/fr/docs/Web/CSS/Guides/Display/Containing_block).
- `auto`
  - : Le navigateur calcule et sélectionne une largeur pour l'élément défini.
- {{CSSxRef("max-content")}}
  - : La largeur préférée intrinsèque.
- {{CSSxRef("min-content")}}
  - : La largeur minimale intrinsèque.
- {{CSSxRef("fit-content")}}
  - : Utilise l'espace disponible, mais pas plus que [max-content](/fr/docs/Web/CSS/Reference/Values/max-content), c'est-à-dire `min(max-content, max(min-content, stretch))`.
- {{CSSxRef("anchor-size()")}}
  - : Définit la largeur par rapport à une dimension d'un élément d'ancrage. Lors de la définition de la `width` d'un élément positionné par une ancre, le premier paramètre par défaut est la largeur de l'ancre associée. Si appliqué à un élément non positionné par une ancre, il définit la largeur sur la valeur de repli. Si aucun repli n'est défini, la déclaration est ignorée.
- {{CSSxRef("calc-size()")}}
  - : Définit la largeur sur une taille intrinsèque modifiée.
- [`fit-content(<length-percentage>)`](/fr/docs/Web/CSS/Reference/Values/fit-content_function) {{Experimental_Inline}}
  - : Utilise la formule `fit-content` avec l'espace disponible remplacé par l'argument défini, limitant la largeur selon la formule `min(taille maximale, max(taille minimale, <length-percentage>))`.
- `stretch`
  - : Définit la largeur de la [boîte de marge](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#parties_dune_boîte) de l'élément à la largeur de son [bloc contenant](/fr/docs/Web/CSS/Guides/Display/Containing_block#identifier_le_bloc_englobant). Elle tente de faire en sorte que la boîte de marge remplisse l'espace disponible dans le bloc contenant, se comportant ainsi de manière similaire à `100%`, mais en appliquant la taille résultante à la boîte de marge plutôt qu'à la boîte déterminée par [la taille de la boîte](/fr/docs/Web/CSS/Reference/Properties/box-sizing).

## Accessibilité

Il faut s'assurer que les éléments sur lesquels on utilise `width` ne sont pas tronqués et ne masquent pas d'autre contenu sur la page lorsque l'utilisateur zoome afin d'agrandir la taille du texte.

- [Comprendre le WCAG sur le MDN, explication de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.4 | Explications du WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Largeur par défaut

Cet exemple démontre l'utilisation de base et la valeur par défaut `auto`.

#### HTML

Nous incluons deux paragraphes&nbsp;; l'un avec un nom de classe.

```html
<p>La communauté du MDN écrit vraiment une excellente documentation.</p>
<p class="has-width">
  La communauté du MDN écrit vraiment une excellente documentation.
</p>
```

#### CSS

Nous faisons en sorte que tous les paragraphes aient un fond doré, en définissant explicitement la `width` du deuxième paragraphe sur `auto`.

```css
p {
  background: gold;
}
p.has-width {
  width: auto;
}
```

#### Résultats

{{EmbedLiveSample("Largeur par défaut", 600, 100)}}

Comme la largeur (`width`) par défaut vaut `auto`, les deux paragraphes ont la même largeur.

### Utiliser des unités de longueur

Cet exemple démontre l'utilisation des en unités de longueur.

#### HTML

Nous incluons deux {{HTMLElement("div")}} éléments avec du texte.

```html
<div class="longueur_px">Largeur mesurée en pixels</div>
<div class="longueur_em">Largeur mesurée en ems</div>
```

#### CSS

L'élément `longueur_px` est défini à `200px` tandis que l'élément `longueur_em` est défini à `20em` de large. Les deux éléments ont également des valeurs différentes pour {{CSSxRef("background-color")}}, {{CSSxRef("color")}}, et {{CSSxRef("border")}} afin de permettre de les différencier lorsqu'ils sont rendus.

```css
.longueur_px {
  width: 200px;

  background-color: red;
  color: white;
  border: 1px solid black;
}

.longueur_em {
  width: 20em;

  background-color: white;
  color: red;
  border: 1px solid black;
}
```

#### Résultats

{{EmbedLiveSample("Utiliser des unités de longueur", 600, 60)}}

L'élément `longueur_px` aura toujours une largeur de 200px. La largeur rendue de l'élément `longueur_em` dépend de la taille de la police.

### Utiliser les pourcentages

Cet exemple démontre l'utilisation des valeurs en pourcentage.

#### HTML

Nous incluons un {{HTMLElement("div")}} élément avec du texte.

```html
<div class="pourcent">Largeur exprimée en pourcentages</div>
```

#### CSS

Nous définissons la `width` de l'élément à `20%` de la largeur de son conteneur parent.

```css
.pourcent {
  width: 20%;

  background-color: silver;
  border: 1px solid red;
}
```

#### Résultats

{{EmbedLiveSample("Utiliser les pourcentages", 600, 60)}}

### Utiliser les tailles intrinsèques

Cet exemple compare `max-content` et `min-content`, et introduit `calc-size`.

#### HTML

Nous incluons trois paragraphes avec le même contenu ; seules leurs classes diffèrent.

```html
<p class="max-green">
  La communauté du MDN écrit vraiment une excellente documentation.
</p>
<p class="min-blue">
  La communauté du MDN écrit vraiment une excellente documentation.
</p>
<p class="min-pink">
  La communauté du MDN écrit vraiment une excellente documentation.
</p>
```

#### CSS

Nous définissons la `width` d'un paragraphe à `max-content`, le deuxième à `min-content`, et le troisième pour être deux fois la taille du `min-content` en utilisant la fonction `calc-size()`. Chacun reçoit une {{CSSxRef("background-color")}} et un {{CSSxRef("border-style")}} différents pour permettre de les différencier.

```css
p.max-green {
  width: max-content;

  background-color: lightgreen;
  border-style: dotted;
}

p.min-blue {
  width: min-content;

  background-color: lightblue;
  border-style: dashed;
}

p.min-pink {
  width: calc-size(min-content, size * 2);

  background-color: pink;
  border-style: solid;
}
```

```css hidden
@supports not (width: calc-size(min-content, size * 2)) {
  body::after {
    content: "Votre navigateur ne prend pas encore en charge la fonction calc-size().";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

#### Résultats

{{EmbedLiveSample("Utiliser les tailles intrinsèques", 600, 230)}}

L'exemple `max-content` est aussi large que le texte. L'exemple `min-content` est aussi large que le mot le plus large. L'exemple `calc-size()` est défini pour être deux fois plus large que le `min-content`.

### Utiliser le mot-clé `stretch`

Cet exemple démontre la valeur `stretch` dans un conteneur [flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout).

#### HTML

Nous incluons un conteneur parent avec deux éléments enfants.

```html
<div class="parent">
  <div class="child">text</div>
  <div class="child stretch">stretch</div>
</div>
```

#### CSS

Nous utilisons la propriété {{CSSxRef("display")}} pour rendre le parent un conteneur flexible, et définissons la `width` du deuxième enfant à `stretch`.

```css
.parent {
  border: solid;
  margin: 1rem;
  display: flex;
}

.child {
  background: #00999999;
  margin: 1rem;
}

.stretch {
  width: stretch;
}
```

```css hidden
@supports not (width: stretch) {
  body::after {
    content: "Votre navigateur ne prend pas encore en charge la valeur stretch.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

#### Résultat

{{EmbedLiveSample("Utiliser le mot-clé `stretch`", "auto", 100)}}

Par défaut, les éléments flexibles sont aussi larges que leur contenu. La valeur `stretch` permet à l'élément d'être aussi large que l'espace disponible le permet, la boîte de marge de l'élément étant sinon limitée à la largeur de son bloc contenant.

### Utiliser la fonction `anchor-size()`

Cet exemple démontre l'utilisation de la fonction `anchor-size()` pour définir la largeur d'un élément positionné par rapport à une ancre&nbsp;; nous avons défini sa largeur comme un multiple de la hauteur de son ancre.

#### HTML

Nous définissons deux éléments {{HTMLElement("div")}}&nbsp;: un élément `ancre` et un élément `boite-info` que nous positionnerons par rapport à l'ancre.

```html
<div class="ancre">⚓︎</div>

<div class="boite-info">
  <p>Boîte d'information.</p>
</div>
```

#### CSS

Nous déclarons le `<div>` `ancre` comme un élément ancre en lui donnant un {{CSSxRef("anchor-name")}}. L'élément positionné a sa propriété {{CSSxRef("position")}} définie sur `absolute` et est associé à l'élément ancre par sa propriété {{CSSxRef("position-anchor")}}. Nous définissons également des dimensions absolues {{CSSxRef("height")}} et `width` sur l'ancre et définissons la largeur de l'élément, positionné par l'ancre, pour être la largeur de l'ancre en utilisant la fonction `anchor-size()` comme valeur de la propriété `width`. En bonus, nous utilisons également la fonction `anchor-size()` pour définir la position {{CSSxRef("left")}} de la boîte d'information, faisant en sorte que l'écart entre l'ancre et la boîte d'information soit d'un quart de la hauteur de l'ancre.

```css hidden
.ancre {
  anchor-name: --mon-ancre;
  width: 120px;
  height: 60px;

  font-size: 2rem;
  background-color: lightpink;
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

.boite-info {
  position-anchor: --mon-ancre;
  position: absolute;
  position-area: right;
  width: anchor-size(width);

  left: calc( anchor-size(height) / 4 )

  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #dddddd;
}
```

```css hidden
body {
  padding: 5em;
}
```

#### Résultats

{{EmbedLiveSample("Utiliser la fonction `anchor-size()`", "auto", 200)}}

Notez comment la largeur de la boîte d'information est toujours la même que celle de l'élément ancre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("height")}}
- La propriété {{CSSxRef("box-sizing")}}
- Les propriétés {{CSSxRef("min-width")}}, {{CSSxRef("max-width")}}
- Les propriétés {{CSSxRef("block-size")}}, {{CSSxRef("inline-size")}}
- L'attribut SVG {{SVGAttr("width")}}
- Le guide [d'introduction au modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- Le module [du modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
- Le module [de positionnement par ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning)
- Le module [des valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
