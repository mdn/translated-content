---
title: Grundlegende Konzepte der Flexbox
slug: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
original_slug: Web/CSS/CSS_Flexible_Box_Layout/Grundlegende_Konzepte_der_Flexbox
---
{{CSSRef}}

Das Flexible Box Modul, üblicherweise als Flexbox bezeichnet, wurde als ein eindimensionales Layoutmodell und als eine Methode entwickelt, die eine Platzverteilung zwischen Elementen in einer Schnittstelle und leistungsstarke Ausrichtungsmöglichkeiten bietet. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir im Folgenden näher erläutern werden.

Wenn wir Flexbox als eindimensional bezeichnen, beschreiben wir die Tatsache, dass Flexbox sich mit dem Layout in einer Dimension zu einem Zeitpunkt beschäftigt - entweder als eine Zeile oder als eine Spalte. Dies kann mit dem zweidimensionalen Modell von [CSS Grid Layout](/de/docs/Web/CSS/CSS_Grid_Layout), das Spalten und Zeilen zusammen steuert, kontrastiert werden.

## Die zwei Achsen der Flexbox

Bei der Arbeit mit Flexbox muss man in zwei Achsen denken - der Hauptachse und der Querachse. Die Hauptachse wird durch die Eigenschaft {{cssxref("flex-direction")}} definiert, und die Querachse verläuft senkrecht dazu. Alles, was wir mit flexbox machen, bezieht sich auf diese Achsen, so dass es sich lohnt zu verstehen, wie sie von Anfang an funktionieren.

### Die Hauptachse

Die Hauptachse wird durch `flex-direction` definiert, die vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, läuft Ihre Hauptachse entlang der Zeile in **Zeilenrichtung**.

