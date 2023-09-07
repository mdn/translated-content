---
title: text-overflow
slug: Web/CSS/text-overflow
---

{{ CSSRef() }}

## Sumário

A propriedade `text-overflow` do [CSS](/pt-BR/CSS) determina como o conteúdo que ultrapassou a sua div e que não é mostrado ao usuário deve ser exibido. Ele pode ser cortado, mostrar reticências ou até mesmo exibir qualquer string definida pelo autor.

![text-overflow.png](/@api/deki/files/5846/=text-overflow.png)

O corte acontece na borda da caixa; para cortar no limite de caracteres de uma string personalizada, pode-se usar (`''`).

Essa propriedade afeta apenas o conteúdo que está ultrapassando o bloco ou a div no sentido da linha horizontal (não corta o texto na parte de baixo de um bloco ou div, por exemplo). O texto pode ultrapassar ou transbordar quando utilizado '`white-space:nowrap`' ou quando uma palavra for muito grande.

Essa propriedade do CSS não força um estouro para que ele ocorra. Para que isso aconteça, é necessário que o autor utilize algumas propriedades adicionais no elemento, como setar a propriedade overflow para hidden.

{{cssinfo}}

## Syntaxe

```
Formal syntax: {{csssyntax("text-overflow")}}
```

```
/* One-value syntax: the value describe the overflow performed at the end of the line (right end if ltr, left end if rtl) */
text-overflow: clip
text-overflow: ellipsis
text-overflow: "…"

/* Two-value syntax: the first value describes the overflow at the left end of the line,
                     the second at the right end. Directionality has no influence */

text-overflow: clip ellipsis
text-overflow: "…" "…"

text-overflow: inherit
```

### Values

- `clip`
  - : This keyword value indicates to truncate the text at the limit of the [content area](/pt-BR/CSS/box_model), therefore the truncation can happen in the middle of a character. To truncate at the transition between two characters, the empty string value (`''`) must be used. The value `clip` is the default for this property.
- `ellipsis`
  - : This keyword value indicates to display ellipses (`'…'`, `U+2026 Horizontal Ellipsis`) to represent clipped text. The ellipsis is displayed inside the [content area](/pt-BR/CSS/box_model), shortening more the size of the displayed text. If there is not enough place to display ellipsis, they are clipped.
- `<string>` {{ experimental_inline() }}
  - : The {{cssxref("&lt;string&gt;")}} to be used to represent clipped text. The string is displayed inside the [content area](/pt-BR/CSS/box_model), shortening more the size of the displayed text. If there is not enough place to display the string itself, it is clipped.

## Examples

```css
p {
  white-space: nowrap;
  width: 100%;
  overflow: hidden; /* "overflow" value must be different from "visible" */

  text-overflow: ellipsis;
}
```

<table class="standard-table">
  <thead>
    <tr>
      <th colspan="1" rowspan="2" scope="col">CSS value</th>
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
      <td style="direction: ltr">
        <div
          style="float: left; font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;&#x27;;"
        >
          123456
        </div>
      </td>
      <td style="font-family: monospace">54321</td>
      <td style="direction: rtl">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;&#x27;;"
        >
          1234567890
        </div>
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
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">.4321</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
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
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">6543.</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: clip &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
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
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">…43.</td>
      <td style="direction: rtl">
        <div
          style="
            font-family: monospace;
            white-space: nowrap;
            max-width: 3.35em;
            overflow: hidden;
            text-overflow: ellipsis &#x27;
            .&#x27; ;
          "
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' clip</code></td>
      <td style="font-family: monospace">,3456</td>
      <td style="direction: ltr">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27; clip;"
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">,4321</td>
      <td style="direction: rtl">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27; clip;"
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' ellipsis</code></td>
      <td style="font-family: monospace">,34…</td>
      <td style="direction: ltr">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27;ellipsis;"
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">,43…</td>
      <td style="direction: rtl">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27;ellipsis;"
        >
          1234567890
        </div>
      </td>
    </tr>
    <tr>
      <td><code>text-overflow: ',' '.'</code></td>
      <td style="font-family: monospace">,34.</td>
      <td style="direction: ltr">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27; &#x27;.&#x27;;"
        >
          1234567890
        </div>
      </td>
      <td style="font-family: monospace">,53.</td>
      <td style="direction: rtl">
        <div
          style="font-family: monospace; white-space: nowrap; max-width: 3.35em; overflow: hidden; text-overflow: &#x27;,&#x27; &#x27;.&#x27;;"
        >
          1234567890
        </div>
      </td>
    </tr>
  </tbody>
</table>

### <br>Using the abbr tag of HTML5 along with text-overflow

We have the example of the use of abbr tag inside a div with width 250px;

```css
div {
  width: 250px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
}
```

```html
<div>
  <abbr title="https://developer.mozilla.org/pt-BR/docs/Web/CSS/text-overflow"
    >https://developer.mozilla.org/pt-BR/docs/Web/CSS/text-overflow</abbr
  >
</div>
```

The full path of the URL will be displayed over the mouse, and the screen will be printed as follows: `https://developer.mozilla.org/pt-BR/`...

## Specifications

| Specification                                                | Status                 | Comment |
| ------------------------------------------------------------ | ---------------------- | ------- |
| {{ SpecName('CSS3 UI', '#text-overflow', 'text-overflow') }} | {{ Spec2('CSS3 UI') }} |         |

A previous version of this interface reached the _Candidate Recommendation_ status. As some not-listed-at-risk features needed to be removed, the spec was demoted to the _Working Draft_ level, explaining why browsers implemented this property unprefixed, though not at the CR state.

## Compatibilidade com navegadores

{{Compat("css.properties.text-overflow")}}

## See also

- [CSS Reference](/pt-BR/CSS/CSS_Reference) index
- Related CSS properties: {{ cssxref("overflow") }}, {{ cssxref("white-space") }}
