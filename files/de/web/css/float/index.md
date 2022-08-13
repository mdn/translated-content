---
title: float
slug: Web/CSS/float
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Positionierung
  - Referenz
  - recipe:css-property
translation_of: Web/CSS/float
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS) Eigenschaft `float` platziert ein Element auf der linken oder rechten Seite seines Containers, so dass Text- und Inline-Elemente um das Element herum angeordnet werden können. Das Element wird aus dem normalen Fluss der Seite entfernt, bleibt aber dennoch ein Teil des Flusses (im Gegensatz zur absoluten Positionierung).

.

{{EmbedInteractiveExample("pages/css/float.html")}}

Ein Floating-Element ist ein Element, bei dem der berechnete Wert von `float` nicht `none` ist.

Da `float` die Verwendung des Blocklayouts impliziert, ändert es in einigen Fällen den berechneten Wert der {{cssxref("display")}} Werte:

| Spezifizierter Wert  | Berechneter Wert |
| -------------------- | ---------------- |
| `inline`             | `block`          |
| `inline-block`       | `block`          |
| `inline-table`       | `table`          |
| `table-row`          | `block`          |
| `table-row-group`    | `block`          |
| `table-column`       | `block`          |
| `table-column-group` | `block`          |
| `table-cell`         | `block`          |
| `table-caption`      | `block`          |
| `table-header-group` | `block`          |
| `table-footer-group` | `block`          |
| `inline-flex`        | `flex`           |
| `inline-grid`        | `grid`           |
| _other_              | _unchanged_      |

> **Note:** **Hinweis:** Wenn Sie diese Eigenschaft von JavaScript als Mitglied des {{domxref("HTMLElement.style")}} Objektsreferenzieren, unterstützen moderne Browser `float`, aber in älteren Browsern müssen Sie es als `cssFloat` buchstabieren, wobei Internet Explorer ab Version 8 und älter `styleFloat` verwenden. Dies war eine Ausnahme von der Regel, dass der Name des DOM-Mitglieds der in camel case (Binnenmajuskel) geschriebene Name des durch Bindestriche getrennten CSS-Namens ist (aufgrund der Tatsache, dass "float" ein reserviertes Wort in JavaScript ist, was sich in der Notwendigkeit zeigt, "class" als "className" und \<label>'s "for" als "htmlFor" zu maskieren).

## Syntax

```css
/* Keyword values */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* Global values */
float: inherit;
float: initial;
float: unset;
```

The `float` property is specified as a single keyword, chosen from the list of values below.

### Values

- `none`
  - : Standardwert. Das Element wird nicht umflossen.
- `left`
  - : Das Element wird nach links gerückt und die Inhalte des umliegenden Elements (containing block) werden rechts vom Element angeordnet.
- `right`
  - : Das Element wird nach rechts gerückt und die Inhalte des umliegenden Elements (containing block) werden links vom Element angeordnet.
- `inline-start`
  - : Das Element muss auf der Anfangsseite seines enthaltenden Blocks fließen. Das ist die linke Seite bei `ltr` Richtungen und die rechte Seite bei `rtl`-Richtungen.
- `inline-end`
  - : Das Element muss auf der Endseite seines enthaltenden Blocks fließen. Das ist die rechte Seite bei `ltr` Richtungen und die linke Seite bei `rtl`-Richtungen.
- `inherit`
  - : Der Wert des Elternelements wird geerbt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wie fließende Elemente positioniert werden

Wie oben erwähnt, wird ein Element, wenn es fließend (floated) ist, wird es aus dem normalen Fluss des Dokuments herausgenommen (obwohl es immer noch Teil des Dokuments bleibt). Es wird nach links oder rechts verschoben, bis es die Kante seines Behälters oder eines anderen schwebenden Elements berührt.

In diesem Beispiel gibt es drei farbige Quadrate. Zwei davon sind nach links und eines nach rechts geschoben. Beachten Sie, dass das zweite "linke" Quadrat rechts vom ersten platziert wird. Weitere Quadrate würden weiter nach rechts gestapelt werden, bis sie den enthaltenden Kasten gefüllt haben, wonach sie in die nächste Zeile umbrechen würden.

Ein schwebendes Element ist mindestens so hoch wie seine höchsten verschachtelten fließenden Kinder. Wir gaben dem Elternteil die Breite von 100% (`width: 100%`) und haben es fließen lassen, um sicherzustellen, dass es hoch genug ist, um seine fließenden Kinder zu umfassen, und um sicherzustellen, dass es die Breite des Elternteils einnimmt, damit wir sein benachbartes Geschwisterkind nicht überdecken müssen.

#### HTML

```html
<section>
  <div class="left">1</div>
  <div class="left">2</div>
  <div class="right">3</div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Morbi tristique sapien ac erat tincidunt, sit amet dignissim
     lectus vulputate. Donec id iaculis velit. Aliquam vel
     malesuada erat. Praesent non magna ac massa aliquet tincidunt
     vel in massa. Phasellus feugiat est vel leo finibus congue.</p>
</section>
```

#### CSS

```css
section {
  border: 1px solid blue;
  width: 100%;
  float: left;
}

div {
  margin: 5px;
  width: 50px;
  height: 150px;
}

.left {
  float: left;
  background: pink;
}

.right {
  float: right;
  background: cyan;
}
```

#### Ergebnis

{{EmbedLiveSample('How_floated_elements_are_positioned','400','180')}}

### Auflösung von floats

Manchmal möchten Sie vielleicht erzwingen, dass ein Element unter alle schwebenden Elemente verschoben wird. Beispielsweise möchten Sie vielleicht, dass Absätze neben den Fließkommazahlen bleiben, aber Überschriften zwingen, auf ihrer eigenen Zeile zu stehen. Siehe {{cssxref("clear")}} für Beispiele.

## Spezifikation

| Spezifikation                                                                                    | Status                                           | Kommentar                                   |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#float-clear', 'float and clear')}} | {{Spec2('CSS Logical Properties')}} | Neue Werte `inline-start` und `inline-end`. |
| {{SpecName('CSS2.1', 'visuren.html#float-position', 'float')}}             | {{Spec2('CSS2.1')}}                         | Keine Änderungen                            |
| {{SpecName('CSS1', '#float', 'float')}}                                             | {{Spec2('CSS1')}}                         | Ursprüngliche Deinition                     |

## Browser Kompatibilität

{{Compat("css.properties.float")}}

## Siehe auch

- [`clear`](/de/CSS/clear)
- [Boxmodell](/de/CSS/Boxmodell)
