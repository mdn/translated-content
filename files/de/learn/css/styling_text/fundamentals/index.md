---
title: Textstyles
slug: Learn/CSS/Styling_text/Fundamentals
translation_of: Learn/CSS/Styling_text/Fundamentals
translation_of_original: Web/Guide/CSS/Getting_started/Text_styles
original_slug: Web/Guide/CSS/Getting_started/Textstyles
---
{{LearnSidebar}}

{{previousPage("/de/docs/Web/Guide/CSS/Getting_Started/Lesbares_CSS", "Lesbares CSS")}}Das ist der siebte Teil des [CSS Getting Started](/de/docs/Web/Guide/CSS/Getting_Started) Tutorials. Er enthält weitere Beispiele für Textstyles. Sie verändern Ihren Stylesheet, um verschiedene Schriftarten zu verwenden.

## Information: Textstyles

CSS besitzt verschiedene Eigenschaften, um Text zu gestalten.

Es gibt zur Gemütlichkeit eine Eigenschaft {{ cssxref("font") }}, mit der sich verschiedene Aspekte auf einmal definieren lassen, wie zum Beispiel:

- Fettgedruckt, kursiv und kleine Großbuchstaben
- Schriftgröße
- Zeilenhöhe
- Schriftart

Beispiel

```css
p {
  font: italic 75%/125% "Comic Sans MS", cursive;
}
```

Diese Regel setzt verschiedene Eigenschaften der Schrift und macht alle Absätze kursiv.

Die Schriftgröße wird auf drei Viertel der Größe jedes Absatzelements gesetzt und die Zeilenhöhe wird auf 125% (ein wenig größer als normal) gesetzt.

Die Art der Schrift wird auf auf Comic Sans MS gesetzt. Wenn aber die Schriftart im Webbrowser nicht verfügbar ist, wird die standardmäßig kursiv (handgeschriebene) Art verwendet.

Diese Regel hat den Nebeneffekt, dass alle dicken und kleinen Anfangsbuchstaben auf `normal` zurückgesetzt werden.

### Schriftarten

Sie können nicht vorhersagen welche Schriftarten der Leser Ihres Dokument installiert hat. Deshalb ist es eine gute Idee eine Liste von Alternativen in bevorzugter Reihenfolge anzugeben.

Beenden Sie die Liste mit einer eingebauten Standardschriftart: `serif`, `sans-serif`, `cursive`, `fantasy` oder `monospace`.

Wenn die Schriftart ein Feature des Dokuments nicht unterstützt, kann der Webbrowser eine andere Schriftart dafür auswählen. Das Dokument könnte zum Beispiel spezielle Zeichen enthalten, die von der Schriftart nicht unterstützt werden. Wenn der Webbrowser eine andere Schriftart finden kann, die diese Zeichen unterstützt, verwendet er diese.

Um nur Schriftart anzugeben, können Sie die {{ cssxref("font-family") }} Eigenschaft verwenden.

### Schriftgrößen

Benutzer des Webbrowsers können die standardmäßige Schriftgröße überschreiben oder die Textgröße während dem Lesen ändern. Deshalb macht es überall wo es geht Sinn eine relative Größe zu verwenden.

Sie können die bereits vordefinierten Werte wie `small`, `medium` und `large` verwenden. Sie können aber auch relative Werte zur Schriftgröße des Elternelements wie `smaller`, `larger`, `150%` oder `1.5em` verwenden. Ein "em" ist äquivalent zu der Breite des Buchstabens "m" (für die Schriftgröße des Elternelements). Damit sind `1.5em` eineinhalb Mal so groß als die Schrift im Elternelement.

Wenn nötig können Sie eine genaue Größe wie `14px` (14 Pixel) für einen Bildschirm oder `14pt` (14 Punkt) für einen Drucker angeben. Das ist aber für Benutzer mit einer Sehbehinderung nicht zugänglich, da sie damit die Schriftgröße nicht mehr ändern können. Eine zugänglichere Strategie wäre, eine bereits vordefinierten Wert wie medium auf dem höchsten Element im Dokument zu setzen und dann relative Größen auf allen Kindelementen zu verwenden.

Um nur die Schriftgröße anzugeben, können Sie die {{ cssxref("font-size") }} Eigenschaft verwenden.

### Zeilenhöhe

Die Zeilenhöhe gibt den Abstand zwischen Zeilen an. Wenn Ihr Dokument lange Absätze über viele Zeilen hat, kann ein größerer Zeilenabstand als normal besonders bei einer kleinen Schriftgröße einfacher zum Lesen zu sein.

