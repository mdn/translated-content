---
title: '-moz-user-select'
slug: Web/CSS/user-select
tags:
  - CSS
  - CSS Referenz
  - CSS:Mozilla Erweiterungen
translation_of: Web/CSS/user-select
original_slug: Web/CSS/-moz-user-select
---
{{ CSSRef() }}

## Übersicht

In Mozilla Anwendungen steuert die `-moz-user-select` Eigenschaft, ob und wie ein Text ausgewählt werden kann.

- Standardwert: `text`
- Anwendbar auf: alle Elemente
- Vererbbar: Ja
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: wie festgelegt

## Syntax

    -moz-user-select: text | all | none| -moz-none | inherit

### Werte

- text
  - : Der Text kann vom Benutzer ausgewählt werden.
- all
  - : Bei einem einfachem Klick auf das Element wird der gesamte Text ausgewählt. Bei einem Doppelklick auf das Element wird der höchste Vorfahr ausgewählt.
- none
  - : Der Text eines Elements und dessen Kindelemente können nicht ausgewählt werden. Wird jedoch eine [Auswahl über das DOM](/de/DOM/Selection) getätigt, sind diese Elemente darin enthalten.
- \-moz-none
  - : Der Text eines Elements und dessen Kindelemente können nicht ausgewählt werden. Die Auswahl kann bei Kindelementen aktiviert werden, wenn dort `-moz-user-select: text` festgelegt wird.
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

    /* Schaltet Textauswahl ab */
    -moz-user-select: none

## Siehe auch

- [`::selection`](/de/CSS/::selection)
