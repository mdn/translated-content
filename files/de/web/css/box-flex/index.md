---
title: '-moz-box-flex'
slug: Web/CSS/box-flex
tags:
  - CSS
  - CSS Referenz
  - NeedsBrowserCompatibility
  - NeedsMobileBrowserCompatibility
  - Non-standard
translation_of: Web/CSS/box-flex
original_slug: Web/CSS/-moz-box-flex
---
{{CSSRef}}{{warning("Dies ist eine Eigenschaft zur Steuerung von Teilen des XUL Boxmodells. Sie stimmt weder mit den alten CSS Flexible Box Layout Module Entwürfen für <code>box-flex</code> (welche auf dieser Eigenschaft beruhen), noch dem Verhalten von <code>-webkit-box-flex</code> (welche auf diesen Entwürfen beruht) überein.")}}

Siehe [Flexbox](/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) für mehr Informationen, was anstelle dieser Eigenschaft verwendet werden sollte.

## Übersicht

Die `-moz-box-flex` und `-webkit-box-flex` [CSS](/de/docs/Web/CSS) Eigenschaften geben an, wie eine `-moz-box` oder `-webkit-box` wächst, um die Box zu füllen, die sie beinhaltet, in Richtung des Layouts der beinhaltenden Box. Siehe [Flexbox](/de/docs/Web/Guide/CSS/Flexible_boxes) für mehr Informationen über die Eigenschaften von Flexbox-Elementen.

## Syntax

```css
/* <number> Werte */
-moz-box-flex: 0;
-moz-box-flex: 3;
-webkit-box-flex: 0;
-webkit-box-flex: 3;

/* Globale Werte */
-moz-box-flex: inherit;
-moz-box-flex: initial;
-moz-box-flex: unset;
```

### Werte

- 0
  - : Die Box wächst nicht.
- \> 0
  - : Die Box wächst soweit, dass sie den verfügbaren Raum ausfüllt.

## Beispiele

```html
<!DOCTYPE html>
<html>
  <head>
    <title>-moz-box-flex example</title>
    <style>
      div.example {
        display: -moz-box;
        display: -webkit-box;
        border: 1px solid black;
        width: 100%;
      }
      div.example > p:nth-child(1) {
        -moz-box-flex: 1;       /* Mozilla */
        -webkit-box-flex: 1;    /* WebKit */
        border: 1px solid black;
      }
      div.example > p:nth-child(2) {
        -moz-box-flex: 0;       /* Mozilla */
        -webkit-box-flex: 0;    /* WebKit */
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="example">
      <p>Ich wachse, um den zusätzlichen Raum auszufüllen.</p>
      <p>Ich wachse nicht.</p>
    </div>
  </body>
</html>
```

## Hinweise

Die beinhaltende Box teilt den zur Verfügung stehenden zusätzlichen Abstand proportional zum Flexwert jedes Inhaltselements auf.

Inhaltselemente, die null als Flexwert haben, vergrößern sich nicht.

Falls nur ein Inhaltselement einen Flexwert hat, der nicht null ist, vergrößert es sich, um den verfügbaren Raum auszufüllen.

Inhaltselemente, die den gleichen Flexwert haben, vergrößern sich um den gleichen absoluten Betrag.

Falls der Flexwert über das `flex` Elementattribut gesetzt wird, wird der Stil ignoriert.

Um XUL Elemente innerhalb einer Box gleich groß zu machen, muss das `equalsize` Attribut der beinhaltenden Box auf den Wert `always` gesetzt werden. Dieses Attribut hat keine entsprechende CSS Eigenschaft.

Ein Trick, um alle Inhaltselemente in einer beinhaltenden Box gleich groß zu machen, ist, allen eine feste Größe (z. B. `height: 0;`) und denselben box-flex Wert größer als null zu geben (z. B. `-moz-box-flex: 1`).

## Spezifikationen

Diese Eigenschaft ist eine nicht standardisierte Erweiterung. Es gab einen [alten Entwurf der CSS3 Flexbox Spezifikation](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/), der eine `box-flex` Eigenschaft definiert hat, aber dieser Entwurf ist mittlerweile überholt.

## Browser Kompatibilität

{{Compat("css.properties.box-flex")}}

## Siehe auch

{{cssxref("-moz-box-orient")}}, {{cssxref("-moz-box-pack")}}, {{cssxref("-moz-box-direction")}}, {{cssxref("flex")}}
