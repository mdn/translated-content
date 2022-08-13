---
title: ':-moz-focusring'
slug: Web/CSS/:-moz-focusring
tags:
  - CSS
  - CSS Referenz
  - NeedsBrowserCompatibility
  - NeedsLiveSample
  - Non-standard
translation_of: Web/CSS/:-moz-focusring
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Die `:-moz-focusring` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist ähnlich der {{cssxref(":focus")}} Pseudoklasse, jedoch matcht sie ein Element nur, wenn das Element aktuell fokussiert ist **und** der User Agent das Zeichen von Fokusringen aktiviert hat. Falls `:-moz-focusring` matcht, dann matcht auch `:focus`, aber das Umgekehrte ist nicht immer wahr - es hängt davon ab, ob der User Agent das Zeichnen von Fokusringen aktiviert hat. Ob der User Agent das Zeichen von Fokusringen aktiviert hat, kann von Dingen wie der Einstellung des Betriebssystems abhängen, das der Benutzer verwendet, sodass das Verhalten dieser Pseudoklasse von Plattform zu Plattform abhängig von den Best Practices (Standardeinstellungen) bezüglich Fokusierung der Plattform oder Benutzereinstellungen.

## Syntax

    :-moz-focusring

## Beispiel

Um die Anzeige eines fokussierten Elements zu definieren, kann dieser Pseudoklassenselektor folgendermaßen verwendet werden:

```css
mybutton:-moz-focusring {
  outline: 2px dotted;
}
```

## Spezifikationen

Dieses Feature ist bisher noch in keiner Spezifikation definiert, jedoch wurde es [in der Working Group diskutiert](https://lists.w3.org/Archives/Public/www-style/2015Sep/0226.html) und es wurde [beschlossen, es zu Selectors 4 oder 5 hinzuzufügen](https://lists.w3.org/Archives/Public/www-style/2015Oct/0012.html).

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- {{bug("418521")}}
