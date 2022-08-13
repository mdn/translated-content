---
title: '@keyframes'
slug: Web/CSS/@keyframes
translation_of: Web/CSS/@keyframes
---
{{CSSRef}}

## Zusammenfassung

Durch die CSS-at-Regel `@keyframes` kann der Autor die einzelnen Schritte einer CSS-Animationssequenz festlegen, indem er Keyframes (oder Wegpunkte) setzt, die während der Sequenz an bestimmten Punkten erreicht werden. Das ermöglicht eine spezifischere Kontrolle über die Zwischenschritte einer Animationssequenz gegenüber dem Ergebnis einem dem Browser überlassenen, automatisch berechneten Ablauf.

Die at-Regel `@keyframes` kann mit dem CSS-Objekt {{domxref("CSSKeyframesRule")}} erlangt werden.

Um Keyframes zu benutzen, erstellt man eine `@keyframes`-Regel mit einem Namen, der dann durch die {{ cssxref("animation-name") }}-Eigenschaft genutzt wird, um einer Animation einen Keyframe zuzuweisen. Jede `@keyframes`-Regel beinhaltet eine Style-Liste aus Keyframe-Selektoren, von denen jeder eine Prozentzahl enthält, die angibt, zu welchem relativen Zeitpunkt während der Animation der Keyframe auftritt, sowie einen Block mit den jeweiligen Style-Informationen für diesen Keyframe.

Die Reihenfolge der Keyframes ist egal, denn sie werden in der Reihenfolge ihrer Prozentzahl verwendet.

### Gültige Keyframe-Liste

Damit ein Keyframe gültig ist, muss er Regeln enthalten, die zumindest die Zeiten `0%` (oder `from`) und `100%` (oder `to`) enthalten (d.h. der Start- und Endstatus der Animation). Wenn beide Zeiten nicht angegeben sind, ist die Keyframe-Deklaration ungültig; sie wird vom Parser ignoriert und kann nicht als Animation verwendet werden.

Wenn Eigenschaften beschrieben werden, die nicht in den Keyframe-Regeln animiert werden können, werden sie ignoriert. Unterstützte Eingeschaften in dem Block werden weiterhin animiert.

### Doppelte Deklarationen

Wenn mehrere Keyframe-Sets mit einem Namen existieren, gilt der letzte definierte. `@keyframes`-Regeln sind nicht kaskadierend, Animationen nehmen also niemals Keyframes von mehr als einer definierten Regel.

Wenn ein Zeitpunkt in der Animation doppelt deklariert ist, gilt der letzte Keyframe dieses Zeitpunkts in der `@keyframes`-Regel. Mehrere Regeln derselben Zeit sind nicht kaskadierend.

### Wenn Eigenschaften aus manchen Keyframes ausgelassen werden

Jede Eigenschaft, die nicht in jedem Keyframe spezifiert wird, ist interpoliert (mit der Ausnahme von denen, die nicht interpoliert werden können und daher aus der gesamten Animation weggelassen werden). Zum Beispiel:

```css
@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
```

Hier wird die {{ cssxref("top") }}-Eigenschaft mit Benutzen der `0%`-, `30%-`, und `100%`-Keyframes animiert, und {{ cssxref("left") }} animiert anhand der `0%`-, `68%`-, and `100%`-Keyframes.

Nur Eigenschaften, die in sowohl im `0%`-, als auch im `100%`-Keyframe spezifiziert sind, werden animiert; jede Eigenschaft, die nicht in diesen beiden Keyframes enthalten ist, wird ihren Startwert für die Dauer der Animation behalten.

### Wenn ein Keyframe mehrmals definiert wird

Wenn ein Keyframe mehrmals definiert wird, aber nicht alle Eigenschaften in jedem Keyframe enthalten sind, werden ausschließlich die Werte des letzten Keyframes beachtet, zum Beispiel:

```css
@keyframes identifier {
  0% { top: 0; }
  50% { top: 30px; left: 20px; }
  50% { top: 10px; }
  100% { top: 0; }
}
```

In diesem Beispiel ist der genutzte Wert des `50%`-Keyframe `top: 10px` und alle anderen Werte des ersten Keyframes werden ignoriert.

{{ non-standard_inline }} Kaskadierende Keyframes werden in Firefox ab Version 14 unterstützt. Im oberen Beispiel wird beim `50%`-Keyframe der Wert `left: 20px` beachtet. Dies ist noch nicht in der Spezifikation definiert, wird allerdings gerade diskutiert.

## Syntax

    @keyframes <bezeichner> {
      [ [ from | to | <Prozentzahl> ] [, from | to | <Prozentzahl> ]* block ]*
    }

### Values

- `<Bezeichner>`
  - : Ein Name, der die Keyframe-Liste eindeutig identifiziert. Er muss den CSS-Syntax-Richtlinien für Bezeichner entsprechen.
- `from`
  - : Der Startwert `0%`.
- `to`
  - : Der Endwert `100%`.
- {{cssxref("&lt;percentage&gt;")}}
  - : Eine Prozentzahl, die den Zeitpunkt in der Animationssequenz angibt, an dem der spezifizierte Keyframe gelten soll.

## Beispiel

Siehe [CSS-Animationen](/en/CSS/CSS_animations "en/CSS/CSS_animations") für Beispiele.

## Spezifikationen

| Spezifikation                                                                    | Status                                   | Kommentar |
| -------------------------------------------------------------------------------- | ---------------------------------------- | --------- |
| {{ SpecName('CSS3 Animations', '#keyframes', '@keyframes') }} | {{ Spec2('CSS3 Animations') }} |           |

## Browser-Kompatibilität

{{Compat("css.at-rules.keyframes")}}

## Siehe auch

- [CSS-Animationen benutzen](/de/docs/CSS/Tutorials/Using_CSS_animations "Tutorial about CSS animations")
- {{ domxref("AnimationEvent", "AnimationEvent") }}
