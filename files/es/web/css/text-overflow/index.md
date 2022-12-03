---
title: text-overflow
slug: Web/CSS/text-overflow
---

{{CSSRef}}

La propiedad de [CSS](/es/docs/Web/CSS) **`text-overflow`** determina como el contenido que se desborda y que no es mostrado, va a hacérsele notar a los usuarios. Puede ser cortado, mostrar una elipsis ('`…`', `U+2026 Horizontal Ellipsis`), o mostrar una cadena de texto personalizada.

{{EmbedInteractiveExample("pages/css/text-overflow.html")}}

La propiedad `text-overflow` no fuerza a que ocurra un desbordamiento. Para hacer que un texto desborde a su contenedor debes poner algunas otras propiedades de CSS. Por ejemplo:

```css
overflow: hidden;
white-space: nowrap;
```

La propiedad `text-overflow` solo afecta al contenido que está rebasando un elemento de contenedor en bloque en su dirección de progresión _inline_ (no así, a un texto que rebase por el _bottom_ del contenedor, por).

## Sintaxis

La propiedad `text-overflow` ha de ser especificada usando uno o dos valores. Si se define solo un valor, este determinará el comportamiento del _overflow_ para el final de la línea (el extremo derecho en un texto izquierda-a-derecha o el extremo izquierdo en un texto derecha-a-izquierda). Si se definen dos valores, el primero hará referencia al comportamiento _overflow_ para para el extremo izquierdo y el segundo al extremo derecho de la línea.

Cada valor se especificará como una de las siguientes opciones:

