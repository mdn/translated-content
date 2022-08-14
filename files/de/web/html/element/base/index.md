---
title: <base>
slug: Web/HTML/Element/base
tags:
  - Element
  - HTML
  - HTML Dokumentmetadaten
  - Referenz
  - Web
translation_of: Web/HTML/Element/base
---
## Übersicht

Das _HTML Base Element_ (**\<base>**) definiert die Basis URL für alle relativen URLs im Dokument. Das \<base> Element darf nur einmal im Dokument vorkommen.

> **Note:** **Hinweis:** Falls mehrere `<base>` Elemente in einem Dokument vorhanden sind, wird nur der Erste **href** und der Erste **target** Wert verwendet. Alle anderen werden ignoriert.

| [Inhaltskategorien](/de/docs/Web/HTML/Content_categories) | Metadata Inhalt.                                                                                                     |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                          | Keine, ist ein {{Glossary("empty element")}}.                                                             |
| Tag Auslassung                                            | Es ist kein End-Tag erforderlich.                                                                                    |
| Erlaubte Elternelemente                                   | Jedes {{HTMLElement("head")}} Element, das keine anderen {{HTMLElement("base")}} Elemente enthält. |
| DOM Schnittstelle                                         | {{domxref("HTMLBaseElement")}}                                                                             |

## Attribute

Dieses Element schliesst [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

- {{htmlattrdef("href")}}
  - : Die Basis URL die im Dokument für relative URLs genutzt werden soll. Wenn dieses Attribut verwendet wird, sollte das Element vor allen anderen Elementen definiert werden, die eine URL als Wert enthalten.
    Absolute und relative URLs sind erlaubt (siehe Anmerkungen).
- {{htmlattrdef("target")}}
  - : Dieses Attribut legt fest, wo die verlinkte Quelle angezeigt wird. In HTML4 ist das der Name eines Frames oder ein Schlüsselwort für ein Frame. In HTML5 ist es ein Name eines _browsing context_es oder ein Schlüsselwort für einen \_browsing context_ (zum Beispiel ein Tab, Fenster oder Inline Frame). Die folgenden Schlüsselwörter haben eine spezielle Bedeutung:\* `_self`: Lädt die Antwort in dasselbe Frame (HTML4) bzw. denselben _browsing context_ (HTML5) wie die aktuelle Seite. Dieser Wert ist der Standardwert.
    - `_blank`: Lädt die Antwort in ein neues unbenanntes Fenster (HTML4) bzw. einen neuen _browsing context_ (HTML5).
    - `_parent`: Lädt die Antwort in den _frameset parent_ des aktuellen Frames (HTML4) bzw. _parent browsing context_ (HTML5) des aktuellen. Falls es keinen _parent_ gibt, verhält sich dieser Wert wie `_self`.
    - `_top`: Lädt die Antwort in das gesamte Fenster und alle Frames werden überschrieben (HTML4) bzw. in den obersten _browsing context_ (d.h. der _browsing context_, der dem aktuellen übergeordnet ist und keine übergeordneten \_browsing context_e hat). Falls es keinen übergeordneten gibt, verhält sich dieser Wert wie `_self`.

## Beispiele

```html
<base href="http://www.example.com/">
<base target="_blank" href="http://www.example.com/">
```

## Spezifikation

| Spezifikation                                                                                            | Status                           | Anmerkung                                 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-base-element', '&lt;base&gt;')}} | {{Spec2('HTML WHATWG')}} | Keine Änderungen seit der letzten Version |
| {{SpecName('HTML5 W3C', 'document-metadata#the-base-element', '&lt;base&gt;')}} | {{Spec2('HTML5 W3C')}}     | Verhalten des `target` Attributs defniert |
| {{SpecName('HTML4.01', 'struct/links.html#h-12.4', '&lt;base&gt;')}}             | {{Spec2('HTML4.01')}}     | `target` Attribut hinzugefügt             |

## Browser Kompatibilität

{{Compat}}

## Anmerkungen

- Die Basis URL ist für Skripte erforderlich, die {{domxref('document.baseURI')}} verwenden.
- Relative URLs für `href` werden seit Gecko 2.0 (Firefox 4.0) unterstützt
- HTML 2.0 und 3.2 spezifizieren lediglich das `href` Attribut
- XHTML setzte einen nachfolgenden Slash voraus: `<base />`
- Die Verwendung eines Verweises innerhalb der Seite, z.B. `<a href="#anchor">Anker</a>,` wird mit Hilfe der Basis-Url ausgewertet und löst einen HTTP-Request auf die Basis-Url aus.

  **Beispiel:**

  Die Basis Url:
  `<base href="http://www.example.com/">`

  Der Verweis:
  `<a href="#anchor">Anker</a>`

  Wird aufgelöst in:
  `http://www.example.com/#anchor`

{{HTMLRef}}
