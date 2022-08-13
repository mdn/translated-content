---
title: <details>
slug: Web/HTML/Element/details
tags:
  - Element
  - HTML
  - HTML interactive Elemente
  - HTML5
  - Referenz
  - Web
translation_of: Web/HTML/Element/details
---
## Übersicht

Das **HTML `<details> `Element** wird genutzt für Auskünfte, damit Benutzer zusätzliche Informationen erhalten können.

| [Inhaltskategorien](/de/docs/Web/HTML/Content_categories) | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content), Sektionsursprung, interaktiver Inhalt, greifbarer Inhalt.    |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Erlaubter Inhalt                                          | Ein {{HTMLElement("summary")}} Element gefolgt von [fließenden Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content). |
| Tag Auslassung                                            | {{no_tag_omission}}                                                                                                             |
| Erlaubte Elternelemente                                   | Jedes Element, dass [fließenden Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content) erlaubt.                                  |
| DOM Schnittstelle                                         | {{domxref("HTMLDetailsElement")}}                                                                                         |

## Attribute

Dieses Element schließt [globale Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- {{htmlattrdef("open")}}
  - : Dieses Boolesche Attribut indiziert, ob die Details dem Benutzer beim Laden der Seite angezeigt werden. Standardmäßig steht dieser Wert auf 'false', sodass die Details versteckt sind.

## Beispiel

```html
<details>
  <summary>Some details</summary>
  <p>More info about the details.</p>
</details>
```

### Live Beispiel

{{EmbedLiveSample("Beispiel")}}

## Spezifikationen

| Spezifikation                                                                                                                    | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'interactive-elements.html#the-details-element', '&lt;details&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'the-details-element.html#the-details-element', '&lt;details&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |

## Browser Kompatibilität

{{Compat("html.elements.details")}}

## Siehe auch

- {{HTMLElement("summary")}} Element

{{HTMLRef}}
