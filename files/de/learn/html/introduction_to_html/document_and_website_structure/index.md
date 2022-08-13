---
title: Struktur in die Webseite bringen
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
tags:
  - Beginner
  - Guide
  - HTML
  - Layout
  - Planung
  - Sitemap
  - Struktur
translation_of: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
original_slug: Learn/HTML/Einführung_in_HTML/Document_and_website_structure
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

{{glossary("HTML")}} ist auch dafür da, größere Strukturen, wie einen Kopfbereich, ein Navigationsmenü oder den Bereich für den Hauptinhalt auf einer Webseite festzulegen. In diesem Artikel schauen wir uns an, wie man den Aufbau einer Webseite plant und mit Hilfe von HTML repräsentiert.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorwissen:</th>
      <td>
        HTML-Grundlagen, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Lernen Sie HTML kennen</a
        >
        abgedeckt werden. HTML Textformatierung, wie in
        <a
          href="/de/Learn/HTML/Einf%C3%BChrung_in_HTML/Einfache_Textformatierung_in_HTML"
          >Einfache Textformatierung in HTML</a
        >
        abgedeckt wird. Wie Links funktionieren, wie im Artikel
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Links erstellen</a
        >
        beschrieben wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man eine grundlegende Struktur in einer Webseite mit
        HTML-Tags festlegt und wie man die Struktur einer einfachen Webseite
        entwirft.
      </td>
    </tr>
  </tbody>
</table>

## Bereiche einer Webseite

Webseiten können sehr unterschiedlich aussehen, doch die meisten haben ähnliche Komponenten, aus welchen sie aufgebaut sind. Diese Komponenten sieht man auf den meisten Webseiten, bei denen es sich nicht um Video-, Spielewebseiten oder Kunstprojekte handelt. Diese Komponenten bringen eine gute Struktur in jede Webseite:

- header - Kopfbereich
  - : Normalerweise ist dies ein breiter Streifen ganz oben auf der Website, in dem eine Überschrift zusammen mit einem Logo untergebracht sind. So sieht man jederzeit auf welcher Website man sich befindet, der header bleibt auf allen Unterseiten gleich.
- Navigation
  - : In der Navigation werden die Links zu den Unterseiten der Website bereitgestellt, meist in Form von Buttons, einfachen Links oder auch Tabs. Dieser Bereich bleibt genauso wie der header auf allen Seiten der Website gleich. Manchmal wird die Navigation direkt mit in den header eingebaut. Ob ein separates Navigationsmenü sinnvoller ist, ist Ansichtssache.
- Hauptinhalt
  - : Der größte Bereich im Zentrum der Webseite, welcher den meisten Inhalt einer Webseite enthält, zum Beispiel Videos, eine Geschichte, eine Karte oder ein Zeitungsartikel. Dieser Part der Website wird sich von Seite zu Seite unterscheiden!
- Sidebar
  - : Zusätzliche Informationen, Links, Zitate, Werbung, usw. Dies wird nicht im Hauptfenster dargestellt, aber meist rechts oder links davon. Der Inhalt bezieht sich oft auf den Hauptinhalt. Bei einem Zeitungsartikel könnte die Sidebar zum Beispiel Zusatzinformationen, Informationen zum Autor oder Links zu ähnlichen Artikeln enthalten. Manchmal wird in der Sidebar auch ein zweites Navigationsmenü untergebracht oder anderer Inhalt, der auf allen Seiten gleich ist.
- footer - Fußbereich
  - : Ein Streifen am Ende der Webseite, welcher oft in kleiner Schrift Informationen zum Impressum, Copyright und Kontaktinformationen bereit stellt. Es sind wichtige Informationen für Interessierte, aber für die meisten Webseitenbenutzer nicht relevant. Manchmal wird hier auch eine Sitemap zur Verfügung gestellt.

Eine „typische Webseite“ könnte wie folgt strukturiert werden:

