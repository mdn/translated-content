---
title: <time>
slug: Web/HTML/Element/time
tags:
  - Element
  - HTML
  - HTML Textlevel Semantiken
  - HTML5
  - Referenz
  - Web
translation_of: Web/HTML/Element/time
---
Das **HTML `<time>`-Element** repräsentiert entweder Zeitangaben im 24-Stunden-Format oder ein präzises Datum im [gregorianischen Kalender](http://de.wikipedia.org/wiki/Gregorianischer_Kalender) (mit optionalen Zeit- und Zeitzonen-Informationen).

Dieses Element erlaubt es, Daten und Zeiten in einem maschinell lesbaren Format darzustellen. Dies kann hilfreich für User Agents sein, die eine beliebige Art der Terminplanung für den Kalender des Benutzers anbieten.

> **Note:** **Hinweis zur Verwendung:** Dieses Element ist nicht geeignet, wenn ein genaues Datum nicht berechnet werden kann oder das Datum vor der Einführung des gregorianischen Kalenders liegt (aufgrund von Schwierigkeiten, diese Daten zu berechnen).

| [Content categories](/de/docs/Web/HTML/Content_categories "HTML/Content_categories") | [Flow content](/de/docs/Web/HTML/Content_categories#Flow_content "HTML/Content_categories#Flow_content"), [phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"), palpable content. |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Permitted content                                                                    | [Phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"), aber keine verschachtelten `time`-Elemente.                                                                                 |
| Tag omission                                                                         | Keine; sowohl End- als auch Starttag sind Pflicht.                                                                                                                                                                                            |
| Permitted parent elements                                                            | Jedes Element, das [phrasing content](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content") akzeptiert.                                                                                               |
| DOM interface                                                                        | {{domxref("HTMLTimeElement")}}                                                                                                                                                                                                      |

## Attribute

Wie alle anderen HTML-Elemente, unterstützt dieses Element [globale Attribute](/de/docs/HTML/Global_attributes).

- {{htmlattrdef("datetime")}}
  - : Dieses Attribut gibt Zeit und Datum des Elements an und muss ein [gültiges Datum mit optionalem Zeit-String](http://www.w3.org/TR/html-markup/datatypes.html#common.data.datetime) sein. Wenn der Wert nicht als Datum mit optionalem Zeit-String geparst werden kann, wird diesem Element kein gültiger Zeitstempel zugeordnet.

## Beispiele

### Einfaches Beispiel

```html
<p>Das Konzert startet um <time>20:00</time> Uhr.</p>
```

Die Ausgabe des obigen HTML ist:

Das Konzert startet um 20:00 Uhr.

### `datetime`-Beispiel

```html
<p>Das Konzert findet am <time datetime="2001-05-15 19:00">15. Mai</time> statt.</p>
```

Die Ausgabe des obigen HTML ist:

Das Konzert findet am 15. Mai statt.

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar                                          |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#the-time-element', '&lt;time&gt;')}}                             | {{Spec2('HTML WHATWG')}} | Keine Änderung zu {{SpecName('HTML5.1')}} |
| {{SpecName('HTML5.1', 'grouping-content.html#the-time-element', '&lt;main&gt;')}}     | {{Spec2('HTML5.1')}}     | Keine Änderung zu {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-time-element', '&lt;main&gt;')}} | {{Spec2('HTML5 W3C')}}     | Ursprüngliche Definition                           |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das{{HTMLElement("data")}}-Element erlaubt die Auszeichnung anderer Werte.

{{HTMLRef}}
