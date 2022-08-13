---
title: column-span
slug: Web/CSS/column-span
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Mehrspalten
  - Referenz
translation_of: Web/CSS/column-span
---
{{CSSRef("CSS Multi-columns")}}

## Übersicht

Die [CSS](/de/docs/CSS) Eigenschaft `column-span` bestimmt die Laufweite eines Elements inerhalb eines Mehrspaltigen Containers.

{{cssinfo}}

## Syntax

{{csssyntax}}

    column-span: none
    column-span: all

    column-span: inherit

### Werte

- `none`
  - : Das Element fliesst nicht über mehrere Spalten hinweg.
- `all`
  - : Das Element fliesst über sämtliche Spalten hinweg. Der Inhalt davor wird automatisch zwischen den Spalten ausgeglichen.

## Beispiele

```css
h1, h2 {
  column-span: all;
}
```

## Spezifikation

| Spezifikation                                                                        | Status                               | Anmerkung                |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------ |
| {{ SpecName('CSS3 Multicol', '#column-span0', 'column-width') }} | {{ Spec2('CSS3 Multicol') }} | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat("css.properties.column-span")}}
