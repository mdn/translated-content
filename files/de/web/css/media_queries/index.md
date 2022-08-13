---
title: Media queries
slug: Web/CSS/Media_Queries
tags:
  - CSS
  - Media Queries
  - NeedsTranslation
  - Overview
  - Reference
  - TopicStub
translation_of: Web/CSS/Media_Queries
---
{{CSSRef}}

Mit **Media Queries** können Sie Ihre Website oder App abhängig vom Vorhandensein oder Wert verschiedener Geräteeigenschaften und Parameter anpassen.

Sie sind eine Schlüsselkomponente des [responsiven Designs](/de/docs/Web/Progressive_web_apps). Eine Media Query kann zum Beispiel die Schriftgröße auf kleinen Geräten verkleinern, den Abstand zwischen Absätzen vergrößern, wenn eine Seite im Hochformat angezeigt wird, oder die Größe von Schaltflächen auf Touchscreens erhöhen.

Verwenden Sie in [CSS](/de/docs/Web/CSS) die [@-Regeln](/de/docs/Web/CSS/At-rule) {{cssxref("@media")}}, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer Media Query bedingt anzuwenden. Verwenden Sie {{cssxref("@import")}}, um ein ganzes Stylesheet bedingt anzuwenden.

### Media Queries in HTML

In [HTML](/de/docs/Web/HTML) können Media-Queries auf verschiedene Elemente angewendet werden:

- Im {{HTMLElement("link")}}-Attribut des {{htmlattrxref("media", "link")}}-Elements definieren sie das Medium, auf das eine verlinkte Ressource (typischerweise CSS) angewendet werden soll.
- Im {{HTMLElement("source")}}-Attribut des {{htmlattrxref("media", "source")}}-Elements definieren sie die Medien, auf die diese Quelle angewendet werden soll. (Dies ist nur innerhalb von {{HTMLElement("Bild")}}-Elementen gültig.)
- Im {{HTMLElement("style")}}-Attribut des Elements {{htmlattrxref("media", "style")}} definieren sie die Medien, auf die der Stil angewendet werden soll.

### Media Queries in JavaScript

In JavaScript können Sie die Methode {{domxref("Window.matchMedia()")}} verwenden, um das Fenster gegen eine Medienabfrage zu testen. Sie können auch {{domxref("MediaQueryList.addListener()")}} verwenden, um benachrichtigt zu werden, wenn sich der Zustand einer Abfrage ändert. Mit dieser Funktionalität kann Ihre Website oder App auf Änderungen der Gerätekonfiguration, der Ausrichtung oder des Zustands reagieren.

Mehr über die programmatische Verwendung von Media Queries erfahren Sie in [Media Queries testen](/de/docs/Web/CSS/Media_Queries/Testing_media_queries).

## Referenz

### @-Regeln

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## Anleitung

- [Media Queries verwenden](/de/docs/Web/CSS/Media_Queries/Using_media_queries)
  - : Stellt Media Queries, ihre Syntax und die Operatoren und Media Features vor, die zur Konstruktion von Media Query-Ausdrücken verwendet werden.
- [Media Queries programmatisch testen](/de/docs/Web/CSS/Media_Queries/Testing_media_queries)
  - : Beschreibt, wie Sie Media Queries in Ihrem JavaScript-Code verwenden, um den Zustand eines Geräts zu ermitteln und Listener einzurichten, die Ihren Code benachrichtigen, wenn sich die Ergebnisse von Media Queries ändern (z. B. wenn der Benutzer den Bildschirm dreht oder die Größe des Browsers ändert).
- [Verwendung von Media Queries für Barrierefreiheit](/de/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)
  - : Erfahren Sie, wie Media Queries dem Benutzer helfen können, Ihre Website besser zu verstehen.

## Spezifikationen

| Spezifikation                                    | Status                                   | Kommentar                |
| ------------------------------------------------ | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS5 Media Queries')}}     | {{Spec2('CSS5 Media Queries')}} |                          |
| {{SpecName('CSS3 Conditional')}}     | {{Spec2('CSS3 Conditional')}} |                          |
| {{SpecName('CSS4 Media Queries')}}     | {{Spec2('CSS4 Media Queries')}} |                          |
| {{SpecName('CSS3 Media Queries')}}     | {{Spec2('CSS3 Media Queries')}} |                          |
| {{SpecName('CSS2.1', 'media.html')}} | {{Spec2('CSS2.1')}}                 | Ursprüngliche Definition |

## Siehe auch

- Verwenden Sie {{cssxref("@supports")}}, um Stile anzuwenden, die von der Browserunterstützung für verschiedene CSS-Technologien abhängen.
