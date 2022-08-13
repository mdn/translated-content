---
title: z-index
slug: Web/CSS/z-index
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Positionierung
  - Referenz
translation_of: Web/CSS/z-index
---
{{CSSRef}}

Die CSS-Eigenschaft **`z-index`** legt die z-Reihenfolge eines [positionierten](/de/docs/Web/CSS/position) Elements und seiner Abkömmlinge oder Flex-Elemente fest. Überlappende Elemente mit einem größeren `z-index` überdecken diejenigen mit einem kleineren.

{{EmbedInteractiveExample("pages/css/z-index.html")}}

Für einen positionierte Box (d.h. eine mit einer `{{cssxref("position")}}` anders als `static`) ist für die Eigenschaft `z-index` spezifiert:

Für eine positionierte Box (d. h. eine mit einer anderen als der statischen Position) gibt die Eigenschaft `z-index` an:

1.  Die Stapelebene der Box im aktuellen [Stapel-Zusammenhang](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
2.  Ob die Box einen lokalen Stapel-Zusammenhang herstellt.

## Syntax

```css
/* Schlüsselwortwert */
z-index: auto;

/* <integer> Werte */
z-index: 0;
z-index: 3;
z-index: 289;
z-index: -1; /* Negative Werte, um die Priorität zu senken */

/* Globale Werte*/
z-index: inherit;
z-index: initial;
z-index: unset;
```

### Werte

- `auto`
  - : Die Box etabliert keinen neuen lokalen Stapelkontext. Die generierte Box befindet sich im aktuellen Stapelkontext auf gleicher Ebene wie dessen Elternbox.
- `<integer>`
  - : Der {{cssxref("integer")}} legt die Stapelebene des momentanen Stapelkontexts fest. Die Box etabliert zudem einen neuen Stapelkontext, dessen Stapelebene 0 ist. Dadurch werden die z-Indizes von Kinder-Elementen nicht mit z-Indizes außerhalb des Elements verglichen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Visuelle Schichtenelement

#### HTML

```html
<div class="wrapper">
  <div class="dashed-box">Dashed box</div>
  <div class="gold-box">Gold box</div>
  <div class="green-box">Green box</div>
</div>
```

#### CSS

```css
.wrapper {
  position: relative;
}

.dashed-box {
  position: relative;
  z-index: 1;
  border: dashed;
  height: 8em;
  margin-bottom: 1em;
  margin-top: 2em;
}
.gold-box {
  position: absolute;
  z-index: 3; /* put .gold-box above .green-box and .dashed-box */
  background: gold;
  width: 80%;
  left: 60px;
  top: 3em;
}
.green-box {
  position: absolute;
  z-index: 2; /* put .green-box above .dashed-box */
  background: lightgreen;
  width: 20%;
  left: 65%;
  top: -25px;
  height: 7em;
  opacity: 0.9;
}
```

#### Ergebnis

{{ EmbedLiveSample('Visually_layering_elements', '550', '200', '') }}

## Spezifikationen

| Spezifikation                                                                                                    | Status                                   | Kommentar                           |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'animation behavior for z-index')}} | {{Spec2('CSS3 Transitions')}} | Definiert `z-index` als animierbar. |
| {{SpecName('CSS2.1', 'visuren.html#z-index', 'z-index')}}                                     | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition            |

## Browser Kompatibilität

{{Compat("css.properties.z-index")}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("position")}}
- [Understanding CSS z-index](/de/docs/Web/CSS/CSS_Positioning/Understanding_z_index)
