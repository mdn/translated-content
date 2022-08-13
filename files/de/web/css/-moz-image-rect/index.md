---
title: '-moz-image-rect'
slug: Web/CSS/-moz-image-rect
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Referenz
  - NeedsCompatTable
  - NeedsUpdate
  - Non-standard
translation_of: Web/CSS/-moz-image-rect
---
{{Non-standard_header}}{{CSSRef}}{{gecko_minversion_header("2.0")}}

## Übersicht

Dieser Wert für [CSS](/de/docs/Web/CSS) {{cssxref("background-image")}} ermöglicht es, einen Bereich eines größeren Bildes als Hintergrund zu verwenden. Dies erlaubt es beispielsweise, verschiedene Teile eines größeren Bildes als Hintergründe in verschiedenen Teilen des Inhalts zu verwenden.

Dies funktioniert ähnlich der {{cssxref("-moz-image-region")}} Eigenschaft, welche zusammen mit der {{cssxref("list-style-image")}} verwendet wird, um Teile eines Bildes als Aufzählungszeichen in einer Liste zu verwenden. Diese Eigenschaft wird jedoch für CSS Hintergründe verwendet.

Die Syntax für ein Rechteck ist ähnlich der der [`rect()`](/de/docs/Web/CSS/shape#Syntax) Funktion, die einen {{cssxref("&lt;shape&gt;")}} CSS Typ generiert. Alle vier Werte sind relativ zur linken oberen Ecke des Bildes.

## Syntax

    -moz-image-rect({{cssxref("&lt;uri&gt;")}}, top, right, bottom, left);

### Werte

- {{cssxref("&lt;uri&gt;")}}
  - : Der URI des Bildes, von dem das Teilbild verwendet werden soll.
- `top`
  - : Der obere Rand, definiert als {{cssxref("&lt;length&gt;")}} des Teilbilds innerhalb des angegebenen Bildes.
- `right`
  - : Der rechte Rand, definiert als {{cssxref("&lt;length&gt;")}} des Teilbilds innerhalb des angegebenen Bildes.
- `bottom`
  - : Der untere Rand, definiert als {{cssxref("&lt;length&gt;")}} des Teilbilds innerhalb des angegebenen Bildes.
- `left`
  - : Der linke Rand, definiert als {{cssxref("&lt;length&gt;")}} des Teilbilds innerhalb des angegebenen Bildes.

## Beispiel

Dieses Beispiel lädt ein Bild und verwendet es in vier Segmenten, um das Firefox Logo in vier {{HTMLElement("div")}} Blöcken darzustellen. Wenn auf deren Container geklickt wird, werden die vier Segmente rotiert, indem die {{cssxref("background-image")}} Eigenschaftswerte zwischen den vier {{HTMLElement("div")}} Blöcken getauscht werden.

### CSS

Das CSS definiert einen Containerstil, dann die Stile für die vier Boxen, die das gesamte Bild ausmachen.

Der Container sieht folgendermaßen aus:

```css
#container {
  width: 267px;
  height: 272px;
  top: 100px;
  left: 100px;
  position: absolute;
  font-size: 16px;
  text-shadow: white 0px 0px 6px;
  text-align: center;
}
```

Dann werden die vier Boxen definiert, die die Segmente des Bildes beschreiben. Hier wird eines nach dem anderen dargestellt.

```css
#box1 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 0%, 50%, 50%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

Dies ist die linke obere Ecke des Bildes. Sie beschreibt ein Rechteck, das das linke obere Viertel des Bildes der Datei `firefox.jpg` beinhaltet.

```css
#box2 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 0%, 100%, 50%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

Dies beschreibt die rechte obere Ecke des Bildes.

Die anderen Ecken folgen einem ähnlichen Schema:

```css
#box3 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 50%, 50%, 100%, 0%);
  width: 133px;
  height: 136px;
  position: absolute;
}

#box4 {
  background-image: -moz-image-rect(url(https://mdn.mozillademos.org/files/12053/firefox.png), 50%, 100%, 100%, 50%);
  width: 133px;
  height: 136px;
  position: absolute;
}
```

### HTML

Das HTML ist recht einfach:

```html
<div id="container" onclick="rotate()">
  <div id="box1" style="left:0px;top:0px;">Top left</div>
  <div id="box2" style="left:133px;top:0px;">Top right</div>
  <div id="box3" style="left:0px;top:136px;">Bottom left</div>
  <div id="box4" style="left:133px;top:136px;">Bottom right</div>
</div>
```

Dies platziert die vier Segmente des Bildes in einem 2x2 Raster. Diese vier Segmente sind alle innerhalb eines größeren {{HTMLElement("div")}} Blocks, dessen primärer Zweck das Erhalten von Klickereignissen und deren Senden an den JavaScript Code ist.

### Der JavaScript Code

Dieser Code verarbeitet das Klickereignis, wenn auf den Container geklickt wird.

```js
function rotate() {
  var prevStyle = window.getComputedStyle(document.getElementById("box4"), null).getPropertyValue("background-image");

  // Now that we've saved the last one, start rotating

  for (var i=1; i<=4; i++) {
    var curId = "box" + i;

    // Shift the background images

    var curStyle = window.getComputedStyle(document.getElementById(curId), null).getPropertyValue("background-image");
    document.getElementById(curId).style.backgroundImage = prevStyle;
    prevStyle = curStyle;
  }
}
```

Dies verwendet {{domxref("window.getComputedStyle()")}}, um den Stil jedes Elements auszulesen und dem nächsten Element zuzuweisen. Beachte, dass es zuvor eine Kopie des letzten Boxstils speichert, da dieser durch den Stil des dritten Elements überschrieben wird. Durch das simple Kopieren der Werte der {{cssxref("background-image")}} Eigenschaft von einem zum nächsten Element durch jeden Mausklick, wird dieser erwünschte Effekt erreicht.

### Wie es aussieht

{{EmbedLiveSample("Beispiel","400","400")}}

## Bugs

- {{WebkitBug(32177)}}
