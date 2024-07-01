---
title: <blend-mode>
slug: Web/CSS/blend-mode
---

{{CSSRef}}

Le type **`<blend-mode>`** est un ensemble de mots-clés qui permettent de décrire les différents modes de fusion (_blend modes_). Ce type de valeur est utilisé pour les propriétés {{cssxref("background-blend-mode")}} et {{cssxref("mix-blend-mode")}}.

Un mode de fusion est une méthode de calcul permettant de déterminer la couleur finale d'un pixel lorsque plusieurs couches sont empilées. Chaque mode de fusion prend en entrée la couleur du premier plan et de l'arrière-plan (dans cet ordre) pour calculer la valeur de la couleur obtenue. Le résultat final est la couche visible obtenue lorsque les différents plans ont été fusionnés avec les modes de fusion.

## Syntaxe

Une valeur de type de données `<blend-mode>` s'écrit avec l'un des mots-clés suivants.

### Valeurs possibles

- `normal`
  - : La couleur finale obtenue est la couleur du premier plan, quelle que soit la couleur de l'arrière-plan. On obtient ainsi un effet similaire à la superposition de deux feuilles de papier opaques.
- `multiply`
  - : La couleur finale est obtenue en multipliant les couleurs du premier plan et de l'arrière-plan.
    Si une des couches est noire, le résultat obtenu sera une image noire. Si une des couches est blanche, cela ne modifiera pas l'autre image. On obtient ainsi un effet semblable à la superposition de deux transparents.
- `screen`
  - : La couleur finale est obtenue en : inversant les couleurs des deux plans, en les multipliant et en inversant la couleur obtenue. Si une des couches est noire, le résultat obtenu sera l'image de l'autre couche. Si une des couches est blanche, l'image obtenue sera blanche. L'effet obtenu est semblable à la projection de deux images sur un écran.
- `overlay`
  - : La couleur finale est celle décrite par `multiply` si l'arrière-plan est plus sombre ou de `screen` si elle est plus claire. On a un effet semblable à `hard-light` avec les couches interverties.
- `darken`
  - : La couleur finale est la couleur la plus sombre des deux couches.
- `lighten`
  - : La couleur finale est la couleur la plus claire des deux couches.
- `color-dodge`
  - : La couleur finale est obtenue en divisant la couleur de l'arrière-plan avec l'inverse de la couleur du premier plan.
    Un premier-plan noir n'entraînera aucun changement.
- `color-burn`
  - : La couleur finale est obtenu en inversant la couleur de l'arrière-plan qui sera divisée par la couleur du premier-plan puis inversée. Un premier-plan blanc n'entraînera aucun changement et un premier-plan qui possède exactement l'inverse de l'arrière-plan entraînera une image noire.
- `hard-light`
  - : La couleur finale est le résultat de `multiply` si le premier plan est plus sombre ou de `screen` si la couleur de premier-plan est plus claire. L'effet obtenu est équivalent à `overlay` avec les deux couches interverties.
- `soft-light`
  - : La couleur finale obtenue est semblable à `hard-light`, mais est plus douce*`.`*
- `difference`
  - : La couleur finale est obtenue en soustrayant la couleur la plus sombre à la couleur la plus claire. Une couche noire n'aura aucun effet et une couche blanche inversera l'autre image.
- `exclusion`
  - : La couleur finale obtenue est semblable à `difference` avec moins de contraste. Comme pour `difference`, une couche noire n'aura aucun effet et une couche blanche inversera l'autre couche.
- `hue`
  - : La couleur finale aura la teinte de la couleur du premier-plan et la saturation et la luminosité de la couleur de l'arrière-plan.
- `saturation`
  - : La couleur finale aura la saturation de la couleur du premier plan et la teinte et la luminosité de la couleur de l'arrière-plan.
- `color`
  - : La couleur finale aura la teinte et la saturation du premier plan et la luminosité de l'arrière-plan. Cet effet conserve les niveaux de gris et peut être utilisé pour coloriser le premier plan.
- `luminosity`
  - : La couleur finale aura la luminosité de la couleur du premier plan et la teinte et la saturation de la couleur de l'arrière-plan.

## Exemples

### normal

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: normal;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### multiply

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: multiply;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### screen

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: screen;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### overlay

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: overlay;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### darken

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: darken;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### lighten

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: lighten;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### color-dodge

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-dodge;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### color-burn

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color-burn;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### hard-light

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hard-light;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### soft-light

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: soft-light;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### difference

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: difference;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### exclusion

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: exclusion;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### hue

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: hue;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### saturation

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: saturation;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### color

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: color;
}
```

{{ EmbedLiveSample('', "300", "350") }}

### luminosity

```html hidden
<div id="div"></div>
```

```css
#div {
  width: 300px;
  height: 300px;
  background: url("br.png"), url("tr.png");
  background-blend-mode: luminosity;
}
```

{{ EmbedLiveSample('', "300", "350") }}

## L'interpolation des modes de fusion

Il n'y a pas d'interpolation pour les modes de fusion. Toute transition se produit brutalement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés utilisant des valeurs de ce type :

  - {{cssxref("background-blend-mode")}}
  - {{cssxref("mix-blend-mode")}}

- [Les modes de fusion sur Wikipédia (en anglais)](https://en.wikipedia.org/wiki/Blend_modes)
- [La référence CSS](/fr/docs/Web/CSS/Reference)
