---
title: <body>
slug: Web/HTML/Element/body
tags:
  - Element
  - Grundlagen
  - HTML
  - Web
translation_of: Web/HTML/Element/body
---
## Zusammenfassung

Das **HTML `<body>` Element** repräsentiert den Inhalt eines HTML Dokuments. Es gibt nur ein `<body>` Element in einem Dokument.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a
          href="/en-US/docs/Web/HTML/Sections_and_Outlines_of_an_HTML5_document#Sectioning_roots"
          >Sectioning root</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#Flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag Platzierung</th>
      <td>
        Der Starttag darf weggelassen werden, wenn das erste Ding dazwischen
        kein Leerzeichen, Kommentar, {{HTMLElement("script")}} Element
        oder {{HTMLElement("style")}} Element ist. Der Endtag kann
        weggelassen werden, wenn das Body-Element Inhalte oder einen Starttag
        hat und ihm nicht sofort ein Kommentar folgt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Es muss das zweite Element eines {{HTMLElement("html")}}
        Elements sein.
      </td>
    </tr>
    <tr>
      <th>DOM Schnittstelle</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            Das <code>&#x3C;body></code> Element implementiert die
            {{domxref("HTMLBodyElement")}} Schnittstelle.
          </li>
          <li>
            Sie können auf das Body-Element durch ein
            {{domxref("document.body")}} Attribute zugreifen.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Attribute

Dieses Element beinhaltet die [Globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("alink")}} {{obsolete_inline}}
  - : Textfarbe für selektierte Links. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("color")}} Objekt in Verbindung mit der {{cssxref(":active")}} Pseudoklasse._
- {{htmlattrdef("background")}} {{obsolete_inline}}
  - : URI eines Bilds, das als Hintergrundbild gesetzt wird. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS_ _{{cssxref("background")}} Objekt auf dem Element._> **Hinweis:** Seit Gecko 7.0 {{geckoRelease("7.0")}} wird `background` nicht länger als eine URI aufgelöst; stattdessen wird es als einfacher String behandelt.
- {{htmlattrdef("bgcolor")}} {{obsolete_inline}}
  - : Hintergrundfarbe eines Dokumentes. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("background-color")}} Objekt auf dem Element._
- {{htmlattrdef("bottommargin")}} {{obsolete_inline}}
  - : Der Abstand des Bodens des Bodys. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("margin-bottom")}} Objekt auf dem Element._
- {{htmlattrdef("leftmargin")}} {{obsolete_inline}}
  - : Der Abstand der linken Seite des Bodys. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("margin-left")}} Objekt auf dem Element._
- {{htmlattrdef("link")}} {{obsolete_inline}}
  - : Textfarbe eines unbesuchten Links. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("color")}} Objekt in Verbindung mit der {{cssxref(":link")}} Pseudoklasse._
- {{htmlattrdef("onafterprint")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn der Nutzer das Dokument gedruckt hat.
- {{htmlattrdef("onbeforeprint")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn der Nutzer das Dokument drucken möchte.
- {{htmlattrdef("onbeforeunload")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht geladen wird.
- {{htmlattrdef("onblur")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht mehr angezeigt wird.
- {{htmlattrdef("onerror")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn das Dokument nicht richtig geladen wird.
- {{htmlattrdef("onfocus")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn das Dokument angezigt wird.
- {{htmlattrdef("onhashchange")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn der Fragment-Identifizier-Teil (beginnend mit der Raute (`'#'`)) der eigentlichen Adresse des Dokuments geändert wird.
- {{htmlattrdef("onlanguagechange")}} {{experimental_inline}}
  - : Funktion, die aufgerufen wird, wenn die bevorzugte Sprache geändert wird.
- {{htmlattrdef("onload")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn das Dokument fertig geldaden ist.
- {{htmlattrdef("onmessage")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn das Dokument eine Nachricht erhalten hat.
- {{htmlattrdef("onoffline")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn die Netzwerk-Kommunikation gescheitert ist.
- {{htmlattrdef("ononline")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn die Netzwerk-Kommunikation wiederhergestellt wird.
- {{htmlattrdef("onpopstate")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn der Nutzer den Sitzungsverlauf aufgerufen hat.
- {{htmlattrdef("onredo")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn der Nutzer vorwärts eine Rückgängig-Aktion wiederholt hat.
- {{htmlattrdef("onresize")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn die Größe des Dokumentes verändert wird.
- {{htmlattrdef("onstorage")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn der Speicherbreich verändert wurde.
- {{htmlattrdef("onundo")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn der Nutzer zurückgegangen ist.
- {{htmlattrdef("onunload")}} {{HTMLVersionInline(5)}}
  - : Funktion, die aufgerufen wird, wenn das Dokument verschwindet.
- {{htmlattrdef("rightmargin")}} {{obsolete_inline}}
  - : Der Abstand der rehten Seite des Bodys. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("margin-right")}} Objekt auf dem Element._
- {{htmlattrdef("text")}} {{obsolete_inline}}
  - : Vordergrundfarbe des Textes. _TDiese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("color")}} Objekt auf dem Element._
- {{htmlattrdef("topmargin")}} {{obsolete_inline}}
  - : Der Abstand von oben des Bodys. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("margin-top")}} Objekt auf dem Element._
- {{htmlattrdef("vlink")}} {{obsolete_inline}}
  - : Textfarbe eines besuchten Links. _Diese Methode ist fehlerhaft, benutzen Sie stattdessen das CSS {{cssxref("color")}} Objekt in Verbindung mit der {{cssxref(":visited")}} Pseudoklasse._

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Anmerkung                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('HTML WHATWG', 'sections.html#the-body-element', '&lt;body&gt;')}} | {{Spec2('HTML WHATWG')}} | Veränderte die Liste der fehlerhaften Features.                                                                                                                                                  |
| {{SpecName('HTML5 W3C', 'sections.html#the-body-element', '&lt;body&gt;')}}     | {{Spec2('HTML5 W3C')}}     | Überholt die ehemaligen veralteten Attribute. Definiert das Verhalten der fehlerhaften und niemals standartisierten **margintop**, **marginleft**, **marginright** und **marginbottom**. |
| {{SpecName('HTML4.01', 'struct/global.html#h-7.5.1', '&lt;body&gt;')}}             | {{Spec2('HTML4.01')}}     | Überholt die **alink**, **background**, **bgcolor**, **link**, **text** und **vlink** Attribute.                                                                                                 |

## Browser compatibility

{{Compat}}

\[1] Wurde bereits vorher im Quirk Mode unterstützt.

## Siehe auch

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}

{{HTMLRef}}
