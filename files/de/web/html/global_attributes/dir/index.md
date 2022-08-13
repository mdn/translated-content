---
title: dir
slug: Web/HTML/Global_attributes/dir
tags:
  - Globales Attribut
  - HTML
  - Referenz
  - Textrichtung
translation_of: Web/HTML/Global_attributes/dir
original_slug: Web/HTML/Globale_Attribute/dir
---
{{HTMLSidebar("Global_attributes")}}

Das globale Attribut **dir** ist ein Attribut, das die Richtung des Elementtextes angibt. Es kann folgende Werte haben:

- `ltr`, von **links nach rechts** (englisch: _left to right_). Wird für Sprachen, die von links nach rechts geschrieben werden (z.B. deutsch) verwendet;
- `rtl`, von **rechts nach links** (englisch: _right to left_). Wird für Sprachen, die von rechts nach links geschrieben werden (z.B. arabisch) verwendet;
- `auto`, lässt den Browser des Nutzers entscheiden. Es benutzt einen simplen Algorithmus, indem es die Zeichen im Element einliest, bis es ein Zeichen mit einer bekannten Richtung findet und dann diese Richtung auf das gesamte Element anwendet.

> **Note:** **Nutzungsinformationen**Dieses Attribut ist verpflichtend für das {{ HTMLElement("bdo") }}-Element, bei dem es eine andere Bedeutung hat.\* Dieses Attribut wird nicht vom {{ HTMLElement("bdi") }}-Element geerbt. Sein Standardwert ist `auto`.
>
> - Dieses Attribut kann von den CSS-Eigenschaften {{ cssxref("direction") }} and {{ cssxref("unicode-bidi") }} überschrieben werden, sofern eine CSS-Seite eingebunden ist und das Element diese Eigenschaften unterstützt.
> - Da die Richtung eines Textes sprachlich zu seinem Inhalt und nicht zu seiner Darstellung gehört, ist es zu empfehlen, dass Web-Entwickler - sofern möglich - dieses Attribut anstatt der zugehörigen CSS-Eigenschaft zu verwenden. So kann der Text auch in einem Browser, der die CSS-Eigenschaften nicht unterstützt oder in dem CSS deaktiviert ist, korrekt dargestellt werden.
> - Der `auto` Wert sollte für Daten mit einer unbekannten Richtung verwendet werden, wie zum Beispiel Daten aus Benutzereingaben, möglicherweise in einer Datenbank gespeichert.

## Spezifikationen

| Specification                                                                        | Status                           | Comment |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "dom.html#the-dir-attribute", "dir")}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5.1', "dom.html#the-dir-attribute", "dir")}}     | {{Spec2('HTML5.1')}}     |         |
| {{SpecName('HTML5 W3C', "dom.html#the-dir-attribute", "dir")}} | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', "dirlang.html#h-8.2", "dir")}}             | {{Spec2('HTML4.01')}}     |         |

## Browser-Kompatibilität

{{Compat("html.global_attributes.dir")}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- {{domxref("HTMLElement.dir")}}, das auf dieses Attribut zurückgreift