![a simple website structure example featuring a main heading, navigation menu, main content, side bar, and footer.](https://mdn.mozillademos.org/files/12417/sample-website.png)

## Inhalte strukturieren mit HTML

Das Beispiel oben ist vielleicht nicht besonders schön, aber sehr gut dafür geeignet, den typischen Aufbau einer Webseite zu erläutern. Es gibt Webseiten mit weiteren Spalten, manche sind um einiges komplexer, aber man kann den grundlegenden Aufbau gut erkennen. Mit dem richtigen CSS darauf angewendet, kann man alle Elemente dazu bringen, sich wie die verschiedenen Bereiche zu verhalten und so auszusehen. Aber wie schon vorher angesprochen, ist es **wichtig den semantischen Zusammenhang zwischen den HTML-Tags zu wahren und das richtige Element für den ihm zugeschriebene Job zu nutzen**.

Dies liegt daran, dass Darstellungen nicht die ganze Geschichte, die dahinter steckt, erzählen. Wir verwenden Farbe und Schriftgröße um Benutzer auf die nützlichsten Teile des Inhalts aufmerksam zu machen, wie das Navigationsmenü und verwandte Links. Aber was ist mit sehbehinderten Menschen, die zum Beispiel keine Konzepte wie „pink“ und „große Schriftart“ sehr nützlich finden?

> **Hinweis:** Etwa 8% der Menschen weltweit sind farbenblind. Blinde oder fast blinde Menschen machen 4-5% der Menschheit aus. 2012 waren das etwa [285 Millionen Menschen](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtpopulation bei 7 Billionen Menschen liegt.

Im HTML-Code kann man Sektionen einteilen, je nach dem was Sie beinhalten und welche _Funktion_ sie ausfüllen. Wenn die Elemente so genutzt werden, wie oben beschrieben, dann hilft es Assistenzsoftware, wie Screenreadern, diese Elemente richtig zu klassifizieren. Wie wir bereits früher in diesem Kurs besprochen haben, hätte es [einige negative Konsequenzen, wenn nicht das richtige Element und die richtige Semantik für den dafür vorgesehenen Job genutzt werden](/de/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#Why_do_we_need_structure).

Um sematisches Markup zu schreiben, stellt HTML einige Tags zur verfügung, die man benutzen kann, zum Beispiel:

- **Header/Kopfbereich:** {{htmlelement("header")}}.
- **Navigations Menü:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit einigen verschiedenen Untersektionen, repräsentiert mit {{HTMLElement("article")}}, {{htmlelement("section")}} und {{htmlelement("div")}} Elementen.
- **Sidebar:** {{htmlelement("aside")}}; wird oft innerhalb {{htmlelement("main")}} platziert.
- **Footer/Fußbereich:** {{htmlelement("footer")}}.

### Aktives Lernen: Den Code aus dem Beispiel verstehen

Das Beispiel oben basiert auf dem folgenden Code ([Man kann dieses Beispiel auch auf GitHub finden](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/document_and_website_structure/index.html)). Schauen Sie sich das Beispiel oben an und dann den Code dazu unten. Versuchen Sie zu sehen, welche Zeilen des Codes zu welchen Sektionen der Webseite gehören.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">

    <title>Titel der Webseite</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="style.css">

    <!-- die nächsten drei Zeilen bewirken, dass die HTML5 Semantik Elemente auch in alten Internet Explorer Versionen funktionieren-->
    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
  </head>

  <body>
    <!-- Dies ist der Kopfbereich bzw. Header, welcher auf allen Seiten angezeigt wird -->

    <header>
      <h1>Header</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

       <!-- Ein Suchformular, mit dessen Hilfe man auch durch die Webseite navigieren kann -->

       <form>
         <input type="search" name="q" placeholder="Search query">
         <input type="submit" value="Go!">
       </form>
     </nav>

    <!-- Hier kommt der Hauptinhalt unserer Webseite -->
    <main>

      <!-- Es enthält einen Artikel -->
      <article>
        <h2>Article heading</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>

        <h3>subsection</h3>

        <p>Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>

        <p>Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.</p>

        <h3>Another subsection</h3>

        <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum soclis natoque penatibus et manis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>

        <p>Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique vitae sagittis vel odio. Maecenas convallis ullamcorper ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, is fringille sem nunc vet mi.</p>
      </article>

      <!-- Der Inhalt für die Sidebar kann auch innerhalb des main-Elements stehen-->
      <aside>
        <h2>Related</h2>

        <ul>
          <li><a href="#">Oh I do like to be beside the seaside</a></li>
          <li><a href="#">Oh I do like to be beside the sea</a></li>
          <li><a href="#">Although in the North of England</a></li>
          <li><a href="#">It never stops raining</a></li>
          <li><a href="#">Oh well...</a></li>
        </ul>
      </aside>

    </main>

    <!-- Hier ist unser Footer bzw. die Fußzeile, welche auch wieder auf allen Unterseiten angezeigt wird. -->

    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>

  </body>
</html>
```

Nehmen Sie sich etwas Zeit sich den Code näher anzuschauen und versuchen Sie ihn zu verstehen - die Kommentare sollten Ihnen dabei behilflich sein. Wir haben nicht zu viele Aufgaben in diesem Artikel, denn der Schlüssel zum Verständnis des Layouts ist das Schreiben von einer soliden HTML-Struktur, um diese dann mit CSS zu beeinflussen. Damit warten wir aber, denn dies ist Teil des CSS Kurses, der sich an diesen HTML Kurs direkt anschließt.

## Die HTML-Layout-Elemente

Es ist gut alle HTML-Elemente fürs Layout im Detail zu kennen. Das lernen Sie mit der Zeit. Viele Details können Sie in unserer [HTML Elemente Referenz](/de/docs/Web/HTML/Element) finden.

- {{HTMLElement('main')}} ist für den Hauptbereich der Webseite und stellt gewöhnlich Inhalte dar, die _nur auf dieser einen Seite_ zu sehen sind. `<main>` sollte nur _einmal_ pro Webseite genutzt werden und sollte direkt im {{HTMLElement('body')}} stehen und nicht innerhalb anderer Elemente.
- {{HTMLElement('article')}} umschließt einen Block von zusammenhängendem Inhalt, der auch ohne den Rest der Webseite stehen könnte (z.B. ein einzelner Blogpost).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber eher für das Gruppieren von Bereichen mit bestimmter Funktionalität (z.B. eine Minikarte oder einige Artikel-Überschriften und Zusammenfassungen). Es ist gute Praxis, jede section mit einer Überschrift zu starten. Man kann `<article>`s in mehrere `<section>`s aufteilen und umgekehrt, es geht beides.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt zusammenhängen, aber als Zusatzinformationen dienen können (Biografie des Autors, Links zu weiterführenden Informationen)
- {{HTMLElement('header')}} stellt eine Gruppe von einführenden Inhaltselementen dar. Wenn es innerhalb des {{HTMLElement('body')}}-Tags steht, definiert es einen globalen Kopfbereich für die Webseite, aber wenn es innerhalb von einem {{HTMLElement('article')}} oder {{HTMLElement('section')}} Element steht, dann stellt es einen Kopfbereich nur für diese Sektion dar. (Achtung! Verwechslungsgefahr mit [Titel und Überschriften](/de/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#Adding_a_title)
- {{HTMLElement('nav')}} enthält das Hauptnavigationsmenü für die Seite. Zweitrangige Links würden nicht hier hin gehören.
- {{HTMLElement('footer')}} stellt eine Gruppe von Inhalten am Ende der Webseite dar.

### Nicht-semantische Container

Manchmal findet sich kein passendes semantisches Element, um eine Gruppe Elemente oder Inhalte damit einzuhüllen. Manchmal möchte man mit einem Container um bestimmte Elemente herum nur ein Ziel erstellen, das über {{glossary("CSS")}} oder {{glossary("JavaScript")}} angesprochen werden kann. Für solche Fälle gibt es das {{HTMLElement("div")}} und das {{HTMLElement("span")}} Element. Diese sollten möglichst immer ein passendes {{htmlattrxref('class')}} Attribut haben, über welches sie identifiziert und angesprochen werden können.

{{HTMLElement("span")}} ist ein Inline Element ohne eine bestimmte Semantik. Man sollte es nur benutzen, wenn man kein besseres, semantisches Inline-Element finden kann oder wenn man keine hervorgehobene Bedeutung hinzufügen möchte. Zum Beispiel:

```html
<p>Der König lief um 1 Uhr betrunken zurück zu seinem Zimmer. Das Bier half ihm nicht dabei, als er durch die Tür schwankte <span class="editor-hinweis">[Editor's Hinweis: An diesem Punkt im Stück sollten die Lichter heruntergedimmt werden]</span>.</p>
```

In diesem Fall soll der Hinweis für den Editor nur Extra-Informationen für den Direktor des Schauspiels bereit stellen, der Hinweis hat keine semantische Bedeutung. Visuell kann dies per CSS mit einem Unterschied in der Textdarstellung angezeigt werden.

{{HTMLElement("div")}} ist ein Blocklevel-Element ohne eine bestimmte Semantik. Man sollte es nur benutzen, wenn man kein besseres, semantisches Blocklevel-Element finden kann oder wenn man keine hervorgehobene Bedeutung hinzufügen möchte. Zum Beispiel ein Einkaufswagen-Widget, welches man jederzeit auf einer E-Commerce-Webseite anzeigen kann:

```html
<div class="einkaufswagen">
  <h2>Einkaufswagen</h2>
  <ul>
    <li>
      <p><a href=""><strong>Silber Ohrringe</strong></a>: $99.95.</p>
      <img src="../products/3333-0985/thumb.png" alt="Silber Ohrringe">
    </li>
    <li>
      ...
    </li>
  </ul>
  <p>Kosten gesamt: $237.89</p>
</div>
```

Dies ist nicht wirklich Inhalt für `<aside>`, da es nicht notwendigerweise mit dem Inhalt der Hauptseite im Zusammenhang steht (man soll es ja überall sehen können). Auch `<section>` scheint ungeeignet, da es nicht Teil des Hauptinhaltes ist. Deswegen kann man hier `<div>` benutzen. Es wurde eine Überschrift hinzugefügt, so das auch Benutzer mit Screenreadern den Einkaufswagen finden.

> **Warning:** **Warnung**: Divs sind leicht zu benutzen, man sollte aber darauf achten, das man nicht zu viele davon einsetzt, da sie keinerleit semantischen Wert haben. Man sollte sie wirklich nur benutzen, wenn es keine anderen semantischen Elemente gibt. Wenn man zuviele divs benutzt, dann wird es schwierig den Code zu updaten und später damit wieder zu arbeiten.

### Zeilenumbruch und Horizontale Linien

Zwei Elemente, die man immer mal wieder benutzen wird, sind {{htmlelement("br")}} und {{htmlelement("hr")}}:

`<br>` stellt einen Zeilenumbruch innerhalb eines Absatzes(

) dar. Es ist die einzige Möglichkeit eine bestimmte Struktur in den Text zu bekommen, wie man es bei einer Adresse oder einem Gedicht benötigt. Zum Beispiel:

```html
<p>There once was a girl called Nell<br>
Who loved to write HTML<br>
But her structure was bad, her semantics were sad<br>
and her markup didn't read very well.</p>
```

Ohne die `<br>` Elemente, würde der Absatz in einer einzigen lange Zeile angezeigt werden, denn [HTML ignoriert Whitespace](/de/Learn/HTML/Introduction_to_HTML/Getting_started#Whitespace_in_HTML). Mit den
Elementen im Code wird der Absatz wie folgt dargestellt:

There once was a girl called Nell
Who loved to write HTML
But her structure was bad, her semantics were sad
and her markup didn't read very well.

`<hr>` Elemente erzeugen eine horizontale Linie. Damit kann man einen thematischen Umbruch darstellen. Visuell ist es einfach nur eine Linie. Beispiel:

    <p>Die Katze lief aus dem Haus, um die Sonne zu genießen.</p>
    <hr>
    <p>Der Hund im Haus und holte sich das Futter aus dem Napf der Katze.</p>

Würde wie folgt aussehen:

Die Katze lief aus dem Haus, um die Sonne zu genießen.

---

Der Hund im Haus und holte sich das Futter aus dem Napf der Katze.

## Planung einer einfachen Webseite

Wenn Sie einmal den Inhalt einer ganz einachen Webseite geplant haben, dann ist der nächste Schritt das ausarbeiten, welcher Inhalt auf einer ganzen Internetpräsenz, bestehend aus mehreren Unterseiten, dargestellt werden soll. Dazu gehört zu planen, wie die einzelnen Seiten untereinander verlinkt werden sollen, wie das Gesamtlayout aussehen soll, so das die Seite das beste Erlebnis für den Nutzer bietet. Dies wird die {{glossary("Information architecture")}} genannt. Bei einer sehr großen und komplexen Webseite, muss eine Menge Zeit für den Planungsprozess eingeplant werden. Für eine einfachere Webseite mit wenigen Webseiten ist es aber recht einfach und kann auch Spaß machen!

1. Denken Sie daran, welche Elemente auf allen Seiten gleich sein sollen, z.B. das Navigationsmenü und der Footerbereich. Wenn die Webseite für ein Buisness ist, dann ist es zum Beispiel sinnvoll, die Kontaktinformationen auf jeder Unterseite im Footer zu haben. Notieren Sie, was auf jeder Unterseite gleich sein soll. ![the common features of the travel site to go on every page: title and logo, contact, copyright, terms and conditions, language chooser, accessibility policy](https://mdn.mozillademos.org/files/12423/common-features.png)
2. Als nächstes zeichnen Sie eine grobe Skizze, wie die Struktur der Webseite aussehen soll, auf ein Blatt Papier. Machen Sie das für jede Unterseite der Webpräsenz. Schreiben Sie dazu, für was jede der Sektionen ist. ![A simple diagram of a sample site structure, with a header, main content area, two optional sidebars, and footer](https://mdn.mozillademos.org/files/12429/site-structure.png)
3. Jetzt überlegen Sie welche Inhalte auf der Website zu finden sein sollen, welche nicht auf allen Unterseiten gleich sind. Schreiben Sie ruhig eine große Liste. ![A long list of all the features that we could put on our travel site, from searching, to special offers and country-specific info](https://mdn.mozillademos.org/files/12425/feature-list.png)
4. Als nächstes, versuchen Sie ihre Inhalte in Gruppen aufzuteilen, um eine Ide zu bekommen, was zusammen auf einer Unterseite stehen könnte. ![The items that should appear on a holiday site sorted into 5 categories: Search, Specials, Country-specific info, Search results, and Buy things](https://mdn.mozillademos.org/files/12421/card-sorting.png)
5. Als letztes Skizzieren Sie eine grobe Sitemap - zeichnen Sie einen Kreis für jede Unterseite und ziehen Sie linien, um die Verlinkungen zwischen den Seiten deutlich zu machen. Wahrscheinlich ist die Startseite in der Mitte und von ihr gehen fast alle Links zu den Unterseiten. Die meisten Unterseiten einer kleinen Website, sollten über das Navigationsmenü zugänglich sein. Notieren Sie zusätzlich wie die Seiten präsentiert werden sollen. ![A map of the site showing the homepage, country page, search results, specials page, checkout, and buy page](https://mdn.mozillademos.org/files/12427/site-map.png)

### Aktives Lernen: Erstellen Sie eine eigene Sitemap

Probieren Sie die Schritte von oben selber aus, erstellen Sie eine Sitemap für eine eigene Webseite. Worüber würden Sie gerne eine Webseite machen?

> **Hinweis:** Speichern Sie Ihre Arbeit, eventuell möchten Sie diese später benutzen.

## Zusammenfassung

Jetzt sollten Sie ein besseres Verständnis dafür haben, wie Webseiten strukturiert werden können und wie man eine Webpräsenz mit mehreren Unterseiten im Vorraus plant. Im letzten Artikel dieses Moduls geht es darum, Fehler im HTML Code zu finden und zu beheben.

## See also

- [Using HTML sections and outlines](/de/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines): Advanced guide to HTML5 semantic elements and the HTML5 outline algorithm.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

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
