---
title: Fills and Strokes
slug: Web/SVG/Tutorial/Fills_and_Strokes
tags:
  - Anfänger
  - SVG
  - SVG:Tutorial
translation_of: Web/SVG/Tutorial/Fills_and_Strokes
---
{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}

Es gibt mehrere Möglichkeiten die Farben von Formen mit zu verändern, mit Inline CSS (inklusive Attributen am Objekt), eingebettetem CSS oder einer externen CSS Datei. Die meisten [SVG](/de/docs/Glossary/SVG)s im Netz nutzen Inline CSS, aber jede Möglichkeit hat Vor- und Nachteile.

## Füllungs- und Konturattribute

### Malen

Durch das Setzen zweier Attribute beim Element, kann einfache Farbgebung durchgeführt werden: `fill` und `stroke`. Dabei setzt `fill `die Farbe innerhalb des Objektes, während `stroke` die Farbe der Linien um das Objekt herum bestimmt. Es können die gleichen Namensschemen für CSS Farben genutzt werden, welche auf bei HTML Elementen verwendet werden - also Farbnamen (z.B. _red_), RGB Werte (z.B. _rgb(255, 0, 0)_, HEX Codes, rgba und weitere).

```xml
 <rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple"
       fill-opacity="0.5" stroke-opacity="0.8"/>
```

Zusätzlich kann die Durchsichtigkeit von `fill` und `stroke` in SVG verändert werden. Diese wird durch die `fill-opacity` und `stroke-opacity` Attribute gesetzt.

> **Note:** Bemerkung: In Firefox 3+ sind auch rgba Werte möglich, und erzeugen den gleichen Effekt, allerdings wird empfohlen aus Kompatibilitätsgründen fill/stroke-opacity separat zu setzen. Wenn ein rgba Wert und ein fill/stroke-opacity Wert gesetzt wird, so werden beide angewendet.

### Kontur

Zusätzlich zu ihren Farbeigeschaften gibt es noch einige andere Attribute, welche festlegen wie eine Kontur auf einer Linie gezeichnet wird.

![](/@api/deki/files/355/=SVG_Stroke_Linecap_Example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Die `stroke-width` Eigenschaft setzt die Breite der Kontur. Konturen werden immer zentriert auf dem Pfad gezeichnet. Im obigen Beispiel ist der Pfad in Pink und die Kontur in Schwarz dargestellt.

Die zweite Eigenschaft von Konturen ist `stroke-linecap`, welchen ebenfalls oben gezeigt ist. Diese kontrolliert die Form der Konturenden.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Kontur mit einer Geraden Kante, welche senkrecht zur Richtung der Kontur steht und deren Ende schneidet.
- `square` ist sehr ähnlich, geht allerdings ein wenig über das Ende des Pfades hinaus. Die Überstand ist gleich der halben Konturbreite (`stroke-width`).
- `round` erzeugt eine Rundung am Ende der Kontur. Der Radius dieser Runding hängt ebenfalls von `stroke-width` ab.

Die `stroke-linejoin` Eigenschaft kann verwendet werden, um zu kontrollieren wie Verbindung zweier Liniensegmente gezeichnet wird.

![](/@api/deki/files/356/=SVG_Stroke_Linejoin_Example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/>

  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
</svg>
```

Im obigen Beispiel werden jeweils zwei Liniensegmente verbunden. Die Verbindung zwischen beiden wird durch das `stroke-linejoin` Attribut kontrolliert. Es gibt auch hier drei mögliche Werte. `miter` erweitert die Kontur leicht, um eine "quadratische Ecke" zu generieren, die nur einen Knick hat. `round` produziert eine abgerundete Ecke. `bevel` generiert eine glatte Kante am Übergang, wodurch zwei Knicke entstehen.

Abschließend können auch gestrichelte (oder gepunktete) Konturen erstellt werden. Hierzu wird das `stroke-dasharray` Attribut genutzt.

![](/@api/deki/files/354/=SVG_Stroke_Dasharray_Example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Dem `stroke-dasharray` Attribut wird eine Liste von Zahlen übergeben, welche durch Kommas getrennt sind.

> **Note:** Bemerkung: Anders als bei Pfaden **_müssen_** die Zahlen durch ein Komma getrennt werden (Leerzeichen werden ignoriert).

Die erste Zahl gibt die Länge der gefüllten Bereiche an, die zweite Nummer die Länge der ungefüllten Bereiche. Im obigen Beispiel werden also 5 Pixel gefüllt, gefolgt von 5 Pixeln Leerbereich und dann dem nächsten 5 Pixel Strich. Es können mehr Zahlen angegeben werden, um ein komplexeres Muster zu erzeugen. Das erste Beispiel hat drei Zahlen. Der Renderer wiederholt die Zahlen hier zweimal, um ein gleichmäßiges Muster zu erzeugen. Hier werden zuerst 5 Pixel gefüllt, 10 Pixel leer, 5 Pixel gefüllt und dann 5 Pixel leer, 10 gefüllt und abschließend 5 Pixel leer gezeichnet. Dann wiederholt sich dieses Muster.

Es gibt weitere Kontur- und Füllungseigenschaften, zum Beispiel [`fill-rule`](/en-US/docs/Web/SVG/Attribute/fill-rule), welche bestimmt welche Farbe überlagerte Formen bekommen; [`stroke-miterlimit`](/en-US/docs/Web/SVG/Attribute/stroke-miterlimit), welche festlegt ob eine Kontur miter zeichnet; [stroke-dashoffset](/de/docs/Web/SVG/Attribute/stroke-dashoffset) legt fest wo die Strichelung einer Kontur auf der Linie beginnt.

## CSS verwenden

Neben der Möglichkeit Attribute beim Objekt selbst zu setzen, kann auch CSS zum Kontrollieren von Füllungen und Konturen verwendet werden. Attribute die sich mit dem Malen und dem Füllen befassen sind meist verfügbar, also können zum Beispiel `fill`, `stroke`, `stroke-dasharray`, etc... auf diese Weise verwendet werden, zusätzlich zu den Verlaufs- und Musterversionen von den unten gezeigten. Attribute wie `width`, `height` oder Pfadbefehle können durch CSS nicht verändert werden. Am einfachsten ist es durch Probieren herauszufinden welche Attribute in CSS verfügbar sind.

> **Note:** Die [SVG Spezifikation](http://www.w3.org/TR/SVG/propidx.html) unterscheidet strikt zwischen Attributen, die _Eigenschaften_ sind und anderen Attributen. Ersteres kann mit CSS verändert werden, letzteres nicht.

CSS kann mit dem style Attribut direkt beim Element eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

oder es kann in eine spezielle Style-Sektion getan werden, welche eingebunden wird. Anstatt diesen dann in den `<head>` zu packen, wie in HTML, wird er in eine Sektion getan, welche `<defs> `heißt.` <defs> `steht für Definitionen (definitions) und ist dafür da, dass Elemente erstellt werden können, welche nicht direkt im SVG auftauchen, aber von anderen Elementen genutzt werden können.

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style type="text/css"><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

Styles in eine Sektion dieser Art zu bewegen kann es einfacher machen die Eigenschaften großer Elementgruppen anzupassen. Es können zusätzlich Dinge wie **hover-Pseudoklassen** genutzt werden, um Überrolleffekte zu erzeugen:

```css
 #MyRect:hover {
   stroke: black;
   fill: blue;
 }
```

Es kann auch ein externes Stylesheet für CSS mit [normaler XML-Stylesheet Syntax](http://www.w3.org/TR/xml-stylesheet/) angegeben werden:

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

dort könnte style.css etwa so aussehen:

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}
