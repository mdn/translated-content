---
title: Ersetztes Element
slug: Web/CSS/Replaced_element
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/Replaced_element
original_slug: Web/CSS/ersetztes_Element
---
{{CSSRef}}

## Übersicht

In CSS ist ein **ersetztes Element** ein Element, dessen Darstellung außerhalb des Anwendungsbereichs von CSS liegt. Dies sind eine Art externe Objekte, deren Repräsentation unabhängig von CSS ist. Typische ersetzte Elemente sind {{HTMLElement("img")}}, {{HTMLElement("object")}}, {{HTMLElement("video")}} oder Formularelemente wie {{HTMLElement("textarea")}} und {{HTMLElement("input")}}. Manche Elemente wie {{HTMLElement("audio")}} oder {{HTMLElement("canvas")}} sind nur in bestimmten Fällen ersetzte Elemente. Objekte, die via CSS {{cssxref("content")}} Eigenschaften eingefügt werden, sind _anonyme ersetzte Elemente_.

CSS behandelt ersetzte Elemente in manchen Fällen besonders, wie z. B. bei der Berechnung von Außenabständen und einigen `auto` Werten.

Beachte, dass manche ersetzte Elemente, jedoch nicht alle, innere Maße oder eine definierte Grundlinie haben, welche von einigen CSS Eigenschaften wie {{cssxref("vertical-align")}} verwendet wird.

## Siehe auch

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
