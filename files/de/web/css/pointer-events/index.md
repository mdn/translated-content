---
title: pointer-events
slug: Web/CSS/pointer-events
translation_of: Web/CSS/pointer-events
---
{{CSSRef}}

## Zusammenfassung

Die CSS-Eigenschaft** `pointer-events`** erlaubt es dem Autor zu steuern, unter welchen Umständen (wenn überhaupt) ein spezifisches grafisches Element [target](/de/docs/Web/API/event.target) eines Mouse-Events wird. Wenn die Eigenschaft nicht gesetzt ist, werden die Eigenschaften von `visiblePainted` auf den SVG Inhalt angewandt.

Der Wert `none` ist nicht nur Indikator, dass das Element kein Ziel für Mouse-Events ist, sondern weist den Mouse-Event zusätzlich an, "durch" das Element zu gehen und stattdessen auf was auch immer auch "darunterliegend" ist, zu zielen.

{{cssinfo}}

## Syntax

```css
/* Keyword values */
pointer-events: auto;
pointer-events: none;
pointer-events: visiblePainted;
pointer-events: visibleFill;
pointer-events: visibleStroke;
pointer-events: visible;
pointer-events: painted;
pointer-events: fill;
pointer-events: stroke;
pointer-events: all;

/* Global values */
pointer-events: inherit;
pointer-events: initial;
pointer-events: unset;
```

### Werte

- `auto`
  - : Das Element verhält sich als ob die `pointer-events Eigenschaft nicht spezifiziert wurde. Im SVG-Inhalt hat dieser Wert und der Wert visiblePainted` `den selben Effekt.`
- `none`
  - : Das Element ist nie das Ziel von Mouse-Events; trotzdem werden abstämmige Elemente angezielt, sofern Ihre `pointer-events `einen abweichenden Wert haben. In diesem Fall lösen Mouse-Events während Ihrem Weg zu/von den Nachkömmlingen während der Event-Capture/[bubble](/de/docs/Web/API/event.bubbles)-Phasen gegebenenfalls die Event-Listener des übergeordneten Elements aus.
- `visiblePainted`
  - : Nur SVG. Das Element kann nur Ziel eines Mouse-Events werden, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist, sich der Mauszeiger im Inneren (z. B. 'fill') befindet und die `fill-`Eigenschaft einen anderen Wert als `none` hat oder wenn sich der Mauszeiger über einem Umgrenzung (z. B. 'stroke') des Elements befindet und die `stroke-`Eigenschaft einen anderen Wert als `none `hat.
- `visibleFill`
  - : Nur SVG. Das Element kann nur Ziel eines Mouse-Events werden, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und sich der Mauszeiger im Inneren (z. B. 'fill') befindet. Der Wert der `fill-`Eigenschaft beinflusst die Event-Verarbeitung nicht.
- `visibleStroke`
  - : Nur SVG. Das Element kann nur Ziel eines Mouse-Events werden, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und sich der Mauszeiger über einem Umgrenzung (z. B. 'stroke') des Elements befindet. Der Wert der `stroke-`Eigenschaft beinflusst die Event-Verarbeitung nicht.
- `visible`
  - : Nur SVG. Das Element kann nur Ziel eines Mouse-Events werden, wenn die `visibility` Eigenschaft auf `visible` gesetzt ist und sich der Mauszeiger entweder im Inneren (z. B. 'fill') oder über einem Umgrenzung (z. B. 'stroke') des Elements befindet. Die Werte der `stroke- `und `fill-`Eigenschaft beinflussen die Event-Verarbeitung nicht.
- `painted`
  - : Nur SVG. Das Element kann nur Ziel eines Mouse-Events werden, wenn sich der Mauszeiger im Inneren (z. B. 'fill') des Elements befindet, und die `fill-`Eigenschaft einen anderen Wert als `none` hat, oder sich der Mauszeiger über einem Umgrenzung (z. B. 'stroke') des Elements befindet, und die `stroke-`Eigenschaft einen anderen Wert als `none `hat. Die Werte der `stroke- `und `fill-`Eigenschaft beinflussen die Event-Verarbeitung nicht.
- `fill`
  - : Nur SVG. Das Element kann nur Ziel eines Mouse-Events werden, wenn sich der Mauszeiger im Inneren (z. B. 'fill') des Elements befindet. Die Werte der `stroke- `und `fill-`Eigenschaft beinflussen die Event-Verarbeitung nicht.
