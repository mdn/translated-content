---
title: Kaskadierung und Vererbung
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
translation_of: Learn/CSS/Building_blocks/Cascade_and_inheritance
translation_of_original: Web/Guide/CSS/Getting_started/Cascading_and_inheritance
original_slug: Web/Guide/CSS/Getting_started/Kaskadierung_und_vererbung
---
{{LearnSidebar}}

{{ previousPage("/de/docs/Web/Guide/CSS/Getting_Started/How_CSS_works", "Wie CSS funktioniert.")}}Das ist der vierte Abschnitt des [CSS Getting Started](/de/docs/Web/Guide/CSS/Getting_Started) Tutorials. Er erklärt wie Stylesheets in einer Kaskade interagieren und wie Element den Style von ihren Elternelmenten erben können. Sie werden Vererbung verwenden, um eine Menge von Teilen in Ihrem Beispieldokument in einem Schritt zu verändern.

## Information: Kaskadierung und Vererbung

Der schlussendliche Style eines Elements kann an vielen verschiedenen Orten angegeben werden, die auf eine komplexe Art miteinander interagieren. Diese Komplexität macht CSS mächtig. Aber dadurch kann es auch verwirrend und schwer zu debuggen werden.

Drei Hauptquellen von Styleinformationen bilden eine _Kaskade_. Diese sind:

- Die standardmäßigen Styles des Webbrowsers für die Markup Language.
- Die Styles, die vom Benutzer, der das Dokument liest, angegeben werden.
- Die Styles, die vom Autor mit dem Dokument verknüpft worden sind. Diese können an drei verschiedenen Orten angegeben werden:

  - In einer externen Datei: Dieses Tutorial diskutiert hauptsächlich diese Method zur Definition von Styles.
  - In einer Definition am Anfang des Dokumenst: Diese Methode sollte nur für Styles verwendet werden, die nur von dieser Seite benützt werden.
  - Auf einem bestimmten Element im Inhalt des Dokument: Das ist die am schwersten wartbare Methode, welche für Tests verwendet werden kann.

Der Style des Benutzers verändert den standardmäßigen Style des Webbrowsers. Der Style des Autors des Dokuments verändert dann den Style ein weiteres Mal. In diesem Tutorial sind Sie der Autor des Beispieldokuments und es wird nur mit Stylesheets vom Autor gearbeitet.

Beispiel

Wenn Sie dieses Dokument in einem Webbrowser lesen, kommen Teile des Styles, den Sie sehen, von dem standardmäßigen Style des Webbrowsers für HTML.

Teile vom Style können von angepassten Webbrowsereinstellungen oder von einer angepassten Styledefinitionsdatei stammen. In Firefox können die Einstellungen im Preferences Dialog vorgenommen werden, oder Sie geben Styles in der Datei `userContent.css` innerhalb Ihres Browserprofils an.

Andere Teile vom Style kommen aus Stylesheets, die vom Wiki-Server mit dem Dokument verlinkt werden.

Wenn Sie Ihr Beispieldokument in Ihrem Webbrowser öffnen, werden die {{ HTMLElement("strong") }} Elemente mit dickeren Buchstaben als der Rest des Textes dargestellt. Das kommt aus dem standardmäßigen Style des Webbbrowsers für HTML.

Die {{ HTMLElement("strong") }} Elemente sind rot. Das kommt aus Ihrem Beispielstylesheet.

Die {{ HTMLElement("strong") }} Elemente erben auch viele Eigenschaften vom Style des {{ HTMLElement("p") }} Elements, weil sie ein Kindelement davon sind. Auf dieselbe Art erbt das {{ HTMLElement("p") }} Element vom Style des {{ HTMLElement("body") }} Elements.

Für Styles in der Kaskade haben die Stylesheets vom Autor höchste Priorität. Danach folgen die Stylesheets des Benutzers und der standardmäßige Stylesheet vom Webbrowser.

