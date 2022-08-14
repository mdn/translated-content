---
title: draggable
slug: Web/HTML/Global_attributes/draggable
tags:
  - Experimental
  - Global attributes
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/draggable
original_slug: Web/HTML/Globale_Attribute/draggable
---
{{HTMLSidebar("Global_attributes")}} {{SeeCompatTable}}

Das globale Attribut **draggable** ist ein Attribut, dass zeigt, ob das entsprechende Element auf einen anderen Ort gezogen werden kann. Es unterstützt die {{domxref("HTML_Drag_and_Drop_API","HTML Drag and Drop API")}}. Folgende Werte sind erlaubt:

- true, das Element kann _gedraggt_ werden
- false, das Element kann nicht _gedraggt_ werden

Wurde das Attribut nicht gesetzt, wird als Wert `auto` angenommen. Das Drag-Verhalten des Elements wird dann durch den Browser bestimmt.

Bei diesem Attribut handelt es sich nicht um einen _booleschen_ Wert, `true` oder `false` muss explizit angegeben werden. Eine Kurzform wie beispielsweise `<label draggable>Beispiel Label</label>` ist nicht zulässig. Die korrekte Verwendung ist `<label draggable="true">Beispiel Label</label>`.

Nativ kann das Attribut **draggable** nur für Textauswahl, Bilder und Links verwendet werden. Bei allen anderen Elementen muss das **{{domxref('GlobalEventHandlers.ondragstart','ondragstart')}}\*\***`-`\*\*Event gesetzt werden, um Drag & Drop Mechanismen verwendet zu können. [Dieses Beispiel](/de/docs/DragDrop/Drag_Operations) (englisch) enthält eine ausführlichere Beschreibung der Drag & Drop API und deren Verwendung.

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar                                                                  |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#the-draggable-attribute", "draggable")}} | {{Spec2('HTML WHATWG')}} | Keine Änderung seit dem letztem Snapshot, {{SpecName('HTML5.1')}} |
| {{SpecName('HTML5.1', "editing.html#the-draggable-attribute", "draggable")}}             | {{Spec2('HTML5.1')}}     | Snapshot von {{SpecName('HTML WHATWG')}}, initiale Definition     |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](de/docs/Web/HTML/Globale_Attribute).
