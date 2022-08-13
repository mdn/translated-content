---
title: order
slug: Web/CSS/order
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Flexible Boxes
  - Layout
  - NeedsLiveSample
  - Referenz
  - Web
translation_of: Web/CSS/order
---
{{ CSSRef("CSS Flexible Boxes") }}

## Übersicht

Die `order` [CSS](/de/docs/Web/CSS) Eigenschaft gibt die Reihenfolge an, in der Flexelemente innerhalb ihres Flexcontainers dargestellt werden. Elemente werden in aufsteigender Reihenfolge des `order` Werts dargestellt. Elemente mit dem gleichen `order` Wert werden in der Reihenfolge dargestellt, in der sie im Quelltext auftauchen.

> **Note:** **Hinweis:** `order` beeinflusst nur die visuelle Reihenfolge von Elementen und nicht deren logische oder Tab-Reihenfolge. `order` darf nicht bei nicht visuellen Medien wie Sprache verwendet werden.

{{cssinfo}}

Siehe die [Verwendung von flexiblen Boxen](/de/docs/Web/Guide/CSS/Flexible_boxes "/en/CSS/Using_CSS_flexible_boxes") für mehr Informationen.

{{ Note("<code>order</code> ist nur dazu gedacht, die visuelle Reihenfolge festzulegen, nicht die logische Reihenfolge der Elemente. Die Eigenschaft darf nicht auf nicht-visuelle Medien wie beispielsweise Sprache angewendet werden.") }}

## Syntax

```css
/* Nummerische Werte inklusive negativer Zahlen */
order: 5;
order: -5;

/* Globale Werte */
order: inherit;
order: initial;
order: unset;
```

### Werte

- `<integer>`
  - : Repräsentiert die ordinale Position des Flexelements.

{{csssyntax}}

## Beispiele

Einfache HTML-Struktur:

```html
<!DOCTYPE html>
<header>…</header>
<div id='main'>
   <article>…</article>
   <nav>…</nav>
   <aside>…</aside>
</div>
<footer>…</footer>
```

Der folgende CSS Code erzeugt ein klassisches Layout mit zwei Seitenleisten, die einen Inhaltsbereich umschließen. Das Flexible Box Layout Modul erzeugt automatisch Blöcke gleicher vertikaler Größe und verwendet gesamten zur Verfügung stehenden horizontalen Platz.

```css
#main { display: flex; }
#main > article { flex:1;         order: 2; }
#main > nav     { width: 200px;   order: 1; }
#main > aside   { width: 200px;   order: 3; }
```

## Spezifikationen

| Spezifikation                                                                | Status                               | Kommentar                |
| ---------------------------------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{ SpecName('CSS3 Flexbox', '#order-property', 'order') }} | {{ Spec2('CSS3 Flexbox') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.order")}}

\[1] Firefox unterstützt bis Version 28 nur einzeiliges Flexbox Layout. Um Flexbox Unterstützung für Firefox 18 und 19 zu aktivieren, muss die Einstellung `layout.css.flexbox.enabled` in `about:config` auf `true` gesetzt werden.

Firefox verändert aktuell fälschlicherweise die Tab-Reihenfolge der Elemente. Siehe {{bug("812687")}}.

\[2] Im Internet Explorer 10 wird ein flexibler Container durch `display:-ms-flexbox` angegeben, nicht durch `display:flex`.

## Siehe auch

- [Verwenden von CSS Flexible Boxes](/de/docs/Web/Guide/CSS/Flexible_boxes "CSS/Using_CSS_flexible_boxes")
