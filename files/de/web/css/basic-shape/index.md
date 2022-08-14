---
title: <basic-shape>
slug: Web/CSS/basic-shape
tags:
  - CSS
  - CSS Datentyp
  - CSS Formen
  - Referenz
translation_of: Web/CSS/basic-shape
---
{{CSSRef}}

Der `<basic-shape>` [CSS](/de/docs/Web/CSS) Datentyp stellt eine geometrische Grundform dar. Er kann in den {{cssxref("clip-path")}}, {{cssxref("shape-outside")}} und {{cssxref("offset-path")}} CSS-Eigenschaften verwendet werden.

## Syntax

Die unten aufgelisteten Funktionen definieren `<basic-shape>` -Werte.

Wenn eine Form erstellt wird, definiert sich der Referenzrahmen durch jede CSS-Eigenschaft, die `<basic-shape>` -Werte benutzt. Der Koordinatenursprung für die Form liegt in der oberen linken Ecke des Referenzrahmens, wobei die x-Achse nach rechts und die y-Achse nach unten verläuft. Dieses Koordinatensystem ist in vielen Computergrafiksystemen üblich.

### Form-Funktionen

Die folgenden Formen werden unterstützt. Alle `<basic-shape>` Werte verwenden die funktionale Schreibweise und werden mithilfe der [Wertdefinitionssyntax](/de/docs/Web/CSS/Wertdefinitionssyntax) definiert.

- `inset()`
  - : inset( <shape-arg>{1,4} [round <border-radius>]? )Definiert ein nach innen versetztes Rechteck.Wenn alle vier ersten Argumente vorhanden sind, stellen sie den Versatz des Rechtecks oben, links, rechts und unten dar. Der Versatz bezieht sich auf den Referenzrahmen. Wie auch bei der {{cssxref("margin")}}-Eigenschaft können weniger als vier Werte als Kurzform angegeben werden.Die optionalen {{cssxref("&lt;border-radius&gt;")}}-Argumente definieren abgerundete Ecken für das Rechteck. Auch hier ist die `<border-radius>`-Kurzform-Syntax zulässig.
- `circle(`)
  - : circle( [<shape-radius>]? [at <position>]? )Definiert einen Kreis.Das `<shape-radius>`-Argument stellt den Radius r des Kreises dar, negative Werte sind verboten. Ein Prozentwert bezieht sich auf `sqrt(a^2+b^2)/sqrt(2)`, wobei a und b Höhe und Breite des Referenzrahmens darstellen. Dieser Referenzwert ist die Länge einer Seite eines Quadrats, das dieselbe Fläche wie der Referenzrahmen hat.Das {{cssxref("&lt;position&gt;")}}-Argument definiert den Mittelpunkt des Kreises. Standardmäßig wird der Kreis in der Mitte des Referenzrahmens platziert.
- `ellipse()`
  - : ellipse( [<shape-radius>{2}]? [at <position>]? )Definiert eine Ellipse, deren Hauptachse und Nebenachse entlang der x- oder y-Achsen verlaufen.Das `<shape-radius>` Argument repräsentiert den Radius entlang der x- bzw. y-Achse. Negative Werte sind ungültig. Prozentwerte werden im Verhältnis zur Breite (für die x-Achse) und Höhe (für die y-Achse) des Referenzrahmens bestimmt.Das {{cssxref("&lt;position&gt;")}}-Argument definiert den Mittelpunkt der Ellipse. Standardmäßig wird die Ellipse in der Mitte des Referenzrahmens platziert.

<!---->

- `polygon()`
  - : polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )Definiert ein Vieleck (Polygon).`<fill-rule>` definiert die [Füllregel](/de/docs/Web/SVG/Attribute/fill-rule), die zur Bestimmung der Innenfläche des Polygons verwendet werden soll. Mögliche Werte sind `nonzero` und `evenodd`. Der Standardwert ist `nonzero`.Jedes Argumentpaar der Liste stellt die x- und y-Koordinate einer Ecke des Vielecks dar.
- `path()`
  - : path( [<fill-rule>,]? <string>)Definiert einen [SVG-Pfad](/de/docs/Web/SVG/Attribute/d), also eine Kombination aus Kurven, Strecken und Punkten.`<fill-rule>` definiert die [Füllregel](/de/docs/Web/SVG/Attribute/fill-rule), die zur Bestimmung der Innenfläche des Polygons verwendet werden soll. Mögliche Werte sind `nonzero` und `evenodd`. Der Standardwert ist `nonzero`.`<string>` entspricht dem d-Attribut des SVG-Pfades und ist der SVG-Pfad-Text in Anführungszeichen.

