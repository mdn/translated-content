---
title: Erstellen von Hyperlinks
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
tags:
  - Beginner
  - Guide
  - HTML
  - Learn
  - Links
  - Title
  - absolute
  - hyperlinks
  - relativ
  - urls
translation_of: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
original_slug: Learn/HTML/Einführung_in_HTML/Erstellen_von_Hyperlinks
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

Hyperlinks, kurz Links, sind ein wichtiger Teil des Internets, denn sie machen erst ein Netzwerk daraus. In diesem Artikel zeigen wir Ihnen wie man einen Link erstellt und stellen benutzerfreundliche Anwendungsbeispiele vor.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorwissen:</th>
      <td>
        Grundlegende Kenntnisse in HTML und Textformatierung, wie Sie in den
        Artikeln
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Lerne HTML kennen</a
        >
        und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Einfache Textformattierung mit HTML</a
        >
        abgedeckt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen wie man sinnvoll Hyperlinks einsetzt.</td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der Erfindungen, welche das _Internet_ zu einem einzigen zusammenhängenden Netzwerk machen. Sie sind von Beginn an ein Teil des Netzes (engl. "_web_") und definieren dieses, indem sie uns erlauben von einem Dokument auf ein anderes Dokument (oder eine andere Quelle) zu verweisen. Auch auf bestimmte Inhalte einer Webseite kann direkt verlinkt werden, genauso wie auch auf Apps per Hyperlink verwiesen werden kann. Fast alles im Internet kann zu einem Link konvertiert werden und mit diesem kann die entsprechende Web-Adresse ({{glossary("URL")}}) im Internet von einem Browser gefunden werden.

> **Note:** **Hinweis**: Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Dokumente, Video- oder Audiodateien verweisen und auf alles andere, was im Internet präsentiert werden kann. Wenn der Browser nicht weiß, wie er mit einer Datei umgehen soll, fragt er nach, ob die Datei geöffnet werden soll, wodurch das öffnen der Datei an ein anderes Programm auf dem Computer abgegeben wird, oder ob sie herunter geladen werden soll, damit man später diese Datei lokal nutzen kann.

Die Webseite von BBC enthält zum Beispiel eine große Anzahl an Links, welche auf verschiedene Nachrichtenartikel verweisen, aber auch zu verschiedenen Bereichen der Website (Navigation), Login/Registrations-Seiten (für Benutzeraccounts) und mehr.

