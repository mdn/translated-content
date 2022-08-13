---
title: strong
slug: Web/HTML/Element/strong
tags:
  - HTML
  - HTML Elemente
  - HTML Referenz
translation_of: Web/HTML/Element/strong
---
> **Hinweis:** Dieser Artikel ist nicht vollständig.

Das HTML `<strong>` Element gibt dem Text eine starke Betonung. Typischerweise wird dieser dann in Fettdruck dargestellt.

### DOM Interface

Dieses Element implementiert das [`HTMLElement`](/de/DOM/element "de/DOM/element") Interface.

> **Note:** **Implementationshinweis:** Bis einschließlich Gecko 1.9.2 implementiert Firefox das [HTMLSpanElement](/de/DOM/span "de/DOM/span") Interface für dieses Element.

#### Beispiel

       <p>

           Wenn x ausgeführt werden soll, ist es <strong>notwendig</strong> vorher y auszuführen.

       </p>

#### Ergebnis

Wenn x augeführt werden soll, ist es **notwendig** vorher y auszuführen.

### Bold vs. Strong

Meist ist es besonders für neue Entwickler verwunderlich, warum es so viele Wege gibt, ein und die selbe Sache auszudrücken. `<b>` und `<strong>` ist ein gutes Beispiel dafür. Warum \<strong>\</strong> gegenüber \<b>\</b> bevorzugen? Der Tag-Name ist doch länger und es wird letztlich das gleiche angezeigt.

Vielleicht nicht ganz, denn `strong` ist eine logische und `bold` eine äußerliche Aussage. Logische Aussagen trennen Präsentation vom Inhalt und daher bieten sie mehr Möglichkeiten zum Ausdruck eines betonten Texts. Anstatt den Text einfach nur in Fettdruck darzustellen, könnte `<strong>` auch rot, in größerer Schrift, unterstrichen oder in einer anderen Art dargestellt werden. Es macht mehr Sinn die Präsentationseigenschaften von strong zu verändern als die von bold. Das kommt daher, weil bold eine äußerliche Aussage tätigt und keine Trennung von Präsentation und Inhalt stattfindet. Eine Änderung an der äußerlichen Gestaltung von bold, welche bold z.B. nicht mehr als Fettdruck gestalten würde, wäre verwirrend und unlogisch.

### Siehe auch

- [HTML bold Element](/de/HTML/Element/b "de/HTML/Element/b")

{{HTMLRef}}
