---
title: id
slug: Web/HTML/Global_attributes/id
translation_of: Web/HTML/Global_attributes/id
original_slug: Web/HTML/Globale_Attribute/id
---
> **Note:** {{HTMLSidebar("Global_attributes")}}

Das **id** [globale Attribut](/de/docs/Web/HTML/Global_attributes) definiert einen eindeutigen Bezeichner (ID) welcher eindeutig im gesamten Dokument sein muss. Das Ziel ist die Identifizierung eines Elementes in Verknüpfungen (durch einen Fragmentbezeichner), Skripting, oder Stylisierung (mit CSS).

Der Wert des Attributes ist eine undurchsichtige Zeichenkette: dies bedeutet, dass der Webautor es nicht benutzen darf um Informationen abzuleiten. Bestimmte Bedeutung, zum Beispiel bedeutungsspezifische Eigenschaften, dürfen nicht von der Zeichenkette abgeleitet sein.

Der Attributwert darf keine Leerzeichen enthalten. Browsers treat non-conforming IDs that contains white spaces as if the white space is part of the ID. In contrast to the **class** attribute, which allows space-separated values, elements can only have one single ID defined through the **id** attribute. Note that an element may have several IDs, but the others should be set by another means, such as via a script interfacing with the DOM interface of the element.

> **Note:** Using characters except ASCII letters and digits, `'_'`, `'-'` and `'.'` may cause compatibility problems, as they weren't allowed in HTML 4. Though this restriction has been lifted in HTML 5, an ID should start with a letter for compatibility.

## Specifications

| Specification                                                                        | Status                           | Comment                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-id-attribute", "id")}} | {{Spec2('HTML WHATWG')}} | No change from latest snapshot, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                |
| {{SpecName('HTML5.1', "dom.html#the-id-attribute", "id")}}         | {{Spec2('HTML5.1')}}     | Snapshot of {{SpecName('HTML WHATWG')}}, no change from {{SpecName('HTML5 W3C')}}                                                                                                                                                                               |
| {{SpecName('HTML5 W3C', "dom.html#the-id-attribute", "id")}}     | {{Spec2('HTML5 W3C')}}     | Snapshot of {{SpecName('HTML WHATWG')}}, now accept `'_'`, `'-'` and `'.'` if not at the beginning fo the id. It is also a true global attribute.                                                                                                                      |
| {{SpecName('HTML4.01', 'struct/global.html#adef-id', 'id')}}     | {{Spec2('HTML4.01')}}     | Supported on all elements but {{HTMLElement("base")}}, {{HTMLElement("head")}}, {{HTMLElement("html")}}, {{HTMLElement("meta")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, and {{HTMLElement("title")}}. |

## Browser compatibility

{{Compat}}

\[1] **class** is a true global attribute only since Firefox 32.

## See also

- All [global attributes](/de/docs/Web/HTML/Global_attributes).
- {{domxref("Element.id")}} that reflects this attribute.
