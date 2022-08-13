---
title: '-moz-user-input'
slug: Web/CSS/-moz-user-input
tags:
  - CSS
  - CSS Referenz
  - Non-standard
translation_of: Web/CSS/-moz-user-input
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

In Mozilla Anwendungen bestimmt die `-moz-user-input` CSS Eigenschaft, ob ein Element Benutzereingaben zulässt. Eine ähnliche Eigenschaft `user-focus` wurde in [frühen Entwürfen eines Vorläufers der CSS3 UI Spezifikation](http://www.w3.org/TR/2000/WD-css3-userint-20000216) definiert, wurde jedoch von der Arbeitsgruppe verworfen.

{{cssinfo}}

`-moz-user-input` war einer der Vorschläge, der zu der vorgeschlagenen CSS 3 {{cssxref("user-input")}} Eigenschaft führten, welche noch nicht Candidate Recommendation (benötigt Implementierungen) erreicht hat.

Für Elemente, die normalerweise Benutzereingaben ermöglichen wie beispielsweise {{HTMLElement("textarea")}}, ist der Initialwert von `-moz-user-input` `enabled`.

## Syntax

```css
/* Schlüsselwortwerte */
-moz-user-input: none;
-moz-user-input: enabled;
-moz-user-input: disabled;

/* Globale Werte */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

### Werte

- none
  - : Das Element reagiert nicht auf Benutzereingaben und wird nicht {{Cssxref(":active")}}.
- enabled
  - : Das Element akzeptiert Benutzereingaben. Für Texteingabefelder ist dies das Standardverhalten.
- disabled
  - : Das Element akzeptiert keine Benutzereingaben. Dies ist jedoch insofern nicht dasselbe wie das Setzen von {{XULAttr("disabled")}} auf `true`, als dass das Element normal dargestellt wird.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
input.example {
  /* Der Benutzer kann den Text markieren, ihn jedoch nicht ändern. */
  -moz-user-input: disabled;
}
```

## Siehe auch

- {{cssxref("-moz-user-focus")}}
- {{cssxref("-moz-user-modify")}}
- {{cssxref("-moz-user-select")}}