Um nur die Zeilenhöhe anzugeben, können Sie die {{ cssxref("line-height") }} Eigenschaft verwenden.

### Textdekoration

Die separate {{ cssxref("text-decoration") }} Eigenschaft kann andere Styles wie `underline` oder `line-through` definieren. Sie können sie auf `none` setzen, um explizit jede Textdekoration zu entfernen.

### Andere Eigenschaften

Um nur kursiv anzugeben, verwenden Sie {{ cssxref("font-style") }}`: italic;`
Um nur fettgedruckt anzugeben, verwenden Sie `{{ cssxref("font-weight") }}: bold;`
Um nur kleine Großbuchstaben anzugeben, verwenden Sie `{{ cssxref("font-variant") }}: small-caps;`

Um eine Eigenschaft einzeln abzuschalten, können Sie den Wert `normal` oder `inherit` angeben.

Mehr Details

Sie können Textstyles auf viele andere Wege angeben.

Einige der hier erwähnten Eigenschaften haben zum Beispiel andere Werte, die Sie auch verwenden können.

Vermeiden Sie in einem komplexen Stylesheet die abgekürzte `font` Eigenschaft, da sie Nebeneffekte hat (setzt andere individuelle Eigenschaften zurück).

Für alle Details von Eigenschaften, die mit Schriften zu tun haben, gehen Sie bitte auf [Fonts](http://www.w3.org/TR/CSS21/fonts.html) in der CSS Spezifikation. Die kompletten Details zur Textdekoration finden Sie unter [Text](http://www.w3.org/TR/CSS21/text.html).

Wenn Sie nicht von den installierten Schriftarten auf dem System des Benutzers abhängig sein wollen, können Sie {{ cssxref("@font-face") }} verwenden, um einen Online Font anzugeben. Dazu muss der Webbrowser des Benutzers diese Regel aber auch unterstützen.

## Aktion: Schriftart angeben

Für ein einfaches Dokument können sie eine Schrift auf dem {{ HTMLElement("body") }} Element angeben und der Rest des Dokuments erbt diese Regel.

1.  Bearbeiten Sie Ihre CSS Datei.
2.  Fügen sie die folgendene Regel hinzu, um die Schrift im gesamten Dokument zu bestimmen. Der Anfang der CSS Datei ist eine logische Stelle dafür, aber es hat auch an anderen Stellen in der Datei denselben Effekt:

        body {
          font: 16px "Comic Sans MS", cursive;
        }

3.  Kommentieren sie Regel und fügen Sie nach Ihrem Geschmak Zeilenumbrüche und Leerzeichen hinzu.
4.  Speichern Sie die Datei und aktualisieren Sie Ihren Webbrowser um die Änderung zu sehen. Wenn Sie die Schrift Comic Sans MS oder eine andere Schrift, welche kursiv nicht unterstützt, auf Ihren Computer haben, wählt Ihr Webbrowser eine andere Schriftart für den kursiven Text in der ersten Zeile aus:

    | **C**ascading **S**tyle **S**heets |
    | ---------------------------------- |
    | **C**ascading **S**tyle **S**heets |

5.  Wählen Sie **Ansicht > Schirftgröße > Vergrößern** (oder **Ansicht > Zoom > Vergrößern**) im Menü Ihres Webbrowsers aus. Obwohl Sie 16 Pixel im Sil angegeben haben, kann der Benutzer die Schriftgröße in der Ansicht ändern.

Herausforderung

Machen Sie alle sechs Anfangsbuchstaben zweimal so groß in der serif Standardschrift vom Webbrowser ohne etwas anderes zu verändern:

| **C**ascading **S**tyle **S**heets |
| ---------------------------------- |
| **C**ascading **S**tyle **S**heets |

Mögliche Lösung

Fügen Sie die folgende Style Deklaration zur `strong` Regel hinzu:

```css
  font: 200% serif;
```

Wenn Sie getrennte Deklarationen für `font-size` und `font-family` verwenden, dann wird die `font-style` Einstellung auf dem ersten Absatz _nicht_ überschrieben.

[Hide solution](#challenge)[Sehen Sie sich die Lösung an.](#tutochallenge "Eine mögliche Lösung für die Herausforderung darstellen")

## Was kommt als Nächstes?

{{nextPage("/de/docs/Web/Guide/CSS/Getting_started/Farbe", "Farbe")}}Ihr Beispieldokument verwendet bereits verschiedene benannte Farben. Der [nächste Teil](/de/docs/Web/Guide/CSS/Getting_Started/Farbe) listet die Namen der Standardfarben auf und erklärt wie Sie eigene Farben definieren können**.**
