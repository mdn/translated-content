---
title: Lesbares CSS
slug: Learn/CSS/First_steps/How_CSS_is_structured
translation_of: Learn/CSS/Introduction_to_CSS/Syntax#Beyond_syntax_make_CSS_readable
translation_of_original: Web/Guide/CSS/Getting_started/Readable_CSS
original_slug: Web/Guide/CSS/Getting_started/Lesbares_CSS
---
{{LearnSidebar}}

{{ previousPage("/de/docs/Web/Guide/CSS/Getting_Started/Selektoren", "Selektoren")}}Das ist der sechste Teil des [CSS Getting Started](/de/docs/Web/Guide/CSS/Getting_Started) Tutorials. Er erklärt den Stil und die Grammatik der CSS Sprache selbst. Sie ändern das Layout Ihrer CSS Datei, damit sie lesbarer wird.

## Information: Lesbares CSS

Sie können Leerstellen und Kommentare in Ihren Stylesheets einfügen, um sie lesbarer zu machen. Wenn verschiedene Selektoren dasselbe Element nur auf verschiedene Arten auswählen und deren Regeln darauf angewendet werden, können Sie diese Selektoren im Stylesheet nacheinander gruppieren.

### Leerstellen

Leerstellen können Leerzeichen, Tabs und Leerzeilen sein. Sie können Leerstellen in Ihren Stylesheets einfügen, um sie lesbarer zu machen.

Im Kontext eines Seitenlayouts und -zusammenstellung sind **Leerstellen** die Teile einer Seite, die frei bleiben: Seitenränder, Zwischenräume und Platz zwischen Spalten und beschriebene Zeilen.

Ihre CSS Datei aus den Beispielen hat momentan eine Regel pro Zeile und fast nur das Minimum von Leerstellen. In einem komplexen Stylesheet würde diese Layout schwer zu lesen und somit auch schwer zu warten sein.

Das gewählte Layout ist normalerweise eine persönliche Vorliebe. Doch wenn Ihre Stylesheets Teil eines gemeinsammen Projekts sind, könnten diese Projekte eigene Konventionen für das Layout haben.

Beispiele

Einige Personen mögen das kompakte Layout, das wir bis jetzt verwendet haben, in dem eine Zeile nur geteilt wird, wenn sie sonst sehr lange sein würde:

```css
.carrot {color: orange; text-decoration: underline; font-style: italic;}
```

Einige Personen bevorzugen, wenn pro Zeile ein Property-Wert-Paar steht:

```css
.carrot
{
color: orange;
text-decoration: underline;
font-style: italic;
}
```

Einige Personen verwenden dann auch Einzüge — zwei oder vier Leerzeichen oder ein Tab sind gebräuchlich:

```css
.carrot {
  color: orange;
  text-decoration: underline;
  font-style: italic;
}
```

Einige Personen richten alles vertikal an (aber solche Layouts sind schwer zu warten):

```css
.carrot
    {
    color           : orange;
    text-decoration : underline;
    font-style      : italic;
    }
```

Einige Personen verwenden verschieden viele Leerzeichen, um die Lesbarkeit zu verbessern.

```css
.vegetable         { color: green; min-height:  5px; min-width:  5px }
.vegetable.carrot  { color: orange;    height: 90px;     width: 10px }
.vegetable.spinach { color: darkgreen; height: 30px;     width: 30px }
```

Einige Personen verwenden Tabs für das Layout, während andere nur Leerzeichen verwenden.

### Kommentare

Kommentare in CSS beginnen mit `/*` und enden mit `*/`.

Sie können Kommentare in Stylesheets für Anmerkungen verwenden oder auch Teile vorübergehend für Testzwecke _auskommentieren_.

Um Teile eines Stylesheets auszukommentieren, platzieren Sie diesen Teil in einem Kommentar, damit der Webbrowser ihn nicht auswertet. Seien Sie mit dem Start und dem Ende eines Kommentars vorsichtig. Der Rest des Stylesheets muss weiterhin eine korrekte Syntax haben.

Beispiel

```css
/* style for initial letter C in first paragraph */
.carrot {
  color:            orange;
  text-decoration:  underline;
  font-style:       italic;
  }
```

### Gruppierte Selektoren

Wenn mehrere Elemente denselben Style haben, können Sie eine Gruppe von Selektoren getrennt mit einem Komma spezifizieren. Die Deklaration wird dann auf alle selektierten Elemente angewendet.

An einer anderen Stelle in Ihrem Stylesheet können Sie einen einzelnen Selektor erneut spezifizieren, um zusätzlich individuelle Regeln dazu anzugeben.

Beispiel

Diese Regel macht {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }} und {{ HTMLElement("h3") }} Elemente in derselben Farbe.

Es ist angenehm die Farbe an nur einer Stelle zu spezifizieren, denn dann kann sie später einfacher verändert werden.

```css
/* color for headings */
h1, h2, h3 {color: navy;}
```

## Aktion: Kommentare hinzufügen und das Layout verbessern

1. Bearbeiten Sie Ihre CSS Datei und schreiben Sie die folgenden Regeln hinein (in beliebiger Reihenfolge):

    ```css
    strong {color: red;}
    .carrot {color: orange;}
    .spinach {color: green;}
    #first {font-style: italic;}
    p {color: blue;}
    ```

2. Machen Sie den Stylesheet lesbaren, in dem sie die Regeln in eine für Sie logische Reihenfolge bringen und Sie Ihrer Meinung nach sinnvolle Leerstellen und Kommentare einfügen.
3. Speichern Sie die Datei und aktualisieren Sie Ihren Webbrowser, um sicherzustellen, dass Ihre Änderungen keinen Einfluss auf die Anwendung des Stylesheets haben:

    | **C**ascading **S**tyle **S**heets |
    | ---------------------------------- |
    | **C**ascading **S**tyle **S**heets |

Herausforderung

Kommentiere Sie nur Teile Ihres Stylesheets aus, damit nur der allererste Buchstabe in Ihrem Dokument rot ist:

| **C**ascading **S**tyle **S**heets |
| ---------------------------------- |
| **C**ascading **S**tyle **S**heets |

(Es gibt mehrere Wege dies zu erreichen.)

Mögliche LösungEine mögliche Lösung wäre das Auskommentieren der Regel `.carrot`:

```css
/*.carrot {
  color: orange;
}*/
```

[Lösung ausblenden](#challenge)[Sehen Sie sich die Lösung an.](#tutochallenge "Eine mögliche Lösung für die Herausforderung darstellen")

## Was kommt als Nächstes?

{{ nextPage("/de/docs/Web/Guide/CSS/Getting_Started/Textstyles", "Textstyles") }}Ihr Beispiel-Stylesheet verwendet kursiven und unterstrichenen Text. Die nächste Seite beschreibt weitere Wege, um [das Aussehen von Text](/de/docs/Web/Guide/CSS/Getting_Started/Textstyles) in Ihrem Dokument zu spezifizieren**.**
