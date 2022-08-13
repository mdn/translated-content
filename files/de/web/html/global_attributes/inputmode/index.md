---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
tags:
  - Attribute
  - Bearbeiten
  - Eingabemodus
  - Formulare
  - Globale Attribute
  - HTML
  - Referenz
  - Text
  - Texteingabe
  - Web
  - global
translation_of: Web/HTML/Global_attributes/inputmode
original_slug: Web/HTML/Globale_Attribute/inputmode
---
Das **`inputmode`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein aufgezähltes Attribut, das einen Hinweis auf die Art der Daten liefert, die der Benutzer während der Bearbeitung des Elements oder seines Inhalts eingeben kann. Es kann die folgenden Werte haben:

- `"none"`
  - : Keine virtuelle Tastatur; dies ist nützlich, wenn die Anwendung oder die Website ihre eigene Tastatureingabesteuerung implementiert.
- `"text"`
  - : Standard-Text-Eingabetastatur für das aktuelle Gebietsschema des Benutzers.
- `"decimal"`
  - : Fraktionierte numerische Eingabetastatur, die die Ziffern und das entsprechende Trennzeichen für das Gebietsschema des Benutzers enthält (typischerweise entweder "." oder ",").
- `"numeric"`
  - : Numerische Eingabetastatur; alles, was benötigt wird, sind die Ziffern 0 bis 9.
- `"tel"`
  - : Eine Telefontastatur-Eingabe, die die Ziffern 0 bis 9, das Sternchen ("\*") und die Pfund-Taste ("#") enthält. Für Formulareingaben, die eine Telefontastatur erfordern, sollte stattdessen [`<input type="tel">`](/en-US/docs/Web/HTML/Element/input/tel) verwendet werden.
- `"search"`
  - : Eine virtuelle Tastatur, die für die Sucheingabe optimiert ist. So kann beispielsweise die Eingabetaste in "Suchen" umbenannt werden, und es kann weitere Optimierungen geben.
- `"email"`
  - : Eine virtuelle Tastatur, die für die Eingabe von E-Mail-Adressen optimiert ist; typischerweise beinhaltet dies das Zeichen "@" sowie andere Optimierungen. Für Formulareingaben, die eine Eingabe der E-Mail-Adresse erfordern, sollte stattdessen [`<input type="email">`](/en-US/docs/Web/HTML/Element/input/email) verwendet werden.
- `"url"`
  - : Eine Tastatur, die für die Eingabe von URLs optimiert ist. Dies kann z.B. dazu führen, dass die Taste "/" prominenter verfügbar ist. Erweiterte Funktionen können auch den Zugriff auf die Historie und dergleichen beinhalten. Für Formulareingaben, die eine URL anfordern, sollte stattdessen [`<input type="url">`](/en-US/docs/Web/HTML/Element/input/url) verwendet werden.

Wenn dieses Attribut nicht gesetzt ist, lautet sein Standardwert `"text"`, was darauf hinweist, dass die Standard-Text-Eingabetastatur des Gebietsschemas verwendet werden sollte.

> **Warning:** **Spezifischer Konflikt:** Das [WHATWG spec lists `inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode), und moderne Browser arbeiten daran, sie zu unterstützen. Das [W3C HTML 5.2 spec](https://www.w3.org/TR/html52/index.html#contents) listet es nicht mehr (markiert es als veraltet). Sie sollten die WHATWG-Definition als richtig betrachten, bis ein Konsens erreicht ist.

## Spezifikationen

| Spezifikation                                                                                                                            | Status                           | Bemerkung |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName("HTML WHATWG", "interaction.html#input-modalities:-the-inputmode-attribute", "inputmode")}} | {{Spec2("HTML WHATWG")}} |           |

## Browser-Kompatibilität

{{Compat("html.global_attributes.inputmode")}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

{{HTMLSidebar("Global_attributes")}}
