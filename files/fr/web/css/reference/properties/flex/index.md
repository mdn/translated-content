---
title: flex
slug: Web/CSS/Reference/Properties/flex
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`flex`** définit comment un {{Glossary("flex item", "élément flexible")}} va grandir ou rétrécir pour occuper l'espace disponible dans son conteneur flexible.

{{InteractiveExample("CSS Demo: flex")}}

```css interactive-example-choice
flex: 1;
```

```css interactive-example-choice
flex: 2;
```

```css interactive-example-choice
flex: 1 30px;
```

```css interactive-example-choice
flex: 1 1 100px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">Modifiez moi</div>
  <div>flex: 1</div>
  <div>flex: 1</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
flex: none; /* 0 0 auto */

/* Une valeur sans unité pour flex-grow
  flex-basis vaut alors 0% */
flex: 2; /* 2 1 0% */

/* Une valeur, largeur/hauteur : flex-basis */
flex: auto; /* 1 1 auto */
flex: 10em; /* 1 1 10em */
flex: 30%;
flex: min-content;

/* Deux valeurs : flex-grow | flex-basis */
flex: 1 30px; /* 1 1 30px */

/* Deux valeurs : flex-grow | flex-shrink */
flex: 2 2; /* 2 2 0% */

/* Trois valeurs : flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Valeurs globales */
flex: inherit;
flex: initial; /* 0 1 auto */
flex: revert;
flex: revert-layer;
flex: unset;
```

La propriété `flex` peut être définie avec une, deux ou trois valeurs.

- **Avec une valeur**, la syntaxe doit être&nbsp;:
  - une valeur valide pour {{CSSxRef("&lt;flex-grow&gt;")}}&nbsp;: dans tous les navigateurs, la propriété raccourcie est alors étendue en `flex: <flex-grow> 1 0%`. Cependant, la spécification indique qu'elle devrait être étendue en `flex: <flex-grow> 1 0`.
  - une valeur valide pour {{CSSxRef("&lt;flex-basis&gt;")}}&nbsp;: la propriété raccourcie est alors étendue en `flex: 1 1 <flex-basis>`.
  - le mot-clé `none` ou l'un des mots-clés globaux.

- **Avec deux valeurs**&nbsp;:
  - La première valeur doit être une valeur valide pour {{CSSxRef("flex-grow")}}.

  - La seconde valeur doit être l'une des suivantes&nbsp;:
    - une valeur valide pour {{CSSxRef("flex-shrink")}}&nbsp;: dans tous les navigateurs, la propriété raccourcie est alors étendue en `flex: <flex-grow> <flex-shrink> 0%`.
    - une valeur valide pour {{CSSxRef("flex-basis")}}&nbsp;: la propriété raccourcie est alors étendue en `flex: <flex-grow> 1 <flex-basis>`.

- **Avec trois valeurs**&nbsp;: les valeurs doivent être dans l'ordre suivant&nbsp;:
  1. une valeur valide pour {{CSSxRef("flex-grow")}}.
  2. une valeur valide pour {{CSSxRef("flex-shrink")}}.
  3. une valeur valide pour {{CSSxRef("flex-basis")}}.

### Valeurs

- `<'flex-grow'>`
  - : Définit la propriété {{CSSxRef("flex-grow")}} de l'élément flexible. Les valeurs négatives sont interdites. La valeur par défaut est `1` si elle est omise (initiale&nbsp;: `0`).
- `<'flex-shrink'>`
  - : Définit la propriété {{CSSxRef("flex-shrink")}} de l'élément flexible. Les valeurs négatives sont interdites. La valeur par défaut est `1` si elle est omise (initiale&nbsp;: `1`).
- `<'flex-basis'>`
  - : Définit la propriété {{CSSxRef("flex-basis")}} de l'élément flexible. La valeur par défaut est `0%` si elle est omise. La valeur initiale est `auto`.
- `none`
  - : L'élément est dimensionné selon ses propriétés `width` et `height`. Il n'est pas flexible&nbsp;: il ne peut ni rétrécir ni grandir par rapport au conteneur flexible. Cela équivaut à `flex: 0 0 auto`.

Les effets flexbox les plus courants peuvent être obtenus avec les valeurs `flex` suivantes&nbsp;:

