---
title: opacity
slug: Web/CSS/opacity
tags:
  - CSS
  - CSS Eigenschaft
  - Referenz
translation_of: Web/CSS/opacity
---
{{CSSRef}}

## Übersicht

Die **`opacity`** CSS Eigenschaft gibt die Transparenz eines Elements an, d. h. den Grad, zu welchem der Hintergrund des Elements überlagert wird.

Der Wert wird dem gesamten Element zugewiesen einschließlich dessen Inhalten, auch wenn der Wert nicht durch Kindelemente geerbt wird. Dadurch haben ein Element und seine Kindelemente alle dieselbe Deckkraft relativ zum Hintergrund des Elements, auch wenn das Element und seine Kindelemente untereinander unterschiedliche Werte für die Deckkraft haben.

Wird für diese Eigenschaft ein Wert anders als `1` festgelegt, bewirkt dies, dass das Element in einen neuen [Stapelkontext](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) versetzt wird.

Falls [ein Kindelement nicht den Wert für die Deckkraft haben soll](http://stackoverflow.com/questions/13508877/resetting-the-opacity-of-a-child-elements-maple-browser-samsung-tv-app), kann stattdessen die {{cssxref("background")}} Eigenschaft verwendet werden. Zum Beispiel:

```css
background: rgba(0, 0, 0, 0.4);
```

{{cssinfo}}

## Syntax

```css
/* Komplett undurchsichtig */
opacity: 1;
opacity: 1.0;

/* Durchscheinend */
opacity: 0.6;

/* Komplett transparent */
opacity: 0.0;
opacity: 0;

/* Globale Werte */
opacity: inherit;
opacity: initial;
opacity: unset;
```

### Werte

- `<number>`
  - | : Ist eine {{cssxref("&lt;number&gt;")}} im Bereich von `0.0` bis `1.0`, beide einschließlich, die die Deckkraft des Alphakanals repräsentiert. Jeder Wert außerhalb des Intervalls, obwohl gültig, wird abgeschnitten auf die nächstliegende Grenze innerhalb des Bereichs. | Wert                                                                | Bedeutung |
    | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | --------- |
    | `0`                                                                                                                                                                                                                                                                                     | Das Element ist vollkommen transparent (d. h. unsichtbar).          |
    | Irgendeine {{cssxref("&lt;number&gt;")}} genau zwischen `0` und `1`                                                                                                                                                                                                          | Das Element ist durchsichtig (d. h. der Hintergrund scheint durch). |
    | `1`                                                                                                                                                                                                                                                                                     | Das Element ist vollkommen opak (blickdicht).                       |

### Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```css
div {
  background-color: yellow;
}

.light {
  opacity: 0.2; /* Der Text kann kaum über dem Hintergrund gelesen werden */
}

.medium {
  opacity: 0.5; /* Der Text ist besser über dem Hintergrund lesbar */
}

.heavy {
  opacity: 0.9; /* Der Text ist sehr deutlich über dem Hintergrund lesbar */
}
```

```html
<div class="light">Dies kann kaum gesehen werden.</div>
<div class="medium">Dies ist einfacher zu sehen.</div>
<div class="heavy">Dies ist sehr deutlich sichtbar.</div>
```

{{EmbedLiveSample('Einfaches_Beispiel', '640', '64')}}

### Andere Deckkraft mit `:hover`

```css
img.opacity {
  opacity: 1;
  filter: alpha(opacity=100); /* IE8 and lower */
  zoom: 1; /* Triggers "hasLayout" in IE 7 and lower */
}

img.opacity:hover {
  opacity: 0.5;
  filter: alpha(opacity=50);
  zoom: 1;
}
```

```html
<img src="//developer.mozilla.org/media/img/mdn-logo.png"
     alt="MDN logo" width="128" height="146"
     class="opacity">
```

{{EmbedLiveSample('Andere_Deckkraft_mit_hover', '150', '175')}}

## Spezifikationen

| Spezifikation                                                                        | Status                                   | Kommentar                           |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ----------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'opacity')}} | {{Spec2('CSS3 Transitions')}} | Definiert `opacity` als animierbar. |
| {{SpecName('CSS3 Colors', '#propdef-opacity', 'opacity')}}         | {{Spec2('CSS3 Colors')}}         | Ursprüngliche Definition            |

## Browser Kompatibilität

{{Compat("css.properties.opacity")}}

## Siehe auch

- [MSDN Microsofts `filter:alpha(opacity=xx)`](https://msdn.microsoft.com/en-us/library/ms532910%28VS.85%29.aspx)
