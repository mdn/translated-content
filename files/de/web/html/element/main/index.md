---
title: <main>
slug: Web/HTML/Element/main
tags:
  - Element
  - HTML
  - HTML Gruppierender Inhalt
  - Referenz
translation_of: Web/HTML/Element/main
---
## Übersicht

Das _HTML Main Element_ (**\<main>**) kann als ein Container für den leitenden Inhalt benutzt werden. Der Hauptteil besteht aus Inhalt, der direkt bezogen oder auf das zentrale Thema eines Bereichs oder der zentralen Funktionalität einer Applikation aufbaut. Der Inhalt sollte zum Dokument einzigartig sein, ausgenommen jeglicher Inhalt, welcher auf dem gesamten Dokument wiederholt ist wie zum Beispiel Seitenleisten, Navigationlinks, Information über das Urheberrecht, Seitenlogos, und Sucheingaben (augenommen, wenn die Hauptfunktion eine Sucheingabe ist). Anders als {{HTMLElement("article")}} und {{HTMLElement("section")}}, trägt dieses Element dem Entwurf des Dokuments nicht bei.

> **Hinweis:** `<main>` **darf kein** Nachfolger eines {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}} oder {{HTMLElement("nav")}} Elements sein.
>
> - **Nur ein** [main](http://www.w3.org/TR/html51/semantics.html#the-main-element) Element kann pro Dokument verwendet werden.

| [Inhalt Kategorien](/de/docs/Web/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content "HTML/Content_categories#Flow_content"), fühlbarer Inhalt.              |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                    | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content "HTML/Content_categories#Flow_content").                                |
| Tag-Wegfall                                                                         | Keine; Sowohl Anfangs- als auch End-Tag sind erforderlich.                                                                                    |
| Erlaubte Elternelemente                                                             | Alle Elemente, die [fließenden Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content "HTML/Content_categories#Flow_content") akzeptieren. |
| DOM-Schnittstelle                                                                   | {{domxref("HTMLElement")}}                                                                                                          |

## Attribute

Das Element enthält ausschließlich [globale Attribute](/de/docs/Web/HTML/Globale_Attribute).

## Beispiel

```html
<!-- Anderer Inhalt -->

<main>
  <h1>Äpfel</h1>
  <p>Der Apfel ist das Kernobst des Apfelbaumes.</p>

  <article>
    <h2>Rote Köstlichkeiten</h2>
    <p>Diese hervorragenden roten Äpfel sind die verbreitetsten
    wie man sie in Supermärkten finden kann.</p>
    <p>... </p>
    <p>... </p>
  </article>

  <article>
    <h2>Großmütterchen</h2>
    <p>Diese saftigen grünen Äpfel sind eine großartige Füllung
    für meine Apfelkuchen.</p>
    <p>... </p>
    <p>... </p>
  </article>

</main>

<!-- Anderer Inhalt -->
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#the-main-element', '&lt;main&gt;')}}                             | {{Spec2('HTML WHATWG')}} | Die Einschränkung der Nichtnutzung von `<main>` als ein Nachfahre eines {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, oder {{HTMLElement("nav")}} Elements wurde aufgehoben. |
| {{SpecName('HTML5.1', 'grouping-content.html#the-main-element', '&lt;main&gt;')}}     | {{Spec2('HTML5.1')}}     | Keine Änderung von {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                              |
| {{SpecName('HTML5 W3C', 'grouping-content.html#the-main-element', '&lt;main&gt;')}} | {{Spec2('HTML5 W3C')}}     | Ursprüngliche Definition.                                                                                                                                                                                                                                                        |

## Browser-Kompatibilität

Das `<main>` Element wird flächendeckend unterstützt (ausgenommen für Internet Explorer). Es wird vorgeschlagen, bis das \<main> Element von Internet Explorer unterstützt wird, `das` `"main"` ARIA role dem `<main>` Element hinzufügen:

```html
<main role="main">
  ...
</main>
```

{{Compat}}

##

## Siehe auch

- Basis Strukturelemente: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Sektionzugehörige Elemente: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, oder {{HTMLElement("nav")}}
