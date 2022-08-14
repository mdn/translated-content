---
title: background-origin
slug: Web/CSS/background-origin
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/background-origin
---
{{ CSSRef() }}

### Übersicht

Die `background-origin` Eigenschaft legt den Bereich des Hintergrundbildes fest (bzw. den Ausgangspunkt eines [`background-image`](/de/CSS/background-image "de/CSS/background-image")). `background-origin` hat keinen Effekt, wenn [`background-attachment`](/de/CSS/background-attachment "de/CSS/background-attachment") auf `fixed` gesetzt wurde. Es können mehrere Werte (durch Kommata getrennt) definiert werden, um unterschiedliche Einstellungen für mehrere Hintergrundbilder festzulegen.

Die Eigenschaft `-moz-background-origin` wird bis einschließlich Gecko 1.9.2 (Firefox 3.6) unterstützt.

> **Note:** **Hinweis**: Um ältere und neuere Versionen von Gecko (Firefox) zu unterstützen, sollten Sie beide Eigenschaften (mit und ohne `-moz-`) im Stylesheet notieren. Siehe [Beispiele](/de/CSS/background-origin#Beispiele "de/CSS/background-origin#Beispiele").

Der Wert dieser Eigenschaft wird durch die Kurzformeigenschaft [`background`](/de/CSS/background "de/CSS/background") auf den Standardwert (`padding-box`) zurückgesetzt.

- Standardwert: `padding-box`
- Anwendbar auf: alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: wie festgelegt

### Syntax

    /* seit Gecko 2.0 (Firefox 4.0) */
    background-origin: [padding-box | border-box | content-box][, [border-box | padding-box | content-box]]*

    /* ältere Versionen (mehrere Hintergründe seit Gecko 1.9.2 / Firefox 3.6) */
    -moz-background-origin: [padding | border | content][, [border | padding | content]]*

### Werte

- padding-box {{ gecko_minversion_inline("2.0") }} bzw. padding (Firefox 1.0-3.6)
  - : Standardwert. Die Hintergrundposition ist relativ zum `padding`. (Für einzelne Boxen ist "`0 0`" die obere linke Ecke der _padding edge_ und "`100% 100%`" ist die untere rechte Ecke.)
- border-box {{ gecko_minversion_inline("2.0") }} bzw. border (Firefox 1.0-3.6)
  - : Die Hintergrundposition ist relativ zum Rahmen (`border`), sodass sich das Hintergrundbild hinter dem Rahmen befinden kann.
- content-box {{ gecko_minversion_inline("2.0") }} bzw. content (Firefox 1.0-3.6)
  - : Die Hintergrundposition ist relativ zum Inhalt.

### Beispiele

#### Hintergrundbild im padding-Bereich

     .example {
       border: 10px double;
       padding: 10px;
       background: url('image.jpg');
       background-position: center left;
       -moz-background-origin: content;          /* Firefox 1.0-3.6 */
       -webkit-background-origin: content-box;   /* Safari, Chrome */
               background-origin: content-box;   /* Firefox 4.0+ */
    }

#### Mehrere Hintergrundbilder {{ gecko_minversion_inline("1.9.2") }}

    div {
      background-image: url('mainback.png'), url('logo.jpg');
      background-position: 0px 0px, top right;
      -moz-background-origin: padding, content;
      -webkit-background-origin: padding-box, content-box;
              background-origin: padding-box, content-box;
    }

### Browser Kompatibilität

<table class="standard-table">
  <tbody>
    <tr>
      <th>Browser</th>
      <th>ab Version</th>
      <th>Unterstützung von</th>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>---</td>
      <td>--- [*]</td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0-3.6 (1.2-1.9.2)</td>
      <td><code>-moz-background-origin: padding | border | content</code></td>
    </tr>
    <tr>
      <td>4.0 (1.9.3)</td>
      <td>
        <code>background-origin: padding-box | border-box | content-box</code>
      </td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>10.5</td>
      <td>
        <code>background-origin: padding-box | border-box | content-box</code>
      </td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>3.0 (522)</td>
      <td>
        <code>-webkit-background-origin: padding | border | content</code
        ><br /><code
          >-webkit-background-origin: padding-box | border-box |
          content-box</code
        >
      </td>
    </tr>
  </tbody>
</table>

- \[\*]: Der Standardwert ist bis einschließlich IE7 `border-box`.
- Der IE8 kennt `padding-box` als Standard.
- Konqueror 3.5.4 unterstützt `-khtml-background-origin`.

### Spezifikation

- [CSS 3 Backgrounds and Borders #background-origin](http://www.w3.org/TR/css3-background/#background-origin)
  (Standardisiert sind `padding-box`, `border-box`, und `content-box`)

### Siehe auch

- [`background`](/de/CSS/background "de/CSS/background"), [`background-attachment`](/de/CSS/background-attachment "de/CSS/background-attachment"), [`background-color`](/de/CSS/background-color "de/CSS/background-color"), [`background-clip`](/de/CSS/background-clip "de/CSS/background-clip"), [`background-image`](/de/CSS/background-image "de/CSS/background-image"), [`background-position`](/de/CSS/background-position "de/CSS/background-position"), [`background-repeat`](/de/CSS/background-repeat "de/CSS/background-repeat"), [`background-size`](/de/CSS/background-size "de/CSS/background-size")
- [`-moz-background-inline-policy`](/de/CSS/-moz-background-inline-policy "de/CSS/-moz-background-inline-policy")

{{ languages( { "en": "en/CSS/background-origin", "fr": "fr/CSS/-moz-background-origin", "ja": "ja/CSS/-moz-background-origin", "pl": "pl/CSS/-moz-background-origin" } ) }}
