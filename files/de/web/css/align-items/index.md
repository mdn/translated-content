---
title: align-items
slug: Web/CSS/align-items
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Flexible Boxes
  - Layout
  - NeedsExample
  - Referenz
  - Web
translation_of: Web/CSS/align-items
---
{{ CSSRef("CSS Flexible Boxes") }}

## Übersicht

Die `align-items` [CSS](/de/docs/Web/CSS) Eigenschaft richtet Flexelemente der aktuellen Flexlinie genauso wie {{cssxref("justify-content")}} aus, jedoch in senkrechter Richtung.

{{cssinfo}}

Siehe die [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes) für weitere Eigenschaften und Informationen.

## Syntax

```css
/* Am Kreuzungsstart ausrichten */
align-items: flex-start;

/* Am Kreuzungsende ausrichten */
align-items: flex-end;

/* Elemente um die Kreuzungsachse zentrieren */
align-items: center;

/* Basislinien der Elemente ausrichten */
align-items: baseline;

/* Elemente dehnen, um sie einzupassen */
align-items: stretch;

/* Globale Werte */
align-items: inherit;
align-items: initial;
align-items: unset;
```

### Werte

- `flex-start`
  - : Der Rand der Querachse des Flexelements grenzt an den Startrand der Querachse der Zeile.
- `flex-end`
  - : Der Rand der Querachse des Flexelements grenzt an den Endrand der Querachse der Zeile.
- `center`
  - : Die Außenabstandsbox des Flexelements wird innerhalb der Zeile auf der Querachse zentriert. Falls die vertikale Größe des Elements größer ist als der Flexcontainer, überragt es die Ränder gleichmäßig in beiden Richtungen.
- `baseline`
  - : Alle Flexelemente werden an deren Grundlinien ausgerichtet. Das Element mit dem größten Abstand zwischen seinem Startrand der Querachse und der Grundlinie grenzt an den Startrand der Zeile.
- `stretch`
  - : Flexelemente werden gedehnt, sodass die horizontale Größe der Außenabstandsbox des Elements mit der Zeile übereinstimmt, wobei Breiten- und Höhenbegrenzungen berücksichtigt werden.

### Formale Syntax

{{csssyntax}}

## Beispiele

TBD

## Spezifikationen

| Spezifikation                                                                    | Status                               | Kommentar                |
| -------------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{ SpecName('CSS3 Flexbox', '#align-items', 'align-items') }} | {{ Spec2('CSS3 Flexbox') }} | Ursprüngliche Definition |

## Browser Kompatibilität

### Support im Flex-Layout

{{Compat("css.properties.align-items.flex_context")}}

### Support im Grid-Layout

{{Compat("css.properties.align-items.grid_context")}}

\[1] Firefox unterstützt bis Version 28 nur einzeiliges Flexbox Layout. Um Flexbox Unterstützung für Firefox 18 und 19 zu aktivieren, muss die Einstellung `layout.css.flexbox.enabled` in `about:config` auf `true` gesetzt werden.

\[2] In Internet Explorer 10-11 (aber nicht 12+), falls Spaltenflexelemente `align-items: center;` gesetzt haben und ihr Inhalt zu groß ist, überfließen sie die Grenzen ihres Containers. Siehe [Flexbug #2](https://github.com/philipwalton/flexbugs#2-column-flex-items-set-to-align-itemscenter-overflow-their-container) für mehr Informationen.

## Siehe auch

- [Verwendung von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes "CSS/Using_CSS_flexible_boxes")
