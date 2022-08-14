---
title: '-moz-user-focus'
slug: Web/CSS/-moz-user-focus
tags:
  - CSS
  - CSS Referenz
  - CSS:Mozilla Erweiterungen
  - NeedsBrowserCompatibility
  - NeedsContent
  - NeedsExample
  - NeedsMobileBrowserCompatibility
translation_of: Web/CSS/-moz-user-focus
---
{{Non-standard_header}}

## Übersicht

Die `-moz-user-focus` [CSS](/de/docs/Web/CSS) Eigenschaft wird dazu benutzt, anzugeben, ob das Element den Fokus haben kann.

Durch Setzen ihres Wertes auf `ignore` kann die Fokussierung des Elements deaktiviert werden, was bedeutet, dass der Benutzer das Element nicht aktivieren kann. Das Element wird in der Tabsequenz ausgelassen.

{{cssinfo}}

> **Note:** **Hinweis:** Diese Eigenschaft funktioniert nicht bei XUL {{XULElem("textbox")}} Elementen, weil die `textbox` selbst nie fokussiert werden kann. Stattdessen erzeugt XBL ein anonymes HTML {{HTMLElement("input")}} Element innerhalb der `textbox` und dieses Element ist dasjenige, das den Fokus erhält. Die `textbox` kann auch daran gehindert werden, den Tastaturfokus zu erhalten, indem sein Tabindex auf `-1` gesetzt wird und daran, den Mausfokus zu erhalten, indem die Standardaktion des `mousedown` Ereignisses verhindert wird.

## Syntax

```css
/* Schlüsselwortwerte */
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* Globale Werte */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

### Werte

- `ignore`
  - : Das Element akzeptiert den Tastaturfokus nicht und wird in der Tabreihenfolge ausgelassen.
- `normal`
  - : Das Element kann den Tastaturfokus akzeptieren.
- `select-after`
  - : ?
- `select-before`
  - : ?
- `select-menu`
  - : ?
- `select-same`
  - : ?
- `select-all`
  - : ?
- `none`
  - : ?

### Formale Syntax

{{csssyntax}}

## Spezifikationen

Diese Eigenschaft ist nicht Teil einer Spezifikation. Eine ähnliche Eigenschaft `user-focus` wurde in [frühen Entwürfen eines Vorläufers der CSS3 UI Spezifikation](http://www.w3.org/TR/2000/WD-css3-userint-20000216) vorgeschlagen, jedoch von der Arbeitsgruppe abgelehnt.

## Browser Kompatibilität

{{Compat}}
