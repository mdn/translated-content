---
title: '-moz-outline-radius'
slug: Web/CSS/-moz-outline-radius
tags:
  - CSS
  - CSS Referenz
  - NeedsLiveSample
  - Non-standard
translation_of: Web/CSS/-moz-outline-radius
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

In Mozilla Anwendungen wie Firefox kann die `-moz-outline-radius` CSS Eigenschaft dazu verwendet werden, um Umrissen runde Ecken zu verleihen. Ein {{cssxref("outline", "Umriss")}} ist eine Linie, die um Elemente gezeichnet wird, außerhalb des Randes, um das Element hervorzuheben.

`-moz-outline-radius` ist eine praktische Kurzschreibweise, um die vier Eigenschaften {{cssxref("-moz-outline-radius-topleft")}}, {{cssxref("-moz-outline-radius-topright")}}, {{cssxref("-moz-outline-radius-bottomright")}} und {{cssxref("-moz-outline-radius-bottomleft")}} zu setzen.

{{cssinfo}}

## Syntax

```css
/* Ein Wert */
-moz-outline-radius: 25px;

/* Zwei Werte */
-moz-outline-radius: 25px 1em;

/* Drei Werte */
-moz-outline-radius: 25px 1em 12%;

/* Vier Werte */
-moz-outline-radius: 25px 1em 12% 4mm;

/* Globale Werte */
-moz-outline-radius: inherit;
-moz-outline-radius: initial;
-moz-outline-radius: unset;
```

### Werte

> **Note:** Elliptische Umrisse und `<percentage>` Werte folgen der in {{cssxref("border-radius")}} beschriebenen Syntax.

Ein, zwei, drei oder vier `<outline-radius>` Werte, die jeweils einem dieser Werte entsprechen:

- \<length>
  - : Siehe {{cssxref("&lt;length&gt;")}} für mögliche Werte.
- \<percentage>
  - : Eine {{cssxref("&lt;percentage&gt;")}}; siehe {{cssxref("border-radius")}} für Details.

<!---->

- Falls ein einzelner Wert gesetzt ist, wird er auf alle 4 Ecken angewendet.
- Falls zwei Werte gesetzt sind, bezieht sich der erste auf die linke obere und die rechte untere Ecke und der zweite auf die rechte obere und die linke untere Ecke.
- Falls drei Werte gesetzt sind, bezieht sich der erste auf die linke obere Ecke, der zweite auf die rechte obere und die linke untere Ecke und der dritte auf die rechte untere Ecke.
- Falls vier Werte gesetzt sind, bezieht sich der erste auf die linke obere Ecke, der zweite auf die rechte obere Ecke, der dritte auf die rechte untere Ecke und der vierte auf die linke untere Ecke.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
outline: dotted red;

-moz-outline-radius: 12% 1em 25px;
/* ist gleichbedeutend mit: */
-moz-outline-radius-topleft: 12%;
-moz-outline-radius-topright: 1em;
-moz-outline-radius-bottomright: 35px;
-moz-outline-radius-bottomleft: 1em;
```

## Hinweise

- `dotted` oder `dashed` abgerundete Ecken werden durchgehend dargestellt, {{bug("382721")}}.
- Zukünftige Versionen von Gecko/Firefox entfernen möglicherweise diese Eigenschaft vollständig. Siehe {{bug("593717")}}.

## Spezifikationen

Diese Eigenschaft ist in keinem CSS Standard definiert.

## Browser Kompatibilität

{{Compat}}
