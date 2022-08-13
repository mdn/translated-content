---
title: font-weight
slug: Web/CSS/font-weight
translation_of: Web/CSS/font-weight
---
{{CSSRef}}

## Übersicht

Die [CSS](/de/docs/CSS "CSS")-Eigenschaft {{Cssxref("font-weight")}} definiert die Stärke der Schrift. Einige Schriftarten sind jedoch nicht in allen Werten verfügbar und unterstützen nur die Werte `normal` und `bold`.

{{cssinfo}}

## Syntax

    Formal syntax: {{csssyntax("font-weight")}}

<!---->

    font-weight: normal
    font-weight: bold

    font-weight: lighter
    font-weight: bolder

    font-weight: 100
    font-weight: 200
    font-weight: 300
    font-weight: 400
    font-weight: 500
    font-weight: 600
    font-weight: 700
    font-weight: 800
    font-weight: 900

    font-weight: inherit

### Werte

- `normal`
  - : Normale Stärke, entspricht `400`.
- `bold`
  - : Fette Schrift, entspricht `700`.
- `lighter`
  - : Eine Stufe dünner als das Elternelement (siehe [Die Bedeutung relativer Angaben](#relative_angaben) unten).
- `bolder`
  - : Eine Stufe fetter als das Elternelement (siehe [Die Bedeutung relativer Angaben](#relative_angaben) unten).
- `<number>`
  - : Eine Zahl ({{cssxref("&lt;number&gt;")}}) zwischen 1 und 1000 (einschließlich). Größere Werte stehen für eine fettere oder gleich fette Darstellung als kleinere Werte.

Frühere Spezifikationen erlaubten für `font-weight` nur die Schlüsselworte sowie die Werte 100 bis 1000 in Hunderterschritten. Nicht-variable Schriftarten können nur mit diesen Werten arbeiten, feinere Abstimmungen werden jedoch mit den festgelegten Werte angenähert.

Die Spezifikation CSS Fonts Level 4 nimmt variable Schriftarten im Format TrueType und OpenType auf. Mit diesen sind grundsätzlich beliebig feine Abstimmungen möglich.

### Näherungsverfahren

Ist die gewählte Stärke nicht verfügbar, bestimmen die nachfolgenden Schritte die Darstellung:

- Liegt die gewünschte Stärke zwischen 400 und 500 (einschließlich):

  1.  Verwende die erste Stärke, die größer als die gewünschte, aber kleiner als 500 ist.
  2.  Ist keine verfügbar, verwende die erste Stärke die kleiner als die gewünschte ist.
  3.  Ist keine verfügbar, verwende die erste Stärke größer als 500.

- Liegt die gewünschte Stärke unter 400, verwende die erste Stärke kleiner als die gewünschte. Ist keine verfügbar, verwende die erste Stärke größer als die gewünschte.
- Liegt die gewünschte Stärke über 500, verwende die erste Stärke größer als die gewünschte. Ist keine verfügbar, verwende die erste Stärke kleiner als die gewünschte.

### Die Bedeutung relativer Angaben

Bei der Angabe von `lighter` und `bolder` bestimmt die nachfolgende Tabelle die tatsächliche Schriftstärke. Zu beachten ist, dass hierbei nur vier Abstufungen verfügbar sind, fein (100), normal (400), fett (700) und schwarz (900).

| Gegeben | `bolder` | `lighter` |
| ------- | -------- | --------- |
| 100     | 400      | 100       |
| 200     | 400      | 100       |
| 300     | 400      | 100       |
| 400     | 700      | 100       |
| 500     | 700      | 100       |
| 600     | 900      | 400       |
| 700     | 900      | 400       |
| 800     | 900      | 700       |
| 900     | 900      | 700       |

### Zuordnung von Namen und Werten

Die Werte 100 bis 900 entsprechen ungefähr den nachfolgenden Bezeichnungen (siehe [OpenType-Spezifikation](https://docs.microsoft.com/en-us/typography/opentype/spec/os2#usweightclass) und [Wikipedia-Artikel zur Schriftstärke](https://de.wikipedia.org/wiki/Schriftschnitt#Variation_der_Schriftst%C3%A4rke)):

| Wert | Deutsch      | Englisch                  |
| ---- | ------------ | ------------------------- |
| 100  | fein         | Thin (Hairline)           |
| 200  | extraleicht  | Extra Light (Ultra Light) |
| 300  | leicht       | Light                     |
| 400  | normal       | Normal (Regular)          |
| 500  | medium       | Medium                    |
| 600  | halbfett     | Semi Bold (Demi Bold)     |
| 700  | fett         | Bold                      |
| 800  | extrafett    | Extra Bold (Ultra Bold)   |
| 900  | schwarz      | Black (Heavy)             |
| 950  | extraschwarz | Extra Black (Ultra Black) |

### Variable Schriftarten

Die meisten Schriftarten stellen nur einige festgelegte Breiten zur Verfügung. Variable Schriftarten unterstützen hingegen eine Vielzahl von Breiten in mehr oder weniger feiner Abstufung.

Bei variablen Schriftarten vom Typ TrueType und OpenType korrespondiert deren Eigenschaft "wght" mit der CSS-Eigenschaft `font-weight` und wird von Browsern – sofern unterstützt – entsprechend eingesetzt.

## Beispiel

```html
<p>
  Alice fing an sich zu langweilen; sie saß schon
  lange bei ihrer Schwester am Ufer und hatte nichts
  zu tun. Das Buch, das ihre Schwester las, gefiel
  ihr nicht, denn es waren weder Bilder noch Gespräche
  darin. »Und was nützen Bücher,« dachte Alice,
  »ohne Bilder und Gespräche?«
</p>

<div>Ich bin breiter.<br/>
  <span>Ich bin schmaler.</span>
</div>
```

```css
/* Absatz soll breiter sein. */
p {
  font-weight: bold;
}

/* Der Text im div soll zwei Schritte breiter
   als normal sein, aber nicht so breit wie
   ein normales breit (bold). */
div {
 font-weight: 600;
}

/* Der Text im span soll einen Schritt schmaler
   sein als jener seines Elternelements. */
span {
  font-weight: lighter;
}
```

{{EmbedLiveSample("Beispiele","400","300")}}

## Spezifikation

| Spezifikation                                                                                    | Status                                   | Anmerkung                    |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------- |
| {{SpecName('CSS3 Fonts', '#font-weight-prop', 'font-weight')}}             | {{Spec2('CSS3 Fonts')}}         | Keine Änderung               |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'font-weight')}}         | {{Spec2('CSS3 Transitions')}} | `font-weight` ist animierbar |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-weight', 'font-weight')}} | {{Spec2('CSS2.1')}}                 | Keine Änderung               |
| {{SpecName('CSS1', '#font-weight', 'font-weight')}}                             | {{Spec2('CSS1')}}                 |                              |

## Browserkompatibilität

{{Compat("css.properties.font-weight")}}
