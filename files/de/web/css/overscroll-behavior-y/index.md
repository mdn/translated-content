---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
translation_of: Web/CSS/overscroll-behavior-y
---
{{CSSRef}}

Die **`overscroll-behavior-y`** CSS Eigenschaft ändert das Browserverhalten, wenn die vertikale Grenze des Scrollbereichs erreicht wurde.

> **Note:** **Eine vollständige Erklärung gibt es auch unter** {{cssxref("overscroll-behavior")}} .

```css
/* Keyword values */
overscroll-behavior: auto; /* default */
overscroll-behavior: contain;
overscroll-behavior: none;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: unset;
```

{{cssinfo}}

## Syntax

Die `overscroll-behavior-y` Eigenschaft kann mit einem der untenstehenden Schlüsselworte definiert werden:

### Werte

- `auto`
  - : Das standardmäßige Scrollüberlaufverhalten wird eingestellt.
- `contain`
  - : Es wird das standardmäßige Scrollüberlaufverhalten im aktuellen Element eingestellt, die Scrollverkettung, d.h. das gelichzeitige Scrollen von darunterliegenden Elementen wird verhindert.
- `none`
  - : Es gibt keine Scrollverkettung zu benachbarten Scrollzonen und das Standard-Scrollverhalten wird verhindert.

### Formale Syntax

{{csssyntax}}

## Beispiele

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Eine vollständige Erklärung gibt es auch unter {{cssxref("overscroll-behavior")}}

## Spezifikationen

| Spezifikation                                                                                                                | Status                                       | Kommentar |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | --------- |
| {{SpecName('Overscroll Behavior', '#propdef-overscroll-behavior-y','overscroll-behavior-y')}} | {{Spec2('Overscroll Behavior')}} |           |

## Browserkompatibilität

{{Compat("css.properties.overscroll-behavior-y")}}

## Siehe auch

- [Scroll-Aktionen überwachen: "Pull-to-Refresh" und Überlaufeffekte individualisieren](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
