---
title: clear
slug: Web/CSS/clear
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Positionierung
  - Layout
  - Referenz
translation_of: Web/CSS/clear
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft **`clear`** legt fest, ob ein Element unter einem fließenden ([float](/de/docs/Web/CSS/float)) Element verschoben werden muss, die ihm vorausgehen. Die `clear` Eigenschaft gilt für fließende und nicht fließenden Elemente.

{{EmbedInteractiveExample("pages/css/clear.html")}}

Wenn sie auf nicht fließende Blöcke angewendet wird, verschiebt sie den Rahmen ([border edge](/de/docs/Web/CSS/CSS_Boxmodell/Einführung_in_das_CSS_Boxmodell)) des Elements nach unten, bis sie unter den Rand ([margin edge](/de/docs/Web/CSS/CSS_Boxmodell/Einführung_in_das_CSS_Boxmodell "CSS/box_model")) aller relevanten fließende Elemente liegt. Der obere Rand ([margin](/de/docs/Web/CSS/margin "CSS/box_model")) des nicht fließenden Blocks kollabiert.

Vertikale Ränder (`margins`) zwischen zwei fließenden Elementen hingegen kollabieren nicht. Wenn sie auf fließenden Elemente angewendet werden, wird der Rand des unteren Elements unter den Rand aller relevanten fließenden Elementen verschoben. Dies wirkt sich auf die Position späterer fließenden Elementen aus, da spätere fließende Elemente nicht höher positioniert werden können als frühere.

Die relevanen fließenden Elemente, deren Fließeigenschaft beendet werden soll, sind die früheren fließenden Elemente mit der selben [Blockformatierungskontexts](/de/docs/Web/Guide/CSS/Block_formatting_context) .

> **Hinweis:** Wenn ein Element nur fließenden ([float](/de/docs/Web/CSS/float)) Elemente enthält, kollabiert seine Höhe zu null. Wenn Sie möchten, dass es immer in der Lage ist, seine Größe zu ändern, so dass es in seinem Inneren schwebende Elemente enthält, müssen Sie das `float` für seine Kinder selbst beenden. Dies wird **clearfix** genannt, und eine Weg, besteht darin, ein `clear` zu einem ersetzten {{cssxref("::after")}} [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) hinzuzufügen.```html
> #container:after {
> content: "";
> display: block;
> clear: both;
> }
>
> ```
>
> ```

## Syntax

```css
/* Keyword values */
clear: none;
clear: left;
clear: right;
clear: both;
clear: inline-start;
clear: inline-end;

/* Global values */
clear: inherit;
clear: initial;
clear: unset;
```

### Werte

- `none`
  - : Der Umfluss von vorherigen Elementen wird nicht beendet.
- `left`
  - : Der Umfluss von vorherigen Elementen wird auf der linken Seite beendet.
- `right`
  - : Der Umfluss von vorherigen Elementen wird auf der rechten Seite beendet.
- `both`
  - : Der Umfluss von vorherigen Elementen wird auf beiden Seiten beendet.
- `inline-start`
  - : Beendet die Fließeigenschaft des Elementes, das nach unten an den Startrand eines seines enthaltenden Blocks verschoben wird. Wenn die Textrichtung `ltr` (von links nach rechts) ist, dann wird es linksseitig sein. Falls die Textrichtung `rtl` (von rechts nach links) ist, dann wird es rechtsseitig sein.
- `inline-end`
  - : Beendet die Fließeigenschaft des Elementes, das nach unten an den Endrand eines seines enthaltenden Blocks verschoben wird. Wenn die Textrichtung `ltr` (von links nach rechts) ist, dann wird es linksseitig sein. Falls die Textrichtung `rtl` (von rechts nach links) ist, dann wird es rechtsseitig sein.
- `inherit`
  - : Der Wert des Elternelements wird geerbt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### clear: left

#### HTML

```html
<div class="wrapper">
  <p class="black">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet diam. Duis mattis varius dui. Suspendisse eget dolor.</p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="left">This paragraph clears left.</p>
</div>
```

#### CSS

```css
.wrapper{
  border:1px solid black;
  padding:10px;
}
.left {
  border: 1px solid black;
  clear: left;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width: 20%;
}
.red {
  float: left;
  margin: 0;
  background-color: pink;
  width:20%;
}
p {
  width: 50%;
}
```

#### Ergebnis

{{ EmbedLiveSample('clear-left','100%','250') }}

### clear: right

#### HTML

```html
<div class="wrapper">
  <p class="black">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet diam. Duis mattis varius dui. Suspendisse eget dolor.</p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
  <p class="right">This paragraph clears right.</p>
</div>
```

#### CSS

```css
.wrapper{
  border:1px solid black;
  padding:10px;
}
.right {
  border: 1px solid black;
  clear: right;
}
.black {
  float: right;
  margin: 0;
  background-color: black;
  color: #fff;
  width:20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width:20%;
}
p {
  width: 50%;
}
```

#### Ergebnis

{{ EmbedLiveSample('clear-right','100%','250') }}

### clear: both

#### HTML

```html
<div class="wrapper">
  <p class="black">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet diam. Duis mattis varius dui. Suspendisse eget dolor. Fusce pulvinar lacus ac dui.</p>
  <p class="red">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus sit amet diam. Duis mattis varius dui. Suspendisse eget dolor.</p>
  <p class="both">This paragraph clears both.</p>
</div>
```

#### CSS

```css
.wrapper{
  border:1px solid black;
  padding:10px;
}
.both {
  border: 1px solid black;
  clear: both;
}
.black {
  float: left;
  margin: 0;
  background-color: black;
  color: #fff;
  width:20%;
}
.red {
  float: right;
  margin: 0;
  background-color: pink;
  width:20%;
}
p {
  width: 45%;
}
```

#### Ergebnis

{{ EmbedLiveSample('clear-both','100%','300') }}

## Spezifikationen

| Spezifikation                                                                                    | Status                                           | Kommentar                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#float-clear', 'float and clear')}} | {{Spec2('CSS Logical Properties')}} | Die Werte `inline-start` und `inline-end` hinzugefügt.         |
| {{SpecName('CSS2.1', 'visuren.html#flow-control', 'clear')}}                 | {{Spec2('CSS2.1')}}                         | Keine signifikanten Änderungen, jedoch werden Details geklärt. |
| {{SpecName('CSS1', '#clear', 'clear')}}                                             | {{Spec2('CSS1')}}                         | Ursprüngliche Definition                                       |

## Browser Kompatibilität

{{Compat("css.properties.clear")}}

## Siehe auch

- [Boxmodell](/de/docs/Web/CSS/Boxmodell "CSS/box_model")
