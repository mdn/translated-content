---
title: border-top-right-radius
slug: Web/CSS/Reference/Properties/border-top-right-radius
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-top-right-radius`** arrondit le coin supérieur droit d'un élément en définissant le rayon (ou les rayons des axes semi-majeur et semi-mineur) de l'ellipse qui définit la courbure du coin.

{{InteractiveExample("Démonstration CSS&nbsp;: border-top-right-radius")}}

```css interactive-example-choice
border-top-right-radius: 80px 80px;
```

```css interactive-example-choice
border-top-right-radius: 250px 100px;
```

```css interactive-example-choice
border-top-right-radius: 50%;
```

```css interactive-example-choice
border-top-right-radius: 50%;
border: black 10px double;
background-clip: content-box;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec un coin supérieur droit arrondi.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

## Syntaxe

```css
/* Le coin est un cercle         */
/* La valeur indique le rayon de courbure */
border-top-right-radius: 3px;

/* Le coin est une ellipse         */
/* border-top-right-radius: horizontal vertical */
border-top-right-radius: 0.5em 1em;

border-top-right-radius: inherit;

/* Valeurs globales */
border-top-right-radius: inherit;
border-top-right-radius: initial;
border-top-right-radius: revert;
border-top-right-radius: revert-layer;
border-top-right-radius: unset;
```

Avec une valeur&nbsp;:

- la valeur est une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) indiquant le rayon du cercle à utiliser pour la bordure de ce coin.

Avec deux valeurs&nbsp;:

- la première valeur est une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) indiquant l'axe semi-majeur horizontal de l'ellipse à utiliser pour la bordure de ce coin.
- la seconde valeur est une longueur ({{CSSxRef("&lt;length&gt;")}}) ou un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) indiquant l'axe semi-majeur vertical de l'ellipse à utiliser pour la bordure de ce coin.

### Valeurs

- `<length-percentage>`
  - : La mesure du rayon ou de l'un des demi-axes de l'ellipse. Une valeur absolue peut être exprimée dans n'importe quelle unité autorisée pour le type {{CSSxRef("&lt;length&gt;")}}. Les valeurs exprimées en pourcentage font référence à la hauteur de la boîte pour les valeurs verticales et à la largeur de la boîte pour les valeurs horizontales. Les valeurs négatives ne sont pas autorisées`.`

## Description

L'arrondi peut être un cercle ou une ellipse, ou si l'une des valeurs est `0`, aucun arrondi n'est appliqué et le coin est carré.

![border-top-right-radius.png](border-top-right-radius.png)

Un arrière-plan, qu'il s'agisse d'une image ou d'une couleur, est rogné à la bordure, même si elle est arrondie&nbsp;; l'emplacement exact du rognage est défini par la valeur de la propriété {{CSSxRef("background-clip")}}.

> [!NOTE]
> Si la valeur de cette propriété n'est pas définie dans une propriété raccourcie {{CSSxRef("border-radius")}} appliquée à l'élément après la propriété CSS `border-top-right-radius`, la valeur de cette propriété est alors réinitialisée à sa valeur initiale par la [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Arc de cercle

Une seule valeur `<length>` produit un arc de cercle.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc de cercle")}}

### Arc d'une ellipse

Deux valeurs `<length>` différentes produisent un arc d'ellipse.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc d'une ellipse")}}

### Élément carré avec un rayon en pourcentage

Un élément carré avec une seule valeur `<percentage>` produit un arc de cercle.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Élément carré avec un rayon en pourcentage")}}

### Élément qui n'est pas carré avec un rayon en pourcentage

Un élément qui n'est pas carré avec une seule valeur `<percentage>` produit un arc d'ellipse.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 200px;
  height: 100px;
}
```

{{EmbedLiveSample("Élément qui n'est pas carré avec un rayon en pourcentage")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("border-radius")}}
- Les propriétés {{CSSxRef("border-bottom-right-radius")}}, {{CSSxRef("border-bottom-left-radius")}} et {{CSSxRef("border-top-left-radius")}}
