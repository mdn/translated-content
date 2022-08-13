---
title: color
slug: Web/CSS/color
tags:
  - CSS
  - CSS Eigenschaft
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/color
---
{{CSSRef}}

## Übersicht

Die [CSS](/de/docs/Web/CSS) Eigenschaft **`color`** setzt die Vordergrund[farbe](/de/docs/Web/CSS/Farben) des Textinhalts eines Elements und seiner [Dekorationen](/de/docs/Web/CSS/text-decoration). Sie hat keinen Einfluss auf andere Charakteristiken des Elements; sie sollte eigentlich `text-color` genannt werden, jedoch wurde sie aus historischen Gründen und ihrem Auftreten in CSS Level 1 so genannt.

Beachte, dass der Farbwert eine gleichmäßige Farbe sein muss, welche seit CSS3 einen Transparenzwert beinhalten kann. Sie kann kein {{cssxref("&lt;gradient&gt;")}} sein, welcher in CSS ein {{cssxref("&lt;image&gt;")}} ist.

{{cssinfo}}

## Syntax

```css
/* Eine CSS Level 1 Farbe */
color: red;

/* Die einzige in CSS Level 2 (Revision 1) hinzugefügte Farbe */
color: orange;

/* CSS Level 3 Farbe, manchmal SVG- oder X11-Farbe genannt */
color: antiquewhite;

/* Die Farbe lindgrün in der 3-Zeichen-Notation */
color: #0f0;

/* Die Farbe lindgrün in der 6-Zeichen-Notation */
color: #00ff00;

/* Eine Farbe, die die verfügbaren funktionalen Notationen verwendet */
color: rgba(34, 12, 64, 0.3);

/* Verwende die Farbe des direkten Vorfahren des Elements */
color: currentcolor;

/* Globale Werte */
color: inherit;
color: initial;
color: unset;
```

### Werte

- `<color>`
  - : Ist ein {{cssxref("&lt;color&gt;")}} Wert, der die Farbe von Textelementen innerhalb des Elements bestimmt.

### Formale Syntax

{{csssyntax}}

## Beispiele

Die folgenden Zeilen sind Beispiele, wie der Text des Elements rot eingefärbt werden kann:

```css
element { color: red; }
element { color: #f00; }
element { color: #ff0000; }
element { color: rgb(255, 0, 0); }
element { color: rgb(100%, 0%, 0%); }
element { color: hsl(0, 100%, 50%); }

/* 50% translucent */
element { color: rgba(255, 0, 0, 0.5); }
element { color: hsla(0, 100%, 50%, 0.5); }
```

## Spezifikationen

| Spezifikation                                                                    | Status                                   | Kommentar                                                                                                                      |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'color')}} | {{Spec2('CSS3 Transitions')}} | Definiert `color` als animierbar.                                                                                              |
| {{SpecName('CSS3 Colors', '#color', 'color')}}                     | {{Spec2('CSS3 Colors')}}         | Markiert Systemfarben als veraltet; fügt SVG-Farben hinzu; fügt die funktionalen Notationen `rgba()`, `hsl()`, `hsla()` hinzu. |
| {{SpecName('CSS2.1', 'colors.html#colors', 'color')}}         | {{Spec2('CSS2.1')}}                 | Fügt die Farbe `orange` und die Systemfarben hinzu.                                                                            |
| {{SpecName('CSS1', '#color', 'color')}}                             | {{Spec2('CSS1')}}                 | Ursprüngliche Definition                                                                                                       |

## Browser Kompatibilität

{{Compat("css.properties.color")}}

## Siehe auch

- Der {{cssxref("&lt;color&gt;")}} Datentyp
- Weitere Farbeigenschaften: {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}} und {{cssxref("color-adjust")}}
