---
title: <math>
slug: Web/MathML/Element/math
tags:
  - MathML
  - MathML:Element
  - Referenz
translation_of: Web/MathML/Element/math
---
{{MathMLRef}}

`<math>` ist das Wurzel-Element der MathML-Auszeichnungssprache . Jeder MathML-Kode, der gültig sein soll, muss in `<math>`-Tags eingeschlossen sein. Ein `<math>`-Element darf kein weiteres `<math>`-Element, aber beliebig viele andere (MathML-)Kind-Elemente enthalten.

## Attribute

Zusätzlich zu den folgenden Attributen akzeptiert das `<math>`-Element auch alle Attribute des {{ MathMLElement("mstyle") }}-Elements.

- class, id, style
  - : Zur Einbindung von [CSS-Stylesheets](/de/docs/Web/CSS) und zur direkten Anwendung von CSS-Angaben auf einzelne Elemente.
- dir
  - : Allgemeine Schreibrichtung für die Formeln. Mögliche Werte sind `ltr` (left to right, von links nach rechts) und `rtl` (right to left, von rechts nach links).
- href
  - : Mit diesem Attribut kann ein Link gesetzt werden.
- mathbackground
  - : Die Hintergrundfarbe. Folgende Notationen sind erlaubt: [`#rgb`](</de/docs/Web/CSS/Farben#rgb()>), [`#rrggbb`](</de/docs/Web/CSS/Farben#rgb()>) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- mathcolor
  - : Die Textfarbe. Folgende Notationen sind erlaubt: [`#rgb`](</de/docs/Web/CSS/Farben#rgb()>), [`#rrggbb`](</de/docs/Web/CSS/Farben#rgb()>) und [HTML-Farbnamen](/de/docs/Web/CSS/Farben#Werte).
- display
  - : Dieses Attribut bestimmt, wie das MathML-Element dargestellt wird. Zwei Werte sind möglich:\* `block`, das Element wird auf der Seite als eigener Block dargestellt, kann weitgehend frei positioniert werden und ist mit dem Text inhaltlich nur lose verbunden.
    - `inline`, das Element wird innerhalb des laufenden Textes dargestellt. Es ist eng mit dem Text verknüpft und kann nicht herausgelöst werden ohne die Bedeutung des Textes zu verändern. `inline` ist der Vorgabewert.
- mode {{deprecated_inline}}
  - : Veraltet und durch das [](/de/docs/MathML/Element/math#attr-display)[display](#display)-Attribut ersetzt. Mögliche Werte sind: `display` (hat den gleichen Effekt wie `display="block"`) und `inline`.
- overflow
  - : Bestimmt, wie sich der mathematische Ausdruck verhält, wenn er breiter ist als die erlaubte Breite des Elements. Mögliche Werte sind: `linebreak` (Standard), `scroll`, `elide`, `truncate`, `scale`.

## Beispiele

![Theorem of Pythagoras](/files/3157/math.jpg)

### HTML5-Schreibweise

```html
<!DOCTYPE html>
<html>
  <head>
    <title>MathML in HTML5</title>
  </head>
  <body>

  <math>
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

  </body>
</html>
```

### XHTML-Schreibweise

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN" "http://www.w3.org/Math/DTD/mathml2/xhtml-math11-f.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 <title>MathML in XHTML</title>
</head>
<body>

  <math xmlns="http://www.w3.org/1998/Math/MathML">
    <mrow>
      <mrow>
        <msup>
          <mi>a</mi>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <msup>
          <mi>b</mi>
          <mn>2</mn>
        </msup>
      </mrow>
      <mo>=</mo>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>

</body>
</html>
```

**Hinweis**: XHTML-Dokumente mit MathML müssen vom Server als `application/xhtml+xml` ausgliefert werden. Das kannst Du einfach erreichen, indem Du Deinen lokalen Dateien die Endung `.xhtml` gibst. Beim Apache-Webserver kannst Du entsprechend die[ `.htaccess-Datei konfigurieren`](http://httpd.apache.org/docs/current/mod/mod_mime.html#addtype), so dass die Dateiendung dem korrekten Mime type zugeordnet wird. Achte in diesem Fall auch darauf, dass die XML-Datei wohlgeformt ist, d.h. den grundsätzlichen Anforderungen an die Formatierung einer XML-Datei genügt.

## Spezifikationen

| Standard                                                                                                             | Status                       | Bemerkung             |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{ SpecName('MathML3', 'chapter2.html#interf.toplevel', 'The Top-Level math Element') }} | {{ Spec2('MathML3') }} | Current specification |
| {{ SpecName('MathML2', 'chapter7.html#interf.toplevel', 'The Top-Level math Element') }} | {{ Spec2('MathML2') }} | Initial specification |

## Browserkompatibilität

{{Compat}}

\[1] Siehe [bug 85733](https://bugs.webkit.org/show_bug.cgi?id=85733).

## Hinweise zur Gecko

Die Gecko Rendering Engine unterstützt seit Version 7.0 {{ geckoRelease("7.0") }} die Verwendung von MathML-Attributen auf das `<math>`-Element (und hat damit das gleiche Verhalten wie das {{ MathMLElement("mstyle") }}-Element). Das `displaystyle`-Attribute wurde allerdings erst in Gecko 8.0 {{ geckoRelease("8.0") }} ergänzt. [Siehe bug 669719](https://bugzilla.mozilla.org/show_bug.cgi?id=669719).

Weder Alternativer Text (`alttext`) noch der Verweis auf eine alternative Grafik mit den Attributen `altimg`, `altimg-width`, `altimg-height` oder `altimg-valign` sind in Gecko gegenwärtig implemtiert.

## Siehe auch

- HTML-Wurzelelement: {{ HTMLElement("html") }}
- SVG-Wurzelelement: {{ SVGElement("svg") }}
- MathML-Browsertest: For [XHTML](https://www.eyeasme.com/Joe/MathML/MathML_browser_test) and [HTML5](https://eyeasme.com/Joe/MathML/HTML5_MathML_browser_test)
