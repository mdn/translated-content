---
title: position
slug: Web/CSS/position
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Positionierung
  - Referenz
translation_of: Web/CSS/position
---
{{ CSSRef() }}

## Übersicht

Die `position` Eigenschaft legt die Positionsart eines Elements fest. Für die Positionierung selbst werden die Eigenschaften [`top`](/De/CSS/Top "de/CSS/top"), [`right`](/De/CSS/Right "de/CSS/right"), [`bottom`](/De/CSS/Bottom "de/CSS/bottom") oder [`left`](/De/CSS/Left "de/CSS/left") verwendet.

Ein _positioniertes Element_ ist ein Element für das `absolute`, `fixed` oder `relative` als `position` definiert wurde.
Ein _absolut positioniertes Element_ ist ein Element für das `absolute` oder `fixed` als `position` definiert wurde.

{{cssinfo}}

## Syntax

{{csssyntax}}

### Werte

- static
  - : Standardwert. Das Element ist im normalen Fluss. Die Eigenschaften `top`, `right`, `bottom` oder `left` haben keine Auswirkungen.
- relative
  - : Das Element wird vom normalen Fluss aus verschoben und hat keinen Einfluss auf andere Elemente, da an der ursprünglichen Position Platz gelassen wird. Bei `table-*-group`,`table-row`,`table-column`,`table-cell`, und`table-caption`Elementen ist kein Effekt definiert.
- absolute
  - : Das Element wird aus dem normalen Fluss gelöst und unabhängig verschoben. Dabei können andere Elemente verdeckt werden. Diese verhalten sich so, als ob das Element nicht vorhanden wäre und lassen keinen Platz für das Element.
- sticky {{Experimental_inline}}
  - : Eine Mischung zwischen `fixed` und `relative`: Das Element wird vom normalen Fluss aus verschoben und hat keinen Einfluss auf andere Elemente, solange es sich innerhalb des Viewports befindet. Sobald es sich ausserhalb befindet, wird das Element aus dem normalen Fluss gelöst und bleibt so beim Scrollen an seiner fest definierten Position.
- fixed
  - : Die Verschiebung orientiert sich am Viewport. Das Element wird aus dem normalen Fluss gelöst und bleibt auch beim Scrollen an seiner fest definierten Position. Beim Drucken wird das Element auf _jeder Seite_ an der positionierten Stelle angezeigt.
- inherit
  - : Der Wert des Elternelements wird geerbt.

## Beispiele

Das folgende Beispiel verdeutlicht den Unterschied zwischen `position: absolute` und `position: fixed`. Während das absolut positionierte Element beim Scrollen mitwandert, bleibt das mit `fixed` positionierte Element fest an seiner Position.

    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN"
       "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <title>Position absolute und fixed</title>
    <style type="text/css">
    p {font-size:30px; line-height:3em;}
    div.pos {width:49%; text-align:center; border:2px solid #00f;}
    div#abs {position:absolute; bottom:0; left:0;}
    div#fix {position:fixed; bottom:0; right:0;}
    </style>
    </head>
    <body>
      <p>This<br>is<br>some<br>tall,<br>tall,
        <br>tall,<br>tall,<br>tall<br>content.</p>
      <div id="fix" class="pos"><p>Fixed</p></div>
      <div id="abs" class="pos"><p>Absolute</p></div>
    </body>
    </html>

## Spezifikation

| Spezifikation                                                                            | Status                                   | Anmerkung            |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS2.1', 'visuren.html#propdef-position', 'position')}} | {{Spec2('CSS2.1')}}                 |                      |
| {{SpecName('CSS3 Positioning')}}                                             | {{Spec2('CSS3 Positioning')}} | `sticky` hinzugefügt |

## Browser Kompatibilität

{{Compat("css.properties.position")}}

## Siehe auch

- [`top`](/De/CSS/Top "de/CSS/top"), [`left`](/De/CSS/Left "de/CSS/left"), [`bottom`](/De/CSS/Bottom "de/CSS/bottom"), [`right`](/De/CSS/Right "de/CSS/right")

{{ languages( { "en": "en/CSS/position", "fr": "fr/CSS/position", "es": "es/CSS/position" } ) }}
