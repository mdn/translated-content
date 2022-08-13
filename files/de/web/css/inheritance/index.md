---
title: Vererbung
slug: Web/CSS/inheritance
tags:
  - CSS
  - Guide
  - Web
translation_of: Web/CSS/inheritance
original_slug: Web/CSS/Vererbung
---
## Übersicht

Die Übersicht jeder [CSS Eigenschaft Definition](/de/docs/Web/CSS/CSS_Referenz "en/CSS_Reference") gibt an, ob jene Eigenschaft standardmäßig vererbt ist ("Vererbt: Ja") oder nicht ("Vererbt: Nein"). Dies steuert, was passiert, falls kein Wert für eine Eigenschaft eines Elements angegeben wird.

## Vererbte Eigenschaften

Falls kein Wert für eine **vererbte Eigenschaft** für ein Element angegeben wurde, erhält das Element den [berechneten Wert](/de/docs/Web/CSS/Berechneter_Wert "en/CSS/computed_value") dieser Eigenschaft des Elternelements. Nur das Wurzelelement des Dokuments erhält den in der Übersicht angegebenen [Initialwert](/de/docs/Web/CSS/Initialwert "en/CSS/initial_value").

Ein typisches Beispiel für eine vererbte Eigenschaft ist die {{ Cssxref("color") }} Eigenschaft. Für die gegebene Stilregel:

```css
p { color: green }
```

und den Markup:

```html
<p>Dieser Absatz beinhaltet <em>hervorgehobenen Text</em>.</p>
```

werden die Wörter "hervorgehobenen Text" in grün erscheinen, da das `em` Element den Wert der {{ Cssxref("color") }} Eigenschaft vom `p` Element erbt. Es erhält _nicht_ den Initialwert der Eigenschaft (welcher die Farbe des Wurzelelements ist, falls die Seite keine Farbe definiert).

## Nicht vererbte Eigenschaften

Falls kein Wert für eine **nicht vererbte Eigenschaft** (in Mozilla Code manchmal auch **rücksetzende Eigenschaft** genannt) für ein Element angegeben wurde, erhält das Element den [Initialwert](/de/docs/Web/CSS/Initialwert "en/CSS/initial_value") dieser Eigenschaft (wie in der Übersicht der Eigenschaft angegeben).

Ein typisches Beispiel für eine nicht vererbte Eigenschaft ist die {{ Cssxref("border") }} Eigenschaft. Für die gegebene Stilregel:

```css
 p { border: medium solid }
```

und den Markup:

```html
  <p>Dieser Absatz beinhaltet <em>hervorgehobenen Text</em>.</p>
```

werden die Wörter "hervorgehobenen Text" keinen Rahmen haben (da der Initialwert von {{ Cssxref("border-style") }} `none` ist).

## Hinweise

Das {{ Cssxref("inherit") }} Schlüsselwort erlaubt es Autoren, die Vererbung explizit anzugeben. Dies funktioniert sowohl für vererbte als auch nicht vererbte Eigenschaften.

## Siehe auch

- [CSS Referenz](/de/docs/Web/CSS/CSS_Referenz "CSS Reference")
- CSS Schlüsselkonzepte:
  [CSS Syntax](/de/docs/Web/CSS/Syntax "Syntax"),
  [Spezifität](/de/docs/Web/CSS/Spezifität "Spezifität") und
  [Vererbung](/de/docs/Web/CSS/Vererbung "Vererbung"),
  das [Boxmodell](/de/docs/Web/CSS/Boxmodell "Boxmodell"),
  [Layoutmodi](/de/docs/Web/CSS/Layoutmodi "CSS Layoutmodi") und
  [visuelle Formatierungsmodelle](/de/docs/Web/Guide/CSS/Visuelles_Formatierungsmodell "Visuelles Formatierungsmodell")
  und [Abstandzusammenfallen](/de/docs/Web/CSS/Boxmodell/Abstandzusammenfallen_meistern "Abstandzusammenfallen"),
  or the [initiale](/de/docs/Web/CSS/Initialwert "Initialwert"),
  [berechnete](/de/docs/Web/CSS/berechneter_Wert "berechneter Wert"),
  [verwendete](/de/docs/Web/CSS/verwendeter_Wert "verwendeter Wert")
  and [tatsächliche](/de/docs/Web/CSS/tatsächlicher_Wert "tatsächlicher Wert") Werte.
  Definitions of [Wertsyntax](/de/docs/Web/CSS/Wertdefinitionssyntax "Wertdefinitionssyntax"),
  [Kurzschreibweiseeigenschaften](/de/docs/Web/CSS/Kurzschreibweiseeigenschaften "Kurzschreibweiseeigenschaften")
  and [ersetzte Elemente](/de/docs/Web/CSS/ersetztes_Element "Ersetztes Element").
- {{ Cssxref("inherit") }}
