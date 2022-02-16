---
title: scroll-snap-stop
slug: Web/CSS/scroll-snap-stop
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-snap-stop
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`scroll-snap-stop`** définit la façon dont un conteneur de défilement peut « passer outre » certaines positions d'accroche.

```css
/* Valeurs avec un mot-clé */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* Valeurs globales */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: unset;
```

## Syntaxe

### Valeurs

- `normal`
  - : Lorsque la zone d'affichage ({{Glossary("viewport")}}) du conteneur défile, elle peut passer sur certaines positions d'accroche.
- `always`
  - : Le conteneur de défilement ne peut pas passer sur une position d'accroche. Le conteneur doit « s'accrocher » dès la première position d'accroche de l'élément.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
/* setup */
:root, body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
.container {
  display: flex;
  overflow: auto;
  outline: 1px dashed lightgray;
  flex: none;
}

.container.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
}

.container.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
}
/* definite scroll snap */
.mandatory-scroll-snapping > div {
  scroll-snap-stop: always;
}
.proximity-scroll-snapping > div {
  scroll-snap-stop: normal;
}
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}

.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

.container > div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.x.container > div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}

.y.container > div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 256px;
}
/* appearance fixes */
.y.container > div:first-child {
  line-height: 1.3;
  font-size: 64px;
}
/* coloration */
.container > div:nth-child(even) {
  background-color: #87EA87;
}

.container > div:nth-child(odd) {
  background-color: #87CCEA;
}
```

### HTML

```html
<div class="container x mandatory-scroll-snapping" dir="ltr">
  <div>X Mand. LTR </div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x proximity-scroll-snapping" dir="ltr">
  <div>X Proximity LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y mandatory-scroll-snapping" dir="ltr">
  <div>Y Mand. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="ltr">
  <div>Y Prox. LTR</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x mandatory-scroll-snapping" dir="rtl">
  <div>X Mandatory RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container x proximity-scroll-snapping" dir="rtl">
  <div>X Proximity RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y mandatory-scroll-snapping" dir="rtl">
  <div>Y Mand. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<div class="container y proximity-scroll-snapping" dir="rtl">
  <div>Y Prox. RTL</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "1630")}}

## Spécifications

| Spécification                                                                                                        | État                                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Scroll Snap Points", "#propdef-scroll-snap-stop", "scroll-snap-stop")}} | {{Spec2("CSS Scroll Snap Points")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-snap-stop")}}
