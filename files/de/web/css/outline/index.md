---
title: outline
slug: Web/CSS/outline
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Outline
  - Layout
  - Referenz
  - recipe:css-shorthand-property
translation_of: Web/CSS/outline
---
{{CSSRef}}

Das **`outline`** [CSS](/de/docs/Web/CSS) [Eigenschaftskürzel](/de/docs/Web/CSS/Shorthand_properties) setzt alle outline Eigenschaften in einer einzigen Deklaration.

{{EmbedInteractiveExample("pages/css/outline.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`outline-color`](/de/docs/Web/CSS/outline-color)
- [`outline-style`](/de/docs/Web/CSS/outline-style)
- [`outline-width`](/de/docs/Web/CSS/outline-width)

## Syntax

```css
/* style */
outline: solid;

/* color | style */
outline: #f66 dashed;

/* style | width */
outline: inset thick;

/* color | style | width */
outline: green solid 3px;

/* Global values */
outline: inherit;
outline: initial;
outline: unset;
```

Die `outline` Eigenschaft kann mit einem, zwei oder drei der unten aufgeführten Werte angegeben werden. Die Reihenfolge der Werte spielt dabei keine Rolle.

> **Hinweis:** Der Umriss ist für viele Elemente unsichtbar, wenn sein Stil nicht definiert ist. Dies liegt daran, dass der Stil standardmäßig auf keinen Stil eingestellt ist: `none`. Eine bemerkenswerte Ausnahme bilden `input` Elemente, die von den Browsern als Standard-Stil vorgegeben werden.

### Values

- `<'outline-color'>`
  - : Legt die Farbe des Umrisses fest. Standardeinstellung ist die `currentcolor` (aktuelle Farbe), wenn sie nicht vorhanden ist. Siehe {{cssxref("outline-color")}}.
- `<'outline-style'>`
  - : Legt den Stil des Umrisses fest. Standardeinstellung ist `none`, wenn nicht vorhanden. Siehe {{cssxref("outline-style")}}.
- `<'outline-width'>`
  - : Legt die Dicke der Umrisslinie fest. Standardeinstellung ist `medium`, wenn nicht vorhanden. Siehe {{cssxref("outline-width")}}.

## Beschreibung

[Borders](/de/docs/Web/CSS/border) und `outline` sind sehr ähnlich. Allerdings unterscheiden sich die Umrisse von den Grenzen in den folgenden Punkten:

- Outlines nehmen nie Raum ein, da sie außerhalb des Inhalts eines Elements gezeichnet werden.
- Gemäß der Spezifikation müssen Umrisse nicht rechteckig sein, obwohl sie es normalerweise sind.

Wie bei allen Kurzform-Eigenschaften werden alle ausgelassenen Unterwerte auf ihren [Initialwert](/de/docs/Web/CSS/Initialwert) gesetzt.

## Bedenken zu Zugänglichkeit

Wenn Sie `outline` den Wert von `0` oder `none` zuweisen, wird der Standard-Fokussierungsstil des Browsers entfernt. Wenn ein Element mit ihm interagiert werden kann, muss es einen sichtbaren Fokusindikator haben. Sorgen Sie für eine offensichtliche Fokusgestaltung, wenn der Standardfokusstil entfernt wird.

- [How to Design Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/)
- WCAG 2.1: [Understanding Success Criterion 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beschreibung

### Verwendung von Umrissen zum Setzen eines Fokusstils

#### HTML

```html
<a href="#">This link has a special focus style.</a>
```

#### CSS

```css
a {
  border: 1px solid;
  border-radius: 3px;
  display: inline-block;
  margin: 10px;
  padding: 5px;
}

a:focus {
  outline: 4px dotted #e73;
  outline-offset: 4px;
  background: #ffa;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_outline_to_set_a_focus_style", "100%", 60)}}

## Spezifikationen

| Spezifikation                                                                    | Status                               | Kommentar         |
| -------------------------------------------------------------------------------- | ------------------------------------ | ----------------- |
| {{SpecName('CSS3 Basic UI', '#outline', 'outline')}}             | {{Spec2('CSS3 Basic UI')}} | Keine Änderung.   |
| {{SpecName('CSS2.1', 'ui.html#propdef-outline', 'outline')}} | {{Spec2('CSS2.1')}}             | Anfangsdefinition |

## Browser Kompatibilität

{{Compat("css.properties.outline")}}
