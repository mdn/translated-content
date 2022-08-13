---
title: class
slug: Web/HTML/Global_attributes/class
tags:
  - Klassen Globale Attribute
translation_of: Web/HTML/Global_attributes/class
original_slug: Web/HTML/Globale_Attribute/class
---
> **Note:** {{HTMLSidebar("Global_attributes")}}

Das [Globale Attribut](/de/docs/Web/HTML/Global_attributes) **class** ist eine durch Leerzeichen separierte Liste von Klassen dieses Elements. Klassen erlauben es CSS und Javascript auf spezifische Elemente über [Klassenselektoren](/En/CSS/Class_selectors) oder DOM-Methoden {{domxref("document.getElementsByClassName")}} zuzugreifen.

Obwohl die Spezifikation keine Anforderung an die Benennung von Klassen stellt, sollten Webentwickler darauf achten, dass der semantische Zweck des Elements beschrieben wird, und gerade nicht die Darstellungseigenschaften.

Beispiel:
Attribut _hervorgehoben_ , um einen hervorgehobenen Textteil zu beschreiben aber nicht als _italics_.

"Semantische" Namen bleiben logisch (zutreffend), auch wenn sich die Darstellung der Webseite ändert (wenn also z.B. Hervorhebungen anstatt _kursiv_ nun farbig in braun dargestellt werden).

## Spezifikationen

| Spezifikation                                                                        | Status                           | Bemerkung                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "elements.html#classes", "class")}}     | {{Spec2('HTML WHATWG')}} | Keine Änderungen zum letzten Snapshot, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                                                   |
| {{SpecName('HTML5.1', "elements.html#classes", "class")}}         | {{Spec2('HTML5.1')}}     | Snapshot von {{SpecName('HTML WHATWG')}}, keine Änderung zu {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                     |
| {{SpecName('HTML5 W3C', "elements.html#classes", "class")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot von {{SpecName('HTML WHATWG')}}. Von {{SpecName('HTML4.01')}}, **class** ist jetzt ein echtes Globales Attribut.                                                                                                                                                                                                                |
| {{SpecName('HTML4.01', "struct/global.html#h-7.5.2", "class")}} | {{Spec2('HTML4.01')}}     | Unterstützt alle Elemente außer {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("param")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("title")}}. |

## Browser Kompatibilität

{{Compat}}

\[1] **class** ist ein echtes Globales Attribut erst seit Firefox 32.

## Weiterführende Links

- All [global attributes](/de/docs/Web/HTML/Global_attributes).
