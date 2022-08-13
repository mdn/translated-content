---
title: box-shadow
slug: Web/CSS/box-shadow
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Hintergrund
  - Referenz
translation_of: Web/CSS/box-shadow
---
{{CSSRef}}

## Übersicht

Die [CSS](/de/docs/Web/CSS)-Eigenschaft `box-shadow`beschreibt einen oder mehrere Schatteneffekte als eine kommaseparierte Liste. Sie erlaubt es, den Rahmen fast jedes Elements einen Schatten werfen zu lassen. Falls ein {{cssxref("border-radius")}} für das Element mit einem Schlagschatten angegeben ist, übernimmt der Schatten diese abgerundeten Ecken. Die z-Anordnung mehrerer Schlagschatten ist die gleiche wie bei mehreren [Textschatten](/de/docs/Web/CSS/text-shadow) (der zuerst angegebene Schatten ist der oberste).

[Box-shadow-Generator](/de/docs/Web/CSS/CSS_Boxmodell/Box-shadow_Generator) ist ein interaktives Werkzeug, das es erlaubt, einen Schlagschatten zu generieren.

{{cssinfo}}

## Syntax

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Beliebige Anzahl an Schatten, durch Kommas getrennt */
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

### Werte

- `inset`
  - : Falls nicht angegeben (Standardwert), wird angenommen, dass der Schatten ein Schlagschatten ist (als ob die Box über dem Inhalt schweben würde).
    Die Angabe des Schlüsselworts `inset`ändert den Schatten so, dass er innerhalb des Rahmens angezeigt wird (als ob der Inhalt innerhalb der Box nach innen gedrückt wäre). Innere Schatten werden innerhalb des Randes (sogar transparenten) gezeichnet, über dem Hintergrund aber unterhalb des Inhalts.
- `<offset-x>` `<offset-y>`
  - : Diese zwei {{cssxref("&lt;length&gt;")}}-Werte setzen den Schattenabstand. `<offset-x>` beschreibt die horizontale Distanz. Negative Werte platzieren den Schatten links des Elements. `<offset-y>` beschreibt die vertikale Distanz. Negative Werte platzieren den Schatten oberhalb des Elements. Siehe {{cssxref("&lt;length&gt;")}} für mögliche Einheiten.
    Falls beide Werte `0` sind, wird der Schatten hinter dem Element platziert (und können einen Unschärfeeffekt erzeugen, falls `<blur-radius>` und/oder `<spread-radius>` gesetzt sind).
- `<blur-radius>`
  - : Dies ist ein dritter {{cssxref("&lt;length&gt;")}}-Wert. Je größer dieser Wert ist, desto größer ist die Unschärfe, sodass der Schatten größer und schwächer wird. Negative Werte sind nicht erlaubt. Falls nicht angegeben, ist der Wert `0` (der Rand des Schattens wird scharf dargestellt).
- `<spread-radius>`
  - : Dies ist ein vierter {{cssxref("&lt;length&gt;")}}-Wert. Positive Werte erweitern den Schatten und machen ihn größer, negative Werte verkleinern den Schatten. Falls nicht angegeben, ist der Wert `0` (der Schatten hat die gleiche Größe wie das Element).
- `<color>`
  - : Siehe {{cssxref("&lt;color&gt;")}}-Werte für mögliche Schlüsselwörter und Notationen.
    Falls nicht angegeben, hängt die Farbe vom Browser ab – sie ist normalerweise der Wert der {{cssxref("color")}}-Eigenschaft, aber Safari zeichnet in diesem Fall aktuell einen transparenten Schatten.

### Interpolation

Jeder Schatten innerhalb der Liste (`none` wird als eine leere Liste interpretiert) wird über die Farbkomponente (als Farbe) interpoliert und x-, y-, Unschärfe- und (falls zutreffend) Ausbreitungskomponenten (als Länge). Für jeden Schatten gilt, falls beide angegebenen Schatten `inset` sind oder nicht, muss der interpolierte Schatten diesbezüglich mit den angegebenen Schatten übereinstimmen. Falls ein Schatten eines beliebigen Paares von angegebenen Schatten `inset` ist und der andere nicht, ist die gesamte Schattenliste nicht interpolierbar. Falls die Listen von Schatten verschiedene Längen haben, wird die kürzere Liste mit Schatten aufgefüllt, deren Farbe `transparent` ist, alle Längen `0` und dessen `inset` (oder nicht) mit dem der längeren Liste übereinstimmt.

### Formale Syntax

{{csssyntax}}

## Live-Beispiele

- [box-shadow-Test](http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html)
- [box-shadow-Tutorial und -Beispiele](http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/)

```css
box-shadow: 60px -16px teal;
```

```css
box-shadow: 10px 5px 5px black;
```

```css
box-shadow: 3px 3px red, -1em 0 0.4em olive;
```

```css
box-shadow: inset 5em 1em gold;
```

```css
box-shadow: 0 0 1em gold;
```

```css
box-shadow: inset 0 0 1em gold;
```

```css
box-shadow: inset 0 0 1em gold, 0 0 1em red;
```

## Spezifikationen

| Spezifikation                                                                    | Status                                   | Kommentar                |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------ |
| {{SpecName('CSS3 Backgrounds', '#box-shadow', 'box-shadow')}} | {{Spec2('CSS3 Backgrounds')}} | Ursprüngliche Definition |

## Browser-Kompatibilität

{{Compat("css.properties.box-shadow")}}
