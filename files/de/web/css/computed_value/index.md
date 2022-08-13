---
title: Berechneter Wert
slug: Web/CSS/computed_value
tags:
  - CSS
  - Guide
  - Web
translation_of: Web/CSS/computed_value
original_slug: Web/CSS/berechneter_Wert
---
{{cssref}}

## Übersicht

Der **berechnete Wert** einer CSS Eigenschaft wird aus dem angegebenen Wert berechnet durch:

- Verarbeitung der speziellen Werte {{ cssxref("inherit") }} und {{ cssxref("initial") }} und
- durch die Berechnung, die benötigt wird, um den Wert zu erreichen, der in der Zeile "Berechneter Wert" in der Übersicht der Eigenschaft beschrieben wird.

Die Berechnung, die benötigt wird, um den "berechneten Wert" für die Eigenschaft zu erreichen, beinhaltet typischerweise die Konvertierung relativer Werte (wie die in `em` Einheiten oder Prozentangaben) zu absoluten Werten.

Wenn zum Beispiel ein Element einen Wert `font-size:16px` und `padding-top:2em` definiert hat, dann ist der berechnete Wert von `padding-top` gleich `32px` (zweimal die Schriftgröße).

Für einige Eigenschaften jedoch (jene, für die Prozentangaben relativ zu etwas sind, das Layout zur Bestimmung benötigt, wie `width`, `margin-right`, `text-indent` und `top`), werden definierte Prozentwerte zu berechneten Prozentwerten. Des weiteren werden in `line-height` definierte einheitenlose Zahlen zu berechneten Werten, wie angegeben. Diese relativen Werte, die im berechneten Wert gleich bleiben, werden absolut sobald der [benutzte Wert](/de/docs/Web/CSS/benutzter_Wert) ermittelt wird.

Der Hauptnutzen des _berechneten Wertes_ (außer als ein Schritt zwischen dem [angegebenen Wert](/de/docs/Web/CSS/angegebener_Wert "en/CSS/specified_value") und dem [benutzten Wert](/de/docs/Web/CSS/benutzter_Wert "en/CSS/used_value")) ist [Vererbung](/de/docs/Web/CSS/Vererbung "en/CSS/inheritance") inklusive dem {{ cssxref("inherit") }} Schlüsselwort.

## Hinweis

Die {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API gibt den [aufgelösten Wert](/de/docs/Web/CSS/aufgelöster_Wert) zurück, welcher abhängig von der Eigenschaft entweder der berechnete Wert oder der [benutzte Wert](/de/docs/Web/CSS/benutzter_Wert) ist.

## Spezifikation

- [CSS 2.1 Assigning property values #computed-value](http://www.w3.org/TR/CSS21/cascade.html#computed-value%20 "http://www.w3.org/TR/CSS21/cascade.html#computed-value ")

## Siehe auch

- [CSS Referenz](/de/docs/Web/CSS/CSS_Referenz "CSS Reference")
- CSS Schlüsselkonzepte:
  [CSS Syntax](/de/docs/Web/CSS/Syntax "Syntax"),
  [Spezifität](/de/docs/Web/CSS/Spezifität "Spezifität") und
  [Vererbung](/de/docs/Web/CSS/Vererbung "Vererbung"),
  das [Boxmodell](/de/docs/Web/CSS/Boxmodell "Boxmodell"),
  [Layoutmodi](/de/docs/Web/CSS/Layoutmodi "CSS Layoutmodi") und
  [visuelle Formatierungsmodelle](/de/docs/Web/Guide/CSS/Visuelles_Formatierungsmodell "Visuelles Formatierungsmodell")
  und [Abstandzusammenfallen](/de/docs/Web/CSS/Boxmodell/Abstandzusammenfallen_meistern "Abstandzusammenfallen"),
  or the [initiale](/de/docs/Web/CSS/Initialwert "Initialwert"),
  [berechnete](/de/docs/Web/CSS/berechneter_Wert "berechneter Wert"),
  [verwendete](/de/docs/Web/CSS/verwendeter_Wert "verwendeter Wert")
  and [tatsächliche](/de/docs/Web/CSS/tatsächlicher_Wert "tatsächlicher Wert") Werte.
  Definitions of [Wertsyntax](/de/docs/Web/CSS/Wertdefinitionssyntax "Wertdefinitionssyntax"),
  [Kurzschreibweiseeigenschaften](/de/docs/Web/CSS/Kurzschreibweiseeigenschaften "Kurzschreibweiseeigenschaften")
  and [ersetzte Elemente](/de/docs/Web/CSS/ersetztes_Element "Ersetztes Element").
