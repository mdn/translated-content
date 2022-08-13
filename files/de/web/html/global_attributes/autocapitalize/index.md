---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
tags:
  - Automatische Großschreibung
  - Globales Attribut
  - HTML
translation_of: Web/HTML/Global_attributes/autocapitalize
original_slug: Web/HTML/Globale_Attribute/autocapitalize
---
{{HTMLSidebar("Global_attributes")}}

Das [Globale Attribut](/de/docs/Web/HTML/Global_attributes) **`autocapitalize`** ist ein Aufzählungsattribut, welches kontrolliert ob und wie Text-Input automatisch großgeschrieben wird, während der Nutzer etwas einfügt oder editiert. Das Attribut muss einen der folgenden Werte annehmen:

- `off` oder `none`: Es wird keine automatische Großschreibung benutzt (alle Buchstaben sind automatisch kleingeschrieben)
- `on` oder `sentences`: Der erste Buchstabe jedes Satzes wird zu einem großgeschriebenen Buchstaben transformiert. Die restlichen Buchstaben werden kleingeschrieben.
- `words`: Der erste Buchstabe jedes Wortes wird zu einem großgeschriebenen Buchstaben transformiert. Die restlichen Buchstaben werden kleingeschrieben.
- `characters`: Alle Buchstaben sind automatisch großgeschrieben.

Das `autocapitalize` Attribut hat keine Auswirkungen auf das Verhalten eines physikalischen Keyboards beim Tippen. Aber es hat Auswirkungen auf das Verhalten von anderen Input Mechanismen, wie virtuellen Keyboards auf Mobilfunkgeräten oder Sprachinput. Diese Mechanismen helfen Nutzern oft dabei, den ersten Buchstaben eines Satzes automatisch großzuschreiben. Das `autocapitalize` Attribut ermöglicht es Autoren dieses Verhalten auf einer per-Element Basis nicht zu berücksichtigen.

Das `autocapitalize` Attribut führt nie zu automatischer Großschreibung bei einem {{HTMLElement("input")}} Element mit einem {{htmlattrxref("type", "input")}} Attribut, dessen Wert `url`, `email`, oder `password` ist.

## Spezifikationen

| Specification                                                                                                    | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "interaction.html#autocapitalization", "autocapitalize")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser Kompatibilität

{{Compat("html.global_attributes.autocapitalize")}}
