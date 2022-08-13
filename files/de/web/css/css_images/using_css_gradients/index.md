---
title: Verwendung von CSS Farbverläufen
slug: Web/CSS/CSS_Images/Using_CSS_gradients
tags:
  - Beispiel
  - CSS
  - CSS Bild
  - Guide
  - NeedsLiveSample
  - NeedsUpdate
  - Web
  - erweitert
translation_of: Web/CSS/CSS_Images/Using_CSS_gradients
original_slug: Farbverläufe_in_CSS
---
**CSS Farbverläufe** sind neue Typen von {{cssxref("&lt;image&gt;")}}, die durch das [CSS3](/de/docs/CSS/CSS3 "CSS3") Image Module hinzugefügt wurden. Die Verwendung von CSS Farbverläufen erlaubt es, weiche Übergänge zwischen zwei oder mehr angegebenen Farben anzuzeigen. Dies ermöglicht es, Bilder für diese Effekte zu vermeiden, was Downloadzeit und Bandbreitennutzung verringert. Darüber hinaus sehen Objekte besser aus, wenn sie herangezoomt werden, da der Farbverlauf durch den Browser erzeugt wird, sodass das Layout viel flexibler gestaltet werden kann.

Browser unterstützen zwei Arten von Verläufen: _lineare_, definiert durch die {{cssxref("linear-gradient")}} Funktion, und _radiale_, definiert durch {{cssxref("radial-gradient")}}.

## Lineare Farbverläufe

Um einen linearen Farbverlauf zu erstellen, wird ein Startpunkt gesetzt und eine Richtung (als Winkel), entlang welcher der Verlaufseffekt angewendet wird. Es werden auch **Farbstopps** definiert. Farbstopps sind die Farben, zwischen denen Gecko weiche Übergänge darstellen soll. Es müssen mindestens zwei angegeben werden, es können jedoch auch mehrere definiert werden, um komplexere Verlaufseffekte zu erzeugen.

### Einfache lineare Farbverläufe

Hier ist ein linearer Farbverlauf, der in der Mitte (horizontal) oben (vertikal) mit blau beginnt und in weiß übergeht.

| Screenshot                                           | Livedemo |
| ---------------------------------------------------- | -------- |
| ![](/@api/deki/files/3950/=basic_linear_bluetop.png) |          |

```css
/* Die alte Syntax, veraltet und mit Präfix versehen, für alte Browser */
background: -prefix-linear-gradient(top, blue, white);

/* Die neue Syntax, die von Browsern benötigt wird, die dem Standard folgen (Opera 12.1,
   IE 10, Firefox 16, Chrome 26, Safari 6.1), ohne Präfix */
background: linear-gradient(to bottom, blue, white);
```