Bei vererbten Styles haben die eigenen Styles von Kindelementen eine höhere Priorität als die von dessen Elternelementen.

Das sind nicht alle Prioritäten, die angwendet werden. Folgende Seiten in diesem Tutorial gehen noch detaillierter darauf ein.

Mehr Details

CSS ermöglicht es auch mit dem Schlüsselwort `!important` die Styles vom Autor zu überschreiben.

Das bedeutet, dass ein Autor nicht immer genau vorhersehen kann, was genau die Leser sehen werden.

Wenn Sie alle Details über Kaskadierung und Vererbung erfahren wollen, rufen Sie bitte die Seite [Assigning property values, Cascading, and Inheritance](http://www.w3.org/TR/CSS21/cascade.html) in der CSS Spezifikation auf.

## Aktion: Vererbung verwenden

1.  Editieren Sie Ihre CSS Datei.
2.  Kopieren Sie die folgende Zeile in Ihre CSS Datei. Es macht dabei keinen Unterschied, ob Sie die Zeile vor oder nach der bereits enthaltenen Zeile einfügen. Es ist aber verständlicher die Zeile oben einzufügen, da das {{ HTMLElement("p") }} Element in Ihrem Dokument das Elternelement vom {{ HTMLElement("strong") }} Element ist:

    ```css
    p {
      color: blue;
      text-decoration: underline;
    }
    ```

3.  Laden Sie die Seite im Webbrowser erneut, damit die Änderung an Ihrem Beispieldokument sehen können. Die unterstreichende Line betrifft den gesamten Text im Absatz und somit auch alle Anfangsbuchstaben. Die {{ HTMLElement("strong") }} Elemente haben den Unterstrich von ihrem Elternknoten {{ HTMLElement("p") }} geerbt.

    Die {{ HTMLElement("strong") }} Elemente sind aber immer noch rot. Die rote Farbe gehört zu ihrem eigenen Style und hat somit Priorität gegenüber dem blau des {{ HTMLElement("p") }} Elternelements.

## Davor

### HTML Inhalt

```html
<p>
  <strong>C</strong>ascading
  <strong>S</strong>tyle
  <strong>S</strong>heets
</p>
```

### CSS Inhalt

```css
strong {
  color:red
}
```

{{ EmbedLiveSample('Before') }}

## Danach

### HTML Inhalt

```html
<p>
  <strong>C</strong>ascading
  <strong>S</strong>tyle
  <strong>S</strong>heets
</p>
```

### CSS Inhalt

```css
p {
  color:blue;
  text-decoration:underline;
}

strong {
  color:red;
}
```

{{ EmbedLiveSample('After') }}

HerausforderungVerändern Sie Ihren Stylesheet, damit nur die roten Buchstaben unterstrichen sind:

| **C**ascading **S**tyle **S**heets |
| ---------------------------------- |

Mögliche Lösung

Verschieben Sie die Deklaration für die untersteichende Linie aus der Regel für {{ HTMLElement("p") }} in die für {{ HTMLElement("strong") }}. Die resultierende Datei sieht folgendermaßen aus:

```css
p {
  color: blue;
}

strong {
  color: red;
  text-decoration: underline;
}
```

[Lösung ausblenden](#challenge)[Sehen Sie sich die Lösung an.](#tutochallenge "Eine mögliche Lösung für die Herausforderung darstellen")

## Was kommt als Nächstes?

{{ nextPage("/de/docs/Web/Guide/CSS/Getting_Started/Selectors", "Selektoren")}}Ihr Beispielstylesheet definiert Styles für die Tags `<p>` und `<strong>`, um den Style der entsprechenden Elemente im gesamten Dokument zu verändern. Der nächste Abschnitt beschreibt, wie Sie den Style auf eine noch [selektivere Art](/de/docs/Web/Guide/CSS/Getting_Started/Selektoren) angeben können.
