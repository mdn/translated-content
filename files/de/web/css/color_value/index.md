---
title: <color>
slug: Web/CSS/color_value
tags:
  - CSS
  - CSS Datentyp
  - Layout
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Referenz
  - Web
translation_of: Web/CSS/color_value
original_slug: Web/CSS/Farben
---
{{CSSRef}}

Der [CSS](/de/docs/Web/CSS) Datentyp beschreibt eine Farbe im [sRGB Farbraum](http://de.wikipedia.org/wiki/SRGB). Eine Farbe kann auf eine dieser Arten beschrieben werden:

- durch Benutzung eines _Schlüsselworts_
- durch Benutzung des [kubischen RGB Koordinatensystems](https://de.wikipedia.org/wiki/RGB-Farbraum) (durch #-hexadezimal oder die funktionalen Schreibweisen `rgb()` und `rgba()`)
- durch Benutzung des [zylindrischen HSL Koordinatensystems](https://de.wikipedia.org/wiki/HSV-Farbraum) (durch die funktionalen Schreibweisen `hsl()` und `hsla()`)

Beachte, dass die Liste an akzeptierten Farbwerten durch weiterentwickelte Spezifikationen erweitert wurde bis hin zu den neuesten CSS3 Farben.

In Verbindung mit einer Farbe im sRGB Raum besteht ein `<color>`-Wert auch aus einer [Alphakanal](https://de.wikipedia.org/wiki/Alpha_Blending)-Koordinate, einem _Transparenzwert_, der angibt, wie die Farbe mit der Hintergrundfarbe [vermischt](http://www.w3.org/TR/2003/REC-SVG11-20030114/masking.html#SimpleAlphaBlending) wird

Obwohl CSS Farbwerte genau definiert sind, können sie auf verschiedenen Ausgabegeräten unterschiedlich dargestellt werden. Die meisten davon sind nicht kalibriert und manche Browser unterstützen nicht das [Farbprofil](https://de.wikipedia.org/wiki/ICC-Profil) des Ausgabegeräts. Ohne diese kann die Farbdarstellung stark variieren.

> **Hinweis:** Die [WCAG 2.0](http://www.w3.org/TR/WCAG/#visual-audio-contrast) Empfehlung des W3C rät Webauthoren ausdrücklich dazu, _Farben_ nicht als einziges Mittel zur Vermittlung einer bestimmten Information, Aktion oder einem Ergebnis zu verwenden. Manche Benutzer haben Probleme, Farben zu unterscheiden, was das Verständnis der übermittelten Information verhindert. Natürlich verhindert das nicht die Benutzung von Farbe, nur deren Benutzung als einziges Mittel eine Information zu beschreiben.

## Interpolation

Werte des `<color>` CSS Datentyps können für Animationen und zur Erstellung von {{cssxref("gradient", "&lt;gradient&gt;")}} Werten interpoliert werden. In diesem Fall werden ihre Rot-, Grün- und Blau-Komponenten als eine reale Fließkommazahl interpoliert. Beachte, dass die Interpolation von Farben innerhalb des [alpha-vormultiplizierten sRGBA-Farbraums](http://www.gimp.org/docs/plug-in/appendix-alpha.html) stattfindet, um unerwartete Grautöne zu verhindern. In Animationen wird die Geschwindigkeit der Interlolation durch die zur Animation gehörenden [Timing-Funktion](/de/docs/Web/CSS/timing-function) bestimmt.

## Werte

Es gibt mehrere Arten, wie ein `<color>` Wert beschrieben werden kann.

### Farbschlüsselwörter

Farbschlüsselwörter sind schreibungsunabhängige Bezeichner, welche eine bestimmte Farbe repräsentieren, z. B. `red`, `blue`, `brown`, `lightseagreen`. Der Name beschreibt die Farbe, er ist jedoch meist erfunden. Die Liste an akzeptierten Werten variiert sehr zwischen den Spezifikationen:

- CSS Level 1 akzeptierte nur 16 Grundfarben, bekannt als _VGA-Farben_, weil sie aus der Menge an darstellbaren Farben von [VGA](http://de.wikipedia.org/wiki/VGA)-Grafikkarten stammen.
- CSS Level 2 fügte das `orange`-Schlüsselwort hinzu.
- Von Anfang an haben Browser weitere Farben akzeptiert, meist die X11 genannte Farbliste, da einige frühere Browser X11-basierte Anwendungen waren, allerdings mit einigen Unterschieden. SVG 1.0 war der erste Standard, der diese Schlüsselwörter formal definiert hat; CSS Colors Level 3 hat diese Schlüsselwörter ebenfalls formal definiert. Sie werden oft als _erweiterte Farbschlüsselwörter_, _X11 Farben_ oder _SVG Farben_ bezeichnet.

Es gibt ein paar Dinge bei der Verwendung von Farbschlüsselwörtern zu beachten:

- Außer den 16 Grundfarben, die HTML gemein hat, können keine anderen Farben in HTML verwendet werden. HTML konvertiert diese unbekannten Werte mit einem bestimmten Algorithmus, was zu komplett unterschiedlichen Farben führt. Diese Schlüsselwörter sollten ausschließlich in SVG & CSS verwendet werden.
- Unknown keywords make the CSS property invalid. Invalid properties being ignored, the color will have no effect. This is a different behavior than the one of HTML.
- Keine als Schlüsselwort definierten Farben haben in CSS eine Transparenz. Sie sind klare, undurchsichtige Farben.
- Verschiedene Schlüsselwörter kennzeichnen die gleiche Farbe:

  - `darkgray` / `darkgrey`
  - `darkslategray` / `darkslategrey`
  - `dimgray` / `dimgrey`
  - `lightgray` / `lightgrey`
  - `lightslategray` / `lightslategrey`
  - `gray` / `grey`
  - `slategray` / `slategrey`

- Obwohl die Namen der Schlüsselwörter von den gewöhnlichen X11-Farbnamen stammen, können die Farben von den entsprechenden Systemfarben im X11-System abweichen, da sie auf die spezielle Hardware der Hersteller zugeschnitten sind.

<table>
  <thead>
    <tr>
      <th scope="col">Spezifikation</th>
      <th scope="col">Farbe</th>
      <th scope="col">Schlüsselwort</th>
      <th scope="col">RGB Hexwerte</th>
      <th scope="col">Vorschau</th>
    </tr>
  </thead>
  <tbody>
    <tr style="position: relative">
      <td rowspan="16">{{SpecName("CSS1")}}</td>
      <td style="background: #000"></td>
      <td style="text-align: center"><code>black</code></td>
      <td><code>#000000</code></td>
      <td style="background: black"></td>
    </tr>
    <tr>
      <td style="background: #c0c0c0"></td>
      <td style="text-align: center"><code>silver</code></td>
      <td><code>#c0c0c0</code></td>
      <td style="background: silver"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>gray</code></td>
      <td><code>#808080</code></td>
      <td style="background: gray"></td>
    </tr>
    <tr>
      <td style="background: #fff"></td>
      <td style="text-align: center"><code>white</code></td>
      <td><code>#ffffff</code></td>
      <td style="background: white"></td>
    </tr>
    <tr>
      <td style="background: #800000"></td>
      <td style="text-align: center"><code>maroon</code></td>
      <td><code>#800000</code></td>
      <td style="background: maroon"></td>
    </tr>
    <tr>
      <td style="background: #f00"></td>
      <td style="text-align: center"><code>red</code></td>
      <td><code>#ff0000</code></td>
      <td style="background: red"></td>
    </tr>
    <tr>
      <td style="background: #800080"></td>
      <td style="text-align: center"><code>purple</code></td>
      <td><code>#800080</code></td>
      <td style="background: purple"></td>
    </tr>
    <tr>
      <td style="background: #f0f"></td>
      <td style="text-align: center"><code>fuchsia</code></td>
      <td><code>#ff00ff</code></td>
      <td style="background: fuchsia"></td>
    </tr>
    <tr>
      <td style="background: #008000"></td>
      <td style="text-align: center"><code>green</code></td>
      <td><code>#008000</code></td>
      <td style="background: green"></td>
    </tr>
    <tr>
      <td style="background: #0f0"></td>
      <td style="text-align: center"><code>lime</code></td>
      <td><code>#00ff00</code></td>
      <td style="background: lime"></td>
    </tr>
    <tr>
      <td style="background: #808000"></td>
      <td style="text-align: center"><code>olive</code></td>
      <td><code>#808000</code></td>
      <td style="background: olive"></td>
    </tr>
    <tr>
      <td style="background: #ff0"></td>
      <td style="text-align: center"><code>yellow</code></td>
      <td><code>#ffff00</code></td>
      <td style="background: yellow"></td>
    </tr>
    <tr>
      <td style="background: #000080"></td>
      <td style="text-align: center"><code>navy</code></td>
      <td><code>#000080</code></td>
      <td style="background: navy"></td>
    </tr>
    <tr>
      <td style="background: #00f"></td>
      <td style="text-align: center"><code>blue</code></td>
      <td><code>#0000ff</code></td>
      <td style="background: blue"></td>
    </tr>
    <tr>
      <td style="background: #008080"></td>
      <td style="text-align: center"><code>teal</code></td>
      <td><code>#008080</code></td>
      <td style="background: teal"></td>
    </tr>
    <tr>
      <td style="background: #0ff"></td>
      <td style="text-align: center"><code>aqua</code></td>
      <td><code>#00ffff</code></td>
      <td style="background: aqua"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td style="background: #ffa500"></td>
      <td style="text-align: center"><code>orange</code></td>
      <td><code>#ffa500</code></td>
      <td style="background: orange"></td>
    </tr>
    <tr>
      <td rowspan="128">{{SpecName("CSS3 Colors")}}</td>
      <td style="background: #f0f8ff"></td>
      <td style="text-align: center"><code>aliceblue</code></td>
      <td><code>#f0f8ff</code></td>
      <td style="background: aliceblue"></td>
    </tr>
    <tr>
      <td style="background: #faebd7"></td>
      <td style="text-align: center"><code>antiquewhite</code></td>
      <td><code>#faebd7</code></td>
      <td style="background: antiquewhite"></td>
    </tr>
    <tr>
      <td style="background: #7fffd4"></td>
      <td style="text-align: center"><code>aquamarine</code></td>
      <td><code>#7fffd4</code></td>
      <td style="background: aquamarine"></td>
    </tr>
    <tr>
      <td style="background: #f0ffff"></td>
      <td style="text-align: center"><code>azure</code></td>
      <td><code>#f0ffff</code></td>
      <td style="background: azure"></td>
    </tr>
    <tr>
      <td style="background: #f5f5dc"></td>
      <td style="text-align: center"><code>beige</code></td>
      <td><code>#f5f5dc</code></td>
      <td style="background: beige"></td>
    </tr>
    <tr>
      <td style="background: #ffe4c4"></td>
      <td style="text-align: center"><code>bisque</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: bisque"></td>
    </tr>
    <tr>
      <td style="background: #ffebcd"></td>
      <td style="text-align: center"><code>blanchedalmond</code></td>
      <td><code>#ffe4c4</code></td>
      <td style="background: blanchedalmond"></td>
    </tr>
    <tr>
      <td style="background: #8a2be2"></td>
      <td style="text-align: center"><code>blueviolet</code></td>
      <td><code>#8a2be2</code></td>
      <td style="background: blueviolet"></td>
    </tr>
    <tr>
      <td style="background: #a52a2a"></td>
      <td style="text-align: center"><code>brown</code></td>
      <td><code>#a52a2a</code></td>
      <td style="background: brown"></td>
    </tr>
    <tr>
      <td style="background: #deb887"></td>
      <td style="text-align: center"><code>burlywood</code></td>
      <td><code>#deb887</code></td>
      <td style="background: burlywood"></td>
    </tr>
    <tr>
      <td style="background: #5f9ea0"></td>
      <td style="text-align: center"><code>cadetblue</code></td>
      <td><code>#5f9ea0</code></td>
      <td style="background: cadetblue"></td>
    </tr>
    <tr>
      <td style="background: #7fff00"></td>
      <td style="text-align: center"><code>chartreuse</code></td>
      <td><code>#7fff00</code></td>
      <td style="background: chartreuse"></td>
    </tr>
    <tr>
      <td style="background: #d2691e"></td>
      <td style="text-align: center"><code>chocolate</code></td>
      <td><code>#d2691e</code></td>
      <td style="background: chocolate"></td>
    </tr>
    <tr>
      <td style="background: #ff7f50"></td>
      <td style="text-align: center"><code>coral</code></td>
      <td><code>#ff7f50</code></td>
      <td style="background: coral"></td>
    </tr>
    <tr>
      <td style="background: #6495ed"></td>
      <td style="text-align: center"><code>cornflowerblue</code></td>
      <td><code>#6495ed</code></td>
      <td style="background: cornflowerblue"></td>
    </tr>
    <tr>
      <td style="background: #fff8dc"></td>
      <td style="text-align: center"><code>cornsilk</code></td>
      <td><code>#fff8dc</code></td>
      <td style="background: cornsilk"></td>
    </tr>
    <tr>
      <td style="background: #dc143c"></td>
      <td style="text-align: center"><code>crimson</code></td>
      <td><code>#dc143c</code></td>
      <td style="background: crimson"></td>
    </tr>
    <tr>
      <td style="background: #00008b"></td>
      <td style="text-align: center"><code>darkblue</code></td>
      <td><code>#00008b</code></td>
      <td style="background: darkblue"></td>
    </tr>
    <tr>
      <td style="background: #008b8b"></td>
      <td style="text-align: center"><code>darkcyan</code></td>
      <td><code>#008b8b</code></td>
      <td style="background: darkcyan"></td>
    </tr>
    <tr>
      <td style="background: #b8860b"></td>
      <td style="text-align: center"><code>darkgoldenrod</code></td>
      <td><code>#b8860b</code></td>
      <td style="background: darkgoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgray</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgray"></td>
    </tr>
    <tr>
      <td style="background: #006400"></td>
      <td style="text-align: center"><code>darkgreen</code></td>
      <td><code>#006400</code></td>
      <td style="background: darkgreen"></td>
    </tr>
    <tr>
      <td style="background: #a9a9a9"></td>
      <td style="text-align: center"><code>darkgrey</code></td>
      <td><code>#a9a9a9</code></td>
      <td style="background: darkgrey"></td>
    </tr>
    <tr>
      <td style="background: #bdb76b"></td>
      <td style="text-align: center"><code>darkkhaki</code></td>
      <td><code>#bdb76b</code></td>
      <td style="background: darkkhaki"></td>
    </tr>
    <tr>
      <td style="background: #8b008b"></td>
      <td style="text-align: center"><code>darkmagenta</code></td>
      <td><code>#8b008b</code></td>
      <td style="background: darkmagenta"></td>
    </tr>
    <tr>
      <td style="background: #556b2f"></td>
      <td style="text-align: center"><code>darkolivegreen</code></td>
      <td><code>#556b2f</code></td>
      <td style="background: darkolivegreen"></td>
    </tr>
    <tr>
      <td style="background: #ff8c00"></td>
      <td style="text-align: center"><code>darkorange</code></td>
      <td><code>#ff8c00</code></td>
      <td style="background: darkorange"></td>
    </tr>
    <tr>
      <td style="background: #9932cc"></td>
      <td style="text-align: center"><code>darkorchid</code></td>
      <td><code>#9932cc</code></td>
      <td style="background: darkorchid"></td>
    </tr>
    <tr>
      <td style="background: #8b0000"></td>
      <td style="text-align: center"><code>darkred</code></td>
      <td><code>#8b0000</code></td>
      <td style="background: darkred"></td>
    </tr>
    <tr>
      <td style="background: #e9967a"></td>
      <td style="text-align: center"><code>darksalmon</code></td>
      <td><code>#e9967a</code></td>
      <td style="background: darksalmon"></td>
    </tr>
    <tr>
      <td style="background: #8fbc8f"></td>
      <td style="text-align: center"><code>darkseagreen</code></td>
      <td><code>#8fbc8f</code></td>
      <td style="background: darkseagreen"></td>
    </tr>
    <tr>
      <td style="background: #483d8b"></td>
      <td style="text-align: center"><code>darkslateblue</code></td>
      <td><code>#483d8b</code></td>
      <td style="background: darkslateblue"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategray</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategray"></td>
    </tr>
    <tr>
      <td style="background: #2f4f4f"></td>
      <td style="text-align: center"><code>darkslategrey</code></td>
      <td><code>#2f4f4f</code></td>
      <td style="background: darkslategrey"></td>
    </tr>
    <tr>
      <td style="background: #00ced1"></td>
      <td style="text-align: center"><code>darkturquoise</code></td>
      <td><code>#00ced1</code></td>
      <td style="background: darkturquoise"></td>
    </tr>
    <tr>
      <td style="background: #9400d3"></td>
      <td style="text-align: center"><code>darkviolet</code></td>
      <td><code>#9400d3</code></td>
      <td style="background: darkviolet"></td>
    </tr>
    <tr>
      <td style="background: #ff1493"></td>
      <td style="text-align: center"><code>deeppink</code></td>
      <td><code>#ff1493</code></td>
      <td style="background: deeppink"></td>
    </tr>
    <tr>
      <td style="background: #00bfff"></td>
      <td style="text-align: center"><code>deepskyblue</code></td>
      <td><code>#00bfff</code></td>
      <td style="background: deepskyblue"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgray</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgray"></td>
    </tr>
    <tr>
      <td style="background: #696969"></td>
      <td style="text-align: center"><code>dimgrey</code></td>
      <td><code>#696969</code></td>
      <td style="background: dimgrey"></td>
    </tr>
    <tr>
      <td style="background: #1e90ff"></td>
      <td style="text-align: center"><code>dodgerblue</code></td>
      <td><code>#1e90ff</code></td>
      <td style="background: dodgerblue"></td>
    </tr>
    <tr>
      <td style="background: #b22222"></td>
      <td style="text-align: center"><code>firebrick</code></td>
      <td><code>#b22222</code></td>
      <td style="background: firebrick"></td>
    </tr>
    <tr>
      <td style="background: #fffaf0"></td>
      <td style="text-align: center"><code>floralwhite</code></td>
      <td><code>#fffaf0</code></td>
      <td style="background: floralwhite"></td>
    </tr>
    <tr>
      <td style="background: #228b22"></td>
      <td style="text-align: center"><code>forestgreen</code></td>
      <td><code>#228b22</code></td>
      <td style="background: forestgreen"></td>
    </tr>
    <tr>
      <td style="background: #dcdcdc"></td>
      <td style="text-align: center"><code>gainsboro</code></td>
      <td><code>#dcdcdc</code></td>
      <td style="background: gainsboro"></td>
    </tr>
    <tr>
      <td style="background: #f8f8ff"></td>
      <td style="text-align: center"><code>ghostwhite</code></td>
      <td><code>#f8f8ff</code></td>
      <td style="background: ghostwhite"></td>
    </tr>
    <tr>
      <td style="background: #ffd700"></td>
      <td style="text-align: center"><code>gold</code></td>
      <td><code>#ffd700</code></td>
      <td style="background: gold"></td>
    </tr>
    <tr>
      <td style="background: #daa520"></td>
      <td style="text-align: center"><code>goldenrod</code></td>
      <td><code>#daa520</code></td>
      <td style="background: goldenrod"></td>
    </tr>
    <tr>
      <td style="background: #adff2f"></td>
      <td style="text-align: center"><code>greenyellow</code></td>
      <td><code>#adff2f</code></td>
      <td style="background: greenyellow"></td>
    </tr>
    <tr>
      <td style="background: #808080"></td>
      <td style="text-align: center"><code>grey</code></td>
      <td><code>#808080</code></td>
      <td style="background: grey"></td>
    </tr>
    <tr>
      <td style="background: #f0fff0"></td>
      <td style="text-align: center"><code>honeydew</code></td>
      <td><code>#f0fff0</code></td>
      <td style="background: honeydew"></td>
    </tr>
    <tr>
      <td style="background: #ff69b4"></td>
      <td style="text-align: center"><code>hotpink</code></td>
      <td><code>#ff69b4</code></td>
      <td style="background: hotpink"></td>
    </tr>
    <tr>
      <td style="background: #cd5c5c"></td>
      <td style="text-align: center"><code>indianred</code></td>
      <td><code>#cd5c5c</code></td>
      <td style="background: indianred"></td>
    </tr>
    <tr>
      <td style="background: #4b0082"></td>
      <td style="text-align: center"><code>indigo</code></td>
      <td><code>#4b0082</code></td>
      <td style="background: indigo"></td>
    </tr>
    <tr>
      <td style="background: #fffff0"></td>
      <td style="text-align: center"><code>ivory</code></td>
      <td><code>#fffff0</code></td>
      <td style="background: ivory"></td>
    </tr>
    <tr>
      <td style="background: #f0e68c"></td>
      <td style="text-align: center"><code>khaki</code></td>
      <td><code>#f0e68c</code></td>
      <td style="background: khaki"></td>
    </tr>
    <tr>
      <td style="background: #e6e6fa"></td>
      <td style="text-align: center"><code>lavender</code></td>
      <td><code>#e6e6fa</code></td>
      <td style="background: lavender"></td>
    </tr>
    <tr>
      <td style="background: #fff0f5"></td>
      <td style="text-align: center"><code>lavenderblush</code></td>
      <td><code>#fff0f5</code></td>
      <td style="background: lavenderblush"></td>
    </tr>
    <tr>
      <td style="background: #7cfc00"></td>
      <td style="text-align: center"><code>lawngreen</code></td>
      <td><code>#7cfc00</code></td>
      <td style="background: lawngreen"></td>
    </tr>
    <tr>
      <td style="background: #fffacd"></td>
      <td style="text-align: center"><code>lemonchiffon</code></td>
      <td><code>#fffacd</code></td>
      <td style="background: lemonchiffon"></td>
    </tr>
    <tr>
      <td style="background: #add8e6"></td>
      <td style="text-align: center"><code>lightblue</code></td>
      <td><code>#add8e6</code></td>
      <td style="background: lightblue"></td>
    </tr>
    <tr>
      <td style="background: #f08080"></td>
      <td style="text-align: center"><code>lightcoral</code></td>
      <td><code>#f08080</code></td>
      <td style="background: lightcoral"></td>
    </tr>
    <tr>
      <td style="background: #e0ffff"></td>
      <td style="text-align: center"><code>lightcyan</code></td>
      <td><code>#e0ffff</code></td>
      <td style="background: lightcyan"></td>
    </tr>
    <tr>
      <td style="background: #fafad2"></td>
      <td style="text-align: center"><code>lightgoldenrodyellow</code></td>
      <td><code>#fafad2</code></td>
      <td style="background: lightgoldenrodyellow"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgray</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgray"></td>
    </tr>
    <tr>
      <td style="background: #90ee90"></td>
      <td style="text-align: center"><code>lightgreen</code></td>
      <td><code>#90ee90</code></td>
      <td style="background: lightgreen"></td>
    </tr>
    <tr>
      <td style="background: #d3d3d3"></td>
      <td style="text-align: center"><code>lightgrey</code></td>
      <td><code>#d3d3d3</code></td>
      <td style="background: lightgrey"></td>
    </tr>
    <tr>
      <td style="background: #ffb6c1"></td>
      <td style="text-align: center"><code>lightpink</code></td>
      <td><code>#ffb6c1</code></td>
      <td style="background: lightpink"></td>
    </tr>
    <tr>
      <td style="background: #ffa07a"></td>
      <td style="text-align: center"><code>lightsalmon</code></td>
      <td><code>#ffa07a</code></td>
      <td style="background: lightsalmon"></td>
    </tr>
    <tr>
      <td style="background: #20b2aa"></td>
      <td style="text-align: center"><code>lightseagreen</code></td>
      <td><code>#20b2aa</code></td>
      <td style="background: lightseagreen"></td>
    </tr>
    <tr>
      <td style="background: #87cefa"></td>
      <td style="text-align: center"><code>lightskyblue</code></td>
      <td><code>#87cefa</code></td>
      <td style="background: lightskyblue"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategray</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategray"></td>
    </tr>
    <tr>
      <td style="background: #778899"></td>
      <td style="text-align: center"><code>lightslategrey</code></td>
      <td><code>#778899</code></td>
      <td style="background: lightslategrey"></td>
    </tr>
    <tr>
      <td style="background: #b0c4de"></td>
      <td style="text-align: center"><code>lightsteelblue</code></td>
      <td><code>#b0c4de</code></td>
      <td style="background: lightsteelblue"></td>
    </tr>
    <tr>
      <td style="background: #ffffe0"></td>
      <td style="text-align: center"><code>lightyellow</code></td>
      <td><code>#ffffe0</code></td>
      <td style="background: lightyellow"></td>
    </tr>
    <tr>
      <td style="background: #32cd32"></td>
      <td style="text-align: center"><code>limegreen</code></td>
      <td><code>#32cd32</code></td>
      <td style="background: limegreen"></td>
    </tr>
    <tr>
      <td style="background: #faf0e6"></td>
      <td style="text-align: center"><code>linen</code></td>
      <td><code>#faf0e6</code></td>
      <td style="background: linen"></td>
    </tr>
    <tr>
      <td style="background: #66cdaa"></td>
      <td style="text-align: center"><code>mediumaquamarine</code></td>
      <td><code>#66cdaa</code></td>
      <td style="background: mediumaquamarine"></td>
    </tr>
    <tr>
      <td style="background: #0000cd"></td>
      <td style="text-align: center"><code>mediumblue</code></td>
      <td><code>#0000cd</code></td>
      <td style="background: mediumblue"></td>
    </tr>
    <tr>
      <td style="background: #ba55d3"></td>
      <td style="text-align: center"><code>mediumorchid</code></td>
      <td><code>#ba55d3</code></td>
      <td style="background: mediumorchid"></td>
    </tr>
    <tr>
      <td style="background: #9370db"></td>
      <td style="text-align: center"><code>mediumpurple</code></td>
      <td><code>#9370db</code></td>
      <td style="background: mediumpurple"></td>
    </tr>
    <tr>
      <td style="background: #3cb371"></td>
      <td style="text-align: center"><code>mediumseagreen</code></td>
      <td><code>#3cb371</code></td>
      <td style="background: mediumseagreen"></td>
    </tr>
    <tr>
      <td style="background: #7b68ee"></td>
      <td style="text-align: center"><code>mediumslateblue</code></td>
      <td><code>#7b68ee</code></td>
      <td style="background: mediumslateblue"></td>
    </tr>
    <tr>
      <td style="background: #00fa9a"></td>
      <td style="text-align: center"><code>mediumspringgreen</code></td>
      <td><code>#00fa9a</code></td>
      <td style="background: mediumspringgreen"></td>
    </tr>
    <tr>
      <td style="background: #48d1cc"></td>
      <td style="text-align: center"><code>mediumturquoise</code></td>
      <td><code>#48d1cc</code></td>
      <td style="background: mediumturquoise"></td>
    </tr>
    <tr>
      <td style="background: #c71585"></td>
      <td style="text-align: center"><code>mediumvioletred</code></td>
      <td><code>#c71585</code></td>
      <td style="background: mediumvioletred"></td>
    </tr>
    <tr>
      <td style="background: #191970"></td>
      <td style="text-align: center"><code>midnightblue</code></td>
      <td><code>#191970</code></td>
      <td style="background: midnightblue"></td>
    </tr>
    <tr>
      <td style="background: #f5fffa"></td>
      <td style="text-align: center"><code>mintcream</code></td>
      <td><code>#f5fffa</code></td>
      <td style="background: mintcream"></td>
    </tr>
    <tr>
      <td style="background: #ffe4e1"></td>
      <td style="text-align: center"><code>mistyrose</code></td>
      <td><code>#ffe4e1</code></td>
      <td style="background: mistyrose"></td>
    </tr>
    <tr>
      <td style="background: #ffe4b5"></td>
      <td style="text-align: center"><code>moccasin</code></td>
      <td><code>#ffe4b5</code></td>
      <td style="background: moccasin"></td>
    </tr>
    <tr>
      <td style="background: #ffdead"></td>
      <td style="text-align: center"><code>navajowhite</code></td>
      <td><code>#ffdead</code></td>
      <td style="background: navajowhite"></td>
    </tr>
    <tr>
      <td style="background: #fdf5e6"></td>
      <td style="text-align: center"><code>oldlace</code></td>
      <td><code>#fdf5e6</code></td>
      <td style="background: oldlace"></td>
    </tr>
    <tr>
      <td style="background: #6b8e23"></td>
      <td style="text-align: center"><code>olivedrab</code></td>
      <td><code>#6b8e23</code></td>
      <td style="background: olivedrab"></td>
    </tr>
    <tr>
      <td style="background: #ff4500"></td>
      <td style="text-align: center"><code>orangered</code></td>
      <td><code>#ff4500</code></td>
      <td style="background: orangered"></td>
    </tr>
    <tr>
      <td style="background: #da70d6"></td>
      <td style="text-align: center"><code>orchid</code></td>
      <td><code>#da70d6</code></td>
      <td style="background: orchid"></td>
    </tr>
    <tr>
      <td style="background: #eee8aa"></td>
      <td style="text-align: center"><code>palegoldenrod</code></td>
      <td><code>#eee8aa</code></td>
      <td style="background: palegoldenrod"></td>
    </tr>
    <tr>
      <td style="background: #98fb98"></td>
      <td style="text-align: center"><code>palegreen</code></td>
      <td><code>#98fb98</code></td>
      <td style="background: palegreen"></td>
    </tr>
    <tr>
      <td style="background: #afeeee"></td>
      <td style="text-align: center"><code>paleturquoise</code></td>
      <td><code>#afeeee</code></td>
      <td style="background: paleturquoise"></td>
    </tr>
    <tr>
      <td style="background: #db7093"></td>
      <td style="text-align: center"><code>palevioletred</code></td>
      <td><code>#db7093</code></td>
      <td style="background: palevioletred"></td>
    </tr>
    <tr>
      <td style="background: #ffefd5"></td>
      <td style="text-align: center"><code>papayawhip</code></td>
      <td><code>#ffefd5</code></td>
      <td style="background: papayawhip"></td>
    </tr>
    <tr>
      <td style="background: #ffdab9"></td>
      <td style="text-align: center"><code>peachpuff</code></td>
      <td><code>#ffdab9</code></td>
      <td style="background: peachpuff"></td>
    </tr>
    <tr>
      <td style="background: #cd853f"></td>
      <td style="text-align: center"><code>peru</code></td>
      <td><code>#cd853f</code></td>
      <td style="background: peru"></td>
    </tr>
    <tr>
      <td style="background: #ffc0cb"></td>
      <td style="text-align: center"><code>pink</code></td>
      <td><code>#ffc0cb</code></td>
      <td style="background: pink"></td>
    </tr>
    <tr>
      <td style="background: #dda0dd"></td>
      <td style="text-align: center"><code>plum</code></td>
      <td><code>#dda0dd</code></td>
      <td style="background: plum"></td>
    </tr>
    <tr>
      <td style="background: #b0e0e6"></td>
      <td style="text-align: center"><code>powderblue</code></td>
      <td><code>#b0e0e6</code></td>
      <td style="background: powderblue"></td>
    </tr>
    <tr>
      <td style="background: #bc8f8f"></td>
      <td style="text-align: center"><code>rosybrown</code></td>
      <td><code>#bc8f8f</code></td>
      <td style="background: rosybrown"></td>
    </tr>
    <tr>
      <td style="background: #4169e1"></td>
      <td style="text-align: center"><code>royalblue</code></td>
      <td><code>#4169e1</code></td>
      <td style="background: royalblue"></td>
    </tr>
    <tr>
      <td style="background: #8b4513"></td>
      <td style="text-align: center"><code>saddlebrown</code></td>
      <td><code>#8b4513</code></td>
      <td style="background: saddlebrown"></td>
    </tr>
    <tr>
      <td style="background: #fa8072"></td>
      <td style="text-align: center"><code>salmon</code></td>
      <td><code>#fa8072</code></td>
      <td style="background: salmon"></td>
    </tr>
    <tr>
      <td style="background: #f4a460"></td>
      <td style="text-align: center"><code>sandybrown</code></td>
      <td><code>#f4a460</code></td>
      <td style="background: sandybrown"></td>
    </tr>
    <tr>
      <td style="background: #2e8b57"></td>
      <td style="text-align: center"><code>seagreen</code></td>
      <td><code>#2e8b57</code></td>
      <td style="background: seagreen"></td>
    </tr>
    <tr>
      <td style="background: #fff5ee"></td>
      <td style="text-align: center"><code>seashell</code></td>
      <td><code>#fff5ee</code></td>
      <td style="background: seashell"></td>
    </tr>
    <tr>
      <td style="background: #a0522d"></td>
      <td style="text-align: center"><code>sienna</code></td>
      <td><code>#a0522d</code></td>
      <td style="background: sienna"></td>
    </tr>
    <tr>
      <td style="background: #87ceeb"></td>
      <td style="text-align: center"><code>skyblue</code></td>
      <td><code>#87ceeb</code></td>
      <td style="background: skyblue"></td>
    </tr>
    <tr>
      <td style="background: #6a5acd"></td>
      <td style="text-align: center"><code>slateblue</code></td>
      <td><code>#6a5acd</code></td>
      <td style="background: slateblue"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategray</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategray"></td>
    </tr>
    <tr>
      <td style="background: #708090"></td>
      <td style="text-align: center"><code>slategrey</code></td>
      <td><code>#708090</code></td>
      <td style="background: slategrey"></td>
    </tr>
    <tr>
      <td style="background: #fffafa"></td>
      <td style="text-align: center"><code>snow</code></td>
      <td><code>#fffafa</code></td>
      <td style="background: snow"></td>
    </tr>
    <tr>
      <td style="background: #00ff7f"></td>
      <td style="text-align: center"><code>springgreen</code></td>
      <td><code>#00ff7f</code></td>
      <td style="background: springgreen"></td>
    </tr>
    <tr>
      <td style="background: #4682b4"></td>
      <td style="text-align: center"><code>steelblue</code></td>
      <td><code>#4682b4</code></td>
      <td style="background: steelblue"></td>
    </tr>
    <tr>
      <td style="background: #d2b48c"></td>
      <td style="text-align: center"><code>tan</code></td>
      <td><code>#d2b48c</code></td>
      <td style="background: tan"></td>
    </tr>
    <tr>
      <td style="background: #d8bfd8"></td>
      <td style="text-align: center"><code>thistle</code></td>
      <td><code>#d8bfd8</code></td>
      <td style="background: thistle"></td>
    </tr>
    <tr>
      <td style="background: #ff6347"></td>
      <td style="text-align: center"><code>tomato</code></td>
      <td><code>#ff6347</code></td>
      <td style="background: tomato"></td>
    </tr>
    <tr>
      <td style="background: #40e0d0"></td>
      <td style="text-align: center"><code>turquoise</code></td>
      <td><code>#40e0d0</code></td>
      <td style="background: turquoise"></td>
    </tr>
    <tr>
      <td style="background: #ee82ee"></td>
      <td style="text-align: center"><code>violet</code></td>
      <td><code>#ee82ee</code></td>
      <td style="background: violet"></td>
    </tr>
    <tr>
      <td style="background: #f5deb3"></td>
      <td style="text-align: center"><code>wheat</code></td>
      <td><code>#f5deb3</code></td>
      <td style="background: wheat"></td>
    </tr>
    <tr>
      <td style="background: #f5f5f5"></td>
      <td style="text-align: center"><code>whitesmoke</code></td>
      <td><code>#f5f5f5</code></td>
      <td style="background: whitesmoke"></td>
    </tr>
    <tr>
      <td style="background: #9acd32"></td>
      <td style="text-align: center"><code>yellowgreen</code></td>
      <td><code>#9acd32</code></td>
      <td style="background: yellowgreen"></td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td style="background: #639"></td>
      <td style="text-align: center"><code>rebeccapurple</code></td>
      <td><code>#663399</code></td>
      <td style="background: rebeccapurple"></td>
    </tr>
  </tbody>
</table>

Die Farbe `rebeccapurple` entspricht der Farbe `#639`. Mehr Informationen darüber, warum sie eingeführt wurde, kann in diesem Codepen Blog Post von Trezy nachgelesen werden: "[Honoring a Great Man](http://codepen.io/trezy/blog/honoring-a-great-man)."

### `transparent` Schlüsselwort

Das `transparent`-Schlüsselwort beschreibt eine vollkommen transparente Farber, d. h. die dargestellte Farbe ist die Hintergrundfarbe. Technisch ist sie schwarz mit einem Alphakanal mit Minimalwert und ist ein Kürzel für `rgba(0,0,0,0)`.

> **Note:** **Historischer Hinweis**
> Das Schlüsselwort `transparent` war keine echte Farbe in CSS Level 2 (Revision 1). Es war ein spezifisches Schlüsselwort, das bei zwei CSS-Eigenschaften anstelle eines regulären `<color>`-Wertes verwendet werden konnte: {{cssxref("background")}} und {{cssxref("border")}}. Es war eigentlich hinzugefügt, um geerbte Festfarben zu überschreiben.
>
> Mit der Unterstützung der Deckkraft durch den [Alphakanal](https://de.wikipedia.org/wiki/Alpha_Blending), wurde `transparent` in CSS Colors Level 3 neudefiniert als eine echte Farbe, die überall dort verwendet werden kann, wo ein `<color>`-Wert benötigt wird, wie der {{cssxref("color")}} Eigenschaft.

### `currentColor` Schlüsselwort

Das `currentColor`-Schlüsselwort beschreibt den berechneten Wert der {{cssxref("color")}} Eigenschaft des Elements. Es erlaubt, die Farbeigenschaften, die von Eigenschaften oder Kindelementeigenschaften zu vererben, die sie normalerweise nicht vererben.

Es kann auch für Eigenschaften verwendet werden, die den berechneten Wert der {{cssxref("color")}} Eigenschaft des Elements erben und entspricht dem `inherit` Schlüsselwort bei diesen Elementen, falls es welche gibt.

#### Live-Beispiel

Die Farbe der Zeile (ein farbgefülltes {{HTMLElement("div")}}) passt sich der Farbe der {{cssxref("color")}} Eigenschaft an, die von seinem Elternelement geerbt wird.

##### Live-Beispiel 1

```html
<div style="color:darkred;">
 Die Farbe dieses Texts ist dieselbe wie die der Zeile:
 <div style="background:currentcolor; height:1px;"></div>
 Mehr Text.
</div>
```

{{EmbedLiveSample("Live-Beispiel_1")}}

##### Live-Beispiel 2

```html
<div style="color:blue; border-bottom: 1px dashed currentcolor;">
 Die Farbe dieses Texts ist dieselbe wie die der Zeile:
 <div style="background:currentcolor; height:1px;"></div>
 Mehr Text.
</div>
```

{{EmbedLiveSample("Live-Beispiel_2")}}

### `rgb()`

Farben können durch das Rot-Grün-Blau-Modell (RGB-Modell) auf zwei Weisen definiert werden:

- Hexadezimale Notation `#RRGGBB` und `#RGB`
  - : \* "`#`", gefolgt von sechs hexadezimalen Zeichen (0-9, A-F).
    - "`#`", gefolgt von drei hexadezimalen Zeichen (0-9, A-F).Die Drei-Ziffern-RGB-Notation (`#RGB`) und die Sechs-Ziffern-Form (`#RRGGBB`) sind gleich.
      Zum Beispiel repräsentieren `#f03` und `#ff0033` dieselbe Farbe.
- Funktionelle Notation `rgb(R,G,B)`
  - : "`rgb`", gefolgt von drei {{cssxref("&lt;integer&gt;")}} oder drei {{cssxref("&lt;percentage&gt;")}} Werten.
    Die Ganzzahl 255 entspricht 100% und F oder FF in der hexadezimalen Schreibweise.

    /* Diese Beispiele definieren alle dieselbe RGB-Farbe: */

     #f03
     #F03
     #ff0033
     #FF0033
     rgb(255,0,51)
     rgb(255, 0, 51)
     rgb(255, 0, 51.2) /* FEHLER! Keine Bruchzahlen verwenden, nur Ganzzahlen. */
     rgb(100%,0%,20%)
     rgb(100%, 0%, 20%)
     rgb(100%, 0, 20%) /* FEHLER! Ganzzahl- und Prozentschreibweise dürfen nicht gemischt werden. */

### `hsl()`

Farben können auch durch das Hue-Saturation-Lightness-Modell (HSL-Modell) unter Verwendung der funktionellen Notation `hsl()` definiert werden. Der Vorteil von HSL gegenüber RGB ist, dass es wesentlich intuitiver ist: man kann die Zahlen, die man haben will, erraten und dann anpassen. Es ist auch einfacher, Sets passender Farben zu erstellen (indem der Farbwert unverändert bleibt und die Helligkeit/Dunkelheit und Sättigung verändert werden).

Der **Farbwert** wird als ein Winkel des Farbkreises angegeben (d. h. der Regenbogen als Kreis dargestellt). Der Winkel wird als einheitenlose {{cssxref("&lt;number&gt;")}} angegeben. Per definition **red=0=360** und die anderen Farben sind so auf den Kreis verteilt, sodass **green=120**, **blue=240**, etc. Als Winkel bricht er implizit um, sodass 120=240 und 480=120.

Sättigung und Helligkeit werden als Prozentwert angegeben.
`100%` entspricht voller **Sättigung** und `0%` ist ein Grauton.
`100%` **Helligkeit** ist weiß, `0%` Helligkeit ist schwarz und `50%` Helligkeit ist "normal".

```css
hsl(0,  100%,50%)    /* rot */
hsl(30, 100%,50%)
hsl(60, 100%,50%)
hsl(90, 100%,50%)
hsl(120,100%,50%)    /* grün */
hsl(150,100%,50%)
hsl(180,100%,50%)
hsl(210,100%,50%)
hsl(240,100%,50%)    /* blau */
hsl(270,100%,50%)
hsl(300,100%,50%)
hsl(330,100%,50%)
hsl(360,100%,50%)    /* rot */

hsl(120,100%,25%)    /* dunkelgrün */
hsl(120,100%,50%)    /* grün*/
hsl(120,100%,75%)    /* hellgrün */

hsl(120,100%,50%)    /* grün */
hsl(120, 67%,50%)
hsl(120, 33%,50%)
hsl(120,  0%,50%)

hsl(120, 60%,70%)    /* pastelgrün */
```

### `rgba()`

Farben können durch das Rot-Grün-Blau-Model (RGB-Modell) unter Verwendungn der funktionellen Notation `rgba()` verwendet werden. RGBa erweitert das RGB-Farbmodell um einen Alphakanal, der die Deckkraft einer Farbe angibt.
**a** bedeutet Deckkraft: 0=transparent; 1=undurchsichtig;

```css
rgba(255, 0, 0, 0.1)    /* 10% undurchsichtiges Rot */
rgba(255, 0, 0, 0.4)    /* 40% undurchsichtiges Rot */
rgba(255, 0, 0, 0.7)    /* 70% undurchsichtiges Rot */
rgba(255, 0, 0, 1)      /* komplett undurchsichtiges Rot */
```

### `hsla()`

Farben können auch durch das Hue-Saturation-Lightness-Alpha-Modell (HSLa-Modell) unter Verwendung der funktionellen Notation `hsla()` definiert werden. HSLa erweitert das HSL-Farbmodell um einen Alphakanal, der die Deckkraft einer Farbe angibt.
**a** bedeutet Deckkraft: 0=transparent; 1=undurchsichtig;

```css
hsla(240, 100%, 50%, 0.05)    /* 5% undurchsichtiges Blau */
hsla(240,100%,50%, 0.4)       /* 40% undurchsichtiges Blau */
hsla(240,100%,50%, 0.7)       /* 70% undurchsichtiges Blau */
hsla(240,100%,50%,   1)       /* full undurchsichtiges Blau */
```

### Systemfarben

Nicht alle Systemfarben werden von allen Systemen unterstützt. {{deprecated_inline}} für die Benutzung in öffentlichen Webseiten.

- ActiveBorder
  - : Rahmenfarbe eines aktiven Fensters.
- ActiveCaption
  - : Titelfarbe eines aktiven Fensters. Sollte mit der Vordergrundfarbe `CaptionText` verwendet werden.
- AppWorkspace
  - : Hintergrundfarbe einer Mehrfachdokumentschnittstelle (MDI).
- Background
  - : Desktophintergrund.
- ButtonFace
  - : Schaltflächenfarbe für 3D-Elemente, die durch eine Ebene umgebender Rahmen dreidimensional erscheinen. Sollte mit der Vordergrundfarbe `ButtonText` verwendet werden.
- ButtonHighlight
  - : Farbe des dem Licht zugewandten Rahmens eines 3D-Elements, das durch diesen Rahmen dreidimensional erscheint.
- ButtonShadow
  - : Farbe des dem Licht abgewandten Rahmens eines 3D-Elements, das durch diesen Rahmen dreidimensional erscheint.
- ButtonText
  - : Text auf Schaltflächen. Sollte mit der Hintergrundfarbe `ButtonFace` oder `ThreeDFace` verwendet werden.
- CaptionText
  - : Farbe des Titeltexts in Fenstern. Sollte mit der Hintergrundfarbe `ActiveCaption` verwendet werden.
- GrayText
  - : Farbe für ausgegrauten (deaktivierten) Text.
- Highlight
  - : Farbe für ausgewählte Elemente in einem Steuerelement. Sollte mit der Vordergrundfarbe `HighlightText` verwendet werden.
- HighlightText
  - : Farbe des Texts ausgewählter Elemente in einem Steuerelement. Sollte mit der Hintergrundfarbe `Highlight` verwendet werden.
- InactiveBorder
  - : Rahmenfarbe eines inaktiven Fensters.
- InactiveCaption
  - : Titelfarbe eines inaktiven Fensters. Sollte mit der Vordergrundfarbe `InactiveCaptionText` verwendet werden.
- InactiveCaptionText
  - : Farbe des Titeltexts in inaktiven Fenstern. Sollte mit der Hintergrundfarbe `InactiveCaption` verwendet werden.
- InfoBackground
  - : Hintergrundfarbe für Tooltips. Sollte mit der Vordergrundfarbe `InfoText` verwendet werden.
- InfoText
  - : Textfarbe für Tooltips. Sollte mit der Hintergrundfarbe `InfoBackground` verwendet werden.
- Menu
  - : Hintergrundfarbe von Menüs. Sollte mit der Vordergrundfarbe `MenuText` oder `-moz-MenuBarText` verwendet werden.
- MenuText
  - : Textfarbe von Menüs. Sollte mit der Hintergrundfarbe `Menu` verwendet werden.
- Scrollbar
  - : Hintergrundfarbe von Scrollleisten.
- ThreeDDarkShadow
  - : Farbe des dunkleren (normalerweise äußeren) der dem Licht abgewandten zweier Rahmen für 3D-Elemente, die durch zwei Ebenen umgebender konzentrischer Rahmen dreidimensional erscheinen.
- ThreeDFace
  - : Schaltflächenfarbe für 3D-Elemente, die durch zwei Ebenen umgebender konzentrischer Rahmen dreidimensional erscheinen. Sollte mit der Vordergrundfarbe `ButtonText` verwendet werden.
- ThreeDHighlight
  - : Farbe des helleren (normalerweise äußeren) der dem Licht zugewandten zweier Rahmen für 3D-Elemente, die durch zwei Ebenen umgebender konzentrischer Rahmen dreidimensional erscheinen.
- ThreeDLightShadow
  - : Farbe des dunkleren (normalerweise inneren) der dem Licht zugewandten zweier Rahmen für 3D-Elemente, die durch zwei Ebenen umgebender konzentrischer Rahmen dreidimensional erscheinen.
- ThreeDShadow
  - : Farbe des helleren (normalerweise inneren) der dem Licht abgewandten zweier Rahmen für 3D-Elemente, die durch zwei Ebenen umgebender konzentrischer Rahmen dreidimensional erscheinen.
- Window
  - : Fensterhintergrundfarbe. Sollte mit der Vordergrundfarbe `WindowText` verwendet werden.
- WindowFrame
  - : Fensterrahmenfarbe.
- WindowText
  - : Textfarbe in Fenstern. Sollte mit der Hintergrundfarbe `Window` verwendet werden.

### Mozilla Systemfarben Erweiterungen

- \-moz-ButtonDefault
  - : Rahmenfarbe, die um Schaltflächen angezeigt wird, die die Standardaktion für Dialoge darstellen.
- \-moz-ButtonHoverFace
  - : Hintergrundfarbe einer Schaltfläche, über der der Mauszeiger steht (was `ThreeDFace` oder `ButtonFace` wäre, wenn der Mauszeiger nicht darübersteht). Sollte mit der Vordergrundfarbe `-moz-ButtonHoverText` verwendet werden.
- \-moz-ButtonHoverText
  - : Textfarbe einer Schaltfläche, über der der Mauszeiger steht (was `ButtonText` wäre, wenn der Mauszeiger nicht darübersteht). Sollte mit der Hintergrundfarbe `-moz-ButtonHoverFace` verwendet werden.
- \-moz-CellHighlight
  - : Hintergrundfarbe für markierte Elemente in einem Baum. Sollte mit der Vordergrundfarbe `-moz-CellHighlightText` verwendet werden. Siehe auch `-moz-html-CellHighlight`.
- \-moz-CellHighlightText
  - : Textfarbe für markierte Elemente in einem Baum. Sollte mit der Hintergrundfarbe `-moz-CellHighlight` verwendet werden. Siehe auch `-moz-html-CellHighlightText`.
- \-moz-Combobox
  - : {{Gecko_minversion_inline("1.9.2")}} Hintergrundfarbe für Combo-Boxen. Sollte mit der Vordergrundfarbe `-moz-ComboboxText` verwendet werden. In Gecko Versionen vor 1.9.2 sollte stattdessen `-moz-Field` verwendet werden.
- \-moz-ComboboxText
  - : {{Gecko_minversion_inline("1.9.2")}} Textfarbe für Combo-Boxen. Sollte mit der Hintergrundfarbe `-moz-Combobox` verwendet werden. In Gecko Versionen vor 1.9.2 sollte stattdessen `-moz-FieldText` verwendet werden.
- \-moz-Dialog
  - : Hintergrundfarbe für Dialoge. Sollte mit der Vordergrundfarbe `-moz-DialogText` verwendet werden.
- \-moz-DialogText
  - : Textfarbe für Dialoge. Sollte mit der Hintergrundfarbe `-moz-Dialog` verwendet werden.
- \-moz-dragtargetzone

  \-moz-EvenTreeRow

  - : {{gecko_minversion_inline("1.9")}} Hintergrundfarbe für geradzahlige Zeilen in einem Baum. Sollte mit der Vordergrundfarbe `-moz-FieldText` verwendet werden. In Gecko Versionen vor 1.9 sollte stattdessen `-moz-Field` verwendet werden. Siehe auch `-moz-OddTreeRow`.

- \-moz-Field
  - : Hintergrundfarbe für Texteingabefelder. Sollte mit der Vordergrundfarbe `-moz-FieldText` verwendet werden.
- \-moz-FieldText
  - : Textfarbe für Texteingabefelder. Sollte mit der Hintergrundfarbe `-moz-Field`, `-moz-EvenTreeRow` oder `-moz-OddTreeRow` verwendet werden.
- \-moz-html-CellHighlight
  - : {{gecko_minversion_inline("1.9")}} Hintergrundfarbe für markierte Elemente in HTML {{HTMLElement("select")}}s. Sollte mit der Vordergrundfarbe `-moz-html-CellHighlightText` verwendet werden. In Gecko Versionen vor 1.9 sollte stattdessen `-moz-CellHighlight` verwendet werden.
- \-moz-html-CellHighlightText
  - : {{gecko_minversion_inline("1.9")}} Vordergrundfarbe für markierte Elemente in HTML {{HTMLElement("select")}}s. Sollte mit der Hintergrundfarbe `-moz-html-CellHighlight` verwendet werden. In Gecko Versionen vor 1.9 sollte stattdessen `-moz-CellHighlightText` verwendet werden.
- \-moz-mac-accentdarkestshadow

  \-moz-mac-accentdarkshadow

  \-moz-mac-accentface

  \-moz-mac-accentlightesthighlight

  \-moz-mac-accentlightshadow

  \-moz-mac-accentregularhighlight

  \-moz-mac-accentregularshadow

  \-moz-mac-chrome-active

  - : {{Gecko_minversion_inline("1.9.1")}}

- \-moz-mac-chrome-inactive
  - : {{Gecko_minversion_inline("1.9.1")}}
- \-moz-mac-focusring

  \-moz-mac-menuselect

  \-moz-mac-menushadow

  \-moz-mac-menutextselect

  \-moz-MenuHover

  - : Hintergrundfarbe für Menüeinträge, über denen der Mauszeiger steht. Oft ähnlich zu `Highlight`. Sollte mit der Vordergrundfarbe `-moz-MenuHoverText` oder `-moz-MenuBarHoverText` verwendet werden.

- \-moz-MenuHoverText
  - : Textfarbe für Menüeinträge, über denen der Mauszeiger steht. Oft ähnlich zu `HighlightText`. Sollte mit der Hintergrundfarbe `-moz-MenuHover` verwendet werden.
- \-moz-MenuBarText
  - : {{Gecko_minversion_inline("1.9.2")}} Vordergrundfarbe für Text in Menüleisten. Oft ähnlich zu `MenuText`. Sollte auf einem `Menu` Hintergrund verwendet werden.
- \-moz-MenuBarHoverText
  - : {{Gecko_minversion_inline("1.9.2")}} Vordergrundfarbe für Text in Menüleisten, über dem der Mauszeiger steht. Oft ähnlich zu `-moz-MenuHoverText`. Sollte auf einem `-moz-MenuHover` Hintergrund verwendet werden.
- \-moz-nativehyperlinktext
  - : {{Gecko_minversion_inline("1.9.1")}} Standardplattformfarbe für Hyperlinks.
- \-moz-OddTreeRow
  - : {{gecko_minversion_inline("1.9")}} Hintergrundfarbe für ungeradzahlige Zeilen in einem Baum. Sollte mit der Vordergrundfarbe `-moz-FieldText` verwendet werden. In Gecko Versionen vor 1.9 sollte stattdessen `-moz-Field` verwendet werden. Siehe auch `-moz-EvenTreeRow`.
- \-moz-win-communicationstext
  - : {{gecko_minversion_inline("1.9")}} Sollte für Text in Objekten mit `{{cssxref("-moz-appearance")}}: -moz-win-communications-toolbox;` verwendet werden.
- \-moz-win-mediatext
  - : {{gecko_minversion_inline("1.9")}} Sollte für Text in Objekten mit `{{cssxref("-moz-appearance")}}: -moz-win-media-toolbox;` verwendet werden.

### Mozilla Farbpräferenz Erweiterungen

- \-moz-activehyperlinktext
  - : Benutzerpräferenz für die Textfarbe aktiver Links. Sollte mit dem Standarddokumenthintergrund verwendet werden.
- \-moz-default-background-color

  - : {{Gecko_minversion_inline("5.0")}} Benutzerpräferenz für die Dokumenthintergrundfarbe.

- \-moz-default-color

  - : {{Gecko_minversion_inline("5.0")}} Benutzerpräferenz für die Textfarbe.

- \-moz-hyperlinktext
  - : Benutzerpräferenz für die Textfarbe nicht besuchter Links. Sollte mit dem Standarddokumenthintergrund verwendet werden.
- \-moz-visitedhyperlinktext
  - : Benutzerpräferenz für die Textfarbe besuchter Links. Sollte mit dem Standarddokumenthintergrund verwendet werden.

## Spezifikationen

| Spezifikation                                                                | Status                           | Kommentar                                                                                                                      |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS4 Colors', '#colorunits', '')}}                 | {{Spec2('CSS4 Colors')}} | `rebeccapurple` hinzugefügt.                                                                                                   |
| {{SpecName('CSS3 Colors', '#colorunits', '')}}                 | {{Spec2('CSS3 Colors')}} | Systemfarben als veraltet markiert; SVG-Farben hinzugefügt; functionale Notationen `rgba()`, `hsl()` und `hsla()` hinzugefügt. |
| {{SpecName('CSS2.1', 'syndata.html#value-def-color', '')}} | {{Spec2('CSS2.1')}}         | `orange` als Farbe und Systemfarben hinzugefügt.                                                                               |
| {{SpecName('CSS1', '#color-units', '')}}                         | {{Spec2('CSS1')}}         | Ursprüngliche Definition                                                                                                       |

## Browser Kompatibilität

{{Compat("css.properties.color")}}

## Siehe auch

- Die {{cssxref("opacity")}} Eigenschaft, die es erlaubt, die Transparenz einer Farbe auf Elementebene zu definieren.
- Die {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-shadow")}} und {{cssxref("box-shadow")}} Eigenschaften.
