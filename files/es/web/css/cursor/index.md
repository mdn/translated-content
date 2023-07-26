---
title: cursor
slug: Web/CSS/cursor
---

{{ CSSRef() }}

### Resumen

La propiedad [CSS:cursor](/es/CSS/cursor) especifica el tipo de cursor que se mostrara cuando este se encuentre sobre un elemento.

- [CSS:Valor_inicial](/es/CSS/Valor_inicial): `CSS:auto`
- Se aplica a: todos los elementos
- [CSS:inheritance](/es/CSS/inheritance): Si
- Porcentaje: N/A
- Media: [CSS:Media:Visual](/es/CSS/Media/Visual), [CSS:Media:Interactivo](/es/CSS/Media/Interactivo)
- [CSS:Valor_calculado](/es/CSS/Valor_calculado):como sea especificado con URLs relativos convertidos a URLs absolutos.

### Sintaxis

```
cursor: <std-cursor-name> | <url> [<x> <y>]? [, <url> [<x> <y>]?]* | CSS:inherit ;
```

```
cursor: [<url> [<x> <y>]?,]*  <std-cursor-name> ;
```

### Values

- \<url> [ ]?
  - : URL del cursor seleccionado mas posición opcional. Mas de un URL puede provocar problemas, in caso de que algunos tipode de imágenes de cursor no puedan ser usados.vea [Uso_de_URL_como_valor_de_la_propiedad_cursor](/es/Uso_de_URL_como_valor_de_la_propiedad_cursor) para mas detalles.
- \<std-cursor-name>
  - : Algunos nombres de cursores se encuentra en la siguiente tabla.

#### Supported CSS standard values

<table class="standard-table">
  <tbody>
    <tr>
      <th>Categoría</th>
      <th>nombre de CSS</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td rowspan="3">General</td>
      <td style="cursor: auto"><code>auto</code></td>
      <td>
        El browser (user agent) determina el cursor que mostrara basado en el
        contenido presente.<br />E.g. equivalent to <code>text</code> when
        hovering text
      </td>
    </tr>
    <tr>
      <td style="cursor: default"><code>default</code></td>
      <td>default cursor (typically an arrow)</td>
    </tr>
    <tr>
      <td style="cursor: none"><code>none</code></td>
      <td>no cursor is rendered</td>
    </tr>
    <tr>
      <td rowspan="5">Links &#x26; status</td>
      <td style="cursor: context-menu"><code>context-menu</code></td>
      <td>
        cursor indicating that a context menu is available under the cursor
      </td>
    </tr>
    <tr>
      <td style="cursor: help"><code>help</code></td>
      <td>cursor indicating help is available</td>
    </tr>
    <tr>
      <td style="cursor: pointer"><code>pointer</code></td>
      <td>cursor used when over links (typically a hand)</td>
    </tr>
    <tr>
      <td style="cursor: progress"><code>progress</code></td>
      <td>
        cursor indicating that the program is busy in the background but the
        user can still interact with the interface (unlike for
        <code>wait</code>)
      </td>
    </tr>
    <tr>
      <td style="cursor: wait"><code>wait</code></td>
      <td>
        cursor indicating the program is busy (sometimes an hourglass or a
        watch)
      </td>
    </tr>
    <tr>
      <td rowspan="4">Selection</td>
      <td style="cursor: cell"><code>cell</code></td>
      <td>cursor indicating that cells can be selected</td>
    </tr>
    <tr>
      <td style="cursor: crosshair"><code>crosshair</code></td>
      <td>cross cursor, often used to indicate selection in a bitmap</td>
    </tr>
    <tr>
      <td style="cursor: text"><code>text</code></td>
      <td>cursor indicating text can be selected (typically an I-beam)</td>
    </tr>
    <tr>
      <td style="cursor: vertical-text"><code>vertical-text</code></td>
      <td>
        cursor indicating that vertical text can be selected (typically a
        sideways I-beam)
      </td>
    </tr>
    <tr>
      <td rowspan="5">Drag and drop</td>
      <td style="cursor: alias"><code>alias</code></td>
      <td>cursor indicating an alias or shortcut is to be created</td>
    </tr>
    <tr>
      <td style="cursor: copy"><code>copy</code></td>
      <td>cursor indicating that something can be copied</td>
    </tr>
    <tr>
      <td style="cursor: move"><code>move</code></td>
      <td>the hovered object may be moved</td>
    </tr>
    <tr>
      <td style="cursor: no-drop"><code>no-drop</code></td>
      <td>cursor showing that a drop is not allowed at the current location</td>
    </tr>
    <tr>
      <td style="cursor: not-allowed"><code>not-allowed</code></td>
      <td>cursor showing that something cannot be done</td>
    </tr>
    <tr>
      <td rowspan="15">Resize &#x26; scrolling</td>
      <td style="cursor: all-scroll"><code>all-scroll</code></td>
      <td>
        cursor showing that something can be scrolled in any direction (panned)
      </td>
    </tr>
    <tr>
      <td style="cursor: col-resize"><code>col-resize</code></td>
      <td>cursor for resizing columns horizontally</td>
    </tr>
    <tr>
      <td style="cursor: e-resize"><code>e-resize</code></td>
      <td>cursor for resizing the right edge of a box</td>
    </tr>
    <tr>
      <td style="cursor: ew-resize"><code>ew-resize</code></td>
      <td>cursor for resizing left or right</td>
    </tr>
    <tr>
      <td style="cursor: n-resize"><code>n-resize</code></td>
      <td>cursor for resizing the top edge of a box</td>
    </tr>
    <tr>
      <td style="cursor: ne-resize"><code>ne-resize</code></td>
      <td>cursor for resizing the top right corner of a box</td>
    </tr>
    <tr>
      <td style="cursor: nesw-resize"><code>nesw-resize</code></td>
      <td>cursor for resizing in the top-right or bottom-left directions</td>
    </tr>
    <tr>
      <td style="cursor: ns-resize"><code>ns-resize</code></td>
      <td>cursor for resizing up or down</td>
    </tr>
    <tr>
      <td style="cursor: nw-resize"><code>nw-resize</code></td>
      <td>cursor for resizing the top left corner of a box</td>
    </tr>
    <tr>
      <td style="cursor: nwse-resize"><code>nwse-resize</code></td>
      <td>cursor for resizing in the top-left or bottom-right directions</td>
    </tr>
    <tr>
      <td style="cursor: row-resize"><code>row-resize</code></td>
      <td>cursor for resizing rows vertically</td>
    </tr>
    <tr>
      <td style="cursor: s-resize"><code>s-resize</code></td>
      <td>cursor for resizing the bottom edge of a box</td>
    </tr>
    <tr>
      <td style="cursor: se-resize"><code>se-resize</code></td>
      <td>cursor for resizing the bottom right corner of a box</td>
    </tr>
    <tr>
      <td style="cursor: sw-resize"><code>sw-resize</code></td>
      <td>cursor for resizing the bottom left corner of a box</td>
    </tr>
    <tr>
      <td style="cursor: w-resize"><code>w-resize</code></td>
      <td>cursor for resizing the left edge of a box</td>
    </tr>
  </tbody>
