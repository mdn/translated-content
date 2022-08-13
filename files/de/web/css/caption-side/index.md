---
title: caption-side
slug: Web/CSS/caption-side
tags:
  - CSS
  - CSS Eigenschaft
  - CSS Tabellen
  - Layout
  - Referenz
translation_of: Web/CSS/caption-side
---
{{CSSRef}}

Die [CSS](/de/docs/Web/CSS "CSS") Eigenschaft **`caption-side`** positioniert den Inhalt einer {{HTMLElement("caption") }} einer Tabelle auf der angegebenen Seite.

{{EmbedInteractiveExample("pages/css/caption-side.html")}}

## Syntax

```css
/* Directional values */
caption-side: top;
caption-side: bottom;

/* Warning: non-standard values */
caption-side: left;
caption-side: right;
caption-side: top-outside;
caption-side: bottom-outside;

/* Global values */
caption-side: inherit;
caption-side: initial;
caption-side: unset;
```

Die Eigenschaft `caption-side` property wird als einer der unten aufgeführten Schlüsselwortwerte angegeben.

### Werte

- `top`
  - : Die Überschriftenbox soll oberhalb der Tabelle positioniert werden.
- `bottom`
  - : Die Überschriftenbox soll unterhalb der Tabelle positioniert werden.
- `left` {{ non-standard_inline() }}

  - : Die Überschriftenbox soll links von der Tabelle positioniert werden.

    > **Note:** **Hinweis:** Dieser Wert wurde für CSS 2 vorgeschlagen, aber aus der endgültigen CSS 2.1-Spezifikation entfernt. Er ist nicht standardisiert.

- `right` {{ non-standard_inline() }}

  - : Die Überschriftenbox soll rechts von der Tabelle positioniert werden.

    > **Note:** **Hinweis:** Dieser Wert wurde für CSS 2 vorgeschlagen, aber aus der endgültigen CSS 2.1-Spezifikation entfernt. Er ist nicht standardisiert.

- `top-outside` {{non-standard_inline}}

  - : Das Überschriftenbox sollte oberhalb der Tabelle positioniert werden, während die Breite und das horizontale Ausrichtungsverhalten nicht an das horizontale Layout der Tabelle gebunden sind.

    > **Note:** Die CSS 2.1-Spezifikation stellt fest, dass die CSS 2-Spezifikation ein anderes Verhalten für den `top` Wert beschrieben hat, der in einer zukünftigen Spezifikation durch diesen Wert wieder eingeführt wird.

- `bottom-outside` {{non-standard_inline}}

  - : Das Überschriftenbox sollte unterhalb der Tabelle positioniert werden, während die Breite und das horizontale Ausrichtungsverhalten nicht an das horizontale Layout der Tabelle gebunden sind.

    > **Note:** Die CSS 2.1-Spezifikation stellt fest, dass die CSS 2-Spezifikation ein anderes Verhalten für den `bottom` Wert beschrieben hat, der in einer zukünftigen Spezifikation durch diesen Wert wieder eingeführt wird

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von Beschriftungen oben und unten

#### HTML

```html
<table class="top">
  <caption>Caption ABOVE the table</caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>

<br>

<table class="bottom">
  <caption>Caption BELOW the table</caption>
  <tr>
    <td>Some data</td>
    <td>Some more data</td>
  </tr>
</table>
```

#### CSS

```css
.top caption {
  caption-side: top;
}

.bottom caption {
  caption-side: bottom;
}

table {
  border: 1px solid red;
}

td {
  border: 1px solid blue;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_captions_above_and_below', 'auto', 160)}}

## Spezifikationen

| Spezifikation                                                                                    | Status                                           | Kommentar                                                                                           |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS Logical Properties', '#caption-side', 'caption-side') }} | {{ Spec2('CSS Logical Properties') }} | Definiert die oberen `top` und unteren `bottom` Werte relativ zum Schreibmodus `writing-mode` Wert. |
| {{ SpecName('CSS2.1', 'tables.html#caption-position', 'caption-side') }} | {{ Spec2('CSS2.1') }}                     | Ursprüngliche Definition                                                                            |

## Browser Kompatibilität

{{Compat("css.properties.caption-side")}}
