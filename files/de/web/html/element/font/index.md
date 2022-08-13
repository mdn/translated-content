---
title: <font>
slug: Web/HTML/Element/font
tags:
  - HTML
  - Referenz
  - Schrift
  - Tags
  - Textformatierung
translation_of: Web/HTML/Element/font
---
{{obsolete_header}}

## Zusammenfassung

Das _HTML Font Element_ (\<font>) definiert die Textgröße, Textfarbe und Schriftart für seinen Inhalt.

> **Note:** _Notiz zur Verwendung:_**Benutzen Sie dieses Element nicht!** Obwohl es sich in HTML 3.2 normalisierte, wurde es in HTML 4.01 abgelehnt. Zu dieser Zeit verknüpfte es nur die Gestaltung, ab HTML5 ist es dann veraltet.Startend mit HTML 4, werden Gestaltungsinformationen nicht mit HTML (außer durch das {{HTMLElement("style")}}-Element oder das **style**-Attribut jedes Elementes) übermittelt. Für eine moderne Web-Entwicklung sollten diese Informationen in [CSS](/de/docs/Web/CSS) ausgelagert werden.Die bisherige Wirkung des {{HTMLElement("font")}}-Elementes kann genauso, oder sogar noch besser durch die [CSS Schriftarten](/de/docs/Web/CSS/CSS_Fonts) in den CSS-Einstellungen erzielt werden.

## Attribute

Wie alle anderen Elemente auch, unterstützt dieses Element die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("color")}}
  - : Dieses Attribut legt die Textfarbe durch die Eingabe eines Farbennamens oder einer speziellen Farbe im hexadezimalen #RRGGBB-Format fest.
- {{htmlattrdef("face")}}
  - : Dieses Attribut beinhaltet eine durch Kommata getrennte Liste von einem oder mehreren Schriftarten. Der Text des Dokuments im Standard-Stil wird durch die erste, vom Browser unterstützte, Schriftart dargestellt. Wenn keine genannte Schriftart auf dem lokalen System installiert ist, wird der Browser die typische Standard-Schriftart verwenden.
- {{htmlattrdef("size")}}
  - : Dieses Attribut gibt die Schriftgröße als Zahl von 1 bis 7 (1 als kleinstes und 3 als Standard) an. Es kann auch durch einen relativen Wert, wie +2 oder -3, der den Wert vom {{htmlattrxref("size", "basefont")}}-Attribut des {{HTMLElement("basefont")}}-Elementes oder relativ zum Standardwert 3 als Grundlage verwendet, festgelegt werden.

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref("HTMLFontElement")}}-Schnittstelle.

## Browser-Kompatibilität

### Notizen zu Gecko

Vor Gecko 15.0 {{geckoRelease("15.0")}}, verarbeitete der Browser verbotene Werte für das `size`-Attribut nicht korrekt. Es hat keine verbotenen Werte für relative Werte akzeptiert. Nun kürzt der Browser diese im Bereich von -10 zu +10 korrekt.

Gecko 15.0 entfernte auch die Unterstützung für die `font-weight` und `point-size`-Attribute im `<font>`-Element; Diese waren keine Standard-Werte und Gecko war die einzige Umgebung, die dies noch unterstützte.

{{HTMLRef}}