![If flex-direction is set to row the main axis runs along the row in the inline direction.](https://mdn.mozillademos.org/files/15614/Basics1.png)

Wählen Sie `column` oder `column-reverse` und Ihre Hauptachse läuft von oben nach unten - in **Blockrichtung**.

![If flex-direction is set to column the main axis runs in the block direction.](https://mdn.mozillademos.org/files/15615/Basics2.png)

### Die Querachse

Die Querachse (cross axis) verläuft senkrecht zur Hauptachse, d.h. wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` eingestellt ist, läuft die Querachse die Spalten hinunter.

![If flex-direction is set to row then the cross axis runs in the block direction.](https://mdn.mozillademos.org/files/15616/Basics3.png)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, dann verläuft die Querachse entlang der Zeilen.

![If flex-direction is set to column then the cross axis runs in the inline direction.](https://mdn.mozillademos.org/files/15617/Basics4.png)

Es ist wichtig zu verstehen, welche Achse die richtige ist, wenn wir uns mit der Ausrichtung und Justierung von Flex-Elementen befassen; Flexbox bietet Eigenschaften, die den Inhalt entlang der einen oder anderen Achse ausrichtet und justiert.

## Start- und Endzeilen

Ein weiterer wichtiger Bereich des Verständnisses ist, wie Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. In der Vergangenheit wurde CSS stark in Richtung horizontale und links-nach-rechts-Schreibweise ausgerichtet. Moderne Layoutmethoden umfassen den Bereich der Schreibmodi und so gehen wir nicht mehr davon aus, dass eine Textzeile oben links in einem Dokument beginnt und nach rechts verläuft, wobei neue Zeilen untereinander erscheinen.

Sie können mehr über die Beziehung zwischen Flexbox und der Writing Modes Spezifikation in einem späteren Artikel lesen, aber die folgende Beschreibung soll helfen zu erklären, warum wir nicht über links und rechts und oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex Elemente fließen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, dann ist die Anfangskante der Hauptachse links, die Endkante rechts.

![Working in English the start edge is on the left.](https://mdn.mozillademos.org/files/15618/Basics5.png)

Wenn ich auf Arabisch arbeiten würde, dann wäre die Anfangskante meiner Hauptachse rechts und die Endkante links.

![The start edge in a RTL language is on the right.](https://mdn.mozillademos.org/files/15619/Basics6.png)

In beiden Fällen befindet sich die Anfangskante der Querachse oben am Flexcontainer und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird das Nachdenken über Anfang und Ende statt links und rechts natürlich werden, und Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden arbeiten, wie CSS-Grid-Layout, die den gleichen Mustern folgen.

## Der Flex Container

Ein mit Flexbox angelegter Bereich eines Dokuments wird als **Flex Container** bezeichnet. Um einen Flex Container zu erstellen, setzen wir den Wert der Eigenschaft {{cssxref("display")}} des Bereichscontainers auf `flex` oder `inline-flex`. Sobald wir dies tun, werden die direkten Kinder dieses Containers zu flexiblen Elementen. Wie bei allen Eigenschaften in CSS sind einige Initialwerte definiert, so dass sich beim Erstellen eines Flex Containers alle enthaltenen Flex Items wie folgt verhalten.

- Elemente werden in einer Zeile angezeigt (die Standardeinstellung der Eigenschaft `flex-direction` ist `row`).
- Die Positionen beginnen an der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht auf der Hauptdimension aus, sondern können schrumpfen.
- Die {{cssxref("flex-basis")}} Eigenschaft wird auf `auto`gesetzt.
- Die{{cssxref("flex-wrap")}} Eigenschaft wird auf `nowrap`gesetzt.

Dies hat zur Folge, dass Ihre Elemente in einer Reihe angeordnet werden, wobei die Größe des Inhalts als Größe in der Hauptachse verwendet wird. Wenn es mehr Elemente gibt, als in den Container passen, werden sie nicht eingepackt, sondern überlaufen. Wenn einige Elemente größer als andere sind, dehnen sich alle Elemente entlang der Querachse aus, um ihre volle Größe zu erreichen.

Wie das aussieht, sehen Sie im folgenden Live-Beispiel. Versuchen Sie, die Elemente zu bearbeiten oder zusätzliche Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox zu testen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}}

### Wechsel der flex-direction

Das Hinzufügen der Eigenschaft {{cssxref("flex-direction")}} zum Flex Container erlaubt es uns, die Richtung zu ändern, in der unsere Flex Elemente angezeigt werden. Einstellung der `flex-direction`: `row-reverse` behält die Anzeige entlang der Zeile bei, jedoch werden die Start- und Endlinien umgeschaltet.

Wenn wir die `flex-direction` in eine Spalte (`column)`ändern, schaltet die Hauptachse um und unsere Elemente werden nun in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Start- und Endzeilen werden wieder umgeschaltet.

Das folgende Live-Beispiel hat die `flex-direction` auf `row-reverse` eingestellt. Versuchen Sie die anderen Werte - `row`, `column` and `column-reverse` - um zu sehen, was mit dem Inhalt passiert.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}

## Multi-line flex containers with flex-wrap

While flexbox is a one dimensional model, it is possible to cause our flex items to wrap onto multiple lines. In doing so, you should consider each line as a new flex container. Any space distribution will happen across that line, without reference to the lines either side.

To cause wrapping behaviour add the property {{cssxref("flex-wrap")}} with a value of `wrap`. Now, should your items be too large to all display in one line, they will wrap onto another line. The live sample below contains items that have been given a width, the total width of the items being too wide for the flex container. As `flex-wrap` is set to `wrap`, the items wrap. Set it to `nowrap`, which is also the initial value, and they will instead shrink to fit the container because they are using initial flexbox values that allows items to shrink. Using `nowrap` would cause an overflow if the items were not able to shrink, or could not shrink small enough to fit.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}

Find out more about wrapping flex items in the guide [Mastering Wrapping of Flex Items](/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items).

## The flex-flow shorthand

You can combine the two properties `flex-direction` and `flex-wrap` into the {{cssxref("flex-flow")}} shorthand. The first value specified is `flex-direction` and the second value is `flex-wrap`.

In the live example below try changing the first value to one of the allowable values for `flex-direction` - `row`, `row-reverse`, `column` or `column-reverse`, and also change the second to `wrap` and `nowrap`.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}

## Properties applied to flex items

To have more control over flex items we can target them directly. We do this by way of three properties:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

We will take a brief look at these properties in this overview, and you can gain a fuller understanding in the guide [Controlling Ratios of Flex Items on the Main Axis](/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax).

Before we can make sense of these properties we need to consider the concept of **available space**. What we are doing when we change the value of these flex properties is to change the way that available space is distributed amongst our items. This concept of available space is also important when we come to look at aligning items.

If we have three 100 pixel-wide items in a container which is 500 pixels wide, then the space we need to lay out our items is 300 pixels. This leaves 200 pixels of available space. If we don’t change the initial values then flexbox will put that space after the last item.

![This flex container has available space after laying out the items.](https://mdn.mozillademos.org/files/15620/Basics7.png)

If we instead would like the items to grow and fill the space, then we need to have a method of distributing the leftover space between the items. This is what the `flex` properties that we apply to the items themselves, will do.

### The `flex-basis` property

The `flex-basis` is what defines the size of that item in terms of the space it leaves as available space. The initial value of this property is `auto` — in this case the browser looks to see if the items have a size. In the example above, all of the items have a width of 100 pixels and so this is used as the `flex-basis`.

If the items don’t have a size then the content's size is used as the flex-basis. This is why when we just declare `display: flex` on the parent to create flex items, the items all move into a row and take only as much space as they need to display their contents.

### The `flex-grow` property

With the `flex-grow` property set to a positive integer, flex items can grow along the main axis from their `flex-basis`. This will cause the item to stretch and take up any available space on that axis, or a proportion of the available space if other items are allowed to grow too.

If we gave all of our items in the example above a `flex-grow` value of 1 then the available space in the flex container would be equally shared between our items and they would stretch to fill the container on the main axis.

The flex-grow property can be used to distribute space in proportion. If we give our first item a `flex-grow` value of 2 and the other items a value of 1, 2 parts will be given to the first item (100px out of 200px in the case of the example above), 1 part each the other two (50px each out of the 200px total).

### The `flex-shrink` property

Where the `flex-grow` property deals with adding space in the main axis, the `flex-shrink` property controls how it is taken away. If we do not have enough space in the container to lay out our items and `flex-shrink` is set to a positive integer the item can become smaller than the `flex-basis`. As with `flex-grow` different values can be assigned in order to cause one item to shrink faster than others — an item with a higher value set for `flex-shrink` will shrink faster than its siblings that have lower values.

The minimum size of the item will be taken into account while working out the actual amount of shrinkage that will happen, which means that flex-shrink has the potential to appear less consistent than flex-grow in behavior. We’ll therefore take a more detailed look at how this algorithm works in the article Controlling Ratios of items along the main axis.

> **Note:** Note that these values for `flex-grow` and `flex-shrink` are proportions. Typically if we had all of our items set to flex: `1 1 200px` and then wanted one item to grow at twice the rate, we would set that item to flex: `2 1 200px`. However you could use flex: `10 1 200px` and flex: `20 1 200px` if you wanted.

### Shorthand values for the flex properties

You will very rarely see the `flex-grow`, `flex-shrink`, and `flex-basis` properties used individually; instead they are combined into the {{cssxref("flex")}} shorthand. The `flex` shorthand allows you to set the three values in this order — `flex-grow`, `flex-shrink`, `flex-basis`.

The live example below allows you to test out the different values of the flex shorthand; remember that the first value is `flex-grow`. Giving this a positive value means the item can grow. The second is `flex-shrink` — with a positive value the items can shrink, but only if their total values overflow the main axis. The final value is `flex-basis`; this is the value the items are using as their base value to grow and shrink from.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}

There are also some predefined shorthand values which cover most of the use cases. You will often see these used in tutorials, and in many cases these are all you will need to use. The predefined values are as follows:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Setting `flex: initial` resets the item to the initial values of Flexbox. This is the same as `flex: 0 1 auto`. In this case the value of `flex-grow` is 0, so items will not grow larger than their `flex-basis` size. The value of `flex-shrink` is 1, so items can shrink if they need to rather than overflowing. The value of `flex-basis` is `auto`. Items will either use any size set on the item in the main dimension, or they will get their size from the content size.

Using `flex: auto` is the same as using `flex: 1 1 auto`; everything is as with `flex:initial` but in this case the items can grow and fill the container as well as shrink if required.

Using `flex: none` will create fully inflexible flex items. It is as if you wrote `flex: 0 0 auto`. The items cannot grow or shrink but will be laid out using flexbox with a `flex-basis` of `auto`.

The shorthand you often see in tutorials is `flex: 1` or `flex: 2` and so on. This is as if you used `flex: 1 1 0`. The items can grow and shrink from a `flex-basis` of 0.

Try these shorthand values in the live example below.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}

## Alignment, justification and distribution of free space between items

A key feature of flexbox is the ability to align and justify items on the main- and cross-axes, and to distribute space between flex items.

### `align-items`

The {{cssxref("align-items")}} property will align the items on the cross axis.

The initial value for this property is `stretch` and this is why flex items stretch to the height of the tallest one by default. They are in fact stretching to fill the flex container — the tallest item is defining the height of that.

You could instead set `align-items` to `flex-start` in order to make the items line up at the start of the flex container, `flex-end` to align them to the end, or `center` to align them in the centre. Try this in the live example — I have given the flex container a height in order that you can see how the items can be moved around inside the container. See what happens if you set the value of align-items to:

- `stretch`
- `flex-start`
- `flex-end`
- `center`

{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}

### `justify-content`

The {{cssxref("justify-content")}} property is used to align the items on the main axis, the direction in which `flex-direction` has set the flow. The initial value is `flex-start` which will line the items up at the start edge of the container, but you could also set the value to `flex-end` to line them up at the end, or `center` to line them up in the centre.

You can also use the value `space-between` to take all the spare space after the items have been laid out, and share it out evenly between the items so there will be an equal amount of space between each item. To cause an equal amount of space on the right and left of each item use the value `space-around`. With `space-around`, items have a half-size space on either end. Or, to cause items to have equal space around them use the value `space-evenly`. With `space-evenly`, items have a full-size space on either end.

Try the following values of `justify-content` in the live example:

- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`
- `space-evenly`

{{EmbedGHLiveSample("css-examples/flexbox/basics/justify-content.html", '100%', 380)}}

In the article [Aligning Items in a Flex Container](/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) we will explore these properties in more depth, in order to have a better understanding of how they work. These simple examples however will be useful in the majority of use cases.

## Next steps

After reading this article you should have an understanding of the basic features of Flexbox. In the next article we will look at [how this specification relates to other parts of CSS](/de/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods).