</table>

#### Extended Gecko CSS values

| CSS name                                         | Description                                                                                                                   | Deprecation |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [`-moz-alias`](/es/CSS/-moz-alias)               | replaced by standard value `alias` as described in the previous table                                                         | Gecko 1.8a6 |
| [`-moz-cell`](/es/CSS/-moz-cell)                 | replaced by standard value `cell` as described in the previous table                                                          | Gecko 1.8a6 |
| [`-moz-context-menu`](/es/CSS/-moz-context-menu) | replaced by standard value `context-menu` as described in the previous table                                                  | Gecko 1.8a6 |
| [`-moz-copy`](/es/CSS/-moz-copy)                 | replaced by standard value `copy` as described in the previous table                                                          | Gecko 1.8a6 |
| [`-moz-grab`](/es/CSS/-moz-grab)                 | a cursor value that should indicate that an element or an object in a webpage can be grabbed                                  |             |
| [`-moz-grabbing`](/es/CSS/-moz-grabbing)         | a cursor value that should indicate that an element or an object is currently being grabbed                                   |             |
| [`-moz-spinning`](/es/CSS/-moz-spinning)         | replaced by standard value `progress` as described in the previous table                                                      | Gecko 1.7.1 |
| [`-moz-zoom-in`](/es/CSS/-moz-zoom-in)           | used to indicate that an element or an object in a webpage is actually being resized, enlarged or is actually being magnified |             |
| [`-moz-zoom-out`](/es/CSS/-moz-zoom-out)         | used to indicate that an element or an object in a webpage is actually being resized, reduced or is actually being zoomed out |             |

### Examples

[Ver El Ejemplo Vivo](/samples/cssref/cursor.html)

```
Inline:

<span style="cursor: crosshair">Some Text</span>

External:

.pointer {
 cursor: pointer;
}
.move {
 cursor: move;
}
```

### Notes

While this property works on older browsers, not all values are fully supported.

### Specifications

- [CSS 2.1](http://www.w3.org/TR/CSS21/ui.html#propdef-cursor)
- [css3-ui](http://www.w3.org/TR/css3-ui/#cursor)

### Browser compatibility

| Browser           | Lowest Version (`<std-cursor-name>`) | Lowest Version (`<url>`) |
| ----------------- | ------------------------------------ | ------------------------ |
| Internet Explorer | 4                                    | 6 (only `.cur` files)    |
| Firefox           | 1.0                                  | 1.5                      |
| Netscape          | 6                                    | 8                        |
| Opera             | 7                                    | -                        |
| Konqueror         | 3.1                                  | 3.1                      |
| Safari            | 1.2                                  | 1.2                      |
| Safari (Win)      | 3.0                                  | 3.0                      |
