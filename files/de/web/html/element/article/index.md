---
title: '<article>: Das Inhaltselement für Artikel'
slug: Web/HTML/Element/article
tags:
  - Element
  - HTML
  - HTML Bereiche
  - HTML5
  - Referenz
  - Web
translation_of: Web/HTML/Element/article
---
{{HTMLRef}}

Das **HTML-Element `<article>`** stellt eine in sich geschlossene Komposition in einem Dokument, einer Seite, Anwendung oder Website dar, die unabhängig verteilt oder wiederverwendbar sein soll (z. B. bei Syndikation), z. B. ein Forumsbeitrag, ein Zeitschriften- oder Zeitungsartikel oder ein Blogeintrag.

{{EmbedInteractiveExample("pages/tabbed/article.html", "tabbed-standard")}}

Ein bestimmtes Dokument kann mehrere Artikel enthalten, z. B. in einem Blog, in dem der Text jedes Artikels nacheinander angezeigt wird, während der Leser blättert, wäre jeder Beitrag in einem `<article>`-Element mit einem oder mehreren `<section>`-Elementen enthalten.

| [Inhaltskategorien](/de/docs/HTML/Content_categories) | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content), Sektionsinhalt, fühlbarer Inhalt                                                                                                                   |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                      | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content).                                                                                                                                                    |
| Tag Wegfall                                           | {{no_tag_omission}}                                                                                                                                                                                               |
| Erlaubte Elternelemente                               | Jedes Element das [fließenden Inhalt](/de/docs/HTML/Content_categories#Flow_content) erlaubt. Beachten Sie, dass ein `<article>`-Element kein Nachkomme eines {{HTMLElement("address")}}-Elements sein darf. |
| Erlaubte ARIA Rollen                                  | {{ARIARole("application")}}, {{ARIARole("document")}}, {{ARIARole("feed")}}, {{ARIARole("main")}}, {{ARIARole("presentation")}}, {{ARIARole("region")}}                 |
| DOM-Schnittstelle                                     | {{domxref("HTMLElement")}}                                                                                                                                                                                   |

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Nutzungshinweise

- Jeder `<article>` sollte beschriftet sein, normalerweise indem eine Überschrift ([`<h1>`-`<h6>`](/de/docs/Web/HTML/Element/Heading_Elements)) als untergeordnetes Element des `<article>`-Elements eingefügt wird.
- Wenn ein `<article>`-Element verschachtelt ist, repräsentiert das innere Element einen Artikel, der sich auf das äußere Element bezieht. Zum Beispiel können die Kommentare eines Blogbeitrags `<article>`-Elemente sein, die im `<article>` des Blogbeitrags verschachtelt sind.
- Informationen zum Autor eines `<article>`-Elements können über das {{HTMLElement("address")}}-Element bereitgestellt werden, gelten jedoch nicht für verschachtelte `<article>`-Elemente.
- Das Datum und die Uhrzeit der Veröffentlichung eines `<article>`-Elements können mit dem Attribut {{htmlattrxref("datetime", "time")}} eines {{HTMLElement("time")}}-Elements beschrieben werden. _Beachten Sie, dass das Attribut {{htmlattrxref("pubdate", "time")}} von {{HTMLElement("time")}} nicht mehr Bestandteil des W3C HTML 5-Standards ist._

## Beispiele

```html
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-16 19:00">May 16</time>
          by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>
          Posted on
          <time datetime="2015-05-17 19:00">May 17</time>
          by Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posted on
      <time datetime="2015-05-15 19:00">May 15</time>
      by Staff.
    </p>
  </footer>
</article>
```

## Spezifikationen

| Specification                                                                                                    | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-article-element', '&lt;article&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5.1', 'sections.html#the-article-element', '&lt;article&gt;')}}         | {{Spec2('HTML5.1')}}     |         |
| {{SpecName('HTML5 W3C', 'sections.html#the-article-element', '&lt;article&gt;')}}     | {{Spec2('HTML5 W3C')}}     |         |

## Browserkompatibilität

{{Compat("html.elements.article")}}

## Siehe auch

- Andere abschnittsbezogene Elemente: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Abschnitte und Umrisse eines HTML5-Dokuments](/de/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)