- `initial`&nbsp;: L'élément flexible ne grandit pas mais peut rétrécir. Cette valeur par défaut équivaut à `flex: 0 1 auto`. L'élément est dimensionné selon ses propriétés `width` ou `height`, selon la direction du `flex-direction`. S'il y a un espace négatif disponible, l'élément rétrécira à sa taille minimale pour s'adapter au conteneur, mais il ne grandira pas pour absorber l'espace positif disponible dans le conteneur flexible.
- `auto`&nbsp;: L'élément flexible peut grandir et rétrécir. Cette valeur équivaut à `flex: 1 1 auto`. L'élément est dimensionné selon ses propriétés `width` ou `height`, selon la direction du `flex-direction`, mais il grandit pour absorber l'espace positif disponible dans le conteneur flexible ou rétrécit à sa taille minimale pour s'adapter au conteneur en cas d'espace négatif. L'élément flexible est totalement flexible.
- `none`&nbsp;: L'élément flexible ne grandit ni ne rétrécit. Cette valeur équivaut à `flex: 0 0 auto`. L'élément est dimensionné selon ses propriétés `width` ou `height`, selon la direction du conteneur flexible. L'élément flexible est totalement inflexible.
- `flex: <number [1,∞]>`&nbsp;: La taille principale de l'élément flexible sera proportionnelle au nombre défini. Cette valeur équivaut à `flex: <number> 1 0`. Cela définit `flex-basis` à zéro et rend l'élément flexible. L'élément sera au moins aussi large ou haut que sa taille minimale, l'espace positif disponible du conteneur étant réparti proportionnellement selon les facteurs de croissance de cet élément et de ses éléments frères. Si tous les éléments flex utilisent ce modèle, ils seront tous dimensionnés en proportion de leur valeur numérique.

  > [!WARNING]
  > Les navigateurs utilisent la valeur `flex-basis` `0%` lorsque la propriété `flex-basis` n'est pas définie dans une valeur `flex`. Ce n'est pas la même chose que la valeur `flex-basis` `0` indiquée par la spécification. Cela peut affecter la mise en page flexible dans certains cas. Voyez cet effet démontré dans l'exemple [`flex-basis` `0` contre `0%`](/fr/docs/Web/CSS/Reference/Properties/flex-basis#flex-basis_0_contre_0).

## Description

Pour la plupart des cas, on utilisera une des valeurs suivantes&nbsp;: `auto`, `initial`, `none` ou un nombre positif sans unité. Pour voir l'effet de ces valeurs, essayez de redimensionner les conteneurs flexibles ci-après&nbsp;:

```html hidden
<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item initial">initial</div>
  <div class="item initial">initial</div>
</div>

<div class="flex-container">
  <div class="item auto">auto</div>
  <div class="item auto">auto</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item initial">initial</div>
  <div class="item none">none</div>
  <div class="item none">none</div>
</div>

<div class="flex-container">
  <div class="item four">4</div>
  <div class="item two">2</div>
  <div class="item one">1</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}

.flex-container {
  background-color: #f4f7f8;
  resize: horizontal;
  overflow: hidden;
  display: flex;
  margin: 1em;
}

.item {
  margin: 1em;
  padding: 0.5em;
  width: 110px;
  min-width: 0;
  background-color: #1b5385;
  color: white;
  font-family: monospace;
}

.initial {
  flex: initial;
}

.auto {
  flex: auto;
}

.none {
  flex: none;
}

.four {
  flex: 4;
}

.two {
  flex: 2;
}

.one {
  flex: 1;
}
```

{{EmbedLiveSample("Description", 1200, 400)}}

Par défaut, les éléments flexibles ne se rétrécissent pas en dessous de la taille minimale du contenu ({{CSSxRef("min-content")}}). Pour modifier ce comportement, il faudra paramétrer {{CSSxRef("min-width")}} ou {{CSSxRef("min-height")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir `flex: auto`

Cet exemple montre comment un élément flexible avec `flex: auto` grandit pour absorber tout espace libre dans le conteneur.

#### HTML

```html
<div id="flex-container">
  <div id="flex-auto">
    flex: auto (cliquez pour supprimer/ajouter la boîte `flex: initial`)
  </div>
  <div id="default">flex: initial</div>
</div>
```

#### CSS

```css hidden
body * {
  padding: 1rem;
  user-select: none;
  box-sizing: border-box;
  font-family: "Consolas", "Arial", sans-serif;
}
```

```css
#flex-container {
  border: 2px dashed gray;
  display: flex;
}

#flex-auto {
  cursor: pointer;
  background-color: wheat;

  flex: auto;
}

#default {
  background-color: lightblue;
}
```

#### JavaScript

```js
const flexAutoItem = document.getElementById("flex-auto");
const defaultItem = document.getElementById("default");
flexAutoItem.addEventListener("click", () => {
  defaultItem.style.display =
    defaultItem.style.display === "none" ? "block" : "none";
});
```

#### Résultat

Le conteneur flexible contient deux éléments flexibles&nbsp;:

- L'élément `#flex-auto` a une valeur `flex` de `auto`. La valeur `auto` s'étend en `1 1 auto`, c'est-à-dire que l'élément peut s'agrandir.
- L'élément `#default` n'a pas de valeur `flex` définie, il prend donc la valeur par défaut `initial`. La valeur `initial` s'étend en `0 1 auto`, c'est-à-dire que l'élément ne peut pas s'agrandir.

L'élément `#default` occupe autant d'espace que sa largeur le nécessite, mais ne s'agrandit pas pour occuper plus d'espace. Tout l'espace restant est occupé par l'élément `#flex-auto`.

Lorsque vous cliquez sur l'élément `#flex-auto`, vous définissez la propriété {{CSSxRef("display")}} de l'élément `#default` à `none`, ce qui le retire de la mise en page. L'élément `#flex-auto` s'agrandit alors pour occuper tout l'espace disponible dans le conteneur. Cliquer à nouveau sur l'élément `#flex-auto` ajoute l'élément `#default` au conteneur.

{{EmbedLiveSample("Définir `flex: auto`", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les concepts de bases](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Contrôler les proportions des boîtes flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- Le module [du modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
