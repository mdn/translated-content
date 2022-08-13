---
title: <optgroup>
slug: Web/HTML/Element/optgroup
tags:
  - Element
  - HTML
  - HTML Formulare
  - Referenz
  - Web
translation_of: Web/HTML/Element/optgroup
---
## Übersicht

In einem Webformular erstellt das `<optgroup>` HTML Element eine Gruppe von Optionen innerhalb eines {{HTMLElement("select")}} Elements.

| [Inhaltskategorien](/de/docs/Web/Guide/HTML/Inhaltskategorien "HTML/Content_categories") | Keine                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                         | Keine oder mehrere {{HTMLElement("option")}} Elemente.                                                                                                               |
| Tag Auslassung                                                                           | Der Starttag ist zwingend. Der Endtag ist optional, falls dem Element direkt ein weiteres <optgroup> Element folgt oder falls das Elternelement keine weiteren Inhalte hat. |
| Erlaubte Elternelemente                                                                  | Ein {{HTMLElement("select")}} Element.                                                                                                                               |
| DOM Schnittstelle                                                                        | {{domxref("HTMLOptGroupElement")}}                                                                                                                                |

{{Note("<code>&lt;optgroup&gt;</code> Elemente können nicht verschachtelt werden.")}}

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Globale_Attribute "HTML/Global attributes").

- {{htmlattrdef("disabled")}}
  - : Falls dieses boolsche Attribut gesetzt ist, ist keines der Optionsgruppenelemente auswählbar. Oft grauen Browser diese Optionen aus und sie erhalten keine Ereignisse wie Mausklicks oder Fokus bezogene Ereignisse.
- {{htmlattrdef("label")}}
  - : Der Name der Optionsgruppe, welchen der Browser verwenden kann, um die Optionen in der Benutzerschnittstelle zu beschreiben. Dieses Attribut ist zwingend, falls dieses Element benutzt wird.

## Beispiel

```html
<select>
  <optgroup label="Gruppe 1">
    <option>Option 1.1</option>
  </optgroup>
  <optgroup label="Gruppe 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <optgroup label="Gruppe 3" disabled>
    <option>Option 3.1</option>
    <option>Option 3.2</option>
    <option>Option 3.3</option>
  </optgroup>
</select>
```

### Ergebnis

{{EmbedLiveSample("Beispiel")}}

## Spezifikation

| Spezifikation                                                                                                                    | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'the-button-element.html#the-optgroup-element', '&lt;optgroup&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'forms.html#the-optgroup-element', '&lt;optgroup&gt;')}}                     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.6', '&lt;optgroup&gt;')}}                             | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- Andere Formular bezogene Elemente: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.

{{HTMLRef}}
