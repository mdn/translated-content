---
title: <datalist>
slug: Web/HTML/Element/datalist
tags:
  - HTML
  - HTML Formulare
  - HTML5
  - Referenz
  - Web
translation_of: Web/HTML/Element/datalist
---
## Zusammenfassung

Das **HTML \<datalist> Element** enthält eine Liste von {{HTMLElement("option")}} Elementen, die mögliche Optionen für den Wert eines anderen Elementes repräsentieren.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Inhaltskategorien") | [Flussinhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Inhaltskategorien#Flussinhalt"), [Textinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Inhaltskategorien#Textinhalt"). |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                               | Entweder [Textinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Inhaltskategorien#Textinhalt") oder null oder mehr {{HTMLElement("option")}} Elemente.                             |
| Tag-Auslassung                                                                 | {{no_tag_omission}}                                                                                                                                                                                |
| Erlaubte Eltern-Elemente                                                       | Alle Elemente, die [Textinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Inhaltskategorien#Textinhalt") akzeptieren.                                                                     |
| DOM-interface                                                                  | {{domxref("HTMLDataListElement")}}                                                                                                                                                            |

## Attribute

Dieses Element verfügt nur über die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Globale Attribute").

## Beispiele

```html
<label for="myBrowser">Gib einen Browsernamen ein:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
</datalist>
```

{{EmbedLiveSample("Beispiele")}}

Dieses HTML wird in Firefox 4 folgendermaßen gerendert:

![datalist.png](/@api/deki/files/4982/=datalist.png)

## Spezifikationen

| Spezifikation                                                                                                                    | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'the-button-element.html#the-datalist-element', '&lt;datalist&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'the-datalist-element.html#the-datalist-element', '&lt;datalist&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |

## Browser Kompatibilität

{{Compat("html.elements.datalist")}}

## Polyfill

Der folgende Polyfill wurde für den Support für ältere oder derzeit noch inkompatible Browser entwickelt:
[datalist-polyfill](https://github.com/mfranzke/datalist-polyfill)

## Siehe auch

- Das {{HTMLElement("input")}} Element, und noch genauer sein {{htmlattrxref("list", "input")}} Attribut;
- Das {{HTMLElement("option")}} Element.

{{HTMLRef}}
