---
title: font
slug: Web/CSS/font
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/font
---
{{CSSRef}}

Die `font` Eigenschaft hat zwei unterschiedliche Verwendungszwecke:

1.  Die `font` Eigenschaft kann als Kurzform für die Eigenschaften [`font-style`](/de/docs/Web/CSS/font-style), [`font-variant`](/de/docs/Web/CSS/font-variant), [`font-weight`](/de/docs/Web/CSS/font-weight), [`font-size`](/de/docs/Web/CSS/font-size), [`line-height`](/de/docs/Web/CSS/line-height) und [`font-family`](/de/docs/Web/CSS/font-family) dienen und setzt dabei, wie bei jeder Kurzform, die einzelnen Eigenschaften auf ihre Standardwerte zurück, wenn nichts weiter angegeben wird, oder
2.  die jeweilige Schrift eines Elementes kann auf eine Systemschriftart festlegt werden. Diese Systemschriftarten können jedoch nur über die `font` Eigenschaft gesetzt werden und nicht etwa über die [`font-family`](/de/CSS/font-family) Eigenschaft, sodass `font` nicht nur als eine Kurznotation von verschiedenen Schrift-Eigenschaften anzusehen ist.

Außerdem ist zu beachten, dass `font` keine weiteren Eigenschaften wie etwa [`font-stretch`](/de/docs/Web/CSS/font-stretch) oder [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust) mit einschließt und [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust) dennoch auf den Standardwert (`normal`) zurückgesetzt wird, wenn die `font` Eigenschaft notiert wird.
Das Festlegen von [`font-size`](/de/docs/Web/CSS/font-size) sowie [`font-family`](/de/docs/Web/CSS/font-family) ist verpflichtend, sonst wird die Anweisung komplett ignoriert.

- Standardwert: siehe einzelne Eigenschaften
- Anwendbar auf: alle Elemente
- Vererbbar: Ja
- Prozentwerte: erlaubt für `font-size` und `line-height`
- Medium: visuell
- berechneter Wert: siehe einzelne Eigenschaften

## Syntax

    [
      [ <font-style> || <font-variant> || <font-weight> ]?
      <font-size>
      [ / <line-height> ]?
      <font-family>
    ]
    | caption | icon | menu | message-box | small-caption | status-bar
    | -moz-window | -moz-desktop | -moz-workspace | -moz-document | -moz-info
    | -moz-dialog | -moz-button | -moz-pull-down-menu | -moz-list | -moz-field
    | inherit

## Werte

Wird `font` als Kurzform verwendet, siehe einzelne Eigenschaften für die unterschiedlichen Werteangaben.

### Werte für System-Fonts

- caption
  - : Schrift, die für Beschriftungen von Kontrollelementen (Buttons, Drop-Downs, etc.) verwendet wird.
- icon
  - : Schrift, die zur Beschriftung von Icons verwendet wird.
- menu
  - : Schrift die in Menüs benutzt wird.
- message-box
  - : Schrift die in Dialogboxen verwendet wird.
- small-caption
  - : Schrift die für kleine Kontrollelemente benutzt wird.
- status-bar
  - : Schrit die in Statusleisten benutzt wird.

### Mozilla Erweiterungen für System-Fonts

- \-moz-window
  - : Schrift, die für den Inhalt in einem Fenster verwendet wird.
- \-moz-desktop
  - : Schrift, die auf dem Desktop benutzt wird.
- \-moz-workspace
  - : Schrift, die für ein Arbeitsplatz-Fenster verwendet wird.
- \-moz-document
  - : Schrift, die für den Inhalt eines Dokumentes benutzt wird.
- \-moz-dialog
  - : Schrift die in Dialogboxen verwendet wird (wie `message-box`).
- \-moz-button
  - : Schrift, die für Beschriftungen von Kontrollelementen (Buttons, Drop-Downs, etc.) verwendet wird (wie `caption`).
- \-moz-pull-down-menu
  - : Schrift, die für Aufklapp-Menüs benutzt wird.
- \-moz-list
  - : Schrift, die in Listenmenüs verwendet wird.
- \-moz-field
  - : Schrift, die in Textfeldern (z.B. `input`) verwendet wird.
- \-moz-info
  - : ?

## Beispiele

[Link zum Live Beispiel](/samples/cssref/font.html "https://developer.mozilla.org/samples/cssref/font.html")

Beispiel 1

    /* Setze die Schriftgröße auf 12px und die Zeilenhöhe auf 14px, sowie die Schriftart auf sans-serif */
    p { font: 12px/14px sans-serif }

Beispiel 2

    /* Setze die Schriftgröße auf 80% des Elternelements und setze die Schriftart auf sans-serif */
    p { font: 80% sans-serif }

    /* Hat den gleichen Effekt wie: */
    p {
      font-family: sans-serif;
      font-style: normal;
      font-variant: normal;
      font-weight: 600;
      font-size: 80%;
      line-height: normal;
    }

Beispiel 3

    /* Setze die Schriftstärke auf fett, die Textneigung auf kursiv, die Schriftgröße auf groß,
    und die Schriftart auf serif. */
    p { font: bold italic large serif }

Beispiel 4

    /* Benutze die gleiche Schriftart wie die Statusleiste des Fensters. */
    p { font: status-bar }

## Browser Kompatibilität

<table class="standard-table">
  <tbody>
    <tr>
      <th rowspan="2">Browser</th>
      <th colspan="2">ab Version</th>
    </tr>
    <tr>
      <th>Kurznotation</th>
      <th>Systemschriften</th>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>3.0-4.0</td>
      <td>4.0-5.5</td>
    </tr>
    <tr>
      <td>Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td>1.0 (1.0)</td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>3.5</td>
      <td>6.0</td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td>1.0 (85)</td>
    </tr>
  </tbody>
</table>

## Spezifikation

- [CSS 3 UI #System fonts](http://www.w3.org/TR/css3-ui/#system0)
- [CSS 2.1 Fonts #font](http://www.w3.org/TR/CSS21/fonts.html#font-shorthand)

## Siehe auch

- [`font-style`](/de/docs/Web/CSS/font-style), [`font-variant`](/de/docs/Web/CSS/font-variant), [`font-weight`](/de/docs/Web/CSS/font-weight), [`font-size`](/de/docs/Web/CSS/font-size), [`line-height`](/de/docs/Web/CSS/line-height), [`font-family`](/de/docs/Web/CSS/font-family)
- [`font-size-adjust`](/de/docs/Web/CSS/font-size-adjust), [`font-stetch`](/de/docs/Web/CSS/font-stetch)
- [`@font-face`](/de/docs/Web/CSS/@font-face)
