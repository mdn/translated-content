---
title: Structuring a page of content
slug: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
translation_of: Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content
original_slug: Learn/HTML/Einführung_in_HTML/Structuring_a_page_of_content
---
{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

Structuring a page of content ready for laying it out using CSS is a very important skill to master, so in this assessment you'll be tested on your ability to think about how a page might end up looking, and choose appropriate structural semantics to build a layout on top of.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorbereitungen:</th>
      <td>
        Before attempting this assessment you should have already worked through
        the rest of the course, with a particular emphasis on
        <a
          href="/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure"
          >Document and website structure</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Das Testen des eigenen Wissens über Strukturen von Internetseiten und
          darüber, wie Layout Designs in Markup dargestellt werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Startpunkt

Um diese Selbsteinschätzung zu starten, sollten Sie die [ZIP-Datei mit allen Startinhalten](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/structuring-a-page-of-content-start/assets.zip?raw=true) herunterladen. Die ZIP-Datei enthält:

- Den HTML-Code, der mit Markup strukturiert werden soll
- CSS, um Ihr Markup zu gestalten
- Bilder, die auf der Seite verwendet werden.

Erstellen Sie das Beispiel lokal auf Ihrem Computer oder nutzen Sie alternativ eine Seite wie[JSBin](http://jsbin.com/) oder [Thimble](https://thimble.mozilla.org/) , um den Test zu absolvieren.

## Projekt: Kurzbeschreibung

Ihre Aufgabe in diesem Projekt ist es, den Inhalt einer Bird Watching-Homepage als Grundlage zu verwenden und ihm Struktur zu geben, sodass ein Page Layout darauf angewendet werden kann. Dazu werden benötigt:

- A header spanning the full width of the site containing the main title for the page, the site logo, and the navigation menu. The title and logo appear side by side once styling is applied, and the navigation appears below those two items.
- A main content area containing two columns — a main block to contain the welcome text, and a sidebar to contain image thumbnails.
- Ein Footer, der Copyright-Informationen und Credits enthält.

Sie müssen einen passenden Wrapper hinzufügen für:

- Den Header
- Das Navigationsmenü
- Den Main Content
- Den Begrüßungstext
- Die Bilder-Sidebar
- Den Footer

Sie sollten außerdem:

- das vorgegebene CSS auf die Seite anwenden, indem Sie ein anderes {{htmlelement("link")}}-Element direkt unter dem bereits existierenden Element am Anfang ergänzen.

## Hinweise und Tipps

- Use the [W3C Nu HTML Checker](https://validator.w3.org/nu/) to catch unintended mistakes in your HTML, CSS, and SVG — mistakes you might have otherwise missed — so that you can fix them.
- You don't need to know any CSS to do this assessment; you just need to put the provided CSS inside an HTML element.
- The provided CSS is designed so that when the correct structural elements are added to the markup, they will appear green in the rendered page.
- If you are getting stuck and can't envisage what elements to put where, it often helps to draw out a simple block diagram of the page layout, and write on the elements you think should wrap each block.

## Beispiel

Der nachfolgende Screenshot zeigt beispielhaft, wie die Homepage nach der Auszeichnung mittels HTML aussehen könnte.

![The finished example for the assessment; a simple webpage about birdwatching, including a heading of "Birdwatching", bird photos, and a welcome message](https://mdn.mozillademos.org/files/12449/example-page.png)

## Einschätzung

Falls Sie diesen Test im Rahmen eines organisierten Kurses absolvieren, sollten Sie Ihre Arbeit Ihrem/r Mentor\*in/Lehrkraft zur Bewertung überreichen können. Falls Sie selbstständig lernen, können Sie die Bewertungskriterien sehr einfach erhalten, indem Sie im [Disskussionsthread zu dieser Übung](https://discourse.mozilla.org/t/structuring-a-page-of-content-assignment/24678) nachfragen oder im [#mdn](irc://irc.mozilla.org/mdn) IRC Channel auf [Mozilla IRC](https://wiki.mozilla.org/IRC). Versuchen Sie es zunächst selbst -- mit Mogeleien ist nichts gewonnen!

{{PreviousMenu("Learn/HTML/Introduction_to_HTML/Marking_up_a_letter", "Learn/HTML/Introduction_to_HTML")}}

## In this module

- [Getting started with HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [What’s in the head? Metadata in HTML](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML text fundamentals](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [Creating hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [Advanced text formatting](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [Document and website structure](/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Marking up a letter](/de/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [Structuring a page of content](/de/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