![frontpage of bbc.co.uk, showing many news items, and navigation menu functionality](https://mdn.mozillademos.org/files/12405/bbc-homepage.png)

## Aufbau eines Links

Ein Link wird ganz einfach erstellt indem man Text, oder auch andere Inhalte, in ein {{htmlelement("a")}}-Element verschachtelt. Diesem Element muss auch noch das {{htmlattrxref("href", "a")}}-Attribut beigefügt werden, welches als Wert die Ziel-Webadresse enthält auf die man verweisen möchte.

```html
<p>Ich erstelle einen Link zu der
<a href="https://www.mozilla.org/en-US/"> Mozilla Webseite</a>.
</p>
```

Dies gibt das folgende Resultat:

Ich erstelle einen Link zu der [Mozilla Webseite](https://www.mozilla.org/en-US/).

### Das `title`-Attribut

Ein weiteres Attribut welches Sie ihren Links womöglich hinzufügen möchten ist `title`. Darin können Sie Zusatzinformationen zu dem Link angeben. Als Beispiel:

```html
<p>Ich erstelle einen Link zu der
<a href="https://www.mozilla.org/en-US/"
   title="Der beste Ort um mehr über Mozilla zu lernen und wie jeder dazu beitragen kann">Mozilla Webseite</a>.
</p>
```

Das gibt das folgende Resultat (der Text aus dem `>title<`-Attribut wird als Tooltip angezeigt, wenn man mit dem Mauszeiger darüberfährt):

Ich erstelle einen Link zu der [Mozilla Webseite](https://www.mozilla.org/en-US/ "Der beste Ort um mehr über Mozilla zu lernen und wie jeder dazu beitragen kann").

> **Note:** **Hinweis**: Der Text aus dem `>title<`-Attribut wird nur durch den Mauszeiger angezeigt, was bedeutet, das Leute die nur die Tastatur benutzen oder Tablet/Smartphone Benutzer, diese Information nicht angezeigt bekommen. Wenn es sich also um eine wichtige Information handelt, wäre es wohl besser diese im normalen Text unterzubringen.

### Aktives Lernen: Erstellen Sie Ihren einen Hyperlink

Es ist Zeit das gelernte in die Praxis umzusetzen: Erstellen Sie bitte ein neues HTML-Dokument lokal in Ihrem Code-Editor. ([das Dokument könnte so aussehen](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html))

- Erstellen Sie innerhalb des `body`-Elements ein paar Absätze oder andere Inhalte, so wie Sie es in den vorherigen Artikeln gelernt haben.
- Machen Sie aus einigen der Inhalte nun Hyperlinks.
- Ergänzen Sie `title`-Attribute.

### Blockelemente als Links

Wie oben schon erwähnt, können Sie fast alle Inhalte in Links umwandeln, auch [Blockelemente](/de/Learn/HTML/Einf%C3%BChrung_in_HTML/Lerne_HTML_kennen#Blockelemente_und_Inlineelemente) könne als Verweise fungieren. So könne Sie zum Beispiel ein Bild in einen Link umwandeln indem Sie es in `<a></a>` Tags einbetten.

```html
<a href="https://www.mozilla.org/de/">
  <img src="mozilla-image.png" alt="Mozilla Logo welches zur Mozilla Webseite verlinkt"></a>
```

> **Note:** **Hinweis**: Sie werden mehr über das Einbinden von Bildern auf Webseiten in einem späteren Artikel erfahren.

## Kurzer Exkurs zu URLs und Linkpfaden

Um Linkziele vollständig zu verstehen, müssen Sie zuerst lernen wie URLs und Dateipfade funktionieren.

Eine URL (engl.: Uniform Resource Locator) ist einfach ein String aus Text der definiert wo etwas im Internet zu finden ist. Zum Beispiel ist Mozillas deutsche Webseite unter `https://www.mozilla.org/de/` zu finden.

URLs benutzen Dateipfade um Dateien zu finden. Diese Pfade geben an, wo in einem Dateisystem eine bestimmte Datei abgelegt ist. Lassen Sie uns ein einfaches Beispiel einer Dateistruktur anschauen (schauen Sie die Struktur von [Erstellen von Hyperlinks](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/creating-hyperlinks) an).

![A simple directory structure. The parent directory is called creating-hyperlinks and contains two files called index.html and contacts.html, and two directories called projects and pdfs, which contain an index.html and a project-brief.pdf file, respectively](https://mdn.mozillademos.org/files/12409/simple-directory.png)

Das **Stammverzeichnis**, englisch **root (=> Wurzel)**, dieses Verzeichnisses wurde `creating-hyperlinks` benannt. Wenn Sie lokal an einer Webseite arbeiten, dann haben Sie ein Verzeichnis (einen Ordner), in dem die ganzen Dateien für diese Webseite abgelegt sind. In diesem Stammverzeichnis hier haben wir eine `index.html` und eine `contacts.html`-Datei. Auf einer echten Webseite wäre `index.html` die Startseite, also die Einstiegsseite zu unserer Internetpräsenz.

Es gibt auch zwei Verzeichnisse in unserem Stammverzeichnis, namens `pdfs` und `projects`. Diese enthalten jeweils eine einzelne Datei, einmal eine PDF-Datei (`project-brief.pdf`) und eine `index.html`-Datei. Sie sehen, man kann mehrere `index.html`-Dateien in einem Webprojekt haben, so lange diese in unterschiedlichen Verzeichnissen sind. Die zweite `index.html`-Datei könnte hier als Einstiegsseite zu projektbezogenen Informationen dienen.

- **Verlinkung im selben Verzeichnis**: Wenn Sie von der `index.html`-Datei einen Link zu der `contacts.html`-Datei setzen möchten, welche beide im selben Verzeichnis sind, dann müssen Sie nur den Dateinamen angeben. Die URL die Sie zur Verlinkung benutzen ist also `contacts.html`:

  ```html
  <p>Möchten Sie Kontakt mit uns augfnehmen?
  Finden Sie unsere Kontaktinformationen auf unserer <a href="contacts.html">Kontakt-Seite</a>.</p>
  ```

- **Verlinkung in ein Unterverzeichnis**: Wenn Sie von der `index.html`-Datei im Stammverzeichnis mit einem Link auf die `index.html`-Datei verweisen möchten, welche in dem Unterverzeichnis `projects` liegt, dann schreiben Sie das in der URL folgendermaßen: `projects/index.html` Die Adresse besteht aus dem Namen des Unterverzeichnis, einem Slash und der Zieldatei in dem Verzeichnis:

  ```html
  <p>Besuchen Sie meine  <a href="projects/index.html">Projekt Homepage</a>.</p>
  ```

- **Verlinkung in ein höheres Verzeichnis**: Wenn Sie einen Hyperlink von der `projects/index.html`-Datei zu der `pdfs/projects-brief.pdf`-Datei setzen möchten, dann müssen Sie ein Verzeichnislevel hoch gehen, um von dort in das Verzeichnis `pdfs` zu gelangen. Sie gehen in der Verzeichnisstruktur hoch, indem Sie zwei Punkte angeben - `..`. Die vollständige URL würde als wie folgt aussehen: `../pdfs/projects-brief.pdf`

  ```html
  <p>Ein Link zu meiner <a href="../pdfs/project-brief.pdf">Projektbeschreibung</a>.</p>
  ```

> **Note:** **Hinweis**: Sie können mehrere Schritte kombinieren und so komplexe URL-Pfade angeben, zum Beispiel `../../../komplexer/pfad/zu/meiner/datei.html`.

### Innerhalb eines Dokuments verlinken

Es ist möglich innerhalb eines HTML Dokumentes zu einem bestimmten Abschnitt einen Link zu setzen und nicht nur zu dem Dokument selbst. Um dies zu bewerkselligen, müssen Sie erst dem HTML-Element, welches Sie als Linkziel benutzen wollen, ein {{htmlattrxref("id")}}-Attribut geben.
Oft macht es Sinn zu einer bestimmten Überschrift im Dokument zu verlinken. In der Praxis würde das wie folgt aussehen:

```html
<h2 id="postanschrift">Postanschrift</h2>
```

Um zu dieser bestimmten `id` zu verlinken, können Sie diese am Ende der URL angeben. Sie müssen nur ein Hash- bzw. Rautesymbol davorsetzen, zum Beispiel so:

```html
<p>Möchten Sie uns einen Brief schicken? Schreiben Sie an unsere  <a href="contacts.html#postanschrift">Postanschrift</a>.</p>
```

Sie können diese Art der Referenz auch benutzen, um _innerhalb des selben Dokumentes zu verlinken_:

```html
<p>Unsere <a href="#postanschrift">Postanschrift</a> kann am Ende der Webseite gefunden werden. </p>
```

### Absolute und relative URLs

Zwei Begriffe denen Sie im Internet begegnen werden sind **absolute URL** und **relative URL:**

**Absolute URL**: Leitet zu einer absoluten, festen Adresse im Internet, inklusive {{glossary("protocol")}} und {{glossary("domain name")}}. Wenn zum Beispiel die HTML-Datei `index.html` in ein Verzeichnis namens `projects` hochgeladen wird, welches wiederum im Stammverzeichnis eines Webservers liegt und der Domain Name der Webseite `http://www.example.com` ist, dann lautet die absolute Adresse der Webseite `http://www.example.com/projects/index.html`.

Die absolute URL wird immer zu genau der selben Adresse im Internet zeigen, egal wo sie sich befindet.

**Relative URL**: Zeigt zu einem Verzeichnis _realtiv_ zu der Datei, in welcher der Link steht, so wie wir es weiter oben im Artikel gemacht haben. Wenn wir zum Beispiel von der Datei `http://www.example.com/projects/index.html` zu einer PDF-Datei im selben Verzeichnis verlinken möchten, dann brauchen wir nur den Dateinamen angeben (z.B.: `project-brief.pdf`). Wenn diese PDF-Datei in dem Unterverzeichnis `pdfs` liegt, welches wiederum in dem Verzeichnis `projects` zu finden ist, dann würde die relative Adresse wie folgt aussehen: `pdfs/project-brief.pdf`. Die äquivalente absolute Adresse für die PDF-Datei wäre `http://www.example.com/projects/pdfs/project-brief.pdf`.

Eine relative URL zeigt auf unterschiedliche Orte, je nachdem wo sich die Datei befindet, in welcher der Link untergebracht ist. Wenn wir zum Beispiel unsere `index.html`-Datei aus dem `projects` Verzeichnis in das Stammverzeichnis der Webseite verschieben würden, dann würde die relative URL `pdfs/project-brief.pdf` darin auf `http://www.example.com/pdfs/project-brief.pdf` verweisen und nicht mehr auf `http://www.example.com/projects/pdfs/project-brief.pdf`

## Nutzen von Links

Wie man Links am besten benutzt und ein angenehmes Nutzererlebnis schafft, werden wir uns nun anschauen.

### Klare Benennung von Links

Es ist einfach ein paar Links auf eine Webseite zu setzen. Aber das ist nicht genug. Wir müssen dafür sorgen, das alle Benutzer der Webseite diese Links auch benutzen können, egal mit welchem Gerät sie auf die Seite zugreifen. Zum Nachdenken:

- Benutzer von Bilschirmlesegeräten springen von Link zu Link auf der Webseite und diese werden ohne Zusammenhang vorgelesen.
- Suchmaschinen benutzen Linktext um die Zieldateien zu indexieren, es ist also gut, wenn der Linktext Schlagwörter enthält die mit dem Inhalt des verlinkten Dokumentes zu tun haben.
- Leser der Webseite scannen die Webseite zuerst durch, anstatt sie direkt Wort für Wort zu lesen. Dabei werden die Augen von hervorgehobenem Text, wie zum Beispiel Links angezogen. Beschreibender Linktext ist sinnvoll, zum schnellen Verständnis worum es auf der Webseite geht.

Schauen wir uns ein Beispiel an:

_**Guter** Linktext:_ [Firefox herunterladen](https://firefox.com)

```html
<p><a href="https://firefox.com/">
  Firefox herunterladen
</a></p>
```

_**Schlechter** Linktext:_ [Klicke hier](https://firefox.com/) um Firefox herunterzuladen

```html
<p><a href="https://firefox.com/">
  Klicke hier
</a>
um Firefox herunterzuladen</p>
```

Weitere Tipps:

- Wiederholen Sie nicht die URL als Teil des Linktextes, URLs sehen nicht schön aus und Bildschirmlesegeräte geben diese Buchstabe für Buchstabe aus.
- Schreiben Sie nicht "Link" oder "Link zu" in ihrem Linktext. Bildschirmlesegeräte sagen das es sich um einen Link handelt und der Link ist normalerweise als solcher gut zu erkennen. Denn Links sind normalerweise auf eine Weise gestaltet, die sie von der Umgebung absetzt, in einer anderen Farbe und unterstrichen. Diese Konvention sollte auch beibehalten werden, Links sollten immer als solche auf den ersten Blick zu erkennen sein.
- Halten Sie den Linktext so kurz wie möglich - lange Linktexte sind besonders für Benutzer von Bildschirmlesegeräten nervend, denn der Linktext wird immer komplett vorgelesen.
- Vermeiden Sie es den selben Linktext für mehrere Links zu benutzen, die auf unterschiedliche Dokumente verweisen. Benutzer von Bildschirmlesegeräten wird die Navigation erschwert, wenn ihnen mehrmals der Linktext "Klicken Sie hier" vorgelesen wird.

### Benutzen Sie relative Links

Von einem vorangehenden Absatz bekommen Sie vielleich die Idee, dass es gut ist, nur absolute Links zu verwenden, da diese nicht zu toten Links werden können, wenn die Webseite verschoben wird, im Gegensatz zu relativen Links. Es ist aber besser relative Links zu benutzen, wenn Sie innerhalb der _selben Webseite_ verlinken. Um eine _andere Webseite_ zu verlinken müssen Sie natürlich absolute Links benutzen.

- Zum einen ist es einfacher den Code später zu lesen und verstehen, denn relative URLs sind meistens viel kürzer als absolute URLs.
- Zum anderen ist es effizienter relative URLs zu benutzen und die Webseite wird insgesamt schneller. Wenn Sie eine absolute URL benutzen, dann wird der Browser eine Anfrage an den Domain Name Server ({{glossary("DNS")}} senden, um herauszufinden, wo die Webseite zu finden ist, was Zeit und Ressourcen in anspruch nimmt (lesen Sie [Wie das Internet funktioniert](/de/docs/Learn/Getting_started_with_the_web/How_the_Web_works) um mehr darüber zu erfahren).
  Bei einer relativen URL schaut der Browser direkt auf dem selben Server nach der Datei, was um einiges schneller geht, als den Umweg über DNS zu gehen.

### Klare Verlinkung zu Dateien die keine HTML-Dateien sind

Wenn Sie zu etwas anderem als einer anderen Webseite verlinken, zum Beispiel einer herunterladbaren Datei (ein PDF oder ein Word-Dokument) oder einem Stream (Video oder Audio) oder ähnlichem, welches unerwartete Effekte hat, wie PopUp-Fenster oder Flash-Animationen, dann sollten Sie das im Linktext deutlich kennzeichnen. Es kann nämlich sehr nervend sein, wenn folgendes passiert:

- Wenn Sie eine langsame Internetverbindung haben, einen Link anklicken und auf einmal eine mehrere Megabyte große Datei heruntergeladen wird.
- Wenn Sie keinen Flashplayer installiert haben, auf einen Link klicken und auf einmal auf einer Webseite sind, auf der Flash genutzt wird.

Lassen Sie uns ein paar Beispiele anschauen, was für ein Linktext hier genutzt werden kann:

```html
<p><a href="http://www.example.com/large-report.pdf">
  Laden Sie den Verkaufsbericht herunter (PDF, 10MB)
</a></p>

<p><a href="http://www.example.com/video-stream/">
  Schauen Sie sich das Video an (Stream öffnet in einem separaten Fenster, HD Qualität)
</a></p>

<p><a href="http://www.example.com/car-game">
  Spielen Sie das Autospiel (benötigt Flash)
</a></p>
```

### Benutzen Sie das download-Attribut um auf herunterladbare Dateien zu verlinken

Wenn Sie auf eine Datei verlinken, die heruntergeladen werden sollte, anstatt im Browser geöffnet zu werden, können Sie das `download`-Attribut benutzen, um den Namen der gespeicherten Datei vorzugeben. Hier ist ein Beispiel mit einem Download-Link zu der Windows-Version von Firefox 39:

```html
<a href="https://download.mozilla.org/?product=firefox-39.0-SSL&os=win&lang=en-US"
   download="firefox-39-installer.exe">
  Firefox 39 für Windows herunterladen
</a>
```

## Aktives Lernen: Erstellen Sie ein Navigationsmenu

In dieser Übung sollen Sie einige Einzelseiten so verlinken, das Sie am Ende eine Webseite mit mehreren Seiten haben, die über ein Navigationsmenü erreicht werden können. Diese Art der Navigation finden Sie auf vielen Webseiten. Die selbe Webseitenstruktur wird auf allen Seiten genutzt, um ein einheitliches Bild einer Webpräsenz zu geben. Wenn Sie auf die Links in der Navigation klicken, scheint sich nur der Inhalt der Webseiten zu verändern, nicht die ganze Seite.

Sie müssen sich lokale Kopien der folgenden vier Seiten machen. Speichern Sie alle in dem selben Verzeichnis (auf GitHub finden Sie unter [navigation-menu-start](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-start) die Liste der benötigten Dateien im Verzeichnis):

- [index.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/navigation-menu-start/social.html)

Aufgaben:

1.  Fügen Sie eine ungeordnete Liste an dem angezeigten Platz in einer der Dateien ein. Diese Liste soll alle Namen der zu verlinkenden Seiten beinhalten. Ein Navigationsmenü ist tatsächlich nur eine Liste von Links, semantisch ist dies also der richtige Weg eine Navigation zu erstellen.
2.  Verändern Sie jeden Seitennamen in einen Link.
3.  Kopieren Sie das fertige Navigationsmenü und fügen es auf alle Seiten ein.
4.  Auf jeder einzelnen Seite löschen Sie den Link zu der Seite selbst. Es ist sinnlos auf einer Seite einen Link zu sich selbst zu beinhalten. Dazu dient der visuelle Unterschied als Indikator, auf welcher Seite man sich gerade befindet.

Wenn Sie fertig sind, dann sollte die Webseite wie folgt aussehen:

![An example of a simple HTML navigation menu, with home, pictures, projects, and social menu items](https://mdn.mozillademos.org/files/12411/navigation-example.png)

> **Note:** **Hinweis**: Falls Sie stecken bleiben und nicht weiter wissen, dann können Sie sich unsere korrekte Lösung anschauen: [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/master/html/introduction-to-html/navigation-menu-marked-up)

## E-mail Links

Es ist möglich Links oder Buttons zu erstellen, die wenn man Sie anklickt, eine neue ausgehende E-Mail Nachricht öffnen, anstatt zu einer Webseite oder einer anderen Datei zu verlinken. Das wirt bewerkstelligt indem man das {{HTMLElement("a")}}-Element zusammen mit dem `mailto:` URL Schema benutzt.

In seiner einfachsten und am meisten genutzten Form, gibt ein `mailto:` Link einfach nur die E-Mail Adresse des Empfängers an. Beispiel:

```html
<a href="mailto:niemand@mozilla.org">Senden Sie eine E-Mail an Niemand</a>
```

Damit erstellen Sie einen Link der folgendermaßen aussieht:
[Senden Sie eine E-Mail an Niemand](mailto:niemand@mozilla.org).

Tatsächlich ist auch die angabe einer E-Mail Adresse optional. Wenn Sie diese weglassen, also nur `mailto:` schreiben, dann wird eine neue ausgehende E-Mail erstellt, ohne einen vorgegebenen Empfänger. Dies kann genutzt werden, um _Teilen_-Links zu erstellen, bei denen Benutzer eine E-Mail an Freunde schicken können.

### Details angeben

Ausser der E-Mail Adresse können Sie auch andere Informationen angeben. Alle Standard E-Mail Kopffelder können über `mailto` vorausgefüllt werden, dazu gehören _subject_ (Betreff), _cc_ und _body_ (Um eine vorgegeben Nachricht anzuzeigen).

Hier ist ein Beispiel das cc, bcc, subject und body beinhaltet:

```html
<a href="mailto:niemand@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&amp;subject=Der%20Betreff%20von%20der%20Email &amp;body=Die%20Nachricht%20in%20der%20Email">
  Senden Sie eine E-Mail mit cc, bcc, subject and body
</a>
```

> **Note:** **Hinweis:** Die Werte der Felder müssen URL gerecht geschrieben sein, dass heißt mit speziellen Charakteren anstatt Leerzeichen, Umlauten und Sonderzeichen. Bemerken Sie auch die Verwendung des Fragezeichens (`?`), um die eigentliche URL von den Feldwerten abzugrenzen und das Und-Zeichen (&), um die Feldwerte voneinander zu trennen. Dies ist Standard URL-Query Notation. Sie werden mehr darüber in einem fortgeschrittenen Modul lernen.

Hier sind noch ein paar Beispiele für `mailto` URLs:

- <mailto:>
- <mailto:niemand@mozilla.org>
- <mailto:niemand@mozilla.org,nobody@mozilla.org>
- <mailto:niemand@mozilla.org?cc=nobody@mozilla.org>
- <mailto:niemand@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20der%20Betreff>

## Zusammenfassung

Jetzt haben Sie schon sehr viel über Hyperlinks gelernt! Wir werden uns später im Kurs noch einmal mit ihnen beschäftigen, wenn es darum geht, Links zu gestalten. Als nächstes schauen wir uns noch ein paar HTML-Elemente an, mit denen Text formatiert und semantisch dargestellt werden kann. Um Fortgeschrittene Textformatierung geht es im nächsten Artikel.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
