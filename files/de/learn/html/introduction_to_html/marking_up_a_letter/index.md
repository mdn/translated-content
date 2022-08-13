---
title: Marking up a letter
slug: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
tags:
  - Anfänger
  - Brief
  - HTML
  - Links
  - Text
  - head
translation_of: Learn/HTML/Introduction_to_HTML/Marking_up_a_letter
original_slug: Learn/HTML/Einführung_in_HTML/Marking_up_a_letter
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

Wir alle lernen früher oder später einen Brief zu schreiben; es ist auch ein nützliches Beispiel, um unsere Textformatierungsfähigkeiten zu testen! Sie erhalten einen Brief, mit dem Sie grundlegende und fortgeschrittene HTML-Formatierungsmöglichkeiten, einschließlich Hyperlinks, testen können und wir werden Ihre Vertrautheit mit einigen HTML `<head>` Inhalten testen.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorwissen:</th>
      <td>
        Bevor Sie diese Überprüfung durchführen, sollten Sie bereits
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Lernen Sie HTML kennen</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML"
          >Was gehört in den Kopf? Metadaten in HTML</a
        >,
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Einfache Textformatierung mit HTML</a
        >,
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellen von Links</a
        >, und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting"
          >Fortgeschrittene Textformatierung</a
        >
        durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Grundlegende und fortgeschrittene HTML-Textformatierung und
        Hyperlink-Fähigkeiten testen und wissen, was in den HTML &#x3C;head>
        gehört.
      </td>
    </tr>
  </tbody>
</table>

## Startpunkt

Um diese Aufgaben zu starten, rufen Sie den [Rohtext auf, den Sie strukturieren sollen](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt), sowie die [CSS](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/marking-up-a-letter-start/css.txt), die Sie in Ihre HTML einbinden müssen. Erstellen Sie die `.html`-Datei mit Ihrem Texteditor (oder nutzen Sie alternativ eine Seite wie [JSBin](http://jsbin.com/) oder [Thimble](https://thimble.mozilla.org/), um die Aufgaben zu bearbeiten.)

## Projekt: Kurzbeschreibung

In diesem Projekt ist Ihre Aufgabe, einen Brief zu gestalten, der in einem Universitäts-Intranet gehostet werden soll. Der Brief ist eine Antwort von einer Forschungskollegin an einen zukünftigen Doktoranden, der seine Arbeit an der Universität antritt.

Block-/Struktursemantik:

- Bringen Sie das gesamte Dokument in eine sinnvolle Struktur, einschließlich Dokumententyp, {{htmlelement("html")}}-, {{htmlelement("head")}}- und {{htmlelement("body")}}-Elementen.
- The letter in general should be marked up with a structure of paragraphs and headings, with the exception of the below points. There is one top level heading (the "Re:" line) and three second level headings.
- Die "semester start dates", "study subjects" und "exotic dances" sollen mit einem angemessenen Listentyp ausgezeichnet werden.
- Die zwei Adressen können einfach in Paragraphen eingefügt werden. Das {{htmlelement("address")}}-Element ist hierfür nicht geeignet — überlegen Sie, warum. Zusätzlich soll jede Zeile der Adresse in einer neuen Zeile sein, nicht aber in einem neuen Paragraphen.

Semantik innerhalb des Textes:

- Die Namen von Sender und Empfänger (und "Tel" und "Email") sollen mit besonderer Wichtigkeit hervorgehoben werden.
- Die vier Daten sollen mit geeigneten Elementen als maschinenlesbares Datum ausgezeichnet werden.
- Die erste Adresse und das erste Datum des Briefes sollen ein Klassenattributwert von "sender-column" erhalten; das CSS, das Sie später ergänzen, wird später für die Rechtsbündigkeit sorgen, die sie in einem klassischen Brieflayout haben.
- Die fünf Akronyme/Abkürzungen im Hauptteil des Textes sollen so ausgezeichnet werden, dass die ausgeschriebene Version des jeweiligen Akronyms bzw. der Abkürzung hinterlegt ist.
- Die sechs Sub- und Superskripte sollen angemessen ausgezeichnet werden — in den chemischen Formeln sowie die Zahlen 103 und 104 (sie sollen am Ende die Zahlen 10 hoch 3 und 10 hoch 4 darstellen).
- Das Grad-Symbol und Multiplikationssymbol sollen jeweils an den entsprechenden Stellen ausgezeichnet werden, indem Sie [angemessene Entitäts-Referenzen](https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references) benutzen.
- Versuchen Sie, zumindest zwei geeignete Wörter innerhalb des Textes mit besonderer Wichtigkeit hervorzuheben.
- An zwei Stellen soll ein Hyperlink ergänzt werden; fügen Sie gültige Links mit Titeln hinzu. Als Linkadresse verwenden Sie einfach http\://example.com.
- Das Universitätsmotto sowie das Zitat sollen mit geeigneten Elementen ausgezeichnet werden.

Der Kopf (head) des Dokumentes:

- Der Zeichensatz des Dokumentes sollte in einem entsprechenden Meta-Tag auf utf8 festgelegt werden.
- Der Autor des Briefes sollte in einem entsprechenden Meta-Tag festgehalten werden.
- Die bereitgestellte CSS-Datei sollte in einem entsprechenden Tag eingebunden werden.

## Hinweise und Tipps

- Nutzen Sie den [W3C HTML validator](https://validator.w3.org/), um Ihre HTML zu prüfen; Sie erhalten Bonuspunkte, wenn die Validierung erfolgreich ist.
- Sie benötigen keine CSS-Fähigkeiten, um diese Aufgaben zu bewältigen; Sie müssen lediglich die bereitgestellte CSS-Datei in ein HTML-Element einfügen.

## Beispiel

Der nachfolgende Screenshot zeigt ein Beispiel dafür, wie der Brief nach der Auszeichnung aussehen könnte.

![Example](https://mdn.mozillademos.org/files/15811/Letter%20screengrab%202.png)

## Einschätzung

Falls Sie diesen Test im Rahmen eines organisierten Kurses absolvieren, sollten Sie Ihre Arbeit Ihrem/r Mentor\*in/Lehrkraft zur Bewertung überreichen können. Falls Sie selbstständig lernen, können Sie die Bewertungskriterien sehr einfach erhalten, indem Sie im [Disskussionsthread zu dieser Übung](https://discourse.mozilla.org/t/structuring-a-page-of-content-assignment/24678) nachfragen oder im [#mdn](irc://irc.mozilla.org/mdn) IRC Channel auf [Mozilla IRC](https://wiki.mozilla.org/IRC). Versuchen Sie es zunächst selbst -- mit Mogeleien ist nichts gewonnen!

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content", "Learn/HTML/Introduction_to_HTML")}}

## In diesem Modul

- [Getting started with HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [What’s in the head? Metadata in HTML](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [HTML text fundamentals](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [Creating hyperlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [Advanced text formatting](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [Document and website structure](/de/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Debugging HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Marking up a letter](/de/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [Structuring a page of content](/de/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
