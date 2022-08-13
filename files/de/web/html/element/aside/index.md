---
title: <aside>
slug: Web/HTML/Element/aside
tags:
  - Element
  - HTML
  - HTML5
  - Referenz
  - Web
translation_of: Web/HTML/Element/aside
---
Das _HTML `<aside>` Element_ repräsentiert eine Sektion einer Seite, welche aus Inhalt besteht der nur indirekt zum restlichen Inhalt gehört, also parallel zum Kontext betrachtet werden kann. Diese Sektionen werden oftmals als Seitenleisten oder Beilage dargestellt. Sie enthalten meistens nebenläufige Erklärungen, wie ein Glossar; weniger zusammenhängenden Inhalt, wie Werbung; die Biographie eines Autors oder zum Beispiel Profilinformationen die zugehörig zu einer Blog-Seite sind.

> **Note:** _Hinweis zur Benutzung:_\* Das `<aside>` Element sollte nicht genutzt werden, um eingeklammerte Texte zu bezeichnen, so lange diese Art von Texten zum primären Inhalt gehören.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), Sektionsinhalte, greifbarer Inhalt.                                                                                          |
| ------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content_categories#Flow_content").                                                                                                                              |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                                |
| Erlaubte Elternelemente                                                         | Jedes Element das [fließenden Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content_categories#Flow_content") erlaubt. Das `<aside>` Element darf kein Abkömmling des {{HTMLElement("address")}} Elements sein. |
| DOM Schnittstelle                                                               | {{domxref("HTMLElement")}}                                                                                                                                                                                                    |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

## Beispiel

```html
<article>
  <p>
    The Disney movie <em>The Little Mermaid</em> was
    first released to theatres in 1989.
  </p>
  <aside>
    The movie earned $87 million during its initial release.
  </aside>
  <p>
    More info about the movie...
  </p>
</article>
```

{{EmbedLiveSample("Beispiel")}}

##

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'sections.html#the-aside-element', '&lt;aside&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'sections.html#the-aside-element', '&lt;aside&gt;')}} | {{Spec2('HTML5 W3C')}}     |           |

## Browser Kompatibilität

{{Compat("html.elements.aside")}}

## Siehe auch

- Andere Sektionsverwandte Elemente: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML5 document](/de/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document").

{{HTMLRef}}
