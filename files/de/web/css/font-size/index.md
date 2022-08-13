---
title: font-size
slug: Web/CSS/font-size
tags:
  - CSS
  - CSS Font
  - CSS-Eigenschaft
  - CSS-Schrift
  - Reference
translation_of: Web/CSS/font-size
---
{{CSSRef}}

Die **`font-size`**-[CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert die Schriftgöße. Eine Änderung der Schriftgröße kann die Größe anderer Partien beeinflussen, da sie dazu benutzt wird, den Wert der `em`- und `ex`-{{cssxref("&lt;length&gt;")}}-Einheiten zu berechnen.

```css
/* <absolute-size>-Werte */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* <relative-size>-Werte */
font-size: smaller;
font-size: larger;

/* <length>-Werte */
font-size: 12px;
font-size: 0.8em;

/* <percentage>-Werte */
font-size: 80%;

/* Globale Werte */
font-size: inherit;
font-size: initial;
font-size: unset;
```

```html hidden
<div id="container">
  <p id="xx-small">xx-small</p>
  <p id="x-small">x-small</p>
  <p id="small">small</p>
  <p id="medium">medium</p>
  <p id="large">large</p>
  <p id="x-large">x-large</p>
  <p id="xx-large">xx-large</p>
  <p id="twelve-px">12px</p>
  <div id="parent-twelve-px">
    12px
    <p id="smaller">smaller</p>
    <p id="larger">larger</p>
    <p id="zero-dot-eight-em">0.8em</p>
  </div>
  <div id="parent-twenty-four-px">
    24px
    <p id="smaller">smaller</p>
    <p id="larger">larger</p>
    <p id="zero-dot-eight-em">0.8em</p>
  </div>
</div>
```

```css hidden
#container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

div > p {
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin: 8px;
  padding: 8px;
}

#parent-twelve-px,
#parent-twenty-four-px {
  display: flex;
  border: 1px solid black;
  padding: 8px;
  margin: 8px;
}

#parent-twelve-px {
  font-size: 12px;
}

#parent-twenty-four-px {
  font-size: 24px;
}

#xx-small {
  font-size: xx-small;
}

#x-small {
  font-size: x-small;
}

#small {
  font-size: small;
}

#medium {
  font-size: medium;
}

#large {
  font-size: large;
}

#x-large {
  font-size: x-large;
}

#xx-large {
  font-size: xx-large;
}

#smaller {
  font-size: smaller;
}

#larger {
  font-size: larger;
}

#twelve-px {
  font-size: 12px;
}

#zero-dot-eight-em {
  font-size: 0.8em;
}
```

{{EmbedLiveSample("font-size", 1200, 180, "", "", "example-outcome-frame")}}

{{cssinfo}}

## Syntax

Die `font-size`-Eigenschaft kann auf zwei Weisen spezifiziert werden:

- durch ein einzelnes Schlüsselwort, das entweder eine [absolute](#absolute-size) oder [relative](#relative-size) Größe darstellt
- durch einen [`<length-percentage>`](#<length-percentage>)-Wert

### Werte

- `xx-small, x-small, small, medium, large, x-large, xx-large`
  - : Ein Satz von Schlüsselwörtern absoluter Größe, basierend auf der vom Benutzer festgelegten Schriftgröße (welche `medium`entspricht). Ähnlich der HTML-Tags `<font size="1">` bis `<font size="7">`, bei denen die benutzerdefinierte Größe `<font size="3">` entspricht.
- `larger, smaller`
  - : Größer oder kleiner als die Schriftgröße des Elternelements; grob das Verhältnis, das benutzt wird, um die obigen absoluten Schlüsselwörter zu unterscheiden.
- `<length-percentage>`
  - : Ein positiver {{cssxref("&lt;length&gt;")}}- oder {{cssxref("&lt;percentage&gt;")}}-Wert. Werden die Einheiten der `<length>`-Werte durch `em` oder `ex` spezifiziert, ist die Größe relativ definiert zur Schriftgröße des Elternelements des gefragten Elements. Zum Beispiel entspricht 0.5em der Hälfte der Schriftgröße des aktuellen Elternelements. Werden die Einheiten in `rem` spezifiziert, ist die Größe relativ definiert zur Schriftgröße des {{HTMLElement("html")}}-(Wurzel-)Elements.\<percentage>-Werte beziehen sich auf die Schriftgröße des Elternelements.

Am Besten werden Werte benutzt, die relativ zur benutzerdefinierten Schriftgröße stehen. Absolute Werte in Form von Längen mit Einheiten, außer `em` oder `ex`, sollten vermieden werden. Müssen trotzdem solche absoluten Werte benutzt werden, ist `px` anderen Einheiten vorzuziehen, weil seine Bedeutung nicht abhängig davon, was das Betriebssystem (meist fälschlicherweise) für die Bildschirmauflösung hält, variiert.

### Formale Syntax

{{csssyntax}}

## Mögliche Ansätze

Es gibt einige verschiedene Arten, die Schriftgröße zu spezifizieren, in Form von Schlüsselwörtern oder numerischen Werten für Pixel oder ems. Je nachdem, was die Ansprüche einer Webseite sind, kann die richtige Methode gewählt werden.

### Schlüsselwörter

Schlüsselwörter sind eine gute Möglichkeit die Größe von Schriften im Web festzulegen. Indem ein Schlüsselwort für die Schriftgröße des body-Elements festgelegt wird, ist es möglich überall auf der restlichen Webseite relative Schriftgrößen zu benutzen, was einen befähigt, auf einfache Weise die Schrift auf der ganzen Seite entsprechend zu vergrößern oder zu verkleinern.

### Pixel

Das Festlegen der Schriftgröße in Pixel-Werten (`px`) ist eine gute Wahl, wenn Pixel-Genauigkeit gefordert ist. Ein px-Wert ist statisch und stellt eine Möglichkeit dar, die unabhängig von Betriebssystem und Browser ist und dem Browser unveränderlich mitteilt, die Buchstaben in genau der spezifizierten Höhe an Pixeln darzustellen. Das Ergebnis kann sich je nach Browser leicht unterscheiden, da diese eventuell verschiedene Algorithmen verwenden, um den selben Effekt zu erzielen.

Verschiedene Schriftgrößeneinstellungen können auch kombiniert werden. Zum Beispiel, wenn ein Elternelement `16px` festlegt und sein Kindelement `larger` spezifiziert, dann wird das Kindelement größer dargestellt als das Elternelement auf der Seite.

> **Hinweis:** Die Schriftgröße in Pixeln festzulegen, ist _[nicht barrierefrei](https://de.wikipedia.org/wiki/Barrierefreies_Internet)_, weil der Benutzer infolge dessen die Schriftgröße nicht über den Browser ändern kann. Zum Beispiel möchten Benutzer mit Sehschwäche die Schriftgröße vielleicht viel größer einstellen als vom Web-Designer ausgewählt. Die Benutzung von Pixeln für Schriftgrößen sollte vermieden werden, wenn ein allumfassendes Design gefordert ist.

### Ems

Eine weitere Möglichkeit, die Schriftgröße festzulegen, ist die Verwendung von `em`-Werten. Die Größe eines `em`-Wertes ist dynamisch. Beim Spezifizieren der `font-size`-Eigenschaft entspricht ein `em` der für das gefragte Elternelement festgelegten Schriftgröße. Wird die Schriftgröße nirgendwo anders auf der Seite festgelegt, dann gilt die vom Browser definierte Größe, die oft 16px entspricht. Demnach gilt im Normalfall 1em = 16px, also 2em = 32px. Wenn dem body-Element eine Schriftgröße von 20px zugewiesen wird, dann gilt 1em = 20px und 2em = 40px. Es ist zu beachten, dass der Wert 2 notwendigerweise ein Multiplikator der aktuellen em-Größe ist.

Um das em-Äquivalent für einen beliebigen benötigten Pixel-Wert zu berechnen, kann die folgende Formel benutzt werden:

```plain
em = gewünschter Pixel-Wert des Elements / Elternelementschriftgröße in Pixeln
```

Angenommen die Schriftgröße des Body der Seite entspricht 16px. Wenn die gewünschte Schriftgröße 12px ist, dann sollten 0.75em spezifiziert werden (da 12/16 = 0,75). Es verhält sich ähnlich, wenn eine Schriftgröße von 10px gewollt ist; dann sollte 0.625em spezifiziert werden (10/16 = 0,625) und für 22px sollten es 1.375em (22/16) sein.

Em ist eine sehr nützliche CSS-Einheit, da es seine Länge automatisch relativ zur vom Leser gewählten Schrift anpasst.

Ein wichtiger Hinweis: em-Werte können zu bisweilen auch extremen Steigerungen führen wie das folgende HTML und CSS zeigen:

```css
html {
  font-size: 62.5%; /* font-size 1em = 10px bei normaler Browser-Einstellung */
}
span {
  font-size: 1.6em;
}
```

```html
<div>
<span>Outer <span>inner</span> outer</span>
</div>
```

Das Ergebnis ist:

{{EmbedLiveSample("Ems", 400, 40)}}

Angenommen, dass `font-size` vom Browser als 16px festgelegt wird, dann würden die Wörter "outer" mit 16px dargestellt, das Wort "inner" aber mit 25.6px. Das liegt daran, dass die Schriftgröße des inneren Spans 1.6em entspricht, was relativ zum Elternelement gilt, welches wiederum relativ zu dessen Elternelement steht. Dieses Verhalten wird auch **compounding** (Steigerung/Aufzinsung) genannt.

### Rems

`Rem`-Werte wurden eingeführt, um das compunding-Problem zu umgehen. `Rem`-Werte sind relativ zum `html`-Wurzelelement, nicht zum Elternelement. Mit anderen Worten ermöglicht es, eine Schriftgröße in einer relativen Weise zu spezifizieren ohne durch das Elternelement beeinflusst zu werden und so das Compunding zu verhindern.

Das folgende CSS ist nahezu identisch mit dem vorherigen Beispiel. Die einzige Ausnahme ist, dass die Einheit nun `rem` ist.

```css
html {
  font-size: 62.5%; /* font-size 1em = 10px bei normaler Browser-Einstellung */
}
span {
  font-size: 1.6rem;
}
```

Anschließend wird dieses CSS auf das selbe HTML angewandt, das wie folgt aussieht:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 40)}}

Bei diesem Beispiel erscheinen die Worte "outer inner outer" alle mit 16px (angenommen, dass die Schriftgröße des Browsers beim Standardwert von 16px verblieben ist).

## Beispiele

### Beispiel 1

```css
/* Paragrafentext auf sehr groß setzen */
p { font-size: xx-large }

/* h1-(level 1 heading)-Text auf 2,5 mal die Größe
 * des umliegenden Textes setzen */
h1 { font-size: 250% }

/* setzt in span-Tags eingeschlossenen Text auf 16px */
span { font-size: 16px; }
```

### Beispiel 2

```css
.small {
 font-size: xx-small;
}
.larger {
 font-size: larger;
}
.point {
 font-size: 24pt;
}
.percent {
 font-size: 200%;
}
```

```html
<h1 class="small">small-H1</h1>
<h1 class="larger">larger-H1</h1>
<h1 class="point">24pt-H1</h1>
<h1 class="percent">200%-H1</h1>
```

#### Live-Test

{{EmbedLiveSample('Beispiel_2','600','200')}}

## Bemerkungen

`Em`- und `ex`-Einheiten in der {{Cssxref("font-size")}}-Eigenschaft verhalten sich relativ zur Schriftgröße des Elternelements (im Gegensatz zu allen anderen Einheiten, die relativ zur Schriftgröße des Elements sind). Das bedeutet, dass `em`-Einheiten und Prozentangaben das selbe als Wert für {{Cssxref("font-size")}} bewirken.

## Spezifikationen

| Spezifikation                                                                            | Status                                   | Kommentar                             |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------- |
| {{SpecName('CSS3 Fonts', '#font-size-prop', 'font-size')}}             | {{Spec2('CSS3 Fonts')}}         | Keine Veränderung                     |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'font-size')}}     | {{Spec2('CSS3 Transitions')}} | Definiert `font-size` als animierbar. |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-size', 'font-size')}} | {{Spec2('CSS2.1')}}                 | Keine Veränderung                     |
| {{SpecName('CSS1', '#font-size', 'font-size')}}                         | {{Spec2('CSS1')}}                 | Ursprüngliche Definition              |

## Browser-Kompatibilität

{{Compat("css.properties.font-size")}}