- `stroke`
  - : Nur SVG. Das Element kann nur Ziel eines Mouse-Events werden, wenn sich der Mauszeiger über einem Umgrenzung (z. B. 'stroke') des Elements befinden. Die Werte der `stroke- `und `fill-`Eigenschaft beinflussen die Event-Verarbeitung nicht.
- `all`
  - : Nur SVG. Das Element kann nur Ziel eines Mouse-Events werden, wenn sich der Mauszeiger entweder im Inneren (z. B. 'fill') oder über einem Umgrenzung (z. B. 'stroke') des Elements befinden. Die Werte der `stroke- `und `fill-`Eigenschaft beinflussen die Event-Verarbeitung nicht.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel 1

```css
/* Beispiel 1: Unterbinden die Reaktion von `img` auf alle Mouse-Events wie z. B. dragging, hovering, clicking */
img {
  pointer-events: none;
}
```

### Beispiel 2

Unterbinden eine Reaktion des Link-Tags mit der Eigenschaft href=http\://example.com.

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://example.com">example.com</a></li>
</ul>
```

```css
a[href="http://example.com"] {
  pointer-events: none;
}
```

{{EmbedLiveSample('Example_2', "500", "100")}}

## Anmerkungen

Es gilt zu beachten: Durch `pointer-events` zu verhindern, dass ein Element Ziel eines Mouse-Events wird, bedeutet nicht, dass Mouse-Event-Listeners auf diesem Element nicht ausgelößt _werden_ oder _werden können_. Wenn bei einem der Kinder des Elements `pointer-events` explizit gesetzt wurde, um _zu erlauben_, dass dieses Ziel eines Mouse-Events wird, werden alle auf das Kind gerichteten Events entlang der Elternkette durch das Elternelement wandern und wohlmöglich Events des Elternelements auslösen. Natürlich wird jede Mausinteraktion auf einem Punkt des Bildschirms, welcher vom Eltern- aber nicht vom Kindelement bedeckt ist, weder vom Kind noch vom Elternelement eingefangen (sie wird durch das Elternelement _hindurchgehen und_ auf das zielen, was immer "darunterliegend" ist).

Wir würden gerne feingranularere Kontrolle (als lediglich `auto` und `none`) über die Teile eines Elements welche Mouse-Events "einfangen" und wann, im HTML bereitstellen. Um uns bei der Entscheidung zu helfen, welche `pointer-events` für HTML weiter ausgebaut werden sollten, oder wenn Sie irgend welche speziellen Wünsche haben, was Ihnen diese Eigenschaft ermöglichen sollte, dann fügen Sie diese bitte dem Use cases Abschnitt dieser [Wiki Seite](https://wiki.mozilla.org/SVG:pointer-events) hinzu (Machen Sie sich über die Ordentlichkeit keine Sorgen).

Diese Eigenschaft kann auch benutzt werden um bessere Bildraten beim Scrollen zu erzielen. Tatsächlich, während des Scrollens fährt die Maus über einige Elemente auf denen der [hover](/de/docs/Web/CSS/:hover)-Effekt angewendet wird. Diese Effekte hingegen bleiben meist unbemerkt und resultieren trotzdem meist in hakeligen Scrollen. `pointer-events: none` auf den `body` anzuwenden deaktiviert Mouse-Events inkl. `hover` und wirkt sich positiv auf die Flüssigkeit des Scrollens.

## Spezifikationen

| Spezifikationen                                                                                          | Status                   | Kommentar |
| -------------------------------------------------------------------------------------------------------- | ------------------------ | --------- |
| {{SpecName('SVG1.1', 'interact.html#PointerEventsProperty', 'pointer-events')}} | {{Spec2('SVG1.1')}} |           |

Seine Erweiterung für HTML-Elemente, trotz Präsenz in frühen Entwürfen von CSS Basic User Interface Module Level 3, wurde auf sein [level 4](http://wiki.csswg.org/spec/css4-ui#pointer-events) erhoben.

## Browser-Kompatibilität

{{Compat}}

\[1] Vor Firefox 41, standardmäßig deaktiviert. Seit Firefox 41, standardmäßig auf Desktop aktiviert, allerdings nur in Nightly builds.

## Siehe auch

- Das SVG-Attribut {{SVGAttr("pointer-events")}}
- [WebKit Specs PointerEventsProperty](http://webkit.org/specs/PointerEventsProperty.html) erweitert für den Gebrauch im (X)HTML Inhalt
- [60fps scrolling using pointer-events: none](http://www.thecssninja.com/javascript/pointer-events-60fps)
