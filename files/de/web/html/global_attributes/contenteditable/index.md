---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
tags:
  - Globale Attribute
  - HTML
  - Referenz
  - Textbearbeitung
  - Texteingabe
  - contenteditable
translation_of: Web/HTML/Global_attributes/contenteditable
original_slug: Web/HTML/Globale_Attribute/contenteditable
---
{{HTMLSidebar("Global_attributes")}}

Das [globale Attribut](/de/docs/Web/HTML/Globale_Attribute) **`contenteditable`** ist ein Aufzählungsattribut, das angibt, ob das Element für den Benutzer bearbeitbar sein soll. Das Attribut muss eines der folgenden Werte annehmen:

- `true` oder eine _leere Zeichenkette_ geben an, dass das Element editierbar sein soll;
- `false` gibt an, dass das Element nicht editierbar sein darf..

Wenn das Attribut nicht gesetzt ist, wird der Standardwert vom Elternelement _geerbt_.

Das Attribut ist ein _Aufzählungs-_ und kein _Boolean_-Attribut. Das bedeutet, dass eines der Werte `true`, `false` oder die leere Zeichenkette erforderlich sind und eine abgekürzte Schreibweise wie `<label contenteditable>Example Label</label>` nicht erlaubt ist. Die richtige Verwendung ist `<label contenteditable="true">Example Label</label>`.

Die Farbe der {{Glossary("caret", "Texteinfügemarke")}} kann mit der CSS-Eigenschaft {{cssxref("caret-color")}} gesetzt werden.

## Spezifikation

| Spezifikation                                                                                                    | Status                           | Kommentar                                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "editing.html#attr-contenteditable", "contenteditable")}} | {{Spec2('HTML WHATWG')}} | Keine Änderung seit letztem Snapshot, {{SpecName('HTML5.1')}}                                  |
| {{SpecName('HTML5.1', "editing.html#attr-contenteditable", "contenteditable")}}         | {{Spec2('HTML5.1')}}     | Snapshot von {{SpecName('HTML WHATWG')}}, keine Änderung seit {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5 W3C', "editing.html#attr-contenteditable", "contenteditable")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot von {{SpecName('HTML WHATWG')}}, ursprüngliche Definition.                            |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Inhalt bearbeitbar machen](/de/docs/Web/Guide/HTML/Content_Editable)
- [Globale Attribute](/de/docs/Web/HTML/Globale_Attribute)
- {{domxref("HTMLElement.contentEditable")}} and {{domxref("HTMLElement.isContentEditable")}}
- The CSS {{cssxref("caret-color")}} property
