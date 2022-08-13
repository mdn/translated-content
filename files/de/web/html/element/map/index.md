---
title: <map>
slug: Web/HTML/Element/map
tags:
  - Element
  - HTML
  - HTML eingebetteter Inhalt
  - Multimedia
  - Referenz
  - Web
translation_of: Web/HTML/Element/map
---
## Übersicht

Das **HTML-Element** **`<map>`** wird zusammen mit {{HTMLElement("area")}} benutzt um ein Image Map zu definieren (eine klickbare Fläche).

| Kategorien für den Inhalt    | [Flow content](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"), palpable content. |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eralubter Inhalt             | Any [transparent](/de/docs/HTML/Content_categories#Transparent_content_model "https://developer.mozilla.org/en/HTML/Content_categories#Transparent_content_model") element.                                                               |
| Auslassung von Tags          | {{no_tag_omission}}                                                                                                                                                                                                                  |
| Erlaubte elterliche Elemente | Any element that accepts [phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content").                                                                                                |
| DOM-Schnittstelle            | {{domxref("HTMLMapElement")}}                                                                                                                                                                                                  |

## Attribute

Dieses Element verwendet die [globalen Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes").

- {{htmlattrdef("name")}}
  - : Das Attribut "name" gibt der Map einen Namen, damit sie referenziert werden kann. Das Attribut muss vorhanden sein und muss einen Wert beinhalten, der nicht null ist und keine Leerzeichen beinhaltet. Der Wert des "name"-Attributs darf nicht mit dem "name"-Attribut eines anderen Map-Elements im selben Dokument übereinstimmen, ungeachtet der Groß-/Kleinschreibung. Falls das "id"-Attribut verwendet wird, müssen beide Attribute den selben Wert haben.

## Beispiel

```html
<map>
  <area shape="circle" coords="200,250,25" href="another.htm" />
  <area shape="default" />
</map>
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Anmerkung |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'the-map-element.html#the-map-element', '&lt;map&gt;')}}     | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#the-map-element', '&lt;map&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.6.1', '&lt;map&gt;')}}                 | {{Spec2('HTML4.01')}}     |           |

## Browserkompatibilität

{{Compat("html.elements.map")}}

### Notizen zu Gecko

\[1] Startend mit Gecko 5.0 {{geckoRelease("5.0")}}, wurden leere Karten nicht länger übersprungen zugunsten für nicht-leere Karten, als diese im eigenen Modus passten. Zum Beispiel im folgenden HTML-Dokument:

```html
<map name="a"></map>
<map name="a">
  <area shape="rect" coords="25,25,75,75" href="#fail">
</map>
<img usemap="#a" src="image.png">
```

Vor Gecko 5.0 musste das {{HTMLElement("img")}}-Element zur zweiten, nicht-leeren Karte, passen. Nun passt es auch zum Ersten, auch wenn die Karte leer ist.

\[2] Von Firefox 17 ist das Standard-Aussehen des `<map>` HTML-Elementes `display: inline;` und nicht mehr `display: block;`.

## Siehe auch

- {{HTMLElement("a")}}
- {{HTMLElement("area")}}

{{HTMLRef}}
