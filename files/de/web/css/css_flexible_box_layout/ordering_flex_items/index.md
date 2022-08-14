---
title: Flex Elemente Sortieren
slug: Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items
tags:
  - Barrierefreiheit
  - CSS
  - Flex
  - Reihenfolge
  - Richtung
  - flexbox
  - umgekehrt
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items
original_slug: Web/CSS/CSS_Flexible_Box_Layout/Flex_Elemente_Sortieren
---
{{CSSRef}}

Neue Layout-Methoden wie z.B Flexbox und Grid geben die Möglichkeit, die Reihenfolge dessen Inhaltes zu verändern. Dieser Artikel handelt von den verschiedenen Möglichkeiten wie man die visuelle Reihenfolge des Inhalts, mithilfe von Flexbox, ändern kann. Dazu werden wir uns das Thema aus der perspektive der Barrierefreiheit betrachten.

## Die Anzeige der Elemente umkehren

Die {{cssxref("flex-direction")}} Eigenschaft kann einer der 4 folgenden Werte bekommen:

- `row // Reihe`
- `column // Spalte`
- `row-reverse // Reihe-umgekehrt`
- `column-reverse // Spalte-umgekehrt`

Bei den ersten 2 Werten, bleibt die Reihenfolge wie sie auch im Quelltext angegeben ist und zeigt diese nacheinander von der Startlinie an an. Die Elemente werden dabei entweder in einer Reihe (`row`), oder in einer Spalte (`column`) angezeigt.
![The items are displayed in a row starting on the left.](https://mdn.mozillademos.org/files/15649/Basics1.png)

![The items are displayed as a column starting from the top ](https://mdn.mozillademos.org/files/15650/align10.png)

Die letzten beiden Werte, kehren die Reihenfolge der Elemente um, indem Sie die Start und End-Linien wechseln

![The items are displayed in reverse order starting on the right-hand line.](https://mdn.mozillademos.org/files/15651/align9.png)

![The items are displayed in a column in reverse order starting at the bottom line.](https://mdn.mozillademos.org/files/15652/align11.png)

Denk dran das der Start der Linie mit den Schreibmodis verbunden ist. Das Reihenbeispiel oben demonstriert wie `row` und `row-reverse` in einer links-zu-rechts Sprache wie z.B. Deutsch funktioniert. Wenn du aber in einer rechts-zu-links Sprache wie z.B. Arabisch arbeitest dann würde `row` rechts starten und `row-reverse` links.

![Flex containers with Arabic letters showing how row starts from the right hand side and row-reverse from the left.](https://mdn.mozillademos.org/files/15647/order-rtl.png)

Das kann zwar nach einer schönen Möglichkeit aussehen, Elemente in einer umgekehrten Reihenfolge anzuzeigen, es sollte einem jedoch bewusst sein, das elemente nur _visuell_ in einer umgekehrten Reihenfolge angezeigt werden. Die Spezifikation sagt diesbezüglich folgendes:

> “Hinweis: Die Umsortierungs-möglichkeiten betreffen absichtlich nur die visuelle Ansicht und lassen dabei Sprech- und Navigationsbasierte Reihenfolgen außen vor. Das ermöglicht Autoren die Möglichkeit die visuelle Ansicht zu ändern, während sie die Quellen-Reihenfolge in intakt hält für nicht-CSS UAs und für lineare Modelle, wie z.B. Sprachmodelle und Sequentielle Navigationen” - [Reigenfolge und Orientation](https://www.w3.org/TR/css-flexbox-1/#flow-order)

Wenn die Elemente Hyperlinks sind, oder irgendwelche anderen Elemente zu denen der User hintabben kann, dann wäre die tab-reihenfolge die selbe, wie sie im Dokumenten-Quellcode vorkommt und nicht wie sie visuell angezeigt wird.

Wenn man einen `reverse` Wert benuzt, oder in irgendeiner Weise die Reihenfolge der Elemente beeinflusst, dann musst du schauen, ob man nicht doch die logische Reihenfolge im Quelltext ändert. Die Spezifikitation fährt fort mit einer Warnung, das man umsortierung nicht nutzen soll um Probleme im Quellcode zu fixen.

> “Autoren sollten die Reihenfolgen- oder Umgekehrtwerte der flex-flow/flex-direction Eigenschaften nicht als Ersatz für die tatsächliche Änderung des Dokumentes nutzen, da das die Barrierefreiheit des Dokumentes einschränkt.”

> **Note:** **Hinweis**: Firefox hatte ein paar Jahre lang einen Bug, bei dem es versucht hatte der visuellen Reihenfolge und nicht der Quelltext-Reihenfolge zu folgen, daruch verhielt es sich anders als andere Browser. Dieser Bug ist mittlerweile gefixt. Man sollte immer Quelltext-Reihenfolge als die logische Reihenfolge für das Dokument benutzen, da alle aktuellen User Agents diesem Schema folgen.

In dem Live-Beispiel unten habe ich einen focus-style hinzugefügt, damit man, wenn man mit tab von link zu link wechselt, sieht welcher link markiert wird. Wenn man die Reihenfolge mit `flex-direction` wechselst, dann sieht man wie die tab Reihenfolge immernoch der Reihenfolge der Elemente im Quelltext folgen.

{{EmbedGHLiveSample("css-examples/flexbox/order/order.html", '100%', 500)}}

Auf die gleiche Weise, wie das ändern des Wertes `flex-direction` nicht die Reihenfolge ändert, in denen zu Elementen navigiert werden, ändert es auch nicht die Reihenfolge in denen die Elemente gemalt werden. Es ist nur eine visuelle umkehrung der Elemente.

## Die order Eigenschaft

Zusätzlich zum umkehren der Reihenfolge, in welcher flex-elemente visuell dargestellt werden, kann man die Elemente individuell ansprechen und die visuelle Reihenfolge mit der {{cssxref("order")}} Eigenschaft.

Die `order` Eigenschaft legt die Elemente in Ordnungsgruppen. Das heißt, das den Elementen eine Zahl zugewiesen werden, welche die dazugehörige Gruppe repräsentieren. Danach werden die Elemente, in die Reihenfolge gebracht, wie die Zahlen es vorgeben, der kleinste Wert zuerst. Wenn mehr als ein Element, den selben Wert besitzen, dann werden die Elemente innerhalb ihrer Gruppe so ausgelegt, wie sie im Quelltext vorkommen.

Beispiel: Ich habe 5 flex-items und weise `order` Eigenschaften folgendermaßen zu:

- Quellelement 1: `order: 2`
- Quellelement 2: `order: 3`
- Quellelement 3: `order: 1`
- Quellelement 4: `order: 3`
- Quellelement 5: `order: 1`

Diese Elemente werden dann wie folgt dargestellt:

- Quellelement 3: `order: 1`
- Quellelement 5: `order: 1`
- Quellelement 1: `order: 2`
- Quellelement 2: `order: 3`
- Quellelement 4: `order: 3`

![Items have a number showing their source order which has been rearranged.](https://mdn.mozillademos.org/files/15653/order-property.png)

Um zu sehen, wie das die Reihenfolge beeinflusst, kann man im Live-Beispiel unten die Werte für `order` ändern. Man kann auch `flex-direction` zu `row-reverse` wechseln und sehen was passiert — die Start Linie ist getauscht, damit startet das sortieren von der anderen Seite.

{{EmbedGHLiveSample("css-examples/flexbox/order/flex-direction.html", '100%', 440)}}

Flex-items haben einen natürlichen `order` Wert von `0`, deshalb werden alle Elemente mit einem Zahlen-Wert größer als 0 nach Elementen angezeigt, welche noch keinen Expliziten `order` Wert erhalten haben.

Man kann auch negative Zahlenwerte verwenden, das ist ziemlich hilfreich. Wenn man ein Element als erstes anzeigen lassen will, aber die Reihenfolge aller anderen Elemente so lassen will wie sie sind, dann kann man diesem Element eine Reihenfolge von `-1` geben. Da das kleiner als 0 ist, wird dieses Element als erstes angezeigt.

Im Live-Code Beispiel unten habe Ich Elemente mithilfe einer Flexbox ausgelegt. Wenn man ändert welches Element die Klasse `active` besitzt, dann kann man ändern, welches Element als erstes angezeigt werden soll, mit allen anderen Elementen darunter.

{{EmbedGHLiveSample("css-examples/flexbox/order/negative-order.html", '100%', 520)}}

Die Elemente werden anhand der, wie es in der Spezifikation beschrieben ist, _order-modified- document order_ angezeigt. Der Wert der order-Eigenschaft wird berücksichtigt, bevor die Elemente angezeigt werden

Order ändert auch die Malreihenfolge der Elemente; Elemente mit einem geringerem `order` Wert, werden vor den Elementen mit einem höherem `order` Wert gemalt.

## Die order Eigenschaft und Barrierefreiheit

Wenn man die `order` Eigenschaft nutzt, dann hat man exakt die gleichen Implikationen, wenn es ums Thema Barrierefreiheit geht, wie beim ändern der `flex-direction`. Die Eigenschaft `order` ändert die Reihenfolge, in der Elemente gemalt werden und die Reihenfolge in der diese Elemente visuell auftauchen. Es ändert nichts an der sequentiellen Navigationsreihenfolge der Elemente. Deshalb könnte es passieren, dass wenn ein Benutzer auf einer Website durch die Zeilen tabbt, das dieser in einem ziemlich verwirrendem Weg durch das Layout springt.

Wenn man in irgendeinem Live-Beispiel auf dieser Seite hin und her tabbt, dann kann man sehen, wie `order` das potential hat, eine seltsame Erfahrung für alle Benutzer zu schaffen, die nicht ein Zeiger-Gerät verwenden. Um mehr über dieses Thema zu erfahren, empfehle Ich folgende Ressourcen:

- [Flexbox and the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [HTML Source Order vs CSS Display Order](http://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html)
- [The Responsive Order Conflict for Keyboard Focus](https://alastairc.uk/2017/06/the-responsive-order-conflict/)

## Anwendungsbeispiele für order

Manchmal gibt es Anwendungsorte, an denen es hilfreich ist, das die logische und visuelle Reihenfolge der Elemente voneinander getrennt sind. Vorsichtig eingesetzt ermöglicht die `order` Eigenschaft hilfreiche Lösungen für verbreitete Problemmuster.

Man hat z.B. ein Design einer Karte, welche Neuigkeiten anzeigt. Die Überschrift der Neuigkeiten ist das Schlüsselelement und wäre das Element, zu dem der Benutzer springen würde wenn er durch die verschiedenen Überschriften tabben würde. Die Karte hat dazu auch noch ein Datum; das fertige Design sieht dann ungefähr so aus:

![A design component with a date, then heading and then content.](https://mdn.mozillademos.org/files/15648/order-card.png)

Visually the date appears above the heading, im Quelltext. Jedoch, wenn die Karte von einem Programm vorgelesen wird, wäre es mir lieber, wenn der Titel als erstes vorgelesen wird und danach das Veröffentlichungsdatum. Das geht ganz einfach wenn man die `order` Eigenschaft nutzt.

Die Karte wird unser flex-container sein, mit `flex-direction` auf column. Dann gebe ich dem Datum die ` order:``-1 `. Das setzt es über die Überschrift.

{{EmbedGHLiveSample("css-examples/flexbox/order/usecase-order.html", '100%', 730)}}

`Diese kleinen Veränderungen sind die Art der Fälle in denen die order` Eigenschaft Sinn macht. Behalte die logische Abfolge als Lese und Tab Reihenfolge des Dokumentes und pflege das in einer Art und Weise, das es Barrierefrei strukturiert bleibt. Danach nutze `order` lediglich zur Design-Optimierung. Wenn man das tut, sollte man darauf achten, das man die Reihenfolge von Elementen, durch die der Benutzer durchtabbt, nicht durcheinander bringt. Du wirst schnell bemerken, ob deine Entwicklungs-Entscheidungen es für den Benutzer schwierig machen.
