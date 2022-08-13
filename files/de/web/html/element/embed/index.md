---
title: <embed>
slug: Web/HTML/Element/embed
translation_of: Web/HTML/Element/embed
---
Das HTML-Element \<embed> stellt einen Integrationspunkt für eine externe Anwendung oder einen interaktiven Inhalt dar (mit anderen Worten ein Plug-in).

Hinweis ("Dieses Thema dokumentiert nur das Element, das als Teil von HTML5 definiert ist. Es behandelt keine frühere, nicht standardisierte Implementierung des Elements.")

| Inhaltsverzeichnis    | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content), gestaltender Inhalt, eingebundener, interaktiver Inhalt, darstellender Inhalt. |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt      | Keine, es ist ein Glossar ("leeres Element").                                                                                                      |
| Tag-Auslassung        | Muss ein Start-Tag haben und darf kein End-Tag haben.                                                                                              |
| Erlaubte Eltern       | Jedes Element, das eingebetteten Inhalt akzeptiert.                                                                                                |
| Zulässige ARIA-Rollen | ARIARole("application"), ARIARole("document"), ARIARole("img"), ARIARole("presentation")                                                           |
| DOM Schnittstelle     | domxref("HTMLEmbedElement")                                                                                                                        |

## Attribute

Die Attribute dieses Elements enthalten die globalen Attribute.

- htmlattrdef("height")
  - : Die angezeigte Höhe der Ressource in CSS-Pixeln. - (nur absolute Werte. KEINE Prozentsätze)
- htmlattrdef("src")
  - : Die URL der eingebetteten Ressource
- htmlattrdef("type")
  - : Der zu verwendende MIME-Typ, um das zu instanziierende Plug-In auszuwählen.
- htmlattrdef("width")
  - : Die angezeigte Breite der Ressource in CSS-Pixeln. - (nur absolute Werte. KEINE Prozentsätze)

## Beispiele

```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480">
```

## Spezifikation

| Specification                                                                 | Status               | Comment |
| ----------------------------------------------------------------------------- | -------------------- | ------- |
| SpecName('HTML WHATWG', 'embedded-content.html#the-embed-element', '&lt;embed&gt;') | Spec2('HTML WHATWG') |         |
| SpecName('HTML5 W3C', 'embedded-content-0.html#the-embed-element', '&lt;embed&gt;') | Spec2('HTML5 W3C')   |         |

## Browser kompatibilität

> **Note:** Es gibt derzeit einen Implementierungsunterschied zwischen Browsern. Während Blink (Chrome, Opera) den Inhalt der HTML-Ressource anzeigt, zeigt Firefox eine allgemeine Meldung an, dass der Inhalt ein Plug-in benötigt (siehe Bug ("730768")). Es wird empfohlen, das Element \<object> oder \<iframe> zu verwenden.

Compat("html.elements.embed")

## Siehe auch

- Andere Elemente, die zum Einbetten von Inhalten verschiedener Typen verwendet werden, sind HTMLElement ("audio"), HTMLElement ("canvas"), HTMLElement ("iframe"), HTMLElement (" img "), MathMLElement (" math "), HTMLElement (" Objekt "), SVgelement (" svg ") und HTMLElement (" video ").

HTMLRef
