---
title: font-family
slug: Web/CSS/font-family
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Schriftarten
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/font-family
---
{{CSSRef}}

## Übersicht

Die `font-family` CSS Eigenschaft erlaubt es, eine priorisierte Liste von Schriftfamiliennamen und/oder generische Familiennamen für ein ausgewähltes Element anzugeben. Im Gegensatz zu den meisten anderen CSS Eigenschaften werden die Werte durch Komma getrennt, um zu kennzeichnen, dass sie Alternativen darstellen. Der Browser wählt die erste Schrift, die auf dem Computer installiert ist oder mittels der Informationen, die über eine {{cssxref("@font-face")}} At-Regel gegeben sind, heruntergeladen werden kann.

Webautoren sollten einer Schriftfamilienliste immer mindestens eine generische Familie hinzufügen, da es keine Garantie dafür gibt, dass eine bestimmte Schriftart auf dem Computer installiert ist oder über die {{cssxref("@font-face")}} At-Regel heruntergeladen werden kann. Die generische Schriftart erlaubt es dem Browser, falls nötig, eine akzeptable Ersatzschriftart auszuwählen.

Es ist oft vorteilhaft, die Kurzform Eigenschaft {{cssxref("font")}} zu verwenden, um `font-size` und andere Schrift bezogene Eigenschaften auf einmal zu setzen.

> **Hinweis:** Die `font-family` Eigenschaft definiert eine Liste von Schriftarten, von der höchsten zur niedrigsten Priorität. Die Auswahl der Schriftart stoppt **nicht** einfach bei der ersten Schriftart in der Liste, die auf dem System des Benutzers installiert ist. Vielmehr findet die Auswahl der Schriftart **pro Zeichen** statt, so dass, falls eine verfügbare Schriftart ein bestimmtes Schriftzeichen nicht definiert, in den übrigen Schriftarten nach diesem Zeichen gesucht wird. Dies funktioniert jedoch nicht im Internet Explorer 6 oder früheren Versionen.
>
> Falls eine Schrift nur in bestimmten [Stilen](/de/docs/Web/CSS/font-style "CSS/font-style"), [Varianten](/de/docs/Web/CSS/font-variant "CSS/font-variant") oder [Größen](/de/docs/Web/CSS/font-size "CSS/font-size") verfügbar ist, können diese Eigenschaften auch beeinflussen, welche Schriftart ausgewählt wird.

{{cssinfo}}

## Syntax

{{csssyntax("/de/docs/Web/CSS/Wertdefinitionssyntax")}}

    font-family: Gill Sans Extrabold, sans-serif
    font-family: "Goudy Bookletter 1911", sans-serif

    font-family: serif
    font-family: sans-serif
    font-family: monospace
    font-family: cursive
    font-family: fantasy

    font-family: inherit

### Werte

- `<family-name>`
  - : Der Name der Schriftfamilie. Zum Beispiel "Times" und "Helvetica" sind Schriftfamilien. Schriftfamiliennamen, die Leerzeichen enthalten, sollten von Anführungszeichen eingeschlossen werden.
- `<generic-name>`

  - : Generische Schriftfamilien dienen als Fallback-Mechanismus, ein Mittel, um etwas von der Absicht des Stylesheet Autors zu erhalten für den Fall, wenn keine der angegebenen Schriftarten verfügbar sind. Generische Familiennamen sind Schlüsselwörter und dürfen nicht in Anführungszeichen eingeschlossen werden. Eine generische Schriftfamilie sollte die letzte Alternative in einer Liste von Schriftfamiliennamen sein.

    - `serif`
      - : Schriftzeichen haben abschließende Striche, ausgeweitete oder zugespitzte Enden oder serifenbetonte Enden.
        Z. B. Palatino, "Palatino Linotype", Palladio, "URW Palladio", serif
    - `sans-serif`
      - : Schriftzeichen haben gerade Strichenden.
        Z. B. 'Trebuchet MS', 'Liberation Sans', 'Nimbus Sans L', sans-serif
    - `monospace`
      - : Alle Schriftzeichen haben die gleiche Breite.
        Z. B. "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace
    - `cursive`
      - : Schriftzeichen in kursiven Schriftarten haben üblicherweise verbindende Striche oder andere kursive Charakteristiken, die über die von kursiven Schriftzügen hinausgehen. Die Schriftzeichen sind teilweise oder ganz verbunden und das Ergebnis ähnelt eher einer Handschrift als gedruckten Lettern.
    - `fantasy`
      - : Fantasie Schriftarten sind überwiegend dekorative Schriftarten, die verspielte Darstellungen von Schriftzeichen beinhalten.

### Gültige Schriftfamiliennamen

Schriftfamiliennamen müssen entweder in Anführungszeichen eingeschlossene Strings sein oder nicht angeführte als eine Aneinanderreihung von einem oder mehreren Bezeichnern. Das heißt dass in nicht angeführten Schriftfamiliennamen Interpunktionszeichen und Ziffern am Anfang jedes Zeichens Maskiert (escaped) werden müssen.

Beispielsweise sind die folgenden Angaben gültig:

    font-family: Gill Sans Extrabold, sans-serif;
    font-family: "Goudy Bookletter 1911", sans-serif;

Die folgenden Angaben sind **ungültig**:

    font-family: Goudy Bookletter 1911, sans-serif;
    font-family: Red/Black, sans-serif;
    font-family: "Lucida" Grande, sans-serif;
    font-family: Ahem!, sans-serif;
    font-family: test@foo, sans-serif;
    font-family: #POUND, sans-serif;
    font-family: Hawaii 5-0, sans-serif;

## Beispiele

### Beispiel 1

    body     { font-family: "Gill Sans Extrabold", Helvetica, sans-serif }

    .receipt { font-family: Courier, "Lucida Console", monospace }

### Beispiel 2

```css
.exampleserif {
    font-family: Times, "Times New Roman", Georgia, serif;
}

.examplesansserif {
    font-family: Verdana, Arial, Helvetica, sans-serif;
}

.examplemonospace {
    font-family: "Lucida Console", Courier, monospace;
}

.examplecursive {
    font-family: cursive;
}

.examplefantasy {
    font-family: fantasy;
}
```

```html
<div class="exampleserif">
Dies ist ein Beispiel für eine Serifenschrift.
</div>

<div class="examplesansserif">
Dies ist ein Beispiel für eine serifenlose Schrift.
</div>

<div class="examplemonospace">
Dies ist ein Beispiel für eine nicht-proportionale Schrift.
</div>

<div class="examplecursive">
Dies ist ein Beispiel für eine kursive Schrift.
</div>

<div class="examplefantasy">
Dies ist ein Beispiel für eine Fantasieschrift.
</div>
```

#### Live Beispiel

{{ EmbedLiveSample('Beispiel_2','600','120') }}

## Spezifikation

| Spezifikation                                                                                    | Status                           | Kommentar                     |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------- |
| {{SpecName('CSS3 Fonts', '#font-family-prop', 'font-family')}}             | {{Spec2('CSS3 Fonts')}} | Keine wesentlichen Änderungen |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-family', 'font-family')}} | {{Spec2('CSS2.1')}}         | Keine wesentlichen Änderungen |
| {{SpecName('CSS1', '#font-family', 'font-familiy')}}                             | {{Spec2('CSS1')}}         |                               |

## Browser Kompatibilität

{{Compat("css.properties.font-family")}}
