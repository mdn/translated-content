---
title: background-clip
slug: Web/CSS/background-clip
tags:
  - CSS
  - CSS Referenz
translation_of: Web/CSS/background-clip
---
{{ CSSRef() }}

## Übersicht

Die `background-clip` Eigenschaft legt fest, ob ein Hintergrundbild oder eine Hintergrundfarbe auch unterhalb des [Elementrahmens](/de/CSS/border "de/CSS/border") erweitert werden soll. Es können mehrere Werte (durch Kommata getrennt) definiert werden, um unterschiedliche Einstellungen für mehrere Hintergrundbilder festzulegen.
Die Eigenschaft `-moz-background-clip` wird bis einschließlich Gecko 1.9.2 (Firefox 3.6) unterstützt.

> **Hinweis:** Um ältere und neuere Versionen von Gecko (Firefox) zu unterstützen, sollten Sie beide Eigenschaften (mit und ohne `-moz-`) im Stylesheet notieren. Siehe [Beispiele](#Beispiele).

Wenn kein `background-image` vorhanden ist, hat diese Eigenschaft nur einen sichtbaren Effekt, wenn der Rahmen über transparente oder teilweise transparente Bereiche verfügt (siehe [border-style](/de/CSS/border-style "de/CSS/border-style")). Andernfalls sind nur die Effekte des Rahmens selbst zu sehen.

- Standardwert: `border-box`
- Anwendbar auf: alle Elemente
- Vererbbar: Nein
- Prozentwerte: Nein
- Medium: visuell
- berechneter Wert: wie festgelegt

## Syntax

    background-clip:  [ border-box | padding-box | content-box][, [ border-box | padding-box | content-box]]*

    -moz-background-clip:  [border | padding][, [border | padding]]*  /* Gecko 1.2-1.9.2 (Firefox 1.0-3.6) */

## Werte

- border-box {{ gecko_minversion_inline("2.0") }} bzw. border (Firefox 1.0-3.6)
  - : Standardwert.Der Hintergrund erstreckt sich bis zur äußeren Ecke des Rahmens (aber unterhalb des Rahmens auf der Z-Achse).
- padding-box {{ gecko_minversion_inline("2.0") }} bzw. padding (Firefox 1.0-3.6)
  - : Es wird kein Hintergrund unterhalb des Rahmens gezeichnet (der Hintergrund erstreckt sich bis zur äußeren Ecke des Innenabstands (padding).
- content-box {{ gecko_minversion_inline("2.0") }}
  - : Der Hintergrund wird innerhalb des Inhalts (content box) gezeichnet.

## Beispiele

```css
pre {
   border: 1em navy;
   border-style: dotted double;
   background: tomato;
   /* Der rote Hintergrund wird nicht unter den Rahmen wandern */
   -moz-background-clip: padding;         /* Firefox 1.0-3.6 */
   -webkit-background-clip: padding-box;  /* Safari, Chrome */
           background-clip: padding-box;  /* Firefox 4.0+, Opera */
}
```

## Browser Kompatibilität

<table class="standard-table">
  <tbody>
    <tr>
      <th>Browser</th>
      <th>ab Version</th>
      <th>Unterstützung von</th>
    </tr>
    <tr>
      <td>Chrome</td>
      <td>1.0</td>
      <td>
        <code>background-clip: padding-box | border-box | content-box</code>
      </td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0-3.6 (1.2-1.9.2)</td>
      <td><code>-moz-background-clip: padding | border</code></td>
    </tr>
    <tr>
      <td>4.0 (2.0)</td>
      <td>
        <code>background-clip: padding-box | border-box | content-box</code>
      </td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>9.0</td>
      <td>
        <code>background-clip: padding-box | border-box | content-box</code>
      </td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>10.5</td>
      <td><code>background-clip: padding-box | border-box</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>3.0 (522)</td>
      <td>
        <code>-webkit-background-clip: padding | border | content</code
        ><br /><code
          >-webkit-background-clip: padding-box | border-box | content-box</code
        >
      </td>
    </tr>
  </tbody>
</table>

- \[\*]: Der IE 7 (keine anderen IE-Versionen) verhält sich wie `background-clip:padding` wenn `overflow: hidden | auto | scroll` festgelegt wurde.
- Konqueror 3.5.4 unterstützt `-khtml-background-clip`.

## Spezifikation

- [CSS 3 Backgrounds and Borders #background-clip](http://www.w3.org/TR/css3-background/#the-background-clip)
- [CSS 3 Editor's Draft](http://dev.w3.org/csswg/css3-background/#the-background-clip)(enthält `content-box`)

## Siehe auch

- [`background`](/de/CSS/background "de/CSS/background"), [`background-attachment`](/de/CSS/background-attachment "de/CSS/background-attachment"), [`background-color`](/de/CSS/background-color "de/CSS/background-color"), [`background-image`](/de/CSS/background-image "de/CSS/background-image"), [`background-origin`](/de/CSS/background-origin "de/CSS/background-origin"), [`background-position`](/de/CSS/background-position "de/CSS/background-position"), [`background-repeat`](/de/CSS/background-repeat "de/CSS/background-repeat"), [`background-size`](/de/CSS/background-size "de/CSS/background-size")
- [`-moz-background-inline-policy`](/de/CSS/-moz-background-inline-policy "de/CSS/-moz-background-inline-policy")
- [`clip`](/de/CSS/clip "de/CSS/clip")

{{ languages( { "en": "en/CSS/background-clip", "fr": "fr/CSS/-moz-background-clip", "ja": "ja/CSS/-moz-background-clip", "pl": "pl/CSS/-moz-background-clip" } ) }}
