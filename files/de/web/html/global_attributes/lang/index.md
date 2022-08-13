---
title: lang
slug: Web/HTML/Global_attributes/lang
tags:
  - Attribute
  - HTML
  - Referenz
  - Sprachen
  - global
translation_of: Web/HTML/Global_attributes/lang
original_slug: Web/HTML/Globale_Attribute/lang
---
{{HTMLSidebar("Global_attributes")}}

Das globale Attribut **lang** [global attribute](/de/docs/Web/HTML/Global_attributes) wird verwendet, um die Sprache eines Elementes oder die zu verwendene Sprache für zu bearbeitende Elemente festzulegen. Dieses Attribut enthält nur einen Wert, der der Richtlinie "[_Tags for Identifying Languages (BCP47)_](http://www.ietf.org/rfc/bcp/bcp47.txt)" entspricht. Wenn kein Wert festgelegt wurde, wird automatisch _unkn\_\_own_ als Sprache festgelegt; Nach BCP47 ungültige Werte werden als _invalid_ behandelt.

Auch wenn ein Wert für das **lang**-Attribut vergeben wurde, kann es vorkommen, dass es nicht beachtet wird, weil ein [**xml:lang**](/de/docs/Web/HTML/Global_attributes/xml:lang)-Attribut immer priorisiert wird.

Für die CSS-Klasse {{cssxref(":lang")}} gilt, dass zwei ungültige Werte getrennt von einander behandelt werden, wenn sich ihr Name unterscheidet. (Wenn Sie dies nicht verstehen, lesen Sie bitte den englischen Originalartikel.

## Spezifikationen

| Spezifikiation                                                                                               | Status                           | Kommentar                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-lang-and-xml:lang-attributes", "lang")}} | {{Spec2('HTML WHATWG')}} | Keine Veränderungen zur letzten Version, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                                                         |
| {{SpecName('HTML5.1', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}         | {{Spec2('HTML5.1')}}     | Version von {{SpecName('HTML WHATWG')}}, Keine Veränderungen zu {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                         |
| {{SpecName('HTML5 W3C', "dom.html#the-lang-and-xml:lang-attributes", "lang")}}     | {{Spec2('HTML5 W3C')}}     | Version von {{SpecName('HTML WHATWG')}}, Verhalten bei `xml:lang` und vorbestimmten Sprachgen durch einen Algorithmus festgelegt. Ebenfalls ein echtes globales Attribut.                                                                                                                                                                                |
| {{SpecName('HTML4.01', 'struct/dirlang.html#h-8.1', 'lang')}}                             | {{Spec2('HTML4.01')}}     | Unterstützt alle Elemente außer diesen: {{HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}}, and {{HTMLElement("script")}}. |

## Browserkompatibilität

{{Compat("html.global_attributes.lang")}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
