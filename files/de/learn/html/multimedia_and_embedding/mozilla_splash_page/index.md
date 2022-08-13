---
title: Mozilla splash page
slug: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
tags:
  - Anfänger
  - Aufgabe
  - Bilder
  - CodingScripting
  - Einbinden
  - Grafiken
  - HTML
  - JPG
  - PNG
  - Video
  - img
  - responsiv
  - src
  - srcset
  - youtube
translation_of: Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page
---
{{LearnSidebar}}{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

Mit dieser Aufgabe testen wir Ihr Wissen über einige der Techniken, die in den Artikeln dieses Moduls angesprochen wurden. Wir lassen Sie einige Bilder und ein Video zu einer funky Mozilla-Startseite hinzufügen!

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorwissen:</th>
      <td>
        Bevor Sie sich dieser Aufgabe stellen, sollten Sie bereits den Rest des
        <a href="/de/docs/Learn/HTML/Multimedia_and_embedding"
          >Multimediainhalte einbinden</a
        >-Moduls bearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Testen des Wissens über das Einbinden von Bildern und Videos in
        Webseiten, Frames und HTML-Techniken von responsiven Grafiken.
      </td>
    </tr>
  </tbody>
</table>

## Startpunkt

Um diese Aufgabe zu beginnen, holen Sie sich die HTML und alle Bilder aus dem [mdn-splash-page-start](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/)--Directory auf Github. Legen Sie auf Ihrer Festplatte ein neues Verzeichnis an und speichern Sie darin die Inhalte von [index.html](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/index.html) in einer Datei mit dem Namen `index.html` auf Ihrer Festplatte. Speichern Sie im selben Verzeichnis [pattern.png](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/mdn-splash-page-start/pattern.png) (mt einem Rechtsklick auf das Bild eröffnet Ihnen das Kontextmenü eine Option, das Bild zu speichern).

Speichern Sie auf dieselbe Weise, aber zunächst in einem anderen Verzeichnis, auch die anderen Bilder aus dem [originals](https://github.com/mdn/learning-area/tree/master/html/multimedia-and-embedding/mdn-splash-page-start/originals)-Verzeichnis; Sie werden einige der Bilder noch mit einem Bildbearbeitungsprogramm verändern müssen, bevor sie einsatzbereit sind.

> **Note:** **Anmerkung**: Das HTML-Beispiel beinhaltet ein recht umfangreiches CSS, um die Seite zu stylen. Sie brauchen das CSS nicht zu touchieren, sondern lediglich die HTML innerhalb des {{htmlelement("body")}}-Elementes — solange Sie die korrekten Auszeichnungen verwenden, wird das Styling ebenfalls korrekt aussehen.

## Projekt: Kurzbeschreibung

In dieser Aufgabe präsentieren wir Ihnen eine fast-fertige Mozilla Startseite, deren Ziel es ist, etwas nettes und interessantes darüber zu kommunizieren, wofür Mozila steht, sowie einige Links zu weiterführenden Quellen bereitzustellen. Leider sind bisher noch keine Bilder oder Videos eingepflegt worden — das ist schließlich Ihr Job! Sie müssen einige Medien hinzufügen, damit die Seite ansprechender aussieht und ihrem Ziel gerecht wird. Die nachfolgenden Abschnitte beschreiben Ihre Aufgabe detaillierter:

### Bilder vorbereiten

Erzeugen Sie mit Ihrem bevorzugten Bildbearbeitungsprogramm 400px- und 120px-breite Versionen von:

- `firefox_logo-only_RGB.png`
- `firefox-addons.jpg`
- `mozilla-dinosaur-head.png`

Geben Sie ihnen sprechende Namen, z.B. `firefoxlogo400.png` und `firefoxlogo120.png`.

Gemeinsam mit `mdn.svg` werden diese Bilder Ihre Icons sein, mit denen Sie auf weiterführende Quellen verlinken, innerhalb des `further-info`-Bereichs. Sie werden außerdem auf das Firefox-Logo im Seitenheader verlinken. Speichern Sie Kopien all dieser Bilder im selben Verzeichnis, in dem sich `index.html` befindet.

Haben Sie dies abgeschlossen, erzeugen Sie eine 1200px-breite Landscape-Version von `red-panda.jpg` und eine 600px-breite Version, die den Panda in einem Close-Up-Shot zeigt. Geben Sie auch diesen Bildern sprechende Namen, damit Sie sie leicht wiederfinden. Speichern Sie eine Kopie davon im selben Verzeichnis, in dem sich `index.html` befindet.

> **Note:** **Anmerkung**: Sie sollten Ihre JPG- und PNG-Bilder am besten auf eine Weise komprimieren, auf die sie so klein wie möglich sind und dabei dennoch gut aussehen. [tinypng.com](https://tinypng.com/) ist ein toller Service, um dies einfach zu erreichen.

### Dem Header ein Logo hinzufügen

Innerhalb des {{htmlelement("header")}}-Elements fügen Sie ein {{htmlelement("img")}}-Element hinzu, das die kleine Version des Firefox-Logos in den Header einbindet.

### Dem Hauptteil des Artikels ein Video hinzufügen

Fügen Sie einfach das {{htmlelement("article")}}-Element hinzu (direkt under dem öffnenden Tag) und binden Sie das YouTube-Video unter dem Link <https://www.youtube.com/watch?v=ojcNcvb1olg> ein, indem Sie geeignete YouTube-Tools verwenden, um den Code zu generieren. Das Video soll 400px breit sein.

### Responsive Grafiken zu den "further info"-Links

Innerhalb des {{htmlelement("div")}}-Elements mit der Klasse `further-info` finden Sie vier {{htmlelement("a")}}-Elemente — jedes davon verlinkt auf eine interessante Mozilla-zugehörige Seite. Um diesen Teil abzuschließen, müssen Sie innerhalb jeden dieser Elemente ein {{htmlelement("img")}}-Element hinzufügen, die geeignete {{htmlattrxref("src", "img")}}, {{htmlattrxref("alt", "img")}}-, {{htmlattrxref("srcset", "img")}}- und {{htmlattrxref("sizes", "img")}}-Attribute enthalten.

In jedem Fall (außer einem — der von sich aus responsiv ist?) möchten wir, dass der Browser die 120px-breite Version anzeigt, wenn das Anzeigedisplay 480px breit oder kleiner ist, und die 400px-breite Version in allen anderen Fällen.

Stellen Sie sicher, dass die richtigen Bilder mit den richtigen Links verbunden sind!

> **Note:** **Anmerkung**: Um die `srcset`/`sizes`-Beispiele zu testen, müssen Sie Ihre Seite auf einen Server uploaden ([Github pages](/de/docs/Learn/Common_questions/Using_Github_pages) ist eine einfache und freie Lösung). Von dort aus können Sie testen, ob sie korrekt funktionieren, indem Sie Browser-Entwicklertools verwenden, wie in [Responsive images: useful developer tools](/de/Learn/HTML/Multimedia_and_embedding/Responsive_images#Useful_developer_tools) beschrieben.

### Ein art directed Roter Panda

Innerhalb des {{htmlelement("div")}}-Elementes mit der Klasse `red-panda` möchten wir ein {{htmlelement("picture")}}-Element einfügen, das das kleine Panda-Portrai zeigt, wenn das Anzeigedisplay 600px breit oder schmaler ist, und das große Landscape-Bild bei breiteren Anzeigedisplays.

## Beispiel

Die nachfolgenden Screenshots zeigen, wie die Startseite nach der korrekten Auszeichnung aussehen sollte, auf einem breiten und einem schmalen Bildschirm.

![A wide shot of our example splash page](https://mdn.mozillademos.org/files/12946/wide-shot.png)

![A narrow shot of our example splash page](https://mdn.mozillademos.org/files/12944/narrow-shot.png)

## Einschätzung

Falls Sie diesen Test im Rahmen eines organisierten Kurses absolvieren, sollten Sie Ihre Arbeit Ihrem/r Mentor\*in/Lehrkraft zur Bewertung überreichen können. Falls Sie selbstständig lernen, können Sie die Bewertungskriterien sehr einfach erhalten, indem Sie im [Diskussionsthread zu dieser Übung](https://discourse.mozilla.org/t/mozilla-splash-page-assignment/24679) nachfragen oder im [#mdn](irc://irc.mozilla.org/mdn) IRC-Channel auf [Mozilla IRC](https://wiki.mozilla.org/IRC).Versuchen Sie es zunächst selbst — mit Mogeleien ist nichts gewonnen!

> **Note:** **Anmerkung**: Falls Sie ihre Aufgabe mit den Developer-Tools des im Chrome-Browsers überprüfen, kann es sein, dass der Browser nicht die richtigen Bilder lädt, egal, wie klein Sie die Breite unter 'responsive view' auswählen. Es scheint sich hierbei um eine Eigenart von Chrome zu handeln. Der Firefox-Browser sollte das richtige Bild laden (sofern Ihre HTML korrekt ist).

{{PreviousMenu("Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

## In diesem Modul

- [Images in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Video and audio content](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [From \<object> to \<iframe> — other embedding technologies](/de/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Adding vector graphics to the Web](/de/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [Responsive images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Mozilla splash page](/de/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
