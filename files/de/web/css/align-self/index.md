---
title: align-self
slug: Web/CSS/align-self
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Flexible Boxes
  - Layout
  - NeedsExample
  - Referenz
translation_of: Web/CSS/align-self
---
{{CSSRef}}

## Übersicht

Die `align-self` [CSS](/de/docs/Web/CSS "CSS") Eigenschaft richtet Flexelemente der aktuellen Flexzeile aus und überschreibt dabei den Wert von {{cssxref("align-items")}}. Falls der Querachsenabstand irgendeines Flexelements auf `auto` gesetzt ist, wird `align-self` ignoriert.

{{cssinfo}}

Siehe die [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes) für weitere Eigenschaften und Informationen.

## Syntax

```css
/* Schlüsselwort Werte */
align-self: auto
align-self: flex-start
align-self: flex-end
align-self: center
align-self: baseline
align-self: stretch

/* Globale Werte */
align-self: inherit;
align-self: initial;
align-self: unset;
```

### Werte

- `auto`
  - : Verwendet den {{cssxref("align-items") }} Wert des Elternelements oder `stretch`, falls das Element kein Elternelement besitzt.
- `flex-start`
  - : Der Rand der Querachse des Flexelements grenzt an den Startrand der Querachse der Zeile.
- `flex-end`
  - : Der Rand der Querachse des Flexelements grenzt an den Endrand der Querachse der Zeile.
- `center`
  - : Die Außenabstandsbox des Flexelements wird innerhalb der Zeile auf der Querachse zentriert. Falls die vertikale Größe des Elements größer ist als der Flexcontainer, überragt es die Ränder gleichmäßig in beiden Richtungen.
- `baseline`
  - : Alle Flexelemente werden an deren Grundlinien ausgerichtet. Das Element mit dem größten Abstand zwischen seinem Startrand der Querachse und der Grundlinie grenzt an den Startrand der Zeile.
- `stretch`
  - : Flexelemente werden gedehnt, sodass die horizontale Größe der Außenabstandsbox des Elements mit der Zeile ist übereinstimmt, wobei Breiten- und Höhenbegrenzungen berücksichtigt werden.

### Formale Syntax

{{csssyntax}}

## Spezifikationen

| Spezifikation                                                                                        | Status                                       | Kommentar                |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------ |
| {{ SpecName('CSS3 Box Alignment', '#align-self-property', 'align-self') }} | {{ Spec2('CSS3 Box Alignment') }} | Ursprüngliche Definition |

## Browser Kompatibilität

### Support im Flex-Layout

{{Compat("css.properties.align-self.flex_context")}}

### Support im Grid-Layout

{{Compat("css.properties.align-self.grid_context")}}

\[1] Firefox unterstützt bis Version 28 nur einzeiliges Flexbox Layout. Um Flexbox Unterstützung für Firefox 18 und 19 zu aktivieren, muss die Einstellung `layout.css.flexbox.enabled` in `about:config` auf `true` gesetzt werden.

## Siehe auch

- [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes "CSS/Using_CSS_flexible_boxes")
