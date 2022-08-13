---
title: Hintergrundbilder skalieren
slug: Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
tags:
  - CSS Hintergrundbild
  - Skalierung Hintergrundbild
translation_of: Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
translation_of_original: Web/CSS/CSS_Background_and_Borders/Scaling_background_images
original_slug: Web/Guide/CSS/Scaling_background_images
---
Die {{ cssxref("background-size") }} CSS Eigenschaft ermöglicht es, die Größe von Hintergrundbildern einzustellen, anstatt das voreingestellte Verhalten, das Bild auf die volle Größe zu kacheln, zu verwenden.Man kann das Bild nach Wunsch nach oben oder unten skalieren.

## Kacheln eines großen Bildes

Nehmen wir ein großes Bild, ein 2982x2808 Firefox Logo. Wir wollen (auch wenn das höchstwahrscheinlichst ein grauenhaft schlechtes Seitendesign ergibt) vier Kopien dieses Bildes in ein 300x300 Pixel Quadrat kacheln, damit es so aussieht:

![](https://mdn.mozillademos.org/files/8965/ss1.png)

Das wird erreicht, indem wir folgendes CSS verwenden:

```css
.square {
  width: 300px;
  height: 300px;
  background-image: url(firefox_logo.png);
  border: solid 2px;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
  background-size: 150px;
}
```

Man braucht für {{ cssxref("background-size") }} kein Präfix mehr zu setzen, jedoch können Präfix-Versionen hinzugefügt werden, wenn ältere Browser angesprochen werden sollen.

## Dehnen eines Bildes

Sowohl die horizontale als auch die vertikale Größe des Bildes kann angegeben werden, wie hier angegeben:

```css
background-size: 300px 150px;
```

So sieht das Ergebnis aus:

![](https://mdn.mozillademos.org/files/8967/ss2.png)

## Hochskalieren eines Bildes

Auf der anderen Seite des Spektrums kann ein Bild im Hintergrund auch hochskaliert werden. Hier wird ein 32x32 Pixel favicon auf 300x300 Pixel skaliert:

![](https://mdn.mozillademos.org/files/8969/ss3.png)

```css
.square2 {
  width: 300px;
  height: 300px;
  background-image: url(favicon.png);
  background-size: 300px;
  border: solid 2px;
  text-shadow: white 0px 0px 2px;
  font-size: 16px;
}
```

Wie man sehen kann, ist das CSS im Grunde identisch, außer dem Namen der Bilddatei.

## Spezielle Werte: "contain" und "cover"

Neben den {{cssxref("&lt;length&gt;")}} Werten, bietet die {{ cssxref("background-size") }} CSS Eigenschaft zwei spezielle Werte für Größen, `contain` und `cover`. Sehen wir uns diese an.

### `contain`

Der contain Wert spezifiziert, unabhängig von der Größe der umgebenden Box, die Skalierung des Hintergrundbildes so, dass jede Seite so breit als irgend möglich angezeigt wird ohne über die Länge der korrespondierenden Seite des Containers hinauszugehen. Versuche mit einem Browser, der skalierende Hintergründe unterstützt (wie z. B. Firefox 3.6 oder höher), dieses Fenster in der Größe zu verändern, um das Verhalten am untenstehenden Live-Beispiel zu sehen.

{{ EmbedLiveSample("contain", "100%", "220") }}

```html
<div class="bgSizeContain">
  <p>Try resizing this window and see what happens.</p>
</div>
```

```css
.bgSizeContain {
  height: 200px;
  background-image: url(https://mdn.mozillademos.org/files/8971/firefox_logo.png);
  background-size: contain;
  border: 2px solid darkgray;
  color: #000; text-shadow: 1px 1px 0 #fff;
}
```

### `cover`

Der cover Wert spezifizert, dass das Hintergundbild in der Größe so angezeigt wird, dass es selbst so klein als möglich ist, dabei aber auf alle Fälle in beiden Dimensionen größer oder gleich der jeweiligen korresponierenden Maße des Containers ist.

{{ EmbedLiveSample("cover", "100%", "220") }}

Das Beispiel verwendet folgendes HTML & CSS:

```html
<div class="bgSizeCover">
  <p>Try resizing this window and see what happens.</p>
</div>
```

```css
.bgSizeCover {
  height: 200px;
  background-image: url('https://mdn.mozillademos.org/files/8971/firefox_logo.png');
  background-size: cover;
  border: 2px solid darkgray;
  color: #000; text-shadow: 1px 1px 0 #fff;
```

## Siehe auch

- {{ cssxref("background-size") }}
- {{ cssxref("background") }}