- Una palabra clave: [`clip`](#clip), [`ellipsis`](#ellipsis), [`fade`](#fade)
- La función [`fade()`](<#fade( \<length\> | \<percentage\> )>), que recibe {{cssxref("&lt;length&gt;")}} o {{cssxref("&lt;percentage&gt;")}} para controlar la distancia de desvanecimiento
- Un [`<string>`](#string).

### Values

- `clip`
  - : The default for this property. This keyword value will truncate the text at the limit of the [content area](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), therefore the truncation can happen in the middle of a character. To clip at the transition between characters you can specify `text-overflow` as an empty string, if that is supported in your target browsers: `text-overflow: '';`.
- `ellipsis`
  - : This keyword value will display an ellipsis (`'…'`, `U+2026 Horizontal Ellipsis`) to represent clipped text. The ellipsis is displayed inside the [content area](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), decreasing the amount of text displayed. If there is not enough space to display the ellipsis, it is clipped.
- `<string>` {{experimental_inline}}
  - : The {{cssxref("&lt;string&gt;")}} to be used to represent clipped text. The string is displayed inside the [content area](/es/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), shortening the size of the displayed text. If there is not enough space to display the string itself, it is clipped.
- `fade` {{experimental_inline}}
  - : This keyword clips the overflowing inline content and applies a fade-out effect near the edge of the line box with complete transparency at the edge.
- `fade( <length> | <percentage> )` {{experimental_inline}}

  - : This function clips the overflowing inline content and applies a fade-out effect near the edge of the line box with complete transparency at the edge.

    The argument determines the distance over which the fade effect is applied. The {{cssxref("&lt;percentage&gt;")}} is resolved against the width of the line box. Values lower than `0` are clipped to `0`. Values greater than the width of the line box are clipped to the width of the line box.

### Formal syntax

{{csssyntax}}

## Examples

### CSS

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* BOTH of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-visible {
  white-space: initial;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  /* Not supported in most browsers,
     see the 'Browser compatibility' section below */
  text-overflow: " [..]";
}
```

### HTML

```html
<p class="overflow-visible">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p class="overflow-clip">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p class="overflow-ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p class="overflow-string">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

### Result

{{EmbedLiveSample('', 300, 220)}}

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="col" style="width: 15em">CSS value</th>
      <th colspan="2" rowspan="1" scope="col" style="text-align: center">
        <code>direction: ltr</code>
      </th>
      <th colspan="2" rowspan="1" scope="col" style="text-align: center">
        <code>direction: rtl</code>
      </th>
    </tr>
    <tr>
      <th scope="col">Expected Result</th>
      <th scope="col">Live result</th>
      <th scope="col">Expected Result</th>
      <th scope="col">Live result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><em>visible overflow</em></td>
      <td style="font-family: monospace">1234567890</td>
      <td style="direction: ltr">
        <div
          style="
            float: left;
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: visible;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">0987654321</td>
      <td>
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: visible;
          "
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: clip</code></td>
      <td style="padding: 1px; font-family: monospace">
        <img
          alt="t-o_clip.png"
          class="default internal"
          src="/@api/deki/files/6056/=t-o_clip.png"
        />
      </td>
      <td style="direction: ltr">
        <div
          style="
            float: left;
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip;
          "
        >
          123456
        </div>
      </td>
      <td style="padding: 1px; font-family: monospace">
        <img
          alt="t-o_clip_rtl.png"
          class="default internal"
          src="/@api/deki/files/6057/=t-o_clip_rtl.png"
        />
      </td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip;
          "
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ''</code></td>
      <td style="font-family: monospace">12345</td>
      <td style="direction: ltr"><div style="">123456</div></td>
      <td style="font-family: monospace">54321</td>
      <td style="direction: rtl">
        <div style="">1234567890</div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ellipsis</code></td>
      <td style="font-family: monospace">1234…</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">…4321</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: '.'</code></td>
      <td style="font-family: monospace">1234.</td>
      <td style="direction: ltr">
        <div style="">1234567890</div>
      </td>
      <td style="font-family: monospace">.4321</td>
      <td style="direction: rtl">
        <div style="">1234567890</div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: clip clip</code></td>
      <td style="font-family: monospace">123456</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip clip;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">654321</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip clip;
          "
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: clip ellipsis</code></td>
      <td style="font-family: monospace">1234…</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip ellipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">6543…</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip ellipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: clip '.'</code></td>
      <td style="font-family: monospace">1234.</td>
      <td style="direction: ltr">
        <div style="">1234567890</div>
      </td>
      <td style="font-family: monospace">6543.</td>
      <td style="direction: rtl">
        <div style="">1234567890</div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ellipsis clip</code></td>
      <td style="font-family: monospace">…3456</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis clip;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">…4321</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis clip;
          "
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ellipsis ellipsis</code></td>
      <td style="font-family: monospace">…34…</td>
      <td style="direction: ltr">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis ellipsis;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">…43…</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis ellipsis;
          "
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ellipsis '.'</code></td>
      <td style="font-family: monospace">…34.</td>
      <td style="direction: ltr">
        <div style="">1234567890</div>
      </td>
      <td style="font-family: monospace">…43.</td>
      <td style="direction: rtl">
        <div style="">1234567890</div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' clip</code></td>
      <td style="font-family: monospace">,3456</td>
      <td style="direction: ltr">
        <div style="">1234567890</div>
      </td>
      <td style="font-family: monospace">,4321</td>
      <td style="direction: rtl">
        <div style="">1234567890</div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' ellipsis</code></td>
      <td style="font-family: monospace">,34…</td>
      <td style="direction: ltr">
        <div style="">1234567890</div>
      </td>
      <td style="font-family: monospace">,43…</td>
      <td style="direction: rtl">
        <div style="">1234567890</div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' '.'</code></td>
      <td style="font-family: monospace">,34.</td>
      <td style="direction: ltr">
        <div style="">1234567890</div>
      </td>
      <td style="font-family: monospace">,53.</td>
      <td style="direction: rtl">
        <div style="">1234567890</div>
      </td>
    </tr>
  </tbody>
</table>

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat("css.properties.text-overflow")}}

## See also

- Related CSS properties: {{cssxref("overflow")}}, {{cssxref("white-space")}}
- CSS properties that control line breaks in words: {{cssxref("overflow-wrap")}}, {{cssxref("word-break")}}
