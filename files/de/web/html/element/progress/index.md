---
title: <progress>
slug: Web/HTML/Element/progress
tags:
  - Element
  - HTML
  - HTML Formulare
  - HTML5
  - Referenz
  - Web
translation_of: Web/HTML/Element/progress
---
## Übersicht

Das **HTML `<progress>` Element** wird benutzt, um den Fortschritt einer Aufgabe zu visualisieren. Während die Einzelheiten dem Browser überlassen werden, wird es üblicherweise als Fortschrittsanzeige angezeigt. Javascript kann den Wert der Fortschrittsanzeige manipulieren.

| [Inhalt Kategorien](/de/docs/Web/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [Formuliereder Inhalt](/de/docs/Web/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content"), bezeichbarer Inhalt, fühlbarer Inhalt. |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                    | [Formulierender Inhalt](/de/docs/Web/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content"), doch es darf kein `<progress>` Element unter seinen Nachfahren sein.                                                                                 |
| Tag Wegfall                                                                         | {{no_tag_omission}}                                                                                                                                                                                                                                                        |
| Erlaubte Elternelemente                                                             | Alle Elemente, die [formuliereden Inhalt](/de/docs/Web/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") akzeptieren.                                                                                                                        |
| DOM-Schnittstelle                                                                   | {{domxref("HTMLProgressElement")}}                                                                                                                                                                                                                                    |

## Attribute

Das Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes "HTML/Global attributes").

- {{ htmlattrdef("max") }}
  - : Das Attribut beschreibt, wie viel Arbeit die Aufgabe, angezeigt bei dem `progress` Element, benötigt. Das `max` Attribut, wenn vorhanden, muss größer als Null sein und eine gültige Zahl binnen floating point number sein.
- {{ htmlattrdef("value") }}
  - : Das Atttribut gibt an, wie viel Arbeit der gesamten Aufgabe schon verrichtet wurde. Es muss eine gültige Zahl binnen floating point number zwischen 0 und `max` oder zwischen 0 und 1, falls `max` wegfällt, sein. Falls kein `value` (Wert) Attribut gegeben ist, ist die Fortschrittsanzeige unbestimmt; dies zeigt an, dass eine Aktivität ohne eine festgelegte ungefähre Restdauer fortläuft.

Sie können die {{ cssxref("-moz-orient") }} Eigenschaft nutzen, um festzulegen, ob die Fortschrittsanzeige horizontal (der Standard) oder vertikal gerendert werden soll. Die {{ cssxref(":indeterminate") }} Pseudo-Klasse kann benutzt werden, um unbestimmte Fortschrittsanzeigen zuzuorden.

## Beispiele

```html
<progress value="70" max="100">70 %</progress>
```

### Resultat

{{ EmbedLiveSample("Beispiele", 200, 50) }}

Das Endergebnis sieht auf Mac OS X so aus:

![The progress bar seen in OS X Mavericks](https://mdn.mozillademos.org/files/6863/Screenshot%202014-01-30%2011.14.30.png)

Das Endergebnis sieht auf Windows so aus:

![progress-firefox.JPG](/@api/deki/files/6031/=progress-firefox.JPG)

### Zusätzliche Bespiele

Siehe auch {{ cssxref("-moz-orient") }}.

## Spezifikationen

| Spezifikation                                                                                                                    | Status                           | Kommentar               |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------- |
| {{SpecName('HTML WHATWG', 'the-button-element.html#the-progress-element', '&lt;progress&gt;')}} | {{Spec2('HTML WHATWG')}} |                         |
| {{SpecName('HTML5 W3C', 'forms.html#the-progress-element', '&lt;progress&gt;')}}                     | {{Spec2('HTML5 W3C')}}     | Ursprünliche Definition |

## Browser Kompatibilität

{{Compat}}

\[1] Gecko liefert das {{ cssxref("::-moz-progress-bar") }} Pseudo-Element, welches Sie das Aussehen des Inneren der Fortschrittsanzeige verändern lässt, wie groß der Fortschritt schon ist.
Vor Gecko 14.0 {{ geckoRelease("14.0") }} wurde das `<progress>` Element inkorrekterweise als ein Formularelement klassifiziert und hatte daher ein `form` Attribut. Dieser Fehler wurde jedoch behoben.

\[2] Gecko liefert das {{ cssxref("::-moz-progress-bar") }} Pseudo-element, welches Sie das Aussehen des Inneren der Fortschrittsanzeige verändern lässt, wie groß der Fortschritt schon ist.

\[3] Safari auf iOS unterstützt die unbestimmte Fortschrittsanzeige nicht. (Stattdessen wird 0% Fortschritt angezeigt).

## Siehe auch

- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}

{{ HTMLRef }}