Die Argumente, die oben nicht definiert sind, werden folgendermaßen definiert:

    <shape-arg> = <length> | <percentage>
    <shape-radius> = <length> | <percentage> | closest-side | farthest-side

`closest-side` verwendet den Abstand des Mittelpunkts der Form zur nächsten Seite des Referenzrahmens. Für Kreise ist dies die nächste Seite in beliebiger Richtung. Für Ellipsen ist dies die nächste Seite in Radiusrichtung.

`farthest-side` verwendet die Länge vom Mittelpunkt der Form zur entferntesten Seite der Referenzrahmens. Für Kreise ist dies die entfernteste Seite in beliebiger Richtung. Für Ellipsen ist dies die entfernteste Seite in Radiusrichtung.

## Berechnete Werte von Grundformen

Die Werte in einer `<basic-shape>` Funktion werden wie angegeben berechnet, mit folgenden Ausnahmen:

- Anstelle von ausgelassenen Werten werden Standardwerte verwendet.
- Ein {{cssxref("&lt;position&gt;")}}-Wert in `circle()` oder `ellipse()` wird als ein Versatzpaar (horizontal, dann vertikal) vom Ursprung berechnet, wobei jeder Versatz als Kombination einer absoluten Länge und einem Prozentwert angegeben wird.
- Ein [`<border-radius>`](/de/docs/Web/CSS/border-radius) Wert in `inset()` wird als eine erweiterte Liste aller acht {{cssxref("&lt;length&gt;")}}-Werte oder Prozentwerte berechnet.

## Interpolation von Grundformen

Zur Interpolation zwischen zwei Grundformen werden die folgenden Regeln angewandt. In den Formfunktionen werden alle Werte als Liste interpoliert. Die Listenwerte werden, soweit möglich, als {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} oder {{cssxref("calc")}}-Ausdruck interpoliert. Falls die Listenwerte nicht diesen Typen entsprechen, jedoch identisch sind (wie beispielsweise Zahlen ungleich null an der gleichen Position innerhalb beider Listen), werden diese Werte interpoliert.

- Beide Formen müssen den gleichen Referenzrahmen verwenden.
- Falls beide Formen vom gleichen Typ sind, d. h. vom Typ `ellipse()` oder `circle()`, und keiner der Radien die Schlüsselwörter `closest-side` oder `farthest-side` verwendt, wird zwischen jedem Wert der Formfunktionen interpoliert.
- Falls beide Formen vom Typ `inset()` sind, wird zwischen jedem Wert der Formfunktionen interpoliert.
- Falls beide Formen vom Typ `polygon()` sind, beide Vielecke die gleiche Anzahl an Eckpunkten haben und die gleiche [`<fill-rule>`](/de/docs/Web/SVG/Attribute/fill-rule) verwenden, wird zwischen jedem Wert der Formfunktionen interpoliert.
- In allen anderen Fällen findet keine Interpolation statt.

## Beispiele

### Animiertes Polygon

In diesem Beispiel nutzten wir eine [@keyframes](/de/docs/Web/CSS/@keyframes) Regel, um den Pfad zwischen zwei Vielecken zu animieren. (In diesem Beispiel müssen beide Vielecke dieselbe Anzahl Kanten haben.)

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(red, orange 50px);
  clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
  animation: 4s poly infinite alternate ease-in-out;
  margin: 10px auto;
}

@keyframes poly {
  from {
    clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
  }

  to {
    clip-path: polygon(50% 30%, 100% 0%, 70% 50%, 100% 100%, 50% 70%, 0% 100%, 30% 50%, 0% 0%);
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Animated_polygon','340', '340')}}

## Spezifikationen

| Spezifikation                                                                                            | Status                           | Anmerkung                 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------- |
| {{ SpecName('CSS Shapes', '#basic-shape-functions', '&lt;basic-shape&gt;') }} | {{ Spec2('CSS Shapes') }} | Ursprüngliche Definition. |

## Browser Kompatibilität

{{Compat("css.types.basic-shape")}}

## Siehe auch

- {{cssxref("shape-outside")}}