(Siehe die [Browser Kompatibilitätstabelle](/de/docs/Web/CSS/linear-gradient#Browser_Kompatibilität) für eine Übersicht der Präfixe, die benötigt werden, um verschiedene Browserversionen zu unterstützen).

Der gleiche Farbverlauf wird geändert, sodass er von links nach rechts verläuft:

| Screenshot                                                                     | Livedemo |
| ------------------------------------------------------------------------------ | -------- |
| ![basic_linear_blueleft.png](/@api/deki/files/3951/=basic_linear_blueleft.png) |          |

```css
/* Die alte Syntax, veraltet und mit Präfix versehen, für alte Browser */
background: -prefix-linear-gradient(left, blue, white);

/* Die neue Syntax, die von Browsern benötigt wird, die dem Standard folgen (Opera 12.1,
   IE 10, Firefox 16, Chrome 26, Safari 6.1), ohne Präfix */
background: linear-gradient(to right, blue, white);
```

(Siehe die [Browser Kompatibilitätstabelle](/de/docs/Web/CSS/linear-gradient#Browser_Kompatibilität) für eine Übersicht der Präfixe, die benötigt werden, um verschiedene Browserversionen zu unterstützen).

Der Verlauf kann diagonal gestaltet werden, indem die horizontale und vertikale Startposition definiert wird. Zum Beispiel:

| Screenshot                                                                           | Livedemo |
| ------------------------------------------------------------------------------------ | -------- |
| ![basic_linear_bluetopleft.png](/@api/deki/files/3952/=basic_linear_bluetopleft.png) |          |

```css
/* Die alte Syntax, veraltet und mit Präfix versehen, für alte Browser */
background: -prefix-linear-gradient(left top, blue, white);

/* Die neue Syntax, die von Browsern benötigt wird, die dem Standard folgen (Opera 12.1,
   IE 10, Firefox 16, Chrome 26, Safari 6.1), ohne Präfix */
background: linear-gradient(to bottom right, blue, white);
```

### Verwendung von Winkeln

Falls kein Winkel angegeben wird, wird er automatisch durch die angegebene Richtung bestimmt. Falls mehr Kontrolle über die Richtung des Verlaufs erwünscht ist, kann der Winkel explizit angegeben werden.

Als Beispiel sind hier zwei Verläufe, der erste mit einer Richtung nach rechts und der zweite mit einem Winkel von 70 Grad.

![linear_gradient_angle.png](/@api/deki/files/3953/=linear_gradient_angle.png)

Der rechte verwendet CSS wie folgt:

```css
background: linear-gradient(70deg, black, white);
```

Der Winkel wird angegeben als ein Winkel zwischen horizontaler Linie und der Verlaufslinie gegen den Uhrzeigersinn. Mit anderen Worten, `0deg` erzeugt einen vertikalen Farbverlauf von unten nach oben, während `90deg` einen horizontalen Verlauf von links nach rechts erzeugt:

![linear_redangles.png](/files/3811/linear_red_angles.png)

```css
background: linear-gradient(<angle>, red, white);
```

> **Hinweis:** Mehrere Browser implementieren (mit Präfix) einen älteren Entwurf der Spezifikation, wo `0deg` nach rechts anstatt nach oben zeigte. Daher sollte auf den Wert des Winkels geachtet werden, wenn der standardisierte `linear-gradient` und der mit Präfix versehene gemischt verwendet werden. Eine einfache Formel hierfür ist 90 - x = y, wobei x die Standardverwendung und y die nicht standardisierte, mit Herstellerpräfix versehene Verwendung ist.

### Farbstopps

Farbstopps sind Punkte entlang der Verlaufslinie, die eine bestimmte Farbe an dieser Position angeben. Die Position kann entweder als ein Prozentwert der Länge der Linie oder als absolute Länge angegeben werden. Es können beliebig viele Farbstopps definiert werden, um den gewünschten Effekt zu erzielen.

Falls die Position als Prozentwert angegeben wird, repräsentiert `0%` den Startpunkt und `100%` den Endpunkt; jedoch können auch Werte außerhalb dieses Bereichs verwendet werden, falls nötig, um den gewünschten Effekt zu erhalten.

#### Beispiel: Drei Farbstopps

Dieses Beispiel definiert drei Farbstopps:

| Screenshot                                                               | Livedemo |
| ------------------------------------------------------------------------ | -------- |
| ![linear_colorstops1.png](/@api/deki/files/3955/=linear_colorstops1.png) |          |

```css
/* Die alte Syntax, veraltet und mit Präfix versehen, für alte Browser */
background: -prefix-linear-gradient(top, blue, white 80%, orange);

/* Die neue Syntax, die von Browsern benötigt wird, die dem Standard folgen (Opera 12.1,
   IE 10, Firefox 16, Chrome 26, Safari 6.1), ohne Präfix */
background: linear-gradient(to bottom, blue, white 80%, orange);
```

Beachte, dass der erste und letzte Farbstopp keine Position definieren; daher werden ihnen automatisch Werte von 0% und 100% zugewiesen. Der mittlere Farbstopp definiert eine Position von 80%, was ihn ziemlich weit nach unten verlagert.

#### Beispiel: Gleichmäßig verteilte Farbstopps

Hier ist ein Beispiel, das eine Vielzahl an Farben verwendet, die alle gleichmäßig verteilt sind:

| Screenshot                                                       | Livedemo |
| ---------------------------------------------------------------- | -------- |
| ![linear_rainbow.png](/@api/deki/files/3956/=linear_rainbow.png) |          |

```css
/* Die alte Syntax, veraltet und mit Präfix versehen, für alte Browser */
background: -prefix-linear-gradient(left, red, orange, yellow, green, blue);

/* Die neue Syntax, die von Browsern benötigt wird, die dem Standard folgen (Opera 12.1,
   IE 10, Firefox 16, Chrome 26, Safari 6.1), ohne Präfix */
background: linear-gradient(to right, red, orange, yellow, green, blue);
```

Beachte, dass die Farbstopps automatisch gleichmäßig verteilt werden, wenn keine Positionen angegeben werden.

### Transparenz und Farbverläufe

Farbverläufe unterstützen Transparenz. Diese kann zum Beispiel dazu benutzt werden, mehrere Hintergründe übereinander zu legen, um Fadingeffekte bei Hintergrundbilder zu erzeugen. Um dies zu erreichen, können entweder `rgba` Farben, `hsla` Farben oder das Schlüsselwort `transparent` verwendet werden (siehe [Farbwerte](/de/docs/Web/CSS/Farben)). Jedoch sei darauf hingewiesen, dass einige Browser das Schlüsselwort `transparent` als `rgba(0,0,0,0)` anstatt `rgba(255,255,255,0)` rendern, was zu unerwarteten Ergebnissen (und potentiell dunklen Stellen) führen kann wenn die Farbverläufe sich überblenden. Daher ist es sicherer, opake Farbverläufe zu definieren.

Hier ist ein Beispiel, wie Transparenz in Farbverläufen verwendet wird:

![Beispiel für Farbverläufe mit Transparenz](/files/4275/linear_multibg_transparent2.png)

```css
/* Die alte Syntax, veraltet und mit Präfix versehen, für alte Browser */
background: -prefix-linear-gradient(left, rgba(255,255,255,0),
  rgba(255,255,255,1)), url(http://foo.com/image.jpg);

/* Die neue Syntax, die von Browsern benötigt wird, die dem Standard folgen (Opera 12.1,
   IE 10, Firefox 16, Chrome 26, Safari 6.1), ohne Präfix */
background: linear-gradient(to right, rgba(255,255,255,0),
  rgba(255,255,255,1)), url(http://foo.com/image.jpg);
```

Die Hintergründe sind überlagert, wobei der erste Hintergrund oben liegt und jeder weitere Hintergrund weiter unten. Durch die Überlagerung von Hintergründen auf diese Weise können kreative Effekte erzeugt werden, wie oben zu sehen.

## Radiale Farbverläufe

Radiale Farbverläufe werden durch die {{cssxref("radial-gradient")}} Funktion definiert. Die Syntax ist ähnlich der linearer Farbverläufe, außer, dass die Endform (ob Kreis oder Ellipse) des Verlaufs angegeben werden kann, als auch deren Größe. Standardmäßig ist die Endform eine Ellipse mit den gleichen Proportionen wie die der Containerbox.

### Farbstopps

Farbstopps können auf die gleiche Weise wie bei linearen Farbverläufen angegeben werden. Die Verlaufslinie verläuft dabei von der Startposition in alle Richtungen.

#### Beispiel: Gleichmäßig verteilte Farbstopps

Standardmäßig werden Farbstopps wie bei linearen Verläufen gleichmäßig verteilt:

| Screenshot                                                                   | Livedemo |
| ---------------------------------------------------------------------------- | -------- |
| ![radial_gradient_even.png](/@api/deki/files/3958/=radial_gradient_even.png) |          |

```css
background: radial-gradient(red, yellow, rgb(30, 144, 255));
```

#### Beispiel: Explizit verteilte Farbstopps

Hier werden bestimmte Positionen für die Farbstopps definiert:

| Screenshot                                                                       | Livedemo |
| -------------------------------------------------------------------------------- | -------- |
| ![radial_gradient_varied.png](/@api/deki/files/3959/=radial_gradient_varied.png) |          |

```css
background: radial-gradient(red 5%, yellow 25%, #1E90FF 50%);
```

### Größe

Dies ist einer der Bereiche, in denen sich radiale von linearen Farbverläufen unterscheiden. Es kann ein Größenwert angegeben werden, der den Punkt definiert, der die Größe des Kreises oder der Ellipse bestimmt. Siehe die [Beschreibung der Größenkonstanten](/de/docs/Web/CSS/radial-gradient#Größenkonstanten) für Details.

#### Beispiel: `closest-side` für Ellipsen

Diese Ellipse verwendet den Größenwert `closest-side`, welcher bedeutet, dass die Größe durch die Distanz zwischen dem Startpunkt (der Mitte) und der nähesten Seite der eingeschlossenen Box bestimmt wird.

| Screenshot                                                                   | Livedemo |
| ---------------------------------------------------------------------------- | -------- |
| ![radial_ellipse_size1.png](/@api/deki/files/3960/=radial_ellipse_size1.png) |          |

```css
background: radial-gradient(ellipse closest-side, red, yellow 10%, #1E90FF 50%, white);
```

#### Beispiel: `farthest-corner` für Ellipsen

Dieses Beispiel ist ähnlich zum vorherigen mit dem Unterschied, dass die Größe der Ellipse durch `farthest-corner` bestimmt wird, welches die Größe des Verlaufs durch die Distanz zwischen Startpunkt und der vom Startpunkt am weitesten entfernten Ecke der engeschlossenen Box bestimmt.

| Screenshot                                                                   | Livedemo |
| ---------------------------------------------------------------------------- | -------- |
| ![radial_ellipse_size2.png](/@api/deki/files/3961/=radial_ellipse_size2.png) |          |

```css
background: radial-gradient(ellipse farthest-corner, red, yellow 10%, #1E90FF 50%, white);
```

#### Beispiel: `closest-side` für Kreise

Dieses Beispiel verwendet `closest-side`, welches die Größe des Kreises als die Distanz zwischen dem Startpunkt und der nähesten Seite definiert.

| Screenshot                                                                 | Livedemo |
| -------------------------------------------------------------------------- | -------- |
| ![radial_circle_size1.png](/@api/deki/files/3962/=radial_circle_size1.png) |          |

```css
background: radial-gradient(circle closest-side, red, yellow 10%, #1E90FF 50%, white);
```

Hier entspricht der Radius des Kreises der Hälfte der Höhe der Box, da der obere und untere Rand gleich weit vom Startpunkt entfernt sind und näher als der linke und rechte Rand sind.

## Wiederholung von Farbverläufen

Die {{cssxref("linear-gradient")}} und {{cssxref("radial-gradient")}} Eigenschaften unterstützen nicht automatisch die Wiederholung von Farbstopps. Jedoch sind die Eigenschaften {{cssxref("repeating-linear-gradient")}} und {{cssxref("repeating-radial-gradient")}} für diese Funktionalität verfügbar.

### Beispiele: Sich wiederholender linearer Farbverlauf

Dieses Beispiel verwendet {{cssxref("repeating-linear-gradient")}}, um einen Farbverlauf zu erzeugen:

| Screenshot                                                                             | Livedemo |
| -------------------------------------------------------------------------------------- | -------- |
| ![repeating_linear_gradient.png](/@api/deki/files/3964/=repeating_linear_gradient.png) |          |

```css
background: repeating-linear-gradient(-45deg, red, red 5px, white 5px, white 10px);
```

Ein weiteres Beispiel, das die {{cssxref("repeating-linear-gradient")}} Eigenschaft verwendet.

[![repeat_background_gradient_checked.png](/@api/deki/files/6192/=repeat_background_gradient_checked.png?size=thumb)](/@api/deki/files/6192/=repeat_background_gradient_checked.png)

```css
background-color: #000;
background-image: repeating-linear-gradient(90deg, transparent, transparent 50px,
      rgba(255, 127, 0, 0.25) 50px, rgba(255, 127, 0, 0.25) 56px, transparent 56px, transparent 63px,
      rgba(255, 127, 0, 0.25) 63px, rgba(255, 127, 0, 0.25) 69px, transparent 69px, transparent 116px,
      rgba(255, 206, 0, 0.25) 116px, rgba(255, 206, 0, 0.25) 166px),
repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255, 127, 0, 0.25) 50px,
      rgba(255, 127, 0, 0.25) 56px, transparent 56px, transparent 63px, rgba(255, 127, 0, 0.25) 63px,
      rgba(255, 127, 0, 0.25) 69px, transparent 69px, transparent 116px, rgba(255, 206, 0, 0.25) 116px,
      rgba(255, 206, 0, 0.25) 166px),
repeating-linear-gradient(-45deg, transparent, transparent 5px, rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px),
repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(143, 77, 63, 0.25) 5px,
      rgba(143, 77, 63, 0.25) 10px);
```

### Beispiel: Sich wiederholender radialer Farbverlauf

Dieses Beispiel verwendet {{cssxref("repeating-radial-gradient")}}, um einen Farbverlauf zu erzeugen:

| Screenshot                                                                             | Livedemo |
| -------------------------------------------------------------------------------------- | -------- |
| ![repeating_radial_gradient.png](/@api/deki/files/3965/=repeating_radial_gradient.png) |          |

```css
background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
```

## Siehe auch

- Farbverlauf-bezogene Artikel: {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;gradient&gt;")}}, {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}.
