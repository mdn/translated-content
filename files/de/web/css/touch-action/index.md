---
title: touch-action
slug: Web/CSS/touch-action
tags:
  - CSS
  - CSS Eigenschaft
  - Referenz
  - Web
translation_of: Web/CSS/touch-action
---
{{ CSSRef }}{{SeeCompatTable}}

## Übersicht

Die CSS-Eigenschaft `touch-action` spezifiziert, ob das Standardverhalten des Browsers ausgeführt wird oder nicht (z. B. durch Scrollen oder Zoomen).

{{cssinfo}}

## Syntax

{{csssyntax}}

### Werte

- `auto`
  - : Der User-Agent führt das voreingestellte Verhalten für Berührungen aus, wie die Manipulation des Elements durch Scrollen oder Zoomen bei Berührungen, die in dem Element beginnen.
- `none`
  - : Berührungen, die auf dem Element beginnen, lösen nicht das Standardverhalten aus.
- `pan-x`
  - : Der User-Agent reagiert nur auf Berührungen, die das horizontale Scrollen des nächsten scrollbaren Elements auslösen.
- `pan-y`
  - : Der User-Agent reagiert nur auf Berührungen, die das vertikale Scrollen des nächsten scrollbaren Elements auslösen.
- `manipulation`
  - : Der User-Agent reagiert nur auf Berührungen, die dem Scrollen oder dem ununterbrochenen Zoomen dienen.

## Beispiel

```css
.list {
  width: 200px;
  height: 50px;
  overflow-x: scroll;
}

.list > .entry {
  touch-action: pan-x;
}
```

## Spezifikationen

| Spezifikation                                                                                                | Status                               | Anmerkung |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------ | --------- |
| {{SpecName('Pointer Events', '#the-touch-action-css-property', 'touch-action')}} | {{Spec2('Pointer Events')}} |           |

## Browser Kompatibilität

{{compat("css.properties.touch-action")}}
